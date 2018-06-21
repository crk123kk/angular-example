import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { DeepFormComponent } from './deep-form/deep-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { RepeatValidatorDirective } from './template-form/validateEqual.directive';
import { CrkValidatorDirective } from './template-form/equalCrk.direvtive';
import { ReactiveFormBuildComponent } from './reactive-formBuild/reactive-formBuild.component';
import { ChildFieldComponent } from './deep-form/child-field/child-field.component';
import { DeepFormBuildComponent } from './deep-form-build/deep-form-build.component';
import { ChildFieldBuildComponent } from './deep-form-build/child-field-build/child-field-build.component';


@NgModule({
  declarations: [
    AppComponent,
    DeepFormComponent,
    ReactiveFormComponent,
    ReactiveFormBuildComponent,
    TemplateFormComponent,
    RepeatValidatorDirective,
    CrkValidatorDirective,
    ChildFieldComponent,
    DeepFormBuildComponent,
    ChildFieldBuildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
