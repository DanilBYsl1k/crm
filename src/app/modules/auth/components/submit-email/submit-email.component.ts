import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from "@shared/services/auth.service";

@Component({
  selector: 'app-submit-email',
  standalone: true,
  imports: [],
  templateUrl: './submit-email.component.html',
  styleUrl: './submit-email.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubmitEmailComponent implements OnInit{

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {

  }
}
