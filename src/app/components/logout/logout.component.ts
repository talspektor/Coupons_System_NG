import { LogOutService } from './../../services/log-out.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  constructor(private logoutService: LogOutService) {}

  ngOnInit(): void {}

  public logout() {
    this.logoutService.logOut().subscribe(
      () => {
        alert('logout');
        localStorage.setItem('token', '');
      },
      (error) => {
        alert('error: ' + error.error.mesage);
      }
    );
  }
}
