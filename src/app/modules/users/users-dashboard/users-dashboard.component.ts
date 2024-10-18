import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatMenu, MatMenuItem, MatMenuTrigger } from "@angular/material/menu";
import { MatIcon } from "@angular/material/icon";
import { RouterLink } from "@angular/router";
import { MatButton, MatIconButton } from "@angular/material/button";
import { ReactiveFormsModule } from "@angular/forms";
import { AsyncPipe, JsonPipe } from "@angular/common";

import { UsersService } from "@shared/services/users.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-users-dashboard',
  standalone: true,
  imports: [
    MatMenuTrigger,
    MatIcon,
    MatMenu,
    MatMenuItem,
    RouterLink,
    MatIconButton,
    ReactiveFormsModule,
    MatButton,
    AsyncPipe,
    JsonPipe
  ],
  templateUrl: './users-dashboard.component.html',
  styleUrl: './users-dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersDashboardComponent implements OnInit{

  $users: Observable< any[]>;
  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.$users = this.usersService.companyUsers();
  }
}
