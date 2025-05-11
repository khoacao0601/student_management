import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable, map } from 'rxjs';
import { Student } from '../../state/student/student.models';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private readonly apollo: Apollo) {}

  getStudents(): Observable<Student[]> {
    return this.apollo
      .watchQuery<{ students: Student[] }>({
        query: gql`
          query GetStudents {
            students {
              student_id
              last_name
              email
            }
          }
        `,
      })
      .valueChanges.pipe(map(result => result.data.students));
  }
}
