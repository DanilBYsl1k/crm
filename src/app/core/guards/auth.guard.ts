import { CanActivateFn, Router } from '@angular/router';
import { inject } from "@angular/core";

export const authGuard: CanActivateFn = (_ ) => {
  const router = inject(Router)
  const auth = localStorage.getItem('token') ? localStorage.getItem('token') : sessionStorage.getItem('token');

  if(!auth) {
    router.navigate(['/auth/register'])
  }

  return !!auth;
};
