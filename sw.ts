import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { NetworkFirst } from 'workbox-strategies';

const manualCacheMod = {
  fetchDidFail: async (args: any) => {
    const { originalRequest, request, error, event, state } = args;

    console.log(originalRequest, request, error, event, state);

    caches.open('api-responses').then((cache) => {
      console.log(cache);

      cache.match(request.url).then((object) => {
        console.log(object);
      });

      cache.put(
        request.url,
        new Response(
          JSON.stringify({
            data: [
              {
                avatar: 'https://reqres.in/img/faces/7-image.jpg',
                email: 'michael.lawson@reqres.in',
                first_name: 'Michael',
                id: 7,
                last_name: 'Lawson',
              },
              {
                avatar: 'https://reqres.in/img/faces/8-image.jpg',
                email: 'lindsay.ferguson@reqres.in',
                first_name: 'Lindsay',
                id: 8,
                last_name: 'Ferguson',
              },
            ],
            page: 2,
            per_page: 6,
            support: {
              text: 'To keep ReqRes free, contributions towards server costs are appreciated!',
              url: 'https://reqres.in/#support-heading',
            },
            total: 12,
            total_pages: 2,
          })
        )
      );
    });
  },
};

declare const self: ServiceWorkerGlobalScope;

precacheAndRoute(self.__WB_MANIFEST);

//Rutas de navegación
registerRoute(
  ({ request }) => request.mode === 'navigate',
  new NetworkFirst({ cacheName: 'pagesworkbox' })
);

//Llamada al API
registerRoute(
  ({ request }) => request.url.includes('https://reqres.in/api/users?page=1'),
  new NetworkFirst({
    cacheName: 'api-responses',
  })
);

registerRoute(
  ({ request }) => request.url.includes('https://reqres.in/api/users?page=2'),
  new NetworkFirst({
    cacheName: 'api-responses',
    plugins: [manualCacheMod],
  })
);

registerRoute(
  ({ request }) => request.url.includes('https://reqres.in/api/users/'),
  new NetworkFirst({
    cacheName: 'api-responses',
  })
);
