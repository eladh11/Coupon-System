import { Injectable } from '@angular/core';
import { Env } from './../../environments/Env';

@Injectable({
  providedIn: 'root',
})
export class UrlService {
  // public BASE_URL = 'http://localhost:';
  // public PORT = 8088;
  // public admin = '/admin/';
  // public customer = '/customer/';
  // public company = '/company/';
  public admin =Env.URL+'admin/';
  public customer = Env.URL+'customer/';
  public company = Env.URL+'company/';

  public constructor() {}

  public getAdminURL(): string {
    return this.admin;
  }

  public getCustomerURL(): string {
    return this.customer;
  }

  public getACompanyURL(): string {
    return this.company;
  }

  public getURL(type: string): string {
    switch (type) {
      case 'admin':
        return this.getAdminURL();
      case 'customer':
        return this.getCustomerURL();
      case 'company':
        return this.getACompanyURL();
    }
  }
}