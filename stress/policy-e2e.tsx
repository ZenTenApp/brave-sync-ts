/**
 * End-to-end validation of litesync's passwords-only + size-cap entity policy.
 *
 * Run against a local litesync with rate limiting disabled so ONLY the entity
 * policy is exercised:
 *
 *   LITESYNC_IP_RATE=0 LITESYNC_CLIENT_RATE=0 /path/to/litesync \
 *       -bind 127.0.0.1:8333 -db /tmp/policy.sqlite
 *   npx tsx stress/policy-e2e.tsx
 *
 * Expects:
 *   1. connect() OK           (Nigori commit allowed — chain init)
 *   2. pushPassword() OK      (password commit allowed)
 *   3. readPasswords() OK     (password read allowed)
 *   4. readBookmarks() OK(0)  (bookmark GET_UPDATES passes through, returns empty)
 *   5. oversize password      (2000 char note) REJECTED 400 (>1KB cap)
 */
import { BraveSyncClient } from "../src/index.js";
import { generateMnemonic } from "@scure/bip39";
import { wordlist } from "@scure/bip39/wordlists/english.js";

const URL = process.env.SYNC_URL ?? "http://127.0.0.1:8333/litesync";

async function main() {
  const seed = generateMnemonic(wordlist, 256);
  const client = new BraveSyncClient({ seedPhrase: seed, serverUrl: URL });

  try { await client.connect(); console.log("1. connect(): OK"); }
  catch (e) { console.log("1. connect(): FAILED", (e as Error).message.slice(0, 150)); }

  try {
    const r = await client.pushPassword({ url: "https://example.com", username: "alice", password: "hunter2" });
    console.log("2. pushPassword():", r.success ? "OK" : "FAILED", r.error || "");
  } catch (e) { console.log("2. pushPassword(): FAILED", (e as Error).message.slice(0, 150)); }

  try {
    const r = await client.readPasswords();
    console.log("3. readPasswords():", r.success ? `OK (${r.passwords.length})` : "FAILED", r.error || "");
  } catch (e) { console.log("3. readPasswords(): FAILED", (e as Error).message.slice(0, 150)); }

  try {
    const r = await client.readBookmarks();
    console.log("4. readBookmarks():", r.success ? `OK (${r.bookmarks.length}, expected 0)` : "FAILED", r.error || "");
  } catch (e) { console.log("4. readBookmarks(): FAILED", (e as Error).message.slice(0, 150)); }

  try {
    const r = await client.pushPassword({
      url: "https://b.com", username: "u2", password: "p2",
      note: { value: "N".repeat(2048), hidden: false },
    });
    console.log("5. oversize password+note:", r.success ? "OK (UNEXPECTED)" : "REJECTED", r.error || "");
  } catch (e) { console.log("5. oversize password+note: FAILED/ERR", (e as Error).message.slice(0, 150)); }
}

main();