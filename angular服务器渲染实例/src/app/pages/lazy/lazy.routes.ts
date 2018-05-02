import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyComponent } from './lazy.component';

const lazyRoutes: Routes = [
	{path: '', component: LazyComponent, pathMatch: 'full'}
];

@NgModule({
	imports: [
		RouterModule.forChild(lazyRoutes)
	],
	exports: [
		RouterModule
	]
})

export class LazyRoutingModule {
}
