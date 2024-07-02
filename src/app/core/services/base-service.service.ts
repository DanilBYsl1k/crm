import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class BaseServiceService {

  private domainAPI = 'http://127.0.0.1:8000';

  constructor(private httpClient: HttpClient) {}

  get<T>(methods: string, params: object = {}): Observable<T> {
    return this.httpClient.get<T>(`${this.domainAPI}/${methods}`, {
      params: params as HttpParams,
    });
  }

  post<T>(methods: string, params: object = {}): Observable<T> {
    return this.httpClient.post<T>(`${this.domainAPI}/${methods}`, params);
  }

  delete<T>(methods: string, params: object = {}): Observable<T> {
    return this.httpClient.delete<T>(`${this.domainAPI}/${methods}`, {
      body: params,
    });
  }

  put<T>(methods: string, params: object = {}): Observable<T> {
    return this.httpClient.put<T>(`${this.domainAPI}/${methods}`, {
      body: params
    });
  }

  patch<T>(methods: string, params: object = {}): Observable<T> {
    return this.httpClient.patch<T>(`${this.domainAPI}/${methods}`, {
      body: params,
    });
  }
}
