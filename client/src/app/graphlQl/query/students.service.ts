import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map, Observable, tap } from 'rxjs';
import { Student } from '../../state/student/student.models';

const ADD_STUDENT = gql`
  mutation AddStudent($input: StudentInput!) {
    addStudent(input: $input) {
      student_id
      first_name
      last_name
      email
      gender
      date_of_birth
      address
      phone_number
    }
  }
`;

@Injectable({ providedIn: 'root' })
export class StudentServiceGraphQL {
  constructor(private readonly apollo: Apollo) {}

    // 1) Query: get students list
    //    - Using watchQuery to get values from cache
    //    - Using valueChanges to get real-time updates
    //    - Using map to extract data from the result
    //    - Using Observable to handle async data
    //    - Using pipe to chain multiple operations
    //    - Using gql to define GraphQL queries
    //    - Using Apollo to send GraphQL queries
    //    - Using Apollo Client to manage GraphQL data
  getStudents(): Observable<Student[]> {
    return this.apollo
      .watchQuery<{ students: Student[] }>({
        query: gql`
          query GetStudents {
            students {
                student_id
                first_name
                last_name
                email
                gender
            }
          }
        `
      })
      .valueChanges
      .pipe(map(result => result.data.students));
  }

    // 2) Mutation: add new student
    //    - Using mutate to send GraphQL mutations        
    //    - Using map to extract data from the result
    //    - Using Observable to handle async data
    //    - Using gql to define GraphQL mutations
    //    - Using Apollo to send GraphQL mutations
    //    - Using Apollo Client to manage GraphQL data
    //    - Using pipe to chain multiple operations
    //    - Using variables to pass data to the mutation
    //    - Using map to extract data from the result

  addStudent(student: Student): Observable<Student> {
    return this.apollo
      .mutate<{ addStudent: Student }>({
        mutation: ADD_STUDENT,
        variables: {
          input: {
            student_id:    student.student_id,
            first_name:    student.first_name,
            last_name:     student.last_name,
            email:         student.email,
            gender:        student.gender,
            date_of_birth: student.date_of_birth,
            address:       student.address,
            phone_number:  student.phone_number,
          }
        }
      })
      .pipe(map(result => result.data!.addStudent));
  }

    // 3) Subscription: to get real-time updates when a new student is added
    //    - Using subscribe to get real-time updates from the server
    //    - Using gql to define GraphQL subscriptions
    //    - Using Apollo to send GraphQL subscriptions
    //    - Using Apollo Client to manage GraphQL data
    //    - Using Observable to handle async data
    //    - Using map to extract data from the result
    //    - Using pipe to chain multiple operations
    //    - Using variables to pass data to the subscription
    //    - Using map to extract data from the result
    //    - Using gql to define GraphQL subscriptions

  onStudentAdded() {
    return this.apollo.subscribe<{
      data: any; studentAdded: Student 
}>({
      query: gql`
        subscription OnStudentAdded {
          studentAdded {
            student_id
                first_name
                last_name
                email
                gender
                date_of_birth
                address
                phone_number
          }
        }
      `
    })
    .pipe(
      map(res => res.data!),
      tap(payload => console.log('[Service] subscription payload:', payload))
    );
  }
}