const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Token {
    token: String!
    user: User!
  }
  type ApiKey {
    apiKey: String!
  }
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    favTeams: [String]
  }
  type Query {
    getUser: User
    getApi: ApiKey
  }
  type Mutation {
    login(email: String!, password: String!): Token
    signUp(username: String!, email: String!, password: String!): Token
  }
`;

module.exports = typeDefs;