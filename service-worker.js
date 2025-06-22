self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('tjquiz-cache-v1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/quiz-biblique.html',
        '/quiz-biblique-500.html',
        '/quiz-completion.html',
        '/manifest.json',
        '/service-worker.js'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});