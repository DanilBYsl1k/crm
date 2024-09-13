import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { AuthService } from "@shared/services/auth.service";
import { Subscription } from "rxjs";
import { JsonPipe, NgOptimizedImage } from "@angular/common";
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    JsonPipe,
    NgOptimizedImage,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnDestroy {
  authUser = this.authService.isAuth
  user = this.authService.user
  subscribe: Subscription;

  constructor(private authService: AuthService) {
  }

  public logOut(): void {
    this.subscribe = this.authService.logout().subscribe(() => {
    });
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }
}
