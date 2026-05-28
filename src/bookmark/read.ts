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
 * Canonical GUIDs for Brave's permanent bookmark folders.
 *
 * These are hardcoded in Chromium's bookmark_uuids.h and are the same across
 * all clients and installations. The Brave Sync server never sends these GUIDs
 * on the wire for root folder entities — their BookmarkSpecifics.guid field is
 * always empty. But every child that lives directly under a root folder writes
 * this GUID into its own BookmarkSpecifics.parent_guid when it is pushed.
 *
 * Mapping: serverDefinedUniqueTag → canonical GUID
 */
const PERMANENT_FOLDER_GUIDS: Record<string, string> = {
  google_chrome_bookmarks: "00000000-0000-0000-0000-000000000001",
  bookmark_bar:            "0bc5d13f-2cba-5d74-951f-3f233fe6c908",
  other_bookmarks:         "82b081ec-3dd3-529c-8475-ab6c344571fe",
  synced_bookmarks:        "4cf2e351-0e85-532b-bb37-df045d8f8d0f",
};

/**
 * Convert Windows epoch microseconds to Unix timestamp (seconds).
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
            bookmarks.push(toBookmarkEntry(entity.serverDefinedUniqueTag, entity.idString, entity.version, bookmark));
            continue;
          }
        }

        // Unencrypted bookmark
        if (specifics.specificsVariant?.case === "bookmark") {
          const bookmark = specifics.specificsVariant.value;
          bookmarks.push(toBookmarkEntry(entity.serverDefinedUniqueTag, entity.idString, entity.version, bookmark));
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
 * Map a sync entity + BookmarkSpecifics to a BookmarkEntry.
 *
 * GUID resolution for root (server-defined) folders:
 *   The Brave Sync server creates permanent folders (bookmark_bar, etc.) with
 *   empty BookmarkSpecifics — no guid field, no parentGuid. But every child
 *   pushed by a Brave client writes the well-known Chromium canonical GUID for
 *   its parent folder into BookmarkSpecifics.parent_guid. These GUIDs are
 *   hardcoded in Chromium's bookmark_uuids.h and are the same on every device.
 *   We use the same canonical table to assign the correct GUID to each root
 *   folder so that parent→child guid matching works.
 *
 * GUID resolution for regular entries:
 *   Regular bookmarks and user-created folders carry their guid in
 *   BookmarkSpecifics.guid (M81+). That value is used directly.
 */
function toBookmarkEntry(
  serverDefinedUniqueTag: string,
  idString: string,
  version: bigint,
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

  // For server-defined root folders use the canonical Chromium GUID.
  // For everything else use BookmarkSpecifics.guid (which is always populated
  // by M81+ clients that create user bookmarks and folders).
  const guid = serverDefinedUniqueTag
    ? (PERMANENT_FOLDER_GUIDS[serverDefinedUniqueTag] ?? idString)
    : bookmark.guid;

  // Root folders arrive with type=UNSPECIFIED (the type field was added M94).
  // Promote them to FOLDER so the tree builder displays them correctly.
  let type = typeMap[bookmark.type] ?? "unspecified";
  if (type === "unspecified" && serverDefinedUniqueTag) {
    type = "folder";
  }

  const entry: BookmarkEntry = {
    id: idString,
    version,
    url: bookmark.url,
    title: bookmark.fullTitle || bookmark.legacyCanonicalizedTitle,
    guid,
    parentGuid: bookmark.parentGuid,
    type,
    serverDefined: serverDefinedUniqueTag !== "",
    serverDefinedTag: serverDefinedUniqueTag || undefined,
  };

  if (bookmark.creationTimeUs) {
    entry.dateCreated = windowsEpochMicrosToUnix(bookmark.creationTimeUs);
  }
  if (bookmark.lastUsedTimeUs) {
    entry.dateLastUsed = windowsEpochMicrosToUnix(bookmark.lastUsedTimeUs);
  }

  return entry;
}
