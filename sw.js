const CACHE_NAME = 'excuse-me-v5';
const ASSETS = [
  '/ExcuseMe/',
  '/ExcuseMe/index.html',
  '/ExcuseMe/style.css',
  '/ExcuseMe/app.js',
  '/ExcuseMe/manifest.json',
  '/ExcuseMe/assets/logotop.png'
];

self.addEventListener('install', (e) => {
  self.skipWaiting(); 
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Caching essential app files');
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('Clearing old ghost cache');
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim(); 
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});