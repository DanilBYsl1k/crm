import { CanActivateFn } from '@angular/router';
import { inject } from "@angular/core";

import { AuthService } from "@shared/services/auth.service";

export const resetPasswordGuard: CanActivateFn = (route): boolean => {
  const token = route.queryParams['token'];

  if (!token) {
    return false;
  }
  const auth = inject(AuthService)

  auth.checkToken(token).subscribe();
  return !!token;
};
