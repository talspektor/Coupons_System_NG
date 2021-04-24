import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../models/company.model';
import { Coupon } from '../models/coupon.model';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  readonly requestOptions = this.sharedService.requestOptions;

  constructor(
    private httpClient: HttpClient,
    private sharedService: SharedService
  ) {}

  public addCoupon(coupon: Coupon): Observable<Coupon> {
    console.log('addCoupon token: ' + this.requestOptions.headers.get('token'));

    let APIUrl = 'http://localhost:8080/api/add-coupon';
    return this.httpClient.post<Coupon>(APIUrl, coupon, this.requestOptions);
  }

  public updateCoupon(coupon: Coupon): Observable<Coupon> {
    let APIUrl = 'http://localhost:8080/api/update-coupon';
    return this.httpClient.put<Coupon>(APIUrl, coupon, this.requestOptions);
  }

  public deleteCoupon(id: Number): Observable<Coupon> {
    let APIUrl = `http://localhost:8080/api/delete-coupon/${id}`;
    return this.httpClient.delete<Coupon>(APIUrl, this.requestOptions);
  }

  public getCoupon(id: Number): Observable<Coupon> {
    let APIUrl = `http://localhost:8080/api/coupon/${id}`;
    return this.httpClient.get<Coupon>(APIUrl, this.requestOptions);
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
    console.log('companyService: getCompanyDetails()');

    let APIUrl = `http://localhost:8080/api/company`;
    return this.httpClient.get<Company>(APIUrl, this.requestOptions);
  }
}
