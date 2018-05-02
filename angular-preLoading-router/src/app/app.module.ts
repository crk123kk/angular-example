import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PageNoFoundComponent } from './page-no-found.component';
import { AppRoutingModule } from './app-routing.module';
import { PageHomeComponent } from './page-home.component';
import { PageOneModule } from './page-one/page-one.module';


@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    PageNoFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
