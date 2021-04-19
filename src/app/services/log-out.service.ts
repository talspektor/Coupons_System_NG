import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root',
})
export class LogOutService {
  readonly requestOptions = {
    headers: new HttpHeaders().set(
      this.sharedService.TOKEN,
      localStorage.getItem(this.sharedService.TOKEN)!
    ),
  };

  constructor(
    private httpClient: HttpClient,
    private sharedService: SharedService
  ) {}

  public logOut(): Observable<void> {
    console.log('logout');

    let apiUrl = 'http://localhost:8080/logout/';
    return this.httpClient.post<void>(apiUrl, this.requestOptions);
  }
}
