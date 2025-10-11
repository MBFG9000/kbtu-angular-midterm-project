import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { TourCard, TourCard2 } from './models/tours.model';

@Injectable({
  providedIn: 'root'
})

export class ToursProviderService {
  private readonly baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getTourCards():Observable<TourCard[]> {
    return this.http.get<TourCard[]>(`${this.baseUrl}/api/tour2`)
  }

  sendMessage(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/contact`, data)
  }

  getTours(term: string = ''): Observable<TourCard2[]> {
    term = term.trim();

    const options = term ? { params: new HttpParams().set('name', term) } : {};

    return this.http.get<TourCard2[]>(`${this.baseUrl}/api/tours3`, options)
    // .pipe(
    //   catchError(this.handleError<TourCard[]>('searchHeroes', []))
    // )
  }
}
