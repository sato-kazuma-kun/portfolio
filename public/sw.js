if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const p=e=>a(e,n),l={module:{uri:n},exports:r,require:p};s[n]=Promise.all(i.map((e=>l[e]||p(e)))).then((e=>(c(...e),r)))}}define(["./workbox-4a6e5f9b"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/MgJ_rjb9bXTGWdZ111uC2/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/MgJ_rjb9bXTGWdZ111uC2/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0e5ce63c-e21b483aa1b5ce03.js",revision:"MgJ_rjb9bXTGWdZ111uC2"},{url:"/_next/static/chunks/190-2df47ab50582fffc.js",revision:"MgJ_rjb9bXTGWdZ111uC2"},{url:"/_next/static/chunks/464-c4332fd71248bef2.js",revision:"MgJ_rjb9bXTGWdZ111uC2"},{url:"/_next/static/chunks/741-3ae849b0ba3a64b8.js",revision:"MgJ_rjb9bXTGWdZ111uC2"},{url:"/_next/static/chunks/962-eba6e255ecd07f41.js",revision:"MgJ_rjb9bXTGWdZ111uC2"},{url:"/_next/static/chunks/app/_not-found/page-7c49abb433119411.js",revision:"MgJ_rjb9bXTGWdZ111uC2"},{url:"/_next/static/chunks/app/layout-3c868712ebcb8bd0.js",revision:"MgJ_rjb9bXTGWdZ111uC2"},{url:"/_next/static/chunks/app/links/page-6b9f4c51ef1e9f30.js",revision:"MgJ_rjb9bXTGWdZ111uC2"},{url:"/_next/static/chunks/app/page-57878e34eba09eef.js",revision:"MgJ_rjb9bXTGWdZ111uC2"},{url:"/_next/static/chunks/fd9d1056-76e23fc4c3041a5f.js",revision:"MgJ_rjb9bXTGWdZ111uC2"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"MgJ_rjb9bXTGWdZ111uC2"},{url:"/_next/static/chunks/main-app-8462e1a3deee652b.js",revision:"MgJ_rjb9bXTGWdZ111uC2"},{url:"/_next/static/chunks/main-eb51dd7a3122b510.js",revision:"MgJ_rjb9bXTGWdZ111uC2"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"MgJ_rjb9bXTGWdZ111uC2"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"MgJ_rjb9bXTGWdZ111uC2"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-f5fe300157bc6971.js",revision:"MgJ_rjb9bXTGWdZ111uC2"},{url:"/_next/static/css/7f3146c12176b988.css",revision:"7f3146c12176b988"},{url:"/assets/Instagram_icon.webp",revision:"1fec7393a7f9d14a3c8537357d1293fe"},{url:"/assets/KiteOne-Regular.ttf",revision:"80910a6fe9b68ab1d24ac4f79657d699"},{url:"/assets/education(1).svg",revision:"aead0c2d755eec4df5426295c9e94a5f"},{url:"/assets/education.png",revision:"de58561a9fd9d5a268639f41b77ab848"},{url:"/assets/experience(1).svg",revision:"d17f1a13ca4452ad17defed106bc9c4b"},{url:"/assets/experience.png",revision:"0c17de6c4d94ba2b74d3396a4f4612fa"},{url:"/assets/facebook(1).png",revision:"4b4525532e50cc69f2adec2c89e7cc0b"},{url:"/assets/facebook.png",revision:"0833b053623deeac53edebf59cfc5429"},{url:"/assets/github-mark-white.png",revision:"1dee40f2668d5c719eafa2c89296f5e7"},{url:"/assets/github-mark.png",revision:"43ce87609eb221d09d4832a9c0e709d0"},{url:"/assets/iMessage.png",revision:"a5adaeefb35e01e9a7286e583147910f"},{url:"/assets/linkedin-icon.png",revision:"38ae24dab3de9eb52ad5299d4e2882fe"},{url:"/assets/twitter.png",revision:"38f5199ce73a0f6588125074afe9a786"},{url:"/assets/user.jpeg",revision:"f525d6ef0055fb91cb9cfe6f36c162c0"},{url:"/assets/user.jpg",revision:"a400e1611a1cafdf2a377973ada7714a"},{url:"/assets/whatsapp-logo.png",revision:"167fc73ac652736812d8690c18116b30"},{url:"/assets/x-brand.svg",revision:"7fe1e961d9bcf443c6ebfb59187a2175"},{url:"/assets/youtube.png",revision:"5c12cd8d14f21a748a223c22f5aa02d4"},{url:"/icons/apple-icon-180.png",revision:"fbffc36cf367ab84b7a920dd1e440b5c"},{url:"/icons/apple-splash-1125-2436.jpg",revision:"52f7523fd3a4fb5102501c0c8b697df6"},{url:"/icons/apple-splash-1136-640.jpg",revision:"5b399ac4c1c0fc90934ac5e104caae32"},{url:"/icons/apple-splash-1170-2532.jpg",revision:"67c9227a92070e3d398de2bb463066b1"},{url:"/icons/apple-splash-1179-2556.jpg",revision:"61e03684bea2a5502899e94212034713"},{url:"/icons/apple-splash-1242-2208.jpg",revision:"ac53a46a0ddf8d98ea5313aeed990123"},{url:"/icons/apple-splash-1242-2688.jpg",revision:"33f252eadf8c6ca583a7713fcd4524d1"},{url:"/icons/apple-splash-1284-2778.jpg",revision:"0a8cc07a5f2191f4a8a0edc4f94bdc14"},{url:"/icons/apple-splash-1290-2796.jpg",revision:"21995e8bb8ce923a1e0e17f7ff91e0fb"},{url:"/icons/apple-splash-1334-750.jpg",revision:"a2a5c7d9683c299b5678b231dbe39153"},{url:"/icons/apple-splash-1488-2266.jpg",revision:"f055553724abf64e70f76c697dd6a016"},{url:"/icons/apple-splash-1536-2048.jpg",revision:"dad47e808eab8586f670bba3d37f9024"},{url:"/icons/apple-splash-1620-2160.jpg",revision:"ab016c20f299f420e3ef91c86ba9ac1b"},{url:"/icons/apple-splash-1640-2360.jpg",revision:"8b0407960dbf5ddd045a1916a6b9d565"},{url:"/icons/apple-splash-1668-2224.jpg",revision:"56612ee0aa0df6abcb98e10021791887"},{url:"/icons/apple-splash-1668-2388.jpg",revision:"b00d2f063c4f600b04e43acb6aca7313"},{url:"/icons/apple-splash-1792-828.jpg",revision:"cbf00c509327c71da40db4d71187e8fb"},{url:"/icons/apple-splash-2048-1536.jpg",revision:"0c53d8e25021c5a4c9504938c40fdd36"},{url:"/icons/apple-splash-2048-2732.jpg",revision:"58f16f6c77a31b003e6434b705460e3e"},{url:"/icons/apple-splash-2160-1620.jpg",revision:"67f1f511a431c2e71742d126d0c50e30"},{url:"/icons/apple-splash-2208-1242.jpg",revision:"cef49e56a694755ef61a1a48aadd8565"},{url:"/icons/apple-splash-2224-1668.jpg",revision:"95f2af6cef871c6db4546b0aff7ad4a0"},{url:"/icons/apple-splash-2266-1488.jpg",revision:"59d21aaf1d24275968ee1dace89f8b0c"},{url:"/icons/apple-splash-2360-1640.jpg",revision:"8c1bcc8d61d2030fce041df1714edc04"},{url:"/icons/apple-splash-2388-1668.jpg",revision:"9d4153d7079107a4af3dfc3485760a89"},{url:"/icons/apple-splash-2436-1125.jpg",revision:"cde7be9af80ac1ce14f3d3f40210d03e"},{url:"/icons/apple-splash-2532-1170.jpg",revision:"bb4d90189e7fb4d0c7bff5190264b64c"},{url:"/icons/apple-splash-2556-1179.jpg",revision:"42eb2e28ab37ae61dfbc215d4b98a8e8"},{url:"/icons/apple-splash-2688-1242.jpg",revision:"e4dd71116ce07b66dbe98de84996093e"},{url:"/icons/apple-splash-2732-2048.jpg",revision:"ed770deef3f1041b5090c64b3a16a158"},{url:"/icons/apple-splash-2778-1284.jpg",revision:"fb193d4a61438b3d495b93092a1a732c"},{url:"/icons/apple-splash-2796-1290.jpg",revision:"168ccfb405c8eac62cfe365fe7e61005"},{url:"/icons/apple-splash-640-1136.jpg",revision:"4ef82e54d92ed942eab6fa8761c64f76"},{url:"/icons/apple-splash-750-1334.jpg",revision:"a8d4989bae702f3fd6f05d72cb7b26c1"},{url:"/icons/apple-splash-828-1792.jpg",revision:"5606068e480b5a9752e1c105d3abc381"},{url:"/icons/manifest-icon-192.maskable.png",revision:"6d41d308a99535643059752c48267065"},{url:"/icons/manifest-icon-512.maskable.png",revision:"2f9681751176d5922b11258bfe91810b"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute((({url:e})=>e.pathname.startsWith("/assets/")||e.pathname.startsWith("/icons/")),new e.CacheFirst({cacheName:"assets-cache",plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:2592e3})]}),"GET")}));
