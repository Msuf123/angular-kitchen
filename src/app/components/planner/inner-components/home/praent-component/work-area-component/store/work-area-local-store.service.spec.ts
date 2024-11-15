import { TestBed } from '@angular/core/testing';

import { WorkAreaLocalStoreService } from './work-area-local-store.service';

describe('WorkAreaLocalStoreService', () => {
  let service: WorkAreaLocalStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkAreaLocalStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
