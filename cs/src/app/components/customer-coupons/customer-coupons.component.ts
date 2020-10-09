import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { AdminService } from 'src/app/services/admin.service';
import { LoginService } from 'src/app/services/login.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-customer-coupons',
  templateUrl: './customer-coupons.component.html',
  styleUrls: ['./customer-coupons.component.css'],
})
export class CustomerCouponsComponent implements OnInit {
  public coups: Coupon[];
  public constructor(
    private adminService: AdminService,
    private loginService: LoginService
  ) {}
  ngOnInit(): void {
    this.adminService.getOneCustomerByEmail(this.loginService.email).subscribe(
      (c) => {
        this.coups = c.coupons;
      },
      (err) => alert(err.message)
    );
  }

  getCode(): void {
    const myId = uuid.v4();
    alert('Your Code Coupon is: ' + myId);
  }
}
