import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from "@shared/services/auth.service";
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { AsyncPipe } from "@angular/common";
import { PreloaderComponent } from "@shared/components/preloader/preloader.component";

@Component({
  selector: 'app-submit-email',
  standalone: true,
  imports: [
    AsyncPipe,
    PreloaderComponent
  ],
  templateUrl: './submit-email.component.html',
  styleUrl: './submit-email.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubmitEmailComponent implements OnInit{
  submit$: Observable<any>
  token: string;
  constructor(private authService: AuthService, private activeRoute: ActivatedRoute,) {
  }

  ngOnInit(): void {
    this.token = this.activeRoute.snapshot.queryParams['token'];
    this.submit$ = this.authService.submitEmail(this.token);
  }
}
