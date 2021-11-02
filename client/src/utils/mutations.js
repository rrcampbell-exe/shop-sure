import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_LIST = gql`
  mutation addGroceryList($name: String!) {
    addList(listData: { name: $name }) {
      username
      email
      savedLists {
        name
        savedItems {
          name
          quantity
          department
        }
      }
    }
  }
`;

export const ADD_ITEM = gql`
  mutation addItem($name: String!, $quantity: Int, $department: String) {
    addItem(
      itemData: { name: $name, quantity: $quantity, department: $department }
    ) {
      name
      savedItems {
        name
        quantity
        department
      }
    }
  }
`;
