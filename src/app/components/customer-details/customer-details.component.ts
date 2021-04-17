import { CustomerService } from './../../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css'],
})
export class CustomerDetailsComponent implements OnInit {
  public customer!: Customer;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerService.getCustomer().subscribe(
      (customer) => {
        this.customer = customer;
      },
      (error) => {
        alert('error: ' + error.error.message);
      }
    );
  }
}
