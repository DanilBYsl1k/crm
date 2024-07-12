import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = localStorage.getItem('token') ? localStorage.getItem('token') : sessionStorage.getItem('token');


  return !!auth;
};
