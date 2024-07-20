import { TestBed } from '@angular/core/testing';

import { ErrorFromServerService } from './error-from-server.service';

describe('ErrorFromServerService', () => {
  let service: ErrorFromServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorFromServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
