#!/bin/bash

echo "Building the project..."
npm run build

echo "Checking if _redirects file exists in dist folder..."
if [ -f "dist/_redirects" ]; then
    echo "✅ _redirects file found in dist folder"
    cat dist/_redirects
else
    echo "❌ _redirects file not found in dist folder"
    echo "Copying _redirects to dist folder..."
    cp public/_redirects dist/_redirects
fi

echo "Build complete! You can now deploy to Netlify."
echo "If you're using Netlify CLI, run: netlify deploy --prod" 