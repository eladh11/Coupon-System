import { Coupon } from './../models/coupon';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8081/customer/';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  public constructor(private httpClient: HttpClient) {}

  public purchaseCoupon(customerID: number, coupon: Coupon): Observable<any> {
    return this.httpClient.post<any>(
      baseUrl + 'purchase-coupon/' + customerID,
      coupon
    );
  }
}
