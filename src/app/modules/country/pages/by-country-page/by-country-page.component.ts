import { Component } from '@angular/core';

import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
})
export class ByCountryPageComponent {

  constructor(private countriesService: CountriesService) { }
  public listCountries: Country[] = [];

  searchByCountry(country: string): void {
    this.countriesService.getCountries(country).subscribe((countries: Country[]) => {
      this.listCountries = countries;
    });
  }
}
