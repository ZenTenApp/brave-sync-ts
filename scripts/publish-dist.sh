#!/usr/bin/env bash
# Publish built dist/ and package.json to the dist branch.
# Requires: GITHUB_OUTPUT, dist/ and package.json in the working tree.
set -euo pipefail

git config user.name "github-actions[bot]"
git config user.email "github-actions[bot]@users.noreply.github.com"

SHORT_SHA="$(git rev-parse --short HEAD)"

cp -r dist /tmp/brave-sync-dist
cp package.json /tmp/brave-sync-package.json

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
