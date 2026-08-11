#!/usr/bin/env bash
# Promote develop -> main (PRODUCTION).
# Flow: feature/* -> develop -> develop -> main. This handles develop -> main.
# Run only after the change has been verified on develop.
# Usage: ./push_to_production.sh ["release message"]
set -euo pipefail

# Optional merge message; falls back to a default when none is given.
MSG="${1:-Release: develop -> main (production)}"

# Refuse to run with uncommitted changes — a promotion must be clean.
if [ -n "$(git status --porcelain)" ]; then
  echo "✗ Working tree is dirty. Commit or stash before promoting." >&2
  exit 1
fi

# Confirm before touching production.
read -r -p "Promote develop -> main (production)? [y/N] " reply
case "$reply" in
  [yY] | [yY][eE][sS]) ;;
  *) echo "Aborted."; exit 1 ;;
esac

# Make sure develop is current before promoting it.
git checkout develop
git pull origin develop

# Merge develop into main and publish (triggers the production deploy).
git checkout main
git pull origin main
git merge --no-ff develop -m "$MSG"
git push origin main

# Leave the user back on develop.
git checkout develop
echo "✓ develop -> main done. Production deploy triggered."
