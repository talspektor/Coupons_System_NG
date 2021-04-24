import { Injectable } from '@angular/core';
import { Coupon } from '../models/coupon.model';

@Injectable({
  providedIn: 'root',
})
export class StateServiceService {
  public coupon!: Coupon;

  constructor() {}
}
