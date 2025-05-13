import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as StudentActions from './student.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { StudentServiceGraphQL } from '../../graphlQl/query/students.service';
import { Student } from './student.models';

@Injectable()
export class StudentsEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly studentService: StudentServiceGraphQL
  ) {}

  loadStudents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StudentActions.loadStudents),
      switchMap(() =>
        this.studentService.getStudents().pipe(
          map((students: Student[]) => StudentActions.loadStudentsSuccess({ students })),
          catchError(error => of(StudentActions.loadStudentsFailure({ error })))
        )
      )
    )
  );
}
