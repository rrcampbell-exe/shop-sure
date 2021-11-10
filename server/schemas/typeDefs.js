// import gql function (tagged template)
const { gql } = require("apollo-server-express");

// create typeDefs
const typeDefs = gql`

  type User {
    _id: ID
    username: String
    email: String
    currentList: [Item]
    savedItems: [Item]
  }

  type Item {
    _id: ID!
    name: String!
    quantity: Int
    department: String
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    item(name: String!): Item
    items: [Item]
  }

  input ItemInput {
    _id: ID
    name: String!
    quantity: Int
    department: String
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addItem(itemData: ItemInput!): User
    createItem(itemData: ItemInput!): User
    removeItem(name: String!): User
    deleteItem(name: String!): User
  }

  type Auth {
    token: ID!
    user: User
  }

`;

// export typeDefs
module.exports = typeDefs;
  
  
  