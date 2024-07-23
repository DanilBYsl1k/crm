import { Routes } from '@angular/router';

import { authRoutes } from "@modules/auth/auth.routes";
import { authGuard } from "@core/guards/auth.guard";
import { dashboardRoutes } from "@modules/dashboard/dashboard.routes";
import { profileRoutes } from "@modules/profile/profile.routes";

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'auth',
    loadComponent: ()=> import('@modules/auth/auth.component').then(c => c.AuthComponent),
    children: authRoutes,
  },
  {
    path: 'dashboard',
    loadComponent: ()=> import('@modules/dashboard/dashboard.component').then(c => c.DashboardComponent),
    children: dashboardRoutes,
    canActivate: [authGuard]
  },
  {
    path: 'profile',
    loadComponent: ()=> import('@modules/profile/profile.component').then(c => c.ProfileComponent),
    children: profileRoutes,
  },

  // {
  //   path: 'calendar',
  //   loadComponent: ()=> import('@modules/dashboard/dashboard.component').then(c => c.DashboardComponent),
  //   children: authRoutes,
  // },

  // {
  //   path: 'activities',
  //   loadComponent: ()=> import('@modules/dashboard/dashboard.component').then(c => c.DashboardComponent),
  //   children: authRoutes,
  // },

  // {
  //   path: 'users',
  //   loadComponent: ()=> import('@modules/dashboard/dashboard.component').then(c => c.DashboardComponent),
  //   children: authRoutes,
  // },
  {
    path: '**',
    loadComponent: () => import('@modules/error-page/error-page.component').then(c => c.ErrorPageComponent),
  }
];
