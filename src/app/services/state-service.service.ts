import { Injectable } from '@angular/core';
import { Company } from '../models/company.model';
import { Coupon } from '../models/coupon.model';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root',
})
export class StateServiceService {
  public coupon!: Coupon;
  public company!: Company;
  public customer!: Customer;

  constructor() {}
}
