import {GitHubOwner, GitHubRepo} from "../graphql/resolvers-types";

/**
 * Get the GraphQL query string
 * @param taggedQuery {string} - the tagged query [GraphQL query string with the gql tag]
 * @param variables {any} - the variables to pass to the query
 * @returns {string} - the GraphQL query string
 */
export const getGraphQLQueryStr = (taggedQuery: string, variables?: any) => JSON.stringify({query: taggedQuery, variables});
/**
 * Get the Token from the Authorization header.
 * @param authorization {string} - the Authorization header
 * @returns {string | undefined} - the token
 * @example
 * Bearer cdccasd== => cdccasd==
 */
export const getTokenFromAuthorizationHeader = (authorization?: string): string | undefined => {
    if (!authorization) {
        return;
    }
    return authorization.split(" ")[1];
};

/**
 * Transforms the GitHub data. The data is transformed by adding the login, avatar_url, and html_url to each item
 * and splitting the title into title and description.
 * @example transformGitHubData(data, {login: "test", avatar_url: "test", html_url: "test"}) => [{title: "test", description: "test", login: "test", avatar_url: "test", html_url: "test"}]
 * @param data {GitHubRepo[]} - the GitHub data
 * @param login {string | undefined} - the login
 * @param avatar_url {string | undefined} - the avatar url
 * @param html_url {string | undefined} - the html url
 */
export const transformGitHubData = (data: GitHubRepo[], {login, avatar_url, html_url}: GitHubOwner): GitHubRepo[] => {
    return data.map(m => ({
        ...m,
        title: m.title?.split(":")[0],
        description: m.title?.split(":")[1],
        login,
        avatar_url,
        html_url
    }));
}