const { gql } = require("apollo-server-express");
const { addMockFunctionsToSchema } = require("apollo-server");

export const typeDefs = gql`
  type Query {
    author(firstName: String, lastName: String): Author
    allAuthors: [Author]
    allPosts: [Post]
    getFortuneCookie: String
  }
  type Author {
    id: Int
    firstName: String
    lastName: String
    posts: [Post]
  }
  type Post {
    id: Int
    title: String
    text: String
    views: Int
    author: Author
  }
`;
