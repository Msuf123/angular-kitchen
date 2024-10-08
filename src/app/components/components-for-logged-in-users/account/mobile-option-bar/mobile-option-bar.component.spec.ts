import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileOptionBarComponent } from './mobile-option-bar.component';

describe('MobileOptionBarComponent', () => {
  let component: MobileOptionBarComponent;
  let fixture: ComponentFixture<MobileOptionBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileOptionBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobileOptionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
