import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourCard2Component } from './tour-card-2.component';

describe('TourCard2Component', () => {
  let component: TourCard2Component;
  let fixture: ComponentFixture<TourCard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourCard2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
