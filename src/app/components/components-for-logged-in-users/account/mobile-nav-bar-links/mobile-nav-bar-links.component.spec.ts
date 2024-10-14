import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileNavBarLinksComponent } from './mobile-nav-bar-links.component';

describe('MobileNavBarLinksComponent', () => {
  let component: MobileNavBarLinksComponent;
  let fixture: ComponentFixture<MobileNavBarLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileNavBarLinksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobileNavBarLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
