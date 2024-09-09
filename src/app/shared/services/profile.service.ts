import { Injectable } from '@angular/core';

import { BaseService } from "@core/services/base-service.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: BaseService) {}

  public uploadAvatar(data: FormData): Observable<void> {
    return this.http.post('v1/image', data);
  }
}
