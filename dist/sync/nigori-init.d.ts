/**
 * Nigori sync-chain initialization for Brave Sync.
 *
 * When a seed phrase has never been used with Brave Sync (no Nigori entity
 * exists on the server), write operations require creating the Nigori entity
 * first.  This mirrors the logic in the original Python client's
 * `initialize_encryption` / `push_bookmark` flow.
 *
 * The Nigori entity stores:
 *   - Which key-derivation method to use (PBKDF2 or scrypt).
 *   - For scrypt: the random salt.
 *   - An `encryption_keybag` (a NigoriKeyBag encrypted with the derived keys)
 *     so that other clients can verify they are using the same keys.
 */
import { type SyncEntity, type EncryptedData } from "../proto/index.js";
import { type NigoriSettings } from "../types.js";
import { type SyncClientOptions } from "./client.js";
/**
 * Build the `encryption_keybag` field for a NigoriSpecifics message.
 *
 * The keybag is a NigoriKeyBag protobuf (a single NigoriKey entry)
 * serialised and then encrypted with Nigori AES-CBC+HMAC.  Other clients
 * decrypt it to verify they derived the same keys.
 *
 * @param userKey - 16-byte user key (PBKDF2 @ 1002 iterations, or encryptionKey for scrypt)
 * @param encryptionKey - 16-byte AES encryption key
 * @param macKey - 16-byte HMAC MAC key
 * @returns EncryptedData containing the serialised + encrypted keybag
 */
export declare function createEncryptionKeybag(userKey: Uint8Array, encryptionKey: Uint8Array, macKey: Uint8Array): EncryptedData;
/**
 * Build a SyncEntity representing the Nigori node using PBKDF2 key derivation.
 *
 * Uses `id_string = "nigori"` and `version = 0` so the server treats it as a
 * new entity creation.  All other fields mirror what Brave browser sets when
 * it initialises a new sync chain with a custom passphrase.
 *
 * @param seedPhrase - The 24 or 25-word seed phrase (passphrase for encryption)
 * @returns SyncEntity ready to be committed
 */
export declare function createNigoriSyncEntity(seedPhrase: string): SyncEntity;
/**
 * Initialise encryption for a sync chain that has no Nigori entity yet.
 *
 * Creates a Nigori entity using PBKDF2 key derivation (Chromium's default for
 * custom-passphrase chains) and commits it to the server.  Returns the
 * NigoriSettings so the caller can immediately derive the encryption keys and
 * proceed with its write operation.
 *
 * @param options - Sync client options (server URL, auth token, client ID)
 * @param seedPhrase - The seed phrase used as the custom passphrase
 * @returns NigoriSettings describing the newly created Nigori
 * @throws Error if the server rejects the commit
 */
export declare function initializeNigori(options: SyncClientOptions, seedPhrase: string): Promise<NigoriSettings>;
//# sourceMappingURL=nigori-init.d.ts.map