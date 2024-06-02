import { TestBed } from '@angular/core/testing';

import { FormGeneratorServiceService } from './form-generator-service.service';

describe('FormGeneratorServiceService', () => {
  let service: FormGeneratorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormGeneratorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
