import gql from "gql-tag";

export const isDev = () => process.env.NODE_ENV === "development";
export const isProd = () => process.env.NODE_ENV === "production";
export const LITERAL_CLUB_URL = "https://literal.club/graphql/";
export const LITERAL_CLUB_LOGIN_MUTATION = gql`
    mutation LiteralClubLogin($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            email
            languages
            profile {
                id
                handle
                name
                bio
                image
            }
        }
    }
`;
export const LITERAL_CLUB_READING_STATES_QUERY = gql`
    query {
        myReadingStates {
            book {
                title
                description
                cover
                authors {
                    name
                }
            }
            status
        }
    }
`;

export const GITHUB_PUBLIC_REPOS_URL = "https://api.github.com/users/rohit1901/repos";