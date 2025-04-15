#!/bin/bash

echo "⏳ Waiting for Elasticsearch to be ready..."
mkdir -p /init-status
rm -f /init-status/init-complete.lock
MAX_RETRIES=20
RETRIES=0

while true; do
  STATUS=$(curl -s -o /dev/null -w "%{http_code}" -u "elastic:changeme" http://klikni_elasticsearch:9200)
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

echo "✅ Elasticsearch is ready!"
echo "→ Setting password for elastic"
curl -s -o /dev/null -w "Status: %{http_code}\n" -X POST \
  -u "elastic:changeme" \
  -H "Content-Type: application/json" \
  -d "{\"password\": \"${ELASTIC_PASSWORD}\"}" \
  "http://klikni_elasticsearch:9200/_security/user/elastic/_password"

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

# Echo the response status and body
echo "Response: $RESPONSE"
# 2️⃣ Set passwords for other system users using the updated elastic credentials
OTHER_USERS=("logstash_system" "beats_system" "apm_system" "remote_monitoring_user")

for user in "${OTHER_USERS[@]}"; do
  echo "→ Setting password for $user"
  curl -s -o /dev/null -w "Status: %{http_code}\n" -X POST \
    -u "elastic:${ELASTIC_PASSWORD}" \
    -H "Content-Type: application/json" \
    -d "{\"password\": \"${ELASTIC_PASSWORD}\"}" \
    "http://klikni_elasticsearch:9200/_security/user/$user/_password"
done

# 3️⃣ Set a separate password for kibana_system
echo "👷 Forcing password reset for Kibana system user: ${KIBANA_USERNAME}"
curl -s -o /dev/null -w "Status: %{http_code}\n" -X POST \
  -u "elastic:${ELASTIC_PASSWORD}" \
  -H "Content-Type: application/json" \
  -d "{
    \"password\": \"${KIBANA_PASSWORD}\"
  }" \
  "http://klikni_elasticsearch:9200/_security/user/${KIBANA_USERNAME}/_password"

# Create filebeat_user with role if it doesn't exist
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

# 👷 Check & create Filebeat user
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

# 👷 Check & create Kibana user
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
# Ensure `apm_system` user exists and has the correct password and role
echo "👷 Checking if APM system user exists..."
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
# ✅ Final auth check
STATUS=$(curl -s -o /dev/null -w "%{http_code}" -u "elastic:${ELASTIC_PASSWORD}" http://klikni_elasticsearch:9200)
if [ "$STATUS" -eq 200 ]; then
  echo "✅ Elasticsearch is secured and responsive!"
else
  echo "❌ Authentication failed"
  exit 1
fi

# ✅ Write lockfile (optional for Kibana wait)
echo "📦 Marking init complete..."
touch /init-status/init-complete.lock
