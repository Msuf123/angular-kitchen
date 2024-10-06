import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftRecipeComponent } from './draft-recipe.component';

describe('DraftRecipeComponent', () => {
  let component: DraftRecipeComponent;
  let fixture: ComponentFixture<DraftRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DraftRecipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DraftRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
