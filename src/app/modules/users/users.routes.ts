import { Routes } from "@angular/router";
import { UsersDashboardComponent } from "@modules/users/users-dashboard/users-dashboard.component";
import { EditUsersComponent } from "@modules/users/edit-users/edit-users.component";
import { AddUsersComponent } from "@modules/users/add-users/add-users.component";


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
    path: 'edit',
    component: EditUsersComponent,
  },
  {
    path: 'add',
    component: AddUsersComponent,
  }
];
