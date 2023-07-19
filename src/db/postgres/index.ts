import { Pool } from 'pg'
import { APP_CONFIG } from "../../config";

class PostgresDB {
    private _instance = new Pool({
        host: APP_CONFIG.PG_DB_HOST,
        user: APP_CONFIG.PG_DB_USER,
        password: APP_CONFIG.PG_DB_PASSWORD,
        database: APP_CONFIG.PG_DB_NAME,
    });

    public get instance(): Pool {
        return this._instance;
    }
}

export const PGDB = new PostgresDB();