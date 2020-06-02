import express from "express";
import dotenv from "dotenv";
import { ApolloServer } from "apollo-server-express";
import { ApolloEngine } from "apollo-engine";
import { typeDefs } from "./data/schema";
import { resolvers } from "./data/resolvers";

dotenv.config();

const GRAPHQL_PORT = process.env.GRAPHQL_PORT || 3000;

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  tracing: true,
  cacheControl: {
    defaultMaxAge: 5,
    stripFormattedExtensions: false,
    calculateCacheControlHeaders: false,
  },
  engine: false,
});
server.applyMiddleware({ app });

const engine = new ApolloEngine({
  apiKey: process.env.ENGINE_API_KEY,
});

engine.listen(
  {
    port: GRAPHQL_PORT,
    graphqlPaths: ["/api/graphql"],
    expressApp: app,
    launcherOptions: {
      startupTimeout: 3000,
    },
  },
  () =>
    console.log(
      `GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphql`
    )
);
