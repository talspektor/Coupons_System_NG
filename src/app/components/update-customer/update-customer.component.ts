import { Customer } from './../../models/customer.model';
import { Component, OnInit } from '@angular/core';
import { StateServiceService } from 'src/app/services/state-service.service';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css'],
})
export class UpdateCustomerComponent implements OnInit {
  public customer!: Customer;
  constructor(
    private stateService: StateServiceService,
    private adminService: AdminService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.customer = this.stateService.customer;
  }

  public updateCustomer() {
    this.adminService.updateCustomer(this.customer).subscribe(
      (customer) => {
        alert(
          'customer: ' +
            customer.firstName +
            ' ' +
            customer.lastName +
            ' was edited'
        );
        this.router.navigate(['/customers']);
      },
      (error) => {
        alert('error: ' + error.error.message);
      }
    );
  }
}
