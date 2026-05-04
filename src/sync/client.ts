/**
 * HTTP sync client for Brave Sync.
 *
 * Handles communication with the Brave sync server using gzip-compressed
 * protobuf messages.
 */

import { create, fromBinary, toBinary } from "@bufbuild/protobuf";
import { randomBytes } from "@noble/hashes/utils.js";
import { gunzipSync } from "fflate";
import {
  ClientToServerMessageSchema,
  ClientToServerResponseSchema,
  CommitMessageSchema,
  DataTypeProgressMarkerSchema,
  GetUpdatesMessageSchema,
  type ClientToServerMessage,
  type ClientToServerResponse,
  type SyncEntity,
} from "../proto/index.js";
import { BRAVE_SYNC_CONSTANTS, KEY_DERIVATION_PBKDF2, KEY_DERIVATION_SCRYPT, type NigoriSettings } from "../types.js";

/**
 * Options for the sync client.
 */
export interface SyncClientOptions {
  /** Sync server URL */
  serverUrl: string;
  /** Brave service key */
  serviceKey: string;
  /** Client ID (hex-encoded public key) */
  clientId: string;
  /** Authentication token */
  authToken: string;
}

/**
 * Send a sync request to the server.
 *
 * @param options - Sync client options
 * @param message - Protobuf message to send
 * @returns Server response
 */
export async function sendSyncRequest(
  options: SyncClientOptions,
  message: ClientToServerMessage
): Promise<ClientToServerResponse> {
  const { serverUrl, serviceKey, clientId, authToken } = options;

  // Serialize the message
  const body = toBinary(ClientToServerMessageSchema, message);

  // Generate client_id parameter (base64 of public key bytes)
  const clientIdBytes = hexToBytes(clientId);
  const clientIdB64 = btoa(String.fromCharCode(...clientIdBytes));

  // Prepare headers
  const headers: Record<string, string> = {
    Authorization: `Bearer ${authToken}`,
    "Content-Type": "application/octet-stream",
    "User-Agent": "Chrome MAC 144.1.86.142 (brave-sync-ts) channel(stable)",
    "Accept-Encoding": "gzip",
    Pragma: "no-cache",
    "Cache-Control": "no-cache",
  };

  // Add BraveServiceKey header
  if (serviceKey) {
    headers["BraveServiceKey"] = serviceKey;
  }

  // Build URL with query parameters
  const url = new URL(`${serverUrl.replace(/\/$/, "")}/command/`);
  url.searchParams.set("client", "Chromium");
  url.searchParams.set("client_id", clientIdB64);

  // Extract a correctly-sized ArrayBuffer from the Uint8Array view. RN's
  // fetch refuses Uint8Array as BodyInit on some versions; the underlying
  // ArrayBuffer works on both Node and RN.
  const toArrayBuffer = (u8: Uint8Array): ArrayBuffer =>
    u8.buffer.slice(u8.byteOffset, u8.byteOffset + u8.byteLength) as ArrayBuffer;

  const fetchBody: ArrayBuffer = toArrayBuffer(body)

  // Send request
  const response = await fetch(url.toString(), {
    method: "POST",
    headers,
    body: fetchBody as BodyInit,
  });

  if (!response.ok) {
    const errText = await response.text().catch(() => "<unreadable>");
    throw new Error(
      `HTTP error: ${response.status} ${response.statusText} — body: ${errText.slice(0, 500)}`,
    );
  }

  // Get response data.
  // response.arrayBuffer() can be unreliable on React Native < 0.72; surface a
  // clear message rather than a cryptic parse error if it fails.
  const responseBuffer = await response.arrayBuffer().catch(() => {
    throw new Error(
      "response.arrayBuffer() failed — upgrade React Native to >=0.72 or add a fetch polyfill",
    );
  });
  let responseData: Uint8Array = new Uint8Array(responseBuffer);

  // Try to decompress if needed
  try {
    responseData = gunzipSync(responseData);
  } catch {
    // Response wasn't gzipped, use as-is
  }

  // Parse protobuf
  return fromBinary(ClientToServerResponseSchema, responseData);
}

/**
 * Fetch Nigori encryption settings from the server.
 *
 * @param options - Sync client options
 * @returns Nigori settings, or null if not found
 */
export async function fetchNigoriSettings(
  options: SyncClientOptions
): Promise<NigoriSettings | null> {
  // Create GetUpdates request for Nigori type
  const getUpdates = create(GetUpdatesMessageSchema, {
    getUpdatesOrigin: 12, // GU_TRIGGER
    fromProgressMarker: [
      create(DataTypeProgressMarkerSchema, {
        dataTypeId: BRAVE_SYNC_CONSTANTS.NIGORI_TYPE_ID,
        token: new Uint8Array(0), // Empty token to get all entities
      }),
    ],
  });

  const message = create(ClientToServerMessageSchema, {
    share: "",
    messageContents: 2, // GET_UPDATES (from sync.proto enum Contents)
    getUpdates,
  });

  try {
    const response = await sendSyncRequest(options, message);

    if (!response.getUpdates) {
      return null;
    }

    // Look for Nigori entity in response
    for (const entity of response.getUpdates.entries) {
      const specifics = entity.specifics;
      if (specifics?.specificsVariant?.case === "nigori") {
        const nigori = specifics.specificsVariant.value;

        const method = nigori.customPassphraseKeyDerivationMethod ?? KEY_DERIVATION_PBKDF2;

        if (method !== KEY_DERIVATION_SCRYPT && method !== KEY_DERIVATION_PBKDF2) {
          throw new Error(`Unsupported key derivation method: ${method}`);
        }

        let salt: Uint8Array | undefined;
        if (method === KEY_DERIVATION_SCRYPT) {
          if (!nigori.customPassphraseKeyDerivationSalt) {
            throw new Error("No salt found in Nigori settings for scrypt method");
          }
          const saltBase64 = nigori.customPassphraseKeyDerivationSalt;
          salt = Uint8Array.from(atob(saltBase64), (c) => c.charCodeAt(0));
        }

        return {
          passphraseType: nigori.passphraseType ?? 0,
          keyDerivationMethod: method,
          salt,
          encryptEverything: nigori.encryptEverything ?? false,
        };
      }
    }

    return null;
  } catch (error) {
    console.warn("Could not fetch Nigori settings:", error);
    return null;
  }
}

/**
 * Commit entities to the sync server.
 *
 * @param options - Sync client options
 * @param entities - Entities to commit
 * @returns Server response
 */
export async function commitEntities(
  options: SyncClientOptions,
  entities: SyncEntity[]
): Promise<ClientToServerResponse> {
  // Create commit message
  const commit = create(CommitMessageSchema, {
    cacheGuid: generateCacheGuid(),
    entries: entities,
  });

  const message = create(ClientToServerMessageSchema, {
    share: "",
    messageContents: 1, // COMMIT
    commit,
  });

  return sendSyncRequest(options, message);
}

/**
 * Generate a UUID v4 cache GUID for commit messages.
 *
 * Uses @noble/hashes randomBytes instead of crypto.randomUUID / crypto.getRandomValues
 * directly, so the single noble code path is intercepted correctly by polyfills
 * such as react-native-get-random-values.
 */
function generateCacheGuid(): string {
  const bytes = randomBytes(16);

  // Set version (4) and variant (10xx)
  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;

  const hex = Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

/**
 * Convert hex string to bytes.
 */
function hexToBytes(hex: string): Uint8Array {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length; i += 2) {
    bytes[i / 2] = parseInt(hex.slice(i, i + 2), 16);
  }
  return bytes;
}
