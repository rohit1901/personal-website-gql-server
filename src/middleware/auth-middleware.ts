import {Request, Response} from "express";
import {getMongoDb} from "../config/db";
import {Auth} from "@/types/types/types.common";
import {getTokenFromAuthorizationHeader} from "@/utils/index";
import {AppContext} from "@/types/interfaces/interfaces.common";
import {isDev} from "../constants";

// @desc Authenticates user and protects routes

export const verify = async (req: Request, res: Response): Promise<AppContext> => {
    if (isDev()) return {
        authorized: true,
    };
    const appSecret = getTokenFromAuthorizationHeader(req.headers.authorization);
    if (!appSecret) {
    res.status(401).json({message: "Unauthorized"});
        return {
            authorized: false,
        };
  }
    const db = await getMongoDb();
    const data = await db?.collection<Auth>("auth").findOne();
    if (data?.app.secret !== appSecret) {
        res.status(401).json({message: "Unauthorized"});
        return {
            authorized: false,
        };
    }
    return {
        authorized: true,
    };
};
