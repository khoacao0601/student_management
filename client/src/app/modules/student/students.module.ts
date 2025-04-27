import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { studentsReducer } from '../../state/student/student.reducer';
import { StudentsEffects } from '../../state/student/student.effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [ /* your components */ ],
    imports: [
      CommonModule,
      StoreModule.forFeature('students', studentsReducer),
      EffectsModule.forFeature([StudentsEffects])
    ]
  })
  export class StudentsModule { }

// This module imports the StoreModule and EffectsModule from NgRx, which are used for state management.