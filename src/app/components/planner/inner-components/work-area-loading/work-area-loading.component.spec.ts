import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkAreaLoadingComponent } from './work-area-loading.component';

describe('WorkAreaLoadingComponent', () => {
  let component: WorkAreaLoadingComponent;
  let fixture: ComponentFixture<WorkAreaLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkAreaLoadingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkAreaLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
