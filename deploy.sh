#!/usr/bin/env bash
# deploy.sh — push the local site to the alymelife.com VPS.
# Usage: ./deploy.sh            (dry-run first is STRONGLY recommended)
#        ./deploy.sh --live     (actually sync)
#
# Prereqs: SSH access as ccarter to the VPS. If SSH uses a non-standard
# port, set SSH_PORT below.

set -euo pipefail

REMOTE_USER="ccarter"
REMOTE_HOST="alymelife.com"
REMOTE_PATH="/var/www/vhosts/alymelife.com/httpdocs/"
SSH_PORT="22"   # change if your VPS uses a non-standard SSH port

RSYNC_EXCLUDES=(
  --exclude ".git/"
  --exclude ".github/"
  --exclude ".gitignore"
  --exclude "docs/"
  --exclude "deploy.sh"
  --exclude "README.md"
  --exclude "dist/"
  --exclude "*.csv"
  --exclude ".DS_Store"
)

if [[ "${1:-}" == "--live" ]]; then
  echo ">> BACK UP the server first (run this on the VPS, once):"
  echo "   cp -a /var/www/vhosts/alymelife.com/httpdocs /var/www/vhosts/alymelife.com/httpdocs-backup-\$(date +%Y%m%d)"
  echo ">> Deploying LIVE to ${REMOTE_HOST} ..."
  rsync -avz "${RSYNC_EXCLUDES[@]}" -e "ssh -p ${SSH_PORT}" ./ "${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_PATH}"
  echo ">> Done."
else
  echo ">> DRY RUN (no changes written). Re-run with --live to deploy."
  rsync -avzn "${RSYNC_EXCLUDES[@]}" -e "ssh -p ${SSH_PORT}" ./ "${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_PATH}"
fi
