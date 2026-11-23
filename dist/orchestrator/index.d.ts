/**
 * Sharded Seed Orchestrator
 *
 * Central script that starts from a master seed and walks the index to locate
 * or store data across index, routing, and storage seeds.
 *
 * Usage:
 *   const orch = new SeedOrchestrator({ masterSeedPhrase: "..." });
 *   await orch.connect();
 *   const items = await orch.query({ dataType: "passwords", key: "https://x.com|user" });
 */
import type { MasterIndexDocument, OrchestratorQuery, StorageItem } from "./types.js";
/** Config for the orchestrator */
export interface OrchestratorConfig {
    /** 24 or 25-word master seed phrase */
    masterSeedPhrase: string;
    /** Sync server URL */
    serverUrl?: string;
    /** Brave service key */
    serviceKey?: string;
}
/**
 * Central orchestrator: starts from master seed, walks index, routes to storage.
 */
export declare class SeedOrchestrator {
    private readonly config;
    private masterContext;
    constructor(config: OrchestratorConfig);
    /**
     * Connect to the master seed and fetch Nigori settings.
     */
    connect(): Promise<void>;
    private ensureConnected;
    /**
     * Fetch the master index document (list of index seed references).
     */
    getMasterIndex(): Promise<MasterIndexDocument | null>;
    /**
     * Query across the sharded database.
     * Walks index seeds, follows routing, fetches matching storage seeds.
     */
    query(query: OrchestratorQuery): Promise<StorageItem[]>;
    /**
     * Recursively query starting from a seed reference.
     */
    private queryFromSeedRef;
    /**
     * Check if a seed reference matches the query based on label, keyRange, filter.
     */
    private refMatchesQuery;
    /**
     * Fetch storage items from a storage seed, filtered by query.
     */
    private fetchStorageItems;
}
//# sourceMappingURL=index.d.ts.map