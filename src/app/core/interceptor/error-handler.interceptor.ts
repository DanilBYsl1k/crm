import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { catchError, of } from "rxjs";
import { SnackBarComponent } from "@shared/components/snack-bar/snack-bar.component";

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  let _snackBar = inject(MatSnackBar);

  return next(req).pipe(
    catchError(({ error })=> {
      if (error) {
        console.log(error.error)
        _snackBar.openFromComponent(SnackBarComponent, {
          duration: 5000,
          horizontalPosition: 'end',
          data: { error: error.error }
        })
      }

      return of(error)
    })
  );
};