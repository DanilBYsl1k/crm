import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public setValue<T>(data: T, key: string): void {
    let value = JSON.stringify(data);

    localStorage.setItem(key, value);
  }

  public getData<T>(key: string): T | any {
    let data  = localStorage.getItem(key);

    return data ? JSON.parse(data) : undefined;
  }

  public removeData(key: string): void {
    localStorage.removeItem(key);
  }

  public clear(): void {
    localStorage.clear();
  }
}
