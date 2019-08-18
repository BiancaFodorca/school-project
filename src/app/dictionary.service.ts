import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './shared/services/base.service';
import { Http } from '@angular/http';

@Injectable()
export class DictionaryService extends BaseService {
  private baseUrl = 'http://192.168.88.111:8080';

  constructor(private httpClient: HttpClient, private http: Http) {
    super(httpClient);
  }

  getAll() {
    const getResponse$ = this.http.get(`${this.baseUrl}/school/dictionar`);
    return getResponse$;
  }

  getWordById(wordId: number) {
    const getResponse$ = this.http.get(
      `${this.baseUrl}/school/dictionar/` + wordId
    );
    return getResponse$;
  }

  addNewWord(word) {
    const postReqResponse$ = this.http.post(
      `${this.baseUrl}/school/dictionar`,
      word
    );
    return postReqResponse$;
  }

  updateExistingWord(id, word) {
    const putReqResponse$ = this.http.put(
      `${this.baseUrl}/school/dictionar/` + id,
      word
    );
    return putReqResponse$;
  }

  deleteWord(id) {
    const deleteReqResponse$ = this.http.delete(
      `${this.baseUrl}/school/dictionar/` + id
    );
    return deleteReqResponse$;
  }

  filterWordsByLetter(letter) {
    const getResponse$ = this.http.get(
      `${this.baseUrl}/school/dictionar/letter?letter=` + letter
    );
    return getResponse$;
  }

  searchWord(word) {
    const getResponse$ = this.http.get(
      `${this.baseUrl}/school/dictionar/find?word=` + word
    );
    return getResponse$;
  }
}
