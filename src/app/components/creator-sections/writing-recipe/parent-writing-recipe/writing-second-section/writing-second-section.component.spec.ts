import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritingSecondSectionComponent } from './writing-second-section.component';

describe('WritingSecondSectionComponent', () => {
  let component: WritingSecondSectionComponent;
  let fixture: ComponentFixture<WritingSecondSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WritingSecondSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WritingSecondSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
