# Distribution and release

## Overview

`brave-sync-ts` is a **private** library installed via **Git + SSH**. Consumers pin a **semver tag** on the `dist` branch (prebuilt `dist/` at that commit).

```json
"brave-sync-ts": "github:ZenTenApp/brave-sync-ts#v0.1.0"
```

`main` is source-only. No `prepare` script — use `ignore-scripts=true` in consumers.

Previously, a bare `github:ZenTenApp/brave-sync-ts` dependency cloned `main`, which has no committed `dist/`, so npm had to run `prepare` (proto + TypeScript build) on every install. That forced consumers to turn off `ignore-scripts`, added install-time supply-chain risk, and gave no stable version to pin in `package.json` or lockfiles. Releases fix that: CI builds once, commits artifacts to `dist`, and tags `vX.Y.Z` so installs are reproducible, script-free, and safe to consume with `ignore-scripts=true`.

---

## Workflows


| Workflow | File                                                                | When                                                         |
| -------- | ------------------------------------------------------------------- | ------------------------------------------------------------ |
| CI       | `[.github/workflows/ci.yml](../.github/workflows/ci.yml)`           | PRs and pushes to `main` — build + test                      |
| Release  | `[.github/workflows/release.yml](../.github/workflows/release.yml)` | Push to `main` — publish `dist`, then `npx semantic-release` |


Config: `[.releaserc.json](../.releaserc.json)` (same plugin style as vault-cleanup, without binary assets).

---

## How a release happens

1. Land commits on `main` using [Conventional Commits](https://www.conventionalcommits.org/):
  - `fix:` → patch
  - `feat:` → minor
  - `feat!:` or `BREAKING CHANGE:` in body → major
2. **Release** workflow runs on push:
  - Builds on `main`, then runs **semantic-release** on `main` (before `publish-dist.sh`, which checks out `dist` only)
  - If a release is warranted:
    - Updates `CHANGELOG.md` and `package.json` on `main`
    - Rebuilds (`prepareCmd` in `.releaserc.json`)
    - Publishes `dist` and creates **GitHub Release** `vX.Y.Z` on `origin/dist` (`scripts/semantic-release-publish-dist.sh`)
    - Pushes `chore(release): X.Y.Z [skip ci]` to `main`
  - Finally syncs `main` and updates the **`dist`** branch (`scripts/publish-dist.sh`)
3. Consumers bump `#vX.Y.Z`.

If commits since the last release are only `chore:` / `docs:` / `ci:`, semantic-release **skips** a new version; `dist` still updates for latest `main`.

---

## Why tags target `dist`, not `main`

Git installs need `dist/index.js` at the tagged commit. vault-cleanup tags `main` and ships **release assets** (binaries). This library ships **source tree at tag** with `dist/` inside it, so the tag must point at the `dist` branch commit. semantic-release’s default `@semantic-release/github` tag-on-`main` is replaced by `@semantic-release/exec` + `gh release create --target origin/dist`.

---

## Consumer setup

```json
"brave-sync-ts": "github:ZenTenApp/brave-sync-ts#v0.1.0"
```

```ini
# .npmrc
ignore-scripts=true
```

Upgrade: change `#vX.Y.Z`, `npm install`, commit lockfile, test.

---

## Local development

```bash
npm ci
npm run build:proto && npm run build
npm test
```

Dry-run release tooling (optional): `npm run release -- --dry-run` with a clean tree and `GITHUB_TOKEN` set.

---

## Pitfalls

1. **Pinning `main`** — no guaranteed `dist/`; pin semver tags only.
2. **Non-conventional commits** — no automatic release until a `feat:` / `fix:` / breaking commit lands.
3. **chore(release) pushes** — use `[skip ci]` in the release commit message; CI may still run on that push but semantic-release should not release again.

