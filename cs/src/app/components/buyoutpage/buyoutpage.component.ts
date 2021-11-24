import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coupon } from 'src/app/models/coupon';
import { AdminService } from 'src/app/services/admin.service';
import { CompanyService } from 'src/app/services/company.service';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
    selector: 'app-buyoutpage',
    templateUrl: './buyoutpage.component.html',
    styleUrls: ['./buyoutpage.component.css']
})
export class BuyoutpageComponent implements OnInit {
  public coups: Coupon[];

    public coupon: Coupon;
    public customerID: number;
    public type:string;
    public couponId:number
    constructor(
        private companyService: CompanyService,
        private customerService: CustomerService,
        private activatedRoute: ActivatedRoute,
        private loginService: LoginService,
        private adminService: AdminService,
        private router: Router,


    ) { }
  
  public ngOnInit(): void {
    this.type = this.loginService.type;

    this.companyService.getAllCoupons().subscribe(
        (data) => {
            const id = +this.activatedRoute.snapshot.params.id;

          this.coupon = data.find((c) => c.id == id);
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
              if(this.loginService.type=='customer'){
                alert('you cannot buy the same coupon more than once!');
                this.router.navigateByUrl('/all-coupons');  
              }else{
                alert('you must Login to the website!');
                this.router.navigateByUrl('/login');  
              }
            }
          );
        }
      }
}


 
 

