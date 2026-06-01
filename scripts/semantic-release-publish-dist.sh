#!/usr/bin/env bash
# Called by semantic-release publish step. Publishes dist/ and creates a GitHub Release
# whose tag points at the dist branch commit (consumers install via #vX.Y.Z).
set -euo pipefail

VERSION="${1:?version required}"
TAG="v${VERSION}"

export GITHUB_OUTPUT="${GITHUB_OUTPUT:-$(mktemp)}"

bash "$(dirname "$0")/publish-dist.sh"

git fetch origin dist
DIST_SHA="$(git rev-parse origin/dist)"

# semantic-release creates tag vX.Y.Z on main; consumers need that tag on dist.
git push origin ":refs/tags/${TAG}" 2>/dev/null || true

if gh release view "${TAG}" >/dev/null 2>&1; then
  gh release delete "${TAG}" --yes
fi

gh release create "${TAG}" \
  --target "${DIST_SHA}" \
  --title "Release ${TAG}" \
  --generate-notes

echo "Released ${TAG} at dist ${DIST_SHA} — pin: github:ZenTenApp/brave-sync-ts#${TAG}"
