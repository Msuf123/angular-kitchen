import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDietProgressComponent } from './user-diet-progress.component';

describe('UserDietProgressComponent', () => {
  let component: UserDietProgressComponent;
  let fixture: ComponentFixture<UserDietProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDietProgressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserDietProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
