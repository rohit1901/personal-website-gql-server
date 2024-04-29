import {getMongoDb} from "../config/db";
import {Auth, LiteralReadingState, LiteralSecrets} from "@/types/types/types.common";
import {LITERAL_CLUB_LOGIN_MUTATION, LITERAL_CLUB_READING_STATES_QUERY, LITERAL_CLUB_URL} from "../constants";
import {getGraphQLQueryStr} from "@/utils/index";
import {AppContext} from "@/types/interfaces/interfaces.common";

export const getBasics = async (context: AppContext) => {
    if (!context.authorized) {
        throw new Error("Unauthorized");
    }
    const db = await getMongoDb();
    const data = await db?.collection("resume").findOne();
    return data?.basics;
};
export const getWork = async (context: AppContext) => {
    if (!context.authorized) {
        throw new Error("Unauthorized");
    }
    const db = await getMongoDb();
    const data = await db?.collection("resume").findOne();
    return data?.work;
};
export const getVolunteer = async (context: AppContext) => {
    if (!context.authorized) {
        throw new Error("Unauthorized");
    }
    const db = await getMongoDb();
    const data = await db?.collection("resume").findOne();
    return data?.volunteer;
};
export const getEducation = async (context: AppContext) => {
    if (!context.authorized) {
        throw new Error("Unauthorized");
    }
    const db = await getMongoDb();
    const data = await db?.collection("resume").findOne();
    return data?.education;
};
export const getAwards = async (context: AppContext) => {
    if (!context.authorized) {
        throw new Error("Unauthorized");
    }
    const db = await getMongoDb();
    const data = await db?.collection("resume").findOne();
    return data?.awards;
};
export const getPublications = async (context: AppContext) => {
    if (!context.authorized) {
        throw new Error("Unauthorized");
    }
    const db = await getMongoDb();
    const data = await db?.collection("resume").findOne();
    return data?.publications;
};
export const getLanguages = async (context: AppContext) => {
    if (!context.authorized) {
        throw new Error("Unauthorized");
    }
    const db = await getMongoDb();
    const data = await db?.collection("resume").findOne();
    return data?.languages;
};
export const getCertificates = async (context: AppContext) => {
    if (!context.authorized) {
        throw new Error("Unauthorized");
    }
    const db = await getMongoDb();
    const data = await db?.collection("resume").findOne();
    return data?.certificates;
}
/**
 * Verify literal token. This function checks if the token is valid by comparing it to the one stored in the database.
 * @param token {string} - The token
 * @returns {Promise<boolean>} - The result
 */
export const verifyLiteralToken = async (token?: string) => {
    const db = await getMongoDb();
    const data = await db?.collection<Auth>("auth").findOne();
    return data?.literal.token === token;
};
/**
 * Get token. This mutation requires an app secret which checks if the app secret is valid by comparing it to the one stored in the database.
 * If the app secret is valid, it will return a token. If the token is expired,
 * it will get a new token from the Literal API and update the token in the database.
 * Otherwise, it will return a token as an empty string.
 * @returns {Promise<LiteralSecrets>} - The token
 * @param context {AppContext} - The context
 */
export const getToken = async (context: AppContext): Promise<LiteralSecrets> => {
    const {authorized} = context;
    if (!authorized) {
        throw new Error("Unauthorized");
    }
    // fetch the token from the database
    const db = await getMongoDb();
    const data = await db?.collection<Auth>("auth").findOne();
    if (!data) {
        throw new Error("Internal Server Error: No Literal Token found in database. Please check the database.");
    }
    // return the token if it is not expired and token is present in the database
    if (data.literal?.token && new Date() < new Date(data.literal.expiresOn)) {
        return data.literal;
    }
    // otherwise, get a new token from the Literal API, update the token in the database and return the new token
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
};
/**
 * Get my reading states. This query requires a token which checks if the token is valid by comparing it to the one stored in the database.
 * If the token is valid, it will return the reading states by querying the Literal API.
 * Otherwise, it will return an empty array.
 * @returns {Promise<LiteralReadingState[]>} - The reading states
 * @param context {AppContext} - The context
 */
export const getMyReadingStates = async (context: AppContext): Promise<LiteralReadingState[]> => {
    const {authorized, xLiteralToken, isTokenExpired} = context;
    if (!authorized || !xLiteralToken) {
        throw new Error("Unauthorized");
    }
    if (isTokenExpired) {
        throw new Error("Token Expired. Please get a new token.");
    }
    const readingStates = await fetch(LITERAL_CLUB_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${xLiteralToken}`
        },
        body: getGraphQLQueryStr(LITERAL_CLUB_READING_STATES_QUERY)
    });
    const formattedGRes = await readingStates.json();
    return formattedGRes.data.myReadingStates;
};