import {ReadingStates, UserLogin} from "../data/books";
import {Resolvers} from "../graphql/resolvers-types";
import {getAwards, getBasics, getEducation, getLanguages, getPublications, getVolunteer, getWork} from "@/controllers/index";

export const resolvers: Resolvers = {
    Query: {
        basics: async () => await getBasics(),
        work: async () => await getWork(),
        volunteer: async () => await getVolunteer(),
        education: async () => await getEducation(),
        awards: async () => await getAwards(),
        publications: async () => await getPublications(),
        languages: async () => await getLanguages(),
        myReadingStates: () => ReadingStates.myReadingStates,
    },
    Mutation: {
        login: () => UserLogin.login,
    },
};