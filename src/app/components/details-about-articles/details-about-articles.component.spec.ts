import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAboutArticlesComponent } from './details-about-articles.component';

describe('DetailsAboutArticlesComponent', () => {
  let component: DetailsAboutArticlesComponent;
  let fixture: ComponentFixture<DetailsAboutArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsAboutArticlesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsAboutArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
