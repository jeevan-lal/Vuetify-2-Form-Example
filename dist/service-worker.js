if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let o={};const u=s=>i(s,r),c={module:{uri:r},exports:o,require:u};e[r]=Promise.all(l.map((s=>c[s]||u(s)))).then((s=>(n(...s),o)))}}define(["./workbox-db5fc017"],(function(s){"use strict";s.setCacheNameDetails({prefix:"vuetify-2-form-example"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/css/754.d7c2daa1.css",revision:null},{url:"/css/891.0a1845a6.css",revision:null},{url:"/css/966.6df673da.css",revision:null},{url:"/css/chunk-vendors.acd16833.css",revision:null},{url:"/img/512x512.b329b391.png",revision:null},{url:"/img/logo.4d6033c9.svg",revision:null},{url:"/index.html",revision:"00b123d3d942618ac4fe31d689187019"},{url:"/js/313.a108fbee.js",revision:null},{url:"/js/754.4dd5ff8c.js",revision:null},{url:"/js/891.09853c2c.js",revision:null},{url:"/js/966.39994772.js",revision:null},{url:"/js/app.16906aab.js",revision:null},{url:"/js/chunk-vendors.7913ccbf.js",revision:null},{url:"/manifest.json",revision:"19a69273db396c1222ac0ac2e3994627"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
