import { Component, OnInit } from '@angular/core';
import { TourCard2Component } from '../tour-card-2/tour-card-2.component';
import { TourCard2 } from '../models/tours.model';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { catchError, debounceTime, distinctUntilChanged, map, of, startWith, switchMap } from 'rxjs';
import { ToursProviderService } from '../tours-provider.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-tours-list',
  imports: [TourCard2Component, AsyncPipe, ReactiveFormsModule],
  templateUrl: './tours-list.component.html',
  styleUrl: './tours-list.component.css'
})
export class ToursListComponent{

  constructor(private tourService:ToursProviderService) {}

  searchControl = new FormControl('', { nonNullable: true });

  
    readonly tours$ = this.searchControl.valueChanges.pipe(
      startWith(''),
      debounceTime(400),
      map((value) => value.trim()),
      distinctUntilChanged(),
      switchMap((query) => this.tourService.getTours(query).pipe(
        catchError(() => of([])
      ))));
  
}
