import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

import { FooterComponent } from "@shared/layout/footer/footer.component";
import { HeaderComponent } from "@shared/layout/header/header.component";
import { MainComponent } from "@shared/layout/main/main.component";
import { NavBarComponent } from "@shared/layout/nav-bar/nav-bar.component";
import { AuthService } from "@shared/services/auth.service";
import { PreloaderComponent } from "@shared/components/preloader/preloader.component";
import { ThemeService } from "@core/services/theme.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HttpClientModule,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    NavBarComponent,
    PreloaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{
  $profile = this.authService.profile();

  isAuth = this.authService.isAuth;
  pallet = this.themeService.palletComp;
  constructor(
    private authService: AuthService,
    private themeService: ThemeService,
  ) {}

  ngOnInit() {
    // this.themeService.checkPallet();
  }
}
