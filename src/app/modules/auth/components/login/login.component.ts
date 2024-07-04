import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

import { ILoginForm } from "../../../../shared/interface/auth.interface";

@Component({
  selector: 'app-login',
  standalone: true,
    imports: [
        FormsModule,
        MatFormField,
        MatInput,
        MatLabel,
        ReactiveFormsModule,
        MatButtonModule
    ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  form: FormGroup<ILoginForm>;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: this.fb.control(''),
      password: this.fb.control(''),
      remember: this.fb.control(false),
    });
  }

  onSubmit(): void {
    console.log(this.form.value);
  }

}
