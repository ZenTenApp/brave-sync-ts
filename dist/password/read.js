/**
 * Password reading/listing for Brave Sync.
 *
 * Fetches and decrypts password entries from the sync server.
 */
import { create, fromBinary } from "@bufbuild/protobuf";
import { ClientToServerMessageSchema, GetUpdatesMessageSchema, DataTypeProgressMarkerSchema, PasswordSpecificsDataSchema, } from "../proto/index.js";
import { sendSyncRequest } from "../sync/client.js";
import { nigoriDecrypt } from "../crypto/nigori.js";
import { BRAVE_SYNC_CONSTANTS } from "../types.js";
/**
 * Windows epoch offset: seconds between 1601-01-01 and 1970-01-01.
 */
const WINDOWS_EPOCH_OFFSET = BRAVE_SYNC_CONSTANTS.WINDOWS_EPOCH_OFFSET;
/**
 * Convert Windows epoch microseconds to Unix timestamp (seconds).
 *
 * @param windowsMicros - Windows epoch microseconds
 * @returns Unix timestamp in seconds
 */
function windowsEpochMicrosToUnix(windowsMicros) {
    return Number(windowsMicros) / 1_000_000 - WINDOWS_EPOCH_OFFSET;
}
/**
 * Map a proto Note message to a PasswordNoteEntry.
 *
 * @param protoNote - The proto note message
 * @returns PasswordNoteEntry
 */
function mapProtoNote(protoNote) {
    const entry = {
        uniqueDisplayName: protoNote.uniqueDisplayName,
        value: protoNote.value,
        hideByDefault: protoNote.hideByDefault,
    };
    if (protoNote.dateCreatedWindowsEpochMicros) {
        entry.dateCreated = windowsEpochMicrosToUnix(protoNote.dateCreatedWindowsEpochMicros);
    }
    return entry;
}
/**
 * Fetch and decrypt all passwords from the sync server.
 *
 * @param options - Sync client options
 * @param encryptionKey - 16-byte AES encryption key
 * @param macKey - 16-byte HMAC key
 * @returns List of decrypted password entries
 */
export async function fetchPasswords(options, encryptionKey, macKey) {
    try {
        // Create GetUpdates request for Password type
        const getUpdates = create(GetUpdatesMessageSchema, {
            getUpdatesOrigin: 12, // GU_TRIGGER
            fromProgressMarker: [
                create(DataTypeProgressMarkerSchema, {
                    dataTypeId: BRAVE_SYNC_CONSTANTS.PASSWORD_TYPE_ID,
                    token: new Uint8Array(0), // Empty token to get all entities
                }),
            ],
        });
        const message = create(ClientToServerMessageSchema, {
            share: "",
            messageContents: 2, // GET_UPDATES
            getUpdates,
        });
        const response = await sendSyncRequest(options, message);
        if (!response.getUpdates) {
            return {
                success: true,
                passwords: [],
                decryptionFailures: 0,
            };
        }
        const passwords = [];
        let decryptionFailures = 0;
        for (const entity of response.getUpdates.entries) {
            // Skip deleted entries
            if (entity.deleted) {
                continue;
            }
            const specifics = entity.specifics;
            if (specifics?.specificsVariant?.case !== "password") {
                continue;
            }
            const passwordSpecifics = specifics.specificsVariant.value;
            if (!passwordSpecifics.encrypted?.blob) {
                continue;
            }
            // Try to decrypt the password data
            try {
                const ciphertext = Uint8Array.from(atob(passwordSpecifics.encrypted.blob), (c) => c.charCodeAt(0));
                const plaintext = nigoriDecrypt(ciphertext, encryptionKey, macKey);
                const passwordData = fromBinary(PasswordSpecificsDataSchema, plaintext);
                const entry = {
                    id: entity.idString,
                    version: entity.version,
                    clientTagHash: entity.clientTagHash,
                    name: entity.name,
                    signonRealm: passwordData.signonRealm,
                    origin: passwordData.origin,
                    username: passwordData.usernameValue,
                    password: passwordData.passwordValue,
                    usernameElement: passwordData.usernameElement,
                    passwordElement: passwordData.passwordElement,
                    scheme: passwordData.scheme,
                    type: passwordData.type,
                    timesUsed: passwordData.timesUsed,
                    blacklisted: passwordData.blacklisted,
                    notes: (passwordData.notes?.note ?? []).map(mapProtoNote),
                };
                // Add timestamps if present
                if (passwordData.dateCreated) {
                    entry.dateCreated = windowsEpochMicrosToUnix(passwordData.dateCreated);
                }
                if (passwordData.dateLastUsed) {
                    entry.dateLastUsed = windowsEpochMicrosToUnix(passwordData.dateLastUsed);
                }
                if (passwordData.datePasswordModifiedWindowsEpochMicros) {
                    entry.datePasswordModified = windowsEpochMicrosToUnix(passwordData.datePasswordModifiedWindowsEpochMicros);
                }
                passwords.push(entry);
            }
            catch {
                decryptionFailures++;
            }
        }
        return {
            success: true,
            passwords,
            decryptionFailures,
        };
    }
    catch (error) {
        return {
            success: false,
            passwords: [],
            decryptionFailures: 0,
            error: error instanceof Error ? error.message : String(error),
        };
    }
}
//# sourceMappingURL=read.js.map