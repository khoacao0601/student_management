import { gql } from 'graphql-tag';

export default gql`
  # Input type for creating a Student
  input StudentInput {
    student_id: ID!
    first_name: String!
    last_name: String!
    email: String!
    gender: String!
    date_of_birth: String!
    address: String!
    phone_number: String!
  }

  # Student type
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

  # Queries
  type Query {
    # Get all students
    students: [Student!]!

    # Get a single student by ID
    student(student_id: ID!): Student
  }

  # Mutations
  type Mutation {
    # Add a new student
    addStudent(input: StudentInput!): Student!

    # Remove a student by ID
    removeStudent(student_id: ID!): Student!
  }

  # Subscriptions
  type Subscription {
    # Fired when a new student is added
    studentAdded: Student!

    # Fired when a student is removed
    studentRemoved: Student!
  }
`;
