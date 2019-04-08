// Проверка того, что наш браузер поддерживает Service Worker API.
if ("serviceWorker" in navigator) {
  // Весь код регистрации у нас асинхронный.
  navigator.serviceWorker
    .register("/sw.js")
    .then(reg => console.log("SW registered! index.js", reg))
    .catch(err => console.log("Boom!", err));
}
