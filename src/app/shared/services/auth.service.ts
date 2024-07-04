import { Injectable } from '@angular/core';
import { BaseService } from "../../core/services/base-service.service";
import { tap } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: BaseService) { }

  login() {
    return this.http.post('login');
  }

  register() {
    return this.http.post('register');
  }

  profile() {
    return this.http.get('profile').pipe(tap(()=> {
    //   remove token
    }));
  }

  logout() {
    return this.http.get('logout');
  }

}
