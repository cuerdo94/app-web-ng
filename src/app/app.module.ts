import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterModule } from './modules/counter/counter.module';
import { HeroesModule } from './modules/heroes/heroes.module';
import { DbzModule } from './modules/dbz/dbz.module';
import { SharedModule } from './modules/shared/shared.module';
import { GifsModule } from './modules/gifs/gifs.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroesModule,
    DbzModule,
    SharedModule,
    GifsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
