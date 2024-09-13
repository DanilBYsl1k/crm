import { Routes } from "@angular/router";

import { ViewProfileComponent } from "@modules/profile/components/view-profile/view-profile.component";
import { EditProfileComponent } from "@modules/profile/components/edit-profile/edit-profile.component";

export const profileRoutes: Routes = [
  {
    path: '',
    redirectTo: 'view',
    pathMatch: 'full'
  },
  {
    path: 'view',
    component: ViewProfileComponent,
  },
  {
    path: 'edit',
    component: EditProfileComponent,
  }
];
