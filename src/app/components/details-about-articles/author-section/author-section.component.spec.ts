import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorSectionComponent } from './author-section.component';

describe('AuthorSectionComponent', () => {
  let component: AuthorSectionComponent;
  let fixture: ComponentFixture<AuthorSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthorSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
