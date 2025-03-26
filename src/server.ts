import app from "./app";
import sequelize, { connectToDatabase } from "./db/connection";
import { config } from "../config";
import { logger } from "./public/logger";

const startServer = async () => {
    try {
        await connectToDatabase();
        sequelize.sync();
        app.listen(config.port, () => {
            logger.info(`Server runnig at http://localhost:${config.port}`)
        })
    }
    catch (error: unknown) {
        logger.error(error instanceof Error ? error.message : JSON.stringify(error))
        throw new Error(error instanceof Error ? error.message : JSON.stringify(error))
    }
}
startServer();