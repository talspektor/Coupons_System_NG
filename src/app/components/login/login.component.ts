import { Router } from '@angular/router';
import { LoginRequestItem } from './../../models/login-request-item.model';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ClientType } from 'src/app/models/client-type.model';
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
        this.isLoggedin = true;
        localStorage.setItem(this.sharedService.TOKEN, loginItem.token);
        console.log('token: ' + localStorage.getItem(this.sharedService.TOKEN));
        localStorage.setItem(
          this.sharedService.CLIENT_TYPE,
          this.selectedValue
        );
        console.log(
          'clientType: ',
          localStorage.getItem(this.sharedService.CLIENT_TYPE)
        );

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
      },
      (err) => {
        alert('error: ' + err.error.message);
        this.isLoggedin = false;
      }
    );
  }
}
