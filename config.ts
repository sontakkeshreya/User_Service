import dotenv from "dotenv";

dotenv.config();
const devConfig = {
    port: 3000
}

export const config = process.env.APP_ENV === 'DEV' ? devConfig : { port: null };

