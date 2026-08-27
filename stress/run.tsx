#!/usr/bin/env tsx
/**
 * Stress test harness for a self-hosted litesync (Brave sync protocol) server,
 * using the brave-sync-ts library.
 *
 * Each unique 25-word BIP39 seed = one independent sync chain (one virtual
 * Brave browser). This harness fans out `--concurrency` concurrent chains,
 * each issuing connect() + N data operations against the sync endpoint.
 *
 * Usage (from brave-sync-ts repo root):
 *   npx tsx stress/run.tsx --server https://litesync1.zentext.me/litesync \
 *     --concurrency 10 --ops-per-worker 5 --mode read
 *
 * WARNING: litesync has NO rate limiting. Keep concurrency modest and ramp
 * up manually. This can take a production instance down if you overshoot.
 */
import { Command } from "commander";
import { BraveSyncClient } from "../src/index.js";
import { generateMnemonic } from "@scure/bip39";
import { wordlist } from "@scure/bip39/wordlists/english.js";

interface OpResult {
  op: string;
  ok: boolean;
  ms: number;
  error?: string;
}

function newSeed(): string {
  // 24-word BIP39 mnemonic = 256-bit entropy, same bytes brave-sync-ts derives.
  return generateMnemonic(wordlist, 256);
}

function pct(ms: number[], p: number): number {
  if (ms.length === 0) return 0;
  const s = [...ms].sort((a, b) => a - b);
  const i = Math.min(s.length - 1, Math.max(0, Math.ceil((p / 100) * s.length) - 1));
  return s[i];
}

/** Run one worker (one seed = one independent chain). Collect per-op results. */
async function runWorker(
  seed: string,
  serverUrl: string,
  mode: string,
  opsPerWorker: number,
): Promise<OpResult[]> {
  const results: OpResult[] = [];
  const client = new BraveSyncClient({ seedPhrase: seed, serverUrl });

  const measure = async (op: string, fn: () => Promise<unknown>) => {
    const t0 = Date.now();
    let ok = true;
    let err: string | undefined;
    try {
      await fn();
    } catch (e) {
      ok = false;
      err = e instanceof Error ? e.message : String(e);
    }
    results.push({ op, ok, ms: Date.now() - t0, error: err });
  };

  await measure("connect", () => client.connect());

  for (let i = 0; i < opsPerWorker; i++) {
    if (mode === "read") {
      await measure("read", () => client.readPasswords());
    } else if (mode === "write") {
      await measure("write", () =>
        client.pushPassword({
          url: `https://example-${seed.length}.com`,
          username: `user${i}`,
          password: `pw_${i}_${seed.slice(0, 8)}`,
        }));
    } else {
      const write = i % 3 === 0;
      await measure(write ? "write" : "read", () =>
        write
          ? client.pushPassword({
              url: `https://example-${seed.length}.com`,
              username: `user${i}`,
              password: `pw_${i}_${seed.slice(0, 8)}`,
            })
          : client.readPasswords());
    }
  }
  return results;
}

interface PhaseStats {
  byOp: Record<string, { count: number; ok: number; err: number; lat: number[] }>;
  errors: string[];
  wallMs: number;
}

async function runPhase(
  serverUrl: string,
  concurrency: number,
  mode: string,
  opsPerWorker: number,
): Promise<PhaseStats> {
  const byOp: Record<string, { count: number; ok: number; err: number; lat: number[] }> = {};
  const errors: string[] = [];
  const t0 = Date.now();

  const jobs = Array.from({ length: concurrency }, () =>
    runWorker(newSeed(), serverUrl, mode, opsPerWorker));
  const settled = await Promise.all(jobs);

  for (const results of settled) {
    for (const r of results) {
      byOp[r.op] ??= { count: 0, ok: 0, err: 0, lat: [] };
      byOp[r.op].count++;
      if (r.ok) {
        byOp[r.op].ok++;
        byOp[r.op].lat.push(r.ms);
      } else {
        byOp[r.op].err++;
        if (r.error) errors.push(r.error);
      }
    }
  }

  return { byOp, errors, wallMs: Date.now() - t0 };
}

function fmtOp(name: string, agg: { count: number; ok: number; err: number; lat: number[] }) {
  const { count, ok, err, lat } = agg;
  if (count === 0) return "";
  return `${name.padEnd(8)} n=${count} ok=${ok} err=${err}` +
    (lat.length ? ` p50=${pct(lat, 50)}ms p95=${pct(lat, 95)}ms p99=${pct(lat, 99)}ms max=${Math.max(...lat)}ms` : "");
}

async function main(): Promise<void> {
  const program = new Command();
  program
    .description("Concurrent stress test for a litesync server via brave-sync-ts")
    .requiredOption("--server <url>", "litesync base URL, e.g. https://Host/litesync")
    .option("--concurrency <n>", "concurrent clients (default 10)", "10")
    .option("--ops-per-worker <n>", "ops per worker after connect (default 5)", "5")
    .option("--runs <n>", "sequential phases (default 1)", "1")
    .option("--mode <read|write|mixed>", "workload (default read)", "read");
  program.parse();

  const o = program.opts();
  const serverUrl = o.server;
  const concurrency = parseInt(o.concurrency, 10);
  const opsPerWorker = parseInt(o.opsPerWorker, 10);
  const runs = parseInt(o.runs, 10);
  const mode = o.mode;

  console.log(`target=${serverUrl} concurrency=${concurrency} opsPerWorker=${opsPerWorker} runs=${runs} mode=${mode}`);

  for (let run = 1; run <= runs; run++) {
    console.log(`\n=== phase ${run}/${runs} : ${concurrency} workers x ${opsPerWorker} ops, mode=${mode} ===`);
    const { byOp, errors, wallMs } = await runPhase(serverUrl, concurrency, mode, opsPerWorker);

    let total = 0, okTotal = 0, errTotal = 0;
    for (const name of Object.keys(byOp)) {
      const a = byOp[name];
      total += a.count; okTotal += a.ok; errTotal += a.err;
      console.log("  " + fmtOp(name, a));
    }
    console.log(`  TOTAL n=${total} ok=${okTotal} err=${errTotal} wall=${wallMs}ms ` +
      `(${total === 0 ? "n/a" : (total / (wallMs / 1000)).toFixed(2)} ops/s)`);

    const errSamples = [...new Set(errors)].slice(0, 5);
    if (errSamples.length) {
      console.log("  sample errors:");
      errSamples.forEach((e) => console.log("    - " + e.slice(0, 200)));
    }
  }
}

main();