import { HttpInterceptorFn } from '@angular/common/http';
import { Inject } from "@angular/core";
import { LocalStorageService } from "@core/services/local-storage.service";

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  let localStr = Inject(LocalStorageService)

  let authToken = localStr.getData('token');

  const authReq  = req.clone({
    setHeaders: {
      Authorization: `Bearer ${authToken}`
    }
  });

  return next(authReq);
};
