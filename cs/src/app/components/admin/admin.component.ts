import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  typesOfAction: string[] = [
    'Get All Companies',
    'Get One Company',
    'Get All Customers',
    'Get One Customer',
  ];

  public constructor() {}

  ngOnInit(): void {}
}
