import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ProfessorActions from './professor.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProfessorsService } from '../../modules/professor/professors.service';
import { Professor } from './professor.model';

@Injectable()
export class ProfessorsEffects {
    constructor(
        private actions$: Actions,
        private professorsService: ProfessorsService
    ) {}
    
    loadProfessors$ = createEffect(() =>
        this.actions$.pipe(
        ofType(ProfessorActions.loadAllProfessors),
        switchMap(() =>
            this.professorsService.getAllProfessors().pipe(
            map((professors: Professor[]) => ProfessorActions.loadAllProfessorsSuccess({ professors })),
            catchError(error => of(ProfessorActions.loadAllProfessorsFailure({ error })))
            )
        )
        )
    );
}