import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { RouterLink } from "@angular/router";
import { AuthService } from "@shared/services/auth.service";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [ MatIconModule, RouterLink ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  user = this.authService.user
  constructor(private authService: AuthService) {}
}
