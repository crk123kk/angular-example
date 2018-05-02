import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FirstComponent } from './first.component';
import { SecondComponent } from './second.component';
import { ThirdComponent } from './third.component';
import { StoreModule } from '@ngrx/store';
import { messagesReducer } from './messages';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ messages: messagesReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
