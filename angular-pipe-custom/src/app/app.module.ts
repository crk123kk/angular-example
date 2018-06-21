import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ExponentialStrengthPipe } from './share/pipe/exponential-strength.pipe';
import { SexReformPipe } from './share/pipe/sexReform.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ExponentialStrengthPipe,
    SexReformPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
