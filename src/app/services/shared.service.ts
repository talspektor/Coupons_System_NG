import { Observable, Observer } from 'rxjs';
import { Injectable } from '@angular/core';
import { ClientType } from '../models/client-type.model';

@Injectable({
  providedIn: 'root',
})
export class SharedService {

  public token: string = '';
  public clientType?: ClientType
  public tokenUpdate?: Observable<String>;
  public tokenObserver?: Observer<String>;
  public clientObserver?: Observer<ClientType>;
  public clientUpdate?: Observable<ClientType>;

  constructor() {
    this.token = Observable.create((observer: Observer<String>) => {
      this.tokenObserver = observer;
    });
    this.clientType = Observable.create((observer: Observer<ClientType>)=>{
      this.clientObserver = observer
    })
  }

  public updateToken(newValue: string) {
    this.token = newValue;
    this.tokenObserver?.next(this.token);
  }

  public updateClientType(newValue: ClientType) {
    this.clientType = newValue;
    this.clientObserver?.next(this.clientType)
  }
}
