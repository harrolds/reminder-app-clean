export function registerPWA() {
  if (!import.meta.env.PROD) return;
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js').catch(err => {
        console.warn('[PWA] SW failed:', err);
      });
    });
  }
}
