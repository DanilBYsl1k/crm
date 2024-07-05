import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public setData<T>(data: T, key: string): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  public getData<T>(key: string): T | undefined {
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
