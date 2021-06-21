import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root',
})
export class LogOutService {
  private requestOptions: { headers: HttpHeaders } = {
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
    console.log('logout token: ' + this.sharedService.token);

    let apiUrl = 'http://localhost:8080/logout';
    return this.httpClient.post<void>(apiUrl, null, this.requestOptions);
  }
}
