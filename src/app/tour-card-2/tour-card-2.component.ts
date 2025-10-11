import { Component, Input } from '@angular/core';
import { TourCard2 } from '../models/tours.model';
@Component({
  selector: 'app-tour-card-2',
  imports: [],
  templateUrl: './tour-card-2.component.html',
  styleUrl: './tour-card-2.component.css'
})
export class TourCard2Component {
  @Input() tour!: TourCard2;
}
