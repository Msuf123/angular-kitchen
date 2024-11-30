import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnMealTimeSelectorComponent } from './on-meal-time-selector.component';

describe('OnMealTimeSelectorComponent', () => {
  let component: OnMealTimeSelectorComponent;
  let fixture: ComponentFixture<OnMealTimeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnMealTimeSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnMealTimeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
