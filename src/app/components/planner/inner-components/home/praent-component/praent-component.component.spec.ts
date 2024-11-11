import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PraentComponentComponent } from './praent-component.component';

describe('PraentComponentComponent', () => {
  let component: PraentComponentComponent;
  let fixture: ComponentFixture<PraentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PraentComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PraentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
