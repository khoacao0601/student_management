import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as StudentActions from './student.actions';
import { StudentServiceGraphQL } from '../../graphQl/query/students.service';
import { Student } from './student.models';

@Injectable()
export class StudentsEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly studentService: StudentServiceGraphQL
  ) {}

  /**
   * Effect to load students
   * - On loadStudents dispatch, fetch list from GraphQL
   * - On success, dispatch loadStudentsSuccess
   * - On failure, dispatch loadStudentsFailure
   */
  loadStudents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StudentActions.loadStudents),
      switchMap(() =>
        this.studentService.getStudents().pipe(
          map((students: Student[]) =>
            StudentActions.loadStudentsSuccess({ students })
          ),
          catchError(error =>
            of(StudentActions.loadStudentsFailure({ error }))
          )
        )
      )
    )
  );

  /**
   * Effect to add a student
   * - On addStudent dispatch, call mutation
   * - On success, dispatch addStudentSuccess
   * - On failure, dispatch addStudentFailure
   */
  addStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StudentActions.addStudent),
      switchMap(({ student }) =>
        this.studentService.addStudent(student).pipe(
          map((newStudent: Student) =>
            StudentActions.addStudentSuccess({ student: newStudent })
          ),
          catchError(error =>
            of(StudentActions.addStudentFailure({ error }))
          )
        )
      )
    )
  );

  /**
   * Subscription effect: listen for real-time studentAdded events
   * - On each event, dispatch addStudentSuccess to update store
   */
  studentAddedSub$ = createEffect(() =>
    this.studentService.onStudentAdded().pipe(
      tap(payload => console.log('[Effect] got payload:', payload)),
      map(payload =>
        payload.data?.studentAdded
          ? StudentActions.addStudentSuccess({ student: payload.data.studentAdded })
          : StudentActions.addStudentFailure({ error: 'Student data is undefined' })
      )
    ),
    { dispatch: true }  // 🔥 PHẢI CÓ DÒNG NÀY
  );
}
