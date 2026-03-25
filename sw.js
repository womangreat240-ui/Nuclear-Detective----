const cacheName = 'nuclear-detective-v1';

// قائمة بجميع ملفات المشروع والصور لضمان العمل بدون إنترنت
const assets = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  
  // الأيقونات والشعارات
  './icon-192.png',
  './logo-main.png',
  
  // الخلفيات العامة والمستوى الأول
  './bg-day.jpg',
  './bg-night.jpg',
  
  // خلفيات الواجهة الثانية (المختبر)
  './lab-bg-day.jpg',
  './lab-bg-night.jpg',
  
  // العناصر والمعدات
  './board-frame.jpg',
  './test-tube-day.png',
  './test-tube-night.png',
  
  // المفاعل والكهرباء
  './reactor-day.png',
  './reactor-night.png',
  './electricity-day.png',
  './electricity-night.png',
  
  // القنبلة والانفجار
  './bomb-day.png',
  './bomb-night.png',
  './explosion-day.png',
  './explosion-night.png'
];

// مرحلة التثبيت: حفظ الملفات في ذاكرة الهاتف
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('جاري حفظ ملفات المحقق النووي للعمل بدون إنترنت...');
      return cache.addAll(assets);
    })
  );
});

// مرحلة الاستدعاء: عرض الملفات من الذاكرة عند انقطاع الشبكة
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
