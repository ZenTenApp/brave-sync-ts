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
import { type SyncClientOptions } from "../sync/client.js";
import type { ReadAuthenticatorResult } from "./types.js";
/**
 * Fetch and decrypt all Authenticator.cc OTP entries from the sync server.
 *
 * @param options - Sync client options
 * @param encryptionKey - 16-byte AES encryption key
 * @param macKey - 16-byte HMAC key
 * @returns List of OTP entries
 */
export declare function fetchAuthenticatorEntries(options: SyncClientOptions, encryptionKey: Uint8Array, macKey: Uint8Array): Promise<ReadAuthenticatorResult>;
//# sourceMappingURL=read.d.ts.map