import { Routes } from "@angular/router";
import { HomeComponent } from "@modules/dashboard/components/home/home.component";

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // redirectTo: '',
    // pathMatch: 'full'
  },
];
