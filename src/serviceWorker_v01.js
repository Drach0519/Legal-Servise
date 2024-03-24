
const VERSION ='v01';
// eslint-disable-next-line no-unused-vars
const urlsToCache = ['/'];

// eslint-disable-next-line no-undef
logo=(msg)=>console.log(`${VERSION}:${msg}`)
// eslint-disable-next-line no-restricted-globals
self.addEventListener("install",(event)=>{
    event.waitUntil(
        caches.open(VERSION)
        .then((cache)=>{
            return cache.addAll([
                "./media.css",
            ])
        })
    )
});

// self.addEventListener('active', (event)=>{
//     console.log("sw is active")
//
// });
// eslint-disable-next-line no-restricted-globals
// self.addEventListener('fetch', (event) => {
//     event.respondWith(caches.match(event.request))
// });
// eslint-disable-next-line no-undef
logo("sw file executed")
// import ssss from '../src/image/sond1.jpg'