import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class BaseService {
  private readonly restApiUrl = environment.baseApiUrl;

  constructor(httpClient: HttpClient) {}

  getUrl() {
    return `${this.restApiUrl}`;
  }

  getAuthApiUrl() {
    return `${this.restApiUrl}/secured`;
  }

  getApiUrl() {
    return `${this.restApiUrl}/api/v1`;
  }
}
