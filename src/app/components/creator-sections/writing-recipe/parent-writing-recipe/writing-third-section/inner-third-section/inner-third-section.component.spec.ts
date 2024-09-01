import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerThirdSectionComponent } from './inner-third-section.component';

describe('InnerThirdSectionComponent', () => {
  let component: InnerThirdSectionComponent;
  let fixture: ComponentFixture<InnerThirdSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InnerThirdSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InnerThirdSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
