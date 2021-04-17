import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon.model';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css'],
})
export class CouponsComponent implements OnInit {
  public coupons!: Coupon[];
  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.companyService.getAllCoupons().subscribe(
      (coupons) => {
        this.coupons = coupons;
      },
      (error) => {
        alert('arror: ' + error.error.message);
      }
    );
  }
}
