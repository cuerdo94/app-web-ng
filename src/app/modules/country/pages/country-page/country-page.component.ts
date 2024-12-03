import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent implements OnInit {
  listCountries: Country[] = [];
  constructor(private countriesService: CountriesService, private activated: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.activated.params.pipe(
      switchMap(({ id }) => this.countriesService.getCountry(id))
    ).subscribe((countries: Country[]) => {
      this.listCountries = countries;
    });
  }

  private searchByCountry(country: string): void {
    this.countriesService.getCountry(country).subscribe((countries: Country[]) => {
      this.listCountries = countries;
    });
  }
}
