import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable()
export class UploadBookService {
  constructor(private httpClient: HttpClient) {}

  // postFile(fileToUpload: File): Observable<boolean> {
  //   // https://stackoverflow.com/questions/47936183/angular-file-upload
  //   // const endpoint = 'your-destination-url';
  //   // const formData: FormData = new FormData();
  //   // formData.append('fileKey', fileToUpload, fileToUpload.name);
  //   // return this.httpClient
  //   //   .post(endpoint, formData, { headers: yourHeadersConfig })
  //   //   .map(() => {
  //   //     return true;
  //   //   })
  //   //   .catch(e => this.handleError(e));
  // }
}
