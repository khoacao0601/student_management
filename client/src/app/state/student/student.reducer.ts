import { createReducer, on } from '@ngrx/store';
import * as StudentActions from './student.actions';
import { Student } from './student.models';

export interface StudentState {
  students: Student[];
  error: any;
}

export const initialState: StudentState = {
  students: [],
  error: null,
};

export const studentsReducer = createReducer(
  initialState,
  on(StudentActions.loadStudentsSuccess, (state, { students }) => ({
    ...state,
    students,
    error: null,
  })),
  on(StudentActions.loadStudentsFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(StudentActions.addStudentSuccess, (state, { student }) => {
    const alreadyExists = state.students.some(s => s.student_id === student.student_id);
    return {
      ...state,
      students: alreadyExists ? state.students : [...state.students, student],
      error: null,
    };
  }),
  on(StudentActions.addStudentFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

