/**
 * BIP39 seed phrase handling for Brave Sync.
 *
 * Brave uses 25-word seed phrases where:
 * - First 24 words = the actual seed (standard BIP39 256-bit entropy)
 * - 25th word = daily rotating security code (ignored for cryptographic operations)
 */
import { mnemonicToEntropy, validateMnemonic } from "@scure/bip39";
import { wordlist } from "@scure/bip39/wordlists/english.js";
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
export function seedPhraseToBytes(seedPhrase) {
    const words = seedPhrase.trim().split(/\s+/);
    const wordCount = words.length;
    if (wordCount === 24) {
        // Standard BIP39 24-word format
        if (!validateMnemonic(seedPhrase, wordlist)) {
            throw new Error("Invalid BIP39 mnemonic phrase");
        }
        const entropy = mnemonicToEntropy(seedPhrase, wordlist);
        if (entropy.length !== 32) {
            throw new Error(`Expected 32-byte entropy, got ${entropy.length} bytes`);
        }
        return entropy;
    }
    if (wordCount === 25) {
        // Brave's 25-word format:
        // - First 24 words = standard BIP39 seed
        // - 25th word = daily rotating time code (ignored for key derivation)
        const first24Words = words.slice(0, 24).join(" ");
        if (!validateMnemonic(first24Words, wordlist)) {
            throw new Error("Invalid BIP39 mnemonic phrase (first 24 words)");
        }
        const entropy = mnemonicToEntropy(first24Words, wordlist);
        if (entropy.length !== 32) {
            throw new Error(`Expected 32-byte entropy, got ${entropy.length} bytes`);
        }
        return entropy;
    }
    throw new Error(`Expected 24 or 25 words, got ${wordCount}`);
}
/**
 * Extract the first 24 words from a seed phrase.
 * This is needed because Nigori encryption uses only the first 24 words.
 *
 * @param seedPhrase - The BIP39 mnemonic phrase (24 or 25 words)
 * @returns The first 24 words as a string
 */
export function extractFirst24Words(seedPhrase) {
    const words = seedPhrase.trim().split(/\s+/);
    if (words.length < 24) {
        throw new Error(`Expected at least 24 words, got ${words.length}`);
    }
    return words.slice(0, 24).join(" ");
}
//# sourceMappingURL=bip39.js.map