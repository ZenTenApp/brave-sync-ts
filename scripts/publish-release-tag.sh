#!/usr/bin/env bash
# Move vX.Y.Z from the main release commit to an install commit (package.json + dist/).
# semantic-release tags main first; this script retargets the same tag for consumers.
set -euo pipefail

VERSION="${1:?version required}"
TAG="v${VERSION}"

if [[ ! -d dist ]]; then
  echo "dist/ missing — build before publish" >&2
  exit 1
fi

export GIT_INDEX_FILE
GIT_INDEX_FILE="$(mktemp)"
trap 'rm -f "$GIT_INDEX_FILE"' EXIT

export GIT_AUTHOR_NAME="${GIT_AUTHOR_NAME:-github-actions[bot]}"
export GIT_AUTHOR_EMAIL="${GIT_AUTHOR_EMAIL:-github-actions[bot]@users.noreply.github.com}"
export GIT_COMMITTER_NAME="$GIT_AUTHOR_NAME"
export GIT_COMMITTER_EMAIL="$GIT_AUTHOR_EMAIL"

git add -f package.json dist
TREE="$(git write-tree)"
COMMIT="$(
  printf 'release %s\n\nPin: github:ZenTenApp/brave-sync-ts#%s' "$TAG" "$TAG" |
    git commit-tree "$TREE"
)"

git push origin ":refs/tags/${TAG}" 2>/dev/null || true
git tag -f "$TAG" "$COMMIT"
git push origin "refs/tags/${TAG}"

if command -v gh >/dev/null && [[ -n "${GITHUB_TOKEN:-}" ]]; then
  if gh release view "$TAG" >/dev/null 2>&1; then
    gh release delete "$TAG" --yes
  fi
  gh release create "$TAG" \
    --target "$COMMIT" \
    --title "Release ${TAG}" \
    --generate-notes
fi

echo "Published ${TAG} at ${COMMIT}"
