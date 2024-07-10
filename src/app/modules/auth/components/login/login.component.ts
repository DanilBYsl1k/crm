import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatError, MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

import { ILogin, ILoginForm } from "@shared/interface/auth.interface";
import { RouterLink } from "@angular/router";
import { AuthService } from "@shared/services/auth.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    MatButtonModule,
    RouterLink,
    MatError
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  form: FormGroup<ILoginForm>;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: this.fb.control('', [ Validators.required, Validators.email ]),
      password: this.fb.control('', [Validators.minLength(6), Validators.required]),
      remember: this.fb.control(false),
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.authService.login(this.form.value as ILogin).subscribe();
    }
  }

}
