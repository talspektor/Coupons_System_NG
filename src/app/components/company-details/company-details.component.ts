import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/models/company.model';
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
    // this.company = new Company(0, 'a', 'c', 'd');
    let id = this.activatedRout.snapshot.params.id;
    this.companyService.getCompanyDetails().subscribe(
      (company) => {
        this.company = company;
      },
      (error) => {
        alert('error: ' + error.error.message);
      }
    );
  }
}
