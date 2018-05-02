import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';
import { PageNoFoundComponent } from './page-no-found.component';
import { PageHomeComponent } from './page-home.component';
import { PageOneComponent } from './page-one/page-one.component';

const appRoutes: Routes = [
    { path : '' , redirectTo : '/appHome' , pathMatch : 'full' },
    { path : 'appHome' , component : PageHomeComponent},
    { 
      path : 'page-one' , 
      loadChildren : 'app/page-one/page-one.module#PageOneModule',
      data : { preload: true}
    },
    { path : '**' , component : PageNoFoundComponent },
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        preloadingStrategy: PreloadAllModules
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}