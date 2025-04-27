import { createReducer, on } from "@ngrx/store";
import * as ProfessorActions from "./professor.actions";
import { Professor } from "./professor.model";

export interface ProfessorState {
  professors: Professor[];
  isProfessor: boolean;
  error: any;
}

export const initialState: ProfessorState = {
  professors: [],
  isProfessor: false,
  error: null,
};

export const professorsReducer = createReducer(
    initialState,
    on(ProfessorActions.loadAllProfessorsSuccess, (state, { professors }) => ({
      ...state,
      professors,
    })),

    on(ProfessorActions.loadAllProfessorsFailure, (state, { error }) => ({
      ...state,   
        error,  
    })),

    on(ProfessorActions.setIsProfessor, (state, { isProfessor }) => ({
      ...state,
      isProfessor,
    }))
);