import { configDotenv } from "dotenv";

configDotenv({
    path: `${__dirname}/.env`
});

export const APP_CONFIG: Record<string, string | undefined> = {
    APP_HOST_URL: process.env.APP_HOST_URL,
    APP_PORT: process.env.APP_PORT,
    PG_DB_HOST: process.env.PG_DB_HOST,
    PG_DB_PORT: process.env.PG_DB_PORT,
    PG_DB_USER: process.env.PG_DB_USER,
    PG_DB_PASSWORD: process.env.PG_DB_PASSWORD,
    PG_DB_NAME: process.env.PG_DB_NAME,
}