import { auth } from "express-oauth2-jwt-bearer";
import { isProd } from "../constants";

const authConfig = {
    audience: process.env.AUTH0_AUDIENCE ?? "",
    issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}/`,
    tokenSigningAlg: "RS256",
};

export const auth0Middleware = (options?: any) => {
    if(!isProd()) return true;
    return auth({
        ...authConfig,
        ...options,
    });
};