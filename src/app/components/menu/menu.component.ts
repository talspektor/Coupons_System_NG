import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  public clientType = localStorage.getItem('clientType');

  constructor() {}

  ngOnInit(): void {
    console.log(this.clientType);
  }
}
