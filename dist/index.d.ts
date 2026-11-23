/**
 * Brave Sync TypeScript Library
 *
 * A library for interacting with Brave browser sync: passwords, bookmarks,
 * and Authenticator.cc 2FA entries.
 *
 * @example
 * ```typescript
 * import { BraveSyncClient } from 'brave-sync-ts';
 *
 * const client = new BraveSyncClient({ seedPhrase: "word1 word2 ..." });
 * await client.connect();
 *
 * const passwords = await client.readPasswords();
 * const bookmarks = await client.readBookmarks();
 * const otpEntries = await client.readAuthenticatorEntries();
 * ```
 */
export type { PushPasswordOptions, PushPasswordResult, NigoriSettings, NigoriKeys, Ed25519Keypair, SyncClientConfig, } from "./types.js";
export { BRAVE_SYNC_CONSTANTS, KEY_DERIVATION_PBKDF2, KEY_DERIVATION_SCRYPT } from "./types.js";
export { seedPhraseToBytes, extractFirst24Words, deriveEd25519Keypair, generateAuthToken, getClientId, deriveNigoriKeys, deriveNigoriKeysScrypt, deriveNigoriKeysPbkdf2, nigoriEncrypt, nigoriDecrypt, computeKeyName, } from "./crypto/index.js";
export { escapePath, computePasswordUniqueTag, computeClientTagHash, createPasswordEntity, updatePasswordEntity, deletePasswordEntity, fetchPasswords, type CreatePasswordEntityOptions, type UpdatePasswordEntityOptions, type DeletePasswordEntityOptions, type PasswordEntry, type ReadPasswordsResult, } from "./password/index.js";
export { fetchBookmarks, type BookmarkEntry, type ReadBookmarksResult, } from "./bookmark/index.js";
export { fetchAuthenticatorEntries, type OTPEntry, type ReadAuthenticatorResult, } from "./authenticator/index.js";
export { sendSyncRequest, fetchNigoriSettings, commitEntities, getCommitError, initializeNigori, createNigoriSyncEntity, createEncryptionKeybag, type SyncClientOptions, type NetworkAdapter, } from "./sync/index.js";
import type { PushPasswordOptions, PushPasswordResult } from "./types.js";
import { type ReadPasswordsResult, type PasswordNote } from "./password/index.js";
export type { PasswordNote } from "./password/index.js";
import { type NetworkAdapter } from "./sync/index.js";
import { type ReadBookmarksResult } from "./bookmark/index.js";
import { type ReadAuthenticatorResult } from "./authenticator/index.js";
/**
 * Options for reading data from Brave Sync (shared by passwords, bookmarks, authenticator).
 */
export interface ReadSyncOptions {
    /** 24 or 25-word BIP39 seed phrase */
    seedPhrase: string;
    /** Sync server URL (defaults to Brave production server) */
    serverUrl?: string;
    /** Brave service key (defaults to production key) */
    serviceKey?: string;
    /** Optional network adapter for DNS/HTTP fallback (e.g. React Native) */
    networkAdapter?: NetworkAdapter;
}
/**
 * Options for reading passwords from Brave Sync.
 */
export interface ReadPasswordsOptions extends ReadSyncOptions {
}
/**
 * Options for updating a password in Brave Sync.
 * Either provide (url + username) OR (id) to identify the entry.
 */
export interface UpdatePasswordOptions {
    /** 24 or 25-word BIP39 seed phrase */
    seedPhrase: string;
    /** Website URL (must match existing entry) - required if id not provided */
    url?: string;
    /** Username (must match existing entry) - required if id not provided */
    username?: string;
    /** Entity ID (from list-passwords) - alternative to url+username */
    id?: string;
    /** New password value */
    newPassword: string;
    /** Optional note to attach to the password */
    note?: PasswordNote;
    /** Sync server URL (defaults to Brave production server) */
    serverUrl?: string;
    /** Brave service key (defaults to production key) */
    serviceKey?: string;
    /** Optional network adapter for DNS/HTTP fallback (e.g. React Native) */
    networkAdapter?: NetworkAdapter;
}
/**
 * Options for deleting a password from Brave Sync.
 * Either provide (url + username) OR (id) to identify the entry.
 */
export interface DeletePasswordOptions {
    /** 24 or 25-word BIP39 seed phrase */
    seedPhrase: string;
    /** Website URL (must match existing entry) - required if id not provided */
    url?: string;
    /** Username (must match existing entry) - required if id not provided */
    username?: string;
    /** Entity ID (from list-passwords) - alternative to url+username */
    id?: string;
    /** Sync server URL (defaults to Brave production server) */
    serverUrl?: string;
    /** Brave service key (defaults to production key) */
    serviceKey?: string;
    /** Optional network adapter for DNS/HTTP fallback (e.g. React Native) */
    networkAdapter?: NetworkAdapter;
}
/**
 * Result of updating or deleting a password.
 */
export interface ModifyPasswordResult {
    /** Whether the operation succeeded */
    success: boolean;
    /** Error message if the operation failed */
    error?: string;
}
/**
 * Push a password to the Brave sync server.
 *
 * Creates a password entry matching the structure used by Brave browser
 * when manually adding a password via Settings > Passwords.
 *
 * @param options - Password push options
 * @returns Result indicating success or failure
 *
 * @example
 * ```typescript
 * const result = await pushPassword({
 *   seedPhrase: "word1 word2 ... (25 words)",
 *   url: "https://example.com",
 *   username: "user@example.com",
 *   password: "secretpassword",
 * });
 *
 * if (result.success) {
 *   console.log("Password pushed successfully:", result.entityId);
 * } else {
 *   console.error("Failed to push password:", result.error);
 * }
 * ```
 */
export declare function pushPassword(options: PushPasswordOptions): Promise<PushPasswordResult>;
/**
 * Read all passwords from the Brave sync server.
 *
 * Fetches and decrypts all password entries for the given sync chain.
 *
 * @param options - Read passwords options
 * @returns List of decrypted password entries
 *
 * @example
 * ```typescript
 * const result = await readPasswords({
 *   seedPhrase: "word1 word2 ... (25 words)",
 * });
 *
 * if (result.success) {
 *   for (const pw of result.passwords) {
 *     console.log(`${pw.signonRealm}: ${pw.username}`);
 *   }
 * }
 * ```
 */
export declare function readPasswords(options: ReadPasswordsOptions): Promise<ReadPasswordsResult>;
/**
 * Read all bookmarks from the Brave sync server.
 *
 * Fetches and decrypts all bookmark entries for the given sync chain.
 *
 * @param options - Read options with seed phrase
 * @returns List of decrypted bookmark entries
 *
 * @example
 * ```typescript
 * const result = await readBookmarks({
 *   seedPhrase: "word1 word2 ... (25 words)",
 * });
 *
 * if (result.success) {
 *   for (const bm of result.bookmarks) {
 *     console.log(`${bm.title}: ${bm.url}`);
 *   }
 * }
 * ```
 */
export declare function readBookmarks(options: ReadSyncOptions): Promise<ReadBookmarksResult>;
/**
 * Read all Authenticator.cc OTP entries from the Brave sync server.
 *
 * Fetches and decrypts extension settings for the Authenticator.cc
 * extension, then parses OTPStorage entries.
 *
 * @param options - Read options with seed phrase
 * @returns List of OTP entries
 *
 * @example
 * ```typescript
 * const result = await readAuthenticatorEntries({
 *   seedPhrase: "word1 word2 ... (25 words)",
 * });
 *
 * if (result.success) {
 *   for (const entry of result.entries) {
 *     console.log(`${entry.issuer} (${entry.account}): ${entry.secret}`);
 *   }
 * }
 * ```
 */
export declare function readAuthenticatorEntries(options: ReadSyncOptions): Promise<ReadAuthenticatorResult>;
/**
 * Update an existing password in the Brave sync server.
 *
 * The password is identified by URL and username. If no matching entry exists,
 * a new entry will be created.
 *
 * @param options - Update password options
 * @returns Result indicating success or failure
 *
 * @example
 * ```typescript
 * const result = await updatePassword({
 *   seedPhrase: "word1 word2 ... (25 words)",
 *   url: "https://example.com",
 *   username: "user@example.com",
 *   newPassword: "newSecretPassword",
 * });
 *
 * if (result.success) {
 *   console.log("Password updated successfully");
 * }
 * ```
 */
export declare function updatePassword(options: UpdatePasswordOptions): Promise<ModifyPasswordResult>;
/**
 * Delete a password from the Brave sync server.
 *
 * The password is identified by URL and username.
 *
 * @param options - Delete password options
 * @returns Result indicating success or failure
 *
 * @example
 * ```typescript
 * const result = await deletePassword({
 *   seedPhrase: "word1 word2 ... (25 words)",
 *   url: "https://example.com",
 *   username: "user@example.com",
 * });
 *
 * if (result.success) {
 *   console.log("Password deleted successfully");
 * }
 * ```
 */
export declare function deletePassword(options: DeletePasswordOptions): Promise<ModifyPasswordResult>;
/**
 * Brave Sync Client class for multiple operations.
 *
 * Use this when you need to perform multiple sync operations with the same
 * seed phrase, avoiding repeated key derivation.
 *
 * @example
 * ```typescript
 * const client = new BraveSyncClient({
 *   seedPhrase: "word1 word2 ...",
 * });
 *
 * await client.connect();
 * await client.pushPassword({ url, username, password });
 * ```
 */
export declare class BraveSyncClient {
    private readonly seedPhrase;
    private readonly serverUrl;
    private readonly serviceKey;
    private readonly networkAdapter?;
    private publicKey;
    private privateKey;
    private encryptionKey;
    private macKey;
    private authToken;
    private connected;
    /**
     * Create a new Brave Sync client.
     *
     * @param config - Client configuration
     */
    constructor(config: {
        seedPhrase: string;
        serverUrl?: string;
        serviceKey?: string;
        networkAdapter?: NetworkAdapter;
    });
    /**
     * Connect to the sync server and fetch encryption settings.
     *
     * This must be called before pushing any data.
     */
    connect(): Promise<void>;
    /**
     * Push a password to the sync server.
     *
     * @param options - Password options (url, username, password)
     * @returns Result indicating success or failure
     */
    pushPassword(options: {
        url: string;
        username: string;
        password: string;
        note?: PasswordNote;
    }): Promise<PushPasswordResult>;
    /**
     * Read all passwords from the sync server.
     *
     * @returns List of decrypted password entries
     */
    readPasswords(): Promise<ReadPasswordsResult>;
    /**
     * Read all bookmarks from the sync server.
     *
     * @returns List of decrypted bookmark entries
     */
    readBookmarks(): Promise<ReadBookmarksResult>;
    /**
     * Read all Authenticator.cc OTP entries from the sync server.
     *
     * @returns List of OTP entries
     */
    readAuthenticatorEntries(): Promise<ReadAuthenticatorResult>;
    /**
     * Update an existing password on the sync server.
     *
     * @param options - Update options (url, username, newPassword)
     * @returns Result indicating success or failure
     */
    updatePassword(options: {
        url: string;
        username: string;
        newPassword: string;
        note?: PasswordNote;
    }): Promise<ModifyPasswordResult>;
    /**
     * Delete a password from the sync server.
     *
     * @param options - Delete options (url, username)
     * @returns Result indicating success or failure
     */
    deletePassword(options: {
        url: string;
        username: string;
    }): Promise<ModifyPasswordResult>;
    /**
     * Check if the client is connected.
     */
    isConnected(): boolean;
    /**
     * Get the client ID (hex-encoded public key).
     */
    getClientId(): string;
    /**
     * Ensure the client is connected.
     */
    private ensureConnected;
    /**
     * Get sync client options.
     */
    private getSyncOptions;
}
//# sourceMappingURL=index.d.ts.map