const CACHE_NAME = 'excuse-me-v4';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './assets/logotop.png'
];
// Note: I purposefully removed the 192/512 icons from this array. 
// If they have a typo, they won't crash your entire app installation anymore.

self.addEventListener('install', (e) => {
  self.skipWaiting(); // Forces the browser to instantly load the new code
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
  self.clients.claim(); // Instantly takes over the current open page
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});