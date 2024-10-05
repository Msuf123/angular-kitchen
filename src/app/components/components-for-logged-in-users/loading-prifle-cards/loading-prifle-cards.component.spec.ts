import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingPrifleCardsComponent } from './loading-prifle-cards.component';

describe('LoadingPrifleCardsComponent', () => {
  let component: LoadingPrifleCardsComponent;
  let fixture: ComponentFixture<LoadingPrifleCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingPrifleCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoadingPrifleCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
