/**
 * Password reading/listing for Brave Sync.
 *
 * Fetches and decrypts password entries from the sync server.
 */

import { create, fromBinary } from "@bufbuild/protobuf";
import {
  ClientToServerMessageSchema,
  GetUpdatesMessageSchema,
  DataTypeProgressMarkerSchema,
  PasswordSpecificsDataSchema,
  type PasswordSpecificsData_Notes_Note,
} from "../proto/index.js";
import { sendSyncRequest, type SyncClientOptions } from "../sync/client.js";
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
function windowsEpochMicrosToUnix(windowsMicros: bigint): number {
  return Number(windowsMicros) / 1_000_000 - WINDOWS_EPOCH_OFFSET;
}

/**
 * Map a proto Note message to a PasswordNoteEntry.
 *
 * @param protoNote - The proto note message
 * @returns PasswordNoteEntry
 */
function mapProtoNote(protoNote: PasswordSpecificsData_Notes_Note): PasswordNoteEntry {
  const entry: PasswordNoteEntry = {
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
 * A single note attached to a password entry.
 */
export interface PasswordNoteEntry {
  /** Unique display name of the note (empty string for the default note) */
  uniqueDisplayName: string;
  /** The note text */
  value: string;
  /** Whether the note value is hidden by default */
  hideByDefault: boolean;
  /** Date the note was created (Unix timestamp in seconds) */
  dateCreated?: number;
}

/**
 * A decrypted password entry.
 */
export interface PasswordEntry {
  /** Entity ID from sync server */
  id: string;
  /** Entity version (needed for updates) */
  version: bigint;
  /** Client tag hash (used for updates/deletes) */
  clientTagHash: string;
  /** Entity name (usually the signon realm) */
  name: string;
  /** Signon realm (e.g., "https://example.com/") */
  signonRealm: string;
  /** Origin URL */
  origin: string;
  /** Username value */
  username: string;
  /** Password value */
  password: string;
  /** Username form element name */
  usernameElement: string;
  /** Password form element name */
  passwordElement: string;
  /** Scheme (0 = HTML, 1 = Basic, etc.) */
  scheme: number;
  /** Type (0 = form submission, 3 = manually added, etc.) */
  type: number;
  /** Number of times used */
  timesUsed: number;
  /** Date created (Unix timestamp in seconds) */
  dateCreated?: number;
  /** Date last used (Unix timestamp in seconds) */
  dateLastUsed?: number;
  /** Date password modified (Unix timestamp in seconds) */
  datePasswordModified?: number;
  /** Whether the entry is blacklisted (never save) */
  blacklisted: boolean;
  /** Notes attached to this password entry */
  notes: PasswordNoteEntry[];
}

/**
 * Result of reading passwords.
 */
export interface ReadPasswordsResult {
  /** Whether the operation succeeded */
  success: boolean;
  /** List of decrypted passwords */
  passwords: PasswordEntry[];
  /** Number of entries that failed to decrypt */
  decryptionFailures: number;
  /** Error message if the operation failed */
  error?: string;
}

/**
 * Fetch and decrypt all passwords from the sync server.
 *
 * @param options - Sync client options
 * @param encryptionKey - 16-byte AES encryption key
 * @param macKey - 16-byte HMAC key
 * @returns List of decrypted password entries
 */
export async function fetchPasswords(
  options: SyncClientOptions,
  encryptionKey: Uint8Array,
  macKey: Uint8Array
): Promise<ReadPasswordsResult> {
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

    const passwords: PasswordEntry[] = [];
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
        const ciphertext = Uint8Array.from(
          atob(passwordSpecifics.encrypted.blob),
          (c) => c.charCodeAt(0)
        );
        const plaintext = nigoriDecrypt(ciphertext, encryptionKey, macKey);
        const passwordData = fromBinary(PasswordSpecificsDataSchema, plaintext);

        const entry: PasswordEntry = {
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
          entry.datePasswordModified = windowsEpochMicrosToUnix(
            passwordData.datePasswordModifiedWindowsEpochMicros
          );
        }

        passwords.push(entry);
      } catch {
        decryptionFailures++;
      }
    }

    return {
      success: true,
      passwords,
      decryptionFailures,
    };
  } catch (error) {
    return {
      success: false,
      passwords: [],
      decryptionFailures: 0,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}
