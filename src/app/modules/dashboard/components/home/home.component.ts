import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProfileService } from "@shared/services/profile.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit{

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
  }

  add() {
    this.profileService.addAccount({}).subscribe()
  }
}
