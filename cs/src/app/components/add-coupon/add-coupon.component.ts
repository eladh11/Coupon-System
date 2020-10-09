import { Coupon } from './../../models/coupon';
import { CompanyService } from './../../services/company.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.css'],
})
export class AddCouponComponent {
  public coupon = new Coupon();
  public constructor(private companyService: CompanyService) {}

  public addCoupon(): void {
    this.companyService.addCoupon(this.coupon).subscribe(
      (data) => {
        alert('Coupon:' + this.coupon.title + ' as added !');
      },
      (err) => {
        alert('Error:' + err);
      }
    );
  }
}
