import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiMediaDetailsIntroComponent } from './multi-media-details-intro.component';

describe('MultiMediaDetailsIntroComponent', () => {
  let component: MultiMediaDetailsIntroComponent;
  let fixture: ComponentFixture<MultiMediaDetailsIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiMediaDetailsIntroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultiMediaDetailsIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
