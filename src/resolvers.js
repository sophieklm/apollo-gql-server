import { Author, Post, View, FortuneCookie } from "./connectors";

export const resolvers = {
  Query: {
    author(_, args) {
      return Author.findOne({ where: args });
    },
    allAuthors() {
      return Author.findAll();
    },
    allPosts() {
      return Post.findAll();
    },
    getFortuneCookie() {
      return FortuneCookie.getOne();
    },
  },
  Author: {
    posts(author) {
      return author.getPosts();
    },
  },
  Post: {
    author(post) {
      return post.getAuthor();
    },
    views(post) {
      return View.findOne({ postId: post.id }).then((view) => view.views);
    },
  },
};
