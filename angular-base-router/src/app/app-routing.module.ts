import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PageAboutComponen } from './page-about.component';
import { PageNoFoundComponent } from './page-no-found.component';
import { PageHomeComponent } from './page-home.component';
import { PageOneComponent } from './module-one/one-app.component';

const appRoutes: Routes = [
    { path : '' , redirectTo : '/appHome' , pathMatch : 'full' },
    { path : 'appHome' , component : PageHomeComponent },
    { path : 'appAbout' , component : PageAboutComponen },
    { path : 'pageNoFound' , component : PageNoFoundComponent },
    { path : '**' , component : PageNoFoundComponent },
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}