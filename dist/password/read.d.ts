/**
 * Password reading/listing for Brave Sync.
 *
 * Fetches and decrypts password entries from the sync server.
 */
import { type SyncClientOptions } from "../sync/client.js";
/**
 * A single note attached to a password entry.
 */
export interface PasswordNoteEntry {
    /** Unique display name of the note (empty string for the default note) */
    uniqueDisplayName: string;
    /** The note text */
    value: string;
    /** Whether the note value is hidden by default */
    hideByDefault: boolean;
    /** Date the note was created (Unix timestamp in seconds) */
    dateCreated?: number;
}
/**
 * A decrypted password entry.
 */
export interface PasswordEntry {
    /** Entity ID from sync server */
    id: string;
    /** Entity version (needed for updates) */
    version: bigint;
    /** Client tag hash (used for updates/deletes) */
    clientTagHash: string;
    /** Entity name (usually the signon realm) */
    name: string;
    /** Signon realm (e.g., "https://example.com/") */
    signonRealm: string;
    /** Origin URL */
    origin: string;
    /** Username value */
    username: string;
    /** Password value */
    password: string;
    /** Username form element name */
    usernameElement: string;
    /** Password form element name */
    passwordElement: string;
    /** Scheme (0 = HTML, 1 = Basic, etc.) */
    scheme: number;
    /** Type (0 = form submission, 3 = manually added, etc.) */
    type: number;
    /** Number of times used */
    timesUsed: number;
    /** Date created (Unix timestamp in seconds) */
    dateCreated?: number;
    /** Date last used (Unix timestamp in seconds) */
    dateLastUsed?: number;
    /** Date password modified (Unix timestamp in seconds) */
    datePasswordModified?: number;
    /** Whether the entry is blacklisted (never save) */
    blacklisted: boolean;
    /** Notes attached to this password entry */
    notes: PasswordNoteEntry[];
}
/**
 * Result of reading passwords.
 */
export interface ReadPasswordsResult {
    /** Whether the operation succeeded */
    success: boolean;
    /** List of decrypted passwords */
    passwords: PasswordEntry[];
    /** Number of entries that failed to decrypt */
    decryptionFailures: number;
    /** Error message if the operation failed */
    error?: string;
}
/**
 * Fetch and decrypt all passwords from the sync server.
 *
 * @param options - Sync client options
 * @param encryptionKey - 16-byte AES encryption key
 * @param macKey - 16-byte HMAC key
 * @returns List of decrypted password entries
 */
export declare function fetchPasswords(options: SyncClientOptions, encryptionKey: Uint8Array, macKey: Uint8Array): Promise<ReadPasswordsResult>;
//# sourceMappingURL=read.d.ts.map