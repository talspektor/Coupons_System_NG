import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css'],
})
export class CompaniesComponent implements OnInit {
  public companies!: Company[];

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getAllCompanies().subscribe(
      (arr) => {
        this.companies = arr;
      },
      (err) => {
        console.log('error: ' + err.message);
      }
    );
  }
}
