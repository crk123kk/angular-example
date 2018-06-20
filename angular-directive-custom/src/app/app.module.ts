import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DebounceClickDirective } from './share/directive/debounceClick.directive';
import { DoubleClickDirective2 } from './share/directive/debounceClick2.direcitve';
import { HighlightDirective } from './share/directive/prefixHighLight.directive';
import { UnlessDirective } from './share/directive/exeUnless.directive';


@NgModule({
  declarations: [
    AppComponent,
    DebounceClickDirective,
    DoubleClickDirective2,
    HighlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
