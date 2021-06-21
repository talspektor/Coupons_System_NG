import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Coupon } from '../models/coupon.model';
import { Category } from '../models/category.model';
import { Customer } from '../models/customer.model';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private requestOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders().set(
      this.sharedService.TOKEN,
      localStorage.getItem(this.sharedService.TOKEN)!
    ),
  };

  constructor(
    private httpClient: HttpClient,
    private sharedService: SharedService
  ) {}

  public purchaseCoupon(id: Number): Observable<Coupon> {
    console.log('purchaseCoupon id=' + id);

    let APIUrl = `http://localhost:8080/api/purchase-coupon/${id}`;
    return this.httpClient.put<Coupon>(APIUrl, null, this.requestOptions);
  }

  public getCustomerCoupons(): Observable<Coupon[]> {
    console.log('getCustomerCoupons()');

    let APIUrl = `http://localhost:8080/api/customer/coupons`;
    return this.httpClient.get<Coupon[]>(APIUrl, this.requestOptions);
  }

  public getAllCoupons(): Observable<Coupon[]> {
    console.log('getAllCoupons()');

    let APIUrl = `http://localhost:8080/api/coupons`;
    return this.httpClient.get<Coupon[]>(APIUrl, this.requestOptions);
  }

  public getCouponsByCategory(category: Category): Observable<Coupon[]> {
    let APIUrl = `http://localhost:8080/api/customer/coupons/category/${category}`;
    return this.httpClient.get<Coupon[]>(APIUrl, this.requestOptions);
  }

  public getCouponsByPriceLessThen(maxPrice: Number): Observable<Coupon[]> {
    let APIUrl = `http://localhost:8080/api/customer/coupons/maxPrice/${maxPrice}`;
    return this.httpClient.get<Coupon[]>(APIUrl, this.requestOptions);
  }

  public getCustomer(): Observable<Customer> {
    let APIUrl = `http://localhost:8080/api/customer`;
    return this.httpClient.get<Customer>(APIUrl, this.requestOptions);
  }
}
