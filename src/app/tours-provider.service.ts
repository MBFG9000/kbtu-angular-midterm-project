import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TourCard } from './models/tours.model';

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
}
