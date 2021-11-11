import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './components/admin/admin.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CompanyComponent } from './components/company/company.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { GetAllCustomersComponent } from './components/get-all-customers/get-all-customers.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { GetAllCompaniesComponent } from './components/get-all-companies/get-all-companies.component';
import { GetOneCompanyComponent } from './components/get-one-company/get-one-company.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { GetOneCustomerComponent } from './components/get-one-customer/get-one-customer.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { AddCouponComponent } from './components/add-coupon/add-coupon.component';
import { GetAllCouponsComponent } from './components/get-all-coupons/get-all-coupons.component';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { CustomerCouponsComponent } from './components/customer-coupons/customer-coupons.component';
import { CouponDetailsComponent } from './components/coupon-details/coupon-details.component';
import { AllCouponsComponent } from './components/all-coupons/all-coupons.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { SignupComponent } from './components/signup/signup.component';
import { SignupCompanyComponent } from './components/signup-company/signup-company.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { OpenPageComponent } from './components/open-page/open-page.component'



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CustomerComponent,
    CompanyComponent,
    LoginComponent,
    ToolbarComponent,
    GetAllCustomersComponent,
    AddCompanyComponent,
    GetAllCompaniesComponent,
    GetOneCompanyComponent,
    AddCustomerComponent,
    GetOneCustomerComponent,
    AddCouponComponent,
    GetAllCouponsComponent,
    CompanyDetailsComponent,
    CustomerCouponsComponent,
    CouponDetailsComponent,
    AllCouponsComponent,
    SignupComponent,
    SignupCompanyComponent,
    FooterComponent,
    OpenPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    FormsModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
