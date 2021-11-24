import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';



@Component({
  selector: 'app-open-page',
  templateUrl: './open-page.component.html',
  styleUrls: ['./open-page.component.css']
})

export class OpenPageComponent implements OnInit {

 
  public constructor(
    public companyService: CompanyService)  
     {}
   coups: any
  ngOnInit(): void {
    this.coups = this.companyService.getAllCoupons().subscribe(
      (data) => {
        this.coups = data;
      },
      (err) => {
        alert(err.message);
      }
    );
  }
  
}
