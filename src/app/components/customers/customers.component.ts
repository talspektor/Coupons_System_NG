import { Customer } from './../../models/customer.model';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { StateServiceService } from 'src/app/services/state-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  public customers!: Customer[];

  constructor(
    private adminService: AdminService,
    private stateService: StateServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllCustomers();
  }

  public getAllCustomers() {
    this.adminService.getAllCustomers().subscribe(
      (customers) => {
        this.customers = customers;
      },
      (error) => {
        console.dir(error.error);
        alert('error: ' + error.error.message);
      }
    );
  }

  public deleteCustomer(customer: Customer) {
    this.adminService.deleteCustomer(customer.id!).subscribe(
      (customer) => {
        this.getAllCustomers();
        alert(
          'customer: ' +
            customer.firstName +
            ' ' +
            customer.lastName +
            ' was deleted'
        );
      },
      (error) => {
        alert('error: ' + error.error.message);
      }
    );
  }

  public updateCustomer(customer: Customer) {
    this.stateService.customer = customer;
    this.router.navigate(['/update-customer']);
  }
}
