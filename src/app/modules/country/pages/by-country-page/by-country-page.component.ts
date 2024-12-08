import { Component, OnDestroy, OnInit } from '@angular/core';

import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
})
export class ByCountryPageComponent implements OnInit, OnDestroy {
  public listCountries: Country[] = [];
  private search: Subject<string> = new Subject<string>();
  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.search.pipe(debounceTime(500))
      .subscribe((country: string) => this._searchByCountry(country));
  }

  ngOnDestroy(): void {
    this.search.unsubscribe();
  }

  public searchByCountry(country: string): void {
    this.search.next(country);
  }

  private _searchByCountry(country: string): void {
    this.countriesService.getCountries(country).subscribe((countries: Country[]) => {
      this.listCountries = countries;
    });
  }
}
