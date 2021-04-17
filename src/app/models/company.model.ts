import { Coupon } from './coupon.model';

export class Company {
  constructor(
    public id?: Number,
    public name?: String,
    public email?: String,
    public password?: String,
    public coupons?: Coupon[]
  ) {}
}
