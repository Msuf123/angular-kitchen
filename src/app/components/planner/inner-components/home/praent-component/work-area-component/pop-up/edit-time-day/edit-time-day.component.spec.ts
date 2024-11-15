import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTimeDayComponent } from './edit-time-day.component';

describe('EditTimeDayComponent', () => {
  let component: EditTimeDayComponent;
  let fixture: ComponentFixture<EditTimeDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditTimeDayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditTimeDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
