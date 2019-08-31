import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Headers } from '@angular/http';
import { LocalStorageService } from '../shared/services/localStorage/local-storage.service';

@Injectable()
export class AuthService {
  private baseUrl = 'http://192.168.88.111:8080';

  constructor(
    private httpClient: HttpClient,
    private http: Http,
    private lsService: LocalStorageService
  ) {}

  login(credentials) {
    const headers: Headers = new Headers();
    this.lsService.set('uEmail', credentials.email);
    this.lsService.set('uPass', credentials.password);
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

  logout() {
    this.lsService.set('uEmail', null);
    this.lsService.set('uPass', null);
    this.lsService.set('bookName', null);
    this.lsService.set('bookId', null);
    this.lsService.set('uRole', null);
  }
}
