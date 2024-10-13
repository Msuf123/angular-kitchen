import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishedRecipeComponent } from './published-recipe.component';

describe('PublishedRecipeComponent', () => {
  let component: PublishedRecipeComponent;
  let fixture: ComponentFixture<PublishedRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublishedRecipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PublishedRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
