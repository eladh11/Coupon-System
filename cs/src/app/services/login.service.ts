import { UrlService } from './url.service';
import { LoginResult } from './../models/LoginResult';
import { Credentials } from './../models/Credentials';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public isLoggedIn = false;
  public token: string;
  public type: string;
  public log = true;
  public email: string;
  public constructor(
    private httpClient: HttpClient,
    private urlService: UrlService
  ) {}

  public loginRequest(credentials: Credentials): Observable<LoginResult> {
    const correctURL =
      this.urlService.getURL(credentials.type.toLowerCase()) +
      '/login?email=' +
      credentials.email +
      '&password=' +
      credentials.password;
    return this.httpClient.post(correctURL, null);
  }
}
