import { Routes } from '@angular/router';

import { authRoutes } from "@modules/auth/auth.routes";
import { authGuard } from "@core/guards/auth.guard";
import { dashboardRoutes } from "@modules/dashboard/dashboard.routes";

export const routes: Routes = [
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
  // {
  //   path: 'profile',
  //   loadComponent: ()=> import('@modules/dashboard/dashboard.component').then(c => c.DashboardComponent),
  //   children: authRoutes,
  // },

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
