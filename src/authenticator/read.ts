/**
 * Authenticator.cc OTP entry reading for Brave Sync.
 *
 * Fetches extension settings for the Authenticator.cc extension
 * (bhghoamapcdpbohphigoooaddinpkbai) and extracts OTP storage entries.
 *
 * When `encrypt_everything` is enabled, the entity's `specifics.encrypted`
 * field contains a Nigori-encrypted `EntitySpecifics` which wraps the
 * `ExtensionSettingSpecifics`.
 */

import { create, fromBinary } from "@bufbuild/protobuf";
import {
  ClientToServerMessageSchema,
  GetUpdatesMessageSchema,
  DataTypeProgressMarkerSchema,
  EntitySpecificsSchema,
} from "../proto/index.js";
import { sendSyncRequest, type SyncClientOptions } from "../sync/client.js";
import { nigoriDecrypt } from "../crypto/nigori.js";
import { BRAVE_SYNC_CONSTANTS } from "../types.js";
import type { OTPEntry, ReadAuthenticatorResult } from "./types.js";

/**
 * Shape of the JSON value stored by Authenticator.cc in extension settings.
 */
interface AuthenticatorStorageValue {
  dataType?: string;
  secret?: string;
  issuer?: string;
  account?: string;
  type?: number;
  hash?: string;
}

/**
 * Fetch and decrypt all Authenticator.cc OTP entries from the sync server.
 *
 * @param options - Sync client options
 * @param encryptionKey - 16-byte AES encryption key
 * @param macKey - 16-byte HMAC key
 * @returns List of OTP entries
 */
export async function fetchAuthenticatorEntries(
  options: SyncClientOptions,
  encryptionKey: Uint8Array,
  macKey: Uint8Array,
): Promise<ReadAuthenticatorResult> {
  try {
    const getUpdates = create(GetUpdatesMessageSchema, {
      getUpdatesOrigin: 12, // GU_TRIGGER
      fromProgressMarker: [
        create(DataTypeProgressMarkerSchema, {
          dataTypeId: BRAVE_SYNC_CONSTANTS.EXTENSION_SETTING_TYPE_ID,
          token: new Uint8Array(0),
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
        entries: [],
        decryptionFailures: 0,
        extensionPresent: false,
      };
    }

    const entries: OTPEntry[] = [];
    let decryptionFailures = 0;
    let extensionPresent = false;

    for (const entity of response.getUpdates.entries) {
      if (entity.deleted) {
        continue;
      }

      const specifics = entity.specifics;
      if (!specifics) {
        continue;
      }

      try {
        let extensionId: string | undefined;
        let settingValue: string | undefined;

        // When encrypt_everything is true, the EntitySpecifics is Nigori-encrypted
        if (specifics.encrypted?.blob) {
          const ciphertext = Uint8Array.from(
            atob(specifics.encrypted.blob),
            (c) => c.charCodeAt(0),
          );
          const plaintext = nigoriDecrypt(ciphertext, encryptionKey, macKey);
          const decryptedSpecifics = fromBinary(EntitySpecificsSchema, plaintext);

          if (decryptedSpecifics.specificsVariant?.case === "extensionSetting") {
            const extSetting = decryptedSpecifics.specificsVariant.value;
            extensionId = extSetting.extensionId;
            settingValue = extSetting.value;
          }
        } else if (specifics.specificsVariant?.case === "extensionSetting") {
          // Unencrypted extension setting
          const extSetting = specifics.specificsVariant.value;
          extensionId = extSetting.extensionId;
          settingValue = extSetting.value;
        }

        if (extensionId === undefined || settingValue === undefined) {
          continue;
        }

        if (extensionId === BRAVE_SYNC_CONSTANTS.AUTHENTICATOR_EXTENSION_ID) {
          extensionPresent = true;
        }

        const otpEntry = tryParseOtpEntry(extensionId, settingValue);
        if (otpEntry) {
          entries.push(otpEntry);
        }
      } catch {
        decryptionFailures++;
      }
    }

    return {
      success: true,
      entries,
      decryptionFailures,
      extensionPresent,
    };
  } catch (error) {
    return {
      success: false,
      entries: [],
      decryptionFailures: 0,
      extensionPresent: false,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

/**
 * Try to parse an OTP entry from an extension setting.
 * Returns null if the extension ID doesn't match or the value isn't an OTPStorage entry.
 *
 * @param extensionId - The extension ID from the setting
 * @param jsonValue - The JSON-serialized setting value
 * @returns Parsed OTPEntry or null
 */
function tryParseOtpEntry(extensionId: string, jsonValue: string): OTPEntry | null {
  if (extensionId !== BRAVE_SYNC_CONSTANTS.AUTHENTICATOR_EXTENSION_ID) {
    return null;
  }

  let parsed: AuthenticatorStorageValue;
  try {
    parsed = JSON.parse(jsonValue) as AuthenticatorStorageValue;
  } catch {
    return null;
  }

  if (parsed.dataType !== "OTPStorage") {
    return null;
  }

  const secret = parsed.secret ?? "";
  if (!secret) {
    return null;
  }

  return {
    issuer: parsed.issuer ?? "Unknown",
    account: parsed.account ?? "",
    secret,
    type: parsed.type ?? 1,
    hash: parsed.hash ?? "",
  };
}
