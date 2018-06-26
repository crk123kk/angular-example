import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { TestAnimationComponent } from './test-animation/test-animation.component';
import { TestAnimation2Component } from './test-animation2/test-animation2.component';
import { TestAnimation3Component } from './test-animation3/test-animation3.component';
import { TestAnimation4Component } from './test-animation4/test-animation4.component';


@NgModule({
  declarations: [
    AppComponent,
    TestAnimationComponent,
    TestAnimation2Component,
    TestAnimation3Component,
    TestAnimation4Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
