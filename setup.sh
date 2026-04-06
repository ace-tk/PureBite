#!/bin/bash

# Idempotent setup script for PureBite
echo "🚀 Starting setup..."

# 1. Create project directories if they don't exist
mkdir -p backend
mkdir -p temp-app

# 2. Install root dependencies
echo "📦 Installing root dependencies..."
npm install

# 3. Install backend dependencies
echo "📦 Installing backend dependencies..."
(cd backend && npm install)

# 4. Install frontend dependencies
echo "📦 Installing frontend dependencies..."
(cd temp-app && npm install)

# 5. Create .env if it doesn't exist (copy from example)
if [ ! -f backend/.env ]; then
  echo "📄 Creating default backend/.env from .env.example..."
  if [ -f backend/.env.example ]; then
    cp backend/.env.example backend/.env
  else
    echo "PORT=5000\nMONGO_URI=mongodb://localhost:27017/purebite" > backend/.env
  fi
fi

echo "✅ Setup complete!"
