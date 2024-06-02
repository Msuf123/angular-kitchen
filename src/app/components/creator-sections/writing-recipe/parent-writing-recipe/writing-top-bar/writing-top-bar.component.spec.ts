import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritingTopBarComponent } from './writing-top-bar.component';

describe('WritingTopBarComponent', () => {
  let component: WritingTopBarComponent;
  let fixture: ComponentFixture<WritingTopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WritingTopBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WritingTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
