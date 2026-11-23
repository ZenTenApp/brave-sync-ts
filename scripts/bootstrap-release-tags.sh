#!/usr/bin/env bash
# Point release-vX.Y.Z at the latest chore(release) on main (local only, not pushed).
# semantic-release uses the release-v* namespace (see tagFormat in .releaserc.json) so it never
# collides with the consumer vX.Y.Z tags, which live on install commits outside main's history.
set -euo pipefail

LAST="$(
  git log -1 --format=%H origin/main --grep='^chore(release):' 2>/dev/null || true
)"
[[ -z "$LAST" ]] && exit 0

VER="$(git show "${LAST}:package.json" | node -pe 'JSON.parse(require("fs").readFileSync(0)).version')"
TAG="release-v${VER}"

git tag -f "$TAG" "$LAST"
echo "Bootstrap (local): ${TAG} -> ${LAST}"
