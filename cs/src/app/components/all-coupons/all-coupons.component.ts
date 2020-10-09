import { LoginService } from './../../services/login.service';
import { AdminService } from 'src/app/services/admin.service';
import { CustomerService } from './../../services/customer.service';
import { CompanyService } from './../../services/company.service';
import { Coupon } from './../../models/coupon';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-coupons',
  templateUrl: './all-coupons.component.html',
  styleUrls: ['./all-coupons.component.css'],
})
export class AllCouponsComponent implements OnInit {
  public coups: Coupon[];
  public customerID: number;
  public type: string;
  constructor(
    private companyService: CompanyService,
    private customerService: CustomerService,
    private adminService: AdminService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.type = this.loginService.type;
    this.companyService.getAllCoupons().subscribe(
      (data) => {
        this.coups = data;
      },
      (err) => {
        alert(err.message);
      }
    );

    this.adminService.getOneCustomerByEmail(this.loginService.email).subscribe(
      (c) => {
        this.customerID = c.id;
      },
      (err) => alert(err.message)
    );
  }
  purchaseCoupon(customerID: number, coupon: Coupon): void {
    if (confirm('Confirm buying: ' + coupon.title + ' Proceed?')) {
      this.customerService.purchaseCoupon(customerID, coupon).subscribe(
        (data) => {
          alert(
            'Coupon: ' + coupon.title + ' has purchase, Enjoy your Coupon!'
          );
        },
        (err) => {
          alert(err.message);
        }
      );
    }
  }
}
