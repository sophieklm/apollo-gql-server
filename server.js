import express from "express";
const { ApolloServer } = require("apollo-server-express");
import { typeDefs } from "./data/schema";
import { resolvers } from "./data/resolvers";
import mocks from "./data/mocks";

const GRAPHQL_PORT = 3000;

const app = express();

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.listen(GRAPHQL_PORT, () =>
  console.log(
    `GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphql`
  )
);
