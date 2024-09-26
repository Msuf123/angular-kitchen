import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingAuthorComponent } from './loading-author.component';

describe('LoadingAuthorComponent', () => {
  let component: LoadingAuthorComponent;
  let fixture: ComponentFixture<LoadingAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingAuthorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoadingAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
