/**
 * Bookmark reading for Brave Sync.
 *
 * Fetches and decrypts bookmark entries from the sync server.
 * Bookmarks may be encrypted at the EntitySpecifics level when
 * `encrypt_everything` is enabled.
 */
import { type SyncClientOptions } from "../sync/client.js";
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
export declare function fetchBookmarks(options: SyncClientOptions, encryptionKey: Uint8Array, macKey: Uint8Array): Promise<ReadBookmarksResult>;
//# sourceMappingURL=read.d.ts.map