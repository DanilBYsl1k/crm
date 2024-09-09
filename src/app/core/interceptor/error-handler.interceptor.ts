import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { catchError, , throwError } from "rxjs";
import { SnackBarComponent } from "@shared/components/snack-bar/snack-bar.component";

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  let _snackBar = inject(MatSnackBar);

  return next(req).pipe(
    catchError(({status, error, message }: HttpErrorResponse) => {
      if (error || message) {
        _snackBar.openFromComponent(SnackBarComponent, {
          duration: 5000,
          horizontalPosition: 'end',
          data: { error: error.error ? error.error : error.message }
        });
      }

      return throwError(() => error);
    })
  );
};
