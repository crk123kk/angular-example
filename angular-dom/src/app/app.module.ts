import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestDom1Component } from './test-dom1/test-dom1.component';
import { TestDom1ChildComponent } from './test-dom1/test-dom1-child.component';
import { TestDom2Component } from './test-dom2/test-dom2.component';
import { TestDom2ChildComponent } from './test-dom2/test-dom2-child.component';
import { TestDom3Component } from './test-dom3/test-dom3.component';
import { TestDom3ChildComponent } from './test-dom3/test-dom3-child.component';
import { TestDom4Component } from './test-dom4/test-dom4.component';
import { TestDom4ChildComponent } from './test-dom4/test-dom4-child.component';



@NgModule({
  declarations: [
    AppComponent,
    TestDom1Component,
    TestDom1ChildComponent,
    TestDom2Component,
    TestDom2ChildComponent,
    TestDom3Component,
    TestDom3ChildComponent,
    TestDom4Component,
    TestDom4ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
