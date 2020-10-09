import { AdminService } from 'src/app/services/admin.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css'],
})
export class CompanyDetailsComponent implements OnInit {
  public company: Company;

  public constructor(
    private activatedRoute: ActivatedRoute,
    private adminService: AdminService
  ) {}

  public ngOnInit(): void {
    this.adminService.getAllCompanies().subscribe(
      (comps) => {
        const id = +this.activatedRoute.snapshot.params.id;
        this.company = comps.find((c) => c.id == id);
      },
      (err) => {
        alert(err.message);
      }
    );
  }
}
