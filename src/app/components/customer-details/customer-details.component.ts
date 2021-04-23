import { CustomerService } from './../../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { AdminService } from 'src/app/services/admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css'],
})
export class CustomerDetailsComponent implements OnInit {
  public customer!: Customer;

  constructor(
    private customerService: CustomerService,
    private adminService: AdminService,
    private activatedRout: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id = this.activatedRout.snapshot.params.id;
    this.adminService.getCustomer(id).subscribe(
      (customer) => {
        this.customer = customer;
      },
      (error) => {
        console.dir(error.error);
        alert('error: ' + error.error.message);
      }
    );
  }
}
