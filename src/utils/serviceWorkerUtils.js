export const subscribeUserToPush = async () => {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      const registration = await navigator.serviceWorker.ready;
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: '<Your VAPID Public Key>',
      });
      console.log('Push Subscription:', subscription);
    } else {
      console.error('Push notifications are not supported in this browser.');
    }
  };
  