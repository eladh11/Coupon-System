import { Customer } from './../models/customer';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Company } from 'src/app/models/company';

const baseUrl = 'http://localhost:8081/admin/';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  public constructor(private httpClient: HttpClient) {}

  public addCompany(company: Company): Observable<any> {
    return this.httpClient.post<any>(baseUrl + 'add-company', company);
  }
  public updateCompany(company: Company): Observable<any> {
    return this.httpClient.put<any>(
      'http://localhost:8081/admin/update-company/',
      company
    );
  }

  public deleteCompany(companyID: number): Observable<any> {
    return this.httpClient.delete<any>(baseUrl + 'delete-company/' + companyID);
  }
  public getAllCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(baseUrl + 'get-all-companies');
  }
  public getOneCompany(companyID: number): Observable<Company> {
    return this.httpClient.get<Company>(
      'http://localhost:8081/admin/get-one-company/' + companyID
    );
  }
  public getOneCompanyByEmail(email: string): Observable<Company> {
    return this.httpClient.get<Company>(
      'http://localhost:8081/admin/get-one-company-email/' + email
    );
  }
  public getOneCustomerByEmail(email: string): Observable<Customer> {
    return this.httpClient.get<Customer>(
      'http://localhost:8081/admin/get-one-customer-email/' + email
    );
  }

  public addCustomer(customer: Customer): Observable<any> {
    return this.httpClient.post<any>(baseUrl + 'add-customer', customer);
  }
  public updateCustomer(customer: Customer): Observable<any> {
    return this.httpClient.put<any>(
      'http://localhost:8081/admin/update-customer/',
      customer
    );
  }

  public deleteCustomer(customerID: number): Observable<any> {
    return this.httpClient.delete<any>(
      baseUrl + 'delete-customer/' + customerID
    );
  }
  public getAllCustomers(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(baseUrl + 'get-all-customers');
  }

  public getOneCustomer(customerID: number): Observable<Customer> {
    return this.httpClient.get<Customer>(
      'http://localhost:8081/admin/get-one-customer/' + customerID
    );
  }
}
