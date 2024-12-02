import { Component, Input } from '@angular/core';
import { Country } from '../../../interfaces/country';

@Component({
  selector: 'shared-country-table',
  templateUrl: './country-table.component.html',
  styles: [
    `
      img {
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 2px;
      }
    `
  ]
})
export class CountryTableComponent {

  @Input() countries: Country[] = [];
}
