#!/bin/bash
set -e

TEMPLATE_PATH="/usr/local/etc/redis/redis.template.conf"
FINAL_PATH="/usr/local/etc/redis/redis.conf"

echo "📄 Generating redis.conf from template..."
eval "echo \"$(cat $TEMPLATE_PATH)\"" > "$FINAL_PATH"

echo "✅ redis.conf created:"
grep requirepass "$FINAL_PATH"

echo "🚀 Starting Redis with config: $@"
exec redis-server "$@"
