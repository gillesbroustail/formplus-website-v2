#!/bin/bash
set -e
cd "/Users/gilles/Library/Mobile Documents/com~apple~CloudDocs/Codex/FORMPLUS WEBSITE"
if ! command -v npm >/dev/null 2>&1; then
  echo "npm not found. Please install Node.js first."
  read -p "Press Enter to close."
  exit 1
fi
npm run dev
