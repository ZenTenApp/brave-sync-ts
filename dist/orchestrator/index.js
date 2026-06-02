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
import { seedPhraseToBytes, deriveEd25519Keypair, generateAuthToken, getClientId, deriveNigoriKeys, } from "../crypto/index.js";
import { fetchNigoriSettings } from "../sync/index.js";
import { fetchPasswords } from "../password/index.js";
import { BRAVE_SYNC_CONSTANTS } from "../types.js";
/**
 * URL-based origins for namespacing. Must be valid URLs for parseUrl().
 * Hostname encodes the namespace; signonRealm = origin = scheme + host + "/".
 */
const ORIGIN_MASTER = "https://master-index-v1.local/";
const ORIGIN_INDEX = "https://index-v1.local/";
const ORIGIN_STORAGE = "https://storage-data-v1.local/";
/**
 * Encode payload for storage in password entity.
 */
/**
 * Decode payload from password entity.
 */
function decodePayload(b64) {
    return JSON.parse(atob(b64));
}
/**
 * Connect to a seed and return sync options + encryption keys.
 */
async function connectToSeed(seedPhrase, serverUrl, serviceKey) {
    const seed = seedPhraseToBytes(seedPhrase);
    const { publicKey, privateKey } = await deriveEd25519Keypair(seed);
    const authToken = await generateAuthToken(privateKey, publicKey);
    const syncOptions = {
        serverUrl,
        serviceKey,
        clientId: getClientId(publicKey),
        authToken,
    };
    const nigoriSettings = await fetchNigoriSettings(syncOptions);
    if (!nigoriSettings) {
        throw new Error("No Nigori settings found. Is the sync chain initialized?");
    }
    const { encryptionKey, macKey } = deriveNigoriKeys(seedPhrase, nigoriSettings.keyDerivationMethod, nigoriSettings.salt);
    return { syncOptions, encryptionKey, macKey };
}
/**
 * Fetch all "documents" from a seed that match the given origin namespace.
 * Documents are stored as password entities with origin = namespace.
 */
async function fetchDocuments(syncOptions, encryptionKey, macKey, origin) {
    const result = await fetchPasswords(syncOptions, encryptionKey, macKey);
    if (!result.success || !result.passwords.length) {
        return [];
    }
    const docs = [];
    for (const pw of result.passwords) {
        // Password entities use signonRealm/origin; we use our custom origin
        if (pw.signonRealm === origin || pw.origin === origin) {
            try {
                docs.push({
                    key: pw.username,
                    payload: decodePayload(pw.password),
                });
            }
            catch {
                // Skip decryption failures
            }
        }
    }
    return docs;
}
/**
 * Central orchestrator: starts from master seed, walks index, routes to storage.
 */
export class SeedOrchestrator {
    config;
    masterContext = null;
    constructor(config) {
        this.config = {
            masterSeedPhrase: config.masterSeedPhrase,
            serverUrl: config.serverUrl ?? BRAVE_SYNC_CONSTANTS.DEFAULT_SERVER_URL,
            serviceKey: config.serviceKey ?? BRAVE_SYNC_CONSTANTS.SERVICE_KEY,
        };
    }
    /**
     * Connect to the master seed and fetch Nigori settings.
     */
    async connect() {
        const ctx = await connectToSeed(this.config.masterSeedPhrase, this.config.serverUrl, this.config.serviceKey);
        this.masterContext = {
            syncOptions: ctx.syncOptions,
            encryptionKey: ctx.encryptionKey,
            macKey: ctx.macKey,
        };
    }
    ensureConnected() {
        if (!this.masterContext) {
            throw new Error("Orchestrator not connected. Call connect() first.");
        }
    }
    /**
     * Fetch the master index document (list of index seed references).
     */
    async getMasterIndex() {
        this.ensureConnected();
        const { syncOptions, encryptionKey, macKey } = this.masterContext;
        const docs = await fetchDocuments(syncOptions, encryptionKey, macKey, ORIGIN_MASTER);
        const root = docs.find((d) => d.key === "root");
        if (!root || typeof root.payload !== "object") {
            return null;
        }
        const obj = root.payload;
        if (typeof obj.v !== "number" || !Array.isArray(obj.indexSeeds)) {
            return null;
        }
        return {
            v: obj.v,
            indexSeeds: obj.indexSeeds,
        };
    }
    /**
     * Query across the sharded database.
     * Walks index seeds, follows routing, fetches matching storage seeds.
     */
    async query(query) {
        const masterIndex = await this.getMasterIndex();
        if (!masterIndex) {
            return [];
        }
        const results = [];
        for (const indexRef of masterIndex.indexSeeds) {
            const items = await this.queryFromSeedRef(indexRef, query);
            results.push(...items);
        }
        return results;
    }
    /**
     * Recursively query starting from a seed reference.
     */
    async queryFromSeedRef(ref, query) {
        const ctx = await connectToSeed(ref.targetSeed, this.config.serverUrl, this.config.serviceKey);
        if (ref.type === "storage") {
            return this.fetchStorageItems(ctx, query);
        }
        if (ref.type === "index" || ref.type === "routing") {
            const docs = await fetchDocuments(ctx.syncOptions, ctx.encryptionKey, ctx.macKey, ORIGIN_INDEX);
            const refs = docs
                .map((d) => {
                const p = d.payload;
                return {
                    targetSeed: p.targetSeed,
                    type: p.type,
                    label: p.label,
                    hint: p.hint,
                    keyRange: p.keyRange,
                    filter: p.filter,
                };
            })
                .filter((r) => r.targetSeed && r.type && r.label);
            const results = [];
            for (const childRef of refs) {
                const matches = this.refMatchesQuery(childRef, query);
                if (matches) {
                    const items = await this.queryFromSeedRef(childRef, query);
                    results.push(...items);
                }
            }
            return results;
        }
        return [];
    }
    /**
     * Check if a seed reference matches the query based on label, keyRange, filter.
     */
    refMatchesQuery(ref, query) {
        if (query.dataType && ref.label !== query.dataType) {
            return false;
        }
        if (query.key && ref.keyRange) {
            const [lo, hi] = ref.keyRange;
            if (query.key < lo || query.key > hi) {
                return false;
            }
        }
        if (query.keyPrefix && ref.filter?.prefix) {
            if (!query.keyPrefix.startsWith(ref.filter.prefix) && !ref.filter.prefix.startsWith(query.keyPrefix)) {
                return false;
            }
        }
        return true;
    }
    /**
     * Fetch storage items from a storage seed, filtered by query.
     */
    async fetchStorageItems(ctx, query) {
        const result = await fetchPasswords(ctx.syncOptions, ctx.encryptionKey, ctx.macKey);
        if (!result.success) {
            return [];
        }
        const items = [];
        for (const pw of result.passwords) {
            if (pw.signonRealm !== ORIGIN_STORAGE && pw.origin !== ORIGIN_STORAGE) {
                continue;
            }
            if (query.key && pw.username !== query.key) {
                continue;
            }
            if (query.keyPrefix && !pw.username.startsWith(query.keyPrefix)) {
                continue;
            }
            try {
                const payload = decodePayload(pw.password);
                items.push({
                    key: pw.username,
                    payload: typeof payload === "string" ? payload : JSON.stringify(payload),
                });
            }
            catch {
                // Skip decode failures
            }
        }
        return items;
    }
}
//# sourceMappingURL=index.js.map