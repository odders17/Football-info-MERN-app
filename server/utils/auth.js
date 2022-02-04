const jwt = require("jsonwebtoken");
require("dotenv").config();

// set token secret and expiration date
const secret = process.env.SECRET || "greateFootbalApp";
const expiration = "24h";

module.exports = {
  // function for our authenticated routes
  authMiddleware: function (req, res) {
    // allows token to be sent via  req.query or headers
    let token = req.query?.token || req.headers?.authorization;
    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    if (!token) {
      return req;
    }
    // verify token and get user data out of it
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      // console.log(data);
      req.user = data;
    } catch {
      console.log("Invalid token");
    }
    return req;
  },

  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
