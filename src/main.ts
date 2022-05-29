import { enableProdMode, isDevMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Workbox } from 'workbox-window';

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
        // navigator.serviceWorker.register('/service-worker.js');

        const wb = new Workbox('/service-worker.js');

        wb.addEventListener('activated', (event) => {
          if (!event.isUpdate) {
            console.log('Service worker activated for the first time!');
          } else {
            console.log('Service worker activated!');
          }
        });

        wb.addEventListener('waiting', (event) => {
          console.log(
            `A new service worker has installed, but it can't activate` +
              `until all tabs running the current version have fully unloaded.`
          );
        });

        wb.addEventListener('installed', (event) => {
          if (!event.isUpdate) {
            console.log('Service worker installed for the first time');
          } else {
            console.log('Service worker installed');
          }
        });

        wb.register();
      }
    });
  })
  .catch((err) => console.error(err));
