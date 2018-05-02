import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageOneComponent } from './page-one.component';
import { PageOneHomeComponent } from './page-one-home/page-one-home.component';

const pageOneRoutes: Routes = [
    {
        path: '', 
        component: PageOneComponent,
        children:[
            { path: 'page-one-home' , component: PageOneHomeComponent }
        ]
    }
  ];

@NgModule({
  imports: [
    RouterModule.forChild(
        pageOneRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class PageOneRoutingModule {

}