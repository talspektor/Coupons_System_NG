import { Category } from 'src/app/models/category.model';
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
  public categories: Category[] = [
    Category.ELECTRICITY,
    Category.FOOD,
    Category.SPORTS,
    Category.VACATION,
  ];
  public selectedCategory = Category.ELECTRICITY;

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {}

  public addCoupon() {
    this.coupon.category = this.selectedCategory;
    this.companyService.addCoupon(this.coupon).subscribe(
      (coupon) => {
        alert('coupon added title = ' + coupon.title);
      },
      (error) => {
        alert('error: ' + error.error.message);
      }
    );
  }
}
