import {ReadingStates, UserLogin} from "../data/books";
import {GitHubRepo, Resolvers} from "../graphql/resolvers-types";
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
import {AppContext} from "@/types/interfaces/interfaces.common";
import {getGitHubRepos} from "@/controllers/github-controller";
import {DEFAULT_LITERAL_TOKEN, GITHUB_REPOS, RESUME} from "../data";
import fetchMeta from "@/utils/fetch-meta-tags";
import {transformGitHubData} from "@/utils/index";

export const resolvers: Resolvers = {
    Query: {
        basics: async (context: AppContext) => await getBasics(context),
        work: async (context: AppContext) => await getWork(context),
        volunteer: async (context: AppContext) => await getVolunteer(context),
        education: async (context: AppContext) => await getEducation(context),
        awards: async (context: AppContext) => await getAwards(context),
        publications: async (context: AppContext) => await getPublications(context),
        languages: async (context: AppContext) => await getLanguages(context),
        gitHubRepos: async (context: AppContext) => await getGitHubRepos(context),
        getReadingStates: async (context: AppContext) => await getMyReadingStates(context),
        getLiteralToken: async (context: AppContext) => await getToken(context),
    },
    Mutation: {
        login: (parent: any, args: { email: string, password: string }) => UserLogin.login,
    },
};
export const devResolvers: Resolvers = {
    Query: {
        basics: async (context: AppContext) => RESUME.basics,
        work: async (context: AppContext) => RESUME.work,
        volunteer: async (context: AppContext) => RESUME.volunteer,
        education: async (context: AppContext) => RESUME.education,
        awards: async (context: AppContext) => RESUME.awards,
        publications: async (context: AppContext) => RESUME.publications,
        languages: async (context: AppContext) => RESUME.languages,
        gitHubRepos: async (context: AppContext) => {
            const urls = GITHUB_REPOS.map((repo: any) => repo.html_url);
            const rawMeta: Promise<GitHubRepo>[] = urls.map(async (url: string) => fetchMeta(url));
            const meta: GitHubRepo[] = await Promise.all(rawMeta);
            return transformGitHubData(meta, GITHUB_REPOS[0].owner)
        },
        getReadingStates: async (context: AppContext) => ReadingStates.myReadingStates,
        getLiteralToken: async (context: AppContext) => DEFAULT_LITERAL_TOKEN,
    },
    Mutation: {
        login: (parent: any, args: { email: string, password: string }) => UserLogin.login,
    },
};