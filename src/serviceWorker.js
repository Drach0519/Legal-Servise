// serviceWorker.js
export function register() {
    if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/service-worker.js')
        .then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch((error) => {
        console.error('Error during service worker registration:', error);
        });
    }
}
