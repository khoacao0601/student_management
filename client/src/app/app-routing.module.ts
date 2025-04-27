import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './header/about/about.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MainDetailsPageComponent } from './main-details-page/main-details-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'about', component: AboutComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: 'details', component: MainDetailsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
