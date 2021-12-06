import { Coupon } from './../models/coupon';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Env } from './../../environments/Env';

const baseUrl = 'http://localhost:8088/company/';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  private url =  Env.URL+'company/';

  public constructor(private httpClient: HttpClient) {}

  public addCoupon(coupon: Coupon): Observable<any> {
    return this.httpClient.post<any>(this.url + 'add-coupon', coupon);
  }
  public updateCoupon(coupon: Coupon): Observable<any> {
    return this.httpClient.put<any>(
      this.url+'update-coupon/',
      coupon
    );
  }
  public deleteCoupon(couponID: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + 'delete-coupon/' + couponID);
  }
  public getAllCouponsByID(id: number): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(
      this.url + 'get-all-company-coupons/' + id
    );
  }
  public getAllCoupons(): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.url + 'get-all-coupons');
  }

  public getAllCouponsByPrice(price: number): Observable<any> {
    return this.httpClient.get<Coupon[]>(
      this.url + 'get-all-company-coupons-maxprice/' + price
    );
  }
  public getAllCompanyDetails(): Observable<any> {
    return this.httpClient.get<Coupon[]>(this.url + 'get-all-company-details');
  }
}
