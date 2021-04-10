import { LoginRequestItem } from './../models/login-request-item.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  public login(loginItem: LoginRequestItem): Observable<Login> {
    console.log(loginItem.clientType);

    let apiUrl =
      'http://localhost:8080/login/' +
      loginItem.clientType +
      '/' +
      loginItem.email +
      '/' +
      loginItem.password;
    return this.httpClient.post<Login>(apiUrl, { withCredentials: true });
  }

  // public login1({
  //   clientTipe,
  //   email,
  //   password,
  // }: {
  //   clientTipe: String;
  //   email: String;
  //   password: String;
  // }) {
  //   let apiUrl =
  //     'http://localhost:8080/login/' +
  //     clientTipe +
  //     '/' +
  //     email +
  //     '/' +
  //     password;
  //   ajax.post(apiUrl).pipe(
  //     map((res: any) => {
  //       return res.response;
  //     })
  //   );
  // }
}
