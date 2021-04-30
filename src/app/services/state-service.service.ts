import { Injectable } from '@angular/core';
import { Company } from '../models/company.model';
import { Coupon } from '../models/coupon.model';

@Injectable({
  providedIn: 'root',
})
export class StateServiceService {
  public coupon!: Coupon;
  public company!: Company;
  public isLogin = false;

  constructor() {}
}
