import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

import { BaseService } from "@core/services/base-service.service";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: BaseService) {}

  public uploadProfile(data: any): Observable<any> {
    return this.http.post<any>('v1/uploadProfile', data);
  }

  public addAccount(data: any): Observable<any> {
    return this.http.post<any>('v1/add-user', data);
  }
}
