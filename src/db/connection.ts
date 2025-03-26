import { Sequelize } from "sequelize";
import { config } from '../../config';
import { logger } from "../public/logger";

const sequelize = new Sequelize(config.databaseName, config.databaseUser, config.databasePassword, {
    host: config.databaseHost,
    dialect: 'postgres',
    logging: logger.debug.bind(logger)
});

export const connectToDatabase = async () => {
    try {
        await sequelize.authenticate();
        logger.info("Successfuly connected to db.");
    }
    catch (error: unknown) {
        logger.error("Failed to connect to th db.");
        throw new Error("Failed to connect to db.");
    }
}
export default sequelize;