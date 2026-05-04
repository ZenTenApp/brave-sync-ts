/**
 * TypeScript type definitions for Brave Sync library.
 */

import type { PasswordNote } from './password/index.js';

/**
 * Options for pushing a password to Brave Sync.
 */
export interface PushPasswordOptions {
  /** 24 or 25-word BIP39 seed phrase */
  seedPhrase: string;
  /** Website URL (e.g., "https://example.com") */
  url: string;
  /** Username or email */
  username: string;
  /** Password value */
  password: string;
  /** Optional note to attach to the password */
  note?: PasswordNote;
  /** Sync server URL (defaults to Brave production server) */
  serverUrl?: string;
  /** Brave service key (defaults to production key) */
  serviceKey?: string;
}

/**
 * Result of pushing a password to Brave Sync.
 */
export interface PushPasswordResult {
  /** Whether the operation succeeded */
  success: boolean;
  /** Entity ID assigned by the server */
  entityId?: string;
  /** Error message if the operation failed */
  error?: string;
}

/** PBKDF2_HMAC_SHA1_1003 key derivation method */
export const KEY_DERIVATION_PBKDF2 = 1;

/** SCRYPT_8192_8_11 key derivation method */
export const KEY_DERIVATION_SCRYPT = 2;

/**
 * Nigori encryption settings fetched from the server.
 */
export interface NigoriSettings {
  /** Passphrase type (4 = CUSTOM_PASSPHRASE) */
  passphraseType: number;
  /** Key derivation method (1 = PBKDF2, 2 = scrypt) */
  keyDerivationMethod: number;
  /** Salt for scrypt key derivation (32 bytes). Undefined for PBKDF2. */
  salt?: Uint8Array;
  /** Whether all data types are encrypted */
  encryptEverything: boolean;
}

/**
 * Derived encryption keys from Nigori key derivation.
 */
export interface NigoriKeys {
  /** 16-byte AES encryption key */
  encryptionKey: Uint8Array;
  /** 16-byte HMAC MAC key */
  macKey: Uint8Array;
}

/**
 * Ed25519 keypair derived from seed.
 */
export interface Ed25519Keypair {
  /** 32-byte public key */
  publicKey: Uint8Array;
  /** 32-byte private key seed */
  privateKey: Uint8Array;
}

/**
 * Sync client configuration.
 */
export interface SyncClientConfig {
  /** 24 or 25-word BIP39 seed phrase */
  seedPhrase: string;
  /** Sync server URL (defaults to Brave production server) */
  serverUrl?: string;
  /** Brave service key (defaults to production key) */
  serviceKey?: string;
}

/**
 * Constants for Brave Sync.
 */
export const BRAVE_SYNC_CONSTANTS = {
  /** Default Brave sync server URL */
  DEFAULT_SERVER_URL: "https://sync-v2.brave.com/v2",
  /** Brave service key for production server */
  SERVICE_KEY: "qztbjzBqJueQZLFkwTTJrieu8Vw3789u",
  /** Password sync type ID (from entity_specifics.proto) */
  PASSWORD_TYPE_ID: 45873,
  /** Nigori sync type ID */
  NIGORI_TYPE_ID: 47745,
  /** Bookmark sync type ID */
  BOOKMARK_TYPE_ID: 32904,
  /** Extension settings sync type ID (from entity_specifics.proto field 96159) */
  EXTENSION_SETTING_TYPE_ID: 96159,
  /** Brave Authenticator extension ID */
  AUTHENTICATOR_EXTENSION_ID: "bhghoamapcdpbohphigoooaddinpkbai",
  /** Windows epoch offset: seconds between 1601-01-01 and 1970-01-01 */
  WINDOWS_EPOCH_OFFSET: 11644473600,
} as const;
