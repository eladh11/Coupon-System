import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-p404',
  templateUrl: './p404.component.html',
  styleUrls: ['./p404.component.css']
})
export class P404Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  navigate=()=>{
    this.router.navigate(['/home']);
  }
}