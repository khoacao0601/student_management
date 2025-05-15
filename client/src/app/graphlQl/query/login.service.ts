import gql from 'graphql-tag';

export const LOGIN_MUTATION = gql`
  mutation Login($user_name: String!, $password: String!) {
    login(user_name: $user_name, password: $password) {
      token
      user {
        user_name
      }
    }
  }
`;
