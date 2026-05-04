/**
 * Unit tests for cryptographic functions.
 */

import { describe, it, expect, beforeAll } from "vitest";
import {
  seedPhraseToBytes,
  extractFirst24Words,
  deriveEd25519Keypair,
  generateAuthToken,
  getClientId,
  deriveNigoriKeys,
  deriveNigoriKeysPbkdf2,
  nigoriEncrypt,
  nigoriDecrypt,
  computeKeyName,
} from "../src/crypto/index.js";
import { KEY_DERIVATION_SCRYPT, KEY_DERIVATION_PBKDF2 } from "../src/types.js";
import { escapePath, computePasswordUniqueTag, computeClientTagHash } from "../src/password/index.js";

// Test seed phrase (DO NOT USE IN PRODUCTION - this is for testing only)
const TEST_SEED_24 = "abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon art";

describe("BIP39", () => {
  it("should convert 24-word seed phrase to bytes", () => {
    const bytes = seedPhraseToBytes(TEST_SEED_24);
    expect(bytes).toBeInstanceOf(Uint8Array);
    expect(bytes.length).toBe(32);
  });

  it("should handle 25-word seed phrase (ignoring 25th word)", () => {
    const seed25 = TEST_SEED_24 + " abandon"; // Add a 25th word
    const bytes = seedPhraseToBytes(seed25);
    expect(bytes).toBeInstanceOf(Uint8Array);
    expect(bytes.length).toBe(32);

    // Should be same as 24-word version
    const bytes24 = seedPhraseToBytes(TEST_SEED_24);
    expect(bytes).toEqual(bytes24);
  });

  it("should extract first 24 words", () => {
    const seed25 = TEST_SEED_24 + " extra";
    const first24 = extractFirst24Words(seed25);
    expect(first24).toBe(TEST_SEED_24);
  });

  it("should throw on invalid seed phrase", () => {
    expect(() => seedPhraseToBytes("invalid seed phrase")).toThrow();
  });
});

describe("Ed25519", () => {
  it("should derive keypair from seed", async () => {
    const seed = seedPhraseToBytes(TEST_SEED_24);
    const keypair = await deriveEd25519Keypair(seed);

    expect(keypair.publicKey).toBeInstanceOf(Uint8Array);
    expect(keypair.publicKey.length).toBe(32);
    expect(keypair.privateKey).toBeInstanceOf(Uint8Array);
    expect(keypair.privateKey.length).toBe(32);
  });

  it("should generate deterministic keypair", async () => {
    const seed = seedPhraseToBytes(TEST_SEED_24);
    const keypair1 = await deriveEd25519Keypair(seed);
    const keypair2 = await deriveEd25519Keypair(seed);

    expect(keypair1.publicKey).toEqual(keypair2.publicKey);
    expect(keypair1.privateKey).toEqual(keypair2.privateKey);
  });

  it("should generate auth token", async () => {
    const seed = seedPhraseToBytes(TEST_SEED_24);
    const keypair = await deriveEd25519Keypair(seed);
    const token = await generateAuthToken(keypair.privateKey, keypair.publicKey);

    expect(typeof token).toBe("string");
    expect(token.length).toBeGreaterThan(0);

    // Token should be base64
    expect(() => atob(token)).not.toThrow();
  });

  it("should get client ID from public key", async () => {
    const seed = seedPhraseToBytes(TEST_SEED_24);
    const keypair = await deriveEd25519Keypair(seed);
    const clientId = getClientId(keypair.publicKey);

    expect(typeof clientId).toBe("string");
    expect(clientId.length).toBe(64); // 32 bytes = 64 hex chars
  });
});

describe("Nigori", () => {
  const testSalt = new Uint8Array(32).fill(1); // Test salt

  // Scrypt with N=8192 is intentionally slow. Derive once and reuse across
  // all tests that just need a valid key pair, so scrypt only runs once.
  let scryptKeys: ReturnType<typeof deriveNigoriKeys>;

  beforeAll(() => {
    scryptKeys = deriveNigoriKeys(TEST_SEED_24, KEY_DERIVATION_SCRYPT, testSalt);
  }, 30_000);

  it("should derive encryption keys (scrypt)", () => {
    expect(scryptKeys.encryptionKey).toBeInstanceOf(Uint8Array);
    expect(scryptKeys.encryptionKey.length).toBe(16);
    expect(scryptKeys.macKey).toBeInstanceOf(Uint8Array);
    expect(scryptKeys.macKey.length).toBe(16);
  });

  it("should derive encryption keys (pbkdf2)", () => {
    const keys = deriveNigoriKeysPbkdf2(TEST_SEED_24);

    expect(keys.encryptionKey).toBeInstanceOf(Uint8Array);
    expect(keys.encryptionKey.length).toBe(16);
    expect(keys.macKey).toBeInstanceOf(Uint8Array);
    expect(keys.macKey.length).toBe(16);
  });

  it("should dispatch via deriveNigoriKeys for pbkdf2", () => {
    const keysAuto = deriveNigoriKeys(TEST_SEED_24, KEY_DERIVATION_PBKDF2);
    const keysDirect = deriveNigoriKeysPbkdf2(TEST_SEED_24);

    expect(keysAuto.encryptionKey).toEqual(keysDirect.encryptionKey);
    expect(keysAuto.macKey).toEqual(keysDirect.macKey);
  });

  it("should derive deterministic keys", () => {
    // Run a second derivation and confirm it matches the one from beforeAll.
    const keys2 = deriveNigoriKeys(TEST_SEED_24, KEY_DERIVATION_SCRYPT, testSalt);

    expect(scryptKeys.encryptionKey).toEqual(keys2.encryptionKey);
    expect(scryptKeys.macKey).toEqual(keys2.macKey);
  }, 30_000);

  it("should encrypt and decrypt data", () => {
    const plaintext = new TextEncoder().encode("Hello, World!");

    const encrypted = nigoriEncrypt(plaintext, scryptKeys.encryptionKey, scryptKeys.macKey);
    expect(encrypted).toBeInstanceOf(Uint8Array);
    expect(encrypted.length).toBeGreaterThan(plaintext.length);

    const decrypted = nigoriDecrypt(encrypted, scryptKeys.encryptionKey, scryptKeys.macKey);
    expect(decrypted).toEqual(plaintext);
  });

  it("should compute key name", () => {
    const keyName = computeKeyName(scryptKeys.encryptionKey, scryptKeys.macKey);

    expect(typeof keyName).toBe("string");
    expect(keyName.length).toBeGreaterThan(0);

    // Key name should be base64
    expect(() => atob(keyName)).not.toThrow();
  });
});

describe("Password Unique Tag", () => {
  it("should escape special characters", () => {
    expect(escapePath("hello world")).toBe("hello%20world");
    expect(escapePath("test#hash")).toBe("test%23hash");
    expect(escapePath("normal")).toBe("normal");
    expect(escapePath("path/to/file")).toBe("path/to/file"); // / is NOT escaped
  });

  it("should compute password unique tag", () => {
    const tag = computePasswordUniqueTag(
      "https://example.com/",
      "",
      "user@example.com",
      "",
      "https://example.com/"
    );

    expect(typeof tag).toBe("string");
    expect(tag).toContain("|");
    expect(tag.split("|").length).toBe(5);
  });

  it("should compute client tag hash", () => {
    const uniqueTag = "https://example.com/||user@example.com||https://example.com/";
    const hash = computeClientTagHash(uniqueTag);

    expect(typeof hash).toBe("string");
    expect(hash.length).toBeGreaterThan(0);

    // Hash should be base64
    expect(() => atob(hash)).not.toThrow();
  });
});
