export function register(config) {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
  
        navigator.serviceWorker.register(swUrl).then((registration) => {
          console.log('Service Worker 註冊成功');
        });
      });
    }
  }
  