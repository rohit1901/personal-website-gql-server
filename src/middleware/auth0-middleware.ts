import { NextFunction, Request, Response } from 'express';
import { AUTH0_SCOPES, isProd } from '../constants';
import { auth, AuthOptions, requiredScopes } from 'express-oauth2-jwt-bearer';

export const auth0Middleware = (options?: AuthOptions) => {
  const authConfig = {
    ...options,
    audience: process.env.AUTH0_AUDIENCE,
    issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}/`,
    tokenSigningAlg: 'RS256',
  };

  return (req: Request, res: Response, next: NextFunction) => {
    if (!options || !options?.authRequired) {
      // Skip authentication if authRequired is false and no token is provided
      return next();
    }
    // Otherwise, validate the token
    return auth(authConfig)(req, res, next);
  };
};

export const checkAuth0ScopesMiddleware =
  (scopes?: string | string[]) =>
  (req: Request, res: Response, next: NextFunction) => {
    if (scopes) {
      // If Authorization header exists, apply requiredScopes middleware
      return requiredScopes(scopes)(req, res, next);
    }
    // Otherwise, skip requiredScopes and proceed
    return next();
  };
