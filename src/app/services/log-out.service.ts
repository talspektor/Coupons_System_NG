import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LogOutService {
  readonly requestOptions = {
    headers: new HttpHeaders().set('token', localStorage.getItem('token')!),
  };

  constructor(private httpClient: HttpClient) {}

  public logOut(): Observable<void> {
    console.log('logout');

    let apiUrl = 'http://localhost:8080/logout/';
    return this.httpClient.post<void>(apiUrl, this.requestOptions);
  }
}
