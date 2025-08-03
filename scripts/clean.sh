#!/bin/bash

echo "🧼 Cleaning React Native Project..."

# Remove node_modules and lock file
rm -rf node_modules
rm -f package-lock.json

# Remove build caches
rm -rf android/.gradle android/build ios/build

# Clear npm cache
npm cache clean --force

# Install with relaxed peer dependencies
echo "📦 Installing dependencies..."
npm install --legacy-peer-deps

# Clean Android Gradle build
echo "🧹 Cleaning Android build..."
cd android && ./gradlew clean && cd ..

# Reset Metro bundler cache
echo "🚀 Starting Metro with cache reset..."
npx react-native start --reset-cache

# Optional: Run Android build
# npx react-native run-android

echo "✅ Clean and install complete!"
