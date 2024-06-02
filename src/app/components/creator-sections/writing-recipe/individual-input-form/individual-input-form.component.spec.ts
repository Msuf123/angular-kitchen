import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualInputFormComponent } from './individual-input-form.component';

describe('IndividualInputFormComponent', () => {
  let component: IndividualInputFormComponent;
  let fixture: ComponentFixture<IndividualInputFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndividualInputFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndividualInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
