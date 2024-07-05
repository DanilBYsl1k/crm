import { Routes } from "@angular/router";

import { LoginComponent } from "@modules/auth/components/login/login.component";
import { RegisterComponent } from "@modules/auth/components/register/register.component";
import { RestorePasswordComponent } from "@modules/auth/components/restore-password/restore-password.component";

export const authRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'restore-password',
    component: RestorePasswordComponent
  }
]
