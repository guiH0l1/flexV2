/**
 * Service worker
 * @author Guilherme Holi
 */

// Instalação (cache "armazenamento local")
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('static')
            .then((cache) => {
                cache.add('./flexV2/')
                cache.add('./flexV2/index.html')
                cache.add('./flexV2/style.css')
                cache.add('./flexV2/app.js')
                cache.add('./flexV2/img/flex.png')
                cache.add('./flexV2/img/calcflex.png')
                cache.add('./flexV2/img/etanol.png')
                cache.add('./flexV2/img/gasolina.png')
            })
    )
})
// Ativação
self.addEventListener('activate', (event) => {
    console.log("Ativando o service worker...", event)
    return self.clients.claim()
})
// Interceptação (solicitações https servindo em cache quando off-line)
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (response) {
                    return response
                } else {
                    return fetch(event.request)
                }
            })
    )
})