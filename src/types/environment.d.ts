export {};

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            APP_HOST_URL: string;
            APP_PORT: string;
        }
    }
}