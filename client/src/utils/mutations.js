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

export const ADD_ITEM = gql`
  mutation addGroceryItem($name: String!) {
    addItem(itemData: { name: $name }) {
      username
      email
      currentList {
        name
        quantity
        department
      }
      savedItems {
        name
        department
      }
    }
  }
`;

export const CREATE_ITEM = gql`
  mutation createGroceryItem($name: String!) {
    createItem(itemData: { name: $name }) {
      username
      email
      currentList {
        name
        quantity
        department
      }
      savedItems {
        name
        department
      }
    }
  }
`;

// export const ADD_ITEM = gql`
//   mutation addItem($name: String!, $quantity: Int, $department: String) {
//     addItem(
//       itemData: { name: $name, quantity: $quantity, department: $department }
//     ) {
//       name
//       savedItems {
//         name
//         quantity
//         department
//       }
//     }
//   }
// `;
