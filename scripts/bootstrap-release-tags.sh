#!/usr/bin/env bash
# Point vX.Y.Z at the latest chore(release) on main (local only, not pushed).
# Consumer tags live on install commits; semantic-release only sees tags merged into main.
set -euo pipefail

LAST="$(
  git log -1 --format=%H origin/main --grep='^chore(release):' 2>/dev/null || true
)"
[[ -z "$LAST" ]] && exit 0

VER="$(git show "${LAST}:package.json" | node -pe 'JSON.parse(require("fs").readFileSync(0)).version')"
TAG="v${VER}"

git tag -f "$TAG" "$LAST"
echo "Bootstrap (local): ${TAG} -> ${LAST}"
