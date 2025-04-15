#!/bin/bash
# wait-for-it.sh
# This script waits for the specified host and port to be available

HOST=$1
PORT=$2
TIMEOUT=$3
apt-get update && apt-get install -y netcat
while ! nc -z $HOST $PORT; do
  echo "Waiting for $HOST:$PORT to be available..."
  sleep 2
done
echo "$HOST:$PORT is up!"