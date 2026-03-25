const cacheName = 'nuclear-detective-v1';

const assets = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './icon-192.png',
  './logo-main.png',
  './bg-day.jpg',
  './bg-night.jpg',
  './lab-bg-day.jpg',
  './lab-bg-night.jpg',
  './board-frame.jpg',
  './test-tube-day.png',
  './test-tube-night.png',
  './reactor-day.png',
  './reactor-night.png',
  './electricity-day.png',
  './electricity-night.png',
  './bomb-day.png',
  './bomb-night.png',
  './explosion-day.png',
  './explosion-night.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
