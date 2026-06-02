/**
 * DNS fallback helpers for Node.js environments.
 *
 * When the OS DNS resolver fails (e.g. ISP blocking sync-v2.brave.com),
 * these utilities provide a Tier 2 bypass:
 *
 *   resolveViaNodeDns() — queries 8.8.8.8:53 directly via Node.js dns.Resolver
 *   httpsPostWithIp()   — sends an HTTPS POST using a pre-resolved IP while
 *                         keeping the original hostname for TLS SNI
 *   isDnsError()        — detects DNS-related errors from Node.js fetch()
 */
/** Detected JavaScript runtime environment. */
export type RuntimeEnv = "node" | "browser" | "react-native" | "unknown";
/**
 * Detect the current JavaScript runtime environment.
 *
 * Detection order matters — React Native also exposes `navigator`, so we
 * check it before the generic browser check:
 *
 *   1. React Native — navigator.product === "ReactNative"
 *   2. Node.js      — process.versions.node exists, no window
 *   3. Browser      — window and document both exist
 *   4. Unknown      — none of the above matched
 */
export declare function detectRuntime(): RuntimeEnv;
/**
 * Resolve a hostname by querying a public DNS server (8.8.8.8:53) directly
 * using Node.js's built-in `dns` module with a custom Resolver.
 *
 * Only runs in Node.js — returns `null` immediately in browser or React Native
 * environments. Also returns `null` if all public DNS servers fail.
 *
 * @param hostname - Hostname to resolve
 * @returns Resolved IPv4 address, or null if unavailable/failed
 */
export declare function resolveViaNodeDns(hostname: string): Promise<string | null>;
/**
 * Send an HTTPS POST request using Node.js's `https` module with a custom
 * `lookup` function that returns a pre-resolved IP address.
 *
 * This bypasses the OS DNS resolver while keeping the original hostname for
 * TLS SNI — exactly what `curl --connect-to` does.
 *
 * Returns `null` if the `https` module is unavailable (not in Node.js).
 *
 * @param url     - Target URL (hostname used for TLS SNI, path, query)
 * @param headers - Request headers
 * @param body    - Request body bytes
 * @param ip      - Pre-resolved IP address to connect to
 * @returns Response status + body bytes, or null if https module unavailable
 */
export declare function httpsPostWithIp(url: URL, headers: Record<string, string>, body: Uint8Array, ip: string): Promise<{
    status: number;
    data: Uint8Array;
} | null>;
/**
 * Returns true if the error looks like a DNS resolution failure.
 *
 * Node.js fetch() wraps the underlying dns error in a cause chain:
 *   TypeError: fetch failed
 *     cause: Error: getaddrinfo ENOTFOUND sync-v2.brave.com
 *
 * @param err - Error to inspect
 */
export declare function isDnsError(err: unknown): boolean;
//# sourceMappingURL=dns-fallback.d.ts.map