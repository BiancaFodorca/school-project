import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Headers } from '@angular/http';

@Injectable()
export class AuthService {
  private baseUrl = 'http://192.168.88.111:8080';

  constructor(private httpClient: HttpClient, private http: Http) {}

  login(credentials) {
    const headers: Headers = new Headers();
    headers.append(
      'Authorization',
      'Basic ' + btoa(credentials.email + ':' + credentials.password)
    );
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    const postReqResponse$ = this.http.post(
      `${this.baseUrl}/school/auth/login`,
      credentials,
      { headers: headers }
    );
    return postReqResponse$;
  }
}
