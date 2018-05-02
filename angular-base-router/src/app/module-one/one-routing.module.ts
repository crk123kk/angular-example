import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageOneComponent } from './one-app.component';
import { PageOneHomeComponent } from './one-page-home/page-home.component';
import { PageOneAboutComponen } from './one-page-about/page-about.component';
import { PageOneNoFoundComponent } from './one-page-no-found/page-no-found.component';

const pageOneRoutes: Routes = [
    { 
      path : 'page-one' , 
      component: PageOneComponent,
      children:[
        { path : 'page-one-home' , component: PageOneHomeComponent},
        { path : 'page-one-about' , component: PageOneAboutComponen},
        { path : 'page-one-no-found' , component: PageOneNoFoundComponent}
      ]
    }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(
      pageOneRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class PageOneRoutingModule {
}