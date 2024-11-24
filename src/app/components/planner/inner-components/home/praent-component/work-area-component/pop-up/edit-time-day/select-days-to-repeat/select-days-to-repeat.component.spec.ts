import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDaysToRepeatComponent } from './select-days-to-repeat.component';

describe('SelectDaysToRepeatComponent', () => {
  let component: SelectDaysToRepeatComponent;
  let fixture: ComponentFixture<SelectDaysToRepeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectDaysToRepeatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectDaysToRepeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
