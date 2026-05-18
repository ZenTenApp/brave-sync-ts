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

// ---------------------------------------------------------------------------
// Runtime environment detection
// ---------------------------------------------------------------------------

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
export function detectRuntime(): RuntimeEnv {
  // React Native: navigator is defined and product is "ReactNative"
  if (
    typeof navigator !== "undefined" &&
    navigator.product === "ReactNative"
  ) {
    return "react-native";
  }

  // Node.js: process.versions.node exists and there is no browser window
  if (
    typeof process !== "undefined" &&
    typeof process.versions?.node === "string" &&
    typeof window === "undefined"
  ) {
    return "node";
  }

  // Browser: both window and document are present
  if (typeof window !== "undefined" && typeof document !== "undefined") {
    return "browser";
  }

  return "unknown";
}

// ---------------------------------------------------------------------------
// DNS resolution cache
// ---------------------------------------------------------------------------

/** Simple in-process cache: hostname → IP, cleared on process exit. */
const dnsCache = new Map<string, string>();

// ---------------------------------------------------------------------------
// Tier 2: Public DNS resolver via Node.js dns module
// ---------------------------------------------------------------------------

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
export async function resolveViaNodeDns(hostname: string): Promise<string | null> {
  // Only attempt in Node.js — the dns module does not exist elsewhere
  if (detectRuntime() !== "node") return null;

  const cached = dnsCache.get(hostname);
  if (cached) return cached;

  let dnsModule: typeof import("dns/promises") | null = null;
  try {
    dnsModule = await import("dns/promises");
  } catch {
    return null;
  }

  const publicDnsServers = ["8.8.8.8", "1.1.1.1", "8.8.4.4"];

  for (const server of publicDnsServers) {
    try {
      const resolver = new dnsModule.Resolver();
      resolver.setServers([server]);
      const addresses = await resolver.resolve4(hostname);
      if (addresses.length > 0) {
        const ip = addresses[0]!;
        dnsCache.set(hostname, ip);
        return ip;
      }
    } catch {
      // Try next server
    }
  }

  return null;
}

// ---------------------------------------------------------------------------
// Tier 2: HTTPS POST with pre-resolved IP (bypasses OS DNS)
// ---------------------------------------------------------------------------

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
export async function httpsPostWithIp(
  url: URL,
  headers: Record<string, string>,
  body: Uint8Array,
  ip: string
): Promise<{ status: number; data: Uint8Array } | null> {
  // Only attempt in Node.js — the https module does not exist elsewhere
  if (detectRuntime() !== "node") return null;

  let httpsModule: typeof import("https") | null = null;
  try {
    httpsModule = await import("https");
  } catch {
    return null;
  }

  return new Promise((resolve, reject) => {
    // Node.js v24 changed the lookup callback: when options.all is true it
    // expects an array of {address, family} objects; older versions expect
    // (address, family) directly. We handle both signatures here.
    const lookup = (
      _hostname: string,
      opts: { all?: boolean },
      cb: (err: Error | null, addresses: unknown, family?: number) => void
    ) => {
      if (opts?.all) {
        cb(null, [{ address: ip, family: 4 }]);
      } else {
        cb(null, ip, 4);
      }
    };

    const chunks: Buffer[] = [];

    const req = httpsModule!.request(
      {
        hostname: url.hostname,
        port: url.port || 443,
        path: url.pathname + url.search,
        method: "POST",
        headers,
        lookup: lookup as Parameters<typeof httpsModule.request>[0] extends { lookup?: infer L } ? L : never,
      },
      (res) => {
        res.on("data", (chunk: Buffer) => chunks.push(chunk));
        res.on("end", () => {
          const data = Buffer.concat(chunks);
          resolve({ status: res.statusCode ?? 0, data: new Uint8Array(data) });
        });
        res.on("error", reject);
      }
    );

    req.on("error", reject);
    req.setTimeout(30_000, () => {
      req.destroy(new Error("Request timed out after 30s"));
    });

    req.write(body);
    req.end();
  });
}

// ---------------------------------------------------------------------------
// DNS error detection
// ---------------------------------------------------------------------------

/**
 * Returns true if the error looks like a DNS resolution failure.
 *
 * Node.js fetch() wraps the underlying dns error in a cause chain:
 *   TypeError: fetch failed
 *     cause: Error: getaddrinfo ENOTFOUND sync-v2.brave.com
 *
 * @param err - Error to inspect
 */
export function isDnsError(err: unknown): boolean {
  if (!(err instanceof Error)) return false;
  const DNS_RE = /EAI_AGAIN|EAI_NONAME|ENOTFOUND/i;
  if (DNS_RE.test(err.message)) return true;
  // Check cause chain (Node.js fetch wraps the real error in err.cause)
  if (err.cause instanceof Error && DNS_RE.test(err.cause.message)) return true;
  // Also check the error code if present (Node.js system errors)
  const code = (err as NodeJS.ErrnoException).code ?? (err.cause as NodeJS.ErrnoException | undefined)?.code;
  if (code && DNS_RE.test(code)) return true;
  // React Native (Hermes) throws "Network request failed" for all network-level
  // errors including DNS failures — it does not expose POSIX error codes.
  // Treat this as a DNS/network error so Tier 3 (NetworkAdapter) is attempted.
  if (/Network request failed/i.test(err.message)) return true;
  return false;
}
