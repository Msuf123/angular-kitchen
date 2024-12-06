import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodMeridiemComponent } from './period-meridiem.component';

describe('PeriodMeridiemComponent', () => {
  let component: PeriodMeridiemComponent;
  let fixture: ComponentFixture<PeriodMeridiemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeriodMeridiemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeriodMeridiemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
