import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AsyncPipe } from "@angular/common";
import { Observable } from "rxjs";

import { MatError, MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatButton } from "@angular/material/button";

import { AuthService } from "@shared/services/auth.service";
import { PreloaderComponent } from "@shared/components/preloader/preloader.component";
import { ValidationFunctions } from "@shared/validations/validation-functions";
import { InnerPassword } from "@shared/interface/auth.interface";

interface ResetPassword {
  password: FormControl<string | null>;
  repeatPassword: FormControl<string | null>;
}

@Component({
  selector: 'app-reset-password-form',
  standalone: true,
  imports: [
    AsyncPipe,
    PreloaderComponent,
    MatError,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    MatButton
  ],
  templateUrl: './reset-password-form.component.html',
  styleUrl: './reset-password-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResetPasswordFormComponent implements OnInit {
  $auth: Observable<{ result: boolean }>;
  token: string;
  form: FormGroup<ResetPassword>;

  constructor(
    private activeRoute: ActivatedRoute,
    private authService: AuthService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.token = this.activeRoute.snapshot.queryParams['token'];
    this.$auth = this.authService.checkToken(this.token);

    this.form = this.fb.group({
        password: this.fb.control('', [ Validators.required, Validators.min(6) ]),
        repeatPassword: this.fb.control('', [ Validators.required ]),
      },
      {
        validators: ValidationFunctions.comparePassword('password', 'repeatPassword')
      }
    )
  }

  onSubmit() {
    let data = { ...this.form.value, token: this.token } as InnerPassword

    if (this.form.valid) {
      this.authService.innerPassword(data).subscribe()
    }
  }
}
