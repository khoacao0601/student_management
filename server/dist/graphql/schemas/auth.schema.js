// src/graphql/schemas/auth.schema.ts
import { gql } from 'apollo-server-express';
const authSchema = gql `
  type UserLogin {
    user_name: String!
  }

  type AuthPayload {
    token: String!
    user: UserLogin!
  }

  type Mutation {
    login(user_name: String!, password: String!): AuthPayload!
  }
`;
export default authSchema;
