const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");
require("dotenv").config();

const resolvers = {
  Query: {
    getUser: async (parent, args, { user }) => {
      console.log("getUser");
      if (user) {
        return User.findOne({ _id: user._id });
      } else {
        throw new AuthenticationError("login first!");
      }
    },
    getApi: async (parent, args, { user }) => {
      console.log("get Api key");
      let apiKey = await process.env.API_KEY;
      console.log(apiKey);
      return { apiKey };
      // if (user) {
      //   let API_KEY = process.env.API_KEY;
      //   return API_KEY;
      // } else {
      //   throw new AuthenticationError("no Api Key provided for this use!");
      // }
    },
  },

  Mutation: {
    signUp: async (
      parent,
      { avatar, username, email, password, password2 }
    ) => {
      console.log("new user sign up");
      if (password != password2) {
        throw new AuthenticationError("passwords should match!");
      }

      try {
        const user = await User.create({
          avatar,
          username,
          email,
          password,
        });
        const token = signToken(user);
        return { token, user };
      } catch (err) {
        throw new AuthenticationError(
          "A user exists with the provided Username/Email!"
        );
      }
    },

    login: async (parent, { email, password }) => {
      console.log("user login");

      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
