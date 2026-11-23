/**
 * NetworkAdapter interface for pluggable DNS resolution and HTTP transport.
 *
 * brave-sync-ts handles DNS fallback natively in Node.js (Tier 2). For other
 * environments (React Native, browser) that lack the Node.js `dns` and `https`
 * modules, consumers can supply a NetworkAdapter implementation that performs
 * the same bypass using platform-native APIs.
 *
 * The adapter is passed via SyncClientOptions.networkAdapter and is invoked
 * as Tier 3 in sendSyncRequest() when Tier 1 (OS DNS fetch) fails with a DNS
 * error and Tier 2 (Node.js dns.Resolver) is unavailable or also fails.
 *
 * @example
 * ```ts
 * import { createRnNetworkAdapter } from "@zenten/rn-brave-sync-adapter";
 *
 * const adapter = createRnNetworkAdapter();
 *
 * await fetchNigoriSettings({
 *   serverUrl, serviceKey, clientId, authToken,
 *   networkAdapter: adapter,
 * });
 * ```
 */
export {};
//# sourceMappingURL=adapter.js.map