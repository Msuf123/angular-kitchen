import { TestBed } from '@angular/core/testing';

import { ClockPlannerService } from './clock-planner.service';

describe('ClockPlannerService', () => {
  let service: ClockPlannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClockPlannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
