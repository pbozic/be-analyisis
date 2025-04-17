#!/bin/bash

echo "📄 Generating filebeat.yml from template using shell substitution..."

# Use shell eval instead of envsubst
eval "echo \"$(cat /usr/share/filebeat/filebeat.template.yml)\"" > /usr/share/filebeat/filebeat.yml

echo "🚀 Running Filebeat setup command: setup --dashboards -e"
filebeat setup --dashboards -e

# After setup is complete, run the original Filebeat command
echo "🚀 Running Filebeat command: $@"
exec filebeat "$@"