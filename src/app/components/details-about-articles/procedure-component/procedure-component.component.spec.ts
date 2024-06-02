import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedureComponentComponent } from './procedure-component.component';

describe('ProcedureComponentComponent', () => {
  let component: ProcedureComponentComponent;
  let fixture: ComponentFixture<ProcedureComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcedureComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProcedureComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
