import { Component, Input } from '@angular/core';
import { TourCard } from '../models/tours.model';

@Component({
  selector: 'app-tour-landing-card',
  imports: [],
  templateUrl: './tour-landing-card.component.html',
  styleUrl: './tour-landing-card.component.css'
})
export class TourLandingCardComponent {
  @Input() tour!:TourCard;
}
