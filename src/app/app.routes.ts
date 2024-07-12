import { Routes } from '@angular/router';

import { authRoutes } from "@modules/auth/auth.routes";
import { authGuard } from "@core/guards/auth.guard";

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: ()=> import('@modules/auth/auth.component').then(c => c.AuthComponent),
    children: authRoutes,
  },
  {
    path: 'dashboard',
    // loadComponent: ()=> import('@modules/auth/auth.component').then(c => c.AuthComponent),
    children: authRoutes,
  },
  {
    path: '**',
    loadComponent: () => import('@modules/error-page/error-page.component').then(c => c.ErrorPageComponent),
  }
];
