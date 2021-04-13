
import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { Company } from '../models/company.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../models/customer.model';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root',
})
export class AdminService {

  readonly requestOptions = {
    headers: new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .set('Access-Control-Allow-Headers', 'Content-Type')
    .set('token', this.sharedService.token)
  };
  constructor(private httpClient: HttpClient, private sharedService: SharedService) {}

  public getAllCompanies(): Observable<Company[]> {
    console.log('token: ' + this.requestOptions.headers.get('token'));
    let APIUrl = 'http://localhost:8080/api/companies'
    return this.httpClient.get<Company[]>(
      APIUrl, this.requestOptions);
  }

  public getCompany(id: Number): Observable<Company> {
    return this.httpClient.get<Company>(
      `http://localhost:8080/api/company/${id}`,
      {
        withCredentials: true,
      }
    );
  }

  public getCompanyByName(name: string): Observable<Company> {
    return this.httpClient.get<Company>(
      `http://localhost:8080/api/company/name/${name}`,
      {
        withCredentials: true,
      }
    );
  }

  public addCompany(company: Company): Observable<Company> {
    return this.httpClient.post<Company>(
      `http://localhost:8080/api/add-company/`, company,
      {
        withCredentials: true,
      }
    );
  }

  public addCupdateComapny(company: Company): Observable<Company> {
    return this.httpClient.post<Company>(
      `http://localhost:8080/api/add-company/`, company,
      {
        withCredentials: true,
      }
    );
  }

  public updateCompany(company: Company): Observable<Company> {
    return this.httpClient.put<Company>(
      'http://localhost:8080/api/update-company', company,
      {
        withCredentials: true,
      }
    );
  }

  public getCustomer(id: Number): Observable<Customer> {
    return this.httpClient.get<Customer>(
      `http://localhost:8080/api/customer/${id}`,
      {
        withCredentials: true,
      }
    );
  }


}
