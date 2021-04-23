import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css'],
})
export class AddCompanyComponent implements OnInit {
  public company = new Company();

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {}

  public addCompany() {
    this.adminService.addCompany(this.company).subscribe(
      (company) => {
        alert('success: adding company name =' + company.name);
      },
      (error) => {
        alert('Error: ' + error.error.message);
      }
    );
  }
}
