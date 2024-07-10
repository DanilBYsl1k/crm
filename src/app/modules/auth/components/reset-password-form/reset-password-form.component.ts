import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "@shared/services/auth.service";

@Component({
  selector: 'app-reset-password-form',
  standalone: true,
  imports: [],
  templateUrl: './reset-password-form.component.html',
  styleUrl: './reset-password-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResetPasswordFormComponent implements OnInit{

  constructor(private activeRoute: ActivatedRoute, private authService: AuthService) {
  }

  ngOnInit(): void {
    // console.log(this.activeRoute.snapshot.queryParams['token']);
  }
}
