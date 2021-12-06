import { Coupon } from './../models/coupon';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Env } from './../../environments/Env';


const baseUrl = 'http://localhost:8088/customer/';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private url =  Env.URL+'customer/';

  public constructor(private httpClient: HttpClient) {}

  public purchaseCoupon(customerID: number, coupon: Coupon): Observable<any> {
    return this.httpClient.post<any>(
      this.url + 'purchase-coupon/' + customerID,
      coupon
    );
  }
}
