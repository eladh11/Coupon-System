import { Customer } from './../models/customer';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Company } from 'src/app/models/company';
import { Env } from './../../environments/Env';

const baseUrl = 'http://localhost:8088/admin/';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private url =  Env.URL+'admin/';

  public constructor(private httpClient: HttpClient) { }

  public addCompany(company: Company): Observable<any> {
    return this.httpClient.post<any>(this.url + 'add-company', company);
  }
  public updateCompany(company: Company): Observable<any> {
    return this.httpClient.put<any>(
      this.url+'update-company/',
      company
    );
  }

  public deleteCompany(companyID: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + 'delete-company/' + companyID);
  }
  public getAllCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(this.url + 'get-all-companies');
  }
  public getOneCompany(companyID: number): Observable<Company> {
    return this.httpClient.get<Company>(
      this.url+'get-one-company/' + companyID
    );
  }
  public getOneCompanyByEmail(email: string): Observable<Company> {
    return this.httpClient.get<Company>(
      this.url+'get-one-company-email/' + email
    );
  }
  public getOneCustomerByEmail(email: string): Observable<Customer> {
    return this.httpClient.get<Customer>(
      this.url+'get-one-customer-email/' + email
    );
  }

  public addCustomer(customer: Customer): Observable<any> {
    return this.httpClient.post<any>(this.url + 'add-customer', customer);
  }
  public updateCustomer(customer: Customer): Observable<any> {
    return this.httpClient.put<any>(
      this.url+'update-customer/',
      customer
    );
  }

  public deleteCustomer(customerID: number): Observable<any> {
    return this.httpClient.delete<any>(
      this.url + 'delete-customer/' + customerID
    );
  }
  public getAllCustomers(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.url + 'get-all-customers');
  }

  public getOneCustomer(customerID: number): Observable<Customer> {
    return this.httpClient.get<Customer>(
      this.url+'get-one-customer/' + customerID
    );
  }
}
