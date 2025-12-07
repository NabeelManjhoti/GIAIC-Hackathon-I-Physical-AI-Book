#!/bin/bash

# Exit if any command fails
set -e

echo "Starting deployment process..."

# Build the site
echo "Building the site..."
GIT_USER=NabeelManjhoti CURRENT_BRANCH=main USE_SSH=false yarn deploy

echo "Deployment completed successfully!"