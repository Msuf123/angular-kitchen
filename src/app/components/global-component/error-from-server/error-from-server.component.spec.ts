import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorFromServerComponent } from './error-from-server.component';

describe('ErrorFromServerComponent', () => {
  let component: ErrorFromServerComponent;
  let fixture: ComponentFixture<ErrorFromServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorFromServerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErrorFromServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
