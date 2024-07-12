import { Injectable } from '@angular/core';
import { catchError, concatMap, Observable, of, take, tap } from "rxjs";

import { BaseService } from "@core/services/base-service.service";
import { ILogin, InnerPassword, IRegister } from "@shared/interface/auth.interface";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: BaseService, private route: Router) {}

  public login(data: ILogin): Observable<any> {
    return this.http.post<{ access_token: string }>('v1/auth/login', data).pipe(
      tap(({ access_token }) => {
        if (data.remember) {
          localStorage.setItem('token', access_token);
        }
      }),
      concatMap(() => this.profile())
    );
  }

  public register(data: IRegister) {
    return this.http.post('v1/auth/register', data).pipe(
      tap(()=> { this.route.navigate(['/auth/email-message']) })
    );
  }

  public restorePassword(email: string) {
    return this.http.post('v1/auth/reset-password', { email }).pipe(
      tap(()=> { this.route.navigate(['/auth/email-message']) })
    );
  }

  public innerPassword(data: InnerPassword) {
    return this.http.post('v1/auth/change-password', data).pipe(
      tap(()=> { this.route.navigate(['/auth/submit-password']) }),
      take(1)
    );
  }

  public submitEmail(token: string): Observable<any> {
    return this.http.get(`v1/auth/submit-email/${token}`).pipe()
  }

  public profile() {
    return this.http.get('v1/profile').pipe(
      catchError(() => this.refreshToken())
    );
  }

  public checkToken(token: string): Observable<{ result: boolean }> {
    return this.http.get<{ result: boolean }>(`v1/auth/verify-token/${token}`).pipe(
      catchError(() => {
        this.route.navigate(['/'])
        return of();
      }),
      take(1)
    );
  }

  public refreshToken(): Observable<any> {
    return this.http.get('v1/auth/refreshToken').pipe(catchError((error) => of(error)))
  }

  public logout(): Observable<void> {
    return this.http.get('v1/auth/logout');
  }
}
