/**
 * HTTP sync client for Brave Sync.
 *
 * Handles communication with the Brave sync server using gzip-compressed
 * protobuf messages.
 *
 * DNS fallback strategy (2-tier)
 * ───────────────────────────────
 * Brave browser uses its own DNS resolver (bypassing the OS) and therefore
 * works even when an ISP blocks sync-v2.brave.com at the DNS level.
 * Node.js uses the OS/system resolver which some ISPs intercept and block.
 *
 * When a DNS error (EAI_AGAIN / EAI_NONAME / ENOTFOUND) is detected on the
 * first attempt, sendSyncRequest() automatically retries through a 2-tier
 * fallback chain:
 *
 *   Tier 1 — Normal fetch() with OS DNS (always tried first)
 *
 *   Tier 2 — Node.js only: dns.Resolver querying 8.8.8.8:53 directly,
 *             then https module with a custom lookup that keeps the original
 *             hostname for TLS SNI (equivalent to curl --connect-to).
 *             Skipped gracefully when dns/https modules are unavailable.
 *
 * See ./dns-fallback.ts for the Tier 2 implementation.
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
import { CommitResponse_ResponseType } from "../proto/generated/sync_pb.js";
import { BRAVE_SYNC_CONSTANTS, KEY_DERIVATION_PBKDF2, KEY_DERIVATION_SCRYPT, type NigoriSettings } from "../types.js";
import type { NetworkAdapter } from "./adapter.js";
import { httpsPostWithIp, isDnsError, resolveViaNodeDns } from "./dns-fallback.js";

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
  /**
   * Optional network adapter for DNS resolution and HTTPS transport in
   * environments without Node.js modules (e.g. React Native).
   *
   * When provided, it is used as Tier 3 fallback after the Node.js
   * dns.Resolver path (Tier 2) is unavailable or fails.
   *
   * @see NetworkAdapter
   */
  networkAdapter?: NetworkAdapter;
}

/**
 * Send a sync request to the server.
 *
 * Automatically retries with a public DNS resolver (8.8.8.8) if the OS DNS
 * resolver fails — e.g. due to an ISP-level block on sync-v2.brave.com.
 *
 * @param options - Sync client options
 * @param message - Protobuf message to send
 * @returns Server response
 */
export async function sendSyncRequest(
  options: SyncClientOptions,
  message: ClientToServerMessage
): Promise<ClientToServerResponse> {
  const { serverUrl, serviceKey, clientId, authToken, networkAdapter } = options;

  // Serialize the protobuf message
  const body = toBinary(ClientToServerMessageSchema, message);

  // Generate client_id parameter (base64 of public key bytes)
  const clientIdBytes = hexToBytes(clientId);
  const clientIdB64 = btoa(String.fromCharCode(...clientIdBytes));

  // Prepare request headers
  const headers: Record<string, string> = {
    Authorization: `Bearer ${authToken}`,
    "Content-Type": "application/octet-stream",
    "User-Agent": "Chrome MAC 144.1.86.142 (brave-sync-ts) channel(stable)",
    "Accept-Encoding": "gzip",
    Pragma: "no-cache",
    "Cache-Control": "no-cache",
  };

  if (serviceKey) {
    headers["BraveServiceKey"] = serviceKey;
  }

  // Build URL with query parameters
  const url = new URL(`${serverUrl.replace(/\/$/, "")}/command/`);
  url.searchParams.set("client", "Chromium");
  url.searchParams.set("client_id", clientIdB64);

  // ── Tier 1: Normal fetch() via OS DNS ────────────────────────────────────
  let responseData: Uint8Array;
  try {
    const response = await fetch(url.toString(), {
      method: "POST",
      headers,
      body,
    });

    if (!response.ok) {
      const errText = await response.text().catch(() => "<unreadable>");
      throw new Error(
        `HTTP error: ${response.status} ${response.statusText} — body: ${errText.slice(0, 500)}`,
      );
    }

    const responseBuffer = await response.arrayBuffer();
    responseData = new Uint8Array(responseBuffer);

  } catch (error) {
    if (!isDnsError(error)) {
      throw error;
    }

    // ── Tier 2: Node.js dns.Resolver + https module ───────────────────────
    // The OS resolver is blocking sync-v2.brave.com. Query a public DNS
    // server directly (8.8.8.8:53), then use the https module with a custom
    // lookup to connect to the resolved IP while keeping the original
    // hostname in the TLS SNI field.
    const nodeDnsIp = await resolveViaNodeDns(url.hostname);

    if (nodeDnsIp) {
      const result = await httpsPostWithIp(url, headers, body, nodeDnsIp);
      if (result) {
        if (result.status < 200 || result.status >= 300) {
          const errText = new TextDecoder().decode(result.data).slice(0, 500);
          throw new Error(`HTTP error: ${result.status} — body: ${errText}`);
        }
        let t2Data = result.data;
        try { t2Data = gunzipSync(t2Data); } catch { /* not gzipped */ }
        return fromBinary(ClientToServerResponseSchema, t2Data);
      }
    }

    // ── Tier 3: NetworkAdapter (e.g. React Native native module) ─────────
    // If the caller supplied a NetworkAdapter, delegate DNS resolution and
    // the HTTPS POST to it. The adapter uses platform-native APIs (Kotlin /
    // Swift) to query 8.8.8.8 directly and connect to the resolved IP while
    // keeping the original hostname in the TLS SNI / Host header.
    if (networkAdapter) {
      const adapterIp = await networkAdapter.resolveHostname(url.hostname);
      if (adapterIp) {
        const result = await networkAdapter.httpPost(url, headers, body, adapterIp);
        if (result.status < 200 || result.status >= 300) {
          const errText = new TextDecoder().decode(result.data).slice(0, 500);
          throw new Error(`HTTP error: ${result.status} — body: ${errText}`);
        }
        let t3Data = result.data;
        try { t3Data = gunzipSync(t3Data); } catch { /* not gzipped */ }
        return fromBinary(ClientToServerResponseSchema, t3Data);
      }
    }

    // All tiers exhausted
    throw new Error(
      `DNS resolution failed for ${url.hostname} via OS DNS and public DNS (8.8.8.8).\n` +
      `Original error: ${error instanceof Error ? error.message : String(error)}\n` +
      `Your ISP appears to be blocking sync-v2.brave.com at the DNS level.\n` +
      `Fix: change your system DNS to 1.1.1.1 or 8.8.8.8, or use a VPN.`
    );
  }

  // Decompress if gzipped (Tier 1 success path)
  try {
    responseData = gunzipSync(responseData);
  } catch {
    // Response wasn't gzipped, use as-is
  }

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
 * @param options  - Sync client options
 * @param entities - Entities to commit
 * @returns Server response
 */
export async function commitEntities(
  options: SyncClientOptions,
  entities: SyncEntity[]
): Promise<ClientToServerResponse> {
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
 * Return an error message if a commit failed, or null if every entry succeeded.
 *
 * A commit reports its result at two levels: the message-level `errorCode`
 * and a per-entry `responseType`. Servers keep `errorCode` at SUCCESS when
 * they refuse individual entries (e.g. OVER_QUOTA, CONFLICT), so both must be
 * checked.
 */
export function getCommitError(
  response: ClientToServerResponse,
  expectedEntries = 1
): string | null {
  if (response.errorCode !== 0) {
    return `Server error code: ${response.errorCode}`;
  }

  const entries = response.commit?.entryresponse ?? [];
  if (entries.length < expectedEntries) {
    return `Commit response missing entry results (got ${entries.length}, expected ${expectedEntries})`;
  }

  for (const entry of entries) {
    switch (entry.responseType) {
      case CommitResponse_ResponseType.SUCCESS:
        continue;
      case CommitResponse_ResponseType.OVER_QUOTA:
        // The server's own message can report an internal adjusted count,
        // so it is not shown here.
        return "Storage limit reached: the server will not accept more items for this sync chain";
      default: {
        const type = CommitResponse_ResponseType[entry.responseType] ?? String(entry.responseType);
        return entry.errorMessage
          ? `Commit rejected (${type}): ${entry.errorMessage}`
          : `Commit rejected (${type})`;
      }
    }
  }

  return null;
}

// ---------------------------------------------------------------------------
// Internal utilities
// ---------------------------------------------------------------------------

/**
 * Generate a UUID v4 cache GUID for commit messages.
 *
 * Uses @noble/hashes randomBytes for cross-platform compatibility.
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
 * Convert a hex string to a Uint8Array of bytes.
 */
function hexToBytes(hex: string): Uint8Array {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length; i += 2) {
    bytes[i / 2] = parseInt(hex.slice(i, i + 2), 16);
  }
  return bytes;
}
