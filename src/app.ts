import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import hpp from "hpp";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
// Import routes from the ./routes
import { readFileSync } from "node:fs";
import { ApolloServer } from "@apollo/server";
import { devResolvers, resolvers } from "./resolvers";
import { errorResponse } from "@/middleware/error-middleware";
import { AppContext } from "@/types/interfaces/interfaces.common";
import { AUTH0_SCOPES, isProd } from "./constants";
import { auth0Middleware } from "./middleware/auth0-middleware";
import { requiredScopes } from "express-oauth2-jwt-bearer";
// TODO: test expired literal token flow
// Setup .env variables for app usage
dotenv.config();

// Setup constant variables
const PORT = process.env.PORT || 5000;
const RATE_TIME_LIMIT = Number(process.env.RATE_TIME_LIMIT) || 15;
const RATE_REQUEST_LIMIT = Number(process.env.RATE_REQUEST_LIMIT) || 100;

const typeDefs = readFileSync(`${__dirname}/graphql/schema.graphql`, "utf8");

// This function will create a new server Apollo Server instance
export const createApolloServer = async (): Promise<{
  apolloServer: ApolloServer<AppContext>;
  expressServer: Express;
}> => {
  // Init express app
  const expressServer = express();
  const apolloServer = new ApolloServer<AppContext>({
    typeDefs,
    resolvers: isProd() ? resolvers : devResolvers,
  });

  // Body parser
  expressServer.use(express.json());

  // Detailed server logging
  expressServer.use(morgan("dev"));

  // Limit rate of requests
  // Alternatively, you can pass through specific routes for different limits based on route
  expressServer.use(
    rateLimit({
      windowMs: RATE_TIME_LIMIT * 60 * 1000,
      limit: RATE_REQUEST_LIMIT,
    }),
  );

  // Enable CORS
  expressServer.use(cors());

  // Security Headers
  expressServer.use(helmet());

  // Secure against param pollutions
  expressServer.use(hpp());

  // Register Auth0 middleware
  expressServer.use(auth0Middleware);
  expressServer.use(requiredScopes(AUTH0_SCOPES));
  await apolloServer.start();
  expressServer.use(
    "/graphql",
    errorResponse,
  );
  return { apolloServer, expressServer };
};
createApolloServer()
  .then(async ({ apolloServer, expressServer }) => {
    expressServer.listen(PORT, () =>
      console.info(`🚀 Server is listening on: ${PORT}`),
    );
  })
  .catch(console.error);
