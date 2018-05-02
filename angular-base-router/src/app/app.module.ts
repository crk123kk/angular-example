import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageAboutComponen } from './page-about.component';
import { PageNoFoundComponent } from './page-no-found.component';
import { PageHomeComponent } from './page-home.component';
import { PageOneModule } from './module-one/one-app.module';
import { PageOneComponent } from './module-one/one-app.component';



@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    PageAboutComponen,
    PageNoFoundComponent
  ],
  imports: [
    BrowserModule,
    PageOneModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
