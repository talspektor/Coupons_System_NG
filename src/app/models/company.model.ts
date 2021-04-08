import { Coupon } from './coupon.model';

export class Company {
  constructor(
    public name: String,
    public email: String,
    public password: String,
    public coupons: Coupon[]
  ) {}
}
