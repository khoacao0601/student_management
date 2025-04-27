import { createAction, props } from '@ngrx/store';
import { Student } from './student.models';

export const loadStudents = createAction('[Student Page] Load Students');

export const loadStudentsSuccess = createAction(
  '[Student API] Load Students Success',
  props<{ students: Student[] }>()
);

export const loadStudentsFailure = createAction(
  '[Student API] Load Students Failure',
  props<{ error: any }>()
);
