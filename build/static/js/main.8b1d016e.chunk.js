(this["webpackJsonpstock-data-react"]=this["webpackJsonpstock-data-react"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){var a={"./h8k-logo_2.entry.js":[22,2]};function o(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],o=t[0];return n.e(t[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(a)},o.id=17,e.exports=o},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(6),c=n.n(r),i=(n(13),n(14),n(19),n(2)),s=n.n(i),l=n(7),u=n(3);n(16);function d(){var e=Object(a.useState)(),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(),i=Object(u.a)(c,2),d=i[0],f=i[1],m=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://jsonmock.hackerrank.com/api/stocks?date="+n);case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,console.log("first",a),a.total?f(a.data):f([]),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),f([]);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return o.a.createElement("div",{className:"layout-column align-items-center mt-50"},o.a.createElement("section",{className:"layout-row align-items-center justify-content-center"},o.a.createElement("input",{type:"text",className:"large",placeholder:"5-January-2000",id:"app-input","data-testid":"app-input",onChange:function(e){return r(e.target.value)}}),o.a.createElement("button",{className:"",id:"submit-button","data-testid":"submit-button",onClick:m},"Search")),d?d.length>0?d.map((function(e,t){return o.a.createElement("ul",{className:"mt-50 slide-up-fade-in styled",id:"stockData","data-testid":"stock-data",key:t},o.a.createElement("li",{className:"py-10"},"Open: ",e.open),o.a.createElement("li",{className:"py-10"},"Close: ",e.close),o.a.createElement("li",{className:"py-10"},"High: ",e.high),o.a.createElement("li",{className:"py-10"},"Low: ",e.low))})):o.a.createElement("div",{"data-testid":"no-result"},"No Results Found"):null)}var f=function(){return o.a.createElement("div",null,o.a.createElement("h8k-navbar",{header:"Stock Data"}),o.a.createElement(d,null))},m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function h(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var p=n(4);c.a.render(o.a.createElement(f,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");m?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):h(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):h(e)}))}}(),Object(p.a)().then((function(){Object(p.b)(window)}))}],[[8,1,4]]]);
//# sourceMappingURL=main.8b1d016e.chunk.js.map