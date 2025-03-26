import { CraeteUserAttributes } from "../models/user";
import { logger } from "../public/logger";
import { createUser, doesUserExist } from "../services/user";
import { Request, Response } from "express";

export interface UserControllerInterface {
    createUser: (req: Request, res: Response, next: any) => Promise<void>
}

export class UserController implements UserControllerInterface {
    public async createUser(req: Request, res: Response, next: any) {
        try {
            const userInfo = req.body as unknown as CraeteUserAttributes;

            const userExist = await doesUserExist(userInfo.email);
            if (userExist) {
                logger.info(`User already exists, with email:${userInfo.email}`);
                res.status(201).send('User already exists, Please Log In.');
                return;
            }

            const userDetails = await createUser(userInfo);
            logger.info(`Successfully created user, with email:${userDetails.email}`)
            res.status(200).send(userDetails);
        } catch (error: unknown) {
            logger.error(error instanceof Error ? error.message : JSON.stringify(error));
            res.status(400).send(error instanceof Error ? error.message : JSON.stringify(error));
        }
    }
}
