
// Ne met en cache que la première page du site
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('sw-cache').then(function(cache) {
      return cache.add('');
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return fetch(event.request);
    })
  );
});