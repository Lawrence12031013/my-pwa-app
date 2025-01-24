// 快取靜態資源
self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('static-cache-v1').then((cache) => {
        return cache.addAll([
          './offline.html',
          './index.html',
          './static/js/bundle.js',
          './static/css/main.css',
        ]);
      })
    );
  });
  
  // 攔截請求並返回快取內容
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request).catch(() => {
          return caches.match('./offline.html');
        });
      })
    );
  });
  