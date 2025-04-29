#!/bin/bash
# Render build script for Node.js/JSON Server deployment

echo "---- Starting Render Build Process ----"

# Install dependencies
echo "Installing Node.js dependencies..."
npm install --production

# Verify installation
echo "Verifying json-server installation..."
if [ ! -f "node_modules/.bin/json-server" ]; then
  echo "Error: json-server not installed!"
  exit 1
fi

echo "---- Build Completed Successfully ----"