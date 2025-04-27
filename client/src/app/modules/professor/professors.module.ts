import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { professorsReducer } from "../../state/professor/professor.reducer";
import { ProfessorsEffects } from "../../state/professor/professor.effects";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [ /* your components */ ],
    imports: [
      CommonModule,
      StoreModule.forFeature('professors', professorsReducer),
      EffectsModule.forFeature([ProfessorsEffects])
    ]
})

export class ProfessorsModule {};