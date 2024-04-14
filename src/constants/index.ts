import {LiteralSecrets} from "@/types/types/types.common";
import gql from "gql-tag";

export const DEFAULT_LITERAL_TOKEN: LiteralSecrets = {
    token: "",
    createdOn: new Date(),
    expiresOn: new Date()
};
export const IS_DEV = "development" === process.env.NODE_ENV;
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
export const LITERAL_CLUB_READING_STATES = gql`
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
