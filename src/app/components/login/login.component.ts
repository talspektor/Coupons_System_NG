import { ClientType } from './../../models/client-type.model';
import { Router } from '@angular/router';
import { LoginRequestItem } from './../../models/login-request-item.model';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginItem = new LoginRequestItem();
  public clientType: ClientType[] = [
    ClientType.admin,
    ClientType.company,
    ClientType.customer,
  ];
  public token!: string;
  public isLoggedin = false;
  public selectedValue = ClientType.admin;

  constructor(
    private loginService: LoginService,
    private sharedService: SharedService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public login() {
    this.loginItem.clientType = this.selectedValue;
    this.loginService.login(this.loginItem).subscribe(
      (loginItem) => {
        this.updateSharedService(loginItem.token, true);

        console.log('clientType: ', this.sharedService.clientType);
        console.log('token: ', this.sharedService.token);
        this.doRout();
      },
      (err) => {
        console.log('login fail:' + err);

        alert('error: ' + err.error.message);
        this.isLoggedin = false;
        this.updateSharedService('', false);
      }
    );
  }

  private updateSharedService(token: string, isLogin: boolean) {
    this.sharedService.updateIsLogin(isLogin);
    this.sharedService.updateClientType(this.selectedValue);
    this.sharedService.updateToken(token);
  }

  private doRout() {
    switch (this.selectedValue) {
      case ClientType.admin:
        this.router.navigateByUrl('/admin');
        break;
      case ClientType.company:
        this.router.navigateByUrl('/company');
        break;
      case ClientType.customer:
        this.router.navigateByUrl('/customer');
        break;
    }
  }
}
