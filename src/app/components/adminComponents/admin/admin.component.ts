import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(private router: Router) {
    this.router = router;
  }

  ngOnInit(): void {}

  public addCompany() {
    alert('addComapny');

    this.router.navigate(['add-company']);
  }

  public getAllCompanies() {}

  public getcompanyById() {}

  public getCompanyByName() {}

  public deleteCompany() {}

  public updatecomapny() {}

  public addCustomer() {
    alert('addCustomer');

    // this.router.navigate(['add-custoemr']);
  }

  public getAllCustomers() {}

  public deleteCustomer() {}

  public updateCustomer() {}
}
