import { AdminService } from 'src/app/services/admin.service';
import { Customer } from 'src/app/models/customer';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  public customer = new Customer();

  public constructor(
    private adminService: AdminService,
    private route: Router
  ) {}

  public addCustomer(): void {
    this.adminService.addCustomer(this.customer).subscribe(
      (c) => {
        alert('Customer:' + this.customer.first + ' as added !');
        this.route.navigateByUrl('/login');
      },
      (err) => {
        alert('Error:' + err);
      }
    );
  }

  // email = new FormControl('', [Validators.required, Validators.email]);

  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }



}
