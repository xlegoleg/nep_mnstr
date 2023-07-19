#!/bin/bash

# Pay attention dev variables is in .gitignore

source ./bin/dev-variables.sh

# Script just refresh local database and
# populates tables with initial date for development purposes

echo "Configuring $DB_NAME for development"

export PGPASSWORD=$DB_PASSWORD

dropdb -U node_user $DB_NAME
createdb -U node_user $DB_NAME

psql -U $DB_USER $DB_NAME < $DB_INIT_SCRIPT_PATH

echo "$DB_NAME is configured"