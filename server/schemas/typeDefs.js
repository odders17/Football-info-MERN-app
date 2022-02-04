const { gql } = require("apollo-server-express");

const typeDefs = gql`



  type Token {
    token: String!
    user: User!
  }
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
  }
  type Query {
    getUser: User

  type Mutation {
    login(email: String!, password: String!): Token
    signUp(
      username: String!
      email: String!
      password: String!
      password2: String!
    ): Token
  
  }
`;

module.exports = typeDefs;
