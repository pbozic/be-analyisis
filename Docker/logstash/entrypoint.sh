#!/bin/bash

substitute_env() {
  # Replace all ${VAR} occurrences with actual env values
  perl -pe 's/\$\{(\w+)\}/$ENV{$1}/g' "$1"
}
echo "⏳ Waiting for /init-status/init-complete.lock..."

while [ ! -f /init-status/init-complete.lock ]; do
  sleep 2
done

echo "✅ Init done. Starting Kibana..."
echo "📄 Generating logstash.conf from template using env substitution..."
substitute_env /usr/share/logstash/pipeline/logstash.template.conf > /usr/share/logstash/pipeline/logstash.conf
substitute_env /usr/share/logstash/config/logstash.template.yml > /usr/share/logstash/config/logstash.yml

echo "🚀 Starting Logstash..."
exec logstash "$@"