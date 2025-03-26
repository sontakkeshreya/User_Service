import { Express, Request, Response } from "express";
import { UserController } from "../controller/user";


export const userRoutes = (app: Express) => {
    const userController = new UserController();
    app.post('/user', async (req: Request, res: Response, next: any) => {
        await userController.createUser(req, res, next)
    }
    )
}