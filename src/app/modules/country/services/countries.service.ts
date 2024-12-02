import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../interfaces/country';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private httpClient: HttpClient) { }

  getCountries(name: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`https://restcountries.com/v3.1/name/${name}`).pipe(catchError(error => of([])));
  }

}
