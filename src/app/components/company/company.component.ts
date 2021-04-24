import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/models/company.model';
import { CompanyService } from 'src/app/services/company.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent implements OnInit {
  public company!: Company;

  constructor(
    private companyService: CompanyService,
    private activatedRout: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id = this.activatedRout.snapshot.params.id;
    this.companyService.getCompanyDetails().subscribe(
      (company) => {
        this.company = company;
      },
      (error) => {
        console.dir(error.error);
        alert('error' + error.error.message);
      }
    );
    // this.adminService.getCustomer(id).subscribe(
    //   (customer) => {
    //     this.customer = customer;
    //   },
    //   (error) => {
    //     console.dir(error.error);
    //     alert('error: ' + error.error.message);
    //   }
    // );
  }
}
