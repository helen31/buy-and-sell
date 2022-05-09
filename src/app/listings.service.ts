import { Injectable } from '@angular/core';
import { Listing } from './types';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

const httpHeaders = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

const httpOptionsWithCredentials = {
  ...httpHeaders,
  withCredentials: true,
};

@Injectable({
  providedIn: 'root',
})
export class ListingsService {
  constructor(private http: HttpClient, private auth: AuthService) {}

  getListings(): Observable<Listing[]> {
    return this.http.get<Listing[]>('/api/listings');
  }

  getListingById(id: string): Observable<Listing> {
    return this.http.get<Listing>(`/api/listings/${id}`);
  }

  addViewToListing(id: string): Observable<Listing> {
    return this.http.post<Listing>(
      `/api/listings/${id}/add-view`,
      {},
      httpHeaders
    );
  }

  getListingsForUser(): Observable<Listing[]> {
    const userId = this.auth.userId!;

    return this.http.get<Listing[]>(
      `/api/users/${userId}/listings`,
      httpOptionsWithCredentials
    );
  }

  deleteListing(id: string): Observable<any> {
    return this.http.delete(`/api/listings/${id}`, httpOptionsWithCredentials);
  }

  createListing(
    name: string,
    description: string,
    price: number
  ): Observable<Listing> {
    return this.http.post<Listing>(
      '/api/listings',
      {
        name,
        description,
        price,
      },
      httpOptionsWithCredentials
    );
  }

  editListings(
    id: string,
    name: string,
    description: string,
    price: number
  ): Observable<Listing> {
    return this.http.post<Listing>(
      `/api/listings/${id}`,
      {
        name,
        description,
        price,
      },
      httpOptionsWithCredentials
    );
  }
}
