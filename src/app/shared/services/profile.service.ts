import { Injectable } from '@angular/core';

import { BaseService } from "@core/services/base-service.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: BaseService) {}

  // public uploadAvatar(data: FormData): Observable<void> {
  //   return this.http.post('v1/image', data);
  // }

  public uploadProfile(data: any): Observable<any> {
    return this.http.patch<any>('v1/uploadProfile', data);
  }
}
