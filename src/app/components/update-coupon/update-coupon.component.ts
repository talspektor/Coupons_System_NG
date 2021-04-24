import { StateServiceService } from './../../services/state-service.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { Coupon } from 'src/app/models/coupon.model';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-update-coupon',
  templateUrl: './update-coupon.component.html',
  styleUrls: ['./update-coupon.component.css'],
})
export class UpdateCouponComponent implements OnInit {
  @Input()
  public coupon!: Coupon;
  public categories: Category[] = [
    Category.ELECTRICITY,
    Category.FOOD,
    Category.SPORTS,
    Category.VACATION,
  ];
  public selectedCategory = Category.ELECTRICITY;

  constructor(
    private companyService: CompanyService,
    private stateService: StateServiceService,
    private router: Router,
    private activatedRout: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.coupon = this.stateService.coupon;
    this.selectedCategory = this.coupon.category!;
  }

  public editCoupon() {
    this.coupon.category = this.selectedCategory;
    this.companyService.updateCoupon(this.coupon).subscribe(
      () => {
        this.router.navigateByUrl('/coupons');
      },
      (error) => {
        alert('error: ' + error.error.message);
      }
    );
  }
}
