import { TestBed } from '@angular/core/testing';

import { ErrorImageService } from './error-image.service';

describe('ErrorImageService', () => {
  let service: ErrorImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
