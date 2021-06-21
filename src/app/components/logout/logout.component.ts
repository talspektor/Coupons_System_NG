import { SharedService } from 'src/app/services/shared.service';
import { LogOutService } from './../../services/log-out.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  constructor(
    private logoutService: LogOutService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {}

  public logout() {
    this.logoutService.logOut().subscribe(
      () => {
        console.log('delete token');

        localStorage.removeItem(this.sharedService.TOKEN);
        localStorage.removeItem(this.sharedService.CLIENT_TYPE);
        this.updateSharedService(false);
      },
      (error) => {
        console.dir(error);
      }
    );
  }

  private updateSharedService(isLogin: boolean) {
    this.sharedService.updateIsLogin(isLogin);
  }
}
