import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/models/company.model';
import { AdminService } from 'src/app/services/admin.service';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css'],
})
export class CompanyDetailsComponent implements OnInit {
  public company!: Company;

  constructor(
    private activatedRout: ActivatedRoute,
    private companyService: CompanyService
  ) {}

  ngOnInit(): void {
    let id = this.activatedRout.snapshot.params.id;

    this.companyService.getCompanyDetails().subscribe(
      (company) => {
        this.company = company;
      },
      (error) => {
        console.dir(error.error);
        alert('error: ' + error.error.message);
      }
    );
  }
}
