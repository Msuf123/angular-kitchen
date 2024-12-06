import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealTimingSelectorComponent } from './meal-timing-selector.component';

describe('MealTimingSelectorComponent', () => {
  let component: MealTimingSelectorComponent;
  let fixture: ComponentFixture<MealTimingSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealTimingSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MealTimingSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
