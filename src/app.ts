import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import hpp from "hpp";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
// Import routes from the ./routes
import {readFileSync} from "node:fs";
import {ApolloServer} from "@apollo/server";
import {devResolvers, resolvers} from "./resolvers";
import {expressMiddleware, ExpressMiddlewareOptions} from "@apollo/server/express4";
import {verify} from "@/middleware/auth-middleware";
import {errorResponse} from "@/middleware/error-middleware";
import {AppContext} from "@/types/interfaces/interfaces.common";
import {isDev} from "./constants";
// TODO: test expired literal token flow
// Setup .env variables for app usage
dotenv.config();

// Setup constant variables
const PORT = process.env.PORT || 5000;
const RATE_TIME_LIMIT = Number(process.env.RATE_TIME_LIMIT) || 15;
const RATE_REQUEST_LIMIT = Number(process.env.RATE_REQUEST_LIMIT) || 100;

const typeDefs = readFileSync(`${__dirname}/graphql/schema.graphql`, "utf8");

const getExpressMiddlewareOptions = (): ExpressMiddlewareOptions<AppContext> => {
    if (isDev()) return {
        context: async ({req}) => {
            return {
                authorized: true,
                xLiteralToken: req.headers["x-literal-token"] as string,
                isTokenExpired: false,
            }
        }
    }
    return {
        context: async ({req, res}) => await verify(req, res),
    }
}

// Init express app
const app = express();
const server = new ApolloServer<AppContext>({
    typeDefs,
    resolvers: isDev() ? devResolvers : resolvers,
});

// Body parser
app.use(express.json());

// Detailed server logging
app.use(morgan("dev"));

// Limit rate of requests
// Alternatively, you can pass through specific routes for different limits based on route
app.use(
    rateLimit({
        windowMs: RATE_TIME_LIMIT * 60 * 1000,
        limit: RATE_REQUEST_LIMIT,
    }),
);

// Enable CORS
app.use(cors());

// Security Headers
app.use(helmet());

// Secure against param pollutions
app.use(hpp());
// Note you must call `start()` on the `ApolloServer`
// instance before passing the instance to `expressMiddleware`
server.start().then(() => {
    // Setup routing & middleware
    // reject any request that does not have a valid authorization header
    app.use("/graphql", expressMiddleware(server, getExpressMiddlewareOptions()), errorResponse);
    app.listen(PORT, () => console.info(`🚀 Server is listening on: ${PORT}`));
});

