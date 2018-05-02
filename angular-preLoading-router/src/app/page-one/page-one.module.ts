import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PageOneComponent } from './page-one.component';
import { PageOneHomeComponent } from './page-one-home/page-one-home.component';
import { PageOneRoutingModule } from './page-one-routing.module';

@NgModule({
  declarations: [
    PageOneComponent,
    PageOneHomeComponent
  ],
  imports: [
    PageOneRoutingModule
  ],
})
export class PageOneModule { }
