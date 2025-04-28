import { createAction, props } from "@ngrx/store";  
import { Professor } from "./professor.model";

export const loadAllProfessors = createAction('[Professor Page] Load All Professors'); // to kick off the loading process in services

export const loadAllProfessorsSuccess = createAction(
  '[Professor API] Load All Professors Success',
  props<{ professors: Professor[] }>()
);

export const loadAllProfessorsFailure = createAction(
  '[Professor API] Load All Professors Failure',
  props<{ error: any }>()
);

export const setIsProfessor = createAction(
  '[Professor Page] Set Is Professor',
  props<{ isProfessor: boolean }>()
);