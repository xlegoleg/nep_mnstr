#!/bin/bash

# Pay attention dev variables is in .gitignore

source ./bin/dev-variables.sh

# Script just refresh local database and
# populates tables with initial date for development purposes

echo "Configuring $PG_DB_NAME for development"

export PGPASSWORD=$DB_PASSWORD

dropdb -U $PG_DB_USER $PG_DB_NAME
createdb -U $PG_DB_USER $PG_DB_NAME

psql -U $PG_DB_USER $PG_DB_NAME < $PG_DB_INIT_SCRIPT_PATH

echo "$PG_DB_NAME is configured"