import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { writingGuard } from './writing.guard';

describe('writingGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => writingGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
