#!/bin/bash

# Script just refresh local database and
# populates tables with initial date for development purposes

DB="monstersdb"
SCRIPT_PATH=./mock/init-monsters.sql

echo "Configuring $DB for development"

dropdb -U node_user $DB
createdb -U node_user $DB

psql -U node_user $DB < $SCRIPT_PATH

echo "$DB is configured"