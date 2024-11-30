import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterModule } from './modules/counter/counter.module';
import { HeroesModule } from './modules/heroes/heroes.module';
import { DbzModule } from './modules/dbz/dbz.module';
import { GifsModule } from './modules/gifs/gifs.module';
import { provideHttpClient } from '@angular/common/http';
import { TemplateModule } from './modules/template/template.module';
import { CountryModule } from './modules/country/country.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CounterModule,
    HeroesModule,
    DbzModule,
    GifsModule,
    TemplateModule,
    CountryModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule { }
