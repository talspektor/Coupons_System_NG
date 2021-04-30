import { StateServiceService } from './../../services/state-service.service';
import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company.model';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css'],
})
export class CompaniesComponent implements OnInit {
  public companies!: Company[];

  constructor(
    private adminService: AdminService,
    private stateService: StateServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllCompanies();
  }

  public getAllCompanies() {
    console.log('getCompanies');

    this.adminService.getAllCompanies().subscribe(
      (arr) => {
        this.companies = arr;
      },
      (err) => {
        alert('error: ' + err.error.message);
      }
    );
  }

  public deleteCompany(company: Company) {
    console.log('deletecompany');

    this.adminService.deleteCompany(company.id!).subscribe(
      () => {
        alert('company deleted');
        this.getAllCompanies();
      },
      (err) => {
        alert('error: ' + err.error.message);
      }
    );
  }

  public updateCompany(company: Company) {
    this.stateService.company = company;
    this.router.navigate(['/update-company']);
  }
}
