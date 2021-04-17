import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon.model';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.css'],
})
export class AddCouponComponent implements OnInit {
  public coupon = new Coupon();

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {}

  public addCoupon() {
    alert('addCoupon: ' + this.coupon.description);
    this.companyService.addCoupon(this.coupon).subscribe(
      (coupon) => {
        alert('coupon added id=' + coupon.id);
      },
      (error) => {
        alert('error: ' + error.error.message);
      }
    );
  }
}
