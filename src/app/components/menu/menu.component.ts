import { Router } from '@angular/router';
import { ClientType } from './../../models/client-type.model';
import { SharedService } from 'src/app/services/shared.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  public clientType!: String;
  public isLogin!: Boolean;

  constructor(private sharedService: SharedService, private router: Router) {}

  ngOnInit(): void {
    this.updateIsLogin();
    this.updateToken();
    console.log('clientType: ' + this.clientType);
    console.log('isLogin: ' + this.isLogin);
  }

  private updateIsLogin() {
    this.sharedService.isLoginObservable.subscribe((isLogin) => {
      this.isLogin = isLogin;
      if (!this.isLogin) {
        this.router.navigateByUrl('/home');
      }
    });
  }

  private updateToken() {
    this.sharedService.clientTypeObservable.subscribe((type) => {
      this.clientType = type;
    });
  }
}
