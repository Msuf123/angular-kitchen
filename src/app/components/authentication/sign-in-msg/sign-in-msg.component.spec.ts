import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInMsgComponent } from './sign-in-msg.component';

describe('SignInMsgComponent', () => {
  let component: SignInMsgComponent;
  let fixture: ComponentFixture<SignInMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignInMsgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignInMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
