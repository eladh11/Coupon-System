import { CompanyService } from './../../services/company.service';
import { Coupon } from './../../models/coupon';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as uuid from 'uuid';

@Component({
  selector: 'app-coupon-details',
  templateUrl: './coupon-details.component.html',
  styleUrls: ['./coupon-details.component.css'],
})
export class CouponDetailsComponent implements OnInit {
  public coupon: Coupon;

  public constructor(
    private activatedRoute: ActivatedRoute,
    private companyService: CompanyService
  ) {}

  public ngOnInit(): void {
    this.companyService.getAllCoupons().subscribe(
      (data) => {
        const id = +this.activatedRoute.snapshot.params.id;
        this.coupon = data.find((c) => c.id == id);
      },
      (err) => {
        alert(err.message);
      }
    );
  }

  getCode(): void {
    const myId = uuid.v4();
    alert('Your Code Coupon is: ' + myId);
  }
}
