import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProfessorState } from "./professor.reducer";

export const selectProfessorState = createFeatureSelector<ProfessorState>("professors");

export const selectAllProfessors = createSelector(
  selectProfessorState,
  (state: ProfessorState) => state.professors
);

export const selectProfessorsError = createSelector(
  selectProfessorState,
  (state: ProfessorState) => state.error
);

export const selectIsProfessor = createSelector(
  selectProfessorState,
  (state: ProfessorState) => state.isProfessor
);