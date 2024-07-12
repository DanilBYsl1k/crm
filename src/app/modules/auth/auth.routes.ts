import { Routes } from "@angular/router";

import { LoginComponent } from "@modules/auth/components/login/login.component";
import { RegisterComponent } from "@modules/auth/components/register/register.component";
import { RestorePasswordComponent } from "@modules/auth/components/restore-password/restore-password.component";
import { ResetPasswordFormComponent } from "@modules/auth/components/reset-password-form/reset-password-form.component";
import { resetPasswordGuard } from "@core/guards/reset-password.guard";
import { EmailMessageComponent } from "@modules/auth/components/email-message/email-message.component";
import { SubmitPasswordComponent } from "@modules/auth/components/submit-password/submit-password.component";
import { SubmitEmailComponent } from "@modules/auth/components/submit-email/submit-email.component";

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
  },
  {
    path: 'email-message',
    component: EmailMessageComponent,
  },
  {
    path: 'submit-password',
    component: SubmitPasswordComponent,
  },
  {
    path: 'submit-email',
    component: SubmitEmailComponent,
  }
]
