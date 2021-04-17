export class Coupon {
  constructor(
    public id?: number,
    public title?: String,
    public description?: String,
    public startDate?: Date,
    public endDate?: Date,
    public amount?: Number,
    public price?: Number
  ) {}
}
