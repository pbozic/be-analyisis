#!/bin/bash

echo "⏳ Waiting for Elasticsearch to be ready..."
mkdir -p /init-status
rm -f /init-status/init-complete.lock
MAX_RETRIES=2000
RETRIES=0

# Wait for Elasticsearch to respond to auth endpoint
while true; do
  STATUS=$(curl -s -o /dev/null -w "%{http_code}" -u "elastic:${ELASTIC_PASSWORD}" \
    http://klikni_elasticsearch:9200/_security/_authenticate)
  echo "Status: $STATUS"
  if [ "$STATUS" -eq 200 ] || [ "$STATUS" -eq 401 ]; then
    break
  fi
  RETRIES=$((RETRIES + 1))
  if [ $RETRIES -ge $MAX_RETRIES ]; then
    echo "❌ Timed out waiting for Elasticsearch"
    exit 1
  fi
  echo "Still waiting for Elasticsearch..." && sleep 5
done

echo "✅ Elasticsearch is up! Attempting to set password for elastic..."

# Retry loop for setting elastic password
MAX_PASSWORD_RETRIES=15
RETRIES=0
while true; do
  STATUS=$(curl -s -o /dev/null -w "%{http_code}" -X POST \
    -u "elastic:${ELASTIC_PASSWORD}" \
    -H "Content-Type: application/json" \
    -d "{\"password\": \"${ELASTIC_PASSWORD}\"}" \
    "http://klikni_elasticsearch:9200/_security/user/elastic/_password")

  echo "Status: $STATUS"

  if [ "$STATUS" -eq 200 ]; then
    echo "✅ Password for elastic set!"
    break
  fi

  RETRIES=$((RETRIES + 1))
  if [ $RETRIES -ge $MAX_PASSWORD_RETRIES ]; then
    echo "❌ Failed to set password after $MAX_PASSWORD_RETRIES tries"
    exit 1
  fi

  echo "⏳ Retrying password setup in 3s..."
  sleep 3
done

# Small delay to ensure security index is fully up
sleep 2

echo "👷 Creating APM system role..."
RESPONSE=$(curl -s -w "%{http_code}" -X PUT \
  -u "elastic:${ELASTIC_PASSWORD}" \
  -H "Content-Type: application/json" \
  -d "{
        \"cluster\": [\"all\"],
        \"index\": [
          {
            \"names\": [\"apm-*\", \"metrics-apm.service_summary*\"],
            \"privileges\": [\"write\", \"create_index\", \"read\", \"auto_configure\", \"manage\"]
          }
        ]
      }" \
  "http://klikni_elasticsearch:9200/_security/role/apm_system")

echo "Response: $RESPONSE"

# Set passwords for system users
OTHER_USERS=("logstash_system" "beats_system" "apm_system" "remote_monitoring_user")

for user in "${OTHER_USERS[@]}"; do
  echo "→ Setting password for $user"
  curl -s -o /dev/null -w "Status: %{http_code}\n" -X POST \
    -u "elastic:${ELASTIC_PASSWORD}" \
    -H "Content-Type: application/json" \
    -d "{\"password\": \"${ELASTIC_PASSWORD}\"}" \
    "http://klikni_elasticsearch:9200/_security/user/$user/_password"
done

echo "👷 Forcing password reset for Kibana system user: ${KIBANA_USERNAME}"
curl -s -o /dev/null -w "Status: %{http_code}\n" -X POST \
  -u "elastic:${ELASTIC_PASSWORD}" \
  -H "Content-Type: application/json" \
  -d "{\"password\": \"${KIBANA_PASSWORD}\"}" \
  "http://klikni_elasticsearch:9200/_security/user/${KIBANA_USERNAME}/_password"

echo "👷 Creating or updating Filebeat user: ${FILEBEAT_USERNAME}"
curl -s -o /dev/null -w "Status: %{http_code}\n" -X PUT \
  -u "elastic:${ELASTIC_PASSWORD}" \
  -H "Content-Type: application/json" \
  -d "{
    \"password\": \"${FILEBEAT_PASSWORD}\",
    \"roles\": [\"beats_admin\"],
    \"full_name\": \"Filebeat Ingest User\"
  }" \
  "http://klikni_elasticsearch:9200/_security/user/${FILEBEAT_USERNAME}"

# Filebeat existence check
echo "🔍 Checking if Filebeat user exists..."
STATUS=$(curl -s -w "%{http_code}" -o /dev/null -u "elastic:${ELASTIC_PASSWORD}" \
  http://klikni_elasticsearch:9200/_security/user/${FILEBEAT_USERNAME})

if [ "$STATUS" -eq 200 ]; then
  echo "✅ Filebeat user already exists"
else
  echo "👷 Creating Filebeat user: ${FILEBEAT_USERNAME}"
  curl -s -w "Status: %{http_code}\n" -X POST -u "elastic:${ELASTIC_PASSWORD}" \
    -H "Content-Type: application/json" \
    -d "{
      \"password\": \"${FILEBEAT_PASSWORD}\",
      \"roles\": [\"beats_admin\"],
      \"full_name\": \"Filebeat Ingest\"
    }" \
    "http://klikni_elasticsearch:9200/_security/user/${FILEBEAT_USERNAME}"
fi

# Kibana system user check
echo "🔍 Checking if Kibana system user exists..."
STATUS=$(curl -s -w "%{http_code}" -o /dev/null -u "elastic:${ELASTIC_PASSWORD}" \
  http://klikni_elasticsearch:9200/_security/user/${KIBANA_USERNAME})

if [ "$STATUS" -eq 200 ]; then
  echo "✅ Kibana user already exists"
else
  echo "👷 Creating Kibana system user: ${KIBANA_USERNAME}"
  curl -s -w "Status: %{http_code}\n" -X POST -u "elastic:${ELASTIC_PASSWORD}" \
    -H "Content-Type: application/json" \
    -d "{
      \"password\": \"${KIBANA_PASSWORD}\",
      \"roles\": [\"kibana_system\"],
      \"full_name\": \"Kibana System\"
    }" \
    "http://klikni_elasticsearch:9200/_security/user/${KIBANA_USERNAME}"
fi

# APM system user check
echo "🔍 Checking if APM system user exists..."
STATUS=$(curl -s -w "%{http_code}" -o /dev/null -u "elastic:${ELASTIC_PASSWORD}" \
  http://klikni_elasticsearch:9200/_security/user/apm_system)

if [ "$STATUS" -eq 200 ]; then
  echo "✅ apm_system user already exists"
else
  echo "👷 Creating apm_system user: apm_system"
  curl -s -w "Status: %{http_code}\n" -X POST -u "elastic:${ELASTIC_PASSWORD}" \
    -H "Content-Type: application/json" \
    -d "{
      \"password\": \"${ELASTIC_PASSWORD}\",
      \"roles\": [\"apm_system\"],
      \"full_name\": \"APM System\"
    }" \
    "http://klikni_elasticsearch:9200/_security/user/apm_system"
fi

# Final health check
STATUS=$(curl -s -o /dev/null -w "%{http_code}" -u "elastic:${ELASTIC_PASSWORD}" http://klikni_elasticsearch:9200)
if [ "$STATUS" -eq 200 ]; then
  echo "✅ Elasticsearch is secured and responsive!"
else
  echo "❌ Final authentication check failed"
  exit 1
fi

# Mark init complete
echo "📦 Marking init complete..."
touch /init-status/init-complete.lock
