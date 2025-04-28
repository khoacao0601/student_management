import { createAction, props } from '@ngrx/store';
import { Student } from './student.models';

export const loadStudents = createAction('[Student Page] Load Students'); // to kick off the loading process in services
// This action is dispatched when the user navigates to the student page and we want to load the list of students from the server.

export const loadStudentsSuccess = createAction(
  '[Student API] Load Students Success',
  props<{ students: Student[] }>()
);

export const loadStudentsFailure = createAction(
  '[Student API] Load Students Failure',
  props<{ error: any }>()
);
