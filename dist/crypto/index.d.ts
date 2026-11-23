/**
 * Cryptographic utilities for Brave Sync.
 */
export { seedPhraseToBytes, extractFirst24Words } from "./bip39.js";
export { deriveEd25519Keypair, generateAuthToken, getClientId } from "./ed25519.js";
export { deriveNigoriKeys, deriveNigoriKeysScrypt, deriveNigoriKeysPbkdf2, deriveNigoriUserKeyPbkdf2, nigoriEncrypt, nigoriDecrypt, computeKeyName, } from "./nigori.js";
//# sourceMappingURL=index.d.ts.map