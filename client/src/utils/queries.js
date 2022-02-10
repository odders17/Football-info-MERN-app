import { gql } from "@apollo/client";

// Graphql queries
export const getUser = gql`
  query getUser {
    me {
      _id
      username
      email
    }
  }
`;
export const getApi = gql`
  query {
    getApi {
      apiKey
    }
  }
`;
export const loginUserMutation = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        avatar
        username
        email
      }
    }
  }
`;
