import { Observable, Observer } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  // Global Constants
  public readonly TOKEN = 'token';
  public readonly CLIENT_TYPE = 'clientType';
  public readonly DOMAIN = 'localhots';
  public readonly PORT = '8080';
  public readonly BASE_PATH = 'http://' + this.DOMAIN + ':' + this.PORT;
  // Global variables
  public token!: string;
  public clientType!: string;
  public isLogin!: boolean;
  public requestOptions!: { headers: HttpHeaders };
  // Observables
  public tokenObservable: Observable<String>;
  public clientTypeObservable!: Observable<String>;
  public isLoginObservable!: Observable<Boolean>;
  // Observers
  public tokenObserver?: Observer<String>;
  public clientObserver?: Observer<String>;
  public isLoginObserver?: Observer<Boolean>;

  constructor() {
    this.tokenObservable = Observable.create((observer: Observer<String>) => {
      this.tokenObserver = observer;
    });
    this.clientTypeObservable = Observable.create(
      (observer: Observer<String>) => {
        this.clientObserver = observer;
      }
    );
    this.isLoginObservable = Observable.create(
      (observer: Observer<Boolean>) => {
        this.isLoginObserver = observer;
      }
    );
  }

  public updateToken(newValue: string) {
    this.token = newValue;
    console.log('updateToken: ' + this.token);
    this.requestOptions = {
      headers: new HttpHeaders().set(this.TOKEN, this.token),
    };
    this.tokenObserver?.next(newValue);
  }

  public updateClientType(newValue: string) {
    this.clientType = newValue;
    console.log('updateClientType: ' + this.clientType);
    this.clientObserver?.next(newValue);
  }

  public updateIsLogin(newValue: boolean) {
    this.isLogin = newValue;
    console.log('updateIsLogin: ' + this.isLogin);
    this.isLoginObserver?.next(newValue);
  }
}
