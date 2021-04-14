import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Coupon } from '../models/coupon.model';
import { Category } from '../models/category.model';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private httpClient: HttpClient) {}

  public purchaseCoupon(id: Number): Observable<Coupon> {
    console.log('purchaseCoupon token' + localStorage.getItem('token'));
    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders
      .set('token', localStorage.getItem('token')!)
      .set('Content-Type', 'application/json');
    const options = { headers: theHeaders };
    console.log(theHeaders.get('token'));

    let APIUrl = `http://localhost:8080/api/purchase-coupon/${id}`;
    return this.httpClient.get<Coupon>(APIUrl, options);
  }

  public getCustomerCoupons(): Observable<Coupon[]> {
    console.log('purchaseCoupon token' + localStorage.getItem('token'));
    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders
      .set('token', localStorage.getItem('token')!)
      .set('Content-Type', 'application/json');
    const options = { headers: theHeaders };
    console.log(theHeaders.get('token'));

    let APIUrl = `http://localhost:8080/api/customer/coupons`;
    return this.httpClient.get<Coupon[]>(APIUrl, options);
  }

  public getAllCoupons(): Observable<Coupon[]> {
    console.log('purchaseCoupon token' + localStorage.getItem('token'));
    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders
      .set('token', localStorage.getItem('token')!)
      .set('Content-Type', 'application/json');
    const options = { headers: theHeaders };
    console.log(theHeaders.get('token'));

    let APIUrl = `http://localhost:8080/api/coupons`;
    return this.httpClient.get<Coupon[]>(APIUrl, options);
  }

  public getCouponsByCategory(category: Category): Observable<Coupon[]> {
    console.log('purchaseCoupon token' + localStorage.getItem('token'));
    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders
      .set('token', localStorage.getItem('token')!)
      .set('Content-Type', 'application/json');
    const options = { headers: theHeaders };
    console.log(theHeaders.get('token'));

    let APIUrl = `http://localhost:8080/api/customer/coupons/category/${category}`;
    return this.httpClient.get<Coupon[]>(APIUrl, options);
  }

  public getCouponsByPriceLessThen(maxPrice: Number): Observable<Coupon[]> {
    console.log('purchaseCoupon token' + localStorage.getItem('token'));
    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders
      .set('token', localStorage.getItem('token')!)
      .set('Content-Type', 'application/json');
    const options = { headers: theHeaders };
    console.log(theHeaders.get('token'));

    let APIUrl = `http://localhost:8080/api/customer/coupons/maxPrice/${maxPrice}`;
    return this.httpClient.get<Coupon[]>(APIUrl, options);
  }

  public getCustomer(): Observable<Customer> {
    console.log('purchaseCoupon token' + localStorage.getItem('token'));
    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders
      .set('token', localStorage.getItem('token')!)
      .set('Content-Type', 'application/json');
    const options = { headers: theHeaders };
    console.log(theHeaders.get('token'));

    let APIUrl = `http://localhost:8080/api/customer`;
    return this.httpClient.get<Customer>(APIUrl, options);
  }
}
