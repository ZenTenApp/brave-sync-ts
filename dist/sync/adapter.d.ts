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
/**
 * Pluggable network adapter for DNS resolution and HTTPS transport.
 *
 * Implement this interface using platform-native APIs (e.g. Kotlin/Swift for
 * React Native) and pass it to SyncClientOptions.networkAdapter.
 */
export interface NetworkAdapter {
    /**
     * Resolve a hostname to an IPv4 address, bypassing the OS DNS resolver.
     *
     * Implementations should query a public DNS server (e.g. 8.8.8.8) directly
     * using platform-native socket APIs. Return null if resolution fails.
     *
     * @param hostname - Hostname to resolve (e.g. "sync-v2.brave.com")
     * @returns Resolved IPv4 address string, or null on failure
     */
    resolveHostname(hostname: string): Promise<string | null>;
    /**
     * Send an HTTPS POST request to a pre-resolved IP address.
     *
     * The implementation must set the `Host` header to the original hostname
     * so TLS SNI works correctly — the server sees the right hostname even
     * though the TCP connection goes to the raw IP.
     *
     * @param url         - Original URL (hostname used for TLS SNI)
     * @param headers     - Request headers (do NOT include Host — adapter adds it)
     * @param body        - Request body bytes
     * @param resolvedIp  - Pre-resolved IPv4 address to connect to
     * @returns HTTP status code and raw response body bytes
     */
    httpPost(url: URL, headers: Record<string, string>, body: Uint8Array, resolvedIp: string): Promise<{
        status: number;
        data: Uint8Array;
    }>;
}
//# sourceMappingURL=adapter.d.ts.map