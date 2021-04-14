import { Observable, Observer } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  public token: string = '';
  // public globalVarUpdate?: Observable<String>;
  // public globalVarObserver?: Observer<String>;
  constructor() {
    // this.token = Observable.create((observer: Observer<String>) => {
    //   this.globalVarObserver = observer;
    // });
  }

  // public updateGlobalVar(newValue: string) {
  //   this.token = newValue;
  //   this.globalVarObserver?.next(this.token);
  // }
}
