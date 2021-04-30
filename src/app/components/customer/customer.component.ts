import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from './../../models/customer.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  public customer!: Customer;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerService.getCustomer().subscribe(
      (customer) => {
        this.customer = customer;
      },
      (error) => {
        console.dir(error.error);
        alert('error' + error.error.message);
      }
    );
  }
}
