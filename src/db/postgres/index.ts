import { Pool, ClientConfig } from 'pg'
import { APP_CONFIG } from "@config/index";


class PostgresDB {
    private readonly _pool: Pool;

    public constructor() {
        this._pool = new Pool({
            host: APP_CONFIG.PG_DB_HOST,
            port: APP_CONFIG.PG_DB_PORT,
            user: APP_CONFIG.PG_DB_USER,
            password: APP_CONFIG.PG_DB_PASSWORD,
            database: APP_CONFIG.PG_DB_NAME,
        } as ClientConfig);
    }

    public get pool(): Pool {
        return this._pool;
    }

    public connect(): void {
        this._pool.connect().then(() => {
            console.log(`⚡️[PostgresDB]: Successfully connected to PostgreSQL`);
        }).catch((e) => {
            console.log(`⚡️[PostgresDB]: An error occurred while connecting to the PostgreSQL`, e);
        })
    }
}

export const pgDB: PostgresDB = new PostgresDB();