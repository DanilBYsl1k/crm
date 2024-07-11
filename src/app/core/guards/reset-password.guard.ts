import { CanActivateFn } from '@angular/router';

export const resetPasswordGuard: CanActivateFn = (route): boolean => {
  const token = route.queryParams['token'];

  return !!token;
};
