import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {}

  public logout(): void {
    if (confirm('Are you sure to logout?')) {
      this.router.navigate(['/login']);
      this.loginService.log = true;
      this.loginService.type = ' ';
    }
  }
  public login(): boolean {
    if (this.loginService.log === true) {
      return true;
    } else return false;
  }
  public checkIfAdmin() {
    const t = this.loginService.type;
    if (t === 'admin') {
      return true;
    }
    return false;
  }
  public checkIfCustomer() {
    const t = this.loginService.type;
    if (t === 'customer') {
      return true;
    }
    return false;
  }
  public checkIfCompany() {
    const t = this.loginService.type;
    if (t === 'company') {
      return true;
    }
    return false;
  }
}
