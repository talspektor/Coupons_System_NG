import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { CustomersComponent } from './components/customers/customers.component';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { AddCouponComponent } from './components/add-coupon/add-coupon.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { CustomerComponent } from './components/customer/customer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { CompanyComponent } from './components/company/company.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'companies', component: CompaniesComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'add-company', component: AddCompanyComponent },
  { path: 'company-details', component: CompanyDetailsComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'customer-details', component: CustomerDetailsComponent },
  { path: 'add-customer', component: AddCustomerComponent },
  { path: 'coupons', component: CouponsComponent },
  { path: 'add-coupon', component: AddCouponComponent },
  { path: 'admin', component: AdminComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
