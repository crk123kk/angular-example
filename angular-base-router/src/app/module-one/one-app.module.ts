import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageOneComponent } from './one-app.component';
import { PageOneHomeComponent } from './one-page-home/page-home.component';
import { PageOneAboutComponen } from './one-page-about/page-about.component';
import { PageOneNoFoundComponent } from './one-page-no-found/page-no-found.component';
import { PageOneRoutingModule } from './one-routing.module';



@NgModule({
  declarations: [
      PageOneComponent,
      PageOneHomeComponent,
      PageOneAboutComponen,
      PageOneNoFoundComponent
  ],
  imports: [
    BrowserModule,
    PageOneRoutingModule
  ]
})
export class PageOneModule {
}
