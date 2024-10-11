import { TestBed } from '@angular/core/testing';

import { UploadThumbnailService } from './upload-thumbnail.service';

describe('UploadThumbnailService', () => {
  let service: UploadThumbnailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadThumbnailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
