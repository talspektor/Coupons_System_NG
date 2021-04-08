import { Coupon } from './coupon.model';

export class Customer {
  public coupons!: Coupon[];
  constructor(
    public firstName: String,
    public lastName: String,
    public email: String,
    public password: String
  ) {}
}
