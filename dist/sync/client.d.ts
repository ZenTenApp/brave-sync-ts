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
import { type ClientToServerMessage, type ClientToServerResponse, type SyncEntity } from "../proto/index.js";
import { type NigoriSettings } from "../types.js";
import type { NetworkAdapter } from "./adapter.js";
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
export declare function sendSyncRequest(options: SyncClientOptions, message: ClientToServerMessage): Promise<ClientToServerResponse>;
/**
 * Fetch Nigori encryption settings from the server.
 *
 * @param options - Sync client options
 * @returns Nigori settings, or null if not found
 */
export declare function fetchNigoriSettings(options: SyncClientOptions): Promise<NigoriSettings | null>;
/**
 * Commit entities to the sync server.
 *
 * @param options  - Sync client options
 * @param entities - Entities to commit
 * @returns Server response
 */
export declare function commitEntities(options: SyncClientOptions, entities: SyncEntity[]): Promise<ClientToServerResponse>;
/**
 * Return an error message if a commit failed, or null if every entry succeeded.
 *
 * A commit reports its result at two levels: the message-level `errorCode`
 * and a per-entry `responseType`. Servers keep `errorCode` at SUCCESS when
 * they refuse individual entries (e.g. OVER_QUOTA, CONFLICT), so both must be
 * checked.
 */
export declare function getCommitError(response: ClientToServerResponse, expectedEntries?: number): string | null;
//# sourceMappingURL=client.d.ts.map