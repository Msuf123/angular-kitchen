import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkAreaTitleComponent } from './work-area-title.component';

describe('WorkAreaTitleComponent', () => {
  let component: WorkAreaTitleComponent;
  let fixture: ComponentFixture<WorkAreaTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkAreaTitleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkAreaTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
