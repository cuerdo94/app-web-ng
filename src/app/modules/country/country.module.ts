import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedCountryModule } from './shared/shared.module';
import { CountriesComponent } from './pages/countries/countries.component';
import { SharedModule } from "../gifs/shared/shared.module";
import { AppRoutingCountryModule } from './app-routing.module';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';




@NgModule({
  declarations: [
    CountriesComponent,
    ByCountryPageComponent,
    ByRegionPageComponent,
    ByCapitalPageComponent,
    CountryPageComponent],
  imports: [
    CommonModule,
    SharedCountryModule,
    SharedModule,
    AppRoutingCountryModule
  ],
  exports: [
    CountriesComponent,
   
  ]

})
export class CountryModule { }
