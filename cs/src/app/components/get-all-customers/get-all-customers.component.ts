import { AdminService } from './../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-get-all-customers',
  templateUrl: './get-all-customers.component.html',
  styleUrls: ['./get-all-customers.component.css'],
})
export class GetAllCustomersComponent implements OnInit {
  public customers: Customer[];
  editRowID: any = ' ';

  public constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getAllCustomers().subscribe(
      (customers) => {
        this.customers = customers;
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
