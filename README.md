# Apollo GraphQL Server

GraphQL server that connects to multiple backends: a SQL database, a MongoDB database and a REST endpoint.

A basic blog app with authors, posts and views.

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
  author(firstName: "Maurine", lastName: "Rau") {
    firstName
    lastName
    posts {
      title
      views
    }
  }
}
```

and hit the play button (cmd-return), then you should get this on the right side:

```json
{
  "data": {
    "author": {
      "firstName": "Maurine",
      "lastName": "Rau",
      "posts": [
        {
          "title": "A post by Maurine",
          "views": 0
        }
      ]
    }
  }
}
```
