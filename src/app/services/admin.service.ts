import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { Company } from '../models/company.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private httpClient: HttpClient) {}

  public getAllCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(
      'http://localhost:8080/api/companies',
      {
        withCredentials: true,
      }
    );
  }
}
