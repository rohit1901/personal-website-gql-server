import { getGitHubRepos } from "@/controllers/github-controller";
import { getGoodreadsShelves } from "@/controllers/goodreads-controller";
import {
  getAwards,
  getBasics,
  getCertificates,
  getEducation,
  getLanguages,
  getMyReadingStates,
  getPublications,
  getToken,
  getVolunteer,
  getWork,
} from "@/controllers/index";
import { getSubstackPosts } from "@/controllers/substack-controller";
import { AppContext } from "@/types/interfaces/interfaces.common";
import fetchMeta from "@/utils/fetch-meta-tags";
import { transformGitHubData } from "@/utils/index";
import { DEFAULT_LITERAL_TOKEN, GITHUB_REPOS, RESUME } from "../data";
import { ReadingStates, UserLogin } from "../data/books";
import { GitHubRepo, Resolvers } from "../graphql/resolvers-types";

export const resolvers: Resolvers = {
  Query: {
    basics: async (parent: any, args: any, context: AppContext) =>
      await getBasics(context),
    work: async (parent: any, args: any, context: AppContext) =>
      await getWork(context),
    volunteer: async (parent: any, args: any, context: AppContext) =>
      await getVolunteer(context),
    education: async (parent: any, args: any, context: AppContext) =>
      await getEducation(context),
    awards: async (parent: any, args: any, context: AppContext) =>
      await getAwards(context),
    publications: async (parent: any, args: any, context: AppContext) =>
      await getPublications(context),
    languages: async (parent: any, args: any, context: AppContext) =>
      await getLanguages(context),
    certificates: async (parent: any, args: any, context: AppContext) =>
      await getCertificates(context),
    gitHubRepos: async (parent: any, args: any, context: AppContext) =>
      await getGitHubRepos(context),
    getReadingStates: async (parent: any, args: any, context: AppContext) =>
      await getMyReadingStates(context),
    getLiteralToken: async (parent: any, args: any, context: AppContext) =>
      await getToken(context),
    getSubstackRawData: async (parent: any, args: any, context: AppContext) =>
      await getSubstackPosts(context),
    getGoodreadsBooks: async (parent: any, args: any, context: AppContext) =>
      await getGoodreadsShelves(context),
  },
  Mutation: {
    login: (parent: any, args: { email: string; password: string }) =>
      UserLogin.login,
  },
};
export const devResolvers: Resolvers = {
  Query: {
    basics: async (parent: any, args: any, context: AppContext) =>
      RESUME.basics,
    work: async (parent: any, args: any, context: AppContext) => RESUME.work,
    volunteer: async (parent: any, args: any, context: AppContext) =>
      RESUME.volunteer,
    education: async (parent: any, args: any, context: AppContext) =>
      RESUME.education,
    awards: async (parent: any, args: any, context: AppContext) =>
      RESUME.awards,
    publications: async (parent: any, args: any, context: AppContext) =>
      RESUME.publications,
    languages: async (parent: any, args: any, context: AppContext) =>
      RESUME.languages,
    certificates: async (parent: any, args: any, context: AppContext) =>
      RESUME.certificates,
    gitHubRepos: async (parent: any, args: any, context: AppContext) => {
      const urls = GITHUB_REPOS.map((repo: any) => repo.html_url);
      const rawMeta: Promise<GitHubRepo>[] = urls.map(async (url: string) =>
        fetchMeta(url),
      );
      const meta: GitHubRepo[] = await Promise.all(rawMeta);
      return transformGitHubData(meta, GITHUB_REPOS[0].owner);
    },
    getReadingStates: async (parent: any, args: any, context: AppContext) =>
      ReadingStates.myReadingStates,
    getLiteralToken: async (parent: any, args: any, context: AppContext) =>
      DEFAULT_LITERAL_TOKEN,
    getGoodreadsBooks: async (parent: any, args: any, context: AppContext) =>
      ReadingStates.myReadingStates,
    // TODO: add mock data for substack
  },
  Mutation: {
    login: (parent: any, args: { email: string; password: string }) =>
      UserLogin.login,
  },
};
