// import gql function (tagged template)
const { gql } = require("apollo-server-express");

// create typeDefs
const typeDefs = gql`

  type User {
    _id: ID
    username: String
    email: String
    savedLists: [List]
  }

  type Item {
    _id: ID
    name: String!
    quantity: Int
    department: String
  }

  type List {
    _id: ID
    name: String!
    savedItems: [Item]
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    item(name: String!): Item
    items: [Item]
    list(name: String!): List
    lists: [List]
  }

  input ItemInput {
    _id: ID
    name: String!
    quantity: Int
    department: String
  }
  
  input ListInput {
    _id: ID
    name: String!
    savedItems: [ItemInput]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addItem(itemData: ItemInput!): User
    removeItem(name: String!): User
    addList(listData: ListInput!): User 
    removeList(name: String!): User 
  }

  type Auth {
    token: ID!
    user: User
  }

`;

// export typeDefs
module.exports = typeDefs;
  
  
  