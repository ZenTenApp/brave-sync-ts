/**
 * BIP39 seed phrase handling for Brave Sync.
 *
 * Brave uses 25-word seed phrases where:
 * - First 24 words = the actual seed (standard BIP39 256-bit entropy)
 * - 25th word = daily rotating security code (ignored for cryptographic operations)
 */
/**
 * Convert a BIP39 seed phrase to 32-byte seed.
 *
 * Brave uses 25-word seed phrases where:
 * - First 24 words = the actual seed (standard BIP39 256-bit entropy)
 * - 25th word = daily rotating security code (days since May 10, 2022)
 *
 * The 25th word is NOT part of the cryptographic seed - it's a time-based
 * verification code to prevent stale sync phrases from being used.
 *
 * @param seedPhrase - The BIP39 mnemonic phrase (24 or 25 words)
 * @returns 32-byte seed as Uint8Array
 * @throws Error if the seed phrase is invalid
 */
export declare function seedPhraseToBytes(seedPhrase: string): Uint8Array;
/**
 * Extract the first 24 words from a seed phrase.
 * This is needed because Nigori encryption uses only the first 24 words.
 *
 * @param seedPhrase - The BIP39 mnemonic phrase (24 or 25 words)
 * @returns The first 24 words as a string
 */
export declare function extractFirst24Words(seedPhrase: string): string;
//# sourceMappingURL=bip39.d.ts.map