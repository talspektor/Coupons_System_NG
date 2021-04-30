import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company.model';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent implements OnInit {
  public company!: Company;

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    console.log('company');

    this.companyService.getCompanyDetails().subscribe(
      (company) => {
        this.company = company;
      },
      (error) => {
        console.dir(error.error);
        alert('error ' + error.error.message);
      }
    );
  }
}
