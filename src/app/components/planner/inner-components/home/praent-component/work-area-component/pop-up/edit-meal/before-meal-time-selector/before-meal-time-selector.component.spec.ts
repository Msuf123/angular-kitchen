import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforeMealTimeSelectorComponent } from './before-meal-time-selector.component';

describe('BeforeMealTimeSelectorComponent', () => {
  let component: BeforeMealTimeSelectorComponent;
  let fixture: ComponentFixture<BeforeMealTimeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeforeMealTimeSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeforeMealTimeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
