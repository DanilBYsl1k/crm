import { Injectable } from '@angular/core';

import { BaseService } from "@core/services/base-service.service";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: BaseService) {}

  private qwe(image: File) {
    return this.http.get('v1/user/upload-image')
  }

}
