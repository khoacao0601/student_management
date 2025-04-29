import { Routes } from '@angular/router';
import { AboutComponent } from './header/about/about.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MainProfessorDetailsPageComponent } from './main-professor-details-page/main-professor-details-page.component';

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'about', component: AboutComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: 'details', component: MainProfessorDetailsPageComponent}
];

