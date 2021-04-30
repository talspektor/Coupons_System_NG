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

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    // this.clientType = this.sharedService.clientType;
    // this.isLogin = this.sharedService.isLogin;
    this.sharedService.isLoginObservable.subscribe((isLogin) => {
      this.isLogin = isLogin;
    });
    this.sharedService.clientTypeObservable.subscribe((type) => {
      this.clientType = type;
    });
    console.log(this.clientType);
  }
}
