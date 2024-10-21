import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingForProfileSectionComponent } from './loading-for-profile-section.component';

describe('LoadingForProfileSectionComponent', () => {
  let component: LoadingForProfileSectionComponent;
  let fixture: ComponentFixture<LoadingForProfileSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingForProfileSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoadingForProfileSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
