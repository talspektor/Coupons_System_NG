import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-coupons',
  templateUrl: './customer-coupons.component.html',
  styleUrls: ['./customer-coupons.component.css'],
})
export class CustomerCouponsComponent implements OnInit {
  public coupons!: Coupon[];
  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerService.getCustomerCoupons().subscribe(
      (coupons) => {
        console.log('getCustomerCoupons');

        this.coupons = coupons;
      },
      (error) => {
        alert('arror: ' + error.error.message);
      }
    );
  }
}
