import {getMongoDb} from "../config/db";
import {ReadingStates} from "../data/books";

export const getBasics = async () => {
    const db = await getMongoDb();
    const data = await db?.collection("resume").findOne();
    return data?.basics;
};
export const getWork = async () => {
    const db = await getMongoDb();
    const data = await db?.collection("resume").findOne();
    return data?.work;
};
export const getVolunteer = async () => {
    const db = await getMongoDb();
    const data = await db?.collection("resume").findOne();
    return data?.volunteer;
};
export const getEducation = async () => {
    const db = await getMongoDb();
    const data = await db?.collection("resume").findOne();
    return data?.education;
};
export const getAwards = async () => {
    const db = await getMongoDb();
    const data = await db?.collection("resume").findOne();
    return data?.awards;
};
export const getPublications = async () => {
    const db = await getMongoDb();
    const data = await db?.collection("resume").findOne();
    return data?.publications;
};
export const getLanguages = async () => {
    const db = await getMongoDb();
    const data = await db?.collection("resume").findOne();
    return data?.languages;
};
export const getMyReadingStates = async () => {
    return ReadingStates.myReadingStates
};