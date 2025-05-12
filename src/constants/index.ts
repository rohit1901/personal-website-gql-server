import gql from "gql-tag";

export const isDev = () => process.env.NODE_ENV === "development";
export const isProd = () => process.env.NODE_ENV === "production";
export const AUTH0_SCOPES = "read:resume read:github-repos read:goodreads-shelves read:substack-feed" as const;

export const GITHUB_PUBLIC_REPOS_URL =
  "https://api.github.com/users/rohit1901/repos";
export const SUBSTACK_FEED_URL = "https://rohitkhanduri.substack.com";
export const GOODREADS_FEED_SHELF_URL =
  "https://www.goodreads.com/review/list_rss/161866901?key=i4wH3ZD_K1LIZ7duOLVsiUWcyhW-fGCsox5koyQTJIUuwzwO&shelf=";
