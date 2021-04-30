import { SharedService } from 'src/app/services/shared.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public isLogin!: boolean;
  constructor(private title: Title, private sharedService: SharedService) {}

  ngOnInit(): void {
    this.title.setTitle('Coupon System');
    this.isLogin = this.sharedService.isLogin;
  }
}
