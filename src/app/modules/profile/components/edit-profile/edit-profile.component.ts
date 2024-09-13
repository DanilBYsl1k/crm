import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatError, MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";

import { ValidationFunctions } from "@shared/validations/validation-functions";
import { AllowedFileTypesEnum } from "@shared/enums/allowed-file-types.enum";
import { AuthService } from "@shared/services/auth.service";
import { ProfileService } from "@shared/services/profile.service";
import { InputFileComponent } from "@shared/components/input-file/input-file.component";
import { MatButton } from "@angular/material/button";
import { Subscription } from "rxjs";
import { UserInterface } from "@shared/interface/user.interface";

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [
    InputFileComponent,
    ReactiveFormsModule,
    MatError,
    MatFormField,
    MatInput,
    MatLabel,
    MatButton
  ],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditProfileComponent implements OnInit, OnDestroy{
  public user = this.authService.user
  public form: FormGroup;
  private subscription: Subscription;
  constructor(
    private authService: AuthService,
    private profileService: ProfileService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.initForm();

    this.form.controls['avatar'].valueChanges.subscribe((file) => {
      const reader = new FileReader();
      if (file.type === AllowedFileTypesEnum.PNG || file.type === AllowedFileTypesEnum.JPEG) {

        reader.readAsDataURL(file);
        reader.onload = () => {
          this.user.update((value) => {
            return { ...value,  avatar: { ...value.avatar, file_path: reader.result } }
          });
        }
      }
    })
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
      const data = new FormData();
      for (let valueKey in this.form.value) {

        if (this.form.controls[valueKey].value) {
          data.append(valueKey, this.form.controls[valueKey].value)
         }
      }

      this.subscription = this.profileService.uploadProfile(data).subscribe();
    }
  }

  private initForm() {
    this.form = this.fb.group({
      name: this.fb.control('', []),
      email: this.fb.control('', [Validators.required, Validators.email]),
      company: this.fb.control('', [Validators.required]),
      phone: this.fb.control(''),
      role: this.fb.control(''),
      avatar: this.fb.control(null),
    });

    //  [
    //         ValidationFunctions.imageType([AllowedFileTypesEnum.JPEG,AllowedFileTypesEnum.PNG])
    //       ]
    this.form.patchValue(this.user())
  }
}
