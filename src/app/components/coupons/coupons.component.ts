import { ClientType } from './../../models/client-type.model';
import { SharedService } from 'src/app/services/shared.service';
import { CustomerService } from './../../services/customer.service';
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
  public clientType!: String; //localStorage.getItem(this.sharedService.CLIENT_TYPE);

  constructor(
    private companyService: CompanyService,
    private customerService: CustomerService,
    private stateService: StateServiceService,
    private sharedService: SharedService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllCoupons();
    this.sharedService.clientTypeObservable.subscribe((clienTtype) => {
      this.clientType = clienTtype;
    });
  }

  public getAllCoupons() {
    console.log('clientType: ' + this.clientType);

    if (this.clientType == ClientType.customer) {
      this.customerService.getAllCoupons().subscribe(
        (coupons) => {
          this.coupons = coupons;
        },
        (error) => {
          alert('arror: ' + error.error.message);
        }
      );
    } else {
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

  public buyCoupn(coupon: Coupon) {
    this.customerService.purchaseCoupon(coupon.id!).subscribe(
      (coupon) => {
        alert('you have purchase coupon: ' + coupon.title);
        this.getAllCoupons();
      },
      (error) => {
        alert('arror: ' + error.error.message);
      }
    );
  }
}
