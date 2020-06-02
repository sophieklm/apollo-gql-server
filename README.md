# Apollo GraphQL Server

GraphQL server that connects to multiple backends: a SQL database, a MongoDB database and a REST endpoint.

Server for a basic blog app with authors, posts and views.

Adapted from the following tutorial with updates for Apollo 2: [How to build a GraphQL server](https://medium.com/apollo-stack/tutorial-building-a-graphql-server-cddaa023c035#.wy5h1htxs).

## Getting started

```bash
npm install
npm start
```

Then open [http://localhost:3000/graphql](http://localhost:3000/graphql)

When you paste this on the left side of the page:

```graphql
query {
  author(firstName: "Edmond", lastName: "Jones") {
    firstName
    lastName
    posts {
      title
      views
    }
  }
  getFortuneCookie
}
```

Hit the play button (cmd-return), then you should get a response like this:

```json
{
  "data": {
    "author": {
      "firstName": "Edmond",
      "lastName": "Jones",
      "posts": [
        {
          "title": "A post by Edmond",
          "views": 92
        }
      ]
    },
    "getFortuneCookie": "Say what you mean and mean what you say."
  }
}
```
