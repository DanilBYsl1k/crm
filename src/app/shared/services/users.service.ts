import { Injectable } from '@angular/core';
import { BaseService } from "@core/services/base-service.service";
import { map, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: BaseService) {}

  companyUsers(): Observable<any[]> {
    return this.http.get<{ result: any[] }>('v1/users/users-company').pipe(
      map((data) => data.result)
    );
  }

}
