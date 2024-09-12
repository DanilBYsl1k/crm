import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";

import { AuthService } from "@shared/services/auth.service";
import { InputFileComponent } from "@shared/components/input-file/input-file.component";

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

  constructor(
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
  }
}
