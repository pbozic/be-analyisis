#!/bin/bash

# Load .env and extract ENVIRONMENT
ENV=$(grep ENVIRONMENT .env | cut -d '=' -f2 | tr -d '\r')
cat ENV
if [ "$ENV" = "production" ]; then
  echo "🚀 Starting in PRODUCTION mode..."
  docker compose --env-file .env -f ./Docker/docker-compose.yml up --build -d
else
  echo "🛠 Starting in DEVELOPMENT mode..."
  docker compose --env-file .env -f ./Docker/docker-compose.yml -f ./Docker/docker-compose.override.yml up --build -d
fi
