import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchComponent } from './components/search/search.component';
import { ListComponent } from './components/list/list.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchComponent,
    ListComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ], exports: [HomePageComponent]
})
export class GifsModule { }
