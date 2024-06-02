import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritingFirstSectionComponent } from './writing-first-section.component';

describe('WritingFirstSectionComponent', () => {
  let component: WritingFirstSectionComponent;
  let fixture: ComponentFixture<WritingFirstSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WritingFirstSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WritingFirstSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
