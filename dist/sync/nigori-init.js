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
import { create, toBinary } from "@bufbuild/protobuf";
import { SyncEntitySchema, EntitySpecificsSchema, NigoriSpecificsSchema, NigoriKeySchema, NigoriKeyBagSchema, EncryptedDataSchema, } from "../proto/index.js";
import { CommitResponse_ResponseType } from "../proto/generated/sync_pb.js";
import { deriveNigoriKeysPbkdf2, deriveNigoriUserKeyPbkdf2, nigoriEncrypt, computeKeyName, } from "../crypto/index.js";
import { KEY_DERIVATION_PBKDF2 } from "../types.js";
import { commitEntities } from "./client.js";
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
export function createEncryptionKeybag(userKey, encryptionKey, macKey) {
    const keyName = computeKeyName(encryptionKey, macKey);
    const nigoriKey = create(NigoriKeySchema, {
        deprecatedName: keyName,
        deprecatedUserKey: userKey,
        encryptionKey,
        macKey,
    });
    const keybag = create(NigoriKeyBagSchema, {
        key: [nigoriKey],
    });
    const plaintext = toBinary(NigoriKeyBagSchema, keybag);
    const ciphertext = nigoriEncrypt(plaintext, encryptionKey, macKey);
    const blob = btoa(String.fromCharCode(...ciphertext));
    return create(EncryptedDataSchema, {
        keyName,
        blob,
    });
}
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
export function createNigoriSyncEntity(seedPhrase) {
    const { encryptionKey, macKey } = deriveNigoriKeysPbkdf2(seedPhrase);
    const userKey = deriveNigoriUserKeyPbkdf2(seedPhrase);
    const encryptionKeybag = createEncryptionKeybag(userKey, encryptionKey, macKey);
    const nowMs = BigInt(Date.now());
    const nigori = create(NigoriSpecificsSchema, {
        passphraseType: 4, // CUSTOM_PASSPHRASE
        customPassphraseKeyDerivationMethod: KEY_DERIVATION_PBKDF2,
        encryptionKeybag,
        keybagIsFrozen: true,
        encryptEverything: true,
        customPassphraseTime: nowMs,
    });
    const specifics = create(EntitySpecificsSchema, {
        specificsVariant: { case: "nigori", value: nigori },
    });
    return create(SyncEntitySchema, {
        idString: "nigori",
        version: 0n,
        name: "Nigori",
        folder: false,
        deleted: false,
        mtime: nowMs,
        ctime: nowMs,
        specifics,
    });
}
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
export async function initializeNigori(options, seedPhrase) {
    const entity = createNigoriSyncEntity(seedPhrase);
    const response = await commitEntities(options, [entity]);
    if (response.errorCode !== 0) {
        throw new Error(`Failed to initialize Nigori: server error code ${response.errorCode}`);
    }
    if (response.commit) {
        for (const entry of response.commit.entryresponse) {
            if (entry.responseType !== CommitResponse_ResponseType.SUCCESS) {
                throw new Error(`Failed to create Nigori entity: ${entry.errorMessage}`);
            }
        }
    }
    return {
        passphraseType: 4,
        keyDerivationMethod: KEY_DERIVATION_PBKDF2,
        encryptEverything: true,
    };
}
//# sourceMappingURL=nigori-init.js.map