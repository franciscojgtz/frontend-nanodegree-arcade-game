self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('frogger-static-v1').then(function(cache) {
      return cache.addAll([
        '/',
        'css/style.css',
        'js/app.js',
        'js/engine.js',
        'js/resources.js',
        'images/water-block.png',
        'images/stone-block.png',
        'images/grass-block.png',
        'images/enemy-bug.png',
        'images/char-boy.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(cachedResponse) {
      console.log(cachedResponse);
      return cachedResponse || fetch(event.request);
    })
  );
});