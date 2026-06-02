/**
 * Ed25519 key derivation and authentication for Brave Sync.
 *
 * Brave derives Ed25519 keys from the BIP39 seed using HKDF-SHA512
 * with a specific salt and info parameter.
 */
import type { Ed25519Keypair } from "../types.js";
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
export declare function deriveEd25519Keypair(seed: Uint8Array): Promise<Ed25519Keypair>;
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
export declare function generateAuthToken(privateKey: Uint8Array, publicKey: Uint8Array): Promise<string>;
/**
 * Get client ID from public key (hex-encoded public key).
 *
 * @param publicKey - Ed25519 public key (32 bytes)
 * @returns Hex-encoded client ID
 */
export declare function getClientId(publicKey: Uint8Array): string;
//# sourceMappingURL=ed25519.d.ts.map