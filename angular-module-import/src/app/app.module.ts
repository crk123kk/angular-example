import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SelfModuleModule } from './self-module/self-module.module';
import { SelfModuleComponent } from './self-module/self-module.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SelfModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
