import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StudentState } from './student.reducer';

// Selectors for the All Students feature state
export const selectStudentState = createFeatureSelector<StudentState>('students');

export const selectAllStudents = createSelector(
  selectStudentState,
  (state: StudentState) => state.students
);

export const selectStudentsError = createSelector(
  selectStudentState,
  (state: StudentState) => state.error
);

