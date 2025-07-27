#!/bin/bash

# Car Simulation Deployment Script
echo "🚗 Building Car Simulation for deployment..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Built files are in the 'dist' folder"
    echo ""
    echo "🌐 To deploy to Netlify:"
    echo "1. Go to https://netlify.com"
    echo "2. Connect your GitHub repository"
    echo "3. Build command: npm run build"
    echo "4. Publish directory: dist"
    echo ""
    echo "📤 Or manually upload the 'dist' folder contents to your hosting provider"
else
    echo "❌ Build failed!"
    exit 1
fi 