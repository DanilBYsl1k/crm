import { Routes } from "@angular/router";
import { UsersDashboardComponent } from "@modules/users/users-dashboard/users-dashboard.component";
import { EditUsersComponent } from "@modules/users/edit-users/edit-users.component";
import { AddUsersComponent } from "@modules/users/add-users/add-users.component";
import { isAdminGuard } from "@core/guards/is-admin.guard";


export const userRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: UsersDashboardComponent,
  },
  {
    path: 'edit/:email',
    component: EditUsersComponent,
    canActivate: [isAdminGuard],
  },
  {
    path: 'add',
    component: AddUsersComponent,
    canActivate: [isAdminGuard],
  }
];
