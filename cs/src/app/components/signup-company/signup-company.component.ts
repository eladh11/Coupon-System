import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Company } from 'src/app/models/company';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-signup-company',
  templateUrl: './signup-company.component.html',
  styleUrls: ['./signup-company.component.css'],
})
export class SignupCompanyComponent {
  public company = new Company();

  public constructor(
    private adminService: AdminService,
    private router: Router
  ) {}

  public addCompany(): void {
    this.adminService.addCompany(this.company).subscribe(
      (c) => {
        alert('Company:' + this.company.name + ' as added !');
        this.router.navigateByUrl('/login');
      },
      (err) => {
        alert('Error:' + err);
      }
    );
  }
}
