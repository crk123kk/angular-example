import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildenComponent } from './child/child.component';
import { Parent2Component } from './parent2/parent2.component';
import { Childen2Component } from './child2/child2.component';
import { Parent3Component } from './parent3/parent3.component';
import { Childen3Component } from './child3/child3.component';
import { Parent4Component } from './parent4/parent4.component';
import { Childen4Component } from './child4/child4.component';
import { GetDataService } from './share/service/getData.service';
import { Parent5Component } from './parent5/parent5.component';
import { Childen5Component } from './child5/child5.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildenComponent,
    Parent2Component,
    Childen2Component,
    Parent3Component,
    Childen3Component,
    Parent4Component,
    Childen4Component,
    Parent5Component,
    Childen5Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    GetDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
