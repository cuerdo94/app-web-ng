import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedCountryModule } from "../../shared/shared.module";

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
})
export class ByCountryPageComponent {

  searchByCountry(country: string): void {
    console.log(country);
  }
}
