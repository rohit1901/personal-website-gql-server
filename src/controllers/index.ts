import {getMongoDb} from "../config/db";
import {AppContext} from "@/types/interfaces/interfaces.common";

export const getBasics = async (context: AppContext) => {
    const db = await getMongoDb();
    const data = await db?.collection("resume").findOne();
    return data?.basics;
};
export const getWork = async (context: AppContext) => {
    const db = await getMongoDb();
    const data = await db?.collection("resume").findOne();
    return data?.work;
};
export const getVolunteer = async (context: AppContext) => {
    const db = await getMongoDb();
    const data = await db?.collection("resume").findOne();
    return data?.volunteer;
};
export const getEducation = async (context: AppContext) => {
    const db = await getMongoDb();
    const data = await db?.collection("resume").findOne();
    return data?.education;
};
export const getAwards = async (context: AppContext) => {
    const db = await getMongoDb();
    const data = await db?.collection("resume").findOne();
    return data?.awards;
};
export const getPublications = async (context: AppContext) => {
    const db = await getMongoDb();
    const data = await db?.collection("resume").findOne();
    return data?.publications;
};
export const getLanguages = async (context: AppContext) => {
    const db = await getMongoDb();
    const data = await db?.collection("resume").findOne();
    return data?.languages;
};
export const getCertificates = async (context: AppContext) => {
    const db = await getMongoDb();
    const data = await db?.collection("resume").findOne();
    return data?.certificates;
};