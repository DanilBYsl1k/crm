import { Routes } from "@angular/router";

import { LoginComponent } from "@modules/auth/components/login/login.component";
import { RegisterComponent } from "@modules/auth/components/register/register.component";
import { RestorePasswordComponent } from "@modules/auth/components/restore-password/restore-password.component";
import { ResetPasswordFormComponent } from "@modules/auth/components/reset-password-form/reset-password-form.component";
import { resetPasswordGuard } from "@core/guards/reset-password.guard";

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
    component: RestorePasswordComponent,
  },
  {
    path: 'change-password',
    component: ResetPasswordFormComponent,
    canActivate: [resetPasswordGuard]
  }
]
