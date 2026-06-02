/**
 * Nigori encryption for Brave Sync.
 *
 * Nigori is Chrome's encryption layer for sync data. It uses:
 * - scrypt or PBKDF2 for key derivation
 * - AES-128-CBC for encryption
 * - HMAC-SHA256 for authentication
 */
import type { NigoriKeys } from "../types.js";
/**
 * Derive Nigori encryption and MAC keys from passphrase using scrypt.
 *
 * Parameters match Chromium's SCRYPT_8192_8_11 key derivation method.
 *
 * IMPORTANT: For Brave Sync, the passphrase is the first 24 words of the
 * seed phrase (without the 25th word). The 25th word is only used for
 * Ed25519 authentication, not for encryption.
 *
 * @param seedPhrase - The 24 or 25-word seed phrase
 * @param salt - 32-byte random salt from Nigori settings
 * @returns Encryption and MAC keys (each 16 bytes)
 */
export declare function deriveNigoriKeysScrypt(seedPhrase: string, salt: Uint8Array): NigoriKeys;
/**
 * Derive the PBKDF2 user key (1002 iterations) for the Nigori encryption keybag.
 *
 * The user key is stored as `deprecated_user_key` inside the NigoriKey entry of
 * the encrypted keybag. It lets other clients verify they derived the same keys.
 *
 * @param seedPhrase - The 24 or 25-word seed phrase
 * @returns 16-byte user key
 */
export declare function deriveNigoriUserKeyPbkdf2(seedPhrase: string): Uint8Array;
/**
 * Derive Nigori encryption and MAC keys from passphrase using PBKDF2-HMAC-SHA1
 * (Chromium's legacy method).
 *
 * Uses a hardcoded salt and separate iteration counts for each key:
 *   - encryption_key: PBKDF2(passphrase, salt, 1003 iterations, 16 bytes)
 *   - mac_key: PBKDF2(passphrase, salt, 1004 iterations, 16 bytes)
 *
 * @param seedPhrase - The 24 or 25-word seed phrase
 * @returns Encryption and MAC keys (each 16 bytes)
 */
export declare function deriveNigoriKeysPbkdf2(seedPhrase: string): NigoriKeys;
/**
 * Derive Nigori keys using the appropriate method based on the key derivation method.
 *
 * @param seedPhrase - The 24 or 25-word seed phrase
 * @param method - Key derivation method (1 = PBKDF2, 2 = scrypt)
 * @param salt - Required for scrypt, ignored for PBKDF2
 * @returns Encryption and MAC keys (each 16 bytes)
 */
export declare function deriveNigoriKeys(seedPhrase: string, method: number, salt?: Uint8Array): NigoriKeys;
/**
 * Encrypt data using Nigori encryption (AES-128-CBC + HMAC-SHA256).
 *
 * Format: IV (16 bytes) || ciphertext || HMAC (32 bytes)
 *
 * Note: HMAC is computed over ciphertext ONLY, not iv + ciphertext.
 *
 * @param plaintext - Data to encrypt
 * @param encryptionKey - 16-byte AES key
 * @param macKey - 16-byte HMAC key
 * @returns Encrypted data as bytes
 */
export declare function nigoriEncrypt(plaintext: Uint8Array, encryptionKey: Uint8Array, macKey: Uint8Array): Uint8Array;
/**
 * Decrypt data using Nigori encryption (AES-128-CBC + HMAC-SHA256).
 *
 * Note: HMAC is computed over ciphertext ONLY, not iv + ciphertext.
 *
 * @param encryptedData - IV || ciphertext || HMAC
 * @param encryptionKey - 16-byte AES key
 * @param macKey - 16-byte HMAC key
 * @returns Decrypted plaintext
 * @throws Error if MAC verification fails or decryption fails
 */
export declare function nigoriDecrypt(encryptedData: Uint8Array, encryptionKey: Uint8Array, macKey: Uint8Array): Uint8Array;
/**
 * Compute the key name for Nigori encryption.
 *
 * The key name is used to identify which key was used to encrypt data.
 *
 * Chromium's algorithm:
 *   1. Create NigoriStream: type=Password(1) + "nigori-key"
 *   2. PKCS7 pad to AES block boundary
 *   3. AES-128-CBC encrypt with encryption_key and zero IV
 *   4. HMAC-SHA256 the ciphertext with mac_key
 *   5. Concatenate ciphertext + mac
 *   6. Base64 encode
 *
 * @param encryptionKey - The 16-byte AES encryption key
 * @param macKey - The 16-byte HMAC key
 * @returns Base64-encoded key name
 */
export declare function computeKeyName(encryptionKey: Uint8Array, macKey: Uint8Array): string;
//# sourceMappingURL=nigori.d.ts.map