import { Author, Post } from "./connectors";

export const resolvers = {
  Query: {
    author(_, { firstName, lastName }) {
      return Author.findOne({ where: { firstName, lastName } });
    },
    allAuthors() {
      return Author.findAll();
    },
  },
};
