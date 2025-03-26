import dotenv from "dotenv";

export interface Config {
    port: number;
    databaseHost: string;
    databaseName: string;
    databaseUser: string;
    databasePassword: string;
}

dotenv.config();

const devConfig = {
    port: 3000,
    databaseHost: 'localhost',
    databaseName: 'user_service',
    databaseUser: 'postgres_user',
    databasePassword: 'postgres_pass'
}

const prodConfig = {
    port: 3000,
    databaseHost: 'localhost',
    databaseName: 'user_service',
    databaseUser: 'postgres_user',
    databasePassword: 'postgres_pass'
}

export const config: Config = process.env.APP_ENV === 'DEV' ? devConfig : prodConfig;

