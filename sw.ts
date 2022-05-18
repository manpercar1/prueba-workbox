import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { NetworkFirst } from 'workbox-strategies';

declare const self: ServiceWorkerGlobalScope;

precacheAndRoute(self.__WB_MANIFEST);

//Rutas de navegación
registerRoute(
  ({ request }) => request.mode === 'navigate',
  new NetworkFirst({ cacheName: 'pagesworkbox' })
);

//Llamada al API
registerRoute(
  ({ request }) => request.url.includes('https://reqres.in/api/users?page='),
  new NetworkFirst({ cacheName: 'api-responses' })
);
