import { TestBed } from '@angular/core/testing';

import { DetailsRecipeService } from './details-recipe.service';

describe('DetailsRecipeService', () => {
  let service: DetailsRecipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailsRecipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
