/**
 * Integration test for BraveSyncClient.connect() + pushPassword().
 *
 * Tests the full flow that an integrated app uses, including the
 * auto-initialisation of the Nigori entity when the chain is fresh.
 *
 * Usage:
 *   npx tsx scripts/test-connect.ts --seed "word1 ... word25"
 *   npx tsx scripts/test-connect.ts --seed env   # reads BRAVE_SYNC_SEED
 */

import { BraveSyncClient } from "../src/index.js";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function getSeed(): string {
  const idx = process.argv.indexOf("--seed");
  if (idx === -1 || !process.argv[idx + 1]) {
    console.error("Error: --seed <phrase|env> is required.");
    process.exit(1);
  }

  const value = process.argv[idx + 1];

  if (value === "env") {
    const envSeed = process.env["BRAVE_SYNC_SEED"];
    if (!envSeed) {
      console.error("Error: BRAVE_SYNC_SEED env var is not set.");
      process.exit(1);
    }
    return envSeed;
  }

  return value;
}

function pass(msg: string): void {
  console.log(`  ✓ ${msg}`);
}

function fail(msg: string): void {
  console.error(`  ✗ ${msg}`);
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

async function testConnect(seedPhrase: string): Promise<boolean> {
  console.log("\n[1] BraveSyncClient.connect()");
  const client = new BraveSyncClient({ seedPhrase });

  try {
    await client.connect();
    pass("connect() resolved without throwing");
    return true;
  } catch (err) {
    fail(`connect() threw: ${err instanceof Error ? err.message : String(err)}`);
    return false;
  }
}

async function testPushPassword(seedPhrase: string): Promise<boolean> {
  console.log("\n[2] BraveSyncClient.pushPassword()");
  const client = new BraveSyncClient({ seedPhrase });

  try {
    await client.connect();
  } catch (err) {
    fail(`connect() failed (cannot test pushPassword): ${err instanceof Error ? err.message : String(err)}`);
    return false;
  }

  const result = await client.pushPassword({
    url: "https://test.brave-sync-ts.local",
    username: "test-user@example.com",
    password: "test-password-123",
  });

  if (result.success) {
    pass(`pushPassword() succeeded (entityId: ${result.entityId})`);
    return true;
  } else {
    fail(`pushPassword() failed: ${result.error}`);
    return false;
  }
}

async function testReadBack(seedPhrase: string): Promise<boolean> {
  console.log("\n[3] BraveSyncClient.readPasswords() — verify entry was stored");
  const client = new BraveSyncClient({ seedPhrase });

  try {
    await client.connect();
  } catch (err) {
    fail(`connect() failed (cannot test readPasswords): ${err instanceof Error ? err.message : String(err)}`);
    return false;
  }

  const result = await client.readPasswords();

  if (!result.success) {
    fail(`readPasswords() failed: ${result.error}`);
    return false;
  }

  const found = result.passwords.find(
    (pw) => pw.signonRealm === "https://test.brave-sync-ts.local/" &&
             pw.username === "test-user@example.com"
  );

  if (found) {
    pass(`readPasswords() found the test entry (id: ${found.id})`);
    return true;
  } else {
    fail(`readPasswords() returned ${result.passwords.length} entries but the test entry was not among them`);
    return false;
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  const seedPhrase = getSeed();

  console.log("=".repeat(60));
  console.log("brave-sync-ts — BraveSyncClient integration test");
  console.log("=".repeat(60));
  console.log(`Seed: ${seedPhrase.split(" ").slice(0, 3).join(" ")} ... (truncated)`);

  const results: boolean[] = [];

  results.push(await testConnect(seedPhrase));
  results.push(await testPushPassword(seedPhrase));
  results.push(await testReadBack(seedPhrase));

  const passed = results.filter(Boolean).length;
  const total = results.length;

  console.log("\n" + "=".repeat(60));

  if (passed === total) {
    console.log(`All ${total}/${total} tests passed.`);
  } else {
    console.error(`${passed}/${total} tests passed — ${total - passed} failed.`);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error("Unexpected error:", err);
  process.exit(1);
});
