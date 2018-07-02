import { NgModule } from '@angular/core';

import { SelfModuleComponent } from './self-module.component';
import { SelfComponent1Component } from './commponents/self-component1/self-component1.component';
import { SelfComponent2Component } from './commponents/self-component2/self-component2.component';

@NgModule({
    imports: [],
    exports: [
        SelfModuleComponent
    ],
    declarations: [
        SelfModuleComponent,
        SelfComponent1Component,
        SelfComponent2Component
    ],
    providers: [],
})
export class SelfModuleModule { }
