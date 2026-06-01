# brave-sync-ts

TypeScript library for interacting with Brave browser sync. Given a 25-word BIP39 seed phrase, connect to Brave's sync server and access:

- **Passwords** - full CRUD (create, read, update, delete)
- **Bookmarks** - read all bookmarks and folders
- **Authenticator.cc 2FA entries** - read TOTP secrets from the Authenticator extension

## Installation

### Developing this library

```bash
npm install
npm run build:proto
npm run build
```

### Using in other ZenTenApp projects

Private consumers install from Git over SSH with a **semver tag** (prebuilt `dist/` on the tag). See [Distribution and release](docs/DISTRIBUTION_AND_RELEASE.md) for semantic-release, consumer `package.json` pins, and `ignore-scripts` setup.

## Local development and testing

### Test in another project with `npm pack`

Use this to verify the published package layout (`dist/` only) before releasing, or to try the library from a separate app.

1. Build and create a tarball from the repo root:

```bash
npm pack
```

This writes `brave-sync-ts-<version>.tgz` (for example `brave-sync-ts-0.1.0.tgz`).

2. Install it in your consuming project:

```bash
npm install /absolute/or/relative/path/to/brave-sync-ts-0.1.0.tgz
```

3. Import as usual:

```typescript
import { BraveSyncClient } from "brave-sync-ts";
```

## CLI Usage

All commands accept `--seed "word1 word2 ... word25"` or `--seed env` to read from the `BRAVE_SYNC_SEED` environment variable.

```bash
# List passwords
npx tsx src/cli.ts list-passwords --seed env
npx tsx src/cli.ts list-passwords --seed env --show-passwords

# List bookmarks
npx tsx src/cli.ts list-bookmarks --seed env
npx tsx src/cli.ts list-bookmarks --seed env --urls-only

# List Authenticator.cc 2FA entries
npx tsx src/cli.ts list-authenticator --seed env
npx tsx src/cli.ts list-authenticator --seed env --show-secrets

# Push a new password
npx tsx src/cli.ts push-password --seed env --url "https://example.com" --username "user" --password "pass"

# Update a password
npx tsx src/cli.ts update-password --seed env --id <entity-id> --new-password "newpass"

# Delete a password
npx tsx src/cli.ts delete-password --seed env --id <entity-id>
```

## Library Usage

```typescript
import { BraveSyncClient } from "brave-sync-ts";

const client = new BraveSyncClient({
  seedPhrase: "word1 word2 ... word25",
});

await client.connect();

// Read passwords
const passwords = await client.readPasswords();

// Read bookmarks
const bookmarks = await client.readBookmarks();

// Read 2FA entries
const otpEntries = await client.readAuthenticatorEntries();

// Push a password
await client.pushPassword({
  url: "https://example.com",
  username: "user@example.com",
  password: "secret",
});
```

Standalone functions are also available:

```typescript
import {
  readPasswords,
  readBookmarks,
  readAuthenticatorEntries,
} from "brave-sync-ts";

const passwords = await readPasswords({ seedPhrase: "..." });
const bookmarks = await readBookmarks({ seedPhrase: "..." });
const authenticator = await readAuthenticatorEntries({ seedPhrase: "..." });
```

## Architecture

```
src/
  crypto/         # BIP39, Ed25519 auth, Nigori encryption (scrypt + PBKDF2)
  sync/           # HTTP client for Brave Sync v2 protocol
  password/       # Password entity CRUD
  bookmark/       # Bookmark reading
  authenticator/  # Authenticator.cc 2FA entry reading
  proto/          # Protobuf types (generated from schema/)
  orchestrator/   # Sharded seed orchestrator (experimental)
  index.ts        # Main API exports and BraveSyncClient class
  cli.ts          # CLI interface
  types.ts        # Shared types and constants

schema/
  protobuf/sync_pb/  # Chromium sync .proto source files
```

## Protocol

Communicates with Brave Sync v2 over HTTP using gzip-compressed protobuf messages:

- **Auth**: BIP39 seed -> HKDF-SHA512 -> Ed25519 keypair -> signed timestamp bearer token
- **Encryption**: Nigori (scrypt or PBKDF2 key derivation -> AES-128-CBC + HMAC-SHA256)
- **Endpoint**: `POST https://sync-v2.brave.com/v2/command/`
- **Data types**: Passwords (45873), Bookmarks (32904), Extension Settings (96159), Nigori (47745)
