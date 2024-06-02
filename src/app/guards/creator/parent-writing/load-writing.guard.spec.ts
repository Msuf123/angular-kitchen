import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { loadWritingGuard } from './load-writing.guard';

describe('loadWritingGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => loadWritingGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
