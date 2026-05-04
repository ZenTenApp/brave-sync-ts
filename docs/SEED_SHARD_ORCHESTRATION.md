# Sharded Seed Database Orchestration

## Overview

Each Brave Sync seed owns an isolated storage namespace (shard). The server enforces per-seed quotas. Because **all entities for a seed must be fetched as a whole**, efficient design requires:

- **Index seeds**: Minimal metadata per entry so the full index fits in one fetch
- **Routing seeds**: Bounded metadata; used when the index alone is insufficient
- **Storage seeds**: Bounded payloads; shard data across many seeds to avoid oversized fetches

A central script starts from a single **master seed** and walks the index to locate data.

---

## 1. Seed Hierarchy

```
                    ┌──────────────────┐
                    │   MASTER SEED    │  ← Bootstrap; stores index seed list only
                    └────────┬─────────┘
                             │
              ┌──────────────┼──────────────┐
              ▼              ▼              ▼
       ┌────────────┐ ┌────────────┐ ┌────────────┐
       │INDEX SEED 1│ │INDEX SEED 2│ │INDEX SEED N│  ← Lightweight; seeds + clues
       └─────┬──────┘ └─────┬──────┘ └─────┬──────┘
             │              │              │
       (optional routing / storage children)
```

| Layer | Role | Typical Size | Fetch Cost |
|-------|------|--------------|------------|
| **Master** | Holds list of index seed references | ~hundreds of bytes | 1 fetch |
| **Index** | Seed references + clues (labels, categories) | Small entries × N | 1 fetch per index |
| **Routing** | More detailed routing (ranges, filters) | Bounded metadata | 1 fetch per routing seed |
| **Storage** | Actual payload data | Bounded per shard | 1 fetch per storage seed |

---

## 2. Data Encoding (Using Password Entities)

brave-sync-ts implements the **password** entity type. We can repurpose it for arbitrary key-value storage:

| Field | Use | Example |
|-------|-----|---------|
| `origin` | Namespace / type | `"index:v1"`, `"routing:v1"`, `"storage:passwords:v1"` |
| `signonRealm` | Same as origin (required for unique tag) | Same as origin |
| `usernameValue` | Logical key or seed reference | `"seed:word1 word2 ..."`, `"id:abc123"` |
| `passwordValue` | Payload (base64 JSON or binary) | `"eyJzZWVkcyI6Wy4uLl0sInR5cGUiOiJpbmRleCJ9"` |
| `notes` | Optional extra metadata | Searchable hints, timestamps |

**Unique tag** = `origin|usernameElement|usernameValue|passwordElement|signonRealm`  
→ Same `origin` + `usernameValue` = same `clientTagHash` = overwrite on update. Good for key-value semantics.

---

## 3. Master Seed Layout

The master seed holds a single logical document: the list of index seed references.

**Encoding** (one password entity per index seed, or one JSON blob):

```json
{
  "v": 1,
  "indexSeeds": [
    { "seed": "word1 ... word24", "label": "passwords", "hint": "login credentials" },
    { "seed": "word1 ... word24", "label": "tokens", "hint": "API tokens" }
  ]
}
```

- **origin**: `"master:index:v1"`
- **usernameValue**: `"root"` (single key)
- **passwordValue**: base64(JSON.stringify(payload))

**Constraint**: Master seed must stay small. If you need many index seeds, either:
- Store a compressed/minimal list (e.g., seed phrase hashes + labels), or
- Introduce a second-level index (master → index-of-indexes → indexes).

---

## 4. Index Seed Layout

Each index seed maps logical keys to storage/routing seed references.

**Encoding** (one password entity per referenced seed):

```json
{
  "targetSeed": "word1 ... word24",
  "type": "storage",
  "label": "passwords-bucket-0",
  "keyRange": ["a", "m"],
  "updatedAt": 1708000000
}
```

- **origin**: `"index:v1"`
- **usernameValue**: `storage:passwords-bucket-0` (unique id for this entry)
- **passwordValue**: base64(JSON.stringify(payload))

**Efficiency**: Each index entry is small (~100–200 bytes encrypted). With ~1–2 KB per password entity overhead, aim for **&lt;50 entries per index seed** to keep a single fetch under a few hundred KB.

---

## 5. Routing Seed Layout

Routing seeds add an extra layer when:
- Index has too many children
- You need range-based or filter-based routing

**Encoding**: Same pattern as index; `type` distinguishes routing from storage.

```json
{
  "targetSeed": "word1 ... word24",
  "type": "routing",
  "label": "passwords-a",
  "filter": { "prefix": "a", "domain": "example.com" }
}
```

---

## 6. Storage Seed Layout

Storage seeds hold the actual data. To honor “fetch whole shard”:

**Batching**: Group related items (e.g., passwords for one domain, or one category).

**Encoding** (one password entity per stored item):

- **origin**: `"storage:passwords:v1"`
- **usernameValue**: logical key (e.g. `https://example.com|user@example.com`)
- **passwordValue**: encrypted JSON with the real payload

**Size limit per storage seed**: Target **&lt;100 entities** or **&lt;500 KB total** per storage seed so a single fetch remains cheap.

---

## 7. Central Orchestration Script

### Responsibilities

1. Bootstrap from master seed
2. Fetch master index
3. Recursively walk index → routing → storage
4. Resolve queries (e.g., “get password for example.com / user@example.com”)
5. Write new data into the correct storage shard (and update indexes if needed)

### Algorithm Sketch

```
orchestrate(masterSeedPhrase, query):
  1. client = connect(masterSeedPhrase)
  2. masterDoc = client.fetchPasswords()  # filter by origin "master:index:v1"
  3. indexRefs = parse(masterDoc)
  4. For each indexRef in indexRefs:
        indexClient = connect(indexRef.seed)
        indexEntries = indexClient.fetchPasswords()
        For each entry in indexEntries:
            If entry matches query (by label, keyRange, filter):
                If entry.type == "storage":
                    storageClient = connect(entry.targetSeed)
                    return storageClient.fetchPasswords()  # then filter by key
                If entry.type == "routing":
                    recurse with entry.targetSeed
  5. Return aggregated results
```

### Read Path (e.g. “get password for URL X”)

1. Fetch master seed → get index seed list
2. Fetch each index seed → get storage/routing references with clues
3. Use clues (label, keyRange, filter) to pick the right storage seed
4. Fetch storage seed → filter by key
5. Decrypt and return

### Write Path (e.g. “store new password”)

1. Determine target storage shard (e.g. by hash or range of key)
2. If shard seed doesn’t exist, create it (generate new seed phrase, bootstrap)
3. Connect to storage seed, commit new entity
4. If indexes need updating (new shard, moved data), update index/routing seeds
5. Optionally update master if a new index was added

---

## 8. Efficiency Guidelines

| Concern | Recommendation |
|---------|----------------|
| **Master size** | Single digit index seeds; one JSON blob |
| **Index size** | &lt;50 entries per index seed |
| **Storage shard size** | &lt;100 entities or ~500 KB per storage seed |
| **Routing depth** | Prefer 2 levels (master → index → storage); add routing only if necessary |
| **Key design** | Use deterministic sharding (e.g. `hash(key) % N`) so same key always goes to same shard |

---

## 9. Security Considerations

- **Seed phrase storage**: Master and index seeds’ phrases must be available to the orchestrator; treat them as highly sensitive.
- **Clues in index**: Avoid storing sensitive data in labels/hints; indexes are meant for routing, not secrets.
- **Per-seed encryption**: Each seed has its own Nigori keys; data in one shard is opaque to others without the seed.

---

## 10. Implementation Checklist

- [ ] Define schema versions (`master:index:v1`, `index:v1`, `storage:*:v1`)
- [ ] Implement `connect(seedPhrase)` → `BraveSyncClient` wrapper
- [ ] Implement master fetch/parse
- [ ] Implement index fetch/parse with clue-based filtering
- [ ] Implement storage fetch with key filtering
- [ ] Implement write path: shard selection, commit, index updates
- [ ] Add deterministic sharding (hash-based) for new storage
- [ ] Optional: Caching layer for index/routing to reduce fetches
