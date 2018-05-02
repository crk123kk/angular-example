import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppBrowserModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
	enableProdMode();
}

// 在 DOMContentLoaded 时运行我们的代码，以使 TransferState 正常工作
document.addEventListener('DOMContentLoaded', () => {
	platformBrowserDynamic().bootstrapModule(AppBrowserModule);
});
