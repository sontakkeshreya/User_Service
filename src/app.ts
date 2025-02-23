import express, { Request, Response } from "express";
import { config } from "../config";
import { logger } from "./public/logger"

const port = config?.port;


const app = express();
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send("Successfully Started the api")
})

app.listen(port, () => {
    logger.info(`Server runnig at http://localhost:${port}`)
})
