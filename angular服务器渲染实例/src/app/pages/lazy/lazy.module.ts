import { NgModule } from '@angular/core';
import { LazyComponent } from './lazy.component';
import { LazyRoutingModule } from './lazy.routes';
import { CommonModule } from '@angular/common';
import { TransformService } from '../../services/transform.service';

@NgModule({
	declarations: [LazyComponent],
	imports: [
		CommonModule,
		LazyRoutingModule
	],
	providers: [
		TransformService
	]
})
export class LazyModule {

}
