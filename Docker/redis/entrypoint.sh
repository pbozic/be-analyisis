#!/bin/bash

set -e

echo "📄 Generating redis.conf from template using shell substitution..."

# Generate the final redis.conf with env var substitution
eval "echo \"$(cat /usr/local/etc/redis/redis.template.conf)\"" > /usr/local/etc/redis/redis.conf

echo "🚀 Starting Redis with config: $@"
exec redis-server "$@"
