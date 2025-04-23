#!/bin/bash
echo "Elasticsearch is up. Proceeding with configuration generation..."

# Generate apm-server.yml from template
eval "echo \"$(cat /usr/share/apm-server/apm-server.template.yml)\"" > /usr/share/apm-server/apm-server.yml

echo "🚀 APM Server configuration generated."
while [ ! -f /init-status/init-complete.lock ]; do
  sleep 2
done
# Now, execute APM Server
exec apm-server "$@"