/**
 * Ed25519 key derivation and authentication for Brave Sync.
 *
 * Brave derives Ed25519 keys from the BIP39 seed using HKDF-SHA512
 * with a specific salt and info parameter.
 */
import { hkdf } from "@noble/hashes/hkdf.js";
import { sha512 } from "@noble/hashes/sha2.js";
import * as ed25519 from "@noble/ed25519";
/**
 * Configure @noble/ed25519 to use pure-JS SHA-512 from @noble/hashes
 * instead of crypto.subtle, which is unavailable in React Native.
 */
ed25519.etc.sha512Sync = (...msgs) => {
    const h = sha512.create();
    for (const msg of msgs) {
        h.update(msg);
    }
    return h.digest();
};
ed25519.etc.sha512Async = async (...msgs) => {
    const h = sha512.create();
    for (const msg of msgs) {
        h.update(msg);
    }
    return h.digest();
};
/**
 * Brave's HKDF salt for sync authentication key derivation (64 bytes).
 * From brave-core/components/sync/service/brave_sync_auth_manager.cc
 */
const BRAVE_HKDF_SALT = new Uint8Array([
    72, 203, 156, 43, 64, 229, 225, 127, 214, 158, 50, 29, 130,
    186, 182, 207, 6, 108, 47, 254, 245, 71, 198, 109, 44, 108,
    32, 193, 221, 126, 119, 143, 112, 113, 87, 184, 239, 231, 230,
    234, 28, 135, 54, 42, 9, 243, 39, 30, 179, 147, 194, 211,
    212, 239, 225, 52, 192, 219, 145, 40, 95, 19, 142, 98,
]);
/**
 * HKDF info string for sync authentication.
 */
const BRAVE_HKDF_INFO = new TextEncoder().encode("sync-auth-key");
/**
 * Derive Ed25519 keypair from seed using HKDF-SHA512.
 *
 * Based on Brave's brave_sync_auth_manager.cc implementation:
 * - Use HKDF-SHA512 with the seed as IKM
 * - Use Brave's specific 64-byte salt
 * - Use "sync-auth-key" as the info parameter
 * - Derive 32 bytes as the Ed25519 seed
 *
 * @param seed - 32-byte raw seed from BIP39 entropy
 * @returns Ed25519 keypair with public and private keys
 */
export async function deriveEd25519Keypair(seed) {
    // Derive 32 bytes using HKDF-SHA512 with Brave's exact parameters
    const derivedSeed = hkdf(sha512, seed, BRAVE_HKDF_SALT, BRAVE_HKDF_INFO, 32);
    // Get public key from the derived seed
    const publicKey = await ed25519.getPublicKeyAsync(derivedSeed);
    return {
        publicKey,
        privateKey: derivedSeed,
    };
}
/**
 * Generate authentication token for Brave sync server.
 *
 * Token format: base64(timestamp_hex | signature_hex | public_key_hex)
 *
 * Note: Brave uses lowercase hex for timestamp bytes, UPPERCASE for signature and pubkey.
 *
 * @param privateKey - Ed25519 private key (32 bytes)
 * @param publicKey - Ed25519 public key (32 bytes)
 * @returns Base64-encoded authentication token
 */
export async function generateAuthToken(privateKey, publicKey) {
    // Get current timestamp in milliseconds
    const timestampMs = Date.now();
    const timestampStr = timestampMs.toString();
    const timestampBytes = new TextEncoder().encode(timestampStr);
    // Sign the timestamp
    const signature = await ed25519.signAsync(timestampBytes, privateKey);
    // Convert to hex strings
    // Note: Brave uses lowercase hex for timestamp bytes, UPPERCASE for signature and pubkey
    const timestampHex = bytesToHex(timestampBytes); // lowercase (ASCII hex of timestamp string)
    const signatureHex = bytesToHex(signature).toUpperCase(); // UPPERCASE
    const publicKeyHex = bytesToHex(publicKey).toUpperCase(); // UPPERCASE
    // Construct token: timestamp_hex|signed_timestamp_hex|public_key_hex
    const tokenStr = `${timestampHex}|${signatureHex}|${publicKeyHex}`;
    // Base64 standard encode (not URL-safe)
    return btoa(tokenStr);
}
/**
 * Convert bytes to lowercase hex string.
 */
function bytesToHex(bytes) {
    return Array.from(bytes)
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
}
/**
 * Get client ID from public key (hex-encoded public key).
 *
 * @param publicKey - Ed25519 public key (32 bytes)
 * @returns Hex-encoded client ID
 */
export function getClientId(publicKey) {
    return bytesToHex(publicKey);
}
//# sourceMappingURL=ed25519.js.map