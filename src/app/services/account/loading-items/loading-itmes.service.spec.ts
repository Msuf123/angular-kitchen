import { TestBed } from '@angular/core/testing';

import { LoadingItmesService } from './loading-itmes.service';

describe('LoadingItmesService', () => {
  let service: LoadingItmesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingItmesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
