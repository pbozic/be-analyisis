@echo off
setlocal ENABLEDELAYEDEXPANSION

for /f "tokens=1,2 delims==" %%A in (.env) do (
    if "%%A"=="ENVIRONMENT" set ENV=%%B
)

if /I "%ENV%"=="production" (
    echo 🚀 Starting in PRODUCTION mode...
    docker compose --env-file .env -f ./Docker/docker-compose.yml up --build -d
) else (
    echo 🛠 Starting in DEVELOPMENT mode...
    docker compose --env-file .env -f ./Docker/docker-compose.yml -f ./Docker/docker-compose.override.yml up --build -d
)
