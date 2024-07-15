import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftOptionsBarComponent } from './left-options-bar.component';

describe('LeftOptionsBarComponent', () => {
  let component: LeftOptionsBarComponent;
  let fixture: ComponentFixture<LeftOptionsBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftOptionsBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeftOptionsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
