import { TestBed } from '@angular/core/testing';

import { PlannerParentComponentStoreService } from './planner-parent-component-store.service';

describe('PlannerParentComponentStoreService', () => {
  let service: PlannerParentComponentStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlannerParentComponentStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
