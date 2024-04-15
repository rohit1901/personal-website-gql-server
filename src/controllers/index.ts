import {getMongoDb} from "../config/db";
import {Auth, LiteralReadingState, LiteralSecrets} from "@/types/types/types.common";
import {isDev, LITERAL_CLUB_LOGIN_MUTATION, LITERAL_CLUB_READING_STATES, LITERAL_CLUB_URL} from "../constants";
import {getGraphQLQueryStr} from "@/utils/index";
import {AppContext} from "@/types/interfaces/interfaces.common";
import {DEFAULT_LITERAL_TOKEN, RESUME} from "../data";
import {ReadingStates} from "../data/books";

export const getBasics = async (context: AppContext) => {
    if (!context.authorized) {
        throw new Error("Unauthorized");
    }
    if (isDev()) return RESUME.basics;
    const db = await getMongoDb();
    const data = await db?.collection("resume").findOne();
    return data?.basics;
};
export const getWork = async (context: AppContext) => {
    if (!context.authorized) {
        throw new Error("Unauthorized");
    }
    if (isDev()) return RESUME.work;
    const db = await getMongoDb();
    const data = await db?.collection("resume").findOne();
    return data?.work;
};
export const getVolunteer = async (context: AppContext) => {
    if (!context.authorized) {
        throw new Error("Unauthorized");
    }
    if (isDev()) return RESUME.volunteer;
    const db = await getMongoDb();
    const data = await db?.collection("resume").findOne();
    return data?.volunteer;
};
export const getEducation = async (context: AppContext) => {
    if (!context.authorized) {
        throw new Error("Unauthorized");
    }
    if (isDev()) return RESUME.education;
    const db = await getMongoDb();
    const data = await db?.collection("resume").findOne();
    return data?.education;
};
export const getAwards = async (context: AppContext) => {
    if (!context.authorized) {
        throw new Error("Unauthorized");
    }
    if (isDev()) return RESUME.awards;
    const db = await getMongoDb();
    const data = await db?.collection("resume").findOne();
    return data?.awards;
};
export const getPublications = async (context: AppContext) => {
    if (!context.authorized) {
        throw new Error("Unauthorized");
    }
    if (isDev()) return RESUME.publications;
    const db = await getMongoDb();
    const data = await db?.collection("resume").findOne();
    return data?.publications;
};
export const getLanguages = async (context: AppContext) => {
    if (!context.authorized) {
        throw new Error("Unauthorized");
    }
    if (isDev()) return RESUME.languages;
    const db = await getMongoDb();
    const data = await db?.collection("resume").findOne();
    return data?.languages;
};
/**
 * Verify literal token. This function checks if the token is valid by comparing it to the one stored in the database.
 * @param token {string} - The token
 * @returns {Promise<boolean>} - The result
 */
export const verifyLiteralToken = async (token?: string) => {
    if (isDev()) return true;
    const db = await getMongoDb();
    const data = await db?.collection<Auth>("auth").findOne();
    return data?.literal.token === token;
};
/**
 * Get token. This mutation requires an app secret which checks if the app secret is valid by comparing it to the one stored in the database.
 * If the app secret is valid, it will return a token. If the token is expired,
 * it will get a new token from the Literal API and update the token in the database.
 * Otherwise, it will return a token as an empty string.
 * @param appSecret {string} - The app secret
 * @returns {Promise<LiteralSecrets>} - The token
 */
export const getToken = async (appSecret: string): Promise<LiteralSecrets> => {
    if (isDev()) return DEFAULT_LITERAL_TOKEN;
    const db = await getMongoDb();
    const data = await db?.collection<Auth>("auth").findOne();
    if (data?.app.secret === appSecret) {
        const isTokenExpired = data?.literal?.token && new Date() > data?.literal?.expiresOn;
        if (!isTokenExpired) {
            return data?.literal;
        }
        const variables = {
            email: process.env.LITERAL_CLUB_EMAIL,
            password: process.env.LITERAL_CLUB_PASSWORD
        };
        const literalLoginResponse = await fetch(LITERAL_CLUB_URL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: getGraphQLQueryStr(LITERAL_CLUB_LOGIN_MUTATION, variables)
        });
        const formattedGRes = await literalLoginResponse.json();
        const newLiteralSecrets: LiteralSecrets = {
            token: formattedGRes.data.login.token,
            createdOn: new Date(),
            expiresOn: new Date(new Date().setMonth(new Date().getMonth() + 6))
        };
        await db?.collection("auth").updateOne({_id: data._id}, {$set: {literal: newLiteralSecrets}});
        return newLiteralSecrets;
    }
    return DEFAULT_LITERAL_TOKEN;
};
/**
 * Get my reading states. This mutation requires a token which checks if the token is valid by comparing it to the one stored in the database.
 * If the token is valid, it will return the reading states by querying the Literal API.
 * Otherwise, it will return an empty array.
 * @param token {string} - The token
 * @returns {Promise<LiteralReadingState[]>} - The reading states
 */
export const getMyReadingStates = async (token?: string): Promise<LiteralReadingState[]> => {
    if (isDev()) {
        return ReadingStates.myReadingStates;
    }
    const isTokenValid = await verifyLiteralToken(token);
    if (!isTokenValid) {
        return [] as LiteralReadingState[];
    }
    const readingStates = await fetch(LITERAL_CLUB_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: getGraphQLQueryStr(LITERAL_CLUB_READING_STATES)
    });
    const formattedGRes = await readingStates.json();
    return formattedGRes.data.myReadingStates;
};