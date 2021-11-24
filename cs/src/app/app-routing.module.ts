import { SignupCompanyComponent } from './components/signup-company/signup-company.component';
import { SignupComponent } from './components/signup/signup.component';
import { AllCouponsComponent } from './components/all-coupons/all-coupons.component';
import { CustomerCouponsComponent } from './components/customer-coupons/customer-coupons.component';
import { CouponDetailsComponent } from './components/coupon-details/coupon-details.component';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { GetAllCouponsComponent } from './components/get-all-coupons/get-all-coupons.component';
import { AddCouponComponent } from './components/add-coupon/add-coupon.component';
import { GetAllCustomersComponent } from './components/get-all-customers/get-all-customers.component';
import { GetAllCompaniesComponent } from './components/get-all-companies/get-all-companies.component';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { CompanyComponent } from './components/company/company.component';
import { CustomerComponent } from './components/customer/customer.component';
import { AdminComponent } from './components/admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { OpenPageComponent } from './components/open-page/open-page.component'
import { BuyoutpageComponent } from './components/buyoutpage/buyoutpage.component'
import { P404Component } from './components/p404/p404.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add-customer', component: AddCustomerComponent },
  { path: 'add-company', component: AddCompanyComponent },
  { path: 'add-coupon', component: AddCouponComponent },
  { path: 'get-all-companies', component: GetAllCompaniesComponent },
  { path: 'get-all-customers', component: GetAllCustomersComponent },
  { path: 'get-all-coupons', component: GetAllCouponsComponent },
  { path: 'get-all-customer-coupons', component: CustomerCouponsComponent },
  { path: 'company-details/:id', component: CompanyDetailsComponent },
  { path: 'coupon-details/:id', component: CouponDetailsComponent },
  { path: 'all-coupons', component: AllCouponsComponent },
  { path: 'create-account', component: SignupComponent },
  { path: 'signup-company', component: SignupCompanyComponent },
  { path: 'home', component: OpenPageComponent },
  { path: 'coupon/:id', component: BuyoutpageComponent },
  { path: '', component: OpenPageComponent, pathMatch: 'full' },
  { path: '**', component: P404Component, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
