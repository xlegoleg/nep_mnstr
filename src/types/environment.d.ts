declare global {
    namespace NodeJS {
        interface ProcessEnv {
            [key: string]: string | undefined;
            APP_HOST_URL: string;
            APP_PORT: string;
            PG_DB_HOST: string;
            PG_DB_PORT: string;
            PG_DB_USER: string;
            PG_DB_PASSWORD: string;
            PG_DB_NAME: string;
        }
    }
}