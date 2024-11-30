import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedCountryModule } from './shared/shared.module';
import { CountriesComponent } from './pages/countries/countries.component';
import { SharedModule } from "../gifs/shared/shared.module";



@NgModule({
  declarations: [
    CountriesComponent,
  ],
  imports: [
    CommonModule,
    SharedCountryModule,
    SharedModule
],
  exports: [
    CountriesComponent
  ]

})
export class CountryModule { }
