import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './form/auth.guard';
import { RegisterformsComponent } from './forms/registerforms/registerforms.component';
import { UpdateComponent } from './forms/update/update.component';
import { ViewformsComponent } from './forms/view/viewforms/viewforms.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterformsComponent },
  { path: 'view', component: ViewformsComponent },
  { path: 'update/:id', component: UpdateComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: '**', redirectTo: '/welcome', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
