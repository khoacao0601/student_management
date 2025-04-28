import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginBoxComponent } from './login-box/login-box.component';
import { AboutComponent } from './header/about/about.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MainProfessorDetailsPageComponent } from './main-details-page/main-professor-details-page.component';

// NgRx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Feature modules
import { StudentsModule } from './modules/student/students.module';
import { ProfessorsModule } from './modules/professor/professors.module';

//PrimeNg
import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

// Routing
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';


@NgModule({
    declarations: [
      AppComponent,
      HomePageComponent,
      HeaderComponent,
      FooterComponent,
      LoginBoxComponent,
      AboutComponent,
      SignUpComponent,
      MainProfessorDetailsPageComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        StoreDevtoolsModule.instrument({ maxAge: 25 }),
        StudentsModule,
        ProfessorsModule,
        FormsModule,
    ],
    providers: [
      provideHttpClient(),
      FormsModule,
      provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: Aura
            }
        })
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule {}
  