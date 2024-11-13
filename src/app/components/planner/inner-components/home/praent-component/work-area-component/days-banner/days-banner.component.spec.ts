import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysBannerComponent } from './days-banner.component';

describe('DaysBannerComponent', () => {
  let component: DaysBannerComponent;
  let fixture: ComponentFixture<DaysBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DaysBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DaysBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
