import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coupon } from 'src/app/models/coupon';
import { AdminService } from 'src/app/services/admin.service';
import { CompanyService } from 'src/app/services/company.service';
import { CustomerService } from 'src/app/services/customer.service';
import { LoginService } from 'src/app/services/login.service';

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
    private adminService: AdminService,
    private companyService: CompanyService,
    private customerService: CustomerService,
    private loginService: LoginService,
    private router: Router,
  ) { }

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
          this.router.navigateByUrl('/all-coupons');
        },
        (err) => {
          alert(err.message);
        }
      );
    }
  }

}
