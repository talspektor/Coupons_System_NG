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
  public token!: String;
  public isLoggedin = false;
  public selectedValue = ClientType.admin;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.sharedService.globalVarUpdate?.subscribe(
      () => {},
      () => {}
    );
  }

  public login() {
    this.loginItem.clientType = this.selectedValue;
    this.loginService.login(this.loginItem).subscribe(
      (loginItem) => {
        this.token = loginItem.token;
        this.isLoggedin = true;
        switch (this.selectedValue) {
          case ClientType.admin:
            this.router.navigateByUrl('/.adminComponent');
            break;
          case ClientType.company:
            this.router.navigateByUrl('/.companyComponent');
            break;
          case ClientType.customer:
            this.router.navigateByUrl('/.customercomponent');
            break;
        }
      },
      (err) => {
        console.log(this.loginItem.clientType);

        alert('error: ' + err.message);
        this.isLoggedin = false;
      }
    );
  }
}
