import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { APP_ID, Inject, NgModule, PLATFORM_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { isPlatformBrowser } from '@angular/common';
import { AppRoutingModule } from './app.routes';

@NgModule({
	imports: [
		AppRoutingModule,
		BrowserModule.withServerTransition({appId: 'my-app'}),
		TransferHttpCacheModule, // 用于实现服务器到客户端的请求传输缓存，防止客户端重复请求服务端已完成的请求
		BrowserTransferStateModule, // 在客户端导入，用于实现将状态从服务器传输到客户端
		HttpClientModule
	],
	declarations: [
		AppComponent,
		HomeComponent
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppBrowserModule {
	constructor(@Inject(PLATFORM_ID) private platformId: Object,
				@Inject(APP_ID) private appId: string) {
		const platform = isPlatformBrowser(platformId) ? 'in the browser' : 'on the server';
		console.log(`Running ${platform} with appId=${appId}`);
	}
}
