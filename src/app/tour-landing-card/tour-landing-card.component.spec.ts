import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourLandingCardComponent } from './tour-landing-card.component';

describe('TourLandingCardComponent', () => {
  let component: TourLandingCardComponent;
  let fixture: ComponentFixture<TourLandingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourLandingCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourLandingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
