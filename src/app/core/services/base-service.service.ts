import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({ providedIn: 'root' })
export class BaseService {
  private domainAPI = environment.domain;

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
