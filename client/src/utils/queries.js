import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me {
    me {
      username
      email
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      username
      email
    }
  }
`;

export const QUERY_ALL_USERS = gql`
  query users {
    users {
      username
      email
    }
  }
`;

export const QUERY_ITEM = gql`
  query itemGrocery($_id: ID!) {
    item(_id: $_id) {
      name
      department
    }
  }
`

export const QUERY_ALL_ITEMS = gql`
  query itemsGrocery {
    items {
      name
      department
    }
  }
`;