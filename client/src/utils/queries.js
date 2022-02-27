import { gql } from "@apollo/client";

// Graphql queries
export const getUser = gql`
  query getMe {
    me {
      _id
      username
      email
      favTeams
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
export const signUpMutation = gql`
  mutation signUp($username: String!, $email: String!, $password: String!) {
    signUp(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        email
        username
        favTeams
      }
    }
  }
`;
export const loginUserMutation = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        favTeams
      }
    }
  }
`;
