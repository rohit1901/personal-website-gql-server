import {Request, Response} from "express";
import {getMongoDb} from "../config/db";
import {Auth} from "@/types/types/types.common";
import {getTokenFromAuthorizationHeader} from "@/utils/index";
import {AppContext} from "@/types/interfaces/interfaces.common";

// @desc Authenticates user and protects routes
// all requests should have the App Secret in the Authorization header
// for requests which fetch data from the Literal API, a custom header `x-literal-token` should be present
export const verify = async (req: Request, res: Response): Promise<AppContext> => {
    const appSecret = getTokenFromAuthorizationHeader(req.headers.authorization);
    // should only be present for requests which fetch data from the Literal API except for the token route
    const xLiteralToken = req.headers["x-literal-token"];
    if (!appSecret) {
        res.status(401).json({message: "Unauthorized"});
        return {
            authorized: false,
        };
    }
    if (xLiteralToken) {
        const db = await getMongoDb();
        const data = await db?.collection<Auth>("auth").findOne();
        if (xLiteralToken !== data?.literal?.token) {
            res.status(401).json({message: "Unauthorized"});
            return {
                authorized: false,
            };
        }
        const isTokenExpired = data?.literal?.token ? (new Date() > new Date(data?.literal?.expiresOn)) : true;
        return {
            authorized: true, xLiteralToken: xLiteralToken as string, isTokenExpired,
        };
    }
    return {
        authorized: true,
    }
};
