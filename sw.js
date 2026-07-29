const C='stable-quizball-v7-clean-logos-snake';
const A=["./","index.html","style.css?v=stable8","app.js?v=stable8","manifest.json","icon.svg","assets/library.json","assets/gaming-background.svg","find-the-flags.html","assets/flags-world.webp","assets/flags-world.json","assets/quotes-sprite.webp","assets/teams-sprite.webp","assets/players-sprite.webp"];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(A)))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==C).map(k=>caches.delete(k)))));self.clients.claim()});
self.addEventListener('fetch',e=>{
  if(e.request.mode==='navigate'){
    e.respondWith(fetch(e.request,{cache:'no-store'}).then(r=>{const copy=r.clone();caches.open(C).then(c=>c.put('index.html',copy));return r}).catch(()=>caches.match('index.html')));
    return;
  }
  e.respondWith(fetch(e.request,{cache:'no-store'}).then(r=>{const copy=r.clone();caches.open(C).then(c=>c.put(e.request,copy));return r}).catch(()=>caches.match(e.request)));
});
