import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarOptionsComponent } from './top-bar-options.component';

describe('TopBarOptionsComponent', () => {
  let component: TopBarOptionsComponent;
  let fixture: ComponentFixture<TopBarOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopBarOptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopBarOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
