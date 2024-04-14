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
import {LiteralSecrets} from "@/types/types/types.common";
import {AppContext} from "@/types/interfaces/interfaces.common";

export const resolvers: Resolvers = {
    Query: {
        basics: async (parent: any, args: any, context: AppContext) => await getBasics(context),
        work: async (parent: any, args: any, context: AppContext) => await getWork(context),
        volunteer: async (parent: any, args: any, context: AppContext) => await getVolunteer(context),
        education: async (parent: any, args: any, context: AppContext) => await getEducation(context),
        awards: async (parent: any, args: any, context: AppContext) => await getAwards(context),
        publications: async (parent: any, args: any, context: AppContext) => await getPublications(context),
        languages: async (parent: any, args: any, context: AppContext) => await getLanguages(context),
    },
    Mutation: {
        login: (parent: any, args: { email: string, password: string }) => UserLogin.login,
        getToken: async (parent: any, args: { appSecret: string }): Promise<LiteralSecrets> => await getToken(args.appSecret),
        getReadingStates: async (parent: any, args: { token: string }) => await getMyReadingStates(args.token),
    },
};