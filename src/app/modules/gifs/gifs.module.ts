import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchComponent } from './components/search/search.component';
import { ListComponent } from './components/list/list.component';
import { CardComponent } from './components/card/card.component';
import { SharedModule } from './shared/shared.module';
import { IndexComponent } from './pages/index/index.component';

@NgModule({
  declarations: [
    HomePageComponent,
    SearchComponent,
    ListComponent,
    CardComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [IndexComponent]
})
export class GifsModule { }
