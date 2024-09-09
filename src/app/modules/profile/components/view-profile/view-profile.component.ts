import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { AuthService } from "@shared/services/auth.service";
import { ProfileService } from "@shared/services/profile.service";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { InputFileComponent } from "@shared/components/input-file/input-file.component";
import { JsonPipe } from "@angular/common";

@Component({
  selector: 'app-view-profile',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputFileComponent,
    JsonPipe
  ],
  templateUrl: './view-profile.component.html',
  styleUrl: './view-profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewProfileComponent implements OnInit {
  public user = this.authService.user
  public file = new FormControl(null);
  public imageSrc = signal<string | ArrayBuffer | null | undefined>(null);

  constructor(
    private authService: AuthService,
    private profileService: ProfileService
  ) {
  }

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
    if (this.file.value) {
      // const data = new FormData();
      // data.append('file', this.file.value )

      // this.profileService.uploadAvatar(data).subscribe()
    }
  }
}
