import { Category } from './category.model';

export class Coupon {
  constructor(
    public id?: number,
    public title?: String,
    public category?: Category,
    public description?: String,
    public startDate?: Date,
    public endDate?: Date,
    public amount?: Number,
    public price?: Number
  ) {}
}
