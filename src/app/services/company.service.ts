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
    headers: new HttpHeaders().set('token', localStorage.getItem('token')!),
  };

  constructor(private httpClient: HttpClient) {}

  public addCoupon(coupon: Coupon): Observable<Coupon> {
    console.log('addCoupon token: ' + localStorage.getItem('token'));
    console.log(this.requestOptions.headers.get('token'));

    let APIUrl = 'http://localhost:8080/api/add-coupon';
    return this.httpClient.post<Coupon>(APIUrl, coupon, this.requestOptions);
  }

  public updateCoupon(coupon: Coupon): Observable<Coupon> {
    let APIUrl = 'http://localhost:8080/api/update-coupon';
    return this.httpClient.put<Coupon>(APIUrl, coupon, this.requestOptions);
  }

  public deleteCoupon(id: Number): Observable<Coupon> {
    let APIUrl = `http://localhost:8080/api/update-coupon/${id}`;
    return this.httpClient.put<Coupon>(APIUrl, this.requestOptions);
  }

  public getAllCoupons(): Observable<Coupon[]> {
    let APIUrl = 'http://localhost:8080/api/company/coupons';
    return this.httpClient.get<Coupon[]>(APIUrl, this.requestOptions);
  }

  public getCouponsByPrice(naxPrice: Number): Observable<Coupon[]> {
    let APIUrl = `http://localhost:8080/api/company/coupons${naxPrice}`;
    return this.httpClient.get<Coupon[]>(APIUrl, this.requestOptions);
  }

  public getCompanyDetails(): Observable<Company> {
    let APIUrl = `http://localhost:8080/api/company`;
    return this.httpClient.get<Company>(APIUrl, this.requestOptions);
  }
}
