/**
 * Password entity creation for Brave Sync.
 *
 * Creates encrypted password entries compatible with Brave browser sync.
 * The structure matches passwords manually added via Brave Settings > Passwords.
 */
import { create, toBinary } from "@bufbuild/protobuf";
import { SyncEntitySchema, EntitySpecificsSchema, PasswordSpecificsSchema, PasswordSpecificsDataSchema, PasswordSpecificsData_NotesSchema, PasswordSpecificsData_Notes_NoteSchema, EncryptedDataSchema, } from "../proto/index.js";
import { nigoriEncrypt, computeKeyName } from "../crypto/index.js";
import { computePasswordUniqueTag, computeClientTagHash } from "./unique-tag.js";
import { BRAVE_SYNC_CONSTANTS } from "../types.js";
/**
 * Windows epoch offset: seconds between 1601-01-01 and 1970-01-01.
 */
const WINDOWS_EPOCH_OFFSET = BigInt(BRAVE_SYNC_CONSTANTS.WINDOWS_EPOCH_OFFSET);
/**
 * Convert Unix timestamp (seconds) to Windows epoch microseconds.
 *
 * Windows epoch starts 1601-01-01, Unix epoch starts 1970-01-01.
 *
 * @param unixTimestamp - Unix timestamp in seconds
 * @returns Windows epoch timestamp in microseconds
 */
function unixToWindowsEpochMicros(unixTimestamp) {
    return BigInt(Math.floor(unixTimestamp * 1_000_000)) + WINDOWS_EPOCH_OFFSET * 1000000n;
}
/**
 * Parse a URL to extract signon_realm and origin.
 *
 * @param url - The website URL
 * @returns Object with signonRealm and origin
 */
function parseUrl(url) {
    const parsed = new URL(url);
    // signon_realm is scheme + host + port (if non-default) + "/"
    let signonRealm;
    if (parsed.port && !["80", "443"].includes(parsed.port)) {
        signonRealm = `${parsed.protocol}//${parsed.hostname}:${parsed.port}/`;
    }
    else {
        signonRealm = `${parsed.protocol}//${parsed.hostname}/`;
    }
    // origin is the signon_realm for manually added passwords
    const origin = signonRealm;
    return { signonRealm, origin };
}
/**
 * Generate a UUID v4.
 *
 * @returns UUID string in lowercase
 */
function generateUuid() {
    // Use crypto.randomUUID if available, otherwise fallback
    if (typeof crypto !== "undefined" && crypto.randomUUID) {
        return crypto.randomUUID().toLowerCase();
    }
    // Fallback implementation
    const bytes = new Uint8Array(16);
    crypto.getRandomValues(bytes);
    // Set version (4) and variant (10xx)
    bytes[6] = (bytes[6] & 0x0f) | 0x40;
    bytes[8] = (bytes[8] & 0x3f) | 0x80;
    const hex = Array.from(bytes)
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
    return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}
/**
 * Create an encrypted password SyncEntity.
 *
 * Matches the structure created by Brave browser when manually adding
 * a password via Settings > Passwords.
 *
 * @param options - Password entity options
 * @returns SyncEntity ready to commit
 */
export function createPasswordEntity(options) {
    const { url, username, password, note, encryptionKey, macKey } = options;
    // Parse the URL to get components
    const { signonRealm, origin } = parseUrl(url);
    // Current timestamp
    const now = Date.now() / 1000; // seconds
    const nowWindowsMicros = unixToWindowsEpochMicros(now);
    const nowMs = BigInt(Math.floor(now * 1000));
    // Build notes if provided.
    // uniqueDisplayName must be "" — Brave only displays the default (unnamed) note.
    let notes = create(PasswordSpecificsData_NotesSchema, { note: [] });
    if (note) {
        const noteEntry = create(PasswordSpecificsData_Notes_NoteSchema, {
            uniqueDisplayName: "",
            value: note.value,
            dateCreatedWindowsEpochMicros: nowWindowsMicros,
            hideByDefault: note.hidden ?? false,
        });
        notes = create(PasswordSpecificsData_NotesSchema, { note: [noteEntry] });
    }
    // Create PasswordSpecificsData (this gets encrypted)
    // Match browser structure EXACTLY for manually added passwords
    const passwordData = create(PasswordSpecificsDataSchema, {
        scheme: 0, // SCHEME_HTML
        signonRealm,
        origin,
        action: "", // browser sets empty string
        usernameElement: "",
        usernameValue: username,
        passwordElement: "",
        passwordValue: password,
        dateCreated: nowWindowsMicros,
        blacklisted: false,
        type: 3, // kManuallyAdded
        timesUsed: 0,
        displayName: "",
        avatarUrl: "",
        federationUrl: "",
        dateLastUsed: 0n,
        passwordIssues: {}, // empty object
        datePasswordModifiedWindowsEpochMicros: nowWindowsMicros,
        notes,
        senderEmail: "",
        senderName: "",
        dateReceivedWindowsEpochMicros: 0n,
        sharingNotificationDisplayed: false,
        senderProfileImageUrl: "",
    });
    // Serialize and encrypt the password data
    const plaintext = toBinary(PasswordSpecificsDataSchema, passwordData);
    const ciphertext = nigoriEncrypt(plaintext, encryptionKey, macKey);
    // Create EncryptedData
    const encryptedData = create(EncryptedDataSchema, {
        keyName: computeKeyName(encryptionKey, macKey),
        blob: btoa(String.fromCharCode(...ciphertext)),
    });
    // Create encrypted_notes_backup using the same passwordData so the browser
    // can read notes from this field (it predates PasswordSpecificsData.notes
    // and is the primary source Brave reads notes from).
    const notesBackupCiphertext = nigoriEncrypt(plaintext, encryptionKey, macKey);
    const encryptedNotesBackup = create(EncryptedDataSchema, {
        keyName: computeKeyName(encryptionKey, macKey),
        blob: btoa(String.fromCharCode(...notesBackupCiphertext)),
    });
    // Create PasswordSpecifics with encrypted data and notes backup
    const passwordSpecifics = create(PasswordSpecificsSchema, {
        encrypted: encryptedData,
        encryptedNotesBackup,
    });
    // Create EntitySpecifics with password oneof variant
    const specifics = create(EntitySpecificsSchema, {
        specificsVariant: {
            case: "password",
            value: passwordSpecifics,
        },
    });
    // Generate unique ID
    const entityId = generateUuid();
    // Compute unique tag with empty form elements (matches browser)
    const uniqueTag = computePasswordUniqueTag(origin, "", // Empty form element names for manually added
    username, "", signonRealm);
    // Compute client_tag_hash
    const clientTagHash = computeClientTagHash(uniqueTag);
    // Create SyncEntity
    const entity = create(SyncEntitySchema, {
        idString: entityId,
        clientTagHash,
        version: 0n,
        name: signonRealm, // Browser uses the URL as name, not "encrypted"
        folder: false,
        deleted: false,
        mtime: nowMs,
        ctime: nowMs,
        // Browser leaves these empty for passwords
        originatorCacheGuid: "",
        originatorClientItemId: "",
        specifics,
    });
    return entity;
}
/**
 * Create an encrypted password SyncEntity for updating an existing password.
 *
 * The update is identified by computing the same clientTagHash as the original
 * entry (based on URL and username). The server will replace the existing entry.
 *
 * @param options - Update password entity options
 * @returns SyncEntity ready to commit
 */
export function updatePasswordEntity(options) {
    const { entityId, version, url, username, newPassword, note, encryptionKey, macKey } = options;
    // Parse the URL to get components
    const { signonRealm, origin } = parseUrl(url);
    // Current timestamp
    const now = Date.now() / 1000; // seconds
    const nowWindowsMicros = unixToWindowsEpochMicros(now);
    const nowMs = BigInt(Math.floor(now * 1000));
    // Build notes if provided.
    // uniqueDisplayName must be "" — Brave only displays the default (unnamed) note.
    let notes = create(PasswordSpecificsData_NotesSchema, { note: [] });
    if (note) {
        const noteEntry = create(PasswordSpecificsData_Notes_NoteSchema, {
            uniqueDisplayName: "",
            value: note.value,
            dateCreatedWindowsEpochMicros: nowWindowsMicros,
            hideByDefault: note.hidden ?? false,
        });
        notes = create(PasswordSpecificsData_NotesSchema, { note: [noteEntry] });
    }
    // Create PasswordSpecificsData with updated password
    const passwordData = create(PasswordSpecificsDataSchema, {
        scheme: 0, // SCHEME_HTML
        signonRealm,
        origin,
        action: "",
        usernameElement: "",
        usernameValue: username,
        passwordElement: "",
        passwordValue: newPassword,
        dateCreated: nowWindowsMicros, // Use current time as creation time
        blacklisted: false,
        type: 3, // kManuallyAdded
        timesUsed: 0,
        displayName: "",
        avatarUrl: "",
        federationUrl: "",
        dateLastUsed: 0n,
        passwordIssues: {},
        datePasswordModifiedWindowsEpochMicros: nowWindowsMicros,
        notes,
        senderEmail: "",
        senderName: "",
        dateReceivedWindowsEpochMicros: 0n,
        sharingNotificationDisplayed: false,
        senderProfileImageUrl: "",
    });
    // Serialize and encrypt the password data
    const plaintext = toBinary(PasswordSpecificsDataSchema, passwordData);
    const ciphertext = nigoriEncrypt(plaintext, encryptionKey, macKey);
    // Create EncryptedData
    const encryptedData = create(EncryptedDataSchema, {
        keyName: computeKeyName(encryptionKey, macKey),
        blob: btoa(String.fromCharCode(...ciphertext)),
    });
    // Create encrypted_notes_backup using the same passwordData so the browser
    // can read notes from this field (it predates PasswordSpecificsData.notes
    // and is the primary source Brave reads notes from).
    const notesBackupCiphertext = nigoriEncrypt(plaintext, encryptionKey, macKey);
    const encryptedNotesBackup = create(EncryptedDataSchema, {
        keyName: computeKeyName(encryptionKey, macKey),
        blob: btoa(String.fromCharCode(...notesBackupCiphertext)),
    });
    // Create PasswordSpecifics
    const passwordSpecifics = create(PasswordSpecificsSchema, {
        encrypted: encryptedData,
        encryptedNotesBackup,
    });
    // Create EntitySpecifics
    const specifics = create(EntitySpecificsSchema, {
        specificsVariant: {
            case: "password",
            value: passwordSpecifics,
        },
    });
    // Compute unique tag - MUST match original entry
    const uniqueTag = computePasswordUniqueTag(origin, "", username, "", signonRealm);
    const clientTagHash = computeClientTagHash(uniqueTag);
    // Create SyncEntity for update using existing entity ID and version
    const entity = create(SyncEntitySchema, {
        idString: entityId, // Use the existing entity ID
        clientTagHash,
        version, // Use the existing version (server will increment)
        name: signonRealm,
        folder: false,
        deleted: false,
        mtime: nowMs,
        ctime: nowMs,
        originatorCacheGuid: "",
        originatorClientItemId: "",
        specifics,
    });
    return entity;
}
/**
 * Create a SyncEntity for deleting an existing password.
 *
 * The delete is identified by computing the same clientTagHash as the original
 * entry (based on URL and username). The server will mark the entry as deleted.
 *
 * @param options - Delete password entity options
 * @returns SyncEntity ready to commit (with deleted=true)
 */
export function deletePasswordEntity(options) {
    const { entityId, version, url, username, encryptionKey, macKey } = options;
    // Parse the URL to get components
    const { signonRealm, origin } = parseUrl(url);
    // Current timestamp
    const now = Date.now() / 1000;
    const nowMs = BigInt(Math.floor(now * 1000));
    // Compute unique tag - MUST match original entry
    const uniqueTag = computePasswordUniqueTag(origin, "", username, "", signonRealm);
    const clientTagHash = computeClientTagHash(uniqueTag);
    // Create minimal encrypted password data for the tombstone
    // Server requires specifics even for deletions
    const passwordData = create(PasswordSpecificsDataSchema, {
        scheme: 0,
        signonRealm,
        origin,
        usernameValue: username,
        passwordValue: "",
        blacklisted: false,
        type: 3,
    });
    const plaintext = toBinary(PasswordSpecificsDataSchema, passwordData);
    const ciphertext = nigoriEncrypt(plaintext, encryptionKey, macKey);
    const encryptedData = create(EncryptedDataSchema, {
        keyName: computeKeyName(encryptionKey, macKey),
        blob: btoa(String.fromCharCode(...ciphertext)),
    });
    const passwordSpecifics = create(PasswordSpecificsSchema, {
        encrypted: encryptedData,
    });
    const specifics = create(EntitySpecificsSchema, {
        specificsVariant: {
            case: "password",
            value: passwordSpecifics,
        },
    });
    // Create SyncEntity with deleted=true using existing ID and version
    const entity = create(SyncEntitySchema, {
        idString: entityId,
        clientTagHash,
        version, // Use the existing version
        name: signonRealm,
        folder: false,
        deleted: true, // Mark as deleted
        mtime: nowMs,
        ctime: nowMs,
        originatorCacheGuid: "",
        originatorClientItemId: "",
        specifics, // Server requires specifics even for deletion
    });
    return entity;
}
//# sourceMappingURL=entity.js.map