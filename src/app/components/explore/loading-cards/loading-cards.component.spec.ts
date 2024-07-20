import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingCardsComponent } from './loading-cards.component';

describe('LoadingCardsComponent', () => {
  let component: LoadingCardsComponent;
  let fixture: ComponentFixture<LoadingCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoadingCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
