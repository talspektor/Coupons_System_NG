import { Customer } from '../../../models/customer.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  public customers!: Customer[];
  constructor() {}

  ngOnInit(): void {}
}
