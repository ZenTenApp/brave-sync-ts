# Distribution and release

## Overview

`brave-sync-ts` is a **private** library installed via **Git + SSH**. Consumers pin a **semver tag**:

```json
"brave-sync-ts": "github:ZenTenApp/brave-sync-ts#v1.0.0"
```

```ini
# .npmrc
ignore-scripts=true
```

- **`main`** — source only (`dist/` is gitignored; never committed here).
- **`vX.Y.Z`** — installable snapshot: `package.json` + built `dist/` at a tag (no `dist` branch).

---

## Workflows

| Workflow | File | When |
| -------- | ---- | ---- |
| CI | [`.github/workflows/ci.yml`](../.github/workflows/ci.yml) | PRs and pushes to `main` |
| Release | [`.github/workflows/release.yml`](../.github/workflows/release.yml) | Push to `main` → `npx semantic-release` |

Config: [`.releaserc.json`](../.releaserc.json). Install tags: [`scripts/publish-release-tag.sh`](../scripts/publish-release-tag.sh).

---

## What happens on release

1. Conventional commits on `main` (`fix:` patch, `feat:` minor, breaking → major).
2. semantic-release updates `CHANGELOG.md` / `package.json` on `main`, builds `dist/` in CI (not committed).
3. Pushes `chore(release): X.Y.Z [skip ci]` and tags **`release-vX.Y.Z`** on that commit (semantic-release's own tag).
4. `publish-release-tag.sh` creates **`vX.Y.Z`** on an install commit (`package.json` + `dist/`) and updates the GitHub Release.

CI bootstraps the previous `release-v*` tag onto the last `chore(release)` on `main` (local only) so semantic-release can compute the next version.

---

## Version bumps

| Commit | Release |
| ------ | ------- |
| `fix:` | patch |
| `feat:` | minor |
| `feat!:` or `BREAKING CHANGE:` | major |
| `chore:` / `docs:` / `ci:` only | no release |

---

## Local development

```bash
npm ci
npm run build:proto && npm run build
npm test
```

---

## Pitfalls

1. **Pin `v*` tags**, not `main` — `main` has no `dist/`.
2. **Conventional commits** — required for automatic semver.
3. **Cleaning old tags** — delete any `main-v*` tags on GitHub; only `v*` should remain.
