import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroService } from './share/service/hero.data.service';
import { HeroServiceComponent } from './hero-service/hero-service.component';
import { TestServiceComponent } from './test-service/test-service.component';
import { GetMockService } from './share/service/getMock.service';


@NgModule({
  declarations: [
    AppComponent,
    TestServiceComponent,
    HeroServiceComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    GetMockService,
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
