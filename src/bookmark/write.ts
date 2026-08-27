/**
 * Bookmark write support for Brave Sync.
 *
 * Constructs a bookmark SyncEntity compatible with Brave browser sync.
 *
 * Encryption note: chains created with a custom passphrase (which is how this
 * library initialises a fresh chain) set `encryptEverything = true`, so the
 * bookmark is wrapped in EntitySpecifics.encrypted: a Nigori-encrypted blob
 * containing a serialised EntitySpecifics whose variant is the bookmark.
 * This mirrors exactly how Chromium packs a bookmark on the wire and how
 * `bookmark/read.ts` unpacks it on the read path.
 */

import { create, toBinary } from "@bufbuild/protobuf";
import {
  SyncEntitySchema,
  EntitySpecificsSchema,
  BookmarkSpecificsSchema,
  BookmarkSpecifics_Type,
  EncryptedDataSchema,
  type SyncEntity,
} from "../proto/index.js";
import { nigoriEncrypt, computeKeyName } from "../crypto/index.js";
import { BRAVE_SYNC_CONSTANTS } from "../types.js";

/** Windows epoch offset: seconds between 1601-01-01 and 1970-01-01. */
const WINDOWS_EPOCH_OFFSET = BigInt(BRAVE_SYNC_CONSTANTS.WINDOWS_EPOCH_OFFSET);

/** Canonical GUID of the "Bookmark Bar" root folder (Chromium bookmark_uuids.h). */
const BOOKMARK_BAR_GUID = "0bc5d13f-2cba-5d74-951f-3f233fe6c908";

/** Convert Unix timestamp (seconds) to Windows epoch microseconds. */
function unixToWindowsEpochMicros(unixTimestamp: number): bigint {
  return BigInt(Math.floor(unixTimestamp * 1_000_000)) + WINDOWS_EPOCH_OFFSET * 1_000_000n;
}

/** Generate a UUID v4 that doubles as both the sync entity id and bookmark guid. */
function generateUuid(): string {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID().toLowerCase();
  }
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;
  const hex = Array.from(bytes).map((b) => b.toString(16).padStart(2, "0")).join("");
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

/**
 * Options for creating a bookmark entity.
 */
export interface CreateBookmarkEntityOptions {
  /** The bookmark URL (e.g. "https://example.com") */
  url: string;
  /** The bookmark title */
  title: string;
  /** Parent folder GUID (defaults to the canonical "Bookmark Bar" GUID) */
  parentGuid?: string;
  /** 16-byte AES encryption key */
  encryptionKey: Uint8Array;
  /** 16-byte HMAC key */
  macKey: Uint8Array;
}

/**
 * Create an encrypted bookmark SyncEntity.
 *
 * The bookmark is Nigori-encrypted so it is stored under
 * EntitySpecifics.encrypted, matching a custom-passphrase (encryptEverything)
 * sync chain.
 *
 * @param options - Bookmark entity options
 * @returns SyncEntity ready to commit
 */
export function createBookmarkEntity(options: CreateBookmarkEntityOptions): SyncEntity {
  const { url, title, parentGuid = BOOKMARK_BAR_GUID, encryptionKey, macKey } = options;

  const now = Date.now() / 1000; // seconds
  const nowWindowsMicros = unixToWindowsEpochMicros(now);
  const nowMs = BigInt(Math.floor(now * 1000));

  const guid = generateUuid();

  // Build the bookmark specific. M81+ clients populate fullTitle; we set both
  // the legacy and full title so older readers show the right text.
  const bookmarkSpecifics = create(BookmarkSpecificsSchema, {
    url,
    favicon: new Uint8Array(0),
    legacyCanonicalizedTitle: title,
    creationTimeUs: nowWindowsMicros,
    iconUrl: "",
    metaInfo: [],
    guid,
    fullTitle: title,
    parentGuid,
    type: BookmarkSpecifics_Type.URL,
    lastUsedTimeUs: nowWindowsMicros,
  });

  // Pack into an EntitySpecifics, then encrypt the whole thing (encryptEverything=true).
  const innerSpecifics = create(EntitySpecificsSchema, {
    specificsVariant: { case: "bookmark", value: bookmarkSpecifics },
  });
  const plaintext = toBinary(EntitySpecificsSchema, innerSpecifics);
  const ciphertext = nigoriEncrypt(plaintext, encryptionKey, macKey);

  const encrypted = create(EncryptedDataSchema, {
    keyName: computeKeyName(encryptionKey, macKey),
    blob: btoa(String.fromCharCode(...ciphertext)),
  });

  const specifics = create(EntitySpecificsSchema, { encrypted });

  return create(SyncEntitySchema, {
    idString: guid,
    version: 0n,
    name: title,
    nonUniqueName: title,
    folder: false,
    deleted: false,
    mtime: nowMs,
    ctime: nowMs,
    specifics,
  });
}