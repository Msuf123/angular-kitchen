import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorDraftReicpeComponent } from './error-draft-reicpe.component';

describe('ErrorDraftReicpeComponent', () => {
  let component: ErrorDraftReicpeComponent;
  let fixture: ComponentFixture<ErrorDraftReicpeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorDraftReicpeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErrorDraftReicpeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
