import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { CustomerCouponsComponent } from './components/customer-coupons/customer-coupons.component';
import { BuyCouponComponent } from './components/buy-coupon/buy-coupon.component';
import { UpdateCompanyComponent } from './components/update-company/update-company.component';
import { UpdateCouponComponent } from './components/update-coupon/update-coupon.component';
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
import { LogoutComponent } from './components/logout/logout.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'companies', component: CompaniesComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'add-company', component: AddCompanyComponent },
  { path: 'company-details/:id', component: CompanyDetailsComponent },
  { path: 'update-company', component: UpdateCompanyComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'customer-details/:id', component: CustomerDetailsComponent },
  { path: 'update-customer', component: UpdateCustomerComponent },
  { path: 'add-customer', component: AddCustomerComponent },
  { path: 'coupons', component: CouponsComponent },
  { path: 'update-coupon', component: UpdateCouponComponent },
  { path: 'add-coupon', component: AddCouponComponent },
  { path: 'buy-coupon', component: BuyCouponComponent },
  { path: 'customer-coupons', component: CustomerCouponsComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'log-out', component: LogoutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
