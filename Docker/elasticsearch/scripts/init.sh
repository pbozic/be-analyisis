#!/bin/bash

echo "Waiting for Elasticsearch to be ready..."

# Use the default `elastic:changeme` credentials in readiness check
while true; do
  STATUS=$(curl -s -o /dev/null -w "%{http_code}" -u "elastic:changeme" http://klikni_elasticsearch:9200)
  echo "Status: $STATUS"
  if [ "$STATUS" -eq 401 ]; then
    break
  fi
  echo "Still waiting for Elasticsearch..." && sleep 5
done

echo "Elasticsearch is ready! Setting up passwords..."

# Automatically set passwords for built-in users
echo "Setting passwords for built-in users..."
docker exec -i klikni_elasticsearch /usr/share/elasticsearch/bin/elasticsearch-setup-passwords interactive <<EOF
    ${ELASTIC_PASSWORD}  # Password for elastic user
    ${ELASTIC_PASSWORD}   # Password for kibana user
    ${ELASTIC_PASSWORD} # Password for logstash_system user
    ${ELASTIC_PASSWORD}    # Password for beats_system user
    ${ELASTIC_PASSWORD}      # Password for apm_system user
    ${ELASTIC_PASSWORD}   # Password for remote_monitoring_user
EOF

echo "Passwords set successfully!"

# Verify the new password works
STATUS=$(curl -s -o /dev/null -w "%{http_code}" -u "elastic:${ELASTIC_PASSWORD}" http://klikni_elasticsearch:9200)
if [ "$STATUS" -eq 200 ]; then
  echo "New password for elastic user is working!"
else
  echo "Error: Could not authenticate with new password!"
  exit 1
fi