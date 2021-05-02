import gql from 'graphql-tag';

export const LOGIN_USER = gql`
mutation login($newEmail: String!, $newPassword: String!) {
    login(email: $newEmail, password: $newPassword) {
        token
        user {
            _id
            username
        }
    }
}
`;

export const ADD_USER = gql`
mutation addUser($username: String! $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
}
`;