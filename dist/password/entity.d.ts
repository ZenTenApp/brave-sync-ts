/**
 * Password entity creation for Brave Sync.
 *
 * Creates encrypted password entries compatible with Brave browser sync.
 * The structure matches passwords manually added via Brave Settings > Passwords.
 */
import type { SyncEntity } from "../proto/index.js";
/**
 * Options for creating a password entity.
 */
export interface CreatePasswordEntityOptions {
    /** The website URL (e.g., "https://example.com") */
    url: string;
    /** The username/email */
    username: string;
    /** The password */
    password: string;
    /** Optional note to attach to the password */
    note?: PasswordNote;
    /** 16-byte AES encryption key */
    encryptionKey: Uint8Array;
    /** 16-byte HMAC key */
    macKey: Uint8Array;
}
/**
 * A note to attach to a password.
 *
 * Brave's password manager UI only displays the single default note, identified
 * by an empty uniqueDisplayName. The `name` field is intentionally omitted here
 * because setting any non-empty display name makes the note invisible in Brave.
 */
export interface PasswordNote {
    /** The note content */
    value: string;
    /** Whether to hide the note value by default */
    hidden?: boolean;
}
/**
 * Options for updating a password entity.
 */
export interface UpdatePasswordEntityOptions {
    /** The existing entity ID (from readPasswords) */
    entityId: string;
    /** The existing entity version (from readPasswords) */
    version: bigint;
    /** The website URL (must match existing entry) */
    url: string;
    /** The username (must match existing entry to compute same clientTagHash) */
    username: string;
    /** The new password value */
    newPassword: string;
    /** Optional note to attach to the password */
    note?: PasswordNote;
    /** 16-byte AES encryption key */
    encryptionKey: Uint8Array;
    /** 16-byte HMAC key */
    macKey: Uint8Array;
}
/**
 * Options for deleting a password entity.
 */
export interface DeletePasswordEntityOptions {
    /** The existing entity ID (from readPasswords) */
    entityId: string;
    /** The existing entity version (from readPasswords) */
    version: bigint;
    /** The website URL (must match existing entry) */
    url: string;
    /** The username (must match existing entry to compute same clientTagHash) */
    username: string;
    /** 16-byte AES encryption key (required for specifics) */
    encryptionKey: Uint8Array;
    /** 16-byte HMAC key (required for specifics) */
    macKey: Uint8Array;
}
/**
 * Create an encrypted password SyncEntity.
 *
 * Matches the structure created by Brave browser when manually adding
 * a password via Settings > Passwords.
 *
 * @param options - Password entity options
 * @returns SyncEntity ready to commit
 */
export declare function createPasswordEntity(options: CreatePasswordEntityOptions): SyncEntity;
/**
 * Create an encrypted password SyncEntity for updating an existing password.
 *
 * The update is identified by computing the same clientTagHash as the original
 * entry (based on URL and username). The server will replace the existing entry.
 *
 * @param options - Update password entity options
 * @returns SyncEntity ready to commit
 */
export declare function updatePasswordEntity(options: UpdatePasswordEntityOptions): SyncEntity;
/**
 * Create a SyncEntity for deleting an existing password.
 *
 * The delete is identified by computing the same clientTagHash as the original
 * entry (based on URL and username). The server will mark the entry as deleted.
 *
 * @param options - Delete password entity options
 * @returns SyncEntity ready to commit (with deleted=true)
 */
export declare function deletePasswordEntity(options: DeletePasswordEntityOptions): SyncEntity;
//# sourceMappingURL=entity.d.ts.map