import { TestBed } from '@angular/core/testing';

import { FormsInvalidService } from './forms-invalid.service';

describe('FormsInvalidService', () => {
  let service: FormsInvalidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormsInvalidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
