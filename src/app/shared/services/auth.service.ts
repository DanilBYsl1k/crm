import { Injectable, signal } from '@angular/core';
import { catchError, concatMap, Observable, of, take, tap } from "rxjs";
import { Router } from "@angular/router";

import { BaseService } from "@core/services/base-service.service";
import { ILogin, InnerPassword, IRegister } from "@shared/interface/auth.interface";
import { UserInterface } from "@shared/interface/user.interface";
import { UserConstant } from "@shared/constant/user.constant";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuth = signal(false);
  public user = signal<UserInterface>(UserConstant);

  constructor(private http: BaseService, private route: Router) {
  }

  public login(data: ILogin): Observable<UserInterface | unknown> {
    return this.http.post<{ access_token: string }>('v1/auth/login', data).pipe(
      tap(({ access_token }) => {
        if (data.remember) {
          localStorage.setItem('token', access_token);
        } else {
          sessionStorage.setItem('token', access_token);
        }
        this.route.navigate([ '/dashboard' ])
      }),
      concatMap(() => this.profile())
    );
  }

  public register(data: IRegister): Observable<void> {
    return this.http.post<void>('v1/auth/register', data).pipe(
      tap(() => {
        this.route.navigate([ '/auth/email-message' ])
      })
    );
  }

  public restorePassword(email: string): Observable<void> {
    return this.http.post<void>('v1/auth/reset-password', { email }).pipe(
      tap((): void => {
        this.route.navigate([ '/auth/email-message' ])
      })
    );
  }

  public innerPassword(data: InnerPassword): Observable<void> {
    return this.http.post<void>('v1/auth/change-password', data).pipe(
      tap(() => {
        this.route.navigate([ '/auth/submit-password' ])
      }),
      take(1)
    );
  }

  public submitEmail(token: string): Observable<void> {
    return this.http.get<void>(`v1/auth/submit-email/${token}`).pipe()
  }

  public profile(): Observable<{ result: UserInterface }> {
    return this.http.get<{ result: UserInterface }>('v1/profile').pipe(
      take(1),

      tap(({ result }) => {
        this.isAuth.set(true);
        this.user.set(result);
      }),
      catchError(() => {
        return this.refreshToken();
      })
    );
  }

  public checkToken(token: string): Observable<{ result: boolean }> {
    return this.http.get<{ result: boolean }>(`v1/auth/verify-token/${token}`).pipe(
      catchError(() => {
        this.route.navigate([ '/' ])
        return of();
      }),
      take(1)
    );
  }

  public refreshToken(): Observable<{ result: UserInterface }> {
    return this.http.get<{ access_token: string }>('v1/auth/refresh-token').pipe(
      tap(({ access_token }) => {
        localStorage.setItem('token', access_token);
      }),
      concatMap(() => this.profile()),
      catchError((error) => of(error)))
  }

  public logout(): Observable<void> {
    return this.http.get<void>('v1/logout').pipe(
      tap(() => {
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
        this.isAuth.set(false);
      })
    );
  }
}
