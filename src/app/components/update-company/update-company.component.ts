import { StateServiceService } from './../../services/state-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/company.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css'],
})
export class UpdateCompanyComponent implements OnInit {
  public company!: Company;
  constructor(
    private stateService: StateServiceService,
    private adminService: AdminService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.company = this.stateService.company;
  }

  public updateCompany() {
    this.adminService.updateCompany(this.company).subscribe(
      () => {
        this.router.navigateByUrl('/companies');
      },
      (error) => {
        alert('error: ' + error.error.message);
      }
    );
  }
}
