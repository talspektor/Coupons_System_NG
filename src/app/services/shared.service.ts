import { Observable, Observer } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  public token?: String;
  public globalVarUpdate?: Observable<String>;
  public globalVarObserver?: Observer<String>;
  constructor() {
    this.token = Observable.create((observer: Observer<String>) => {
      this.globalVarObserver = observer;
    });
  }

  public updateGlobalVar(newValue: String) {
    this.token = newValue;
    this.globalVarObserver?.next(this.token);
  }
}
