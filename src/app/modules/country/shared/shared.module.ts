import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { FormsModule } from '@angular/forms';
import { CountryTableComponent } from './components/country-table/country-table.component';



@NgModule({
  declarations: [
    SidebarComponent,
    SearchBoxComponent,
    CountryTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    SearchBoxComponent,
    CountryTableComponent
  ]
})
export class SharedCountryModule { }
