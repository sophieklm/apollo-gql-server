import Sequelize from "sequelize";
import Mongoose from "mongoose";
import casual from "casual";
import fetch from "node-fetch";
import _ from "lodash";

Mongoose.Promise = global.Promise;

const mongo = Mongoose.connect("mongodb://localhost/views", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const ViewSchema = Mongoose.Schema({
  postId: Number,
  views: Number,
});

const View = Mongoose.model("views", ViewSchema);

const db = new Sequelize("blog", null, null, {
  dialect: "sqlite",
  storage: "./blog.sqlite",
});

const AuthorModel = db.define("author", {
  firstName: { type: Sequelize.STRING },
  lastName: { type: Sequelize.STRING },
});

const PostModel = db.define("post", {
  title: { type: Sequelize.STRING },
  text: { type: Sequelize.STRING },
});

AuthorModel.hasMany(PostModel);
PostModel.belongsTo(AuthorModel);

casual.seed(123);
db.sync({ force: true }).then(() => {
  _.times(10, () => {
    return AuthorModel.create({
      firstName: casual.first_name,
      lastName: casual.last_name,
    }).then((author) => {
      return author
        .createPost({
          title: `A post by ${author.firstName}`,
          text: casual.sentences(3),
        })
        .then((post) => {
          return View.updateOne(
            { postId: post.id },
            { views: casual.integer(0, 100) },
            { upsert: true }
          );
        });
    });
  });
});

const Author = db.models.author;
const Post = db.models.post;

const FortuneCookie = {
  getOne() {
    return fetch("http://fortunecookieapi.herokuapp.com/v1/cookie")
      .then((res) => res.json())
      .then((res) => {
        return res[0].fortune.message;
      });
  },
};

export { Author, Post, View, FortuneCookie };
