/**
 * Bookmark reading for Brave Sync.
 *
 * Fetches and decrypts bookmark entries from the sync server.
 * Bookmarks may be encrypted at the EntitySpecifics level when
 * `encrypt_everything` is enabled.
 */

import { create, fromBinary } from "@bufbuild/protobuf";
import {
  ClientToServerMessageSchema,
  GetUpdatesMessageSchema,
  DataTypeProgressMarkerSchema,
  EntitySpecificsSchema,
  BookmarkSpecifics_Type,
} from "../proto/index.js";
import { sendSyncRequest, type SyncClientOptions } from "../sync/client.js";
import { nigoriDecrypt } from "../crypto/nigori.js";
import { BRAVE_SYNC_CONSTANTS } from "../types.js";

/**
 * Windows epoch offset: seconds between 1601-01-01 and 1970-01-01.
 */
const WINDOWS_EPOCH_OFFSET = BRAVE_SYNC_CONSTANTS.WINDOWS_EPOCH_OFFSET;

/**
 * Convert Windows epoch microseconds to Unix timestamp (seconds).
 *
 * @param windowsMicros - Windows epoch microseconds
 * @returns Unix timestamp in seconds
 */
function windowsEpochMicrosToUnix(windowsMicros: bigint): number {
  return Number(windowsMicros) / 1_000_000 - WINDOWS_EPOCH_OFFSET;
}

/**
 * A decrypted bookmark entry.
 */
export interface BookmarkEntry {
  /** Entity ID from sync server */
  id: string;
  /** Entity version */
  version: bigint;
  /** Bookmark URL (empty for folders) */
  url: string;
  /** Full bookmark title */
  title: string;
  /** Globally unique ID */
  guid: string;
  /** Parent folder GUID */
  parentGuid: string;
  /** Bookmark type: "url", "folder", or "unspecified" */
  type: "url" | "folder" | "unspecified";
  /** Date created (Unix timestamp in seconds) */
  dateCreated?: number;
  /** Date last used (Unix timestamp in seconds) */
  dateLastUsed?: number;
  /** Whether this is a server-defined folder (e.g. Bookmark Bar) */
  serverDefined: boolean;
  /** Server-defined unique tag (e.g. "bookmark_bar", "other_bookmarks") */
  serverDefinedTag?: string;
}

/**
 * Result of reading bookmarks.
 */
export interface ReadBookmarksResult {
  /** Whether the operation succeeded */
  success: boolean;
  /** List of decrypted bookmarks */
  bookmarks: BookmarkEntry[];
  /** Number of entries that failed to decrypt */
  decryptionFailures: number;
  /** Error message if the operation failed */
  error?: string;
}

/**
 * Fetch and decrypt all bookmarks from the sync server.
 *
 * @param options - Sync client options
 * @param encryptionKey - 16-byte AES encryption key
 * @param macKey - 16-byte HMAC key
 * @returns List of decrypted bookmark entries
 */
export async function fetchBookmarks(
  options: SyncClientOptions,
  encryptionKey: Uint8Array,
  macKey: Uint8Array,
): Promise<ReadBookmarksResult> {
  try {
    const getUpdates = create(GetUpdatesMessageSchema, {
      getUpdatesOrigin: 12, // GU_TRIGGER
      fromProgressMarker: [
        create(DataTypeProgressMarkerSchema, {
          dataTypeId: BRAVE_SYNC_CONSTANTS.BOOKMARK_TYPE_ID,
          token: new Uint8Array(0),
        }),
      ],
    });

    const message = create(ClientToServerMessageSchema, {
      share: "",
      messageContents: 2, // GET_UPDATES
      getUpdates,
    });

    const response = await sendSyncRequest(options, message);

    if (!response.getUpdates) {
      return {
        success: true,
        bookmarks: [],
        decryptionFailures: 0,
      };
    }

    const bookmarks: BookmarkEntry[] = [];
    let decryptionFailures = 0;

    for (const entity of response.getUpdates.entries) {
      if (entity.deleted) {
        continue;
      }

      const specifics = entity.specifics;
      if (!specifics) {
        continue;
      }

      try {
        // Check if the bookmark data is Nigori-encrypted at the EntitySpecifics level
        if (specifics.encrypted?.blob) {
          const ciphertext = Uint8Array.from(
            atob(specifics.encrypted.blob),
            (c) => c.charCodeAt(0),
          );
          const plaintext = nigoriDecrypt(ciphertext, encryptionKey, macKey);
          const decryptedSpecifics = fromBinary(EntitySpecificsSchema, plaintext);

          if (decryptedSpecifics.specificsVariant?.case === "bookmark") {
            const bookmark = decryptedSpecifics.specificsVariant.value;
            bookmarks.push(toBookmarkEntry(entity, bookmark));
            continue;
          }
        }

        // Unencrypted bookmark
        if (specifics.specificsVariant?.case === "bookmark") {
          const bookmark = specifics.specificsVariant.value;
          bookmarks.push(toBookmarkEntry(entity, bookmark));
        }
      } catch {
        decryptionFailures++;
      }
    }

    return {
      success: true,
      bookmarks,
      decryptionFailures,
    };
  } catch (error) {
    return {
      success: false,
      bookmarks: [],
      decryptionFailures: 0,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

/**
 * Map a SyncEntity + BookmarkSpecifics to a BookmarkEntry.
 */
function toBookmarkEntry(
  entity: { idString: string; version: bigint; serverDefinedUniqueTag: string },
  bookmark: {
    url: string;
    fullTitle: string;
    legacyCanonicalizedTitle: string;
    guid: string;
    parentGuid: string;
    type: BookmarkSpecifics_Type;
    creationTimeUs: bigint;
    lastUsedTimeUs: bigint;
  },
): BookmarkEntry {
  const typeMap: Record<number, BookmarkEntry["type"]> = {
    [BookmarkSpecifics_Type.URL]: "url",
    [BookmarkSpecifics_Type.FOLDER]: "folder",
    [BookmarkSpecifics_Type.UNSPECIFIED]: "unspecified",
  };

  const entry: BookmarkEntry = {
    id: entity.idString,
    version: entity.version,
    url: bookmark.url,
    title: bookmark.fullTitle || bookmark.legacyCanonicalizedTitle,
    guid: bookmark.guid,
    parentGuid: bookmark.parentGuid,
    type: typeMap[bookmark.type] ?? "unspecified",
    serverDefined: entity.serverDefinedUniqueTag !== "",
    serverDefinedTag: entity.serverDefinedUniqueTag || undefined,
  };

  if (bookmark.creationTimeUs) {
    entry.dateCreated = windowsEpochMicrosToUnix(bookmark.creationTimeUs);
  }
  if (bookmark.lastUsedTimeUs) {
    entry.dateLastUsed = windowsEpochMicrosToUnix(bookmark.lastUsedTimeUs);
  }

  return entry;
}
