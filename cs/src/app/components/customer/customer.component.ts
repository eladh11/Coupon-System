import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  typesOfAction: string[] = ['My Coupons'];

  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
