import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySaveDraftComponent } from './display-save-draft.component';

describe('DisplaySaveDraftComponent', () => {
  let component: DisplaySaveDraftComponent;
  let fixture: ComponentFixture<DisplaySaveDraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplaySaveDraftComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplaySaveDraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
