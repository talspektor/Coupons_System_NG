// import { SharedService } from 'src/app/services/shared.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../models/company.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../models/customer.model';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  readonly requestOptions = this.sharedService.requestOptions;

  constructor(
    private httpClient: HttpClient,
    private sharedService: SharedService
  ) {}

  public getAllCompanies(): Observable<Company[]> {
    console.log(
      'getAllCompanies token: ' + this.requestOptions.headers.get('token')
    );

    let APIUrl = 'http://localhost:8080/api/companies';
    return this.httpClient.get<Company[]>(APIUrl, this.requestOptions);
  }

  public getCompany(id: Number): Observable<Company> {
    console.log('adminService: getcompany()');

    return this.httpClient.get<Company>(
      `http://localhost:8080/api/company/${id}`,
      this.requestOptions
    );
  }

  public getCompanyByName(name: string): Observable<Company> {
    return this.httpClient.get<Company>(
      `http://localhost:8080/api/company/name/${name}`,
      this.requestOptions
    );
  }

  public addCompany(company: Company): Observable<Company> {
    return this.httpClient.post<Company>(
      `http://localhost:8080/api/add-company/`,
      company,
      this.requestOptions
    );
  }

  public updateCompany(company: Company): Observable<Company> {
    return this.httpClient.put<Company>(
      'http://localhost:8080/api/update-company',
      company,
      this.requestOptions
    );
  }

  public deleteCompany(id: Number): Observable<Company> {
    return this.httpClient.delete<Company>(
      `http://localhost:8080/api/delete-company/${id}`,
      this.requestOptions
    );
  }

  public getCustomer(id: Number): Observable<Customer> {
    return this.httpClient.get<Customer>(
      `http://localhost:8080/api/customer/${id}`,
      this.requestOptions
    );
  }

  public addCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(
      `http://localhost:8080/api/add-customer/`,
      customer,
      this.requestOptions
    );
  }

  public updateCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(
      'http://localhost:8080/api/update-customer',
      customer,
      this.requestOptions
    );
  }

  public deleteCustomer(id: Number): Observable<Customer> {
    return this.httpClient.delete<Customer>(
      `http://localhost:8080/api/delete-customer${id}`,
      this.requestOptions
    );
  }

  public getAllCustomers(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(
      `http://localhost:8080/api/customers/`,
      this.requestOptions
    );
  }
}
