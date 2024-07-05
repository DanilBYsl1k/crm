import { Injectable } from '@angular/core';
import { Observable, tap } from "rxjs";

import { BaseService } from "@core/services/base-service.service";
import { LocalStorageService } from "@core/services/local-storage.service";
import { ILogin, IRegister } from "@shared/interface/auth.interface";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: BaseService, private localStorage: LocalStorageService) {}

  public login(data: ILogin): Observable<any> {
    return this.http.post('login').pipe(
      tap((res)=> {
        if (data.remember) this.localStorage.setData('token', res.token);
      }),
     );
  }

  public register(data: IRegister): Observable<void> {
    return this.http.post('register', data);
  }

  public restorePassword() {
    return this.http.get('restore-password').pipe();
  }

  public profile() {
    return this.http.get('profile');
  }

  public logout(): Observable<void> {
    return this.http.get('logout');
  }
}
