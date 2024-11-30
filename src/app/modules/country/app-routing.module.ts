import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./shared/components/home-page/home-page.component";
import { AboutPageComponent } from "./shared/components/about-page/about-page.component";
import { ContactPageComponent } from "./shared/components/contact-page/contact-page.component";
import { ByCountryPageComponent } from "./pages/by-country-page/by-country-page.component";
import { ByRegionPageComponent } from "./pages/by-region-page/by-region-page.component";
import { CountryPageComponent } from "./pages/country-page/country-page.component";
import { ByCapitalPageComponent } from "./pages/by-capital-page/by-capital-page.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'by-country',
    pathMatch: 'full'
  },
  // {
  //   path: 'home',
  //   component: HomePageComponent
  // },
  // {
  //   path: 'about',
  //   component: AboutPageComponent
  // },
  // {
  //   path: 'contact',
  //   component: ContactPageComponent
  // },
  {
    path: 'by-country',
    component: ByCountryPageComponent
  },
  {
    path: 'by-region',
    component: ByRegionPageComponent
  },
  {
    path: 'by-capital',
    component: ByCapitalPageComponent
  },
  
  {
    path: 'by/:id',
    component: CountryPageComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingCountryModule { }