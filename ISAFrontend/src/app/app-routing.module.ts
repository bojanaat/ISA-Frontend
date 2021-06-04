import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { OpeningPageComponent } from './components/opening-page/opening-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'opening-page'},
  {path: 'opening-page', component:OpeningPageComponent, children: [
    {path: 'registration-form', component: RegistrationFormComponent},
    {path: 'login-form', component: LoginFormComponent}
  ]},
  {path: 'home-page', component:HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
