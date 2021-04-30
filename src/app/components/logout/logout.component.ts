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
        localStorage.removeItem(this.sharedService.TOKEN);
        localStorage.removeItem(this.sharedService.CLIENT_TYPE);
      },
      (error) => {
        console.dir(error);
        alert('error: ' + error.error.mesage);
      }
    );
  }
}
