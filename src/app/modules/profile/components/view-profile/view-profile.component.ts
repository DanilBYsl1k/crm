import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthService } from "@shared/services/auth.service";

@Component({
  selector: 'app-view-profile',
  standalone: true,
  imports: [],
  templateUrl: './view-profile.component.html',
  styleUrl: './view-profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewProfileComponent {
  user = this.authService.user

  constructor(private authService: AuthService) {}
}
