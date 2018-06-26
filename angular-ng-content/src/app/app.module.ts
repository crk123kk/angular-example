import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestNgContent1Component } from './test-ng-content1/test-ng-content1.component';
import { TestNgContent2Component } from './test-ng-content2/test-ng-content2.component';
import { TestNgContent3Component } from './test-ng-content3/test-ng-content3.component';
import { TestNgContent4Component } from './test-ng-content4/test-ng-content4.component';
import { TestNgContent5Component } from './test-ng-content5/test-ng-content5.component';
import { TestNgContent6Component } from './test-ng-content6/test-ng-content6.component';
import { TestNgContent7Component } from './test-ng-content7/test-ng-content7.component';


@NgModule({
  declarations: [
    AppComponent,
    TestNgContent1Component,
    TestNgContent2Component,
    TestNgContent3Component,
    TestNgContent4Component,
    TestNgContent5Component,
    TestNgContent6Component,
    TestNgContent7Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
