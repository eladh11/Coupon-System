import { Customer } from './../../models/customer';
import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
})
export class AddCustomerComponent {
  public customer = new Customer();

  public constructor(private adminService: AdminService) {}

  public addCustomer(): void {
    this.adminService.addCustomer(this.customer).subscribe(
      (c) => {
        alert('Customer:' + this.customer.first + ' as added !');
      },
      (err) => {
        alert('Error:' + err);
      }
    );
  }
}
