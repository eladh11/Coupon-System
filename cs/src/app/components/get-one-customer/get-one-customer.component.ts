import { Customer } from 'src/app/models/customer';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-get-one-customer',
  templateUrl: './get-one-customer.component.html',
  styleUrls: ['./get-one-customer.component.css'],
})
export class GetOneCustomerComponent implements OnInit {
  public customers: Customer[] = [];
  public customerID: number;
  editRowID: any = ' ';

  public constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getAllCustomers().subscribe(
      (customer) => {
        this.customers = customer;
      },
      (err) => {
        alert(err.message);
      }
    );
  }

  public deleteCustomer(id: number): void {
    if (confirm('Are you sure to delete?')) {
      this.adminService.deleteCustomer(id).subscribe(
        () => {
          alert('the Customer has deleted !');
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

  public updateCustomer(customer: Customer) {
    this.adminService.updateCustomer(customer).subscribe(
      (data) => {
        alert('the Customer has updated!');
      },
      (error) => alert(error)
    );
  }
}
