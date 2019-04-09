var CACHE = "cache-and-update";

// При установке воркера мы должны закешировать часть данных (статику).
self.addEventListener("install", event => {
  console.log(1, "Установлен", event);
  event.waitUntil(precache());
});

// self.addEventListener("activate", event => {
//   console.log(2, "Активирован");
// });

// При событии fetch, мы используем кэш, и только потом обновляем его данным с сервера
self.addEventListener("fetch", function(event) {
  console.log(3, "Происходит запрос на сервер", event.request);
  // Мы используем `respondWith()`, чтобы мгновенно ответить без ожидания ответа с сервера.
  event.respondWith(fromCache(event.request));
  // `waitUntil()` нужен, чтобы предотвратить прекращение работы worker'a до того как кэш обновиться.
  event.waitUntil(update(event.request));
});

function fromCache(request) {
  // console.log("fromCache", request);
  return caches
    .open(CACHE)
    .then(cache =>
      cache
        .match(request)
        .then(matching => matching || Promise.reject("no-match"))
    );
}

function update(request) {
  // console.log("update", request);
  return caches
    .open(CACHE)
    .then(cache =>
      fetch(request).then(response => cache.put(request, response))
    );
}

function precache() {
  return caches.open(CACHE).then(cache => {
    return cache.addAll(["../src/components", "../src/styles"]);
  });
}
