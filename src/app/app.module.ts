import { SharedService } from './services/shared.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompanyComponent } from './components/company/company.component';
import { AdminComponent } from './components/admin/admin.component';
import { CustomerComponent } from './components/customer/customer.component';
import { LogoutComponent } from './components/logout/logout.component';
import { CustomersComponent } from './components/customers/customers.component';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { AddCouponComponent } from './components/add-coupon/add-coupon.component';
import { BuyCouponComponent } from './components/buy-coupon/buy-coupon.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { UpdateCouponComponent } from './components/update-coupon/update-coupon.component';
import { UpdateCompanyComponent } from './components/update-company/update-company.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    Page404Component,
    CompaniesComponent,
    LoginComponent,
    CompanyComponent,
    AdminComponent,
    CustomerComponent,
    LogoutComponent,
    CustomersComponent,
    AddCompanyComponent,
    AddCustomerComponent,
    CouponsComponent,
    CompanyDetailsComponent,
    AddCouponComponent,
    BuyCouponComponent,
    CustomerDetailsComponent,
    UpdateCouponComponent,
    UpdateCompanyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [LayoutComponent, [SharedService]],
})
export class AppModule {}
