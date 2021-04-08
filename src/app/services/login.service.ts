import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  public login(
    clientTipe: String,
    email: String,
    password: String
  ): Observable<String> {
    let apiUrl =
      'http://localhost:8080/login/' +
      clientTipe +
      '/' +
      email +
      '/' +
      password;
    return this.httpClient.post<String>(apiUrl, { withCredentials: true });
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
