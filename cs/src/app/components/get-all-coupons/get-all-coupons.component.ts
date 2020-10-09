import { AdminService } from 'src/app/services/admin.service';
import { LoginService } from './../../services/login.service';
import { CompanyService } from './../../services/company.service';
import { Coupon } from './../../models/coupon';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-all-coupons',
  templateUrl: './get-all-coupons.component.html',
  styleUrls: ['./get-all-coupons.component.css'],
})
export class GetAllCouponsComponent implements OnInit {
  public coups: Coupon[];
  editRowID: any = ' ';
  public id: number;
  public constructor(
    private companyService: CompanyService,
    private adminService: AdminService,
    private loginService: LoginService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.adminService.getOneCompanyByEmail(this.loginService.email).subscribe(
      (c) => {
        this.id = c.id;
      },
      (err) => alert(err.message)
    );

    this.companyService.getAllCoupons().subscribe(
      (data) => {
        this.coups = data;
      },
      (err) => {
        alert(err.message);
      }
    );
  }

  public deleteCoupon(id: number): void {
    if (confirm('Are you sure to delete?')) {
      this.companyService.deleteCoupon(id).subscribe(
        () => {
          alert('the Coupon has deleted !');
        },
        (err) => {
          alert(err.message);
        }
      );
    }
  }

  public Edit(val) {
    this.editRowID = val;
  }
  public updateCoupon(coupon: Coupon) {
    this.companyService.updateCoupon(coupon).subscribe(
      () => {
        alert('the Coupon has updated!');
      },
      (error) => console.log(error)
    );
  }
}
