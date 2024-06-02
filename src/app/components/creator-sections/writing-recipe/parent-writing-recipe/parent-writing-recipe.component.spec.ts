import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentWritingRecipeComponent } from './parent-writing-recipe.component';

describe('ParentWritingRecipeComponent', () => {
  let component: ParentWritingRecipeComponent;
  let fixture: ComponentFixture<ParentWritingRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentWritingRecipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParentWritingRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
