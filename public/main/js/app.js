// Проверка и инсталяция WebP в css
function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});;
/*! UIkit 3.6.22 | https://www.getuikit.com | (c) 2014 - 2021 YOOtheme | MIT License */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define("uikit",e):(t="undefined"!=typeof globalThis?globalThis:t||self).UIkit=e()}(this,function(){"use strict";var t=Object.prototype,n=t.hasOwnProperty;function c(t,e){return n.call(t,e)}var e=/\B([A-Z])/g,d=rt(function(t){return t.replace(e,"-$1").toLowerCase()}),i=/-(\w)/g,f=rt(function(t){return t.replace(i,r)}),p=rt(function(t){return t.length?r(0,t.charAt(0))+t.slice(1):""});function r(t,e){return e?e.toUpperCase():""}var o=String.prototype,s=o.startsWith||function(t){return 0===this.lastIndexOf(t,0)};function g(t,e){return s.call(t,e)}var a=o.endsWith||function(t){return this.substr(-t.length)===t};function u(t,e){return a.call(t,e)}var h=Array.prototype,l=function(t,e){return!!~this.indexOf(t,e)},m=o.includes||l,v=h.includes||l;function w(t,e){return t&&(z(t)?m:v).call(t,e)}var b=h.findIndex||function(t){for(var e=arguments,n=0;n<this.length;n++)if(t.call(e[1],this[n],n,this))return n;return-1};function x(t,e){return b.call(t,e)}var y=Array.isArray;function k(t){return"function"==typeof t}function $(t){return null!==t&&"object"==typeof t}var S=t.toString;function I(t){return"[object Object]"===S.call(t)}function E(t){return $(t)&&t===t.window}function T(t){return 9===A(t)}function C(t){return 1<=A(t)}function _(t){return 1===A(t)}function A(t){return!E(t)&&$(t)&&t.nodeType}function M(t){return"boolean"==typeof t}function z(t){return"string"==typeof t}function N(t){return"number"==typeof t}function B(t){return N(t)||z(t)&&!isNaN(t-parseFloat(t))}function D(t){return!(y(t)?t.length:$(t)&&Object.keys(t).length)}function O(t){return void 0===t}function P(t){return M(t)?t:"true"===t||"1"===t||""===t||"false"!==t&&"0"!==t&&t}function H(t){t=Number(t);return!isNaN(t)&&t}function L(t){return parseFloat(t)||0}var j=Array.from||function(t){return h.slice.call(t)};function F(t){return W(t)[0]}function W(t){return t&&(C(t)?[t]:j(t).filter(C))||[]}function V(t){return E(t)?t:(t=F(t))?(T(t)?t:t.ownerDocument).defaultView:window}function R(t){return t?u(t,"ms")?L(t):1e3*L(t):0}function q(t,n){return t===n||$(t)&&$(n)&&Object.keys(t).length===Object.keys(n).length&&G(t,function(t,e){return t===n[e]})}function U(t,e,n){return t.replace(new RegExp(e+"|"+n,"g"),function(t){return t===e?n:e})}var Y=Object.assign||function(t){for(var e=[],n=arguments.length-1;0<n--;)e[n]=arguments[n+1];t=Object(t);for(var i=0;i<e.length;i++){var r=e[i];if(null!==r)for(var o in r)c(r,o)&&(t[o]=r[o])}return t};function X(t){return t[t.length-1]}function G(t,e){for(var n in t)if(!1===e(t[n],n))return!1;return!0}function K(t,n){return t.slice().sort(function(t,e){t=t[n],e=e[n];return(e=void 0===e?0:e)<(t=void 0===t?0:t)?1:t<e?-1:0})}function J(t,e){var n=new Set;return t.filter(function(t){t=t[e];return!n.has(t)&&(n.add(t)||!0)})}function Z(t,e,n){return void 0===e&&(e=0),void 0===n&&(n=1),Math.min(Math.max(H(t)||0,e),n)}function Q(){}function tt(){for(var i=[],t=arguments.length;t--;)i[t]=arguments[t];return[["bottom","top"],["right","left"]].every(function(t){var e=t[0],n=t[1];return 0<Math.min.apply(Math,i.map(function(t){return t[e]}))-Math.max.apply(Math,i.map(function(t){return t[n]}))})}function et(t,e){return t.x<=e.right&&t.x>=e.left&&t.y<=e.bottom&&t.y>=e.top}var nt={ratio:function(t,e,n){var i="width"===e?"height":"width",r={};return r[i]=t[e]?Math.round(n*t[i]/t[e]):t[i],r[e]=n,r},contain:function(n,i){var r=this;return G(n=Y({},n),function(t,e){return n=n[e]>i[e]?r.ratio(n,e,i[e]):n}),n},cover:function(n,i){var r=this;return G(n=this.contain(n,i),function(t,e){return n=n[e]<i[e]?r.ratio(n,e,i[e]):n}),n}};function it(t,e,n,i){void 0===n&&(n=0),void 0===i&&(i=!1);var r=(e=W(e)).length;return t=B(t)?H(t):"next"===t?n+1:"previous"===t?n-1:e.indexOf(F(t)),i?Z(t,0,r-1):(t%=r)<0?t+r:t}function rt(e){var n=Object.create(null);return function(t){return n[t]||(n[t]=e(t))}}function ot(t,e,n){if($(e))for(var i in e)ot(t,i,e[i]);else{if(O(n))return(t=F(t))&&t.getAttribute(e);W(t).forEach(function(t){null===(n=k(n)?n.call(t,ot(t,e)):n)?at(t,e):t.setAttribute(e,n)})}}function st(t,e){return W(t).some(function(t){return t.hasAttribute(e)})}function at(t,e){t=W(t),e.split(" ").forEach(function(e){return t.forEach(function(t){return t.hasAttribute(e)&&t.removeAttribute(e)})})}function ut(t,e){for(var n=0,i=[e,"data-"+e];n<i.length;n++)if(st(t,i[n]))return ot(t,i[n])}var ct="undefined"!=typeof window,ht=ct&&/msie|trident/i.test(window.navigator.userAgent),lt=ct&&"rtl"===ot(document.documentElement,"dir"),dt=ct&&"ontouchstart"in window,ft=ct&&window.PointerEvent,pt=ct&&(dt||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints),mt=ft?"pointerdown":dt?"touchstart":"mousedown",gt=ft?"pointermove":dt?"touchmove":"mousemove",vt=ft?"pointerup":dt?"touchend":"mouseup",wt=ft?"pointerenter":dt?"":"mouseenter",bt=ft?"pointerleave":dt?"":"mouseleave",xt=ft?"pointercancel":"touchcancel",yt={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,menuitem:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};function kt(t){return W(t).some(function(t){return yt[t.tagName.toLowerCase()]})}function $t(t){return W(t).some(function(t){return t.offsetWidth||t.offsetHeight||t.getClientRects().length})}var St="input,select,textarea,button";function It(t){return W(t).some(function(t){return Mt(t,St)})}function Et(t){return It(t)||Mt(t,"a[href],button")||st(t,"tabindex")}function Tt(t){return(t=F(t))&&_(t.parentNode)&&t.parentNode}function Ct(t,e){return W(t).filter(function(t){return Mt(t,e)})}var _t=ct?Element.prototype:{},At=_t.matches||_t.webkitMatchesSelector||_t.msMatchesSelector||Q;function Mt(t,e){return W(t).some(function(t){return At.call(t,e)})}var zt=_t.closest||function(t){var e=this;do{if(Mt(e,t))return e}while(e=Tt(e))};function Nt(t,e){return g(e,">")&&(e=e.slice(1)),_(t)?zt.call(t,e):W(t).map(function(t){return Nt(t,e)}).filter(Boolean)}function Bt(t,e){return z(e)?Mt(t,e)||!!Nt(t,e):t===e||(T(e)?e.documentElement:F(e)).contains(F(t))}function Dt(t,e){for(var n=[];t=Tt(t);)e&&!Mt(t,e)||n.push(t);return n}function Ot(t,e){t=(t=F(t))?W(t.children):[];return e?Ct(t,e):t}function Pt(t,e){return e?W(t).indexOf(F(e)):Ot(Tt(t)).indexOf(t)}function Ht(t,e){return F(t)||Ft(t,jt(t,e))}function Lt(t,e){var n=W(t);return n.length&&n||Wt(t,jt(t,e))}function jt(t,e){return void 0===e&&(e=document),z(t)&&Ut(t)||T(e)?e:e.ownerDocument}function Ft(t,e){return F(Vt(t,e,"querySelector"))}function Wt(t,e){return W(Vt(t,e,"querySelectorAll"))}function Vt(t,o,e){if(void 0===o&&(o=document),!t||!z(t))return null;t=t.replace(qt,"$1 *"),Ut(t)&&(t=Xt(t).map(function(t,e){var n,i,r=o;return"!"===t[0]&&(i=t.substr(1).trim().split(" "),r=Nt(Tt(o),i[0]),t=i.slice(1).join(" ").trim()),"-"===t[0]&&(n=t.substr(1).trim().split(" "),r=Mt(i=(r||o).previousElementSibling,t.substr(1))?i:null,t=n.slice(1).join(" ")),r?function(t){var e=[];for(;t.parentNode;){if(t.id){e.unshift("#"+Kt(t.id));break}var n=t.tagName;"HTML"!==n&&(n+=":nth-child("+(Pt(t)+1)+")"),e.unshift(n),t=t.parentNode}return e.join(" > ")}(r)+" "+t:null}).filter(Boolean).join(","),o=document);try{return o[e](t)}catch(t){return null}}var Rt=/(^|[^\\],)\s*[!>+~-]/,qt=/([!>+~-])(?=\s+[!>+~-]|\s*$)/g,Ut=rt(function(t){return t.match(Rt)}),Yt=/.*?[^\\](?:,|$)/g,Xt=rt(function(t){return t.match(Yt).map(function(t){return t.replace(/,$/,"").trim()})});var Gt=ct&&window.CSS&&CSS.escape||function(t){return t.replace(/([^\x7f-\uFFFF\w-])/g,function(t){return"\\"+t})};function Kt(t){return z(t)?Gt.call(null,t):""}function Jt(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];var n,i,r=ne(t),o=r[0],s=r[1],a=r[2],u=r[3],c=r[4],o=se(o);return 1<u.length&&(n=u,u=function(t){return y(t.detail)?n.apply(void 0,[t].concat(t.detail)):n(t)}),c&&c.self&&(i=u,u=function(t){if(t.target===t.currentTarget||t.target===t.current)return i.call(null,t)}),a&&(u=function(n,i){var r=this;return function(e){var t=">"===n[0]?Wt(n,e.currentTarget).reverse().filter(function(t){return Bt(e.target,t)})[0]:Nt(e.target,n);t&&(e.current=t,i.call(r,e))}}(a,u)),c=ie(c),s.split(" ").forEach(function(e){return o.forEach(function(t){return t.addEventListener(e,u,c)})}),function(){return Zt(o,s,u,c)}}function Zt(t,e,n,i){i=ie(i=void 0===i?!1:i),t=se(t),e.split(" ").forEach(function(e){return t.forEach(function(t){return t.removeEventListener(e,n,i)})})}function Qt(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];var n=ne(t),i=n[0],r=n[1],o=n[2],s=n[3],a=n[4],u=n[5],c=Jt(i,r,o,function(t){var e=!u||u(t);e&&(c(),s(t,e))},a);return c}function te(t,n,i){return se(t).reduce(function(t,e){return t&&e.dispatchEvent(ee(n,!0,!0,i))},!0)}function ee(t,e,n,i){var r;return void 0===e&&(e=!0),void 0===n&&(n=!1),z(t)&&((r=document.createEvent("CustomEvent")).initCustomEvent(t,e,n,i),t=r),t}function ne(t){return k(t[2])&&t.splice(2,0,!1),t}function ie(t){return t&&ht&&!M(t)?!!t.capture:t}function re(t){return t&&"addEventListener"in t}function oe(t){return re(t)?t:F(t)}function se(t){return y(t)?t.map(oe).filter(Boolean):z(t)?Wt(t):re(t)?[t]:W(t)}function ae(t){return"touch"===t.pointerType||!!t.touches}function ue(t){var e=t.touches,n=t.changedTouches,t=e&&e[0]||n&&n[0]||t;return{x:t.clientX,y:t.clientY}}function ce(){var n=this;this.promise=new he(function(t,e){n.reject=e,n.resolve=t})}var he=ct&&window.Promise||fe,le=2,de=ct&&window.setImmediate||setTimeout;function fe(t){this.state=le,this.value=void 0,this.deferred=[];var e=this;try{t(function(t){e.resolve(t)},function(t){e.reject(t)})}catch(t){e.reject(t)}}fe.reject=function(n){return new fe(function(t,e){e(n)})},fe.resolve=function(n){return new fe(function(t,e){t(n)})},fe.all=function(o){return new fe(function(n,t){var i=[],r=0;0===o.length&&n(i);for(var e=0;e<o.length;e+=1)fe.resolve(o[e]).then(function(e){return function(t){i[e]=t,(r+=1)===o.length&&n(i)}}(e),t)})},fe.race=function(i){return new fe(function(t,e){for(var n=0;n<i.length;n+=1)fe.resolve(i[n]).then(t,e)})};var pe=fe.prototype;function me(t,e){var n=Y({data:null,method:"GET",headers:{},xhr:new XMLHttpRequest,beforeSend:Q,responseType:""},e);return he.resolve().then(function(){return n.beforeSend(n)}).then(function(){return o=t,s=n,new he(function(t,e){var n,i,r=s.xhr;for(n in s)if(n in r)try{r[n]=s[n]}catch(t){}for(i in r.open(s.method.toUpperCase(),o),s.headers)r.setRequestHeader(i,s.headers[i]);Jt(r,"load",function(){0===r.status||200<=r.status&&r.status<300||304===r.status?("json"===s.responseType&&z(r.response)&&(r=Y(function(t){var e,n={};for(e in t)n[e]=t[e];return n}(r),{response:JSON.parse(r.response)})),t(r)):e(Y(Error(r.statusText),{xhr:r,status:r.status}))}),Jt(r,"error",function(){return e(Y(Error("Network Error"),{xhr:r}))}),Jt(r,"timeout",function(){return e(Y(Error("Network Timeout"),{xhr:r}))}),r.send(s.data)});var o,s})}function ge(i,r,o){return new he(function(t,e){var n=new Image;n.onerror=function(t){return e(t)},n.onload=function(){return t(n)},o&&(n.sizes=o),r&&(n.srcset=r),n.src=i})}function ve(t){return(t=Me(t)).innerHTML="",t}function we(t,e){return t=Me(t),O(e)?t.innerHTML:be(t.hasChildNodes()?ve(t):t,e)}function be(e,t){return e=Me(e),ke(t,function(t){return e.appendChild(t)})}function xe(e,t){return e=Me(e),ke(t,function(t){return e.parentNode.insertBefore(t,e)})}function ye(e,t){return e=Me(e),ke(t,function(t){return e.nextSibling?xe(e.nextSibling,t):be(e.parentNode,t)})}function ke(t,e){return(t=z(t)?_e(t):t)?"length"in t?W(t).map(e):e(t):null}function $e(t){W(t).forEach(function(t){return t.parentNode&&t.parentNode.removeChild(t)})}function Se(t,e){for(e=F(xe(t,e));e.firstChild;)e=e.firstChild;return be(e,t),e}function Ie(t,e){return W(W(t).map(function(t){return t.hasChildNodes?Se(W(t.childNodes),e):be(t,e)}))}function Ee(t){W(t).map(Tt).filter(function(t,e,n){return n.indexOf(t)===e}).forEach(function(t){xe(t,t.childNodes),$e(t)})}pe.resolve=function(t){var e=this;if(e.state===le){if(t===e)throw new TypeError("Promise settled with itself.");var n=!1;try{var i=t&&t.then;if(null!==t&&$(t)&&k(i))return void i.call(t,function(t){n||e.resolve(t),n=!0},function(t){n||e.reject(t),n=!0})}catch(t){return void(n||e.reject(t))}e.state=0,e.value=t,e.notify()}},pe.reject=function(t){var e=this;if(e.state===le){if(t===e)throw new TypeError("Promise settled with itself.");e.state=1,e.value=t,e.notify()}},pe.notify=function(){var r=this;de(function(){if(r.state!==le)for(;r.deferred.length;){var e=r.deferred.shift(),t=e[0],n=e[1],i=e[2],e=e[3];try{0===r.state?k(t)?i(t.call(void 0,r.value)):i(r.value):1===r.state&&(k(n)?i(n.call(void 0,r.value)):e(r.value))}catch(t){e(t)}}})},pe.then=function(n,i){var r=this;return new fe(function(t,e){r.deferred.push([n,i,t,e]),r.notify()})},pe.catch=function(t){return this.then(void 0,t)};var Te=/^\s*<(\w+|!)[^>]*>/,Ce=/^<(\w+)\s*\/?>(?:<\/\1>)?$/;function _e(t){var e=Ce.exec(t);if(e)return document.createElement(e[1]);e=document.createElement("div");return Te.test(t)?e.insertAdjacentHTML("beforeend",t.trim()):e.textContent=t,1<e.childNodes.length?W(e.childNodes):e.firstChild}function Ae(t,e){if(_(t))for(e(t),t=t.firstElementChild;t;){var n=t.nextElementSibling;Ae(t,e),t=n}}function Me(t,e){return z(t)?Ne(t)?F(_e(t)):Ft(t,e):F(t)}function ze(t,e){return z(t)?Ne(t)?W(_e(t)):Wt(t,e):W(t)}function Ne(t){return"<"===t[0]||t.match(/^\s*</)}function Be(t){for(var e=[],n=arguments.length-1;0<n--;)e[n]=arguments[n+1];je(t,e,"add")}function De(t){for(var e=[],n=arguments.length-1;0<n--;)e[n]=arguments[n+1];je(t,e,"remove")}function Oe(t,e){ot(t,"class",function(t){return(t||"").replace(new RegExp("\\b"+e+"\\b","g"),"")})}function Pe(t){for(var e=[],n=arguments.length-1;0<n--;)e[n]=arguments[n+1];e[0]&&De(t,e[0]),e[1]&&Be(t,e[1])}function He(t,e){e=Fe(e)[0];for(var n=W(t),i=0;i<n.length;i++)if(e&&n[i].classList.contains(e))return!0;return!1}function Le(t,e,n){e=Fe(e);for(var i=W(t),r=0;r<i.length;r++)for(var o=i[r].classList,s=0;s<e.length;s++)O(n)?o.toggle(e[s]):We.Force?o.toggle(e[s],!!n):o[n?"add":"remove"](e[s])}function je(t,n,i){var r;n=n.reduce(function(t,e){return t.concat(Fe(e))},[]);for(var o=W(t),e=0;e<o.length;e++)!function(e){We.Multiple?(r=o[e].classList)[i].apply(r,n):n.forEach(function(t){return o[e].classList[i](t)})}(e)}function Fe(t){return String(t).split(/\s|,/).filter(Boolean)}var We={get Multiple(){return this.get("Multiple")},get Force(){return this.get("Force")},get:function(t){var e=document.createElement("_").classList;return e.add("a","b"),e.toggle("c",!1),(We={Multiple:e.contains("b"),Force:!e.contains("c")})[t]}},Ve={"animation-iteration-count":!0,"column-count":!0,"fill-opacity":!0,"flex-grow":!0,"flex-shrink":!0,"font-weight":!0,"line-height":!0,opacity:!0,order:!0,orphans:!0,"stroke-dasharray":!0,"stroke-dashoffset":!0,widows:!0,"z-index":!0,zoom:!0};function Re(t,e,r,o){return void 0===o&&(o=""),W(t).map(function(n){if(z(e)){if(e=Ge(e),O(r))return Ue(n,e);r||N(r)?n.style.setProperty(e,B(r)&&!Ve[e]?r+"px":r,o):n.style.removeProperty(e)}else{if(y(e)){var i=qe(n);return e.reduce(function(t,e){return t[e]=i[Ge(e)],t},{})}$(e)&&(o=r,G(e,function(t,e){return Re(n,e,t,o)}))}return n})[0]}function qe(t,e){return V(t).getComputedStyle(t,e)}function Ue(t,e,n){return qe(t,n)[e]}var Ye=rt(function(t){var e=be(document.documentElement,document.createElement("div"));return Be(e,"uk-"+t),t=Ue(e,"content",":before").replace(/^["'](.*)["']$/,"$1"),$e(e),t});function Xe(t){return ht?Ye(t):qe(document.documentElement).getPropertyValue("--uk-"+t)}var Ge=rt(function(t){t=d(t);var e=document.documentElement.style;if(t in e)return t;var n,i=Ke.length;for(;i--;)if((n="-"+Ke[i]+"-"+t)in e)return n}),Ke=["webkit","moz","ms"];function Je(t,s,a,u){return void 0===a&&(a=400),void 0===u&&(u="linear"),he.all(W(t).map(function(o){return new he(function(e,n){for(var t in s){var i=Re(o,t);""===i&&Re(o,t,i)}var r=setTimeout(function(){return te(o,"transitionend")},a);Qt(o,"transitionend transitioncanceled",function(t){t=t.type;clearTimeout(r),De(o,"uk-transition"),Re(o,{transitionProperty:"",transitionDuration:"",transitionTimingFunction:""}),"transitioncanceled"===t?n():e(o)},{self:!0}),Be(o,"uk-transition"),Re(o,Y({transitionProperty:Object.keys(s).map(Ge).join(","),transitionDuration:a+"ms",transitionTimingFunction:u},s))})}))}var Ze={start:Je,stop:function(t){return te(t,"transitionend"),he.resolve()},cancel:function(t){te(t,"transitioncanceled")},inProgress:function(t){return He(t,"uk-transition")}},Qe="uk-animation-";function tn(t,o,s,a,u){return void 0===s&&(s=200),he.all(W(t).map(function(r){return new he(function(e,n){te(r,"animationcanceled");var i=setTimeout(function(){return te(r,"animationend")},s);Qt(r,"animationend animationcanceled",function(t){t=t.type;clearTimeout(i),"animationcanceled"===t?n():e(r),Re(r,"animationDuration",""),Oe(r,Qe+"\\S*")},{self:!0}),Re(r,"animationDuration",s+"ms"),Be(r,o,Qe+(u?"leave":"enter")),g(o,Qe)&&(a&&Be(r,"uk-transform-origin-"+a),u&&Be(r,Qe+"reverse"))})}))}var en=new RegExp(Qe+"(enter|leave)"),nn={in:tn,out:function(t,e,n,i){return tn(t,e,n,i,!0)},inProgress:function(t){return en.test(ot(t,"class"))},cancel:function(t){te(t,"animationcanceled")}},rn={width:["left","right"],height:["top","bottom"]};function on(t){t=_(t)?F(t).getBoundingClientRect():{height:cn(t),width:hn(t),top:0,left:0};return{height:t.height,width:t.width,top:t.top,left:t.left,bottom:t.top+t.height,right:t.left+t.width}}function sn(n,i){var t,r=on(n),e=V(n),o={height:e.pageYOffset,width:e.pageXOffset};for(t in rn)for(var s in rn[t])r[rn[t][s]]+=o[t];if(!i)return r;var a=Re(n,"position");G(Re(n,["left","top"]),function(t,e){return Re(n,e,i[e]-r[e]+L("absolute"===a&&"auto"===t?an(n)[e]:t))})}function an(t){for(var e=sn(t),n=e.top,i=e.left,r=F(t),e=r.ownerDocument,o=e.body,s=e.documentElement,a=r.offsetParent||s;a&&(a===o||a===s)&&"static"===Re(a,"position");)a=a.parentNode;return _(a)&&(n-=(r=sn(a)).top+L(Re(a,"borderTopWidth")),i-=r.left+L(Re(a,"borderLeftWidth"))),{top:n-L(Re(t,"marginTop")),left:i-L(Re(t,"marginLeft"))}}function un(t){var e=[0,0];t=F(t);do{if(e[0]+=t.offsetTop,e[1]+=t.offsetLeft,"fixed"===Re(t,"position")){var n=V(t);return e[0]+=n.pageYOffset,e[1]+=n.pageXOffset,e}}while(t=t.offsetParent);return e}var cn=ln("height"),hn=ln("width");function ln(i){var r=p(i);return function(t,e){if(O(e)){if(E(t))return t["inner"+r];if(T(t)){var n=t.documentElement;return Math.max(n["offset"+r],n["scroll"+r])}return(e="auto"===(e=Re(t=F(t),i))?t["offset"+r]:L(e)||0)-dn(t,i)}return Re(t,i,e||0===e?+e+dn(t,i)+"px":"")}}function dn(n,t,e){return void 0===e&&(e="border-box"),Re(n,"boxSizing")===e?rn[t].map(p).reduce(function(t,e){return t+L(Re(n,"padding"+e))+L(Re(n,"border"+e+"Width"))},0):0}function fn(t){for(var e in rn)for(var n in rn[e])if(rn[e][n]===t)return rn[e][1-n];return t}function pn(t,e,n){return void 0===e&&(e="width"),void 0===n&&(n=window),B(t)?+t:u(t,"vh")?mn(cn(V(n)),t):u(t,"vw")?mn(hn(V(n)),t):u(t,"%")?mn(on(n)[e],t):L(t)}function mn(t,e){return t*L(e)/100}var gn={reads:[],writes:[],read:function(t){return this.reads.push(t),bn(),t},write:function(t){return this.writes.push(t),bn(),t},clear:function(t){yn(this.reads,t),yn(this.writes,t)},flush:vn};function vn(t){void 0===t&&(t=1),xn(gn.reads),xn(gn.writes.splice(0)),gn.scheduled=!1,(gn.reads.length||gn.writes.length)&&bn(t+1)}var wn=4;function bn(t){gn.scheduled||(gn.scheduled=!0,t&&t<wn?he.resolve().then(function(){return vn(t)}):requestAnimationFrame(function(){return vn()}))}function xn(t){for(var e;e=t.shift();)try{e()}catch(t){console.error(t)}}function yn(t,e){e=t.indexOf(e);return~e&&t.splice(e,1)}function kn(){}kn.prototype={positions:[],init:function(){var e,t=this;this.positions=[],this.unbind=Jt(document,"mousemove",function(t){return e=ue(t)}),this.interval=setInterval(function(){e&&(t.positions.push(e),5<t.positions.length&&t.positions.shift())},50)},cancel:function(){this.unbind&&this.unbind(),this.interval&&clearInterval(this.interval)},movesTo:function(t){if(this.positions.length<2)return!1;var e=t.getBoundingClientRect(),n=e.left,i=e.right,r=e.top,o=e.bottom,s=this.positions[0],t=X(this.positions),a=[s,t];return!et(t,e)&&[[{x:n,y:r},{x:i,y:o}],[{x:n,y:o},{x:i,y:r}]].some(function(t){t=function(t,e){var n=t[0],i=n.x,r=n.y,o=t[1],s=o.x,a=o.y,u=e[0],n=u.x,t=u.y,o=e[1],u=o.x,e=o.y,o=(e-t)*(s-i)-(u-n)*(a-r);if(0==o)return!1;o=((u-n)*(r-t)-(e-t)*(i-n))/o;if(o<0)return!1;return{x:i+o*(s-i),y:r+o*(a-r)}}(a,t);return t&&et(t,e)})}};var $n={};function Sn(t,e,n){return $n.computed(k(t)?t.call(n,n):t,k(e)?e.call(n,n):e)}function In(t,e){return t=t&&!y(t)?[t]:t,e?t?t.concat(e):y(e)?e:[e]:t}function En(e,n,i){var t,r,o={};if((n=k(n)?n.options:n).extends&&(e=En(e,n.extends,i)),n.mixins)for(var s=0,a=n.mixins.length;s<a;s++)e=En(e,n.mixins[s],i);for(t in e)u(t);for(r in n)c(e,r)||u(r);function u(t){o[t]=($n[t]||function(t,e){return O(e)?t:e})(e[t],n[t],i)}return o}function Tn(t,e){var n;void 0===e&&(e=[]);try{return t?g(t,"{")?JSON.parse(t):e.length&&!w(t,":")?((n={})[e[0]]=t,n):t.split(";").reduce(function(t,e){var n=e.split(/:(.*)/),e=n[0],n=n[1];return e&&!O(n)&&(t[e.trim()]=n.trim()),t},{}):{}}catch(t){return{}}}function Cn(t){if(zn(t)&&Dn(t,{func:"playVideo",method:"play"}),Mn(t))try{t.play().catch(Q)}catch(t){}}function _n(t){zn(t)&&Dn(t,{func:"pauseVideo",method:"pause"}),Mn(t)&&t.pause()}function An(t){zn(t)&&Dn(t,{func:"mute",method:"setVolume",value:0}),Mn(t)&&(t.muted=!0)}function Mn(t){return t&&"VIDEO"===t.tagName}function zn(t){return t&&"IFRAME"===t.tagName&&(Nn(t)||Bn(t))}function Nn(t){return!!t.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/)}function Bn(t){return!!t.src.match(/vimeo\.com\/video\/.*/)}function Dn(t,e){!function(e){if(e[Pn])return e[Pn];var n,i=Nn(e),r=Bn(e),o=++Hn;return e[Pn]=new he(function(t){i&&Qt(e,"load",function(){function t(){return On(e,{event:"listening",id:o})}n=setInterval(t,100),t()}),Qt(window,"message",t,!1,function(t){t=t.data;try{return(t=JSON.parse(t))&&(i&&t.id===o&&"onReady"===t.event||r&&Number(t.player_id)===o)}catch(t){}}),e.src=e.src+(w(e.src,"?")?"&":"?")+(i?"enablejsapi=1":"api=1&player_id="+o)}).then(function(){return clearInterval(n)})}(t).then(function(){return On(t,e)})}function On(t,e){try{t.contentWindow.postMessage(JSON.stringify(Y({event:"command"},e)),"*")}catch(t){}}$n.events=$n.created=$n.beforeConnect=$n.connected=$n.beforeDisconnect=$n.disconnected=$n.destroy=In,$n.args=function(t,e){return!1!==e&&In(e||t)},$n.update=function(t,e){return K(In(t,k(e)?{read:e}:e),"order")},$n.props=function(t,e){return y(e)&&(e=e.reduce(function(t,e){return t[e]=String,t},{})),$n.methods(t,e)},$n.computed=$n.methods=function(t,e){return e?t?Y({},t,e):e:t},$n.data=function(e,n,t){return t?Sn(e,n,t):n?e?function(t){return Sn(e,n,t)}:n:e};var Pn="_ukPlayer",Hn=0;function Ln(t,r,o){return void 0===r&&(r=0),void 0===o&&(o=0),!!$t(t)&&tt.apply(void 0,Vn(t).map(function(t){var e=sn(Rn(t)),n=e.top,i=e.left,t=e.bottom,e=e.right;return{top:n-r,left:i-o,bottom:t+r,right:e+o}}).concat(sn(t)))}function jn(t,e){(t=(E(t)||T(t)?Un:F)(t)).scrollTop=e}function Fn(s,t){var a=(t=void 0===t?{}:t).offset;if(void 0===a&&(a=0),$t(s)){var u=Vn(s),c=0;return u.reduce(function(t,e,n){var i=e.scrollTop,r=e.scrollHeight-qn(e),o=Math.ceil(sn(u[n-1]||s).top-sn(Rn(e)).top-a+c+i);return r<o?(c=o-r,o=r):c=0,function(){return s=e,a=o-i,new he(function(n){var t,i=s.scrollTop,r=(t=Math.abs(a),40*Math.pow(t,.375)),o=Date.now();!function t(){var e,e=(e=Z((Date.now()-o)/r),.5*(1-Math.cos(Math.PI*e)));jn(s,i+a*e),1!=e?requestAnimationFrame(t):n()}()}).then(t);var s,a}},function(){return he.resolve()})()}}function Wn(t,e){if(void 0===e&&(e=0),!$t(t))return 0;var n=Vn(t,/auto|scroll/,!0)[0],i=n.scrollHeight,r=n.scrollTop,o=qn(n),s=un(t)[0]-r-un(n)[0],n=Math.min(o,s+r);return Z(-1*(s-n)/Math.min(t.offsetHeight+e+n,i-(s+r),i-o))}function Vn(t,e,n){void 0===e&&(e=/auto|scroll|hidden/),void 0===n&&(n=!1);var i=Un(t),r=Dt(t).reverse(),t=x(r=r.slice(r.indexOf(i)+1),function(t){return"fixed"===Re(t,"position")});return~t&&(r=r.slice(t)),[i].concat(r.filter(function(t){return e.test(Re(t,"overflow"))&&(!n||t.scrollHeight>qn(t))})).reverse()}function Rn(t){return t===Un(t)?window:t}function qn(t){return(t===Un(t)?document.documentElement:t).clientHeight}function Un(t){t=V(t).document;return t.scrollingElement||t.documentElement}var Yn={width:["x","left","right"],height:["y","top","bottom"]};function Xn(t,e,h,l,d,n,i,r){h=Kn(h),l=Kn(l);var f={element:h,target:l};if(!t||!e)return f;var o,p=sn(t),m=sn(e),g=m;return Gn(g,h,p,-1),Gn(g,l,m,1),d=Jn(d,p.width,p.height),n=Jn(n,m.width,m.height),d.x+=n.x,d.y+=n.y,g.left+=d.x,g.top+=d.y,i&&(o=Vn(t).map(Rn),r&&!w(o,r)&&o.unshift(r),o=o.map(function(t){return sn(t)}),G(Yn,function(t,s){var a=t[0],u=t[1],c=t[2];!0!==i&&!w(i,a)||o.some(function(n){var t=h[a]===u?-p[s]:h[a]===c?p[s]:0,e=l[a]===u?m[s]:l[a]===c?-m[s]:0;if(g[u]<n[u]||g[u]+p[s]>n[c]){var i=p[s]/2,r="center"===l[a]?-m[s]/2:0;return"center"===h[a]&&(o(i,r)||o(-i,-r))||o(t,e)}function o(e,t){t=L((g[u]+e+t-2*d[a]).toFixed(4));if(t>=n[u]&&t+p[s]<=n[c])return g[u]=t,["element","target"].forEach(function(t){f[t][a]=e?f[t][a]===Yn[s][1]?Yn[s][2]:Yn[s][1]:f[t][a]}),!0}})})),sn(t,g),f}function Gn(r,o,s,a){G(Yn,function(t,e){var n=t[0],i=t[1],t=t[2];o[n]===t?r[i]+=s[e]*a:"center"===o[n]&&(r[i]+=s[e]*a/2)})}function Kn(t){var e=/left|center|right/,n=/top|center|bottom/;return 1===(t=(t||"").split(" ")).length&&(t=e.test(t[0])?t.concat("center"):n.test(t[0])?["center"].concat(t):["center","center"]),{x:e.test(t[0])?t[0]:"center",y:n.test(t[1])?t[1]:"center"}}function Jn(t,e,n){var i=(t||"").split(" "),t=i[0],i=i[1];return{x:t?L(t)*(u(t,"%")?e/100:1):0,y:i?L(i)*(u(i,"%")?n/100:1):0}}var Zn=Object.freeze({__proto__:null,ajax:me,getImage:ge,transition:Je,Transition:Ze,animate:tn,Animation:nn,attr:ot,hasAttr:st,removeAttr:at,data:ut,addClass:Be,removeClass:De,removeClasses:Oe,replaceClass:Pe,hasClass:He,toggleClass:Le,dimensions:on,offset:sn,position:an,offsetPosition:un,height:cn,width:hn,boxModelAdjust:dn,flipPosition:fn,toPx:pn,ready:function(t){var e;"loading"===document.readyState?e=Jt(document,"DOMContentLoaded",function(){e(),t()}):t()},empty:ve,html:we,prepend:function(e,t){return(e=Me(e)).hasChildNodes()?ke(t,function(t){return e.insertBefore(t,e.firstChild)}):be(e,t)},append:be,before:xe,after:ye,remove:$e,wrapAll:Se,wrapInner:Ie,unwrap:Ee,fragment:_e,apply:Ae,$:Me,$$:ze,inBrowser:ct,isIE:ht,isRtl:lt,hasTouch:pt,pointerDown:mt,pointerMove:gt,pointerUp:vt,pointerEnter:wt,pointerLeave:bt,pointerCancel:xt,on:Jt,off:Zt,once:Qt,trigger:te,createEvent:ee,toEventTargets:se,isTouch:ae,getEventPos:ue,fastdom:gn,isVoidElement:kt,isVisible:$t,selInput:St,isInput:It,isFocusable:Et,parent:Tt,filter:Ct,matches:Mt,closest:Nt,within:Bt,parents:Dt,children:Ot,index:Pt,hasOwn:c,hyphenate:d,camelize:f,ucfirst:p,startsWith:g,endsWith:u,includes:w,findIndex:x,isArray:y,isFunction:k,isObject:$,isPlainObject:I,isWindow:E,isDocument:T,isNode:C,isElement:_,isBoolean:M,isString:z,isNumber:N,isNumeric:B,isEmpty:D,isUndefined:O,toBoolean:P,toNumber:H,toFloat:L,toArray:j,toNode:F,toNodes:W,toWindow:V,toMs:R,isEqual:q,swap:U,assign:Y,last:X,each:G,sortBy:K,uniqueBy:J,clamp:Z,noop:Q,intersectRect:tt,pointInRect:et,Dimensions:nt,getIndex:it,memoize:rt,MouseTracker:kn,mergeOptions:En,parseOptions:Tn,play:Cn,pause:_n,mute:An,positionAt:Xn,Promise:he,Deferred:ce,query:Ht,queryAll:Lt,find:Ft,findAll:Wt,escape:Kt,css:Re,getCssVar:Xe,propName:Ge,isInView:Ln,scrollTop:jn,scrollIntoView:Fn,scrolledOver:Wn,scrollParents:Vn,getViewport:Rn,getViewportClientHeight:qn});function Qn(t){this._init(t)}var ti,ei,ni,ii,ri,oi,si,ai,ui,ci=rt(function(t){return!(!g(t,"uk-")&&!g(t,"data-uk-"))&&f(t.replace("data-uk-","").replace("uk-",""))});function hi(t,e){if(t)for(var n in t)t[n]._connected&&t[n]._callUpdate(e)}function li(t,e){var n={},i=t.args;void 0===i&&(i=[]);var r,o=t.props,s=t.el;if(!(o=void 0===o?{}:o))return n;for(r in o){var a=d(r),u=ut(s,a);O(u)||(u=o[r]===Boolean&&""===u||fi(o[r],u),("target"!==a||u&&!g(u,"_"))&&(n[r]=u))}var c,h=Tn(ut(s,e),i);for(c in h){var l=f(c);void 0!==o[l]&&(n[l]=fi(o[l],h[c]))}return n}function di(e,n,i){var t=(n=!I(n)?{name:i,handler:n}:n).name,r=n.el,o=n.handler,s=n.capture,a=n.passive,u=n.delegate,c=n.filter,h=n.self,r=k(r)?r.call(e):r||e.$el;y(r)?r.forEach(function(t){return di(e,Y({},n,{el:t}),i)}):!r||c&&!c.call(e)||e._events.push(Jt(r,t,u?z(u)?u:u.call(e):null,z(o)?e[o]:o.bind(e),{passive:a,capture:s,self:h}))}function fi(t,e){return t===Boolean?P(e):t===Number?H(e):"list"===t?y(n=e)?n:z(n)?n.split(/,(?![^(]*\))/).map(function(t){return B(t)?H(t):P(t.trim())}):[n]:t?t(e):e;var n}Qn.util=Zn,Qn.data="__uikit__",Qn.prefix="uk-",Qn.options={},Qn.version="3.6.22",ni=(ti=Qn).data,ti.use=function(t){if(!t.installed)return t.call(null,this),t.installed=!0,this},ti.mixin=function(t,e){(e=(z(e)?ti.component(e):e)||this).options=En(e.options,t)},ti.extend=function(t){t=t||{};function e(t){this._init(t)}return((e.prototype=Object.create(this.prototype)).constructor=e).options=En(this.options,t),e.super=this,e.extend=this.extend,e},ti.update=function(t,e){Dt(t=t?F(t):document.body).reverse().forEach(function(t){return hi(t[ni],e)}),Ae(t,function(t){return hi(t[ni],e)})},Object.defineProperty(ti,"container",{get:function(){return ei||document.body},set:function(t){ei=Me(t)}}),(ii=Qn).prototype._callHook=function(t){var e=this,t=this.$options[t];t&&t.forEach(function(t){return t.call(e)})},ii.prototype._callConnected=function(){this._connected||(this._data={},this._computeds={},this._initProps(),this._callHook("beforeConnect"),this._connected=!0,this._initEvents(),this._initObservers(),this._callHook("connected"),this._callUpdate())},ii.prototype._callDisconnected=function(){this._connected&&(this._callHook("beforeDisconnect"),this._disconnectObservers(),this._unbindEvents(),this._callHook("disconnected"),this._connected=!1,delete this._watch)},ii.prototype._callUpdate=function(t){var e=this;void 0===t&&(t="update"),this._connected&&("update"!==t&&"resize"!==t||this._callWatches(),this.$options.update&&(this._updates||(this._updates=new Set,gn.read(function(){!function(i){for(var r=this,o=this.$options.update,t=0;t<o.length;t++)!function(t){var e=o[t],t=e.read,n=e.write,e=e.events;(i.has("update")||e&&e.some(function(t){return i.has(t)}))&&(e=void 0,t&&(e=t.call(r,r._data,i))&&I(e)&&Y(r._data,e),n&&!1!==e&&gn.write(function(){return n.call(r,r._data,i)}))}(t)}.call(e,e._updates),delete e._updates})),this._updates.add(t.type||t)))},ii.prototype._callWatches=function(){var a,u=this;this._watch||(a=!c(this,"_watch"),this._watch=gn.read(function(){var t,e=u.$options.computed,n=u._computeds;for(t in e){var i=c(n,t),r=n[t];delete n[t];var o=e[t],s=o.watch,o=o.immediate;s&&(a&&o||i&&!q(r,u[t]))&&s.call(u,u[t],r)}u._watch=null}))},oi=0,(ri=Qn).prototype._init=function(t){(t=t||{}).data=function(t,e){var n=t.data,i=e.args,r=e.props;void 0===r&&(r={});if(n=y(n)?D(i)?void 0:n.slice(0,i.length).reduce(function(t,e,n){return I(e)?Y(t,e):t[i[n]]=e,t},{}):n)for(var o in n)O(n[o])?delete n[o]:n[o]=r[o]?fi(r[o],n[o]):n[o];return n}(t,this.constructor.options),this.$options=En(this.constructor.options,t,this),this.$el=null,this.$props={},this._uid=oi++,this._initData(),this._initMethods(),this._initComputeds(),this._callHook("created"),t.el&&this.$mount(t.el)},ri.prototype._initData=function(){var t,e=this.$options.data;for(t in e=void 0===e?{}:e)this.$props[t]=this[t]=e[t]},ri.prototype._initMethods=function(){var t=this.$options.methods;if(t)for(var e in t)this[e]=t[e].bind(this)},ri.prototype._initComputeds=function(){var t=this.$options.computed;if(this._computeds={},t)for(var e in t)!function(i,r,o){Object.defineProperty(i,r,{enumerable:!0,get:function(){var t=i._computeds,e=i.$props,n=i.$el;return c(t,r)||(t[r]=(o.get||o).call(i,e,n)),t[r]},set:function(t){var e=i._computeds;e[r]=o.set?o.set.call(i,t):t,O(e[r])&&delete e[r]}})}(this,e,t[e])},ri.prototype._initProps=function(t){for(var e in t=t||li(this.$options,this.$name))O(t[e])||(this.$props[e]=t[e]);var n=[this.$options.computed,this.$options.methods];for(e in this.$props)e in t&&function(t,e){return t.every(function(t){return!t||!c(t,e)})}(n,e)&&(this[e]=this.$props[e])},ri.prototype._initEvents=function(){var n=this;this._events=[];var t=this.$options.events;t&&t.forEach(function(t){if(c(t,"handler"))di(n,t);else for(var e in t)di(n,t[e],e)})},ri.prototype._unbindEvents=function(){this._events.forEach(function(t){return t()}),delete this._events},ri.prototype._initObservers=function(){var t,e,n;this._observers=[(e=(t=this).$options.el,(n=new MutationObserver(function(){return t.$emit()})).observe(e,{childList:!0,subtree:!0}),n),function(e){var i=e.$name,r=e.$options,o=e.$props,t=r.attrs,n=r.props,s=r.el;if(n&&!1!==t){var a=y(t)?t:Object.keys(n),t=a.map(function(t){return d(t)}).concat(i),n=new MutationObserver(function(t){var n=li(r,i);t.some(function(t){var e=t.attributeName,t=e.replace("data-","");return(t===i?a:[f(t),f(e)]).some(function(t){return!O(n[t])&&n[t]!==o[t]})})&&e.$reset()});return n.observe(s,{attributes:!0,attributeFilter:t.concat(t.map(function(t){return"data-"+t}))}),n}}(this)]},ri.prototype._disconnectObservers=function(){this._observers.forEach(function(t){return t&&t.disconnect()})},ai=(si=Qn).data,ui={},si.component=function(s,t){var e=d(s);if(s=f(e),!t)return I(ui[s])&&(ui[s]=si.extend(ui[s])),ui[s];si[s]=function(t,n){for(var e=arguments.length,i=Array(e);e--;)i[e]=arguments[e];var r=si.component(s);return r.options.functional?new r({data:I(t)?t:[].concat(i)}):t?ze(t).map(o)[0]:o(t);function o(t){var e=si.getComponent(t,s);if(e){if(!n)return e;e.$destroy()}return new r({el:t,data:n})}};var n=I(t)?Y({},t):t.options;return n.name=s,n.install&&n.install(si,n,s),si._initialized&&!n.functional&&gn.read(function(){return si[s]("[uk-"+e+"],[data-uk-"+e+"]")}),ui[s]=I(t)?n:t},si.getComponents=function(t){return t&&t[ai]||{}},si.getComponent=function(t,e){return si.getComponents(t)[e]},si.connect=function(t){if(t[ai])for(var e in t[ai])t[ai][e]._callConnected();for(var n=0;n<t.attributes.length;n++){var i=ci(t.attributes[n].name);i&&i in ui&&si[i](t)}},si.disconnect=function(t){for(var e in t[ai])t[ai][e]._callDisconnected()},function(i){var r=i.data;i.prototype.$create=function(t,e,n){return i[t](e,n)},i.prototype.$mount=function(t){var e=this.$options.name;t[r]||(t[r]={}),t[r][e]||((t[r][e]=this).$el=this.$options.el=this.$options.el||t,Bt(t,document)&&this._callConnected())},i.prototype.$reset=function(){this._callDisconnected(),this._callConnected()},i.prototype.$destroy=function(t){void 0===t&&(t=!1);var e=this.$options,n=e.el,e=e.name;n&&this._callDisconnected(),this._callHook("destroy"),n&&n[r]&&(delete n[r][e],D(n[r])||delete n[r],t&&$e(this.$el))},i.prototype.$emit=function(t){this._callUpdate(t)},i.prototype.$update=function(t,e){void 0===t&&(t=this.$el),i.update(t,e)},i.prototype.$getComponent=i.getComponent;var t=rt(function(t){return i.prefix+d(t)});Object.defineProperties(i.prototype,{$container:Object.getOwnPropertyDescriptor(i,"container"),$name:{get:function(){return t(this.$options.name)}}})}(Qn);var pi={connected:function(){He(this.$el,this.$name)||Be(this.$el,this.$name)}},mi={props:{cls:Boolean,animation:"list",duration:Number,origin:String,transition:String},data:{cls:!1,animation:[!1],duration:200,origin:!1,transition:"linear",clsEnter:"uk-togglabe-enter",clsLeave:"uk-togglabe-leave",initProps:{overflow:"",height:"",paddingTop:"",paddingBottom:"",marginTop:"",marginBottom:""},hideProps:{overflow:"hidden",height:0,paddingTop:0,paddingBottom:0,marginTop:0,marginBottom:0}},computed:{hasAnimation:function(t){return!!t.animation[0]},hasTransition:function(t){t=t.animation;return this.hasAnimation&&!0===t[0]}},methods:{toggleElement:function(e,s,a){var u=this;return new he(function(t){return he.all(W(e).map(function(t){var e=M(s)?s:!u.isToggled(t);if(!te(t,"before"+(e?"show":"hide"),[u]))return he.reject();var o,n=(k(a)?a:!1!==a&&u.hasAnimation?u.hasTransition?gi(u):(o=u,function(t,e){nn.cancel(t);var n=o.animation,i=o.duration,r=o._toggle;return e?(r(t,!0),nn.in(t,n[0],i,o.origin)):nn.out(t,n[1]||n[0],i,o.origin).then(function(){return r(t,!1)})}):u._toggle)(t,e),i=e?u.clsEnter:u.clsLeave;Be(t,i),te(t,e?"show":"hide",[u]);function r(){De(t,i),te(t,e?"shown":"hidden",[u]),u.$update(t)}return n?n.then(r,function(){return De(t,i),he.reject()}):r()})).then(t,Q)})},isToggled:function(t){return!!He(t=void 0===t?this.$el:t,this.clsEnter)||!He(t,this.clsLeave)&&(this.cls?He(t,this.cls.split(" ")[0]):!st(t,"hidden"))},_toggle:function(t,e){var n;t&&(e=Boolean(e),this.cls?(n=w(this.cls," ")||e!==He(t,this.cls))&&Le(t,this.cls,w(this.cls," ")?void 0:e):(n=e===t.hidden)&&(t.hidden=!e),ze("[autofocus]",t).some(function(t){return $t(t)?t.focus()||!0:t.blur()}),n&&(te(t,"toggled",[e,this]),this.$update(t)))}}};function gi(t){var o=t.isToggled,s=t.duration,a=t.initProps,u=t.hideProps,c=t.transition,h=t._toggle;return function(t,e){var n=Ze.inProgress(t),i=t.hasChildNodes?L(Re(t.firstElementChild,"marginTop"))+L(Re(t.lastElementChild,"marginBottom")):0,r=$t(t)?cn(t)+(n?0:i):0;Ze.cancel(t),o(t)||h(t,!0),cn(t,""),gn.flush();i=cn(t)+(n?0:i);return cn(t,r),(e?Ze.start(t,Y({},a,{overflow:"hidden",height:i}),Math.round(s*(1-r/i)),c):Ze.start(t,u,Math.round(s*(r/i)),c).then(function(){return h(t,!1)})).then(function(){return Re(t,a)})}}var vi={mixins:[pi,mi],props:{targets:String,active:null,collapsible:Boolean,multiple:Boolean,toggle:String,content:String,transition:String,offset:Number},data:{targets:"> *",active:!1,animation:[!0],collapsible:!0,multiple:!1,clsOpen:"uk-open",toggle:"> .uk-accordion-title",content:"> .uk-accordion-content",transition:"ease",offset:0},computed:{items:{get:function(t,e){return ze(t.targets,e)},watch:function(t,e){var n=this;t.forEach(function(t){return wi(Me(n.content,t),!He(t,n.clsOpen))}),e||He(t,this.clsOpen)||(t=!1!==this.active&&t[Number(this.active)]||!this.collapsible&&t[0])&&this.toggle(t,!1)},immediate:!0},toggles:function(t){var e=t.toggle;return this.items.map(function(t){return Me(e,t)})}},events:[{name:"click",delegate:function(){return this.targets+" "+this.$props.toggle},handler:function(t){t.preventDefault(),this.toggle(Pt(this.toggles,t.current))}}],methods:{toggle:function(t,r){var o=this,e=[this.items[it(t,this.items)]],t=Ct(this.items,"."+this.clsOpen);this.multiple||w(t,e[0])||(e=e.concat(t)),!this.collapsible&&t.length<2&&!Ct(e,":not(."+this.clsOpen+")").length||e.forEach(function(t){return o.toggleElement(t,!He(t,o.clsOpen),function(e,n){Le(e,o.clsOpen,n),ot(Me(o.$props.toggle,e),"aria-expanded",n);var i=Me((e._wrapper?"> * ":"")+o.content,e);if(!1!==r&&o.hasTransition)return e._wrapper||(e._wrapper=Se(i,"<div"+(n?" hidden":"")+">")),wi(i,!1),gi(o)(e._wrapper,n).then(function(){var t;wi(i,!n),delete e._wrapper,Ee(i),n&&(Ln(t=Me(o.$props.toggle,e))||Fn(t,{offset:o.offset}))});wi(i,!n)})})}}};function wi(t,e){t&&(t.hidden=e)}var bi={mixins:[pi,mi],args:"animation",props:{close:String},data:{animation:[!0],selClose:".uk-alert-close",duration:150,hideProps:Y({opacity:0},mi.data.hideProps)},events:[{name:"click",delegate:function(){return this.selClose},handler:function(t){t.preventDefault(),this.close()}}],methods:{close:function(){var t=this;this.toggleElement(this.$el).then(function(){return t.$destroy(!0)})}}},xi={args:"autoplay",props:{automute:Boolean,autoplay:Boolean},data:{automute:!1,autoplay:!0},computed:{inView:function(t){return"inview"===t.autoplay}},connected:function(){this.inView&&!st(this.$el,"preload")&&(this.$el.preload="none"),this.automute&&An(this.$el)},update:{read:function(){return{visible:$t(this.$el)&&"hidden"!==Re(this.$el,"visibility"),inView:this.inView&&Ln(this.$el)}},write:function(t){var e=t.visible,t=t.inView;!e||this.inView&&!t?_n(this.$el):(!0===this.autoplay||this.inView&&t)&&Cn(this.$el)},events:["resize","scroll"]}},yi={mixins:[pi,xi],props:{width:Number,height:Number},data:{automute:!0},update:{read:function(){var t=this.$el,e=function(t){for(;t=Tt(t);)if("static"!==Re(t,"position"))return t}(t)||Tt(t),n=e.offsetHeight,e=e.offsetWidth,n=nt.cover({width:this.width||t.naturalWidth||t.videoWidth||t.clientWidth,height:this.height||t.naturalHeight||t.videoHeight||t.clientHeight},{width:e+(e%2?1:0),height:n+(n%2?1:0)});return!(!n.width||!n.height)&&n},write:function(t){var e=t.height,t=t.width;Re(this.$el,{height:e,width:t})},events:["resize"]}};var ki,$i={props:{pos:String,offset:null,flip:Boolean,clsPos:String},data:{pos:"bottom-"+(lt?"right":"left"),flip:!0,offset:!1,clsPos:""},computed:{pos:function(t){t=t.pos;return(t+(w(t,"-")?"":"-center")).split("-")},dir:function(){return this.pos[0]},align:function(){return this.pos[1]}},methods:{positionAt:function(t,e,n){Oe(t,this.clsPos+"-(top|bottom|left|right)(-[a-z]+)?");var i,r=this.offset,o=this.getAxis();B(r)||(r=(i=Me(r))?sn(i)["x"===o?"left":"top"]-sn(e)["x"===o?"right":"bottom"]:0);r=Xn(t,e,"x"===o?fn(this.dir)+" "+this.align:this.align+" "+fn(this.dir),"x"===o?this.dir+" "+this.align:this.align+" "+this.dir,"x"===o?""+("left"===this.dir?-r:r):" "+("top"===this.dir?-r:r),null,this.flip,n).target,n=r.x,r=r.y;this.dir="x"===o?n:r,this.align="x"===o?r:n,Le(t,this.clsPos+"-"+this.dir+"-"+this.align,!1===this.offset)},getAxis:function(){return"top"===this.dir||"bottom"===this.dir?"y":"x"}}},Si={mixins:[$i,mi],args:"pos",props:{mode:"list",toggle:Boolean,boundary:Boolean,boundaryAlign:Boolean,delayShow:Number,delayHide:Number,clsDrop:String},data:{mode:["click","hover"],toggle:"- *",boundary:!0,boundaryAlign:!1,delayShow:0,delayHide:800,clsDrop:!1,animation:["uk-animation-fade"],cls:"uk-open"},computed:{boundary:function(t,e){t=t.boundary;return!0===t?window:Ht(t,e)},clsDrop:function(t){return t.clsDrop||"uk-"+this.$options.name},clsPos:function(){return this.clsDrop}},created:function(){this.tracker=new kn},connected:function(){Be(this.$el,this.clsDrop);var t=this.$props.toggle;this.toggle=t&&this.$create("toggle",Ht(t,this.$el),{target:this.$el,mode:this.mode})},disconnected:function(){this.isActive()&&(ki=null)},events:[{name:"click",delegate:function(){return"."+this.clsDrop+"-close"},handler:function(t){t.preventDefault(),this.hide(!1)}},{name:"click",delegate:function(){return'a[href^="#"]'},handler:function(t){var e=t.defaultPrevented,t=t.current.hash;e||!t||Bt(t,this.$el)||this.hide(!1)}},{name:"beforescroll",handler:function(){this.hide(!1)}},{name:"toggle",self:!0,handler:function(t,e){t.preventDefault(),this.isToggled()?this.hide(!1):this.show(e,!1)}},{name:"toggleshow",self:!0,handler:function(t,e){t.preventDefault(),this.show(e)}},{name:"togglehide",self:!0,handler:function(t){t.preventDefault(),this.hide()}},{name:wt+" focusin",filter:function(){return w(this.mode,"hover")},handler:function(t){ae(t)||this.clearTimers()}},{name:bt+" focusout",filter:function(){return w(this.mode,"hover")},handler:function(t){!ae(t)&&t.relatedTarget&&this.hide()}},{name:"toggled",self:!0,handler:function(t,e){e&&(this.clearTimers(),this.position())}},{name:"show",self:!0,handler:function(){var r=this;(ki=this).tracker.init(),Qt(this.$el,"hide",Jt(document,mt,function(t){var i=t.target;return!Bt(i,r.$el)&&Qt(document,vt+" "+xt+" scroll",function(t){var e=t.defaultPrevented,n=t.type,t=t.target;e||n!==vt||i!==t||r.toggle&&Bt(i,r.toggle.$el)||r.hide(!1)},!0)}),{self:!0}),Qt(this.$el,"hide",Jt(document,"keydown",function(t){27===t.keyCode&&r.hide(!1)}),{self:!0})}},{name:"beforehide",self:!0,handler:function(){this.clearTimers()}},{name:"hide",handler:function(t){t=t.target;this.$el===t?(ki=this.isActive()?null:ki,this.tracker.cancel()):ki=null===ki&&Bt(t,this.$el)&&this.isToggled()?this:ki}}],update:{write:function(){this.isToggled()&&!He(this.$el,this.clsEnter)&&this.position()},events:["resize"]},methods:{show:function(t,e){var n,i=this;if(void 0===t&&(t=this.toggle),void 0===e&&(e=!0),this.isToggled()&&t&&this.toggle&&t.$el!==this.toggle.$el&&this.hide(!1),this.toggle=t,this.clearTimers(),!this.isActive()){if(ki){if(e&&ki.isDelaying)return void(this.showTimer=setTimeout(this.show,10));for(;ki&&n!==ki&&!Bt(this.$el,ki.$el);)(n=ki).hide(!1)}this.showTimer=setTimeout(function(){return!i.isToggled()&&i.toggleElement(i.$el,!0)},e&&this.delayShow||0)}},hide:function(t){var e=this;void 0===t&&(t=!0);function n(){return e.toggleElement(e.$el,!1,!1)}var i,r;this.clearTimers(),this.isDelaying=(i=this.$el,r=[],Ae(i,function(t){return"static"!==Re(t,"position")&&r.push(t)}),r.some(function(t){return e.tracker.movesTo(t)})),t&&this.isDelaying?this.hideTimer=setTimeout(this.hide,50):t&&this.delayHide?this.hideTimer=setTimeout(n,this.delayHide):n()},clearTimers:function(){clearTimeout(this.showTimer),clearTimeout(this.hideTimer),this.showTimer=null,this.hideTimer=null,this.isDelaying=!1},isActive:function(){return ki===this},position:function(){De(this.$el,this.clsDrop+"-stack"),Le(this.$el,this.clsDrop+"-boundary",this.boundaryAlign);var t,e=sn(this.boundary),n=this.boundaryAlign?e:sn(this.toggle.$el);"justify"===this.align?(t="y"===this.getAxis()?"width":"height",Re(this.$el,t,n[t])):this.boundary&&this.$el.offsetWidth>Math.max(e.right-n.left,n.right-e.left)&&Be(this.$el,this.clsDrop+"-stack"),this.positionAt(this.$el,this.boundaryAlign?this.boundary:this.toggle.$el,this.boundary)}}};var Ii={mixins:[pi],args:"target",props:{target:Boolean},data:{target:!1},computed:{input:function(t,e){return Me(St,e)},state:function(){return this.input.nextElementSibling},target:function(t,e){t=t.target;return t&&(!0===t&&Tt(this.input)===e&&this.input.nextElementSibling||Ht(t,e))}},update:function(){var t,e,n=this.target,i=this.input;!n||n[e=It(n)?"value":"textContent"]!==(i=i.files&&i.files[0]?i.files[0].name:Mt(i,"select")&&(t=ze("option",i).filter(function(t){return t.selected})[0])?t.textContent:i.value)&&(n[e]=i)},events:[{name:"change",handler:function(){this.$update()}},{name:"reset",el:function(){return Nt(this.$el,"form")},handler:function(){this.$update()}}]},Ei={update:{read:function(t){var e=Ln(this.$el);if(!e||t.isInView===e)return!1;t.isInView=e},write:function(){this.$el.src=""+this.$el.src},events:["scroll","resize"]}},Ti={props:{margin:String,firstColumn:Boolean},data:{margin:"uk-margin-small-top",firstColumn:"uk-first-column"},update:{read:function(){var t=Ci(this.$el.children);return{rows:t,columns:function(t){for(var e=[],n=0;n<t.length;n++)for(var i=_i(t[n],"left","right"),r=0;r<i.length;r++)e[r]=e[r]?e[r].concat(i[r]):i[r];return lt?e.reverse():e}(t)}},write:function(t){for(var e=t.columns,n=t.rows,i=0;i<n.length;i++)for(var r=0;r<n[i].length;r++)Le(n[i][r],this.margin,0!==i),Le(n[i][r],this.firstColumn,!!~e[0].indexOf(n[i][r]))},events:["resize"]}};function Ci(t){return _i(t,"top","bottom")}function _i(t,e,n){for(var i=[[]],r=0;r<t.length;r++){var o=t[r];if($t(o))for(var s=Ai(o),a=i.length-1;0<=a;a--){var u=i[a];if(!u[0]){u.push(o);break}var c=void 0,c=u[0].offsetParent===o.offsetParent?Ai(u[0]):(s=Ai(o,!0),Ai(u[0],!0));if(s[e]>=c[n]-1&&s[e]!==c[e]){i.push([o]);break}if(s[n]-1>c[e]||s[e]===c[e]){u.push(o);break}if(0===a){i.unshift([o]);break}}}return i}function Ai(t,e){var n=t.offsetTop,i=t.offsetLeft,r=t.offsetHeight,o=t.offsetWidth;return(e=void 0===e?!1:e)&&(n=(t=un(t))[0],i=t[1]),{top:n,left:i,bottom:n+r,right:i+o}}var Mi={extends:Ti,mixins:[pi],name:"grid",props:{masonry:Boolean,parallax:Number},data:{margin:"uk-grid-margin",clsStack:"uk-grid-stack",masonry:!1,parallax:0},connected:function(){this.masonry&&Be(this.$el,"uk-flex-top uk-flex-wrap-top")},update:[{write:function(t){t=t.columns;Le(this.$el,this.clsStack,t.length<2)},events:["resize"]},{read:function(t){var e=t.columns,n=t.rows;if(!e.length||!this.masonry&&!this.parallax||zi(this.$el))return t.translates=!1;var i,r,o=!1,s=Ot(this.$el),a=e.map(function(t){return t.reduce(function(t,e){return t+e.offsetHeight},0)}),u=(t=s,i=this.margin,L((s=t.filter(function(t){return He(t,i)})[0])?Re(s,"marginTop"):Re(t[0],"paddingLeft"))*(n.length-1)),c=Math.max.apply(Math,a)+u;this.masonry&&(e=e.map(function(t){return K(t,"offsetTop")}),t=e,r=n.map(function(t){return Math.max.apply(Math,t.map(function(t){return t.offsetHeight}))}),o=t.map(function(n){var i=0;return n.map(function(t,e){return i+=e?r[e-1]-n[e-1].offsetHeight:0})}));var h=Math.abs(this.parallax);return{padding:h=h&&a.reduce(function(t,e,n){return Math.max(t,e+u+(n%2?h:h/8)-c)},0),columns:e,translates:o,height:o?c:""}},write:function(t){var e=t.height,t=t.padding;Re(this.$el,"paddingBottom",t||""),!1!==e&&Re(this.$el,"height",e)},events:["resize"]},{read:function(t){t=t.height;return!zi(this.$el)&&{scrolled:!!this.parallax&&Wn(this.$el,t?t-cn(this.$el):0)*Math.abs(this.parallax)}},write:function(t){var e=t.columns,i=t.scrolled,r=t.translates;!1===i&&!r||e.forEach(function(t,n){return t.forEach(function(t,e){return Re(t,"transform",i||r?"translateY("+((r&&-r[n][e])+(i?n%2?i:i/8:0))+"px)":"")})})},events:["scroll","resize"]}]};function zi(t){return Ot(t).some(function(t){return"absolute"===Re(t,"position")})}var Ni=ht?{props:{selMinHeight:String},data:{selMinHeight:!1,forceHeight:!1},computed:{elements:function(t,e){t=t.selMinHeight;return t?ze(t,e):[e]}},update:[{read:function(){Re(this.elements,"height","")},order:-5,events:["resize"]},{write:function(){var n=this;this.elements.forEach(function(t){var e=L(Re(t,"minHeight"));e&&(n.forceHeight||Math.round(e+dn(t,"height","content-box"))>=t.offsetHeight)&&Re(t,"height",e)})},order:5,events:["resize"]}]}:{},Bi={mixins:[Ni],args:"target",props:{target:String,row:Boolean},data:{target:"> *",row:!0,forceHeight:!0},computed:{elements:function(t,e){return ze(t.target,e)}},update:{read:function(){return{rows:(this.row?Ci(this.elements):[this.elements]).map(Di)}},write:function(t){t.rows.forEach(function(t){var n=t.heights;return t.elements.forEach(function(t,e){return Re(t,"minHeight",n[e])})})},events:["resize"]}};function Di(t){if(t.length<2)return{heights:[""],elements:t};var n=t.map(Oi),i=Math.max.apply(Math,n),e=t.some(function(t){return t.style.minHeight}),r=t.some(function(t,e){return!t.style.minHeight&&n[e]<i});return e&&r&&(Re(t,"minHeight",""),n=t.map(Oi),i=Math.max.apply(Math,n)),{heights:n=t.map(function(t,e){return n[e]===i&&L(t.style.minHeight).toFixed(2)!==i.toFixed(2)?"":i}),elements:t}}function Oi(t){var e=!1;$t(t)||(e=t.style.display,Re(t,"display","block","important"));var n=on(t).height-dn(t,"height","content-box");return!1!==e&&Re(t,"display",e),n}var Pi={mixins:[Ni],props:{expand:Boolean,offsetTop:Boolean,offsetBottom:Boolean,minHeight:Number},data:{expand:!1,offsetTop:!1,offsetBottom:!1,minHeight:0},update:{read:function(t){var e=t.minHeight;if(!$t(this.$el))return!1;var n="",i=dn(this.$el,"height","content-box");return this.expand?n=cn(window)-(on(document.documentElement).height-on(this.$el).height)-i||"":(n="calc(100vh",this.offsetTop&&(n+=0<(t=sn(this.$el).top)&&t<cn(window)/2?" - "+t+"px":""),!0===this.offsetBottom?n+=" - "+on(this.$el.nextElementSibling).height+"px":B(this.offsetBottom)?n+=" - "+this.offsetBottom+"vh":this.offsetBottom&&u(this.offsetBottom,"px")?n+=" - "+L(this.offsetBottom)+"px":z(this.offsetBottom)&&(n+=" - "+on(Ht(this.offsetBottom,this.$el)).height+"px"),n+=(i?" - "+i+"px":"")+")"),{minHeight:n,prev:e}},write:function(t){var e=t.minHeight,t=t.prev;Re(this.$el,{minHeight:e}),e!==t&&this.$update(this.$el,"resize"),this.minHeight&&L(Re(this.$el,"minHeight"))<this.minHeight&&Re(this.$el,"minHeight",this.minHeight)},events:["resize"]}},Hi={args:"src",props:{id:Boolean,icon:String,src:String,style:String,width:Number,height:Number,ratio:Number,class:String,strokeAnimation:Boolean,focusable:Boolean,attributes:"list"},data:{ratio:1,include:["style","class","focusable"],class:"",strokeAnimation:!1},beforeConnect:function(){this.class+=" uk-svg"},connected:function(){var t,n=this;!this.icon&&w(this.src,"#")&&(t=this.src.split("#"),this.src=t[0],this.icon=t[1]),this.svg=this.getSvg().then(function(t){if(n._connected){var e=function(t,e){if(kt(e)||"CANVAS"===e.tagName){e.hidden=!0;var n=e.nextElementSibling;return Vi(t,n)?n:ye(e,t)}n=e.lastElementChild;return Vi(t,n)?n:be(e,t)}(t,n.$el);return n.svgEl&&e!==n.svgEl&&$e(n.svgEl),n.applyAttributes(e,t),n.$emit(),n.svgEl=e}},Q)},disconnected:function(){var e=this;this.svg.then(function(t){e._connected||(kt(e.$el)&&(e.$el.hidden=!1),$e(t),e.svgEl=null)}),this.svg=null},update:{read:function(){return!!(this.strokeAnimation&&this.svgEl&&$t(this.svgEl))},write:function(){var t,e;t=this.svgEl,(e=Wi(t))&&t.style.setProperty("--uk-animation-stroke",e)},type:["resize"]},methods:{getSvg:function(){var e=this;return Li(this.src).then(function(t){return function(t,e){e&&w(t,"<symbol")&&(t=function(t,e){if(!Fi[t]){var n;for(Fi[t]={},ji.lastIndex=0;n=ji.exec(t);)Fi[t][n[3]]='<svg xmlns="http://www.w3.org/2000/svg"'+n[1]+"svg>"}return Fi[t][e]}(t,e)||t);return(t=Me(t.substr(t.indexOf("<svg"))))&&t.hasChildNodes()&&t}(t,e.icon)||he.reject("SVG not found.")})},applyAttributes:function(n,e){var t,i,r=this;for(t in this.$options.props)w(this.include,t)&&t in this&&ot(n,t,this[t]);for(i in this.attributes){var o=this.attributes[i].split(":",2),s=o[0],o=o[1];ot(n,s,o)}this.id||at(n,"id");var a=["width","height"],u=a.map(function(t){return r[t]});u.some(function(t){return t})||(u=a.map(function(t){return ot(e,t)}));var c=ot(e,"viewBox");(u=c&&!u.some(function(t){return t})?c.split(" ").slice(2):u).forEach(function(t,e){return ot(n,a[e],L(t)*r.ratio||null)})}}},Li=rt(function(n){return new he(function(e,t){n?g(n,"data:")?e(decodeURIComponent(n.split(",")[1])):me(n).then(function(t){return e(t.response)},function(){return t("SVG not found.")}):t()})});var ji=/<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g,Fi={};function Wi(t){return Math.ceil(Math.max.apply(Math,[0].concat(ze("[stroke]",t).map(function(t){try{return t.getTotalLength()}catch(t){return 0}}))))}function Vi(t,e){return Ri(t)&&Ri(e)&&qi(t)===qi(e)}function Ri(t){return t&&"svg"===t.tagName}function qi(t){return(t.innerHTML||(new XMLSerializer).serializeToString(t).replace(/<svg.*?>(.*?)<\/svg>/g,"$1")).replace(/\s/g,"")}var Ui={spinner:'<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>',totop:'<svg width="18" height="10" viewBox="0 0 18 10" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9 "/></svg>',marker:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="4" width="1" height="11"/><rect x="4" y="9" width="11" height="1"/></svg>',"close-icon":'<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>',"close-large":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>',"navbar-toggle-icon":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect y="9" width="20" height="2"/><rect y="3" width="20" height="2"/><rect y="15" width="20" height="2"/></svg>',"overlay-icon":'<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect x="19" y="0" width="1" height="40"/><rect x="0" y="19" width="40" height="1"/></svg>',"pagination-next":'<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>',"pagination-previous":'<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>',"search-icon":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',"search-large":'<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>',"search-navbar":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>',"slidenav-next":'<svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1 "/></svg>',"slidenav-next-large":'<svg width="25" height="40" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5 "/></svg>',"slidenav-previous":'<svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23 "/></svg>',"slidenav-previous-large":'<svg width="25" height="40" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547 "/></svg>'},Yi={install:function(r){r.icon.add=function(t,e){var n,i=z(t)?((n={})[t]=e,n):t;G(i,function(t,e){Ui[e]=t,delete Qi[e]}),r._initialized&&Ae(document.body,function(t){return G(r.getComponents(t),function(t){t.$options.isIcon&&t.icon in i&&t.$reset()})})}},extends:Hi,args:"icon",props:["icon"],data:{include:["focusable"]},isIcon:!0,beforeConnect:function(){Be(this.$el,"uk-icon")},methods:{getSvg:function(){var t=function(t){if(!Ui[t])return null;Qi[t]||(Qi[t]=Me((Ui[function(t){return lt?U(U(t,"left","right"),"previous","next"):t}(t)]||Ui[t]).trim()));return Qi[t].cloneNode(!0)}(this.icon);return t?he.resolve(t):he.reject("Icon not found.")}}},Xi={args:!1,extends:Yi,data:function(t){return{icon:d(t.constructor.options.name)}},beforeConnect:function(){Be(this.$el,this.$name)}},Gi={extends:Xi,beforeConnect:function(){Be(this.$el,"uk-slidenav")},computed:{icon:function(t,e){t=t.icon;return He(e,"uk-slidenav-large")?t+"-large":t}}},Ki={extends:Xi,computed:{icon:function(t,e){t=t.icon;return He(e,"uk-search-icon")&&Dt(e,".uk-search-large").length?"search-large":Dt(e,".uk-search-navbar").length?"search-navbar":t}}},Ji={extends:Xi,computed:{icon:function(){return"close-"+(He(this.$el,"uk-close-large")?"large":"icon")}}},Zi={extends:Xi,connected:function(){var e=this;this.svg.then(function(t){return t&&1!==e.ratio&&Re(Me("circle",t),"strokeWidth",1/e.ratio)})}},Qi={};var tr={args:"dataSrc",props:{dataSrc:String,dataSrcset:Boolean,sizes:String,width:Number,height:Number,offsetTop:String,offsetLeft:String,target:String},data:{dataSrc:"",dataSrcset:!1,sizes:!1,width:!1,height:!1,offsetTop:"50vh",offsetLeft:"50vw",target:!1},computed:{cacheKey:function(t){t=t.dataSrc;return this.$name+"."+t},width:function(t){var e=t.width,t=t.dataWidth;return e||t},height:function(t){var e=t.height,t=t.dataHeight;return e||t},sizes:function(t){var e=t.sizes,t=t.dataSizes;return e||t},isImg:function(t,e){return ar(e)},target:{get:function(t){t=t.target;return[this.$el].concat(Lt(t,this.$el))},watch:function(){this.observe()}},offsetTop:function(t){return pn(t.offsetTop,"height")},offsetLeft:function(t){return pn(t.offsetLeft,"width")}},connected:function(){window.IntersectionObserver?(cr[this.cacheKey]?er(this.$el,cr[this.cacheKey],this.dataSrcset,this.sizes):this.isImg&&this.width&&this.height&&er(this.$el,function(t,e,n){n&&(n=nt.ratio({width:t,height:e},"width",pn(ir(n))),t=n.width,e=n.height);return'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="'+t+'" height="'+e+'"></svg>'}(this.width,this.height,this.sizes)),this.observer=new IntersectionObserver(this.load,{rootMargin:this.offsetTop+"px "+this.offsetLeft+"px"}),requestAnimationFrame(this.observe)):er(this.$el,this.dataSrc,this.dataSrcset,this.sizes)},disconnected:function(){this.observer&&this.observer.disconnect()},update:{read:function(t){var e=this,t=t.image;return!!this.observer&&(t||"complete"!==document.readyState||this.load(this.observer.takeRecords()),!this.isImg&&void(t&&t.then(function(t){return t&&""!==t.currentSrc&&er(e.$el,ur(t))})))},write:function(t){var e,n,i;this.dataSrcset&&1!==window.devicePixelRatio&&(!(n=Re(this.$el,"backgroundSize")).match(/^(auto\s?)+$/)&&L(n)!==t.bgSize||(t.bgSize=(e=this.dataSrcset,n=this.sizes,i=pn(ir(n)),(e=(e.match(sr)||[]).map(L).sort(function(t,e){return t-e})).filter(function(t){return i<=t})[0]||e.pop()||""),Re(this.$el,"backgroundSize",t.bgSize+"px")))},events:["resize"]},methods:{load:function(t){var e=this;t.some(function(t){return O(t.isIntersecting)||t.isIntersecting})&&(this._data.image=ge(this.dataSrc,this.dataSrcset,this.sizes).then(function(t){return er(e.$el,ur(t),t.srcset,t.sizes),cr[e.cacheKey]=ur(t),t},function(t){return te(e.$el,new t.constructor(t.type,t))}),this.observer.disconnect())},observe:function(){var e=this;this._connected&&!this._data.image&&this.target.forEach(function(t){return e.observer.observe(t)})}}};function er(t,e,n,i){ar(t)?(i&&(t.sizes=i),n&&(t.srcset=n),e&&(t.src=e)):e&&!w(t.style.backgroundImage,e)&&(Re(t,"backgroundImage","url("+Kt(e)+")"),te(t,ee("load",!1)))}var nr=/\s*(.*?)\s*(\w+|calc\(.*?\))\s*(?:,|$)/g;function ir(t){var e,n;for(nr.lastIndex=0;e=nr.exec(t);)if(!e[1]||window.matchMedia(e[1]).matches){e=g(n=e[2],"calc")?n.slice(5,-1).replace(rr,function(t){return pn(t)}).replace(/ /g,"").match(or).reduce(function(t,e){return t+ +e},0):n;break}return e||"100vw"}var rr=/\d+(?:\w+|%)/g,or=/[+-]?(\d+)/g;var sr=/\s+\d+w\s*(?:,|$)/g;function ar(t){return"IMG"===t.tagName}function ur(t){return t.currentSrc||t.src}var cr,hr="__test__";try{(cr=window.sessionStorage||{})[hr]=1,delete cr[hr]}catch(t){cr={}}var lr={props:{media:Boolean},data:{media:!1},computed:{matchMedia:function(){var t=function(t){if(z(t))if("@"===t[0])t=L(Xe("breakpoint-"+t.substr(1)));else if(isNaN(t))return t;return!(!t||isNaN(t))&&"(min-width: "+t+"px)"}(this.media);return!t||window.matchMedia(t).matches}}};var dr={mixins:[pi,lr],props:{fill:String},data:{fill:"",clsWrapper:"uk-leader-fill",clsHide:"uk-leader-hide",attrFill:"data-fill"},computed:{fill:function(t){return t.fill||Xe("leader-fill-content")}},connected:function(){var t=Ie(this.$el,'<span class="'+this.clsWrapper+'">');this.wrapper=t[0]},disconnected:function(){Ee(this.wrapper.childNodes)},update:{read:function(t){var e,n=t.changed,t=e=t.width;return{width:e=Math.floor(this.$el.offsetWidth/2),fill:this.fill,changed:n||t!==e,hide:!this.matchMedia}},write:function(t){Le(this.wrapper,this.clsHide,t.hide),t.changed&&(t.changed=!1,ot(this.wrapper,this.attrFill,new Array(t.width).join(t.fill)))},events:["resize"]}},fr={props:{container:Boolean},data:{container:!0},computed:{container:function(t){t=t.container;return!0===t&&this.$container||t&&Me(t)}}},pr=[],mr={mixins:[pi,fr,mi],props:{selPanel:String,selClose:String,escClose:Boolean,bgClose:Boolean,stack:Boolean},data:{cls:"uk-open",escClose:!0,bgClose:!0,overlay:!0,stack:!1},computed:{panel:function(t,e){return Me(t.selPanel,e)},transitionElement:function(){return this.panel},bgClose:function(t){return t.bgClose&&this.panel}},beforeDisconnect:function(){this.isToggled()&&this.toggleElement(this.$el,!1,!1)},events:[{name:"click",delegate:function(){return this.selClose},handler:function(t){t.preventDefault(),this.hide()}},{name:"toggle",self:!0,handler:function(t){t.defaultPrevented||(t.preventDefault(),this.isToggled()===w(pr,this)&&this.toggle())}},{name:"beforeshow",self:!0,handler:function(t){if(w(pr,this))return!1;!this.stack&&pr.length?(he.all(pr.map(function(t){return t.hide()})).then(this.show),t.preventDefault()):pr.push(this)}},{name:"show",self:!0,handler:function(){var r=this,t=document.documentElement;hn(window)>t.clientWidth&&this.overlay&&Re(document.body,"overflowY","scroll"),this.stack&&Re(this.$el,"zIndex",L(Re(this.$el,"zIndex"))+pr.length),Be(t,this.clsPage),this.bgClose&&Qt(this.$el,"hide",Jt(document,mt,function(t){var i=t.target;X(pr)!==r||r.overlay&&!Bt(i,r.$el)||Bt(i,r.panel)||Qt(document,vt+" "+xt+" scroll",function(t){var e=t.defaultPrevented,n=t.type,t=t.target;e||n!==vt||i!==t||r.hide()},!0)}),{self:!0}),this.escClose&&Qt(this.$el,"hide",Jt(document,"keydown",function(t){27===t.keyCode&&X(pr)===r&&r.hide()}),{self:!0})}},{name:"hidden",self:!0,handler:function(){var e=this;w(pr,this)&&pr.splice(pr.indexOf(this),1),pr.length||Re(document.body,"overflowY",""),Re(this.$el,"zIndex",""),pr.some(function(t){return t.clsPage===e.clsPage})||De(document.documentElement,this.clsPage)}}],methods:{toggle:function(){return this.isToggled()?this.hide():this.show()},show:function(){var e=this;return this.container&&Tt(this.$el)!==this.container?(be(this.container,this.$el),new he(function(t){return requestAnimationFrame(function(){return e.show().then(t)})})):this.toggleElement(this.$el,!0,gr(this))},hide:function(){return this.toggleElement(this.$el,!1,gr(this))}}};function gr(t){var s=t.transitionElement,a=t._toggle;return function(r,o){return new he(function(n,i){return Qt(r,"show hide",function(){r._reject&&r._reject(),r._reject=i,a(r,o);var t=Qt(s,"transitionstart",function(){Qt(s,"transitionend transitioncancel",n,{self:!0}),clearTimeout(e)},{self:!0}),e=setTimeout(function(){t(),n()},R(Re(s,"transitionDuration")))})}).then(function(){return delete r._reject})}}o={mixins:[pi,Ni],props:{dropdown:String,mode:"list",align:String,offset:Number,boundary:Boolean,boundaryAlign:Boolean,clsDrop:String,delayShow:Number,delayHide:Number,dropbar:Boolean,dropbarMode:String,dropbarAnchor:Boolean,duration:Number},data:{dropdown:".uk-navbar-nav > li",align:lt?"right":"left",clsDrop:"uk-navbar-dropdown",mode:void 0,offset:void 0,delayShow:void 0,delayHide:void 0,boundaryAlign:void 0,flip:"x",boundary:!0,dropbar:!1,dropbarMode:"slide",dropbarAnchor:!1,duration:200,forceHeight:!0,selMinHeight:".uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle"},computed:{boundary:function(t,e){var n=t.boundary,t=t.boundaryAlign;return!0===n||t?e:n},dropbarAnchor:function(t,e){return Ht(t.dropbarAnchor,e)},pos:function(t){return"bottom-"+t.align},dropbar:{get:function(t){t=t.dropbar;return t?(t=this._dropbar||Ht(t,this.$el)||Me("+ .uk-navbar-dropbar",this.$el))||(this._dropbar=Me("<div></div>")):null},watch:function(t){Be(t,"uk-navbar-dropbar")},immediate:!0},dropdowns:{get:function(t,e){return ze(t.dropdown+" ."+t.clsDrop,e)},watch:function(t){var e=this;this.$create("drop",t.filter(function(t){return!e.getDropdown(t)}),Y({},this.$props,{boundary:this.boundary,pos:this.pos,offset:this.dropbar||this.offset}))},immediate:!0}},disconnected:function(){this.dropbar&&$e(this.dropbar),delete this._dropbar},events:[{name:"mouseover",delegate:function(){return this.dropdown},handler:function(t){var e=t.current,t=this.getActive();t&&t.toggle&&!Bt(t.toggle.$el,e)&&!t.tracker.movesTo(t.$el)&&t.hide(!1)}},{name:"mouseleave",el:function(){return this.dropbar},handler:function(){var t=this.getActive();t&&!this.dropdowns.some(function(t){return Mt(t,":hover")})&&t.hide()}},{name:"beforeshow",capture:!0,filter:function(){return this.dropbar},handler:function(){Tt(this.dropbar)||ye(this.dropbarAnchor||this.$el,this.dropbar)}},{name:"show",filter:function(){return this.dropbar},handler:function(t,e){var n=e.$el,e=e.dir;He(n,this.clsDrop)&&("slide"===this.dropbarMode&&Be(this.dropbar,"uk-navbar-dropbar-slide"),this.clsDrop&&Be(n,this.clsDrop+"-dropbar"),"bottom"===e&&this.transitionTo(n.offsetHeight+L(Re(n,"marginTop"))+L(Re(n,"marginBottom")),n))}},{name:"beforehide",filter:function(){return this.dropbar},handler:function(t,e){var n=e.$el,e=this.getActive();Mt(this.dropbar,":hover")&&e&&e.$el===n&&t.preventDefault()}},{name:"hide",filter:function(){return this.dropbar},handler:function(t,e){var n=e.$el;!He(n,this.clsDrop)||(!(e=this.getActive())||e&&e.$el===n)&&this.transitionTo(0)}}],methods:{getActive:function(){var t=this.dropdowns.map(this.getDropdown).filter(function(t){return t&&t.isActive()})[0];return t&&w(t.mode,"hover")&&Bt(t.toggle.$el,this.$el)&&t},transitionTo:function(t,e){var n=this,i=this.dropbar,r=$t(i)?cn(i):0;return Re(e=r<t&&e,"clip","rect(0,"+e.offsetWidth+"px,"+r+"px,0)"),cn(i,r),Ze.cancel([e,i]),he.all([Ze.start(i,{height:t},this.duration),Ze.start(e,{clip:"rect(0,"+e.offsetWidth+"px,"+t+"px,0)"},this.duration)]).catch(Q).then(function(){Re(e,{clip:""}),n.$update(i)})},getDropdown:function(t){return this.$getComponent(t,"drop")||this.$getComponent(t,"dropdown")}}},l={mixins:[mr],args:"mode",props:{mode:String,flip:Boolean,overlay:Boolean},data:{mode:"slide",flip:!1,overlay:!1,clsPage:"uk-offcanvas-page",clsContainer:"uk-offcanvas-container",selPanel:".uk-offcanvas-bar",clsFlip:"uk-offcanvas-flip",clsContainerAnimation:"uk-offcanvas-container-animation",clsSidebarAnimation:"uk-offcanvas-bar-animation",clsMode:"uk-offcanvas",clsOverlay:"uk-offcanvas-overlay",selClose:".uk-offcanvas-close",container:!1},computed:{clsFlip:function(t){var e=t.flip,t=t.clsFlip;return e?t:""},clsOverlay:function(t){var e=t.overlay,t=t.clsOverlay;return e?t:""},clsMode:function(t){var e=t.mode;return t.clsMode+"-"+e},clsSidebarAnimation:function(t){var e=t.mode,t=t.clsSidebarAnimation;return"none"===e||"reveal"===e?"":t},clsContainerAnimation:function(t){var e=t.mode,t=t.clsContainerAnimation;return"push"!==e&&"reveal"!==e?"":t},transitionElement:function(t){return"reveal"===t.mode?Tt(this.panel):this.panel}},update:{read:function(){this.isToggled()&&!$t(this.$el)&&this.hide()},events:["resize"]},events:[{name:"click",delegate:function(){return'a[href^="#"]'},handler:function(t){var e=t.current.hash;!t.defaultPrevented&&e&&Me(e,document.body)&&this.hide()}},{name:"touchstart",passive:!0,el:function(){return this.panel},handler:function(t){t=t.targetTouches;1===t.length&&(this.clientY=t[0].clientY)}},{name:"touchmove",self:!0,passive:!1,filter:function(){return this.overlay},handler:function(t){t.cancelable&&t.preventDefault()}},{name:"touchmove",passive:!1,el:function(){return this.panel},handler:function(t){var e,n,i,r;1===t.targetTouches.length&&(e=event.targetTouches[0].clientY-this.clientY,n=(r=this.panel).scrollTop,((i=r.scrollHeight)<=(r=r.clientHeight)||0===n&&0<e||i-n<=r&&e<0)&&t.cancelable&&t.preventDefault())}},{name:"show",self:!0,handler:function(){"reveal"!==this.mode||He(Tt(this.panel),this.clsMode)||(Se(this.panel,"<div>"),Be(Tt(this.panel),this.clsMode)),Re(document.documentElement,"overflowY",this.overlay?"hidden":""),Be(document.body,this.clsContainer,this.clsFlip),Re(document.body,"touch-action","pan-y pinch-zoom"),Re(this.$el,"display","block"),Be(this.$el,this.clsOverlay),Be(this.panel,this.clsSidebarAnimation,"reveal"!==this.mode?this.clsMode:""),cn(document.body),Be(document.body,this.clsContainerAnimation),this.clsContainerAnimation&&(vr().content+=",user-scalable=0")}},{name:"hide",self:!0,handler:function(){De(document.body,this.clsContainerAnimation),Re(document.body,"touch-action","")}},{name:"hidden",self:!0,handler:function(){var t;this.clsContainerAnimation&&((t=vr()).content=t.content.replace(/,user-scalable=0$/,"")),"reveal"===this.mode&&Ee(this.panel),De(this.panel,this.clsSidebarAnimation,this.clsMode),De(this.$el,this.clsOverlay),Re(this.$el,"display",""),De(document.body,this.clsContainer,this.clsFlip),Re(document.documentElement,"overflowY","")}},{name:"swipeLeft swipeRight",handler:function(t){this.isToggled()&&u(t.type,"Left")^this.flip&&this.hide()}}]};function vr(){return Me('meta[name="viewport"]',document.head)||be(document.head,'<meta name="viewport">')}var t={mixins:[pi],props:{selContainer:String,selContent:String},data:{selContainer:".uk-modal",selContent:".uk-modal-dialog"},computed:{container:function(t,e){return Nt(e,t.selContainer)},content:function(t,e){return Nt(e,t.selContent)}},connected:function(){Re(this.$el,"minHeight",150)},update:{read:function(){return!!(this.content&&this.container&&$t(this.$el))&&{current:L(Re(this.$el,"maxHeight")),max:Math.max(150,cn(this.container)-(on(this.content).height-cn(this.$el)))}},write:function(t){var e=t.current,t=t.max;Re(this.$el,"maxHeight",t),Math.round(e)!==Math.round(t)&&te(this.$el,"resize")},events:["resize"]}},dt={props:{offset:Number},data:{offset:0},methods:{scrollTo:function(t){var e=this;t=t&&Me(t)||document.body,te(this.$el,"beforescroll",[this,t])&&Fn(t,{offset:this.offset}).then(function(){return te(e.$el,"scrolled",[e,t])})}},events:{click:function(t){t.defaultPrevented||(t.preventDefault(),this.scrollTo("#"+Kt(decodeURIComponent((this.$el.hash||"").substr(1)))))}}},wr="_ukScrollspy",ft={args:"cls",props:{cls:String,target:String,hidden:Boolean,offsetTop:Number,offsetLeft:Number,repeat:Boolean,delay:Number},data:function(){return{cls:!1,target:!1,hidden:!0,offsetTop:0,offsetLeft:0,repeat:!1,delay:0,inViewClass:"uk-scrollspy-inview"}},computed:{elements:{get:function(t,e){t=t.target;return t?ze(t,e):[e]},watch:function(t){this.hidden&&Re(Ct(t,":not(."+this.inViewClass+")"),"visibility","hidden")},immediate:!0}},disconnected:function(){var e=this;this.elements.forEach(function(t){De(t,e.inViewClass,t[wr]?t[wr].cls:""),delete t[wr]})},update:[{read:function(t){var e=this;if(!t.update)return he.resolve().then(function(){e.$emit(),t.update=!0}),!1;this.elements.forEach(function(t){t[wr]||(t[wr]={cls:ut(t,"uk-scrollspy-class")||e.cls}),t[wr].show=Ln(t,e.offsetTop,e.offsetLeft)})},write:function(n){var i=this;this.elements.forEach(function(t){var e=t[wr];!e.show||e.inview||e.queued?!e.show&&e.inview&&!e.queued&&i.repeat&&i.toggle(t,!1):(e.queued=!0,n.promise=(n.promise||he.resolve()).then(function(){return new he(function(t){return setTimeout(t,i.delay)})}).then(function(){i.toggle(t,!0),setTimeout(function(){e.queued=!1,i.$emit()},300)}))})},events:["scroll","resize"]}],methods:{toggle:function(t,e){var n=t[wr];n.off&&n.off(),Re(t,"visibility",!e&&this.hidden?"hidden":""),Le(t,this.inViewClass,e),Le(t,n.cls),/\buk-animation-/.test(n.cls)&&(n.off=Qt(t,"animationcancel animationend",function(){return Oe(t,"uk-animation-\\w*")})),te(t,e?"inview":"outview"),n.inview=e,this.$update(t)}}},_t={props:{cls:String,closest:String,scroll:Boolean,overflow:Boolean,offset:Number},data:{cls:"uk-active",closest:!1,scroll:!1,overflow:!0,offset:0},computed:{links:{get:function(t,e){return ze('a[href^="#"]',e).filter(function(t){return t.hash})},watch:function(t){this.scroll&&this.$create("scroll",t,{offset:this.offset||0})},immediate:!0},targets:function(){return ze(this.links.map(function(t){return Kt(t.hash).substr(1)}).join(","))},elements:function(t){t=t.closest;return Nt(this.links,t||"*")}},update:[{read:function(){var n=this,t=this.targets.length;if(!t||!$t(this.$el))return!1;var i=Vn(this.targets,/auto|scroll/,!0)[0],e=i.scrollTop,r=i.scrollHeight-qn(i),o=!1;return e===r?o=t-1:(this.targets.every(function(t,e){if(sn(t).top-sn(Rn(i)).top-n.offset<=0)return o=e,!0}),!1===o&&this.overflow&&(o=0)),{active:o}},write:function(t){t=t.active;this.links.forEach(function(t){return t.blur()}),De(this.elements,this.cls),!1!==t&&te(this.$el,"active",[t,Be(this.elements[t],this.cls)])},events:["scroll","resize"]}]},pe={mixins:[pi,lr],props:{top:null,bottom:Boolean,offset:String,animation:String,clsActive:String,clsInactive:String,clsFixed:String,clsBelow:String,selTarget:String,widthElement:Boolean,showOnUp:Boolean,targetOffset:Number},data:{top:0,bottom:!1,offset:0,animation:"",clsActive:"uk-active",clsInactive:"",clsFixed:"uk-sticky-fixed",clsBelow:"uk-sticky-below",selTarget:"",widthElement:!1,showOnUp:!1,targetOffset:!1},computed:{offset:function(t){return pn(t.offset)},selTarget:function(t,e){t=t.selTarget;return t&&Me(t,e)||e},widthElement:function(t,e){return Ht(t.widthElement,e)||this.placeholder},isActive:{get:function(){return He(this.selTarget,this.clsActive)},set:function(t){t&&!this.isActive?(Pe(this.selTarget,this.clsInactive,this.clsActive),te(this.$el,"active")):t||He(this.selTarget,this.clsInactive)||(Pe(this.selTarget,this.clsActive,this.clsInactive),te(this.$el,"inactive"))}}},connected:function(){this.placeholder=Me("+ .uk-sticky-placeholder",this.$el)||Me('<div class="uk-sticky-placeholder"></div>'),this.isFixed=!1,this.isActive=!1},disconnected:function(){this.isFixed&&(this.hide(),De(this.selTarget,this.clsInactive)),$e(this.placeholder),this.placeholder=null,this.widthElement=null},events:[{name:"load hashchange popstate",el:function(){return window},handler:function(){var i,r=this;!1!==this.targetOffset&&location.hash&&0<window.pageYOffset&&((i=Me(location.hash))&&gn.read(function(){var t=sn(i).top,e=sn(r.$el).top,n=r.$el.offsetHeight;r.isFixed&&t<=e+n&&e<=t+i.offsetHeight&&jn(window,t-n-(B(r.targetOffset)?r.targetOffset:0)-r.offset)}))}}],update:[{read:function(t,e){t=t.height;if(this.inactive=!this.matchMedia||!$t(this.$el),this.inactive)return!1;this.isActive&&e.has("resize")&&(this.hide(),t=this.$el.offsetHeight,this.show()),t=this.isActive?t:this.$el.offsetHeight,this.topOffset=sn(this.isFixed?this.placeholder:this.$el).top,this.bottomOffset=this.topOffset+t;e=br("bottom",this);return this.top=Math.max(L(br("top",this)),this.topOffset)-this.offset,this.bottom=e&&e-this.$el.offsetHeight,this.width=on($t(this.widthElement)?this.widthElement:this.$el).width,{height:t,top:un(this.placeholder)[0],margins:Re(this.$el,["marginTop","marginBottom","marginLeft","marginRight"])}},write:function(t){var e=t.height,n=t.margins,t=this.placeholder;Re(t,Y({height:e},n)),Bt(t,document)||(ye(this.$el,t),t.hidden=!0),this.isActive=!!this.isActive},events:["resize"]},{read:function(t){t=t.scroll;return void 0===t&&(t=0),this.scroll=window.pageYOffset,{dir:t<=this.scroll?"down":"up",scroll:this.scroll}},write:function(t,e){var n=this,i=Date.now(),r=e.has("scroll"),o=t.initTimestamp;void 0===o&&(o=0);var s=t.dir,a=t.lastDir,u=t.lastScroll,c=t.scroll,e=t.top;(t.lastScroll=c)<0||c===u&&r||this.showOnUp&&!r&&!this.isFixed||((300<i-o||s!==a)&&(t.initScroll=c,t.initTimestamp=i),t.lastDir=s,this.showOnUp&&!this.isFixed&&Math.abs(t.initScroll-c)<=30&&Math.abs(u-c)<=10||(this.inactive||c<this.top||this.showOnUp&&(c<=this.top||"down"===s&&r||"up"===s&&!this.isFixed&&c<=this.bottomOffset)?this.isFixed?(this.isFixed=!1,this.animation&&c>this.topOffset?(nn.cancel(this.$el),nn.out(this.$el,this.animation).then(function(){return n.hide()},Q)):this.hide()):nn.inProgress(this.$el)&&c<e&&(nn.cancel(this.$el),this.hide()):this.isFixed?this.update():this.animation?(nn.cancel(this.$el),this.show(),nn.in(this.$el,this.animation).catch(Q)):this.show()))},events:["resize","scroll"]}],methods:{show:function(){this.isFixed=!0,this.update(),this.placeholder.hidden=!1},hide:function(){this.isActive=!1,De(this.$el,this.clsFixed,this.clsBelow),Re(this.$el,{position:"",top:"",width:""}),this.placeholder.hidden=!0},update:function(){var t=0!==this.top||this.scroll>this.top,e=Math.max(0,this.offset);B(this.bottom)&&this.scroll>this.bottom-this.offset&&(e=this.bottom-this.scroll),Re(this.$el,{position:"fixed",top:e+"px",width:this.width}),this.isActive=t,Le(this.$el,this.clsBelow,this.scroll>this.bottomOffset),Be(this.$el,this.clsFixed)}}};function br(t,e){var n=e.$props,i=e.$el,e=e[t+"Offset"],t=n[t];if(t)return z(t)&&t.match(/^-?\d/)?e+pn(t):sn(!0===t?Tt(i):Ht(t,i)).bottom}var xr,yr,kr,Zn={mixins:[mi],args:"connect",props:{connect:String,toggle:String,active:Number,swiping:Boolean},data:{connect:"~.uk-switcher",toggle:"> * > :first-child",active:0,swiping:!0,cls:"uk-active",attrItem:"uk-switcher-item"},computed:{connects:{get:function(t,e){return Lt(t.connect,e)},watch:function(t){var n=this;this.swiping&&Re(t,"touch-action","pan-y pinch-zoom");var i=this.index();this.connects.forEach(function(t){return Ot(t).forEach(function(t,e){return Le(t,n.cls,e===i)})})},immediate:!0},toggles:{get:function(t,e){return ze(t.toggle,e).filter(function(t){return!Mt(t,".uk-disabled *, .uk-disabled, [disabled]")})},watch:function(t){var e=this.index();this.show(~e?e:t[this.active]||t[0])},immediate:!0},children:function(){var t=this;return Ot(this.$el).filter(function(e){return t.toggles.some(function(t){return Bt(t,e)})})}},events:[{name:"click",delegate:function(){return this.toggle},handler:function(t){t.preventDefault(),this.show(t.current)}},{name:"click",el:function(){return this.connects},delegate:function(){return"["+this.attrItem+"],[data-"+this.attrItem+"]"},handler:function(t){t.preventDefault(),this.show(ut(t.current,this.attrItem))}},{name:"swipeRight swipeLeft",filter:function(){return this.swiping},el:function(){return this.connects},handler:function(t){t=t.type;this.show(u(t,"Left")?"next":"previous")}}],methods:{index:function(){var e=this;return x(this.children,function(t){return He(t,e.cls)})},show:function(t){var n=this,i=this.index(),r=it(this.children[it(t,this.toggles,i)],Ot(this.$el));i!==r&&(this.children.forEach(function(t,e){Le(t,n.cls,r===e),ot(n.toggles[e],"aria-expanded",r===e)}),this.connects.forEach(function(t){var e=t.children;return n.toggleElement(W(e).filter(function(t){return He(t,n.cls)}),!1,0<=i).then(function(){return n.toggleElement(e[r],!0,0<=i)})}))}}},hr={mixins:[pi],extends:Zn,props:{media:Boolean},data:{media:960,attrItem:"uk-tab-item"},connected:function(){var t=He(this.$el,"uk-tab-left")?"uk-tab-left":!!He(this.$el,"uk-tab-right")&&"uk-tab-right";t&&this.$create("toggle",this.$el,{cls:t,mode:"media",media:this.media})}},Ni={mixins:[lr,mi],args:"target",props:{href:String,target:null,mode:"list",queued:Boolean},data:{href:!1,target:!1,mode:"click",queued:!0},connected:function(){Et(this.$el)||ot(this.$el,"tabindex","0")},computed:{target:{get:function(t,e){var n=t.href;return(t=Lt((t=t.target)||n,e)).length&&t||[e]},watch:function(){this.updateAria()},immediate:!0}},events:[{name:wt+" "+bt+" focus blur",filter:function(){return w(this.mode,"hover")},handler:function(t){ae(t)||this.toggle("toggle"+(w([wt,"focus"],t.type)?"show":"hide"))}},{name:"click",filter:function(){return w(this.mode,"click")||pt&&w(this.mode,"hover")},handler:function(t){var e;(Nt(t.target,'a[href="#"], a[href=""]')||(e=Nt(t.target,"a[href]"))&&(!$r(this.target,this.cls)||e.hash&&Mt(this.target,e.hash)))&&t.preventDefault(),this.toggle()}},{name:"toggled",self:!0,el:function(){return this.target},handler:function(t,e){this.updateAria(e)}}],update:{read:function(){return!(!w(this.mode,"media")||!this.media)&&{match:this.matchMedia}},write:function(t){var e=t.match,t=this.isToggled(this.target);(e?!t:t)&&this.toggle()},events:["resize"]},methods:{toggle:function(t){var n=this;if(te(this.target,t||"toggle",[this])){if(!this.queued)return this.toggleElement(this.target);var e,i=this.target.filter(function(t){return He(t,n.clsLeave)});i.length?this.target.forEach(function(t){var e=w(i,t);n.toggleElement(t,e,e)}):(e=this.target.filter(this.isToggled),this.toggleElement(e,!1).then(function(){return n.toggleElement(n.target.filter(function(t){return!w(e,t)}),!0)}))}},updateAria:function(t){ot(this.$el,"aria-expanded",M(t)?t:$r(this.target,this.cls))}}};function $r(t,e){return e?He(t,e.split(" ")[0]):$t(t)}function Sr(t){for(var e=t.addedNodes,n=t.removedNodes,i=0;i<e.length;i++)Ae(e[i],yr);for(var r=0;r<n.length;r++)Ae(n[r],kr)}function Ir(t){var e=t.target,n=t.attributeName,t=ci(n);t&&t in xr&&(st(e,n)?xr[t](e):(t=xr.getComponent(e,t))&&t.$destroy())}G(Object.freeze({__proto__:null,Accordion:vi,Alert:bi,Cover:yi,Drop:Si,Dropdown:Si,FormCustom:Ii,Gif:Ei,Grid:Mi,HeightMatch:Bi,HeightViewport:Pi,Icon:Yi,Img:tr,Leader:dr,Margin:Ti,Modal:{install:function(t){var a=t.modal;function i(t,e,n,i){e=Y({bgClose:!1,escClose:!0,labels:a.labels},e);var r=a.dialog(t(e),e),o=new ce,s=!1;return Jt(r.$el,"submit","form",function(t){t.preventDefault(),o.resolve(i&&i(r)),s=!0,r.hide()}),Jt(r.$el,"hide",function(){return!s&&n(o)}),o.promise.dialog=r,o.promise}a.dialog=function(t,e){var n=a('<div class="uk-modal"> <div class="uk-modal-dialog">'+t+"</div> </div>",e);return n.show(),Jt(n.$el,"hidden",function(){return he.resolve().then(function(){return n.$destroy(!0)})},{self:!0}),n},a.alert=function(e,t){return i(function(t){t=t.labels;return'<div class="uk-modal-body">'+(z(e)?e:we(e))+'</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>'+t.ok+"</button> </div>"},t,function(t){return t.resolve()})},a.confirm=function(e,t){return i(function(t){t=t.labels;return'<form> <div class="uk-modal-body">'+(z(e)?e:we(e))+'</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">'+t.cancel+'</button> <button class="uk-button uk-button-primary" autofocus>'+t.ok+"</button> </div> </form>"},t,function(t){return t.reject()})},a.prompt=function(e,n,t){return i(function(t){t=t.labels;return'<form class="uk-form-stacked"> <div class="uk-modal-body"> <label>'+(z(e)?e:we(e))+'</label> <input class="uk-input" value="'+(n||"")+'" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">'+t.cancel+'</button> <button class="uk-button uk-button-primary">'+t.ok+"</button> </div> </form>"},t,function(t){return t.resolve(null)},function(t){return Me("input",t.$el).value})},a.labels={ok:"Ok",cancel:"Cancel"}},mixins:[mr],data:{clsPage:"uk-modal-page",selPanel:".uk-modal-dialog",selClose:".uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full"},events:[{name:"show",self:!0,handler:function(){He(this.panel,"uk-margin-auto-vertical")?Be(this.$el,"uk-flex"):Re(this.$el,"display","block"),cn(this.$el)}},{name:"hidden",self:!0,handler:function(){Re(this.$el,"display",""),De(this.$el,"uk-flex")}}]},Nav:{extends:vi,data:{targets:"> .uk-parent",toggle:"> a",content:"> ul"}},Navbar:o,Offcanvas:l,OverflowAuto:t,Responsive:{props:["width","height"],connected:function(){Be(this.$el,"uk-responsive-width")},update:{read:function(){return!!($t(this.$el)&&this.width&&this.height)&&{width:hn(Tt(this.$el)),height:this.height}},write:function(t){cn(this.$el,nt.contain({height:this.height,width:this.width},t).height)},events:["resize"]}},Scroll:dt,Scrollspy:ft,ScrollspyNav:_t,Sticky:pe,Svg:Hi,Switcher:Zn,Tab:hr,Toggle:Ni,Video:xi,Close:Ji,Spinner:Zi,SlidenavNext:Gi,SlidenavPrevious:Gi,SearchIcon:Ki,Marker:Xi,NavbarToggleIcon:Xi,OverlayIcon:Xi,PaginationNext:Xi,PaginationPrevious:Xi,Totop:Xi}),function(t,e){return Qn.component(e,t)}),Qn.use(function(e){var t,n,i,r;ct&&(n=function(){t||(t=!0,gn.write(function(){return t=!1}),e.update(null,"resize"))},Jt(window,"load resize",n),Jt(document,"loadedmetadata load",n,!0),"ResizeObserver"in window&&new ResizeObserver(n).observe(document.documentElement),Jt(window,"scroll",function(t){i||(i=!0,gn.write(function(){return i=!1}),e.update(null,t.type))},{passive:!0,capture:!0}),r=0,Jt(document,"animationstart",function(t){t=t.target;(Re(t,"animationName")||"").match(/^uk-.*(left|right)/)&&(r++,Re(document.documentElement,"overflowX","hidden"),setTimeout(function(){--r||Re(document.documentElement,"overflowX","")},R(Re(t,"animationDuration"))+100))},!0),Jt(document,mt,function(t){var s,a;ae(t)&&(s=ue(t),a="tagName"in t.target?t.target:Tt(t.target),Qt(document,vt+" "+xt+" scroll",function(t){var e=ue(t),r=e.x,o=e.y;("scroll"!==t.type&&a&&r&&100<Math.abs(s.x-r)||o&&100<Math.abs(s.y-o))&&setTimeout(function(){var t,e,n,i;te(a,"swipe"),te(a,"swipe"+(t=s.x,e=s.y,n=r,i=o,Math.abs(t-n)>=Math.abs(e-i)?0<t-n?"Left":"Right":0<e-i?"Up":"Down"))})}))},{passive:!0}))}),yr=(xr=Qn).connect,kr=xr.disconnect,ct&&window.MutationObserver&&gn.read(function(){document.body&&Ae(document.body,yr),new MutationObserver(function(t){return t.forEach(Sr)}).observe(document,{childList:!0,subtree:!0}),new MutationObserver(function(t){return t.forEach(Ir)}).observe(document,{attributes:!0,subtree:!0}),xr._initialized=!0});Zn={mixins:[pi],props:{date:String,clsWrapper:String},data:{date:"",clsWrapper:".uk-countdown-%unit%"},computed:{date:function(t){t=t.date;return Date.parse(t)},days:function(t,e){return Me(t.clsWrapper.replace("%unit%","days"),e)},hours:function(t,e){return Me(t.clsWrapper.replace("%unit%","hours"),e)},minutes:function(t,e){return Me(t.clsWrapper.replace("%unit%","minutes"),e)},seconds:function(t,e){return Me(t.clsWrapper.replace("%unit%","seconds"),e)},units:function(){var e=this;return["days","hours","minutes","seconds"].filter(function(t){return e[t]})}},connected:function(){this.start()},disconnected:function(){var e=this;this.stop(),this.units.forEach(function(t){return ve(e[t])})},events:[{name:"visibilitychange",el:function(){return document},handler:function(){document.hidden?this.stop():this.start()}}],update:{write:function(){var i=this,r=function(t){t-=Date.now();return{total:t,seconds:t/1e3%60,minutes:t/1e3/60%60,hours:t/1e3/60/60%24,days:t/1e3/60/60/24}}(this.date);r.total<=0&&(this.stop(),r.days=r.hours=r.minutes=r.seconds=0),this.units.forEach(function(t){var e=(e=String(Math.floor(r[t]))).length<2?"0"+e:e,n=i[t];n.textContent!==e&&((e=e.split("")).length!==n.children.length&&we(n,e.map(function(){return"<span></span>"}).join("")),e.forEach(function(t,e){return n.children[e].textContent=t}))})}},methods:{start:function(){this.stop(),this.date&&this.units.length&&(this.$update(),this.timer=setInterval(this.$update,1e3))},stop:function(){this.timer&&(clearInterval(this.timer),this.timer=null)}}};var Er="uk-transition-leave",Tr="uk-transition-enter";function Cr(t,s,a,u){void 0===u&&(u=0);var c=_r(s,!0),h={opacity:1},l={opacity:0},e=function(t){return function(){return c===_r(s)?t():he.reject()}},n=e(function(){return Be(s,Er),he.all(Mr(s).map(function(e,n){return new he(function(t){return setTimeout(function(){return Ze.start(e,l,a/2,"ease").then(t)},n*u)})})).then(function(){return De(s,Er)})}),e=e(function(){var o=cn(s);return Be(s,Tr),t(),Re(Ot(s),{opacity:0}),new he(function(r){return requestAnimationFrame(function(){var t=Ot(s),e=cn(s);Re(s,"alignContent","flex-start"),cn(s,o);var n=Mr(s);Re(t,l);var i=n.map(function(e,n){return new he(function(t){return setTimeout(function(){return Ze.start(e,h,a/2,"ease").then(t)},n*u)})});o!==e&&i.push(Ze.start(s,{height:e},a/2+n.length*u,"ease")),he.all(i).then(function(){De(s,Tr),c===_r(s)&&(Re(s,{height:"",alignContent:""}),Re(t,{opacity:""}),delete s.dataset.transition),r()})})})});return(He(s,Er)?Ar(s):He(s,Tr)?Ar(s).then(n):n()).then(e)}function _r(t,e){return e&&(t.dataset.transition=1+_r(t)),H(t.dataset.transition)||0}function Ar(t){return he.all(Ot(t).filter(Ze.inProgress).map(function(e){return new he(function(t){return Qt(e,"transitionend transitioncanceled",t)})}))}function Mr(t){return Ci(Ot(t)).reduce(function(t,e){return t.concat(K(e.filter(function(t){return Ln(t)}),"offsetLeft"))},[])}function zr(t,d,f){return new he(function(l){return requestAnimationFrame(function(){var u=Ot(d),c=u.map(function(t){return Nr(t,!0)}),h=Re(d,["height","padding"]);Ze.cancel(d),u.forEach(Ze.cancel),Br(d),t(),u=u.concat(Ot(d).filter(function(t){return!w(u,t)})),he.resolve().then(function(){gn.flush();var n,i,r,t,e,o=Re(d,["height","padding"]),e=(n=d,r=c,t=(i=u).map(function(t,e){return!!(Tt(t)&&e in r)&&(r[e]?$t(t)?Dr(t):{opacity:0}:{opacity:$t(t)?1:0})}),e=t.map(function(t,e){e=Tt(i[e])===n&&(r[e]||Nr(i[e]));return!!e&&(t?"opacity"in t||(e.opacity%1?t.opacity=1:delete e.opacity):delete e.opacity,e)}),[t,e]),s=e[0],a=e[1];u.forEach(function(t,e){return a[e]&&Re(t,a[e])}),Re(d,Y({display:"block"},h)),requestAnimationFrame(function(){var t=u.map(function(t,e){return Tt(t)===d&&Ze.start(t,s[e],f,"ease")}).concat(Ze.start(d,o,f,"ease"));he.all(t).then(function(){u.forEach(function(t,e){return Tt(t)===d&&Re(t,"display",0===s[e].opacity?"none":"")}),Br(d)},Q).then(l)})})})})}function Nr(t,e){var n=Re(t,"zIndex");return!!$t(t)&&Y({display:"",opacity:e?Re(t,"opacity"):"0",pointerEvents:"none",position:"absolute",zIndex:"auto"===n?Pt(t):n},Dr(t))}function Br(t){Re(t.children,{height:"",left:"",opacity:"",pointerEvents:"",position:"",top:"",marginTop:"",marginLeft:"",transform:"",width:"",zIndex:""}),Re(t,{height:"",display:"",padding:""})}function Dr(t){var e=sn(t),n=e.height,i=e.width,r=an(t),e=r.top,r=r.left,t=Re(t,["marginTop","marginLeft"]);return{top:e,left:r,height:n,width:i,marginLeft:t.marginLeft,marginTop:t.marginTop,transform:""}}hr={props:{duration:Number,animation:Boolean},data:{duration:150,animation:"slide"},methods:{animate:function(t,e){var n=this;void 0===e&&(e=this.$el);var i=this.animation;return("fade"===i?Cr:"delayed-fade"===i?function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return Cr.apply(void 0,t.concat([40]))}:i?zr:function(){return t(),he.resolve()})(t,e,this.duration).then(function(){return n.$update(e,"resize")},Q)}}},Ni={mixins:[hr],args:"target",props:{target:Boolean,selActive:Boolean},data:{target:null,selActive:!1,attrItem:"uk-filter-control",cls:"uk-active",duration:250},computed:{toggles:{get:function(t,e){t=t.attrItem;return ze("["+t+"],[data-"+t+"]",e)},watch:function(){var e,n=this;this.updateState(),!1!==this.selActive&&(e=ze(this.selActive,this.$el),this.toggles.forEach(function(t){return Le(t,n.cls,w(e,t))}))},immediate:!0},children:{get:function(t,e){return ze(t.target+" > *",e)},watch:function(t,e){var n;e&&(n=e,(t=t).length!==n.length||!t.every(function(t){return~n.indexOf(t)}))&&this.updateState()},immediate:!0}},events:[{name:"click",delegate:function(){return"["+this.attrItem+"],[data-"+this.attrItem+"]"},handler:function(t){t.preventDefault(),this.apply(t.current)}}],methods:{apply:function(t){var e,n,i=this.getState(),t=Pr(t,this.attrItem,this.getState());e=i,n=t,["filter","sort"].every(function(t){return q(e[t],n[t])})||this.setState(t)},getState:function(){var n=this;return this.toggles.filter(function(t){return He(t,n.cls)}).reduce(function(t,e){return Pr(e,n.attrItem,t)},{filter:{"":""},sort:[]})},setState:function(n,i){var r=this;void 0===i&&(i=!0),n=Y({filter:{"":""},sort:[]},n),te(this.$el,"beforeFilter",[this,n]),this.toggles.forEach(function(t){return Le(t,r.cls,!!function(t,e,n){var i=n.filter;void 0===i&&(i={"":""});var r=n.sort,o=r[0],s=r[1],n=Or(t,e),r=n.filter;void 0===r&&(r="");t=n.group;void 0===t&&(t="");e=n.sort,n=n.order;void 0===n&&(n="asc");return O(e)?t in i&&r===i[t]||!r&&t&&!(t in i)&&!i[""]:o===e&&s===n}(t,r.attrItem,n))}),he.all(ze(this.target,this.$el).map(function(t){function e(){!function(t,e,n){var i=function(t){var t=t.filter,e="";return G(t,function(t){return e+=t||""}),e}(t);n.forEach(function(t){return Re(t,"display",i&&!Mt(t,i)?"none":"")});var r=t.sort,t=r[0],r=r[1];t&&(q(r=function(t,n,i){return Y([],t).sort(function(t,e){return ut(t,n).localeCompare(ut(e,n),void 0,{numeric:!0})*("asc"===i||-1)})}(n,t,r),n)||be(e,r))}(n,t,Ot(t)),r.$update(r.$el)}return i?r.animate(e,t):e()})).then(function(){return te(r.$el,"afterFilter",[r])})},updateState:function(){var t=this;gn.write(function(){return t.setState(t.getState(),!1)})}}};function Or(t,e){return Tn(ut(t,e),["filter"])}function Pr(t,e,n){var i=Or(t,e),r=i.filter,t=i.group,e=i.sort,i=i.order;return void 0===i&&(i="asc"),(r||O(e))&&(t?r?(delete n.filter[""],n.filter[t]=r):(delete n.filter[t],(D(n.filter)||""in n.filter)&&(n.filter={"":r||""})):n.filter={"":r||""}),O(e)||(n.sort=[e,i]),n}xi={slide:{show:function(t){return[{transform:Lr(-100*t)},{transform:Lr()}]},percent:Hr,translate:function(t,e){return[{transform:Lr(-100*e*t)},{transform:Lr(100*e*(1-t))}]}}};function Hr(t){return Math.abs(Re(t,"transform").split(",")[4]/t.offsetWidth)||0}function Lr(t,e){return void 0===t&&(t=0),void 0===e&&(e="%"),t+=t?e:"",ht?"translateX("+t+")":"translate3d("+t+", 0, 0)"}function jr(t){return"scale3d("+t+", "+t+", 1)"}var Fr=Y({},xi,{fade:{show:function(){return[{opacity:0},{opacity:1}]},percent:function(t){return 1-Re(t,"opacity")},translate:function(t){return[{opacity:1-t},{opacity:t}]}},scale:{show:function(){return[{opacity:0,transform:jr(.8)},{opacity:1,transform:jr(1)}]},percent:function(t){return 1-Re(t,"opacity")},translate:function(t){return[{opacity:1-t,transform:jr(1-.2*t)},{opacity:t,transform:jr(.8+.2*t)}]}}});function Wr(t,e,n){te(t,ee(e,!1,!1,n))}Ji={mixins:[{props:{autoplay:Boolean,autoplayInterval:Number,pauseOnHover:Boolean},data:{autoplay:!1,autoplayInterval:7e3,pauseOnHover:!0},connected:function(){this.autoplay&&this.startAutoplay()},disconnected:function(){this.stopAutoplay()},update:function(){ot(this.slides,"tabindex","-1")},events:[{name:"visibilitychange",el:function(){return document},filter:function(){return this.autoplay},handler:function(){document.hidden?this.stopAutoplay():this.startAutoplay()}}],methods:{startAutoplay:function(){var t=this;this.stopAutoplay(),this.interval=setInterval(function(){return(!t.draggable||!Me(":focus",t.$el))&&(!t.pauseOnHover||!Mt(t.$el,":hover"))&&!t.stack.length&&t.show("next")},this.autoplayInterval)},stopAutoplay:function(){this.interval&&clearInterval(this.interval)}}},{props:{draggable:Boolean},data:{draggable:!0,threshold:10},created:function(){var i=this;["start","move","end"].forEach(function(t){var n=i[t];i[t]=function(t){var e=ue(t).x*(lt?-1:1);i.prevPos=e!==i.pos?i.pos:i.prevPos,i.pos=e,n(t)}})},events:[{name:mt,delegate:function(){return this.selSlides},handler:function(t){var e;!this.draggable||!ae(t)&&(!(e=t.target).children.length&&e.childNodes.length)||Nt(t.target,St)||0<t.button||this.length<2||this.start(t)}},{name:"dragstart",handler:function(t){t.preventDefault()}}],methods:{start:function(){this.drag=this.pos,this._transitioner?(this.percent=this._transitioner.percent(),this.drag+=this._transitioner.getDistance()*this.percent*this.dir,this._transitioner.cancel(),this._transitioner.translate(this.percent),this.dragging=!0,this.stack=[]):this.prevIndex=this.index,Jt(document,gt,this.move,{passive:!1}),Jt(document,vt+" "+xt+" input",this.end,!0),Re(this.list,"userSelect","none")},move:function(t){var e=this,n=this.pos-this.drag;if(!(0==n||this.prevPos===this.pos||!this.dragging&&Math.abs(n)<this.threshold)){Re(this.list,"pointerEvents","none"),t.cancelable&&t.preventDefault(),this.dragging=!0,this.dir=n<0?1:-1;for(var i=this.slides,r=this.prevIndex,o=Math.abs(n),s=this.getIndex(r+this.dir,r),a=this._getDistance(r,s)||i[r].offsetWidth;s!==r&&a<o;)this.drag-=a*this.dir,o-=a,s=this.getIndex((r=s)+this.dir,r),a=this._getDistance(r,s)||i[r].offsetWidth;this.percent=o/a;var u,c=i[r],t=i[s],n=this.index!==s,h=r===s;[this.index,this.prevIndex].filter(function(t){return!w([s,r],t)}).forEach(function(t){te(i[t],"itemhidden",[e]),h&&(u=!0,e.prevIndex=r)}),(this.index===r&&this.prevIndex!==r||u)&&te(i[this.index],"itemshown",[this]),n&&(this.prevIndex=r,this.index=s,h||te(c,"beforeitemhide",[this]),te(t,"beforeitemshow",[this])),this._transitioner=this._translate(Math.abs(this.percent),c,!h&&t),n&&(h||te(c,"itemhide",[this]),te(t,"itemshow",[this]))}},end:function(){var t;Zt(document,gt,this.move,{passive:!1}),Zt(document,vt+" "+xt+" input",this.end,!0),this.dragging&&(this.dragging=null,this.index===this.prevIndex?(this.percent=1-this.percent,this.dir*=-1,this._show(!1,this.index,!0),this._transitioner=null):(t=(lt?this.dir*(lt?1:-1):this.dir)<0==this.prevPos>this.pos,this.index=t?this.index:this.prevIndex,t&&(this.percent=1-this.percent),this.show(0<this.dir&&!t||this.dir<0&&t?"next":"previous",!0))),Re(this.list,{userSelect:"",pointerEvents:""}),this.drag=this.percent=null}}},{data:{selNav:!1},computed:{nav:function(t,e){return Me(t.selNav,e)},selNavItem:function(t){t=t.attrItem;return"["+t+"],[data-"+t+"]"},navItems:function(t,e){return ze(this.selNavItem,e)}},update:{write:function(){var n=this;this.nav&&this.length!==this.nav.children.length&&we(this.nav,this.slides.map(function(t,e){return"<li "+n.attrItem+'="'+e+'"><a href></a></li>'}).join("")),this.navItems.concat(this.nav).forEach(function(t){return t&&(t.hidden=!n.maxIndex)}),this.updateNav()},events:["resize"]},events:[{name:"click",delegate:function(){return this.selNavItem},handler:function(t){t.preventDefault(),this.show(ut(t.current,this.attrItem))}},{name:"itemshow",handler:"updateNav"}],methods:{updateNav:function(){var n=this,i=this.getValidIndex();this.navItems.forEach(function(t){var e=ut(t,n.attrItem);Le(t,n.clsActive,H(e)===i),Le(t,"uk-invisible",n.finite&&("previous"===e&&0===i||"next"===e&&i>=n.maxIndex))})}}}],props:{clsActivated:Boolean,easing:String,index:Number,finite:Boolean,velocity:Number,selSlides:String},data:function(){return{easing:"ease",finite:!1,velocity:1,index:0,prevIndex:-1,stack:[],percent:0,clsActive:"uk-active",clsActivated:!1,Transitioner:!1,transitionOptions:{}}},connected:function(){this.prevIndex=-1,this.index=this.getValidIndex(this.$props.index),this.stack=[]},disconnected:function(){De(this.slides,this.clsActive)},computed:{duration:function(t,e){t=t.velocity;return Vr(e.offsetWidth/t)},list:function(t,e){return Me(t.selList,e)},maxIndex:function(){return this.length-1},selSlides:function(t){return t.selList+" "+(t.selSlides||"> *")},slides:{get:function(){return ze(this.selSlides,this.$el)},watch:function(){this.$reset()}},length:function(){return this.slides.length}},events:{itemshown:function(){this.$update(this.list)}},methods:{show:function(t,e){var n=this;if(void 0===e&&(e=!1),!this.dragging&&this.length){var i=this.stack,r=e?0:i.length,o=function(){i.splice(r,1),i.length&&n.show(i.shift(),!0)};if(i[e?"unshift":"push"](t),!e&&1<i.length)2===i.length&&this._transitioner.forward(Math.min(this.duration,200));else{var s,a=this.getIndex(this.index),u=He(this.slides,this.clsActive)&&this.slides[a],c=this.getIndex(t,this.index),h=this.slides[c];if(u!==h){if(this.dir=(s=a,"next"!==(t=t)&&("previous"===t||t<s)?-1:1),this.prevIndex=a,this.index=c,u&&!te(u,"beforeitemhide",[this])||!te(h,"beforeitemshow",[this,u]))return this.index=this.prevIndex,void o();e=this._show(u,h,e).then(function(){return u&&te(u,"itemhidden",[n]),te(h,"itemshown",[n]),new he(function(t){gn.write(function(){i.shift(),i.length?n.show(i.shift(),!0):n._transitioner=null,t()})})});return u&&te(u,"itemhide",[this]),te(h,"itemshow",[this]),e}o()}}},getIndex:function(t,e){return void 0===t&&(t=this.index),void 0===e&&(e=this.index),Z(it(t,this.slides,e,this.finite),0,this.maxIndex)},getValidIndex:function(t,e){return void 0===t&&(t=this.index),void 0===e&&(e=this.prevIndex),this.getIndex(t,e)},_show:function(t,e,n){if(this._transitioner=this._getTransitioner(t,e,this.dir,Y({easing:n?e.offsetWidth<600?"cubic-bezier(0.25, 0.46, 0.45, 0.94)":"cubic-bezier(0.165, 0.84, 0.44, 1)":this.easing},this.transitionOptions)),!n&&!t)return this._translate(1),he.resolve();t=this.stack.length;return this._transitioner[1<t?"forward":"show"](1<t?Math.min(this.duration,75+75/(t-1)):this.duration,this.percent)},_getDistance:function(t,e){return this._getTransitioner(t,t!==e&&e).getDistance()},_translate:function(t,e,n){void 0===e&&(e=this.prevIndex),void 0===n&&(n=this.index);n=this._getTransitioner(e!==n&&e,n);return n.translate(t),n},_getTransitioner:function(t,e,n,i){return void 0===t&&(t=this.prevIndex),void 0===e&&(e=this.index),void 0===n&&(n=this.dir||1),void 0===i&&(i=this.transitionOptions),new this.Transitioner(N(t)?this.slides[t]:t,N(e)?this.slides[e]:e,n*(lt?-1:1),i)}}};function Vr(t){return.5*t+300}var Zi={mixins:[Ji],props:{animation:String},data:{animation:"slide",clsActivated:"uk-transition-active",Animations:xi,Transitioner:function(r,o,s,t){var e=t.animation,a=t.easing,n=e.percent,i=e.translate,u=(e=void 0===(e=e.show)?Q:e)(s),c=new ce;return{dir:s,show:function(t,e,n){var i=this;void 0===e&&(e=0);n=n?"linear":a;return t-=Math.round(t*Z(e,-1,1)),this.translate(e),Wr(o,"itemin",{percent:e,duration:t,timing:n,dir:s}),Wr(r,"itemout",{percent:1-e,duration:t,timing:n,dir:s}),he.all([Ze.start(o,u[1],t,n),Ze.start(r,u[0],t,n)]).then(function(){i.reset(),c.resolve()},Q),c.promise},cancel:function(){Ze.cancel([o,r])},reset:function(){for(var t in u[0])Re([o,r],t,"")},forward:function(t,e){return void 0===e&&(e=this.percent()),Ze.cancel([o,r]),this.show(t,e,!0)},translate:function(t){this.reset();var e=i(t,s);Re(o,e[1]),Re(r,e[0]),Wr(o,"itemtranslatein",{percent:t,dir:s}),Wr(r,"itemtranslateout",{percent:1-t,dir:s})},percent:function(){return n(r||o,o,s)},getDistance:function(){return r&&r.offsetWidth}}}},computed:{animation:function(t){var e=t.animation,t=t.Animations;return Y(t[e]||t.slide,{name:e})},transitionOptions:function(){return{animation:this.animation}}},events:{"itemshow itemhide itemshown itemhidden":function(t){t=t.target;this.$update(t)},beforeitemshow:function(t){Be(t.target,this.clsActive)},itemshown:function(t){Be(t.target,this.clsActivated)},itemhidden:function(t){De(t.target,this.clsActive,this.clsActivated)}}},Rr={mixins:[fr,mr,mi,Zi],functional:!0,props:{delayControls:Number,preload:Number,videoAutoplay:Boolean,template:String},data:function(){return{preload:1,videoAutoplay:!1,delayControls:3e3,items:[],cls:"uk-open",clsPage:"uk-lightbox-page",selList:".uk-lightbox-items",attrItem:"uk-lightbox-item",selClose:".uk-close-large",selCaption:".uk-lightbox-caption",pauseOnHover:!1,velocity:2,Animations:Fr,template:'<div class="uk-lightbox uk-overflow-hidden"> <ul class="uk-lightbox-items"></ul> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>'}},created:function(){var t=Me(this.template),e=Me(this.selList,t);this.items.forEach(function(){return be(e,"<li>")}),this.$mount(be(this.container,t))},computed:{caption:function(t,e){return Me(t.selCaption,e)}},events:[{name:gt+" "+mt+" keydown",handler:"showControls"},{name:"click",self:!0,delegate:function(){return this.selSlides},handler:function(t){t.defaultPrevented||this.hide()}},{name:"shown",self:!0,handler:function(){this.showControls()}},{name:"hide",self:!0,handler:function(){this.hideControls(),De(this.slides,this.clsActive),Ze.stop(this.slides)}},{name:"hidden",self:!0,handler:function(){this.$destroy(!0)}},{name:"keyup",el:function(){return document},handler:function(t){if(this.isToggled(this.$el)&&this.draggable)switch(t.keyCode){case 37:this.show("previous");break;case 39:this.show("next")}}},{name:"beforeitemshow",handler:function(t){this.isToggled()||(this.draggable=!1,t.preventDefault(),this.toggleElement(this.$el,!0,!1),this.animation=Fr.scale,De(t.target,this.clsActive),this.stack.splice(1,0,this.index))}},{name:"itemshow",handler:function(){we(this.caption,this.getItem().caption||"");for(var t=-this.preload;t<=this.preload;t++)this.loadItem(this.index+t)}},{name:"itemshown",handler:function(){this.draggable=this.$props.draggable}},{name:"itemload",handler:function(t,n){var i=this,r=n.source,e=n.type,o=n.alt;void 0===o&&(o="");var s,a,u,c=n.poster,h=n.attrs;void 0===h&&(h={}),this.setItem(n,"<span uk-spinner></span>"),r&&(a={frameborder:"0",allow:"autoplay",allowfullscreen:"",style:"max-width: 100%; box-sizing: border-box;","uk-responsive":"","uk-video":""+this.videoAutoplay},"image"===e||r.match(/\.(avif|jpe?g|a?png|gif|svg|webp)($|\?)/i)?ge(r,h.srcset,h.size).then(function(t){var e=t.width,t=t.height;return i.setItem(n,qr("img",Y({src:r,width:e,height:t,alt:o},h)))},function(){return i.setError(n)}):"video"===e||r.match(/\.(mp4|webm|ogv)($|\?)/i)?(Jt(u=qr("video",Y({src:r,poster:c,controls:"",playsinline:"","uk-video":""+this.videoAutoplay},h)),"loadedmetadata",function(){ot(u,{width:u.videoWidth,height:u.videoHeight}),i.setItem(n,u)}),Jt(u,"error",function(){return i.setError(n)})):"iframe"===e||r.match(/\.(html|php)($|\?)/i)?this.setItem(n,qr("iframe",Y({src:r,frameborder:"0",allowfullscreen:"",class:"uk-lightbox-iframe"},h))):(s=r.match(/\/\/(?:.*?youtube(-nocookie)?\..*?[?&]v=|youtu\.be\/)([\w-]{11})[&?]?(.*)?/))?this.setItem(n,qr("iframe",Y({src:"https://www.youtube"+(s[1]||"")+".com/embed/"+s[2]+(s[3]?"?"+s[3]:""),width:1920,height:1080},a,h))):(s=r.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/))&&me("https://vimeo.com/api/oembed.json?maxwidth=1920&url="+encodeURI(r),{responseType:"json",withCredentials:!1}).then(function(t){var e=t.response,t=e.height,e=e.width;return i.setItem(n,qr("iframe",Y({src:"https://player.vimeo.com/video/"+s[1]+(s[2]?"?"+s[2]:""),width:e,height:t},a,h)))},function(){return i.setError(n)}))}}],methods:{loadItem:function(t){void 0===t&&(t=this.index);t=this.getItem(t);this.getSlide(t).childElementCount||te(this.$el,"itemload",[t])},getItem:function(t){return void 0===t&&(t=this.index),this.items[it(t,this.slides)]},setItem:function(t,e){te(this.$el,"itemloaded",[this,we(this.getSlide(t),e)])},getSlide:function(t){return this.slides[this.items.indexOf(t)]},setError:function(t){this.setItem(t,'<span uk-icon="icon: bolt; ratio: 2"></span>')},showControls:function(){clearTimeout(this.controlsTimer),this.controlsTimer=setTimeout(this.hideControls,this.delayControls),Be(this.$el,"uk-active","uk-transition-active")},hideControls:function(){De(this.$el,"uk-active","uk-transition-active")}}};function qr(t,e){t=_e("<"+t+">");return ot(t,e),t}Gi={install:function(t,e){t.lightboxPanel||t.component("lightboxPanel",Rr);Y(e.props,t.component("lightboxPanel").options.props)},props:{toggle:String},data:{toggle:"a"},computed:{toggles:{get:function(t,e){return ze(t.toggle,e)},watch:function(){this.hide()}}},disconnected:function(){this.hide()},events:[{name:"click",delegate:function(){return this.toggle+":not(.uk-disabled)"},handler:function(t){t.preventDefault(),this.show(t.current)}}],methods:{show:function(t){var e,n=this,i=J(this.toggles.map(Ur),"source");return _(t)&&(e=Ur(t).source,t=x(i,function(t){t=t.source;return e===t})),this.panel=this.panel||this.$create("lightboxPanel",Y({},this.$props,{items:i})),Jt(this.panel.$el,"hidden",function(){return n.panel=!1}),this.panel.show(t)},hide:function(){return this.panel&&this.panel.hide()}}};function Ur(e){var n={};return["href","caption","type","poster","alt","attrs"].forEach(function(t){n["href"===t?"source":t]=ut(e,t)}),n.attrs=Tn(n.attrs),n}Xi={mixins:[fr],functional:!0,args:["message","status"],data:{message:"",status:"",timeout:5e3,group:null,pos:"top-center",clsContainer:"uk-notification",clsClose:"uk-notification-close",clsMsg:"uk-notification-message"},install:function(i){i.notification.closeAll=function(e,n){Ae(document.body,function(t){t=i.getComponent(t,"notification");!t||e&&e!==t.group||t.close(n)})}},computed:{marginProp:function(t){return"margin"+(g(t.pos,"top")?"Top":"Bottom")},startProps:function(){var t={opacity:0};return t[this.marginProp]=-this.$el.offsetHeight,t}},created:function(){var t=Me("."+this.clsContainer+"-"+this.pos,this.container)||be(this.container,'<div class="'+this.clsContainer+" "+this.clsContainer+"-"+this.pos+'" style="display: block"></div>');this.$mount(be(t,'<div class="'+this.clsMsg+(this.status?" "+this.clsMsg+"-"+this.status:"")+'"> <a href class="'+this.clsClose+'" data-uk-close></a> <div>'+this.message+"</div> </div>"))},connected:function(){var t,e=this,n=L(Re(this.$el,this.marginProp));Ze.start(Re(this.$el,this.startProps),((t={opacity:1})[this.marginProp]=n,t)).then(function(){e.timeout&&(e.timer=setTimeout(e.close,e.timeout))})},events:((Ki={click:function(t){Nt(t.target,'a[href="#"],a[href=""]')&&t.preventDefault(),this.close()}})[wt]=function(){this.timer&&clearTimeout(this.timer)},Ki[bt]=function(){this.timeout&&(this.timer=setTimeout(this.close,this.timeout))},Ki),methods:{close:function(t){function e(t){var e=Tt(t);te(t,"close",[n]),$e(t),e&&!e.hasChildNodes()&&$e(e)}var n=this;this.timer&&clearTimeout(this.timer),t?e(this.$el):Ze.start(this.$el,this.startProps).then(e)}}};var Yr=["x","y","bgx","bgy","rotate","scale","color","backgroundColor","borderColor","opacity","blur","hue","grayscale","invert","saturate","sepia","fopacity","stroke"],mr={mixins:[lr],props:Yr.reduce(function(t,e){return t[e]="list",t},{}),data:Yr.reduce(function(t,e){return t[e]=void 0,t},{}),computed:{props:function(f,p){var m=this;return Yr.reduce(function(t,e){if(O(f[e]))return t;var n,i,r=e.match(/color/i),o=r||"opacity"===e,s=f[e].slice();o&&Re(p,e,""),s.length<2&&s.unshift(("scale"===e?1:o?Re(p,e):0)||0);var a,u,c,h,l,o=s.reduce(function(t,e){return z(e)&&e.replace(/-|\d/g,"").trim()||t},"");if(r?(r=p.style.color,s=s.map(function(t){return Re(Re(p,"color",t),"color").split(/[(),]/g).slice(1,-1).concat(1).slice(0,4).map(L)}),p.style.color=r):g(e,"bg")?(a="bgy"===e?"height":"width",s=s.map(function(t){return pn(t,a,m.$el)}),Re(p,"background-position-"+e[2],""),i=Re(p,"backgroundPosition").split(" ")["x"===e[2]?0:1],n=m.covers?(u=Math.min.apply(Math,s),c=Math.max.apply(Math,s),h=s.indexOf(u)<s.indexOf(c),l=c-u,s=s.map(function(t){return t-(h?u:c)}),(h?-l:0)+"px"):i):s=s.map(L),"stroke"===e){if(!s.some(function(t){return t}))return t;var d=Wi(m.$el);Re(p,"strokeDasharray",d),s=(s="%"===o?s.map(function(t){return t*d/100}):s).reverse(),e="strokeDashoffset"}return t[e]={steps:s,unit:o,pos:n,bgPos:i,diff:l},t},{})},bgProps:function(){var e=this;return["bgx","bgy"].filter(function(t){return t in e.props})},covers:function(t,e){return i=(n=e).style.backgroundSize,e="cover"===Re(Re(n,"backgroundSize",""),"backgroundSize"),n.style.backgroundSize=i,e;var n,i}},disconnected:function(){delete this._image},update:{read:function(t){var e,n,a,u,c,h=this;this.matchMedia&&(t.image||!this.covers||!this.bgProps.length||(e=Re(this.$el,"backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/,"$1"))&&((n=new Image).src=e,(t.image=n).naturalWidth||(n.onload=function(){return h.$update()})),(n=t.image)&&n.naturalWidth&&(a={width:this.$el.offsetWidth,height:this.$el.offsetHeight},u={width:n.naturalWidth,height:n.naturalHeight},c=nt.cover(u,a),this.bgProps.forEach(function(t){var e,n=h.props[t],i=n.diff,r=n.bgPos,o=n.steps,n="bgy"===t?"height":"width",s=c[n]-a[n];s<i?a[n]=c[n]+i-s:i<s&&((e=a[n]/pn(r,n,h.$el))&&(h.props[t].steps=o.map(function(t){return t-(s-i)/e}))),c=nt.cover(u,a)}),t.dim=c))},write:function(t){t=t.dim;this.matchMedia?t&&Re(this.$el,{backgroundSize:t.width+"px "+t.height+"px",backgroundRepeat:"no-repeat"}):Re(this.$el,{backgroundSize:"",backgroundRepeat:""})},events:["resize"]},methods:{reset:function(){var n=this;G(this.getCss(0),function(t,e){return Re(n.$el,e,"")})},getCss:function(l){var d=this.props;return Object.keys(d).reduce(function(t,e){var n=d[e],i=n.steps,r=n.unit,o=n.pos,s=function(t,e,n){void 0===n&&(n=2);var i=Xr(t,e),t=i[0],e=i[1],i=i[2];return(N(t)?t+Math.abs(t-e)*i*(t<e?1:-1):+e).toFixed(n)}(i,l);switch(e){case"x":case"y":r=r||"px",t.transform+=" translate"+p(e)+"("+L(s).toFixed("px"===r?0:2)+r+")";break;case"rotate":t.transform+=" rotate("+(s+(r=r||"deg"))+")";break;case"scale":t.transform+=" scale("+s+")";break;case"bgy":case"bgx":t["background-position-"+e[2]]="calc("+o+" + "+s+"px)";break;case"color":case"backgroundColor":case"borderColor":var a=Xr(i,l),u=a[0],c=a[1],h=a[2];t[e]="rgba("+u.map(function(t,e){return t+=h*(c[e]-t),3===e?L(t):parseInt(t,10)}).join(",")+")";break;case"blur":t.filter+=" blur("+(s+(r=r||"px"))+")";break;case"hue":t.filter+=" hue-rotate("+(s+(r=r||"deg"))+")";break;case"fopacity":t.filter+=" opacity("+(s+(r=r||"%"))+")";break;case"grayscale":case"invert":case"saturate":case"sepia":t.filter+=" "+e+"("+(s+(r=r||"%"))+")";break;default:t[e]=s}return t},{transform:"",filter:""})}}};function Xr(t,e){var n=t.length-1,i=Math.min(Math.floor(n*e),n-1),i=t.slice(i,i+2);return i.push(1===e?1:e%(1/n)*n),i}Ki={mixins:[mr],props:{target:String,viewport:Number,easing:Number},data:{target:!1,viewport:1,easing:1},computed:{target:function(t,e){t=t.target;return function t(e){return e?"offsetTop"in e?e:t(Tt(e)):document.body}(t&&Ht(t,e)||e)}},update:{read:function(t,e){var n=t.percent;if(e.has("scroll")||(n=!1),this.matchMedia){var i=n;return t=Wn(this.target)/(this.viewport||1),e=this.easing,{percent:n=Z(t*(1-(e-e*t))),style:i!==n&&this.getCss(n)}}},write:function(t){t=t.style;this.matchMedia?t&&Re(this.$el,t):this.reset()},events:["scroll","resize"]}};lr={update:{write:function(){var t;this.stack.length||this.dragging||(t=this.getValidIndex(this.index),~this.prevIndex&&this.index===t||this.show(t))},events:["resize"]}};function Gr(t,e,n){var i=Zr(t,e);return n?i-(t=t,on(e).width/2-on(t).width/2):Math.min(i,Kr(e))}function Kr(t){return Math.max(0,Jr(t)-on(t).width)}function Jr(t){return Ot(t).reduce(function(t,e){return on(e).width+t},0)}function Zr(t,e){return t&&(an(t).left+(lt?on(t).width-on(e).width:0))*(lt?-1:1)||0}function Qr(n,i){var r=--i+on(n).width+2;return Ot(n).filter(function(t){var e=Zr(t,n),t=e+on(t).width;return i<=e&&t<=r})}function to(t,e,n){te(t,ee(e,!1,!1,n))}Ji={mixins:[pi,Ji,lr],props:{center:Boolean,sets:Boolean},data:{center:!1,sets:!1,attrItem:"uk-slider-item",selList:".uk-slider-items",selNav:".uk-slider-nav",clsContainer:"uk-slider-container",Transitioner:function(c,h,l,t){var i=t.center,r=t.easing,d=t.list,o=new ce,e=c?Gr(c,d,i):Gr(h,d,i)+on(h).width*l,f=h?Gr(h,d,i):e+on(c).width*l*(lt?-1:1);return{dir:l,show:function(t,e,n){void 0===e&&(e=0);n=n?"linear":r;return t-=Math.round(t*Z(e,-1,1)),this.translate(e),e=c?e:Z(e,0,1),to(this.getItemIn(),"itemin",{percent:e,duration:t,timing:n,dir:l}),c&&to(this.getItemIn(!0),"itemout",{percent:1-e,duration:t,timing:n,dir:l}),Ze.start(d,{transform:Lr(-f*(lt?-1:1),"px")},t,n).then(o.resolve,Q),o.promise},cancel:function(){Ze.cancel(d)},reset:function(){Re(d,"transform","")},forward:function(t,e){return void 0===e&&(e=this.percent()),Ze.cancel(d),this.show(t,e,!0)},translate:function(o){var t=this.getDistance()*l*(lt?-1:1);Re(d,"transform",Lr(Z(t-t*o-f,-Jr(d),on(d).width)*(lt?-1:1),"px"));var s=this.getActives(),a=this.getItemIn(),u=this.getItemIn(!0);o=c?Z(o,-1,1):0,Ot(d).forEach(function(t,e){var n=w(s,t),i=t===a,r=t===u;to(t,"itemtranslate"+(i||!r&&(n||l*(lt?-1:1)==-1^Zr(t,d)>Zr(c||h))?"in":"out"),{dir:l,percent:r?1-o:i?o:n?1:0})})},percent:function(){return Math.abs((Re(d,"transform").split(",")[4]*(lt?-1:1)+e)/(f-e))},getDistance:function(){return Math.abs(f-e)},getItemIn:function(t){void 0===t&&(t=!1);var e=this.getActives(),n=Qr(d,Gr(h||c,d,i));return t&&(t=e,e=n,n=t),n[x(n,function(t){return!w(e,t)})]},getActives:function(){return Qr(d,Gr(c||h,d,i))}}}},computed:{avgWidth:function(){return Jr(this.list)/this.length},finite:function(t){return t.finite||Math.ceil(Jr(this.list))<on(this.list).width+(t=this.list,Math.max.apply(Math,[0].concat(Ot(t).map(function(t){return on(t).width}))))+this.center},maxIndex:function(){if(!this.finite||this.center&&!this.sets)return this.length-1;if(this.center)return X(this.sets);var e=0,n=Kr(this.list),t=x(this.slides,function(t){return n<=e||void(e+=on(t).width)});return~t?t:this.length-1},sets:function(t){var r=this;if(t=t.sets){var o=on(this.list).width/(this.center?2:1),s=0,a=o,u=0;return!D(t=K(this.slides,"offsetLeft").reduce(function(t,e,n){var i=on(e).width;return s<u+i&&(w(t,n=!r.center&&n>r.maxIndex?r.maxIndex:n)||(e=r.slides[n+1],r.center&&e&&i<a-on(e).width/2?a-=i:(a=o,t.push(n),s=u+o+(r.center?i/2:0)))),u+=i,t},[]))&&t}},transitionOptions:function(){return{center:this.center,list:this.list}}},connected:function(){Le(this.$el,this.clsContainer,!Me("."+this.clsContainer,this.$el))},update:{write:function(){var n=this;this.navItems.forEach(function(t){var e=H(ut(t,n.attrItem));!1!==e&&(t.hidden=!n.maxIndex||e>n.maxIndex||n.sets&&!w(n.sets,e))}),!this.length||this.dragging||this.stack.length||(this.reorder(),this._translate(1));var e=this._getTransitioner(this.index).getActives();this.slides.forEach(function(t){return Le(t,n.clsActive,w(e,t))}),!this.clsActivated||this.sets&&!w(this.sets,L(this.index))||this.slides.forEach(function(t){return Le(t,n.clsActivated||"",w(e,t))})},events:["resize"]},events:{beforeitemshow:function(t){!this.dragging&&this.sets&&this.stack.length<2&&!w(this.sets,this.index)&&(this.index=this.getValidIndex());var e=Math.abs(this.index-this.prevIndex+(0<this.dir&&this.index<this.prevIndex||this.dir<0&&this.index>this.prevIndex?(this.maxIndex+1)*this.dir:0));if(!this.dragging&&1<e){for(var n=0;n<e;n++)this.stack.splice(1,0,0<this.dir?"next":"previous");t.preventDefault()}else{t=this.dir<0||!this.slides[this.prevIndex]?this.index:this.prevIndex;this.duration=Vr(this.avgWidth/this.velocity)*(on(this.slides[t]).width/this.avgWidth),this.reorder()}},itemshow:function(){~this.prevIndex&&Be(this._getTransitioner().getItemIn(),this.clsActive)}},methods:{reorder:function(){var n=this;if(this.finite)Re(this.slides,"order","");else{var i=0<this.dir&&this.slides[this.prevIndex]?this.prevIndex:this.index;if(this.slides.forEach(function(t,e){return Re(t,"order",0<n.dir&&e<i?1:n.dir<0&&e>=n.index?-1:"")}),this.center)for(var t=this.slides[i],e=on(this.list).width/2-on(t).width/2,r=0;0<e;){var o=this.getIndex(--r+i,i),s=this.slides[o];Re(s,"order",i<o?-2:-1),e-=on(s).width}}},getValidIndex:function(t,e){if(void 0===t&&(t=this.index),void 0===e&&(e=this.prevIndex),t=this.getIndex(t,e),!this.sets)return t;var n;do{if(w(this.sets,t))return t}while((t=this.getIndex((n=t)+this.dir,e))!==n);return t}}};mr={mixins:[mr],data:{selItem:"!li"},computed:{item:function(t,e){return Ht(t.selItem,e)}},events:[{name:"itemin itemout",self:!0,el:function(){return this.item},handler:function(t){var n=this,i=t.type,t=t.detail,r=t.percent,o=t.duration,s=t.timing,a=t.dir;gn.read(function(){var t=n.getCss(no(i,a,r)),e=n.getCss(eo(i)?.5:0<a?1:0);gn.write(function(){Re(n.$el,t),Ze.start(n.$el,e,o,s).catch(Q)})})}},{name:"transitioncanceled transitionend",self:!0,el:function(){return this.item},handler:function(){Ze.cancel(this.$el)}},{name:"itemtranslatein itemtranslateout",self:!0,el:function(){return this.item},handler:function(t){var e=this,n=t.type,t=t.detail,i=t.percent,r=t.dir;gn.read(function(){var t=e.getCss(no(n,r,i));gn.write(function(){return Re(e.$el,t)})})}}]};function eo(t){return u(t,"in")}function no(t,e,n){return n/=2,eo(t)?e<0?1-n:n:e<0?n:1-n}var io,xi=Y({},xi,{fade:{show:function(){return[{opacity:0,zIndex:0},{zIndex:-1}]},percent:function(t){return 1-Re(t,"opacity")},translate:function(t){return[{opacity:1-t,zIndex:0},{zIndex:-1}]}},scale:{show:function(){return[{opacity:0,transform:jr(1.5),zIndex:0},{zIndex:-1}]},percent:function(t){return 1-Re(t,"opacity")},translate:function(t){return[{opacity:1-t,transform:jr(1+.5*t),zIndex:0},{zIndex:-1}]}},pull:{show:function(t){return t<0?[{transform:Lr(30),zIndex:-1},{transform:Lr(),zIndex:0}]:[{transform:Lr(-100),zIndex:0},{transform:Lr(),zIndex:-1}]},percent:function(t,e,n){return n<0?1-Hr(e):Hr(t)},translate:function(t,e){return e<0?[{transform:Lr(30*t),zIndex:-1},{transform:Lr(-100*(1-t)),zIndex:0}]:[{transform:Lr(100*-t),zIndex:0},{transform:Lr(30*(1-t)),zIndex:-1}]}},push:{show:function(t){return t<0?[{transform:Lr(100),zIndex:0},{transform:Lr(),zIndex:-1}]:[{transform:Lr(-30),zIndex:-1},{transform:Lr(),zIndex:0}]},percent:function(t,e,n){return 0<n?1-Hr(e):Hr(t)},translate:function(t,e){return e<0?[{transform:Lr(100*t),zIndex:0},{transform:Lr(-30*(1-t)),zIndex:-1}]:[{transform:Lr(-30*t),zIndex:-1},{transform:Lr(100*(1-t)),zIndex:0}]}}}),xi={mixins:[pi,Zi,lr],props:{ratio:String,minHeight:Number,maxHeight:Number},data:{ratio:"16:9",minHeight:!1,maxHeight:!1,selList:".uk-slideshow-items",attrItem:"uk-slideshow-item",selNav:".uk-slideshow-nav",Animations:xi},update:{read:function(){var t=this.ratio.split(":").map(Number),e=t[0],t=(t=t[1])*this.list.offsetWidth/e||0;return this.minHeight&&(t=Math.max(this.minHeight,t)),{height:(t=this.maxHeight?Math.min(this.maxHeight,t):t)-dn(this.list,"height","content-box")}},write:function(t){t=t.height;0<t&&Re(this.list,"minHeight",t)},events:["resize"]}},hr={mixins:[pi,hr],props:{group:String,threshold:Number,clsItem:String,clsPlaceholder:String,clsDrag:String,clsDragState:String,clsBase:String,clsNoDrag:String,clsEmpty:String,clsCustom:String,handle:String},data:{group:!1,threshold:5,clsItem:"uk-sortable-item",clsPlaceholder:"uk-sortable-placeholder",clsDrag:"uk-sortable-drag",clsDragState:"uk-drag",clsBase:"uk-sortable",clsNoDrag:"uk-sortable-nodrag",clsEmpty:"uk-sortable-empty",clsCustom:"",handle:!1,pos:{}},created:function(){var n=this;["init","start","move","end"].forEach(function(t){var e=n[t];n[t]=function(t){Y(n.pos,ue(t)),e(t)}})},events:{name:mt,passive:!1,handler:"init"},computed:{target:function(){return(this.$el.tBodies||[this.$el])[0]},items:function(){return Ot(this.target)},isEmpty:{get:function(){return D(this.items)},watch:function(t){Le(this.target,this.clsEmpty,t)},immediate:!0},handles:{get:function(t,e){t=t.handle;return t?ze(t,e):this.items},watch:function(t,e){Re(e,{touchAction:"",userSelect:""}),Re(t,{touchAction:pt?"none":"",userSelect:"none"})},immediate:!0}},update:{write:function(t){var e,n,i,r,o,s,a;this.drag&&Tt(this.placeholder)&&(e=(n=this.pos).x,a=n.y,s=(i=this.origin).offsetTop,r=i.offsetLeft,n=this.placeholder,Re(this.drag,{top:a-s,left:e-r}),(i=this.getSortable(document.elementFromPoint(e,a)))&&((s=i.items).some(Ze.inProgress)||(o={x:e,y:a},r=s[x(s,function(t){return et(o,t.getBoundingClientRect())})],(!s.length||r&&r!==n)&&(s=this.getSortable(n),!1!==(a=function(t,e,n,i,r,o){if(Ot(t).length){var s=e.getBoundingClientRect();if(!o)return function(t,e){var n=1===Ot(t).length;n&&be(t,e);var i=Ot(t),t=i.some(function(t,e){var n=t.getBoundingClientRect();return i.slice(e+1).some(function(t){t=t.getBoundingClientRect();return!ro([n.left,n.right],[t.left,t.right])})});n&&$e(e);return t}(t,n)||r<s.top+s.height/2?e:e.nextElementSibling;o=n.getBoundingClientRect(),t=ro([s.top,s.bottom],[o.top,o.bottom]),n=t?i:r,i=t?"width":"height",r=t?"left":"top",t=t?"right":"bottom",i=o[i]<s[i]?s[i]-o[i]:0;return o[r]<s[r]?!(i&&n<s[r]+i)&&e.nextElementSibling:!(i&&n>s[t]-i)&&e}}(i.target,r,n,e,a,i===s&&t.moved!==r))&&(a&&n===a||(i!==s?(s.remove(n),t.moved=r):delete t.moved,i.insert(n,a),this.touched.add(i)))))))},events:["move"]},methods:{init:function(t){var e=t.target,n=t.button,i=t.defaultPrevented,r=this.items.filter(function(t){return Bt(e,t)})[0];!r||i||0<n||It(e)||Bt(e,"."+this.clsNoDrag)||this.handle&&!Bt(e,this.handle)||(t.preventDefault(),this.touched=new Set([this]),this.placeholder=r,this.origin=Y({target:e,index:Pt(r)},this.pos),Jt(document,gt,this.move),Jt(document,vt,this.end),this.threshold||this.start(t))},start:function(t){this.drag=function(t,e){t=be(t,e.outerHTML.replace(/(^<)(?:li|tr)|(?:li|tr)(\/>$)/g,"$1div$2"));return Re(t,"margin","0","important"),Re(t,Y({boxSizing:"border-box",width:e.offsetWidth,height:e.offsetHeight},Re(e,["paddingLeft","paddingRight","paddingTop","paddingBottom"]))),cn(t.firstElementChild,cn(e.firstElementChild)),t}(this.$container,this.placeholder);var e,n,i=this.placeholder.getBoundingClientRect(),r=i.left,i=i.top;Y(this.origin,{offsetLeft:this.pos.x-r,offsetTop:this.pos.y-i}),Be(this.drag,this.clsDrag,this.clsCustom),Be(this.placeholder,this.clsPlaceholder),Be(this.items,this.clsItem),Be(document.documentElement,this.clsDragState),te(this.$el,"start",[this,this.placeholder]),e=this.pos,n=Date.now(),io=setInterval(function(){var t=e.x,s=e.y;s+=window.pageYOffset;var a=.3*(Date.now()-n);n=Date.now(),Vn(document.elementFromPoint(t,e.y)).reverse().some(function(t){var e=t.scrollTop,n=t.scrollHeight,i=sn(Rn(t)),r=i.top,o=i.bottom,i=i.height;if(r<s&&s<r+35)e-=a;else{if(!(s<o&&o-35<s))return;e+=a}if(0<e&&e<n-i)return jn(t,e),!0})},15),this.move(t)},move:function(t){this.drag?this.$emit("move"):(Math.abs(this.pos.x-this.origin.x)>this.threshold||Math.abs(this.pos.y-this.origin.y)>this.threshold)&&this.start(t)},end:function(){var t,i=this;Zt(document,gt,this.move),Zt(document,vt,this.end),Zt(window,"scroll",this.scroll),this.drag&&(clearInterval(io),t=this.getSortable(this.placeholder),this===t?this.origin.index!==Pt(this.placeholder)&&te(this.$el,"moved",[this,this.placeholder]):(te(t.$el,"added",[t,this.placeholder]),te(this.$el,"removed",[this,this.placeholder])),te(this.$el,"stop",[this,this.placeholder]),$e(this.drag),this.drag=null,this.touched.forEach(function(t){var e=t.clsPlaceholder,n=t.clsItem;return i.touched.forEach(function(t){return De(t.items,e,n)})}),this.touched=null,De(document.documentElement,this.clsDragState))},insert:function(t,e){var n=this;Be(this.items,this.clsItem);this.animate(function(){return e?xe(e,t):be(n.target,t)})},remove:function(t){Bt(t,this.target)&&this.animate(function(){return $e(t)})},getSortable:function(t){do{var e=this.$getComponent(t,"sortable");if(e&&(e===this||!1!==this.group&&e.group===this.group))return e}while(t=Tt(t))}}};function ro(t,e){return t[1]>e[0]&&e[1]>t[0]}bt={mixins:[fr,mi,$i],args:"title",props:{delay:Number,title:String},data:{pos:"top",title:"",delay:0,animation:["uk-animation-scale-up"],duration:100,cls:"uk-active",clsPos:"uk-tooltip"},beforeConnect:function(){var t;this._hasTitle=st(this.$el,"title"),ot(this.$el,"title",""),this.updateAria(!1),Et(t=this.$el)||ot(t,"tabindex","0")},disconnected:function(){this.hide(),ot(this.$el,"title",this._hasTitle?this.title:null)},methods:{show:function(){var e=this;!this.isToggled(this.tooltip||null)&&this.title&&(this._unbind=Qt(document,"show keydown "+mt,this.hide,!1,function(t){return t.type===mt&&!Bt(t.target,e.$el)||"keydown"===t.type&&27===t.keyCode||"show"===t.type&&t.detail[0]!==e&&t.detail[0].$name===e.$name}),clearTimeout(this.showTimer),this.showTimer=setTimeout(this._show,this.delay))},hide:function(){var t=this;Mt(this.$el,"input:focus")||(clearTimeout(this.showTimer),this.isToggled(this.tooltip||null)&&this.toggleElement(this.tooltip,!1,!1).then(function(){t.tooltip=$e(t.tooltip),t._unbind()}))},_show:function(){var n=this;this.tooltip=be(this.container,'<div class="'+this.clsPos+'"> <div class="'+this.clsPos+'-inner">'+this.title+"</div> </div>"),Jt(this.tooltip,"toggled",function(t,e){n.updateAria(e),e&&(n.positionAt(n.tooltip,n.$el),n.origin="y"===n.getAxis()?fn(n.dir)+"-"+n.align:n.align+"-"+fn(n.dir))}),this.toggleElement(this.tooltip,!0)},updateAria:function(t){ot(this.$el,"aria-expanded",t)}},events:(($i={focus:"show",blur:"hide"})[wt+" "+bt]=function(t){ae(t)||this[t.type===wt?"show":"hide"]()},$i[mt]=function(t){ae(t)&&this.show()},$i)};$i={props:{allow:String,clsDragover:String,concurrent:Number,maxSize:Number,method:String,mime:String,msgInvalidMime:String,msgInvalidName:String,msgInvalidSize:String,multiple:Boolean,name:String,params:Object,type:String,url:String},data:{allow:!1,clsDragover:"uk-dragover",concurrent:1,maxSize:0,method:"POST",mime:!1,msgInvalidMime:"Invalid File Type: %s",msgInvalidName:"Invalid File Name: %s",msgInvalidSize:"Invalid File Size: %s Kilobytes Max",multiple:!1,name:"files[]",params:{},type:"",url:"",abort:Q,beforeAll:Q,beforeSend:Q,complete:Q,completeAll:Q,error:Q,fail:Q,load:Q,loadEnd:Q,loadStart:Q,progress:Q},events:{change:function(t){Mt(t.target,'input[type="file"]')&&(t.preventDefault(),t.target.files&&this.upload(t.target.files),t.target.value="")},drop:function(t){so(t);t=t.dataTransfer;t&&t.files&&(De(this.$el,this.clsDragover),this.upload(t.files))},dragenter:function(t){so(t)},dragover:function(t){so(t),Be(this.$el,this.clsDragover)},dragleave:function(t){so(t),De(this.$el,this.clsDragover)}},methods:{upload:function(t){var i=this;if(t.length){te(this.$el,"upload",[t]);for(var e=0;e<t.length;e++){if(this.maxSize&&1e3*this.maxSize<t[e].size)return void this.fail(this.msgInvalidSize.replace("%s",this.maxSize));if(this.allow&&!oo(this.allow,t[e].name))return void this.fail(this.msgInvalidName.replace("%s",this.allow));if(this.mime&&!oo(this.mime,t[e].type))return void this.fail(this.msgInvalidMime.replace("%s",this.mime))}this.multiple||(t=[t[0]]),this.beforeAll(this,t);var r=function(t,e){for(var n=[],i=0;i<t.length;i+=e){for(var r=[],o=0;o<e;o++)r.push(t[i+o]);n.push(r)}return n}(t,this.concurrent),o=function(t){var e,n=new FormData;for(e in t.forEach(function(t){return n.append(i.name,t)}),i.params)n.append(e,i.params[e]);me(i.url,{data:n,method:i.method,responseType:i.type,beforeSend:function(t){var e=t.xhr;return e.upload&&Jt(e.upload,"progress",i.progress),["loadStart","load","loadEnd","abort"].forEach(function(t){return Jt(e,t.toLowerCase(),i[t])}),i.beforeSend(t)}}).then(function(t){i.complete(t),r.length?o(r.shift()):i.completeAll(t)},function(t){return i.error(t)})};o(r.shift())}}}};function oo(t,e){return e.match(new RegExp("^"+t.replace(/\//g,"\\/").replace(/\*\*/g,"(\\/[^\\/]+)*").replace(/\*/g,"[^\\/]+").replace(/((?!\\))\?/g,"$1.")+"$","i"))}function so(t){t.preventDefault(),t.stopPropagation()}return G(Object.freeze({__proto__:null,Countdown:Zn,Filter:Ni,Lightbox:Gi,LightboxPanel:Rr,Notification:Xi,Parallax:Ki,Slider:Ji,SliderParallax:mr,Slideshow:xi,SlideshowParallax:mr,Sortable:hr,Tooltip:bt,Upload:$i}),function(t,e){return Qn.component(e,t)}),Qn});;
/*! UIkit 3.6.22 | https://www.getuikit.com | (c) 2014 - 2021 YOOtheme | MIT License */

!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?module.exports=i():"function"==typeof define&&define.amd?define("uikiticons",i):(t="undefined"!=typeof globalThis?globalThis:t||self).UIkitIcons=i()}(this,function(){"use strict";function i(t){i.installed||t.icon.add({"500px":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.624,11.866c-0.141,0.132,0.479,0.658,0.662,0.418c0.051-0.046,0.607-0.61,0.662-0.664c0,0,0.738,0.719,0.814,0.719 c0.1,0,0.207-0.055,0.322-0.17c0.27-0.269,0.135-0.416,0.066-0.495l-0.631-0.616l0.658-0.668c0.146-0.156,0.021-0.314-0.1-0.449 c-0.182-0.18-0.359-0.226-0.471-0.125l-0.656,0.654l-0.654-0.654c-0.033-0.034-0.08-0.045-0.124-0.045 c-0.079,0-0.191,0.068-0.307,0.181c-0.202,0.202-0.247,0.351-0.133,0.462l0.665,0.665L9.624,11.866z"/><path d="M11.066,2.884c-1.061,0-2.185,0.248-3.011,0.604c-0.087,0.034-0.141,0.106-0.15,0.205C7.893,3.784,7.919,3.909,7.982,4.066 c0.05,0.136,0.187,0.474,0.452,0.372c0.844-0.326,1.779-0.507,2.633-0.507c0.963,0,1.9,0.191,2.781,0.564 c0.695,0.292,1.357,0.719,2.078,1.34c0.051,0.044,0.105,0.068,0.164,0.068c0.143,0,0.273-0.137,0.389-0.271 c0.191-0.214,0.324-0.395,0.135-0.575c-0.686-0.654-1.436-1.138-2.363-1.533C13.24,3.097,12.168,2.884,11.066,2.884z"/><path d="M16.43,15.747c-0.092-0.028-0.242,0.05-0.309,0.119l0,0c-0.652,0.652-1.42,1.169-2.268,1.521 c-0.877,0.371-1.814,0.551-2.779,0.551c-0.961,0-1.896-0.189-2.775-0.564c-0.848-0.36-1.612-0.879-2.268-1.53 c-0.682-0.688-1.196-1.455-1.529-2.268c-0.325-0.799-0.471-1.643-0.471-1.643c-0.045-0.24-0.258-0.249-0.567-0.203 c-0.128,0.021-0.519,0.079-0.483,0.36v0.01c0.105,0.644,0.289,1.284,0.545,1.895c0.417,0.969,1.002,1.849,1.756,2.604 c0.757,0.754,1.636,1.34,2.604,1.757C8.901,18.785,9.97,19,11.088,19c1.104,0,2.186-0.215,3.188-0.645 c1.838-0.896,2.604-1.757,2.604-1.757c0.182-0.204,0.227-0.317-0.1-0.643C16.779,15.956,16.525,15.774,16.43,15.747z"/><path d="M5.633,13.287c0.293,0.71,0.723,1.341,1.262,1.882c0.54,0.54,1.172,0.971,1.882,1.264c0.731,0.303,1.509,0.461,2.298,0.461 c0.801,0,1.578-0.158,2.297-0.461c0.711-0.293,1.344-0.724,1.883-1.264c0.543-0.541,0.971-1.172,1.264-1.882 c0.314-0.721,0.463-1.5,0.463-2.298c0-0.79-0.148-1.569-0.463-2.289c-0.293-0.699-0.721-1.329-1.264-1.881 c-0.539-0.541-1.172-0.959-1.867-1.263c-0.721-0.303-1.5-0.461-2.299-0.461c-0.802,0-1.613,0.159-2.322,0.461 c-0.577,0.25-1.544,0.867-2.119,1.454v0.012V2.108h8.16C15.1,2.104,15.1,1.69,15.1,1.552C15.1,1.417,15.1,1,14.809,1H5.915 C5.676,1,5.527,1.192,5.527,1.384v6.84c0,0.214,0.273,0.372,0.529,0.428c0.5,0.105,0.614-0.056,0.737-0.224l0,0 c0.18-0.273,0.776-0.884,0.787-0.894c0.901-0.905,2.117-1.408,3.416-1.408c1.285,0,2.5,0.501,3.412,1.408 c0.914,0.914,1.408,2.122,1.408,3.405c0,1.288-0.508,2.496-1.408,3.405c-0.9,0.896-2.152,1.406-3.438,1.406 c-0.877,0-1.711-0.229-2.433-0.671v-4.158c0-0.553,0.237-1.151,0.643-1.614c0.462-0.519,1.094-0.799,1.782-0.799 c0.664,0,1.293,0.253,1.758,0.715c0.459,0.459,0.709,1.071,0.709,1.723c0,1.385-1.094,2.468-2.488,2.468 c-0.273,0-0.769-0.121-0.781-0.125c-0.281-0.087-0.405,0.306-0.438,0.436c-0.159,0.496,0.079,0.585,0.123,0.607 c0.452,0.137,0.743,0.157,1.129,0.157c1.973,0,3.572-1.6,3.572-3.57c0-1.964-1.6-3.552-3.572-3.552c-0.97,0-1.872,0.36-2.546,1.038 c-0.656,0.631-1.027,1.487-1.027,2.322v3.438v-0.011c-0.372-0.42-0.732-1.041-0.981-1.682c-0.102-0.248-0.315-0.202-0.607-0.113 c-0.135,0.035-0.519,0.157-0.44,0.439C5.372,12.799,5.577,13.164,5.633,13.287z"/></svg>',album:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="2" width="10" height="1"/><rect x="3" y="4" width="14" height="1"/><rect fill="none" stroke="#000" x="1.5" y="6.5" width="17" height="11"/></svg>',"arrow-down":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="10.5,16.08 5.63,10.66 6.37,10 10.5,14.58 14.63,10 15.37,10.66"/><line fill="none" stroke="#000" x1="10.5" y1="4" x2="10.5" y2="15"/></svg>',"arrow-left":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="10 14 5 9.5 10 5"/><line fill="none" stroke="#000" x1="16" y1="9.5" x2="5" y2="9.52"/></svg>',"arrow-right":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="10 5 15 9.5 10 14"/><line fill="none" stroke="#000" x1="4" y1="9.5" x2="15" y2="9.5"/></svg>',"arrow-up":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="10.5,4 15.37,9.4 14.63,10.08 10.5,5.49 6.37,10.08 5.63,9.4"/><line fill="none" stroke="#000" x1="10.5" y1="16" x2="10.5" y2="5"/></svg>',ban:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><line fill="none" stroke="#000" stroke-width="1.1" x1="4" y1="3.5" x2="16" y2="16.5"/></svg>',behance:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.5,10.6c-0.4-0.5-0.9-0.9-1.6-1.1c1.7-1,2.2-3.2,0.7-4.7C7.8,4,6.3,4,5.2,4C3.5,4,1.7,4,0,4v12c1.7,0,3.4,0,5.2,0 c1,0,2.1,0,3.1-0.5C10.2,14.6,10.5,12.3,9.5,10.6L9.5,10.6z M5.6,6.1c1.8,0,1.8,2.7-0.1,2.7c-1,0-2,0-2.9,0V6.1H5.6z M2.6,13.8v-3.1 c1.1,0,2.1,0,3.2,0c2.1,0,2.1,3.2,0.1,3.2L2.6,13.8z"/><path d="M19.9,10.9C19.7,9.2,18.7,7.6,17,7c-4.2-1.3-7.3,3.4-5.3,7.1c0.9,1.7,2.8,2.3,4.7,2.1c1.7-0.2,2.9-1.3,3.4-2.9h-2.2 c-0.4,1.3-2.4,1.5-3.5,0.6c-0.4-0.4-0.6-1.1-0.6-1.7H20C20,11.7,19.9,10.9,19.9,10.9z M13.5,10.6c0-1.6,2.3-2.7,3.5-1.4 c0.4,0.4,0.5,0.9,0.6,1.4H13.5L13.5,10.6z"/><rect x="13" y="4" width="5" height="1.4"/></svg>',bell:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M17,15.5 L3,15.5 C2.99,14.61 3.79,13.34 4.1,12.51 C4.58,11.3 4.72,10.35 5.19,7.01 C5.54,4.53 5.89,3.2 7.28,2.16 C8.13,1.56 9.37,1.5 9.81,1.5 L9.96,1.5 C9.96,1.5 11.62,1.41 12.67,2.17 C14.08,3.2 14.42,4.54 14.77,7.02 C15.26,10.35 15.4,11.31 15.87,12.52 C16.2,13.34 17.01,14.61 17,15.5 L17,15.5 Z"/><path fill="none" stroke="#000" d="M12.39,16 C12.39,17.37 11.35,18.43 9.91,18.43 C8.48,18.43 7.42,17.37 7.42,16"/></svg>',bold:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5,15.3 C5.66,15.3 5.9,15 5.9,14.53 L5.9,5.5 C5.9,4.92 5.56,4.7 5,4.7 L5,4 L8.95,4 C12.6,4 13.7,5.37 13.7,6.9 C13.7,7.87 13.14,9.17 10.86,9.59 L10.86,9.7 C13.25,9.86 14.29,11.28 14.3,12.54 C14.3,14.47 12.94,16 9,16 L5,16 L5,15.3 Z M9,9.3 C11.19,9.3 11.8,8.5 11.85,7 C11.85,5.65 11.3,4.8 9,4.8 L7.67,4.8 L7.67,9.3 L9,9.3 Z M9.185,15.22 C11.97,15 12.39,14 12.4,12.58 C12.4,11.15 11.39,10 9,10 L7.67,10 L7.67,15 L9.18,15 Z"/></svg>',bolt:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.74,20 L7.73,12 L3,12 L15.43,1 L12.32,9 L17.02,9 L4.74,20 L4.74,20 L4.74,20 Z M9.18,11 L7.1,16.39 L14.47,10 L10.86,10 L12.99,4.67 L5.61,11 L9.18,11 L9.18,11 L9.18,11 Z"/></svg>',bookmark:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="5.5 1.5 15.5 1.5 15.5 17.5 10.5 12.5 5.5 17.5"/></svg>',calendar:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M 2,3 2,17 18,17 18,3 2,3 Z M 17,16 3,16 3,8 17,8 17,16 Z M 17,7 3,7 3,4 17,4 17,7 Z"/><rect width="1" height="3" x="6" y="2"/><rect width="1" height="3" x="13" y="2"/></svg>',camera:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10.8" r="3.8"/><path fill="none" stroke="#000" d="M1,4.5 C0.7,4.5 0.5,4.7 0.5,5 L0.5,17 C0.5,17.3 0.7,17.5 1,17.5 L19,17.5 C19.3,17.5 19.5,17.3 19.5,17 L19.5,5 C19.5,4.7 19.3,4.5 19,4.5 L13.5,4.5 L13.5,2.9 C13.5,2.6 13.3,2.5 13,2.5 L7,2.5 C6.7,2.5 6.5,2.6 6.5,2.9 L6.5,4.5 L1,4.5 L1,4.5 Z"/></svg>',cart:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="7.3" cy="17.3" r="1.4"/><circle cx="13.3" cy="17.3" r="1.4"/><polyline fill="none" stroke="#000" points="0 2 3.2 4 5.3 12.5 16 12.5 18 6.5 8 6.5"/></svg>',check:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4"/></svg>',"chevron-double-left":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="10 14 6 10 10 6"/><polyline fill="none" stroke="#000" stroke-width="1.03" points="14 14 10 10 14 6"/></svg>',"chevron-double-right":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="10 6 14 10 10 14"/><polyline fill="none" stroke="#000" stroke-width="1.03" points="6 6 10 10 6 14"/></svg>',"chevron-down":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="16 7 10 13 4 7"/></svg>',"chevron-left":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="13 16 7 10 13 4"/></svg>',"chevron-right":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="7 4 13 10 7 16"/></svg>',"chevron-up":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="4 13 10 7 16 13"/></svg>',clock:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><rect x="9" y="4" width="1" height="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M13.018,14.197 L9.445,10.625"/></svg>',close:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.06" d="M16,16 L4,4"/><path fill="none" stroke="#000" stroke-width="1.06" d="M16,4 L4,16"/></svg>',"cloud-download":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.3,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6"/><polyline fill="none" stroke="#000" points="11.75 16 9.5 18.25 7.25 16"/><path fill="none" stroke="#000" d="M9.5,18 L9.5,9.5"/></svg>',"cloud-upload":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.31,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6"/><polyline fill="none" stroke="#000" points="7.25 11.75 9.5 9.5 11.75 11.75"/><path fill="none" stroke="#000" d="M9.5,18 L9.5,9.5"/></svg>',code:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.01" points="13,4 19,10 13,16"/><polyline fill="none" stroke="#000" stroke-width="1.01" points="7,4 1,10 7,16"/></svg>',cog:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" cx="9.997" cy="10" r="3.31"/><path fill="none" stroke="#000" d="M18.488,12.285 L16.205,16.237 C15.322,15.496 14.185,15.281 13.303,15.791 C12.428,16.289 12.047,17.373 12.246,18.5 L7.735,18.5 C7.938,17.374 7.553,16.299 6.684,15.791 C5.801,15.27 4.655,15.492 3.773,16.237 L1.5,12.285 C2.573,11.871 3.317,10.999 3.317,9.991 C3.305,8.98 2.573,8.121 1.5,7.716 L3.765,3.784 C4.645,4.516 5.794,4.738 6.687,4.232 C7.555,3.722 7.939,2.637 7.735,1.5 L12.263,1.5 C12.072,2.637 12.441,3.71 13.314,4.22 C14.206,4.73 15.343,4.516 16.225,3.794 L18.487,7.714 C17.404,8.117 16.661,8.988 16.67,10.009 C16.672,11.018 17.415,11.88 18.488,12.285 L18.488,12.285 Z"/></svg>',comment:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6,18.71 L6,14 L1,14 L1,1 L19,1 L19,14 L10.71,14 L6,18.71 L6,18.71 Z M2,13 L7,13 L7,16.29 L10.29,13 L18,13 L18,2 L2,2 L2,13 L2,13 Z"/></svg>',commenting:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="1.5,1.5 18.5,1.5 18.5,13.5 10.5,13.5 6.5,17.5 6.5,13.5 1.5,13.5"/><circle cx="10" cy="8" r="1"/><circle cx="6" cy="8" r="1"/><circle cx="14" cy="8" r="1"/></svg>',comments:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="2 0.5 19.5 0.5 19.5 13"/><path d="M5,19.71 L5,15 L0,15 L0,2 L18,2 L18,15 L9.71,15 L5,19.71 L5,19.71 L5,19.71 Z M1,14 L6,14 L6,17.29 L9.29,14 L17,14 L17,3 L1,3 L1,14 L1,14 L1,14 Z"/></svg>',copy:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" x="3.5" y="2.5" width="12" height="16"/><polyline fill="none" stroke="#000" points="5 0.5 17.5 0.5 17.5 17"/></svg>',"credit-card":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" x="1.5" y="4.5" width="17" height="12"/><rect x="1" y="7" width="18" height="3"/></svg>',database:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><ellipse fill="none" stroke="#000" cx="10" cy="4.64" rx="7.5" ry="3.14"/><path fill="none" stroke="#000" d="M17.5,8.11 C17.5,9.85 14.14,11.25 10,11.25 C5.86,11.25 2.5,9.84 2.5,8.11"/><path fill="none" stroke="#000" d="M17.5,11.25 C17.5,12.99 14.14,14.39 10,14.39 C5.86,14.39 2.5,12.98 2.5,11.25"/><path fill="none" stroke="#000" d="M17.49,4.64 L17.5,14.36 C17.5,16.1 14.14,17.5 10,17.5 C5.86,17.5 2.5,16.09 2.5,14.36 L2.5,4.64"/></svg>',desktop:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="15" width="1" height="2"/><rect x="11" y="15" width="1" height="2"/><rect x="5" y="16" width="10" height="1"/><rect fill="none" stroke="#000" x="1.5" y="3.5" width="17" height="11"/></svg>',discord:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M16.074,4.361a14.243,14.243,0,0,0-3.61-1.134,10.61,10.61,0,0,0-.463.96,13.219,13.219,0,0,0-4,0,10.138,10.138,0,0,0-.468-.96A14.206,14.206,0,0,0,3.919,4.364,15.146,15.146,0,0,0,1.324,14.5a14.435,14.435,0,0,0,4.428,2.269A10.982,10.982,0,0,0,6.7,15.21a9.294,9.294,0,0,1-1.494-.727c.125-.093.248-.19.366-.289a10.212,10.212,0,0,0,8.854,0c.119.1.242.2.366.289a9.274,9.274,0,0,1-1.5.728,10.8,10.8,0,0,0,.948,1.562,14.419,14.419,0,0,0,4.431-2.27A15.128,15.128,0,0,0,16.074,4.361Zm-8.981,8.1a1.7,1.7,0,0,1-1.573-1.79A1.689,1.689,0,0,1,7.093,8.881a1.679,1.679,0,0,1,1.573,1.791A1.687,1.687,0,0,1,7.093,12.462Zm5.814,0a1.7,1.7,0,0,1-1.573-1.79,1.689,1.689,0,0,1,1.573-1.791,1.679,1.679,0,0,1,1.573,1.791A1.688,1.688,0,0,1,12.907,12.462Z"/></svg>',download:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="14,10 9.5,14.5 5,10"/><rect x="3" y="17" width="13" height="1"/><line fill="none" stroke="#000" x1="9.5" y1="13.91" x2="9.5" y2="3"/></svg>',dribbble:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.4" d="M1.3,8.9c0,0,5,0.1,8.6-1c1.4-0.4,2.6-0.9,4-1.9 c1.4-1.1,2.5-2.5,2.5-2.5"/><path fill="none" stroke="#000" stroke-width="1.4" d="M3.9,16.6c0,0,1.7-2.8,3.5-4.2 c1.8-1.3,4-2,5.7-2.2C16,10,19,10.6,19,10.6"/><path fill="none" stroke="#000" stroke-width="1.4" d="M6.9,1.6c0,0,3.3,4.6,4.2,6.8 c0.4,0.9,1.3,3.1,1.9,5.2c0.6,2,0.9,4.4,0.9,4.4"/><circle fill="none" stroke="#000" stroke-width="1.4" cx="10" cy="10" r="9"/></svg>',etsy:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M8,4.26C8,4.07,8,4,8.31,4h4.46c.79,0,1.22.67,1.53,1.91l.25,1h.76c.14-2.82.26-4,.26-4S13.65,3,12.52,3H6.81L3.75,2.92v.84l1,.2c.73.11.9.27,1,1,0,0,.06,2,.06,5.17s-.06,5.14-.06,5.14c0,.59-.23.81-1,.94l-1,.2v.84l3.06-.1h5.11c1.15,0,3.82.1,3.82.1,0-.7.45-3.88.51-4.22h-.73l-.76,1.69a2.25,2.25,0,0,1-2.45,1.47H9.4c-1,0-1.44-.4-1.44-1.24V10.44s2.16,0,2.86.06c.55,0,.85.19,1.06,1l.23,1H13L12.9,9.94,13,7.41h-.85l-.28,1.13c-.16.74-.28.84-1,1-1,.1-2.89.09-2.89.09Z"/></svg>',expand:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 18 2 18 7 17 7 17 3 13 3"/><polygon points="2 13 3 13 3 17 7 17 7 18 2 18"/><path fill="none" stroke="#000" stroke-width="1.1" d="M11,9 L17,3"/><path fill="none" stroke="#000" stroke-width="1.1" d="M3,17 L9,11"/></svg>',facebook:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z"/></svg>',"file-edit":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M18.65,1.68 C18.41,1.45 18.109,1.33 17.81,1.33 C17.499,1.33 17.209,1.45 16.98,1.68 L8.92,9.76 L8,12.33 L10.55,11.41 L18.651,3.34 C19.12,2.87 19.12,2.15 18.65,1.68 L18.65,1.68 L18.65,1.68 Z"/><polyline fill="none" stroke="#000" points="16.5 8.482 16.5 18.5 3.5 18.5 3.5 1.5 14.211 1.5"/></svg>',"file-pdf":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" width="13" height="17" x="3.5" y="1.5"/><path d="M14.65 11.67c-.48.3-1.37-.19-1.79-.37a4.65 4.65 0 0 1 1.49.06c.35.1.36.28.3.31zm-6.3.06l.43-.79a14.7 14.7 0 0 0 .75-1.64 5.48 5.48 0 0 0 1.25 1.55l.2.15a16.36 16.36 0 0 0-2.63.73zM9.5 5.32c.2 0 .32.5.32.97a1.99 1.99 0 0 1-.23 1.04 5.05 5.05 0 0 1-.17-1.3s0-.71.08-.71zm-3.9 9a4.35 4.35 0 0 1 1.21-1.46l.24-.22a4.35 4.35 0 0 1-1.46 1.68zm9.23-3.3a2.05 2.05 0 0 0-1.32-.3 11.07 11.07 0 0 0-1.58.11 4.09 4.09 0 0 1-.74-.5 5.39 5.39 0 0 1-1.32-2.06 10.37 10.37 0 0 0 .28-2.62 1.83 1.83 0 0 0-.07-.25.57.57 0 0 0-.52-.4H9.4a.59.59 0 0 0-.6.38 6.95 6.95 0 0 0 .37 3.14c-.26.63-1 2.12-1 2.12-.3.58-.57 1.08-.82 1.5l-.8.44A3.11 3.11 0 0 0 5 14.16a.39.39 0 0 0 .15.42l.24.13c1.15.56 2.28-1.74 2.66-2.42a23.1 23.1 0 0 1 3.59-.85 4.56 4.56 0 0 0 2.91.8.5.5 0 0 0 .3-.21 1.1 1.1 0 0 0 .12-.75.84.84 0 0 0-.14-.25z"/></svg>',"file-text":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" width="13" height="17" x="3.5" y="1.5"/><line fill="none" stroke="#000" x1="6" x2="12" y1="12.5" y2="12.5"/><line fill="none" stroke="#000" x1="6" x2="14" y1="8.5" y2="8.5"/><line fill="none" stroke="#000" x1="6" x2="14" y1="6.5" y2="6.5"/><line fill="none" stroke="#000" x1="6" x2="14" y1="10.5" y2="10.5"/></svg>',file:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" x="3.5" y="1.5" width="13" height="17"/></svg>',flickr:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="5.5" cy="9.5" r="3.5"/><circle cx="14.5" cy="9.5" r="3.5"/></svg>',folder:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="9.5 5.5 8.5 3.5 1.5 3.5 1.5 16.5 18.5 16.5 18.5 5.5"/></svg>',forward:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.47,13.11 C4.02,10.02 6.27,7.85 9.04,6.61 C9.48,6.41 10.27,6.13 11,5.91 L11,2 L18.89,9 L11,16 L11,12.13 C9.25,12.47 7.58,13.19 6.02,14.25 C3.03,16.28 1.63,18.54 1.63,18.54 C1.63,18.54 1.38,15.28 2.47,13.11 L2.47,13.11 Z M5.3,13.53 C6.92,12.4 9.04,11.4 12,10.92 L12,13.63 L17.36,9 L12,4.25 L12,6.8 C11.71,6.86 10.86,7.02 9.67,7.49 C6.79,8.65 4.58,10.96 3.49,13.08 C3.18,13.7 2.68,14.87 2.49,16 C3.28,15.05 4.4,14.15 5.3,13.53 L5.3,13.53 Z"/></svg>',foursquare:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.23,2 C15.96,2 16.4,2.41 16.5,2.86 C16.57,3.15 16.56,3.44 16.51,3.73 C16.46,4.04 14.86,11.72 14.75,12.03 C14.56,12.56 14.16,12.82 13.61,12.83 C13.03,12.84 11.09,12.51 10.69,13 C10.38,13.38 7.79,16.39 6.81,17.53 C6.61,17.76 6.4,17.96 6.08,17.99 C5.68,18.04 5.29,17.87 5.17,17.45 C5.12,17.28 5.1,17.09 5.1,16.91 C5.1,12.4 4.86,7.81 5.11,3.31 C5.17,2.5 5.81,2.12 6.53,2 L15.23,2 L15.23,2 Z M9.76,11.42 C9.94,11.19 10.17,11.1 10.45,11.1 L12.86,11.1 C13.12,11.1 13.31,10.94 13.36,10.69 C13.37,10.64 13.62,9.41 13.74,8.83 C13.81,8.52 13.53,8.28 13.27,8.28 C12.35,8.29 11.42,8.28 10.5,8.28 C9.84,8.28 9.83,7.69 9.82,7.21 C9.8,6.85 10.13,6.55 10.5,6.55 C11.59,6.56 12.67,6.55 13.76,6.55 C14.03,6.55 14.23,6.4 14.28,6.14 C14.34,5.87 14.67,4.29 14.67,4.29 C14.67,4.29 14.82,3.74 14.19,3.74 L7.34,3.74 C7,3.75 6.84,4.02 6.84,4.33 C6.84,7.58 6.85,14.95 6.85,14.99 C6.87,15 8.89,12.51 9.76,11.42 L9.76,11.42 Z"/></svg>',future:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline points="19 2 18 2 18 6 14 6 14 7 19 7 19 2"/><path fill="none" stroke="#000" stroke-width="1.1" d="M18,6.548 C16.709,3.29 13.354,1 9.6,1 C4.6,1 0.6,5 0.6,10 C0.6,15 4.6,19 9.6,19 C14.6,19 18.6,15 18.6,10"/><rect x="9" y="4" width="1" height="7"/><path d="M13.018,14.197 L9.445,10.625" fill="none" stroke="#000" stroke-width="1.1"/></svg>',"git-branch":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.2" cx="7" cy="3" r="2"/><circle fill="none" stroke="#000" stroke-width="1.2" cx="14" cy="6" r="2"/><circle fill="none" stroke="#000" stroke-width="1.2" cx="7" cy="17" r="2"/><path fill="none" stroke="#000" stroke-width="2" d="M14,8 C14,10.41 12.43,10.87 10.56,11.25 C9.09,11.54 7,12.06 7,15 L7,5"/></svg>',"git-fork":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.2" cx="5.79" cy="2.79" r="1.79"/><circle fill="none" stroke="#000" stroke-width="1.2" cx="14.19" cy="2.79" r="1.79"/><circle fill="none" stroke="#000" stroke-width="1.2" cx="10.03" cy="16.79" r="1.79"/><path fill="none" stroke="#000" stroke-width="2" d="M5.79,4.57 L5.79,6.56 C5.79,9.19 10.03,10.22 10.03,13.31 C10.03,14.86 10.04,14.55 10.04,14.55 C10.04,14.37 10.04,14.86 10.04,13.31 C10.04,10.22 14.2,9.19 14.2,6.56 L14.2,4.57"/></svg>',"github-alt":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10,0.5 C4.75,0.5 0.5,4.76 0.5,10.01 C0.5,15.26 4.75,19.51 10,19.51 C15.24,19.51 19.5,15.26 19.5,10.01 C19.5,4.76 15.25,0.5 10,0.5 L10,0.5 Z M12.81,17.69 C12.81,17.69 12.81,17.7 12.79,17.69 C12.47,17.75 12.35,17.59 12.35,17.36 L12.35,16.17 C12.35,15.45 12.09,14.92 11.58,14.56 C12.2,14.51 12.77,14.39 13.26,14.21 C13.87,13.98 14.36,13.69 14.74,13.29 C15.42,12.59 15.76,11.55 15.76,10.17 C15.76,9.25 15.45,8.46 14.83,7.8 C15.1,7.08 15.07,6.29 14.75,5.44 L14.51,5.42 C14.34,5.4 14.06,5.46 13.67,5.61 C13.25,5.78 12.79,6.03 12.31,6.35 C11.55,6.16 10.81,6.05 10.09,6.05 C9.36,6.05 8.61,6.15 7.88,6.35 C7.28,5.96 6.75,5.68 6.26,5.54 C6.07,5.47 5.9,5.44 5.78,5.44 L5.42,5.44 C5.06,6.29 5.04,7.08 5.32,7.8 C4.7,8.46 4.4,9.25 4.4,10.17 C4.4,11.94 4.96,13.16 6.08,13.84 C6.53,14.13 7.05,14.32 7.69,14.43 C8.03,14.5 8.32,14.54 8.55,14.55 C8.07,14.89 7.82,15.42 7.82,16.16 L7.82,17.51 C7.8,17.69 7.7,17.8 7.51,17.8 C4.21,16.74 1.82,13.65 1.82,10.01 C1.82,5.5 5.49,1.83 10,1.83 C14.5,1.83 18.17,5.5 18.17,10.01 C18.18,13.53 15.94,16.54 12.81,17.69 L12.81,17.69 Z"/></svg>',github:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10,1 C5.03,1 1,5.03 1,10 C1,13.98 3.58,17.35 7.16,18.54 C7.61,18.62 7.77,18.34 7.77,18.11 C7.77,17.9 7.76,17.33 7.76,16.58 C5.26,17.12 4.73,15.37 4.73,15.37 C4.32,14.33 3.73,14.05 3.73,14.05 C2.91,13.5 3.79,13.5 3.79,13.5 C4.69,13.56 5.17,14.43 5.17,14.43 C5.97,15.8 7.28,15.41 7.79,15.18 C7.87,14.6 8.1,14.2 8.36,13.98 C6.36,13.75 4.26,12.98 4.26,9.53 C4.26,8.55 4.61,7.74 5.19,7.11 C5.1,6.88 4.79,5.97 5.28,4.73 C5.28,4.73 6.04,4.49 7.75,5.65 C8.47,5.45 9.24,5.35 10,5.35 C10.76,5.35 11.53,5.45 12.25,5.65 C13.97,4.48 14.72,4.73 14.72,4.73 C15.21,5.97 14.9,6.88 14.81,7.11 C15.39,7.74 15.73,8.54 15.73,9.53 C15.73,12.99 13.63,13.75 11.62,13.97 C11.94,14.25 12.23,14.8 12.23,15.64 C12.23,16.84 12.22,17.81 12.22,18.11 C12.22,18.35 12.38,18.63 12.84,18.54 C16.42,17.35 19,13.98 19,10 C19,5.03 14.97,1 10,1 L10,1 Z"/></svg>',gitter:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="3.5" y="1" width="1.531" height="11.471"/><rect x="7.324" y="4.059" width="1.529" height="15.294"/><rect x="11.148" y="4.059" width="1.527" height="15.294"/><rect x="14.971" y="4.059" width="1.529" height="8.412"/></svg>',google:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.86,9.09 C18.46,12.12 17.14,16.05 13.81,17.56 C9.45,19.53 4.13,17.68 2.47,12.87 C0.68,7.68 4.22,2.42 9.5,2.03 C11.57,1.88 13.42,2.37 15.05,3.65 C15.22,3.78 15.37,3.93 15.61,4.14 C14.9,4.81 14.23,5.45 13.5,6.14 C12.27,5.08 10.84,4.72 9.28,4.98 C8.12,5.17 7.16,5.76 6.37,6.63 C4.88,8.27 4.62,10.86 5.76,12.82 C6.95,14.87 9.17,15.8 11.57,15.25 C13.27,14.87 14.76,13.33 14.89,11.75 L10.51,11.75 L10.51,9.09 L17.86,9.09 L17.86,9.09 Z"/></svg>',grid:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="3" height="3"/><rect x="8" y="2" width="3" height="3"/><rect x="14" y="2" width="3" height="3"/><rect x="2" y="8" width="3" height="3"/><rect x="8" y="8" width="3" height="3"/><rect x="14" y="8" width="3" height="3"/><rect x="2" y="14" width="3" height="3"/><rect x="8" y="14" width="3" height="3"/><rect x="14" y="14" width="3" height="3"/></svg>',happy:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="13" cy="7" r="1"/><circle cx="7" cy="7" r="1"/><circle fill="none" stroke="#000" cx="10" cy="10" r="8.5"/><path fill="none" stroke="#000" d="M14.6,11.4 C13.9,13.3 12.1,14.5 10,14.5 C7.9,14.5 6.1,13.3 5.4,11.4"/></svg>',hashtag:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.431,8 L15.661,7 L12.911,7 L13.831,3 L12.901,3 L11.98,7 L9.29,7 L10.21,3 L9.281,3 L8.361,7 L5.23,7 L5,8 L8.13,8 L7.21,12 L4.23,12 L4,13 L6.98,13 L6.061,17 L6.991,17 L7.911,13 L10.601,13 L9.681,17 L10.611,17 L11.531,13 L14.431,13 L14.661,12 L11.76,12 L12.681,8 L15.431,8 Z M10.831,12 L8.141,12 L9.061,8 L11.75,8 L10.831,12 Z"/></svg>',heart:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.03" d="M10,4 C10,4 8.1,2 5.74,2 C3.38,2 1,3.55 1,6.73 C1,8.84 2.67,10.44 2.67,10.44 L10,18 L17.33,10.44 C17.33,10.44 19,8.84 19,6.73 C19,3.55 16.62,2 14.26,2 C11.9,2 10,4 10,4 L10,4 Z"/></svg>',history:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="#000" points="1 2 2 2 2 6 6 6 6 7 1 7 1 2"/><path fill="none" stroke="#000" stroke-width="1.1" d="M2.1,6.548 C3.391,3.29 6.746,1 10.5,1 C15.5,1 19.5,5 19.5,10 C19.5,15 15.5,19 10.5,19 C5.5,19 1.5,15 1.5,10"/><rect x="9" y="4" width="1" height="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M13.018,14.197 L9.445,10.625"/></svg>',home:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="18.65 11.35 10 2.71 1.35 11.35 0.65 10.65 10 1.29 19.35 10.65"/><polygon points="15 4 18 4 18 7 17 7 17 5 15 5"/><polygon points="3 11 4 11 4 18 7 18 7 12 12 12 12 18 16 18 16 11 17 11 17 19 11 19 11 13 8 13 8 19 3 19"/></svg>',image:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="16.1" cy="6.1" r="1.1"/><rect fill="none" stroke="#000" x=".5" y="2.5" width="19" height="15"/><polyline fill="none" stroke="#000" stroke-width="1.01" points="4,13 8,9 13,14"/><polyline fill="none" stroke="#000" stroke-width="1.01" points="11,12 12.5,10.5 16,14"/></svg>',info:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.13,11.59 C11.97,12.84 10.35,14.12 9.1,14.16 C6.17,14.2 9.89,9.46 8.74,8.37 C9.3,8.16 10.62,7.83 10.62,8.81 C10.62,9.63 10.12,10.55 9.88,11.32 C8.66,15.16 12.13,11.15 12.14,11.18 C12.16,11.21 12.16,11.35 12.13,11.59 C12.08,11.95 12.16,11.35 12.13,11.59 L12.13,11.59 Z M11.56,5.67 C11.56,6.67 9.36,7.15 9.36,6.03 C9.36,5 11.56,4.54 11.56,5.67 L11.56,5.67 Z"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/></svg>',instagram:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z"/><circle cx="14.87" cy="5.26" r="1.09"/><path d="M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z"/></svg>',italic:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.63,5.48 L10.15,14.52 C10,15.08 10.37,15.25 11.92,15.3 L11.72,16 L6,16 L6.2,15.31 C7.78,15.26 8.19,15.09 8.34,14.53 L10.82,5.49 C10.97,4.92 10.63,4.76 9.09,4.71 L9.28,4 L15,4 L14.81,4.69 C13.23,4.75 12.78,4.91 12.63,5.48 L12.63,5.48 Z"/></svg>',joomla:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.8,13.4l1.7-1.7L5.9,8c-0.6-0.5-0.6-1.5,0-2c0.6-0.6,1.4-0.6,2,0l1.7-1.7c-1-1-2.3-1.3-3.6-1C5.8,2.2,4.8,1.4,3.7,1.4 c-1.3,0-2.3,1-2.3,2.3c0,1.1,0.8,2,1.8,2.3c-0.4,1.3-0.1,2.8,1,3.8L7.8,13.4L7.8,13.4z"/><path d="M10.2,4.3c1-1,2.5-1.4,3.8-1c0.2-1.1,1.1-2,2.3-2c1.3,0,2.3,1,2.3,2.3c0,1.2-0.9,2.2-2,2.3c0.4,1.3,0,2.8-1,3.8L13.9,8 c0.6-0.5,0.6-1.5,0-2c-0.5-0.6-1.5-0.6-2,0L8.2,9.7L6.5,8"/><path d="M14.1,16.8c-1.3,0.4-2.8,0.1-3.8-1l1.7-1.7c0.6,0.6,1.5,0.6,2,0c0.5-0.6,0.6-1.5,0-2l-3.7-3.7L12,6.7l3.7,3.7 c1,1,1.3,2.4,1,3.6c1.1,0.2,2,1.1,2,2.3c0,1.3-1,2.3-2.3,2.3C15.2,18.6,14.3,17.8,14.1,16.8"/><path d="M13.2,12.2l-3.7,3.7c-1,1-2.4,1.3-3.6,1c-0.2,1-1.2,1.8-2.2,1.8c-1.3,0-2.3-1-2.3-2.3c0-1.1,0.8-2,1.8-2.3 c-0.3-1.3,0-2.7,1-3.7l1.7,1.7c-0.6,0.6-0.6,1.5,0,2c0.6,0.6,1.4,0.6,2,0l3.7-3.7"/></svg>',laptop:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect y="16" width="20" height="1"/><rect fill="none" stroke="#000" x="2.5" y="4.5" width="15" height="10"/></svg>',lifesaver:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10,0.5 C4.76,0.5 0.5,4.76 0.5,10 C0.5,15.24 4.76,19.5 10,19.5 C15.24,19.5 19.5,15.24 19.5,10 C19.5,4.76 15.24,0.5 10,0.5 L10,0.5 Z M10,1.5 C11.49,1.5 12.89,1.88 14.11,2.56 L11.85,4.82 C11.27,4.61 10.65,4.5 10,4.5 C9.21,4.5 8.47,4.67 7.79,4.96 L5.58,2.75 C6.87,1.95 8.38,1.5 10,1.5 L10,1.5 Z M4.96,7.8 C4.67,8.48 4.5,9.21 4.5,10 C4.5,10.65 4.61,11.27 4.83,11.85 L2.56,14.11 C1.88,12.89 1.5,11.49 1.5,10 C1.5,8.38 1.95,6.87 2.75,5.58 L4.96,7.79 L4.96,7.8 L4.96,7.8 Z M10,18.5 C8.25,18.5 6.62,17.97 5.27,17.06 L7.46,14.87 C8.22,15.27 9.08,15.5 10,15.5 C10.79,15.5 11.53,15.33 12.21,15.04 L14.42,17.25 C13.13,18.05 11.62,18.5 10,18.5 L10,18.5 Z M10,14.5 C7.52,14.5 5.5,12.48 5.5,10 C5.5,7.52 7.52,5.5 10,5.5 C12.48,5.5 14.5,7.52 14.5,10 C14.5,12.48 12.48,14.5 10,14.5 L10,14.5 Z M15.04,12.21 C15.33,11.53 15.5,10.79 15.5,10 C15.5,9.08 15.27,8.22 14.87,7.46 L17.06,5.27 C17.97,6.62 18.5,8.25 18.5,10 C18.5,11.62 18.05,13.13 17.25,14.42 L15.04,12.21 L15.04,12.21 Z"/></svg>',link:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M10.625,12.375 L7.525,15.475 C6.825,16.175 5.925,16.175 5.225,15.475 L4.525,14.775 C3.825,14.074 3.825,13.175 4.525,12.475 L7.625,9.375"/><path fill="none" stroke="#000" stroke-width="1.1" d="M9.325,7.375 L12.425,4.275 C13.125,3.575 14.025,3.575 14.724,4.275 L15.425,4.975 C16.125,5.675 16.125,6.575 15.425,7.275 L12.325,10.375"/><path fill="none" stroke="#000" stroke-width="1.1" d="M7.925,11.875 L11.925,7.975"/></svg>',linkedin:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.77,17.89 L5.77,7.17 L2.21,7.17 L2.21,17.89 L5.77,17.89 L5.77,17.89 Z M3.99,5.71 C5.23,5.71 6.01,4.89 6.01,3.86 C5.99,2.8 5.24,2 4.02,2 C2.8,2 2,2.8 2,3.85 C2,4.88 2.77,5.7 3.97,5.7 L3.99,5.7 L3.99,5.71 L3.99,5.71 Z"/><path d="M7.75,17.89 L11.31,17.89 L11.31,11.9 C11.31,11.58 11.33,11.26 11.43,11.03 C11.69,10.39 12.27,9.73 13.26,9.73 C14.55,9.73 15.06,10.71 15.06,12.15 L15.06,17.89 L18.62,17.89 L18.62,11.74 C18.62,8.45 16.86,6.92 14.52,6.92 C12.6,6.92 11.75,7.99 11.28,8.73 L11.3,8.73 L11.3,7.17 L7.75,7.17 C7.79,8.17 7.75,17.89 7.75,17.89 L7.75,17.89 L7.75,17.89 Z"/></svg>',list:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="4" width="12" height="1"/><rect x="6" y="9" width="12" height="1"/><rect x="6" y="14" width="12" height="1"/><rect x="2" y="4" width="2" height="1"/><rect x="2" y="9" width="2" height="1"/><rect x="2" y="14" width="2" height="1"/></svg>',location:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.01" d="M10,0.5 C6.41,0.5 3.5,3.39 3.5,6.98 C3.5,11.83 10,19 10,19 C10,19 16.5,11.83 16.5,6.98 C16.5,3.39 13.59,0.5 10,0.5 L10,0.5 Z"/><circle fill="none" stroke="#000" cx="10" cy="6.8" r="2.3"/></svg>',lock:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" height="10" width="13" y="8.5" x="3.5"/><path fill="none" stroke="#000" d="M6.5,8 L6.5,4.88 C6.5,3.01 8.07,1.5 10,1.5 C11.93,1.5 13.5,3.01 13.5,4.88 L13.5,8"/></svg>',mail:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="1.4,6.5 10,11 18.6,6.5"/><path d="M 1,4 1,16 19,16 19,4 1,4 Z M 18,15 2,15 2,5 18,5 18,15 Z"/></svg>',menu:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="4" width="16" height="1"/><rect x="2" y="9" width="16" height="1"/><rect x="2" y="14" width="16" height="1"/></svg>',microphone:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" x1="10" x2="10" y1="16.44" y2="18.5"/><line fill="none" stroke="#000" x1="7" x2="13" y1="18.5" y2="18.5"/><path fill="none" stroke="#000" stroke-width="1.1" d="M13.5 4.89v5.87a3.5 3.5 0 0 1-7 0V4.89a3.5 3.5 0 0 1 7 0z"/><path fill="none" stroke="#000" stroke-width="1.1" d="M15.5 10.36V11a5.5 5.5 0 0 1-11 0v-.6"/></svg>',"minus-circle":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9.5" cy="9.5" r="9"/><line fill="none" stroke="#000" x1="5" y1="9.5" x2="14" y2="9.5"/></svg>',minus:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect height="1" width="18" y="9" x="1"/></svg>',"more-vertical":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="3" r="2"/><circle cx="10" cy="10" r="2"/><circle cx="10" cy="17" r="2"/></svg>',more:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="3" cy="10" r="2"/><circle cx="10" cy="10" r="2"/><circle cx="17" cy="10" r="2"/></svg>',move:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="4,5 1,5 1,9 2,9 2,6 4,6"/><polygon points="1,16 2,16 2,18 4,18 4,19 1,19"/><polygon points="14,16 14,19 11,19 11,18 13,18 13,16"/><rect fill="none" stroke="#000" x="5.5" y="1.5" width="13" height="13"/><rect x="1" y="11" width="1" height="3"/><rect x="6" y="18" width="3" height="1"/></svg>',nut:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="2.5,5.7 10,1.3 17.5,5.7 17.5,14.3 10,18.7 2.5,14.3"/><circle fill="none" stroke="#000" cx="10" cy="10" r="3.5"/></svg>',pagekit:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="3,1 17,1 17,16 10,16 10,13 14,13 14,4 6,4 6,16 10,16 10,19 3,19"/></svg>',"paint-bucket":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.21,1 L0,11.21 L8.1,19.31 L18.31,9.1 L10.21,1 L10.21,1 Z M16.89,9.1 L15,11 L1.7,11 L10.21,2.42 L16.89,9.1 Z"/><path fill="none" stroke="#000" stroke-width="1.1" d="M6.42,2.33 L11.7,7.61"/><path d="M18.49,12 C18.49,12 20,14.06 20,15.36 C20,16.28 19.24,17 18.49,17 L18.49,17 C17.74,17 17,16.28 17,15.36 C17,14.06 18.49,12 18.49,12 L18.49,12 Z"/></svg>',pencil:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M17.25,6.01 L7.12,16.1 L3.82,17.2 L5.02,13.9 L15.12,3.88 C15.71,3.29 16.66,3.29 17.25,3.88 C17.83,4.47 17.83,5.42 17.25,6.01 L17.25,6.01 Z"/><path fill="none" stroke="#000" d="M15.98,7.268 L13.851,5.148"/></svg>',"phone-landscape":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M17,5.5 C17.8,5.5 18.5,6.2 18.5,7 L18.5,14 C18.5,14.8 17.8,15.5 17,15.5 L3,15.5 C2.2,15.5 1.5,14.8 1.5,14 L1.5,7 C1.5,6.2 2.2,5.5 3,5.5 L17,5.5 L17,5.5 L17,5.5 Z"/><circle cx="3.8" cy="10.5" r=".8"/></svg>',phone:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M15.5,17 C15.5,17.8 14.8,18.5 14,18.5 L7,18.5 C6.2,18.5 5.5,17.8 5.5,17 L5.5,3 C5.5,2.2 6.2,1.5 7,1.5 L14,1.5 C14.8,1.5 15.5,2.2 15.5,3 L15.5,17 L15.5,17 L15.5,17 Z"/><circle cx="10.5" cy="16.5" r=".8"/></svg>',pinterest:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.21,1 C5.5,1 3,4.16 3,7.61 C3,9.21 3.85,11.2 5.22,11.84 C5.43,11.94 5.54,11.89 5.58,11.69 C5.62,11.54 5.8,10.8 5.88,10.45 C5.91,10.34 5.89,10.24 5.8,10.14 C5.36,9.59 5,8.58 5,7.65 C5,5.24 6.82,2.91 9.93,2.91 C12.61,2.91 14.49,4.74 14.49,7.35 C14.49,10.3 13,12.35 11.06,12.35 C9.99,12.35 9.19,11.47 9.44,10.38 C9.75,9.08 10.35,7.68 10.35,6.75 C10.35,5.91 9.9,5.21 8.97,5.21 C7.87,5.21 6.99,6.34 6.99,7.86 C6.99,8.83 7.32,9.48 7.32,9.48 C7.32,9.48 6.24,14.06 6.04,14.91 C5.7,16.35 6.08,18.7 6.12,18.9 C6.14,19.01 6.26,19.05 6.33,18.95 C6.44,18.81 7.74,16.85 8.11,15.44 C8.24,14.93 8.79,12.84 8.79,12.84 C9.15,13.52 10.19,14.09 11.29,14.09 C14.58,14.09 16.96,11.06 16.96,7.3 C16.94,3.7 14,1 10.21,1"/></svg>',"play-circle":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" stroke-width="1.1" points="8.5 7 13.5 10 8.5 13"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/></svg>',play:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="6.5,5 14.5,10 6.5,15"/></svg>',"plus-circle":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9.5" cy="9.5" r="9"/><line fill="none" stroke="#000" x1="9.5" y1="5" x2="9.5" y2="14"/><line fill="none" stroke="#000" x1="5" y1="9.5" x2="14" y2="9.5"/></svg>',plus:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="1" width="1" height="17"/><rect x="1" y="9" width="17" height="1"/></svg>',print:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="4.5 13.5 1.5 13.5 1.5 6.5 18.5 6.5 18.5 13.5 15.5 13.5"/><polyline fill="none" stroke="#000" points="15.5 6.5 15.5 2.5 4.5 2.5 4.5 6.5"/><rect fill="none" stroke="#000" width="11" height="6" x="4.5" y="11.5"/><rect width="8" height="1" x="6" y="13"/><rect width="8" height="1" x="6" y="15"/></svg>',pull:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="6.85,8 9.5,10.6 12.15,8 12.85,8.7 9.5,12 6.15,8.7"/><line fill="none" stroke="#000" x1="9.5" y1="11" x2="9.5" y2="2"/><polyline fill="none" stroke="#000" points="6,5.5 3.5,5.5 3.5,18.5 15.5,18.5 15.5,5.5 13,5.5"/></svg>',push:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="12.15,4 9.5,1.4 6.85,4 6.15,3.3 9.5,0 12.85,3.3"/><line fill="none" stroke="#000" x1="9.5" y1="10" x2="9.5" y2="1"/><polyline fill="none" stroke="#000" points="6 5.5 3.5 5.5 3.5 18.5 15.5 18.5 15.5 5.5 13 5.5"/></svg>',question:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><circle cx="10.44" cy="14.42" r="1.05"/><path fill="none" stroke="#000" stroke-width="1.2" d="M8.17,7.79 C8.17,4.75 12.72,4.73 12.72,7.72 C12.72,8.67 11.81,9.15 11.23,9.75 C10.75,10.24 10.51,10.73 10.45,11.4 C10.44,11.53 10.43,11.64 10.43,11.75"/></svg>',"quote-right":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.27,7.79 C17.27,9.45 16.97,10.43 15.99,12.02 C14.98,13.64 13,15.23 11.56,15.97 L11.1,15.08 C12.34,14.2 13.14,13.51 14.02,11.82 C14.27,11.34 14.41,10.92 14.49,10.54 C14.3,10.58 14.09,10.6 13.88,10.6 C12.06,10.6 10.59,9.12 10.59,7.3 C10.59,5.48 12.06,4 13.88,4 C15.39,4 16.67,5.02 17.05,6.42 C17.19,6.82 17.27,7.27 17.27,7.79 L17.27,7.79 Z"/><path d="M8.68,7.79 C8.68,9.45 8.38,10.43 7.4,12.02 C6.39,13.64 4.41,15.23 2.97,15.97 L2.51,15.08 C3.75,14.2 4.55,13.51 5.43,11.82 C5.68,11.34 5.82,10.92 5.9,10.54 C5.71,10.58 5.5,10.6 5.29,10.6 C3.47,10.6 2,9.12 2,7.3 C2,5.48 3.47,4 5.29,4 C6.8,4 8.08,5.02 8.46,6.42 C8.6,6.82 8.68,7.27 8.68,7.79 L8.68,7.79 Z"/></svg>',receiver:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.01" d="M6.189,13.611C8.134,15.525 11.097,18.239 13.867,18.257C16.47,18.275 18.2,16.241 18.2,16.241L14.509,12.551L11.539,13.639L6.189,8.29L7.313,5.355L3.76,1.8C3.76,1.8 1.732,3.537 1.7,6.092C1.667,8.809 4.347,11.738 6.189,13.611"/></svg>',reddit:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M19 9.05a2.56 2.56 0 0 0-2.56-2.56 2.59 2.59 0 0 0-1.88.82 10.63 10.63 0 0 0-4.14-1v-.08c.58-1.62 1.58-3.89 2.7-4.1.38-.08.77.12 1.19.57a1.15 1.15 0 0 0-.06.37 1.48 1.48 0 1 0 1.51-1.45 1.43 1.43 0 0 0-.76.19A2.29 2.29 0 0 0 12.91 1c-2.11.43-3.39 4.38-3.63 5.19 0 0 0 .11-.06.11a10.65 10.65 0 0 0-3.75 1A2.56 2.56 0 0 0 1 9.05a2.42 2.42 0 0 0 .72 1.76A5.18 5.18 0 0 0 1.24 13c0 3.66 3.92 6.64 8.73 6.64s8.74-3 8.74-6.64a5.23 5.23 0 0 0-.46-2.13A2.58 2.58 0 0 0 19 9.05zm-16.88 0a1.44 1.44 0 0 1 2.27-1.19 7.68 7.68 0 0 0-2.07 1.91 1.33 1.33 0 0 1-.2-.72zM10 18.4c-4.17 0-7.55-2.4-7.55-5.4S5.83 7.53 10 7.53 17.5 10 17.5 13s-3.38 5.4-7.5 5.4zm7.69-8.61a7.62 7.62 0 0 0-2.09-1.91 1.41 1.41 0 0 1 .84-.28 1.47 1.47 0 0 1 1.44 1.45 1.34 1.34 0 0 1-.21.72z"/><path d="M6.69 12.58a1.39 1.39 0 1 1 1.39-1.39 1.38 1.38 0 0 1-1.38 1.39z"/><path d="M14.26 11.2a1.39 1.39 0 1 1-1.39-1.39 1.39 1.39 0 0 1 1.39 1.39z"/><path d="M13.09 14.88a.54.54 0 0 1-.09.77 5.3 5.3 0 0 1-3.26 1.19 5.61 5.61 0 0 1-3.4-1.22.55.55 0 1 1 .73-.83 4.09 4.09 0 0 0 5.25 0 .56.56 0 0 1 .77.09z"/></svg>',refresh:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M17.08,11.15 C17.09,11.31 17.1,11.47 17.1,11.64 C17.1,15.53 13.94,18.69 10.05,18.69 C6.16,18.68 3,15.53 3,11.63 C3,7.74 6.16,4.58 10.05,4.58 C10.9,4.58 11.71,4.73 12.46,5"/><polyline fill="none" stroke="#000" points="9.9 2 12.79 4.89 9.79 7.9"/></svg>',reply:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.7,13.11 C16.12,10.02 13.84,7.85 11.02,6.61 C10.57,6.41 9.75,6.13 9,5.91 L9,2 L1,9 L9,16 L9,12.13 C10.78,12.47 12.5,13.19 14.09,14.25 C17.13,16.28 18.56,18.54 18.56,18.54 C18.56,18.54 18.81,15.28 17.7,13.11 L17.7,13.11 Z M14.82,13.53 C13.17,12.4 11.01,11.4 8,10.92 L8,13.63 L2.55,9 L8,4.25 L8,6.8 C8.3,6.86 9.16,7.02 10.37,7.49 C13.3,8.65 15.54,10.96 16.65,13.08 C16.97,13.7 17.48,14.86 17.68,16 C16.87,15.05 15.73,14.15 14.82,13.53 L14.82,13.53 Z"/></svg>',rss:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="3.12" cy="16.8" r="1.85"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,8.2 C1.78,8.18 2.06,8.16 2.35,8.16 C7.57,8.16 11.81,12.37 11.81,17.57 C11.81,17.89 11.79,18.19 11.76,18.5"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,2.52 C1.78,2.51 2.06,2.5 2.35,2.5 C10.72,2.5 17.5,9.24 17.5,17.57 C17.5,17.89 17.49,18.19 17.47,18.5"/></svg>',search:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',server:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="1" height="2"/><rect x="5" y="3" width="1" height="2"/><rect x="7" y="3" width="1" height="2"/><rect x="16" y="3" width="1" height="1"/><rect x="16" y="10" width="1" height="1"/><circle fill="none" stroke="#000" cx="9.9" cy="17.4" r="1.4"/><rect x="3" y="10" width="1" height="2"/><rect x="5" y="10" width="1" height="2"/><rect x="9.5" y="14" width="1" height="2"/><rect x="3" y="17" width="6" height="1"/><rect x="11" y="17" width="6" height="1"/><rect fill="none" stroke="#000" x="1.5" y="1.5" width="17" height="5"/><rect fill="none" stroke="#000" x="1.5" y="8.5" width="17" height="5"/></svg>',settings:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><ellipse fill="none" stroke="#000" cx="6.11" cy="3.55" rx="2.11" ry="2.15"/><ellipse fill="none" stroke="#000" cx="6.11" cy="15.55" rx="2.11" ry="2.15"/><circle fill="none" stroke="#000" cx="13.15" cy="9.55" r="2.15"/><rect x="1" y="3" width="3" height="1"/><rect x="10" y="3" width="8" height="1"/><rect x="1" y="9" width="8" height="1"/><rect x="15" y="9" width="3" height="1"/><rect x="1" y="15" width="3" height="1"/><rect x="10" y="15" width="8" height="1"/></svg>',shrink:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="11 4 12 4 12 8 16 8 16 9 11 9"/><polygon points="4 11 9 11 9 16 8 16 8 12 4 12"/><path fill="none" stroke="#000" stroke-width="1.1" d="M12,8 L18,2"/><path fill="none" stroke="#000" stroke-width="1.1" d="M2,18 L8,12"/></svg>',"sign-in":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="7 2 17 2 17 17 7 17 7 16 16 16 16 3 7 3"/><polygon points="9.1 13.4 8.5 12.8 11.28 10 4 10 4 9 11.28 9 8.5 6.2 9.1 5.62 13 9.5"/></svg>',"sign-out":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="13.1 13.4 12.5 12.8 15.28 10 8 10 8 9 15.28 9 12.5 6.2 13.1 5.62 17 9.5"/><polygon points="13 2 3 2 3 17 13 17 13 16 4 16 4 3 13 3"/></svg>',social:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="13.4" y1="14" x2="6.3" y2="10.7"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13.5" y1="5.5" x2="6.5" y2="8.8"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="15.5" cy="4.6" r="2.3"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="15.5" cy="14.8" r="2.3"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="4.5" cy="9.8" r="2.3"/></svg>',soundcloud:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.2,9.4c-0.4,0-0.8,0.1-1.101,0.2c-0.199-2.5-2.399-4.5-5-4.5c-0.6,0-1.2,0.1-1.7,0.3C9.2,5.5,9.1,5.6,9.1,5.6V15h8 c1.601,0,2.801-1.2,2.801-2.8C20,10.7,18.7,9.4,17.2,9.4L17.2,9.4z"/><rect x="6" y="6.5" width="1.5" height="8.5"/><rect x="3" y="8" width="1.5" height="7"/><rect y="10" width="1.5" height="5"/></svg>',star:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" stroke-width="1.01" points="10 2 12.63 7.27 18.5 8.12 14.25 12.22 15.25 18 10 15.27 4.75 18 5.75 12.22 1.5 8.12 7.37 7.27"/></svg>',strikethrough:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6,13.02 L6.65,13.02 C7.64,15.16 8.86,16.12 10.41,16.12 C12.22,16.12 12.92,14.93 12.92,13.89 C12.92,12.55 11.99,12.03 9.74,11.23 C8.05,10.64 6.23,10.11 6.23,7.83 C6.23,5.5 8.09,4.09 10.4,4.09 C11.44,4.09 12.13,4.31 12.72,4.54 L13.33,4 L13.81,4 L13.81,7.59 L13.16,7.59 C12.55,5.88 11.52,4.89 10.07,4.89 C8.84,4.89 7.89,5.69 7.89,7.03 C7.89,8.29 8.89,8.78 10.88,9.45 C12.57,10.03 14.38,10.6 14.38,12.91 C14.38,14.75 13.27,16.93 10.18,16.93 C9.18,16.93 8.17,16.69 7.46,16.39 L6.52,17 L6,17 L6,13.02 L6,13.02 Z"/><rect x="3" y="10" width="15" height="1"/></svg>',table:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="3" width="18" height="1"/><rect x="1" y="7" width="18" height="1"/><rect x="1" y="11" width="18" height="1"/><rect x="1" y="15" width="18" height="1"/></svg>',"tablet-landscape":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M1.5,5 C1.5,4.2 2.2,3.5 3,3.5 L17,3.5 C17.8,3.5 18.5,4.2 18.5,5 L18.5,16 C18.5,16.8 17.8,17.5 17,17.5 L3,17.5 C2.2,17.5 1.5,16.8 1.5,16 L1.5,5 L1.5,5 L1.5,5 Z"/><circle cx="3.7" cy="10.5" r=".8"/></svg>',tablet:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M5,18.5 C4.2,18.5 3.5,17.8 3.5,17 L3.5,3 C3.5,2.2 4.2,1.5 5,1.5 L16,1.5 C16.8,1.5 17.5,2.2 17.5,3 L17.5,17 C17.5,17.8 16.8,18.5 16,18.5 L5,18.5 L5,18.5 L5,18.5 Z"/><circle cx="10.5" cy="16.3" r=".8"/></svg>',tag:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M17.5,3.71 L17.5,7.72 C17.5,7.96 17.4,8.2 17.21,8.39 L8.39,17.2 C7.99,17.6 7.33,17.6 6.93,17.2 L2.8,13.07 C2.4,12.67 2.4,12.01 2.8,11.61 L11.61,2.8 C11.81,2.6 12.08,2.5 12.34,2.5 L16.19,2.5 C16.52,2.5 16.86,2.63 17.11,2.88 C17.35,3.11 17.48,3.4 17.5,3.71 L17.5,3.71 Z"/><circle cx="14" cy="6" r="1"/></svg>',thumbnails:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" x="3.5" y="3.5" width="5" height="5"/><rect fill="none" stroke="#000" x="11.5" y="3.5" width="5" height="5"/><rect fill="none" stroke="#000" x="11.5" y="11.5" width="5" height="5"/><rect fill="none" stroke="#000" x="3.5" y="11.5" width="5" height="5"/></svg>',tiktok:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.24,6V8.82a6.79,6.79,0,0,1-4-1.28v5.81A5.26,5.26,0,1,1,8,8.1a4.36,4.36,0,0,1,.72.05v2.9A2.57,2.57,0,0,0,7.64,11a2.4,2.4,0,1,0,2.77,2.38V2h2.86a4,4,0,0,0,1.84,3.38A4,4,0,0,0,17.24,6Z"/></svg>',trash:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="6.5 3 6.5 1.5 13.5 1.5 13.5 3"/><polyline fill="none" stroke="#000" points="4.5 4 4.5 18.5 15.5 18.5 15.5 4"/><rect x="8" y="7" width="1" height="9"/><rect x="11" y="7" width="1" height="9"/><rect x="2" y="3" width="16" height="1"/></svg>',"triangle-down":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="5 7 15 7 10 12"/></svg>',"triangle-left":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="12 5 7 10 12 15"/></svg>',"triangle-right":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="8 5 13 10 8 15"/></svg>',"triangle-up":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="5 13 10 8 15 13"/></svg>',tripadvisor:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M19.021,7.866C19.256,6.862,20,5.854,20,5.854h-3.346C14.781,4.641,12.504,4,9.98,4C7.363,4,4.999,4.651,3.135,5.876H0\tc0,0,0.738,0.987,0.976,1.988c-0.611,0.837-0.973,1.852-0.973,2.964c0,2.763,2.249,5.009,5.011,5.009\tc1.576,0,2.976-0.737,3.901-1.879l1.063,1.599l1.075-1.615c0.475,0.611,1.1,1.111,1.838,1.451c1.213,0.547,2.574,0.612,3.825,0.15\tc2.589-0.963,3.913-3.852,2.964-6.439c-0.175-0.463-0.4-0.876-0.675-1.238H19.021z M16.38,14.594\tc-1.002,0.371-2.088,0.328-3.06-0.119c-0.688-0.317-1.252-0.817-1.657-1.438c-0.164-0.25-0.313-0.52-0.417-0.811\tc-0.124-0.328-0.186-0.668-0.217-1.014c-0.063-0.689,0.037-1.396,0.339-2.043c0.448-0.971,1.251-1.71,2.25-2.079\tc2.075-0.765,4.375,0.3,5.14,2.366c0.762,2.066-0.301,4.37-2.363,5.134L16.38,14.594L16.38,14.594z M8.322,13.066\tc-0.72,1.059-1.935,1.76-3.309,1.76c-2.207,0-4.001-1.797-4.001-3.996c0-2.203,1.795-4.002,4.001-4.002\tc2.204,0,3.999,1.8,3.999,4.002c0,0.137-0.024,0.261-0.04,0.396c-0.067,0.678-0.284,1.313-0.648,1.853v-0.013H8.322z M2.472,10.775\tc0,1.367,1.112,2.479,2.476,2.479c1.363,0,2.472-1.11,2.472-2.479c0-1.359-1.11-2.468-2.472-2.468\tC3.584,8.306,2.473,9.416,2.472,10.775L2.472,10.775z M12.514,10.775c0,1.367,1.104,2.479,2.471,2.479\tc1.363,0,2.474-1.108,2.474-2.479c0-1.359-1.11-2.468-2.474-2.468c-1.364,0-2.477,1.109-2.477,2.468H12.514z M3.324,10.775\tc0-0.893,0.726-1.618,1.614-1.618c0.889,0,1.625,0.727,1.625,1.618c0,0.898-0.725,1.627-1.625,1.627\tc-0.901,0-1.625-0.729-1.625-1.627H3.324z M13.354,10.775c0-0.893,0.726-1.618,1.627-1.618c0.886,0,1.61,0.727,1.61,1.618\tc0,0.898-0.726,1.627-1.626,1.627s-1.625-0.729-1.625-1.627H13.354z M9.977,4.875c1.798,0,3.425,0.324,4.849,0.968\tc-0.535,0.015-1.061,0.108-1.586,0.3c-1.264,0.463-2.264,1.388-2.815,2.604c-0.262,0.551-0.398,1.133-0.448,1.72\tC9.79,7.905,7.677,5.873,5.076,5.82C6.501,5.208,8.153,4.875,9.94,4.875H9.977z"/></svg>',tumblr:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.885,8.598c0,0,0,3.393,0,4.996c0,0.282,0,0.66,0.094,0.942c0.377,1.509,1.131,2.545,2.545,3.11 c1.319,0.472,2.356,0.472,3.676,0c0.565-0.188,1.132-0.659,1.132-0.659l-0.849-2.263c0,0-1.036,0.378-1.603,0.283 c-0.565-0.094-1.226-0.66-1.226-1.508c0-1.603,0-4.902,0-4.902h2.828V5.771h-2.828V2H8.205c0,0-0.094,0.66-0.188,0.942 C7.828,3.791,7.262,4.733,6.603,5.394C5.848,6.147,5,6.43,5,6.43v2.168H6.885z"/></svg>',tv:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="7" y="16" width="6" height="1"/><rect fill="none" stroke="#000" x=".5" y="3.5" width="19" height="11"/></svg>',twitch:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.23,1,2,4.23V15.85H5.88v3.23L9.1,15.85h2.59L17.5,10V1Zm11,8.4L13.62,12H11L8.78,14.24V12H5.88V2.29H16.21Z"/><rect x="12.98" y="4.55" width="1.29" height="3.88"/><rect x="9.43" y="4.55" width="1.29" height="3.88"/></svg>',twitter:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M19,4.74 C18.339,5.029 17.626,5.229 16.881,5.32 C17.644,4.86 18.227,4.139 18.503,3.28 C17.79,3.7 17.001,4.009 16.159,4.17 C15.485,3.45 14.526,3 13.464,3 C11.423,3 9.771,4.66 9.771,6.7 C9.771,6.99 9.804,7.269 9.868,7.539 C6.795,7.38 4.076,5.919 2.254,3.679 C1.936,4.219 1.754,4.86 1.754,5.539 C1.754,6.82 2.405,7.95 3.397,8.61 C2.79,8.589 2.22,8.429 1.723,8.149 L1.723,8.189 C1.723,9.978 2.997,11.478 4.686,11.82 C4.376,11.899 4.049,11.939 3.713,11.939 C3.475,11.939 3.245,11.919 3.018,11.88 C3.49,13.349 4.852,14.419 6.469,14.449 C5.205,15.429 3.612,16.019 1.882,16.019 C1.583,16.019 1.29,16.009 1,15.969 C2.635,17.019 4.576,17.629 6.662,17.629 C13.454,17.629 17.17,12 17.17,7.129 C17.17,6.969 17.166,6.809 17.157,6.649 C17.879,6.129 18.504,5.478 19,4.74"/></svg>',uikit:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="14.4,3.1 11.3,5.1 15,7.3 15,12.9 10,15.7 5,12.9 5,8.5 2,6.8 2,14.8 9.9,19.5 18,14.8 18,5.3"/><polygon points="9.8,4.2 6.7,2.4 9.8,0.4 12.9,2.3"/></svg>',unlock:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" x="3.5" y="8.5" width="13" height="10"/><path fill="none" stroke="#000" d="M6.5,8.5 L6.5,4.9 C6.5,3 8.1,1.5 10,1.5 C11.9,1.5 13.5,3 13.5,4.9"/></svg>',upload:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="5 8 9.5 3.5 14 8"/><rect x="3" y="17" width="13" height="1"/><line fill="none" stroke="#000" x1="9.5" y1="15" x2="9.5" y2="4"/></svg>',user:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9.9" cy="6.4" r="4.4"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,19 C2.3,14.5 5.8,11.2 10,11.2 C14.2,11.2 17.7,14.6 18.5,19.2"/></svg>',users:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="7.7" cy="8.6" r="3.5"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1,18.1 C1.7,14.6 4.4,12.1 7.6,12.1 C10.9,12.1 13.7,14.8 14.3,18.3"/><path fill="none" stroke="#000" stroke-width="1.1" d="M11.4,4 C12.8,2.4 15.4,2.8 16.3,4.7 C17.2,6.6 15.7,8.9 13.6,8.9 C16.5,8.9 18.8,11.3 19.2,14.1"/></svg>',"video-camera":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="17.5 6.9 17.5 13.1 13.5 10.4 13.5 14.5 2.5 14.5 2.5 5.5 13.5 5.5 13.5 9.6 17.5 6.9"/></svg>',vimeo:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.065,7.59C1.84,7.367,1.654,7.082,1.468,6.838c-0.332-0.42-0.137-0.411,0.274-0.772c1.026-0.91,2.004-1.896,3.127-2.688 c1.017-0.713,2.365-1.173,3.286-0.039c0.849,1.045,0.869,2.629,1.084,3.891c0.215,1.309,0.421,2.648,0.88,3.901 c0.127,0.352,0.37,1.018,0.81,1.074c0.567,0.078,1.145-0.917,1.408-1.289c0.684-0.987,1.611-2.317,1.494-3.587 c-0.115-1.349-1.572-1.095-2.482-0.773c0.146-1.514,1.555-3.216,2.912-3.792c1.439-0.597,3.579-0.587,4.302,1.036 c0.772,1.759,0.078,3.802-0.763,5.396c-0.918,1.731-2.1,3.333-3.363,4.829c-1.114,1.329-2.432,2.787-4.093,3.422 c-1.897,0.723-3.021-0.686-3.667-2.318c-0.705-1.777-1.056-3.771-1.565-5.621C4.898,8.726,4.644,7.836,4.136,7.191 C3.473,6.358,2.72,7.141,2.065,7.59C1.977,7.502,2.115,7.551,2.065,7.59L2.065,7.59z"/></svg>',warning:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="14" r="1"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><path d="M10.97,7.72 C10.85,9.54 10.56,11.29 10.56,11.29 C10.51,11.87 10.27,12 9.99,12 C9.69,12 9.49,11.87 9.43,11.29 C9.43,11.29 9.16,9.54 9.03,7.72 C8.96,6.54 9.03,6 9.03,6 C9.03,5.45 9.46,5.02 9.99,5 C10.53,5.01 10.97,5.44 10.97,6 C10.97,6 11.04,6.54 10.97,7.72 L10.97,7.72 Z"/></svg>',whatsapp:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.7,3.3c-1.8-1.8-4.1-2.8-6.7-2.8c-5.2,0-9.4,4.2-9.4,9.4c0,1.7,0.4,3.3,1.3,4.7l-1.3,4.9l5-1.3c1.4,0.8,2.9,1.2,4.5,1.2 l0,0l0,0c5.2,0,9.4-4.2,9.4-9.4C19.5,7.4,18.5,5,16.7,3.3 M10.1,17.7L10.1,17.7c-1.4,0-2.8-0.4-4-1.1l-0.3-0.2l-3,0.8l0.8-2.9 l-0.2-0.3c-0.8-1.2-1.2-2.7-1.2-4.2c0-4.3,3.5-7.8,7.8-7.8c2.1,0,4.1,0.8,5.5,2.3c1.5,1.5,2.3,3.4,2.3,5.5 C17.9,14.2,14.4,17.7,10.1,17.7 M14.4,11.9c-0.2-0.1-1.4-0.7-1.6-0.8c-0.2-0.1-0.4-0.1-0.5,0.1c-0.2,0.2-0.6,0.8-0.8,0.9 c-0.1,0.2-0.3,0.2-0.5,0.1c-0.2-0.1-1-0.4-1.9-1.2c-0.7-0.6-1.2-1.4-1.3-1.6c-0.1-0.2,0-0.4,0.1-0.5C8,8.8,8.1,8.7,8.2,8.5 c0.1-0.1,0.2-0.2,0.2-0.4c0.1-0.2,0-0.3,0-0.4C8.4,7.6,7.9,6.5,7.7,6C7.5,5.5,7.3,5.6,7.2,5.6c-0.1,0-0.3,0-0.4,0 c-0.2,0-0.4,0.1-0.6,0.3c-0.2,0.2-0.8,0.8-0.8,2c0,1.2,0.8,2.3,1,2.4c0.1,0.2,1.7,2.5,4,3.5c0.6,0.2,1,0.4,1.3,0.5 c0.6,0.2,1.1,0.2,1.5,0.1c0.5-0.1,1.4-0.6,1.6-1.1c0.2-0.5,0.2-1,0.1-1.1C14.8,12.1,14.6,12,14.4,11.9"/></svg>',wordpress:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10,0.5c-5.2,0-9.5,4.3-9.5,9.5s4.3,9.5,9.5,9.5c5.2,0,9.5-4.3,9.5-9.5S15.2,0.5,10,0.5L10,0.5L10,0.5z M15.6,3.9h-0.1 c-0.8,0-1.4,0.7-1.4,1.5c0,0.7,0.4,1.3,0.8,1.9c0.3,0.6,0.7,1.3,0.7,2.3c0,0.7-0.3,1.5-0.6,2.7L14.1,15l-3-8.9 c0.5,0,0.9-0.1,0.9-0.1C12.5,6,12.5,5.3,12,5.4c0,0-1.3,0.1-2.2,0.1C9,5.5,7.7,5.4,7.7,5.4C7.2,5.3,7.2,6,7.6,6c0,0,0.4,0.1,0.9,0.1 l1.3,3.5L8,15L5,6.1C5.5,6.1,5.9,6,5.9,6C6.4,6,6.3,5.3,5.9,5.4c0,0-1.3,0.1-2.2,0.1c-0.2,0-0.3,0-0.5,0c1.5-2.2,4-3.7,6.9-3.7 C12.2,1.7,14.1,2.6,15.6,3.9L15.6,3.9L15.6,3.9z M2.5,6.6l3.9,10.8c-2.7-1.3-4.6-4.2-4.6-7.4C1.8,8.8,2,7.6,2.5,6.6L2.5,6.6L2.5,6.6 z M10.2,10.7l2.5,6.9c0,0,0,0.1,0.1,0.1C11.9,18,11,18.2,10,18.2c-0.8,0-1.6-0.1-2.3-0.3L10.2,10.7L10.2,10.7L10.2,10.7z M14.2,17.1 l2.5-7.3c0.5-1.2,0.6-2.1,0.6-2.9c0-0.3,0-0.6-0.1-0.8c0.6,1.2,1,2.5,1,4C18.3,13,16.6,15.7,14.2,17.1L14.2,17.1L14.2,17.1z"/></svg>',world:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M1,10.5 L19,10.5"/><path fill="none" stroke="#000" d="M2.35,15.5 L17.65,15.5"/><path fill="none" stroke="#000" d="M2.35,5.5 L17.523,5.5"/><path fill="none" stroke="#000" d="M10,19.46 L9.98,19.46 C7.31,17.33 5.61,14.141 5.61,10.58 C5.61,7.02 7.33,3.83 10,1.7 C10.01,1.7 9.99,1.7 10,1.7 L10,1.7 C12.67,3.83 14.4,7.02 14.4,10.58 C14.4,14.141 12.67,17.33 10,19.46 L10,19.46 L10,19.46 L10,19.46 Z"/><circle fill="none" stroke="#000" cx="10" cy="10.5" r="9"/></svg>',xing:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.4,4.56 C4.24,4.56 4.11,4.61 4.05,4.72 C3.98,4.83 3.99,4.97 4.07,5.12 L5.82,8.16 L5.82,8.17 L3.06,13.04 C2.99,13.18 2.99,13.33 3.06,13.44 C3.12,13.55 3.24,13.62 3.4,13.62 L6,13.62 C6.39,13.62 6.57,13.36 6.71,13.12 C6.71,13.12 9.41,8.35 9.51,8.16 C9.49,8.14 7.72,5.04 7.72,5.04 C7.58,4.81 7.39,4.56 6.99,4.56 L4.4,4.56 L4.4,4.56 Z"/><path d="M15.3,1 C14.91,1 14.74,1.25 14.6,1.5 C14.6,1.5 9.01,11.42 8.82,11.74 C8.83,11.76 12.51,18.51 12.51,18.51 C12.64,18.74 12.84,19 13.23,19 L15.82,19 C15.98,19 16.1,18.94 16.16,18.83 C16.23,18.72 16.23,18.57 16.16,18.43 L12.5,11.74 L12.5,11.72 L18.25,1.56 C18.32,1.42 18.32,1.27 18.25,1.16 C18.21,1.06 18.08,1 17.93,1 L15.3,1 L15.3,1 Z"/></svg>',yelp:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.175,14.971c-0.112,0.77-1.686,2.767-2.406,3.054c-0.246,0.1-0.487,0.076-0.675-0.069\tc-0.122-0.096-2.446-3.859-2.446-3.859c-0.194-0.293-0.157-0.682,0.083-0.978c0.234-0.284,0.581-0.393,0.881-0.276\tc0.016,0.01,4.21,1.394,4.332,1.482c0.178,0.148,0.263,0.379,0.225,0.646L17.175,14.971L17.175,14.971z M11.464,10.789\tc-0.203-0.307-0.199-0.666,0.009-0.916c0,0,2.625-3.574,2.745-3.657c0.203-0.135,0.452-0.141,0.69-0.025\tc0.691,0.335,2.085,2.405,2.167,3.199v0.027c0.024,0.271-0.082,0.491-0.273,0.623c-0.132,0.083-4.43,1.155-4.43,1.155\tc-0.322,0.096-0.68-0.06-0.882-0.381L11.464,10.789z M9.475,9.563C9.32,9.609,8.848,9.757,8.269,8.817c0,0-3.916-6.16-4.007-6.351\tc-0.057-0.212,0.011-0.455,0.202-0.65C5.047,1.211,8.21,0.327,9.037,0.529c0.27,0.069,0.457,0.238,0.522,0.479\tc0.047,0.266,0.433,5.982,0.488,7.264C10.098,9.368,9.629,9.517,9.475,9.563z M9.927,19.066c-0.083,0.225-0.273,0.373-0.54,0.421\tc-0.762,0.13-3.15-0.751-3.647-1.342c-0.096-0.131-0.155-0.262-0.167-0.394c-0.011-0.095,0-0.189,0.036-0.272\tc0.061-0.155,2.917-3.538,2.917-3.538c0.214-0.272,0.595-0.355,0.952-0.213c0.345,0.13,0.56,0.428,0.536,0.749\tC10.014,14.479,9.977,18.923,9.927,19.066z M3.495,13.912c-0.235-0.009-0.444-0.148-0.568-0.382c-0.089-0.17-0.151-0.453-0.19-0.794\tC2.63,11.701,2.761,10.144,3.07,9.648c0.145-0.226,0.357-0.345,0.592-0.336c0.154,0,4.255,1.667,4.255,1.667\tc0.321,0.118,0.521,0.453,0.5,0.833c-0.023,0.37-0.236,0.655-0.551,0.738L3.495,13.912z"/></svg>',youtube:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15,4.1c1,0.1,2.3,0,3,0.8c0.8,0.8,0.9,2.1,0.9,3.1C19,9.2,19,10.9,19,12c-0.1,1.1,0,2.4-0.5,3.4c-0.5,1.1-1.4,1.5-2.5,1.6 c-1.2,0.1-8.6,0.1-11,0c-1.1-0.1-2.4-0.1-3.2-1c-0.7-0.8-0.7-2-0.8-3C1,11.8,1,10.1,1,8.9c0-1.1,0-2.4,0.5-3.4C2,4.5,3,4.3,4.1,4.2 C5.3,4.1,12.6,4,15,4.1z M8,7.5v6l5.5-3L8,7.5z"/></svg>'})}return"undefined"!=typeof window&&window.UIkit&&window.UIkit.use(i),i});;
/**
 * Swiper 6.7.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: May 31, 2021
 */

 !function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).Swiper=t()}(this,(function(){"use strict";function e(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function t(){return(t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}function a(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function i(e,t){void 0===e&&(e={}),void 0===t&&(t={}),Object.keys(t).forEach((function(s){void 0===e[s]?e[s]=t[s]:a(t[s])&&a(e[s])&&Object.keys(t[s]).length>0&&i(e[s],t[s])}))}var s={body:{},addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:function(){},nodeName:""},querySelector:function(){return null},querySelectorAll:function(){return[]},getElementById:function(){return null},createEvent:function(){return{initEvent:function(){}}},createElement:function(){return{children:[],childNodes:[],style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},createElementNS:function(){return{}},importNode:function(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function r(){var e="undefined"!=typeof document?document:{};return i(e,s),e}var n={document:s,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState:function(){},pushState:function(){},go:function(){},back:function(){}},CustomEvent:function(){return this},addEventListener:function(){},removeEventListener:function(){},getComputedStyle:function(){return{getPropertyValue:function(){return""}}},Image:function(){},Date:function(){},screen:{},setTimeout:function(){},clearTimeout:function(){},matchMedia:function(){return{}},requestAnimationFrame:function(e){return"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0)},cancelAnimationFrame:function(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function l(){var e="undefined"!=typeof window?window:{};return i(e,n),e}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function u(e,t,a){return(u=p()?Reflect.construct:function(e,t,a){var i=[null];i.push.apply(i,t);var s=new(Function.bind.apply(e,i));return a&&d(s,a.prototype),s}).apply(null,arguments)}function c(e){var t="function"==typeof Map?new Map:void 0;return(c=function(e){if(null===e||(a=e,-1===Function.toString.call(a).indexOf("[native code]")))return e;var a;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,i)}function i(){return u(e,arguments,o(this).constructor)}return i.prototype=Object.create(e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),d(i,e)})(e)}var h=function(e){var t,a;function i(t){var a,i,s;return a=e.call.apply(e,[this].concat(t))||this,i=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a),s=i.__proto__,Object.defineProperty(i,"__proto__",{get:function(){return s},set:function(e){s.__proto__=e}}),a}return a=e,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,i}(c(Array));function v(e){void 0===e&&(e=[]);var t=[];return e.forEach((function(e){Array.isArray(e)?t.push.apply(t,v(e)):t.push(e)})),t}function f(e,t){return Array.prototype.filter.call(e,t)}function m(e,t){var a=l(),i=r(),s=[];if(!t&&e instanceof h)return e;if(!e)return new h(s);if("string"==typeof e){var n=e.trim();if(n.indexOf("<")>=0&&n.indexOf(">")>=0){var o="div";0===n.indexOf("<li")&&(o="ul"),0===n.indexOf("<tr")&&(o="tbody"),0!==n.indexOf("<td")&&0!==n.indexOf("<th")||(o="tr"),0===n.indexOf("<tbody")&&(o="table"),0===n.indexOf("<option")&&(o="select");var d=i.createElement(o);d.innerHTML=n;for(var p=0;p<d.childNodes.length;p+=1)s.push(d.childNodes[p])}else s=function(e,t){if("string"!=typeof e)return[e];for(var a=[],i=t.querySelectorAll(e),s=0;s<i.length;s+=1)a.push(i[s]);return a}(e.trim(),t||i)}else if(e.nodeType||e===a||e===i)s.push(e);else if(Array.isArray(e)){if(e instanceof h)return e;s=e}return new h(function(e){for(var t=[],a=0;a<e.length;a+=1)-1===t.indexOf(e[a])&&t.push(e[a]);return t}(s))}m.fn=h.prototype;var g,b,y,w={addClass:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var i=v(t.map((function(e){return e.split(" ")})));return this.forEach((function(e){var t;(t=e.classList).add.apply(t,i)})),this},removeClass:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var i=v(t.map((function(e){return e.split(" ")})));return this.forEach((function(e){var t;(t=e.classList).remove.apply(t,i)})),this},hasClass:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var i=v(t.map((function(e){return e.split(" ")})));return f(this,(function(e){return i.filter((function(t){return e.classList.contains(t)})).length>0})).length>0},toggleClass:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var i=v(t.map((function(e){return e.split(" ")})));this.forEach((function(e){i.forEach((function(t){e.classList.toggle(t)}))}))},attr:function(e,t){if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var a=0;a<this.length;a+=1)if(2===arguments.length)this[a].setAttribute(e,t);else for(var i in e)this[a][i]=e[i],this[a].setAttribute(i,e[i]);return this},removeAttr:function(e){for(var t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this},transform:function(e){for(var t=0;t<this.length;t+=1)this[t].style.transform=e;return this},transition:function(e){for(var t=0;t<this.length;t+=1)this[t].style.transitionDuration="string"!=typeof e?e+"ms":e;return this},on:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var i=t[0],s=t[1],r=t[2],n=t[3];function l(e){var t=e.target;if(t){var a=e.target.dom7EventData||[];if(a.indexOf(e)<0&&a.unshift(e),m(t).is(s))r.apply(t,a);else for(var i=m(t).parents(),n=0;n<i.length;n+=1)m(i[n]).is(s)&&r.apply(i[n],a)}}function o(e){var t=e&&e.target&&e.target.dom7EventData||[];t.indexOf(e)<0&&t.unshift(e),r.apply(this,t)}"function"==typeof t[1]&&(i=t[0],r=t[1],n=t[2],s=void 0),n||(n=!1);for(var d,p=i.split(" "),u=0;u<this.length;u+=1){var c=this[u];if(s)for(d=0;d<p.length;d+=1){var h=p[d];c.dom7LiveListeners||(c.dom7LiveListeners={}),c.dom7LiveListeners[h]||(c.dom7LiveListeners[h]=[]),c.dom7LiveListeners[h].push({listener:r,proxyListener:l}),c.addEventListener(h,l,n)}else for(d=0;d<p.length;d+=1){var v=p[d];c.dom7Listeners||(c.dom7Listeners={}),c.dom7Listeners[v]||(c.dom7Listeners[v]=[]),c.dom7Listeners[v].push({listener:r,proxyListener:o}),c.addEventListener(v,o,n)}}return this},off:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var i=t[0],s=t[1],r=t[2],n=t[3];"function"==typeof t[1]&&(i=t[0],r=t[1],n=t[2],s=void 0),n||(n=!1);for(var l=i.split(" "),o=0;o<l.length;o+=1)for(var d=l[o],p=0;p<this.length;p+=1){var u=this[p],c=void 0;if(!s&&u.dom7Listeners?c=u.dom7Listeners[d]:s&&u.dom7LiveListeners&&(c=u.dom7LiveListeners[d]),c&&c.length)for(var h=c.length-1;h>=0;h-=1){var v=c[h];r&&v.listener===r||r&&v.listener&&v.listener.dom7proxy&&v.listener.dom7proxy===r?(u.removeEventListener(d,v.proxyListener,n),c.splice(h,1)):r||(u.removeEventListener(d,v.proxyListener,n),c.splice(h,1))}}return this},trigger:function(){for(var e=l(),t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];for(var s=a[0].split(" "),r=a[1],n=0;n<s.length;n+=1)for(var o=s[n],d=0;d<this.length;d+=1){var p=this[d];if(e.CustomEvent){var u=new e.CustomEvent(o,{detail:r,bubbles:!0,cancelable:!0});p.dom7EventData=a.filter((function(e,t){return t>0})),p.dispatchEvent(u),p.dom7EventData=[],delete p.dom7EventData}}return this},transitionEnd:function(e){var t=this;return e&&t.on("transitionend",(function a(i){i.target===this&&(e.call(this,i),t.off("transitionend",a))})),this},outerWidth:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetWidth+parseFloat(t.getPropertyValue("margin-right"))+parseFloat(t.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetHeight+parseFloat(t.getPropertyValue("margin-top"))+parseFloat(t.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},styles:function(){var e=l();return this[0]?e.getComputedStyle(this[0],null):{}},offset:function(){if(this.length>0){var e=l(),t=r(),a=this[0],i=a.getBoundingClientRect(),s=t.body,n=a.clientTop||s.clientTop||0,o=a.clientLeft||s.clientLeft||0,d=a===e?e.scrollY:a.scrollTop,p=a===e?e.scrollX:a.scrollLeft;return{top:i.top+d-n,left:i.left+p-o}}return null},css:function(e,t){var a,i=l();if(1===arguments.length){if("string"!=typeof e){for(a=0;a<this.length;a+=1)for(var s in e)this[a].style[s]=e[s];return this}if(this[0])return i.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(a=0;a<this.length;a+=1)this[a].style[e]=t;return this}return this},each:function(e){return e?(this.forEach((function(t,a){e.apply(t,[t,a])})),this):this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:null;for(var t=0;t<this.length;t+=1)this[t].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(var t=0;t<this.length;t+=1)this[t].textContent=e;return this},is:function(e){var t,a,i=l(),s=r(),n=this[0];if(!n||void 0===e)return!1;if("string"==typeof e){if(n.matches)return n.matches(e);if(n.webkitMatchesSelector)return n.webkitMatchesSelector(e);if(n.msMatchesSelector)return n.msMatchesSelector(e);for(t=m(e),a=0;a<t.length;a+=1)if(t[a]===n)return!0;return!1}if(e===s)return n===s;if(e===i)return n===i;if(e.nodeType||e instanceof h){for(t=e.nodeType?[e]:e,a=0;a<t.length;a+=1)if(t[a]===n)return!0;return!1}return!1},index:function(){var e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;var t=this.length;if(e>t-1)return m([]);if(e<0){var a=t+e;return m(a<0?[]:[this[a]])}return m([this[e]])},append:function(){for(var e,t=r(),a=0;a<arguments.length;a+=1){e=a<0||arguments.length<=a?void 0:arguments[a];for(var i=0;i<this.length;i+=1)if("string"==typeof e){var s=t.createElement("div");for(s.innerHTML=e;s.firstChild;)this[i].appendChild(s.firstChild)}else if(e instanceof h)for(var n=0;n<e.length;n+=1)this[i].appendChild(e[n]);else this[i].appendChild(e)}return this},prepend:function(e){var t,a,i=r();for(t=0;t<this.length;t+=1)if("string"==typeof e){var s=i.createElement("div");for(s.innerHTML=e,a=s.childNodes.length-1;a>=0;a-=1)this[t].insertBefore(s.childNodes[a],this[t].childNodes[0])}else if(e instanceof h)for(a=0;a<e.length;a+=1)this[t].insertBefore(e[a],this[t].childNodes[0]);else this[t].insertBefore(e,this[t].childNodes[0]);return this},next:function(e){return this.length>0?e?this[0].nextElementSibling&&m(this[0].nextElementSibling).is(e)?m([this[0].nextElementSibling]):m([]):this[0].nextElementSibling?m([this[0].nextElementSibling]):m([]):m([])},nextAll:function(e){var t=[],a=this[0];if(!a)return m([]);for(;a.nextElementSibling;){var i=a.nextElementSibling;e?m(i).is(e)&&t.push(i):t.push(i),a=i}return m(t)},prev:function(e){if(this.length>0){var t=this[0];return e?t.previousElementSibling&&m(t.previousElementSibling).is(e)?m([t.previousElementSibling]):m([]):t.previousElementSibling?m([t.previousElementSibling]):m([])}return m([])},prevAll:function(e){var t=[],a=this[0];if(!a)return m([]);for(;a.previousElementSibling;){var i=a.previousElementSibling;e?m(i).is(e)&&t.push(i):t.push(i),a=i}return m(t)},parent:function(e){for(var t=[],a=0;a<this.length;a+=1)null!==this[a].parentNode&&(e?m(this[a].parentNode).is(e)&&t.push(this[a].parentNode):t.push(this[a].parentNode));return m(t)},parents:function(e){for(var t=[],a=0;a<this.length;a+=1)for(var i=this[a].parentNode;i;)e?m(i).is(e)&&t.push(i):t.push(i),i=i.parentNode;return m(t)},closest:function(e){var t=this;return void 0===e?m([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){for(var t=[],a=0;a<this.length;a+=1){try{var i=this[a].querySelectorAll(e)}catch(t){console.log(e)}for(var s=0;s<i.length;s+=1)t.push(i[s])}return m(t)},children:function(e){for(var t=[],a=0;a<this.length;a+=1)for(var i=this[a].children,s=0;s<i.length;s+=1)e&&!m(i[s]).is(e)||t.push(i[s]);return m(t)},filter:function(e){return m(f(this,e))},remove:function(){for(var e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this}};function E(e,t){return void 0===t&&(t=0),setTimeout(e,t)}function x(){return Date.now()}function T(e,t){void 0===t&&(t="x");var a,i,s,r=l(),n=function(e){var t,a=l();return a.getComputedStyle&&(t=a.getComputedStyle(e,null)),!t&&e.currentStyle&&(t=e.currentStyle),t||(t=e.style),t}(e);return r.WebKitCSSMatrix?((i=n.transform||n.webkitTransform).split(",").length>6&&(i=i.split(", ").map((function(e){return e.replace(",",".")})).join(", ")),s=new r.WebKitCSSMatrix("none"===i?"":i)):a=(s=n.MozTransform||n.OTransform||n.MsTransform||n.msTransform||n.transform||n.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,")).toString().split(","),"x"===t&&(i=r.WebKitCSSMatrix?s.m41:16===a.length?parseFloat(a[12]):parseFloat(a[4])),"y"===t&&(i=r.WebKitCSSMatrix?s.m42:16===a.length?parseFloat(a[13]):parseFloat(a[5])),i||0}function C(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function S(){for(var e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"],a=1;a<arguments.length;a+=1){var i=a<0||arguments.length<=a?void 0:arguments[a];if(null!=i)for(var s=Object.keys(Object(i)).filter((function(e){return t.indexOf(e)<0})),r=0,n=s.length;r<n;r+=1){var l=s[r],o=Object.getOwnPropertyDescriptor(i,l);void 0!==o&&o.enumerable&&(C(e[l])&&C(i[l])?i[l].__swiper__?e[l]=i[l]:S(e[l],i[l]):!C(e[l])&&C(i[l])?(e[l]={},i[l].__swiper__?e[l]=i[l]:S(e[l],i[l])):e[l]=i[l])}}return e}function M(e,t){Object.keys(t).forEach((function(a){C(t[a])&&Object.keys(t[a]).forEach((function(i){"function"==typeof t[a][i]&&(t[a][i]=t[a][i].bind(e))})),e[a]=t[a]}))}function z(e){return void 0===e&&(e=""),"."+e.trim().replace(/([\.:\/])/g,"\\$1").replace(/ /g,".")}function P(e,t,a,i){var s=r();return a&&Object.keys(i).forEach((function(a){if(!t[a]&&!0===t.auto){var r=s.createElement("div");r.className=i[a],e.append(r),t[a]=r}})),t}function k(){return g||(g=function(){var e=l(),t=r();return{touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch),pointerEvents:!!e.PointerEvent&&"maxTouchPoints"in e.navigator&&e.navigator.maxTouchPoints>=0,observer:"MutationObserver"in e||"WebkitMutationObserver"in e,passiveListener:function(){var t=!1;try{var a=Object.defineProperty({},"passive",{get:function(){t=!0}});e.addEventListener("testPassiveListener",null,a)}catch(e){}return t}(),gestures:"ongesturestart"in e}}()),g}function $(e){return void 0===e&&(e={}),b||(b=function(e){var t=(void 0===e?{}:e).userAgent,a=k(),i=l(),s=i.navigator.platform,r=t||i.navigator.userAgent,n={ios:!1,android:!1},o=i.screen.width,d=i.screen.height,p=r.match(/(Android);?[\s\/]+([\d.]+)?/),u=r.match(/(iPad).*OS\s([\d_]+)/),c=r.match(/(iPod)(.*OS\s([\d_]+))?/),h=!u&&r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),v="Win32"===s,f="MacIntel"===s;return!u&&f&&a.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf(o+"x"+d)>=0&&((u=r.match(/(Version)\/([\d.]+)/))||(u=[0,1,"13_0_0"]),f=!1),p&&!v&&(n.os="android",n.android=!0),(u||h||c)&&(n.os="ios",n.ios=!0),n}(e)),b}function L(){return y||(y=function(){var e,t=l();return{isEdge:!!t.navigator.userAgent.match(/Edge/g),isSafari:(e=t.navigator.userAgent.toLowerCase(),e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0),isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)}}()),y}Object.keys(w).forEach((function(e){Object.defineProperty(m.fn,e,{value:w[e],writable:!0})}));var I={name:"resize",create:function(){var e=this;S(e,{resize:{observer:null,createObserver:function(){e&&!e.destroyed&&e.initialized&&(e.resize.observer=new ResizeObserver((function(t){var a=e.width,i=e.height,s=a,r=i;t.forEach((function(t){var a=t.contentBoxSize,i=t.contentRect,n=t.target;n&&n!==e.el||(s=i?i.width:(a[0]||a).inlineSize,r=i?i.height:(a[0]||a).blockSize)})),s===a&&r===i||e.resize.resizeHandler()})),e.resize.observer.observe(e.el))},removeObserver:function(){e.resize.observer&&e.resize.observer.unobserve&&e.el&&(e.resize.observer.unobserve(e.el),e.resize.observer=null)},resizeHandler:function(){e&&!e.destroyed&&e.initialized&&(e.emit("beforeResize"),e.emit("resize"))},orientationChangeHandler:function(){e&&!e.destroyed&&e.initialized&&e.emit("orientationchange")}}})},on:{init:function(e){var t=l();e.params.resizeObserver&&void 0!==l().ResizeObserver?e.resize.createObserver():(t.addEventListener("resize",e.resize.resizeHandler),t.addEventListener("orientationchange",e.resize.orientationChangeHandler))},destroy:function(e){var t=l();e.resize.removeObserver(),t.removeEventListener("resize",e.resize.resizeHandler),t.removeEventListener("orientationchange",e.resize.orientationChangeHandler)}}},O={attach:function(e,t){void 0===t&&(t={});var a=l(),i=this,s=new(a.MutationObserver||a.WebkitMutationObserver)((function(e){if(1!==e.length){var t=function(){i.emit("observerUpdate",e[0])};a.requestAnimationFrame?a.requestAnimationFrame(t):a.setTimeout(t,0)}else i.emit("observerUpdate",e[0])}));s.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),i.observer.observers.push(s)},init:function(){var e=this;if(e.support.observer&&e.params.observer){if(e.params.observeParents)for(var t=e.$el.parents(),a=0;a<t.length;a+=1)e.observer.attach(t[a]);e.observer.attach(e.$el[0],{childList:e.params.observeSlideChildren}),e.observer.attach(e.$wrapperEl[0],{attributes:!1})}},destroy:function(){this.observer.observers.forEach((function(e){e.disconnect()})),this.observer.observers=[]}},A={name:"observer",params:{observer:!1,observeParents:!1,observeSlideChildren:!1},create:function(){M(this,{observer:t({},O,{observers:[]})})},on:{init:function(e){e.observer.init()},destroy:function(e){e.observer.destroy()}}};function D(e){var t=this,a=r(),i=l(),s=t.touchEventsData,n=t.params,o=t.touches;if(t.enabled&&(!t.animating||!n.preventInteractionOnTransition)){var d=e;d.originalEvent&&(d=d.originalEvent);var p=m(d.target);if("wrapper"!==n.touchEventsTarget||p.closest(t.wrapperEl).length)if(s.isTouchEvent="touchstart"===d.type,s.isTouchEvent||!("which"in d)||3!==d.which)if(!(!s.isTouchEvent&&"button"in d&&d.button>0))if(!s.isTouched||!s.isMoved)if(!!n.noSwipingClass&&""!==n.noSwipingClass&&d.target&&d.target.shadowRoot&&e.path&&e.path[0]&&(p=m(e.path[0])),n.noSwiping&&p.closest(n.noSwipingSelector?n.noSwipingSelector:"."+n.noSwipingClass)[0])t.allowClick=!0;else if(!n.swipeHandler||p.closest(n.swipeHandler)[0]){o.currentX="touchstart"===d.type?d.targetTouches[0].pageX:d.pageX,o.currentY="touchstart"===d.type?d.targetTouches[0].pageY:d.pageY;var u=o.currentX,c=o.currentY,h=n.edgeSwipeDetection||n.iOSEdgeSwipeDetection,v=n.edgeSwipeThreshold||n.iOSEdgeSwipeThreshold;if(h&&(u<=v||u>=i.innerWidth-v)){if("prevent"!==h)return;e.preventDefault()}if(S(s,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=u,o.startY=c,s.touchStartTime=x(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,n.threshold>0&&(s.allowThresholdMove=!1),"touchstart"!==d.type){var f=!0;p.is(s.formElements)&&(f=!1),a.activeElement&&m(a.activeElement).is(s.formElements)&&a.activeElement!==p[0]&&a.activeElement.blur();var g=f&&t.allowTouchMove&&n.touchStartPreventDefault;!n.touchStartForcePreventDefault&&!g||p[0].isContentEditable||d.preventDefault()}t.emit("touchStart",d)}}}function N(e){var t=r(),a=this,i=a.touchEventsData,s=a.params,n=a.touches,l=a.rtlTranslate;if(a.enabled){var o=e;if(o.originalEvent&&(o=o.originalEvent),i.isTouched){if(!i.isTouchEvent||"touchmove"===o.type){var d="touchmove"===o.type&&o.targetTouches&&(o.targetTouches[0]||o.changedTouches[0]),p="touchmove"===o.type?d.pageX:o.pageX,u="touchmove"===o.type?d.pageY:o.pageY;if(o.preventedByNestedSwiper)return n.startX=p,void(n.startY=u);if(!a.allowTouchMove)return a.allowClick=!1,void(i.isTouched&&(S(n,{startX:p,startY:u,currentX:p,currentY:u}),i.touchStartTime=x()));if(i.isTouchEvent&&s.touchReleaseOnEdges&&!s.loop)if(a.isVertical()){if(u<n.startY&&a.translate<=a.maxTranslate()||u>n.startY&&a.translate>=a.minTranslate())return i.isTouched=!1,void(i.isMoved=!1)}else if(p<n.startX&&a.translate<=a.maxTranslate()||p>n.startX&&a.translate>=a.minTranslate())return;if(i.isTouchEvent&&t.activeElement&&o.target===t.activeElement&&m(o.target).is(i.formElements))return i.isMoved=!0,void(a.allowClick=!1);if(i.allowTouchCallbacks&&a.emit("touchMove",o),!(o.targetTouches&&o.targetTouches.length>1)){n.currentX=p,n.currentY=u;var c=n.currentX-n.startX,h=n.currentY-n.startY;if(!(a.params.threshold&&Math.sqrt(Math.pow(c,2)+Math.pow(h,2))<a.params.threshold)){var v;if(void 0===i.isScrolling)a.isHorizontal()&&n.currentY===n.startY||a.isVertical()&&n.currentX===n.startX?i.isScrolling=!1:c*c+h*h>=25&&(v=180*Math.atan2(Math.abs(h),Math.abs(c))/Math.PI,i.isScrolling=a.isHorizontal()?v>s.touchAngle:90-v>s.touchAngle);if(i.isScrolling&&a.emit("touchMoveOpposite",o),void 0===i.startMoving&&(n.currentX===n.startX&&n.currentY===n.startY||(i.startMoving=!0)),i.isScrolling)i.isTouched=!1;else if(i.startMoving){a.allowClick=!1,!s.cssMode&&o.cancelable&&o.preventDefault(),s.touchMoveStopPropagation&&!s.nested&&o.stopPropagation(),i.isMoved||(s.loop&&a.loopFix(),i.startTranslate=a.getTranslate(),a.setTransition(0),a.animating&&a.$wrapperEl.trigger("webkitTransitionEnd transitionend"),i.allowMomentumBounce=!1,!s.grabCursor||!0!==a.allowSlideNext&&!0!==a.allowSlidePrev||a.setGrabCursor(!0),a.emit("sliderFirstMove",o)),a.emit("sliderMove",o),i.isMoved=!0;var f=a.isHorizontal()?c:h;n.diff=f,f*=s.touchRatio,l&&(f=-f),a.swipeDirection=f>0?"prev":"next",i.currentTranslate=f+i.startTranslate;var g=!0,b=s.resistanceRatio;if(s.touchReleaseOnEdges&&(b=0),f>0&&i.currentTranslate>a.minTranslate()?(g=!1,s.resistance&&(i.currentTranslate=a.minTranslate()-1+Math.pow(-a.minTranslate()+i.startTranslate+f,b))):f<0&&i.currentTranslate<a.maxTranslate()&&(g=!1,s.resistance&&(i.currentTranslate=a.maxTranslate()+1-Math.pow(a.maxTranslate()-i.startTranslate-f,b))),g&&(o.preventedByNestedSwiper=!0),!a.allowSlideNext&&"next"===a.swipeDirection&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!a.allowSlidePrev&&"prev"===a.swipeDirection&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),a.allowSlidePrev||a.allowSlideNext||(i.currentTranslate=i.startTranslate),s.threshold>0){if(!(Math.abs(f)>s.threshold||i.allowThresholdMove))return void(i.currentTranslate=i.startTranslate);if(!i.allowThresholdMove)return i.allowThresholdMove=!0,n.startX=n.currentX,n.startY=n.currentY,i.currentTranslate=i.startTranslate,void(n.diff=a.isHorizontal()?n.currentX-n.startX:n.currentY-n.startY)}s.followFinger&&!s.cssMode&&((s.freeMode||s.watchSlidesProgress||s.watchSlidesVisibility)&&(a.updateActiveIndex(),a.updateSlidesClasses()),s.freeMode&&(0===i.velocities.length&&i.velocities.push({position:n[a.isHorizontal()?"startX":"startY"],time:i.touchStartTime}),i.velocities.push({position:n[a.isHorizontal()?"currentX":"currentY"],time:x()})),a.updateProgress(i.currentTranslate),a.setTranslate(i.currentTranslate))}}}}}else i.startMoving&&i.isScrolling&&a.emit("touchMoveOpposite",o)}}function G(e){var t=this,a=t.touchEventsData,i=t.params,s=t.touches,r=t.rtlTranslate,n=t.$wrapperEl,l=t.slidesGrid,o=t.snapGrid;if(t.enabled){var d=e;if(d.originalEvent&&(d=d.originalEvent),a.allowTouchCallbacks&&t.emit("touchEnd",d),a.allowTouchCallbacks=!1,!a.isTouched)return a.isMoved&&i.grabCursor&&t.setGrabCursor(!1),a.isMoved=!1,void(a.startMoving=!1);i.grabCursor&&a.isMoved&&a.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);var p,u=x(),c=u-a.touchStartTime;if(t.allowClick&&(t.updateClickedSlide(d),t.emit("tap click",d),c<300&&u-a.lastClickTime<300&&t.emit("doubleTap doubleClick",d)),a.lastClickTime=x(),E((function(){t.destroyed||(t.allowClick=!0)})),!a.isTouched||!a.isMoved||!t.swipeDirection||0===s.diff||a.currentTranslate===a.startTranslate)return a.isTouched=!1,a.isMoved=!1,void(a.startMoving=!1);if(a.isTouched=!1,a.isMoved=!1,a.startMoving=!1,p=i.followFinger?r?t.translate:-t.translate:-a.currentTranslate,!i.cssMode)if(i.freeMode){if(p<-t.minTranslate())return void t.slideTo(t.activeIndex);if(p>-t.maxTranslate())return void(t.slides.length<o.length?t.slideTo(o.length-1):t.slideTo(t.slides.length-1));if(i.freeModeMomentum){if(a.velocities.length>1){var h=a.velocities.pop(),v=a.velocities.pop(),f=h.position-v.position,m=h.time-v.time;t.velocity=f/m,t.velocity/=2,Math.abs(t.velocity)<i.freeModeMinimumVelocity&&(t.velocity=0),(m>150||x()-h.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=i.freeModeMomentumVelocityRatio,a.velocities.length=0;var g=1e3*i.freeModeMomentumRatio,b=t.velocity*g,y=t.translate+b;r&&(y=-y);var w,T,C=!1,S=20*Math.abs(t.velocity)*i.freeModeMomentumBounceRatio;if(y<t.maxTranslate())i.freeModeMomentumBounce?(y+t.maxTranslate()<-S&&(y=t.maxTranslate()-S),w=t.maxTranslate(),C=!0,a.allowMomentumBounce=!0):y=t.maxTranslate(),i.loop&&i.centeredSlides&&(T=!0);else if(y>t.minTranslate())i.freeModeMomentumBounce?(y-t.minTranslate()>S&&(y=t.minTranslate()+S),w=t.minTranslate(),C=!0,a.allowMomentumBounce=!0):y=t.minTranslate(),i.loop&&i.centeredSlides&&(T=!0);else if(i.freeModeSticky){for(var M,z=0;z<o.length;z+=1)if(o[z]>-y){M=z;break}y=-(y=Math.abs(o[M]-y)<Math.abs(o[M-1]-y)||"next"===t.swipeDirection?o[M]:o[M-1])}if(T&&t.once("transitionEnd",(function(){t.loopFix()})),0!==t.velocity){if(g=r?Math.abs((-y-t.translate)/t.velocity):Math.abs((y-t.translate)/t.velocity),i.freeModeSticky){var P=Math.abs((r?-y:y)-t.translate),k=t.slidesSizesGrid[t.activeIndex];g=P<k?i.speed:P<2*k?1.5*i.speed:2.5*i.speed}}else if(i.freeModeSticky)return void t.slideToClosest();i.freeModeMomentumBounce&&C?(t.updateProgress(w),t.setTransition(g),t.setTranslate(y),t.transitionStart(!0,t.swipeDirection),t.animating=!0,n.transitionEnd((function(){t&&!t.destroyed&&a.allowMomentumBounce&&(t.emit("momentumBounce"),t.setTransition(i.speed),setTimeout((function(){t.setTranslate(w),n.transitionEnd((function(){t&&!t.destroyed&&t.transitionEnd()}))}),0))}))):t.velocity?(t.updateProgress(y),t.setTransition(g),t.setTranslate(y),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,n.transitionEnd((function(){t&&!t.destroyed&&t.transitionEnd()})))):(t.emit("_freeModeNoMomentumRelease"),t.updateProgress(y)),t.updateActiveIndex(),t.updateSlidesClasses()}else{if(i.freeModeSticky)return void t.slideToClosest();i.freeMode&&t.emit("_freeModeNoMomentumRelease")}(!i.freeModeMomentum||c>=i.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}else{for(var $=0,L=t.slidesSizesGrid[0],I=0;I<l.length;I+=I<i.slidesPerGroupSkip?1:i.slidesPerGroup){var O=I<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;void 0!==l[I+O]?p>=l[I]&&p<l[I+O]&&($=I,L=l[I+O]-l[I]):p>=l[I]&&($=I,L=l[l.length-1]-l[l.length-2])}var A=(p-l[$])/L,D=$<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;if(c>i.longSwipesMs){if(!i.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(A>=i.longSwipesRatio?t.slideTo($+D):t.slideTo($)),"prev"===t.swipeDirection&&(A>1-i.longSwipesRatio?t.slideTo($+D):t.slideTo($))}else{if(!i.shortSwipes)return void t.slideTo(t.activeIndex);t.navigation&&(d.target===t.navigation.nextEl||d.target===t.navigation.prevEl)?d.target===t.navigation.nextEl?t.slideTo($+D):t.slideTo($):("next"===t.swipeDirection&&t.slideTo($+D),"prev"===t.swipeDirection&&t.slideTo($))}}}}function B(){var e=this,t=e.params,a=e.el;if(!a||0!==a.offsetWidth){t.breakpoints&&e.setBreakpoint();var i=e.allowSlideNext,s=e.allowSlidePrev,r=e.snapGrid;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses(),("auto"===t.slidesPerView||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.run(),e.allowSlidePrev=s,e.allowSlideNext=i,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}}function H(e){var t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function X(){var e=this,t=e.wrapperEl,a=e.rtlTranslate;if(e.enabled){e.previousTranslate=e.translate,e.isHorizontal()?e.translate=a?t.scrollWidth-t.offsetWidth-t.scrollLeft:-t.scrollLeft:e.translate=-t.scrollTop,-0===e.translate&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();var i=e.maxTranslate()-e.minTranslate();(0===i?0:(e.translate-e.minTranslate())/i)!==e.progress&&e.updateProgress(a?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}}var Y=!1;function R(){}var W={init:!0,direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!1,nested:!1,createElements:!1,enabled:!0,width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,slidesPerGroupSkip:0,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!1,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,loopPreventsSlide:!0,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0,_emitClasses:!1},V={modular:{useParams:function(e){var t=this;t.modules&&Object.keys(t.modules).forEach((function(a){var i=t.modules[a];i.params&&S(e,i.params)}))},useModules:function(e){void 0===e&&(e={});var t=this;t.modules&&Object.keys(t.modules).forEach((function(a){var i=t.modules[a],s=e[a]||{};i.on&&t.on&&Object.keys(i.on).forEach((function(e){t.on(e,i.on[e])})),i.create&&i.create.bind(t)(s)}))}},eventsEmitter:{on:function(e,t,a){var i=this;if("function"!=typeof t)return i;var s=a?"unshift":"push";return e.split(" ").forEach((function(e){i.eventsListeners[e]||(i.eventsListeners[e]=[]),i.eventsListeners[e][s](t)})),i},once:function(e,t,a){var i=this;if("function"!=typeof t)return i;function s(){i.off(e,s),s.__emitterProxy&&delete s.__emitterProxy;for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];t.apply(i,r)}return s.__emitterProxy=t,i.on(e,s,a)},onAny:function(e,t){var a=this;if("function"!=typeof e)return a;var i=t?"unshift":"push";return a.eventsAnyListeners.indexOf(e)<0&&a.eventsAnyListeners[i](e),a},offAny:function(e){var t=this;if(!t.eventsAnyListeners)return t;var a=t.eventsAnyListeners.indexOf(e);return a>=0&&t.eventsAnyListeners.splice(a,1),t},off:function(e,t){var a=this;return a.eventsListeners?(e.split(" ").forEach((function(e){void 0===t?a.eventsListeners[e]=[]:a.eventsListeners[e]&&a.eventsListeners[e].forEach((function(i,s){(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&a.eventsListeners[e].splice(s,1)}))})),a):a},emit:function(){var e,t,a,i=this;if(!i.eventsListeners)return i;for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];"string"==typeof r[0]||Array.isArray(r[0])?(e=r[0],t=r.slice(1,r.length),a=i):(e=r[0].events,t=r[0].data,a=r[0].context||i),t.unshift(a);var l=Array.isArray(e)?e:e.split(" ");return l.forEach((function(e){i.eventsAnyListeners&&i.eventsAnyListeners.length&&i.eventsAnyListeners.forEach((function(i){i.apply(a,[e].concat(t))})),i.eventsListeners&&i.eventsListeners[e]&&i.eventsListeners[e].forEach((function(e){e.apply(a,t)}))})),i}},update:{updateSize:function(){var e,t,a=this,i=a.$el;e=void 0!==a.params.width&&null!==a.params.width?a.params.width:i[0].clientWidth,t=void 0!==a.params.height&&null!==a.params.height?a.params.height:i[0].clientHeight,0===e&&a.isHorizontal()||0===t&&a.isVertical()||(e=e-parseInt(i.css("padding-left")||0,10)-parseInt(i.css("padding-right")||0,10),t=t-parseInt(i.css("padding-top")||0,10)-parseInt(i.css("padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),S(a,{width:e,height:t,size:a.isHorizontal()?e:t}))},updateSlides:function(){var e=this;function t(t){return e.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}function a(e,a){return parseFloat(e.getPropertyValue(t(a))||0)}var i=e.params,s=e.$wrapperEl,r=e.size,n=e.rtlTranslate,l=e.wrongRTL,o=e.virtual&&i.virtual.enabled,d=o?e.virtual.slides.length:e.slides.length,p=s.children("."+e.params.slideClass),u=o?e.virtual.slides.length:p.length,c=[],h=[],v=[],f=i.slidesOffsetBefore;"function"==typeof f&&(f=i.slidesOffsetBefore.call(e));var m=i.slidesOffsetAfter;"function"==typeof m&&(m=i.slidesOffsetAfter.call(e));var g=e.snapGrid.length,b=e.slidesGrid.length,y=i.spaceBetween,w=-f,E=0,x=0;if(void 0!==r){var T,C;"string"==typeof y&&y.indexOf("%")>=0&&(y=parseFloat(y.replace("%",""))/100*r),e.virtualSize=-y,n?p.css({marginLeft:"",marginTop:""}):p.css({marginRight:"",marginBottom:""}),i.slidesPerColumn>1&&(T=Math.floor(u/i.slidesPerColumn)===u/e.params.slidesPerColumn?u:Math.ceil(u/i.slidesPerColumn)*i.slidesPerColumn,"auto"!==i.slidesPerView&&"row"===i.slidesPerColumnFill&&(T=Math.max(T,i.slidesPerView*i.slidesPerColumn)));for(var M,z,P,k=i.slidesPerColumn,$=T/k,L=Math.floor(u/i.slidesPerColumn),I=0;I<u;I+=1){C=0;var O=p.eq(I);if(i.slidesPerColumn>1){var A=void 0,D=void 0,N=void 0;if("row"===i.slidesPerColumnFill&&i.slidesPerGroup>1){var G=Math.floor(I/(i.slidesPerGroup*i.slidesPerColumn)),B=I-i.slidesPerColumn*i.slidesPerGroup*G,H=0===G?i.slidesPerGroup:Math.min(Math.ceil((u-G*k*i.slidesPerGroup)/k),i.slidesPerGroup);A=(D=B-(N=Math.floor(B/H))*H+G*i.slidesPerGroup)+N*T/k,O.css({"-webkit-box-ordinal-group":A,"-moz-box-ordinal-group":A,"-ms-flex-order":A,"-webkit-order":A,order:A})}else"column"===i.slidesPerColumnFill?(N=I-(D=Math.floor(I/k))*k,(D>L||D===L&&N===k-1)&&(N+=1)>=k&&(N=0,D+=1)):D=I-(N=Math.floor(I/$))*$;O.css(t("margin-top"),0!==N&&i.spaceBetween&&i.spaceBetween+"px")}if("none"!==O.css("display")){if("auto"===i.slidesPerView){var X=getComputedStyle(O[0]),Y=O[0].style.transform,R=O[0].style.webkitTransform;if(Y&&(O[0].style.transform="none"),R&&(O[0].style.webkitTransform="none"),i.roundLengths)C=e.isHorizontal()?O.outerWidth(!0):O.outerHeight(!0);else{var W=a(X,"width"),V=a(X,"padding-left"),F=a(X,"padding-right"),_=a(X,"margin-left"),q=a(X,"margin-right"),j=X.getPropertyValue("box-sizing");if(j&&"border-box"===j)C=W+_+q;else{var U=O[0],K=U.clientWidth;C=W+V+F+_+q+(U.offsetWidth-K)}}Y&&(O[0].style.transform=Y),R&&(O[0].style.webkitTransform=R),i.roundLengths&&(C=Math.floor(C))}else C=(r-(i.slidesPerView-1)*y)/i.slidesPerView,i.roundLengths&&(C=Math.floor(C)),p[I]&&(p[I].style[t("width")]=C+"px");p[I]&&(p[I].swiperSlideSize=C),v.push(C),i.centeredSlides?(w=w+C/2+E/2+y,0===E&&0!==I&&(w=w-r/2-y),0===I&&(w=w-r/2-y),Math.abs(w)<.001&&(w=0),i.roundLengths&&(w=Math.floor(w)),x%i.slidesPerGroup==0&&c.push(w),h.push(w)):(i.roundLengths&&(w=Math.floor(w)),(x-Math.min(e.params.slidesPerGroupSkip,x))%e.params.slidesPerGroup==0&&c.push(w),h.push(w),w=w+C+y),e.virtualSize+=C+y,E=C,x+=1}}if(e.virtualSize=Math.max(e.virtualSize,r)+m,n&&l&&("slide"===i.effect||"coverflow"===i.effect)&&s.css({width:e.virtualSize+i.spaceBetween+"px"}),i.setWrapperSize)s.css(((z={})[t("width")]=e.virtualSize+i.spaceBetween+"px",z));if(i.slidesPerColumn>1)if(e.virtualSize=(C+i.spaceBetween)*T,e.virtualSize=Math.ceil(e.virtualSize/i.slidesPerColumn)-i.spaceBetween,s.css(((P={})[t("width")]=e.virtualSize+i.spaceBetween+"px",P)),i.centeredSlides){M=[];for(var Z=0;Z<c.length;Z+=1){var J=c[Z];i.roundLengths&&(J=Math.floor(J)),c[Z]<e.virtualSize+c[0]&&M.push(J)}c=M}if(!i.centeredSlides){M=[];for(var Q=0;Q<c.length;Q+=1){var ee=c[Q];i.roundLengths&&(ee=Math.floor(ee)),c[Q]<=e.virtualSize-r&&M.push(ee)}c=M,Math.floor(e.virtualSize-r)-Math.floor(c[c.length-1])>1&&c.push(e.virtualSize-r)}if(0===c.length&&(c=[0]),0!==i.spaceBetween){var te,ae=e.isHorizontal()&&n?"marginLeft":t("marginRight");p.filter((function(e,t){return!i.cssMode||t!==p.length-1})).css(((te={})[ae]=y+"px",te))}if(i.centeredSlides&&i.centeredSlidesBounds){var ie=0;v.forEach((function(e){ie+=e+(i.spaceBetween?i.spaceBetween:0)}));var se=(ie-=i.spaceBetween)-r;c=c.map((function(e){return e<0?-f:e>se?se+m:e}))}if(i.centerInsufficientSlides){var re=0;if(v.forEach((function(e){re+=e+(i.spaceBetween?i.spaceBetween:0)})),(re-=i.spaceBetween)<r){var ne=(r-re)/2;c.forEach((function(e,t){c[t]=e-ne})),h.forEach((function(e,t){h[t]=e+ne}))}}S(e,{slides:p,snapGrid:c,slidesGrid:h,slidesSizesGrid:v}),u!==d&&e.emit("slidesLengthChange"),c.length!==g&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),h.length!==b&&e.emit("slidesGridLengthChange"),(i.watchSlidesProgress||i.watchSlidesVisibility)&&e.updateSlidesOffset()}},updateAutoHeight:function(e){var t,a=this,i=[],s=a.virtual&&a.params.virtual.enabled,r=0;"number"==typeof e?a.setTransition(e):!0===e&&a.setTransition(a.params.speed);var n=function(e){return s?a.slides.filter((function(t){return parseInt(t.getAttribute("data-swiper-slide-index"),10)===e}))[0]:a.slides.eq(e)[0]};if("auto"!==a.params.slidesPerView&&a.params.slidesPerView>1)if(a.params.centeredSlides)a.visibleSlides.each((function(e){i.push(e)}));else for(t=0;t<Math.ceil(a.params.slidesPerView);t+=1){var l=a.activeIndex+t;if(l>a.slides.length&&!s)break;i.push(n(l))}else i.push(n(a.activeIndex));for(t=0;t<i.length;t+=1)if(void 0!==i[t]){var o=i[t].offsetHeight;r=o>r?o:r}r&&a.$wrapperEl.css("height",r+"px")},updateSlidesOffset:function(){for(var e=this.slides,t=0;t<e.length;t+=1)e[t].swiperSlideOffset=this.isHorizontal()?e[t].offsetLeft:e[t].offsetTop},updateSlidesProgress:function(e){void 0===e&&(e=this&&this.translate||0);var t=this,a=t.params,i=t.slides,s=t.rtlTranslate;if(0!==i.length){void 0===i[0].swiperSlideOffset&&t.updateSlidesOffset();var r=-e;s&&(r=e),i.removeClass(a.slideVisibleClass),t.visibleSlidesIndexes=[],t.visibleSlides=[];for(var n=0;n<i.length;n+=1){var l=i[n],o=(r+(a.centeredSlides?t.minTranslate():0)-l.swiperSlideOffset)/(l.swiperSlideSize+a.spaceBetween);if(a.watchSlidesVisibility||a.centeredSlides&&a.autoHeight){var d=-(r-l.swiperSlideOffset),p=d+t.slidesSizesGrid[n];(d>=0&&d<t.size-1||p>1&&p<=t.size||d<=0&&p>=t.size)&&(t.visibleSlides.push(l),t.visibleSlidesIndexes.push(n),i.eq(n).addClass(a.slideVisibleClass))}l.progress=s?-o:o}t.visibleSlides=m(t.visibleSlides)}},updateProgress:function(e){var t=this;if(void 0===e){var a=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*a||0}var i=t.params,s=t.maxTranslate()-t.minTranslate(),r=t.progress,n=t.isBeginning,l=t.isEnd,o=n,d=l;0===s?(r=0,n=!0,l=!0):(n=(r=(e-t.minTranslate())/s)<=0,l=r>=1),S(t,{progress:r,isBeginning:n,isEnd:l}),(i.watchSlidesProgress||i.watchSlidesVisibility||i.centeredSlides&&i.autoHeight)&&t.updateSlidesProgress(e),n&&!o&&t.emit("reachBeginning toEdge"),l&&!d&&t.emit("reachEnd toEdge"),(o&&!n||d&&!l)&&t.emit("fromEdge"),t.emit("progress",r)},updateSlidesClasses:function(){var e,t=this,a=t.slides,i=t.params,s=t.$wrapperEl,r=t.activeIndex,n=t.realIndex,l=t.virtual&&i.virtual.enabled;a.removeClass(i.slideActiveClass+" "+i.slideNextClass+" "+i.slidePrevClass+" "+i.slideDuplicateActiveClass+" "+i.slideDuplicateNextClass+" "+i.slideDuplicatePrevClass),(e=l?t.$wrapperEl.find("."+i.slideClass+'[data-swiper-slide-index="'+r+'"]'):a.eq(r)).addClass(i.slideActiveClass),i.loop&&(e.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+n+'"]').addClass(i.slideDuplicateActiveClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+n+'"]').addClass(i.slideDuplicateActiveClass));var o=e.nextAll("."+i.slideClass).eq(0).addClass(i.slideNextClass);i.loop&&0===o.length&&(o=a.eq(0)).addClass(i.slideNextClass);var d=e.prevAll("."+i.slideClass).eq(0).addClass(i.slidePrevClass);i.loop&&0===d.length&&(d=a.eq(-1)).addClass(i.slidePrevClass),i.loop&&(o.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+o.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+o.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass),d.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+d.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+d.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass)),t.emitSlidesClasses()},updateActiveIndex:function(e){var t,a=this,i=a.rtlTranslate?a.translate:-a.translate,s=a.slidesGrid,r=a.snapGrid,n=a.params,l=a.activeIndex,o=a.realIndex,d=a.snapIndex,p=e;if(void 0===p){for(var u=0;u<s.length;u+=1)void 0!==s[u+1]?i>=s[u]&&i<s[u+1]-(s[u+1]-s[u])/2?p=u:i>=s[u]&&i<s[u+1]&&(p=u+1):i>=s[u]&&(p=u);n.normalizeSlideIndex&&(p<0||void 0===p)&&(p=0)}if(r.indexOf(i)>=0)t=r.indexOf(i);else{var c=Math.min(n.slidesPerGroupSkip,p);t=c+Math.floor((p-c)/n.slidesPerGroup)}if(t>=r.length&&(t=r.length-1),p!==l){var h=parseInt(a.slides.eq(p).attr("data-swiper-slide-index")||p,10);S(a,{snapIndex:t,realIndex:h,previousIndex:l,activeIndex:p}),a.emit("activeIndexChange"),a.emit("snapIndexChange"),o!==h&&a.emit("realIndexChange"),(a.initialized||a.params.runCallbacksOnInit)&&a.emit("slideChange")}else t!==d&&(a.snapIndex=t,a.emit("snapIndexChange"))},updateClickedSlide:function(e){var t,a=this,i=a.params,s=m(e.target).closest("."+i.slideClass)[0],r=!1;if(s)for(var n=0;n<a.slides.length;n+=1)if(a.slides[n]===s){r=!0,t=n;break}if(!s||!r)return a.clickedSlide=void 0,void(a.clickedIndex=void 0);a.clickedSlide=s,a.virtual&&a.params.virtual.enabled?a.clickedIndex=parseInt(m(s).attr("data-swiper-slide-index"),10):a.clickedIndex=t,i.slideToClickedSlide&&void 0!==a.clickedIndex&&a.clickedIndex!==a.activeIndex&&a.slideToClickedSlide()}},translate:{getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");var t=this,a=t.params,i=t.rtlTranslate,s=t.translate,r=t.$wrapperEl;if(a.virtualTranslate)return i?-s:s;if(a.cssMode)return s;var n=T(r[0],e);return i&&(n=-n),n||0},setTranslate:function(e,t){var a=this,i=a.rtlTranslate,s=a.params,r=a.$wrapperEl,n=a.wrapperEl,l=a.progress,o=0,d=0;a.isHorizontal()?o=i?-e:e:d=e,s.roundLengths&&(o=Math.floor(o),d=Math.floor(d)),s.cssMode?n[a.isHorizontal()?"scrollLeft":"scrollTop"]=a.isHorizontal()?-o:-d:s.virtualTranslate||r.transform("translate3d("+o+"px, "+d+"px, 0px)"),a.previousTranslate=a.translate,a.translate=a.isHorizontal()?o:d;var p=a.maxTranslate()-a.minTranslate();(0===p?0:(e-a.minTranslate())/p)!==l&&a.updateProgress(e),a.emit("setTranslate",a.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(e,t,a,i,s){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===a&&(a=!0),void 0===i&&(i=!0);var r=this,n=r.params,l=r.wrapperEl;if(r.animating&&n.preventInteractionOnTransition)return!1;var o,d=r.minTranslate(),p=r.maxTranslate();if(o=i&&e>d?d:i&&e<p?p:e,r.updateProgress(o),n.cssMode){var u,c=r.isHorizontal();if(0===t)l[c?"scrollLeft":"scrollTop"]=-o;else if(l.scrollTo)l.scrollTo(((u={})[c?"left":"top"]=-o,u.behavior="smooth",u));else l[c?"scrollLeft":"scrollTop"]=-o;return!0}return 0===t?(r.setTransition(0),r.setTranslate(o),a&&(r.emit("beforeTransitionStart",t,s),r.emit("transitionEnd"))):(r.setTransition(t),r.setTranslate(o),a&&(r.emit("beforeTransitionStart",t,s),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,a&&r.emit("transitionEnd"))}),r.$wrapperEl[0].addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onTranslateToWrapperTransitionEnd))),!0}},transition:{setTransition:function(e,t){var a=this;a.params.cssMode||a.$wrapperEl.transition(e),a.emit("setTransition",e,t)},transitionStart:function(e,t){void 0===e&&(e=!0);var a=this,i=a.activeIndex,s=a.params,r=a.previousIndex;if(!s.cssMode){s.autoHeight&&a.updateAutoHeight();var n=t;if(n||(n=i>r?"next":i<r?"prev":"reset"),a.emit("transitionStart"),e&&i!==r){if("reset"===n)return void a.emit("slideResetTransitionStart");a.emit("slideChangeTransitionStart"),"next"===n?a.emit("slideNextTransitionStart"):a.emit("slidePrevTransitionStart")}}},transitionEnd:function(e,t){void 0===e&&(e=!0);var a=this,i=a.activeIndex,s=a.previousIndex,r=a.params;if(a.animating=!1,!r.cssMode){a.setTransition(0);var n=t;if(n||(n=i>s?"next":i<s?"prev":"reset"),a.emit("transitionEnd"),e&&i!==s){if("reset"===n)return void a.emit("slideResetTransitionEnd");a.emit("slideChangeTransitionEnd"),"next"===n?a.emit("slideNextTransitionEnd"):a.emit("slidePrevTransitionEnd")}}}},slide:{slideTo:function(e,t,a,i,s){if(void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===a&&(a=!0),"number"!=typeof e&&"string"!=typeof e)throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. ["+typeof e+"] given.");if("string"==typeof e){var r=parseInt(e,10);if(!isFinite(r))throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. ["+e+"] given.");e=r}var n=this,l=e;l<0&&(l=0);var o=n.params,d=n.snapGrid,p=n.slidesGrid,u=n.previousIndex,c=n.activeIndex,h=n.rtlTranslate,v=n.wrapperEl,f=n.enabled;if(n.animating&&o.preventInteractionOnTransition||!f&&!i&&!s)return!1;var m=Math.min(n.params.slidesPerGroupSkip,l),g=m+Math.floor((l-m)/n.params.slidesPerGroup);g>=d.length&&(g=d.length-1),(c||o.initialSlide||0)===(u||0)&&a&&n.emit("beforeSlideChangeStart");var b,y=-d[g];if(n.updateProgress(y),o.normalizeSlideIndex)for(var w=0;w<p.length;w+=1){var E=-Math.floor(100*y),x=Math.floor(100*p[w]),T=Math.floor(100*p[w+1]);void 0!==p[w+1]?E>=x&&E<T-(T-x)/2?l=w:E>=x&&E<T&&(l=w+1):E>=x&&(l=w)}if(n.initialized&&l!==c){if(!n.allowSlideNext&&y<n.translate&&y<n.minTranslate())return!1;if(!n.allowSlidePrev&&y>n.translate&&y>n.maxTranslate()&&(c||0)!==l)return!1}if(b=l>c?"next":l<c?"prev":"reset",h&&-y===n.translate||!h&&y===n.translate)return n.updateActiveIndex(l),o.autoHeight&&n.updateAutoHeight(),n.updateSlidesClasses(),"slide"!==o.effect&&n.setTranslate(y),"reset"!==b&&(n.transitionStart(a,b),n.transitionEnd(a,b)),!1;if(o.cssMode){var C,S=n.isHorizontal(),M=-y;if(h&&(M=v.scrollWidth-v.offsetWidth-M),0===t)v[S?"scrollLeft":"scrollTop"]=M;else if(v.scrollTo)v.scrollTo(((C={})[S?"left":"top"]=M,C.behavior="smooth",C));else v[S?"scrollLeft":"scrollTop"]=M;return!0}return 0===t?(n.setTransition(0),n.setTranslate(y),n.updateActiveIndex(l),n.updateSlidesClasses(),n.emit("beforeTransitionStart",t,i),n.transitionStart(a,b),n.transitionEnd(a,b)):(n.setTransition(t),n.setTranslate(y),n.updateActiveIndex(l),n.updateSlidesClasses(),n.emit("beforeTransitionStart",t,i),n.transitionStart(a,b),n.animating||(n.animating=!0,n.onSlideToWrapperTransitionEnd||(n.onSlideToWrapperTransitionEnd=function(e){n&&!n.destroyed&&e.target===this&&(n.$wrapperEl[0].removeEventListener("transitionend",n.onSlideToWrapperTransitionEnd),n.$wrapperEl[0].removeEventListener("webkitTransitionEnd",n.onSlideToWrapperTransitionEnd),n.onSlideToWrapperTransitionEnd=null,delete n.onSlideToWrapperTransitionEnd,n.transitionEnd(a,b))}),n.$wrapperEl[0].addEventListener("transitionend",n.onSlideToWrapperTransitionEnd),n.$wrapperEl[0].addEventListener("webkitTransitionEnd",n.onSlideToWrapperTransitionEnd))),!0},slideToLoop:function(e,t,a,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===a&&(a=!0);var s=this,r=e;return s.params.loop&&(r+=s.loopedSlides),s.slideTo(r,t,a,i)},slideNext:function(e,t,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this,s=i.params,r=i.animating;if(!i.enabled)return i;var n=i.activeIndex<s.slidesPerGroupSkip?1:s.slidesPerGroup;if(s.loop){if(r&&s.loopPreventsSlide)return!1;i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft}return i.slideTo(i.activeIndex+n,e,t,a)},slidePrev:function(e,t,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this,s=i.params,r=i.animating,n=i.snapGrid,l=i.slidesGrid,o=i.rtlTranslate;if(!i.enabled)return i;if(s.loop){if(r&&s.loopPreventsSlide)return!1;i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft}function d(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}var p=d(o?i.translate:-i.translate),u=n.map((function(e){return d(e)}));n[u.indexOf(p)];var c,h=n[u.indexOf(p)-1];return void 0===h&&s.cssMode&&n.forEach((function(e){!h&&p>=e&&(h=e)})),void 0!==h&&(c=l.indexOf(h))<0&&(c=i.activeIndex-1),i.slideTo(c,e,t,a)},slideReset:function(e,t,a){return void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),this.slideTo(this.activeIndex,e,t,a)},slideToClosest:function(e,t,a,i){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),void 0===i&&(i=.5);var s=this,r=s.activeIndex,n=Math.min(s.params.slidesPerGroupSkip,r),l=n+Math.floor((r-n)/s.params.slidesPerGroup),o=s.rtlTranslate?s.translate:-s.translate;if(o>=s.snapGrid[l]){var d=s.snapGrid[l];o-d>(s.snapGrid[l+1]-d)*i&&(r+=s.params.slidesPerGroup)}else{var p=s.snapGrid[l-1];o-p<=(s.snapGrid[l]-p)*i&&(r-=s.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,s.slidesGrid.length-1),s.slideTo(r,e,t,a)},slideToClickedSlide:function(){var e,t=this,a=t.params,i=t.$wrapperEl,s="auto"===a.slidesPerView?t.slidesPerViewDynamic():a.slidesPerView,r=t.clickedIndex;if(a.loop){if(t.animating)return;e=parseInt(m(t.clickedSlide).attr("data-swiper-slide-index"),10),a.centeredSlides?r<t.loopedSlides-s/2||r>t.slides.length-t.loopedSlides+s/2?(t.loopFix(),r=i.children("."+a.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+a.slideDuplicateClass+")").eq(0).index(),E((function(){t.slideTo(r)}))):t.slideTo(r):r>t.slides.length-s?(t.loopFix(),r=i.children("."+a.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+a.slideDuplicateClass+")").eq(0).index(),E((function(){t.slideTo(r)}))):t.slideTo(r)}else t.slideTo(r)}},loop:{loopCreate:function(){var e=this,t=r(),a=e.params,i=e.$wrapperEl;i.children("."+a.slideClass+"."+a.slideDuplicateClass).remove();var s=i.children("."+a.slideClass);if(a.loopFillGroupWithBlank){var n=a.slidesPerGroup-s.length%a.slidesPerGroup;if(n!==a.slidesPerGroup){for(var l=0;l<n;l+=1){var o=m(t.createElement("div")).addClass(a.slideClass+" "+a.slideBlankClass);i.append(o)}s=i.children("."+a.slideClass)}}"auto"!==a.slidesPerView||a.loopedSlides||(a.loopedSlides=s.length),e.loopedSlides=Math.ceil(parseFloat(a.loopedSlides||a.slidesPerView,10)),e.loopedSlides+=a.loopAdditionalSlides,e.loopedSlides>s.length&&(e.loopedSlides=s.length);var d=[],p=[];s.each((function(t,a){var i=m(t);a<e.loopedSlides&&p.push(t),a<s.length&&a>=s.length-e.loopedSlides&&d.push(t),i.attr("data-swiper-slide-index",a)}));for(var u=0;u<p.length;u+=1)i.append(m(p[u].cloneNode(!0)).addClass(a.slideDuplicateClass));for(var c=d.length-1;c>=0;c-=1)i.prepend(m(d[c].cloneNode(!0)).addClass(a.slideDuplicateClass))},loopFix:function(){var e=this;e.emit("beforeLoopFix");var t,a=e.activeIndex,i=e.slides,s=e.loopedSlides,r=e.allowSlidePrev,n=e.allowSlideNext,l=e.snapGrid,o=e.rtlTranslate;e.allowSlidePrev=!0,e.allowSlideNext=!0;var d=-l[a]-e.getTranslate();if(a<s)t=i.length-3*s+a,t+=s,e.slideTo(t,0,!1,!0)&&0!==d&&e.setTranslate((o?-e.translate:e.translate)-d);else if(a>=i.length-s){t=-i.length+a+s,t+=s,e.slideTo(t,0,!1,!0)&&0!==d&&e.setTranslate((o?-e.translate:e.translate)-d)}e.allowSlidePrev=r,e.allowSlideNext=n,e.emit("loopFix")},loopDestroy:function(){var e=this,t=e.$wrapperEl,a=e.params,i=e.slides;t.children("."+a.slideClass+"."+a.slideDuplicateClass+",."+a.slideClass+"."+a.slideBlankClass).remove(),i.removeAttr("data-swiper-slide-index")}},grabCursor:{setGrabCursor:function(e){var t=this;if(!(t.support.touch||!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)){var a=t.el;a.style.cursor="move",a.style.cursor=e?"-webkit-grabbing":"-webkit-grab",a.style.cursor=e?"-moz-grabbin":"-moz-grab",a.style.cursor=e?"grabbing":"grab"}},unsetGrabCursor:function(){var e=this;e.support.touch||e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.el.style.cursor="")}},manipulation:{appendSlide:function(e){var t=this,a=t.$wrapperEl,i=t.params;if(i.loop&&t.loopDestroy(),"object"==typeof e&&"length"in e)for(var s=0;s<e.length;s+=1)e[s]&&a.append(e[s]);else a.append(e);i.loop&&t.loopCreate(),i.observer&&t.support.observer||t.update()},prependSlide:function(e){var t=this,a=t.params,i=t.$wrapperEl,s=t.activeIndex;a.loop&&t.loopDestroy();var r=s+1;if("object"==typeof e&&"length"in e){for(var n=0;n<e.length;n+=1)e[n]&&i.prepend(e[n]);r=s+e.length}else i.prepend(e);a.loop&&t.loopCreate(),a.observer&&t.support.observer||t.update(),t.slideTo(r,0,!1)},addSlide:function(e,t){var a=this,i=a.$wrapperEl,s=a.params,r=a.activeIndex;s.loop&&(r-=a.loopedSlides,a.loopDestroy(),a.slides=i.children("."+s.slideClass));var n=a.slides.length;if(e<=0)a.prependSlide(t);else if(e>=n)a.appendSlide(t);else{for(var l=r>e?r+1:r,o=[],d=n-1;d>=e;d-=1){var p=a.slides.eq(d);p.remove(),o.unshift(p)}if("object"==typeof t&&"length"in t){for(var u=0;u<t.length;u+=1)t[u]&&i.append(t[u]);l=r>e?r+t.length:r}else i.append(t);for(var c=0;c<o.length;c+=1)i.append(o[c]);s.loop&&a.loopCreate(),s.observer&&a.support.observer||a.update(),s.loop?a.slideTo(l+a.loopedSlides,0,!1):a.slideTo(l,0,!1)}},removeSlide:function(e){var t=this,a=t.params,i=t.$wrapperEl,s=t.activeIndex;a.loop&&(s-=t.loopedSlides,t.loopDestroy(),t.slides=i.children("."+a.slideClass));var r,n=s;if("object"==typeof e&&"length"in e){for(var l=0;l<e.length;l+=1)r=e[l],t.slides[r]&&t.slides.eq(r).remove(),r<n&&(n-=1);n=Math.max(n,0)}else r=e,t.slides[r]&&t.slides.eq(r).remove(),r<n&&(n-=1),n=Math.max(n,0);a.loop&&t.loopCreate(),a.observer&&t.support.observer||t.update(),a.loop?t.slideTo(n+t.loopedSlides,0,!1):t.slideTo(n,0,!1)},removeAllSlides:function(){for(var e=[],t=0;t<this.slides.length;t+=1)e.push(t);this.removeSlide(e)}},events:{attachEvents:function(){var e=this,t=r(),a=e.params,i=e.touchEvents,s=e.el,n=e.wrapperEl,l=e.device,o=e.support;e.onTouchStart=D.bind(e),e.onTouchMove=N.bind(e),e.onTouchEnd=G.bind(e),a.cssMode&&(e.onScroll=X.bind(e)),e.onClick=H.bind(e);var d=!!a.nested;if(!o.touch&&o.pointerEvents)s.addEventListener(i.start,e.onTouchStart,!1),t.addEventListener(i.move,e.onTouchMove,d),t.addEventListener(i.end,e.onTouchEnd,!1);else{if(o.touch){var p=!("touchstart"!==i.start||!o.passiveListener||!a.passiveListeners)&&{passive:!0,capture:!1};s.addEventListener(i.start,e.onTouchStart,p),s.addEventListener(i.move,e.onTouchMove,o.passiveListener?{passive:!1,capture:d}:d),s.addEventListener(i.end,e.onTouchEnd,p),i.cancel&&s.addEventListener(i.cancel,e.onTouchEnd,p),Y||(t.addEventListener("touchstart",R),Y=!0)}(a.simulateTouch&&!l.ios&&!l.android||a.simulateTouch&&!o.touch&&l.ios)&&(s.addEventListener("mousedown",e.onTouchStart,!1),t.addEventListener("mousemove",e.onTouchMove,d),t.addEventListener("mouseup",e.onTouchEnd,!1))}(a.preventClicks||a.preventClicksPropagation)&&s.addEventListener("click",e.onClick,!0),a.cssMode&&n.addEventListener("scroll",e.onScroll),a.updateOnWindowResize?e.on(l.ios||l.android?"resize orientationchange observerUpdate":"resize observerUpdate",B,!0):e.on("observerUpdate",B,!0)},detachEvents:function(){var e=this,t=r(),a=e.params,i=e.touchEvents,s=e.el,n=e.wrapperEl,l=e.device,o=e.support,d=!!a.nested;if(!o.touch&&o.pointerEvents)s.removeEventListener(i.start,e.onTouchStart,!1),t.removeEventListener(i.move,e.onTouchMove,d),t.removeEventListener(i.end,e.onTouchEnd,!1);else{if(o.touch){var p=!("onTouchStart"!==i.start||!o.passiveListener||!a.passiveListeners)&&{passive:!0,capture:!1};s.removeEventListener(i.start,e.onTouchStart,p),s.removeEventListener(i.move,e.onTouchMove,d),s.removeEventListener(i.end,e.onTouchEnd,p),i.cancel&&s.removeEventListener(i.cancel,e.onTouchEnd,p)}(a.simulateTouch&&!l.ios&&!l.android||a.simulateTouch&&!o.touch&&l.ios)&&(s.removeEventListener("mousedown",e.onTouchStart,!1),t.removeEventListener("mousemove",e.onTouchMove,d),t.removeEventListener("mouseup",e.onTouchEnd,!1))}(a.preventClicks||a.preventClicksPropagation)&&s.removeEventListener("click",e.onClick,!0),a.cssMode&&n.removeEventListener("scroll",e.onScroll),e.off(l.ios||l.android?"resize orientationchange observerUpdate":"resize observerUpdate",B)}},breakpoints:{setBreakpoint:function(){var e=this,t=e.activeIndex,a=e.initialized,i=e.loopedSlides,s=void 0===i?0:i,r=e.params,n=e.$el,l=r.breakpoints;if(l&&(!l||0!==Object.keys(l).length)){var o=e.getBreakpoint(l,e.params.breakpointsBase,e.el);if(o&&e.currentBreakpoint!==o){var d=o in l?l[o]:void 0;d&&["slidesPerView","spaceBetween","slidesPerGroup","slidesPerGroupSkip","slidesPerColumn"].forEach((function(e){var t=d[e];void 0!==t&&(d[e]="slidesPerView"!==e||"AUTO"!==t&&"auto"!==t?"slidesPerView"===e?parseFloat(t):parseInt(t,10):"auto")}));var p=d||e.originalParams,u=r.slidesPerColumn>1,c=p.slidesPerColumn>1,h=r.enabled;u&&!c?(n.removeClass(r.containerModifierClass+"multirow "+r.containerModifierClass+"multirow-column"),e.emitContainerClasses()):!u&&c&&(n.addClass(r.containerModifierClass+"multirow"),"column"===p.slidesPerColumnFill&&n.addClass(r.containerModifierClass+"multirow-column"),e.emitContainerClasses());var v=p.direction&&p.direction!==r.direction,f=r.loop&&(p.slidesPerView!==r.slidesPerView||v);v&&a&&e.changeDirection(),S(e.params,p);var m=e.params.enabled;S(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),h&&!m?e.disable():!h&&m&&e.enable(),e.currentBreakpoint=o,e.emit("_beforeBreakpoint",p),f&&a&&(e.loopDestroy(),e.loopCreate(),e.updateSlides(),e.slideTo(t-s+e.loopedSlides,0,!1)),e.emit("breakpoint",p)}}},getBreakpoint:function(e,t,a){if(void 0===t&&(t="window"),e&&("container"!==t||a)){var i=!1,s=l(),r="window"===t?s.innerWidth:a.clientWidth,n="window"===t?s.innerHeight:a.clientHeight,o=Object.keys(e).map((function(e){if("string"==typeof e&&0===e.indexOf("@")){var t=parseFloat(e.substr(1));return{value:n*t,point:e}}return{value:e,point:e}}));o.sort((function(e,t){return parseInt(e.value,10)-parseInt(t.value,10)}));for(var d=0;d<o.length;d+=1){var p=o[d],u=p.point;p.value<=r&&(i=u)}return i||"max"}}},checkOverflow:{checkOverflow:function(){var e=this,t=e.params,a=e.isLocked,i=e.slides.length>0&&t.slidesOffsetBefore+t.spaceBetween*(e.slides.length-1)+e.slides[0].offsetWidth*e.slides.length;t.slidesOffsetBefore&&t.slidesOffsetAfter&&i?e.isLocked=i<=e.size:e.isLocked=1===e.snapGrid.length,e.allowSlideNext=!e.isLocked,e.allowSlidePrev=!e.isLocked,a!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock"),a&&a!==e.isLocked&&(e.isEnd=!1,e.navigation&&e.navigation.update())}},classes:{addClasses:function(){var e,t,a,i=this,s=i.classNames,r=i.params,n=i.rtl,l=i.$el,o=i.device,d=i.support,p=(e=["initialized",r.direction,{"pointer-events":d.pointerEvents&&!d.touch},{"free-mode":r.freeMode},{autoheight:r.autoHeight},{rtl:n},{multirow:r.slidesPerColumn>1},{"multirow-column":r.slidesPerColumn>1&&"column"===r.slidesPerColumnFill},{android:o.android},{ios:o.ios},{"css-mode":r.cssMode}],t=r.containerModifierClass,a=[],e.forEach((function(e){"object"==typeof e?Object.keys(e).forEach((function(i){e[i]&&a.push(t+i)})):"string"==typeof e&&a.push(t+e)})),a);s.push.apply(s,p),l.addClass([].concat(s).join(" ")),i.emitContainerClasses()},removeClasses:function(){var e=this,t=e.$el,a=e.classNames;t.removeClass(a.join(" ")),e.emitContainerClasses()}},images:{loadImage:function(e,t,a,i,s,r){var n,o=l();function d(){r&&r()}m(e).parent("picture")[0]||e.complete&&s?d():t?((n=new o.Image).onload=d,n.onerror=d,i&&(n.sizes=i),a&&(n.srcset=a),t&&(n.src=t)):d()},preloadImages:function(){var e=this;function t(){null!=e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}e.imagesToLoad=e.$el.find("img");for(var a=0;a<e.imagesToLoad.length;a+=1){var i=e.imagesToLoad[a];e.loadImage(i,i.currentSrc||i.getAttribute("src"),i.srcset||i.getAttribute("srcset"),i.sizes||i.getAttribute("sizes"),!0,t)}}}},F={},_=function(){function t(){for(var e,a,i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];if(1===s.length&&s[0].constructor&&"Object"===Object.prototype.toString.call(s[0]).slice(8,-1)?a=s[0]:(e=s[0],a=s[1]),a||(a={}),a=S({},a),e&&!a.el&&(a.el=e),a.el&&m(a.el).length>1){var n=[];return m(a.el).each((function(e){var i=S({},a,{el:e});n.push(new t(i))})),n}var l=this;l.__swiper__=!0,l.support=k(),l.device=$({userAgent:a.userAgent}),l.browser=L(),l.eventsListeners={},l.eventsAnyListeners=[],void 0===l.modules&&(l.modules={}),Object.keys(l.modules).forEach((function(e){var t=l.modules[e];if(t.params){var i=Object.keys(t.params)[0],s=t.params[i];if("object"!=typeof s||null===s)return;if(["navigation","pagination","scrollbar"].indexOf(i)>=0&&!0===a[i]&&(a[i]={auto:!0}),!(i in a)||!("enabled"in s))return;!0===a[i]&&(a[i]={enabled:!0}),"object"!=typeof a[i]||"enabled"in a[i]||(a[i].enabled=!0),a[i]||(a[i]={enabled:!1})}}));var o,d,p=S({},W);return l.useParams(p),l.params=S({},p,F,a),l.originalParams=S({},l.params),l.passedParams=S({},a),l.params&&l.params.on&&Object.keys(l.params.on).forEach((function(e){l.on(e,l.params.on[e])})),l.params&&l.params.onAny&&l.onAny(l.params.onAny),l.$=m,S(l,{enabled:l.params.enabled,el:e,classNames:[],slides:m(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:function(){return"horizontal"===l.params.direction},isVertical:function(){return"vertical"===l.params.direction},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:l.params.allowSlideNext,allowSlidePrev:l.params.allowSlidePrev,touchEvents:(o=["touchstart","touchmove","touchend","touchcancel"],d=["mousedown","mousemove","mouseup"],l.support.pointerEvents&&(d=["pointerdown","pointermove","pointerup"]),l.touchEventsTouch={start:o[0],move:o[1],end:o[2],cancel:o[3]},l.touchEventsDesktop={start:d[0],move:d[1],end:d[2]},l.support.touch||!l.params.simulateTouch?l.touchEventsTouch:l.touchEventsDesktop),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,formElements:"input, select, option, textarea, button, video, label",lastClickTime:x(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:l.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),l.useModules(),l.emit("_swiper"),l.params.init&&l.init(),l}var a,i,s,n=t.prototype;return n.enable=function(){var e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))},n.disable=function(){var e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))},n.setProgress=function(e,t){var a=this;e=Math.min(Math.max(e,0),1);var i=a.minTranslate(),s=(a.maxTranslate()-i)*e+i;a.translateTo(s,void 0===t?0:t),a.updateActiveIndex(),a.updateSlidesClasses()},n.emitContainerClasses=function(){var e=this;if(e.params._emitClasses&&e.el){var t=e.el.className.split(" ").filter((function(t){return 0===t.indexOf("swiper-container")||0===t.indexOf(e.params.containerModifierClass)}));e.emit("_containerClasses",t.join(" "))}},n.getSlideClasses=function(e){var t=this;return e.className.split(" ").filter((function(e){return 0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass)})).join(" ")},n.emitSlidesClasses=function(){var e=this;if(e.params._emitClasses&&e.el){var t=[];e.slides.each((function(a){var i=e.getSlideClasses(a);t.push({slideEl:a,classNames:i}),e.emit("_slideClass",a,i)})),e.emit("_slideClasses",t)}},n.slidesPerViewDynamic=function(){var e=this,t=e.params,a=e.slides,i=e.slidesGrid,s=e.size,r=e.activeIndex,n=1;if(t.centeredSlides){for(var l,o=a[r].swiperSlideSize,d=r+1;d<a.length;d+=1)a[d]&&!l&&(n+=1,(o+=a[d].swiperSlideSize)>s&&(l=!0));for(var p=r-1;p>=0;p-=1)a[p]&&!l&&(n+=1,(o+=a[p].swiperSlideSize)>s&&(l=!0))}else for(var u=r+1;u<a.length;u+=1)i[u]-i[r]<s&&(n+=1);return n},n.update=function(){var e=this;if(e&&!e.destroyed){var t=e.snapGrid,a=e.params;a.breakpoints&&e.setBreakpoint(),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode?(i(),e.params.autoHeight&&e.updateAutoHeight()):(("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0))||i(),a.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}function i(){var t=e.rtlTranslate?-1*e.translate:e.translate,a=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(a),e.updateActiveIndex(),e.updateSlidesClasses()}},n.changeDirection=function(e,t){void 0===t&&(t=!0);var a=this,i=a.params.direction;return e||(e="horizontal"===i?"vertical":"horizontal"),e===i||"horizontal"!==e&&"vertical"!==e||(a.$el.removeClass(""+a.params.containerModifierClass+i).addClass(""+a.params.containerModifierClass+e),a.emitContainerClasses(),a.params.direction=e,a.slides.each((function(t){"vertical"===e?t.style.width="":t.style.height=""})),a.emit("changeDirection"),t&&a.update()),a},n.mount=function(e){var t=this;if(t.mounted)return!0;var a=m(e||t.params.el);if(!(e=a[0]))return!1;e.swiper=t;var i=function(){if(e&&e.shadowRoot&&e.shadowRoot.querySelector){var i=m(e.shadowRoot.querySelector("."+t.params.wrapperClass));return i.children=function(e){return a.children(e)},i}return a.children("."+t.params.wrapperClass)}();if(0===i.length&&t.params.createElements){var s=r().createElement("div");i=m(s),s.className=t.params.wrapperClass,a.append(s),a.children("."+t.params.slideClass).each((function(e){i.append(e)}))}return S(t,{$el:a,el:e,$wrapperEl:i,wrapperEl:i[0],mounted:!0,rtl:"rtl"===e.dir.toLowerCase()||"rtl"===a.css("direction"),rtlTranslate:"horizontal"===t.params.direction&&("rtl"===e.dir.toLowerCase()||"rtl"===a.css("direction")),wrongRTL:"-webkit-box"===i.css("display")}),!0},n.init=function(e){var t=this;return t.initialized||!1===t.mount(e)||(t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.params.loop&&t.loopCreate(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.preloadImages&&t.preloadImages(),t.params.loop?t.slideTo(t.params.initialSlide+t.loopedSlides,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.attachEvents(),t.initialized=!0,t.emit("init"),t.emit("afterInit")),t},n.destroy=function(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);var a,i=this,s=i.params,r=i.$el,n=i.$wrapperEl,l=i.slides;return void 0===i.params||i.destroyed||(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),s.loop&&i.loopDestroy(),t&&(i.removeClasses(),r.removeAttr("style"),n.removeAttr("style"),l&&l.length&&l.removeClass([s.slideVisibleClass,s.slideActiveClass,s.slideNextClass,s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),i.emit("destroy"),Object.keys(i.eventsListeners).forEach((function(e){i.off(e)})),!1!==e&&(i.$el[0].swiper=null,a=i,Object.keys(a).forEach((function(e){try{a[e]=null}catch(e){}try{delete a[e]}catch(e){}}))),i.destroyed=!0),null},t.extendDefaults=function(e){S(F,e)},t.installModule=function(e){t.prototype.modules||(t.prototype.modules={});var a=e.name||Object.keys(t.prototype.modules).length+"_"+x();t.prototype.modules[a]=e},t.use=function(e){return Array.isArray(e)?(e.forEach((function(e){return t.installModule(e)})),t):(t.installModule(e),t)},a=t,s=[{key:"extendedDefaults",get:function(){return F}},{key:"defaults",get:function(){return W}}],(i=null)&&e(a.prototype,i),s&&e(a,s),t}();Object.keys(V).forEach((function(e){Object.keys(V[e]).forEach((function(t){_.prototype[t]=V[e][t]}))})),_.use([I,A]);var q={update:function(e){var t=this,a=t.params,i=a.slidesPerView,s=a.slidesPerGroup,r=a.centeredSlides,n=t.params.virtual,l=n.addSlidesBefore,o=n.addSlidesAfter,d=t.virtual,p=d.from,u=d.to,c=d.slides,h=d.slidesGrid,v=d.renderSlide,f=d.offset;t.updateActiveIndex();var m,g,b,y=t.activeIndex||0;m=t.rtlTranslate?"right":t.isHorizontal()?"left":"top",r?(g=Math.floor(i/2)+s+o,b=Math.floor(i/2)+s+l):(g=i+(s-1)+o,b=s+l);var w=Math.max((y||0)-b,0),E=Math.min((y||0)+g,c.length-1),x=(t.slidesGrid[w]||0)-(t.slidesGrid[0]||0);function T(){t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.lazy&&t.params.lazy.enabled&&t.lazy.load()}if(S(t.virtual,{from:w,to:E,offset:x,slidesGrid:t.slidesGrid}),p===w&&u===E&&!e)return t.slidesGrid!==h&&x!==f&&t.slides.css(m,x+"px"),void t.updateProgress();if(t.params.virtual.renderExternal)return t.params.virtual.renderExternal.call(t,{offset:x,from:w,to:E,slides:function(){for(var e=[],t=w;t<=E;t+=1)e.push(c[t]);return e}()}),void(t.params.virtual.renderExternalUpdate&&T());var C=[],M=[];if(e)t.$wrapperEl.find("."+t.params.slideClass).remove();else for(var z=p;z<=u;z+=1)(z<w||z>E)&&t.$wrapperEl.find("."+t.params.slideClass+'[data-swiper-slide-index="'+z+'"]').remove();for(var P=0;P<c.length;P+=1)P>=w&&P<=E&&(void 0===u||e?M.push(P):(P>u&&M.push(P),P<p&&C.push(P)));M.forEach((function(e){t.$wrapperEl.append(v(c[e],e))})),C.sort((function(e,t){return t-e})).forEach((function(e){t.$wrapperEl.prepend(v(c[e],e))})),t.$wrapperEl.children(".swiper-slide").css(m,x+"px"),T()},renderSlide:function(e,t){var a=this,i=a.params.virtual;if(i.cache&&a.virtual.cache[t])return a.virtual.cache[t];var s=i.renderSlide?m(i.renderSlide.call(a,e,t)):m('<div class="'+a.params.slideClass+'" data-swiper-slide-index="'+t+'">'+e+"</div>");return s.attr("data-swiper-slide-index")||s.attr("data-swiper-slide-index",t),i.cache&&(a.virtual.cache[t]=s),s},appendSlide:function(e){var t=this;if("object"==typeof e&&"length"in e)for(var a=0;a<e.length;a+=1)e[a]&&t.virtual.slides.push(e[a]);else t.virtual.slides.push(e);t.virtual.update(!0)},prependSlide:function(e){var t=this,a=t.activeIndex,i=a+1,s=1;if(Array.isArray(e)){for(var r=0;r<e.length;r+=1)e[r]&&t.virtual.slides.unshift(e[r]);i=a+e.length,s=e.length}else t.virtual.slides.unshift(e);if(t.params.virtual.cache){var n=t.virtual.cache,l={};Object.keys(n).forEach((function(e){var t=n[e],a=t.attr("data-swiper-slide-index");a&&t.attr("data-swiper-slide-index",parseInt(a,10)+1),l[parseInt(e,10)+s]=t})),t.virtual.cache=l}t.virtual.update(!0),t.slideTo(i,0)},removeSlide:function(e){var t=this;if(null!=e){var a=t.activeIndex;if(Array.isArray(e))for(var i=e.length-1;i>=0;i-=1)t.virtual.slides.splice(e[i],1),t.params.virtual.cache&&delete t.virtual.cache[e[i]],e[i]<a&&(a-=1),a=Math.max(a,0);else t.virtual.slides.splice(e,1),t.params.virtual.cache&&delete t.virtual.cache[e],e<a&&(a-=1),a=Math.max(a,0);t.virtual.update(!0),t.slideTo(a,0)}},removeAllSlides:function(){var e=this;e.virtual.slides=[],e.params.virtual.cache&&(e.virtual.cache={}),e.virtual.update(!0),e.slideTo(0,0)}},j={name:"virtual",params:{virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}},create:function(){M(this,{virtual:t({},q,{slides:this.params.virtual.slides,cache:{}})})},on:{beforeInit:function(e){if(e.params.virtual.enabled){e.classNames.push(e.params.containerModifierClass+"virtual");var t={watchSlidesProgress:!0};S(e.params,t),S(e.originalParams,t),e.params.initialSlide||e.virtual.update()}},setTranslate:function(e){e.params.virtual.enabled&&e.virtual.update()}}},U={handle:function(e){var t=this;if(t.enabled){var a=l(),i=r(),s=t.rtlTranslate,n=e;n.originalEvent&&(n=n.originalEvent);var o=n.keyCode||n.charCode,d=t.params.keyboard.pageUpDown,p=d&&33===o,u=d&&34===o,c=37===o,h=39===o,v=38===o,f=40===o;if(!t.allowSlideNext&&(t.isHorizontal()&&h||t.isVertical()&&f||u))return!1;if(!t.allowSlidePrev&&(t.isHorizontal()&&c||t.isVertical()&&v||p))return!1;if(!(n.shiftKey||n.altKey||n.ctrlKey||n.metaKey||i.activeElement&&i.activeElement.nodeName&&("input"===i.activeElement.nodeName.toLowerCase()||"textarea"===i.activeElement.nodeName.toLowerCase()))){if(t.params.keyboard.onlyInViewport&&(p||u||c||h||v||f)){var m=!1;if(t.$el.parents("."+t.params.slideClass).length>0&&0===t.$el.parents("."+t.params.slideActiveClass).length)return;var g=t.$el,b=g[0].clientWidth,y=g[0].clientHeight,w=a.innerWidth,E=a.innerHeight,x=t.$el.offset();s&&(x.left-=t.$el[0].scrollLeft);for(var T=[[x.left,x.top],[x.left+b,x.top],[x.left,x.top+y],[x.left+b,x.top+y]],C=0;C<T.length;C+=1){var S=T[C];if(S[0]>=0&&S[0]<=w&&S[1]>=0&&S[1]<=E){if(0===S[0]&&0===S[1])continue;m=!0}}if(!m)return}t.isHorizontal()?((p||u||c||h)&&(n.preventDefault?n.preventDefault():n.returnValue=!1),((u||h)&&!s||(p||c)&&s)&&t.slideNext(),((p||c)&&!s||(u||h)&&s)&&t.slidePrev()):((p||u||v||f)&&(n.preventDefault?n.preventDefault():n.returnValue=!1),(u||f)&&t.slideNext(),(p||v)&&t.slidePrev()),t.emit("keyPress",o)}}},enable:function(){var e=this,t=r();e.keyboard.enabled||(m(t).on("keydown",e.keyboard.handle),e.keyboard.enabled=!0)},disable:function(){var e=this,t=r();e.keyboard.enabled&&(m(t).off("keydown",e.keyboard.handle),e.keyboard.enabled=!1)}},K={name:"keyboard",params:{keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}},create:function(){M(this,{keyboard:t({enabled:!1},U)})},on:{init:function(e){e.params.keyboard.enabled&&e.keyboard.enable()},destroy:function(e){e.keyboard.enabled&&e.keyboard.disable()}}};var Z={lastScrollTime:x(),lastEventBeforeSnap:void 0,recentWheelEvents:[],event:function(){return l().navigator.userAgent.indexOf("firefox")>-1?"DOMMouseScroll":function(){var e=r(),t="onwheel",a=t in e;if(!a){var i=e.createElement("div");i.setAttribute(t,"return;"),a="function"==typeof i.onwheel}return!a&&e.implementation&&e.implementation.hasFeature&&!0!==e.implementation.hasFeature("","")&&(a=e.implementation.hasFeature("Events.wheel","3.0")),a}()?"wheel":"mousewheel"},normalize:function(e){var t=0,a=0,i=0,s=0;return"detail"in e&&(a=e.detail),"wheelDelta"in e&&(a=-e.wheelDelta/120),"wheelDeltaY"in e&&(a=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=a,a=0),i=10*t,s=10*a,"deltaY"in e&&(s=e.deltaY),"deltaX"in e&&(i=e.deltaX),e.shiftKey&&!i&&(i=s,s=0),(i||s)&&e.deltaMode&&(1===e.deltaMode?(i*=40,s*=40):(i*=800,s*=800)),i&&!t&&(t=i<1?-1:1),s&&!a&&(a=s<1?-1:1),{spinX:t,spinY:a,pixelX:i,pixelY:s}},handleMouseEnter:function(){this.enabled&&(this.mouseEntered=!0)},handleMouseLeave:function(){this.enabled&&(this.mouseEntered=!1)},handle:function(e){var t=e,a=this;if(a.enabled){var i=a.params.mousewheel;a.params.cssMode&&t.preventDefault();var s=a.$el;if("container"!==a.params.mousewheel.eventsTarget&&(s=m(a.params.mousewheel.eventsTarget)),!a.mouseEntered&&!s[0].contains(t.target)&&!i.releaseOnEdges)return!0;t.originalEvent&&(t=t.originalEvent);var r=0,n=a.rtlTranslate?-1:1,l=Z.normalize(t);if(i.forceToAxis)if(a.isHorizontal()){if(!(Math.abs(l.pixelX)>Math.abs(l.pixelY)))return!0;r=-l.pixelX*n}else{if(!(Math.abs(l.pixelY)>Math.abs(l.pixelX)))return!0;r=-l.pixelY}else r=Math.abs(l.pixelX)>Math.abs(l.pixelY)?-l.pixelX*n:-l.pixelY;if(0===r)return!0;i.invert&&(r=-r);var o=a.getTranslate()+r*i.sensitivity;if(o>=a.minTranslate()&&(o=a.minTranslate()),o<=a.maxTranslate()&&(o=a.maxTranslate()),(!!a.params.loop||!(o===a.minTranslate()||o===a.maxTranslate()))&&a.params.nested&&t.stopPropagation(),a.params.freeMode){var d={time:x(),delta:Math.abs(r),direction:Math.sign(r)},p=a.mousewheel.lastEventBeforeSnap,u=p&&d.time<p.time+500&&d.delta<=p.delta&&d.direction===p.direction;if(!u){a.mousewheel.lastEventBeforeSnap=void 0,a.params.loop&&a.loopFix();var c=a.getTranslate()+r*i.sensitivity,h=a.isBeginning,v=a.isEnd;if(c>=a.minTranslate()&&(c=a.minTranslate()),c<=a.maxTranslate()&&(c=a.maxTranslate()),a.setTransition(0),a.setTranslate(c),a.updateProgress(),a.updateActiveIndex(),a.updateSlidesClasses(),(!h&&a.isBeginning||!v&&a.isEnd)&&a.updateSlidesClasses(),a.params.freeModeSticky){clearTimeout(a.mousewheel.timeout),a.mousewheel.timeout=void 0;var f=a.mousewheel.recentWheelEvents;f.length>=15&&f.shift();var g=f.length?f[f.length-1]:void 0,b=f[0];if(f.push(d),g&&(d.delta>g.delta||d.direction!==g.direction))f.splice(0);else if(f.length>=15&&d.time-b.time<500&&b.delta-d.delta>=1&&d.delta<=6){var y=r>0?.8:.2;a.mousewheel.lastEventBeforeSnap=d,f.splice(0),a.mousewheel.timeout=E((function(){a.slideToClosest(a.params.speed,!0,void 0,y)}),0)}a.mousewheel.timeout||(a.mousewheel.timeout=E((function(){a.mousewheel.lastEventBeforeSnap=d,f.splice(0),a.slideToClosest(a.params.speed,!0,void 0,.5)}),500))}if(u||a.emit("scroll",t),a.params.autoplay&&a.params.autoplayDisableOnInteraction&&a.autoplay.stop(),c===a.minTranslate()||c===a.maxTranslate())return!0}}else{var w={time:x(),delta:Math.abs(r),direction:Math.sign(r),raw:e},T=a.mousewheel.recentWheelEvents;T.length>=2&&T.shift();var C=T.length?T[T.length-1]:void 0;if(T.push(w),C?(w.direction!==C.direction||w.delta>C.delta||w.time>C.time+150)&&a.mousewheel.animateSlider(w):a.mousewheel.animateSlider(w),a.mousewheel.releaseScroll(w))return!0}return t.preventDefault?t.preventDefault():t.returnValue=!1,!1}},animateSlider:function(e){var t=this,a=l();return!(this.params.mousewheel.thresholdDelta&&e.delta<this.params.mousewheel.thresholdDelta)&&(!(this.params.mousewheel.thresholdTime&&x()-t.mousewheel.lastScrollTime<this.params.mousewheel.thresholdTime)&&(e.delta>=6&&x()-t.mousewheel.lastScrollTime<60||(e.direction<0?t.isEnd&&!t.params.loop||t.animating||(t.slideNext(),t.emit("scroll",e.raw)):t.isBeginning&&!t.params.loop||t.animating||(t.slidePrev(),t.emit("scroll",e.raw)),t.mousewheel.lastScrollTime=(new a.Date).getTime(),!1)))},releaseScroll:function(e){var t=this,a=t.params.mousewheel;if(e.direction<0){if(t.isEnd&&!t.params.loop&&a.releaseOnEdges)return!0}else if(t.isBeginning&&!t.params.loop&&a.releaseOnEdges)return!0;return!1},enable:function(){var e=this,t=Z.event();if(e.params.cssMode)return e.wrapperEl.removeEventListener(t,e.mousewheel.handle),!0;if(!t)return!1;if(e.mousewheel.enabled)return!1;var a=e.$el;return"container"!==e.params.mousewheel.eventsTarget&&(a=m(e.params.mousewheel.eventsTarget)),a.on("mouseenter",e.mousewheel.handleMouseEnter),a.on("mouseleave",e.mousewheel.handleMouseLeave),a.on(t,e.mousewheel.handle),e.mousewheel.enabled=!0,!0},disable:function(){var e=this,t=Z.event();if(e.params.cssMode)return e.wrapperEl.addEventListener(t,e.mousewheel.handle),!0;if(!t)return!1;if(!e.mousewheel.enabled)return!1;var a=e.$el;return"container"!==e.params.mousewheel.eventsTarget&&(a=m(e.params.mousewheel.eventsTarget)),a.off(t,e.mousewheel.handle),e.mousewheel.enabled=!1,!0}},J={toggleEl:function(e,t){e[t?"addClass":"removeClass"](this.params.navigation.disabledClass),e[0]&&"BUTTON"===e[0].tagName&&(e[0].disabled=t)},update:function(){var e=this,t=e.params.navigation,a=e.navigation.toggleEl;if(!e.params.loop){var i=e.navigation,s=i.$nextEl,r=i.$prevEl;r&&r.length>0&&(e.isBeginning?a(r,!0):a(r,!1),e.params.watchOverflow&&e.enabled&&r[e.isLocked?"addClass":"removeClass"](t.lockClass)),s&&s.length>0&&(e.isEnd?a(s,!0):a(s,!1),e.params.watchOverflow&&e.enabled&&s[e.isLocked?"addClass":"removeClass"](t.lockClass))}},onPrevClick:function(e){var t=this;e.preventDefault(),t.isBeginning&&!t.params.loop||t.slidePrev()},onNextClick:function(e){var t=this;e.preventDefault(),t.isEnd&&!t.params.loop||t.slideNext()},init:function(){var e,t,a=this,i=a.params.navigation;(a.params.navigation=P(a.$el,a.params.navigation,a.params.createElements,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),i.nextEl||i.prevEl)&&(i.nextEl&&(e=m(i.nextEl),a.params.uniqueNavElements&&"string"==typeof i.nextEl&&e.length>1&&1===a.$el.find(i.nextEl).length&&(e=a.$el.find(i.nextEl))),i.prevEl&&(t=m(i.prevEl),a.params.uniqueNavElements&&"string"==typeof i.prevEl&&t.length>1&&1===a.$el.find(i.prevEl).length&&(t=a.$el.find(i.prevEl))),e&&e.length>0&&e.on("click",a.navigation.onNextClick),t&&t.length>0&&t.on("click",a.navigation.onPrevClick),S(a.navigation,{$nextEl:e,nextEl:e&&e[0],$prevEl:t,prevEl:t&&t[0]}),a.enabled||(e&&e.addClass(i.lockClass),t&&t.addClass(i.lockClass)))},destroy:function(){var e=this,t=e.navigation,a=t.$nextEl,i=t.$prevEl;a&&a.length&&(a.off("click",e.navigation.onNextClick),a.removeClass(e.params.navigation.disabledClass)),i&&i.length&&(i.off("click",e.navigation.onPrevClick),i.removeClass(e.params.navigation.disabledClass))}},Q={update:function(){var e=this,t=e.rtl,a=e.params.pagination;if(a.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var i,s=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,r=e.pagination.$el,n=e.params.loop?Math.ceil((s-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?((i=Math.ceil((e.activeIndex-e.loopedSlides)/e.params.slidesPerGroup))>s-1-2*e.loopedSlides&&(i-=s-2*e.loopedSlides),i>n-1&&(i-=n),i<0&&"bullets"!==e.params.paginationType&&(i=n+i)):i=void 0!==e.snapIndex?e.snapIndex:e.activeIndex||0,"bullets"===a.type&&e.pagination.bullets&&e.pagination.bullets.length>0){var l,o,d,p=e.pagination.bullets;if(a.dynamicBullets&&(e.pagination.bulletSize=p.eq(0)[e.isHorizontal()?"outerWidth":"outerHeight"](!0),r.css(e.isHorizontal()?"width":"height",e.pagination.bulletSize*(a.dynamicMainBullets+4)+"px"),a.dynamicMainBullets>1&&void 0!==e.previousIndex&&(e.pagination.dynamicBulletIndex+=i-e.previousIndex,e.pagination.dynamicBulletIndex>a.dynamicMainBullets-1?e.pagination.dynamicBulletIndex=a.dynamicMainBullets-1:e.pagination.dynamicBulletIndex<0&&(e.pagination.dynamicBulletIndex=0)),l=i-e.pagination.dynamicBulletIndex,d=((o=l+(Math.min(p.length,a.dynamicMainBullets)-1))+l)/2),p.removeClass(a.bulletActiveClass+" "+a.bulletActiveClass+"-next "+a.bulletActiveClass+"-next-next "+a.bulletActiveClass+"-prev "+a.bulletActiveClass+"-prev-prev "+a.bulletActiveClass+"-main"),r.length>1)p.each((function(e){var t=m(e),s=t.index();s===i&&t.addClass(a.bulletActiveClass),a.dynamicBullets&&(s>=l&&s<=o&&t.addClass(a.bulletActiveClass+"-main"),s===l&&t.prev().addClass(a.bulletActiveClass+"-prev").prev().addClass(a.bulletActiveClass+"-prev-prev"),s===o&&t.next().addClass(a.bulletActiveClass+"-next").next().addClass(a.bulletActiveClass+"-next-next"))}));else{var u=p.eq(i),c=u.index();if(u.addClass(a.bulletActiveClass),a.dynamicBullets){for(var h=p.eq(l),v=p.eq(o),f=l;f<=o;f+=1)p.eq(f).addClass(a.bulletActiveClass+"-main");if(e.params.loop)if(c>=p.length-a.dynamicMainBullets){for(var g=a.dynamicMainBullets;g>=0;g-=1)p.eq(p.length-g).addClass(a.bulletActiveClass+"-main");p.eq(p.length-a.dynamicMainBullets-1).addClass(a.bulletActiveClass+"-prev")}else h.prev().addClass(a.bulletActiveClass+"-prev").prev().addClass(a.bulletActiveClass+"-prev-prev"),v.next().addClass(a.bulletActiveClass+"-next").next().addClass(a.bulletActiveClass+"-next-next");else h.prev().addClass(a.bulletActiveClass+"-prev").prev().addClass(a.bulletActiveClass+"-prev-prev"),v.next().addClass(a.bulletActiveClass+"-next").next().addClass(a.bulletActiveClass+"-next-next")}}if(a.dynamicBullets){var b=Math.min(p.length,a.dynamicMainBullets+4),y=(e.pagination.bulletSize*b-e.pagination.bulletSize)/2-d*e.pagination.bulletSize,w=t?"right":"left";p.css(e.isHorizontal()?w:"top",y+"px")}}if("fraction"===a.type&&(r.find(z(a.currentClass)).text(a.formatFractionCurrent(i+1)),r.find(z(a.totalClass)).text(a.formatFractionTotal(n))),"progressbar"===a.type){var E;E=a.progressbarOpposite?e.isHorizontal()?"vertical":"horizontal":e.isHorizontal()?"horizontal":"vertical";var x=(i+1)/n,T=1,C=1;"horizontal"===E?T=x:C=x,r.find(z(a.progressbarFillClass)).transform("translate3d(0,0,0) scaleX("+T+") scaleY("+C+")").transition(e.params.speed)}"custom"===a.type&&a.renderCustom?(r.html(a.renderCustom(e,i+1,n)),e.emit("paginationRender",r[0])):e.emit("paginationUpdate",r[0]),e.params.watchOverflow&&e.enabled&&r[e.isLocked?"addClass":"removeClass"](a.lockClass)}},render:function(){var e=this,t=e.params.pagination;if(t.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var a=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,i=e.pagination.$el,s="";if("bullets"===t.type){var r=e.params.loop?Math.ceil((a-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&!e.params.loop&&r>a&&(r=a);for(var n=0;n<r;n+=1)t.renderBullet?s+=t.renderBullet.call(e,n,t.bulletClass):s+="<"+t.bulletElement+' class="'+t.bulletClass+'"></'+t.bulletElement+">";i.html(s),e.pagination.bullets=i.find(z(t.bulletClass))}"fraction"===t.type&&(s=t.renderFraction?t.renderFraction.call(e,t.currentClass,t.totalClass):'<span class="'+t.currentClass+'"></span> / <span class="'+t.totalClass+'"></span>',i.html(s)),"progressbar"===t.type&&(s=t.renderProgressbar?t.renderProgressbar.call(e,t.progressbarFillClass):'<span class="'+t.progressbarFillClass+'"></span>',i.html(s)),"custom"!==t.type&&e.emit("paginationRender",e.pagination.$el[0])}},init:function(){var e=this;e.params.pagination=P(e.$el,e.params.pagination,e.params.createElements,{el:"swiper-pagination"});var t=e.params.pagination;if(t.el){var a=m(t.el);0!==a.length&&(e.params.uniqueNavElements&&"string"==typeof t.el&&a.length>1&&(a=e.$el.find(t.el)),"bullets"===t.type&&t.clickable&&a.addClass(t.clickableClass),a.addClass(t.modifierClass+t.type),"bullets"===t.type&&t.dynamicBullets&&(a.addClass(""+t.modifierClass+t.type+"-dynamic"),e.pagination.dynamicBulletIndex=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),"progressbar"===t.type&&t.progressbarOpposite&&a.addClass(t.progressbarOppositeClass),t.clickable&&a.on("click",z(t.bulletClass),(function(t){t.preventDefault();var a=m(this).index()*e.params.slidesPerGroup;e.params.loop&&(a+=e.loopedSlides),e.slideTo(a)})),S(e.pagination,{$el:a,el:a[0]}),e.enabled||a.addClass(t.lockClass))}},destroy:function(){var e=this,t=e.params.pagination;if(t.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var a=e.pagination.$el;a.removeClass(t.hiddenClass),a.removeClass(t.modifierClass+t.type),e.pagination.bullets&&e.pagination.bullets.removeClass(t.bulletActiveClass),t.clickable&&a.off("click",z(t.bulletClass))}}},ee={setTranslate:function(){var e=this;if(e.params.scrollbar.el&&e.scrollbar.el){var t=e.scrollbar,a=e.rtlTranslate,i=e.progress,s=t.dragSize,r=t.trackSize,n=t.$dragEl,l=t.$el,o=e.params.scrollbar,d=s,p=(r-s)*i;a?(p=-p)>0?(d=s-p,p=0):-p+s>r&&(d=r+p):p<0?(d=s+p,p=0):p+s>r&&(d=r-p),e.isHorizontal()?(n.transform("translate3d("+p+"px, 0, 0)"),n[0].style.width=d+"px"):(n.transform("translate3d(0px, "+p+"px, 0)"),n[0].style.height=d+"px"),o.hide&&(clearTimeout(e.scrollbar.timeout),l[0].style.opacity=1,e.scrollbar.timeout=setTimeout((function(){l[0].style.opacity=0,l.transition(400)}),1e3))}},setTransition:function(e){var t=this;t.params.scrollbar.el&&t.scrollbar.el&&t.scrollbar.$dragEl.transition(e)},updateSize:function(){var e=this;if(e.params.scrollbar.el&&e.scrollbar.el){var t=e.scrollbar,a=t.$dragEl,i=t.$el;a[0].style.width="",a[0].style.height="";var s,r=e.isHorizontal()?i[0].offsetWidth:i[0].offsetHeight,n=e.size/e.virtualSize,l=n*(r/e.size);s="auto"===e.params.scrollbar.dragSize?r*n:parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?a[0].style.width=s+"px":a[0].style.height=s+"px",i[0].style.display=n>=1?"none":"",e.params.scrollbar.hide&&(i[0].style.opacity=0),S(t,{trackSize:r,divider:n,moveDivider:l,dragSize:s}),e.params.watchOverflow&&e.enabled&&t.$el[e.isLocked?"addClass":"removeClass"](e.params.scrollbar.lockClass)}},getPointerPosition:function(e){return this.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].clientX:e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].clientY:e.clientY},setDragPosition:function(e){var t,a=this,i=a.scrollbar,s=a.rtlTranslate,r=i.$el,n=i.dragSize,l=i.trackSize,o=i.dragStartPos;t=(i.getPointerPosition(e)-r.offset()[a.isHorizontal()?"left":"top"]-(null!==o?o:n/2))/(l-n),t=Math.max(Math.min(t,1),0),s&&(t=1-t);var d=a.minTranslate()+(a.maxTranslate()-a.minTranslate())*t;a.updateProgress(d),a.setTranslate(d),a.updateActiveIndex(),a.updateSlidesClasses()},onDragStart:function(e){var t=this,a=t.params.scrollbar,i=t.scrollbar,s=t.$wrapperEl,r=i.$el,n=i.$dragEl;t.scrollbar.isTouched=!0,t.scrollbar.dragStartPos=e.target===n[0]||e.target===n?i.getPointerPosition(e)-e.target.getBoundingClientRect()[t.isHorizontal()?"left":"top"]:null,e.preventDefault(),e.stopPropagation(),s.transition(100),n.transition(100),i.setDragPosition(e),clearTimeout(t.scrollbar.dragTimeout),r.transition(0),a.hide&&r.css("opacity",1),t.params.cssMode&&t.$wrapperEl.css("scroll-snap-type","none"),t.emit("scrollbarDragStart",e)},onDragMove:function(e){var t=this,a=t.scrollbar,i=t.$wrapperEl,s=a.$el,r=a.$dragEl;t.scrollbar.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,a.setDragPosition(e),i.transition(0),s.transition(0),r.transition(0),t.emit("scrollbarDragMove",e))},onDragEnd:function(e){var t=this,a=t.params.scrollbar,i=t.scrollbar,s=t.$wrapperEl,r=i.$el;t.scrollbar.isTouched&&(t.scrollbar.isTouched=!1,t.params.cssMode&&(t.$wrapperEl.css("scroll-snap-type",""),s.transition("")),a.hide&&(clearTimeout(t.scrollbar.dragTimeout),t.scrollbar.dragTimeout=E((function(){r.css("opacity",0),r.transition(400)}),1e3)),t.emit("scrollbarDragEnd",e),a.snapOnRelease&&t.slideToClosest())},enableDraggable:function(){var e=this;if(e.params.scrollbar.el){var t=r(),a=e.scrollbar,i=e.touchEventsTouch,s=e.touchEventsDesktop,n=e.params,l=e.support,o=a.$el[0],d=!(!l.passiveListener||!n.passiveListeners)&&{passive:!1,capture:!1},p=!(!l.passiveListener||!n.passiveListeners)&&{passive:!0,capture:!1};o&&(l.touch?(o.addEventListener(i.start,e.scrollbar.onDragStart,d),o.addEventListener(i.move,e.scrollbar.onDragMove,d),o.addEventListener(i.end,e.scrollbar.onDragEnd,p)):(o.addEventListener(s.start,e.scrollbar.onDragStart,d),t.addEventListener(s.move,e.scrollbar.onDragMove,d),t.addEventListener(s.end,e.scrollbar.onDragEnd,p)))}},disableDraggable:function(){var e=this;if(e.params.scrollbar.el){var t=r(),a=e.scrollbar,i=e.touchEventsTouch,s=e.touchEventsDesktop,n=e.params,l=e.support,o=a.$el[0],d=!(!l.passiveListener||!n.passiveListeners)&&{passive:!1,capture:!1},p=!(!l.passiveListener||!n.passiveListeners)&&{passive:!0,capture:!1};o&&(l.touch?(o.removeEventListener(i.start,e.scrollbar.onDragStart,d),o.removeEventListener(i.move,e.scrollbar.onDragMove,d),o.removeEventListener(i.end,e.scrollbar.onDragEnd,p)):(o.removeEventListener(s.start,e.scrollbar.onDragStart,d),t.removeEventListener(s.move,e.scrollbar.onDragMove,d),t.removeEventListener(s.end,e.scrollbar.onDragEnd,p)))}},init:function(){var e=this,t=e.scrollbar,a=e.$el;e.params.scrollbar=P(a,e.params.scrollbar,e.params.createElements,{el:"swiper-scrollbar"});var i=e.params.scrollbar;if(i.el){var s=m(i.el);e.params.uniqueNavElements&&"string"==typeof i.el&&s.length>1&&1===a.find(i.el).length&&(s=a.find(i.el));var r=s.find("."+e.params.scrollbar.dragClass);0===r.length&&(r=m('<div class="'+e.params.scrollbar.dragClass+'"></div>'),s.append(r)),S(t,{$el:s,el:s[0],$dragEl:r,dragEl:r[0]}),i.draggable&&t.enableDraggable(),s&&s[e.enabled?"removeClass":"addClass"](e.params.scrollbar.lockClass)}},destroy:function(){this.scrollbar.disableDraggable()}},te={setTransform:function(e,t){var a=this.rtl,i=m(e),s=a?-1:1,r=i.attr("data-swiper-parallax")||"0",n=i.attr("data-swiper-parallax-x"),l=i.attr("data-swiper-parallax-y"),o=i.attr("data-swiper-parallax-scale"),d=i.attr("data-swiper-parallax-opacity");if(n||l?(n=n||"0",l=l||"0"):this.isHorizontal()?(n=r,l="0"):(l=r,n="0"),n=n.indexOf("%")>=0?parseInt(n,10)*t*s+"%":n*t*s+"px",l=l.indexOf("%")>=0?parseInt(l,10)*t+"%":l*t+"px",null!=d){var p=d-(d-1)*(1-Math.abs(t));i[0].style.opacity=p}if(null==o)i.transform("translate3d("+n+", "+l+", 0px)");else{var u=o-(o-1)*(1-Math.abs(t));i.transform("translate3d("+n+", "+l+", 0px) scale("+u+")")}},setTranslate:function(){var e=this,t=e.$el,a=e.slides,i=e.progress,s=e.snapGrid;t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t){e.parallax.setTransform(t,i)})),a.each((function(t,a){var r=t.progress;e.params.slidesPerGroup>1&&"auto"!==e.params.slidesPerView&&(r+=Math.ceil(a/2)-i*(s.length-1)),r=Math.min(Math.max(r,-1),1),m(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t){e.parallax.setTransform(t,r)}))}))},setTransition:function(e){void 0===e&&(e=this.params.speed);this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t){var a=m(t),i=parseInt(a.attr("data-swiper-parallax-duration"),10)||e;0===e&&(i=0),a.transition(i)}))}},ae={getDistanceBetweenTouches:function(e){if(e.targetTouches.length<2)return 1;var t=e.targetTouches[0].pageX,a=e.targetTouches[0].pageY,i=e.targetTouches[1].pageX,s=e.targetTouches[1].pageY;return Math.sqrt(Math.pow(i-t,2)+Math.pow(s-a,2))},onGestureStart:function(e){var t=this,a=t.support,i=t.params.zoom,s=t.zoom,r=s.gesture;if(s.fakeGestureTouched=!1,s.fakeGestureMoved=!1,!a.gestures){if("touchstart"!==e.type||"touchstart"===e.type&&e.targetTouches.length<2)return;s.fakeGestureTouched=!0,r.scaleStart=ae.getDistanceBetweenTouches(e)}r.$slideEl&&r.$slideEl.length||(r.$slideEl=m(e.target).closest("."+t.params.slideClass),0===r.$slideEl.length&&(r.$slideEl=t.slides.eq(t.activeIndex)),r.$imageEl=r.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),r.$imageWrapEl=r.$imageEl.parent("."+i.containerClass),r.maxRatio=r.$imageWrapEl.attr("data-swiper-zoom")||i.maxRatio,0!==r.$imageWrapEl.length)?(r.$imageEl&&r.$imageEl.transition(0),t.zoom.isScaling=!0):r.$imageEl=void 0},onGestureChange:function(e){var t=this,a=t.support,i=t.params.zoom,s=t.zoom,r=s.gesture;if(!a.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;s.fakeGestureMoved=!0,r.scaleMove=ae.getDistanceBetweenTouches(e)}r.$imageEl&&0!==r.$imageEl.length?(a.gestures?s.scale=e.scale*s.currentScale:s.scale=r.scaleMove/r.scaleStart*s.currentScale,s.scale>r.maxRatio&&(s.scale=r.maxRatio-1+Math.pow(s.scale-r.maxRatio+1,.5)),s.scale<i.minRatio&&(s.scale=i.minRatio+1-Math.pow(i.minRatio-s.scale+1,.5)),r.$imageEl.transform("translate3d(0,0,0) scale("+s.scale+")")):"gesturechange"===e.type&&s.onGestureStart(e)},onGestureEnd:function(e){var t=this,a=t.device,i=t.support,s=t.params.zoom,r=t.zoom,n=r.gesture;if(!i.gestures){if(!r.fakeGestureTouched||!r.fakeGestureMoved)return;if("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2&&!a.android)return;r.fakeGestureTouched=!1,r.fakeGestureMoved=!1}n.$imageEl&&0!==n.$imageEl.length&&(r.scale=Math.max(Math.min(r.scale,n.maxRatio),s.minRatio),n.$imageEl.transition(t.params.speed).transform("translate3d(0,0,0) scale("+r.scale+")"),r.currentScale=r.scale,r.isScaling=!1,1===r.scale&&(n.$slideEl=void 0))},onTouchStart:function(e){var t=this.device,a=this.zoom,i=a.gesture,s=a.image;i.$imageEl&&0!==i.$imageEl.length&&(s.isTouched||(t.android&&e.cancelable&&e.preventDefault(),s.isTouched=!0,s.touchesStart.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,s.touchesStart.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY))},onTouchMove:function(e){var t=this,a=t.zoom,i=a.gesture,s=a.image,r=a.velocity;if(i.$imageEl&&0!==i.$imageEl.length&&(t.allowClick=!1,s.isTouched&&i.$slideEl)){s.isMoved||(s.width=i.$imageEl[0].offsetWidth,s.height=i.$imageEl[0].offsetHeight,s.startX=T(i.$imageWrapEl[0],"x")||0,s.startY=T(i.$imageWrapEl[0],"y")||0,i.slideWidth=i.$slideEl[0].offsetWidth,i.slideHeight=i.$slideEl[0].offsetHeight,i.$imageWrapEl.transition(0),t.rtl&&(s.startX=-s.startX,s.startY=-s.startY));var n=s.width*a.scale,l=s.height*a.scale;if(!(n<i.slideWidth&&l<i.slideHeight)){if(s.minX=Math.min(i.slideWidth/2-n/2,0),s.maxX=-s.minX,s.minY=Math.min(i.slideHeight/2-l/2,0),s.maxY=-s.minY,s.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,s.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!s.isMoved&&!a.isScaling){if(t.isHorizontal()&&(Math.floor(s.minX)===Math.floor(s.startX)&&s.touchesCurrent.x<s.touchesStart.x||Math.floor(s.maxX)===Math.floor(s.startX)&&s.touchesCurrent.x>s.touchesStart.x))return void(s.isTouched=!1);if(!t.isHorizontal()&&(Math.floor(s.minY)===Math.floor(s.startY)&&s.touchesCurrent.y<s.touchesStart.y||Math.floor(s.maxY)===Math.floor(s.startY)&&s.touchesCurrent.y>s.touchesStart.y))return void(s.isTouched=!1)}e.cancelable&&e.preventDefault(),e.stopPropagation(),s.isMoved=!0,s.currentX=s.touchesCurrent.x-s.touchesStart.x+s.startX,s.currentY=s.touchesCurrent.y-s.touchesStart.y+s.startY,s.currentX<s.minX&&(s.currentX=s.minX+1-Math.pow(s.minX-s.currentX+1,.8)),s.currentX>s.maxX&&(s.currentX=s.maxX-1+Math.pow(s.currentX-s.maxX+1,.8)),s.currentY<s.minY&&(s.currentY=s.minY+1-Math.pow(s.minY-s.currentY+1,.8)),s.currentY>s.maxY&&(s.currentY=s.maxY-1+Math.pow(s.currentY-s.maxY+1,.8)),r.prevPositionX||(r.prevPositionX=s.touchesCurrent.x),r.prevPositionY||(r.prevPositionY=s.touchesCurrent.y),r.prevTime||(r.prevTime=Date.now()),r.x=(s.touchesCurrent.x-r.prevPositionX)/(Date.now()-r.prevTime)/2,r.y=(s.touchesCurrent.y-r.prevPositionY)/(Date.now()-r.prevTime)/2,Math.abs(s.touchesCurrent.x-r.prevPositionX)<2&&(r.x=0),Math.abs(s.touchesCurrent.y-r.prevPositionY)<2&&(r.y=0),r.prevPositionX=s.touchesCurrent.x,r.prevPositionY=s.touchesCurrent.y,r.prevTime=Date.now(),i.$imageWrapEl.transform("translate3d("+s.currentX+"px, "+s.currentY+"px,0)")}}},onTouchEnd:function(){var e=this.zoom,t=e.gesture,a=e.image,i=e.velocity;if(t.$imageEl&&0!==t.$imageEl.length){if(!a.isTouched||!a.isMoved)return a.isTouched=!1,void(a.isMoved=!1);a.isTouched=!1,a.isMoved=!1;var s=300,r=300,n=i.x*s,l=a.currentX+n,o=i.y*r,d=a.currentY+o;0!==i.x&&(s=Math.abs((l-a.currentX)/i.x)),0!==i.y&&(r=Math.abs((d-a.currentY)/i.y));var p=Math.max(s,r);a.currentX=l,a.currentY=d;var u=a.width*e.scale,c=a.height*e.scale;a.minX=Math.min(t.slideWidth/2-u/2,0),a.maxX=-a.minX,a.minY=Math.min(t.slideHeight/2-c/2,0),a.maxY=-a.minY,a.currentX=Math.max(Math.min(a.currentX,a.maxX),a.minX),a.currentY=Math.max(Math.min(a.currentY,a.maxY),a.minY),t.$imageWrapEl.transition(p).transform("translate3d("+a.currentX+"px, "+a.currentY+"px,0)")}},onTransitionEnd:function(){var e=this,t=e.zoom,a=t.gesture;a.$slideEl&&e.previousIndex!==e.activeIndex&&(a.$imageEl&&a.$imageEl.transform("translate3d(0,0,0) scale(1)"),a.$imageWrapEl&&a.$imageWrapEl.transform("translate3d(0,0,0)"),t.scale=1,t.currentScale=1,a.$slideEl=void 0,a.$imageEl=void 0,a.$imageWrapEl=void 0)},toggle:function(e){var t=this.zoom;t.scale&&1!==t.scale?t.out():t.in(e)},in:function(e){var t,a,i,s,r,n,o,d,p,u,c,h,v,f,m,g,b=this,y=l(),w=b.zoom,E=b.params.zoom,x=w.gesture,T=w.image;(x.$slideEl||(b.params.virtual&&b.params.virtual.enabled&&b.virtual?x.$slideEl=b.$wrapperEl.children("."+b.params.slideActiveClass):x.$slideEl=b.slides.eq(b.activeIndex),x.$imageEl=x.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),x.$imageWrapEl=x.$imageEl.parent("."+E.containerClass)),x.$imageEl&&0!==x.$imageEl.length&&x.$imageWrapEl&&0!==x.$imageWrapEl.length)&&(x.$slideEl.addClass(""+E.zoomedSlideClass),void 0===T.touchesStart.x&&e?(t="touchend"===e.type?e.changedTouches[0].pageX:e.pageX,a="touchend"===e.type?e.changedTouches[0].pageY:e.pageY):(t=T.touchesStart.x,a=T.touchesStart.y),w.scale=x.$imageWrapEl.attr("data-swiper-zoom")||E.maxRatio,w.currentScale=x.$imageWrapEl.attr("data-swiper-zoom")||E.maxRatio,e?(m=x.$slideEl[0].offsetWidth,g=x.$slideEl[0].offsetHeight,i=x.$slideEl.offset().left+y.scrollX+m/2-t,s=x.$slideEl.offset().top+y.scrollY+g/2-a,o=x.$imageEl[0].offsetWidth,d=x.$imageEl[0].offsetHeight,p=o*w.scale,u=d*w.scale,v=-(c=Math.min(m/2-p/2,0)),f=-(h=Math.min(g/2-u/2,0)),(r=i*w.scale)<c&&(r=c),r>v&&(r=v),(n=s*w.scale)<h&&(n=h),n>f&&(n=f)):(r=0,n=0),x.$imageWrapEl.transition(300).transform("translate3d("+r+"px, "+n+"px,0)"),x.$imageEl.transition(300).transform("translate3d(0,0,0) scale("+w.scale+")"))},out:function(){var e=this,t=e.zoom,a=e.params.zoom,i=t.gesture;i.$slideEl||(e.params.virtual&&e.params.virtual.enabled&&e.virtual?i.$slideEl=e.$wrapperEl.children("."+e.params.slideActiveClass):i.$slideEl=e.slides.eq(e.activeIndex),i.$imageEl=i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),i.$imageWrapEl=i.$imageEl.parent("."+a.containerClass)),i.$imageEl&&0!==i.$imageEl.length&&i.$imageWrapEl&&0!==i.$imageWrapEl.length&&(t.scale=1,t.currentScale=1,i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),i.$slideEl.removeClass(""+a.zoomedSlideClass),i.$slideEl=void 0)},toggleGestures:function(e){var t=this,a=t.zoom,i=a.slideSelector,s=a.passiveListener;t.$wrapperEl[e]("gesturestart",i,a.onGestureStart,s),t.$wrapperEl[e]("gesturechange",i,a.onGestureChange,s),t.$wrapperEl[e]("gestureend",i,a.onGestureEnd,s)},enableGestures:function(){this.zoom.gesturesEnabled||(this.zoom.gesturesEnabled=!0,this.zoom.toggleGestures("on"))},disableGestures:function(){this.zoom.gesturesEnabled&&(this.zoom.gesturesEnabled=!1,this.zoom.toggleGestures("off"))},enable:function(){var e=this,t=e.support,a=e.zoom;if(!a.enabled){a.enabled=!0;var i=!("touchstart"!==e.touchEvents.start||!t.passiveListener||!e.params.passiveListeners)&&{passive:!0,capture:!1},s=!t.passiveListener||{passive:!1,capture:!0},r="."+e.params.slideClass;e.zoom.passiveListener=i,e.zoom.slideSelector=r,t.gestures?(e.$wrapperEl.on(e.touchEvents.start,e.zoom.enableGestures,i),e.$wrapperEl.on(e.touchEvents.end,e.zoom.disableGestures,i)):"touchstart"===e.touchEvents.start&&(e.$wrapperEl.on(e.touchEvents.start,r,a.onGestureStart,i),e.$wrapperEl.on(e.touchEvents.move,r,a.onGestureChange,s),e.$wrapperEl.on(e.touchEvents.end,r,a.onGestureEnd,i),e.touchEvents.cancel&&e.$wrapperEl.on(e.touchEvents.cancel,r,a.onGestureEnd,i)),e.$wrapperEl.on(e.touchEvents.move,"."+e.params.zoom.containerClass,a.onTouchMove,s)}},disable:function(){var e=this,t=e.zoom;if(t.enabled){var a=e.support;e.zoom.enabled=!1;var i=!("touchstart"!==e.touchEvents.start||!a.passiveListener||!e.params.passiveListeners)&&{passive:!0,capture:!1},s=!a.passiveListener||{passive:!1,capture:!0},r="."+e.params.slideClass;a.gestures?(e.$wrapperEl.off(e.touchEvents.start,e.zoom.enableGestures,i),e.$wrapperEl.off(e.touchEvents.end,e.zoom.disableGestures,i)):"touchstart"===e.touchEvents.start&&(e.$wrapperEl.off(e.touchEvents.start,r,t.onGestureStart,i),e.$wrapperEl.off(e.touchEvents.move,r,t.onGestureChange,s),e.$wrapperEl.off(e.touchEvents.end,r,t.onGestureEnd,i),e.touchEvents.cancel&&e.$wrapperEl.off(e.touchEvents.cancel,r,t.onGestureEnd,i)),e.$wrapperEl.off(e.touchEvents.move,"."+e.params.zoom.containerClass,t.onTouchMove,s)}}},ie={loadInSlide:function(e,t){void 0===t&&(t=!0);var a=this,i=a.params.lazy;if(void 0!==e&&0!==a.slides.length){var s=a.virtual&&a.params.virtual.enabled?a.$wrapperEl.children("."+a.params.slideClass+'[data-swiper-slide-index="'+e+'"]'):a.slides.eq(e),r=s.find("."+i.elementClass+":not(."+i.loadedClass+"):not(."+i.loadingClass+")");!s.hasClass(i.elementClass)||s.hasClass(i.loadedClass)||s.hasClass(i.loadingClass)||r.push(s[0]),0!==r.length&&r.each((function(e){var r=m(e);r.addClass(i.loadingClass);var n=r.attr("data-background"),l=r.attr("data-src"),o=r.attr("data-srcset"),d=r.attr("data-sizes"),p=r.parent("picture");a.loadImage(r[0],l||n,o,d,!1,(function(){if(null!=a&&a&&(!a||a.params)&&!a.destroyed){if(n?(r.css("background-image",'url("'+n+'")'),r.removeAttr("data-background")):(o&&(r.attr("srcset",o),r.removeAttr("data-srcset")),d&&(r.attr("sizes",d),r.removeAttr("data-sizes")),p.length&&p.children("source").each((function(e){var t=m(e);t.attr("data-srcset")&&(t.attr("srcset",t.attr("data-srcset")),t.removeAttr("data-srcset"))})),l&&(r.attr("src",l),r.removeAttr("data-src"))),r.addClass(i.loadedClass).removeClass(i.loadingClass),s.find("."+i.preloaderClass).remove(),a.params.loop&&t){var e=s.attr("data-swiper-slide-index");if(s.hasClass(a.params.slideDuplicateClass)){var u=a.$wrapperEl.children('[data-swiper-slide-index="'+e+'"]:not(.'+a.params.slideDuplicateClass+")");a.lazy.loadInSlide(u.index(),!1)}else{var c=a.$wrapperEl.children("."+a.params.slideDuplicateClass+'[data-swiper-slide-index="'+e+'"]');a.lazy.loadInSlide(c.index(),!1)}}a.emit("lazyImageReady",s[0],r[0]),a.params.autoHeight&&a.updateAutoHeight()}})),a.emit("lazyImageLoad",s[0],r[0])}))}},load:function(){var e=this,t=e.$wrapperEl,a=e.params,i=e.slides,s=e.activeIndex,r=e.virtual&&a.virtual.enabled,n=a.lazy,l=a.slidesPerView;function o(e){if(r){if(t.children("."+a.slideClass+'[data-swiper-slide-index="'+e+'"]').length)return!0}else if(i[e])return!0;return!1}function d(e){return r?m(e).attr("data-swiper-slide-index"):m(e).index()}if("auto"===l&&(l=0),e.lazy.initialImageLoaded||(e.lazy.initialImageLoaded=!0),e.params.watchSlidesVisibility)t.children("."+a.slideVisibleClass).each((function(t){var a=r?m(t).attr("data-swiper-slide-index"):m(t).index();e.lazy.loadInSlide(a)}));else if(l>1)for(var p=s;p<s+l;p+=1)o(p)&&e.lazy.loadInSlide(p);else e.lazy.loadInSlide(s);if(n.loadPrevNext)if(l>1||n.loadPrevNextAmount&&n.loadPrevNextAmount>1){for(var u=n.loadPrevNextAmount,c=l,h=Math.min(s+c+Math.max(u,c),i.length),v=Math.max(s-Math.max(c,u),0),f=s+l;f<h;f+=1)o(f)&&e.lazy.loadInSlide(f);for(var g=v;g<s;g+=1)o(g)&&e.lazy.loadInSlide(g)}else{var b=t.children("."+a.slideNextClass);b.length>0&&e.lazy.loadInSlide(d(b));var y=t.children("."+a.slidePrevClass);y.length>0&&e.lazy.loadInSlide(d(y))}},checkInViewOnLoad:function(){var e=l(),t=this;if(t&&!t.destroyed){var a=t.params.lazy.scrollingElement?m(t.params.lazy.scrollingElement):m(e),i=a[0]===e,s=i?e.innerWidth:a[0].offsetWidth,r=i?e.innerHeight:a[0].offsetHeight,n=t.$el.offset(),o=!1;t.rtlTranslate&&(n.left-=t.$el[0].scrollLeft);for(var d=[[n.left,n.top],[n.left+t.width,n.top],[n.left,n.top+t.height],[n.left+t.width,n.top+t.height]],p=0;p<d.length;p+=1){var u=d[p];if(u[0]>=0&&u[0]<=s&&u[1]>=0&&u[1]<=r){if(0===u[0]&&0===u[1])continue;o=!0}}var c=!("touchstart"!==t.touchEvents.start||!t.support.passiveListener||!t.params.passiveListeners)&&{passive:!0,capture:!1};o?(t.lazy.load(),a.off("scroll",t.lazy.checkInViewOnLoad,c)):t.lazy.scrollHandlerAttached||(t.lazy.scrollHandlerAttached=!0,a.on("scroll",t.lazy.checkInViewOnLoad,c))}}},se={LinearSpline:function(e,t){var a,i,s,r,n,l=function(e,t){for(i=-1,a=e.length;a-i>1;)e[s=a+i>>1]<=t?i=s:a=s;return a};return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(n=l(this.x,e),r=n-1,(e-this.x[r])*(this.y[n]-this.y[r])/(this.x[n]-this.x[r])+this.y[r]):0},this},getInterpolateFunction:function(e){var t=this;t.controller.spline||(t.controller.spline=t.params.loop?new se.LinearSpline(t.slidesGrid,e.slidesGrid):new se.LinearSpline(t.snapGrid,e.snapGrid))},setTranslate:function(e,t){var a,i,s=this,r=s.controller.control,n=s.constructor;function l(e){var t=s.rtlTranslate?-s.translate:s.translate;"slide"===s.params.controller.by&&(s.controller.getInterpolateFunction(e),i=-s.controller.spline.interpolate(-t)),i&&"container"!==s.params.controller.by||(a=(e.maxTranslate()-e.minTranslate())/(s.maxTranslate()-s.minTranslate()),i=(t-s.minTranslate())*a+e.minTranslate()),s.params.controller.inverse&&(i=e.maxTranslate()-i),e.updateProgress(i),e.setTranslate(i,s),e.updateActiveIndex(),e.updateSlidesClasses()}if(Array.isArray(r))for(var o=0;o<r.length;o+=1)r[o]!==t&&r[o]instanceof n&&l(r[o]);else r instanceof n&&t!==r&&l(r)},setTransition:function(e,t){var a,i=this,s=i.constructor,r=i.controller.control;function n(t){t.setTransition(e,i),0!==e&&(t.transitionStart(),t.params.autoHeight&&E((function(){t.updateAutoHeight()})),t.$wrapperEl.transitionEnd((function(){r&&(t.params.loop&&"slide"===i.params.controller.by&&t.loopFix(),t.transitionEnd())})))}if(Array.isArray(r))for(a=0;a<r.length;a+=1)r[a]!==t&&r[a]instanceof s&&n(r[a]);else r instanceof s&&t!==r&&n(r)}},re={getRandomNumber:function(e){void 0===e&&(e=16);return"x".repeat(e).replace(/x/g,(function(){return Math.round(16*Math.random()).toString(16)}))},makeElFocusable:function(e){return e.attr("tabIndex","0"),e},makeElNotFocusable:function(e){return e.attr("tabIndex","-1"),e},addElRole:function(e,t){return e.attr("role",t),e},addElRoleDescription:function(e,t){return e.attr("aria-roledescription",t),e},addElControls:function(e,t){return e.attr("aria-controls",t),e},addElLabel:function(e,t){return e.attr("aria-label",t),e},addElId:function(e,t){return e.attr("id",t),e},addElLive:function(e,t){return e.attr("aria-live",t),e},disableEl:function(e){return e.attr("aria-disabled",!0),e},enableEl:function(e){return e.attr("aria-disabled",!1),e},onEnterOrSpaceKey:function(e){if(13===e.keyCode||32===e.keyCode){var t=this,a=t.params.a11y,i=m(e.target);t.navigation&&t.navigation.$nextEl&&i.is(t.navigation.$nextEl)&&(t.isEnd&&!t.params.loop||t.slideNext(),t.isEnd?t.a11y.notify(a.lastSlideMessage):t.a11y.notify(a.nextSlideMessage)),t.navigation&&t.navigation.$prevEl&&i.is(t.navigation.$prevEl)&&(t.isBeginning&&!t.params.loop||t.slidePrev(),t.isBeginning?t.a11y.notify(a.firstSlideMessage):t.a11y.notify(a.prevSlideMessage)),t.pagination&&i.is(z(t.params.pagination.bulletClass))&&i[0].click()}},notify:function(e){var t=this.a11y.liveRegion;0!==t.length&&(t.html(""),t.html(e))},updateNavigation:function(){var e=this;if(!e.params.loop&&e.navigation){var t=e.navigation,a=t.$nextEl,i=t.$prevEl;i&&i.length>0&&(e.isBeginning?(e.a11y.disableEl(i),e.a11y.makeElNotFocusable(i)):(e.a11y.enableEl(i),e.a11y.makeElFocusable(i))),a&&a.length>0&&(e.isEnd?(e.a11y.disableEl(a),e.a11y.makeElNotFocusable(a)):(e.a11y.enableEl(a),e.a11y.makeElFocusable(a)))}},updatePagination:function(){var e=this,t=e.params.a11y;e.pagination&&e.params.pagination.clickable&&e.pagination.bullets&&e.pagination.bullets.length&&e.pagination.bullets.each((function(a){var i=m(a);e.a11y.makeElFocusable(i),e.params.pagination.renderBullet||(e.a11y.addElRole(i,"button"),e.a11y.addElLabel(i,t.paginationBulletMessage.replace(/\{\{index\}\}/,i.index()+1)))}))},init:function(){var e=this,t=e.params.a11y;e.$el.append(e.a11y.liveRegion);var a=e.$el;t.containerRoleDescriptionMessage&&e.a11y.addElRoleDescription(a,t.containerRoleDescriptionMessage),t.containerMessage&&e.a11y.addElLabel(a,t.containerMessage);var i,s,r=e.$wrapperEl,n=r.attr("id")||"swiper-wrapper-"+e.a11y.getRandomNumber(16),l=e.params.autoplay&&e.params.autoplay.enabled?"off":"polite";e.a11y.addElId(r,n),e.a11y.addElLive(r,l),t.itemRoleDescriptionMessage&&e.a11y.addElRoleDescription(m(e.slides),t.itemRoleDescriptionMessage),e.a11y.addElRole(m(e.slides),t.slideRole),e.slides.each((function(a){var i=m(a),s=t.slideLabelMessage.replace(/\{\{index\}\}/,i.index()+1).replace(/\{\{slidesLength\}\}/,e.slides.length);e.a11y.addElLabel(i,s)})),e.navigation&&e.navigation.$nextEl&&(i=e.navigation.$nextEl),e.navigation&&e.navigation.$prevEl&&(s=e.navigation.$prevEl),i&&i.length&&(e.a11y.makeElFocusable(i),"BUTTON"!==i[0].tagName&&(e.a11y.addElRole(i,"button"),i.on("keydown",e.a11y.onEnterOrSpaceKey)),e.a11y.addElLabel(i,t.nextSlideMessage),e.a11y.addElControls(i,n)),s&&s.length&&(e.a11y.makeElFocusable(s),"BUTTON"!==s[0].tagName&&(e.a11y.addElRole(s,"button"),s.on("keydown",e.a11y.onEnterOrSpaceKey)),e.a11y.addElLabel(s,t.prevSlideMessage),e.a11y.addElControls(s,n)),e.pagination&&e.params.pagination.clickable&&e.pagination.bullets&&e.pagination.bullets.length&&e.pagination.$el.on("keydown",z(e.params.pagination.bulletClass),e.a11y.onEnterOrSpaceKey)},destroy:function(){var e,t,a=this;a.a11y.liveRegion&&a.a11y.liveRegion.length>0&&a.a11y.liveRegion.remove(),a.navigation&&a.navigation.$nextEl&&(e=a.navigation.$nextEl),a.navigation&&a.navigation.$prevEl&&(t=a.navigation.$prevEl),e&&e.off("keydown",a.a11y.onEnterOrSpaceKey),t&&t.off("keydown",a.a11y.onEnterOrSpaceKey),a.pagination&&a.params.pagination.clickable&&a.pagination.bullets&&a.pagination.bullets.length&&a.pagination.$el.off("keydown",z(a.params.pagination.bulletClass),a.a11y.onEnterOrSpaceKey)}},ne={init:function(){var e=this,t=l();if(e.params.history){if(!t.history||!t.history.pushState)return e.params.history.enabled=!1,void(e.params.hashNavigation.enabled=!0);var a=e.history;a.initialized=!0,a.paths=ne.getPathValues(e.params.url),(a.paths.key||a.paths.value)&&(a.scrollToSlide(0,a.paths.value,e.params.runCallbacksOnInit),e.params.history.replaceState||t.addEventListener("popstate",e.history.setHistoryPopState))}},destroy:function(){var e=l();this.params.history.replaceState||e.removeEventListener("popstate",this.history.setHistoryPopState)},setHistoryPopState:function(){var e=this;e.history.paths=ne.getPathValues(e.params.url),e.history.scrollToSlide(e.params.speed,e.history.paths.value,!1)},getPathValues:function(e){var t=l(),a=(e?new URL(e):t.location).pathname.slice(1).split("/").filter((function(e){return""!==e})),i=a.length;return{key:a[i-2],value:a[i-1]}},setHistory:function(e,t){var a=this,i=l();if(a.history.initialized&&a.params.history.enabled){var s;s=a.params.url?new URL(a.params.url):i.location;var r=a.slides.eq(t),n=ne.slugify(r.attr("data-history"));if(a.params.history.root.length>0){var o=a.params.history.root;"/"===o[o.length-1]&&(o=o.slice(0,o.length-1)),n=o+"/"+e+"/"+n}else s.pathname.includes(e)||(n=e+"/"+n);var d=i.history.state;d&&d.value===n||(a.params.history.replaceState?i.history.replaceState({value:n},null,n):i.history.pushState({value:n},null,n))}},slugify:function(e){return e.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},scrollToSlide:function(e,t,a){var i=this;if(t)for(var s=0,r=i.slides.length;s<r;s+=1){var n=i.slides.eq(s);if(ne.slugify(n.attr("data-history"))===t&&!n.hasClass(i.params.slideDuplicateClass)){var l=n.index();i.slideTo(l,e,a)}}else i.slideTo(0,e,a)}},le={onHashCange:function(){var e=this,t=r();e.emit("hashChange");var a=t.location.hash.replace("#","");if(a!==e.slides.eq(e.activeIndex).attr("data-hash")){var i=e.$wrapperEl.children("."+e.params.slideClass+'[data-hash="'+a+'"]').index();if(void 0===i)return;e.slideTo(i)}},setHash:function(){var e=this,t=l(),a=r();if(e.hashNavigation.initialized&&e.params.hashNavigation.enabled)if(e.params.hashNavigation.replaceState&&t.history&&t.history.replaceState)t.history.replaceState(null,null,"#"+e.slides.eq(e.activeIndex).attr("data-hash")||""),e.emit("hashSet");else{var i=e.slides.eq(e.activeIndex),s=i.attr("data-hash")||i.attr("data-history");a.location.hash=s||"",e.emit("hashSet")}},init:function(){var e=this,t=r(),a=l();if(!(!e.params.hashNavigation.enabled||e.params.history&&e.params.history.enabled)){e.hashNavigation.initialized=!0;var i=t.location.hash.replace("#","");if(i)for(var s=0,n=e.slides.length;s<n;s+=1){var o=e.slides.eq(s);if((o.attr("data-hash")||o.attr("data-history"))===i&&!o.hasClass(e.params.slideDuplicateClass)){var d=o.index();e.slideTo(d,0,e.params.runCallbacksOnInit,!0)}}e.params.hashNavigation.watchState&&m(a).on("hashchange",e.hashNavigation.onHashCange)}},destroy:function(){var e=l();this.params.hashNavigation.watchState&&m(e).off("hashchange",this.hashNavigation.onHashCange)}},oe={run:function(){var e=this,t=e.slides.eq(e.activeIndex),a=e.params.autoplay.delay;t.attr("data-swiper-autoplay")&&(a=t.attr("data-swiper-autoplay")||e.params.autoplay.delay),clearTimeout(e.autoplay.timeout),e.autoplay.timeout=E((function(){var t;e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),t=e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(t=e.slideTo(e.slides.length-1,e.params.speed,!0,!0),e.emit("autoplay")):(t=e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.params.loop?(e.loopFix(),t=e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(t=e.slideTo(0,e.params.speed,!0,!0),e.emit("autoplay")):(t=e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")),(e.params.cssMode&&e.autoplay.running||!1===t)&&e.autoplay.run()}),a)},start:function(){var e=this;return void 0===e.autoplay.timeout&&(!e.autoplay.running&&(e.autoplay.running=!0,e.emit("autoplayStart"),e.autoplay.run(),!0))},stop:function(){var e=this;return!!e.autoplay.running&&(void 0!==e.autoplay.timeout&&(e.autoplay.timeout&&(clearTimeout(e.autoplay.timeout),e.autoplay.timeout=void 0),e.autoplay.running=!1,e.emit("autoplayStop"),!0))},pause:function(e){var t=this;t.autoplay.running&&(t.autoplay.paused||(t.autoplay.timeout&&clearTimeout(t.autoplay.timeout),t.autoplay.paused=!0,0!==e&&t.params.autoplay.waitForTransition?["transitionend","webkitTransitionEnd"].forEach((function(e){t.$wrapperEl[0].addEventListener(e,t.autoplay.onTransitionEnd)})):(t.autoplay.paused=!1,t.autoplay.run())))},onVisibilityChange:function(){var e=this,t=r();"hidden"===t.visibilityState&&e.autoplay.running&&e.autoplay.pause(),"visible"===t.visibilityState&&e.autoplay.paused&&(e.autoplay.run(),e.autoplay.paused=!1)},onTransitionEnd:function(e){var t=this;t&&!t.destroyed&&t.$wrapperEl&&e.target===t.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach((function(e){t.$wrapperEl[0].removeEventListener(e,t.autoplay.onTransitionEnd)})),t.autoplay.paused=!1,t.autoplay.running?t.autoplay.run():t.autoplay.stop())},onMouseEnter:function(){var e=this;e.params.autoplay.disableOnInteraction?e.autoplay.stop():e.autoplay.pause(),["transitionend","webkitTransitionEnd"].forEach((function(t){e.$wrapperEl[0].removeEventListener(t,e.autoplay.onTransitionEnd)}))},onMouseLeave:function(){var e=this;e.params.autoplay.disableOnInteraction||(e.autoplay.paused=!1,e.autoplay.run())},attachMouseEvents:function(){var e=this;e.params.autoplay.pauseOnMouseEnter&&(e.$el.on("mouseenter",e.autoplay.onMouseEnter),e.$el.on("mouseleave",e.autoplay.onMouseLeave))},detachMouseEvents:function(){var e=this;e.$el.off("mouseenter",e.autoplay.onMouseEnter),e.$el.off("mouseleave",e.autoplay.onMouseLeave)}},de={setTranslate:function(){for(var e=this,t=e.slides,a=0;a<t.length;a+=1){var i=e.slides.eq(a),s=-i[0].swiperSlideOffset;e.params.virtualTranslate||(s-=e.translate);var r=0;e.isHorizontal()||(r=s,s=0);var n=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(i[0].progress),0):1+Math.min(Math.max(i[0].progress,-1),0);i.css({opacity:n}).transform("translate3d("+s+"px, "+r+"px, 0px)")}},setTransition:function(e){var t=this,a=t.slides,i=t.$wrapperEl;if(a.transition(e),t.params.virtualTranslate&&0!==e){var s=!1;a.transitionEnd((function(){if(!s&&t&&!t.destroyed){s=!0,t.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],a=0;a<e.length;a+=1)i.trigger(e[a])}}))}}},pe={setTranslate:function(){var e,t=this,a=t.$el,i=t.$wrapperEl,s=t.slides,r=t.width,n=t.height,l=t.rtlTranslate,o=t.size,d=t.browser,p=t.params.cubeEffect,u=t.isHorizontal(),c=t.virtual&&t.params.virtual.enabled,h=0;p.shadow&&(u?(0===(e=i.find(".swiper-cube-shadow")).length&&(e=m('<div class="swiper-cube-shadow"></div>'),i.append(e)),e.css({height:r+"px"})):0===(e=a.find(".swiper-cube-shadow")).length&&(e=m('<div class="swiper-cube-shadow"></div>'),a.append(e)));for(var v=0;v<s.length;v+=1){var f=s.eq(v),g=v;c&&(g=parseInt(f.attr("data-swiper-slide-index"),10));var b=90*g,y=Math.floor(b/360);l&&(b=-b,y=Math.floor(-b/360));var w=Math.max(Math.min(f[0].progress,1),-1),E=0,x=0,T=0;g%4==0?(E=4*-y*o,T=0):(g-1)%4==0?(E=0,T=4*-y*o):(g-2)%4==0?(E=o+4*y*o,T=o):(g-3)%4==0&&(E=-o,T=3*o+4*o*y),l&&(E=-E),u||(x=E,E=0);var C="rotateX("+(u?0:-b)+"deg) rotateY("+(u?b:0)+"deg) translate3d("+E+"px, "+x+"px, "+T+"px)";if(w<=1&&w>-1&&(h=90*g+90*w,l&&(h=90*-g-90*w)),f.transform(C),p.slideShadows){var S=u?f.find(".swiper-slide-shadow-left"):f.find(".swiper-slide-shadow-top"),M=u?f.find(".swiper-slide-shadow-right"):f.find(".swiper-slide-shadow-bottom");0===S.length&&(S=m('<div class="swiper-slide-shadow-'+(u?"left":"top")+'"></div>'),f.append(S)),0===M.length&&(M=m('<div class="swiper-slide-shadow-'+(u?"right":"bottom")+'"></div>'),f.append(M)),S.length&&(S[0].style.opacity=Math.max(-w,0)),M.length&&(M[0].style.opacity=Math.max(w,0))}}if(i.css({"-webkit-transform-origin":"50% 50% -"+o/2+"px","-moz-transform-origin":"50% 50% -"+o/2+"px","-ms-transform-origin":"50% 50% -"+o/2+"px","transform-origin":"50% 50% -"+o/2+"px"}),p.shadow)if(u)e.transform("translate3d(0px, "+(r/2+p.shadowOffset)+"px, "+-r/2+"px) rotateX(90deg) rotateZ(0deg) scale("+p.shadowScale+")");else{var z=Math.abs(h)-90*Math.floor(Math.abs(h)/90),P=1.5-(Math.sin(2*z*Math.PI/360)/2+Math.cos(2*z*Math.PI/360)/2),k=p.shadowScale,$=p.shadowScale/P,L=p.shadowOffset;e.transform("scale3d("+k+", 1, "+$+") translate3d(0px, "+(n/2+L)+"px, "+-n/2/$+"px) rotateX(-90deg)")}var I=d.isSafari||d.isWebView?-o/2:0;i.transform("translate3d(0px,0,"+I+"px) rotateX("+(t.isHorizontal()?0:h)+"deg) rotateY("+(t.isHorizontal()?-h:0)+"deg)")},setTransition:function(e){var t=this,a=t.$el;t.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),t.params.cubeEffect.shadow&&!t.isHorizontal()&&a.find(".swiper-cube-shadow").transition(e)}},ue={setTranslate:function(){for(var e=this,t=e.slides,a=e.rtlTranslate,i=0;i<t.length;i+=1){var s=t.eq(i),r=s[0].progress;e.params.flipEffect.limitRotation&&(r=Math.max(Math.min(s[0].progress,1),-1));var n=-180*r,l=0,o=-s[0].swiperSlideOffset,d=0;if(e.isHorizontal()?a&&(n=-n):(d=o,o=0,l=-n,n=0),s[0].style.zIndex=-Math.abs(Math.round(r))+t.length,e.params.flipEffect.slideShadows){var p=e.isHorizontal()?s.find(".swiper-slide-shadow-left"):s.find(".swiper-slide-shadow-top"),u=e.isHorizontal()?s.find(".swiper-slide-shadow-right"):s.find(".swiper-slide-shadow-bottom");0===p.length&&(p=m('<div class="swiper-slide-shadow-'+(e.isHorizontal()?"left":"top")+'"></div>'),s.append(p)),0===u.length&&(u=m('<div class="swiper-slide-shadow-'+(e.isHorizontal()?"right":"bottom")+'"></div>'),s.append(u)),p.length&&(p[0].style.opacity=Math.max(-r,0)),u.length&&(u[0].style.opacity=Math.max(r,0))}s.transform("translate3d("+o+"px, "+d+"px, 0px) rotateX("+l+"deg) rotateY("+n+"deg)")}},setTransition:function(e){var t=this,a=t.slides,i=t.activeIndex,s=t.$wrapperEl;if(a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),t.params.virtualTranslate&&0!==e){var r=!1;a.eq(i).transitionEnd((function(){if(!r&&t&&!t.destroyed){r=!0,t.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],a=0;a<e.length;a+=1)s.trigger(e[a])}}))}}},ce={setTranslate:function(){for(var e=this,t=e.width,a=e.height,i=e.slides,s=e.slidesSizesGrid,r=e.params.coverflowEffect,n=e.isHorizontal(),l=e.translate,o=n?t/2-l:a/2-l,d=n?r.rotate:-r.rotate,p=r.depth,u=0,c=i.length;u<c;u+=1){var h=i.eq(u),v=s[u],f=(o-h[0].swiperSlideOffset-v/2)/v*r.modifier,g=n?d*f:0,b=n?0:d*f,y=-p*Math.abs(f),w=r.stretch;"string"==typeof w&&-1!==w.indexOf("%")&&(w=parseFloat(r.stretch)/100*v);var E=n?0:w*f,x=n?w*f:0,T=1-(1-r.scale)*Math.abs(f);Math.abs(x)<.001&&(x=0),Math.abs(E)<.001&&(E=0),Math.abs(y)<.001&&(y=0),Math.abs(g)<.001&&(g=0),Math.abs(b)<.001&&(b=0),Math.abs(T)<.001&&(T=0);var C="translate3d("+x+"px,"+E+"px,"+y+"px)  rotateX("+b+"deg) rotateY("+g+"deg) scale("+T+")";if(h.transform(C),h[0].style.zIndex=1-Math.abs(Math.round(f)),r.slideShadows){var S=n?h.find(".swiper-slide-shadow-left"):h.find(".swiper-slide-shadow-top"),M=n?h.find(".swiper-slide-shadow-right"):h.find(".swiper-slide-shadow-bottom");0===S.length&&(S=m('<div class="swiper-slide-shadow-'+(n?"left":"top")+'"></div>'),h.append(S)),0===M.length&&(M=m('<div class="swiper-slide-shadow-'+(n?"right":"bottom")+'"></div>'),h.append(M)),S.length&&(S[0].style.opacity=f>0?f:0),M.length&&(M[0].style.opacity=-f>0?-f:0)}}},setTransition:function(e){this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}},he={init:function(){var e=this,t=e.params.thumbs;if(e.thumbs.initialized)return!1;e.thumbs.initialized=!0;var a=e.constructor;return t.swiper instanceof a?(e.thumbs.swiper=t.swiper,S(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),S(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1})):C(t.swiper)&&(e.thumbs.swiper=new a(S({},t.swiper,{watchSlidesVisibility:!0,watchSlidesProgress:!0,slideToClickedSlide:!1})),e.thumbs.swiperCreated=!0),e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",e.thumbs.onThumbClick),!0},onThumbClick:function(){var e=this,t=e.thumbs.swiper;if(t){var a=t.clickedIndex,i=t.clickedSlide;if(!(i&&m(i).hasClass(e.params.thumbs.slideThumbActiveClass)||null==a)){var s;if(s=t.params.loop?parseInt(m(t.clickedSlide).attr("data-swiper-slide-index"),10):a,e.params.loop){var r=e.activeIndex;e.slides.eq(r).hasClass(e.params.slideDuplicateClass)&&(e.loopFix(),e._clientLeft=e.$wrapperEl[0].clientLeft,r=e.activeIndex);var n=e.slides.eq(r).prevAll('[data-swiper-slide-index="'+s+'"]').eq(0).index(),l=e.slides.eq(r).nextAll('[data-swiper-slide-index="'+s+'"]').eq(0).index();s=void 0===n?l:void 0===l?n:l-r<r-n?l:n}e.slideTo(s)}}},update:function(e){var t=this,a=t.thumbs.swiper;if(a){var i="auto"===a.params.slidesPerView?a.slidesPerViewDynamic():a.params.slidesPerView,s=t.params.thumbs.autoScrollOffset,r=s&&!a.params.loop;if(t.realIndex!==a.realIndex||r){var n,l,o=a.activeIndex;if(a.params.loop){a.slides.eq(o).hasClass(a.params.slideDuplicateClass)&&(a.loopFix(),a._clientLeft=a.$wrapperEl[0].clientLeft,o=a.activeIndex);var d=a.slides.eq(o).prevAll('[data-swiper-slide-index="'+t.realIndex+'"]').eq(0).index(),p=a.slides.eq(o).nextAll('[data-swiper-slide-index="'+t.realIndex+'"]').eq(0).index();n=void 0===d?p:void 0===p?d:p-o==o-d?a.params.slidesPerGroup>1?p:o:p-o<o-d?p:d,l=t.activeIndex>t.previousIndex?"next":"prev"}else l=(n=t.realIndex)>t.previousIndex?"next":"prev";r&&(n+="next"===l?s:-1*s),a.visibleSlidesIndexes&&a.visibleSlidesIndexes.indexOf(n)<0&&(a.params.centeredSlides?n=n>o?n-Math.floor(i/2)+1:n+Math.floor(i/2)-1:n>o&&a.params.slidesPerGroup,a.slideTo(n,e?0:void 0))}var u=1,c=t.params.thumbs.slideThumbActiveClass;if(t.params.slidesPerView>1&&!t.params.centeredSlides&&(u=t.params.slidesPerView),t.params.thumbs.multipleActiveThumbs||(u=1),u=Math.floor(u),a.slides.removeClass(c),a.params.loop||a.params.virtual&&a.params.virtual.enabled)for(var h=0;h<u;h+=1)a.$wrapperEl.children('[data-swiper-slide-index="'+(t.realIndex+h)+'"]').addClass(c);else for(var v=0;v<u;v+=1)a.slides.eq(t.realIndex+v).addClass(c)}}},ve=[j,K,{name:"mousewheel",params:{mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null}},create:function(){M(this,{mousewheel:{enabled:!1,lastScrollTime:x(),lastEventBeforeSnap:void 0,recentWheelEvents:[],enable:Z.enable,disable:Z.disable,handle:Z.handle,handleMouseEnter:Z.handleMouseEnter,handleMouseLeave:Z.handleMouseLeave,animateSlider:Z.animateSlider,releaseScroll:Z.releaseScroll}})},on:{init:function(e){!e.params.mousewheel.enabled&&e.params.cssMode&&e.mousewheel.disable(),e.params.mousewheel.enabled&&e.mousewheel.enable()},destroy:function(e){e.params.cssMode&&e.mousewheel.enable(),e.mousewheel.enabled&&e.mousewheel.disable()}}},{name:"navigation",params:{navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock"}},create:function(){M(this,{navigation:t({},J)})},on:{init:function(e){e.navigation.init(),e.navigation.update()},toEdge:function(e){e.navigation.update()},fromEdge:function(e){e.navigation.update()},destroy:function(e){e.navigation.destroy()},"enable disable":function(e){var t=e.navigation,a=t.$nextEl,i=t.$prevEl;a&&a[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass),i&&i[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass)},click:function(e,t){var a=e.navigation,i=a.$nextEl,s=a.$prevEl,r=t.target;if(e.params.navigation.hideOnClick&&!m(r).is(s)&&!m(r).is(i)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===r||e.pagination.el.contains(r)))return;var n;i?n=i.hasClass(e.params.navigation.hiddenClass):s&&(n=s.hasClass(e.params.navigation.hiddenClass)),!0===n?e.emit("navigationShow"):e.emit("navigationHide"),i&&i.toggleClass(e.params.navigation.hiddenClass),s&&s.toggleClass(e.params.navigation.hiddenClass)}}}},{name:"pagination",params:{pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:function(e){return e},formatFractionTotal:function(e){return e},bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",modifierClass:"swiper-pagination-",currentClass:"swiper-pagination-current",totalClass:"swiper-pagination-total",hiddenClass:"swiper-pagination-hidden",progressbarFillClass:"swiper-pagination-progressbar-fill",progressbarOppositeClass:"swiper-pagination-progressbar-opposite",clickableClass:"swiper-pagination-clickable",lockClass:"swiper-pagination-lock"}},create:function(){M(this,{pagination:t({dynamicBulletIndex:0},Q)})},on:{init:function(e){e.pagination.init(),e.pagination.render(),e.pagination.update()},activeIndexChange:function(e){(e.params.loop||void 0===e.snapIndex)&&e.pagination.update()},snapIndexChange:function(e){e.params.loop||e.pagination.update()},slidesLengthChange:function(e){e.params.loop&&(e.pagination.render(),e.pagination.update())},snapGridLengthChange:function(e){e.params.loop||(e.pagination.render(),e.pagination.update())},destroy:function(e){e.pagination.destroy()},"enable disable":function(e){var t=e.pagination.$el;t&&t[e.enabled?"removeClass":"addClass"](e.params.pagination.lockClass)},click:function(e,t){var a=t.target;if(e.params.pagination.el&&e.params.pagination.hideOnClick&&e.pagination.$el.length>0&&!m(a).hasClass(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&a===e.navigation.nextEl||e.navigation.prevEl&&a===e.navigation.prevEl))return;!0===e.pagination.$el.hasClass(e.params.pagination.hiddenClass)?e.emit("paginationShow"):e.emit("paginationHide"),e.pagination.$el.toggleClass(e.params.pagination.hiddenClass)}}}},{name:"scrollbar",params:{scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag"}},create:function(){M(this,{scrollbar:t({isTouched:!1,timeout:null,dragTimeout:null},ee)})},on:{init:function(e){e.scrollbar.init(),e.scrollbar.updateSize(),e.scrollbar.setTranslate()},update:function(e){e.scrollbar.updateSize()},resize:function(e){e.scrollbar.updateSize()},observerUpdate:function(e){e.scrollbar.updateSize()},setTranslate:function(e){e.scrollbar.setTranslate()},setTransition:function(e,t){e.scrollbar.setTransition(t)},"enable disable":function(e){var t=e.scrollbar.$el;t&&t[e.enabled?"removeClass":"addClass"](e.params.scrollbar.lockClass)},destroy:function(e){e.scrollbar.destroy()}}},{name:"parallax",params:{parallax:{enabled:!1}},create:function(){M(this,{parallax:t({},te)})},on:{beforeInit:function(e){e.params.parallax.enabled&&(e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)},init:function(e){e.params.parallax.enabled&&e.parallax.setTranslate()},setTranslate:function(e){e.params.parallax.enabled&&e.parallax.setTranslate()},setTransition:function(e,t){e.params.parallax.enabled&&e.parallax.setTransition(t)}}},{name:"zoom",params:{zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}},create:function(){var e=this;M(e,{zoom:t({enabled:!1,scale:1,currentScale:1,isScaling:!1,gesture:{$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},image:{isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},velocity:{x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0}},ae)});var a=1;Object.defineProperty(e.zoom,"scale",{get:function(){return a},set:function(t){if(a!==t){var i=e.zoom.gesture.$imageEl?e.zoom.gesture.$imageEl[0]:void 0,s=e.zoom.gesture.$slideEl?e.zoom.gesture.$slideEl[0]:void 0;e.emit("zoomChange",t,i,s)}a=t}})},on:{init:function(e){e.params.zoom.enabled&&e.zoom.enable()},destroy:function(e){e.zoom.disable()},touchStart:function(e,t){e.zoom.enabled&&e.zoom.onTouchStart(t)},touchEnd:function(e,t){e.zoom.enabled&&e.zoom.onTouchEnd(t)},doubleTap:function(e,t){!e.animating&&e.params.zoom.enabled&&e.zoom.enabled&&e.params.zoom.toggle&&e.zoom.toggle(t)},transitionEnd:function(e){e.zoom.enabled&&e.params.zoom.enabled&&e.zoom.onTransitionEnd()},slideChange:function(e){e.zoom.enabled&&e.params.zoom.enabled&&e.params.cssMode&&e.zoom.onTransitionEnd()}}},{name:"lazy",params:{lazy:{checkInView:!1,enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,scrollingElement:"",elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}},create:function(){M(this,{lazy:t({initialImageLoaded:!1},ie)})},on:{beforeInit:function(e){e.params.lazy.enabled&&e.params.preloadImages&&(e.params.preloadImages=!1)},init:function(e){e.params.lazy.enabled&&!e.params.loop&&0===e.params.initialSlide&&(e.params.lazy.checkInView?e.lazy.checkInViewOnLoad():e.lazy.load())},scroll:function(e){e.params.freeMode&&!e.params.freeModeSticky&&e.lazy.load()},"scrollbarDragMove resize _freeModeNoMomentumRelease":function(e){e.params.lazy.enabled&&e.lazy.load()},transitionStart:function(e){e.params.lazy.enabled&&(e.params.lazy.loadOnTransitionStart||!e.params.lazy.loadOnTransitionStart&&!e.lazy.initialImageLoaded)&&e.lazy.load()},transitionEnd:function(e){e.params.lazy.enabled&&!e.params.lazy.loadOnTransitionStart&&e.lazy.load()},slideChange:function(e){e.params.lazy.enabled&&e.params.cssMode&&e.lazy.load()}}},{name:"controller",params:{controller:{control:void 0,inverse:!1,by:"slide"}},create:function(){M(this,{controller:t({control:this.params.controller.control},se)})},on:{update:function(e){e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)},resize:function(e){e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)},observerUpdate:function(e){e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)},setTranslate:function(e,t,a){e.controller.control&&e.controller.setTranslate(t,a)},setTransition:function(e,t,a){e.controller.control&&e.controller.setTransition(t,a)}}},{name:"a11y",params:{a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,itemRoleDescriptionMessage:null,slideRole:"group"}},create:function(){M(this,{a11y:t({},re,{liveRegion:m('<span class="'+this.params.a11y.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>')})})},on:{afterInit:function(e){e.params.a11y.enabled&&(e.a11y.init(),e.a11y.updateNavigation())},toEdge:function(e){e.params.a11y.enabled&&e.a11y.updateNavigation()},fromEdge:function(e){e.params.a11y.enabled&&e.a11y.updateNavigation()},paginationUpdate:function(e){e.params.a11y.enabled&&e.a11y.updatePagination()},destroy:function(e){e.params.a11y.enabled&&e.a11y.destroy()}}},{name:"history",params:{history:{enabled:!1,root:"",replaceState:!1,key:"slides"}},create:function(){M(this,{history:t({},ne)})},on:{init:function(e){e.params.history.enabled&&e.history.init()},destroy:function(e){e.params.history.enabled&&e.history.destroy()},"transitionEnd _freeModeNoMomentumRelease":function(e){e.history.initialized&&e.history.setHistory(e.params.history.key,e.activeIndex)},slideChange:function(e){e.history.initialized&&e.params.cssMode&&e.history.setHistory(e.params.history.key,e.activeIndex)}}},{name:"hash-navigation",params:{hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}},create:function(){M(this,{hashNavigation:t({initialized:!1},le)})},on:{init:function(e){e.params.hashNavigation.enabled&&e.hashNavigation.init()},destroy:function(e){e.params.hashNavigation.enabled&&e.hashNavigation.destroy()},"transitionEnd _freeModeNoMomentumRelease":function(e){e.hashNavigation.initialized&&e.hashNavigation.setHash()},slideChange:function(e){e.hashNavigation.initialized&&e.params.cssMode&&e.hashNavigation.setHash()}}},{name:"autoplay",params:{autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}},create:function(){M(this,{autoplay:t({},oe,{running:!1,paused:!1})})},on:{init:function(e){e.params.autoplay.enabled&&(e.autoplay.start(),r().addEventListener("visibilitychange",e.autoplay.onVisibilityChange),e.autoplay.attachMouseEvents())},beforeTransitionStart:function(e,t,a){e.autoplay.running&&(a||!e.params.autoplay.disableOnInteraction?e.autoplay.pause(t):e.autoplay.stop())},sliderFirstMove:function(e){e.autoplay.running&&(e.params.autoplay.disableOnInteraction?e.autoplay.stop():e.autoplay.pause())},touchEnd:function(e){e.params.cssMode&&e.autoplay.paused&&!e.params.autoplay.disableOnInteraction&&e.autoplay.run()},destroy:function(e){e.autoplay.detachMouseEvents(),e.autoplay.running&&e.autoplay.stop(),r().removeEventListener("visibilitychange",e.autoplay.onVisibilityChange)}}},{name:"effect-fade",params:{fadeEffect:{crossFade:!1}},create:function(){M(this,{fadeEffect:t({},de)})},on:{beforeInit:function(e){if("fade"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"fade");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};S(e.params,t),S(e.originalParams,t)}},setTranslate:function(e){"fade"===e.params.effect&&e.fadeEffect.setTranslate()},setTransition:function(e,t){"fade"===e.params.effect&&e.fadeEffect.setTransition(t)}}},{name:"effect-cube",params:{cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}},create:function(){M(this,{cubeEffect:t({},pe)})},on:{beforeInit:function(e){if("cube"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"cube"),e.classNames.push(e.params.containerModifierClass+"3d");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0};S(e.params,t),S(e.originalParams,t)}},setTranslate:function(e){"cube"===e.params.effect&&e.cubeEffect.setTranslate()},setTransition:function(e,t){"cube"===e.params.effect&&e.cubeEffect.setTransition(t)}}},{name:"effect-flip",params:{flipEffect:{slideShadows:!0,limitRotation:!0}},create:function(){M(this,{flipEffect:t({},ue)})},on:{beforeInit:function(e){if("flip"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"flip"),e.classNames.push(e.params.containerModifierClass+"3d");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};S(e.params,t),S(e.originalParams,t)}},setTranslate:function(e){"flip"===e.params.effect&&e.flipEffect.setTranslate()},setTransition:function(e,t){"flip"===e.params.effect&&e.flipEffect.setTransition(t)}}},{name:"effect-coverflow",params:{coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}},create:function(){M(this,{coverflowEffect:t({},ce)})},on:{beforeInit:function(e){"coverflow"===e.params.effect&&(e.classNames.push(e.params.containerModifierClass+"coverflow"),e.classNames.push(e.params.containerModifierClass+"3d"),e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)},setTranslate:function(e){"coverflow"===e.params.effect&&e.coverflowEffect.setTranslate()},setTransition:function(e,t){"coverflow"===e.params.effect&&e.coverflowEffect.setTransition(t)}}},{name:"thumbs",params:{thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-container-thumbs"}},create:function(){M(this,{thumbs:t({swiper:null,initialized:!1},he)})},on:{beforeInit:function(e){var t=e.params.thumbs;t&&t.swiper&&(e.thumbs.init(),e.thumbs.update(!0))},slideChange:function(e){e.thumbs.swiper&&e.thumbs.update()},update:function(e){e.thumbs.swiper&&e.thumbs.update()},resize:function(e){e.thumbs.swiper&&e.thumbs.update()},observerUpdate:function(e){e.thumbs.swiper&&e.thumbs.update()},setTransition:function(e,t){var a=e.thumbs.swiper;a&&a.setTransition(t)},beforeDestroy:function(e){var t=e.thumbs.swiper;t&&e.thumbs.swiperCreated&&t&&t.destroy()}}}];return _.use(ve),_}));;
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
  for (let i=0;i<sliders.length;i++) {
    let slider = sliders[i];
    if (!slider.classList.contains('swiper-build')) {
      let slider_items = slider.children;
      if (slider_items) {
        for (let i=0;i<slider_items.length;i++) {
          let el = slider_items[i];
          el.classList.add('swiper-slide');
        }
      }
      let slider_content = slider.innerHTML;
      let slider_wrapper = document.createElement('div');
      slider_wrapper.classList.add('swiper-wrapper');
      slider_wrapper.innerHTML = slider_content;
      slider.innerHTML = '';
      slider.appendChild(slider_wrapper);
      slider.classList.add('swiper-biuld');
    }
    if (slider.classList.contains('_gallery')) {
      //slider.data('LightGallery').destroy(true);
    }
  }
  slider_build_callback();
}

function slider_build_callback() {}
const News = new Swiper(".news__swiper-slider", {
  /*
    effect: 'fade',
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
     */
  slidesPerView: "auto",
  spaceBetween: 15,
  // autoHeight: true,
  //  speed: 800,
  //  touchRatio: 0,
  //  simulateTouch: false,
  loop: true,
  loopSlides: 3,
  visibilityFullFit: true,
  //  preLoadImages: false,
  //  lazy: true,
  initialSlide: 1,
  centeredSlides: true,
  
  // pagination
  pagination: {
    el: ".news__swiper-pagination",
    clickable: true,
  },
  //   // Arrows
  // navigation: {
  //   nextEl: ".news__swiper-button-next",
  //   prevEl: ".news__swiper-button-prev",
  // },

  //  on: {
  //    lazyImageReady: function () {
  //      ibg();
  //    },
  //  },
  // And if we need scrollbar
  // scrollbar: {
  // el: '.swiper-scrollbar',
  // }
});

const Experts = new Swiper(".experts__swiper-slider", {
  slidesPerView: 'auto',
  spaceBetween: 30,
  loop: true,
  loopSlides: 3,
  //  preLoadImages: false,
  //  lazy: true,
  initialSlide: 1,
  centeredSlides: true,
  // pagination
  pagination: {
    el: ".experts__swiper-pagination",
    clickable: true,
  },
  //   // Arrows
  //  navigation: {
  //    nextEl: '.experts__swiper-button-next',
  //    prevEl: '.experts__swiper-button-prev',
  //  },

  //  on: {
  //    lazyImageReady: function () {
  //      ibg();
  //    },
  //  },
  // And if we need scrollbar
  // scrollbar: {
  // el: '.swiper-scrollbar',
  // }
  
  breakpoints: {
    1440: {
      spaceBetween: 22,
    },
    
  },
});;
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.IMask = {}));
}(this, (function (exports) { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	var check = function (it) {
	  return it && it.Math == Math && it;
	}; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


	var global$b = // eslint-disable-next-line es/no-global-this -- safe
	check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
	check(typeof self == 'object' && self) || check(typeof commonjsGlobal == 'object' && commonjsGlobal) || // eslint-disable-next-line no-new-func -- fallback
	function () {
	  return this;
	}() || Function('return this')();

	var objectGetOwnPropertyDescriptor = {};

	var fails$5 = function (exec) {
	  try {
	    return !!exec();
	  } catch (error) {
	    return true;
	  }
	};

	var fails$4 = fails$5; // Detect IE8's incomplete defineProperty implementation


	var descriptors = !fails$4(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
	  return Object.defineProperty({}, 1, {
	    get: function () {
	      return 7;
	    }
	  })[1] != 7;
	});

	var objectPropertyIsEnumerable = {};

	var $propertyIsEnumerable = {}.propertyIsEnumerable; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

	var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

	var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable.call({
	  1: 2
	}, 1); // `Object.prototype.propertyIsEnumerable` method implementation
	// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable

	objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
	  var descriptor = getOwnPropertyDescriptor$1(this, V);
	  return !!descriptor && descriptor.enumerable;
	} : $propertyIsEnumerable;

	var createPropertyDescriptor$2 = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var toString = {}.toString;

	var classofRaw = function (it) {
	  return toString.call(it).slice(8, -1);
	};

	var fails$3 = fails$5;

	var classof = classofRaw;

	var split = ''.split; // fallback for non-array-like ES3 and non-enumerable old V8 strings

	var indexedObject = fails$3(function () {
	  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
	  // eslint-disable-next-line no-prototype-builtins -- safe
	  return !Object('z').propertyIsEnumerable(0);
	}) ? function (it) {
	  return classof(it) == 'String' ? split.call(it, '') : Object(it);
	} : Object;

	// `RequireObjectCoercible` abstract operation
	// https://tc39.es/ecma262/#sec-requireobjectcoercible
	var requireObjectCoercible$4 = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on " + it);
	  return it;
	};

	// toObject with fallback for non-array-like ES3 strings
	var IndexedObject$1 = indexedObject;

	var requireObjectCoercible$3 = requireObjectCoercible$4;

	var toIndexedObject$3 = function (it) {
	  return IndexedObject$1(requireObjectCoercible$3(it));
	};

	var isObject$4 = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

	var isObject$3 = isObject$4; // `ToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-toprimitive
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string


	var toPrimitive$2 = function (input, PREFERRED_STRING) {
	  if (!isObject$3(input)) return input;
	  var fn, val;
	  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject$3(val = fn.call(input))) return val;
	  if (typeof (fn = input.valueOf) == 'function' && !isObject$3(val = fn.call(input))) return val;
	  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject$3(val = fn.call(input))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};

	var requireObjectCoercible$2 = requireObjectCoercible$4; // `ToObject` abstract operation
	// https://tc39.es/ecma262/#sec-toobject


	var toObject$2 = function (argument) {
	  return Object(requireObjectCoercible$2(argument));
	};

	var toObject$1 = toObject$2;

	var hasOwnProperty = {}.hasOwnProperty;

	var has$5 = Object.hasOwn || function hasOwn(it, key) {
	  return hasOwnProperty.call(toObject$1(it), key);
	};

	var global$a = global$b;

	var isObject$2 = isObject$4;

	var document$1 = global$a.document; // typeof document.createElement is 'object' in old IE

	var EXISTS = isObject$2(document$1) && isObject$2(document$1.createElement);

	var documentCreateElement = function (it) {
	  return EXISTS ? document$1.createElement(it) : {};
	};

	var DESCRIPTORS$4 = descriptors;

	var fails$2 = fails$5;

	var createElement = documentCreateElement; // Thank's IE8 for his funny defineProperty


	var ie8DomDefine = !DESCRIPTORS$4 && !fails$2(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
	  return Object.defineProperty(createElement('div'), 'a', {
	    get: function () {
	      return 7;
	    }
	  }).a != 7;
	});

	var DESCRIPTORS$3 = descriptors;

	var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;

	var createPropertyDescriptor$1 = createPropertyDescriptor$2;

	var toIndexedObject$2 = toIndexedObject$3;

	var toPrimitive$1 = toPrimitive$2;

	var has$4 = has$5;

	var IE8_DOM_DEFINE$1 = ie8DomDefine; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe


	var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
	// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

	objectGetOwnPropertyDescriptor.f = DESCRIPTORS$3 ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
	  O = toIndexedObject$2(O);
	  P = toPrimitive$1(P, true);
	  if (IE8_DOM_DEFINE$1) try {
	    return $getOwnPropertyDescriptor(O, P);
	  } catch (error) {
	    /* empty */
	  }
	  if (has$4(O, P)) return createPropertyDescriptor$1(!propertyIsEnumerableModule$1.f.call(O, P), O[P]);
	};

	var objectDefineProperty = {};

	var isObject$1 = isObject$4;

	var anObject$2 = function (it) {
	  if (!isObject$1(it)) {
	    throw TypeError(String(it) + ' is not an object');
	  }

	  return it;
	};

	var DESCRIPTORS$2 = descriptors;

	var IE8_DOM_DEFINE = ie8DomDefine;

	var anObject$1 = anObject$2;

	var toPrimitive = toPrimitive$2; // eslint-disable-next-line es/no-object-defineproperty -- safe


	var $defineProperty = Object.defineProperty; // `Object.defineProperty` method
	// https://tc39.es/ecma262/#sec-object.defineproperty

	objectDefineProperty.f = DESCRIPTORS$2 ? $defineProperty : function defineProperty(O, P, Attributes) {
	  anObject$1(O);
	  P = toPrimitive(P, true);
	  anObject$1(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return $defineProperty(O, P, Attributes);
	  } catch (error) {
	    /* empty */
	  }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var DESCRIPTORS$1 = descriptors;

	var definePropertyModule$1 = objectDefineProperty;

	var createPropertyDescriptor = createPropertyDescriptor$2;

	var createNonEnumerableProperty$4 = DESCRIPTORS$1 ? function (object, key, value) {
	  return definePropertyModule$1.f(object, key, createPropertyDescriptor(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var redefine$1 = {exports: {}};

	var global$9 = global$b;

	var createNonEnumerableProperty$3 = createNonEnumerableProperty$4;

	var setGlobal$3 = function (key, value) {
	  try {
	    createNonEnumerableProperty$3(global$9, key, value);
	  } catch (error) {
	    global$9[key] = value;
	  }

	  return value;
	};

	var global$8 = global$b;

	var setGlobal$2 = setGlobal$3;

	var SHARED = '__core-js_shared__';
	var store$3 = global$8[SHARED] || setGlobal$2(SHARED, {});
	var sharedStore = store$3;

	var store$2 = sharedStore;

	var functionToString = Function.toString; // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper

	if (typeof store$2.inspectSource != 'function') {
	  store$2.inspectSource = function (it) {
	    return functionToString.call(it);
	  };
	}

	var inspectSource$2 = store$2.inspectSource;

	var global$7 = global$b;

	var inspectSource$1 = inspectSource$2;

	var WeakMap$1 = global$7.WeakMap;
	var nativeWeakMap = typeof WeakMap$1 === 'function' && /native code/.test(inspectSource$1(WeakMap$1));

	var shared$2 = {exports: {}};

	var store$1 = sharedStore;

	(shared$2.exports = function (key, value) {
	  return store$1[key] || (store$1[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: '3.15.2',
	  mode: 'global',
	  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
	});

	var id = 0;
	var postfix = Math.random();

	var uid$1 = function (key) {
	  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
	};

	var shared$1 = shared$2.exports;

	var uid = uid$1;

	var keys = shared$1('keys');

	var sharedKey$1 = function (key) {
	  return keys[key] || (keys[key] = uid(key));
	};

	var hiddenKeys$3 = {};

	var NATIVE_WEAK_MAP = nativeWeakMap;

	var global$6 = global$b;

	var isObject = isObject$4;

	var createNonEnumerableProperty$2 = createNonEnumerableProperty$4;

	var objectHas = has$5;

	var shared = sharedStore;

	var sharedKey = sharedKey$1;

	var hiddenKeys$2 = hiddenKeys$3;

	var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
	var WeakMap = global$6.WeakMap;
	var set$1, get, has$3;

	var enforce = function (it) {
	  return has$3(it) ? get(it) : set$1(it, {});
	};

	var getterFor = function (TYPE) {
	  return function (it) {
	    var state;

	    if (!isObject(it) || (state = get(it)).type !== TYPE) {
	      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
	    }

	    return state;
	  };
	};

	if (NATIVE_WEAK_MAP || shared.state) {
	  var store = shared.state || (shared.state = new WeakMap());
	  var wmget = store.get;
	  var wmhas = store.has;
	  var wmset = store.set;

	  set$1 = function (it, metadata) {
	    if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
	    metadata.facade = it;
	    wmset.call(store, it, metadata);
	    return metadata;
	  };

	  get = function (it) {
	    return wmget.call(store, it) || {};
	  };

	  has$3 = function (it) {
	    return wmhas.call(store, it);
	  };
	} else {
	  var STATE = sharedKey('state');
	  hiddenKeys$2[STATE] = true;

	  set$1 = function (it, metadata) {
	    if (objectHas(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
	    metadata.facade = it;
	    createNonEnumerableProperty$2(it, STATE, metadata);
	    return metadata;
	  };

	  get = function (it) {
	    return objectHas(it, STATE) ? it[STATE] : {};
	  };

	  has$3 = function (it) {
	    return objectHas(it, STATE);
	  };
	}

	var internalState = {
	  set: set$1,
	  get: get,
	  has: has$3,
	  enforce: enforce,
	  getterFor: getterFor
	};

	var global$5 = global$b;

	var createNonEnumerableProperty$1 = createNonEnumerableProperty$4;

	var has$2 = has$5;

	var setGlobal$1 = setGlobal$3;

	var inspectSource = inspectSource$2;

	var InternalStateModule = internalState;

	var getInternalState = InternalStateModule.get;
	var enforceInternalState = InternalStateModule.enforce;
	var TEMPLATE = String(String).split('String');
	(redefine$1.exports = function (O, key, value, options) {
	  var unsafe = options ? !!options.unsafe : false;
	  var simple = options ? !!options.enumerable : false;
	  var noTargetGet = options ? !!options.noTargetGet : false;
	  var state;

	  if (typeof value == 'function') {
	    if (typeof key == 'string' && !has$2(value, 'name')) {
	      createNonEnumerableProperty$1(value, 'name', key);
	    }

	    state = enforceInternalState(value);

	    if (!state.source) {
	      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
	    }
	  }

	  if (O === global$5) {
	    if (simple) O[key] = value;else setGlobal$1(key, value);
	    return;
	  } else if (!unsafe) {
	    delete O[key];
	  } else if (!noTargetGet && O[key]) {
	    simple = true;
	  }

	  if (simple) O[key] = value;else createNonEnumerableProperty$1(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, 'toString', function toString() {
	  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
	});

	var global$4 = global$b;

	var path$1 = global$4;

	var path = path$1;

	var global$3 = global$b;

	var aFunction = function (variable) {
	  return typeof variable == 'function' ? variable : undefined;
	};

	var getBuiltIn$2 = function (namespace, method) {
	  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global$3[namespace]) : path[namespace] && path[namespace][method] || global$3[namespace] && global$3[namespace][method];
	};

	var objectGetOwnPropertyNames = {};

	var ceil$1 = Math.ceil;
	var floor = Math.floor; // `ToInteger` abstract operation
	// https://tc39.es/ecma262/#sec-tointeger

	var toInteger$3 = function (argument) {
	  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil$1)(argument);
	};

	var toInteger$2 = toInteger$3;

	var min$1 = Math.min; // `ToLength` abstract operation
	// https://tc39.es/ecma262/#sec-tolength

	var toLength$2 = function (argument) {
	  return argument > 0 ? min$1(toInteger$2(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
	};

	var toInteger$1 = toInteger$3;

	var max = Math.max;
	var min = Math.min; // Helper for a popular repeating case of the spec:
	// Let integer be ? ToInteger(index).
	// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

	var toAbsoluteIndex$1 = function (index, length) {
	  var integer = toInteger$1(index);
	  return integer < 0 ? max(integer + length, 0) : min(integer, length);
	};

	var toIndexedObject$1 = toIndexedObject$3;

	var toLength$1 = toLength$2;

	var toAbsoluteIndex = toAbsoluteIndex$1; // `Array.prototype.{ indexOf, includes }` methods implementation


	var createMethod$1 = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIndexedObject$1($this);
	    var length = toLength$1(O.length);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value; // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare -- NaN check

	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++]; // eslint-disable-next-line no-self-compare -- NaN check

	      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
	    } else for (; length > index; index++) {
	      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
	    }
	    return !IS_INCLUDES && -1;
	  };
	};

	var arrayIncludes = {
	  // `Array.prototype.includes` method
	  // https://tc39.es/ecma262/#sec-array.prototype.includes
	  includes: createMethod$1(true),
	  // `Array.prototype.indexOf` method
	  // https://tc39.es/ecma262/#sec-array.prototype.indexof
	  indexOf: createMethod$1(false)
	};

	var has$1 = has$5;

	var toIndexedObject = toIndexedObject$3;

	var indexOf = arrayIncludes.indexOf;

	var hiddenKeys$1 = hiddenKeys$3;

	var objectKeysInternal = function (object, names) {
	  var O = toIndexedObject(object);
	  var i = 0;
	  var result = [];
	  var key;

	  for (key in O) !has$1(hiddenKeys$1, key) && has$1(O, key) && result.push(key); // Don't enum bug & hidden keys


	  while (names.length > i) if (has$1(O, key = names[i++])) {
	    ~indexOf(result, key) || result.push(key);
	  }

	  return result;
	};

	// IE8- don't enum bug keys
	var enumBugKeys$2 = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

	var internalObjectKeys$1 = objectKeysInternal;

	var enumBugKeys$1 = enumBugKeys$2;

	var hiddenKeys = enumBugKeys$1.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
	// https://tc39.es/ecma262/#sec-object.getownpropertynames
	// eslint-disable-next-line es/no-object-getownpropertynames -- safe

	objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return internalObjectKeys$1(O, hiddenKeys);
	};

	var objectGetOwnPropertySymbols = {};

	// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
	objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

	var getBuiltIn$1 = getBuiltIn$2;

	var getOwnPropertyNamesModule = objectGetOwnPropertyNames;

	var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;

	var anObject = anObject$2; // all object keys, includes non-enumerable and symbols


	var ownKeys$1 = getBuiltIn$1('Reflect', 'ownKeys') || function ownKeys(it) {
	  var keys = getOwnPropertyNamesModule.f(anObject(it));
	  var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
	  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
	};

	var has = has$5;

	var ownKeys = ownKeys$1;

	var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;

	var definePropertyModule = objectDefineProperty;

	var copyConstructorProperties$1 = function (target, source) {
	  var keys = ownKeys(source);
	  var defineProperty = definePropertyModule.f;
	  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;

	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
	  }
	};

	var fails$1 = fails$5;

	var replacement = /#|\.prototype\./;

	var isForced$1 = function (feature, detection) {
	  var value = data[normalize(feature)];
	  return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == 'function' ? fails$1(detection) : !!detection;
	};

	var normalize = isForced$1.normalize = function (string) {
	  return String(string).replace(replacement, '.').toLowerCase();
	};

	var data = isForced$1.data = {};
	var NATIVE = isForced$1.NATIVE = 'N';
	var POLYFILL = isForced$1.POLYFILL = 'P';
	var isForced_1 = isForced$1;

	var global$2 = global$b;

	var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;

	var createNonEnumerableProperty = createNonEnumerableProperty$4;

	var redefine = redefine$1.exports;

	var setGlobal = setGlobal$3;

	var copyConstructorProperties = copyConstructorProperties$1;

	var isForced = isForced_1;
	/*
	  options.target      - name of the target object
	  options.global      - target is the global object
	  options.stat        - export as static methods of target
	  options.proto       - export as prototype methods of target
	  options.real        - real prototype method for the `pure` version
	  options.forced      - export even if the native feature is available
	  options.bind        - bind methods to the target, required for the `pure` version
	  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
	  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
	  options.sham        - add a flag to not completely full polyfills
	  options.enumerable  - export as enumerable property
	  options.noTargetGet - prevent calling a getter on target
	*/


	var _export = function (options, source) {
	  var TARGET = options.target;
	  var GLOBAL = options.global;
	  var STATIC = options.stat;
	  var FORCED, target, key, targetProperty, sourceProperty, descriptor;

	  if (GLOBAL) {
	    target = global$2;
	  } else if (STATIC) {
	    target = global$2[TARGET] || setGlobal(TARGET, {});
	  } else {
	    target = (global$2[TARGET] || {}).prototype;
	  }

	  if (target) for (key in source) {
	    sourceProperty = source[key];

	    if (options.noTargetGet) {
	      descriptor = getOwnPropertyDescriptor(target, key);
	      targetProperty = descriptor && descriptor.value;
	    } else targetProperty = target[key];

	    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

	    if (!FORCED && targetProperty !== undefined) {
	      if (typeof sourceProperty === typeof targetProperty) continue;
	      copyConstructorProperties(sourceProperty, targetProperty);
	    } // add a flag to not completely full polyfills


	    if (options.sham || targetProperty && targetProperty.sham) {
	      createNonEnumerableProperty(sourceProperty, 'sham', true);
	    } // extend global


	    redefine(target, key, sourceProperty, options);
	  }
	};

	var internalObjectKeys = objectKeysInternal;

	var enumBugKeys = enumBugKeys$2; // `Object.keys` method
	// https://tc39.es/ecma262/#sec-object.keys
	// eslint-disable-next-line es/no-object-keys -- safe


	var objectKeys$1 = Object.keys || function keys(O) {
	  return internalObjectKeys(O, enumBugKeys);
	};

	var DESCRIPTORS = descriptors;

	var fails = fails$5;

	var objectKeys = objectKeys$1;

	var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;

	var propertyIsEnumerableModule = objectPropertyIsEnumerable;

	var toObject = toObject$2;

	var IndexedObject = indexedObject; // eslint-disable-next-line es/no-object-assign -- safe


	var $assign = Object.assign; // eslint-disable-next-line es/no-object-defineproperty -- required for testing

	var defineProperty = Object.defineProperty; // `Object.assign` method
	// https://tc39.es/ecma262/#sec-object.assign

	var objectAssign = !$assign || fails(function () {
	  // should have correct order of operations (Edge bug)
	  if (DESCRIPTORS && $assign({
	    b: 1
	  }, $assign(defineProperty({}, 'a', {
	    enumerable: true,
	    get: function () {
	      defineProperty(this, 'b', {
	        value: 3,
	        enumerable: false
	      });
	    }
	  }), {
	    b: 2
	  })).b !== 1) return true; // should work with symbols and should have deterministic property order (V8 bug)

	  var A = {};
	  var B = {}; // eslint-disable-next-line es/no-symbol -- safe

	  var symbol = Symbol();
	  var alphabet = 'abcdefghijklmnopqrst';
	  A[symbol] = 7;
	  alphabet.split('').forEach(function (chr) {
	    B[chr] = chr;
	  });
	  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
	}) ? function assign(target, source) {
	  // eslint-disable-line no-unused-vars -- required for `.length`
	  var T = toObject(target);
	  var argumentsLength = arguments.length;
	  var index = 1;
	  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
	  var propertyIsEnumerable = propertyIsEnumerableModule.f;

	  while (argumentsLength > index) {
	    var S = IndexedObject(arguments[index++]);
	    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
	    var length = keys.length;
	    var j = 0;
	    var key;

	    while (length > j) {
	      key = keys[j++];
	      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
	    }
	  }

	  return T;
	} : $assign;

	var $$4 = _export;

	var assign = objectAssign; // `Object.assign` method
	// https://tc39.es/ecma262/#sec-object.assign
	// eslint-disable-next-line es/no-object-assign -- required for testing


	$$4({
	  target: 'Object',
	  stat: true,
	  forced: Object.assign !== assign
	}, {
	  assign: assign
	});

	var toInteger = toInteger$3;

	var requireObjectCoercible$1 = requireObjectCoercible$4; // `String.prototype.repeat` method implementation
	// https://tc39.es/ecma262/#sec-string.prototype.repeat


	var stringRepeat = function repeat(count) {
	  var str = String(requireObjectCoercible$1(this));
	  var result = '';
	  var n = toInteger(count);
	  if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');

	  for (; n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;

	  return result;
	};

	var $$3 = _export;

	var repeat$1 = stringRepeat; // `String.prototype.repeat` method
	// https://tc39.es/ecma262/#sec-string.prototype.repeat


	$$3({
	  target: 'String',
	  proto: true
	}, {
	  repeat: repeat$1
	});

	// https://github.com/tc39/proposal-string-pad-start-end
	var toLength = toLength$2;

	var repeat = stringRepeat;

	var requireObjectCoercible = requireObjectCoercible$4;

	var ceil = Math.ceil; // `String.prototype.{ padStart, padEnd }` methods implementation

	var createMethod = function (IS_END) {
	  return function ($this, maxLength, fillString) {
	    var S = String(requireObjectCoercible($this));
	    var stringLength = S.length;
	    var fillStr = fillString === undefined ? ' ' : String(fillString);
	    var intMaxLength = toLength(maxLength);
	    var fillLen, stringFiller;
	    if (intMaxLength <= stringLength || fillStr == '') return S;
	    fillLen = intMaxLength - stringLength;
	    stringFiller = repeat.call(fillStr, ceil(fillLen / fillStr.length));
	    if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
	    return IS_END ? S + stringFiller : stringFiller + S;
	  };
	};

	var stringPad = {
	  // `String.prototype.padStart` method
	  // https://tc39.es/ecma262/#sec-string.prototype.padstart
	  start: createMethod(false),
	  // `String.prototype.padEnd` method
	  // https://tc39.es/ecma262/#sec-string.prototype.padend
	  end: createMethod(true)
	};

	var getBuiltIn = getBuiltIn$2;

	var engineUserAgent = getBuiltIn('navigator', 'userAgent') || '';

	// https://github.com/zloirock/core-js/issues/280
	var userAgent = engineUserAgent; // eslint-disable-next-line unicorn/no-unsafe-regex -- safe


	var stringPadWebkitBug = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(userAgent);

	var $$2 = _export;

	var $padStart = stringPad.start;

	var WEBKIT_BUG$1 = stringPadWebkitBug; // `String.prototype.padStart` method
	// https://tc39.es/ecma262/#sec-string.prototype.padstart


	$$2({
	  target: 'String',
	  proto: true,
	  forced: WEBKIT_BUG$1
	}, {
	  padStart: function padStart(maxLength
	  /* , fillString = ' ' */
	  ) {
	    return $padStart(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var $$1 = _export;

	var $padEnd = stringPad.end;

	var WEBKIT_BUG = stringPadWebkitBug; // `String.prototype.padEnd` method
	// https://tc39.es/ecma262/#sec-string.prototype.padend


	$$1({
	  target: 'String',
	  proto: true,
	  forced: WEBKIT_BUG
	}, {
	  padEnd: function padEnd(maxLength
	  /* , fillString = ' ' */
	  ) {
	    return $padEnd(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var $ = _export;

	var global$1 = global$b; // `globalThis` object
	// https://tc39.es/ecma262/#sec-globalthis


	$({
	  global: true
	}, {
	  globalThis: global$1
	});

	function _typeof(obj) {
	  "@babel/helpers - typeof";

	  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
	    _typeof = function (obj) {
	      return typeof obj;
	    };
	  } else {
	    _typeof = function (obj) {
	      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	    };
	  }

	  return _typeof(obj);
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}

	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  return Constructor;
	}

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function");
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf(subClass, superClass);
	}

	function _getPrototypeOf(o) {
	  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	    return o.__proto__ || Object.getPrototypeOf(o);
	  };
	  return _getPrototypeOf(o);
	}

	function _setPrototypeOf(o, p) {
	  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };

	  return _setPrototypeOf(o, p);
	}

	function _isNativeReflectConstruct() {
	  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
	  if (Reflect.construct.sham) return false;
	  if (typeof Proxy === "function") return true;

	  try {
	    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
	    return true;
	  } catch (e) {
	    return false;
	  }
	}

	function _objectWithoutPropertiesLoose(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;

	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }

	  return target;
	}

	function _objectWithoutProperties(source, excluded) {
	  if (source == null) return {};

	  var target = _objectWithoutPropertiesLoose(source, excluded);

	  var key, i;

	  if (Object.getOwnPropertySymbols) {
	    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

	    for (i = 0; i < sourceSymbolKeys.length; i++) {
	      key = sourceSymbolKeys[i];
	      if (excluded.indexOf(key) >= 0) continue;
	      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
	      target[key] = source[key];
	    }
	  }

	  return target;
	}

	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	function _possibleConstructorReturn(self, call) {
	  if (call && (typeof call === "object" || typeof call === "function")) {
	    return call;
	  }

	  return _assertThisInitialized(self);
	}

	function _createSuper(Derived) {
	  var hasNativeReflectConstruct = _isNativeReflectConstruct();

	  return function _createSuperInternal() {
	    var Super = _getPrototypeOf(Derived),
	        result;

	    if (hasNativeReflectConstruct) {
	      var NewTarget = _getPrototypeOf(this).constructor;

	      result = Reflect.construct(Super, arguments, NewTarget);
	    } else {
	      result = Super.apply(this, arguments);
	    }

	    return _possibleConstructorReturn(this, result);
	  };
	}

	function _superPropBase(object, property) {
	  while (!Object.prototype.hasOwnProperty.call(object, property)) {
	    object = _getPrototypeOf(object);
	    if (object === null) break;
	  }

	  return object;
	}

	function _get(target, property, receiver) {
	  if (typeof Reflect !== "undefined" && Reflect.get) {
	    _get = Reflect.get;
	  } else {
	    _get = function _get(target, property, receiver) {
	      var base = _superPropBase(target, property);

	      if (!base) return;
	      var desc = Object.getOwnPropertyDescriptor(base, property);

	      if (desc.get) {
	        return desc.get.call(receiver);
	      }

	      return desc.value;
	    };
	  }

	  return _get(target, property, receiver || target);
	}

	function set(target, property, value, receiver) {
	  if (typeof Reflect !== "undefined" && Reflect.set) {
	    set = Reflect.set;
	  } else {
	    set = function set(target, property, value, receiver) {
	      var base = _superPropBase(target, property);

	      var desc;

	      if (base) {
	        desc = Object.getOwnPropertyDescriptor(base, property);

	        if (desc.set) {
	          desc.set.call(receiver, value);
	          return true;
	        } else if (!desc.writable) {
	          return false;
	        }
	      }

	      desc = Object.getOwnPropertyDescriptor(receiver, property);

	      if (desc) {
	        if (!desc.writable) {
	          return false;
	        }

	        desc.value = value;
	        Object.defineProperty(receiver, property, desc);
	      } else {
	        _defineProperty(receiver, property, value);
	      }

	      return true;
	    };
	  }

	  return set(target, property, value, receiver);
	}

	function _set(target, property, value, receiver, isStrict) {
	  var s = set(target, property, value, receiver || target);

	  if (!s && isStrict) {
	    throw new Error('failed to set property');
	  }

	  return value;
	}

	function _slicedToArray(arr, i) {
	  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
	}

	function _arrayWithHoles(arr) {
	  if (Array.isArray(arr)) return arr;
	}

	function _iterableToArrayLimit(arr, i) {
	  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

	  if (_i == null) return;
	  var _arr = [];
	  var _n = true;
	  var _d = false;

	  var _s, _e;

	  try {
	    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
	      _arr.push(_s.value);

	      if (i && _arr.length === i) break;
	    }
	  } catch (err) {
	    _d = true;
	    _e = err;
	  } finally {
	    try {
	      if (!_n && _i["return"] != null) _i["return"]();
	    } finally {
	      if (_d) throw _e;
	    }
	  }

	  return _arr;
	}

	function _unsupportedIterableToArray(o, minLen) {
	  if (!o) return;
	  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
	  var n = Object.prototype.toString.call(o).slice(8, -1);
	  if (n === "Object" && o.constructor) n = o.constructor.name;
	  if (n === "Map" || n === "Set") return Array.from(o);
	  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
	}

	function _arrayLikeToArray(arr, len) {
	  if (len == null || len > arr.length) len = arr.length;

	  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

	  return arr2;
	}

	function _nonIterableRest() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

	/** Checks if value is string */
	function isString(str) {
	  return typeof str === 'string' || str instanceof String;
	}
	/**
	  Direction
	  @prop {string} NONE
	  @prop {string} LEFT
	  @prop {string} FORCE_LEFT
	  @prop {string} RIGHT
	  @prop {string} FORCE_RIGHT
	*/

	var DIRECTION = {
	  NONE: 'NONE',
	  LEFT: 'LEFT',
	  FORCE_LEFT: 'FORCE_LEFT',
	  RIGHT: 'RIGHT',
	  FORCE_RIGHT: 'FORCE_RIGHT'
	};
	/** */

	function forceDirection(direction) {
	  switch (direction) {
	    case DIRECTION.LEFT:
	      return DIRECTION.FORCE_LEFT;

	    case DIRECTION.RIGHT:
	      return DIRECTION.FORCE_RIGHT;

	    default:
	      return direction;
	  }
	}
	/** Escapes regular expression control chars */

	function escapeRegExp(str) {
	  return str.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
	} // cloned from https://github.com/epoberezkin/fast-deep-equal with small changes

	function objectIncludes(b, a) {
	  if (a === b) return true;
	  var arrA = Array.isArray(a),
	      arrB = Array.isArray(b),
	      i;

	  if (arrA && arrB) {
	    if (a.length != b.length) return false;

	    for (i = 0; i < a.length; i++) {
	      if (!objectIncludes(a[i], b[i])) return false;
	    }

	    return true;
	  }

	  if (arrA != arrB) return false;

	  if (a && b && _typeof(a) === 'object' && _typeof(b) === 'object') {
	    var dateA = a instanceof Date,
	        dateB = b instanceof Date;
	    if (dateA && dateB) return a.getTime() == b.getTime();
	    if (dateA != dateB) return false;
	    var regexpA = a instanceof RegExp,
	        regexpB = b instanceof RegExp;
	    if (regexpA && regexpB) return a.toString() == b.toString();
	    if (regexpA != regexpB) return false;
	    var keys = Object.keys(a); // if (keys.length !== Object.keys(b).length) return false;

	    for (i = 0; i < keys.length; i++) {
	      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
	    }

	    for (i = 0; i < keys.length; i++) {
	      if (!objectIncludes(b[keys[i]], a[keys[i]])) return false;
	    }

	    return true;
	  } else if (a && b && typeof a === 'function' && typeof b === 'function') {
	    return a.toString() === b.toString();
	  }

	  return false;
	}
	/** Selection range */

	/** Provides details of changing input */

	var ActionDetails = /*#__PURE__*/function () {
	  /** Current input value */

	  /** Current cursor position */

	  /** Old input value */

	  /** Old selection */
	  function ActionDetails(value, cursorPos, oldValue, oldSelection) {
	    _classCallCheck(this, ActionDetails);

	    this.value = value;
	    this.cursorPos = cursorPos;
	    this.oldValue = oldValue;
	    this.oldSelection = oldSelection; // double check if left part was changed (autofilling, other non-standard input triggers)

	    while (this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos)) {
	      --this.oldSelection.start;
	    }
	  }
	  /**
	    Start changing position
	    @readonly
	  */


	  _createClass(ActionDetails, [{
	    key: "startChangePos",
	    get: function get() {
	      return Math.min(this.cursorPos, this.oldSelection.start);
	    }
	    /**
	      Inserted symbols count
	      @readonly
	    */

	  }, {
	    key: "insertedCount",
	    get: function get() {
	      return this.cursorPos - this.startChangePos;
	    }
	    /**
	      Inserted symbols
	      @readonly
	    */

	  }, {
	    key: "inserted",
	    get: function get() {
	      return this.value.substr(this.startChangePos, this.insertedCount);
	    }
	    /**
	      Removed symbols count
	      @readonly
	    */

	  }, {
	    key: "removedCount",
	    get: function get() {
	      // Math.max for opposite operation
	      return Math.max(this.oldSelection.end - this.startChangePos || // for Delete
	      this.oldValue.length - this.value.length, 0);
	    }
	    /**
	      Removed symbols
	      @readonly
	    */

	  }, {
	    key: "removed",
	    get: function get() {
	      return this.oldValue.substr(this.startChangePos, this.removedCount);
	    }
	    /**
	      Unchanged head symbols
	      @readonly
	    */

	  }, {
	    key: "head",
	    get: function get() {
	      return this.value.substring(0, this.startChangePos);
	    }
	    /**
	      Unchanged tail symbols
	      @readonly
	    */

	  }, {
	    key: "tail",
	    get: function get() {
	      return this.value.substring(this.startChangePos + this.insertedCount);
	    }
	    /**
	      Remove direction
	      @readonly
	    */

	  }, {
	    key: "removeDirection",
	    get: function get() {
	      if (!this.removedCount || this.insertedCount) return DIRECTION.NONE; // align right if delete at right or if range removed (event with backspace)

	      return this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos ? DIRECTION.RIGHT : DIRECTION.LEFT;
	    }
	  }]);

	  return ActionDetails;
	}();

	/**
	  Provides details of changing model value
	  @param {Object} [details]
	  @param {string} [details.inserted] - Inserted symbols
	  @param {boolean} [details.skip] - Can skip chars
	  @param {number} [details.removeCount] - Removed symbols count
	  @param {number} [details.tailShift] - Additional offset if any changes occurred before tail
	*/
	var ChangeDetails = /*#__PURE__*/function () {
	  /** Inserted symbols */

	  /** Can skip chars */

	  /** Additional offset if any changes occurred before tail */

	  /** Raw inserted is used by dynamic mask */
	  function ChangeDetails(details) {
	    _classCallCheck(this, ChangeDetails);

	    Object.assign(this, {
	      inserted: '',
	      rawInserted: '',
	      skip: false,
	      tailShift: 0
	    }, details);
	  }
	  /**
	    Aggregate changes
	    @returns {ChangeDetails} `this`
	  */


	  _createClass(ChangeDetails, [{
	    key: "aggregate",
	    value: function aggregate(details) {
	      this.rawInserted += details.rawInserted;
	      this.skip = this.skip || details.skip;
	      this.inserted += details.inserted;
	      this.tailShift += details.tailShift;
	      return this;
	    }
	    /** Total offset considering all changes */

	  }, {
	    key: "offset",
	    get: function get() {
	      return this.tailShift + this.inserted.length;
	    }
	  }]);

	  return ChangeDetails;
	}();

	/** Provides details of continuous extracted tail */
	var ContinuousTailDetails = /*#__PURE__*/function () {
	  /** Tail value as string */

	  /** Tail start position */

	  /** Start position */
	  function ContinuousTailDetails() {
	    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	    var stop = arguments.length > 2 ? arguments[2] : undefined;

	    _classCallCheck(this, ContinuousTailDetails);

	    this.value = value;
	    this.from = from;
	    this.stop = stop;
	  }

	  _createClass(ContinuousTailDetails, [{
	    key: "toString",
	    value: function toString() {
	      return this.value;
	    }
	  }, {
	    key: "extend",
	    value: function extend(tail) {
	      this.value += String(tail);
	    }
	  }, {
	    key: "appendTo",
	    value: function appendTo(masked) {
	      return masked.append(this.toString(), {
	        tail: true
	      }).aggregate(masked._appendPlaceholder());
	    }
	  }, {
	    key: "state",
	    get: function get() {
	      return {
	        value: this.value,
	        from: this.from,
	        stop: this.stop
	      };
	    },
	    set: function set(state) {
	      Object.assign(this, state);
	    }
	  }, {
	    key: "shiftBefore",
	    value: function shiftBefore(pos) {
	      if (this.from >= pos || !this.value.length) return '';
	      var shiftChar = this.value[0];
	      this.value = this.value.slice(1);
	      return shiftChar;
	    }
	  }]);

	  return ContinuousTailDetails;
	}();

	/**
	 * Applies mask on element.
	 * @constructor
	 * @param {HTMLInputElement|HTMLTextAreaElement|MaskElement} el - Element to apply mask
	 * @param {Object} opts - Custom mask options
	 * @return {InputMask}
	 */
	function IMask(el) {
	  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  // currently available only for input-like elements
	  return new IMask.InputMask(el, opts);
	}

	/** Supported mask type */

	/** Provides common masking stuff */
	var Masked = /*#__PURE__*/function () {
	  // $Shape<MaskedOptions>; TODO after fix https://github.com/facebook/flow/issues/4773

	  /** @type {Mask} */

	  /** */
	  // $FlowFixMe no ideas

	  /** Transforms value before mask processing */

	  /** Validates if value is acceptable */

	  /** Does additional processing in the end of editing */

	  /** Format typed value to string */

	  /** Parse strgin to get typed value */

	  /** Enable characters overwriting */

	  /** */
	  function Masked(opts) {
	    _classCallCheck(this, Masked);

	    this._value = '';

	    this._update(Object.assign({}, Masked.DEFAULTS, opts));

	    this.isInitialized = true;
	  }
	  /** Sets and applies new options */


	  _createClass(Masked, [{
	    key: "updateOptions",
	    value: function updateOptions(opts) {
	      if (!Object.keys(opts).length) return;
	      this.withValueRefresh(this._update.bind(this, opts));
	    }
	    /**
	      Sets new options
	      @protected
	    */

	  }, {
	    key: "_update",
	    value: function _update(opts) {
	      Object.assign(this, opts);
	    }
	    /** Mask state */

	  }, {
	    key: "state",
	    get: function get() {
	      return {
	        _value: this.value
	      };
	    },
	    set: function set(state) {
	      this._value = state._value;
	    }
	    /** Resets value */

	  }, {
	    key: "reset",
	    value: function reset() {
	      this._value = '';
	    }
	    /** */

	  }, {
	    key: "value",
	    get: function get() {
	      return this._value;
	    },
	    set: function set(value) {
	      this.resolve(value);
	    }
	    /** Resolve new value */

	  }, {
	    key: "resolve",
	    value: function resolve(value) {
	      this.reset();
	      this.append(value, {
	        input: true
	      }, '');
	      this.doCommit();
	      return this.value;
	    }
	    /** */

	  }, {
	    key: "unmaskedValue",
	    get: function get() {
	      return this.value;
	    },
	    set: function set(value) {
	      this.reset();
	      this.append(value, {}, '');
	      this.doCommit();
	    }
	    /** */

	  }, {
	    key: "typedValue",
	    get: function get() {
	      return this.doParse(this.value);
	    },
	    set: function set(value) {
	      this.value = this.doFormat(value);
	    }
	    /** Value that includes raw user input */

	  }, {
	    key: "rawInputValue",
	    get: function get() {
	      return this.extractInput(0, this.value.length, {
	        raw: true
	      });
	    },
	    set: function set(value) {
	      this.reset();
	      this.append(value, {
	        raw: true
	      }, '');
	      this.doCommit();
	    }
	    /** */

	  }, {
	    key: "isComplete",
	    get: function get() {
	      return true;
	    }
	    /** Finds nearest input position in direction */

	  }, {
	    key: "nearestInputPos",
	    value: function nearestInputPos(cursorPos, direction) {
	      return cursorPos;
	    }
	    /** Extracts value in range considering flags */

	  }, {
	    key: "extractInput",
	    value: function extractInput() {
	      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
	      return this.value.slice(fromPos, toPos);
	    }
	    /** Extracts tail in range */

	  }, {
	    key: "extractTail",
	    value: function extractTail() {
	      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
	      return new ContinuousTailDetails(this.extractInput(fromPos, toPos), fromPos);
	    }
	    /** Appends tail */
	    // $FlowFixMe no ideas

	  }, {
	    key: "appendTail",
	    value: function appendTail(tail) {
	      if (isString(tail)) tail = new ContinuousTailDetails(String(tail));
	      return tail.appendTo(this);
	    }
	    /** Appends char */

	  }, {
	    key: "_appendCharRaw",
	    value: function _appendCharRaw(ch) {
	      if (!ch) return new ChangeDetails();
	      this._value += ch;
	      return new ChangeDetails({
	        inserted: ch,
	        rawInserted: ch
	      });
	    }
	    /** Appends char */

	  }, {
	    key: "_appendChar",
	    value: function _appendChar(ch) {
	      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      var checkTail = arguments.length > 2 ? arguments[2] : undefined;
	      var consistentState = this.state;

	      var details = this._appendCharRaw(this.doPrepare(ch, flags), flags);

	      if (details.inserted) {
	        var consistentTail;
	        var appended = this.doValidate(flags) !== false;

	        if (appended && checkTail != null) {
	          // validation ok, check tail
	          var beforeTailState = this.state;

	          if (this.overwrite) {
	            consistentTail = checkTail.state;
	            checkTail.shiftBefore(this.value.length);
	          }

	          var tailDetails = this.appendTail(checkTail);
	          appended = tailDetails.rawInserted === checkTail.toString(); // if ok, rollback state after tail

	          if (appended && tailDetails.inserted) this.state = beforeTailState;
	        } // revert all if something went wrong


	        if (!appended) {
	          details = new ChangeDetails();
	          this.state = consistentState;
	          if (checkTail && consistentTail) checkTail.state = consistentTail;
	        }
	      }

	      return details;
	    }
	    /** Appends optional placeholder at end */

	  }, {
	    key: "_appendPlaceholder",
	    value: function _appendPlaceholder() {
	      return new ChangeDetails();
	    }
	    /** Appends symbols considering flags */
	    // $FlowFixMe no ideas

	  }, {
	    key: "append",
	    value: function append(str, flags, tail) {
	      if (!isString(str)) throw new Error('value should be string');
	      var details = new ChangeDetails();
	      var checkTail = isString(tail) ? new ContinuousTailDetails(String(tail)) : tail;
	      if (flags && flags.tail) flags._beforeTailState = this.state;

	      for (var ci = 0; ci < str.length; ++ci) {
	        details.aggregate(this._appendChar(str[ci], flags, checkTail));
	      } // append tail but aggregate only tailShift


	      if (checkTail != null) {
	        details.tailShift += this.appendTail(checkTail).tailShift; // TODO it's a good idea to clear state after appending ends
	        // but it causes bugs when one append calls another (when dynamic dispatch set rawInputValue)
	        // this._resetBeforeTailState();
	      }

	      return details;
	    }
	    /** */

	  }, {
	    key: "remove",
	    value: function remove() {
	      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
	      this._value = this.value.slice(0, fromPos) + this.value.slice(toPos);
	      return new ChangeDetails();
	    }
	    /** Calls function and reapplies current value */

	  }, {
	    key: "withValueRefresh",
	    value: function withValueRefresh(fn) {
	      if (this._refreshing || !this.isInitialized) return fn();
	      this._refreshing = true;
	      var rawInput = this.rawInputValue;
	      var value = this.value;
	      var ret = fn();
	      this.rawInputValue = rawInput; // append lost trailing chars at end

	      if (this.value && this.value !== value && value.indexOf(this.value) === 0) {
	        this.append(value.slice(this.value.length), {}, '');
	      }

	      delete this._refreshing;
	      return ret;
	    }
	    /** */

	  }, {
	    key: "runIsolated",
	    value: function runIsolated(fn) {
	      if (this._isolated || !this.isInitialized) return fn(this);
	      this._isolated = true;
	      var state = this.state;
	      var ret = fn(this);
	      this.state = state;
	      delete this._isolated;
	      return ret;
	    }
	    /**
	      Prepares string before mask processing
	      @protected
	    */

	  }, {
	    key: "doPrepare",
	    value: function doPrepare(str) {
	      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      return this.prepare ? this.prepare(str, this, flags) : str;
	    }
	    /**
	      Validates if value is acceptable
	      @protected
	    */

	  }, {
	    key: "doValidate",
	    value: function doValidate(flags) {
	      return (!this.validate || this.validate(this.value, this, flags)) && (!this.parent || this.parent.doValidate(flags));
	    }
	    /**
	      Does additional processing in the end of editing
	      @protected
	    */

	  }, {
	    key: "doCommit",
	    value: function doCommit() {
	      if (this.commit) this.commit(this.value, this);
	    }
	    /** */

	  }, {
	    key: "doFormat",
	    value: function doFormat(value) {
	      return this.format ? this.format(value, this) : value;
	    }
	    /** */

	  }, {
	    key: "doParse",
	    value: function doParse(str) {
	      return this.parse ? this.parse(str, this) : str;
	    }
	    /** */

	  }, {
	    key: "splice",
	    value: function splice(start, deleteCount, inserted, removeDirection) {
	      var tailPos = start + deleteCount;
	      var tail = this.extractTail(tailPos);
	      var startChangePos = this.nearestInputPos(start, removeDirection);
	      var changeDetails = new ChangeDetails({
	        tailShift: startChangePos - start // adjust tailShift if start was aligned

	      }).aggregate(this.remove(startChangePos)).aggregate(this.append(inserted, {
	        input: true
	      }, tail));
	      return changeDetails;
	    }
	  }]);

	  return Masked;
	}();
	Masked.DEFAULTS = {
	  format: function format(v) {
	    return v;
	  },
	  parse: function parse(v) {
	    return v;
	  }
	};
	IMask.Masked = Masked;

	/** Get Masked class by mask type */

	function maskedClass(mask) {
	  if (mask == null) {
	    throw new Error('mask property should be defined');
	  } // $FlowFixMe


	  if (mask instanceof RegExp) return IMask.MaskedRegExp; // $FlowFixMe

	  if (isString(mask)) return IMask.MaskedPattern; // $FlowFixMe

	  if (mask instanceof Date || mask === Date) return IMask.MaskedDate; // $FlowFixMe

	  if (mask instanceof Number || typeof mask === 'number' || mask === Number) return IMask.MaskedNumber; // $FlowFixMe

	  if (Array.isArray(mask) || mask === Array) return IMask.MaskedDynamic; // $FlowFixMe

	  if (IMask.Masked && mask.prototype instanceof IMask.Masked) return mask; // $FlowFixMe

	  if (mask instanceof Function) return IMask.MaskedFunction; // $FlowFixMe

	  if (mask instanceof IMask.Masked) return mask.constructor;
	  console.warn('Mask not found for mask', mask); // eslint-disable-line no-console
	  // $FlowFixMe

	  return IMask.Masked;
	}
	/** Creates new {@link Masked} depending on mask type */

	function createMask(opts) {
	  // $FlowFixMe
	  if (IMask.Masked && opts instanceof IMask.Masked) return opts;
	  opts = Object.assign({}, opts);
	  var mask = opts.mask; // $FlowFixMe

	  if (IMask.Masked && mask instanceof IMask.Masked) return mask;
	  var MaskedClass = maskedClass(mask);
	  if (!MaskedClass) throw new Error('Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.');
	  return new MaskedClass(opts);
	}
	IMask.createMask = createMask;

	var _excluded$4 = ["mask"];
	var DEFAULT_INPUT_DEFINITIONS = {
	  '0': /\d/,
	  'a': /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
	  // http://stackoverflow.com/a/22075070
	  '*': /./
	};
	/** */

	var PatternInputDefinition = /*#__PURE__*/function () {
	  /** */

	  /** */

	  /** */

	  /** */

	  /** */

	  /** */
	  function PatternInputDefinition(opts) {
	    _classCallCheck(this, PatternInputDefinition);

	    var mask = opts.mask,
	        blockOpts = _objectWithoutProperties(opts, _excluded$4);

	    this.masked = createMask({
	      mask: mask
	    });
	    Object.assign(this, blockOpts);
	  }

	  _createClass(PatternInputDefinition, [{
	    key: "reset",
	    value: function reset() {
	      this._isFilled = false;
	      this.masked.reset();
	    }
	  }, {
	    key: "remove",
	    value: function remove() {
	      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

	      if (fromPos === 0 && toPos >= 1) {
	        this._isFilled = false;
	        return this.masked.remove(fromPos, toPos);
	      }

	      return new ChangeDetails();
	    }
	  }, {
	    key: "value",
	    get: function get() {
	      return this.masked.value || (this._isFilled && !this.isOptional ? this.placeholderChar : '');
	    }
	  }, {
	    key: "unmaskedValue",
	    get: function get() {
	      return this.masked.unmaskedValue;
	    }
	  }, {
	    key: "isComplete",
	    get: function get() {
	      return Boolean(this.masked.value) || this.isOptional;
	    }
	  }, {
	    key: "_appendChar",
	    value: function _appendChar(str) {
	      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      if (this._isFilled) return new ChangeDetails();
	      var state = this.masked.state; // simulate input

	      var details = this.masked._appendChar(str, flags);

	      if (details.inserted && this.doValidate(flags) === false) {
	        details.inserted = details.rawInserted = '';
	        this.masked.state = state;
	      }

	      if (!details.inserted && !this.isOptional && !this.lazy && !flags.input) {
	        details.inserted = this.placeholderChar;
	      }

	      details.skip = !details.inserted && !this.isOptional;
	      this._isFilled = Boolean(details.inserted);
	      return details;
	    }
	  }, {
	    key: "append",
	    value: function append() {
	      var _this$masked;

	      return (_this$masked = this.masked).append.apply(_this$masked, arguments);
	    }
	  }, {
	    key: "_appendPlaceholder",
	    value: function _appendPlaceholder() {
	      var details = new ChangeDetails();
	      if (this._isFilled || this.isOptional) return details;
	      this._isFilled = true;
	      details.inserted = this.placeholderChar;
	      return details;
	    }
	  }, {
	    key: "extractTail",
	    value: function extractTail() {
	      var _this$masked2;

	      return (_this$masked2 = this.masked).extractTail.apply(_this$masked2, arguments);
	    }
	  }, {
	    key: "appendTail",
	    value: function appendTail() {
	      var _this$masked3;

	      return (_this$masked3 = this.masked).appendTail.apply(_this$masked3, arguments);
	    }
	  }, {
	    key: "extractInput",
	    value: function extractInput() {
	      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
	      var flags = arguments.length > 2 ? arguments[2] : undefined;
	      return this.masked.extractInput(fromPos, toPos, flags);
	    }
	  }, {
	    key: "nearestInputPos",
	    value: function nearestInputPos(cursorPos) {
	      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE;
	      var minPos = 0;
	      var maxPos = this.value.length;
	      var boundPos = Math.min(Math.max(cursorPos, minPos), maxPos);

	      switch (direction) {
	        case DIRECTION.LEFT:
	        case DIRECTION.FORCE_LEFT:
	          return this.isComplete ? boundPos : minPos;

	        case DIRECTION.RIGHT:
	        case DIRECTION.FORCE_RIGHT:
	          return this.isComplete ? boundPos : maxPos;

	        case DIRECTION.NONE:
	        default:
	          return boundPos;
	      }
	    }
	  }, {
	    key: "doValidate",
	    value: function doValidate() {
	      var _this$masked4, _this$parent;

	      return (_this$masked4 = this.masked).doValidate.apply(_this$masked4, arguments) && (!this.parent || (_this$parent = this.parent).doValidate.apply(_this$parent, arguments));
	    }
	  }, {
	    key: "doCommit",
	    value: function doCommit() {
	      this.masked.doCommit();
	    }
	  }, {
	    key: "state",
	    get: function get() {
	      return {
	        masked: this.masked.state,
	        _isFilled: this._isFilled
	      };
	    },
	    set: function set(state) {
	      this.masked.state = state.masked;
	      this._isFilled = state._isFilled;
	    }
	  }]);

	  return PatternInputDefinition;
	}();

	var PatternFixedDefinition = /*#__PURE__*/function () {
	  /** */

	  /** */

	  /** */

	  /** */
	  function PatternFixedDefinition(opts) {
	    _classCallCheck(this, PatternFixedDefinition);

	    Object.assign(this, opts);
	    this._value = '';
	  }

	  _createClass(PatternFixedDefinition, [{
	    key: "value",
	    get: function get() {
	      return this._value;
	    }
	  }, {
	    key: "unmaskedValue",
	    get: function get() {
	      return this.isUnmasking ? this.value : '';
	    }
	  }, {
	    key: "reset",
	    value: function reset() {
	      this._isRawInput = false;
	      this._value = '';
	    }
	  }, {
	    key: "remove",
	    value: function remove() {
	      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
	      this._value = this._value.slice(0, fromPos) + this._value.slice(toPos);
	      if (!this._value) this._isRawInput = false;
	      return new ChangeDetails();
	    }
	  }, {
	    key: "nearestInputPos",
	    value: function nearestInputPos(cursorPos) {
	      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE;
	      var minPos = 0;
	      var maxPos = this._value.length;

	      switch (direction) {
	        case DIRECTION.LEFT:
	        case DIRECTION.FORCE_LEFT:
	          return minPos;

	        case DIRECTION.NONE:
	        case DIRECTION.RIGHT:
	        case DIRECTION.FORCE_RIGHT:
	        default:
	          return maxPos;
	      }
	    }
	  }, {
	    key: "extractInput",
	    value: function extractInput() {
	      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
	      var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	      return flags.raw && this._isRawInput && this._value.slice(fromPos, toPos) || '';
	    }
	  }, {
	    key: "isComplete",
	    get: function get() {
	      return true;
	    }
	  }, {
	    key: "_appendChar",
	    value: function _appendChar(str) {
	      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      var details = new ChangeDetails();
	      if (this._value) return details;
	      var appended = this.char === str[0];
	      var isResolved = appended && (this.isUnmasking || flags.input || flags.raw) && !flags.tail;
	      if (isResolved) details.rawInserted = this.char;
	      this._value = details.inserted = this.char;
	      this._isRawInput = isResolved && (flags.raw || flags.input);
	      return details;
	    }
	  }, {
	    key: "_appendPlaceholder",
	    value: function _appendPlaceholder() {
	      var details = new ChangeDetails();
	      if (this._value) return details;
	      this._value = details.inserted = this.char;
	      return details;
	    }
	  }, {
	    key: "extractTail",
	    value: function extractTail() {
	      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
	      return new ContinuousTailDetails('');
	    } // $FlowFixMe no ideas

	  }, {
	    key: "appendTail",
	    value: function appendTail(tail) {
	      if (isString(tail)) tail = new ContinuousTailDetails(String(tail));
	      return tail.appendTo(this);
	    }
	  }, {
	    key: "append",
	    value: function append(str, flags, tail) {
	      var details = this._appendChar(str, flags);

	      if (tail != null) {
	        details.tailShift += this.appendTail(tail).tailShift;
	      }

	      return details;
	    }
	  }, {
	    key: "doCommit",
	    value: function doCommit() {}
	  }, {
	    key: "state",
	    get: function get() {
	      return {
	        _value: this._value,
	        _isRawInput: this._isRawInput
	      };
	    },
	    set: function set(state) {
	      Object.assign(this, state);
	    }
	  }]);

	  return PatternFixedDefinition;
	}();

	var _excluded$3 = ["chunks"];

	var ChunksTailDetails = /*#__PURE__*/function () {
	  /** */
	  function ChunksTailDetails() {
	    var chunks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

	    _classCallCheck(this, ChunksTailDetails);

	    this.chunks = chunks;
	    this.from = from;
	  }

	  _createClass(ChunksTailDetails, [{
	    key: "toString",
	    value: function toString() {
	      return this.chunks.map(String).join('');
	    } // $FlowFixMe no ideas

	  }, {
	    key: "extend",
	    value: function extend(tailChunk) {
	      if (!String(tailChunk)) return;
	      if (isString(tailChunk)) tailChunk = new ContinuousTailDetails(String(tailChunk));
	      var lastChunk = this.chunks[this.chunks.length - 1];
	      var extendLast = lastChunk && ( // if stops are same or tail has no stop
	      lastChunk.stop === tailChunk.stop || tailChunk.stop == null) && // if tail chunk goes just after last chunk
	      tailChunk.from === lastChunk.from + lastChunk.toString().length;

	      if (tailChunk instanceof ContinuousTailDetails) {
	        // check the ability to extend previous chunk
	        if (extendLast) {
	          // extend previous chunk
	          lastChunk.extend(tailChunk.toString());
	        } else {
	          // append new chunk
	          this.chunks.push(tailChunk);
	        }
	      } else if (tailChunk instanceof ChunksTailDetails) {
	        if (tailChunk.stop == null) {
	          // unwrap floating chunks to parent, keeping `from` pos
	          var firstTailChunk;

	          while (tailChunk.chunks.length && tailChunk.chunks[0].stop == null) {
	            firstTailChunk = tailChunk.chunks.shift();
	            firstTailChunk.from += tailChunk.from;
	            this.extend(firstTailChunk);
	          }
	        } // if tail chunk still has value


	        if (tailChunk.toString()) {
	          // if chunks contains stops, then popup stop to container
	          tailChunk.stop = tailChunk.blockIndex;
	          this.chunks.push(tailChunk);
	        }
	      }
	    }
	  }, {
	    key: "appendTo",
	    value: function appendTo(masked) {
	      // $FlowFixMe
	      if (!(masked instanceof IMask.MaskedPattern)) {
	        var tail = new ContinuousTailDetails(this.toString());
	        return tail.appendTo(masked);
	      }

	      var details = new ChangeDetails();

	      for (var ci = 0; ci < this.chunks.length && !details.skip; ++ci) {
	        var chunk = this.chunks[ci];

	        var lastBlockIter = masked._mapPosToBlock(masked.value.length);

	        var stop = chunk.stop;
	        var chunkBlock = void 0;

	        if (stop != null && ( // if block not found or stop is behind lastBlock
	        !lastBlockIter || lastBlockIter.index <= stop)) {
	          if (chunk instanceof ChunksTailDetails || // for continuous block also check if stop is exist
	          masked._stops.indexOf(stop) >= 0) {
	            details.aggregate(masked._appendPlaceholder(stop));
	          }

	          chunkBlock = chunk instanceof ChunksTailDetails && masked._blocks[stop];
	        }

	        if (chunkBlock) {
	          var tailDetails = chunkBlock.appendTail(chunk);
	          tailDetails.skip = false; // always ignore skip, it will be set on last

	          details.aggregate(tailDetails);
	          masked._value += tailDetails.inserted; // get not inserted chars

	          var remainChars = chunk.toString().slice(tailDetails.rawInserted.length);
	          if (remainChars) details.aggregate(masked.append(remainChars, {
	            tail: true
	          }));
	        } else {
	          details.aggregate(masked.append(chunk.toString(), {
	            tail: true
	          }));
	        }
	      }
	      return details;
	    }
	  }, {
	    key: "state",
	    get: function get() {
	      return {
	        chunks: this.chunks.map(function (c) {
	          return c.state;
	        }),
	        from: this.from,
	        stop: this.stop,
	        blockIndex: this.blockIndex
	      };
	    },
	    set: function set(state) {
	      var chunks = state.chunks,
	          props = _objectWithoutProperties(state, _excluded$3);

	      Object.assign(this, props);
	      this.chunks = chunks.map(function (cstate) {
	        var chunk = "chunks" in cstate ? new ChunksTailDetails() : new ContinuousTailDetails(); // $FlowFixMe already checked above

	        chunk.state = cstate;
	        return chunk;
	      });
	    }
	  }, {
	    key: "shiftBefore",
	    value: function shiftBefore(pos) {
	      if (this.from >= pos || !this.chunks.length) return '';
	      var chunkShiftPos = pos - this.from;
	      var ci = 0;

	      while (ci < this.chunks.length) {
	        var chunk = this.chunks[ci];
	        var shiftChar = chunk.shiftBefore(chunkShiftPos);

	        if (chunk.toString()) {
	          // chunk still contains value
	          // but not shifted - means no more available chars to shift
	          if (!shiftChar) break;
	          ++ci;
	        } else {
	          // clean if chunk has no value
	          this.chunks.splice(ci, 1);
	        }

	        if (shiftChar) return shiftChar;
	      }

	      return '';
	    }
	  }]);

	  return ChunksTailDetails;
	}();

	/** Masking by RegExp */

	var MaskedRegExp = /*#__PURE__*/function (_Masked) {
	  _inherits(MaskedRegExp, _Masked);

	  var _super = _createSuper(MaskedRegExp);

	  function MaskedRegExp() {
	    _classCallCheck(this, MaskedRegExp);

	    return _super.apply(this, arguments);
	  }

	  _createClass(MaskedRegExp, [{
	    key: "_update",
	    value:
	    /**
	      @override
	      @param {Object} opts
	    */
	    function _update(opts) {
	      if (opts.mask) opts.validate = function (value) {
	        return value.search(opts.mask) >= 0;
	      };

	      _get(_getPrototypeOf(MaskedRegExp.prototype), "_update", this).call(this, opts);
	    }
	  }]);

	  return MaskedRegExp;
	}(Masked);
	IMask.MaskedRegExp = MaskedRegExp;

	var _excluded$2 = ["_blocks"];

	/**
	  Pattern mask
	  @param {Object} opts
	  @param {Object} opts.blocks
	  @param {Object} opts.definitions
	  @param {string} opts.placeholderChar
	  @param {boolean} opts.lazy
	*/
	var MaskedPattern = /*#__PURE__*/function (_Masked) {
	  _inherits(MaskedPattern, _Masked);

	  var _super = _createSuper(MaskedPattern);

	  /** */

	  /** */

	  /** Single char for empty input */

	  /** Show placeholder only when needed */
	  function MaskedPattern() {
	    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    _classCallCheck(this, MaskedPattern);

	    // TODO type $Shape<MaskedPatternOptions>={} does not work
	    opts.definitions = Object.assign({}, DEFAULT_INPUT_DEFINITIONS, opts.definitions);
	    return _super.call(this, Object.assign({}, MaskedPattern.DEFAULTS, opts));
	  }
	  /**
	    @override
	    @param {Object} opts
	  */


	  _createClass(MaskedPattern, [{
	    key: "_update",
	    value: function _update() {
	      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	      opts.definitions = Object.assign({}, this.definitions, opts.definitions);

	      _get(_getPrototypeOf(MaskedPattern.prototype), "_update", this).call(this, opts);

	      this._rebuildMask();
	    }
	    /** */

	  }, {
	    key: "_rebuildMask",
	    value: function _rebuildMask() {
	      var _this = this;

	      var defs = this.definitions;
	      this._blocks = [];
	      this._stops = [];
	      this._maskedBlocks = {};
	      var pattern = this.mask;
	      if (!pattern || !defs) return;
	      var unmaskingBlock = false;
	      var optionalBlock = false;

	      for (var i = 0; i < pattern.length; ++i) {
	        if (this.blocks) {
	          var _ret = function () {
	            var p = pattern.slice(i);
	            var bNames = Object.keys(_this.blocks).filter(function (bName) {
	              return p.indexOf(bName) === 0;
	            }); // order by key length

	            bNames.sort(function (a, b) {
	              return b.length - a.length;
	            }); // use block name with max length

	            var bName = bNames[0];

	            if (bName) {
	              // $FlowFixMe no ideas
	              var maskedBlock = createMask(Object.assign({
	                parent: _this,
	                lazy: _this.lazy,
	                placeholderChar: _this.placeholderChar,
	                overwrite: _this.overwrite
	              }, _this.blocks[bName]));

	              if (maskedBlock) {
	                _this._blocks.push(maskedBlock); // store block index


	                if (!_this._maskedBlocks[bName]) _this._maskedBlocks[bName] = [];

	                _this._maskedBlocks[bName].push(_this._blocks.length - 1);
	              }

	              i += bName.length - 1;
	              return "continue";
	            }
	          }();

	          if (_ret === "continue") continue;
	        }

	        var char = pattern[i];

	        var _isInput = (char in defs);

	        if (char === MaskedPattern.STOP_CHAR) {
	          this._stops.push(this._blocks.length);

	          continue;
	        }

	        if (char === '{' || char === '}') {
	          unmaskingBlock = !unmaskingBlock;
	          continue;
	        }

	        if (char === '[' || char === ']') {
	          optionalBlock = !optionalBlock;
	          continue;
	        }

	        if (char === MaskedPattern.ESCAPE_CHAR) {
	          ++i;
	          char = pattern[i];
	          if (!char) break;
	          _isInput = false;
	        }

	        var def = _isInput ? new PatternInputDefinition({
	          parent: this,
	          lazy: this.lazy,
	          placeholderChar: this.placeholderChar,
	          mask: defs[char],
	          isOptional: optionalBlock
	        }) : new PatternFixedDefinition({
	          char: char,
	          isUnmasking: unmaskingBlock
	        });

	        this._blocks.push(def);
	      }
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "state",
	    get: function get() {
	      return Object.assign({}, _get(_getPrototypeOf(MaskedPattern.prototype), "state", this), {
	        _blocks: this._blocks.map(function (b) {
	          return b.state;
	        })
	      });
	    },
	    set: function set(state) {
	      var _blocks = state._blocks,
	          maskedState = _objectWithoutProperties(state, _excluded$2);

	      this._blocks.forEach(function (b, bi) {
	        return b.state = _blocks[bi];
	      });

	      _set(_getPrototypeOf(MaskedPattern.prototype), "state", maskedState, this, true);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "reset",
	    value: function reset() {
	      _get(_getPrototypeOf(MaskedPattern.prototype), "reset", this).call(this);

	      this._blocks.forEach(function (b) {
	        return b.reset();
	      });
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "isComplete",
	    get: function get() {
	      return this._blocks.every(function (b) {
	        return b.isComplete;
	      });
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "doCommit",
	    value: function doCommit() {
	      this._blocks.forEach(function (b) {
	        return b.doCommit();
	      });

	      _get(_getPrototypeOf(MaskedPattern.prototype), "doCommit", this).call(this);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "unmaskedValue",
	    get: function get() {
	      return this._blocks.reduce(function (str, b) {
	        return str += b.unmaskedValue;
	      }, '');
	    },
	    set: function set(unmaskedValue) {
	      _set(_getPrototypeOf(MaskedPattern.prototype), "unmaskedValue", unmaskedValue, this, true);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "value",
	    get: function get() {
	      // TODO return _value when not in change?
	      return this._blocks.reduce(function (str, b) {
	        return str += b.value;
	      }, '');
	    },
	    set: function set(value) {
	      _set(_getPrototypeOf(MaskedPattern.prototype), "value", value, this, true);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "appendTail",
	    value: function appendTail(tail) {
	      return _get(_getPrototypeOf(MaskedPattern.prototype), "appendTail", this).call(this, tail).aggregate(this._appendPlaceholder());
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "_appendCharRaw",
	    value: function _appendCharRaw(ch) {
	      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      var blockIter = this._mapPosToBlock(this.value.length);

	      var details = new ChangeDetails();
	      if (!blockIter) return details;

	      for (var bi = blockIter.index;; ++bi) {
	        var _block = this._blocks[bi];
	        if (!_block) break;

	        var blockDetails = _block._appendChar(ch, flags);

	        var skip = blockDetails.skip;
	        details.aggregate(blockDetails);
	        if (skip || blockDetails.rawInserted) break; // go next char
	      }

	      return details;
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "extractTail",
	    value: function extractTail() {
	      var _this2 = this;

	      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
	      var chunkTail = new ChunksTailDetails();
	      if (fromPos === toPos) return chunkTail;

	      this._forEachBlocksInRange(fromPos, toPos, function (b, bi, bFromPos, bToPos) {
	        var blockChunk = b.extractTail(bFromPos, bToPos);
	        blockChunk.stop = _this2._findStopBefore(bi);
	        blockChunk.from = _this2._blockStartPos(bi);
	        if (blockChunk instanceof ChunksTailDetails) blockChunk.blockIndex = bi;
	        chunkTail.extend(blockChunk);
	      });

	      return chunkTail;
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "extractInput",
	    value: function extractInput() {
	      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
	      var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	      if (fromPos === toPos) return '';
	      var input = '';

	      this._forEachBlocksInRange(fromPos, toPos, function (b, _, fromPos, toPos) {
	        input += b.extractInput(fromPos, toPos, flags);
	      });

	      return input;
	    }
	  }, {
	    key: "_findStopBefore",
	    value: function _findStopBefore(blockIndex) {
	      var stopBefore;

	      for (var si = 0; si < this._stops.length; ++si) {
	        var stop = this._stops[si];
	        if (stop <= blockIndex) stopBefore = stop;else break;
	      }

	      return stopBefore;
	    }
	    /** Appends placeholder depending on laziness */

	  }, {
	    key: "_appendPlaceholder",
	    value: function _appendPlaceholder(toBlockIndex) {
	      var _this3 = this;

	      var details = new ChangeDetails();
	      if (this.lazy && toBlockIndex == null) return details;

	      var startBlockIter = this._mapPosToBlock(this.value.length);

	      if (!startBlockIter) return details;
	      var startBlockIndex = startBlockIter.index;
	      var endBlockIndex = toBlockIndex != null ? toBlockIndex : this._blocks.length;

	      this._blocks.slice(startBlockIndex, endBlockIndex).forEach(function (b) {
	        if (!b.lazy || toBlockIndex != null) {
	          // $FlowFixMe `_blocks` may not be present
	          var args = b._blocks != null ? [b._blocks.length] : [];

	          var bDetails = b._appendPlaceholder.apply(b, args);

	          _this3._value += bDetails.inserted;
	          details.aggregate(bDetails);
	        }
	      });

	      return details;
	    }
	    /** Finds block in pos */

	  }, {
	    key: "_mapPosToBlock",
	    value: function _mapPosToBlock(pos) {
	      var accVal = '';

	      for (var bi = 0; bi < this._blocks.length; ++bi) {
	        var _block2 = this._blocks[bi];
	        var blockStartPos = accVal.length;
	        accVal += _block2.value;

	        if (pos <= accVal.length) {
	          return {
	            index: bi,
	            offset: pos - blockStartPos
	          };
	        }
	      }
	    }
	    /** */

	  }, {
	    key: "_blockStartPos",
	    value: function _blockStartPos(blockIndex) {
	      return this._blocks.slice(0, blockIndex).reduce(function (pos, b) {
	        return pos += b.value.length;
	      }, 0);
	    }
	    /** */

	  }, {
	    key: "_forEachBlocksInRange",
	    value: function _forEachBlocksInRange(fromPos) {
	      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
	      var fn = arguments.length > 2 ? arguments[2] : undefined;

	      var fromBlockIter = this._mapPosToBlock(fromPos);

	      if (fromBlockIter) {
	        var toBlockIter = this._mapPosToBlock(toPos); // process first block


	        var isSameBlock = toBlockIter && fromBlockIter.index === toBlockIter.index;
	        var fromBlockStartPos = fromBlockIter.offset;
	        var fromBlockEndPos = toBlockIter && isSameBlock ? toBlockIter.offset : this._blocks[fromBlockIter.index].value.length;
	        fn(this._blocks[fromBlockIter.index], fromBlockIter.index, fromBlockStartPos, fromBlockEndPos);

	        if (toBlockIter && !isSameBlock) {
	          // process intermediate blocks
	          for (var bi = fromBlockIter.index + 1; bi < toBlockIter.index; ++bi) {
	            fn(this._blocks[bi], bi, 0, this._blocks[bi].value.length);
	          } // process last block


	          fn(this._blocks[toBlockIter.index], toBlockIter.index, 0, toBlockIter.offset);
	        }
	      }
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "remove",
	    value: function remove() {
	      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

	      var removeDetails = _get(_getPrototypeOf(MaskedPattern.prototype), "remove", this).call(this, fromPos, toPos);

	      this._forEachBlocksInRange(fromPos, toPos, function (b, _, bFromPos, bToPos) {
	        removeDetails.aggregate(b.remove(bFromPos, bToPos));
	      });

	      return removeDetails;
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "nearestInputPos",
	    value: function nearestInputPos(cursorPos) {
	      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE;
	      // TODO refactor - extract alignblock
	      var beginBlockData = this._mapPosToBlock(cursorPos) || {
	        index: 0,
	        offset: 0
	      };
	      var beginBlockOffset = beginBlockData.offset,
	          beginBlockIndex = beginBlockData.index;
	      var beginBlock = this._blocks[beginBlockIndex];
	      if (!beginBlock) return cursorPos;
	      var beginBlockCursorPos = beginBlockOffset; // if position inside block - try to adjust it

	      if (beginBlockCursorPos !== 0 && beginBlockCursorPos < beginBlock.value.length) {
	        beginBlockCursorPos = beginBlock.nearestInputPos(beginBlockOffset, forceDirection(direction));
	      }

	      var cursorAtRight = beginBlockCursorPos === beginBlock.value.length;
	      var cursorAtLeft = beginBlockCursorPos === 0; //  cursor is INSIDE first block (not at bounds)

	      if (!cursorAtLeft && !cursorAtRight) return this._blockStartPos(beginBlockIndex) + beginBlockCursorPos;
	      var searchBlockIndex = cursorAtRight ? beginBlockIndex + 1 : beginBlockIndex;

	      if (direction === DIRECTION.NONE) {
	        // NONE direction used to calculate start input position if no chars were removed
	        // FOR NONE:
	        // -
	        // input|any
	        // ->
	        //  any|input
	        // <-
	        //  filled-input|any
	        // check if first block at left is input
	        if (searchBlockIndex > 0) {
	          var blockIndexAtLeft = searchBlockIndex - 1;
	          var blockAtLeft = this._blocks[blockIndexAtLeft];
	          var blockInputPos = blockAtLeft.nearestInputPos(0, DIRECTION.NONE); // is input

	          if (!blockAtLeft.value.length || blockInputPos !== blockAtLeft.value.length) {
	            return this._blockStartPos(searchBlockIndex);
	          }
	        } // ->


	        var firstInputAtRight = searchBlockIndex;

	        for (var bi = firstInputAtRight; bi < this._blocks.length; ++bi) {
	          var blockAtRight = this._blocks[bi];

	          var _blockInputPos = blockAtRight.nearestInputPos(0, DIRECTION.NONE);

	          if (!blockAtRight.value.length || _blockInputPos !== blockAtRight.value.length) {
	            return this._blockStartPos(bi) + _blockInputPos;
	          }
	        } // <-
	        // find first non-fixed symbol


	        for (var _bi = searchBlockIndex - 1; _bi >= 0; --_bi) {
	          var _block3 = this._blocks[_bi];

	          var _blockInputPos2 = _block3.nearestInputPos(0, DIRECTION.NONE); // is input


	          if (!_block3.value.length || _blockInputPos2 !== _block3.value.length) {
	            return this._blockStartPos(_bi) + _block3.value.length;
	          }
	        }

	        return cursorPos;
	      }

	      if (direction === DIRECTION.LEFT || direction === DIRECTION.FORCE_LEFT) {
	        // -
	        //  any|filled-input
	        // <-
	        //  any|first not empty is not-len-aligned
	        //  not-0-aligned|any
	        // ->
	        //  any|not-len-aligned or end
	        // check if first block at right is filled input
	        var firstFilledBlockIndexAtRight;

	        for (var _bi2 = searchBlockIndex; _bi2 < this._blocks.length; ++_bi2) {
	          if (this._blocks[_bi2].value) {
	            firstFilledBlockIndexAtRight = _bi2;
	            break;
	          }
	        }

	        if (firstFilledBlockIndexAtRight != null) {
	          var filledBlock = this._blocks[firstFilledBlockIndexAtRight];

	          var _blockInputPos3 = filledBlock.nearestInputPos(0, DIRECTION.RIGHT);

	          if (_blockInputPos3 === 0 && filledBlock.unmaskedValue.length) {
	            // filled block is input
	            return this._blockStartPos(firstFilledBlockIndexAtRight) + _blockInputPos3;
	          }
	        } // <-
	        // find this vars


	        var firstFilledInputBlockIndex = -1;
	        var firstEmptyInputBlockIndex; // TODO consider nested empty inputs

	        for (var _bi3 = searchBlockIndex - 1; _bi3 >= 0; --_bi3) {
	          var _block4 = this._blocks[_bi3];

	          var _blockInputPos4 = _block4.nearestInputPos(_block4.value.length, DIRECTION.FORCE_LEFT);

	          if (!_block4.value || _blockInputPos4 !== 0) firstEmptyInputBlockIndex = _bi3;

	          if (_blockInputPos4 !== 0) {
	            if (_blockInputPos4 !== _block4.value.length) {
	              // aligned inside block - return immediately
	              return this._blockStartPos(_bi3) + _blockInputPos4;
	            } else {
	              // found filled
	              firstFilledInputBlockIndex = _bi3;
	              break;
	            }
	          }
	        }

	        if (direction === DIRECTION.LEFT) {
	          // try find first empty input before start searching position only when not forced
	          for (var _bi4 = firstFilledInputBlockIndex + 1; _bi4 <= Math.min(searchBlockIndex, this._blocks.length - 1); ++_bi4) {
	            var _block5 = this._blocks[_bi4];

	            var _blockInputPos5 = _block5.nearestInputPos(0, DIRECTION.NONE);

	            var blockAlignedPos = this._blockStartPos(_bi4) + _blockInputPos5;

	            if (blockAlignedPos > cursorPos) break; // if block is not lazy input

	            if (_blockInputPos5 !== _block5.value.length) return blockAlignedPos;
	          }
	        } // process overflow


	        if (firstFilledInputBlockIndex >= 0) {
	          return this._blockStartPos(firstFilledInputBlockIndex) + this._blocks[firstFilledInputBlockIndex].value.length;
	        } // for lazy if has aligned left inside fixed and has came to the start - use start position


	        if (direction === DIRECTION.FORCE_LEFT || this.lazy && !this.extractInput() && !isInput(this._blocks[searchBlockIndex])) {
	          return 0;
	        }

	        if (firstEmptyInputBlockIndex != null) {
	          return this._blockStartPos(firstEmptyInputBlockIndex);
	        } // find first input


	        for (var _bi5 = searchBlockIndex; _bi5 < this._blocks.length; ++_bi5) {
	          var _block6 = this._blocks[_bi5];

	          var _blockInputPos6 = _block6.nearestInputPos(0, DIRECTION.NONE); // is input


	          if (!_block6.value.length || _blockInputPos6 !== _block6.value.length) {
	            return this._blockStartPos(_bi5) + _blockInputPos6;
	          }
	        }

	        return 0;
	      }

	      if (direction === DIRECTION.RIGHT || direction === DIRECTION.FORCE_RIGHT) {
	        // ->
	        //  any|not-len-aligned and filled
	        //  any|not-len-aligned
	        // <-
	        //  not-0-aligned or start|any
	        var firstInputBlockAlignedIndex;
	        var firstInputBlockAlignedPos;

	        for (var _bi6 = searchBlockIndex; _bi6 < this._blocks.length; ++_bi6) {
	          var _block7 = this._blocks[_bi6];

	          var _blockInputPos7 = _block7.nearestInputPos(0, DIRECTION.NONE);

	          if (_blockInputPos7 !== _block7.value.length) {
	            firstInputBlockAlignedPos = this._blockStartPos(_bi6) + _blockInputPos7;
	            firstInputBlockAlignedIndex = _bi6;
	            break;
	          }
	        }

	        if (firstInputBlockAlignedIndex != null && firstInputBlockAlignedPos != null) {
	          for (var _bi7 = firstInputBlockAlignedIndex; _bi7 < this._blocks.length; ++_bi7) {
	            var _block8 = this._blocks[_bi7];

	            var _blockInputPos8 = _block8.nearestInputPos(0, DIRECTION.FORCE_RIGHT);

	            if (_blockInputPos8 !== _block8.value.length) {
	              return this._blockStartPos(_bi7) + _blockInputPos8;
	            }
	          }

	          return direction === DIRECTION.FORCE_RIGHT ? this.value.length : firstInputBlockAlignedPos;
	        }

	        for (var _bi8 = Math.min(searchBlockIndex, this._blocks.length - 1); _bi8 >= 0; --_bi8) {
	          var _block9 = this._blocks[_bi8];

	          var _blockInputPos9 = _block9.nearestInputPos(_block9.value.length, DIRECTION.LEFT);

	          if (_blockInputPos9 !== 0) {
	            var alignedPos = this._blockStartPos(_bi8) + _blockInputPos9;

	            if (alignedPos >= cursorPos) return alignedPos;
	            break;
	          }
	        }
	      }

	      return cursorPos;
	    }
	    /** Get block by name */

	  }, {
	    key: "maskedBlock",
	    value: function maskedBlock(name) {
	      return this.maskedBlocks(name)[0];
	    }
	    /** Get all blocks by name */

	  }, {
	    key: "maskedBlocks",
	    value: function maskedBlocks(name) {
	      var _this4 = this;

	      var indices = this._maskedBlocks[name];
	      if (!indices) return [];
	      return indices.map(function (gi) {
	        return _this4._blocks[gi];
	      });
	    }
	  }]);

	  return MaskedPattern;
	}(Masked);
	MaskedPattern.DEFAULTS = {
	  lazy: true,
	  placeholderChar: '_'
	};
	MaskedPattern.STOP_CHAR = '`';
	MaskedPattern.ESCAPE_CHAR = '\\';
	MaskedPattern.InputDefinition = PatternInputDefinition;
	MaskedPattern.FixedDefinition = PatternFixedDefinition;

	function isInput(block) {
	  if (!block) return false;
	  var value = block.value;
	  return !value || block.nearestInputPos(0, DIRECTION.NONE) !== value.length;
	}

	IMask.MaskedPattern = MaskedPattern;

	/** Pattern which accepts ranges */

	var MaskedRange = /*#__PURE__*/function (_MaskedPattern) {
	  _inherits(MaskedRange, _MaskedPattern);

	  var _super = _createSuper(MaskedRange);

	  function MaskedRange() {
	    _classCallCheck(this, MaskedRange);

	    return _super.apply(this, arguments);
	  }

	  _createClass(MaskedRange, [{
	    key: "_matchFrom",
	    get:
	    /**
	      Optionally sets max length of pattern.
	      Used when pattern length is longer then `to` param length. Pads zeros at start in this case.
	    */

	    /** Min bound */

	    /** Max bound */

	    /** */
	    function get() {
	      return this.maxLength - String(this.from).length;
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "_update",
	    value: function _update(opts) {
	      // TODO type
	      opts = Object.assign({
	        to: this.to || 0,
	        from: this.from || 0
	      }, opts);
	      var maxLength = String(opts.to).length;
	      if (opts.maxLength != null) maxLength = Math.max(maxLength, opts.maxLength);
	      opts.maxLength = maxLength;
	      var fromStr = String(opts.from).padStart(maxLength, '0');
	      var toStr = String(opts.to).padStart(maxLength, '0');
	      var sameCharsCount = 0;

	      while (sameCharsCount < toStr.length && toStr[sameCharsCount] === fromStr[sameCharsCount]) {
	        ++sameCharsCount;
	      }

	      opts.mask = toStr.slice(0, sameCharsCount).replace(/0/g, '\\0') + '0'.repeat(maxLength - sameCharsCount);

	      _get(_getPrototypeOf(MaskedRange.prototype), "_update", this).call(this, opts);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "isComplete",
	    get: function get() {
	      return _get(_getPrototypeOf(MaskedRange.prototype), "isComplete", this) && Boolean(this.value);
	    }
	  }, {
	    key: "boundaries",
	    value: function boundaries(str) {
	      var minstr = '';
	      var maxstr = '';

	      var _ref = str.match(/^(\D*)(\d*)(\D*)/) || [],
	          _ref2 = _slicedToArray(_ref, 3),
	          placeholder = _ref2[1],
	          num = _ref2[2];

	      if (num) {
	        minstr = '0'.repeat(placeholder.length) + num;
	        maxstr = '9'.repeat(placeholder.length) + num;
	      }

	      minstr = minstr.padEnd(this.maxLength, '0');
	      maxstr = maxstr.padEnd(this.maxLength, '9');
	      return [minstr, maxstr];
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "doPrepare",
	    value: function doPrepare(str) {
	      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      str = _get(_getPrototypeOf(MaskedRange.prototype), "doPrepare", this).call(this, str, flags).replace(/\D/g, '');
	      if (!this.autofix) return str;
	      var fromStr = String(this.from).padStart(this.maxLength, '0');
	      var toStr = String(this.to).padStart(this.maxLength, '0');
	      var val = this.value;
	      var prepStr = '';

	      for (var ci = 0; ci < str.length; ++ci) {
	        var nextVal = val + prepStr + str[ci];

	        var _this$boundaries = this.boundaries(nextVal),
	            _this$boundaries2 = _slicedToArray(_this$boundaries, 2),
	            minstr = _this$boundaries2[0],
	            maxstr = _this$boundaries2[1];

	        if (Number(maxstr) < this.from) prepStr += fromStr[nextVal.length - 1];else if (Number(minstr) > this.to) prepStr += toStr[nextVal.length - 1];else prepStr += str[ci];
	      }

	      return prepStr;
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "doValidate",
	    value: function doValidate() {
	      var _get2;

	      var str = this.value;
	      var firstNonZero = str.search(/[^0]/);
	      if (firstNonZero === -1 && str.length <= this._matchFrom) return true;

	      var _this$boundaries3 = this.boundaries(str),
	          _this$boundaries4 = _slicedToArray(_this$boundaries3, 2),
	          minstr = _this$boundaries4[0],
	          maxstr = _this$boundaries4[1];

	      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return this.from <= Number(maxstr) && Number(minstr) <= this.to && (_get2 = _get(_getPrototypeOf(MaskedRange.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
	    }
	  }]);

	  return MaskedRange;
	}(MaskedPattern);
	IMask.MaskedRange = MaskedRange;

	/** Date mask */

	var MaskedDate = /*#__PURE__*/function (_MaskedPattern) {
	  _inherits(MaskedDate, _MaskedPattern);

	  var _super = _createSuper(MaskedDate);

	  /** Pattern mask for date according to {@link MaskedDate#format} */

	  /** Start date */

	  /** End date */

	  /** */

	  /**
	    @param {Object} opts
	  */
	  function MaskedDate(opts) {
	    _classCallCheck(this, MaskedDate);

	    return _super.call(this, Object.assign({}, MaskedDate.DEFAULTS, opts));
	  }
	  /**
	    @override
	  */


	  _createClass(MaskedDate, [{
	    key: "_update",
	    value: function _update(opts) {
	      if (opts.mask === Date) delete opts.mask;
	      if (opts.pattern) opts.mask = opts.pattern;
	      var blocks = opts.blocks;
	      opts.blocks = Object.assign({}, MaskedDate.GET_DEFAULT_BLOCKS()); // adjust year block

	      if (opts.min) opts.blocks.Y.from = opts.min.getFullYear();
	      if (opts.max) opts.blocks.Y.to = opts.max.getFullYear();

	      if (opts.min && opts.max && opts.blocks.Y.from === opts.blocks.Y.to) {
	        opts.blocks.m.from = opts.min.getMonth() + 1;
	        opts.blocks.m.to = opts.max.getMonth() + 1;

	        if (opts.blocks.m.from === opts.blocks.m.to) {
	          opts.blocks.d.from = opts.min.getDate();
	          opts.blocks.d.to = opts.max.getDate();
	        }
	      }

	      Object.assign(opts.blocks, blocks); // add autofix

	      Object.keys(opts.blocks).forEach(function (bk) {
	        var b = opts.blocks[bk];
	        if (!('autofix' in b)) b.autofix = opts.autofix;
	      });

	      _get(_getPrototypeOf(MaskedDate.prototype), "_update", this).call(this, opts);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "doValidate",
	    value: function doValidate() {
	      var _get2;

	      var date = this.date;

	      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return (_get2 = _get(_getPrototypeOf(MaskedDate.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args)) && (!this.isComplete || this.isDateExist(this.value) && date != null && (this.min == null || this.min <= date) && (this.max == null || date <= this.max));
	    }
	    /** Checks if date is exists */

	  }, {
	    key: "isDateExist",
	    value: function isDateExist(str) {
	      return this.format(this.parse(str, this), this).indexOf(str) >= 0;
	    }
	    /** Parsed Date */

	  }, {
	    key: "date",
	    get: function get() {
	      return this.typedValue;
	    },
	    set: function set(date) {
	      this.typedValue = date;
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "typedValue",
	    get: function get() {
	      return this.isComplete ? _get(_getPrototypeOf(MaskedDate.prototype), "typedValue", this) : null;
	    },
	    set: function set(value) {
	      _set(_getPrototypeOf(MaskedDate.prototype), "typedValue", value, this, true);
	    }
	  }]);

	  return MaskedDate;
	}(MaskedPattern);
	MaskedDate.DEFAULTS = {
	  pattern: 'd{.}`m{.}`Y',
	  format: function format(date) {
	    var day = String(date.getDate()).padStart(2, '0');
	    var month = String(date.getMonth() + 1).padStart(2, '0');
	    var year = date.getFullYear();
	    return [day, month, year].join('.');
	  },
	  parse: function parse(str) {
	    var _str$split = str.split('.'),
	        _str$split2 = _slicedToArray(_str$split, 3),
	        day = _str$split2[0],
	        month = _str$split2[1],
	        year = _str$split2[2];

	    return new Date(year, month - 1, day);
	  }
	};

	MaskedDate.GET_DEFAULT_BLOCKS = function () {
	  return {
	    d: {
	      mask: MaskedRange,
	      from: 1,
	      to: 31,
	      maxLength: 2
	    },
	    m: {
	      mask: MaskedRange,
	      from: 1,
	      to: 12,
	      maxLength: 2
	    },
	    Y: {
	      mask: MaskedRange,
	      from: 1900,
	      to: 9999
	    }
	  };
	};

	IMask.MaskedDate = MaskedDate;

	/**
	  Generic element API to use with mask
	  @interface
	*/
	var MaskElement = /*#__PURE__*/function () {
	  function MaskElement() {
	    _classCallCheck(this, MaskElement);
	  }

	  _createClass(MaskElement, [{
	    key: "selectionStart",
	    get:
	    /** */

	    /** */

	    /** */

	    /** Safely returns selection start */
	    function get() {
	      var start;

	      try {
	        start = this._unsafeSelectionStart;
	      } catch (e) {}

	      return start != null ? start : this.value.length;
	    }
	    /** Safely returns selection end */

	  }, {
	    key: "selectionEnd",
	    get: function get() {
	      var end;

	      try {
	        end = this._unsafeSelectionEnd;
	      } catch (e) {}

	      return end != null ? end : this.value.length;
	    }
	    /** Safely sets element selection */

	  }, {
	    key: "select",
	    value: function select(start, end) {
	      if (start == null || end == null || start === this.selectionStart && end === this.selectionEnd) return;

	      try {
	        this._unsafeSelect(start, end);
	      } catch (e) {}
	    }
	    /** Should be overriden in subclasses */

	  }, {
	    key: "_unsafeSelect",
	    value: function _unsafeSelect(start, end) {}
	    /** Should be overriden in subclasses */

	  }, {
	    key: "isActive",
	    get: function get() {
	      return false;
	    }
	    /** Should be overriden in subclasses */

	  }, {
	    key: "bindEvents",
	    value: function bindEvents(handlers) {}
	    /** Should be overriden in subclasses */

	  }, {
	    key: "unbindEvents",
	    value: function unbindEvents() {}
	  }]);

	  return MaskElement;
	}();
	IMask.MaskElement = MaskElement;

	/** Bridge between HTMLElement and {@link Masked} */

	var HTMLMaskElement = /*#__PURE__*/function (_MaskElement) {
	  _inherits(HTMLMaskElement, _MaskElement);

	  var _super = _createSuper(HTMLMaskElement);

	  /** Mapping between HTMLElement events and mask internal events */

	  /** HTMLElement to use mask on */

	  /**
	    @param {HTMLInputElement|HTMLTextAreaElement} input
	  */
	  function HTMLMaskElement(input) {
	    var _this;

	    _classCallCheck(this, HTMLMaskElement);

	    _this = _super.call(this);
	    _this.input = input;
	    _this._handlers = {};
	    return _this;
	  }
	  /** */
	  // $FlowFixMe https://github.com/facebook/flow/issues/2839


	  _createClass(HTMLMaskElement, [{
	    key: "rootElement",
	    get: function get() {
	      return this.input.getRootNode ? this.input.getRootNode() : document;
	    }
	    /**
	      Is element in focus
	      @readonly
	    */

	  }, {
	    key: "isActive",
	    get: function get() {
	      //$FlowFixMe
	      return this.input === this.rootElement.activeElement;
	    }
	    /**
	      Returns HTMLElement selection start
	      @override
	    */

	  }, {
	    key: "_unsafeSelectionStart",
	    get: function get() {
	      return this.input.selectionStart;
	    }
	    /**
	      Returns HTMLElement selection end
	      @override
	    */

	  }, {
	    key: "_unsafeSelectionEnd",
	    get: function get() {
	      return this.input.selectionEnd;
	    }
	    /**
	      Sets HTMLElement selection
	      @override
	    */

	  }, {
	    key: "_unsafeSelect",
	    value: function _unsafeSelect(start, end) {
	      this.input.setSelectionRange(start, end);
	    }
	    /**
	      HTMLElement value
	      @override
	    */

	  }, {
	    key: "value",
	    get: function get() {
	      return this.input.value;
	    },
	    set: function set(value) {
	      this.input.value = value;
	    }
	    /**
	      Binds HTMLElement events to mask internal events
	      @override
	    */

	  }, {
	    key: "bindEvents",
	    value: function bindEvents(handlers) {
	      var _this2 = this;

	      Object.keys(handlers).forEach(function (event) {
	        return _this2._toggleEventHandler(HTMLMaskElement.EVENTS_MAP[event], handlers[event]);
	      });
	    }
	    /**
	      Unbinds HTMLElement events to mask internal events
	      @override
	    */

	  }, {
	    key: "unbindEvents",
	    value: function unbindEvents() {
	      var _this3 = this;

	      Object.keys(this._handlers).forEach(function (event) {
	        return _this3._toggleEventHandler(event);
	      });
	    }
	    /** */

	  }, {
	    key: "_toggleEventHandler",
	    value: function _toggleEventHandler(event, handler) {
	      if (this._handlers[event]) {
	        this.input.removeEventListener(event, this._handlers[event]);
	        delete this._handlers[event];
	      }

	      if (handler) {
	        this.input.addEventListener(event, handler);
	        this._handlers[event] = handler;
	      }
	    }
	  }]);

	  return HTMLMaskElement;
	}(MaskElement);
	HTMLMaskElement.EVENTS_MAP = {
	  selectionChange: 'keydown',
	  input: 'input',
	  drop: 'drop',
	  click: 'click',
	  focus: 'focus',
	  commit: 'blur'
	};
	IMask.HTMLMaskElement = HTMLMaskElement;

	var HTMLContenteditableMaskElement = /*#__PURE__*/function (_HTMLMaskElement) {
	  _inherits(HTMLContenteditableMaskElement, _HTMLMaskElement);

	  var _super = _createSuper(HTMLContenteditableMaskElement);

	  function HTMLContenteditableMaskElement() {
	    _classCallCheck(this, HTMLContenteditableMaskElement);

	    return _super.apply(this, arguments);
	  }

	  _createClass(HTMLContenteditableMaskElement, [{
	    key: "_unsafeSelectionStart",
	    get:
	    /**
	      Returns HTMLElement selection start
	      @override
	    */
	    function get() {
	      var root = this.rootElement;
	      var selection = root.getSelection && root.getSelection();
	      return selection && selection.anchorOffset;
	    }
	    /**
	      Returns HTMLElement selection end
	      @override
	    */

	  }, {
	    key: "_unsafeSelectionEnd",
	    get: function get() {
	      var root = this.rootElement;
	      var selection = root.getSelection && root.getSelection();
	      return selection && this._unsafeSelectionStart + String(selection).length;
	    }
	    /**
	      Sets HTMLElement selection
	      @override
	    */

	  }, {
	    key: "_unsafeSelect",
	    value: function _unsafeSelect(start, end) {
	      if (!this.rootElement.createRange) return;
	      var range = this.rootElement.createRange();
	      range.setStart(this.input.firstChild || this.input, start);
	      range.setEnd(this.input.lastChild || this.input, end);
	      var root = this.rootElement;
	      var selection = root.getSelection && root.getSelection();

	      if (selection) {
	        selection.removeAllRanges();
	        selection.addRange(range);
	      }
	    }
	    /**
	      HTMLElement value
	      @override
	    */

	  }, {
	    key: "value",
	    get: function get() {
	      // $FlowFixMe
	      return this.input.textContent;
	    },
	    set: function set(value) {
	      this.input.textContent = value;
	    }
	  }]);

	  return HTMLContenteditableMaskElement;
	}(HTMLMaskElement);
	IMask.HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;

	var _excluded$1 = ["mask"];
	/** Listens to element events and controls changes between element and {@link Masked} */

	var InputMask = /*#__PURE__*/function () {
	  /**
	    View element
	    @readonly
	  */

	  /**
	    Internal {@link Masked} model
	    @readonly
	  */

	  /**
	    @param {MaskElement|HTMLInputElement|HTMLTextAreaElement} el
	    @param {Object} opts
	  */
	  function InputMask(el, opts) {
	    _classCallCheck(this, InputMask);

	    this.el = el instanceof MaskElement ? el : el.isContentEditable && el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA' ? new HTMLContenteditableMaskElement(el) : new HTMLMaskElement(el);
	    this.masked = createMask(opts);
	    this._listeners = {};
	    this._value = '';
	    this._unmaskedValue = '';
	    this._saveSelection = this._saveSelection.bind(this);
	    this._onInput = this._onInput.bind(this);
	    this._onChange = this._onChange.bind(this);
	    this._onDrop = this._onDrop.bind(this);
	    this._onFocus = this._onFocus.bind(this);
	    this._onClick = this._onClick.bind(this);
	    this.alignCursor = this.alignCursor.bind(this);
	    this.alignCursorFriendly = this.alignCursorFriendly.bind(this);

	    this._bindEvents(); // refresh


	    this.updateValue();

	    this._onChange();
	  }
	  /** Read or update mask */


	  _createClass(InputMask, [{
	    key: "mask",
	    get: function get() {
	      return this.masked.mask;
	    },
	    set: function set(mask) {
	      if (this.maskEquals(mask)) return;

	      if (!(mask instanceof IMask.Masked) && this.masked.constructor === maskedClass(mask)) {
	        this.masked.updateOptions({
	          mask: mask
	        });
	        return;
	      }

	      var masked = createMask({
	        mask: mask
	      });
	      masked.unmaskedValue = this.masked.unmaskedValue;
	      this.masked = masked;
	    }
	    /** Raw value */

	  }, {
	    key: "maskEquals",
	    value: function maskEquals(mask) {
	      return mask == null || mask === this.masked.mask || mask === Date && this.masked instanceof MaskedDate;
	    }
	  }, {
	    key: "value",
	    get: function get() {
	      return this._value;
	    },
	    set: function set(str) {
	      this.masked.value = str;
	      this.updateControl();
	      this.alignCursor();
	    }
	    /** Unmasked value */

	  }, {
	    key: "unmaskedValue",
	    get: function get() {
	      return this._unmaskedValue;
	    },
	    set: function set(str) {
	      this.masked.unmaskedValue = str;
	      this.updateControl();
	      this.alignCursor();
	    }
	    /** Typed unmasked value */

	  }, {
	    key: "typedValue",
	    get: function get() {
	      return this.masked.typedValue;
	    },
	    set: function set(val) {
	      this.masked.typedValue = val;
	      this.updateControl();
	      this.alignCursor();
	    }
	    /**
	      Starts listening to element events
	      @protected
	    */

	  }, {
	    key: "_bindEvents",
	    value: function _bindEvents() {
	      this.el.bindEvents({
	        selectionChange: this._saveSelection,
	        input: this._onInput,
	        drop: this._onDrop,
	        click: this._onClick,
	        focus: this._onFocus,
	        commit: this._onChange
	      });
	    }
	    /**
	      Stops listening to element events
	      @protected
	     */

	  }, {
	    key: "_unbindEvents",
	    value: function _unbindEvents() {
	      if (this.el) this.el.unbindEvents();
	    }
	    /**
	      Fires custom event
	      @protected
	     */

	  }, {
	    key: "_fireEvent",
	    value: function _fireEvent(ev) {
	      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      var listeners = this._listeners[ev];
	      if (!listeners) return;
	      listeners.forEach(function (l) {
	        return l.apply(void 0, args);
	      });
	    }
	    /**
	      Current selection start
	      @readonly
	    */

	  }, {
	    key: "selectionStart",
	    get: function get() {
	      return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
	    }
	    /** Current cursor position */

	  }, {
	    key: "cursorPos",
	    get: function get() {
	      return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
	    },
	    set: function set(pos) {
	      if (!this.el || !this.el.isActive) return;
	      this.el.select(pos, pos);

	      this._saveSelection();
	    }
	    /**
	      Stores current selection
	      @protected
	    */

	  }, {
	    key: "_saveSelection",
	    value: function _saveSelection()
	    /* ev */
	    {
	      if (this.value !== this.el.value) {
	        console.warn('Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly.'); // eslint-disable-line no-console
	      }

	      this._selection = {
	        start: this.selectionStart,
	        end: this.cursorPos
	      };
	    }
	    /** Syncronizes model value from view */

	  }, {
	    key: "updateValue",
	    value: function updateValue() {
	      this.masked.value = this.el.value;
	      this._value = this.masked.value;
	    }
	    /** Syncronizes view from model value, fires change events */

	  }, {
	    key: "updateControl",
	    value: function updateControl() {
	      var newUnmaskedValue = this.masked.unmaskedValue;
	      var newValue = this.masked.value;
	      var isChanged = this.unmaskedValue !== newUnmaskedValue || this.value !== newValue;
	      this._unmaskedValue = newUnmaskedValue;
	      this._value = newValue;
	      if (this.el.value !== newValue) this.el.value = newValue;
	      if (isChanged) this._fireChangeEvents();
	    }
	    /** Updates options with deep equal check, recreates @{link Masked} model if mask type changes */

	  }, {
	    key: "updateOptions",
	    value: function updateOptions(opts) {
	      var mask = opts.mask,
	          restOpts = _objectWithoutProperties(opts, _excluded$1);

	      var updateMask = !this.maskEquals(mask);
	      var updateOpts = !objectIncludes(this.masked, restOpts);
	      if (updateMask) this.mask = mask;
	      if (updateOpts) this.masked.updateOptions(restOpts);
	      if (updateMask || updateOpts) this.updateControl();
	    }
	    /** Updates cursor */

	  }, {
	    key: "updateCursor",
	    value: function updateCursor(cursorPos) {
	      if (cursorPos == null) return;
	      this.cursorPos = cursorPos; // also queue change cursor for mobile browsers

	      this._delayUpdateCursor(cursorPos);
	    }
	    /**
	      Delays cursor update to support mobile browsers
	      @private
	    */

	  }, {
	    key: "_delayUpdateCursor",
	    value: function _delayUpdateCursor(cursorPos) {
	      var _this = this;

	      this._abortUpdateCursor();

	      this._changingCursorPos = cursorPos;
	      this._cursorChanging = setTimeout(function () {
	        if (!_this.el) return; // if was destroyed

	        _this.cursorPos = _this._changingCursorPos;

	        _this._abortUpdateCursor();
	      }, 10);
	    }
	    /**
	      Fires custom events
	      @protected
	    */

	  }, {
	    key: "_fireChangeEvents",
	    value: function _fireChangeEvents() {
	      this._fireEvent('accept', this._inputEvent);

	      if (this.masked.isComplete) this._fireEvent('complete', this._inputEvent);
	    }
	    /**
	      Aborts delayed cursor update
	      @private
	    */

	  }, {
	    key: "_abortUpdateCursor",
	    value: function _abortUpdateCursor() {
	      if (this._cursorChanging) {
	        clearTimeout(this._cursorChanging);
	        delete this._cursorChanging;
	      }
	    }
	    /** Aligns cursor to nearest available position */

	  }, {
	    key: "alignCursor",
	    value: function alignCursor() {
	      this.cursorPos = this.masked.nearestInputPos(this.cursorPos, DIRECTION.LEFT);
	    }
	    /** Aligns cursor only if selection is empty */

	  }, {
	    key: "alignCursorFriendly",
	    value: function alignCursorFriendly() {
	      if (this.selectionStart !== this.cursorPos) return; // skip if range is selected

	      this.alignCursor();
	    }
	    /** Adds listener on custom event */

	  }, {
	    key: "on",
	    value: function on(ev, handler) {
	      if (!this._listeners[ev]) this._listeners[ev] = [];

	      this._listeners[ev].push(handler);

	      return this;
	    }
	    /** Removes custom event listener */

	  }, {
	    key: "off",
	    value: function off(ev, handler) {
	      if (!this._listeners[ev]) return this;

	      if (!handler) {
	        delete this._listeners[ev];
	        return this;
	      }

	      var hIndex = this._listeners[ev].indexOf(handler);

	      if (hIndex >= 0) this._listeners[ev].splice(hIndex, 1);
	      return this;
	    }
	    /** Handles view input event */

	  }, {
	    key: "_onInput",
	    value: function _onInput(e) {
	      this._inputEvent = e;

	      this._abortUpdateCursor(); // fix strange IE behavior


	      if (!this._selection) return this.updateValue();
	      var details = new ActionDetails( // new state
	      this.el.value, this.cursorPos, // old state
	      this.value, this._selection);
	      var oldRawValue = this.masked.rawInputValue;
	      var offset = this.masked.splice(details.startChangePos, details.removed.length, details.inserted, details.removeDirection).offset; // force align in remove direction only if no input chars were removed
	      // otherwise we still need to align with NONE (to get out from fixed symbols for instance)

	      var removeDirection = oldRawValue === this.masked.rawInputValue ? details.removeDirection : DIRECTION.NONE;
	      var cursorPos = this.masked.nearestInputPos(details.startChangePos + offset, removeDirection);
	      this.updateControl();
	      this.updateCursor(cursorPos);
	      delete this._inputEvent;
	    }
	    /** Handles view change event and commits model value */

	  }, {
	    key: "_onChange",
	    value: function _onChange() {
	      if (this.value !== this.el.value) {
	        this.updateValue();
	      }

	      this.masked.doCommit();
	      this.updateControl();

	      this._saveSelection();
	    }
	    /** Handles view drop event, prevents by default */

	  }, {
	    key: "_onDrop",
	    value: function _onDrop(ev) {
	      ev.preventDefault();
	      ev.stopPropagation();
	    }
	    /** Restore last selection on focus */

	  }, {
	    key: "_onFocus",
	    value: function _onFocus(ev) {
	      this.alignCursorFriendly();
	    }
	    /** Restore last selection on focus */

	  }, {
	    key: "_onClick",
	    value: function _onClick(ev) {
	      this.alignCursorFriendly();
	    }
	    /** Unbind view events and removes element reference */

	  }, {
	    key: "destroy",
	    value: function destroy() {
	      this._unbindEvents(); // $FlowFixMe why not do so?


	      this._listeners.length = 0; // $FlowFixMe

	      delete this.el;
	    }
	  }]);

	  return InputMask;
	}();
	IMask.InputMask = InputMask;

	/** Pattern which validates enum values */

	var MaskedEnum = /*#__PURE__*/function (_MaskedPattern) {
	  _inherits(MaskedEnum, _MaskedPattern);

	  var _super = _createSuper(MaskedEnum);

	  function MaskedEnum() {
	    _classCallCheck(this, MaskedEnum);

	    return _super.apply(this, arguments);
	  }

	  _createClass(MaskedEnum, [{
	    key: "_update",
	    value:
	    /**
	      @override
	      @param {Object} opts
	    */
	    function _update(opts) {
	      // TODO type
	      if (opts.enum) opts.mask = '*'.repeat(opts.enum[0].length);

	      _get(_getPrototypeOf(MaskedEnum.prototype), "_update", this).call(this, opts);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "doValidate",
	    value: function doValidate() {
	      var _this = this,
	          _get2;

	      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return this.enum.some(function (e) {
	        return e.indexOf(_this.unmaskedValue) >= 0;
	      }) && (_get2 = _get(_getPrototypeOf(MaskedEnum.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
	    }
	  }]);

	  return MaskedEnum;
	}(MaskedPattern);
	IMask.MaskedEnum = MaskedEnum;

	/**
	  Number mask
	  @param {Object} opts
	  @param {string} opts.radix - Single char
	  @param {string} opts.thousandsSeparator - Single char
	  @param {Array<string>} opts.mapToRadix - Array of single chars
	  @param {number} opts.min
	  @param {number} opts.max
	  @param {number} opts.scale - Digits after point
	  @param {boolean} opts.signed - Allow negative
	  @param {boolean} opts.normalizeZeros - Flag to remove leading and trailing zeros in the end of editing
	  @param {boolean} opts.padFractionalZeros - Flag to pad trailing zeros after point in the end of editing
	*/
	var MaskedNumber = /*#__PURE__*/function (_Masked) {
	  _inherits(MaskedNumber, _Masked);

	  var _super = _createSuper(MaskedNumber);

	  /** Single char */

	  /** Single char */

	  /** Array of single chars */

	  /** */

	  /** */

	  /** Digits after point */

	  /** */

	  /** Flag to remove leading and trailing zeros in the end of editing */

	  /** Flag to pad trailing zeros after point in the end of editing */
	  function MaskedNumber(opts) {
	    _classCallCheck(this, MaskedNumber);

	    return _super.call(this, Object.assign({}, MaskedNumber.DEFAULTS, opts));
	  }
	  /**
	    @override
	  */


	  _createClass(MaskedNumber, [{
	    key: "_update",
	    value: function _update(opts) {
	      _get(_getPrototypeOf(MaskedNumber.prototype), "_update", this).call(this, opts);

	      this._updateRegExps();
	    }
	    /** */

	  }, {
	    key: "_updateRegExps",
	    value: function _updateRegExps() {
	      // use different regexp to process user input (more strict, input suffix) and tail shifting
	      var start = '^' + (this.allowNegative ? '[+|\\-]?' : '');
	      var midInput = '(0|([1-9]+\\d*))?';
	      var mid = '\\d*';
	      var end = (this.scale ? '(' + escapeRegExp(this.radix) + '\\d{0,' + this.scale + '})?' : '') + '$';
	      this._numberRegExpInput = new RegExp(start + midInput + end);
	      this._numberRegExp = new RegExp(start + mid + end);
	      this._mapToRadixRegExp = new RegExp('[' + this.mapToRadix.map(escapeRegExp).join('') + ']', 'g');
	      this._thousandsSeparatorRegExp = new RegExp(escapeRegExp(this.thousandsSeparator), 'g');
	    }
	    /** */

	  }, {
	    key: "_removeThousandsSeparators",
	    value: function _removeThousandsSeparators(value) {
	      return value.replace(this._thousandsSeparatorRegExp, '');
	    }
	    /** */

	  }, {
	    key: "_insertThousandsSeparators",
	    value: function _insertThousandsSeparators(value) {
	      // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
	      var parts = value.split(this.radix);
	      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
	      return parts.join(this.radix);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "doPrepare",
	    value: function doPrepare(str) {
	      var _get2;

	      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      return (_get2 = _get(_getPrototypeOf(MaskedNumber.prototype), "doPrepare", this)).call.apply(_get2, [this, this._removeThousandsSeparators(str.replace(this._mapToRadixRegExp, this.radix))].concat(args));
	    }
	    /** */

	  }, {
	    key: "_separatorsCount",
	    value: function _separatorsCount(to) {
	      var extendOnSeparators = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	      var count = 0;

	      for (var pos = 0; pos < to; ++pos) {
	        if (this._value.indexOf(this.thousandsSeparator, pos) === pos) {
	          ++count;
	          if (extendOnSeparators) to += this.thousandsSeparator.length;
	        }
	      }

	      return count;
	    }
	    /** */

	  }, {
	    key: "_separatorsCountFromSlice",
	    value: function _separatorsCountFromSlice() {
	      var slice = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._value;
	      return this._separatorsCount(this._removeThousandsSeparators(slice).length, true);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "extractInput",
	    value: function extractInput() {
	      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
	      var flags = arguments.length > 2 ? arguments[2] : undefined;

	      var _this$_adjustRangeWit = this._adjustRangeWithSeparators(fromPos, toPos);

	      var _this$_adjustRangeWit2 = _slicedToArray(_this$_adjustRangeWit, 2);

	      fromPos = _this$_adjustRangeWit2[0];
	      toPos = _this$_adjustRangeWit2[1];
	      return this._removeThousandsSeparators(_get(_getPrototypeOf(MaskedNumber.prototype), "extractInput", this).call(this, fromPos, toPos, flags));
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "_appendCharRaw",
	    value: function _appendCharRaw(ch) {
	      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      if (!this.thousandsSeparator) return _get(_getPrototypeOf(MaskedNumber.prototype), "_appendCharRaw", this).call(this, ch, flags);
	      var prevBeforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;

	      var prevBeforeTailSeparatorsCount = this._separatorsCountFromSlice(prevBeforeTailValue);

	      this._value = this._removeThousandsSeparators(this.value);

	      var appendDetails = _get(_getPrototypeOf(MaskedNumber.prototype), "_appendCharRaw", this).call(this, ch, flags);

	      this._value = this._insertThousandsSeparators(this._value);
	      var beforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;

	      var beforeTailSeparatorsCount = this._separatorsCountFromSlice(beforeTailValue);

	      appendDetails.tailShift += (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length;
	      appendDetails.skip = !appendDetails.rawInserted && ch === this.thousandsSeparator;
	      return appendDetails;
	    }
	    /** */

	  }, {
	    key: "_findSeparatorAround",
	    value: function _findSeparatorAround(pos) {
	      if (this.thousandsSeparator) {
	        var searchFrom = pos - this.thousandsSeparator.length + 1;
	        var separatorPos = this.value.indexOf(this.thousandsSeparator, searchFrom);
	        if (separatorPos <= pos) return separatorPos;
	      }

	      return -1;
	    }
	  }, {
	    key: "_adjustRangeWithSeparators",
	    value: function _adjustRangeWithSeparators(from, to) {
	      var separatorAroundFromPos = this._findSeparatorAround(from);

	      if (separatorAroundFromPos >= 0) from = separatorAroundFromPos;

	      var separatorAroundToPos = this._findSeparatorAround(to);

	      if (separatorAroundToPos >= 0) to = separatorAroundToPos + this.thousandsSeparator.length;
	      return [from, to];
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "remove",
	    value: function remove() {
	      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

	      var _this$_adjustRangeWit3 = this._adjustRangeWithSeparators(fromPos, toPos);

	      var _this$_adjustRangeWit4 = _slicedToArray(_this$_adjustRangeWit3, 2);

	      fromPos = _this$_adjustRangeWit4[0];
	      toPos = _this$_adjustRangeWit4[1];
	      var valueBeforePos = this.value.slice(0, fromPos);
	      var valueAfterPos = this.value.slice(toPos);

	      var prevBeforeTailSeparatorsCount = this._separatorsCount(valueBeforePos.length);

	      this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(valueBeforePos + valueAfterPos));

	      var beforeTailSeparatorsCount = this._separatorsCountFromSlice(valueBeforePos);

	      return new ChangeDetails({
	        tailShift: (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length
	      });
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "nearestInputPos",
	    value: function nearestInputPos(cursorPos, direction) {
	      if (!this.thousandsSeparator) return cursorPos;

	      switch (direction) {
	        case DIRECTION.NONE:
	        case DIRECTION.LEFT:
	        case DIRECTION.FORCE_LEFT:
	          {
	            var separatorAtLeftPos = this._findSeparatorAround(cursorPos - 1);

	            if (separatorAtLeftPos >= 0) {
	              var separatorAtLeftEndPos = separatorAtLeftPos + this.thousandsSeparator.length;

	              if (cursorPos < separatorAtLeftEndPos || this.value.length <= separatorAtLeftEndPos || direction === DIRECTION.FORCE_LEFT) {
	                return separatorAtLeftPos;
	              }
	            }

	            break;
	          }

	        case DIRECTION.RIGHT:
	        case DIRECTION.FORCE_RIGHT:
	          {
	            var separatorAtRightPos = this._findSeparatorAround(cursorPos);

	            if (separatorAtRightPos >= 0) {
	              return separatorAtRightPos + this.thousandsSeparator.length;
	            }
	          }
	      }

	      return cursorPos;
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "doValidate",
	    value: function doValidate(flags) {
	      var regexp = flags.input ? this._numberRegExpInput : this._numberRegExp; // validate as string

	      var valid = regexp.test(this._removeThousandsSeparators(this.value));

	      if (valid) {
	        // validate as number
	        var number = this.number;
	        valid = valid && !isNaN(number) && ( // check min bound for negative values
	        this.min == null || this.min >= 0 || this.min <= this.number) && ( // check max bound for positive values
	        this.max == null || this.max <= 0 || this.number <= this.max);
	      }

	      return valid && _get(_getPrototypeOf(MaskedNumber.prototype), "doValidate", this).call(this, flags);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "doCommit",
	    value: function doCommit() {
	      if (this.value) {
	        var number = this.number;
	        var validnum = number; // check bounds

	        if (this.min != null) validnum = Math.max(validnum, this.min);
	        if (this.max != null) validnum = Math.min(validnum, this.max);
	        if (validnum !== number) this.unmaskedValue = String(validnum);
	        var formatted = this.value;
	        if (this.normalizeZeros) formatted = this._normalizeZeros(formatted);
	        if (this.padFractionalZeros) formatted = this._padFractionalZeros(formatted);
	        this._value = formatted;
	      }

	      _get(_getPrototypeOf(MaskedNumber.prototype), "doCommit", this).call(this);
	    }
	    /** */

	  }, {
	    key: "_normalizeZeros",
	    value: function _normalizeZeros(value) {
	      var parts = this._removeThousandsSeparators(value).split(this.radix); // remove leading zeros


	      parts[0] = parts[0].replace(/^(\D*)(0*)(\d*)/, function (match, sign, zeros, num) {
	        return sign + num;
	      }); // add leading zero

	      if (value.length && !/\d$/.test(parts[0])) parts[0] = parts[0] + '0';

	      if (parts.length > 1) {
	        parts[1] = parts[1].replace(/0*$/, ''); // remove trailing zeros

	        if (!parts[1].length) parts.length = 1; // remove fractional
	      }

	      return this._insertThousandsSeparators(parts.join(this.radix));
	    }
	    /** */

	  }, {
	    key: "_padFractionalZeros",
	    value: function _padFractionalZeros(value) {
	      if (!value) return value;
	      var parts = value.split(this.radix);
	      if (parts.length < 2) parts.push('');
	      parts[1] = parts[1].padEnd(this.scale, '0');
	      return parts.join(this.radix);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "unmaskedValue",
	    get: function get() {
	      return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, '.');
	    },
	    set: function set(unmaskedValue) {
	      _set(_getPrototypeOf(MaskedNumber.prototype), "unmaskedValue", unmaskedValue.replace('.', this.radix), this, true);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "typedValue",
	    get: function get() {
	      return Number(this.unmaskedValue);
	    },
	    set: function set(n) {
	      _set(_getPrototypeOf(MaskedNumber.prototype), "unmaskedValue", String(n), this, true);
	    }
	    /** Parsed Number */

	  }, {
	    key: "number",
	    get: function get() {
	      return this.typedValue;
	    },
	    set: function set(number) {
	      this.typedValue = number;
	    }
	    /**
	      Is negative allowed
	      @readonly
	    */

	  }, {
	    key: "allowNegative",
	    get: function get() {
	      return this.signed || this.min != null && this.min < 0 || this.max != null && this.max < 0;
	    }
	  }]);

	  return MaskedNumber;
	}(Masked);
	MaskedNumber.DEFAULTS = {
	  radix: ',',
	  thousandsSeparator: '',
	  mapToRadix: ['.'],
	  scale: 2,
	  signed: false,
	  normalizeZeros: true,
	  padFractionalZeros: false
	};
	IMask.MaskedNumber = MaskedNumber;

	/** Masking by custom Function */

	var MaskedFunction = /*#__PURE__*/function (_Masked) {
	  _inherits(MaskedFunction, _Masked);

	  var _super = _createSuper(MaskedFunction);

	  function MaskedFunction() {
	    _classCallCheck(this, MaskedFunction);

	    return _super.apply(this, arguments);
	  }

	  _createClass(MaskedFunction, [{
	    key: "_update",
	    value:
	    /**
	      @override
	      @param {Object} opts
	    */
	    function _update(opts) {
	      if (opts.mask) opts.validate = opts.mask;

	      _get(_getPrototypeOf(MaskedFunction.prototype), "_update", this).call(this, opts);
	    }
	  }]);

	  return MaskedFunction;
	}(Masked);
	IMask.MaskedFunction = MaskedFunction;

	var _excluded = ["compiledMasks", "currentMaskRef", "currentMask"];

	/** Dynamic mask for choosing apropriate mask in run-time */
	var MaskedDynamic = /*#__PURE__*/function (_Masked) {
	  _inherits(MaskedDynamic, _Masked);

	  var _super = _createSuper(MaskedDynamic);

	  /** Currently chosen mask */

	  /** Compliled {@link Masked} options */

	  /** Chooses {@link Masked} depending on input value */

	  /**
	    @param {Object} opts
	  */
	  function MaskedDynamic(opts) {
	    var _this;

	    _classCallCheck(this, MaskedDynamic);

	    _this = _super.call(this, Object.assign({}, MaskedDynamic.DEFAULTS, opts));
	    _this.currentMask = null;
	    return _this;
	  }
	  /**
	    @override
	  */


	  _createClass(MaskedDynamic, [{
	    key: "_update",
	    value: function _update(opts) {
	      _get(_getPrototypeOf(MaskedDynamic.prototype), "_update", this).call(this, opts);

	      if ('mask' in opts) {
	        // mask could be totally dynamic with only `dispatch` option
	        this.compiledMasks = Array.isArray(opts.mask) ? opts.mask.map(function (m) {
	          return createMask(m);
	        }) : [];
	      }
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "_appendCharRaw",
	    value: function _appendCharRaw(ch) {
	      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      var details = this._applyDispatch(ch, flags);

	      if (this.currentMask) {
	        details.aggregate(this.currentMask._appendChar(ch, flags));
	      }

	      return details;
	    }
	  }, {
	    key: "_applyDispatch",
	    value: function _applyDispatch() {
	      var appended = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      var prevValueBeforeTail = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._value : this.value;
	      var inputValue = this.rawInputValue;
	      var insertValue = flags.tail && flags._beforeTailState != null ? // $FlowFixMe - tired to fight with type system
	      flags._beforeTailState._rawInputValue : inputValue;
	      var tailValue = inputValue.slice(insertValue.length);
	      var prevMask = this.currentMask;
	      var details = new ChangeDetails();
	      var prevMaskState = prevMask && prevMask.state; // clone flags to prevent overwriting `_beforeTailState`

	      this.currentMask = this.doDispatch(appended, Object.assign({}, flags)); // restore state after dispatch

	      if (this.currentMask) {
	        if (this.currentMask !== prevMask) {
	          // if mask changed reapply input
	          this.currentMask.reset();

	          if (insertValue) {
	            // $FlowFixMe - it's ok, we don't change current mask above
	            var d = this.currentMask.append(insertValue, {
	              raw: true
	            });
	            details.tailShift = d.inserted.length - prevValueBeforeTail.length;
	          }

	          if (tailValue) {
	            // $FlowFixMe - it's ok, we don't change current mask above
	            details.tailShift += this.currentMask.append(tailValue, {
	              raw: true,
	              tail: true
	            }).tailShift;
	          }
	        } else {
	          // Dispatch can do something bad with state, so
	          // restore prev mask state
	          this.currentMask.state = prevMaskState;
	        }
	      }

	      return details;
	    }
	  }, {
	    key: "_appendPlaceholder",
	    value: function _appendPlaceholder() {
	      var details = this._applyDispatch.apply(this, arguments);

	      if (this.currentMask) {
	        details.aggregate(this.currentMask._appendPlaceholder());
	      }

	      return details;
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "doDispatch",
	    value: function doDispatch(appended) {
	      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      return this.dispatch(appended, this, flags);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "doValidate",
	    value: function doValidate() {
	      var _get2, _this$currentMask;

	      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return (_get2 = _get(_getPrototypeOf(MaskedDynamic.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args)) && (!this.currentMask || (_this$currentMask = this.currentMask).doValidate.apply(_this$currentMask, args));
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "reset",
	    value: function reset() {
	      if (this.currentMask) this.currentMask.reset();
	      this.compiledMasks.forEach(function (m) {
	        return m.reset();
	      });
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "value",
	    get: function get() {
	      return this.currentMask ? this.currentMask.value : '';
	    },
	    set: function set(value) {
	      _set(_getPrototypeOf(MaskedDynamic.prototype), "value", value, this, true);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "unmaskedValue",
	    get: function get() {
	      return this.currentMask ? this.currentMask.unmaskedValue : '';
	    },
	    set: function set(unmaskedValue) {
	      _set(_getPrototypeOf(MaskedDynamic.prototype), "unmaskedValue", unmaskedValue, this, true);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "typedValue",
	    get: function get() {
	      return this.currentMask ? this.currentMask.typedValue : '';
	    } // probably typedValue should not be used with dynamic
	    ,
	    set: function set(value) {
	      var unmaskedValue = String(value); // double check it

	      if (this.currentMask) {
	        this.currentMask.typedValue = value;
	        unmaskedValue = this.currentMask.unmaskedValue;
	      }

	      this.unmaskedValue = unmaskedValue;
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "isComplete",
	    get: function get() {
	      return !!this.currentMask && this.currentMask.isComplete;
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "remove",
	    value: function remove() {
	      var details = new ChangeDetails();

	      if (this.currentMask) {
	        var _this$currentMask2;

	        details.aggregate((_this$currentMask2 = this.currentMask).remove.apply(_this$currentMask2, arguments)) // update with dispatch
	        .aggregate(this._applyDispatch());
	      }

	      return details;
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "state",
	    get: function get() {
	      return Object.assign({}, _get(_getPrototypeOf(MaskedDynamic.prototype), "state", this), {
	        _rawInputValue: this.rawInputValue,
	        compiledMasks: this.compiledMasks.map(function (m) {
	          return m.state;
	        }),
	        currentMaskRef: this.currentMask,
	        currentMask: this.currentMask && this.currentMask.state
	      });
	    },
	    set: function set(state) {
	      var compiledMasks = state.compiledMasks,
	          currentMaskRef = state.currentMaskRef,
	          currentMask = state.currentMask,
	          maskedState = _objectWithoutProperties(state, _excluded);

	      this.compiledMasks.forEach(function (m, mi) {
	        return m.state = compiledMasks[mi];
	      });

	      if (currentMaskRef != null) {
	        this.currentMask = currentMaskRef;
	        this.currentMask.state = currentMask;
	      }

	      _set(_getPrototypeOf(MaskedDynamic.prototype), "state", maskedState, this, true);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "extractInput",
	    value: function extractInput() {
	      var _this$currentMask3;

	      return this.currentMask ? (_this$currentMask3 = this.currentMask).extractInput.apply(_this$currentMask3, arguments) : '';
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "extractTail",
	    value: function extractTail() {
	      var _this$currentMask4, _get3;

	      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }

	      return this.currentMask ? (_this$currentMask4 = this.currentMask).extractTail.apply(_this$currentMask4, args) : (_get3 = _get(_getPrototypeOf(MaskedDynamic.prototype), "extractTail", this)).call.apply(_get3, [this].concat(args));
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "doCommit",
	    value: function doCommit() {
	      if (this.currentMask) this.currentMask.doCommit();

	      _get(_getPrototypeOf(MaskedDynamic.prototype), "doCommit", this).call(this);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "nearestInputPos",
	    value: function nearestInputPos() {
	      var _this$currentMask5, _get4;

	      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	        args[_key3] = arguments[_key3];
	      }

	      return this.currentMask ? (_this$currentMask5 = this.currentMask).nearestInputPos.apply(_this$currentMask5, args) : (_get4 = _get(_getPrototypeOf(MaskedDynamic.prototype), "nearestInputPos", this)).call.apply(_get4, [this].concat(args));
	    }
	  }, {
	    key: "overwrite",
	    get: function get() {
	      return this.currentMask ? this.currentMask.overwrite : _get(_getPrototypeOf(MaskedDynamic.prototype), "overwrite", this);
	    },
	    set: function set(overwrite) {
	      console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings');
	    }
	  }]);

	  return MaskedDynamic;
	}(Masked);
	MaskedDynamic.DEFAULTS = {
	  dispatch: function dispatch(appended, masked, flags) {
	    if (!masked.compiledMasks.length) return;
	    var inputValue = masked.rawInputValue; // simulate input

	    var inputs = masked.compiledMasks.map(function (m, index) {
	      m.reset();
	      m.append(inputValue, {
	        raw: true
	      });
	      m.append(appended, flags);
	      var weight = m.rawInputValue.length;
	      return {
	        weight: weight,
	        index: index
	      };
	    }); // pop masks with longer values first

	    inputs.sort(function (i1, i2) {
	      return i2.weight - i1.weight;
	    });
	    return masked.compiledMasks[inputs[0].index];
	  }
	};
	IMask.MaskedDynamic = MaskedDynamic;

	/** Mask pipe source and destination types */

	var PIPE_TYPE = {
	  MASKED: 'value',
	  UNMASKED: 'unmaskedValue',
	  TYPED: 'typedValue'
	};
	/** Creates new pipe function depending on mask type, source and destination options */

	function createPipe(mask) {
	  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : PIPE_TYPE.MASKED;
	  var to = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : PIPE_TYPE.MASKED;
	  var masked = createMask(mask);
	  return function (value) {
	    return masked.runIsolated(function (m) {
	      m[from] = value;
	      return m[to];
	    });
	  };
	}
	/** Pipes value through mask depending on mask type, source and destination options */

	function pipe(value) {
	  for (var _len = arguments.length, pipeArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    pipeArgs[_key - 1] = arguments[_key];
	  }

	  return createPipe.apply(void 0, pipeArgs)(value);
	}
	IMask.PIPE_TYPE = PIPE_TYPE;
	IMask.createPipe = createPipe;
	IMask.pipe = pipe;

	try {
	  globalThis.IMask = IMask;
	} catch (e) {}

	exports.HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;
	exports.HTMLMaskElement = HTMLMaskElement;
	exports.InputMask = InputMask;
	exports.MaskElement = MaskElement;
	exports.Masked = Masked;
	exports.MaskedDate = MaskedDate;
	exports.MaskedDynamic = MaskedDynamic;
	exports.MaskedEnum = MaskedEnum;
	exports.MaskedFunction = MaskedFunction;
	exports.MaskedNumber = MaskedNumber;
	exports.MaskedPattern = MaskedPattern;
	exports.MaskedRange = MaskedRange;
	exports.MaskedRegExp = MaskedRegExp;
	exports.PIPE_TYPE = PIPE_TYPE;
	exports.createMask = createMask;
	exports.createPipe = createPipe;
	exports.default = IMask;
	exports.pipe = pipe;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=imask.js.map;

// pop-up form sended observer
if (document.querySelector('.form')) {
  let MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
  let popups = document.querySelectorAll('.form__notification');
  for (let i=0; i<popups.length; i++) {
    let popup = popups[i];
    let observer = new MutationObserver(function(mutations) {  
      mutations.forEach(function(mutation) {
        if (mutation.type === 'attributes') {
          if (popup.classList.contains('_show')) {
            document.body.classList.add('_lock');
            document.querySelector('.form').classList.add('_lock');
          } else {
            document.body.classList.remove('_lock')
            document.querySelector('.form').classList.remove('_lock');
          }
        }
      });
    });

    observer.observe(popup, {
      attributes: true, 
    });

    //close btn 
    let closeBtns = document.querySelectorAll('.form__notification-close-btn');
    for (let i=0; i<closeBtns.length; i++) {
      let closeBtn = closeBtns[i];
      if (closeBtn) {
        closeBtn.addEventListener('click', ()=>{
          popup.classList.remove('_show');
        });
      };
    };
  };
}

// popup form
if (document.querySelector('.form__open')) {
  const btnFormOpen = document.querySelector('.form__open');
  const btnFormClose = document.querySelector('.form__close');
  const form = document.querySelector('.form');
  if (btnFormOpen) {
    btnFormOpen.addEventListener('click', () => {
      form.classList.add('_visible');
      document.body.classList.add('_lock');
      // document.querySelector('.form').classList.add("_lock");
    });
  }
  if (btnFormClose) {
    btnFormClose.addEventListener('click', () => {
      form.classList.remove('_visible');
      document.body.classList.remove('_lock');
      // document.querySelector('.form').classList.remove("_lock");
    })
  }
}

// маска на телефон формы
const tel = document.querySelector('#tel');
var maskOptions = {
  mask: '{+998}(00)000-00-00'
};

if (tel) {
  tel.onfocus = function() {
    tel.value = "+998(";
    mask.updateValue();
  };
  tel.oninput = function() {
    if (tel.value == "9") {
      tel.value = "+998(9";
    } else if (tel.value == "+") {
      tel.value = "+998(";
    } else if (tel.value == "8") {
      tel.value = "+998(8";
    }
  };
  var mask = IMask(tel, maskOptions);
}

"use strict"
// менять моложение относительно положения мыши
window.onload = function () {
  const parallax = document.querySelector('.content');
  const paralaxItem1 = document.querySelector('.anim__background-mask');
  const paralaxItem2 = document.querySelector('.anim__background-cloud');
  const paralaxItem3 = document.querySelector('.anim__background-squareP');
  const paralaxItem4 = document.querySelector('.anim__background-squareB');
  const paralaxItem5 = document.querySelector('.anim__background-rectangle');
  const paralaxItem6 = document.querySelector('.anim-bg-pills');
  const paralaxItem7 = document.querySelector('.experts__swiper-bg');
  const paralaxItem8 = document.querySelector('.anim__bg-atom');
  const paralaxItem9 = document.querySelector('.header__cursor');
  const paralaxItem10 = document.querySelector('.anim__bg-middle');
  
  if (parallax) {
    const changer = 25;
    const changer2 = 50;

    const speed = 0.15;

    let positionX = 0, positionY=0;
    let coordXpercent = 0, coordYpercent = 0;

    function setMousePrallaxStyle() {
      const distX = coordXpercent - positionX;
      const distY = coordYpercent - positionY;

      positionX = positionX + (distX * speed);
      positionY = positionY + (distY * speed);
      
      if (paralaxItem1) {
        paralaxItem1.style.cssText = `transform: translate(${positionX / changer}%,${positionY / changer}%);`;
      };
      if (paralaxItem2) {
        paralaxItem2.style.cssText = `transform: translate(${positionX / changer2}%,${positionY / changer2}%);`;
      }; 
      if (paralaxItem3) {
        paralaxItem3.style.cssText = `transform: translate(${positionX / changer}%,${positionY / changer}%) rotate(45deg);`;
      }; 
      if (paralaxItem4) {
        paralaxItem4.style.cssText = `transform: translate(${positionX / changer}%,${positionY / changer}%);`;
      }; 
      if (paralaxItem5) {
        paralaxItem5.style.cssText = `transform: translate(${positionX / changer}%,${positionY / changer}%);`;
      }; 
      if (paralaxItem6) {
        paralaxItem6.style.cssText = `transform: translate(${positionX / changer2}%,${positionY / changer2}%);`;
      };
      if (paralaxItem7) {
        paralaxItem7.style.cssText = `transform: translate(${positionX / changer2}%,${positionY / changer2}%) rotate(37deg);`;
      };
      if (paralaxItem8) {
        paralaxItem8.style.cssText = `transform: translate(${positionX / changer}%,${positionY / changer}%);`;
      };
      if (paralaxItem9) {
        paralaxItem9.style.cssText = `transform: translate(${positionX / changer2}%,${positionY / changer2}%);`;
      };
      if (paralaxItem10) {
        paralaxItem10.style.cssText = `transform: translate(${positionX / changer2}%,${positionY / changer2}%);`;
      };

      requestAnimationFrame(setMousePrallaxStyle);
    }
    setMousePrallaxStyle();

    parallax.addEventListener("mousemove", function(e) {
      const parallaxWidth = parallax.offsetWidth;
      const parallaxHeight = parallax.offsetHeight;

      const coordX = e.pageX - parallaxWidth / 2;
      const coordY = e.pageY - parallaxHeight / 2;

      coordXpercent = (coordX / parallaxWidth) * 400;
      coordYpercent = (coordY / parallaxHeight) * 500;
    });
  }
};

