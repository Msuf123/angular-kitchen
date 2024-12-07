import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadProgressToBackendComponent } from './upload-progress-to-backend.component';

describe('UploadProgressToBackendComponent', () => {
  let component: UploadProgressToBackendComponent;
  let fixture: ComponentFixture<UploadProgressToBackendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadProgressToBackendComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UploadProgressToBackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
