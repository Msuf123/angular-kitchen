import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingParameterComponent } from './missing-parameter.component';

describe('MissingParameterComponent', () => {
  let component: MissingParameterComponent;
  let fixture: ComponentFixture<MissingParameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissingParameterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MissingParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
