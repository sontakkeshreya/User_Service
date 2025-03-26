import express, { Request, Response } from "express";
import { logger } from "./public/logger"
import { userRoutes } from "./routes/user";

const app = express();
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send("Successfully Started the api")
})
userRoutes(app);

export default app;
