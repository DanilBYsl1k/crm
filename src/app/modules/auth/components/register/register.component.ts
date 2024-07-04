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

import { IRegisterForm } from "../../../../shared/interface/auth.interface";
import { ValidationFunctions } from "../../../../shared/validations/validation-functions";


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

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
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
    console.log(this.form.value);
  }
}
