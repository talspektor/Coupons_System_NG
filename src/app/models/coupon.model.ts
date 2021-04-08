export class Coupon {
  constructor(
    public title: String,
    public description: String,
    public startDate: Date,
    public endDate: Date,
    public amount: Number,
    public price: Number
  ) {}
}
