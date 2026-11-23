/**
 * Nigori encryption for Brave Sync.
 *
 * Nigori is Chrome's encryption layer for sync data. It uses:
 * - scrypt or PBKDF2 for key derivation
 * - AES-128-CBC for encryption
 * - HMAC-SHA256 for authentication
 */
import { scrypt } from "@noble/hashes/scrypt.js";
import { pbkdf2 } from "@noble/hashes/pbkdf2.js";
import { sha1 } from "@noble/hashes/legacy.js";
import { hmac } from "@noble/hashes/hmac.js";
import { sha256 } from "@noble/hashes/sha2.js";
import { randomBytes } from "@noble/hashes/utils.js";
import { cbc } from "@noble/ciphers/aes.js";
import { KEY_DERIVATION_PBKDF2, KEY_DERIVATION_SCRYPT } from "../types.js";
import { extractFirst24Words } from "./bip39.js";
/**
 * Nigori scrypt parameters (Chromium's SCRYPT_8192_8_11).
 */
const NIGORI_SCRYPT_N = 8192; // 2^13
const NIGORI_SCRYPT_R = 8;
const NIGORI_SCRYPT_P = 11;
/**
 * PBKDF2 parameters (Chromium's legacy method).
 *
 * The salt is a HARDCODED constant in Chromium, pre-computed as:
 * PBKDF2_HMAC_SHA1(NigoriStream("dummy") + NigoriStream("localhost"), "saltsalt", 1001, 16)
 */
const NIGORI_PBKDF2_HARDCODED_SALT = new Uint8Array([
    0xc7, 0xca, 0xfb, 0x23, 0xec, 0x2a, 0x9d, 0x4c,
    0x03, 0x5a, 0x90, 0xae, 0xed, 0x8b, 0xa4, 0x98,
]);
const NIGORI_PBKDF2_USER_KEY_ITERATIONS = 1002;
const NIGORI_PBKDF2_ENC_KEY_ITERATIONS = 1003;
const NIGORI_PBKDF2_MAC_KEY_ITERATIONS = 1004;
/**
 * AES block size in bytes.
 */
const AES_BLOCK_SIZE = 16;
/**
 * Nigori type enum values for NigoriStream.
 */
const NIGORI_TYPE_PASSWORD = 1;
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
export function deriveNigoriKeysScrypt(seedPhrase, salt) {
    const passphrase24 = extractFirst24Words(seedPhrase);
    const passphraseBytes = new TextEncoder().encode(passphrase24);
    const derivedKey = scrypt(passphraseBytes, salt, {
        N: NIGORI_SCRYPT_N,
        r: NIGORI_SCRYPT_R,
        p: NIGORI_SCRYPT_P,
        dkLen: 32,
    });
    return {
        encryptionKey: derivedKey.slice(0, 16),
        macKey: derivedKey.slice(16),
    };
}
/**
 * Derive the PBKDF2 user key (1002 iterations) for the Nigori encryption keybag.
 *
 * The user key is stored as `deprecated_user_key` inside the NigoriKey entry of
 * the encrypted keybag. It lets other clients verify they derived the same keys.
 *
 * @param seedPhrase - The 24 or 25-word seed phrase
 * @returns 16-byte user key
 */
export function deriveNigoriUserKeyPbkdf2(seedPhrase) {
    const passphrase24 = extractFirst24Words(seedPhrase);
    const passphraseBytes = new TextEncoder().encode(passphrase24);
    return pbkdf2(sha1, passphraseBytes, NIGORI_PBKDF2_HARDCODED_SALT, {
        c: NIGORI_PBKDF2_USER_KEY_ITERATIONS,
        dkLen: 16,
    });
}
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
export function deriveNigoriKeysPbkdf2(seedPhrase) {
    const passphrase24 = extractFirst24Words(seedPhrase);
    const passphraseBytes = new TextEncoder().encode(passphrase24);
    const encryptionKey = pbkdf2(sha1, passphraseBytes, NIGORI_PBKDF2_HARDCODED_SALT, {
        c: NIGORI_PBKDF2_ENC_KEY_ITERATIONS,
        dkLen: 16,
    });
    const macKey = pbkdf2(sha1, passphraseBytes, NIGORI_PBKDF2_HARDCODED_SALT, {
        c: NIGORI_PBKDF2_MAC_KEY_ITERATIONS,
        dkLen: 16,
    });
    return { encryptionKey, macKey };
}
/**
 * Derive Nigori keys using the appropriate method based on the key derivation method.
 *
 * @param seedPhrase - The 24 or 25-word seed phrase
 * @param method - Key derivation method (1 = PBKDF2, 2 = scrypt)
 * @param salt - Required for scrypt, ignored for PBKDF2
 * @returns Encryption and MAC keys (each 16 bytes)
 */
export function deriveNigoriKeys(seedPhrase, method, salt) {
    if (method === KEY_DERIVATION_SCRYPT) {
        if (!salt) {
            throw new Error("Salt is required for scrypt key derivation");
        }
        return deriveNigoriKeysScrypt(seedPhrase, salt);
    }
    if (method === KEY_DERIVATION_PBKDF2) {
        return deriveNigoriKeysPbkdf2(seedPhrase);
    }
    throw new Error(`Unsupported key derivation method: ${method}`);
}
/**
 * Apply PKCS7 padding to data.
 *
 * @param data - Data to pad
 * @param blockSize - Block size (default: 16 for AES)
 * @returns Padded data
 */
function pkcs7Pad(data, blockSize = AES_BLOCK_SIZE) {
    const paddingLen = blockSize - (data.length % blockSize);
    const padded = new Uint8Array(data.length + paddingLen);
    padded.set(data);
    padded.fill(paddingLen, data.length);
    return padded;
}
/**
 * Remove PKCS7 padding from data.
 *
 * @param data - Padded data
 * @returns Unpadded data
 * @throws Error if padding is invalid
 */
function pkcs7Unpad(data) {
    if (data.length === 0) {
        throw new Error("Empty data");
    }
    const paddingLen = data[data.length - 1];
    if (paddingLen > data.length || paddingLen > AES_BLOCK_SIZE || paddingLen === 0) {
        throw new Error("Invalid padding");
    }
    // Verify all padding bytes
    for (let i = data.length - paddingLen; i < data.length; i++) {
        if (data[i] !== paddingLen) {
            throw new Error("Invalid padding");
        }
    }
    return data.slice(0, data.length - paddingLen);
}
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
export function nigoriEncrypt(plaintext, encryptionKey, macKey) {
    // Generate random IV
    const iv = randomBytes(AES_BLOCK_SIZE);
    // Pad plaintext
    const paddedPlaintext = pkcs7Pad(plaintext);
    // Encrypt with AES-CBC (disable auto-padding since we manually pad)
    const cipher = cbc(encryptionKey, iv, { disablePadding: true });
    const ciphertext = cipher.encrypt(paddedPlaintext);
    // Create HMAC over ciphertext ONLY (not iv + ciphertext)
    const mac = hmac(sha256, macKey, ciphertext);
    // Combine: IV || ciphertext || MAC
    const result = new Uint8Array(iv.length + ciphertext.length + mac.length);
    result.set(iv, 0);
    result.set(ciphertext, iv.length);
    result.set(mac, iv.length + ciphertext.length);
    return result;
}
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
export function nigoriDecrypt(encryptedData, encryptionKey, macKey) {
    if (encryptedData.length < AES_BLOCK_SIZE + 32) {
        throw new Error("Encrypted data too short");
    }
    // Split components
    const iv = encryptedData.slice(0, AES_BLOCK_SIZE);
    const mac = encryptedData.slice(-32);
    const ciphertext = encryptedData.slice(AES_BLOCK_SIZE, -32);
    // Verify HMAC over ciphertext ONLY (not iv + ciphertext)
    const expectedMac = hmac(sha256, macKey, ciphertext);
    if (!constantTimeEqual(mac, expectedMac)) {
        throw new Error("MAC verification failed");
    }
    // Decrypt (disable auto-padding since we manually handle it)
    const cipher = cbc(encryptionKey, iv, { disablePadding: true });
    const paddedPlaintext = cipher.decrypt(ciphertext);
    // Remove padding
    return pkcs7Unpad(paddedPlaintext);
}
/**
 * Build a NigoriStream encoded buffer.
 *
 * NigoriStream format:
 *   - 4 bytes: size of type field (always 4)
 *   - 4 bytes: type value (big-endian)
 *   - 4 bytes: size of data (big-endian)
 *   - N bytes: data
 *
 * @param typeValue - The Nigori type enum value (1=Password, 2=Name, etc.)
 * @param data - The data bytes to encode
 * @returns NigoriStream encoded bytes
 */
function buildNigoriStream(typeValue, data) {
    const result = new Uint8Array(4 + 4 + 4 + data.length);
    const view = new DataView(result.buffer);
    // Size of type field (always 4 bytes)
    view.setUint32(0, 4, false); // big-endian
    // Type value
    view.setUint32(4, typeValue, false); // big-endian
    // Size of data
    view.setUint32(8, data.length, false); // big-endian
    // Data
    result.set(data, 12);
    return result;
}
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
export function computeKeyName(encryptionKey, macKey) {
    // Build NigoriStream encoded plaintext
    // Format: [4-byte len=4][4-byte type=1][4-byte len=10]["nigori-key"]
    const nigoriKeyData = new TextEncoder().encode("nigori-key");
    const plaintext = buildNigoriStream(NIGORI_TYPE_PASSWORD, nigoriKeyData);
    // plaintext is now 22 bytes: 4 + 4 + 4 + 10
    // PKCS7 pad to AES block boundary (16 bytes)
    const paddedPlaintext = pkcs7Pad(plaintext); // 22 bytes -> 32 bytes
    // AES-128-CBC encrypt with zero IV (disable auto-padding since we manually pad)
    const zeroIv = new Uint8Array(16);
    const cipher = cbc(encryptionKey, zeroIv, { disablePadding: true });
    const ciphertext = cipher.encrypt(paddedPlaintext);
    // HMAC-SHA256 over ciphertext
    const mac = hmac(sha256, macKey, ciphertext);
    // Concatenate ciphertext + mac
    const output = new Uint8Array(ciphertext.length + mac.length);
    output.set(ciphertext, 0);
    output.set(mac, ciphertext.length);
    // Base64 encode
    return btoa(String.fromCharCode(...output));
}
/**
 * Constant-time comparison of two byte arrays.
 */
function constantTimeEqual(a, b) {
    if (a.length !== b.length) {
        return false;
    }
    let result = 0;
    for (let i = 0; i < a.length; i++) {
        result |= a[i] ^ b[i];
    }
    return result === 0;
}
//# sourceMappingURL=nigori.js.map