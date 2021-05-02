import gql from 'graphql-tag';

export const QUERY_USER = gql`
query user($username: String!) {
    user(user: $username) {
        _id
        username
        email
    }
}
`;