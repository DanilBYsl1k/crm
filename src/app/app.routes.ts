import { Routes } from '@angular/router';

import { authRoutes } from "./modules/auth/auth.routes";

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: ()=> import('./modules/auth/auth.component').then(c => c.AuthComponent),
    children: authRoutes
  },
];
