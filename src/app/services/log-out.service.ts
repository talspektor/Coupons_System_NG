import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LogOutService {
  constructor(private httpClient: HttpClient) {}

  public logOut(): Observable<void> {
    console.log('logout');
    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders
      .set('token', localStorage.getItem('token')!)
      .set('Content-Type', 'application/json');
    const options = { headers: theHeaders };
    console.log(theHeaders.get('token'));

    let apiUrl = 'http://localhost:8080/logout/';
    return this.httpClient.post<void>(apiUrl, options);
  }
}
