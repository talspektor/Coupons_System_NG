import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

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
