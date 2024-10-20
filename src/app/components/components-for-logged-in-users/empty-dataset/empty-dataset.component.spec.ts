import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyDatasetComponent } from './empty-dataset.component';

describe('EmptyDatasetComponent', () => {
  let component: EmptyDatasetComponent;
  let fixture: ComponentFixture<EmptyDatasetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyDatasetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmptyDatasetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
