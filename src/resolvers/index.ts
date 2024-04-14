import {UserLogin} from "../data/books";
import {Resolvers} from "../graphql/resolvers-types";
import {
    getAwards,
    getBasics,
    getEducation,
    getLanguages,
    getMyReadingStates,
    getPublications,
    getToken,
    getVolunteer,
    getWork
} from "@/controllers/index";
import {LiteralReadingState, LiteralSecrets} from "@/types/types/types.common";

export const resolvers: Resolvers = {
    Query: {
        basics: async () => await getBasics(),
        work: async () => await getWork(),
        volunteer: async () => await getVolunteer(),
        education: async () => await getEducation(),
        awards: async () => await getAwards(),
        publications: async () => await getPublications(),
        languages: async () => await getLanguages(),
    },
    Mutation: {
        login: (parent: any, args: { email: string, password: string }) => UserLogin.login,
        getToken: async (parent: any, args: { appSecret: string }): Promise<LiteralSecrets> => await getToken(args.appSecret),
        getReadingStates: async (parent: any, args: { token: string }) => await getMyReadingStates(args.token),
    },
};