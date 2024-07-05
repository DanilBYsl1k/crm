import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { IRegister, IRegisterForm } from "@shared/interface/auth.interface";
import { ValidationFunctions } from "@shared/validations/validation-functions";
import { AuthService } from "@shared/services/auth.service";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  form: FormGroup<IRegisterForm>;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.form = this.fb.nonNullable.group({
        company: this.fb.control('', [ Validators.required ]),
        email: this.fb.control('', [ Validators.required, Validators.email ]),
        password: this.fb.control('', [ Validators.required, Validators.min(6) ]),
        repeatPassword: this.fb.control('', [ Validators.required ]),
      },
      {
        validators: ValidationFunctions.comparePassword('password', 'repeatPassword')
      }
    );
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.authService.register(this.form.value as IRegister).subscribe();
    }
  }
}
