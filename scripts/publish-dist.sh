#!/usr/bin/env bash
# Publish built dist/ and package.json to the dist branch.
# Requires: GITHUB_OUTPUT, dist/ and package.json in the working tree.
set -euo pipefail

git config user.name "github-actions[bot]"
git config user.email "github-actions[bot]@users.noreply.github.com"

START_SHA="$(git rev-parse HEAD)"
SHORT_SHA="$(git rev-parse --short HEAD)"

cp -r dist /tmp/brave-sync-dist
cp package.json /tmp/brave-sync-package.json

# npm version may leave package-lock.json dirty; stash so checkout dist succeeds.
DIRTY_STASH=0
if ! git diff --quiet || ! git diff --cached --quiet; then
  git stash push -m "publish-dist"
  DIRTY_STASH=1
fi

git fetch origin dist:dist 2>/dev/null || true

if git show-ref --verify --quiet refs/heads/dist; then
  git checkout dist
else
  git checkout --orphan dist
  git rm -rf . --quiet 2>/dev/null || true
fi

rm -rf dist
cp -r /tmp/brave-sync-dist dist
cp /tmp/brave-sync-package.json package.json

git add -f dist/ package.json

if git diff --cached --quiet; then
  echo "No changes on dist — skipping commit"
  echo "committed=false" >>"${GITHUB_OUTPUT:?GITHUB_OUTPUT must be set}"
else
  git commit -m "chore(ci): build ${SHORT_SHA}"
  git push origin dist
  echo "committed=true" >>"$GITHUB_OUTPUT"
fi

# Return to the commit we started on (semantic-release release commit), not origin/main.
git checkout -B main "${START_SHA}"
if [[ "${DIRTY_STASH}" == 1 ]]; then
  git stash pop || true
fi
