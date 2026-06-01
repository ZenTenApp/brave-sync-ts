#!/usr/bin/env bash
# Called by semantic-release after version bump. Publishes dist/ and creates a GitHub
# Release whose tag points at the dist branch (consumers install via #vX.Y.Z).
set -euo pipefail

VERSION="${1:?version required}"
TAG="v${VERSION}"

bash "$(dirname "$0")/publish-dist.sh"

git fetch origin dist

if gh release view "${TAG}" >/dev/null 2>&1; then
  echo "GitHub release ${TAG} already exists — skip"
  exit 0
fi

gh release create "${TAG}" \
  --target origin/dist \
  --title "Release ${TAG}" \
  --generate-notes

echo "Released ${TAG} — pin: github:ZenTenApp/brave-sync-ts#${TAG}"
