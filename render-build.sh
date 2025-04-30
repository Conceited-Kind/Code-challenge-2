#!/bin/bash
set -e  # Exit immediately on error

echo "---- Installation Verification ----"

# 1. Check installation
echo "Checking json-server..."
if ! npm ls json-server; then
  echo "Error: json-server not in package.json!"
  exit 1
fi

# 2. Verify binary exists
echo "Verifying files..."
if [ ! -f "node_modules/json-server/lib/cli/bin.js" ]; then
  echo "Error: json-server files missing!"
  ls -R node_modules/json-server || true
  exit 1
fi

# 3. Verify version
INSTALLED_VERSION=$(node -p "require('./node_modules/json-server/package.json').version")
if [ "$INSTALLED_VERSION" != "0.17.4" ]; then
  echo "Error: Wrong version installed ($INSTALLED_VERSION)"
  exit 1
fi

echo "✓ Verified json-server@0.17.4 installed correctly"