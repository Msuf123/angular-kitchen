import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritingThirdSectionComponent } from './writing-third-section.component';

describe('WritingThirdSectionComponent', () => {
  let component: WritingThirdSectionComponent;
  let fixture: ComponentFixture<WritingThirdSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WritingThirdSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WritingThirdSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
