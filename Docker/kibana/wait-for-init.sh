#!/bin/sh

echo "⏳ Waiting for /init-status/init-complete.lock..."

while [ ! -f /init-status/init-complete.lock ]; do
  sleep 2
done

echo "✅ Init done. Starting Kibana..."
exec /usr/local/bin/kibana-docker