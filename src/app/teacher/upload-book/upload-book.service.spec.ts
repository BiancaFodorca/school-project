import { TestBed, inject } from '@angular/core/testing';

import { UploadBookService } from './upload-book.service';

describe('UploadBookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UploadBookService]
    });
  });

  it('should be created', inject([UploadBookService], (service: UploadBookService) => {
    expect(service).toBeTruthy();
  }));
});
