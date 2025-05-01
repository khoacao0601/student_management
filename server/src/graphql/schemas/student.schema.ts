import { gql } from 'graphql-tag'; // ✅ using destructuring import

export default gql`
  # Interface Student in GraphQL
  type Student {                    
    student_id: ID!
    first_name: String!
    last_name: String!
    email: String!
    gender: String!
    date_of_birth: String!
    address: String!
    phone_number: String!
  }

  # Queries (GET in REST)
  type Query {
    students: [Student]
  }

  # Mutations (POST, PUT, DELETE in REST)
  type Mutation {
    addStudent(
      student_id: ID!
      first_name: String!
      last_name: String!
      email: String!
      gender: String!
      date_of_birth: String!
      address: String!
      phone_number: String!
    ): Student
  }

  # Subscriptions (WebSocket, real-time data)
  type Subscription {
    studentAdded: Student
  }
`;
