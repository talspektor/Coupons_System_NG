import { Observable, Observer } from 'rxjs';
import { Injectable } from '@angular/core';
import { ClientType } from '../models/client-type.model';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  public readonly TOKEN = 'token';
  public readonly CLIENT_TYPE = 'clientType';
  public readonly DOMAIN = 'localhots';
  public readonly PORT = '8080';
  public readonly BASE_PATH = 'http://' + this.DOMAIN + ':' + this.PORT;
  readonly requestOptions = {
    headers: new HttpHeaders().set(
      this.TOKEN,
      localStorage.getItem(this.TOKEN)!
    ),
  };

  public token: string = '';
  public clientType?: ClientType;
  public tokenUpdate?: Observable<String>;
  public tokenObserver?: Observer<String>;
  public clientObserver?: Observer<ClientType>;
  public clientUpdate?: Observable<ClientType>;

  constructor() {
    this.token = Observable.create((observer: Observer<String>) => {
      this.tokenObserver = observer;
    });
    this.clientType = Observable.create((observer: Observer<ClientType>) => {
      this.clientObserver = observer;
    });
  }

  public updateToken(newValue: string) {
    this.token = newValue;
    this.tokenObserver?.next(this.token);
  }

  public updateClientType(newValue: ClientType) {
    this.clientType = newValue;
    this.clientObserver?.next(this.clientType);
  }
}
