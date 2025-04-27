import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginBoxComponent } from './login-box/login-box.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './header/about/about.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MainDetailsPageComponent } from './main-details-page/main-details-page.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StudentsModule } from './modules/student/students.module';
import { ProfessorsModule } from './modules/professor/professors.module';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    LoginBoxComponent,
    AboutComponent,
    SignUpComponent,
    MainDetailsPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    StudentsModule,
    ProfessorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
