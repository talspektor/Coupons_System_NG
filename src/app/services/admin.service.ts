import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../models/company.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  readonly requestOptions = {
    headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('token', localStorage.getItem('token')!),
  };
  constructor(private httpClient: HttpClient) {}

  public getAllCompanies(): Observable<Company[]> {
    console.log('getAllCompanies token: ' + localStorage.getItem('token'));
    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders
      .set('token', localStorage.getItem('token')!)
      .set('Content-Type', 'application/json');
    const options = { headers: theHeaders };
    console.log(theHeaders.get('token'));

    let APIUrl = 'http://localhost:8080/api/companies';
    return this.httpClient.get<Company[]>(APIUrl, options);
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
      `http://localhost:8080/api/add-company/`,
      company,
      {
        withCredentials: true,
      }
    );
  }

  public updateCompany(company: Company): Observable<Company> {
    return this.httpClient.put<Company>(
      'http://localhost:8080/api/update-company',
      company,
      {
        withCredentials: true,
      }
    );
  }

  public deleteCompany(id: Number): Observable<Company> {
    return this.httpClient.put<Company>(
      `http://localhost:8080/api/delete-company${id}`,
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

  public addCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(
      `http://localhost:8080/api/add-customer/`,
      customer,
      {
        withCredentials: true,
      }
    );
  }

  public updateCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(
      'http://localhost:8080/api/update-customer',
      customer,
      {
        withCredentials: true,
      }
    );
  }

  public deleteCustomer(id: Number): Observable<Customer> {
    return this.httpClient.delete<Customer>(
      `http://localhost:8080/api/delete-customer${id}`,
      {
        withCredentials: true,
      }
    );
  }

  public getAllCustomers(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(
      `http://localhost:8080/api/customers/`,
      {
        withCredentials: true,
      }
    );
  }
}
