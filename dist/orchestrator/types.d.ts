/**
 * Types for the sharded seed orchestration system.
 *
 * Defines the schema for index, routing, and storage seeds.
 */
/**
 * Reference to a child seed stored in an index or routing seed.
 */
export interface SeedReference {
    /** 24-word BIP39 seed phrase for the target seed */
    targetSeed: string;
    /** Role of the target seed */
    type: "index" | "routing" | "storage";
    /** Human-readable label for routing */
    label: string;
    /** Optional hint about contents (non-sensitive) */
    hint?: string;
    /** Optional key range for storage seeds (e.g. ["a", "m"]) */
    keyRange?: [string, string];
    /** Optional filter for routing (e.g. { prefix: "a", domain: "example.com" }) */
    filter?: Record<string, string>;
    /** Unix timestamp of last update */
    updatedAt?: number;
}
/**
 * Master seed document: list of index seed references.
 */
export interface MasterIndexDocument {
    /** Schema version */
    v: number;
    /** List of index seed references */
    indexSeeds: SeedReference[];
}
/**
 * Stored item in a storage seed (decoded from password entity).
 */
export interface StorageItem {
    /** Logical key (e.g. "https://example.com|user@example.com") */
    key: string;
    /** Opaque payload (decrypted JSON or binary) */
    payload: string;
    /** Optional metadata */
    meta?: Record<string, unknown>;
}
/**
 * Query for lookup operations.
 */
export interface OrchestratorQuery {
    /** Type of data to find (e.g. "passwords", "tokens") */
    dataType?: string;
    /** Optional key to look up */
    key?: string;
    /** Optional key prefix for range queries */
    keyPrefix?: string;
}
//# sourceMappingURL=types.d.ts.map