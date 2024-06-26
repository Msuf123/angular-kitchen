import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XOauthComponent } from './x-oauth.component';

describe('XOauthComponent', () => {
  let component: XOauthComponent;
  let fixture: ComponentFixture<XOauthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XOauthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(XOauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
