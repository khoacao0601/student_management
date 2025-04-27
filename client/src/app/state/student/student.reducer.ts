import { createReducer, on } from '@ngrx/store';
import * as StudentActions from './student.actions';
import { Student } from './student.models';

export interface StudentState {
  students: Student[];
  error: any;
}

export const initialState: StudentState = {
  students: [],
  error: null
};

export const studentsReducer = createReducer(
  initialState,
  on(StudentActions.loadStudentsSuccess, (state, { students }) => ({
    ...state,
    students
  })),
  on(StudentActions.loadStudentsFailure, (state, { error }) => ({
    ...state,
    error
  }))
);
