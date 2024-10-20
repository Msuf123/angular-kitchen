import { TestBed } from '@angular/core/testing';

import { EmptyDataService } from './empty-data.service';

describe('EmptyDataService', () => {
  let service: EmptyDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmptyDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
