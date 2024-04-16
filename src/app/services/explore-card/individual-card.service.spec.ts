import { TestBed } from '@angular/core/testing';

import { IndividualCardService } from './individual-card.service';

describe('IndividualCardService', () => {
  let service: IndividualCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndividualCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
