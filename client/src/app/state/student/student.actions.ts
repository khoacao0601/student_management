import { createAction, props } from '@ngrx/store';
import { Student } from './student.models';


// Load Students

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

// Add Student

export const addStudent = createAction(
  '[Student Page] Add Student',
  props<{ student: Student }>()
);
export const addStudentSuccess = createAction(
  '[Student API] Add Student Success',
  props<{ student: Student }>()
);
export const addStudentFailure = createAction(
  '[Student API] Add Student Failure',
  props<{ error: any }>()
);

export function removeStudentSuccess(removeStudentSuccess: any, arg1: (state: import("./student.reducer").StudentState, { studentId }: any) => { students: Student[]; error: null; }): import("@ngrx/store").ReducerTypes<import("./student.reducer").StudentState, readonly import("@ngrx/store").ActionCreator[]> {
  throw new Error('Function not implemented.');
}



