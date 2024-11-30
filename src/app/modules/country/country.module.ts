import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedCountryModule } from './shared/shared.module';
import { CountriesComponent } from './pages/countries/countries.component';
import { SharedModule } from "../gifs/shared/shared.module";
import { AppRoutingCountryModule } from './app-routing.module';




@NgModule({
  declarations: [
    CountriesComponent,
  ],
  imports: [
    CommonModule,
    SharedCountryModule,
    SharedModule,
    AppRoutingCountryModule
  ],
  exports: [
    CountriesComponent
  ]

})
export class CountryModule { }
