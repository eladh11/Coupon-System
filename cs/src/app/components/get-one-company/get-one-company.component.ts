import { Company } from 'src/app/models/company';
import { AdminService } from './../../services/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-one-company',
  templateUrl: './get-one-company.component.html',
  styleUrls: ['./get-one-company.component.css'],
})
export class GetOneCompanyComponent implements OnInit {
  public comps: Company[];
  public companyID: number;
  editRowID: any = ' ';

  public constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getAllCompanies().subscribe(
      (data) => {
        this.comps = data;
      },
      (err) => {
        alert(err.message);
      }
    );
  }
  public deleteCompany(id: number): void {
    if (confirm('Are you sure to delete?')) {
      this.adminService.deleteCompany(id).subscribe(
        () => {
          alert('the Company has deleted !');
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
  public updateCompany(company: Company) {
    this.adminService.updateCompany(company).subscribe(
      (data) => {
        alert('the Company has updated!');
      },
      (error) => console.log(error)
    );
  }
}
