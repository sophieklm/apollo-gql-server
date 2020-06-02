import express from "express";
const { ApolloServer } = require("apollo-server-express");
import { typeDefs } from "./data/schema";
import mocks from "./data/mocks";

const GRAPHQL_PORT = 3000;

const app = express();

const server = new ApolloServer({ typeDefs, mocks });
server.applyMiddleware({ app });

app.listen(GRAPHQL_PORT, () =>
  console.log(
    `GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphql`
  )
);
