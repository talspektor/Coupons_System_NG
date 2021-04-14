import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../models/company.model';
import { Coupon } from '../models/coupon.model';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  readonly requestOptions = {
    headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('token', localStorage.getItem('token')!),
  };

  constructor(private httpClient: HttpClient) {}

  public addCoupon(coupon: Coupon): Observable<Coupon> {
    console.log('addCoupon token: ' + localStorage.getItem('token'));
    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders
      .set('token', localStorage.getItem('token')!)
      .set('Content-Type', 'application/json');
    const options = { headers: theHeaders };
    console.log(theHeaders.get('token'));

    let APIUrl = 'http://localhost:8080/api/add-coupon';
    return this.httpClient.post<Coupon>(APIUrl, coupon, options);
  }

  public updateCoupon(coupon: Coupon): Observable<Coupon> {
    console.log('updateCoupon token: ' + localStorage.getItem('token'));
    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders
      .set('token', localStorage.getItem('token')!)
      .set('Content-Type', 'application/json');
    const options = { headers: theHeaders };
    console.log(theHeaders.get('token'));

    let APIUrl = 'http://localhost:8080/api/update-coupon';
    return this.httpClient.put<Coupon>(APIUrl, coupon, options);
  }

  public deleteCoupon(id: Number): Observable<Coupon> {
    console.log('deleteCoupon token: ' + localStorage.getItem('token'));
    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders
      .set('token', localStorage.getItem('token')!)
      .set('Content-Type', 'application/json');
    const options = { headers: theHeaders };
    console.log(theHeaders.get('token'));

    let APIUrl = `http://localhost:8080/api/update-coupon/${id}`;
    return this.httpClient.put<Coupon>(APIUrl, options);
  }

  public getAllCoupons(): Observable<Coupon[]> {
    console.log('getAllCoupons token: ' + localStorage.getItem('token'));
    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders
      .set('token', localStorage.getItem('token')!)
      .set('Content-Type', 'application/json');
    const options = { headers: theHeaders };
    console.log(theHeaders.get('token'));

    let APIUrl = 'http://localhost:8080/api/company/coupons';
    return this.httpClient.get<Coupon[]>(APIUrl, options);
  }

  public getCouponsByPrice(naxPrice: Number): Observable<Coupon[]> {
    console.log('getCouponsByPrice token: ' + localStorage.getItem('token'));
    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders
      .set('token', localStorage.getItem('token')!)
      .set('Content-Type', 'application/json');
    const options = { headers: theHeaders };
    console.log(theHeaders.get('token'));

    let APIUrl = `http://localhost:8080/api/company/coupons${naxPrice}`;
    return this.httpClient.get<Coupon[]>(APIUrl, options);
  }

  public getCompanyDetails(): Observable<Company> {
    console.log('getCompanyDetails token: ' + localStorage.getItem('token'));
    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders
      .set('token', localStorage.getItem('token')!)
      .set('Content-Type', 'application/json');
    const options = { headers: theHeaders };
    console.log(theHeaders.get('token'));

    let APIUrl = `http://localhost:8080/api/company`;
    return this.httpClient.get<Company>(APIUrl, options);
  }
}
