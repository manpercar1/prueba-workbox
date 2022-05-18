import { enableProdMode, isDevMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(() => {
    window.addEventListener('load', () => {
      if ('serviceWorker' in navigator && !isDevMode()) {
        navigator.serviceWorker.register('/service-worker.js');
      }
    });
  })
  .catch((err) => console.error(err));
