import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from "@angular/forms";

import { AuthService } from "@shared/services/auth.service";
import { ProfileService } from "@shared/services/profile.service";
import { InputFileComponent } from "@shared/components/input-file/input-file.component";
import { ValidationFunctions } from "@shared/validations/validation-functions"
import { AllowedFileTypesEnum } from "@shared/enums/allowed-file-types.enum";

@Component({
  selector: 'app-view-profile',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputFileComponent,
  ],
  templateUrl: './view-profile.component.html',
  styleUrl: './view-profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewProfileComponent implements OnInit {
  public user = this.authService.user;
  public file = new FormControl<File | null>(null, [
    Validators.required,
    ValidationFunctions.imageType([AllowedFileTypesEnum.JPEG,AllowedFileTypesEnum.PNG])
  ]);

  constructor(
    private authService: AuthService,
    private profileService: ProfileService,
  ) {}

  ngOnInit(): void {
    this.file.valueChanges.subscribe((file) => {
      const reader = new FileReader();

      reader.readAsDataURL(file!);
      reader.onload = (_event) => {

        this.user.update((value) => {
          return { ...value, avatar: reader.result }
        });
      }
    })
  }

  uploadImage() {
    if (this.file.valid) {

      const data = new FormData();
      data.append('file', this.file.value! );

      this.profileService.uploadAvatar(data).subscribe()
    }
  }
}
