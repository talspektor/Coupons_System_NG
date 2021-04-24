import { StateServiceService } from './../../services/state-service.service';
import { Router } from '@angular/router';
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
  constructor(
    private companyService: CompanyService,
    private stateService: StateServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllCoupons();
  }

  public getAllCoupons() {
    this.companyService.getAllCoupons().subscribe(
      (coupons) => {
        this.coupons = coupons;
      },
      (error) => {
        alert('arror: ' + error.error.message);
      }
    );
  }

  public updateCoupon(coupon: Coupon) {
    this.stateService.coupon = coupon;
    this.router.navigate(['/update-coupon']);
  }

  public deleteCoupon(coupon: Coupon) {
    this.companyService.deleteCoupon(coupon.id!).subscribe(
      () => {
        alert('coupon deleted');
        this.getAllCoupons();
      },
      (error) => {
        alert('arror: ' + error.error.message);
      }
    );
  }
}
