import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Auth from "./utils/auth";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  ApolloLink,
  concat,
} from "@apollo/client";
import reportWebVitals from "./reportWebVitals";
// uri as it is a object.
const httpLink = new HttpLink({ uri: "/graphql" });
// creates auth middleware checks you're authorized.
const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      // spread and update header. if not logged in gets token from server.
      ...headers,
      authorization: Auth.loggedIn() ? Auth.getToken() : null,
    },
  }));

  return forward(operation);
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
