
const VERSION ='v1';

// eslint-disable-next-line no-undef
logo=(msg)=>console.log(`${VERSION}:${msg}`)
// eslint-disable-next-line no-restricted-globals
self.addEventListener("install",(event)=>{
    event.waitUntil(
        caches.open(VERSION)
        .then((cache)=>{
            return cache.addAll([
                "/index.html",
                "logo192.png",
                "manifest.json",


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