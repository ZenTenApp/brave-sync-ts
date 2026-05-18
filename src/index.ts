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

// Re-export types
export type {
  PushPasswordOptions,
  PushPasswordResult,
  NigoriSettings,
  NigoriKeys,
  Ed25519Keypair,
  SyncClientConfig,
} from "./types.js";

export { BRAVE_SYNC_CONSTANTS, KEY_DERIVATION_PBKDF2, KEY_DERIVATION_SCRYPT } from "./types.js";

// Re-export crypto utilities (for advanced usage)
export {
  seedPhraseToBytes,
  extractFirst24Words,
  deriveEd25519Keypair,
  generateAuthToken,
  getClientId,
  deriveNigoriKeys,
  deriveNigoriKeysScrypt,
  deriveNigoriKeysPbkdf2,
  nigoriEncrypt,
  nigoriDecrypt,
  computeKeyName,
} from "./crypto/index.js";

// Re-export password utilities (for advanced usage)
export {
  escapePath,
  computePasswordUniqueTag,
  computeClientTagHash,
  createPasswordEntity,
  updatePasswordEntity,
  deletePasswordEntity,
  fetchPasswords,
  type CreatePasswordEntityOptions,
  type UpdatePasswordEntityOptions,
  type DeletePasswordEntityOptions,
  type PasswordEntry,
  type ReadPasswordsResult,
} from "./password/index.js";

// Re-export bookmark utilities
export {
  fetchBookmarks,
  type BookmarkEntry,
  type ReadBookmarksResult,
} from "./bookmark/index.js";

// Re-export authenticator utilities
export {
  fetchAuthenticatorEntries,
  type OTPEntry,
  type ReadAuthenticatorResult,
} from "./authenticator/index.js";

// Re-export sync client (for advanced usage)
export {
  sendSyncRequest,
  fetchNigoriSettings,
  commitEntities,
  initializeNigori,
  createNigoriSyncEntity,
  createEncryptionKeybag,
  type SyncClientOptions,
  type NetworkAdapter,
} from "./sync/index.js";

// Import for main function
import type { PushPasswordOptions, PushPasswordResult } from "./types.js";
import { BRAVE_SYNC_CONSTANTS } from "./types.js";
import {
  seedPhraseToBytes,
  deriveEd25519Keypair,
  generateAuthToken,
  getClientId,
  deriveNigoriKeys,
} from "./crypto/index.js";
import {
  createPasswordEntity,
  updatePasswordEntity,
  deletePasswordEntity,
  fetchPasswords,
  type PasswordEntry,
  type ReadPasswordsResult,
  type PasswordNote,
} from "./password/index.js";

// Re-export PasswordNote type
export type { PasswordNote } from "./password/index.js";
import { fetchNigoriSettings, commitEntities, initializeNigori, type SyncClientOptions, type NetworkAdapter } from "./sync/index.js";
import { fetchBookmarks, type ReadBookmarksResult } from "./bookmark/index.js";
import { fetchAuthenticatorEntries, type ReadAuthenticatorResult } from "./authenticator/index.js";

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
export interface ReadPasswordsOptions extends ReadSyncOptions { }

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
export async function pushPassword(options: PushPasswordOptions): Promise<PushPasswordResult> {
  const {
    seedPhrase,
    url,
    username,
    password,
    note,
    serverUrl = BRAVE_SYNC_CONSTANTS.DEFAULT_SERVER_URL,
    serviceKey = BRAVE_SYNC_CONSTANTS.SERVICE_KEY,
    networkAdapter,
  } = options;

  try {
    // Step 1: Convert seed phrase to bytes
    const seed = seedPhraseToBytes(seedPhrase);

    // Step 2: Derive Ed25519 keypair
    const { publicKey, privateKey } = await deriveEd25519Keypair(seed);
    const clientId = getClientId(publicKey);

    // Step 3: Generate auth token
    const authToken = await generateAuthToken(privateKey, publicKey);

    // Step 4: Create sync client options
    const syncOptions: SyncClientOptions = {
      serverUrl,
      serviceKey,
      clientId,
      authToken,
      networkAdapter,
    };

    // Step 5: Fetch Nigori settings; if the chain is uninitialised, create the
    // Nigori entity first (PBKDF2 is the default for new custom-passphrase chains).
    let nigoriSettings = await fetchNigoriSettings(syncOptions);

    if (!nigoriSettings) {
      nigoriSettings = await initializeNigori(syncOptions, seedPhrase);
    }

    // Step 6: Derive encryption keys
    const { encryptionKey, macKey } = deriveNigoriKeys(seedPhrase, nigoriSettings.keyDerivationMethod, nigoriSettings.salt);

    // Step 7: Create password entity
    const entity = createPasswordEntity({
      url,
      username,
      password,
      note,
      encryptionKey,
      macKey,
    });

    // Step 8: Commit to server
    const response = await commitEntities(syncOptions, [entity]);

    // Check response
    if (response.errorCode === 0) {
      return {
        success: true,
        entityId: entity.idString,
      };
    } else {
      return {
        success: false,
        error: `Server error code: ${response.errorCode}`,
      };
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

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
export async function readPasswords(options: ReadPasswordsOptions): Promise<ReadPasswordsResult> {
  const {
    seedPhrase,
    serverUrl = BRAVE_SYNC_CONSTANTS.DEFAULT_SERVER_URL,
    serviceKey = BRAVE_SYNC_CONSTANTS.SERVICE_KEY,
    networkAdapter,
  } = options;

  try {
    // Step 1: Convert seed phrase to bytes
    const seed = seedPhraseToBytes(seedPhrase);

    // Step 2: Derive Ed25519 keypair
    const { publicKey, privateKey } = await deriveEd25519Keypair(seed);
    const clientId = getClientId(publicKey);

    // Step 3: Generate auth token
    const authToken = await generateAuthToken(privateKey, publicKey);

    // Step 4: Create sync client options
    const syncOptions: SyncClientOptions = {
      serverUrl,
      serviceKey,
      clientId,
      authToken,
      networkAdapter,
    };

    // Step 5: Fetch Nigori settings to get encryption keys
    const nigoriSettings = await fetchNigoriSettings(syncOptions);

    if (!nigoriSettings) {
      return {
        success: false,
        passwords: [],
        decryptionFailures: 0,
        error: "No Nigori settings found. Is the sync chain initialized?",
      };
    }

    // Step 6: Derive encryption keys using scrypt
    const { encryptionKey, macKey } = deriveNigoriKeys(seedPhrase, nigoriSettings.keyDerivationMethod, nigoriSettings.salt);

    // Step 7: Fetch and decrypt passwords
    return await fetchPasswords(syncOptions, encryptionKey, macKey);
  } catch (error) {
    return {
      success: false,
      passwords: [],
      decryptionFailures: 0,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

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
export async function readBookmarks(options: ReadSyncOptions): Promise<ReadBookmarksResult> {
  const {
    seedPhrase,
    serverUrl = BRAVE_SYNC_CONSTANTS.DEFAULT_SERVER_URL,
    serviceKey = BRAVE_SYNC_CONSTANTS.SERVICE_KEY,
    networkAdapter,
  } = options;

  try {
    const seed = seedPhraseToBytes(seedPhrase);
    const { publicKey, privateKey } = await deriveEd25519Keypair(seed);
    const clientId = getClientId(publicKey);
    const authToken = await generateAuthToken(privateKey, publicKey);

    const syncOptions: SyncClientOptions = {
      serverUrl,
      serviceKey,
      clientId,
      authToken,
      networkAdapter,
    };

    const nigoriSettings = await fetchNigoriSettings(syncOptions);

    if (!nigoriSettings) {
      return {
        success: false,
        bookmarks: [],
        decryptionFailures: 0,
        error: "No Nigori settings found. Is the sync chain initialized?",
      };
    }

    const { encryptionKey, macKey } = deriveNigoriKeys(seedPhrase, nigoriSettings.keyDerivationMethod, nigoriSettings.salt);

    return await fetchBookmarks(syncOptions, encryptionKey, macKey);
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
export async function readAuthenticatorEntries(options: ReadSyncOptions): Promise<ReadAuthenticatorResult> {
  const {
    seedPhrase,
    serverUrl = BRAVE_SYNC_CONSTANTS.DEFAULT_SERVER_URL,
    serviceKey = BRAVE_SYNC_CONSTANTS.SERVICE_KEY,
    networkAdapter,
  } = options;

  try {
    const seed = seedPhraseToBytes(seedPhrase);
    const { publicKey, privateKey } = await deriveEd25519Keypair(seed);
    const clientId = getClientId(publicKey);
    const authToken = await generateAuthToken(privateKey, publicKey);

    const syncOptions: SyncClientOptions = {
      serverUrl,
      serviceKey,
      clientId,
      authToken,
      networkAdapter,
    };

    const nigoriSettings = await fetchNigoriSettings(syncOptions);

    if (!nigoriSettings) {
      return {
        success: false,
        entries: [],
        decryptionFailures: 0,
        extensionPresent: false,
        error: "No Nigori settings found. Is the sync chain initialized?",
      };
    }

    const { encryptionKey, macKey } = deriveNigoriKeys(seedPhrase, nigoriSettings.keyDerivationMethod, nigoriSettings.salt);

    return await fetchAuthenticatorEntries(syncOptions, encryptionKey, macKey);
  } catch (error) {
    return {
      success: false,
      entries: [],
      decryptionFailures: 0,
      extensionPresent: false,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

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
export async function updatePassword(options: UpdatePasswordOptions): Promise<ModifyPasswordResult> {
  const {
    seedPhrase,
    url,
    username,
    id,
    newPassword,
    note,
    serverUrl = BRAVE_SYNC_CONSTANTS.DEFAULT_SERVER_URL,
    serviceKey = BRAVE_SYNC_CONSTANTS.SERVICE_KEY,
    networkAdapter,
  } = options;

  // Validate: must provide either id OR (url + username)
  if (!id && (!url || !username)) {
    return {
      success: false,
      error: "Must provide either 'id' or both 'url' and 'username' to identify the password.",
    };
  }

  try {
    // Step 1: Convert seed phrase to bytes
    const seed = seedPhraseToBytes(seedPhrase);

    // Step 2: Derive Ed25519 keypair
    const { publicKey, privateKey } = await deriveEd25519Keypair(seed);
    const clientId = getClientId(publicKey);

    // Step 3: Generate auth token
    const authToken = await generateAuthToken(privateKey, publicKey);

    // Step 4: Create sync client options
    const syncOptions: SyncClientOptions = {
      serverUrl,
      serviceKey,
      clientId,
      authToken,
      networkAdapter,
    };

    // Step 5: Fetch Nigori settings to get encryption keys
    const nigoriSettings = await fetchNigoriSettings(syncOptions);

    if (!nigoriSettings) {
      return {
        success: false,
        error: "No Nigori settings found. Is the sync chain initialized?",
      };
    }

    // Step 6: Derive encryption keys using scrypt
    const { encryptionKey, macKey } = deriveNigoriKeys(seedPhrase, nigoriSettings.keyDerivationMethod, nigoriSettings.salt);

    // Step 7: Find the existing password entry to get its ID and version
    const passwordsResult = await fetchPasswords(syncOptions, encryptionKey, macKey);
    if (!passwordsResult.success) {
      return {
        success: false,
        error: `Failed to fetch existing passwords: ${passwordsResult.error}`,
      };
    }

    // Find by ID or by URL+username
    let existingEntry: PasswordEntry | undefined;
    if (id) {
      existingEntry = passwordsResult.passwords.find((pw) => pw.id === id);
      if (!existingEntry) {
        return {
          success: false,
          error: `No existing password found with ID ${id}.`,
        };
      }
    } else {
      const parsedUrl = new URL(url!);
      const signonRealm = `${parsedUrl.protocol}//${parsedUrl.hostname}/`;
      existingEntry = passwordsResult.passwords.find(
        (pw) => pw.signonRealm === signonRealm && pw.username === username
      );
      if (!existingEntry) {
        return {
          success: false,
          error: `No existing password found for ${url} with username ${username}. Use pushPassword to create a new entry.`,
        };
      }
    }

    // Step 8: Create update entity with existing ID and version
    // Use URL/username from existing entry when searching by ID
    const entity = updatePasswordEntity({
      entityId: existingEntry.id,
      version: existingEntry.version,
      url: existingEntry.origin,
      username: existingEntry.username,
      newPassword,
      note,
      encryptionKey,
      macKey,
    });

    // Step 8: Commit to server
    const response = await commitEntities(syncOptions, [entity]);

    // Check response
    if (response.errorCode === 0) {
      return { success: true };
    } else {
      return {
        success: false,
        error: `Server error code: ${response.errorCode}`,
      };
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

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
export async function deletePassword(options: DeletePasswordOptions): Promise<ModifyPasswordResult> {
  const {
    seedPhrase,
    url,
    username,
    id,
    serverUrl = BRAVE_SYNC_CONSTANTS.DEFAULT_SERVER_URL,
    serviceKey = BRAVE_SYNC_CONSTANTS.SERVICE_KEY,
    networkAdapter,
  } = options;

  // Validate: must provide either id OR (url + username)
  if (!id && (!url || !username)) {
    return {
      success: false,
      error: "Must provide either 'id' or both 'url' and 'username' to identify the password.",
    };
  }

  try {
    // Step 1: Convert seed phrase to bytes
    const seed = seedPhraseToBytes(seedPhrase);

    // Step 2: Derive Ed25519 keypair
    const { publicKey, privateKey } = await deriveEd25519Keypair(seed);
    const clientId = getClientId(publicKey);

    // Step 3: Generate auth token
    const authToken = await generateAuthToken(privateKey, publicKey);

    // Step 4: Create sync client options
    const syncOptions: SyncClientOptions = {
      serverUrl,
      serviceKey,
      clientId,
      authToken,
      networkAdapter,
    };

    // Step 5: Fetch Nigori settings to decrypt passwords
    const nigoriSettings = await fetchNigoriSettings(syncOptions);

    if (!nigoriSettings) {
      return {
        success: false,
        error: "No Nigori settings found. Is the sync chain initialized?",
      };
    }

    // Step 6: Derive encryption keys
    const { encryptionKey, macKey } = deriveNigoriKeys(seedPhrase, nigoriSettings.keyDerivationMethod, nigoriSettings.salt);

    // Step 7: Find the existing password entry to get its ID and version
    const passwordsResult = await fetchPasswords(syncOptions, encryptionKey, macKey);
    if (!passwordsResult.success) {
      return {
        success: false,
        error: `Failed to fetch existing passwords: ${passwordsResult.error}`,
      };
    }

    // Find by ID or by URL+username
    let existingEntry: PasswordEntry | undefined;
    if (id) {
      existingEntry = passwordsResult.passwords.find((pw) => pw.id === id);
      if (!existingEntry) {
        return {
          success: false,
          error: `No existing password found with ID ${id}.`,
        };
      }
    } else {
      const parsedUrl = new URL(url!);
      const signonRealm = `${parsedUrl.protocol}//${parsedUrl.hostname}/`;
      existingEntry = passwordsResult.passwords.find(
        (pw) => pw.signonRealm === signonRealm && pw.username === username
      );
      if (!existingEntry) {
        return {
          success: false,
          error: `No existing password found for ${url} with username ${username}.`,
        };
      }
    }

    // Step 8: Create delete entity with existing ID and version
    // Use URL/username from existing entry when searching by ID
    const entity = deletePasswordEntity({
      entityId: existingEntry.id,
      version: existingEntry.version,
      url: existingEntry.origin,
      username: existingEntry.username,
      encryptionKey,
      macKey,
    });

    // Step 9: Commit to server
    const response = await commitEntities(syncOptions, [entity]);

    // Check response
    if (response.errorCode === 0) {
      return { success: true };
    } else {
      return {
        success: false,
        error: `Server error code: ${response.errorCode}`,
      };
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

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
export class BraveSyncClient {
  private readonly seedPhrase: string;
  private readonly serverUrl: string;
  private readonly serviceKey: string;

  private publicKey: Uint8Array | null = null;
  private privateKey: Uint8Array | null = null;
  private encryptionKey: Uint8Array | null = null;
  private macKey: Uint8Array | null = null;
  private authToken: string | null = null;
  private connected = false;

  /**
   * Create a new Brave Sync client.
   *
   * @param config - Client configuration
   */
  constructor(config: {
    seedPhrase: string;
    serverUrl?: string;
    serviceKey?: string;
  }) {
    this.seedPhrase = config.seedPhrase;
    this.serverUrl = config.serverUrl ?? BRAVE_SYNC_CONSTANTS.DEFAULT_SERVER_URL;
    this.serviceKey = config.serviceKey ?? BRAVE_SYNC_CONSTANTS.SERVICE_KEY;
  }

  /**
   * Connect to the sync server and fetch encryption settings.
   *
   * This must be called before pushing any data.
   */
  async connect(): Promise<void> {
    // Derive Ed25519 keypair
    const seed = seedPhraseToBytes(this.seedPhrase);
    const keypair = await deriveEd25519Keypair(seed);
    this.publicKey = keypair.publicKey;
    this.privateKey = keypair.privateKey;

    // Generate auth token
    this.authToken = await generateAuthToken(this.privateKey, this.publicKey);

    // Fetch Nigori settings; if the chain is uninitialised, create the Nigori
    // entity first (PBKDF2 is the default for new custom-passphrase chains).
    const syncOptions = this.getSyncOptions();
    let nigoriSettings = await fetchNigoriSettings(syncOptions);

    if (!nigoriSettings) {
      nigoriSettings = await initializeNigori(syncOptions, this.seedPhrase);
    }

    // Derive encryption keys
    const keys = deriveNigoriKeys(this.seedPhrase, nigoriSettings.keyDerivationMethod, nigoriSettings.salt);
    this.encryptionKey = keys.encryptionKey;
    this.macKey = keys.macKey;

    this.connected = true;
  }

  /**
   * Push a password to the sync server.
   *
   * @param options - Password options (url, username, password)
   * @returns Result indicating success or failure
   */
  async pushPassword(options: {
    url: string;
    username: string;
    password: string;
    note?: PasswordNote;
  }): Promise<PushPasswordResult> {
    this.ensureConnected();

    try {
      const entity = createPasswordEntity({
        url: options.url,
        username: options.username,
        password: options.password,
        note: options.note,
        encryptionKey: this.encryptionKey!,
        macKey: this.macKey!,
      });

      const response = await commitEntities(this.getSyncOptions(), [entity]);

      if (response.errorCode === 0) {
        return {
          success: true,
          entityId: entity.idString,
        };
      } else {
        return {
          success: false,
          error: `Server error code: ${response.errorCode}`,
        };
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : String(error),
      };
    }
  }

  /**
   * Read all passwords from the sync server.
   *
   * @returns List of decrypted password entries
   */
  async readPasswords(): Promise<ReadPasswordsResult> {
    this.ensureConnected();

    return fetchPasswords(this.getSyncOptions(), this.encryptionKey!, this.macKey!);
  }

  /**
   * Read all bookmarks from the sync server.
   *
   * @returns List of decrypted bookmark entries
   */
  async readBookmarks(): Promise<ReadBookmarksResult> {
    this.ensureConnected();

    return fetchBookmarks(this.getSyncOptions(), this.encryptionKey!, this.macKey!);
  }

  /**
   * Read all Authenticator.cc OTP entries from the sync server.
   *
   * @returns List of OTP entries
   */
  async readAuthenticatorEntries(): Promise<ReadAuthenticatorResult> {
    this.ensureConnected();

    return fetchAuthenticatorEntries(this.getSyncOptions(), this.encryptionKey!, this.macKey!);
  }

  /**
   * Update an existing password on the sync server.
   *
   * @param options - Update options (url, username, newPassword)
   * @returns Result indicating success or failure
   */
  async updatePassword(options: {
    url: string;
    username: string;
    newPassword: string;
    note?: PasswordNote;
  }): Promise<ModifyPasswordResult> {
    this.ensureConnected();

    try {
      // Find the existing password entry to get its ID and version
      const passwordsResult = await fetchPasswords(
        this.getSyncOptions(),
        this.encryptionKey!,
        this.macKey!
      );

      if (!passwordsResult.success) {
        return {
          success: false,
          error: `Failed to fetch existing passwords: ${passwordsResult.error}`,
        };
      }

      // Parse URL to match against existing entries
      const parsedUrl = new URL(options.url);
      const signonRealm = `${parsedUrl.protocol}//${parsedUrl.hostname}/`;

      const existingEntry = passwordsResult.passwords.find(
        (pw) => pw.signonRealm === signonRealm && pw.username === options.username
      );

      if (!existingEntry) {
        return {
          success: false,
          error: `No existing password found for ${options.url} with username ${options.username}. Use pushPassword to create a new entry.`,
        };
      }

      const entity = updatePasswordEntity({
        entityId: existingEntry.id,
        version: existingEntry.version,
        url: options.url,
        username: options.username,
        newPassword: options.newPassword,
        note: options.note,
        encryptionKey: this.encryptionKey!,
        macKey: this.macKey!,
      });

      const response = await commitEntities(this.getSyncOptions(), [entity]);

      if (response.errorCode === 0) {
        return { success: true };
      } else {
        return {
          success: false,
          error: `Server error code: ${response.errorCode}`,
        };
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : String(error),
      };
    }
  }

  /**
   * Delete a password from the sync server.
   *
   * @param options - Delete options (url, username)
   * @returns Result indicating success or failure
   */
  async deletePassword(options: {
    url: string;
    username: string;
  }): Promise<ModifyPasswordResult> {
    this.ensureConnected();

    try {
      // Find the existing password entry to get its ID and version
      const passwordsResult = await fetchPasswords(
        this.getSyncOptions(),
        this.encryptionKey!,
        this.macKey!
      );

      if (!passwordsResult.success) {
        return {
          success: false,
          error: `Failed to fetch existing passwords: ${passwordsResult.error}`,
        };
      }

      // Parse URL to match against existing entries
      const parsedUrl = new URL(options.url);
      const signonRealm = `${parsedUrl.protocol}//${parsedUrl.hostname}/`;

      const existingEntry = passwordsResult.passwords.find(
        (pw) => pw.signonRealm === signonRealm && pw.username === options.username
      );

      if (!existingEntry) {
        return {
          success: false,
          error: `No existing password found for ${options.url} with username ${options.username}.`,
        };
      }

      const entity = deletePasswordEntity({
        entityId: existingEntry.id,
        version: existingEntry.version,
        url: options.url,
        username: options.username,
        encryptionKey: this.encryptionKey!,
        macKey: this.macKey!,
      });

      const response = await commitEntities(this.getSyncOptions(), [entity]);

      if (response.errorCode === 0) {
        return { success: true };
      } else {
        return {
          success: false,
          error: `Server error code: ${response.errorCode}`,
        };
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : String(error),
      };
    }
  }

  /**
   * Check if the client is connected.
   */
  isConnected(): boolean {
    return this.connected;
  }

  /**
   * Get the client ID (hex-encoded public key).
   */
  getClientId(): string {
    this.ensureConnected();
    return getClientId(this.publicKey!);
  }

  /**
   * Ensure the client is connected.
   */
  private ensureConnected(): void {
    if (!this.connected) {
      throw new Error("Client not connected. Call connect() first.");
    }
  }

  /**
   * Get sync client options.
   */
  private getSyncOptions(): SyncClientOptions {
    if (!this.publicKey || !this.authToken) {
      throw new Error("Keys not derived. Call connect() first.");
    }

    return {
      serverUrl: this.serverUrl,
      serviceKey: this.serviceKey,
      clientId: getClientId(this.publicKey),
      authToken: this.authToken,
    };
  }
}
