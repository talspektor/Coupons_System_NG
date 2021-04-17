import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
})
export class AddCustomerComponent implements OnInit {
  public customer = new Customer();

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {}

  public addCustomer() {
    alert('addCustomer: ' + this.customer.firstName);
    this.adminService.addCustomer(this.customer).subscribe(
      (customer) => {
        alert('customer added id=' + customer.id);
      },
      (error) => {
        alert('arror: ' + error.error.message);
      }
    );
  }
}
