import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignPostCommentComponent } from './sign-post-comment.component';

describe('SignPostCommentComponent', () => {
  let component: SignPostCommentComponent;
  let fixture: ComponentFixture<SignPostCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignPostCommentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignPostCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
