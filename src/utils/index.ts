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