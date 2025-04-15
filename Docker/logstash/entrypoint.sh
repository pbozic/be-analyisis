#!/bin/sh

echo "📄 Generating logstash.conf from template using env substitution..."

# Shell-style substitution
eval "echo \"$(cat /usr/share/logstash/pipeline/logstash.template.conf)\"" > /usr/share/logstash/pipeline/logstash.conf

echo "🚀 Starting Logstash..."
exec /usr/local/bin/docker-entrypoint
