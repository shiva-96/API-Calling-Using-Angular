import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginIntegratedComponent } from './login-integrated/login-integrated.component';
import { LoginComponent } from './login/login.component';


import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'loginIntegrated', component: LoginIntegratedComponent},
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'createuser', component:CreateUserComponent},
  

  // Lazy loading of welcome module. 
  { path: 'welcome', component:WelcomeComponent,
    canActivate:[AuthGuard],
    loadChildren: () => import('./pages/welcome/welcome.module').then((m)=> m.WelcomeModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
