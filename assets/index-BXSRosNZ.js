(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();const Ar={};let lu=null,rr=null,Yi=null;function dn(n,e){Ar[n]=e}function ye(n,e={}){rr&&(rr(),rr=null),lu=n,window.location.hash=n;const t=document.getElementById("main-content");if(t){if(t.innerHTML="",t.className="main-content screen-enter",Ar[n]){const s=Ar[n](t,e);typeof s=="function"&&(rr=s)}Yi&&Yi(n,e)}}function wf(n){Yi=n}function Af(n="home"){window.addEventListener("hashchange",()=>{const t=window.location.hash.slice(1)||n;t!==lu&&Ar[t]&&ye(t)});const e=window.location.hash.slice(1)||n;ye(e)}const Aa="bgc_";function uu(n,e){try{return localStorage.setItem(Aa+n,JSON.stringify(e)),!0}catch(t){return console.warn("Storage save failed:",t),!1}}function du(n,e=null){try{const t=localStorage.getItem(Aa+n);return t?JSON.parse(t):e}catch(t){return console.warn("Storage load failed:",t),e}}function Sf(){Object.keys(localStorage).filter(e=>e.startsWith(Aa)).forEach(e=>localStorage.removeItem(e))}const Rf=()=>{};var Cc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Pf=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[t++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[t++],o=n[t++],l=n[t++],u=((r&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(u>>10)),e[s++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],o=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},fu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],o=r+1<n.length,l=o?n[r+1]:0,u=r+2<n.length,h=u?n[r+2]:0,f=i>>2,y=(i&3)<<4|l>>4;let b=(l&15)<<2|h>>6,A=h&63;u||(A=64,o||(b=64)),s.push(t[f],t[y],t[b],t[A])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(hu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Pf(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=t[n.charAt(r++)],l=r<n.length?t[n.charAt(r)]:0;++r;const h=r<n.length?t[n.charAt(r)]:64;++r;const y=r<n.length?t[n.charAt(r)]:64;if(++r,i==null||l==null||h==null||y==null)throw new Cf;const b=i<<2|l>>4;if(s.push(b),h!==64){const A=l<<4&240|h>>2;if(s.push(A),y!==64){const P=h<<6&192|y;s.push(P)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Cf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const kf=function(n){const e=hu(n);return fu.encodeByteArray(e,!0)},Sr=function(n){return kf(n).replace(/\./g,"")},mu=function(n){try{return fu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf=()=>Df().__FIREBASE_DEFAULTS__,xf=()=>{if(typeof process>"u"||typeof Cc>"u")return;const n=Cc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Vf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&mu(n[1]);return e&&JSON.parse(e)},Gr=()=>{try{return Rf()||Nf()||xf()||Vf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},pu=n=>{var e,t;return(t=(e=Gr())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Lf=n=>{const e=pu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},gu=()=>{var n;return(n=Gr())==null?void 0:n.config},vu=n=>{var e;return(e=Gr())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function yu(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Of(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Sr(JSON.stringify(t)),Sr(JSON.stringify(o)),""].join(".")}const fs={};function Ff(){const n={prod:[],emulator:[]};for(const e of Object.keys(fs))fs[e]?n.emulator.push(e):n.prod.push(e);return n}function Uf(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let kc=!1;function _u(n,e){if(typeof window>"u"||typeof document>"u"||!Ln(window.location.host)||fs[n]===e||fs[n]||kc)return;fs[n]=e;function t(b){return`__firebase__banner__${b}`}const s="__firebase__banner",i=Ff().prod.length>0;function o(){const b=document.getElementById(s);b&&b.remove()}function l(b){b.style.display="flex",b.style.background="#7faaf0",b.style.position="fixed",b.style.bottom="5px",b.style.left="5px",b.style.padding=".5em",b.style.borderRadius="5px",b.style.alignItems="center"}function u(b,A){b.setAttribute("width","24"),b.setAttribute("id",A),b.setAttribute("height","24"),b.setAttribute("viewBox","0 0 24 24"),b.setAttribute("fill","none"),b.style.marginLeft="-6px"}function h(){const b=document.createElement("span");return b.style.cursor="pointer",b.style.marginLeft="16px",b.style.fontSize="24px",b.innerHTML=" &times;",b.onclick=()=>{kc=!0,o()},b}function f(b,A){b.setAttribute("id",A),b.innerText="Learn more",b.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",b.setAttribute("target","__blank"),b.style.paddingLeft="5px",b.style.textDecoration="underline"}function y(){const b=Uf(s),A=t("text"),P=document.getElementById(A)||document.createElement("span"),S=t("learnmore"),N=document.getElementById(S)||document.createElement("a"),D=t("preprendIcon"),V=document.getElementById(D)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(b.created){const B=b.element;l(B),f(N,S);const F=h();u(V,D),B.append(V,P,N,F),document.body.appendChild(B)}i?(P.innerText="Preview backend disconnected.",V.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(V.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",A)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",y):y()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Le())}function $f(){var e;const n=(e=Gr())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Bf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function jf(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function zf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Hf(){const n=Le();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Gf(){return!$f()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Jf(){try{return typeof indexedDB=="object"}catch{return!1}}function Qf(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf="FirebaseError";class gt extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Wf,Object.setPrototypeOf(this,gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ds.prototype.create)}}class Ds{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Kf(i,s):"Error",l=`${this.serviceName}: ${o} (${r}).`;return new gt(r,l,s)}}function Kf(n,e){return n.replace(Yf,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Yf=/\{\$([^}]+)}/g;function Xf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function sn(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const i=n[r],o=e[r];if(Dc(i)&&Dc(o)){if(!sn(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function Dc(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Zf(n,e){const t=new em(n,e);return t.subscribe.bind(t)}class em{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let r;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");tm(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:s},r.next===void 0&&(r.next=Ui),r.error===void 0&&(r.error=Ui),r.complete===void 0&&(r.complete=Ui);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tm(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ui(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(n){return n&&n._delegate?n._delegate:n}class rn{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Mf;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rm(e))try{this.getOrInitializeService({instanceIdentifier:Kt})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Kt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Kt){return this.instances.has(e)}getOptions(e=Kt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);s===l&&o.resolve(r)}return r}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&e(i,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:sm(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Kt){return this.component?this.component.multipleInstances?e:Kt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sm(n){return n===Kt?void 0:n}function rm(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new nm(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Z||(Z={}));const am={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},om=Z.INFO,cm={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},lm=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=cm[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Sa{constructor(e){this.name=e,this._logLevel=om,this._logHandler=lm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?am[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const um=(n,e)=>e.some(t=>n instanceof t);let Nc,xc;function dm(){return Nc||(Nc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hm(){return xc||(xc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bu=new WeakMap,Xi=new WeakMap,Eu=new WeakMap,qi=new WeakMap,Ra=new WeakMap;function fm(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(Ct(n.result)),r()},o=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&bu.set(t,n)}).catch(()=>{}),Ra.set(e,n),e}function mm(n){if(Xi.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});Xi.set(n,e)}let Zi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Xi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Eu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ct(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function pm(n){Zi=n(Zi)}function gm(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call($i(this),e,...t);return Eu.set(s,e.sort?e.sort():[e]),Ct(s)}:hm().includes(n)?function(...e){return n.apply($i(this),e),Ct(bu.get(this))}:function(...e){return Ct(n.apply($i(this),e))}}function vm(n){return typeof n=="function"?gm(n):(n instanceof IDBTransaction&&mm(n),um(n,dm())?new Proxy(n,Zi):n)}function Ct(n){if(n instanceof IDBRequest)return fm(n);if(qi.has(n))return qi.get(n);const e=vm(n);return e!==n&&(qi.set(n,e),Ra.set(e,n)),e}const $i=n=>Ra.get(n);function ym(n,e,{blocked:t,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(n,e),l=Ct(o);return s&&o.addEventListener("upgradeneeded",u=>{s(Ct(o.result),u.oldVersion,u.newVersion,Ct(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),r&&u.addEventListener("versionchange",h=>r(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const _m=["get","getKey","getAll","getAllKeys","count"],bm=["put","add","delete","clear"],Bi=new Map;function Vc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Bi.get(e))return Bi.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=bm.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||_m.includes(t)))return;const i=async function(o,...l){const u=this.transaction(o,r?"readwrite":"readonly");let h=u.store;return s&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),r&&u.done]))[0]};return Bi.set(e,i),i}pm(n=>({...n,get:(e,t,s)=>Vc(e,t)||n.get(e,t,s),has:(e,t)=>!!Vc(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Tm(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Tm(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ea="@firebase/app",Lc="0.14.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht=new Sa("@firebase/app"),Im="@firebase/app-compat",wm="@firebase/analytics-compat",Am="@firebase/analytics",Sm="@firebase/app-check-compat",Rm="@firebase/app-check",Pm="@firebase/auth",Cm="@firebase/auth-compat",km="@firebase/database",Dm="@firebase/data-connect",Nm="@firebase/database-compat",xm="@firebase/functions",Vm="@firebase/functions-compat",Lm="@firebase/installations",Mm="@firebase/installations-compat",Om="@firebase/messaging",Fm="@firebase/messaging-compat",Um="@firebase/performance",qm="@firebase/performance-compat",$m="@firebase/remote-config",Bm="@firebase/remote-config-compat",jm="@firebase/storage",zm="@firebase/storage-compat",Hm="@firebase/firestore",Gm="@firebase/ai",Jm="@firebase/firestore-compat",Qm="firebase",Wm="12.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta="[DEFAULT]",Km={[ea]:"fire-core",[Im]:"fire-core-compat",[Am]:"fire-analytics",[wm]:"fire-analytics-compat",[Rm]:"fire-app-check",[Sm]:"fire-app-check-compat",[Pm]:"fire-auth",[Cm]:"fire-auth-compat",[km]:"fire-rtdb",[Dm]:"fire-data-connect",[Nm]:"fire-rtdb-compat",[xm]:"fire-fn",[Vm]:"fire-fn-compat",[Lm]:"fire-iid",[Mm]:"fire-iid-compat",[Om]:"fire-fcm",[Fm]:"fire-fcm-compat",[Um]:"fire-perf",[qm]:"fire-perf-compat",[$m]:"fire-rc",[Bm]:"fire-rc-compat",[jm]:"fire-gcs",[zm]:"fire-gcs-compat",[Hm]:"fire-fst",[Jm]:"fire-fst-compat",[Gm]:"fire-vertex","fire-js":"fire-js",[Qm]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=new Map,Ym=new Map,na=new Map;function Mc(n,e){try{n.container.addComponent(e)}catch(t){ht.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Rn(n){const e=n.name;if(na.has(e))return ht.debug(`There were multiple attempts to register component ${e}.`),!1;na.set(e,n);for(const t of Rr.values())Mc(t,n);for(const t of Ym.values())Mc(t,n);return!0}function Pa(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Qe(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},kt=new Ds("app","Firebase",Xm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn=Wm;function Tu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:ta,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw kt.create("bad-app-name",{appName:String(r)});if(t||(t=gu()),!t)throw kt.create("no-options");const i=Rr.get(r);if(i){if(sn(t,i.options)&&sn(s,i.config))return i;throw kt.create("duplicate-app",{appName:r})}const o=new im(r);for(const u of na.values())o.addComponent(u);const l=new Zm(t,s,o);return Rr.set(r,l),l}function Iu(n=ta){const e=Rr.get(n);if(!e&&n===ta&&gu())return Tu();if(!e)throw kt.create("no-app",{appName:n});return e}function Dt(n,e,t){let s=Km[n]??n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const o=[`Unable to register library "${s}" with version "${e}":`];r&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ht.warn(o.join(" "));return}Rn(new rn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep="firebase-heartbeat-database",tp=1,Es="firebase-heartbeat-store";let ji=null;function wu(){return ji||(ji=ym(ep,tp,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Es)}catch(t){console.warn(t)}}}}).catch(n=>{throw kt.create("idb-open",{originalErrorMessage:n.message})})),ji}async function np(n){try{const t=(await wu()).transaction(Es),s=await t.objectStore(Es).get(Au(n));return await t.done,s}catch(e){if(e instanceof gt)ht.warn(e.message);else{const t=kt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ht.warn(t.message)}}}async function Oc(n,e){try{const s=(await wu()).transaction(Es,"readwrite");await s.objectStore(Es).put(e,Au(n)),await s.done}catch(t){if(t instanceof gt)ht.warn(t.message);else{const s=kt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ht.warn(s.message)}}}function Au(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp=1024,rp=30;class ip{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new op(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Fc();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>rp){const o=cp(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){ht.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Fc(),{heartbeatsToSend:s,unsentEntries:r}=ap(this._heartbeatsCache.heartbeats),i=Sr(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return ht.warn(t),""}}}function Fc(){return new Date().toISOString().substring(0,10)}function ap(n,e=sp){const t=[];let s=n.slice();for(const r of n){const i=t.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Uc(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),Uc(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class op{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Jf()?Qf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await np(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Oc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Oc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Uc(n){return Sr(JSON.stringify({version:2,heartbeats:n})).length}function cp(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lp(n){Rn(new rn("platform-logger",e=>new Em(e),"PRIVATE")),Rn(new rn("heartbeat",e=>new ip(e),"PRIVATE")),Dt(ea,Lc,n),Dt(ea,Lc,"esm2020"),Dt("fire-js","")}lp("");var up="firebase",dp="12.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dt(up,dp,"app");var qc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Nt,Su;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,v){function m(){}m.prototype=v.prototype,T.F=v.prototype,T.prototype=new m,T.prototype.constructor=T,T.D=function(g,E,I){for(var _=Array(arguments.length-2),O=2;O<arguments.length;O++)_[O-2]=arguments[O];return v.prototype[E].apply(g,_)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(T,v,m){m||(m=0);const g=Array(16);if(typeof v=="string")for(var E=0;E<16;++E)g[E]=v.charCodeAt(m++)|v.charCodeAt(m++)<<8|v.charCodeAt(m++)<<16|v.charCodeAt(m++)<<24;else for(E=0;E<16;++E)g[E]=v[m++]|v[m++]<<8|v[m++]<<16|v[m++]<<24;v=T.g[0],m=T.g[1],E=T.g[2];let I=T.g[3],_;_=v+(I^m&(E^I))+g[0]+3614090360&4294967295,v=m+(_<<7&4294967295|_>>>25),_=I+(E^v&(m^E))+g[1]+3905402710&4294967295,I=v+(_<<12&4294967295|_>>>20),_=E+(m^I&(v^m))+g[2]+606105819&4294967295,E=I+(_<<17&4294967295|_>>>15),_=m+(v^E&(I^v))+g[3]+3250441966&4294967295,m=E+(_<<22&4294967295|_>>>10),_=v+(I^m&(E^I))+g[4]+4118548399&4294967295,v=m+(_<<7&4294967295|_>>>25),_=I+(E^v&(m^E))+g[5]+1200080426&4294967295,I=v+(_<<12&4294967295|_>>>20),_=E+(m^I&(v^m))+g[6]+2821735955&4294967295,E=I+(_<<17&4294967295|_>>>15),_=m+(v^E&(I^v))+g[7]+4249261313&4294967295,m=E+(_<<22&4294967295|_>>>10),_=v+(I^m&(E^I))+g[8]+1770035416&4294967295,v=m+(_<<7&4294967295|_>>>25),_=I+(E^v&(m^E))+g[9]+2336552879&4294967295,I=v+(_<<12&4294967295|_>>>20),_=E+(m^I&(v^m))+g[10]+4294925233&4294967295,E=I+(_<<17&4294967295|_>>>15),_=m+(v^E&(I^v))+g[11]+2304563134&4294967295,m=E+(_<<22&4294967295|_>>>10),_=v+(I^m&(E^I))+g[12]+1804603682&4294967295,v=m+(_<<7&4294967295|_>>>25),_=I+(E^v&(m^E))+g[13]+4254626195&4294967295,I=v+(_<<12&4294967295|_>>>20),_=E+(m^I&(v^m))+g[14]+2792965006&4294967295,E=I+(_<<17&4294967295|_>>>15),_=m+(v^E&(I^v))+g[15]+1236535329&4294967295,m=E+(_<<22&4294967295|_>>>10),_=v+(E^I&(m^E))+g[1]+4129170786&4294967295,v=m+(_<<5&4294967295|_>>>27),_=I+(m^E&(v^m))+g[6]+3225465664&4294967295,I=v+(_<<9&4294967295|_>>>23),_=E+(v^m&(I^v))+g[11]+643717713&4294967295,E=I+(_<<14&4294967295|_>>>18),_=m+(I^v&(E^I))+g[0]+3921069994&4294967295,m=E+(_<<20&4294967295|_>>>12),_=v+(E^I&(m^E))+g[5]+3593408605&4294967295,v=m+(_<<5&4294967295|_>>>27),_=I+(m^E&(v^m))+g[10]+38016083&4294967295,I=v+(_<<9&4294967295|_>>>23),_=E+(v^m&(I^v))+g[15]+3634488961&4294967295,E=I+(_<<14&4294967295|_>>>18),_=m+(I^v&(E^I))+g[4]+3889429448&4294967295,m=E+(_<<20&4294967295|_>>>12),_=v+(E^I&(m^E))+g[9]+568446438&4294967295,v=m+(_<<5&4294967295|_>>>27),_=I+(m^E&(v^m))+g[14]+3275163606&4294967295,I=v+(_<<9&4294967295|_>>>23),_=E+(v^m&(I^v))+g[3]+4107603335&4294967295,E=I+(_<<14&4294967295|_>>>18),_=m+(I^v&(E^I))+g[8]+1163531501&4294967295,m=E+(_<<20&4294967295|_>>>12),_=v+(E^I&(m^E))+g[13]+2850285829&4294967295,v=m+(_<<5&4294967295|_>>>27),_=I+(m^E&(v^m))+g[2]+4243563512&4294967295,I=v+(_<<9&4294967295|_>>>23),_=E+(v^m&(I^v))+g[7]+1735328473&4294967295,E=I+(_<<14&4294967295|_>>>18),_=m+(I^v&(E^I))+g[12]+2368359562&4294967295,m=E+(_<<20&4294967295|_>>>12),_=v+(m^E^I)+g[5]+4294588738&4294967295,v=m+(_<<4&4294967295|_>>>28),_=I+(v^m^E)+g[8]+2272392833&4294967295,I=v+(_<<11&4294967295|_>>>21),_=E+(I^v^m)+g[11]+1839030562&4294967295,E=I+(_<<16&4294967295|_>>>16),_=m+(E^I^v)+g[14]+4259657740&4294967295,m=E+(_<<23&4294967295|_>>>9),_=v+(m^E^I)+g[1]+2763975236&4294967295,v=m+(_<<4&4294967295|_>>>28),_=I+(v^m^E)+g[4]+1272893353&4294967295,I=v+(_<<11&4294967295|_>>>21),_=E+(I^v^m)+g[7]+4139469664&4294967295,E=I+(_<<16&4294967295|_>>>16),_=m+(E^I^v)+g[10]+3200236656&4294967295,m=E+(_<<23&4294967295|_>>>9),_=v+(m^E^I)+g[13]+681279174&4294967295,v=m+(_<<4&4294967295|_>>>28),_=I+(v^m^E)+g[0]+3936430074&4294967295,I=v+(_<<11&4294967295|_>>>21),_=E+(I^v^m)+g[3]+3572445317&4294967295,E=I+(_<<16&4294967295|_>>>16),_=m+(E^I^v)+g[6]+76029189&4294967295,m=E+(_<<23&4294967295|_>>>9),_=v+(m^E^I)+g[9]+3654602809&4294967295,v=m+(_<<4&4294967295|_>>>28),_=I+(v^m^E)+g[12]+3873151461&4294967295,I=v+(_<<11&4294967295|_>>>21),_=E+(I^v^m)+g[15]+530742520&4294967295,E=I+(_<<16&4294967295|_>>>16),_=m+(E^I^v)+g[2]+3299628645&4294967295,m=E+(_<<23&4294967295|_>>>9),_=v+(E^(m|~I))+g[0]+4096336452&4294967295,v=m+(_<<6&4294967295|_>>>26),_=I+(m^(v|~E))+g[7]+1126891415&4294967295,I=v+(_<<10&4294967295|_>>>22),_=E+(v^(I|~m))+g[14]+2878612391&4294967295,E=I+(_<<15&4294967295|_>>>17),_=m+(I^(E|~v))+g[5]+4237533241&4294967295,m=E+(_<<21&4294967295|_>>>11),_=v+(E^(m|~I))+g[12]+1700485571&4294967295,v=m+(_<<6&4294967295|_>>>26),_=I+(m^(v|~E))+g[3]+2399980690&4294967295,I=v+(_<<10&4294967295|_>>>22),_=E+(v^(I|~m))+g[10]+4293915773&4294967295,E=I+(_<<15&4294967295|_>>>17),_=m+(I^(E|~v))+g[1]+2240044497&4294967295,m=E+(_<<21&4294967295|_>>>11),_=v+(E^(m|~I))+g[8]+1873313359&4294967295,v=m+(_<<6&4294967295|_>>>26),_=I+(m^(v|~E))+g[15]+4264355552&4294967295,I=v+(_<<10&4294967295|_>>>22),_=E+(v^(I|~m))+g[6]+2734768916&4294967295,E=I+(_<<15&4294967295|_>>>17),_=m+(I^(E|~v))+g[13]+1309151649&4294967295,m=E+(_<<21&4294967295|_>>>11),_=v+(E^(m|~I))+g[4]+4149444226&4294967295,v=m+(_<<6&4294967295|_>>>26),_=I+(m^(v|~E))+g[11]+3174756917&4294967295,I=v+(_<<10&4294967295|_>>>22),_=E+(v^(I|~m))+g[2]+718787259&4294967295,E=I+(_<<15&4294967295|_>>>17),_=m+(I^(E|~v))+g[9]+3951481745&4294967295,T.g[0]=T.g[0]+v&4294967295,T.g[1]=T.g[1]+(E+(_<<21&4294967295|_>>>11))&4294967295,T.g[2]=T.g[2]+E&4294967295,T.g[3]=T.g[3]+I&4294967295}s.prototype.v=function(T,v){v===void 0&&(v=T.length);const m=v-this.blockSize,g=this.C;let E=this.h,I=0;for(;I<v;){if(E==0)for(;I<=m;)r(this,T,I),I+=this.blockSize;if(typeof T=="string"){for(;I<v;)if(g[E++]=T.charCodeAt(I++),E==this.blockSize){r(this,g),E=0;break}}else for(;I<v;)if(g[E++]=T[I++],E==this.blockSize){r(this,g),E=0;break}}this.h=E,this.o+=v},s.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var v=1;v<T.length-8;++v)T[v]=0;v=this.o*8;for(var m=T.length-8;m<T.length;++m)T[m]=v&255,v/=256;for(this.v(T),T=Array(16),v=0,m=0;m<4;++m)for(let g=0;g<32;g+=8)T[v++]=this.g[m]>>>g&255;return T};function i(T,v){var m=l;return Object.prototype.hasOwnProperty.call(m,T)?m[T]:m[T]=v(T)}function o(T,v){this.h=v;const m=[];let g=!0;for(let E=T.length-1;E>=0;E--){const I=T[E]|0;g&&I==v||(m[E]=I,g=!1)}this.g=m}var l={};function u(T){return-128<=T&&T<128?i(T,function(v){return new o([v|0],v<0?-1:0)}):new o([T|0],T<0?-1:0)}function h(T){if(isNaN(T)||!isFinite(T))return y;if(T<0)return N(h(-T));const v=[];let m=1;for(let g=0;T>=m;g++)v[g]=T/m|0,m*=4294967296;return new o(v,0)}function f(T,v){if(T.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(T.charAt(0)=="-")return N(f(T.substring(1),v));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const m=h(Math.pow(v,8));let g=y;for(let I=0;I<T.length;I+=8){var E=Math.min(8,T.length-I);const _=parseInt(T.substring(I,I+E),v);E<8?(E=h(Math.pow(v,E)),g=g.j(E).add(h(_))):(g=g.j(m),g=g.add(h(_)))}return g}var y=u(0),b=u(1),A=u(16777216);n=o.prototype,n.m=function(){if(S(this))return-N(this).m();let T=0,v=1;for(let m=0;m<this.g.length;m++){const g=this.i(m);T+=(g>=0?g:4294967296+g)*v,v*=4294967296}return T},n.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(P(this))return"0";if(S(this))return"-"+N(this).toString(T);const v=h(Math.pow(T,6));var m=this;let g="";for(;;){const E=F(m,v).g;m=D(m,E.j(v));let I=((m.g.length>0?m.g[0]:m.h)>>>0).toString(T);if(m=E,P(m))return I+g;for(;I.length<6;)I="0"+I;g=I+g}},n.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function P(T){if(T.h!=0)return!1;for(let v=0;v<T.g.length;v++)if(T.g[v]!=0)return!1;return!0}function S(T){return T.h==-1}n.l=function(T){return T=D(this,T),S(T)?-1:P(T)?0:1};function N(T){const v=T.g.length,m=[];for(let g=0;g<v;g++)m[g]=~T.g[g];return new o(m,~T.h).add(b)}n.abs=function(){return S(this)?N(this):this},n.add=function(T){const v=Math.max(this.g.length,T.g.length),m=[];let g=0;for(let E=0;E<=v;E++){let I=g+(this.i(E)&65535)+(T.i(E)&65535),_=(I>>>16)+(this.i(E)>>>16)+(T.i(E)>>>16);g=_>>>16,I&=65535,_&=65535,m[E]=_<<16|I}return new o(m,m[m.length-1]&-2147483648?-1:0)};function D(T,v){return T.add(N(v))}n.j=function(T){if(P(this)||P(T))return y;if(S(this))return S(T)?N(this).j(N(T)):N(N(this).j(T));if(S(T))return N(this.j(N(T)));if(this.l(A)<0&&T.l(A)<0)return h(this.m()*T.m());const v=this.g.length+T.g.length,m=[];for(var g=0;g<2*v;g++)m[g]=0;for(g=0;g<this.g.length;g++)for(let E=0;E<T.g.length;E++){const I=this.i(g)>>>16,_=this.i(g)&65535,O=T.i(E)>>>16,q=T.i(E)&65535;m[2*g+2*E]+=_*q,V(m,2*g+2*E),m[2*g+2*E+1]+=I*q,V(m,2*g+2*E+1),m[2*g+2*E+1]+=_*O,V(m,2*g+2*E+1),m[2*g+2*E+2]+=I*O,V(m,2*g+2*E+2)}for(T=0;T<v;T++)m[T]=m[2*T+1]<<16|m[2*T];for(T=v;T<2*v;T++)m[T]=0;return new o(m,0)};function V(T,v){for(;(T[v]&65535)!=T[v];)T[v+1]+=T[v]>>>16,T[v]&=65535,v++}function B(T,v){this.g=T,this.h=v}function F(T,v){if(P(v))throw Error("division by zero");if(P(T))return new B(y,y);if(S(T))return v=F(N(T),v),new B(N(v.g),N(v.h));if(S(v))return v=F(T,N(v)),new B(N(v.g),v.h);if(T.g.length>30){if(S(T)||S(v))throw Error("slowDivide_ only works with positive integers.");for(var m=b,g=v;g.l(T)<=0;)m=x(m),g=x(g);var E=M(m,1),I=M(g,1);for(g=M(g,2),m=M(m,2);!P(g);){var _=I.add(g);_.l(T)<=0&&(E=E.add(m),I=_),g=M(g,1),m=M(m,1)}return v=D(T,E.j(v)),new B(E,v)}for(E=y;T.l(v)>=0;){for(m=Math.max(1,Math.floor(T.m()/v.m())),g=Math.ceil(Math.log(m)/Math.LN2),g=g<=48?1:Math.pow(2,g-48),I=h(m),_=I.j(v);S(_)||_.l(T)>0;)m-=g,I=h(m),_=I.j(v);P(I)&&(I=b),E=E.add(I),T=D(T,_)}return new B(E,T)}n.B=function(T){return F(this,T).h},n.and=function(T){const v=Math.max(this.g.length,T.g.length),m=[];for(let g=0;g<v;g++)m[g]=this.i(g)&T.i(g);return new o(m,this.h&T.h)},n.or=function(T){const v=Math.max(this.g.length,T.g.length),m=[];for(let g=0;g<v;g++)m[g]=this.i(g)|T.i(g);return new o(m,this.h|T.h)},n.xor=function(T){const v=Math.max(this.g.length,T.g.length),m=[];for(let g=0;g<v;g++)m[g]=this.i(g)^T.i(g);return new o(m,this.h^T.h)};function x(T){const v=T.g.length+1,m=[];for(let g=0;g<v;g++)m[g]=T.i(g)<<1|T.i(g-1)>>>31;return new o(m,T.h)}function M(T,v){const m=v>>5;v%=32;const g=T.g.length-m,E=[];for(let I=0;I<g;I++)E[I]=v>0?T.i(I+m)>>>v|T.i(I+m+1)<<32-v:T.i(I+m);return new o(E,T.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,Su=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Nt=o}).apply(typeof qc<"u"?qc:typeof self<"u"?self:typeof window<"u"?window:{});var ir=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ru,ls,Pu,dr,sa,Cu,ku,Du;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ir=="object"&&ir];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var s=t(this);function r(a,c){if(c)e:{var d=s;a=a.split(".");for(var p=0;p<a.length-1;p++){var w=a[p];if(!(w in d))break e;d=d[w]}a=a[a.length-1],p=d[a],c=c(p),c!=p&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}r("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(a){return a||function(c){var d=[],p;for(p in c)Object.prototype.hasOwnProperty.call(c,p)&&d.push([p,c[p]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function u(a,c,d){return a.call.apply(a.bind,arguments)}function h(a,c,d){return h=u,h.apply(null,arguments)}function f(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),a.apply(this,p)}}function y(a,c){function d(){}d.prototype=c.prototype,a.Z=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(p,w,R){for(var L=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)L[Y-2]=arguments[Y];return c.prototype[w].apply(p,L)}}var b=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function A(a){const c=a.length;if(c>0){const d=Array(c);for(let p=0;p<c;p++)d[p]=a[p];return d}return[]}function P(a,c){for(let p=1;p<arguments.length;p++){const w=arguments[p];var d=typeof w;if(d=d!="object"?d:w?Array.isArray(w)?"array":d:"null",d=="array"||d=="object"&&typeof w.length=="number"){d=a.length||0;const R=w.length||0;a.length=d+R;for(let L=0;L<R;L++)a[d+L]=w[L]}else a.push(w)}}class S{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function N(a){o.setTimeout(()=>{throw a},0)}function D(){var a=T;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class V{constructor(){this.h=this.g=null}add(c,d){const p=B.get();p.set(c,d),this.h?this.h.next=p:this.g=p,this.h=p}}var B=new S(()=>new F,a=>a.reset());class F{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let x,M=!1,T=new V,v=()=>{const a=Promise.resolve(void 0);x=()=>{a.then(m)}};function m(){for(var a;a=D();){try{a.h.call(a.g)}catch(d){N(d)}var c=B;c.j(a),c.h<100&&(c.h++,a.next=c.g,c.g=a)}M=!1}function g(){this.u=this.u,this.C=this.C}g.prototype.u=!1,g.prototype.dispose=function(){this.u||(this.u=!0,this.N())},g.prototype[Symbol.dispose]=function(){this.dispose()},g.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var I=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,c),o.removeEventListener("test",d,c)}catch{}return a})();function _(a){return/^[\s\xa0]*$/.test(a)}function O(a,c){E.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,c)}y(O,E),O.prototype.init=function(a,c){const d=this.type=a.type,p=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget,c||(d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement)),this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&O.Z.h.call(this)},O.prototype.h=function(){O.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var q="closure_listenable_"+(Math.random()*1e6|0),H=0;function X(a,c,d,p,w){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!p,this.ha=w,this.key=++H,this.da=this.fa=!1}function ie(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ge(a,c,d){for(const p in a)c.call(d,a[p],p,a)}function zs(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function Hn(a){const c={};for(const d in a)c[d]=a[d];return c}const Co="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ko(a,c){let d,p;for(let w=1;w<arguments.length;w++){p=arguments[w];for(d in p)a[d]=p[d];for(let R=0;R<Co.length;R++)d=Co[R],Object.prototype.hasOwnProperty.call(p,d)&&(a[d]=p[d])}}function Hs(a){this.src=a,this.g={},this.h=0}Hs.prototype.add=function(a,c,d,p,w){const R=a.toString();a=this.g[R],a||(a=this.g[R]=[],this.h++);const L=gi(a,c,p,w);return L>-1?(c=a[L],d||(c.fa=!1)):(c=new X(c,this.src,R,!!p,w),c.fa=d,a.push(c)),c};function pi(a,c){const d=c.type;if(d in a.g){var p=a.g[d],w=Array.prototype.indexOf.call(p,c,void 0),R;(R=w>=0)&&Array.prototype.splice.call(p,w,1),R&&(ie(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function gi(a,c,d,p){for(let w=0;w<a.length;++w){const R=a[w];if(!R.da&&R.listener==c&&R.capture==!!d&&R.ha==p)return w}return-1}var vi="closure_lm_"+(Math.random()*1e6|0),yi={};function Do(a,c,d,p,w){if(Array.isArray(c)){for(let R=0;R<c.length;R++)Do(a,c[R],d,p,w);return null}return d=Vo(d),a&&a[q]?a.J(c,d,l(p)?!!p.capture:!1,w):Qh(a,c,d,!1,p,w)}function Qh(a,c,d,p,w,R){if(!c)throw Error("Invalid event type");const L=l(w)?!!w.capture:!!w;let Y=bi(a);if(Y||(a[vi]=Y=new Hs(a)),d=Y.add(c,d,p,L,R),d.proxy)return d;if(p=Wh(),d.proxy=p,p.src=a,p.listener=d,a.addEventListener)I||(w=L),w===void 0&&(w=!1),a.addEventListener(c.toString(),p,w);else if(a.attachEvent)a.attachEvent(xo(c.toString()),p);else if(a.addListener&&a.removeListener)a.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Wh(){function a(d){return c.call(a.src,a.listener,d)}const c=Kh;return a}function No(a,c,d,p,w){if(Array.isArray(c))for(var R=0;R<c.length;R++)No(a,c[R],d,p,w);else p=l(p)?!!p.capture:!!p,d=Vo(d),a&&a[q]?(a=a.i,R=String(c).toString(),R in a.g&&(c=a.g[R],d=gi(c,d,p,w),d>-1&&(ie(c[d]),Array.prototype.splice.call(c,d,1),c.length==0&&(delete a.g[R],a.h--)))):a&&(a=bi(a))&&(c=a.g[c.toString()],a=-1,c&&(a=gi(c,d,p,w)),(d=a>-1?c[a]:null)&&_i(d))}function _i(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[q])pi(c.i,a);else{var d=a.type,p=a.proxy;c.removeEventListener?c.removeEventListener(d,p,a.capture):c.detachEvent?c.detachEvent(xo(d),p):c.addListener&&c.removeListener&&c.removeListener(p),(d=bi(c))?(pi(d,a),d.h==0&&(d.src=null,c[vi]=null)):ie(a)}}}function xo(a){return a in yi?yi[a]:yi[a]="on"+a}function Kh(a,c){if(a.da)a=!0;else{c=new O(c,this);const d=a.listener,p=a.ha||a.src;a.fa&&_i(a),a=d.call(p,c)}return a}function bi(a){return a=a[vi],a instanceof Hs?a:null}var Ei="__closure_events_fn_"+(Math.random()*1e9>>>0);function Vo(a){return typeof a=="function"?a:(a[Ei]||(a[Ei]=function(c){return a.handleEvent(c)}),a[Ei])}function Ce(){g.call(this),this.i=new Hs(this),this.M=this,this.G=null}y(Ce,g),Ce.prototype[q]=!0,Ce.prototype.removeEventListener=function(a,c,d,p){No(this,a,c,d,p)};function Me(a,c){var d,p=a.G;if(p)for(d=[];p;p=p.G)d.push(p);if(a=a.M,p=c.type||c,typeof c=="string")c=new E(c,a);else if(c instanceof E)c.target=c.target||a;else{var w=c;c=new E(p,a),ko(c,w)}w=!0;let R,L;if(d)for(L=d.length-1;L>=0;L--)R=c.g=d[L],w=Gs(R,p,!0,c)&&w;if(R=c.g=a,w=Gs(R,p,!0,c)&&w,w=Gs(R,p,!1,c)&&w,d)for(L=0;L<d.length;L++)R=c.g=d[L],w=Gs(R,p,!1,c)&&w}Ce.prototype.N=function(){if(Ce.Z.N.call(this),this.i){var a=this.i;for(const c in a.g){const d=a.g[c];for(let p=0;p<d.length;p++)ie(d[p]);delete a.g[c],a.h--}}this.G=null},Ce.prototype.J=function(a,c,d,p){return this.i.add(String(a),c,!1,d,p)},Ce.prototype.K=function(a,c,d,p){return this.i.add(String(a),c,!0,d,p)};function Gs(a,c,d,p){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();let w=!0;for(let R=0;R<c.length;++R){const L=c[R];if(L&&!L.da&&L.capture==d){const Y=L.listener,be=L.ha||L.src;L.fa&&pi(a.i,L),w=Y.call(be,p)!==!1&&w}}return w&&!p.defaultPrevented}function Yh(a,c){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:o.setTimeout(a,c||0)}function Lo(a){a.g=Yh(()=>{a.g=null,a.i&&(a.i=!1,Lo(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class Xh extends g{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Lo(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Gn(a){g.call(this),this.h=a,this.g={}}y(Gn,g);var Mo=[];function Oo(a){Ge(a.g,function(c,d){this.g.hasOwnProperty(d)&&_i(c)},a),a.g={}}Gn.prototype.N=function(){Gn.Z.N.call(this),Oo(this)},Gn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ti=o.JSON.stringify,Zh=o.JSON.parse,ef=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Fo(){}function Uo(){}var Jn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ii(){E.call(this,"d")}y(Ii,E);function wi(){E.call(this,"c")}y(wi,E);var Ht={},qo=null;function Js(){return qo=qo||new Ce}Ht.Ia="serverreachability";function $o(a){E.call(this,Ht.Ia,a)}y($o,E);function Qn(a){const c=Js();Me(c,new $o(c))}Ht.STAT_EVENT="statevent";function Bo(a,c){E.call(this,Ht.STAT_EVENT,a),this.stat=c}y(Bo,E);function Oe(a){const c=Js();Me(c,new Bo(c,a))}Ht.Ja="timingevent";function jo(a,c){E.call(this,Ht.Ja,a),this.size=c}y(jo,E);function Wn(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},c)}function Kn(){this.g=!0}Kn.prototype.ua=function(){this.g=!1};function tf(a,c,d,p,w,R){a.info(function(){if(a.g)if(R){var L="",Y=R.split("&");for(let ae=0;ae<Y.length;ae++){var be=Y[ae].split("=");if(be.length>1){const Te=be[0];be=be[1];const et=Te.split("_");L=et.length>=2&&et[1]=="type"?L+(Te+"="+be+"&"):L+(Te+"=redacted&")}}}else L=null;else L=R;return"XMLHTTP REQ ("+p+") [attempt "+w+"]: "+c+`
`+d+`
`+L})}function nf(a,c,d,p,w,R,L){a.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+w+"]: "+c+`
`+d+`
`+R+" "+L})}function mn(a,c,d,p){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+rf(a,d)+(p?" "+p:"")})}function sf(a,c){a.info(function(){return"TIMEOUT: "+c})}Kn.prototype.info=function(){};function rf(a,c){if(!a.g)return c;if(!c)return null;try{const R=JSON.parse(c);if(R){for(a=0;a<R.length;a++)if(Array.isArray(R[a])){var d=R[a];if(!(d.length<2)){var p=d[1];if(Array.isArray(p)&&!(p.length<1)){var w=p[0];if(w!="noop"&&w!="stop"&&w!="close")for(let L=1;L<p.length;L++)p[L]=""}}}}return Ti(R)}catch{return c}}var Qs={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},zo={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ho;function Ai(){}y(Ai,Fo),Ai.prototype.g=function(){return new XMLHttpRequest},Ho=new Ai;function Yn(a){return encodeURIComponent(String(a))}function af(a){var c=1;a=a.split(":");const d=[];for(;c>0&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function yt(a,c,d,p){this.j=a,this.i=c,this.l=d,this.S=p||1,this.V=new Gn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Go}function Go(){this.i=null,this.g="",this.h=!1}var Jo={},Si={};function Ri(a,c,d){a.M=1,a.A=Ks(Ze(c)),a.u=d,a.R=!0,Qo(a,null)}function Qo(a,c){a.F=Date.now(),Ws(a),a.B=Ze(a.A);var d=a.B,p=a.S;Array.isArray(p)||(p=[String(p)]),oc(d.i,"t",p),a.C=0,d=a.j.L,a.h=new Go,a.g=Ac(a.j,d?c:null,!a.u),a.P>0&&(a.O=new Xh(h(a.Y,a,a.g),a.P)),c=a.V,d=a.g,p=a.ba;var w="readystatechange";Array.isArray(w)||(w&&(Mo[0]=w.toString()),w=Mo);for(let R=0;R<w.length;R++){const L=Do(d,w[R],p||c.handleEvent,!1,c.h||c);if(!L)break;c.g[L.key]=L}c=a.J?Hn(a.J):{},a.u?(a.v||(a.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,c)):(a.v="GET",a.g.ea(a.B,a.v,null,c)),Qn(),tf(a.i,a.v,a.B,a.l,a.S,a.u)}yt.prototype.ba=function(a){a=a.target;const c=this.O;c&&Et(a)==3?c.j():this.Y(a)},yt.prototype.Y=function(a){try{if(a==this.g)e:{const Y=Et(this.g),be=this.g.ya(),ae=this.g.ca();if(!(Y<3)&&(Y!=3||this.g&&(this.h.h||this.g.la()||mc(this.g)))){this.K||Y!=4||be==7||(be==8||ae<=0?Qn(3):Qn(2)),Pi(this);var c=this.g.ca();this.X=c;var d=of(this);if(this.o=c==200,nf(this.i,this.v,this.B,this.l,this.S,Y,c),this.o){if(this.U&&!this.L){t:{if(this.g){var p,w=this.g;if((p=w.g?w.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(p)){var R=p;break t}}R=null}if(a=R)mn(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ci(this,a);else{this.o=!1,this.m=3,Oe(12),Gt(this),Xn(this);break e}}if(this.R){a=!0;let Te;for(;!this.K&&this.C<d.length;)if(Te=cf(this,d),Te==Si){Y==4&&(this.m=4,Oe(14),a=!1),mn(this.i,this.l,null,"[Incomplete Response]");break}else if(Te==Jo){this.m=4,Oe(15),mn(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else mn(this.i,this.l,Te,null),Ci(this,Te);if(Wo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Y!=4||d.length!=0||this.h.h||(this.m=1,Oe(16),a=!1),this.o=this.o&&a,!a)mn(this.i,this.l,d,"[Invalid Chunked Response]"),Gt(this),Xn(this);else if(d.length>0&&!this.W){this.W=!0;var L=this.j;L.g==this&&L.aa&&!L.P&&(L.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Oi(L),L.P=!0,Oe(11))}}else mn(this.i,this.l,d,null),Ci(this,d);Y==4&&Gt(this),this.o&&!this.K&&(Y==4?Ec(this.j,this):(this.o=!1,Ws(this)))}else Tf(this.g),c==400&&d.indexOf("Unknown SID")>0?(this.m=3,Oe(12)):(this.m=0,Oe(13)),Gt(this),Xn(this)}}}catch{}finally{}};function of(a){if(!Wo(a))return a.g.la();const c=mc(a.g);if(c==="")return"";let d="";const p=c.length,w=Et(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Gt(a),Xn(a),"";a.h.i=new o.TextDecoder}for(let R=0;R<p;R++)a.h.h=!0,d+=a.h.i.decode(c[R],{stream:!(w&&R==p-1)});return c.length=0,a.h.g+=d,a.C=0,a.h.g}function Wo(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function cf(a,c){var d=a.C,p=c.indexOf(`
`,d);return p==-1?Si:(d=Number(c.substring(d,p)),isNaN(d)?Jo:(p+=1,p+d>c.length?Si:(c=c.slice(p,p+d),a.C=p+d,c)))}yt.prototype.cancel=function(){this.K=!0,Gt(this)};function Ws(a){a.T=Date.now()+a.H,Ko(a,a.H)}function Ko(a,c){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Wn(h(a.aa,a),c)}function Pi(a){a.D&&(o.clearTimeout(a.D),a.D=null)}yt.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(sf(this.i,this.B),this.M!=2&&(Qn(),Oe(17)),Gt(this),this.m=2,Xn(this)):Ko(this,this.T-a)};function Xn(a){a.j.I==0||a.K||Ec(a.j,a)}function Gt(a){Pi(a);var c=a.O;c&&typeof c.dispose=="function"&&c.dispose(),a.O=null,Oo(a.V),a.g&&(c=a.g,a.g=null,c.abort(),c.dispose())}function Ci(a,c){try{var d=a.j;if(d.I!=0&&(d.g==a||ki(d.h,a))){if(!a.L&&ki(d.h,a)&&d.I==3){try{var p=d.Ba.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var w=p;if(w[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)tr(d),Zs(d);else break e;Mi(d),Oe(18)}}else d.xa=w[1],0<d.xa-d.K&&w[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Wn(h(d.Va,d),6e3));Zo(d.h)<=1&&d.ta&&(d.ta=void 0)}else Qt(d,11)}else if((a.L||d.g==a)&&tr(d),!_(c))for(w=d.Ba.g.parse(c),c=0;c<w.length;c++){let ae=w[c];const Te=ae[0];if(!(Te<=d.K))if(d.K=Te,ae=ae[1],d.I==2)if(ae[0]=="c"){d.M=ae[1],d.ba=ae[2];const et=ae[3];et!=null&&(d.ka=et,d.j.info("VER="+d.ka));const Wt=ae[4];Wt!=null&&(d.za=Wt,d.j.info("SVER="+d.za));const Tt=ae[5];Tt!=null&&typeof Tt=="number"&&Tt>0&&(p=1.5*Tt,d.O=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const It=a.g;if(It){const sr=It.g?It.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(sr){var R=p.h;R.g||sr.indexOf("spdy")==-1&&sr.indexOf("quic")==-1&&sr.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Di(R,R.h),R.h=null))}if(p.G){const Fi=It.g?It.g.getResponseHeader("X-HTTP-Session-Id"):null;Fi&&(p.wa=Fi,ce(p.J,p.G,Fi))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),p=d;var L=a;if(p.na=wc(p,p.L?p.ba:null,p.W),L.L){ec(p.h,L);var Y=L,be=p.O;be&&(Y.H=be),Y.D&&(Pi(Y),Ws(Y)),p.g=L}else _c(p);d.i.length>0&&er(d)}else ae[0]!="stop"&&ae[0]!="close"||Qt(d,7);else d.I==3&&(ae[0]=="stop"||ae[0]=="close"?ae[0]=="stop"?Qt(d,7):Li(d):ae[0]!="noop"&&d.l&&d.l.qa(ae),d.A=0)}}Qn(4)}catch{}}var lf=class{constructor(a,c){this.g=a,this.map=c}};function Yo(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Xo(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Zo(a){return a.h?1:a.g?a.g.size:0}function ki(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Di(a,c){a.g?a.g.add(c):a.h=c}function ec(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Yo.prototype.cancel=function(){if(this.i=tc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function tc(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.G);return c}return A(a.i)}var nc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function uf(a,c){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const p=a[d].indexOf("=");let w,R=null;p>=0?(w=a[d].substring(0,p),R=a[d].substring(p+1)):w=a[d],c(w,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function _t(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;a instanceof _t?(this.l=a.l,Zn(this,a.j),this.o=a.o,this.g=a.g,es(this,a.u),this.h=a.h,Ni(this,cc(a.i)),this.m=a.m):a&&(c=String(a).match(nc))?(this.l=!1,Zn(this,c[1]||"",!0),this.o=ts(c[2]||""),this.g=ts(c[3]||"",!0),es(this,c[4]),this.h=ts(c[5]||"",!0),Ni(this,c[6]||"",!0),this.m=ts(c[7]||"")):(this.l=!1,this.i=new ss(null,this.l))}_t.prototype.toString=function(){const a=[];var c=this.j;c&&a.push(ns(c,sc,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(ns(c,sc,!0),"@"),a.push(Yn(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(ns(d,d.charAt(0)=="/"?ff:hf,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",ns(d,pf)),a.join("")},_t.prototype.resolve=function(a){const c=Ze(this);let d=!!a.j;d?Zn(c,a.j):d=!!a.o,d?c.o=a.o:d=!!a.g,d?c.g=a.g:d=a.u!=null;var p=a.h;if(d)es(c,a.u);else if(d=!!a.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var w=c.h.lastIndexOf("/");w!=-1&&(p=c.h.slice(0,w+1)+p)}if(w=p,w==".."||w==".")p="";else if(w.indexOf("./")!=-1||w.indexOf("/.")!=-1){p=w.lastIndexOf("/",0)==0,w=w.split("/");const R=[];for(let L=0;L<w.length;){const Y=w[L++];Y=="."?p&&L==w.length&&R.push(""):Y==".."?((R.length>1||R.length==1&&R[0]!="")&&R.pop(),p&&L==w.length&&R.push("")):(R.push(Y),p=!0)}p=R.join("/")}else p=w}return d?c.h=p:d=a.i.toString()!=="",d?Ni(c,cc(a.i)):d=!!a.m,d&&(c.m=a.m),c};function Ze(a){return new _t(a)}function Zn(a,c,d){a.j=d?ts(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function es(a,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);a.u=c}else a.u=null}function Ni(a,c,d){c instanceof ss?(a.i=c,gf(a.i,a.l)):(d||(c=ns(c,mf)),a.i=new ss(c,a.l))}function ce(a,c,d){a.i.set(c,d)}function Ks(a){return ce(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function ts(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ns(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,df),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function df(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var sc=/[#\/\?@]/g,hf=/[#\?:]/g,ff=/[#\?]/g,mf=/[#\?@]/g,pf=/#/g;function ss(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Jt(a){a.g||(a.g=new Map,a.h=0,a.i&&uf(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}n=ss.prototype,n.add=function(a,c){Jt(this),this.i=null,a=pn(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function rc(a,c){Jt(a),c=pn(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function ic(a,c){return Jt(a),c=pn(a,c),a.g.has(c)}n.forEach=function(a,c){Jt(this),this.g.forEach(function(d,p){d.forEach(function(w){a.call(c,w,p,this)},this)},this)};function ac(a,c){Jt(a);let d=[];if(typeof c=="string")ic(a,c)&&(d=d.concat(a.g.get(pn(a,c))));else for(a=Array.from(a.g.values()),c=0;c<a.length;c++)d=d.concat(a[c]);return d}n.set=function(a,c){return Jt(this),this.i=null,a=pn(this,a),ic(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},n.get=function(a,c){return a?(a=ac(this,a),a.length>0?String(a[0]):c):c};function oc(a,c,d){rc(a,c),d.length>0&&(a.i=null,a.g.set(pn(a,c),A(d)),a.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(let p=0;p<c.length;p++){var d=c[p];const w=Yn(d);d=ac(this,d);for(let R=0;R<d.length;R++){let L=w;d[R]!==""&&(L+="="+Yn(d[R])),a.push(L)}}return this.i=a.join("&")};function cc(a){const c=new ss;return c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),c}function pn(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function gf(a,c){c&&!a.j&&(Jt(a),a.i=null,a.g.forEach(function(d,p){const w=p.toLowerCase();p!=w&&(rc(this,p),oc(this,w,d))},a)),a.j=c}function vf(a,c){const d=new Kn;if(o.Image){const p=new Image;p.onload=f(bt,d,"TestLoadImage: loaded",!0,c,p),p.onerror=f(bt,d,"TestLoadImage: error",!1,c,p),p.onabort=f(bt,d,"TestLoadImage: abort",!1,c,p),p.ontimeout=f(bt,d,"TestLoadImage: timeout",!1,c,p),o.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=a}else c(!1)}function yf(a,c){const d=new Kn,p=new AbortController,w=setTimeout(()=>{p.abort(),bt(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:p.signal}).then(R=>{clearTimeout(w),R.ok?bt(d,"TestPingServer: ok",!0,c):bt(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(w),bt(d,"TestPingServer: error",!1,c)})}function bt(a,c,d,p,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),p(d)}catch{}}function _f(){this.g=new ef}function xi(a){this.i=a.Sb||null,this.h=a.ab||!1}y(xi,Fo),xi.prototype.g=function(){return new Ys(this.i,this.h)};function Ys(a,c){Ce.call(this),this.H=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}y(Ys,Ce),n=Ys.prototype,n.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=c,this.readyState=1,is(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(c.body=a),(this.H||o).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,rs(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,is(this)),this.g&&(this.readyState=3,is(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;lc(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function lc(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?rs(this):is(this),this.readyState==3&&lc(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,rs(this))},n.Na=function(a){this.g&&(this.response=a,rs(this))},n.ga=function(){this.g&&rs(this)};function rs(a){a.readyState=4,a.l=null,a.j=null,a.B=null,is(a)}n.setRequestHeader=function(a,c){this.A.append(a,c)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function is(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ys.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function uc(a){let c="";return Ge(a,function(d,p){c+=p,c+=":",c+=d,c+=`\r
`}),c}function Vi(a,c,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=uc(d),typeof a=="string"?d!=null&&Yn(d):ce(a,c,d))}function he(a){Ce.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}y(he,Ce);var bf=/^https?$/i,Ef=["POST","PUT"];n=he.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,c,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ho.g(),this.g.onreadystatechange=b(h(this.Ca,this));try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(R){dc(this,R);return}if(a=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var w in p)d.set(w,p[w]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const R of p.keys())d.set(R,p.get(R));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(R=>R.toLowerCase()=="content-type"),w=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Ef,c,void 0)>=0)||p||w||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,L]of d)this.g.setRequestHeader(R,L);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(R){dc(this,R)}};function dc(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.o=5,hc(a),Xs(a)}function hc(a){a.A||(a.A=!0,Me(a,"complete"),Me(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Me(this,"complete"),Me(this,"abort"),Xs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Xs(this,!0)),he.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?fc(this):this.Xa())},n.Xa=function(){fc(this)};function fc(a){if(a.h&&typeof i<"u"){if(a.v&&Et(a)==4)setTimeout(a.Ca.bind(a),0);else if(Me(a,"readystatechange"),Et(a)==4){a.h=!1;try{const R=a.ca();e:switch(R){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var p;if(p=R===0){let L=String(a.D).match(nc)[1]||null;!L&&o.self&&o.self.location&&(L=o.self.location.protocol.slice(0,-1)),p=!bf.test(L?L.toLowerCase():"")}d=p}if(d)Me(a,"complete"),Me(a,"success");else{a.o=6;try{var w=Et(a)>2?a.g.statusText:""}catch{w=""}a.l=w+" ["+a.ca()+"]",hc(a)}}finally{Xs(a)}}}}function Xs(a,c){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,c||Me(a,"ready");try{d.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Et(a){return a.g?a.g.readyState:0}n.ca=function(){try{return Et(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),Zh(c)}};function mc(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Tf(a){const c={};a=(a.g&&Et(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<a.length;p++){if(_(a[p]))continue;var d=af(a[p]);const w=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const R=c[w]||[];c[w]=R,R.push(d)}zs(c,function(p){return p.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function as(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function pc(a){this.za=0,this.i=[],this.j=new Kn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=as("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=as("baseRetryDelayMs",5e3,a),this.Za=as("retryDelaySeedMs",1e4,a),this.Ta=as("forwardChannelMaxRetries",2,a),this.va=as("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Yo(a&&a.concurrentRequestLimit),this.Ba=new _f,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=pc.prototype,n.ka=8,n.I=1,n.connect=function(a,c,d,p){Oe(0),this.W=a,this.H=c||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.J=wc(this,null,this.W),er(this)};function Li(a){if(gc(a),a.I==3){var c=a.V++,d=Ze(a.J);if(ce(d,"SID",a.M),ce(d,"RID",c),ce(d,"TYPE","terminate"),os(a,d),c=new yt(a,a.j,c),c.M=2,c.A=Ks(Ze(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(c.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=c.A,d=!0),d||(c.g=Ac(c.j,null),c.g.ea(c.A)),c.F=Date.now(),Ws(c)}Ic(a)}function Zs(a){a.g&&(Oi(a),a.g.cancel(),a.g=null)}function gc(a){Zs(a),a.v&&(o.clearTimeout(a.v),a.v=null),tr(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function er(a){if(!Xo(a.h)&&!a.m){a.m=!0;var c=a.Ea;x||v(),M||(x(),M=!0),T.add(c,a),a.D=0}}function If(a,c){return Zo(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=c.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Wn(h(a.Ea,a,c),Tc(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const w=new yt(this,this.j,a);let R=this.o;if(this.U&&(R?(R=Hn(R),ko(R,this.U)):R=this.U),this.u!==null||this.R||(w.J=R,R=null),this.S)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,c>4096){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=yc(this,w,c),d=Ze(this.J),ce(d,"RID",a),ce(d,"CVER",22),this.G&&ce(d,"X-HTTP-Session-Id",this.G),os(this,d),R&&(this.R?c="headers="+Yn(uc(R))+"&"+c:this.u&&Vi(d,this.u,R)),Di(this.h,w),this.Ra&&ce(d,"TYPE","init"),this.S?(ce(d,"$req",c),ce(d,"SID","null"),w.U=!0,Ri(w,d,null)):Ri(w,d,c),this.I=2}}else this.I==3&&(a?vc(this,a):this.i.length==0||Xo(this.h)||vc(this))};function vc(a,c){var d;c?d=c.l:d=a.V++;const p=Ze(a.J);ce(p,"SID",a.M),ce(p,"RID",d),ce(p,"AID",a.K),os(a,p),a.u&&a.o&&Vi(p,a.u,a.o),d=new yt(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),c&&(a.i=c.G.concat(a.i)),c=yc(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Di(a.h,d),Ri(d,p,c)}function os(a,c){a.H&&Ge(a.H,function(d,p){ce(c,p,d)}),a.l&&Ge({},function(d,p){ce(c,p,d)})}function yc(a,c,d){d=Math.min(a.i.length,d);const p=a.l?h(a.l.Ka,a.l,a):null;e:{var w=a.i;let Y=-1;for(;;){const be=["count="+d];Y==-1?d>0?(Y=w[0].g,be.push("ofs="+Y)):Y=0:be.push("ofs="+Y);let ae=!0;for(let Te=0;Te<d;Te++){var R=w[Te].g;const et=w[Te].map;if(R-=Y,R<0)Y=Math.max(0,w[Te].g-100),ae=!1;else try{R="req"+R+"_"||"";try{var L=et instanceof Map?et:Object.entries(et);for(const[Wt,Tt]of L){let It=Tt;l(Tt)&&(It=Ti(Tt)),be.push(R+Wt+"="+encodeURIComponent(It))}}catch(Wt){throw be.push(R+"type="+encodeURIComponent("_badmap")),Wt}}catch{p&&p(et)}}if(ae){L=be.join("&");break e}}L=void 0}return a=a.i.splice(0,d),c.G=a,L}function _c(a){if(!a.g&&!a.v){a.Y=1;var c=a.Da;x||v(),M||(x(),M=!0),T.add(c,a),a.A=0}}function Mi(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Wn(h(a.Da,a),Tc(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,bc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Wn(h(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Oe(10),Zs(this),bc(this))};function Oi(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function bc(a){a.g=new yt(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var c=Ze(a.na);ce(c,"RID","rpc"),ce(c,"SID",a.M),ce(c,"AID",a.K),ce(c,"CI",a.F?"0":"1"),!a.F&&a.ia&&ce(c,"TO",a.ia),ce(c,"TYPE","xmlhttp"),os(a,c),a.u&&a.o&&Vi(c,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=Ks(Ze(c)),d.u=null,d.R=!0,Qo(d,a)}n.Va=function(){this.C!=null&&(this.C=null,Zs(this),Mi(this),Oe(19))};function tr(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Ec(a,c){var d=null;if(a.g==c){tr(a),Oi(a),a.g=null;var p=2}else if(ki(a.h,c))d=c.G,ec(a.h,c),p=1;else return;if(a.I!=0){if(c.o)if(p==1){d=c.u?c.u.length:0,c=Date.now()-c.F;var w=a.D;p=Js(),Me(p,new jo(p,d)),er(a)}else _c(a);else if(w=c.m,w==3||w==0&&c.X>0||!(p==1&&If(a,c)||p==2&&Mi(a)))switch(d&&d.length>0&&(c=a.h,c.i=c.i.concat(d)),w){case 1:Qt(a,5);break;case 4:Qt(a,10);break;case 3:Qt(a,6);break;default:Qt(a,2)}}}function Tc(a,c){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*c}function Qt(a,c){if(a.j.info("Error code "+c),c==2){var d=h(a.bb,a),p=a.Ua;const w=!p;p=new _t(p||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Zn(p,"https"),Ks(p),w?vf(p.toString(),d):yf(p.toString(),d)}else Oe(2);a.I=0,a.l&&a.l.pa(c),Ic(a),gc(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Oe(2)):(this.j.info("Failed to ping google.com"),Oe(1))};function Ic(a){if(a.I=0,a.ja=[],a.l){const c=tc(a.h);(c.length!=0||a.i.length!=0)&&(P(a.ja,c),P(a.ja,a.i),a.h.i.length=0,A(a.i),a.i.length=0),a.l.oa()}}function wc(a,c,d){var p=d instanceof _t?Ze(d):new _t(d);if(p.g!="")c&&(p.g=c+"."+p.g),es(p,p.u);else{var w=o.location;p=w.protocol,c=c?c+"."+w.hostname:w.hostname,w=+w.port;const R=new _t(null);p&&Zn(R,p),c&&(R.g=c),w&&es(R,w),d&&(R.h=d),p=R}return d=a.G,c=a.wa,d&&c&&ce(p,d,c),ce(p,"VER",a.ka),os(a,p),p}function Ac(a,c,d){if(c&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Aa&&!a.ma?new he(new xi({ab:d})):new he(a.ma),c.Fa(a.L),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Sc(){}n=Sc.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function nr(){}nr.prototype.g=function(a,c){return new $e(a,c)};function $e(a,c){Ce.call(this),this.g=new pc(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(a?a["X-WebChannel-Client-Profile"]=c.sa:a={"X-WebChannel-Client-Profile":c.sa}),this.g.U=a,(a=c&&c.Qb)&&!_(a)&&(this.g.u=a),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!_(c)&&(this.g.G=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new gn(this)}y($e,Ce),$e.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},$e.prototype.close=function(){Li(this.g)},$e.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=Ti(a),a=d);c.i.push(new lf(c.Ya++,a)),c.I==3&&er(c)},$e.prototype.N=function(){this.g.l=null,delete this.j,Li(this.g),delete this.g,$e.Z.N.call(this)};function Rc(a){Ii.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}y(Rc,Ii);function Pc(){wi.call(this),this.status=1}y(Pc,wi);function gn(a){this.g=a}y(gn,Sc),gn.prototype.ra=function(){Me(this.g,"a")},gn.prototype.qa=function(a){Me(this.g,new Rc(a))},gn.prototype.pa=function(a){Me(this.g,new Pc)},gn.prototype.oa=function(){Me(this.g,"b")},nr.prototype.createWebChannel=nr.prototype.g,$e.prototype.send=$e.prototype.o,$e.prototype.open=$e.prototype.m,$e.prototype.close=$e.prototype.close,Du=function(){return new nr},ku=function(){return Js()},Cu=Ht,sa={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Qs.NO_ERROR=0,Qs.TIMEOUT=8,Qs.HTTP_ERROR=6,dr=Qs,zo.COMPLETE="complete",Pu=zo,Uo.EventType=Jn,Jn.OPEN="a",Jn.CLOSE="b",Jn.ERROR="c",Jn.MESSAGE="d",Ce.prototype.listen=Ce.prototype.J,ls=Uo,he.prototype.listenOnce=he.prototype.K,he.prototype.getLastError=he.prototype.Ha,he.prototype.getLastErrorCode=he.prototype.ya,he.prototype.getStatus=he.prototype.ca,he.prototype.getResponseJson=he.prototype.La,he.prototype.getResponseText=he.prototype.la,he.prototype.send=he.prototype.ea,he.prototype.setWithCredentials=he.prototype.Fa,Ru=he}).apply(typeof ir<"u"?ir:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ne.UNAUTHENTICATED=new Ne(null),Ne.GOOGLE_CREDENTIALS=new Ne("google-credentials-uid"),Ne.FIRST_PARTY=new Ne("first-party-uid"),Ne.MOCK_USER=new Ne("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let On="12.10.0";function hp(n){On=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an=new Sa("@firebase/firestore");function vn(){return an.logLevel}function $(n,...e){if(an.logLevel<=Z.DEBUG){const t=e.map(Ca);an.debug(`Firestore (${On}): ${n}`,...t)}}function ft(n,...e){if(an.logLevel<=Z.ERROR){const t=e.map(Ca);an.error(`Firestore (${On}): ${n}`,...t)}}function on(n,...e){if(an.logLevel<=Z.WARN){const t=e.map(Ca);an.warn(`Firestore (${On}): ${n}`,...t)}}function Ca(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Nu(n,s,t)}function Nu(n,e,t){let s=`FIRESTORE (${On}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw ft(s),new Error(s)}function re(n,e,t,s){let r="Unexpected state";typeof t=="string"?r=t:s=t,n||Nu(e,r,s)}function K(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends gt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class fp{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ne.UNAUTHENTICATED)))}shutdown(){}}class mp{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class pp{constructor(e){this.t=e,this.currentUser=Ne.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){re(this.o===void 0,42304);let s=this.i;const r=u=>this.i!==s?(s=this.i,t(u)):Promise.resolve();let i=new xt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new xt,e.enqueueRetryable((()=>r(this.currentUser)))};const o=()=>{const u=i;e.enqueueRetryable((async()=>{await u.promise,await r(this.currentUser)}))},l=u=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((u=>l(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new xt)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(re(typeof s.accessToken=="string",31837,{l:s}),new xu(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return re(e===null||typeof e=="string",2055,{h:e}),new Ne(e)}}class gp{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ne.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class vp{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new gp(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ne.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class $c{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yp{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Qe(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){re(this.o===void 0,3512);const s=i=>{i.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>s(i)))};const r=i=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>r(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?r(i):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new $c(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(re(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new $c(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=_p(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<t&&(s+=e.charAt(r[i]%62))}return s}}function ee(n,e){return n<e?-1:n>e?1:0}function ra(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const r=n.charAt(s),i=e.charAt(s);if(r!==i)return zi(r)===zi(i)?ee(r,i):zi(r)?1:-1}return ee(n.length,e.length)}const bp=55296,Ep=57343;function zi(n){const e=n.charCodeAt(0);return e>=bp&&e<=Ep}function Pn(n,e,t){return n.length===e.length&&n.every(((s,r)=>t(s,e[r])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc="__name__";class tt{constructor(e,t,s){t===void 0?t=0:t>e.length&&G(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&G(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return tt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof tt?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const i=tt.compareSegments(e.get(r),t.get(r));if(i!==0)return i}return ee(e.length,t.length)}static compareSegments(e,t){const s=tt.isNumericId(e),r=tt.isNumericId(t);return s&&!r?-1:!s&&r?1:s&&r?tt.extractNumericId(e).compare(tt.extractNumericId(t)):ra(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Nt.fromString(e.substring(4,e.length-2))}}class oe extends tt{construct(e,t,s){return new oe(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new U(C.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((r=>r.length>0)))}return new oe(t)}static emptyPath(){return new oe([])}}const Tp=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Se extends tt{construct(e,t,s){return new Se(e,t,s)}static isValidIdentifier(e){return Tp.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Se.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Bc}static keyField(){return new Se([Bc])}static fromServerFormat(e){const t=[];let s="",r=0;const i=()=>{if(s.length===0)throw new U(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let o=!1;for(;r<e.length;){const l=e[r];if(l==="\\"){if(r+1===e.length)throw new U(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[r+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new U(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=u,r+=2}else l==="`"?(o=!o,r++):l!=="."||o?(s+=l,r++):(i(),r++)}if(i(),o)throw new U(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Se(t)}static emptyPath(){return new Se([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.path=e}static fromPath(e){return new z(oe.fromString(e))}static fromName(e){return new z(oe.fromString(e).popFirst(5))}static empty(){return new z(oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return oe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new z(new oe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(n,e,t){if(!t)throw new U(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Ip(n,e,t,s){if(e===!0&&s===!0)throw new U(C.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function jc(n){if(!z.isDocumentKey(n))throw new U(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function zc(n){if(z.isDocumentKey(n))throw new U(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Lu(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Jr(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":G(12329,{type:typeof n})}function ze(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new U(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Jr(n);throw new U(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(n,e){const t={typeString:n};return e&&(t.value=e),t}function xs(n,e){if(!Lu(n))throw new U(C.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const r=e[s].typeString,i="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const o=n[s];if(r&&typeof o!==r){t=`JSON field '${s}' must be a ${r}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${s}' field to equal '${i.value}'`;break}}if(t)throw new U(C.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc=-62135596800,Gc=1e6;class le{static now(){return le.fromMillis(Date.now())}static fromDate(e){return le.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Gc);return new le(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new U(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new U(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Hc)throw new U(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Gc}_compareTo(e){return this.seconds===e.seconds?ee(this.nanoseconds,e.nanoseconds):ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:le._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(xs(e,le._jsonSchema))return new le(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Hc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}le._jsonSchemaVersion="firestore/timestamp/1.0",le._jsonSchema={type:ve("string",le._jsonSchemaVersion),seconds:ve("number"),nanoseconds:ve("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{static fromTimestamp(e){return new W(e)}static min(){return new W(new le(0,0))}static max(){return new W(new le(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts=-1;function wp(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=W.fromTimestamp(s===1e9?new le(t+1,0):new le(t,s));return new Lt(r,z.empty(),e)}function Ap(n){return new Lt(n.readTime,n.key,Ts)}class Lt{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Lt(W.min(),z.empty(),Ts)}static max(){return new Lt(W.max(),z.empty(),Ts)}}function Sp(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=z.comparator(n.documentKey,e.documentKey),t!==0?t:ee(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Pp{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fn(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==Rp)throw n;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&G(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new k(((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(s,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof k?t:k.resolve(t)}catch(t){return k.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):k.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):k.reject(t)}static resolve(e){return new k(((t,s)=>{t(e)}))}static reject(e){return new k(((t,s)=>{s(e)}))}static waitFor(e){return new k(((t,s)=>{let r=0,i=0,o=!1;e.forEach((l=>{++r,l.next((()=>{++i,o&&i===r&&t()}),(u=>s(u)))})),o=!0,i===r&&t()}))}static or(e){let t=k.resolve(!1);for(const s of e)t=t.next((r=>r?k.resolve(r):s()));return t}static forEach(e,t){const s=[];return e.forEach(((r,i)=>{s.push(t.call(this,r,i))})),this.waitFor(s)}static mapArray(e,t){return new k(((s,r)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const h=u;t(e[h]).next((f=>{o[h]=f,++l,l===i&&s(o)}),(f=>r(f)))}}))}static doWhile(e,t){return new k(((s,r)=>{const i=()=>{e()===!0?t().next((()=>{i()}),r):s()};i()}))}}function Cp(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Un(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Qr.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da=-1;function Wr(n){return n==null}function Pr(n){return n===0&&1/n==-1/0}function kp(n){return typeof n=="number"&&Number.isInteger(n)&&!Pr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu="";function Dp(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Jc(e)),e=Np(n.get(t),e);return Jc(e)}function Np(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const i=n.charAt(r);switch(i){case"\0":t+="";break;case Mu:t+="";break;default:t+=i}}return t}function Jc(n){return n+Mu+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Bt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Ou(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e,t){this.comparator=e,this.root=t||Ae.EMPTY}insert(e,t){return new de(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ae.BLACK,null,null))}remove(e){return new de(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ae.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ar(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ar(this.root,e,this.comparator,!1)}getReverseIterator(){return new ar(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ar(this.root,e,this.comparator,!0)}}class ar{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?s(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ae{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s??Ae.RED,this.left=r??Ae.EMPTY,this.right=i??Ae.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,i){return new Ae(e??this.key,t??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ae.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return Ae.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw G(43730,{key:this.key,value:this.value});if(this.right.isRed())throw G(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw G(27949);return e+(this.isRed()?0:1)}}Ae.EMPTY=null,Ae.RED=!0,Ae.BLACK=!1;Ae.EMPTY=new class{constructor(){this.size=0}get key(){throw G(57766)}get value(){throw G(16141)}get color(){throw G(16727)}get left(){throw G(29726)}get right(){throw G(36894)}copy(e,t,s,r,i){return this}insert(e,t,s){return new Ae(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.comparator=e,this.data=new de(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Wc(this.data.getIterator())}getIteratorFrom(e){return new Wc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof Ee)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ee(this.comparator);return t.data=e,t}}class Wc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.fields=e,e.sort(Se.comparator)}static empty(){return new Be([])}unionWith(e){let t=new Ee(Se.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Be(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Pn(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Fu("Invalid base64 string: "+i):i}})(e);return new Pe(t)}static fromUint8Array(e){const t=(function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i})(e);return new Pe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pe.EMPTY_BYTE_STRING=new Pe("");const xp=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mt(n){if(re(!!n,39018),typeof n=="string"){let e=0;const t=xp.exec(n);if(re(!!t,46558,{timestamp:n}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:fe(n.seconds),nanos:fe(n.nanos)}}function fe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ot(n){return typeof n=="string"?Pe.fromBase64String(n):Pe.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu="server_timestamp",qu="__type__",$u="__previous_value__",Bu="__local_write_time__";function Na(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[qu])==null?void 0:s.stringValue)===Uu}function Kr(n){const e=n.mapValue.fields[$u];return Na(e)?Kr(e):e}function Is(n){const e=Mt(n.mapValue.fields[Bu].timestampValue);return new le(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e,t,s,r,i,o,l,u,h,f,y){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=y}}const Cr="(default)";class ws{constructor(e,t){this.projectId=e,this.database=t||Cr}static empty(){return new ws("","")}get isDefaultDatabase(){return this.database===Cr}isEqual(e){return e instanceof ws&&e.projectId===this.projectId&&e.database===this.database}}function Lp(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new U(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ws(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju="__type__",Mp="__max__",or={mapValue:{}},zu="__vector__",kr="value";function Ft(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Na(n)?4:Fp(n)?9007199254740991:Op(n)?10:11:G(28295,{value:n})}function at(n,e){if(n===e)return!0;const t=Ft(n);if(t!==Ft(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Is(n).isEqual(Is(e));case 3:return(function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=Mt(r.timestampValue),l=Mt(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(r,i){return Ot(r.bytesValue).isEqual(Ot(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(r,i){return fe(r.geoPointValue.latitude)===fe(i.geoPointValue.latitude)&&fe(r.geoPointValue.longitude)===fe(i.geoPointValue.longitude)})(n,e);case 2:return(function(r,i){if("integerValue"in r&&"integerValue"in i)return fe(r.integerValue)===fe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=fe(r.doubleValue),l=fe(i.doubleValue);return o===l?Pr(o)===Pr(l):isNaN(o)&&isNaN(l)}return!1})(n,e);case 9:return Pn(n.arrayValue.values||[],e.arrayValue.values||[],at);case 10:case 11:return(function(r,i){const o=r.mapValue.fields||{},l=i.mapValue.fields||{};if(Qc(o)!==Qc(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!at(o[u],l[u])))return!1;return!0})(n,e);default:return G(52216,{left:n})}}function As(n,e){return(n.values||[]).find((t=>at(t,e)))!==void 0}function Cn(n,e){if(n===e)return 0;const t=Ft(n),s=Ft(e);if(t!==s)return ee(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return ee(n.booleanValue,e.booleanValue);case 2:return(function(i,o){const l=fe(i.integerValue||i.doubleValue),u=fe(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1})(n,e);case 3:return Kc(n.timestampValue,e.timestampValue);case 4:return Kc(Is(n),Is(e));case 5:return ra(n.stringValue,e.stringValue);case 6:return(function(i,o){const l=Ot(i),u=Ot(o);return l.compareTo(u)})(n.bytesValue,e.bytesValue);case 7:return(function(i,o){const l=i.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=ee(l[h],u[h]);if(f!==0)return f}return ee(l.length,u.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,o){const l=ee(fe(i.latitude),fe(o.latitude));return l!==0?l:ee(fe(i.longitude),fe(o.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Yc(n.arrayValue,e.arrayValue);case 10:return(function(i,o){var b,A,P,S;const l=i.fields||{},u=o.fields||{},h=(b=l[kr])==null?void 0:b.arrayValue,f=(A=u[kr])==null?void 0:A.arrayValue,y=ee(((P=h==null?void 0:h.values)==null?void 0:P.length)||0,((S=f==null?void 0:f.values)==null?void 0:S.length)||0);return y!==0?y:Yc(h,f)})(n.mapValue,e.mapValue);case 11:return(function(i,o){if(i===or.mapValue&&o===or.mapValue)return 0;if(i===or.mapValue)return 1;if(o===or.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let y=0;y<u.length&&y<f.length;++y){const b=ra(u[y],f[y]);if(b!==0)return b;const A=Cn(l[u[y]],h[f[y]]);if(A!==0)return A}return ee(u.length,f.length)})(n.mapValue,e.mapValue);default:throw G(23264,{he:t})}}function Kc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ee(n,e);const t=Mt(n),s=Mt(e),r=ee(t.seconds,s.seconds);return r!==0?r:ee(t.nanos,s.nanos)}function Yc(n,e){const t=n.values||[],s=e.values||[];for(let r=0;r<t.length&&r<s.length;++r){const i=Cn(t[r],s[r]);if(i)return i}return ee(t.length,s.length)}function kn(n){return ia(n)}function ia(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=Mt(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Ot(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return z.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",r=!0;for(const i of t.values||[])r?r=!1:s+=",",s+=ia(i);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${ia(t.fields[o])}`;return r+"}"})(n.mapValue):G(61005,{value:n})}function hr(n){switch(Ft(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Kr(n);return e?16+hr(e):16;case 5:return 2*n.stringValue.length;case 6:return Ot(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((r,i)=>r+hr(i)),0)})(n.arrayValue);case 10:case 11:return(function(s){let r=0;return Bt(s.fields,((i,o)=>{r+=i.length+hr(o)})),r})(n.mapValue);default:throw G(13486,{value:n})}}function Xc(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function aa(n){return!!n&&"integerValue"in n}function xa(n){return!!n&&"arrayValue"in n}function Zc(n){return!!n&&"nullValue"in n}function el(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function fr(n){return!!n&&"mapValue"in n}function Op(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[ju])==null?void 0:s.stringValue)===zu}function ms(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Bt(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=ms(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ms(n.arrayValue.values[t]);return e}return{...n}}function Fp(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Mp}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.value=e}static empty(){return new qe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!fr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ms(t)}setAll(e){let t=Se.emptyPath(),s={},r=[];e.forEach(((o,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,s,r),s={},r=[],t=l.popLast()}o?s[l.lastSegment()]=ms(o):r.push(l.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,s,r)}delete(e){const t=this.field(e.popLast());fr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return at(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];fr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){Bt(t,((r,i)=>e[r]=i));for(const r of s)delete e[r]}clone(){return new qe(ms(this.value))}}function Hu(n){const e=[];return Bt(n.fields,((t,s)=>{const r=new Se([t]);if(fr(s)){const i=Hu(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)})),new Be(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,t,s,r,i,o,l){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new xe(e,0,W.min(),W.min(),W.min(),qe.empty(),0)}static newFoundDocument(e,t,s,r){return new xe(e,1,t,W.min(),s,r,0)}static newNoDocument(e,t){return new xe(e,2,t,W.min(),W.min(),qe.empty(),0)}static newUnknownDocument(e,t){return new xe(e,3,t,W.min(),W.min(),qe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=qe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=qe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof xe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new xe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,t){this.position=e,this.inclusive=t}}function tl(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const i=e[r],o=n.position[r];if(i.field.isKeyField()?s=z.comparator(z.fromName(o.referenceValue),t.key):s=Cn(o,t.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function nl(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!at(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,t="asc"){this.field=e,this.dir=t}}function Up(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{}class ge extends Gu{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new $p(e,t,s):t==="array-contains"?new zp(e,s):t==="in"?new Hp(e,s):t==="not-in"?new Gp(e,s):t==="array-contains-any"?new Jp(e,s):new ge(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new Bp(e,s):new jp(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Cn(t,this.value)):t!==null&&Ft(this.value)===Ft(t)&&this.matchesComparison(Cn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Xe extends Gu{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Xe(e,t)}matches(e){return Ju(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Ju(n){return n.op==="and"}function Qu(n){return qp(n)&&Ju(n)}function qp(n){for(const e of n.filters)if(e instanceof Xe)return!1;return!0}function oa(n){if(n instanceof ge)return n.field.canonicalString()+n.op.toString()+kn(n.value);if(Qu(n))return n.filters.map((e=>oa(e))).join(",");{const e=n.filters.map((t=>oa(t))).join(",");return`${n.op}(${e})`}}function Wu(n,e){return n instanceof ge?(function(s,r){return r instanceof ge&&s.op===r.op&&s.field.isEqual(r.field)&&at(s.value,r.value)})(n,e):n instanceof Xe?(function(s,r){return r instanceof Xe&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce(((i,o,l)=>i&&Wu(o,r.filters[l])),!0):!1})(n,e):void G(19439)}function Ku(n){return n instanceof ge?(function(t){return`${t.field.canonicalString()} ${t.op} ${kn(t.value)}`})(n):n instanceof Xe?(function(t){return t.op.toString()+" {"+t.getFilters().map(Ku).join(" ,")+"}"})(n):"Filter"}class $p extends ge{constructor(e,t,s){super(e,t,s),this.key=z.fromName(s.referenceValue)}matches(e){const t=z.comparator(e.key,this.key);return this.matchesComparison(t)}}class Bp extends ge{constructor(e,t){super(e,"in",t),this.keys=Yu("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class jp extends ge{constructor(e,t){super(e,"not-in",t),this.keys=Yu("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Yu(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>z.fromName(s.referenceValue)))}class zp extends ge{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return xa(t)&&As(t.arrayValue,this.value)}}class Hp extends ge{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&As(this.value.arrayValue,t)}}class Gp extends ge{constructor(e,t){super(e,"not-in",t)}matches(e){if(As(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!As(this.value.arrayValue,t)}}class Jp extends ge{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!xa(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>As(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(e,t=null,s=[],r=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function sl(n,e=null,t=[],s=[],r=null,i=null,o=null){return new Qp(n,e,t,s,r,i,o)}function Va(n){const e=K(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>oa(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(i){return i.field.canonicalString()+i.dir})(s))).join(","),Wr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>kn(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>kn(s))).join(",")),e.Te=t}return e.Te}function La(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Up(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Wu(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!nl(n.startAt,e.startAt)&&nl(n.endAt,e.endAt)}function ca(n){return z.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,t=null,s=[],r=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function Wp(n,e,t,s,r,i,o,l){return new qn(n,e,t,s,r,i,o,l)}function Ma(n){return new qn(n)}function rl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Kp(n){return z.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Xu(n){return n.collectionGroup!==null}function ps(n){const e=K(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ee(Se.comparator);return o.filters.forEach((u=>{u.getFlattenedFilters().forEach((h=>{h.isInequality()&&(l=l.add(h.field))}))})),l})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Ss(i,s))})),t.has(Se.keyField().canonicalString())||e.Ie.push(new Ss(Se.keyField(),s))}return e.Ie}function nt(n){const e=K(n);return e.Ee||(e.Ee=Yp(e,ps(n))),e.Ee}function Yp(n,e){if(n.limitType==="F")return sl(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((r=>{const i=r.dir==="desc"?"asc":"desc";return new Ss(r.field,i)}));const t=n.endAt?new Dr(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Dr(n.startAt.position,n.startAt.inclusive):null;return sl(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function la(n,e){const t=n.filters.concat([e]);return new qn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Xp(n,e){const t=n.explicitOrderBy.concat([e]);return new qn(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function Nr(n,e,t){return new qn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Yr(n,e){return La(nt(n),nt(e))&&n.limitType===e.limitType}function Zu(n){return`${Va(nt(n))}|lt:${n.limitType}`}function yn(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((r=>Ku(r))).join(", ")}]`),Wr(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((r=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(r))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((r=>kn(r))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((r=>kn(r))).join(",")),`Target(${s})`})(nt(n))}; limitType=${n.limitType})`}function Xr(n,e){return e.isFoundDocument()&&(function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):z.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)})(n,e)&&(function(s,r){for(const i of ps(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0})(n,e)&&(function(s,r){return!(s.startAt&&!(function(o,l,u){const h=tl(o,l,u);return o.inclusive?h<=0:h<0})(s.startAt,ps(s),r)||s.endAt&&!(function(o,l,u){const h=tl(o,l,u);return o.inclusive?h>=0:h>0})(s.endAt,ps(s),r))})(n,e)}function Zp(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function ed(n){return(e,t)=>{let s=!1;for(const r of ps(n)){const i=eg(r,e,t);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function eg(n,e,t){const s=n.field.isKeyField()?z.comparator(e.key,t.key):(function(i,o,l){const u=o.data.field(i),h=l.data.field(i);return u!==null&&h!==null?Cn(u,h):G(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return G(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Bt(this.inner,((t,s)=>{for(const[r,i]of s)e(r,i)}))}isEmpty(){return Ou(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg=new de(z.comparator);function mt(){return tg}const td=new de(z.comparator);function us(...n){let e=td;for(const t of n)e=e.insert(t.key,t);return e}function nd(n){let e=td;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function Yt(){return gs()}function sd(){return gs()}function gs(){return new hn((n=>n.toString()),((n,e)=>n.isEqual(e)))}const ng=new de(z.comparator),sg=new Ee(z.comparator);function te(...n){let e=sg;for(const t of n)e=e.add(t);return e}const rg=new Ee(ee);function ig(){return rg}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Pr(e)?"-0":e}}function rd(n){return{integerValue:""+n}}function ag(n,e){return kp(e)?rd(e):Oa(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(){this._=void 0}}function og(n,e,t){return n instanceof Rs?(function(r,i){const o={fields:{[qu]:{stringValue:Uu},[Bu]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Na(i)&&(i=Kr(i)),i&&(o.fields[$u]=i),{mapValue:o}})(t,e):n instanceof Ps?ad(n,e):n instanceof Cs?od(n,e):(function(r,i){const o=id(r,i),l=il(o)+il(r.Ae);return aa(o)&&aa(r.Ae)?rd(l):Oa(r.serializer,l)})(n,e)}function cg(n,e,t){return n instanceof Ps?ad(n,e):n instanceof Cs?od(n,e):t}function id(n,e){return n instanceof xr?(function(s){return aa(s)||(function(i){return!!i&&"doubleValue"in i})(s)})(e)?e:{integerValue:0}:null}class Rs extends Zr{}class Ps extends Zr{constructor(e){super(),this.elements=e}}function ad(n,e){const t=cd(e);for(const s of n.elements)t.some((r=>at(r,s)))||t.push(s);return{arrayValue:{values:t}}}class Cs extends Zr{constructor(e){super(),this.elements=e}}function od(n,e){let t=cd(e);for(const s of n.elements)t=t.filter((r=>!at(r,s)));return{arrayValue:{values:t}}}class xr extends Zr{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function il(n){return fe(n.integerValue||n.doubleValue)}function cd(n){return xa(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e,t){this.field=e,this.transform=t}}function ug(n,e){return n.field.isEqual(e.field)&&(function(s,r){return s instanceof Ps&&r instanceof Ps||s instanceof Cs&&r instanceof Cs?Pn(s.elements,r.elements,at):s instanceof xr&&r instanceof xr?at(s.Ae,r.Ae):s instanceof Rs&&r instanceof Rs})(n.transform,e.transform)}class dg{constructor(e,t){this.version=e,this.transformResults=t}}class He{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new He}static exists(e){return new He(void 0,e)}static updateTime(e){return new He(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function mr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ei{}function ld(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Fa(n.key,He.none()):new Vs(n.key,n.data,He.none());{const t=n.data,s=qe.empty();let r=new Ee(Se.comparator);for(let i of e.fields)if(!r.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new jt(n.key,s,new Be(r.toArray()),He.none())}}function hg(n,e,t){n instanceof Vs?(function(r,i,o){const l=r.value.clone(),u=ol(r.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(n,e,t):n instanceof jt?(function(r,i,o){if(!mr(r.precondition,i))return void i.convertToUnknownDocument(o.version);const l=ol(r.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(ud(r)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()})(n,e,t):(function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function vs(n,e,t,s){return n instanceof Vs?(function(i,o,l,u){if(!mr(i.precondition,o))return l;const h=i.value.clone(),f=cl(i.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null})(n,e,t,s):n instanceof jt?(function(i,o,l,u){if(!mr(i.precondition,o))return l;const h=cl(i.fieldTransforms,u,o),f=o.data;return f.setAll(ud(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((y=>y.field)))})(n,e,t,s):(function(i,o,l){return mr(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l})(n,e,t)}function fg(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),i=id(s.transform,r||null);i!=null&&(t===null&&(t=qe.empty()),t.set(s.field,i))}return t||null}function al(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Pn(s,r,((i,o)=>ug(i,o)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Vs extends ei{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class jt extends ei{constructor(e,t,s,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ud(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function ol(n,e,t){const s=new Map;re(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let r=0;r<t.length;r++){const i=n[r],o=i.transform,l=e.data.field(i.field);s.set(i.field,cg(o,l,t[r]))}return s}function cl(n,e,t){const s=new Map;for(const r of n){const i=r.transform,o=t.data.field(r.field);s.set(r.field,og(i,o,e))}return s}class Fa extends ei{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class mg extends ei{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&hg(i,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=vs(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=vs(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=sd();return this.mutations.forEach((r=>{const i=e.get(r.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=t.has(r.key)?null:l;const u=ld(o,l);u!==null&&s.set(r.key,u),o.isValidDocument()||o.convertToNoDocument(W.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),te())}isEqual(e){return this.batchId===e.batchId&&Pn(this.mutations,e.mutations,((t,s)=>al(t,s)))&&Pn(this.baseMutations,e.baseMutations,((t,s)=>al(t,s)))}}class Ua{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){re(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let r=(function(){return ng})();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Ua(e,t,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe,ne;function yg(n){switch(n){case C.OK:return G(64938);case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return G(15467,{code:n})}}function dd(n){if(n===void 0)return ft("GRPC error has no .code"),C.UNKNOWN;switch(n){case pe.OK:return C.OK;case pe.CANCELLED:return C.CANCELLED;case pe.UNKNOWN:return C.UNKNOWN;case pe.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case pe.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case pe.INTERNAL:return C.INTERNAL;case pe.UNAVAILABLE:return C.UNAVAILABLE;case pe.UNAUTHENTICATED:return C.UNAUTHENTICATED;case pe.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case pe.NOT_FOUND:return C.NOT_FOUND;case pe.ALREADY_EXISTS:return C.ALREADY_EXISTS;case pe.PERMISSION_DENIED:return C.PERMISSION_DENIED;case pe.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case pe.ABORTED:return C.ABORTED;case pe.OUT_OF_RANGE:return C.OUT_OF_RANGE;case pe.UNIMPLEMENTED:return C.UNIMPLEMENTED;case pe.DATA_LOSS:return C.DATA_LOSS;default:return G(39323,{code:n})}}(ne=pe||(pe={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _g(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg=new Nt([4294967295,4294967295],0);function ll(n){const e=_g().encode(n),t=new Su;return t.update(e),new Uint8Array(t.digest())}function ul(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Nt([t,s],0),new Nt([r,i],0)]}class qa{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new ds(`Invalid padding: ${t}`);if(s<0)throw new ds(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new ds(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new ds(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Nt.fromNumber(this.ge)}ye(e,t,s){let r=e.add(t.multiply(Nt.fromNumber(s)));return r.compare(bg)===1&&(r=new Nt([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=ll(e),[s,r]=ul(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(s,r,i);if(!this.we(o))return!1}return!0}static create(e,t,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new qa(i,r,t);return s.forEach((l=>o.insert(l))),o}insert(e){if(this.ge===0)return;const t=ll(e),[s,r]=ul(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(s,r,i);this.be(o)}}be(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class ds extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,t,s,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const r=new Map;return r.set(e,Ls.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new ti(W.min(),r,new de(ee),mt(),te())}}class Ls{constructor(e,t,s,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Ls(s,t,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,t,s,r){this.Se=e,this.removedTargetIds=t,this.key=s,this.De=r}}class hd{constructor(e,t){this.targetId=e,this.Ce=t}}class fd{constructor(e,t,s=Pe.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class dl{constructor(){this.ve=0,this.Fe=hl(),this.Me=Pe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=te(),t=te(),s=te();return this.Fe.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:G(38017,{changeType:i})}})),new Ls(this.Me,this.xe,e,t,s)}Ke(){this.Oe=!1,this.Fe=hl()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,re(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class Eg{constructor(e){this.Ge=e,this.ze=new Map,this.je=mt(),this.He=cr(),this.Je=cr(),this.Ze=new de(ee)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.Ke(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:G(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,r)=>{this.rt(r)&&t(r)}))}st(e){const t=e.targetId,s=e.Ce.count,r=this.ot(t);if(r){const i=r.target;if(ca(i))if(s===0){const o=new z(i.path);this.et(t,o,xe.newNoDocument(o,W.min()))}else re(s===1,20013,{expectedCount:s});else{const o=this._t(t);if(o!==s){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=t;let o,l;try{o=Ot(s).toUint8Array()}catch(u){if(u instanceof Fu)return on("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new qa(o,r,i)}catch(u){return on(u instanceof ds?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let r=0;return s.forEach((i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(t,i,null),r++)})),r}Tt(e){const t=new Map;this.ze.forEach(((i,o)=>{const l=this.ot(o);if(l){if(i.current&&ca(l.target)){const u=new z(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,xe.newNoDocument(u,e))}i.Be&&(t.set(o,i.ke()),i.Ke())}}));let s=te();this.Je.forEach(((i,o)=>{let l=!0;o.forEachWhile((u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(s=s.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const r=new ti(e,t,this.Ze,this.je,s);return this.je=mt(),this.He=cr(),this.Je=cr(),this.Ze=new de(ee),r}Ye(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,s),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const r=this.nt(e);this.Et(e,t)?r.qe(t,1):r.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new dl,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new Ee(ee),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new Ee(ee),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||$("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new dl),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function cr(){return new de(z.comparator)}function hl(){return new de(z.comparator)}const Tg={asc:"ASCENDING",desc:"DESCENDING"},Ig={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},wg={and:"AND",or:"OR"};class Ag{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ua(n,e){return n.useProto3Json||Wr(e)?e:{value:e}}function Vr(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function md(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Sg(n,e){return Vr(n,e.toTimestamp())}function st(n){return re(!!n,49232),W.fromTimestamp((function(t){const s=Mt(t);return new le(s.seconds,s.nanos)})(n))}function $a(n,e){return da(n,e).canonicalString()}function da(n,e){const t=(function(r){return new oe(["projects",r.projectId,"databases",r.database])})(n).child("documents");return e===void 0?t:t.child(e)}function pd(n){const e=oe.fromString(n);return re(bd(e),10190,{key:e.toString()}),e}function ha(n,e){return $a(n.databaseId,e.path)}function Hi(n,e){const t=pd(e);if(t.get(1)!==n.databaseId.projectId)throw new U(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new U(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new z(vd(t))}function gd(n,e){return $a(n.databaseId,e)}function Rg(n){const e=pd(n);return e.length===4?oe.emptyPath():vd(e)}function fa(n){return new oe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function vd(n){return re(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function fl(n,e,t){return{name:ha(n,e),fields:t.value.mapValue.fields}}function Pg(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:G(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=(function(h,f){return h.useProto3Json?(re(f===void 0||typeof f=="string",58123),Pe.fromBase64String(f||"")):(re(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Pe.fromUint8Array(f||new Uint8Array))})(n,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&(function(h){const f=h.code===void 0?C.UNKNOWN:dd(h.code);return new U(f,h.message||"")})(o);t=new fd(s,r,i,l||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Hi(n,s.document.name),i=st(s.document.updateTime),o=s.document.createTime?st(s.document.createTime):W.min(),l=new qe({mapValue:{fields:s.document.fields}}),u=xe.newFoundDocument(r,i,o,l),h=s.targetIds||[],f=s.removedTargetIds||[];t=new pr(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Hi(n,s.document),i=s.readTime?st(s.readTime):W.min(),o=xe.newNoDocument(r,i),l=s.removedTargetIds||[];t=new pr([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Hi(n,s.document),i=s.removedTargetIds||[];t=new pr([],i,r,null)}else{if(!("filter"in e))return G(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new vg(r,i),l=s.targetId;t=new hd(l,o)}}return t}function Cg(n,e){let t;if(e instanceof Vs)t={update:fl(n,e.key,e.value)};else if(e instanceof Fa)t={delete:ha(n,e.key)};else if(e instanceof jt)t={update:fl(n,e.key,e.data),updateMask:Fg(e.fieldMask)};else{if(!(e instanceof mg))return G(16599,{dt:e.type});t={verify:ha(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(i,o){const l=o.transform;if(l instanceof Rs)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ps)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Cs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof xr)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw G(20930,{transform:o.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(r,i){return i.updateTime!==void 0?{updateTime:Sg(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:G(27497)})(n,e.precondition)),t}function kg(n,e){return n&&n.length>0?(re(e!==void 0,14353),n.map((t=>(function(r,i){let o=r.updateTime?st(r.updateTime):st(i);return o.isEqual(W.min())&&(o=st(i)),new dg(o,r.transformResults||[])})(t,e)))):[]}function Dg(n,e){return{documents:[gd(n,e.path)]}}function Ng(n,e){const t={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=gd(n,r);const i=(function(h){if(h.length!==0)return _d(Xe.create(h,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const o=(function(h){if(h.length!==0)return h.map((f=>(function(b){return{field:_n(b.field),direction:Lg(b.dir)}})(f)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const l=ua(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{ft:t,parent:r}}function xg(n){let e=Rg(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){re(s===1,65062);const f=t.from[0];f.allDescendants?r=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=(function(y){const b=yd(y);return b instanceof Xe&&Qu(b)?b.getFilters():[b]})(t.where));let o=[];t.orderBy&&(o=(function(y){return y.map((b=>(function(P){return new Ss(bn(P.field),(function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(P.direction))})(b)))})(t.orderBy));let l=null;t.limit&&(l=(function(y){let b;return b=typeof y=="object"?y.value:y,Wr(b)?null:b})(t.limit));let u=null;t.startAt&&(u=(function(y){const b=!!y.before,A=y.values||[];return new Dr(A,b)})(t.startAt));let h=null;return t.endAt&&(h=(function(y){const b=!y.before,A=y.values||[];return new Dr(A,b)})(t.endAt)),Wp(e,r,o,i,l,"F",u,h)}function Vg(n,e){const t=(function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G(28987,{purpose:r})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function yd(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=bn(t.unaryFilter.field);return ge.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=bn(t.unaryFilter.field);return ge.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=bn(t.unaryFilter.field);return ge.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=bn(t.unaryFilter.field);return ge.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return G(61313);default:return G(60726)}})(n):n.fieldFilter!==void 0?(function(t){return ge.create(bn(t.fieldFilter.field),(function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return G(58110);default:return G(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Xe.create(t.compositeFilter.filters.map((s=>yd(s))),(function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return G(1026)}})(t.compositeFilter.op))})(n):G(30097,{filter:n})}function Lg(n){return Tg[n]}function Mg(n){return Ig[n]}function Og(n){return wg[n]}function _n(n){return{fieldPath:n.canonicalString()}}function bn(n){return Se.fromServerFormat(n.fieldPath)}function _d(n){return n instanceof ge?(function(t){if(t.op==="=="){if(el(t.value))return{unaryFilter:{field:_n(t.field),op:"IS_NAN"}};if(Zc(t.value))return{unaryFilter:{field:_n(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(el(t.value))return{unaryFilter:{field:_n(t.field),op:"IS_NOT_NAN"}};if(Zc(t.value))return{unaryFilter:{field:_n(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_n(t.field),op:Mg(t.op),value:t.value}}})(n):n instanceof Xe?(function(t){const s=t.getFilters().map((r=>_d(r)));return s.length===1?s[0]:{compositeFilter:{op:Og(t.op),filters:s}}})(n):G(54877,{filter:n})}function Fg(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function bd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Ed(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e,t,s,r,i=W.min(),o=W.min(),l=Pe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Pt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Pt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Pt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Pt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e){this.yt=e}}function qg(n){const e=xg({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Nr(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(){this.Sn=new Bg}addToCollectionParentIndex(e,t){return this.Sn.add(t),k.resolve()}getCollectionParents(e,t){return k.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return k.resolve()}deleteFieldIndex(e,t){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,t){return k.resolve()}getDocumentsMatchingTarget(e,t){return k.resolve(null)}getIndexType(e,t){return k.resolve(0)}getFieldIndexes(e,t){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,t){return k.resolve(Lt.min())}getMinOffsetFromCollectionGroup(e,t){return k.resolve(Lt.min())}updateCollectionGroup(e,t,s){return k.resolve()}updateIndexEntries(e,t){return k.resolve()}}class Bg{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new Ee(oe.comparator),i=!r.has(s);return this.index[t]=r.add(s),i}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Ee(oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Td=41943040;class Fe{static withCacheSize(e){return new Fe(e,Fe.DEFAULT_COLLECTION_PERCENTILE,Fe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fe.DEFAULT_COLLECTION_PERCENTILE=10,Fe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Fe.DEFAULT=new Fe(Td,Fe.DEFAULT_COLLECTION_PERCENTILE,Fe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Fe.DISABLED=new Fe(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Dn(0)}static ar(){return new Dn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl="LruGarbageCollector",jg=1048576;function gl([n,e],[t,s]){const r=ee(n,t);return r===0?ee(e,s):r}class zg{constructor(e){this.Pr=e,this.buffer=new Ee(gl),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();gl(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Hg{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){$(pl,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Un(t)?$(pl,"Ignoring IndexedDB error during garbage collection: ",t):await Fn(t)}await this.Ar(3e5)}))}}class Gg{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return k.resolve(Qr.ce);const s=new zg(t);return this.Vr.forEachTarget(e,(r=>s.Er(r.sequenceNumber))).next((()=>this.Vr.mr(e,(r=>s.Er(r))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?($("LruGarbageCollector","Garbage collection skipped; disabled"),k.resolve(ml)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?($("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ml):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let s,r,i,o,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((y=>(y>this.params.maximumSequenceNumbersToCollect?($("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${y}`),r=this.params.maximumSequenceNumbersToCollect):r=y,o=Date.now(),this.nthSequenceNumber(e,r)))).next((y=>(s=y,l=Date.now(),this.removeTargets(e,s,t)))).next((y=>(i=y,u=Date.now(),this.removeOrphanedDocuments(e,s)))).next((y=>(h=Date.now(),vn()<=Z.DEBUG&&$("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${r} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${y} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),k.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:y}))))}}function Jg(n,e){return new Gg(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(){this.changes=new hn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,xe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?k.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(s=r,this.remoteDocumentCache.getEntry(e,t)))).next((r=>(s!==null&&vs(s.mutation,r,Be.empty(),le.now()),r)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,te()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=te()){const r=Yt();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,s).next((i=>{let o=us();return i.forEach(((l,u)=>{o=o.insert(l,u.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const s=Yt();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,te())))}populateOverlays(e,t,s){const r=[];return s.forEach((i=>{t.has(i)||r.push(i)})),this.documentOverlayCache.getOverlays(e,r).next((i=>{i.forEach(((o,l)=>{t.set(o,l)}))}))}computeViews(e,t,s,r){let i=mt();const o=gs(),l=(function(){return gs()})();return t.forEach(((u,h)=>{const f=s.get(h.key);r.has(h.key)&&(f===void 0||f.mutation instanceof jt)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),vs(f.mutation,h,f.mutation.getFieldMask(),le.now())):o.set(h.key,Be.empty())})),this.recalculateAndSaveOverlays(e,i).next((u=>(u.forEach(((h,f)=>o.set(h,f))),t.forEach(((h,f)=>l.set(h,new Wg(f,o.get(h)??null)))),l)))}recalculateAndSaveOverlays(e,t){const s=gs();let r=new de(((o,l)=>o-l)),i=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const l of o)l.keys().forEach((u=>{const h=t.get(u);if(h===null)return;let f=s.get(u)||Be.empty();f=l.applyToLocalView(h,f),s.set(u,f);const y=(r.get(l.batchId)||te()).add(u);r=r.insert(l.batchId,y)}))})).next((()=>{const o=[],l=r.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,y=sd();f.forEach((b=>{if(!i.has(b)){const A=ld(t.get(b),s.get(b));A!==null&&y.set(b,A),i=i.add(b)}})),o.push(this.documentOverlayCache.saveOverlays(e,h,y))}return k.waitFor(o)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,r){return Kp(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Xu(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,r):this.getDocumentsMatchingCollectionQuery(e,t,s,r)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next((i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-i.size):k.resolve(Yt());let l=Ts,u=i;return o.next((h=>k.forEach(h,((f,y)=>(l<y.largestBatchId&&(l=y.largestBatchId),i.get(f)?k.resolve():this.remoteDocumentCache.getEntry(e,f).next((b=>{u=u.insert(f,b)}))))).next((()=>this.populateOverlays(e,h,i))).next((()=>this.computeViews(e,u,h,te()))).next((f=>({batchId:l,changes:nd(f)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new z(t)).next((s=>{let r=us();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,r){const i=t.collectionGroup;let o=us();return this.indexManager.getCollectionParents(e,i).next((l=>k.forEach(l,(u=>{const h=(function(y,b){return new qn(b,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)})(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,s,r).next((f=>{f.forEach(((y,b)=>{o=o.insert(y,b)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,i,r)))).next((o=>{i.forEach(((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,xe.newInvalidDocument(f)))}));let l=us();return o.forEach(((u,h)=>{const f=i.get(u);f!==void 0&&vs(f.mutation,h,Be.empty(),le.now()),Xr(t,h)&&(l=l.insert(u,h))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return k.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(r){return{id:r.id,version:r.version,createTime:st(r.createTime)}})(t)),k.resolve()}getNamedQuery(e,t){return k.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(r){return{name:r.name,query:qg(r.bundledQuery),readTime:st(r.readTime)}})(t)),k.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(){this.overlays=new de(z.comparator),this.Lr=new Map}getOverlay(e,t){return k.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Yt();return k.forEach(t,(r=>this.getOverlay(e,r).next((i=>{i!==null&&s.set(r,i)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((r,i)=>{this.bt(e,t,i)})),k.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.Lr.get(s);return r!==void 0&&(r.forEach((i=>this.overlays=this.overlays.remove(i))),this.Lr.delete(s)),k.resolve()}getOverlaysForCollection(e,t,s){const r=Yt(),i=t.length+1,o=new z(t.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>s&&r.set(u.getKey(),u)}return k.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let i=new de(((h,f)=>h-f));const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>s){let f=i.get(h.largestBatchId);f===null&&(f=Yt(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Yt(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((h,f)=>l.set(h,f))),!(l.size()>=r)););return k.resolve(l)}bt(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.Lr.get(r.largestBatchId).delete(s.key);this.Lr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new gg(t,s));let i=this.Lr.get(t);i===void 0&&(i=te(),this.Lr.set(t,i)),this.Lr.set(t,i.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(){this.sessionToken=Pe.EMPTY_BYTE_STRING}getSessionToken(e){return k.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,k.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(){this.kr=new Ee(Ie.Kr),this.qr=new Ee(Ie.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const s=new Ie(e,t);this.kr=this.kr.add(s),this.qr=this.qr.add(s)}$r(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new Ie(e,t))}Qr(e,t){e.forEach((s=>this.removeReference(s,t)))}Gr(e){const t=new z(new oe([])),s=new Ie(t,e),r=new Ie(t,e+1),i=[];return this.qr.forEachInRange([s,r],(o=>{this.Wr(o),i.push(o.key)})),i}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new z(new oe([])),s=new Ie(t,e),r=new Ie(t,e+1);let i=te();return this.qr.forEachInRange([s,r],(o=>{i=i.add(o.key)})),i}containsKey(e){const t=new Ie(e,0),s=this.kr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Ie{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return z.comparator(e.key,t.key)||ee(e.Hr,t.Hr)}static Ur(e,t){return ee(e.Hr,t.Hr)||z.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new Ee(Ie.Kr)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new pg(i,t,s,r);this.mutationQueue.push(o);for(const l of r)this.Jr=this.Jr.add(new Ie(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return k.resolve(o)}lookupMutationBatch(e,t){return k.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.Xr(s),i=r<0?0:r;return k.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?Da:this.Yn-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Ie(t,0),r=new Ie(t,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([s,r],(o=>{const l=this.Zr(o.Hr);i.push(l)})),k.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Ee(ee);return t.forEach((r=>{const i=new Ie(r,0),o=new Ie(r,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([i,o],(l=>{s=s.add(l.Hr)}))})),k.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let i=s;z.isDocumentKey(i)||(i=i.child(""));const o=new Ie(new z(i),0);let l=new Ee(ee);return this.Jr.forEachWhile((u=>{const h=u.key.path;return!!s.isPrefixOf(h)&&(h.length===r&&(l=l.add(u.Hr)),!0)}),o),k.resolve(this.Yr(l))}Yr(e){const t=[];return e.forEach((s=>{const r=this.Zr(s);r!==null&&t.push(r)})),t}removeMutationBatch(e,t){re(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Jr;return k.forEach(t.mutations,(r=>{const i=new Ie(r.key,t.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Jr=s}))}nr(e){}containsKey(e,t){const s=new Ie(t,0),r=this.Jr.firstAfterOrEqual(s);return k.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e){this.ti=e,this.docs=(function(){return new de(z.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),i=r?r.size:0,o=this.ti(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return k.resolve(s?s.document.mutableCopy():xe.newInvalidDocument(t))}getEntries(e,t){let s=mt();return t.forEach((r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():xe.newInvalidDocument(r))})),k.resolve(s)}getDocumentsMatchingQuery(e,t,s,r){let i=mt();const o=t.path,l=new z(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Sp(Ap(f),s)<=0||(r.has(f.key)||Xr(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return k.resolve(i)}getAllFromCollectionGroup(e,t,s,r){G(9500)}ni(e,t){return k.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new nv(this)}getSize(e){return k.resolve(this.size)}}class nv extends Qg{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,r)=>{r.isValidDocument()?t.push(this.Mr.addEntry(e,r)):this.Mr.removeEntry(s)})),k.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(e){this.persistence=e,this.ri=new hn((t=>Va(t)),La),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.ii=0,this.si=new Ba,this.targetCount=0,this.oi=Dn._r()}forEachTarget(e,t){return this.ri.forEach(((s,r)=>t(r))),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.ii&&(this.ii=t),k.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Dn(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,k.resolve()}updateTargetData(e,t){return this.lr(t),k.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,t,s){let r=0;const i=[];return this.ri.forEach(((o,l)=>{l.sequenceNumber<=t&&s.get(l.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),r++)})),k.waitFor(i).next((()=>r))}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,t){const s=this.ri.get(t)||null;return k.resolve(s)}addMatchingKeys(e,t,s){return this.si.$r(t,s),k.resolve()}removeMatchingKeys(e,t,s){this.si.Qr(t,s);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((o=>{i.push(r.markPotentiallyOrphaned(e,o))})),k.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),k.resolve()}getMatchingKeysForTargetId(e,t){const s=this.si.jr(t);return k.resolve(s)}containsKey(e,t){return k.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e,t){this._i={},this.overlays={},this.ai=new Qr(0),this.ui=!1,this.ui=!0,this.ci=new Zg,this.referenceDelegate=e(this),this.li=new sv(this),this.indexManager=new $g,this.remoteDocumentCache=(function(r){return new tv(r)})((s=>this.referenceDelegate.hi(s))),this.serializer=new Ug(t),this.Pi=new Yg(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Xg,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this._i[e.toKey()];return s||(s=new ev(t,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,s){$("MemoryPersistence","Starting transaction:",e);const r=new rv(this.ai.next());return this.referenceDelegate.Ti(),s(r).next((i=>this.referenceDelegate.Ii(r).next((()=>i)))).toPromise().then((i=>(r.raiseOnCommittedEvent(),i)))}Ei(e,t){return k.or(Object.values(this._i).map((s=>()=>s.containsKey(e,t))))}}class rv extends Pp{constructor(e){super(),this.currentSequenceNumber=e}}class ja{constructor(e){this.persistence=e,this.Ri=new Ba,this.Ai=null}static Vi(e){return new ja(e)}get di(){if(this.Ai)return this.Ai;throw G(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.di.delete(s.toString()),k.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.di.add(s.toString()),k.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),k.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((r=>this.di.add(r.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((r=>{r.forEach((i=>this.di.add(i.toString())))})).next((()=>s.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.di,(s=>{const r=z.fromPath(s);return this.mi(e,r).next((i=>{i||t.removeEntry(r,W.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((s=>{s?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return k.or([()=>k.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Lr{constructor(e,t){this.persistence=e,this.fi=new hn((s=>Dp(s.path)),((s,r)=>s.isEqual(r))),this.garbageCollector=Jg(this,t)}static Vi(e,t){return new Lr(e,t)}Ti(){}Ii(e){return k.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((r=>s+r))))}pr(e){let t=0;return this.mr(e,(s=>{t++})).next((()=>t))}mr(e,t){return k.forEach(this.fi,((s,r)=>this.wr(e,s,r).next((i=>i?k.resolve():t(r)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ni(e,(o=>this.wr(e,o,t).next((l=>{l||(s++,i.removeEntry(o,W.min()))})))).next((()=>i.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),k.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),k.resolve()}removeReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),k.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),k.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=hr(e.data.value)),t}wr(e,t,s){return k.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.fi.get(t);return k.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Ts=s,this.Is=r}static Es(e,t){let s=te(),r=te();for(const i of t.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new za(e,t.fromCache,s,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return Gf()?8:Cp(Le())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,r){const i={result:null};return this.gs(e,t).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ps(e,t,r,s).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new iv;return this.ys(e,t,o).next((l=>{if(i.result=l,this.As)return this.ws(e,t,o,l.size)}))})).next((()=>i.result))}ws(e,t,s,r){return s.documentReadCount<this.Vs?(vn()<=Z.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",yn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),k.resolve()):(vn()<=Z.DEBUG&&$("QueryEngine","Query:",yn(t),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.ds*r?(vn()<=Z.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",yn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nt(t))):k.resolve())}gs(e,t){if(rl(t))return k.resolve(null);let s=nt(t);return this.indexManager.getIndexType(e,s).next((r=>r===0?null:(t.limit!==null&&r===1&&(t=Nr(t,null,"F"),s=nt(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((i=>{const o=te(...i);return this.fs.getDocuments(e,o).next((l=>this.indexManager.getMinOffset(e,s).next((u=>{const h=this.bs(t,l);return this.Ss(t,h,o,u.readTime)?this.gs(e,Nr(t,null,"F")):this.Ds(e,h,t,u)}))))})))))}ps(e,t,s,r){return rl(t)||r.isEqual(W.min())?k.resolve(null):this.fs.getDocuments(e,s).next((i=>{const o=this.bs(t,i);return this.Ss(t,o,s,r)?k.resolve(null):(vn()<=Z.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),yn(t)),this.Ds(e,o,t,wp(r,Ts)).next((l=>l)))}))}bs(e,t){let s=new Ee(ed(e));return t.forEach(((r,i)=>{Xr(e,i)&&(s=s.add(i))})),s}Ss(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ys(e,t,s){return vn()<=Z.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",yn(t)),this.fs.getDocumentsMatchingQuery(e,t,Lt.min(),s)}Ds(e,t,s,r){return this.fs.getDocumentsMatchingQuery(e,s,r).next((i=>(t.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha="LocalStore",ov=3e8;class cv{constructor(e,t,s,r){this.persistence=e,this.Cs=t,this.serializer=r,this.vs=new de(ee),this.Fs=new hn((i=>Va(i)),La),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Kg(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function lv(n,e,t,s){return new cv(n,e,t,s)}async function wd(n,e){const t=K(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next((i=>(r=i,t.Os(e),t.mutationQueue.getAllMutationBatches(s)))).next((i=>{const o=[],l=[];let u=te();for(const h of r){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(s,u).next((h=>({Ns:h,removedBatchIds:o,addedBatchIds:l})))}))}))}function uv(n,e){const t=K(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const r=e.batch.keys(),i=t.xs.newChangeBuffer({trackRemovals:!0});return(function(l,u,h,f){const y=h.batch,b=y.keys();let A=k.resolve();return b.forEach((P=>{A=A.next((()=>f.getEntry(u,P))).next((S=>{const N=h.docVersions.get(P);re(N!==null,48541),S.version.compareTo(N)<0&&(y.applyToRemoteDocument(S,h),S.isValidDocument()&&(S.setReadTime(h.commitVersion),f.addEntry(S)))}))})),A.next((()=>l.mutationQueue.removeMutationBatch(u,y)))})(t,s,e,i).next((()=>i.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(l){let u=te();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u})(e)))).next((()=>t.localDocuments.getDocuments(s,r)))}))}function Ad(n){const e=K(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function dv(n,e){const t=K(n),s=e.snapshotVersion;let r=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=t.xs.newChangeBuffer({trackRemovals:!0});r=t.vs;const l=[];e.targetChanges.forEach(((f,y)=>{const b=r.get(y);if(!b)return;l.push(t.li.removeMatchingKeys(i,f.removedDocuments,y).next((()=>t.li.addMatchingKeys(i,f.addedDocuments,y))));let A=b.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(y)!==null?A=A.withResumeToken(Pe.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,s)),r=r.insert(y,A),(function(S,N,D){return S.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=ov?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0})(b,A,f)&&l.push(t.li.updateTargetData(i,A))}));let u=mt(),h=te();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))})),l.push(hv(i,o,e.documentUpdates).next((f=>{u=f.Bs,h=f.Ls}))),!s.isEqual(W.min())){const f=t.li.getLastRemoteSnapshotVersion(i).next((y=>t.li.setTargetsMetadata(i,i.currentSequenceNumber,s)));l.push(f)}return k.waitFor(l).next((()=>o.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,u,h))).next((()=>u))})).then((i=>(t.vs=r,i)))}function hv(n,e,t){let s=te(),r=te();return t.forEach((i=>s=s.add(i))),e.getEntries(n,s).next((i=>{let o=mt();return t.forEach(((l,u)=>{const h=i.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(r=r.add(l)),u.isNoDocument()&&u.version.isEqual(W.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):$(Ha,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)})),{Bs:o,Ls:r}}))}function fv(n,e){const t=K(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Da),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function mv(n,e){const t=K(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let r;return t.li.getTargetData(s,e).next((i=>i?(r=i,k.resolve(r)):t.li.allocateTargetId(s).next((o=>(r=new Pt(e,o,"TargetPurposeListen",s.currentSequenceNumber),t.li.addTargetData(s,r).next((()=>r)))))))})).then((s=>{const r=t.vs.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.vs=t.vs.insert(s.targetId,s),t.Fs.set(e,s.targetId)),s}))}async function ma(n,e,t){const s=K(n),r=s.vs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",i,(o=>s.persistence.referenceDelegate.removeTarget(o,r)))}catch(o){if(!Un(o))throw o;$(Ha,`Failed to update sequence numbers for target ${e}: ${o}`)}s.vs=s.vs.remove(e),s.Fs.delete(r.target)}function vl(n,e,t){const s=K(n);let r=W.min(),i=te();return s.persistence.runTransaction("Execute query","readwrite",(o=>(function(u,h,f){const y=K(u),b=y.Fs.get(f);return b!==void 0?k.resolve(y.vs.get(b)):y.li.getTargetData(h,f)})(s,o,nt(e)).next((l=>{if(l)return r=l.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(o,l.targetId).next((u=>{i=u}))})).next((()=>s.Cs.getDocumentsMatchingQuery(o,e,t?r:W.min(),t?i:te()))).next((l=>(pv(s,Zp(e),l),{documents:l,ks:i})))))}function pv(n,e,t){let s=n.Ms.get(e)||W.min();t.forEach(((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)})),n.Ms.set(e,s)}class yl{constructor(){this.activeTargetIds=ig()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class gv{constructor(){this.vo=new yl,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,s){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new yl,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l="ConnectivityMonitor";class bl{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){$(_l,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){$(_l,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lr=null;function pa(){return lr===null?lr=(function(){return 268435456+Math.round(2147483648*Math.random())})():lr++,"0x"+lr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi="RestConnection",yv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class _v{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${s}/databases/${r}`,this.$o=this.databaseId.database===Cr?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Wo(e,t,s,r,i){const o=pa(),l=this.Qo(e,t.toUriEncodedString());$(Gi,`Sending RPC '${e}' ${o}:`,l,s);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,r,i);const{host:h}=new URL(l),f=Ln(h);return this.zo(e,l,u,s,f).then((y=>($(Gi,`Received RPC '${e}' ${o}: `,y),y)),(y=>{throw on(Gi,`RPC '${e}' ${o} failed with error: `,y,"url: ",l,"request:",s),y}))}jo(e,t,s,r,i,o){return this.Wo(e,t,s,r,i)}Go(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+On})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((r,i)=>e[i]=r)),s&&s.headers.forEach(((r,i)=>e[i]=r))}Qo(e,t){const s=yv[e];let r=`${this.qo}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke="WebChannelConnection",cs=(n,e,t)=>{n.listen(e,(s=>{try{t(s)}catch(r){setTimeout((()=>{throw r}),0)}}))};class En extends _v{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!En.c_){const e=ku();cs(e,Cu.STAT_EVENT,(t=>{t.stat===sa.PROXY?$(ke,"STAT_EVENT: detected buffering proxy"):t.stat===sa.NOPROXY&&$(ke,"STAT_EVENT: detected no buffering proxy")})),En.c_=!0}}zo(e,t,s,r,i){const o=pa();return new Promise(((l,u)=>{const h=new Ru;h.setWithCredentials(!0),h.listenOnce(Pu.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case dr.NO_ERROR:const y=h.getResponseJson();$(ke,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(y)),l(y);break;case dr.TIMEOUT:$(ke,`RPC '${e}' ${o} timed out`),u(new U(C.DEADLINE_EXCEEDED,"Request time out"));break;case dr.HTTP_ERROR:const b=h.getStatus();if($(ke,`RPC '${e}' ${o} failed with status:`,b,"response text:",h.getResponseText()),b>0){let A=h.getResponseJson();Array.isArray(A)&&(A=A[0]);const P=A==null?void 0:A.error;if(P&&P.status&&P.message){const S=(function(D){const V=D.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(V)>=0?V:C.UNKNOWN})(P.status);u(new U(S,P.message))}else u(new U(C.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new U(C.UNAVAILABLE,"Connection failed."));break;default:G(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{$(ke,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(r);$(ke,`RPC '${e}' ${o} sending request:`,r),h.send(t,"POST",f,s,15)}))}T_(e,t,s){const r=pa(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,t,s),l.encodeInitMessageHeaders=!0;const h=i.join("");$(ke,`Creating RPC '${e}' stream ${r}: ${h}`,l);const f=o.createWebChannel(h,l);this.I_(f);let y=!1,b=!1;const A=new bv({Ho:P=>{b?$(ke,`Not sending because RPC '${e}' stream ${r} is closed:`,P):(y||($(ke,`Opening RPC '${e}' stream ${r} transport.`),f.open(),y=!0),$(ke,`RPC '${e}' stream ${r} sending:`,P),f.send(P))},Jo:()=>f.close()});return cs(f,ls.EventType.OPEN,(()=>{b||($(ke,`RPC '${e}' stream ${r} transport opened.`),A.i_())})),cs(f,ls.EventType.CLOSE,(()=>{b||(b=!0,$(ke,`RPC '${e}' stream ${r} transport closed`),A.o_(),this.E_(f))})),cs(f,ls.EventType.ERROR,(P=>{b||(b=!0,on(ke,`RPC '${e}' stream ${r} transport errored. Name:`,P.name,"Message:",P.message),A.o_(new U(C.UNAVAILABLE,"The operation could not be completed")))})),cs(f,ls.EventType.MESSAGE,(P=>{var S;if(!b){const N=P.data[0];re(!!N,16349);const D=N,V=(D==null?void 0:D.error)||((S=D[0])==null?void 0:S.error);if(V){$(ke,`RPC '${e}' stream ${r} received error:`,V);const B=V.status;let F=(function(T){const v=pe[T];if(v!==void 0)return dd(v)})(B),x=V.message;B==="NOT_FOUND"&&x.includes("database")&&x.includes("does not exist")&&x.includes(this.databaseId.database)&&on(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),F===void 0&&(F=C.INTERNAL,x="Unknown error status: "+B+" with message "+V.message),b=!0,A.o_(new U(F,x)),f.close()}else $(ke,`RPC '${e}' stream ${r} received:`,N),A.__(N)}})),En.u_(),setTimeout((()=>{A.s_()}),0),A}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,s){super.Go(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Du()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ev(n){return new En(n)}function Ji(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(n){return new Ag(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */En.c_=!1;class Sd{constructor(e,t,s=1e3,r=1.5,i=6e4){this.Ci=e,this.timerId=t,this.R_=s,this.A_=r,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-s);r>0&&$("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,r,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El="PersistentStream";class Rd{constructor(e,t,s,r,i,o,l,u){this.Ci=e,this.b_=s,this.S_=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Sd(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===C.RESOURCE_EXHAUSTED?(ft(t.toString()),ft("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,r])=>{this.D_===t&&this.G_(s,r)}),(s=>{e((()=>{const r=new U(C.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(r)}))}))}G_(e,t){const s=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.Yo((()=>{s((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((r=>{s((()=>this.z_(r)))})),this.stream.onMessage((r=>{s((()=>++this.F_==1?this.H_(r):this.onNext(r)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return $(El,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():($(El,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Tv extends Rd{constructor(e,t,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,o),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Pg(this.serializer,e),s=(function(i){if(!("targetChange"in i))return W.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?W.min():o.readTime?st(o.readTime):W.min()})(e);return this.listener.J_(t,s)}Z_(e){const t={};t.database=fa(this.serializer),t.addTarget=(function(i,o){let l;const u=o.target;if(l=ca(u)?{documents:Dg(i,u)}:{query:Ng(i,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=md(i,o.resumeToken);const h=ua(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(W.min())>0){l.readTime=Vr(i,o.snapshotVersion.toTimestamp());const h=ua(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l})(this.serializer,e);const s=Vg(this.serializer,e);s&&(t.labels=s),this.K_(t)}X_(e){const t={};t.database=fa(this.serializer),t.removeTarget=e,this.K_(t)}}class Iv extends Rd{constructor(e,t,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}H_(e){return re(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,re(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){re(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=kg(e.writeResults,e.commitTime),s=st(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=fa(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>Cg(this.serializer,s)))};this.K_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{}class Av extends wv{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new U(C.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Wo(e,da(t,s),r,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(C.UNKNOWN,i.toString())}))}jo(e,t,s,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,l])=>this.connection.jo(e,da(t,s),r,o,l,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new U(C.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function Sv(n,e,t,s){return new Av(n,e,t,s)}class Rv{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ft(t),this.aa=!1):$("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn="RemoteStore";class Pv{constructor(e,t,s,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo((o=>{s.enqueueAndForget((async()=>{fn(this)&&($(cn,"Restarting streams for network reachability change."),await(async function(u){const h=K(u);h.Ea.add(4),await Ms(h),h.Va.set("Unknown"),h.Ea.delete(4),await si(h)})(this))}))})),this.Va=new Rv(s,r)}}async function si(n){if(fn(n))for(const e of n.Ra)await e(!0)}async function Ms(n){for(const e of n.Ra)await e(!1)}function Pd(n,e){const t=K(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Wa(t)?Qa(t):$n(t).O_()&&Ja(t,e))}function Ga(n,e){const t=K(n),s=$n(t);t.Ia.delete(e),s.O_()&&Cd(t,e),t.Ia.size===0&&(s.O_()?s.L_():fn(t)&&t.Va.set("Unknown"))}function Ja(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(W.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}$n(n).Z_(e)}function Cd(n,e){n.da.$e(e),$n(n).X_(e)}function Qa(n){n.da=new Eg({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),$n(n).start(),n.Va.ua()}function Wa(n){return fn(n)&&!$n(n).x_()&&n.Ia.size>0}function fn(n){return K(n).Ea.size===0}function kd(n){n.da=void 0}async function Cv(n){n.Va.set("Online")}async function kv(n){n.Ia.forEach(((e,t)=>{Ja(n,e)}))}async function Dv(n,e){kd(n),Wa(n)?(n.Va.ha(e),Qa(n)):n.Va.set("Unknown")}async function Nv(n,e,t){if(n.Va.set("Online"),e instanceof fd&&e.state===2&&e.cause)try{await(async function(r,i){const o=i.cause;for(const l of i.targetIds)r.Ia.has(l)&&(await r.remoteSyncer.rejectListen(l,o),r.Ia.delete(l),r.da.removeTarget(l))})(n,e)}catch(s){$(cn,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Mr(n,s)}else if(e instanceof pr?n.da.Xe(e):e instanceof hd?n.da.st(e):n.da.tt(e),!t.isEqual(W.min()))try{const s=await Ad(n.localStore);t.compareTo(s)>=0&&await(function(i,o){const l=i.da.Tt(o);return l.targetChanges.forEach(((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ia.get(h);f&&i.Ia.set(h,f.withResumeToken(u.resumeToken,o))}})),l.targetMismatches.forEach(((u,h)=>{const f=i.Ia.get(u);if(!f)return;i.Ia.set(u,f.withResumeToken(Pe.EMPTY_BYTE_STRING,f.snapshotVersion)),Cd(i,u);const y=new Pt(f.target,u,h,f.sequenceNumber);Ja(i,y)})),i.remoteSyncer.applyRemoteEvent(l)})(n,t)}catch(s){$(cn,"Failed to raise snapshot:",s),await Mr(n,s)}}async function Mr(n,e,t){if(!Un(e))throw e;n.Ea.add(1),await Ms(n),n.Va.set("Offline"),t||(t=()=>Ad(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{$(cn,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await si(n)}))}function Dd(n,e){return e().catch((t=>Mr(n,t,e)))}async function ri(n){const e=K(n),t=Ut(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Da;for(;xv(e);)try{const r=await fv(e.localStore,s);if(r===null){e.Ta.length===0&&t.L_();break}s=r.batchId,Vv(e,r)}catch(r){await Mr(e,r)}Nd(e)&&xd(e)}function xv(n){return fn(n)&&n.Ta.length<10}function Vv(n,e){n.Ta.push(e);const t=Ut(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function Nd(n){return fn(n)&&!Ut(n).x_()&&n.Ta.length>0}function xd(n){Ut(n).start()}async function Lv(n){Ut(n).ra()}async function Mv(n){const e=Ut(n);for(const t of n.Ta)e.ea(t.mutations)}async function Ov(n,e,t){const s=n.Ta.shift(),r=Ua.from(s,e,t);await Dd(n,(()=>n.remoteSyncer.applySuccessfulWrite(r))),await ri(n)}async function Fv(n,e){e&&Ut(n).Y_&&await(async function(s,r){if((function(o){return yg(o)&&o!==C.ABORTED})(r.code)){const i=s.Ta.shift();Ut(s).B_(),await Dd(s,(()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r))),await ri(s)}})(n,e),Nd(n)&&xd(n)}async function Tl(n,e){const t=K(n);t.asyncQueue.verifyOperationInProgress(),$(cn,"RemoteStore received new credentials");const s=fn(t);t.Ea.add(3),await Ms(t),s&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await si(t)}async function Uv(n,e){const t=K(n);e?(t.Ea.delete(2),await si(t)):e||(t.Ea.add(2),await Ms(t),t.Va.set("Unknown"))}function $n(n){return n.ma||(n.ma=(function(t,s,r){const i=K(t);return i.sa(),new Tv(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(n.datastore,n.asyncQueue,{Zo:Cv.bind(null,n),Yo:kv.bind(null,n),t_:Dv.bind(null,n),J_:Nv.bind(null,n)}),n.Ra.push((async e=>{e?(n.ma.B_(),Wa(n)?Qa(n):n.Va.set("Unknown")):(await n.ma.stop(),kd(n))}))),n.ma}function Ut(n){return n.fa||(n.fa=(function(t,s,r){const i=K(t);return i.sa(),new Iv(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:Lv.bind(null,n),t_:Fv.bind(null,n),ta:Mv.bind(null,n),na:Ov.bind(null,n)}),n.Ra.push((async e=>{e?(n.fa.B_(),await ri(n)):(await n.fa.stop(),n.Ta.length>0&&($(cn,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,t,s,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new xt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,r,i){const o=Date.now()+s,l=new Ka(e,t,o,r,i);return l.start(s),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ya(n,e){if(ft("AsyncQueue",`${e}: ${n}`),Un(n))return new U(C.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{static emptySet(e){return new Tn(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||z.comparator(t.key,s.key):(t,s)=>z.comparator(t.key,s.key),this.keyedMap=us(),this.sortedSet=new de(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Tn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Tn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(){this.ga=new de(z.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):G(63341,{Vt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Nn{constructor(e,t,s,r,i,o,l,u,h){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,s,r,i){const o=[];return t.forEach((l=>{o.push({type:0,doc:l})})),new Nn(e,t,Tn.emptySet(t),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Yr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class $v{constructor(){this.queries=wl(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const r=K(t),i=r.queries;r.queries=wl(),i.forEach(((o,l)=>{for(const u of l.ba)u.onError(s)}))})(this,new U(C.ABORTED,"Firestore shutting down"))}}function wl(){return new hn((n=>Zu(n)),Yr)}async function Vd(n,e){const t=K(n);let s=3;const r=e.query;let i=t.queries.get(r);i?!i.Sa()&&e.Da()&&(s=2):(i=new qv,s=e.Da()?0:1);try{switch(s){case 0:i.wa=await t.onListen(r,!0);break;case 1:i.wa=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(o){const l=Ya(o,`Initialization of query '${yn(e.query)}' failed`);return void e.onError(l)}t.queries.set(r,i),i.ba.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&Xa(t)}async function Ld(n,e){const t=K(n),s=e.query;let r=3;const i=t.queries.get(s);if(i){const o=i.ba.indexOf(e);o>=0&&(i.ba.splice(o,1),i.ba.length===0?r=e.Da()?0:1:!i.Sa()&&e.Da()&&(r=2))}switch(r){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function Bv(n,e){const t=K(n);let s=!1;for(const r of e){const i=r.query,o=t.queries.get(i);if(o){for(const l of o.ba)l.Fa(r)&&(s=!0);o.wa=r}}s&&Xa(t)}function jv(n,e,t){const s=K(n),r=s.queries.get(e);if(r)for(const i of r.ba)i.onError(t);s.queries.delete(e)}function Xa(n){n.Ca.forEach((e=>{e.next()}))}var ga,Al;(Al=ga||(ga={})).Ma="default",Al.Cache="cache";class Md{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Nn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.Ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Nn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==ga.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e){this.key=e}}class Fd{constructor(e){this.key=e}}class zv{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=te(),this.mutatedKeys=te(),this.eu=ed(e),this.tu=new Tn(this.eu)}get nu(){return this.Za}ru(e,t){const s=t?t.iu:new Il,r=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,o=r,l=!1;const u=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,h=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((f,y)=>{const b=r.get(f),A=Xr(this.query,y)?y:null,P=!!b&&this.mutatedKeys.has(b.key),S=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let N=!1;b&&A?b.data.isEqual(A.data)?P!==S&&(s.track({type:3,doc:A}),N=!0):this.su(b,A)||(s.track({type:2,doc:A}),N=!0,(u&&this.eu(A,u)>0||h&&this.eu(A,h)<0)&&(l=!0)):!b&&A?(s.track({type:0,doc:A}),N=!0):b&&!A&&(s.track({type:1,doc:b}),N=!0,(u||h)&&(l=!0)),N&&(A?(o=o.add(A),i=S?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),s.track({type:1,doc:f})}return{tu:o,iu:s,Ss:l,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,r){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((f,y)=>(function(A,P){const S=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G(20277,{Vt:N})}};return S(A)-S(P)})(f.type,y.type)||this.eu(f.doc,y.doc))),this.ou(s),r=r??!1;const l=t&&!r?this._u():[],u=this.Ya.size===0&&this.current&&!r?1:0,h=u!==this.Xa;return this.Xa=u,o.length!==0||h?{snapshot:new Nn(this.query,e.tu,i,o,e.mutatedKeys,u===0,h,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Il,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=te(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Ya=this.Ya.add(s.key))}));const t=[];return e.forEach((s=>{this.Ya.has(s)||t.push(new Fd(s))})),this.Ya.forEach((s=>{e.has(s)||t.push(new Od(s))})),t}cu(e){this.Za=e.ks,this.Ya=te();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Nn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Za="SyncEngine";class Hv{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class Gv{constructor(e){this.key=e,this.hu=!1}}class Jv{constructor(e,t,s,r,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new hn((l=>Zu(l)),Yr),this.Iu=new Map,this.Eu=new Set,this.Ru=new de(z.comparator),this.Au=new Map,this.Vu=new Ba,this.du={},this.mu=new Map,this.fu=Dn.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Qv(n,e,t=!0){const s=zd(n);let r;const i=s.Tu.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.lu()):r=await Ud(s,e,t,!0),r}async function Wv(n,e){const t=zd(n);await Ud(t,e,!0,!1)}async function Ud(n,e,t,s){const r=await mv(n.localStore,nt(e)),i=r.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let l;return s&&(l=await Kv(n,e,i,o==="current",r.resumeToken)),n.isPrimaryClient&&t&&Pd(n.remoteStore,r),l}async function Kv(n,e,t,s,r){n.pu=(y,b,A)=>(async function(S,N,D,V){let B=N.view.ru(D);B.Ss&&(B=await vl(S.localStore,N.query,!1).then((({documents:T})=>N.view.ru(T,B))));const F=V&&V.targetChanges.get(N.targetId),x=V&&V.targetMismatches.get(N.targetId)!=null,M=N.view.applyChanges(B,S.isPrimaryClient,F,x);return Rl(S,N.targetId,M.au),M.snapshot})(n,y,b,A);const i=await vl(n.localStore,e,!0),o=new zv(e,i.ks),l=o.ru(i.documents),u=Ls.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),h=o.applyChanges(l,n.isPrimaryClient,u);Rl(n,t,h.au);const f=new Hv(e,t,o);return n.Tu.set(e,f),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),h.snapshot}async function Yv(n,e,t){const s=K(n),r=s.Tu.get(e),i=s.Iu.get(r.targetId);if(i.length>1)return s.Iu.set(r.targetId,i.filter((o=>!Yr(o,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await ma(s.localStore,r.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(r.targetId),t&&Ga(s.remoteStore,r.targetId),va(s,r.targetId)})).catch(Fn)):(va(s,r.targetId),await ma(s.localStore,r.targetId,!0))}async function Xv(n,e){const t=K(n),s=t.Tu.get(e),r=t.Iu.get(s.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Ga(t.remoteStore,s.targetId))}async function Zv(n,e,t){const s=ay(n);try{const r=await(function(o,l){const u=K(o),h=le.now(),f=l.reduce(((A,P)=>A.add(P.key)),te());let y,b;return u.persistence.runTransaction("Locally write mutations","readwrite",(A=>{let P=mt(),S=te();return u.xs.getEntries(A,f).next((N=>{P=N,P.forEach(((D,V)=>{V.isValidDocument()||(S=S.add(D))}))})).next((()=>u.localDocuments.getOverlayedDocuments(A,P))).next((N=>{y=N;const D=[];for(const V of l){const B=fg(V,y.get(V.key).overlayedDocument);B!=null&&D.push(new jt(V.key,B,Hu(B.value.mapValue),He.exists(!0)))}return u.mutationQueue.addMutationBatch(A,h,D,l)})).next((N=>{b=N;const D=N.applyToLocalDocumentSet(y,S);return u.documentOverlayCache.saveOverlays(A,N.batchId,D)}))})).then((()=>({batchId:b.batchId,changes:nd(y)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),(function(o,l,u){let h=o.du[o.currentUser.toKey()];h||(h=new de(ee)),h=h.insert(l,u),o.du[o.currentUser.toKey()]=h})(s,r.batchId,t),await Os(s,r.changes),await ri(s.remoteStore)}catch(r){const i=Ya(r,"Failed to persist write");t.reject(i)}}async function qd(n,e){const t=K(n);try{const s=await dv(t.localStore,e);e.targetChanges.forEach(((r,i)=>{const o=t.Au.get(i);o&&(re(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?o.hu=!0:r.modifiedDocuments.size>0?re(o.hu,14607):r.removedDocuments.size>0&&(re(o.hu,42227),o.hu=!1))})),await Os(t,s,e)}catch(s){await Fn(s)}}function Sl(n,e,t){const s=K(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.Tu.forEach(((i,o)=>{const l=o.view.va(e);l.snapshot&&r.push(l.snapshot)})),(function(o,l){const u=K(o);u.onlineState=l;let h=!1;u.queries.forEach(((f,y)=>{for(const b of y.ba)b.va(l)&&(h=!0)})),h&&Xa(u)})(s.eventManager,e),r.length&&s.Pu.J_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function ey(n,e,t){const s=K(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.Au.get(e),i=r&&r.key;if(i){let o=new de(z.comparator);o=o.insert(i,xe.newNoDocument(i,W.min()));const l=te().add(i),u=new ti(W.min(),new Map,new de(ee),o,l);await qd(s,u),s.Ru=s.Ru.remove(i),s.Au.delete(e),eo(s)}else await ma(s.localStore,e,!1).then((()=>va(s,e,t))).catch(Fn)}async function ty(n,e){const t=K(n),s=e.batch.batchId;try{const r=await uv(t.localStore,e);Bd(t,s,null),$d(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Os(t,r)}catch(r){await Fn(r)}}async function ny(n,e,t){const s=K(n);try{const r=await(function(o,l){const u=K(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next((y=>(re(y!==null,37113),f=y.keys(),u.mutationQueue.removeMutationBatch(h,y)))).next((()=>u.mutationQueue.performConsistencyCheck(h))).next((()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l))).next((()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f))).next((()=>u.localDocuments.getDocuments(h,f)))}))})(s.localStore,e);Bd(s,e,t),$d(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Os(s,r)}catch(r){await Fn(r)}}function $d(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function Bd(n,e,t){const s=K(n);let r=s.du[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),s.du[s.currentUser.toKey()]=r}}function va(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Iu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Iu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach((s=>{n.Vu.containsKey(s)||jd(n,s)}))}function jd(n,e){n.Eu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(Ga(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),eo(n))}function Rl(n,e,t){for(const s of t)s instanceof Od?(n.Vu.addReference(s.key,e),sy(n,s)):s instanceof Fd?($(Za,"Document no longer in limbo: "+s.key),n.Vu.removeReference(s.key,e),n.Vu.containsKey(s.key)||jd(n,s.key)):G(19791,{wu:s})}function sy(n,e){const t=e.key,s=t.path.canonicalString();n.Ru.get(t)||n.Eu.has(s)||($(Za,"New document in limbo: "+t),n.Eu.add(s),eo(n))}function eo(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new z(oe.fromString(e)),s=n.fu.next();n.Au.set(s,new Gv(t)),n.Ru=n.Ru.insert(t,s),Pd(n.remoteStore,new Pt(nt(Ma(t.path)),s,"TargetPurposeLimboResolution",Qr.ce))}}async function Os(n,e,t){const s=K(n),r=[],i=[],o=[];s.Tu.isEmpty()||(s.Tu.forEach(((l,u)=>{o.push(s.pu(u,e,t).then((h=>{var f;if((h||t)&&s.isPrimaryClient){const y=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:f.current;s.sharedClientState.updateQueryState(u.targetId,y?"current":"not-current")}if(h){r.push(h);const y=za.Es(u.targetId,h);i.push(y)}})))})),await Promise.all(o),s.Pu.J_(r),await(async function(u,h){const f=K(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(y=>k.forEach(h,(b=>k.forEach(b.Ts,(A=>f.persistence.referenceDelegate.addReference(y,b.targetId,A))).next((()=>k.forEach(b.Is,(A=>f.persistence.referenceDelegate.removeReference(y,b.targetId,A)))))))))}catch(y){if(!Un(y))throw y;$(Ha,"Failed to update sequence numbers: "+y)}for(const y of h){const b=y.targetId;if(!y.fromCache){const A=f.vs.get(b),P=A.snapshotVersion,S=A.withLastLimboFreeSnapshotVersion(P);f.vs=f.vs.insert(b,S)}}})(s.localStore,i))}async function ry(n,e){const t=K(n);if(!t.currentUser.isEqual(e)){$(Za,"User change. New user:",e.toKey());const s=await wd(t.localStore,e);t.currentUser=e,(function(i,o){i.mu.forEach((l=>{l.forEach((u=>{u.reject(new U(C.CANCELLED,o))}))})),i.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Os(t,s.Ns)}}function iy(n,e){const t=K(n),s=t.Au.get(e);if(s&&s.hu)return te().add(s.key);{let r=te();const i=t.Iu.get(e);if(!i)return r;for(const o of i){const l=t.Tu.get(o);r=r.unionWith(l.view.nu)}return r}}function zd(n){const e=K(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=qd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=iy.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ey.bind(null,e),e.Pu.J_=Bv.bind(null,e.eventManager),e.Pu.yu=jv.bind(null,e.eventManager),e}function ay(n){const e=K(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ty.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ny.bind(null,e),e}class Or{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ni(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return lv(this.persistence,new av,e.initialUser,this.serializer)}Cu(e){return new Id(ja.Vi,this.serializer)}Du(e){return new gv}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Or.provider={build:()=>new Or};class oy extends Or{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){re(this.persistence.referenceDelegate instanceof Lr,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new Hg(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Fe.withCacheSize(this.cacheSizeBytes):Fe.DEFAULT;return new Id((s=>Lr.Vi(s,t)),this.serializer)}}class ya{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Sl(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=ry.bind(null,this.syncEngine),await Uv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new $v})()}createDatastore(e){const t=ni(e.databaseInfo.databaseId),s=Ev(e.databaseInfo);return Sv(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,r,i,o,l){return new Pv(s,r,i,o,l)})(this.localStore,this.datastore,e.asyncQueue,(t=>Sl(this.syncEngine,t,0)),(function(){return bl.v()?new bl:new vv})())}createSyncEngine(e,t){return(function(r,i,o,l,u,h,f){const y=new Jv(r,i,o,l,u,h);return f&&(y.gu=!0),y})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(r){const i=K(r);$(cn,"RemoteStore shutting down."),i.Ea.add(5),await Ms(i),i.Aa.shutdown(),i.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}ya.provider={build:()=>new ya};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):ft("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt="FirestoreClient";class cy{constructor(e,t,s,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=r,this.user=Ne.UNAUTHENTICATED,this.clientId=ka.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,(async o=>{$(qt,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(s,(o=>($(qt,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new xt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Ya(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Qi(n,e){n.asyncQueue.verifyOperationInProgress(),$(qt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async r=>{s.isEqual(r)||(await wd(e.localStore,r),s=r)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Pl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await ly(n);$(qt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>Tl(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,r)=>Tl(e.remoteStore,r))),n._onlineComponents=e}async function ly(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){$(qt,"Using user provided OfflineComponentProvider");try{await Qi(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(r){return r.name==="FirebaseError"?r.code===C.FAILED_PRECONDITION||r.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11})(t))throw t;on("Error using user provided cache. Falling back to memory cache: "+t),await Qi(n,new Or)}}else $(qt,"Using default OfflineComponentProvider"),await Qi(n,new oy(void 0));return n._offlineComponents}async function Gd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?($(qt,"Using user provided OnlineComponentProvider"),await Pl(n,n._uninitializedComponentsProvider._online)):($(qt,"Using default OnlineComponentProvider"),await Pl(n,new ya))),n._onlineComponents}function uy(n){return Gd(n).then((e=>e.syncEngine))}async function _a(n){const e=await Gd(n),t=e.eventManager;return t.onListen=Qv.bind(null,e.syncEngine),t.onUnlisten=Yv.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Wv.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Xv.bind(null,e.syncEngine),t}function dy(n,e,t,s){const r=new Hd(s),i=new Md(e,r,t);return n.asyncQueue.enqueueAndForget((async()=>Vd(await _a(n),i))),()=>{r.Nu(),n.asyncQueue.enqueueAndForget((async()=>Ld(await _a(n),i)))}}function hy(n,e,t={}){const s=new xt;return n.asyncQueue.enqueueAndForget((async()=>(function(i,o,l,u,h){const f=new Hd({next:b=>{f.Nu(),o.enqueueAndForget((()=>Ld(i,y))),b.fromCache&&u.source==="server"?h.reject(new U(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(b)},error:b=>h.reject(b)}),y=new Md(l,f,{includeMetadataChanges:!0,Ka:!0});return Vd(i,y)})(await _a(n),n.asyncQueue,e,t,s))),s.promise}function fy(n,e){const t=new xt;return n.asyncQueue.enqueueAndForget((async()=>Zv(await uy(n),e,t))),t.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jd(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const my="ComponentProvider",Cl=new Map;function py(n,e,t,s,r){return new Vp(n,e,t,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,Jd(r.experimentalLongPollingOptions),r.useFetchStreams,r.isUsingEmulator,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd="firestore.googleapis.com",kl=!0;class Dl{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new U(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Qd,this.ssl=kl}else this.host=e.host,this.ssl=e.ssl??kl;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Td;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<jg)throw new U(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Ip("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Jd(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new U(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new U(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new U(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,r){return s.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ii{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Dl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new U(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new U(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Dl(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new fp;switch(s.type){case"firstParty":return new vp(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new U(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=Cl.get(t);s&&($(my,"Removing Datastore"),Cl.delete(t),s.terminate())})(this),Promise.resolve()}}function gy(n,e,t,s={}){var h;n=ze(n,ii);const r=Ln(e),i=n._getSettings(),o={...i,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;r&&(yu(`https://${l}`),_u("Firestore",!0)),i.host!==Qd&&i.host!==l&&on("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:r,emulatorOptions:s};if(!sn(u,o)&&(n._setSettings(u),s.mockUserToken)){let f,y;if(typeof s.mockUserToken=="string")f=s.mockUserToken,y=Ne.MOCK_USER;else{f=Of(s.mockUserToken,(h=n._app)==null?void 0:h.options.projectId);const b=s.mockUserToken.sub||s.mockUserToken.user_id;if(!b)throw new U(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new Ne(b)}n._authCredentials=new mp(new xu(f,y))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new vt(this.firestore,e,this._query)}}class me{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Vt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new me(this.firestore,e,this._key)}toJSON(){return{type:me._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(xs(t,me._jsonSchema))return new me(e,s||null,new z(oe.fromString(t.referencePath)))}}me._jsonSchemaVersion="firestore/documentReference/1.0",me._jsonSchema={type:ve("string",me._jsonSchemaVersion),referencePath:ve("string")};class Vt extends vt{constructor(e,t,s){super(e,t,Ma(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new me(this.firestore,null,new z(e))}withConverter(e){return new Vt(this.firestore,e,this._path)}}function Je(n,e,...t){if(n=Re(n),Vu("collection","path",e),n instanceof ii){const s=oe.fromString(e,...t);return zc(s),new Vt(n,null,s)}{if(!(n instanceof me||n instanceof Vt))throw new U(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(oe.fromString(e,...t));return zc(s),new Vt(n.firestore,null,s)}}function ue(n,e,...t){if(n=Re(n),arguments.length===1&&(e=ka.newId()),Vu("doc","path",e),n instanceof ii){const s=oe.fromString(e,...t);return jc(s),new me(n,null,new z(s))}{if(!(n instanceof me||n instanceof Vt))throw new U(C.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(oe.fromString(e,...t));return jc(s),new me(n.firestore,n instanceof Vt?n.converter:null,new z(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl="AsyncQueue";class xl{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Sd(this,"async_queue_retry"),this._c=()=>{const s=Ji();s&&$(Nl,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=Ji();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Ji();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new xt;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Un(e))throw e;$(Nl,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,ft("INTERNAL UNHANDLED ERROR: ",Vl(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const r=Ka.createAndSchedule(this,e,t,s,(i=>this.hc(i)));return this.tc.push(r),r}uc(){this.nc&&G(47125,{Pc:Vl(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Vl(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class $t extends ii{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new xl,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new xl(e),this._firestoreClient=void 0,await e}}}function vy(n,e){const t=typeof n=="object"?n:Iu(),s=typeof n=="string"?n:Cr,r=Pa(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Lf("firestore");i&&gy(r,...i)}return r}function to(n){if(n._terminated)throw new U(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||yy(n),n._firestoreClient}function yy(n){var s,r,i,o;const e=n._freezeSettings(),t=py(n._databaseId,((s=n._app)==null?void 0:s.options.appId)||"",n._persistenceKey,(r=n._app)==null?void 0:r.options.apiKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new cy(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this._byteString=e}static fromBase64String(e){try{return new je(Pe.fromBase64String(e))}catch(t){throw new U(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new je(Pe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:je._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(xs(e,je._jsonSchema))return je.fromBase64String(e.bytes)}}je._jsonSchemaVersion="firestore/bytes/1.0",je._jsonSchema={type:ve("string",je._jsonSchemaVersion),bytes:ve("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new U(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Se(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new U(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new U(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ee(this._lat,e._lat)||ee(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:rt._jsonSchemaVersion}}static fromJSON(e){if(xs(e,rt._jsonSchema))return new rt(e.latitude,e.longitude)}}rt._jsonSchemaVersion="firestore/geoPoint/1.0",rt._jsonSchema={type:ve("string",rt._jsonSchemaVersion),latitude:ve("number"),longitude:ve("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Ke._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(xs(e,Ke._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Ke(e.vectorValues);throw new U(C.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ke._jsonSchemaVersion="firestore/vectorValue/1.0",Ke._jsonSchema={type:ve("string",Ke._jsonSchemaVersion),vectorValues:ve("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y=/^__.*__$/;class by{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new jt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Vs(e,this.data,t,this.fieldTransforms)}}class Wd{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new jt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Kd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G(40011,{dataSource:n})}}class so{constructor(e,t,s,r,i,o){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new so({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.contextWith({path:t,arrayElement:!1});return s.validatePathSegment(e),s}childContextForFieldPath(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.contextWith({path:t,arrayElement:!1});return s.validatePath(),s}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Fr(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(Kd(this.dataSource)&&_y.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class Ey{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||ni(e)}createContext(e,t,s,r=!1){return new so({dataSource:e,methodName:t,targetDoc:s,path:Se.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function oi(n){const e=n._freezeSettings(),t=ni(n._databaseId);return new Ey(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Yd(n,e,t,s,r,i={}){const o=n.createContext(i.merge||i.mergeFields?2:0,e,t,r);io("Data must be an object, but it was:",o,s);const l=Xd(s,o);let u,h;if(i.merge)u=new Be(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const y of i.mergeFields){const b=ln(e,y,t);if(!o.contains(b))throw new U(C.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);th(f,b)||f.push(b)}u=new Be(f),h=o.fieldTransforms.filter((y=>u.covers(y.field)))}else u=null,h=o.fieldTransforms;return new by(new qe(l),u,h)}class ci extends ai{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ci}}class ro extends ai{_toFieldTransform(e){return new lg(e.path,new Rs)}isEqual(e){return e instanceof ro}}function Ty(n,e,t,s){const r=n.createContext(1,e,t);io("Data must be an object, but it was:",r,s);const i=[],o=qe.empty();Bt(s,((u,h)=>{const f=eh(e,u,t);h=Re(h);const y=r.childContextForFieldPath(f);if(h instanceof ci)i.push(f);else{const b=Fs(h,y);b!=null&&(i.push(f),o.set(f,b))}}));const l=new Be(i);return new Wd(o,l,r.fieldTransforms)}function Iy(n,e,t,s,r,i){const o=n.createContext(1,e,t),l=[ln(e,s,t)],u=[r];if(i.length%2!=0)throw new U(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let b=0;b<i.length;b+=2)l.push(ln(e,i[b])),u.push(i[b+1]);const h=[],f=qe.empty();for(let b=l.length-1;b>=0;--b)if(!th(h,l[b])){const A=l[b];let P=u[b];P=Re(P);const S=o.childContextForFieldPath(A);if(P instanceof ci)h.push(A);else{const N=Fs(P,S);N!=null&&(h.push(A),f.set(A,N))}}const y=new Be(h);return new Wd(f,y,o.fieldTransforms)}function wy(n,e,t,s=!1){return Fs(t,n.createContext(s?4:3,e))}function Fs(n,e){if(Zd(n=Re(n)))return io("Unsupported field value:",e,n),Xd(n,e);if(n instanceof ai)return(function(s,r){if(!Kd(r.dataSource))throw r.createError(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.createError(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(s,r){const i=[];let o=0;for(const l of s){let u=Fs(l,r.childContextForArray(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}})(n,e)}return(function(s,r){if((s=Re(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return ag(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=le.fromDate(s);return{timestampValue:Vr(r.serializer,i)}}if(s instanceof le){const i=new le(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Vr(r.serializer,i)}}if(s instanceof rt)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof je)return{bytesValue:md(r.serializer,s._byteString)};if(s instanceof me){const i=r.databaseId,o=s.firestore._databaseId;if(!o.isEqual(i))throw r.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:$a(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof Ke)return(function(o,l){const u=o instanceof Ke?o.toArray():o;return{mapValue:{fields:{[ju]:{stringValue:zu},[kr]:{arrayValue:{values:u.map((f=>{if(typeof f!="number")throw l.createError("VectorValues must only contain numeric values.");return Oa(l.serializer,f)}))}}}}}})(s,r);if(Ed(s))return s._toProto(r.serializer);throw r.createError(`Unsupported field value: ${Jr(s)}`)})(n,e)}function Xd(n,e){const t={};return Ou(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Bt(n,((s,r)=>{const i=Fs(r,e.childContextForField(s));i!=null&&(t[s]=i)})),{mapValue:{fields:t}}}function Zd(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof le||n instanceof rt||n instanceof je||n instanceof me||n instanceof ai||n instanceof Ke||Ed(n))}function io(n,e,t){if(!Zd(t)||!Lu(t)){const s=Jr(t);throw s==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+s)}}function ln(n,e,t){if((e=Re(e))instanceof no)return e._internalPath;if(typeof e=="string")return eh(n,e);throw Fr("Field path arguments must be of type string or ",n,!1,void 0,t)}const Ay=new RegExp("[~\\*/\\[\\]]");function eh(n,e,t){if(e.search(Ay)>=0)throw Fr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new no(...e.split("."))._internalPath}catch{throw Fr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Fr(n,e,t,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${s}`),o&&(u+=` in document ${r}`),u+=")"),new U(C.INVALID_ARGUMENT,l+n+u)}function th(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{convertValue(e,t="none"){switch(Ft(e)){case 0:return null;case 1:return e.booleanValue;case 2:return fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ot(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw G(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Bt(e,((r,i)=>{s[r]=this.convertValue(i,t)})),s}convertVectorValue(e){var s,r,i;const t=(i=(r=(s=e.fields)==null?void 0:s[kr].arrayValue)==null?void 0:r.values)==null?void 0:i.map((o=>fe(o.doubleValue)));return new Ke(t)}convertGeoPoint(e){return new rt(fe(e.latitude),fe(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Kr(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Is(e));default:return null}}convertTimestamp(e){const t=Mt(e);return new le(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=oe.fromString(e);re(bd(s),9688,{name:e});const r=new ws(s.get(1),s.get(3)),i=new z(s.popFirst(5));return r.isEqual(t)||ft(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao extends Sy{constructor(e){super(),this.firestore=e}convertBytes(e){return new je(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new me(this.firestore,null,t)}}function Zt(){return new ro("serverTimestamp")}const Ll="@firebase/firestore",Ml="4.12.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(n){return(function(t,s){if(typeof t!="object"||t===null)return!1;const r=t;for(const i of s)if(i in r&&typeof r[i]=="function")return!0;return!1})(n,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e,t,s,r,i){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new me(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ry(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(ln("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Ry extends nh{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new U(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class oo{}class co extends oo{}function gr(n,e,...t){let s=[];e instanceof oo&&s.push(e),s=s.concat(t),(function(i){const o=i.filter((u=>u instanceof lo)).length,l=i.filter((u=>u instanceof li)).length;if(o>1||o>0&&l>0)throw new U(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const r of s)n=r._apply(n);return n}class li extends co{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new li(e,t,s)}_apply(e){const t=this._parse(e);return rh(e._query,t),new vt(e.firestore,e.converter,la(e._query,t))}_parse(e){const t=oi(e.firestore);return(function(i,o,l,u,h,f,y){let b;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new U(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){ql(y,f);const P=[];for(const S of y)P.push(Ul(u,i,S));b={arrayValue:{values:P}}}else b=Ul(u,i,y)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||ql(y,f),b=wy(l,o,y,f==="in"||f==="not-in");return ge.create(h,f,b)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function vr(n,e,t){const s=e,r=ln("where",n);return li._create(r,s,t)}class lo extends oo{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new lo(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:Xe.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(r,i){let o=r;const l=i.getFlattenedFilters();for(const u of l)rh(o,u),o=la(o,u)})(e._query,t),new vt(e.firestore,e.converter,la(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class uo extends co{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new uo(e,t)}_apply(e){const t=(function(r,i,o){if(r.startAt!==null)throw new U(C.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new U(C.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ss(i,o)})(e._query,this._field,this._direction);return new vt(e.firestore,e.converter,Xp(e._query,t))}}function Py(n,e="asc"){const t=e,s=ln("orderBy",n);return uo._create(s,t)}class ho extends co{constructor(e,t,s){super(),this.type=e,this._limit=t,this._limitType=s}static _create(e,t,s){return new ho(e,t,s)}_apply(e){return new vt(e.firestore,e.converter,Nr(e._query,this._limit,this._limitType))}}function Fl(n){return ho._create("limit",n,"F")}function Ul(n,e,t){if(typeof(t=Re(t))=="string"){if(t==="")throw new U(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Xu(e)&&t.indexOf("/")!==-1)throw new U(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(oe.fromString(t));if(!z.isDocumentKey(s))throw new U(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Xc(n,new z(s))}if(t instanceof me)return Xc(n,t._key);throw new U(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Jr(t)}.`)}function ql(n,e){if(!Array.isArray(n)||n.length===0)throw new U(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function rh(n,e){const t=(function(r,i){for(const o of r)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null})(n.filters,(function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new U(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new U(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function ih(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}class hs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class en extends nh{constructor(e,t,s,r,i,o){super(e,t,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new yr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(ln("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new U(C.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=en._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}en._jsonSchemaVersion="firestore/documentSnapshot/1.0",en._jsonSchema={type:ve("string",en._jsonSchemaVersion),bundleSource:ve("string","DocumentSnapshot"),bundleName:ve("string"),bundle:ve("string")};class yr extends en{data(e={}){return super.data(e)}}class tn{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new hs(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new yr(this._firestore,this._userDataWriter,s.key,s,new hs(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new U(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map((l=>{const u=new yr(r._firestore,r._userDataWriter,l.doc.key,l.doc,new hs(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}}))}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const u=new yr(r._firestore,r._userDataWriter,l.doc.key,l.doc,new hs(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:Cy(l.type),doc:u,oldIndex:h,newIndex:f}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new U(C.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=tn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ka.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],r=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),s.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Cy(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G(61501,{type:n})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn._jsonSchemaVersion="firestore/querySnapshot/1.0",tn._jsonSchema={type:ve("string",tn._jsonSchemaVersion),bundleSource:ve("string","QuerySnapshot"),bundleName:ve("string"),bundle:ve("string")};function _r(n){n=ze(n,vt);const e=ze(n.firestore,$t),t=to(e),s=new ao(e);return sh(n._query),hy(t,n._query).then((r=>new tn(e,s,n,r)))}function ky(n,e,t){n=ze(n,me);const s=ze(n.firestore,$t),r=ih(n.converter,e,t),i=oi(s);return ui(s,[Yd(i,"setDoc",n._key,r,n.converter!==null,t).toMutation(n._key,He.none())])}function we(n,e,t,...s){n=ze(n,me);const r=ze(n.firestore,$t),i=oi(r);let o;return o=typeof(e=Re(e))=="string"||e instanceof no?Iy(i,"updateDoc",n._key,e,t,s):Ty(i,"updateDoc",n._key,e),ui(r,[o.toMutation(n._key,He.exists(!0))])}function Dy(n){return ui(ze(n.firestore,$t),[new Fa(n._key,He.none())])}function In(n,e){const t=ze(n.firestore,$t),s=ue(n),r=ih(n.converter,e),i=oi(n.firestore);return ui(t,[Yd(i,"addDoc",s._key,r,n.converter!==null,{}).toMutation(s._key,He.exists(!1))]).then((()=>s))}function ys(n,...e){var h,f,y;n=Re(n);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||Ol(e[s])||(t=e[s++]);const r={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Ol(e[s])){const b=e[s];e[s]=(h=b.next)==null?void 0:h.bind(b),e[s+1]=(f=b.error)==null?void 0:f.bind(b),e[s+2]=(y=b.complete)==null?void 0:y.bind(b)}let i,o,l;if(n instanceof me)o=ze(n.firestore,$t),l=Ma(n._key.path),i={next:b=>{e[s]&&e[s](Ny(o,n,b))},error:e[s+1],complete:e[s+2]};else{const b=ze(n,vt);o=ze(b.firestore,$t),l=b._query;const A=new ao(o);i={next:P=>{e[s]&&e[s](new tn(o,A,b,P))},error:e[s+1],complete:e[s+2]},sh(n._query)}const u=to(o);return dy(u,l,r,i)}function ui(n,e){const t=to(n);return fy(t,e)}function Ny(n,e,t){const s=t.docs.get(e._key),r=new ao(n);return new en(n,r,e._key,s,new hs(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){hp(Mn),Rn(new rn("firestore",((s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),l=new $t(new pp(s.getProvider("auth-internal")),new yp(o,s.getProvider("app-check-internal")),Lp(o,r),o);return i={useFetchStreams:t,...i},l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),Dt(Ll,Ml,e),Dt(Ll,Ml,"esm2020")})();function ah(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xy=ah,oh=new Ds("auth","Firebase",ah());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur=new Sa("@firebase/auth");function Vy(n,...e){Ur.logLevel<=Z.WARN&&Ur.warn(`Auth (${Mn}): ${n}`,...e)}function br(n,...e){Ur.logLevel<=Z.ERROR&&Ur.error(`Auth (${Mn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(n,...e){throw mo(n,...e)}function Ye(n,...e){return mo(n,...e)}function fo(n,e,t){const s={...xy(),[e]:t};return new Ds("auth","Firebase",s).create(e,{appName:n.name})}function nn(n){return fo(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ly(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&ot(n,"argument-error"),fo(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function mo(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return oh.create(n,...e)}function J(n,e,...t){if(!n)throw mo(e,...t)}function ut(n){const e="INTERNAL ASSERTION FAILED: "+n;throw br(e),new Error(e)}function pt(n,e){n||ut(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function My(){return $l()==="http:"||$l()==="https:"}function $l(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(My()||jf()||"connection"in navigator)?navigator.onLine:!0}function Fy(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,t){this.shortDelay=e,this.longDelay=t,pt(t>e,"Short delay should be less than long delay!"),this.isMobile=qf()||zf()}get(){return Oy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(n,e){pt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ut("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ut("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ut("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qy=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],$y=new Us(3e4,6e4);function go(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Bn(n,e,t,s,r={}){return lh(n,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const l=Ns({key:n.config.apiKey,...o}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:u,...i};return Bf()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&Ln(n.emulatorConfig.host)&&(h.credentials="include"),ch.fetch()(await uh(n,n.config.apiHost,t,l),h)})}async function lh(n,e,t){n._canInitEmulator=!1;const s={...Uy,...e};try{const r=new jy(n),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ur(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ur(n,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ur(n,"email-already-in-use",o);if(u==="USER_DISABLED")throw ur(n,"user-disabled",o);const f=s[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw fo(n,f,h);ot(n,f)}}catch(r){if(r instanceof gt)throw r;ot(n,"network-request-failed",{message:String(r)})}}async function By(n,e,t,s,r={}){const i=await Bn(n,e,t,s,r);return"mfaPendingCredential"in i&&ot(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function uh(n,e,t,s){const r=`${e}${t}?${s}`,i=n,o=i.config.emulator?po(n.config,r):`${n.config.apiScheme}://${r}`;return qy.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class jy{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Ye(this.auth,"network-request-failed")),$y.get())})}}function ur(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const r=Ye(n,e,s);return r.customData._tokenResponse=t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zy(n,e){return Bn(n,"POST","/v1/accounts:delete",e)}async function qr(n,e){return Bn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Hy(n,e=!1){const t=Re(n),s=await t.getIdToken(e),r=vo(s);J(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:_s(Wi(r.auth_time)),issuedAtTime:_s(Wi(r.iat)),expirationTime:_s(Wi(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Wi(n){return Number(n)*1e3}function vo(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return br("JWT malformed, contained fewer than 3 sections"),null;try{const r=mu(t);return r?JSON.parse(r):(br("Failed to decode base64 JWT payload"),null)}catch(r){return br("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Bl(n){const e=vo(n);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ks(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof gt&&Gy(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function Gy({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=_s(this.lastLoginAt),this.creationTime=_s(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $r(n){var y;const e=n.auth,t=await n.getIdToken(),s=await ks(n,qr(e,{idToken:t}));J(s==null?void 0:s.users.length,e,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const i=(y=r.providerUserInfo)!=null&&y.length?dh(r.providerUserInfo):[],o=Wy(n.providerData,i),l=n.isAnonymous,u=!(n.email&&r.passwordHash)&&!(o!=null&&o.length),h=l?u:!1,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new Ea(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(n,f)}async function Qy(n){const e=Re(n);await $r(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Wy(n,e){return[...n.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function dh(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ky(n,e){const t=await lh(n,{},async()=>{const s=Ns({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=n.config,o=await uh(n,r,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:s};return n.emulatorConfig&&Ln(n.emulatorConfig.host)&&(u.credentials="include"),ch.fetch()(o,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Yy(n,e){return Bn(n,"POST","/v2/accounts:revokeToken",go(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Bl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){J(e.length!==0,"internal-error");const t=Bl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:r,expiresIn:i}=await Ky(e,t);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:r,expirationTime:i}=t,o=new wn;return s&&(J(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(J(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(J(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new wn,this.toJSON())}_performRefresh(){return ut("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(n,e){J(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class We{constructor({uid:e,auth:t,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new Jy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Ea(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await ks(this,this.stsTokenManager.getToken(this.auth,e));return J(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Hy(this,e)}reload(){return Qy(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new We({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await $r(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qe(this.auth.app))return Promise.reject(nn(this.auth));const e=await this.getIdToken();return await ks(this,zy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,r=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,l=t.tenantId??void 0,u=t._redirectEventId??void 0,h=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:y,emailVerified:b,isAnonymous:A,providerData:P,stsTokenManager:S}=t;J(y&&S,e,"internal-error");const N=wn.fromJSON(this.name,S);J(typeof y=="string",e,"internal-error"),wt(s,e.name),wt(r,e.name),J(typeof b=="boolean",e,"internal-error"),J(typeof A=="boolean",e,"internal-error"),wt(i,e.name),wt(o,e.name),wt(l,e.name),wt(u,e.name),wt(h,e.name),wt(f,e.name);const D=new We({uid:y,auth:e,email:r,emailVerified:b,displayName:s,isAnonymous:A,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:N,createdAt:h,lastLoginAt:f});return P&&Array.isArray(P)&&(D.providerData=P.map(V=>({...V}))),u&&(D._redirectEventId=u),D}static async _fromIdTokenResponse(e,t,s=!1){const r=new wn;r.updateFromServerResponse(t);const i=new We({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await $r(i),i}static async _fromGetAccountInfoResponse(e,t,s){const r=t.users[0];J(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?dh(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),l=new wn;l.updateFromIdToken(s);const u=new We({uid:r.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Ea(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl=new Map;function dt(n){pt(n instanceof Function,"Expected a class definition");let e=jl.get(n);return e?(pt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,jl.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}hh.type="NONE";const zl=hh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(n,e,t){return`firebase:${n}:${e}:${t}`}class An{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Er(this.userKey,r.apiKey,i),this.fullPersistenceKey=Er("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await qr(this.auth,{idToken:e}).catch(()=>{});return t?We._fromGetAccountInfoResponse(this.auth,t,e):null}return We._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new An(dt(zl),e,s);const r=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=r[0]||dt(zl);const o=Er(s,e.config.apiKey,e.name);let l=null;for(const h of t)try{const f=await h._get(o);if(f){let y;if(typeof f=="string"){const b=await qr(e,{idToken:f}).catch(()=>{});if(!b)break;y=await We._fromGetAccountInfoResponse(e,b,f)}else y=We._fromJSON(e,f);h!==i&&(l=y),i=h;break}}catch{}const u=r.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new An(i,e,s):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new An(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(fh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(yh(e))return"Blackberry";if(_h(e))return"Webos";if(mh(e))return"Safari";if((e.includes("chrome/")||ph(e))&&!e.includes("edge/"))return"Chrome";if(vh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function fh(n=Le()){return/firefox\//i.test(n)}function mh(n=Le()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ph(n=Le()){return/crios\//i.test(n)}function gh(n=Le()){return/iemobile/i.test(n)}function vh(n=Le()){return/android/i.test(n)}function yh(n=Le()){return/blackberry/i.test(n)}function _h(n=Le()){return/webos/i.test(n)}function yo(n=Le()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Xy(n=Le()){var e;return yo(n)&&!!((e=window.navigator)!=null&&e.standalone)}function Zy(){return Hf()&&document.documentMode===10}function bh(n=Le()){return yo(n)||vh(n)||_h(n)||yh(n)||/windows phone/i.test(n)||gh(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(n,e=[]){let t;switch(n){case"Browser":t=Hl(Le());break;case"Worker":t=`${Hl(Le())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Mn}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});s.onAbort=t,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t_(n,e={}){return Bn(n,"GET","/v2/passwordPolicy",go(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_=6;class s_{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??n_,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e,t,s,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gl(this),this.idTokenSubscription=new Gl(this),this.beforeStateQueue=new e_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=oh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=dt(t)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await An.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((r=this._popupRedirectResolver)!=null&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await qr(this,{idToken:e}),s=await We._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Qe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(s=u.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await $r(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Fy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qe(this.app))return Promise.reject(nn(this));const t=e?Re(e):null;return t&&J(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Qe(this.app)?Promise.reject(nn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qe(this.app)?Promise.reject(nn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(dt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await t_(this),t=new s_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ds("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await Yy(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&dt(e)||this._popupRedirectResolver;J(t,this,"argument-error"),this.redirectPersistenceManager=await An.create(this,[dt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,s,r);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Eh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var r;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((r=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(Qe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&Vy(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function di(n){return Re(n)}class Gl{constructor(e){this.auth=e,this.observer=null,this.addObserver=Zf(t=>this.observer=t)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _o={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function i_(n){_o=n}function a_(n){return _o.loadJS(n)}function o_(){return _o.gapiScript}function c_(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l_(n,e){const t=Pa(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(sn(i,e??{}))return r;ot(r,"already-initialized")}return t.initialize({options:e})}function u_(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(dt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function d_(n,e,t){const s=di(n);J(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=Th(e),{host:o,port:l}=h_(e),u=l===null?"":`:${l}`,h={url:`${i}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){J(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),J(sn(h,s.config.emulator)&&sn(f,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=h,s.emulatorConfig=f,s.settings.appVerificationDisabledForTesting=!0,Ln(o)?(yu(`${i}//${o}${u}`),_u("Auth",!0)):f_()}function Th(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function h_(n){const e=Th(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Jl(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Jl(o)}}}function Jl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function f_(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ut("not implemented")}_getIdTokenResponse(e){return ut("not implemented")}_linkToIdToken(e,t){return ut("not implemented")}_getReauthenticationResolver(e){return ut("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sn(n,e){return By(n,"POST","/v1/accounts:signInWithIdp",go(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_="http://localhost";class un extends Ih{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new un(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ot("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...i}=t;if(!s||!r)return null;const o=new un(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Sn(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Sn(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Sn(e,t)}buildRequest(){const e={requestUri:m_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ns(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs extends bo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At extends qs{constructor(){super("facebook.com")}static credential(e){return un._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return At.credentialFromTaggedObject(e)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return At.credential(e.oauthAccessToken)}catch{return null}}}At.FACEBOOK_SIGN_IN_METHOD="facebook.com";At.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt extends qs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return un._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return lt.credential(t,s)}catch{return null}}}lt.GOOGLE_SIGN_IN_METHOD="google.com";lt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends qs{constructor(){super("github.com")}static credential(e){return un._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return St.credential(e.oauthAccessToken)}catch{return null}}}St.GITHUB_SIGN_IN_METHOD="github.com";St.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends qs{constructor(){super("twitter.com")}static credential(e,t){return un._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Rt.credential(t,s)}catch{return null}}}Rt.TWITTER_SIGN_IN_METHOD="twitter.com";Rt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,r=!1){const i=await We._fromIdTokenResponse(e,s,r),o=Ql(s);return new xn({user:i,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const r=Ql(s);return new xn({user:e,providerId:r,_tokenResponse:s,operationType:t})}}function Ql(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br extends gt{constructor(e,t,s,r){super(t.code,t.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Br.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,r){return new Br(e,t,s,r)}}function wh(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Br._fromErrorAndOperation(n,i,e,s):i})}async function p_(n,e,t=!1){const s=await ks(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return xn._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g_(n,e,t=!1){const{auth:s}=n;if(Qe(s.app))return Promise.reject(nn(s));const r="reauthenticate";try{const i=await ks(n,wh(s,r,e,n),t);J(i.idToken,s,"internal-error");const o=vo(i.idToken);J(o,s,"internal-error");const{sub:l}=o;return J(n.uid===l,s,"user-mismatch"),xn._forOperation(n,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ot(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v_(n,e,t=!1){if(Qe(n.app))return Promise.reject(nn(n));const s="signIn",r=await wh(n,s,e),i=await xn._fromIdTokenResponse(n,s,r);return t||await n._updateCurrentUser(i.user),i}function y_(n,e,t,s){return Re(n).onIdTokenChanged(e,t,s)}function __(n,e,t){return Re(n).beforeAuthStateChanged(e,t)}function b_(n){return Re(n).signOut()}const jr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(jr,"1"),this.storage.removeItem(jr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_=1e3,T_=10;class Sh extends Ah{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=bh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),r=this.localCache[t];s!==r&&e(t,r,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const s=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);Zy()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,T_):r()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},E_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Sh.type="LOCAL";const I_=Sh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh extends Ah{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Rh.type="SESSION";const Ph=Rh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w_(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const s=new hi(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const l=Array.from(o).map(async h=>h(t.origin,i)),u=await w_(l);t.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const h=Eo("",20);r.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(y){const b=y;if(b.data.eventId===h)switch(b.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(b.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(){return window}function S_(n){it().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ch(){return typeof it().WorkerGlobalScope<"u"&&typeof it().importScripts=="function"}async function R_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function P_(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function C_(){return Ch()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh="firebaseLocalStorageDb",k_=1,zr="firebaseLocalStorage",Dh="fbase_key";class $s{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function fi(n,e){return n.transaction([zr],e?"readwrite":"readonly").objectStore(zr)}function D_(){const n=indexedDB.deleteDatabase(kh);return new $s(n).toPromise()}function Ta(){const n=indexedDB.open(kh,k_);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(zr,{keyPath:Dh})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(zr)?e(s):(s.close(),await D_(),e(await Ta()))})})}async function Wl(n,e,t){const s=fi(n,!0).put({[Dh]:e,value:t});return new $s(s).toPromise()}async function N_(n,e){const t=fi(n,!1).get(e),s=await new $s(t).toPromise();return s===void 0?null:s.value}function Kl(n,e){const t=fi(n,!0).delete(e);return new $s(t).toPromise()}const x_=800,V_=3;class Nh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ta(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>V_)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ch()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hi._getInstance(C_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await R_(),!this.activeServiceWorker)return;this.sender=new A_(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||P_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ta();return await Wl(e,jr,"1"),await Kl(e,jr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Wl(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>N_(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Kl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=fi(r,!1).getAll();return new $s(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),x_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Nh.type="LOCAL";const L_=Nh;new Us(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh(n,e){return e?dt(e):(J(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To extends Ih{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Sn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Sn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Sn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function M_(n){return v_(n.auth,new To(n),n.bypassAuthState)}function O_(n){const{auth:e,user:t}=n;return J(t,e,"internal-error"),g_(t,new To(n),n.bypassAuthState)}async function F_(n){const{auth:e,user:t}=n;return J(t,e,"internal-error"),p_(t,new To(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e,t,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:r,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return M_;case"linkViaPopup":case"linkViaRedirect":return F_;case"reauthViaPopup":case"reauthViaRedirect":return O_;default:ot(this.auth,"internal-error")}}resolve(e){pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_=new Us(2e3,1e4);async function q_(n,e,t){if(Qe(n.app))return Promise.reject(Ye(n,"operation-not-supported-in-this-environment"));const s=di(n);Ly(n,e,bo);const r=xh(s,t);return new Xt(s,"signInViaPopup",e,r).executeNotNull()}class Xt extends Vh{constructor(e,t,s,r,i){super(e,t,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Xt.currentPopupAction&&Xt.currentPopupAction.cancel(),Xt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){pt(this.filter.length===1,"Popup operations only handle one event");const e=Eo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ye(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Ye(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ye(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,U_.get())};e()}}Xt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_="pendingRedirect",Tr=new Map;class B_ extends Vh{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Tr.get(this.auth._key());if(!e){try{const s=await j_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Tr.set(this.auth._key(),e)}return this.bypassAuthState||Tr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function j_(n,e){const t=G_(e),s=H_(n);if(!await s._isAvailable())return!1;const r=await s._get(t)==="true";return await s._remove(t),r}function z_(n,e){Tr.set(n._key(),e)}function H_(n){return dt(n._redirectPersistence)}function G_(n){return Er($_,n.config.apiKey,n.name)}async function J_(n,e,t=!1){if(Qe(n.app))return Promise.reject(nn(n));const s=di(n),r=xh(s,e),o=await new B_(s,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_=600*1e3;class W_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!K_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Lh(e)){const r=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(Ye(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Q_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yl(e))}saveEventToCache(e){this.cachedEventUids.add(Yl(e)),this.lastProcessedEventTime=Date.now()}}function Yl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Lh({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function K_(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Lh(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y_(n,e={}){return Bn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Z_=/^https?/;async function eb(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Y_(n);for(const t of e)try{if(tb(t))return}catch{}ot(n,"unauthorized-domain")}function tb(n){const e=ba(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!Z_.test(t))return!1;if(X_.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nb=new Us(3e4,6e4);function Xl(){const n=it().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function sb(n){return new Promise((e,t)=>{var r,i,o;function s(){Xl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xl(),t(Ye(n,"network-request-failed"))},timeout:nb.get()})}if((i=(r=it().gapi)==null?void 0:r.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=it().gapi)!=null&&o.load)s();else{const l=c_("iframefcb");return it()[l]=()=>{gapi.load?s():t(Ye(n,"network-request-failed"))},a_(`${o_()}?onload=${l}`).catch(u=>t(u))}}).catch(e=>{throw Ir=null,e})}let Ir=null;function rb(n){return Ir=Ir||sb(n),Ir}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ib=new Us(5e3,15e3),ab="__/auth/iframe",ob="emulator/auth/iframe",cb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ub(n){const e=n.config;J(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?po(e,ob):`https://${n.config.authDomain}/${ab}`,s={apiKey:e.apiKey,appName:n.name,v:Mn},r=lb.get(n.config.apiHost);r&&(s.eid=r);const i=n._getFrameworks();return i.length&&(s.fw=i.join(",")),`${t}?${Ns(s).slice(1)}`}async function db(n){const e=await rb(n),t=it().gapi;return J(t,n,"internal-error"),e.open({where:document.body,url:ub(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cb,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Ye(n,"network-request-failed"),l=it().setTimeout(()=>{i(o)},ib.get());function u(){it().clearTimeout(l),r(s)}s.ping(u).then(u,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fb=500,mb=600,pb="_blank",gb="http://localhost";class Zl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vb(n,e,t,s=fb,r=mb){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const u={...hb,width:s.toString(),height:r.toString(),top:i,left:o},h=Le().toLowerCase();t&&(l=ph(h)?pb:t),fh(h)&&(e=e||gb,u.scrollbars="yes");const f=Object.entries(u).reduce((b,[A,P])=>`${b}${A}=${P},`,"");if(Xy(h)&&l!=="_self")return yb(e||"",l),new Zl(null);const y=window.open(e||"",l,f);J(y,n,"popup-blocked");try{y.focus()}catch{}return new Zl(y)}function yb(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _b="__/auth/handler",bb="emulator/auth/handler",Eb=encodeURIComponent("fac");async function eu(n,e,t,s,r,i){J(n.config.authDomain,n,"auth-domain-config-required"),J(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Mn,eventId:r};if(e instanceof bo){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Xf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,y]of Object.entries({}))o[f]=y}if(e instanceof qs){const f=e.getScopes().filter(y=>y!=="");f.length>0&&(o.scopes=f.join(","))}n.tenantId&&(o.tid=n.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await n._getAppCheckToken(),h=u?`#${Eb}=${encodeURIComponent(u)}`:"";return`${Tb(n)}?${Ns(l).slice(1)}${h}`}function Tb({config:n}){return n.emulator?po(n,bb):`https://${n.authDomain}/${_b}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki="webStorageSupport";class Ib{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ph,this._completeRedirectFn=J_,this._overrideRedirectResult=z_}async _openPopup(e,t,s,r){var o;pt((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await eu(e,t,s,ba(),r);return vb(e,i,Eo())}async _openRedirect(e,t,s,r){await this._originValidation(e);const i=await eu(e,t,s,ba(),r);return S_(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(pt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await db(e),s=new W_(e);return t.register("authEvent",r=>(J(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ki,{type:Ki},r=>{var o;const i=(o=r==null?void 0:r[0])==null?void 0:o[Ki];i!==void 0&&t(!!i),ot(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=eb(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return bh()||mh()||yo()}}const wb=Ib;var tu="@firebase/auth",nu="1.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sb(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Rb(n){Rn(new rn("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=s.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const u={apiKey:o,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Eh(n)},h=new r_(s,r,i,u);return u_(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Rn(new rn("auth-internal",e=>{const t=di(e.getProvider("auth").getImmediate());return(s=>new Ab(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dt(tu,nu,Sb(n)),Dt(tu,nu,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb=300,Cb=vu("authIdTokenMaxAge")||Pb;let su=null;const kb=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>Cb)return;const r=t==null?void 0:t.token;su!==r&&(su=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Db(n=Iu()){const e=Pa(n,"auth");if(e.isInitialized())return e.getImmediate();const t=l_(n,{popupRedirectResolver:wb,persistence:[L_,I_,Ph]}),s=vu("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=kb(i.toString());__(t,o,()=>o(t.currentUser)),y_(t,l=>o(l))}}const r=pu("auth");return r&&d_(t,`http://${r}`),t}function Nb(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}i_({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=r=>{const i=Ye("internal-error");i.customData=r,t(i)},s.type="text/javascript",s.charset="UTF-8",Nb().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Rb("Browser");const xb={apiKey:"AIzaSyD90SkLA57LCNnPRCDp5-sA6x2lF0oasMc",authDomain:"comebiblia-43643.firebaseapp.com",projectId:"comebiblia-43643",storageBucket:"comebiblia-43643.firebasestorage.app",messagingSenderId:"704190300094",appId:"1:704190300094:web:0a726168ed731032d803ef",measurementId:"G-DZPX4SB193"},Mh=Tu(xb),se=vy(Mh),Vn=Db(Mh),Oh="player",Fh={name:"Jugador",avatar:"😊",level:1,xp:0,coins:50,totalGamesPlayed:0,totalCorrectAnswers:0,totalScore:0,gamesCompleted:{},bestScores:{},leaguePoints:0,league:"Pescador",createdAt:Date.now()},bs=[0,100,250,500,800,1200,1700,2300,3e3,3800,4700,5700,6800,8e3,9500,11e3,13e3,15e3,17500,2e4],ru=["Semilla","Brote","Plantita","Arbusto","Árbol Joven","Roble","Cedro del Líbano","Discípulo","Apóstol","Profeta","Siervo Fiel","Guerrero de Fe","Sabio","Maestro","Pastor","Evangelista","Misionero","Guardián","Ángel","Leyenda Bíblica"],Vb=["😊","😇","🙏","✝️","⭐","👑","🕊️","🌟","💪","🎯","📖","🏆"];let Q=null;function _e(){return Q||(Q=du(Oh,{...Fh})),{...Q}}function zt(){uu(Oh,Q)}function Uh(n){Q||_e(),Q.name=n.trim()||"Jugador",zt()}function Lb(n){Q||_e(),Q.avatar=n,zt()}function jn(n){Q||_e(),Q.xp+=n;let e=!1;for(;Q.level<bs.length&&Q.xp>=bs[Q.level];)Q.level++,e=!0;return zt(),e}function zn(n){Q||_e(),Q.coins+=n,zt(),mi()}function Bs(n,e,t=0){Q||_e(),Q.totalGamesPlayed++,Q.totalScore+=e,Q.totalCorrectAnswers+=t,Q.gamesCompleted[n]||(Q.gamesCompleted[n]=0),Q.gamesCompleted[n]++,(!Q.bestScores[n]||e>Q.bestScores[n])&&(Q.bestScores[n]=e),zt()}function Mb(){const n=_e();if(n.level>=bs.length)return{current:n.xp,needed:n.xp,progress:1};const e=bs[n.level-1]||0,t=bs[n.level],s=(n.xp-e)/(t-e);return{current:n.xp-e,needed:t-e,progress:Math.min(s,1)}}function Ob(n=null){const e=n||_e().level;return ru[Math.min(e-1,ru.length-1)]}function Fb(){return[...Vb]}function Ub(){Q={...Fh,createdAt:Date.now()},zt(),mi()}function mi(){const n=document.getElementById("coin-count");if(n){const e=_e();n.textContent=e.coins}}function iu(n){Q||_e(),Q.leaguePoints=(Q.leaguePoints||0)+n,Q.leaguePoints<0&&(Q.leaguePoints=0);const e=Q.leaguePoints;e>=2e3?Q.league="Profeta":e>=1200?Q.league="Apóstol":e>=600?Q.league="Evangelista":e>=200?Q.league="Discípulo":Q.league="Pescador",zt(),Io()}async function qb(){if(!Vn)return null;const n=new lt;try{const t=(await q_(Vn,n)).user;return Q||_e(),Q.name=t.displayName||"Jugador",localStorage.setItem("bb_player_id",t.uid),zt(),await Io(),t}catch(e){throw console.error("Google Login Error:",e),e}}async function $b(){Vn&&(await b_(Vn),localStorage.removeItem("bb_player_id"))}async function Io(){const n=localStorage.getItem("bb_player_id");if(n&&se)try{Q||_e(),await ky(ue(se,"bb_users",n),{name:Q.name,avatar:Q.avatar,leaguePoints:Q.leaguePoints||0,league:Q.league||"Pescador",updatedAt:Zt()},{merge:!0})}catch(e){console.error("Error syncing player state to Firestore:",e)}}const wo=[];function ct(n){wo.push(n)}function Bb(){return[...wo]}function qh(n){return wo.find(e=>e.id===n)}const Hr=[{text:"Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.",ref:"Juan 3:16"},{text:"Todo lo puedo en Cristo que me fortalece.",ref:"Filipenses 4:13"},{text:"Jehová es mi pastor; nada me faltará.",ref:"Salmos 23:1"},{text:"Confía en Jehová con todo tu corazón, y no te apoyes en tu propia prudencia.",ref:"Proverbios 3:5"},{text:"Y sabemos que a los que aman a Dios, todas las cosas les ayudan a bien.",ref:"Romanos 8:28"},{text:"No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios.",ref:"Isaías 41:10"},{text:"Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal.",ref:"Jeremías 29:11"},{text:"El Señor es mi luz y mi salvación; ¿de quién temeré?",ref:"Salmos 27:1"},{text:"Mas el fruto del Espíritu es amor, gozo, paz, paciencia, benignidad, bondad, fe.",ref:"Gálatas 5:22"},{text:"Esforzaos y cobrad ánimo; no temáis, ni tengáis miedo de ellos.",ref:"Deuteronomio 31:6"},{text:"En el principio creó Dios los cielos y la tierra.",ref:"Génesis 1:1"},{text:"Clama a mí, y yo te responderé, y te enseñaré cosas grandes y ocultas que tú no conoces.",ref:"Jeremías 33:3"},{text:"Porque donde están dos o tres congregados en mi nombre, allí estoy yo en medio de ellos.",ref:"Mateo 18:20"},{text:"Yo soy el camino, la verdad y la vida; nadie viene al Padre sino por mí.",ref:"Juan 14:6"},{text:"Dad gracias en todo, porque esta es la voluntad de Dios para con vosotros en Cristo Jesús.",ref:"1 Tesalonicenses 5:18"},{text:"El amor es paciente, es bondadoso. El amor no es envidioso ni jactancioso ni orgulloso.",ref:"1 Corintios 13:4"},{text:"Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios.",ref:"Efesios 2:8"},{text:"Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.",ref:"Mateo 11:28"},{text:"He aquí, yo estoy a la puerta y llamo; si alguno oye mi voz y abre la puerta, entraré a él.",ref:"Apocalipsis 3:20"},{text:"Bienaventurados los pacificadores, porque ellos serán llamados hijos de Dios.",ref:"Mateo 5:9"},{text:"Lámpara es a mis pies tu palabra, y lumbrera a mi camino.",ref:"Salmos 119:105"},{text:"Amarás al Señor tu Dios con todo tu corazón, y con toda tu alma, y con toda tu mente.",ref:"Mateo 22:37"},{text:"Los cielos cuentan la gloria de Dios, y el firmamento anuncia la obra de sus manos.",ref:"Salmos 19:1"},{text:"No se amolden al mundo actual, sino sean transformados mediante la renovación de su mente.",ref:"Romanos 12:2"},{text:"Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes.",ref:"Josué 1:9"},{text:"Ama a tu prójimo como a ti mismo.",ref:"Marcos 12:31"},{text:"Pedid, y se os dará; buscad, y hallaréis; llamad, y se os abrirá.",ref:"Mateo 7:7"},{text:"El Señor es bueno; es refugio en el día de la angustia, y conoce a los que en Él confían.",ref:"Nahúm 1:7"},{text:"Alégrate, joven, en tu juventud; y tome placer tu corazón en los días de tu adolescencia.",ref:"Eclesiastés 11:9"},{text:"Grande es el Señor y digno de toda alabanza; su grandeza es insondable.",ref:"Salmos 145:3"},{text:"Si Dios es por nosotros, ¿quién contra nosotros?",ref:"Romanos 8:31"},{text:"Yo he venido para que tengan vida, y para que la tengan en abundancia.",ref:"Juan 10:10"},{text:"Sean fuertes y valientes. No teman ni se asusten, porque el Señor su Dios siempre los acompañará.",ref:"Deuteronomio 31:6"},{text:"Así brille la luz de ustedes delante de todos, para que vean sus buenas obras y glorifiquen al Padre.",ref:"Mateo 5:16"},{text:"Encomienda al Señor tu camino; confía en él, y él actuará.",ref:"Salmos 37:5"},{text:"Instruye al niño en su camino, y aun cuando fuere viejo no se apartará de él.",ref:"Proverbios 22:6"},{text:"El que habita al abrigo del Altísimo morará bajo la sombra del Omnipotente.",ref:"Salmos 91:1"},{text:"Acerquémonos con confianza al trono de la gracia para recibir misericordia y hallar gracia.",ref:"Hebreos 4:16"},{text:"Deléitate asimismo en Jehová, y él te concederá las peticiones de tu corazón.",ref:"Salmos 37:4"},{text:"Con amor eterno te he amado; por tanto, te prolongué mi misericordia.",ref:"Jeremías 31:3"}];function $h(){const n=new Date,e=Math.floor((n-new Date(n.getFullYear(),0,0))/864e5);return Hr[e%Hr.length]}function jb(n,e=[]){return Hr.filter(r=>!e.includes(r.ref)).sort(()=>Math.random()-.5).slice(0,n)}const zb=[{name:"María",avatar:"👩",score:2800,level:8},{name:"Daniel",avatar:"👦",score:2400,level:7},{name:"Sara",avatar:"👧",score:2100,level:6},{name:"José",avatar:"🧑",score:1800,level:5},{name:"Rebeca",avatar:"👩‍🦱",score:1500,level:5},{name:"David",avatar:"👨",score:1200,level:4},{name:"Esther",avatar:"👩‍🦰",score:900,level:3},{name:"Pablo",avatar:"🧔",score:600,level:2},{name:"Ana",avatar:"👱‍♀️",score:400,level:2},{name:"Samuel",avatar:"👶",score:200,level:1}];function Bh(){const n=_e(),e=[...zb,{name:n.name,avatar:n.avatar,score:n.totalScore,level:n.level,isCurrentPlayer:!0}];return e.sort((t,s)=>s.score-t.score),e.map((t,s)=>({...t,position:s+1}))}function Ao(){const n=Bh(),e=n.find(t=>t.isCurrentPlayer);return(e==null?void 0:e.position)||n.length}function Hb(n){var o,l;const e=_e(),t=$h(),s=Bb(),r=Ao(),i=["linear-gradient(135deg, #4361ee, #6c83f7)","linear-gradient(135deg, #a855f7, #c084fc)","linear-gradient(135deg, #06d6a0, #34d399)","linear-gradient(135deg, #fb923c, #fdba74)","linear-gradient(135deg, #f472b6, #f9a8d4)"];n.innerHTML=`
    <div class="home-screen">
      <div class="home-welcome">
        <span class="welcome-emoji">✝️</span>
        <h2>¡Hola, ${e.name}!</h2>
        <p>¿Listo para aprender jugando?</p>
      </div>

      <div class="home-stats">
        <div class="stat-card">
          <div class="stat-value">${e.level}</div>
          <div class="stat-label">Nivel</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${e.totalGamesPlayed}</div>
          <div class="stat-label">Jugados</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">#${r}</div>
          <div class="stat-label">Ranking</div>
        </div>
      </div>

      <div class="verse-card-home" id="verse-card-home">
        <div class="verse-text">"${t.text}"</div>
        <div class="verse-ref">— ${t.ref}</div>
      </div>

      <div class="section-title">🎮 Juegos</div>
      <div class="games-grid">
        ${s.map((u,h)=>`
          <div class="game-card" data-game-id="${u.id}">
            <div class="game-card-icon" style="background: ${i[h%i.length]}">
              ${u.icon}
            </div>
            <div class="game-card-info">
              <h3>${u.name}</h3>
              <p>${u.description}</p>
              <div class="game-card-meta">
                <span class="badge badge-${u.difficulty}">${u.difficulty==="easy"?"Fácil":u.difficulty==="medium"?"Medio":"Difícil"}</span>
                ${e.bestScores[u.id]?`<span class="text-sm text-muted">Mejor: ${e.bestScores[u.id]}</span>`:""}
              </div>
            </div>
            <div class="game-card-arrow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </div>
          </div>
        `).join("")}
      </div>

      <div class="section-title mt-xl">🏆 Ranking</div>
      <button class="btn btn-secondary btn-block" id="btn-ranking">
        Ver Ranking Completo
      </button>
    </div>
  `,n.querySelectorAll(".game-card").forEach(u=>{u.addEventListener("click",()=>{const h=u.dataset.gameId;ye("game",{gameId:h})})}),(o=document.getElementById("verse-card-home"))==null||o.addEventListener("click",()=>{ye("verse")}),(l=document.getElementById("btn-ranking"))==null||l.addEventListener("click",()=>{ye("ranking")})}function j(n,e="info",t=3e3){const s=document.getElementById("toast-container");if(!s)return;const r=document.createElement("div");r.className=`toast toast-${e}`;const i={success:"✅",error:"❌",info:"ℹ️",reward:"🎁"};r.innerHTML=`<span>${i[e]||"📢"}</span><span>${n}</span>`,s.appendChild(r),setTimeout(()=>{r.classList.add("removing"),setTimeout(()=>r.remove(),300)},t)}function Gb(n,e,t=[]){const s=document.getElementById("modal-overlay");if(!s)return;const r=t.map(i=>`<button class="btn ${i.class||"btn-primary"} btn-block" id="modal-btn-${i.id}">${i.label}</button>`).join("");s.innerHTML=`
    <div class="modal">
      <h2>${n}</h2>
      <p>${e}</p>
      <div class="flex flex-col gap-sm">${r}</div>
    </div>
  `,s.classList.remove("hidden"),t.forEach(i=>{const o=document.getElementById(`modal-btn-${i.id}`);o&&o.addEventListener("click",()=>{s.classList.add("hidden"),i.onClick&&i.onClick()})})}function Ve(n){const e=[...n];for(let t=e.length-1;t>0;t--){const s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}return e}function au(n){return n>=1e3?(n/1e3).toFixed(1)+"K":n.toString()}function Jb(n){var s,r;const e=$h(),t=jb(5,[e.ref]);n.innerHTML=`
    <div class="verse-screen">
      <div class="verse-of-day-card">
        <div class="verse-badge">📅 Versículo del Día</div>
        <blockquote class="verse-main-text">"${e.text}"</blockquote>
        <cite class="verse-main-ref">— ${e.ref}</cite>
        <div class="verse-actions">
          <button class="btn btn-sm btn-primary" id="btn-share-verse">
            📤 Compartir
          </button>
          <button class="btn btn-sm btn-secondary" id="btn-copy-verse">
            📋 Copiar
          </button>
        </div>
      </div>

      <div class="section-title mt-lg">✨ Más Versículos</div>
      <div class="verse-list">
        ${t.map(i=>`
          <div class="verse-list-item">
            <div class="verse-list-text">"${i.text}"</div>
            <div class="verse-list-ref">— ${i.ref}</div>
          </div>
        `).join("")}
      </div>

      <div class="verse-footer">
        <p class="text-sm text-muted">Cada día un nuevo versículo para meditar 🙏</p>
      </div>
    </div>
  `,(s=document.getElementById("btn-share-verse"))==null||s.addEventListener("click",()=>{var o;const i=`"${e.text}" — ${e.ref}`;navigator.share?navigator.share({title:"Versículo del Día",text:i}).catch(()=>{}):(o=navigator.clipboard)==null||o.writeText(i).then(()=>{j("Versículo copiado al portapapeles","success")})}),(r=document.getElementById("btn-copy-verse"))==null||r.addEventListener("click",()=>{var o;const i=`"${e.text}" — ${e.ref}`;(o=navigator.clipboard)==null||o.writeText(i).then(()=>{j("Versículo copiado ✅","success")}).catch(()=>{j("No se pudo copiar","error")})})}const jh="achievements",So=[{id:"first_game",name:"Primeros Pasos",desc:"Completa tu primer juego",icon:"🐣",coins:10},{id:"games_5",name:"Jugador Activo",desc:"Completa 5 juegos",icon:"🎮",coins:25},{id:"games_25",name:"Veterano",desc:"Completa 25 juegos",icon:"🏅",coins:50},{id:"games_100",name:"Leyenda",desc:"Completa 100 juegos",icon:"🏆",coins:100},{id:"perfect_trivia",name:"Erudito Bíblico",desc:"Puntuación perfecta en Trivia",icon:"🧠",coins:30},{id:"trivia_10",name:"Sabio",desc:"Completa 10 partidas de Trivia",icon:"📚",coins:25},{id:"character_5",name:"Detective Bíblico",desc:"Adivina 5 personajes",icon:"🔍",coins:20},{id:"verse_master",name:"Memorizador",desc:"Completa 10 versículos",icon:"📖",coins:30},{id:"word_hunter",name:"Cazapalabras",desc:"Completa 5 sopas de letras",icon:"🔤",coins:20},{id:"memory_king",name:"Rey de la Memoria",desc:"Completa 5 juegos de Memoria",icon:"🃏",coins:20},{id:"level_5",name:"Discípulo",desc:"Alcanza el nivel 5",icon:"⭐",coins:30},{id:"level_10",name:"Apóstol",desc:"Alcanza el nivel 10",icon:"🌟",coins:50},{id:"coins_500",name:"Tesoro",desc:"Acumula 500 monedas",icon:"💰",coins:25},{id:"all_games",name:"Explorador",desc:"Juega todos los juegos",icon:"🗺️",coins:40},{id:"streak_3",name:"Racha Divina",desc:"3 respuestas correctas seguidas",icon:"🔥",coins:15},{id:"fast_answer",name:"Rayo",desc:"Responde en menos de 3 segundos",icon:"⚡",coins:15}];let wr=null;function Ro(){return wr||(wr=du(jh,{})),wr}function De(n){const e=Ro();if(e[n])return!1;const t=So.find(s=>s.id===n);return t?(e[n]={unlockedAt:Date.now()},wr=e,uu(jh,e),j(`🏆 ¡Logro desbloqueado: ${t.name}!`,"reward"),!0):!1}function zh(){return Object.keys(Ro()).length}function Hh(){return So.length}function Qb(){const n=Ro();return So.map(e=>{var t;return{...e,unlocked:!!n[e.id],unlockedAt:((t=n[e.id])==null?void 0:t.unlockedAt)||null}})}function Wb(){const n=_e();n.totalGamesPlayed>=1&&De("first_game"),n.totalGamesPlayed>=5&&De("games_5"),n.totalGamesPlayed>=25&&De("games_25"),n.totalGamesPlayed>=100&&De("games_100"),n.level>=5&&De("level_5"),n.level>=10&&De("level_10"),n.coins>=500&&De("coins_500"),["trivia","characters","verse-complete","word-search","memory"].every(s=>(n.gamesCompleted[s]||0)>0)&&De("all_games"),(n.gamesCompleted.trivia||0)>=10&&De("trivia_10"),(n.gamesCompleted.characters||0)>=5&&De("character_5"),(n.gamesCompleted["verse-complete"]||0)>=10&&De("verse_master"),(n.gamesCompleted["word-search"]||0)>=5&&De("word_hunter"),(n.gamesCompleted.memory||0)>=5&&De("memory_king")}function Ia(n){const e=_e(),t=Mb(),s=Ob(),r=zh(),i=Hh(),o=Ao(),l=Fb(),u=Vn?Vn.currentUser:null;n.innerHTML=`
    <div class="profile-screen">
      <div class="profile-header-card">
        <div class="profile-avatar-wrapper">
          <div class="profile-avatar" id="profile-avatar">${e.avatar}</div>
          <button class="profile-avatar-edit" id="btn-change-avatar">✏️</button>
        </div>
        <h2 class="profile-name" id="profile-name">${e.name}</h2>
        <div class="profile-level-badge">
          <span class="level-number">Nivel ${e.level}</span>
          <span class="level-name">${s}</span>
        </div>
      </div>

      <div class="xp-bar-container">
        <div class="xp-bar-label">
          <span>XP</span>
          <span>${t.current} / ${t.needed}</span>
        </div>
        <div class="xp-bar-track">
          <div class="xp-bar-fill" style="width: ${Math.round(t.progress*100)}%"></div>
        </div>
      </div>

      <div class="profile-stats-grid">
        <div class="profile-stat-card">
          <div class="profile-stat-icon">🪙</div>
          <div class="profile-stat-value">${e.coins}</div>
          <div class="profile-stat-label">Monedas</div>
        </div>
        <div class="profile-stat-card">
          <div class="profile-stat-icon">🎮</div>
          <div class="profile-stat-value">${e.totalGamesPlayed}</div>
          <div class="profile-stat-label">Partidas</div>
        </div>
        <div class="profile-stat-card">
          <div class="profile-stat-icon">✅</div>
          <div class="profile-stat-value">${e.totalCorrectAnswers}</div>
          <div class="profile-stat-label">Correctas</div>
        </div>
        <div class="profile-stat-card">
          <div class="profile-stat-icon">🏆</div>
          <div class="profile-stat-value">#${o}</div>
          <div class="profile-stat-label">Ranking</div>
        </div>
      </div>

      <div class="profile-section">
        <div class="section-title">📊 Estadísticas</div>
        <div class="stats-list">
          <div class="stats-row">
            <span>Puntuación Total</span>
            <span class="stats-value">${e.totalScore.toLocaleString()}</span>
          </div>
          <div class="stats-row">
            <span>Logros Desbloqueados</span>
            <span class="stats-value">${r} / ${i}</span>
          </div>
          <div class="stats-row">
            <span>Juegos Distintos</span>
            <span class="stats-value">${Object.keys(e.gamesCompleted).length} / 5</span>
          </div>
          <div class="stats-row">
            <span>Miembro Desde</span>
            <span class="stats-value">${new Date(e.createdAt).toLocaleDateString("es")}</span>
          </div>
        </div>
      </div>

      <div class="profile-section">
        ${u?`
            <div class="auth-box glass p-md">
              <p class="text-sm text-center">Conectado como <b>${u.email}</b></p>
              <button class="btn btn-outline btn-block mt-sm" id="btn-logout">🚪 Cerrar Sesión</button>
            </div>
        `:`
            <button class="btn btn-primary btn-block" id="btn-login-google">
              🌐 Iniciar Sesión con Google
            </button>
        `}
        <button class="btn btn-secondary btn-block mt-sm" id="btn-edit-name">
          ✏️ Cambiar Nombre Manulamente
        </button>
      </div>

      <!-- Avatar Picker Modal -->
      <div class="avatar-picker hidden" id="avatar-picker">
        <div class="avatar-picker-title">Elige tu avatar</div>
        <div class="avatar-grid">
          ${l.map(h=>`
            <button class="avatar-option ${h===e.avatar?"selected":""}" data-avatar="${h}">${h}</button>
          `).join("")}
        </div>
        <button class="btn btn-sm btn-secondary mt-md" id="btn-close-avatar-picker">Cerrar</button>
      </div>
    </div>
  `,Kb()}function Kb(){var e,t,s,r,i;const n=_e();(e=document.getElementById("btn-login-google"))==null||e.addEventListener("click",async()=>{try{await qb(),j("Sesión iniciada con éxito ✅","success");const o=document.querySelector(".profile-screen");o&&Ia(o.parentElement)}catch{j("Error al iniciar sesión ❌","error")}}),(t=document.getElementById("btn-logout"))==null||t.addEventListener("click",async()=>{await $b(),j("Sesión cerrada ✅","info");const o=document.querySelector(".profile-screen");o&&Ia(o.parentElement)}),(s=document.getElementById("btn-change-avatar"))==null||s.addEventListener("click",()=>{var o;(o=document.getElementById("avatar-picker"))==null||o.classList.toggle("hidden")}),(r=document.getElementById("btn-close-avatar-picker"))==null||r.addEventListener("click",()=>{var o;(o=document.getElementById("avatar-picker"))==null||o.classList.add("hidden")}),document.querySelectorAll(".avatar-option").forEach(o=>{o.addEventListener("click",()=>{const l=o.dataset.avatar;Lb(l),document.getElementById("profile-avatar").textContent=l,document.querySelectorAll(".avatar-option").forEach(u=>u.classList.remove("selected")),o.classList.add("selected"),j("Avatar actualizado ✅","success")})}),(i=document.getElementById("btn-edit-name"))==null||i.addEventListener("click",()=>{const o=prompt("Ingresa tu nombre:",n.name);o&&o.trim()&&(Uh(o.trim()),document.getElementById("profile-name").textContent=o.trim(),j("Nombre actualizado ✅","success"))})}function Yb(n){const e=Qb(),t=zh(),s=Hh(),r=Math.round(t/s*100);n.innerHTML=`
    <div class="achievements-screen">
      <div class="achievements-header">
        <div class="achievements-progress-ring">
          <svg viewBox="0 0 120 120" width="120" height="120">
            <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="8"/>
            <circle cx="60" cy="60" r="52" fill="none" stroke="var(--color-gold)" stroke-width="8"
              stroke-dasharray="${2*Math.PI*52}"
              stroke-dashoffset="${2*Math.PI*52*(1-r/100)}"
              stroke-linecap="round"
              transform="rotate(-90 60 60)"/>
          </svg>
          <div class="achievements-progress-text">
            <span class="achievements-count">${t}</span>
            <span class="achievements-total">/ ${s}</span>
          </div>
        </div>
        <p class="achievements-subtitle">Logros Desbloqueados</p>
      </div>

      <div class="achievements-grid">
        ${e.map(i=>`
          <div class="achievement-card ${i.unlocked?"unlocked":"locked"}">
            <div class="achievement-icon">${i.unlocked?i.icon:"🔒"}</div>
            <div class="achievement-info">
              <div class="achievement-name">${i.name}</div>
              <div class="achievement-desc">${i.desc}</div>
              ${i.unlocked?`<div class="achievement-unlocked-date">✅ ${new Date(i.unlockedAt).toLocaleDateString("es")}</div>`:`<div class="achievement-reward">🪙 +${i.coins}</div>`}
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `}function Xb(n){var s,r;const e=_e();n.innerHTML=`
    <div class="settings-screen">
      <div class="settings-group">
        <div class="settings-group-title">👤 Jugador</div>
        <div class="settings-item" id="setting-name">
          <div class="settings-item-left">
            <span class="settings-icon">✏️</span>
            <span>Nombre del Jugador</span>
          </div>
          <div class="settings-item-right">
            <span class="text-muted" id="display-name">${e.name}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </div>
        </div>
      </div>

      <div class="settings-group">
        <div class="settings-group-title">🎨 Apariencia</div>
        <div class="settings-item">
          <div class="settings-item-left">
            <span class="settings-icon">🌙</span>
            <span>Modo Oscuro</span>
          </div>
          <div class="settings-item-right">
            <label class="toggle-switch">
              <input type="checkbox" id="toggle-dark">
              <span class="toggle-slider"></span>
            </label>
          </div>
        </div>
        <div class="settings-item">
          <div class="settings-item-left">
            <span class="settings-icon">🔊</span>
            <span>Sonido</span>
          </div>
          <div class="settings-item-right">
            <label class="toggle-switch">
              <input type="checkbox" id="toggle-sound">
              <span class="toggle-slider"></span>
            </label>
          </div>
        </div>
      </div>

      <div class="settings-group">
        <div class="settings-group-title">ℹ️ Información</div>
        <div class="settings-item">
          <div class="settings-item-left">
            <span class="settings-icon">📱</span>
            <span>Versión</span>
          </div>
          <div class="settings-item-right">
            <span class="text-muted">1.0.0</span>
          </div>
        </div>
        <div class="settings-item">
          <div class="settings-item-left">
            <span class="settings-icon">📖</span>
            <span>Bible Games Collection</span>
          </div>
          <div class="settings-item-right">
            <span class="text-muted">PWA</span>
          </div>
        </div>
      </div>

      <div class="settings-group">
        <div class="settings-group-title">⚠️ Zona de Peligro</div>
        <button class="btn btn-danger btn-block" id="btn-reset-data">
          🗑️ Borrar Todos los Datos
        </button>
        <p class="text-sm text-muted mt-sm text-center">¡Esta acción no se puede deshacer!</p>
      </div>

      <div class="settings-footer">
        <p>Hecho con ❤️ y ✝️</p>
        <p class="text-sm text-muted">Bible Games Collection © ${new Date().getFullYear()}</p>
      </div>
    </div>
  `,(s=document.getElementById("setting-name"))==null||s.addEventListener("click",()=>{const i=prompt("Ingresa tu nombre:",e.name);i&&i.trim()&&(Uh(i.trim()),document.getElementById("display-name").textContent=i.trim(),j("Nombre actualizado ✅","success"))});const t=document.getElementById("toggle-dark");t&&(t.checked=!document.body.classList.contains("light-theme"),t.addEventListener("change",i=>{i.target.checked?(document.body.classList.remove("light-theme"),localStorage.setItem("theme","dark")):(document.body.classList.add("light-theme"),localStorage.setItem("theme","light"))})),(r=document.getElementById("btn-reset-data"))==null||r.addEventListener("click",()=>{Gb("⚠️ ¿Estás seguro?","Se borrarán todas tus monedas, logros, estadísticas y progreso. Esta acción no se puede deshacer.",[{id:"confirm-reset",label:"🗑️ Sí, borrar todo",class:"btn-danger",onClick:()=>{Sf(),Ub(),j("Datos borrados","info"),ye("home")}},{id:"cancel-reset",label:"Cancelar",class:"btn-secondary"}])})}function Zb(n){const e=Bh(),t=Ao(),s=["🥇","🥈","🥉"];n.innerHTML=`
    <div class="ranking-screen">
      <div class="ranking-header">
        <div class="ranking-podium">
          ${e.slice(0,3).map((r,i)=>`
            <div class="podium-item podium-${i+1} ${r.isCurrentPlayer?"is-player":""}">
              <div class="podium-avatar">${r.avatar}</div>
              <div class="podium-medal">${s[i]}</div>
              <div class="podium-name">${r.name}</div>
              <div class="podium-score">${au(r.score)}</div>
            </div>
          `).join("")}
        </div>
      </div>

      <div class="ranking-your-pos">
        Tu posición: <strong>#${t}</strong>
      </div>

      <div class="ranking-list">
        ${e.map((r,i)=>`
          <div class="ranking-row ${r.isCurrentPlayer?"is-player":""}">
            <div class="ranking-pos">
              ${i<3?s[i]:`#${r.position}`}
            </div>
            <div class="ranking-avatar">${r.avatar}</div>
            <div class="ranking-info">
              <div class="ranking-name">${r.name} ${r.isCurrentPlayer?"(Tú)":""}</div>
              <div class="ranking-level">Nivel ${r.level}</div>
            </div>
            <div class="ranking-score">${au(r.score)}</div>
          </div>
        `).join("")}
      </div>
    </div>
  `}const Ue={easy:[{q:"¿Quién construyó el arca?",options:["Abraham","Noé","Moisés","David"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuántos días tomó crear Dios el mundo?",options:["5","6","7","3"],answer:1,category:"Creación"},{q:"¿Quién fue el primer hombre?",options:["Noé","Abel","Adán","Set"],answer:2,category:"Creación"},{q:"¿Quién fue la primera mujer?",options:["Sara","Eva","Rebeca","María"],answer:1,category:"Creación"},{q:"¿En qué ciudad nació Jesús?",options:["Nazaret","Jerusalén","Belén","Capernaúm"],answer:2,category:"Nuevo Testamento"},{q:"¿Cuántos discípulos tuvo Jesús?",options:["10","11","12","13"],answer:2,category:"Nuevo Testamento"},{q:"¿Quién mató a Goliat?",options:["Saúl","David","Jonatán","Sansón"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué animal habló con Balaam?",options:["Un perro","Una burra","Un león","Una serpiente"],answer:1,category:"Antiguo Testamento"},{q:"¿De dónde era la madre de Jesús?",options:["Belén","Jerusalén","Nazaret","Egipto"],answer:2,category:"Nuevo Testamento"},{q:"¿Quién fue tragado por un gran pez?",options:["Pedro","Elías","Jonás","Daniel"],answer:2,category:"Antiguo Testamento"},{q:"¿Cuál fue el primer milagro de Jesús?",options:["Caminar sobre agua","Convertir agua en vino","Sanar un ciego","Multiplicar panes"],answer:1,category:"Milagros"},{q:"¿Quién bautizó a Jesús?",options:["Pedro","Juan el Bautista","Pablo","Santiago"],answer:1,category:"Nuevo Testamento"},{q:"¿En qué monte recibió Moisés los mandamientos?",options:["Carmelo","Sinaí","Ararat","Sión"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuántos mandamientos dio Dios?",options:["5","7","10","12"],answer:2,category:"Antiguo Testamento"},{q:"¿Quién negó a Jesús tres veces?",options:["Judas","Pedro","Tomás","Juan"],answer:1,category:"Nuevo Testamento"},{q:"¿Cuántos libros tiene la Biblia?",options:["55","66","72","39"],answer:1,category:"General"},{q:"¿Quién fue el hermano de Moisés?",options:["Josué","Aarón","Caleb","Leví"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué instrumento tocaba David?",options:["Flauta","Arpa","Trompeta","Tambor"],answer:1,category:"Antiguo Testamento"},{q:"¿Quién fue vendido por sus hermanos?",options:["Benjamín","José","Rubén","Judá"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuál es el primer libro de la Biblia?",options:["Éxodo","Génesis","Salmos","Mateo"],answer:1,category:"General"},{q:"¿Qué símbolo apareció después del diluvio?",options:["Una estrella","Un arcoíris","Una paloma","Una nube"],answer:1,category:"Antiguo Testamento"},{q:"¿En qué se convirtió la esposa de Lot?",options:["Piedra","Estatua de sal","Arena","Ceniza"],answer:1,category:"Antiguo Testamento"},{q:"¿Quién era el rey más sabio?",options:["David","Salomón","Saúl","Josías"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué fruta comieron Adán y Eva?",options:["Manzana","Fruto prohibido","Uva","Higo"],answer:1,category:"Creación"},{q:"¿Quién era el padre de Juan el Bautista?",options:["José","Zacarías","Simeón","Elías"],answer:1,category:"Nuevo Testamento"},{q:"¿Qué mar se abrió para que pasaran los israelitas?",options:["Mar Muerto","Mar Rojo","Mar Mediterráneo","Río Jordán"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuántos hermanos tenía José el de la túnica?",options:["10","11","12","13"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué alimento cayó del cielo para los israelitas?",options:["Pan","Maná","Codornices","Fruta"],answer:1,category:"Antiguo Testamento"},{q:"¿De qué madera se hizo el Arca de Noé?",options:["Cedro","Roble","Madera de Gofer","Pino"],answer:2,category:"Antiguo Testamento"},{q:"¿Quién fue el primer asesino de la Biblia?",options:["Caín","Abel","Lamec","Nimrod"],answer:0,category:"Génesis"},{q:"¿Qué mar calmó Jesús con su palabra?",options:["Mar Muerto","Mar de Galilea","Mar Rojo","Río Jordán"],answer:1,category:"Milagros"},{q:"¿Cuál es el último libro de la Biblia?",options:["Apocalipsis","Judas","Mateo","Malaquías"],answer:0,category:"General"},{q:"¿Quién fue la madre de Jesús?",options:["Sara","María","Marta","Isabel"],answer:1,category:"Nuevo Testamento"},{q:"¿Cuántas veces cantó el gallo antes que Pedro lo negara?",options:["1","2","3","0"],answer:1,category:"Nuevo Testamento"},{q:"¿Quién fue el hombre más fuerte de la Biblia?",options:["David","Sansón","Gedeón","Saúl"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué animal tentó a Eva en el Edén?",options:["León","Serpiente","Zorro","Águila"],answer:1,category:"Creación"},{q:"¿Cuál es el mandamiento con promesa?",options:["No matar","Honrar a padre y madre","No hurtar","No mentir"],answer:1,category:"Antiguo Testamento"},{q:"¿Quién derrotó a los madianitas con 300 hombres?",options:["Josué","Gedeón","Sansón","Saúl"],answer:1,category:"Antiguo Testamento"}],medium:[{q:"¿Cuántos años vivió Matusalén?",options:["800","900","969","1000"],answer:2,category:"Antiguo Testamento"},{q:"¿Quién era el padre de Salomón?",options:["Abraham","David","Saúl","Moisés"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué profeta subió al cielo en un carro de fuego?",options:["Elías","Eliseo","Isaías","Jeremías"],answer:0,category:"Profetas"},{q:"¿Cuántos años duró el pueblo de Israel en el desierto?",options:["20","30","40","50"],answer:2,category:"Antiguo Testamento"},{q:"¿Quién interpretó los sueños del Faraón?",options:["Moisés","Daniel","José","Aarón"],answer:2,category:"Antiguo Testamento"},{q:"¿Quién escribió la mayor parte de los Salmos?",options:["Salomón","David","Moisés","Asaf"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuál era la profesión de Pablo antes de ser apóstol?",options:["Pescador","Carpintero","Fabricante de tiendas","Recaudador"],answer:2,category:"Nuevo Testamento"},{q:"¿Quién fue el primer mártir cristiano?",options:["Pedro","Esteban","Santiago","Pablo"],answer:1,category:"Nuevo Testamento"},{q:"¿En qué isla estuvo exiliado Juan?",options:["Creta","Chipre","Patmos","Malta"],answer:2,category:"Nuevo Testamento"},{q:"¿Cuántas tribus de Israel había?",options:["10","11","12","13"],answer:2,category:"Antiguo Testamento"},{q:"¿Quién fue el sucesor de Moisés?",options:["Caleb","Josué","Aarón","Eleazar"],answer:1,category:"Antiguo Testamento"},{q:"¿Dónde fue crucificado Jesús?",options:["Monte Sión","Getsemaní","Gólgota","Betania"],answer:2,category:"Nuevo Testamento"},{q:"¿Quién fue arrojado al foso de los leones?",options:["Jonás","Daniel","Eliseo","Jeremías"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuál es el libro más corto del Nuevo Testamento?",options:["Judas","2 Juan","3 Juan","Filemón"],answer:2,category:"General"},{q:"¿Quién fue la esposa de Abraham?",options:["Agar","Sara","Lea","Rebeca"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué apóstol era recaudador de impuestos?",options:["Pedro","Mateo","Juan","Andrés"],answer:1,category:"Nuevo Testamento"},{q:"¿Cuántos panes usó Jesús para alimentar a 5000?",options:["3","5","7","12"],answer:1,category:"Milagros"},{q:"¿Quién traicionó a Jesús?",options:["Pedro","Tomás","Judas Iscariote","Bartolomé"],answer:2,category:"Nuevo Testamento"},{q:"¿Cómo murió Sansón?",options:["En batalla","Derribó el templo","Por enfermedad","Crucificado"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué reina visitó a Salomón por su sabiduría?",options:["Jezabel","Ester","Reina de Sabá","Betsabé"],answer:2,category:"Antiguo Testamento"},{q:"¿Cuántos libros del Nuevo Testamento escribió Pablo?",options:["7","10","13","15"],answer:2,category:"General"},{q:"¿Quién fue el primer rey de Israel?",options:["David","Salomón","Saúl","Samuel"],answer:2,category:"Antiguo Testamento"},{q:"¿Qué lenguaje hablaba Jesús?",options:["Hebreo","Griego","Arameo","Latín"],answer:2,category:"General"},{q:"¿Quién cortó la oreja de un soldado en Getsemaní?",options:["Juan","Pedro","Santiago","Judas"],answer:1,category:"Nuevo Testamento"},{q:"¿Cuántos días estuvo Lázaro muerto antes de ser resucitado?",options:["2","3","4","7"],answer:2,category:"Milagros"},{q:"¿Quién fue la jueza y profetisa de Israel?",options:["Débora","Jael","Ester","Rut"],answer:0,category:"Antiguo Testamento"},{q:"¿Qué profeta desafió a los profetas de Baal en el monte Carmelo?",options:["Eliseo","Elías","Isaías","Jeremías"],answer:1,category:"Profetas"},{q:"¿Cómo se llamaba el jardín donde vivían Adán y Eva?",options:["Gólgota","Edén","Getsemaní","Sinaí"],answer:1,category:"Creación"},{q:"¿Quiénes fueron los padres de Isaac?",options:["Jacob y Raquel","Abraham y Sara","Isaac y Rebeca","José y Asenat"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuál era el nombre del padre de David?",options:["Saúl","Isaí","Boaz","Salmon"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué rey ordenó matar a los niños de Belén?",options:["Herodes","César Augusto","Pilato","Faraón"],answer:0,category:"Nuevo Testamento"},{q:"¿De qué tribu era el apóstol Pablo?",options:["Judá","Leví","Benjamín","Rubén"],answer:2,category:"Nuevo Testamento"},{q:"¿Quién fue el sucesor del profeta Elías?",options:["Jeremías","Eliseo","Ezequiel","Daniel"],answer:1,category:"Profetas"},{q:"¿Qué apóstol restauró Jesús junto al mar tras su resurrección?",options:["Juan","Pedro","Tomás","Santiago"],answer:1,category:"Nuevo Testamento"},{q:"¿Quién escribió el tercer Evangelio y los Hechos?",options:["Mateo","Juan","Lucas","Pablo"],answer:2,category:"Nuevo Testamento"},{q:"¿Qué rey de Babilonia se comportó como un animal?",options:["Belsasar","Nabucodonosor","Ciro","Darío"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuál es el nombre del monte donde murió Jesús?",options:["Monte de los Olivos","Sinaí","Gólgota","Ararat"],answer:2,category:"Nuevo Testamento"},{q:"¿Quién fue el compañero de ruta de Pablo en su primer viaje?",options:["Pedro","Bernabé","Lucas","Timoteo"],answer:1,category:"Nuevo Testamento"},{q:"¿Cuántas veces perdonó David la vida a Saúl?",options:["1","2","3","varias"],answer:1,category:"Antiguo Testamento"}],hard:[{q:"¿Cuál es el versículo más corto de la Biblia?",options:["Juan 3:16","Juan 11:35","Éxodo 20:13","1 Tesalonicenses 5:16"],answer:1,category:"General"},{q:"¿Quién era Melquisedec?",options:["Un profeta","Rey y sacerdote de Salem","Un ángel","Un juez de Israel"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuántos años reinó David en Jerusalén?",options:["20","33","40","45"],answer:1,category:"Antiguo Testamento"},{q:"¿Quién fue la primera persona en ver a Jesús resucitado?",options:["Pedro","Juan","María Magdalena","Tomás"],answer:2,category:"Nuevo Testamento"},{q:"¿En qué río fue bautizado Jesús?",options:["Nilo","Éufrates","Jordán","Tigris"],answer:2,category:"Nuevo Testamento"},{q:"¿Qué iglesia criticó Jesús por ser tibia?",options:["Éfeso","Sardis","Filadelfia","Laodicea"],answer:3,category:"Apocalipsis"},{q:"¿Quién era Nicodemo?",options:["Sacerdote","Fariseo","Saduceo","Centurión"],answer:1,category:"Nuevo Testamento"},{q:"¿Cuántos hijos tuvo Jacob?",options:["10","11","12","13"],answer:2,category:"Antiguo Testamento"},{q:"¿Qué profeta fue llamado por Dios siendo niño?",options:["Isaías","Jeremías","Samuel","Daniel"],answer:2,category:"Profetas"},{q:"¿Cuál es el salmo más largo?",options:["Salmo 23","Salmo 91","Salmo 119","Salmo 150"],answer:2,category:"General"},{q:"¿Quién fue el suegro de Moisés?",options:["Labán","Jetro","Ragüel","Éter"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuántas plagas envió Dios a Egipto?",options:["7","9","10","12"],answer:2,category:"Antiguo Testamento"},{q:"¿Quién construyó el primer templo en Jerusalén?",options:["David","Salomón","Herodes","Zorobabel"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué don especial tenía José el hijo de Jacob?",options:["Fuerza","Interpretar sueños","Profecía","Sabiduría"],answer:1,category:"Antiguo Testamento"},{q:"¿En qué libro se encuentra el capítulo del amor?",options:["Romanos","1 Corintios","Efesios","Filipenses"],answer:1,category:"Nuevo Testamento"},{q:"¿Cuántos jinetes del Apocalipsis hay?",options:["3","4","7","12"],answer:1,category:"Apocalipsis"},{q:"¿Quién era Barrabás?",options:["Discípulo","Sacerdote","Prisionero liberado","Soldado romano"],answer:2,category:"Nuevo Testamento"},{q:"¿En qué se transformó la vara de Moisés ante Faraón?",options:["Fuego","Serpiente","Flores","Agua"],answer:1,category:"Antiguo Testamento"},{q:"¿Quién escribió el Apocalipsis?",options:["Pablo","Pedro","Juan","Lucas"],answer:2,category:"General"},{q:"¿Cuántas puertas tiene la Nueva Jerusalén?",options:["7","10","12","24"],answer:2,category:"Apocalipsis"},{q:"¿Qué patriarca vivió en Ur de los Caldeos?",options:["Isaac","Abraham","Jacob","Noé"],answer:1,category:"Antiguo Testamento"},{q:"¿Quién era Bernabé?",options:["Apóstol original","Compañero de Pablo","Profeta del AT","Juez"],answer:1,category:"Nuevo Testamento"},{q:"¿Qué mujer se disfrazó para consultar a una médium?",options:["Jezabel","Saúl","Dalila","Mical"],answer:1,category:"Antiguo Testamento"},{q:"¿En qué batalla se detuvo el sol?",options:["Jericó","Gabaón","Hai","Betel"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué apóstol fue arrebatado al tercer cielo?",options:["Juan","Pedro","Pablo","Santiago"],answer:2,category:"Nuevo Testamento"},{q:"¿Qué rey de Judá vio su vida prolongada 15 años por Dios?",options:["Ezequías","Josías","Uzías","Manasés"],answer:0,category:"Antiguo Testamento"},{q:"¿Quién fue el comandante sirio sanado de lepra en el Jordán?",options:["Naamán","Ben-adad","Hazael","Senaquerib"],answer:0,category:"Antiguo Testamento"},{q:"¿Cuántas veces al año entraba el Sumo Sacerdote al Lugar Santísimo?",options:["1","2","3","7"],answer:0,category:"Antiguo Testamento"},{q:"¿Cuál es el nombre de la madre de Samuel?",options:["Ana","Penina","Mical","Noemí"],answer:0,category:"Antiguo Testamento"},{q:"¿Qué libro sigue al libro de los Salmos?",options:["Eclesiastés","Proverbios","Cantares","Isaías"],answer:1,category:"General"},{q:'¿Quién fue el profeta que vio a Dios ("Santo, Santo, Santo")?',options:["Jeremías","Ezequiel","Isaías","Daniel"],answer:2,category:"Profetas"},{q:"¿Quién escondió a los espías de Josué en Jericó?",options:["Rahab","Rut","Dalila","Jael"],answer:0,category:"Antiguo Testamento"},{q:"¿Qué nombre le puso Dios a Jacob tras luchar con el ángel?",options:["Abraham","Israel","Esaú","Judá"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuáles fueron los tributos de los magos de Oriente?",options:["Mirra y Oro","Oro, Incienso y Mirra","Oro y Plata","Incienso y Perlas"],answer:1,category:"Nuevo Testamento"},{q:"¿Qué profeta lloró sobre Jerusalén durante el asedio?",options:["Ezequiel","Jeremías","Isaías","Oseas"],answer:1,category:"Profetas"},{q:"¿Qué ciudad fue destruida junto con Sodoma?",options:["Jericó","Gomorra","Nínive","Damasco"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuál es el nombre del monte donde Abraham iba a sacrificar a Isaac?",options:["Monte Sinaí","Monte Moriah","Monte Carmelo","Monte Ararat"],answer:1,category:"Antiguo Testamento"},{q:'¿Qué apóstol escribió "La fe sin obras está muerta"?options?',options:["Pedro","Juan","Santiago","Pablo"],answer:2,category:"Nuevo Testamento"},{q:"¿Quién era el sumo sacerdote que juzgó a Jesús?",options:["Anás","Caifás","Herodes","Pilato"],answer:1,category:"Nuevo Testamento"}]};function eE(n,e,t="easy"){const r={easy:1,medium:1.5,hard:2}[t]||1,i=Math.floor(e*.5*r),o=Math.floor(e*r);return{coins:Math.max(i,5),xp:Math.max(o,10)}}function js(n,e,t=0,s="easy"){const r=eE(n,e,s);zn(r.coins);const i=jn(r.xp);if(i){const o=_e();j(`🎉 ¡Subiste al nivel ${o.level}!`,"reward")}return setTimeout(()=>Wb(),500),{...r,leveledUp:i}}function tE(n){const s=[...Ue.easy.map(D=>({...D,diff:"easy"})),...Ue.medium.map(D=>({...D,diff:"medium"})),...Ue.hard.map(D=>({...D,diff:"hard"}))],r=Ve(s).slice(0,10);let i=0,o=0,l=0,u=0,h=null,f=20,y=!1;function b(){const D=r[i];y=!1,f=20;const V={easy:"Fácil",medium:"Medio",hard:"Difícil"},B={easy:"var(--color-success)",medium:"var(--color-gold)",hard:"var(--color-error)"};n.innerHTML=`
      <div class="trivia-game">
        <div class="trivia-header">
          <div class="trivia-progress">
            <span>Pregunta ${i+1} / 10</span>
            <span class="trivia-score">⭐ ${o}</span>
          </div>
          <div class="trivia-progress-bar">
            <div class="trivia-progress-fill" style="width: ${i/10*100}%"></div>
          </div>
        </div>

        <div class="trivia-timer">
          <div class="timer-circle">
            <svg viewBox="0 0 100 100" width="60" height="60">
              <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="6"/>
              <circle id="timer-ring" cx="50" cy="50" r="42" fill="none" stroke="var(--color-gold)" stroke-width="6"
                stroke-dasharray="${2*Math.PI*42}"
                stroke-dashoffset="0"
                stroke-linecap="round"
                transform="rotate(-90 50 50)"/>
            </svg>
            <span id="timer-text" class="timer-text">${f}</span>
          </div>
        </div>

        <div class="trivia-category">
          <span class="badge" style="background: ${B[D.diff]}">${V[D.diff]}</span>
          <span class="text-sm text-muted">${D.category}</span>
        </div>

        <div class="trivia-question">${D.q}</div>

        <div class="trivia-options">
          ${D.options.map((F,x)=>`
            <button class="trivia-option" data-index="${x}">
              <span class="option-letter">${String.fromCharCode(65+x)}</span>
              <span>${F}</span>
            </button>
          `).join("")}
        </div>

        ${u>=3?`<div class="streak-indicator">🔥 ¡Racha de ${u}!</div>`:""}
      </div>
    `,A(),n.querySelectorAll(".trivia-option").forEach(F=>{F.addEventListener("click",()=>{if(y)return;const x=parseInt(F.dataset.index);P(x,D)})})}function A(){clearInterval(h);const D=document.getElementById("timer-ring"),V=2*Math.PI*42;h=setInterval(()=>{f--;const B=document.getElementById("timer-text");if(B&&(B.textContent=f),D){const F=V*(1-f/20);D.setAttribute("stroke-dashoffset",F),f<=5&&D.setAttribute("stroke","var(--color-error)")}f<=0&&(clearInterval(h),S())},1e3)}function P(D,V){y=!0,clearInterval(h);const B=n.querySelectorAll(".trivia-option"),F=D===V.answer;if(B.forEach((x,M)=>{x.disabled=!0,M===V.answer&&x.classList.add("correct"),M===D&&!F&&x.classList.add("wrong")}),F){l++,u++;const x=Math.floor(f*2),M={easy:10,medium:20,hard:30},T=10+x+(M[V.diff]||0);o+=T,u>=3&&De("streak_3"),f>=17&&De("fast_answer")}else u=0;setTimeout(()=>{i++,i<10?b():N()},1500)}function S(){y=!0,u=0;const D=r[i];n.querySelectorAll(".trivia-option").forEach((B,F)=>{B.disabled=!0,F===D.answer&&B.classList.add("correct")}),j("⏰ ¡Se acabó el tiempo!","error"),setTimeout(()=>{i++,i<10?b():N()},1500)}function N(){var F,x;clearInterval(h);const D=Math.round(l/10*100);D===100&&De("perfect_trivia");const V=js("trivia",o,l,"easy");Bs("trivia",o,l);const B=D>=80?"🏆":D>=60?"😊":D>=40?"🤔":"📖";n.innerHTML=`
      <div class="game-results">
        <div class="results-emoji">${B}</div>
        <h2 class="results-title">${D>=60?"¡Bien hecho!":"¡Sigue practicando!"}</h2>

        <div class="results-score-circle">
          <span class="results-score-value">${o}</span>
          <span class="results-score-label">puntos</span>
        </div>

        <div class="results-stats">
          <div class="results-stat">
            <span class="results-stat-value">${l}/10</span>
            <span class="results-stat-label">Correctas</span>
          </div>
          <div class="results-stat">
            <span class="results-stat-value">${D}%</span>
            <span class="results-stat-label">Precisión</span>
          </div>
        </div>

        <div class="results-rewards">
          <div class="reward-item">🪙 +${V.coins} monedas</div>
          <div class="reward-item">⭐ +${V.xp} XP</div>
        </div>

        <div class="results-actions">
          <button class="btn btn-primary btn-block" id="btn-play-again">🔄 Jugar de Nuevo</button>
          <button class="btn btn-secondary btn-block" id="btn-go-home">🏠 Volver al Menú</button>
        </div>
      </div>
    `,(F=document.getElementById("btn-play-again"))==null||F.addEventListener("click",()=>{ye("game",{gameId:"trivia"})}),(x=document.getElementById("btn-go-home"))==null||x.addEventListener("click",()=>{ye("home")})}return b(),()=>{clearInterval(h)}}const wa=[{name:"Moisés",clues:["Fue criado en el palacio de un faraón.","Dios le habló desde una zarza ardiente.","Liberó al pueblo de Israel de la esclavitud.","Recibió los Diez Mandamientos en el monte Sinaí.","Abrió las aguas del Mar Rojo."],book:"Éxodo"},{name:"David",clues:["Era el hijo menor de su familia.","Fue pastor de ovejas en su juventud.","Tocaba el arpa con gran habilidad.","Derrotó a un gigante con una piedra y una honda.","Se convirtió en el segundo rey de Israel."],book:"Samuel"},{name:"Noé",clues:["Era un hombre justo en su generación.","Dios le encomendó una misión especial de rescate.","Trabajó construyendo algo enorme durante muchos años.","Reunió animales de todas las especies.","Construyó el arca y sobrevivió al diluvio."],book:"Génesis"},{name:"Abraham",clues:["Vivía originalmente en Ur de los Caldeos.","Dios le prometió descendencia como las estrellas.","Su esposa se llamaba Sara.","Fue llamado el padre de la fe.","Estuvo dispuesto a sacrificar a su hijo Isaac."],book:"Génesis"},{name:"José",clues:["Era el favorito de su padre Jacob.","Sus hermanos le tenían envidia.","Fue vendido y llevado a un país lejano.","Tenía el don de interpretar sueños.","Llegó a ser gobernador de Egipto."],book:"Génesis"},{name:"Daniel",clues:["Fue llevado cautivo a Babilonia siendo joven.","Se negó a comer la comida del rey.","Interpretó el sueño de una gran estatua.","Sus enemigos buscaron destruirlo por su fe.","Fue arrojado al foso de los leones."],book:"Daniel"},{name:"Sansón",clues:["Su nacimiento fue anunciado por un ángel.","Era nazareo desde su nacimiento.","Su fuerza era sobrenatural.","Una mujer descubrió el secreto de su poder.","Derribó el templo de los filisteos."],book:"Jueces"},{name:"Salomón",clues:["Era hijo del segundo rey de Israel.","Pidió sabiduría a Dios en lugar de riquezas.","Construyó el primer templo de Jerusalén.","La Reina de Sabá visitó su corte.","Es considerado el hombre más sabio que ha existido."],book:"Reyes"},{name:"María",clues:["Era una joven de Nazaret.","Un ángel le anunció un mensaje especial.","Estaba comprometida con un carpintero.","Visitó a su prima Elisabet.","Es la madre de Jesús."],book:"Lucas"},{name:"Pedro",clues:["Era pescador de profesión.","Su hermano también era discípulo de Jesús.","Caminó sobre el agua por un momento.","Negó conocer a Jesús tres veces.","Se convirtió en líder de la iglesia primitiva."],book:"Evangelios"},{name:"Pablo",clues:["Su nombre original era Saulo.","Perseguía a los primeros cristianos.","Tuvo un encuentro sobrenatural camino a Damasco.","Escribió muchas cartas del Nuevo Testamento.","Realizó varios viajes misioneros por el Mediterráneo."],book:"Hechos"},{name:"Elías",clues:["Fue un profeta del reino del norte.","Desafió a los profetas de un dios falso.","Fue alimentado por cuervos junto a un arroyo.","Hizo descender fuego del cielo.","Subió al cielo en un carro de fuego."],book:"Reyes"},{name:"Rut",clues:["No era israelita de nacimiento.","Fue nuera de Noemí.",'Dijo: "A donde tú vayas, iré yo".',"Trabajó recogiendo espigas en un campo.","Se convirtió en bisabuela del rey David."],book:"Rut"},{name:"Ester",clues:["Era huérfana criada por su primo.","Llegó a ser reina de Persia.","Arriesgó su vida para salvar a su pueblo.","Organizó un banquete para revelar un complot.","Su historia se celebra en la fiesta de Purim."],book:"Ester"},{name:"Jonás",clues:["Dios le pidió ir a una ciudad malvada.","Intentó huir de la misión de Dios.","Fue lanzado al mar durante una tormenta.","Pasó tres días dentro de un gran pez.","Finalmente predicó en Nínive."],book:"Jonás"},{name:"Juan el Bautista",clues:["Su padre quedó mudo cuando anunció su nacimiento.","Vivía en el desierto.","Comía langostas y miel silvestre.","Predicaba arrepentimiento y bautismo.","Bautizó a Jesús en el río Jordán."],book:"Evangelios"},{name:"Josué",clues:["Fue asistente de Moisés durante años.","Era uno de los doce espías enviados a Canaán.","Fue valiente cuando otros tuvieron miedo.","Lideró al pueblo cruzando el río Jordán.","Conquistó las murallas de Jericó."],book:"Josué"},{name:"Jacob",clues:["Era hermano gemelo de Esaú.","Obtuvo la bendición de su padre mediante un engaño.","Soñó con una escalera que llegaba al cielo.","Trabajó 14 años para casarse con Raquel.","Luchó con un ángel y fue llamado Israel."],book:"Génesis"}];function nE(n){const t=Ve([...wa]).slice(0,5);let s=0,r=0,i=0,o=0;function l(){const y=t[s];o=0;const b=wa.filter(S=>S.name!==y.name).map(S=>S.name),A=Ve(b).slice(0,3),P=Ve([y.name,...A]);u(y,P)}function u(y,b){var S;const A=y.clues.slice(0,o+1),P=Math.max(50-o*10,10);n.innerHTML=`
      <div class="characters-game">
        <div class="characters-header">
          <div class="characters-progress">
            <span>Personaje ${s+1} / 5</span>
            <span class="characters-score">⭐ ${r}</span>
          </div>
          <div class="trivia-progress-bar">
            <div class="trivia-progress-fill" style="width: ${s/5*100}%"></div>
          </div>
        </div>

        <div class="characters-clue-counter">
          <span>Pista ${o+1} de ${y.clues.length}</span>
          <span class="text-muted">Valor: ${P} pts</span>
        </div>

        <div class="characters-clues">
          ${A.map((N,D)=>`
            <div class="clue-card ${D===o?"clue-new":""}">
              <span class="clue-number">${D+1}</span>
              <span>${N}</span>
            </div>
          `).join("")}
        </div>

        ${o<y.clues.length-1?`
          <button class="btn btn-secondary btn-block mb-md" id="btn-more-clue">
            💡 Otra Pista (-10 pts)
          </button>
        `:""}

        <div class="section-title mt-md">¿Quién es?</div>
        <div class="characters-options">
          ${b.map(N=>`
            <button class="characters-option" data-name="${N}">${N}</button>
          `).join("")}
        </div>
      </div>
    `,(S=document.getElementById("btn-more-clue"))==null||S.addEventListener("click",()=>{o++,u(y,b)}),n.querySelectorAll(".characters-option").forEach(N=>{N.addEventListener("click",()=>{const D=N.dataset.name;h(D,y)})})}function h(y,b,A){const P=y===b.name;if(n.querySelectorAll(".characters-option").forEach(S=>{S.disabled=!0,S.dataset.name===b.name&&S.classList.add("correct"),S.dataset.name===y&&!P&&S.classList.add("wrong")}),P){i++;const S=Math.max(50-o*10,10);r+=S,j(`✅ ¡Correcto! +${S} pts`,"success")}else j(`❌ Era: ${b.name}`,"error");setTimeout(()=>{s++,s<5?l():f()},1800)}function f(){var A,P;const y=js("characters",r,i,"medium");Bs("characters",r,i);const b=i>=4?"🕵️":i>=3?"😊":"📖";n.innerHTML=`
      <div class="game-results">
        <div class="results-emoji">${b}</div>
        <h2 class="results-title">${i>=3?"¡Gran detective bíblico!":"¡Sigue aprendiendo!"}</h2>

        <div class="results-score-circle">
          <span class="results-score-value">${r}</span>
          <span class="results-score-label">puntos</span>
        </div>

        <div class="results-stats">
          <div class="results-stat">
            <span class="results-stat-value">${i}/5</span>
            <span class="results-stat-label">Adivinados</span>
          </div>
        </div>

        <div class="results-rewards">
          <div class="reward-item">🪙 +${y.coins} monedas</div>
          <div class="reward-item">⭐ +${y.xp} XP</div>
        </div>

        <div class="results-actions">
          <button class="btn btn-primary btn-block" id="btn-play-again">🔄 Jugar de Nuevo</button>
          <button class="btn btn-secondary btn-block" id="btn-go-home">🏠 Volver al Menú</button>
        </div>
      </div>
    `,(A=document.getElementById("btn-play-again"))==null||A.addEventListener("click",()=>{ye("game",{gameId:"characters"})}),(P=document.getElementById("btn-go-home"))==null||P.addEventListener("click",()=>{ye("home")})}l()}function sE(n){const t=Ve([...Hr]).slice(0,5);let s=0,r=0,i=0;function o(h){const f=h.text.split(" "),y=Math.min(3,Math.max(2,Math.floor(f.length/5))),b=[];for(;b.length<y;){const V=Math.floor(Math.random()*f.length);!b.includes(V)&&f[V].length>3&&b.push(V)}b.sort((V,B)=>V-B);const A=[],P=[];f.forEach((V,B)=>{if(b.includes(B)){const F=V.replace(/[.,;:!?¡¿"']/g,""),x=V.replace(F,"");A.push({type:"blank",original:F,punct:x,index:P.length}),P.push(F)}else A.push({type:"word",text:V})});const N=Ve(["gracia","verdad","camino","espíritu","gloria","pueblo","cielo","tierra","corazón","alma"].filter(V=>!P.includes(V.toLowerCase()))).slice(0,2),D=Ve([...P,...N]);return{blankedWords:A,missingWords:P,allOptions:D}}function l(){const h=t[s],{blankedWords:f,missingWords:y,allOptions:b}=o(h);let A=new Array(y.length).fill(null);function P(){var N;n.innerHTML=`
        <div class="verse-complete-game">
          <div class="verse-complete-header">
            <div class="trivia-progress">
              <span>Versículo ${s+1} / 5</span>
              <span class="trivia-score">⭐ ${r}</span>
            </div>
            <div class="trivia-progress-bar">
              <div class="trivia-progress-fill" style="width: ${s/5*100}%"></div>
            </div>
          </div>

          <div class="verse-complete-ref">📖 ${h.ref}</div>

          <div class="verse-complete-text">
            ${f.map(D=>{if(D.type==="word")return`<span class="vc-word">${D.text}</span>`;{const V=A[D.index];return`<span class="vc-blank ${V?"filled":""}" data-blank="${D.index}">${V||"___"}${D.punct}</span>`}}).join(" ")}
          </div>

          <div class="section-title mt-lg">Elige las palabras:</div>
          <div class="vc-options">
            ${b.map(D=>{const V=A.includes(D);return`<button class="vc-option ${V?"used":""}" data-word="${D}" ${V?"disabled":""}>${D}</button>`}).join("")}
          </div>

          <button class="btn btn-primary btn-block mt-lg ${A.includes(null)?"disabled":""}" id="btn-check-verse" ${A.includes(null)?"disabled":""}>
            ✅ Comprobar
          </button>
        </div>
      `,n.querySelectorAll(".vc-blank.filled").forEach(D=>{D.addEventListener("click",()=>{const V=parseInt(D.dataset.blank);A[V]=null,P()})}),n.querySelectorAll(".vc-option:not([disabled])").forEach(D=>{D.addEventListener("click",()=>{const V=D.dataset.word,B=A.indexOf(null);B!==-1&&(A[B]=V,P())})}),(N=document.getElementById("btn-check-verse"))==null||N.addEventListener("click",()=>{S(y)})}function S(N){let D=!0;N.forEach((V,B)=>{var F;((F=A[B])==null?void 0:F.toLowerCase())!==V.toLowerCase()&&(D=!1)}),D?(i++,r+=30,j("✅ ¡Correcto! +30 pts","success")):j(`❌ Respuesta: ${N.join(", ")}`,"error"),setTimeout(()=>{s++,s<5?l():u()},2e3)}P()}function u(){var y,b;const h=js("verse-complete",r,i,"medium");Bs("verse-complete",r,i);const f=i>=4?"📖":i>=2?"😊":"🙏";n.innerHTML=`
      <div class="game-results">
        <div class="results-emoji">${f}</div>
        <h2 class="results-title">${i>=3?"¡Excelente memorización!":"¡Sigue practicando la Palabra!"}</h2>

        <div class="results-score-circle">
          <span class="results-score-value">${r}</span>
          <span class="results-score-label">puntos</span>
        </div>

        <div class="results-stats">
          <div class="results-stat">
            <span class="results-stat-value">${i}/5</span>
            <span class="results-stat-label">Completados</span>
          </div>
        </div>

        <div class="results-rewards">
          <div class="reward-item">🪙 +${h.coins} monedas</div>
          <div class="reward-item">⭐ +${h.xp} XP</div>
        </div>

        <div class="results-actions">
          <button class="btn btn-primary btn-block" id="btn-play-again">🔄 Jugar de Nuevo</button>
          <button class="btn btn-secondary btn-block" id="btn-go-home">🏠 Volver al Menú</button>
        </div>
      </div>
    `,(y=document.getElementById("btn-play-again"))==null||y.addEventListener("click",()=>{ye("game",{gameId:"verse-complete"})}),(b=document.getElementById("btn-go-home"))==null||b.addEventListener("click",()=>{ye("home")})}l()}const rE=[{theme:"Frutos del Espíritu",words:["AMOR","GOZO","PAZ","PACIENCIA","BONDAD","FE","MANSEDUMBRE","TEMPLANZA","BENIGNIDAD","PERDON","PIEDAD"]},{theme:"Discípulos de Jesús",words:["PEDRO","JUAN","MATEO","TOMAS","SANTIAGO","ANDRES","FELIPE","SIMON","BARTOLOME","JUDAS","TADEO","FELIPE"]},{theme:"Libros del Antiguo Testamento",words:["GENESIS","EXODO","LEVITICO","NUMEROS","DEUTERONOMIO","JOSUE","JUECES","RUT","SAMUEL","REYES","SALMOS"]},{theme:"Personajes Bíblicos",words:["MOISES","DAVID","SARA","NOE","ESTER","ABRAHAM","ISAAC","JACOB","JOSE","SAMUEL","DANIEL","SANSÓN"]},{theme:"Lugares Bíblicos",words:["EDEN","SINAI","BELEN","JORDAN","JERUSALEN","NAZARET","JERICO","EGIPTO","BETEL","CANAN","GOLGOTA"]},{theme:"Valores Cristianos",words:["GRACIA","VERDAD","VIDA","LUZ","PERDON","AMOR","JUSTICIA","SANTIDAD","HONESTIDAD","HUMILDAD","FE"]},{theme:"Profetas",words:["ELIAS","ISAIAS","DANIEL","JONAS","JEREMIAS","EZEQUIEL","OSEAS","MALAQUIAS","AMOS","MIQUEAS","HABACUC"]},{theme:"Animales de la Biblia",words:["LEON","PALOMA","OVEJA","PEZ","BURRA","AGUILA","TORO","CABALLO","LOBO","SERPIENTE","CORDERO"]},{theme:"Reyes de la Biblia",words:["DAVID","SAUL","SALOMON","JOSIAS","EZEQUIAS","ACAB","ROBOAM","OZIAS","HERODES","FELESTINO","BALAC"]},{theme:"Milagros de Jesús",words:["VINO","PAN","AGUA","VISTA","VIDA","PESCA","CALMA","LAZARO","PIES","OREJA","HIJA"]}];function Gh(n){e();function e(){n.innerHTML=`
      <div class="word-search-game">
        <div class="ws-header">
          <h2>🔍 Sopa de Letras</h2>
          <p class="text-secondary text-center">Encuentra palabras bíblicas ocultas en el tablero.</p>
        </div>

        <div class="difficulty-selection">
          <h3>Selecciona la Dificultad:</h3>
          <div class="difficulty-grid">
            <button class="btn btn-difficulty" data-level="easy">
               <div class="diff-title">🌱 Fácil</div>
               <div class="diff-desc">Grid 11x11, 10 palabras (Horiz/Vert)</div>
            </button>
            <button class="btn btn-difficulty" data-level="medium">
               <div class="diff-title">⚔️ Medio</div>
               <div class="diff-desc">Grid 13x13, 11 palabras (+ Diagonales)</div>
            </button>
            <button class="btn btn-difficulty" data-level="hard">
               <div class="diff-title">👑 Difícil</div>
               <div class="diff-desc">Grid 15x15, 12 palabras (Todas direcciones)</div>
            </button>
          </div>
        </div>
      </div>
    `,n.querySelectorAll(".btn-difficulty").forEach(s=>{s.addEventListener("click",r=>{const i=s.dataset.level;t(i)})})}function t(s){const i={easy:{size:11,wordCount:10,directions:[[0,1],[1,0]]},medium:{size:13,wordCount:11,directions:[[0,1],[1,0],[1,1]]},hard:{size:15,wordCount:12,directions:[[0,1],[1,0],[1,1],[0,-1],[-1,0]]}}[s],o=i.size,l=Ve([...rE])[0],u=Ve([...l.words]).slice(0,i.wordCount);let h=[],f=[],y=!1,b=[],A=0,P=Date.now();function S(){h=Array.from({length:o},()=>Array.from({length:o},()=>""));const F=i.directions;u.forEach(M=>{let T=!1,v=0;for(;!T&&v<100;){v++;const m=F[Math.floor(Math.random()*F.length)],g=Math.floor(Math.random()*o),E=Math.floor(Math.random()*o),I=g+m[0]*(M.length-1),_=E+m[1]*(M.length-1);if(I<0||I>=o||_<0||_>=o)continue;let O=!0;for(let q=0;q<M.length;q++){const H=g+m[0]*q,X=E+m[1]*q;if(h[H][X]!==""&&h[H][X]!==M[q]){O=!1;break}}if(O){for(let q=0;q<M.length;q++){const H=g+m[0]*q,X=E+m[1]*q;h[H][X]=M[q]}T=!0}}});const x="ABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let M=0;M<o;M++)for(let T=0;T<o;T++)h[M][T]===""&&(h[M][T]=x[Math.floor(Math.random()*x.length)])}function N(){n.innerHTML=`
        <div class="word-search-game">
          <div class="ws-header">
            <div class="ws-theme">
              <span class="ws-theme-icon">📚</span>
              <span>${l.theme} (${s.toUpperCase()})</span>
            </div>
            <div class="ws-found">${f.length} / ${u.length}</div>
          </div>

          <div class="ws-words-list">
            ${u.map(x=>`
              <span class="ws-word ${f.includes(x)?"found":""}">${x}</span>
            `).join("")}
          </div>

          <div class="ws-grid" id="ws-grid">
            ${h.map((x,M)=>x.map((T,v)=>`
                <div class="ws-cell" data-row="${M}" data-col="${v}">${T}</div>
              `).join("")).join("")}
          </div>

          <p class="text-sm text-muted text-center mt-md">Arrastra para seleccionar palabras consecutivas.</p>
        </div>
      `;const F=document.getElementById("ws-grid");F&&(F.style.gridTemplateColumns=`repeat(${o}, 1fr)`),D()}function D(){const F=document.getElementById("ws-grid");if(!F)return;const x=g=>{const E=g.touches?g.touches[0]:g,I=document.elementFromPoint(E.clientX,E.clientY);return I&&I.classList.contains("ws-cell")?{row:parseInt(I.dataset.row),col:parseInt(I.dataset.col),el:I}:null},M=g=>{g.preventDefault(),y=!0,b=[];const E=x(g);E&&(b.push(E),E.el.classList.add("cell-selected"))},T=g=>{if(!y)return;g.preventDefault();const E=x(g);E&&!b.some(I=>I.row===E.row&&I.col===E.col)&&(b.length===1||m(E))&&(b.push(E),E.el.classList.add("cell-selected"))},v=()=>{y&&(y=!1,V(),document.querySelectorAll(".cell-selected").forEach(g=>g.classList.remove("cell-selected")),b=[])};function m(g){if(b.length<1)return!0;const E=b[0],I=b[b.length-1],_=Math.sign(I.row-E.row),O=Math.sign(I.col-E.col),q=I.row+_,H=I.col+O;return g.row===q&&g.col===H}F.addEventListener("mousedown",M),F.addEventListener("mousemove",T),window.addEventListener("mouseup",v),F.addEventListener("touchstart",M,{passive:!1}),F.addEventListener("touchmove",T,{passive:!1}),window.addEventListener("touchend",v)}function V(){if(b.length<2)return;const F=b.map(T=>h[T.row][T.col]).join(""),x=F.split("").reverse().join(""),M=u.find(T=>(T===F||T===x)&&!f.includes(T));if(M){f.push(M),A+=25,b.forEach(m=>{const g=document.querySelector(`.ws-cell[data-row="${m.row}"][data-col="${m.col}"]`);g&&g.classList.add("cell-found")});const T=Array.from(document.querySelectorAll(".ws-word")).find(m=>m.textContent===M);T&&T.classList.add("found");const v=document.querySelector(".ws-found");if(v&&(v.textContent=`${f.length} / ${u.length}`),j(`✅ ¡Encontraste "${M}"!`,"success"),f.length===u.length){const m=Math.max(0,60-Math.floor((Date.now()-P)/1e3));A+=m,setTimeout(B,1e3)}}}function B(){var x,M;const F=js("word-search",A,f.length,s);Bs("word-search",A,f.length),n.innerHTML=`
        <div class="game-results">
          <div class="results-emoji">🔤</div>
          <h2 class="results-title">¡Sopa Completada!</h2>

          <div class="results-score-circle">
            <span class="results-score-value">${A}</span>
            <span class="results-score-label">puntos</span>
          </div>

          <div class="results-stats">
            <div class="results-stat">
              <span class="results-stat-value">${f.length}</span>
              <span class="results-stat-label">Palabras</span>
            </div>
            <div class="results-stat">
              <span class="results-stat-value">${Math.floor((Date.now()-P)/1e3)}s</span>
              <span class="results-stat-label">Tiempo</span>
            </div>
          </div>

          <div class="results-rewards">
            <div class="reward-item">🪙 +${F.coins} monedas</div>
            <div class="reward-item">⭐ +${F.xp} XP</div>
          </div>

          <div class="results-actions">
            <button class="btn btn-primary btn-block" id="btn-play-again">🔄 Jugar de Nuevo</button>
            <button class="btn btn-secondary btn-block" id="btn-go-home">🏠 Volver al Menú</button>
          </div>
        </div>
      `,(x=document.getElementById("btn-play-again"))==null||x.addEventListener("click",()=>{Gh(n)}),(M=document.getElementById("btn-go-home"))==null||M.addEventListener("click",()=>{ye("home")})}S(),N()}}function iE(n){const s=Ve([...wa]).slice(0,6).map((P,S)=>[{id:S,type:"name",text:P.name,icon:"👤",pairId:S},{id:S,type:"clue",text:P.clues[0],icon:"💡",pairId:S}]).flat(),r=Ve(s);let i=[],o=[],l=0,u=0,h=Date.now(),f=!0;function y(){n.innerHTML=`
      <div class="memory-game">
        <div class="memory-header">
          <div class="memory-stats">
            <span>🎯 ${o.length}/6</span>
            <span>🔄 ${l} movimientos</span>
          </div>
        </div>

        <div class="memory-grid">
          ${r.map((P,S)=>`
            <div class="memory-card ${o.includes(P.pairId)?"matched":""} ${i.includes(S)?"flipped":""}"
                 data-index="${S}">
              <div class="memory-card-inner">
                <div class="memory-card-front">
                  <span class="memory-card-icon">✝️</span>
                </div>
                <div class="memory-card-back">
                  <span class="memory-card-type">${P.icon}</span>
                  <span class="memory-card-text">${P.text}</span>
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `,n.querySelectorAll(".memory-card").forEach(P=>{P.addEventListener("click",()=>{if(!f)return;const S=parseInt(P.dataset.index);b(S)})})}function b(P){if(i.includes(P)||o.includes(r[P].pairId)||i.length>=2)return;i.push(P);const S=n.querySelector(`.memory-card[data-index="${P}"]`);if(S&&S.classList.add("flipped"),i.length===2){l++,f=!1;const[N,D]=i,V=r[N],B=r[D];V.pairId===B.pairId&&V.type!==B.type?(o.push(V.pairId),u+=Math.max(30-l,10),setTimeout(()=>{var x,M;(x=document.querySelector(`.memory-card[data-index="${N}"]`))==null||x.classList.add("matched"),(M=document.querySelector(`.memory-card[data-index="${D}"]`))==null||M.classList.add("matched");const F=n.querySelector(".memory-stats");F&&(F.innerHTML=`<span>🎯 ${o.length}/6</span><span>🔄 ${l} movimientos</span>`),i=[],f=!0,j("✅ ¡Par encontrado!","success"),o.length===6&&setTimeout(A,800)},600)):setTimeout(()=>{var x,M;(x=document.querySelector(`.memory-card[data-index="${N}"]`))==null||x.classList.remove("flipped"),(M=document.querySelector(`.memory-card[data-index="${D}"]`))==null||M.classList.remove("flipped");const F=n.querySelector(".memory-stats");F&&(F.innerHTML=`<span>🎯 ${o.length}/6</span><span>🔄 ${l} movimientos</span>`),i=[],f=!0},1e3)}}function A(){var V,B;const P=Math.floor((Date.now()-h)/1e3),S=Math.max(0,120-P);u+=S;const N=js("memory",u,o.length,"easy");Bs("memory",u,o.length);const D=l<=12?"🧠":l<=18?"😊":"🃏";n.innerHTML=`
      <div class="game-results">
        <div class="results-emoji">${D}</div>
        <h2 class="results-title">${l<=12?"¡Memoria increíble!":"¡Bien jugado!"}</h2>

        <div class="results-score-circle">
          <span class="results-score-value">${u}</span>
          <span class="results-score-label">puntos</span>
        </div>

        <div class="results-stats">
          <div class="results-stat">
            <span class="results-stat-value">${l}</span>
            <span class="results-stat-label">Movimientos</span>
          </div>
          <div class="results-stat">
            <span class="results-stat-value">${P}s</span>
            <span class="results-stat-label">Tiempo</span>
          </div>
        </div>

        <div class="results-rewards">
          <div class="reward-item">🪙 +${N.coins} monedas</div>
          <div class="reward-item">⭐ +${N.xp} XP</div>
        </div>

        <div class="results-actions">
          <button class="btn btn-primary btn-block" id="btn-play-again">🔄 Jugar de Nuevo</button>
          <button class="btn btn-secondary btn-block" id="btn-go-home">🏠 Volver al Menú</button>
        </div>
      </div>
    `,(V=document.getElementById("btn-play-again"))==null||V.addEventListener("click",()=>{ye("game",{gameId:"memory"})}),(B=document.getElementById("btn-go-home"))==null||B.addEventListener("click",()=>{ye("home")})}y()}const Jh={noah:{id:"noah",title:"El Arca de Noé",description:"Construye un arca para salvar a la creación del gran diluvio.",cover:"assets/stories/noah.png",difficulty:"Fácil",reward:100,xp:50,startNode:"start",nodes:{start:{text:'Dios ve que la tierra está llena de maldad, pero encuentra gracia en ti, Noé. Te dice: "Hazte un arca de madera de gofer; harás aposentos en el arca, y la calafatearás con brea". El cielo se oscurece.',image:"assets/stories/noah.png",choices:[{text:"🛠️ Obedecer y empezar a construir de inmediato",nextNode:"build"},{text:"🗣️ Hablar con los vecinos para advertirles del peligro",nextNode:"warn_neighbors"}]},build:{text:"Pasan los años. Construyes el Arca con tus hijos Sem, Cam y Jafet. La gente se burla de ti porque no hay señales de lluvia en el desierto. ¿Qué haces ante las burlas?",choices:[{text:"🙏 Continuar trabajando con fe y paciencia",nextNode:"animals"},{text:"🛑 Detenerte un momento para discutir y defenderte",nextNode:"argue"}]},warn_neighbors:{text:'Intentas advertir a la gente, pero se ríen de ti. "¡No ha llovido en años, viejo loco!", te gritan. El tiempo apremia y el arca aún no está lista.',choices:[{text:"🛠️ Volver al trabajo rápidamente en el Arca",nextNode:"build"},{text:"😔 Sentirte desanimado por su incredulidad",nextNode:"discouraged"}]},discouraged:{text:"Te sientas junto a las maderas y respiras profundo. Recuerdas la promesa de Dios de salvarte a ti y a tu familia. Tu fe te renueva.",choices:[{text:"🛠️ Levantar la herramienta y seguir construyendo",nextNode:"build"}]},argue:{text:"Al discutir, pierdes tiempo valioso y la ira entra en tu corazón. El trabajo se retrasa. Sin embargo, decides que lo mejor es concentrarse en lo importante.",choices:[{text:"🛠️ Ignorar las burlas y retomar la construcción",nextNode:"animals"}]},animals:{text:"¡El Arca está terminada! De repente, una procesión milagrosa comienza de la nada: animales de dos en dos, macho y hembra, entran caminando pacíficamente al Arca.",choices:[{text:"🚪 Entrar al Arca con tu familia y cerrar las puertas",nextNode:"flood"}]},flood:{text:"Las cataratas de los cielos se abren y el abismo estalla. Llueve durante 40 días y 40 noches. El Arca flota sobre las aguas. Estás a salvo con tu familia y los animales.",choices:[{text:"🕊️ Esperar a que las aguas bajen y enviar un ave",nextNode:"dove"}]},dove:{text:"Envías una paloma. Regresa la primera vez, pero la segunda vez trae una rama de olivo en el pico. ¡Las aguas están bajando! Finalmente, el Arca se asienta en el monte Ararat.",choices:[{text:"🌈 Salir del Arca y dar gracias a Dios",nextNode:"end"}]},end:{text:"Sales a tierra seca. Dios pone un hermoso arcoíris en el cielo como pacto de que nunca más destruirá la tierra con agua. ¡Has salvado la vida en la tierra!",isEnd:!0,message:"¡Felicidades! Completaste la historia de Noé con obediencia y fe."}}},david:{id:"david",title:"David y Goliat",description:"Enfrenta al gigante filisteo con una honda y mucha fe.",cover:"assets/stories/david.png",difficulty:"Media",reward:120,xp:60,startNode:"start",nodes:{start:{text:"Llegas al campamento del ejército de Israel para llevar comida a tus hermanos mayores. Allí, escuchas a un gigante de casi 3 metros, Goliat, desafiando a Israel al combate.",image:"assets/stories/david.png",choices:[{text:"🛡️ Preguntar qué recompensa tendrá quien lo venza",nextNode:"ask_king"},{text:"😠 Sentirte indignado por los insultos que lanza a Dios",nextNode:"indignant"}]},ask_king:{text:'Te llevan ante el Rey Saúl. Él te mira de arriba abajo: "Eres solo un muchacho, y él un hombre de guerra". Tú recuerdas cómo Dios te libró del león y el oso.',choices:[{text:"👑 Aceptar la armadura del Rey Saúl para pelear",nextNode:"armor"},{text:"❌ Rechazar la armadura y pelear como pastor",nextNode:"stones"}]},indignant:{text:'Dices en voz alta: "¿Quién es este filisteo incircunciso para que provoque a los escuadrones del Dios viviente?". El Rey Saúl escucha tu valentía.',choices:[{text:"👑 Ir a hablar con el Rey Saúl sobre el combate",nextNode:"ask_king"}]},armor:{text:"Te pones el casco de bronce y la pesada coraza. Al intentar dar un paso, te das cuenta de que no puedes moverte con soltura ni has practicado con ella.",choices:[{text:"❌ Quitarte la armadura y confiar en tu honda",nextNode:"stones"}]},stones:{text:"Vas al arroyo y recoges cinco piedras lisas del lecho del río. Las metes en tu bolsa de pastor y caminas hacia el centro del valle, donde Goliat te espera riéndose.",choices:[{text:"🪨 Elegir una piedra y avanzar corriendo",nextNode:"fight_start"}]},fight_start:{text:'Goliat grita: "¿Soy yo un perro para que vengas a mí con palos?". Tú le respondes: "¡Tú vienes a mí con espada, pero yo voy en el nombre de Jehová!".',choices:[{text:"🎯 Poner la piedra en la honda y girarla con fuerza",nextNode:"sling_shot"}]},sling_shot:{text:"Corres hacia el filisteo. Giras la honda y sueltas un extremo. La piedra vuela silbando por el aire y se clava directamente en la frente de Goliat.",choices:[{text:"🏆 El gigante cae al suelo de bruces",nextNode:"end"}]},end:{text:"El campamento filisteo huye aterrado, mientras el ejército de Israel celebra una gran victoria. Has demostrado que Dios no salva con espada, sino con fe.",isEnd:!0,message:"¡Felicidades! Venciste a Goliat con confianza en el Señor."}}},daniel:{id:"daniel",title:"Daniel en el Foso",description:"Permanece fiel a Dios ante un edicto del Rey Darío.",cover:"assets/stories/daniel.png",difficulty:"Difícil",reward:150,xp:75,startNode:"start",nodes:{start:{text:'Eres uno de los gobernadores más sabios del imperio. Otros oficiales, celosos de ti, engañan al Rey Darío para firmar una ley: "Ninguna persona puede orar a ningún dios excepto al Rey durante 30 días".',image:"assets/stories/daniel.png",choices:[{text:"🙏 Ignorar la ley y orar a Dios como siempre",nextNode:"pray"},{text:"🚪 Orar pero con las ventanas cerradas en secreto",nextNode:"secret_pray"}]},pray:{text:"Vas a tu casa, abres las ventanas hacia Jerusalén y te arrodillas a orar tres veces al día dando gracias a Dios. Los oficiales espías te ven y corren a decírselo al Rey.",choices:[{text:"👑 Dejarte llevar por los guardias ante el Rey Darío",nextNode:"arrest"}]},secret_pray:{text:"Decides orar en secreto por miedo. Pero tu corazón siente que estás ocultando tu fe. Quieres dar testimonio de la gloria del Dios vivo.",choices:[{text:"☀️ Abrir las ventanas y orar con valentía",nextNode:"pray"}]},arrest:{text:'El Rey Darío está muy triste porque te aprecia, pero su propia ley no puede cambiarse. Te dice: "El Dios tuyo, a quien tú continuamente sirves, él te libre". Te arrojan al foso de los leones.',choices:[{text:"🦁 Caer en el foso oscuro y esperar a que rujan",nextNode:"den"}]},den:{text:"Te encuentras en la oscuridad rodeado de ojos amenazantes que brillan. De repente, una luz celestial aparece y los leones se sientan pacíficamente a tu alrededor. ¿Qué haces?",choices:[{text:"🙏 Sentarte a dar gracias a Dios por el milagro",nextNode:"morning"},{text:"🦁 Intentar acariciar a uno de los leones",nextNode:"pet_lion"}]},pet_lion:{text:"Te acercas a un león y este ronronea como un gatito. Dios ha cerrado la boca de las fieras para protegerte de todo daño.",choices:[{text:"☀️ Esperar a que amanezca",nextNode:"morning"}]},morning:{text:'Amanece. El Rey Darío corre al foso y grita con dolor: "¡Daniel, siervo del Dios viviente! ¿Te ha podido salvar tu Dios?".',choices:[{text:"🗣️ ¡Rey, vive para siempre! ¡Dios envió su ángel!",nextNode:"end"}]},end:{text:"El Rey Darío, lleno de gozo, te saca del foso. Ni un rasguño hay en ti. Entonces firma un nuevo edicto mandando a todo el reino a temer al Dios de Daniel, que salva y libra.",isEnd:!0,message:"¡Felicidades! Mantuviste tu fe firme y Dios te protegió."}}},moses:{id:"moses",title:"Moisés y el Mar Rojo",description:"Guía al pueblo de Israel hacia la libertad cruzando el mar.",cover:"assets/stories/moses.png",difficulty:"Media",reward:130,xp:65,startNode:"start",nodes:{start:{text:"Has guiado al pueblo de Israel fuera de Egipto tras las diez plagas. Sin embargo, os encontráis atrapados: el Mar Rojo al frente y el ejército del Faraón cargando por detrás.",image:"assets/stories/moses.png",choices:[{text:"🙏 Clamar a Dios por ayuda y protección",nextNode:"pray"},{text:"🗣️ Decir al pueblo que mantengan la calma y tengan fe",nextNode:"calm"}]},pray:{text:'Dios te responde: "¿Por qué clamas a mí? Di a los hijos de Israel que marchen. Y tú, alza tu vara y extiende tu mano sobre el mar, y divídelo".',choices:[{text:"🌊 Alzar la vara hacia el Mar Rojo",nextNode:"part_sea"}]},calm:{text:'Dices al pueblo: "No temáis; estad firmes y ved la salvación que Jehová hará hoy con vosotros". El pueblo se detiene, pero las tropas de Egipto están muy cerca.',choices:[{text:"🌊 Alzar la vara hacia el mar para que se divida",nextNode:"part_sea"}]},part_sea:{text:"Levantas tu vara de madera. Un gran viento recio del oriente sopla toda la noche y las aguas se dividen formando dos inmensos muros sólidos a los lados. Hay tierra seca.",choices:[{text:"🚶‍♂️ Indicar al pueblo que cruce de inmediato",nextNode:"crossing"}]},crossing:{text:"Cruzan por el fondo del mar. Es una marcha larga pero segura. El ejército egipcio decide seguiros con sus carros de guerra adentrándose en el lecho seco.",choices:[{text:"🛡️ Llegar al otro lado y mirar atrás al Faraón",nextNode:"other_side"}]},other_side:{text:"Ya casi todo el pueblo está a salvo en la otra orilla. Los carros egipcios están en medio del mar. Dios te dice que extiendas tu mano una vez más.",choices:[{text:"Extendiendo tu mano sobre las aguas",nextNode:"close_sea"}]},close_sea:{text:"Extiendes tu mano. Las aguas vuelven a su curso normal con furia sobre el ejército de Faraón. El pueblo de Israel queda libre para siempre de Egipto.",choices:[{text:"🎶 Celebrar la libertad con cánticos a Dios",nextNode:"end"}]},end:{text:"Miriam toma un pandero y todo el pueblo danza y canta de gozo. Habéis cruzado el mar y la libertad os espera. ¡El Éxodo ha comenzado!",isEnd:!0,message:"¡Felicidades! Abriste camino en medio del mar con el poder de Dios."}}}};function aE(n){Po(n)}function Po(n){n.innerHTML=`
    <div class="stories-selection">
      <div class="stories-header">
        <h2>📜 Relatos de Fe</h2>
        <p class="text-muted">Elige una historia y toma decisiones para guiar su camino.</p>
      </div>
      
      <div class="stories-grid">
        ${Object.values(Jh).map(e=>`
          <div class="story-card" id="story-${e.id}">
            <div class="story-card-cover" style="background-image: url('${e.cover}')">
              <div class="story-card-overlay">
                <span class="badge badge-difficulty">${e.difficulty}</span>
              </div>
            </div>
            <div class="story-card-content">
              <h3>${e.title}</h3>
              <p>${e.description}</p>
              <div class="story-card-footer">
                <span>💰 +${e.reward}</span>
                <span>⭐ +${e.xp} XP</span>
              </div>
              <button class="btn btn-primary btn-block btn-start-story" data-id="${e.id}">
                Comenzar Historia
              </button>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `,n.querySelectorAll(".btn-start-story").forEach(e=>{e.addEventListener("click",t=>{const s=t.target.dataset.id;oE(n,s)})})}function oE(n,e){const t=Jh[e];let s=t.startNode||"start";function r(){var u;const i=t.nodes[s];if(!i){console.error(`Node not found: ${s}`);return}const o=i.image||t.cover;if(i.isEnd){cE(n,t,i);return}n.innerHTML=`
      <div class="story-play-container" style="background-image: url('${o}')">
        <div class="story-overlay"></div>
        
        <button class="btn-exit-story" id="btn-exit-story">❌ Salir</button>

        <div class="story-content-frame">
          <div class="story-text-container">
            <p class="story-text" id="story-text-box"></p>
          </div>
          
          <div class="story-choices" id="story-choices-container">
            <!-- Choices will be injected here after typewriter effect -->
          </div>
        </div>
      </div>
    `,(u=document.getElementById("btn-exit-story"))==null||u.addEventListener("click",()=>{Po(n)});const l=document.getElementById("story-text-box");lE(i.text,l,()=>{const h=document.getElementById("story-choices-container");h&&i.choices&&i.choices.forEach(f=>{const y=document.createElement("button");y.className="btn btn-option btn-glass fade-in",y.textContent=f.text,y.addEventListener("click",()=>{s=f.nextNode,r()}),h.appendChild(y)})})}r()}function cE(n,e,t){var s;zn(e.reward),jn(e.xp),j(`¡Historia completada! +${e.reward} monedas`,"success"),n.innerHTML=`
    <div class="story-play-container" style="background-image: url('${e.cover}')">
      <div class="story-overlay"></div>
      
      <div class="story-content-frame">
        <div class="story-end-card glass">
          <div class="story-end-icon">🎉</div>
          <h2>¡Fin de la Historia!</h2>
          <p class="story-text">${t.text}</p>
          <div class="reward-summary">
            <div class="reward-item">💰 <span>+${e.reward}</span></div>
            <div class="reward-item">⭐ <span>+${e.xp} XP</span></div>
          </div>
          <p class="message-muted">${t.message||""}</p>
          <button class="btn btn-primary btn-block mt-lg" id="btn-finish-story">
            Volver a Historias
          </button>
        </div>
      </div>
    </div>
  `,(s=document.getElementById("btn-finish-story"))==null||s.addEventListener("click",()=>{Po(n)})}function lE(n,e,t,s=25){let r=0;e.innerHTML="";function i(){r<n.length?(e.innerHTML+=n.charAt(r),r++,setTimeout(i,s)):t&&t()}i()}const ou=[{word:"JESUS",category:"Personaje",hint:"El Hijo de Dios, Salvador del mundo.",verse:'"Y dará a luz un hijo, y llamarás su nombre JESÚS, porque él salvará a su pueblo de sus pecados." - Mateo 1:21'},{word:"MOISES",category:"Personaje",hint:"Líder que guió al pueblo de Israel fuera de Egipto.",verse:'"Por la fe Moisés, hecho ya grande, rehusó llamarse hijo de la hija de Faraón." - Hebreos 11:24'},{word:"DAVID",category:"Personaje",hint:"Rey de Israel, conocido por vencer a Goliat y escribir Salmos.",verse:'"Hallé a David hijo de Isaí, varón conforme a mi corazón, quien hará todo lo que yo quiero." - Hechos 13:22'},{word:"SALOMON",category:"Personaje",hint:"Hijo de David, conocido por su gran sabiduría.",verse:'"Y dio Dios a Salomón sabiduría y prudencia muy grandes, y anchura de corazón." - 1 Reyes 4:29'},{word:"MANA",category:"Objeto/Alimento",hint:"El pan del cielo que Dios envió al pueblo en el desierto.",verse:'"Y la casa de Israel lo llamó Maná; y era como semilla de culantro, blanco, y su sabor como de hojuelas con miel." - Éxodo 16:31'},{word:"JERUSALEN",category:"Lugar",hint:"La ciudad santa, capital del Reino de Israel.",verse:'"Pedid por la paz de Jerusalén; sean prosperados los que te aman." - Salmos 122:6'},{word:"JORDAN",category:"Lugar",hint:"Río donde Juan el Bautista bautizó a Jesús.",verse:'"Y Jesús, después que fue bautizado, subió luego del agua; y he aquí los cielos le fueron abiertos." - Mateo 3:16'},{word:"BIBLIA",category:"Concepto",hint:"La palabra escrita de Dios (Colección de libros).",verse:'"Toda la Escritura es inspirada por Dios, y útil para enseñar, para redargüir." - 2 Timoteo 3:16'},{word:"ORACION",category:"Acción",hint:"Hablar con Dios con fe y corazón sincero.",verse:'"Orad sin cesar. Dad gracias en todo, porque esta es la voluntad de Dios." - 1 Tesalonicenses 5:17-18'},{word:"GOLIAT",category:"Personaje",hint:"El gigante filisteo de Gat que desafió a Israel.",verse:'"Salió entonces del campamento de los filisteos un paladín que se llamaba Goliat, de Gat." - 1 Samuel 17:4'},{word:"MESA",category:"Concepto",hint:'Lugar de comunión; "Aderezas ____ delante de mí".',verse:'"Aderezas mesa delante de mí en presencia de mis angustiadores; unges mi cabeza con aceite." - Salmos 23:5'},{word:"ARCA",category:"Objeto",hint:"Estructura construida por Noé para flotar en el Diluvio.",verse:'"Por la fe Noé... con temor preparó el arca en que su casa se salvase." - Hebreos 11:7'},{word:"TABERNACULO",category:"Lugar",hint:"Santuario móvil que usaba Israel en el desierto.",verse:'"Y harán un santuario para mí, y habitaré en medio de ellos." - Éxodo 25:8'},{word:"PENTATEUCO",category:"Concepto",hint:"Los primeros cinco libros de la Biblia escrito por Moisés.",verse:"Génesis, Éxodo, Levítico, Números y Deuteronomio forman la Ley."},{word:"ESPERANZA",category:"Concepto",hint:"Confianza segura en las promesas futuras de Dios.",verse:'"Y la esperanza no avergüenza; porque el amor de Dios ha sido derramado en nuestros corazones." - Romanos 5:5'},{word:"GRACIA",category:"Concepto",hint:"Favor inmerecido de Dios para la salvación.",verse:'"Porque por gracia sois salvos por medio de la fe; y esto no de vosotros." - Efesios 2:8'},{word:"ESTER",category:"Personaje",hint:"Reina judía que salvó a su pueblo de la destrucción.",verse:'"¿Y quién sabe si para esta hora has llegado al reino?" - Ester 4:14'},{word:"NOE",category:"Personaje",hint:"Construyó un arca para salvar a su familia y animales.",verse:'"Hizo así Noé; hizo conforme a todo lo que Dios le mandó." - Génesis 6:22'},{word:"MARIA",category:"Personaje",hint:"Madre de Jesús en su forma humana.",verse:'"Engrandece mi alma al Señor; y mi espíritu se regocija en Dios mi Salvador." - Lucas 1:46-47'},{word:"PABLO",category:"Personaje",hint:"Apóstol de los gentiles, escribió muchas epístolas.",verse:'"Para mí el vivir es Cristo, y el morir es ganancia." - Filipenses 1:21'},{word:"PEDRO",category:"Personaje",hint:"Pescador que llegó a ser el líder de los apóstoles.",verse:'"Tú eres el Cristo, el Hijo del Dios viviente." - Mateo 16:16'},{word:"SANSON",category:"Personaje",hint:"Juez dotado de fuerza sobrehumana por el Espíritu de Dios.",verse:'"Y el Espíritu de Jehová vino sobre él con poder." - Jueces 14:19'},{word:"JONAS",category:"Personaje",hint:"Profeta que fue tragado por un gran pez por desobedecer.",verse:'"Pero Jehová tenía preparado un gran pez que tragase a Jonás." - Jonás 1:17'},{word:"DANIEL",category:"Personaje",hint:"Profeta que sobrevivió al foso de los leones.",verse:'"Mi Dios envió su ángel, el cual cerró la boca de los leones." - Daniel 6:22'},{word:"ELIAS",category:"Personaje",hint:"Profeta arrebatado al cielo en un carro de fuego.",verse:'"Y Elías subió al cielo en un torbellino." - 2 Reyes 2:11'},{word:"BELEN",category:"Lugar",hint:"Ciudad de Judea donde nació Jesucristo.",verse:'"Y tú, Belén... de ti saldrá un guiador que apacentará a mi pueblo." - Mateo 2:6'},{word:"NAZARET",category:"Lugar",hint:"Ciudad de Galilea donde creció Jesús.",verse:'"¿De Nazaret puede salir algo bueno? Le dijo Felipe: Ven y ve." - Juan 1:46'},{word:"MILAGRO",category:"Concepto",hint:"Hecho sobrenatural que manifiesta el poder de Dios.",verse:'"Y hacían muchos milagros y señales por mano de los apóstoles." - Hechos 5:12'},{word:"PARABOLA",category:"Concepto",hint:"Narración breve que transmite una enseñanza espiritual.",verse:'"Todo esto habló Jesús por parábolas a la gente." - Mateo 13:34'},{word:"FE",category:"Concepto",hint:"La certeza de lo que se espera, la convicción de lo que no se ve.",verse:'"Es, pues, la fe la certeza de lo que se espera..." - Hebreos 11:1'},{word:"AMOR",category:"Concepto",hint:"El vínculo perfecto y el mayor mandamiento.",verse:'"Y ahora permanecen la fe, la esperanza y el amor; pero el mayor es el amor." - 1 Corintios 13:13'},{word:"PAZ",category:"Concepto",hint:'Fruto del Espíritu; "La ____ de Dios que sobrepasa todo entendimiento".',verse:'"La paz os dejo, mi paz os doy; yo no os la doy como el mundo la da." - Juan 14:27'},{word:"REDENCION",category:"Concepto",hint:"Rescate o liberación pagada por la sangre de Cristo.",verse:'"En quien tenemos redención por su sangre, el perdón de pecados." - Efesios 1:7'},{word:"SABIDURIA",category:"Concepto",hint:"Temor de Dios es el principio de la _________.",verse:'"El principio de la sabiduría es el temor de Jehová." - Proverbios 1:7'},{word:"ALELUYA",category:"Concepto",hint:'Expresión de júbilo que significa "Alabad a Dios".',verse:'"¡Aleluya! Alabad a Dios en su santuario." - Salmos 150:1'},{word:"DISCIPULO",category:"Concepto",hint:"Seguidor o aprendiz de las enseñanzas de Jesús.",verse:'"En esto conocerán todos que sois mis discípulos, si tuviereis amor." - Juan 13:35'}];function uE(n){let e=i(),t=[],s=6,r=!1;function i(){let f=JSON.parse(localStorage.getItem("hm_played_words")||"[]"),y=ou.filter(P=>!f.includes(P.word));y.length===0&&(f=[],y=[...ou]);const b=Math.floor(Math.random()*y.length),A=y[b];return f.push(A.word),localStorage.setItem("hm_played_words",JSON.stringify(f)),A}function o(){if(r){h();return}const f=e.word.toUpperCase();if(f.split("").every(b=>t.includes(b)||b===" ")){u(!0);return}if(s<=0){u(!1);return}n.innerHTML=`
      <div class="hangman-game">
        <div class="hm-header">
          <div class="hm-category">🏷️ ${e.category}</div>
        </div>

        <div class="hm-gallows">
          <svg height="180" width="140" class="gallows-svg">
            <style>
              .gallows-line { stroke: #ffffff; stroke-width: 4; fill: none; stroke-linecap: round; }
              .gallows-char { stroke: #ef233c; stroke-width: 3.5; fill: none; stroke-linecap: round; transition: opacity 0.3s ease; }
              .gallows-visible { opacity: 1 !important; visibility: visible !important; }
              .gallows-hidden { opacity: 0 !important; visibility: hidden !important; }
            </style>
            <!-- Posiciones fijas (Horca) -->
            <line x1="10" y1="170" x2="130" y2="170" class="gallows-line" /> <!-- Base -->
            <line x1="30" y1="170" x2="30" y2="10" class="gallows-line" />  <!-- Poste vertical -->
            <line x1="30" y1="10" x2="90" y2="10" class="gallows-line" />   <!-- Poste horizontal -->
            <line x1="90" y1="10" x2="90" y2="30" class="gallows-line" />   <!-- Soga -->

            <!-- Monigote (Cuerpo del Ahorcado) -->
            <!-- Cabeza -->
            <circle cx="90" cy="45" r="15" class="gallows-char ${s<=5?"gallows-visible":"gallows-hidden"}" />
            
            <!-- Cuerpo -->
            <line x1="90" y1="60" x2="90" y2="105" class="gallows-char ${s<=4?"gallows-visible":"gallows-hidden"}" />
            
            <!-- Brazo Izquierdo -->
            <line x1="90" y1="70" x2="70" y2="90" class="gallows-char ${s<=3?"gallows-visible":"gallows-hidden"}" />
            
            <!-- Brazo Derecho -->
            <line x1="90" y1="70" x2="110" y2="90" class="gallows-char ${s<=2?"gallows-visible":"gallows-hidden"}" />
            
            <!-- Pierna Izquierda -->
            <line x1="90" y1="105" x2="75" y2="140" class="gallows-char ${s<=1?"gallows-visible":"gallows-hidden"}" />
            
            <!-- Pierna Derecho -->
            <line x1="90" y1="105" x2="105" y2="140" class="gallows-char ${s<=0?"gallows-visible":"gallows-hidden"}" />
          </svg>
        </div>

        <div class="hm-hint-container">
          <p class="hm-hint">💡 Pista: <span>${e.hint}</span></p>
        </div>

        <div class="hm-word-display" id="hm-word-display">
          ${f.split("").map(b=>`
            <div class="hm-letter-box ${b===" "?"hm-space":""}">
              ${t.includes(b)||b===" "?b:"_"}
            </div>
          `).join("")}
        </div>

        <div class="hm-keyboard" id="hm-keyboard">
          ${"ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split("").map(b=>`
            <button class="btn btn-keyboard" 
                    data-letter="${b}" 
                    ${t.includes(b)?"disabled":""}>
              ${b}
            </button>
          `).join("")}
        </div>
      </div>
    `,n.querySelectorAll(".btn-keyboard").forEach(b=>{b.addEventListener("click",A=>{const P=A.target.dataset.letter;l(P)})})}function l(f){if(t.includes(f))return;t.push(f),e.word.toUpperCase().includes(f)?j("¡Correcto!","success"):(s--,j("¡Letra incorrecta!","warning")),o()}function u(f){r=!0,f&&(zn(50),jn(25)),h(f)}function h(f){var y;n.innerHTML=`
      <div class="hangman-game">
        <div class="hm-result-card glass">
          <div class="hm-result-icon">${f?"🎉":"😢"}</div>
          <h2>${f?"¡Victoria!":"¡Fin del Juego!"}</h2>
          
          <p class="hm-result-word">La palabra era: <span>${e.word}</span></p>
          
          <div class="hm-verse-box">
            <h4>📖 Contexto Bíblico:</h4>
            <p>${e.verse}</p>
          </div>

          <div class="reward-summary">
            ${f?`
              <div class="reward-item">💰 <span>+50</span></div>
              <div class="reward-item">⭐ <span>+25 XP</span></div>
            `:'<p class="text-muted">No te rindas, ¡sigue aprendiendo!</p>'}
          </div>

          <button class="btn btn-primary btn-block" id="btn-restart-hm">
            Jugar de Nuevo
          </button>
        </div>
      </div>
    `,(y=document.getElementById("btn-restart-hm"))==null||y.addEventListener("click",()=>{e=i(),t=[],s=6,r=!1,o()})}o()}function dE(n){const e=_e(),t=localStorage.getItem("bb_player_id")||A();localStorage.setItem("bb_player_id",t);let s=null,r=null,i=null,o=null,l="p1",u=10,h=null,f=!1,y={fiftyfifty:!0,freeze:!0,double:!0},b=!1;function A(){return"user_"+Math.random().toString(36).substr(2,9)}function P(){var I,_,O,q,H,X;n.innerHTML=`
      <div class="bible-battle-game">
        <div class="bb-menu-header">
          <h3>⚔️ Bible Battle</h3>
          <p class="text-secondary text-sm">Elige cómo quieres competir</p>
        </div>

        <div class="bb-modes-grid">
          <button class="btn btn-primary btn-block btn-lg" id="btn-mode-random">
             <span class="btn-icon">🆚</span>
             <div class="btn-text">
               <div class="btn-title">Partida Aleatoria</div>
               <div class="btn-desc">Emparejamiento rápido global</div>
             </div>
          </button>

          <button class="btn btn-success btn-block btn-lg" id="btn-mode-create">
             <span class="btn-icon">🏠</span>
             <div class="btn-text">
               <div class="btn-title">Crear Sala Privada</div>
               <div class="btn-desc">Obtén un código para un amigo</div>
             </div>
          </button>

          <button class="btn btn-secondary btn-block btn-lg" id="btn-mode-join">
             <span class="btn-icon">🔑</span>
             <div class="btn-text">
               <div class="btn-title">Unirse con Código</div>
               <div class="btn-desc">Ingresa el código de tu amigo</div>
             </div>
          </button>
        </div>

        <div class="bb-matchmaking-actions mt-xl">
          <button class="btn btn-outline btn-block" id="btn-open-leaderboard">🏆 Ver Clasificación</button>
          <button class="btn btn-secondary btn-block mt-sm" id="btn-back-home">🏠 Volver al Menú</button>
        </div>

        <!-- Modal Leaderboard ... -->
        <div id="bb-leaderboard-modal" class="modal-overlay" style="display:none;">
          <div class="modal-content glass">
            <span class="modal-close" id="close-leaderboard">&times;</span>
            <div class="modal-header">
              <h3>🏆 Ranking Global</h3>
            </div>
            <div class="modal-body" id="leaderboard-list">
              <p class="text-center text-muted">Cargando clasificación...</p>
            </div>
          </div>
        </div>
      </div>
    `,(I=document.getElementById("btn-mode-random"))==null||I.addEventListener("click",()=>{S(),B()}),(_=document.getElementById("btn-mode-create"))==null||_.addEventListener("click",()=>{N()}),(O=document.getElementById("btn-mode-join"))==null||O.addEventListener("click",()=>{D()}),(q=document.getElementById("btn-back-home"))==null||q.addEventListener("click",()=>{ye("home")}),(H=document.getElementById("btn-open-leaderboard"))==null||H.addEventListener("click",()=>{document.getElementById("bb-leaderboard-modal").style.display="flex",V()}),(X=document.getElementById("close-leaderboard"))==null||X.addEventListener("click",()=>{document.getElementById("bb-leaderboard-modal").style.display="none"})}function S(){var I;n.innerHTML=`
      <div class="bible-battle-game">
        <div class="radar-container">
          <div class="radar-circle"></div>
          <div class="radar-scan"></div>
          <div class="radar-avatar">${e.avatar}</div>
        </div>
        <h3 class="text-center mt-md">Buscando Oponente...</h3>
        <p class="text-muted text-center text-sm">Emparejando en la arena de fe</p>
        
        <div class="bb-matchmaking-actions mt-lg">
          <button class="btn btn-secondary btn-block" id="btn-cancel-match">Cancelar</button>
        </div>
      </div>
    `,(I=document.getElementById("btn-cancel-match"))==null||I.addEventListener("click",()=>{o&&o(),P()})}async function N(){var _,O;const I=Math.random().toString(36).substr(2,4).toUpperCase();n.innerHTML=`
      <div class="bible-battle-game">
        <div class="bb-private-room">
          <div class="bb-room-icon">🏠</div>
          <h3>Sala Privada Creada</h3>
          <p class="text-secondary text-sm">Comparte este código con tu amigo para que se una:</p>
          <div class="bb-room-code" id="room-code-display">${I}</div>
          <button class="btn btn-outline btn-sm mt-xs" id="btn-copy-code">📋 Copiar Código</button>
          
          <div class="bb-waiting-dots mt-xl">
             <div class="dot"></div><div class="dot"></div><div class="dot"></div>
          </div>
          <p class="text-muted text-sm text-center">Esperando a que tu amigo se una...</p>

          <button class="btn btn-secondary btn-block mt-xl" id="btn-cancel-room">Cancelar</button>
        </div>
      </div>
    `,(_=document.getElementById("btn-cancel-room"))==null||_.addEventListener("click",()=>{i&&i(),P()}),(O=document.getElementById("btn-copy-code"))==null||O.addEventListener("click",()=>{navigator.clipboard.writeText(I),j("¡Código copiado!","info")});try{l="p1";const q=Ve([...Ue.easy,...Ue.medium]).slice(0,5),H=await In(Je(se,"bb_matches"),{status:"waiting_friend",code:I,p1:{uid:t,name:e.name,avatar:e.avatar,score:0,currentQ:0,lastAnswered:-1},p2:null,questions:q,p1_rematch:!1,p2_rematch:!1,createdAt:Zt()});F(H.id)}catch(q){j("Error creando sala: "+q.message,"danger"),P()}}function D(){var I,_;n.innerHTML=`
      <div class="bible-battle-game">
        <div class="bb-private-room">
          <div class="bb-room-icon">🔑</div>
          <h3>Unirse a Sala</h3>
          <p class="text-secondary text-sm">Ingresa el código de 4 dígitos de tu amigo:</p>
          
          <input type="text" id="input-room-code" class="input-code mt-md" placeholder="CÓDIGO" maxlength="4" style="text-transform: uppercase;">

          <button class="btn btn-primary btn-block mt-lg" id="btn-confirm-join">Unirse a la Batalla</button>
          <button class="btn btn-secondary btn-block mt-sm" id="btn-cancel-join">Cancelar</button>
        </div>
      </div>
    `,(I=document.getElementById("btn-cancel-join"))==null||I.addEventListener("click",()=>{P()}),(_=document.getElementById("btn-confirm-join"))==null||_.addEventListener("click",async()=>{const O=document.getElementById("input-room-code").value.trim().toUpperCase();if(O.length<4){j("Ingresa un código válido de 4 letras.","warning");return}try{const q=gr(Je(se,"bb_matches"),vr("status","==","waiting_friend"),vr("code","==",O)),H=await _r(q);if(H.empty){j("Sala no encontrada o llena.","warning");return}const X=H.docs[0];l="p2",await we(ue(se,"bb_matches",X.id),{status:"playing",p2:{uid:t,name:e.name,avatar:e.avatar,score:0,currentQ:0,lastAnswered:-1}}),F(X.id)}catch(q){j("Error al unirse: "+q.message,"danger")}})}async function V(){const I=document.getElementById("leaderboard-list");if(I)try{const _=gr(Je(se,"bb_users"),Py("leaguePoints","desc"),Fl(10)),O=await _r(_);if(O.empty){I.innerHTML='<p class="text-center text-muted">Aún no hay clasificados. ¡Sé el primero!</p>';return}I.innerHTML=`
        <div class="ranking-list">
          ${O.docs.map((q,H)=>{const X=q.data();return`
              <div class="ranking-item ${X.uid===t?"me":""}">
                <div class="rank-pos">${H+1}</div>
                <div class="rank-avatar">${X.avatar||"👤"}</div>
                <div class="rank-info">
                  <div class="rank-name">${X.name}</div>
                  <div class="rank-league">${X.league||"Pescador"}</div>
                </div>
                <div class="rank-points">${X.leaguePoints||0} PL</div>
              </div>
            `}).join("")}
        </div>
      `}catch(_){console.error(_),I.innerHTML='<p class="text-center text-danger">Error cargando ranking.</p>'}}async function B(){const I=Je(se,"bb_queue"),_=gr(I,vr("status","==","waiting"),Fl(10));try{const q=(await _r(_)).docs.find(H=>H.data().uid!==t);if(q){const H=q.data();l="p2";const X=Ve([...Ue.easy,...Ue.medium]).slice(0,5),ie=await In(Je(se,"bb_matches"),{status:"starting",p1:{uid:H.uid,name:H.name,avatar:H.avatar,score:0,currentQ:0,lastAnswered:-1},p2:{uid:t,name:e.name,avatar:e.avatar,score:0,currentQ:0,lastAnswered:-1},questions:X,p1_rematch:!1,p2_rematch:!1,startTime:Zt()});await we(ue(se,"bb_queue",q.id),{status:"matched",matchId:ie.id}),F(ie.id)}else{l="p1";const H=await In(Je(se,"bb_queue"),{uid:t,name:e.name,avatar:e.avatar,status:"waiting",createdAt:Zt()});o=ys(ue(se,"bb_queue",H.id),X=>{if(X.exists()&&X.data().status==="matched"){const ie=X.data().matchId;o(),Dy(H),F(ie)}})}}catch(O){console.error("Matchmaking error:",O),j("Error de conexión: "+O.message,"danger")}}function F(I){s=I,i=ys(ue(se,"bb_matches",I),_=>{if(!_.exists())return;r=_.data();const O=r[l],H=r[l==="p1"?"p2":"p1"];if(r.p1_rematch&&r.p2_rematch){l==="p1"&&x();return}r.status==="starting"?(y={fiftyfifty:!0,freeze:!0,double:!0},b=!1,f=!1,clearInterval(h),l==="p1"&&M("playing")):r.status==="playing"?T():r.status==="ended"||O.currentQ>=5&&H&&H.currentQ>=5?E():T()})}async function x(){const I=Ve([...Ue.easy,...Ue.medium]).slice(0,5);await we(ue(se,"bb_matches",s),{status:"starting","p1.score":0,"p1.currentQ":0,"p1.lastAnswered":-1,"p2.score":0,"p2.currentQ":0,"p2.lastAnswered":-1,questions:I,p1_rematch:!1,p2_rematch:!1})}async function M(I){s&&await we(ue(se,"bb_matches",s),{status:I})}function T(){if(!r)return;const I=r[l],O=r[l==="p1"?"p2":"p1"],q=I.currentQ;if(q>=5||r.status==="ended"){clearInterval(h),E();return}const H=r.questions[q];n.innerHTML=`
      <div class="bible-battle-game">
        <div class="bb-hud">
          <div class="bb-player">
            <div class="bb-avatar">${I.avatar}</div>
            <div class="bb-name">Tú</div>
            <div class="bb-score">${I.score} pts</div>
          </div>
          <div class="bb-vs">VS</div>
          <div class="bb-player">
            <div class="bb-avatar">${O.avatar}</div>
            <div class="bb-name">${O.name}</div>
            <div class="bb-score">${O.score} pts</div>
          </div>
        </div>

        <div class="bb-timer-bar">
          <div class="timer-fill" style="width: ${u/10*100}%"></div>
        </div>

        <div class="bb-question-box card">
          <div class="bb-q-header">Pregunta ${q+1}/5</div>
          <h3 class="bb-question">${H.q}</h3>
        </div>

        <div class="bb-options-grid" id="options-grid">
          ${H.options.map((X,ie)=>`
            <button class="btn btn-option" data-ans="${ie}">${X}</button>
          `).join("")}
        </div>

        <div class="bb-powerups">
          <button class="btn btn-powerup ${y.fiftyfifty?"":"disabled"}" id="p-5050" ${y.fiftyfifty?"":"disabled"}>✂️ 50/50</button>
          <button class="btn btn-powerup ${y.freeze?"":"disabled"}" id="p-freeze" ${y.freeze?"":"disabled"}>❄️ Hielo</button>
          <button class="btn btn-powerup ${y.double?"":"disabled"}" id="p-double" ${y.double?"":"disabled"}>🔥 X2</button>
        </div>
      </div>
    `,f=!1,v(),m(H.answer)}function v(){clearInterval(h),u=10;const I=n.querySelector(".timer-fill");h=setInterval(async()=>{u-=.1,I&&(I.style.width=`${u/10*100}%`),u<=0&&(clearInterval(h),f||g(-1,-1))},100)}function m(I){var _,O,q;n.querySelectorAll(".btn-option").forEach(H=>{H.addEventListener("click",X=>{if(f)return;f=!0;const ie=parseInt(H.dataset.ans);g(ie,I)})}),(_=document.getElementById("p-5050"))==null||_.addEventListener("click",()=>{if(!y.fiftyfifty||f)return;y.fiftyfifty=!1;let X=Array.from(n.querySelectorAll(".btn-option")).filter(ie=>parseInt(ie.dataset.ans)!==I);Ve(X).slice(0,2).forEach(ie=>ie.style.visibility="hidden"),document.getElementById("p-5050").classList.add("disabled")}),(O=document.getElementById("p-double"))==null||O.addEventListener("click",()=>{!y.double||f||(y.double=!1,b=!0,document.getElementById("p-double").classList.add("disabled"),j("¡Próximo acierto duplicado!","info"))}),(q=document.getElementById("p-freeze"))==null||q.addEventListener("click",()=>{y.freeze&&(y.freeze=!1,document.getElementById("p-freeze").classList.add("disabled"),j("❄️ Efecto visual de Hielo","info"))})}async function g(I,_){clearInterval(h);let O=0;I===_?(O=Math.floor(u*10*(b?2:1)),j("¡Correcto!","success")):j("¡Incorrecto!","warning"),b=!1;const q=r[l],H={};H[`${l}.score`]=q.score+O,H[`${l}.currentQ`]=q.currentQ+1,H[`${l}.lastAnswered`]=I,await we(ue(se,"bb_matches",s),H)}function E(){var Ge,zs;h&&clearInterval(h);const I=r[l],_=l==="p1"?"p2":"p1",O=r[_],q=I.score>O.score,H=I.score===O.score,X=r[`${l}_rematch`]||!1,ie=r[`${_}_rematch`]||!1;(!window._bb_reward_given_for_match||window._bb_reward_given_for_match!==s)&&(window._bb_reward_given_for_match=s,q?(zn(100),jn(50),iu(25)):H||iu(-10),Io()),n.innerHTML=`
      <div class="game-results">
        <div class="results-emoji">${q?"🏆":H?"🤝":"😢"}</div>
        <h2 class="results-title">${q?"¡Victoria!":H?"¡Empate!":"¡Derrota!"}</h2>
        
        <div class="results-score-circle">
          <span class="results-score-value">${I.score}</span>
          <span class="results-score-label">Tus puntos</span>
        </div>

        <div class="results-stats">
          <p class="text-secondary">Rival: <b>${O.name}</b> (${O.score} pts)</p>
          <div class="bb-league-badge mt-sm">${e.league}</div>
          ${ie?'<div class="badge mt-sm badge-warning">🔥 ¡El oponente quiere Revancha!</div>':""}
        </div>

        <div class="results-rewards">
          ${q?'<div class="reward-item">🪙 +100 monedas</div><div class="reward-item">⭐ +50 XP</div><div class="reward-item">🏆 +25 PL</div>':H?'<p class="text-sm">¡Buen combate!</p>':'<div class="reward-item">❌ -10 PL</div>'}
        </div>

        <div class="results-actions">
          <button class="btn btn-primary btn-block" id="btn-play-again-bb" ${X?"disabled":""}>
            ${X?"⌛ Esperando respuesta...":ie?"🔥 Aceptar Revancha":"🔄 Pedir Revancha"}
          </button>
          <button class="btn btn-secondary btn-block" id="btn-go-home">🏠 Volver al Menú</button>
        </div>
      </div>
    `,(Ge=document.getElementById("btn-play-again-bb"))==null||Ge.addEventListener("click",async()=>{if(X)return;const Hn={};Hn[`${l}_rematch`]=!0,await we(ue(se,"bb_matches",s),Hn),j("Solicitud de revancha enviada","info")}),(zs=document.getElementById("btn-go-home"))==null||zs.addEventListener("click",()=>{i&&i(),ye("home")})}P()}function hE(n){let e=0,t=3,s=1,r=0,i=!1,o=null,l=[],u=null;const h=["#ef233c","#4361ee","#2ec4b6","#ffb703","#9b5de5"],f=["bomb","gold","freeze"];function y(){b(),A()}function b(){var m;const x=[...Ue.easy,...Ue.medium];o=x[Math.floor(Math.random()*x.length)],l=[];const M=Ve([...o.options]),T=((m=n.querySelector(".bbp-game-arena"))==null?void 0:m.clientWidth)||400,v=o.options[o.answer];M.forEach((g,E)=>{const I=g===v,_=Math.random()<.2;let O="normal";_&&(O=f[Math.floor(Math.random()*f.length)]),l.push({id:"bal_"+Date.now()+"_"+E,text:g,isCorrect:I,type:O,x:E*(T/M.length)+20,y:-120,speed:(1.2+Math.random()*.8)*s,color:O==="bomb"?"#2b2b2b":O==="gold"?"#ffd700":O==="freeze"?"#00f5d4":h[E%h.length],size:70+Math.random()*10})}),l.some(g=>g.isCorrect)||(l[0].isCorrect=!0),V()}function A(x){if(i)return;const M=n.querySelector(".bbp-game-arena");if(!M){u=requestAnimationFrame(A);return}const T=M.clientHeight;for(let v=l.length-1;v>=0;v--){const m=l[v];m.y+=m.speed;let g=document.getElementById(m.id);g||(g=document.createElement("div"),g.id=m.id,g.className=`balloon ${m.type}`,g.style.backgroundColor=m.color,g.style.width=m.size+"px",g.style.height=m.size*1.2+"px",g.innerHTML=`
          <div class="balloon-content">${m.text}</div>
          <div class="balloon-string"></div>
          ${m.type!=="normal"?`<div class="balloon-badge">${m.type==="bomb"?"💣":m.type==="gold"?"⭐":"❄️"}</div>`:""}
        `,g.addEventListener("click",()=>P(m)),M.appendChild(g)),g.style.left=m.x+"px",g.style.bottom=m.y+"px",T>100&&m.y>T+150&&(g.remove(),l.splice(v,1),m.isCorrect&&m.type!=="bomb"&&(t--,j("¡Se escapó la respuesta!","warning"),D(),i||b()))}i||(u=requestAnimationFrame(A))}function P(x){if(i)return;const M=document.getElementById(x.id);if(M&&(N(x.x+x.size/2,S()-x.y-x.size/2,x.color),M.remove()),l=l.filter(T=>T.id!==x.id),x.type==="bomb"){t--,j("¡BOOM! Globo Bomba 💣","danger"),D();return}if(x.isCorrect){let T=10;x.type==="gold"&&(T=20),e+=T,r++,j(x.type==="gold"?"¡Doble Puntos! 🌟":"¡Correcto! 🎉","success"),s=1+r*.05,x.type==="freeze"&&(s=.5,j("¡Tiempo Congelado! ❄️","info"),setTimeout(()=>{i||(s=1+r*.05)},4e3)),b()}else t--,j("¡Incorrecto! 💔","warning"),D();B()}function S(){var x;return((x=n.querySelector(".bbp-game-arena"))==null?void 0:x.clientHeight)||400}function N(x,M,T){const v=n.querySelector(".bbp-game-arena");if(v)for(let m=0;m<8;m++){const g=document.createElement("div");g.className="bbp-particle",g.style.backgroundColor=T,g.style.left=x+"px",g.style.top=M+"px";const E=Math.random()*Math.PI*2,I=2+Math.random()*4;g.style.setProperty("--dx",Math.cos(E)*I*20+"px"),g.style.setProperty("--dy",Math.sin(E)*I*20+"px"),v.appendChild(g),setTimeout(()=>g.remove(),600)}}function D(){t<=0?(i=!0,cancelAnimationFrame(u),zn(Math.floor(e/2)),jn(e),F()):B()}function V(){n.innerHTML=`
      <div class="bbp-game">
        <div class="bbp-hud">
          <div class="bbp-stat">❤️ Vidas: <span>${t}</span></div>
          <div class="bbp-stat">🏆 Puntos: <span>${e}</span></div>
          <div class="bbp-stat">⚡ Velocidad: <span>x${s.toFixed(1)}</span></div>
        </div>

        <div class="bbp-question-box glass">
          <p class="bbp-question">${o?o.q:"Cargando..."}</p>
        </div>

        <div class="bbp-game-arena" id="bbp-game-arena">
          <!-- Globos se inyectan aquí con JS -->
        </div>
      </div>
    `}function B(){const x=n.querySelector(".bbp-hud");x&&(x.innerHTML=`
            <div class="bbp-stat">❤️ Vidas: <span>${t}</span></div>
            <div class="bbp-stat">🏆 Puntos: <span>${e}</span></div>
            <div class="bbp-stat">⚡ Velocidad: <span>x${s.toFixed(1)}</span></div>
          `)}function F(){var x,M;n.innerHTML=`
      <div class="bbp-game">
        <div class="hm-result-card glass">
          <div class="hm-result-icon">🎈</div>
          <h2>¡Partida Terminada!</h2>
          <p class="text-center text-lg">Puntuación: <strong>${e} puntos</strong></p>
          
          <div class="reward-summary mt-md">
            <div class="reward-item">💰 <span>+${Math.floor(e/2)}</span></div>
            <div class="reward-item">⭐ <span>+${e} XP</span></div>
          </div>

          <button class="btn btn-primary btn-block mt-lg" id="btn-restart-bbp">
            Jugar de Nuevo
          </button>
          <button class="btn btn-secondary btn-block mt-sm" id="btn-home-bbp">
            Volver
          </button>
        </div>
      </div>
    `,(x=document.getElementById("btn-restart-bbp"))==null||x.addEventListener("click",()=>{e=0,t=3,s=1,r=0,i=!1,y()}),(M=document.getElementById("btn-home-bbp"))==null||M.addEventListener("click",()=>{ye("home")})}y()}function fE(n){const e=_e(),t=localStorage.getItem("bb_player_id");let s=null,r=[],i=null;function o(){l()}function l(){const m=Je(se,"bsb_teams");i=ys(m,g=>{r=g.docs.map(E=>({id:E.id,...E.data()})),s=r.find(E=>E.members.some(I=>I.uid===t))||null,s?b():u()})}function u(){n.innerHTML=`
      <div class="bsb-teams-lobby">
        <div class="bb-menu-header">
          <h3>👥 Equipos de Béisbol</h3>
          <p class="text-secondary text-sm">Crea o únete a un equipo para competir</p>
        </div>

        <div class="lobby-actions p-md">
          <button class="btn btn-primary btn-block" id="btn-create-team">➕ Crear Nuevo Equipo</button>
        </div>

        <div class="teams-list-container">
          <h4>Equipos Disponibles (${r.length})</h4>
          <div class="teams-grid">
            ${r.length===0?'<p class="text-muted text-center p-md">No hay equipos creados. ¡Sé el primero!</p>':""}
            ${r.map(m=>`
              <div class="team-card glass">
                <div class="team-info">
                  <span class="team-name">${m.name}</span>
                  <span class="team-count">${m.members.length} miembros</span>
                </div>
                <button class="btn btn-sm btn-outline btn-join-team" data-id="${m.id}">Unirse</button>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    `,h()}function h(){var m;(m=document.getElementById("btn-create-team"))==null||m.addEventListener("click",f),n.querySelectorAll(".btn-join-team").forEach(g=>{g.addEventListener("click",()=>y(g.dataset.id))})}async function f(){const m=prompt("Ingresa el nombre de tu equipo:");if(!(!m||!m.trim()))try{if(!t){j("Inicia sesión para crear un equipo","warning");return}await In(Je(se,"bsb_teams"),{name:m.trim(),admin:t,members:[{uid:t,name:e.name,avatar:e.avatar}],createdAt:Zt()}),j(`Equipo "${m}" creado ✅`,"success")}catch{j("Error al crear equipo ❌","error")}}async function y(m){if(!t){j("Inicia sesión para unirte","warning");return}const g=r.find(E=>E.id===m);if(g){if(g.members.length>=9){j("Equipo lleno (máx 9 jugadores)","warning");return}try{const E=[...g.members,{uid:t,name:e.name,avatar:e.avatar}];await we(ue(se,"bsb_teams",m),{members:E}),j("Te has unido al equipo ✅","success")}catch{j("Error al unirse ❌","error")}}}function b(){const m=s.admin===t;n.innerHTML=`
      <div class="bsb-team-dashboard">
        <div class="team-header glass">
          <div class="team-icon">🛡️</div>
          <h2>${s.name}</h2>
          <span class="badge">${s.members.length} Miembros</span>
        </div>

        <div class="team-members-list mt-md">
          <h4>📋 Plantilla</h4>
          <div class="members-grid">
            ${s.members.map((g,E)=>`
              <div class="member-item">
                <span class="member-index">${E+1}.</span>
                <span class="member-avatar">${g.avatar}</span>
                <span class="member-name">${g.name} ${g.uid===t?"(Tú)":""}</span>
              </div>
            `).join("")}
          </div>
        </div>

        <div class="team-actions mt-lg">
          ${s.currentMatchId?`
            <button class="btn btn-warning btn-block" id="btn-join-match">⚔️ Reincorporarse al Partido</button>
          `:`
            ${m?'<button class="btn btn-success btn-block" id="btn-search-match">⚾ Buscar Partido</button>':'<p class="text-sm text-center text-muted">Esperando que el líder busque partido...</p>'}
          `}
          <button class="btn btn-danger btn-block mt-sm" id="btn-leave-team">🚪 Salir del Equipo</button>
        </div>
      </div>
    `,A(),s.currentMatchId&&N(s.currentMatchId)}function A(){var m,g,E;(m=document.getElementById("btn-leave-team"))==null||m.addEventListener("click",v),(g=document.getElementById("btn-search-match"))==null||g.addEventListener("click",P),(E=document.getElementById("btn-join-match"))==null||E.addEventListener("click",()=>{N(s.currentMatchId)})}async function P(){if(s){j("Buscando oponentes...","info");try{const m=Je(se,"bsb_team_queue"),g=gr(m,vr("status","==","waiting")),I=(await _r(g)).docs.find(_=>_.data().teamId!==s.id);if(I){const _=I.data();await we(ue(se,"bsb_team_queue",I.id),{status:"matched"});const O=await In(Je(se,"bsb_matches"),{status:"playing",teamA:{id:s.id,name:s.name,lineup:s.members.map(q=>q.uid)},teamB:{id:_.teamId,name:_.teamName,lineup:_.lineup},score:{A:0,B:0},inning:1,halfInning:"top",battingIndexA:0,battingIndexB:0,outs:0,bases:[!1,!1,!1],currentQIndex:0,createdAt:Zt()});await we(ue(se,"bsb_teams",s.id),{currentMatchId:O.id}),await we(ue(se,"bsb_teams",_.teamId),{currentMatchId:O.id}),N(O.id)}else{const _=await In(Je(se,"bsb_team_queue"),{teamId:s.id,teamName:s.name,lineup:s.members.map(q=>q.uid),status:"waiting",createdAt:Zt()}),O=ys(ue(se,"bsb_team_queue",_.id),async q=>{q.exists()&&q.data().status==="matched"&&(O(),j("¡Partido Encontrado!","success"))})}}catch(m){console.error(m),j("Error de conexión con la arena","danger")}}}let S=null;function N(m){i&&i(),ys(ue(se,"bsb_matches",m),g=>{g.exists()&&(S=g.data(),D())})}function D(){if(!S)return;const m=S.halfInning==="top"?"teamA":"teamB",g=S[m],E=g.lineup,I=S.halfInning==="top"?S.battingIndexA:S.battingIndexB,_=E[I],O=_===t,q=S.bases||[!1,!1,!1],H=r.find(ie=>ie.id===g.id);let X="Bateador";if(H){const ie=H.members.find(Ge=>Ge.uid===_);ie&&(X=ie.name)}n.innerHTML=`
      <div class="bsb-game">
        <div class="bsb-hud glass">
          <div class="bsb-score-board">
            <div class="bsb-team">
              <span class="bsb-team-name">${S.teamA.name}</span>
              <span class="bsb-team-runs">${S.score.A}</span>
            </div>
            <div class="bsb-divider">vs</div>
            <div class="bsb-team">
              <span class="bsb-team-name">${S.teamB.name}</span>
              <span class="bsb-team-runs">${S.score.B}</span>
            </div>
          </div>
          <div class="bsb-game-stats">
            <div>Entrada: <span class="badge">${S.inning}${S.halfInning==="top"?"▲":"▼"}</span></div>
            <div>Outs: <span class="bsb-outs">${"🔴".repeat(S.outs)}${"⚪".repeat(3-S.outs)}</span></div>
          </div>
        </div>

        <div class="bsb-field-container">
          <div class="bsb-diamond">
            <div class="bsb-base edge-top ${q[1]?"occupied":""}">2B</div>
            <div class="bsb-base edge-left ${q[2]?"occupied":""}">3B</div>
            <div class="bsb-base edge-right ${q[0]?"occupied":""}">1B</div>
            <div class="bsb-base edge-bottom batting">🏠</div>
          </div>
        </div>

        <div class="bsb-controls">
           ${O?`
             ${S.status==="playing"?`
               <div class="text-center mb-sm"><span class="badge badge-warning">🔥 ¡ES TU TURNO DE BATEAR!</span></div>
               <button class="btn btn-primary btn-lg" id="bsb-team-spin-btn">⚾ GIRAR RULETA</button>
             `:'<p class="text-secondary text-sm">Resuelve la pregunta en el panel...</p>'}
           `:`
             <div class="bsb-cpu-turn glass">
               <p>Bateando: <b>${X}</b></p>
               <div class="spinner"></div>
             </div>
           `}
        </div>

        <!-- MODAL DE PREGUNTA SINCRONIZADO -->
        <div class="bsb-question-modal ${S.status==="batting_question"?"visible":""}">
          ${S.currentQuestion?`
            <div class="bsb-modal-content glass">
              <div class="bsb-modal-header">
                <span class="badge diff-${S.currentPlayType}">${S.currentPlayType}</span>
                <p class="text-muted text-xs mt-xs">${O?"📌 ¡Responde tú!":`📺 Viendo a ${X}...`}</p>
              </div>
              <h3 class="mt-sm">${S.currentQuestion.q}</h3>
              <div class="bsb-options">
                ${S.currentQuestion.options.map((ie,Ge)=>`
                  <button class="bsb-opt-btn" ${O?`onclick="handleTeamAnswer(${Ge})"`:"disabled"}>${ie}</button>
                `).join("")}
              </div>
            </div>
          `:""}
        </div>
      </div>
    `,V(O)}function V(m){var g;m&&((g=document.getElementById("bsb-team-spin-btn"))==null||g.addEventListener("click",B)),window.handleTeamAnswer=E=>{if(!S||!S.currentQuestion)return;const I=E===S.currentQuestion.answer;F(I)}}async function B(){const m=[{type:"Hit",diff:"easy"},{type:"Doble",diff:"medium"},{type:"Triple",diff:"hard"},{type:"HomeRun",diff:"hard"}],g=m[Math.floor(Math.random()*m.length)],E=Ue[g.diff],I=E[Math.floor(Math.random()*E.length)];await we(ue(se,"bsb_matches",s.currentMatchId),{currentPlayType:g.type,currentQuestion:{q:I.q,options:I.options,answer:I.answer},status:"batting_question"})}async function F(m){if(!(!s||!s.currentMatchId))if(m)j(`¡Excelente! Conectas un ${S.currentPlayType}`,"success"),await x(S.currentPlayType);else{j("¡Fallo! Out registrado 🔴","error");const g=S.outs+1;await we(ue(se,"bsb_matches",s.currentMatchId),{outs:g,status:"playing"}),g>=3?await T():await M()}}async function x(m){let g=1;m==="Doble"&&(g=2),m==="Triple"&&(g=3),m==="HomeRun"&&(g=4);let E=0,I=[...S.bases||[!1,!1,!1]];for(let q=0;q<g;q++)I[2]&&(E++,I[2]=!1),I[1]&&(I[2]=!0,I[1]=!1),I[0]&&(I[1]=!0,I[0]=!1);g===4?E++:I[g-1]=!0;const _=S.halfInning==="top"?"A":"B",O={...S.score};O[_]+=E,await we(ue(se,"bsb_matches",s.currentMatchId),{bases:I,score:O,status:"playing"}),E>0&&j(`⚾ ¡Anotación! +${E} carrera(s)`,"success"),await M()}async function M(){const m=S.halfInning==="top",g=S[m?"teamA":"teamB"];let E=(m?S.battingIndexA:S.battingIndexB)+1;E>=g.lineup.length&&(E=0);const I={};I[m?"battingIndexA":"battingIndexB"]=E,await we(ue(se,"bsb_matches",s.currentMatchId),I)}async function T(){const m=S.halfInning==="top",g=m?"bottom":"top",E=m?S.inning:S.inning+1;if(!m&&E>3){await we(ue(se,"bsb_matches",s.currentMatchId),{status:"ended"});return}await we(ue(se,"bsb_matches",s.currentMatchId),{halfInning:g,inning:E,outs:0,bases:[!1,!1,!1],status:"playing"}),j("¡Inning cambiado! 🔄","info")}async function v(){if(s)try{const m=s.members.filter(g=>g.uid!==t);await we(ue(se,"bsb_teams",s.id),{members:m}),j("Has dejado el equipo 🚪","info")}catch{j("Error al salir ❌","error")}}o()}function mE(n){let e={away:0,home:0},t=1,s="top",r=0,i=[!1,!1,!1],o=!1,l=!1,u=null,h=null;const f=3,y=[{label:"Hit (Sencillo)",type:"Hit",deg:0,diff:"easy"},{label:"Doble",type:"Doble",deg:90,diff:"medium"},{label:"Triple",type:"Triple",deg:180,diff:"hard"},{label:"Home Run",type:"HomeRun",deg:270,diff:"hard"}];function b(){n.innerHTML=`
      <div class="bsb-game">
        <!-- MARCADOR -->
        <div class="bsb-hud glass">
          <div class="bsb-score-board">
            <div class="bsb-team">
              <span class="bsb-team-name">VIS (Tú)</span>
              <span class="bsb-team-runs">${e.away}</span>
            </div>
            <div class="bsb-divider">vs</div>
            <div class="bsb-team">
              <span class="bsb-team-name">HOME (IA)</span>
              <span class="bsb-team-runs">${e.home}</span>
            </div>
          </div>
          <div class="bsb-game-stats">
            <div>Entrada: <span class="badge">${t}${s==="top"?"▲":"▼"}</span></div>
            <div>Outs: <span class="bsb-outs">${"🔴".repeat(r)}${"⚪".repeat(3-r)}</span></div>
          </div>
        </div>

        <!-- CAMPO DE JUEGO (DIAMANTE) -->
        <div class="bsb-field-container">
          <div class="bsb-diamond">
            <div class="bsb-base edge-top ${i[1]?"occupied":""}" id="base-2">2B</div>
            <div class="bsb-base edge-left ${i[2]?"occupied":""}" id="base-3">3B</div>
            <div class="bsb-base edge-right ${i[0]?"occupied":""}" id="base-1">1B</div>
            <div class="bsb-base edge-bottom batting" id="base-home">🏠</div>
            
            <div class="bsb-pitcher-area">
               <div class="bsb-ball-anim" id="bsb-ball"></div>
            </div>
          </div>
        </div>

        <!-- CONTROLES / RULETA -->
        <div class="bsb-controls">
          ${s==="top"?`
            <div class="bsb-roulette-container">
              <div class="bsb-wheel" id="bsb-wheel">
                <div class="bsb-slice red">Hit</div>
                <div class="bsb-slice blue">Doble</div>
                <div class="bsb-slice green">Triple</div>
                <div class="bsb-slice gold">HR</div>
              </div>
              <div class="bsb-wheel-pointer">▼</div>
            </div>
            <button class="btn btn-primary btn-lg" id="bsb-spin-btn" ${l?"disabled":""}>
              ${l?"GIRANDO...":"⚾ GIRAR RULETA"}
            </button>
          `:`
            <div class="bsb-cpu-turn glass">
              <p>🤖 Turno de la IA para batear...</p>
              <div class="spinner"></div>
            </div>
          `}
        </div>

        <!-- MODAL DE PREGUNTA -->
        <div class="bsb-question-modal ${u?"visible":""}">
          ${u?`
            <div class="bsb-modal-content glass">
              <div class="bsb-modal-header">
                <span class="badge diff-${h}">${h}</span>
                <p>Responde correctamente para avanzar</p>
              </div>
              <h3>${u.q}</h3>
              <div class="bsb-options">
                ${u.options.map((T,v)=>`
                  <button class="bsb-opt-btn" onclick="handleBaseballAnswer(${v})">${T}</button>
                `).join("")}
              </div>
            </div>
          `:""}
        </div>
      </div>
    `,A()}function A(){const T=n.querySelector("#bsb-spin-btn");T&&T.addEventListener("click",P),window.handleBaseballAnswer=v=>{const m=v===u.answer;N(m)}}function P(){if(l)return;l=!0,b();const T=n.querySelector("#bsb-wheel"),v=y[Math.floor(Math.random()*y.length)];h=v.type;const m=2880,g=Math.floor(Math.random()*50)-25,E=m+v.deg+g;T&&(T.offsetHeight,requestAnimationFrame(()=>{T&&(T.style.transform=`rotate(-${E}deg)`)})),setTimeout(()=>{l=!1,S(v.diff)},3200)}function S(T){const v=Ue[T]||Ue.easy;u=v[Math.floor(Math.random()*v.length)],b()}function N(T){u=null,T?(j(`¡Excelente! Conectas un ${h}`,"success"),D(h)):(j("¡Fallo! Out registrado 🔴","error"),r++,V()),b()}function D(T){let v=1;T==="Doble"&&(v=2),T==="Triple"&&(v=3),T==="HomeRun"&&(v=4);let m=0;for(let g=0;g<v;g++)i[2]&&(m++,i[2]=!1),i[1]&&(i[2]=!0,i[1]=!1),i[0]&&(i[1]=!0,i[0]=!1);v===4?m++:i[v-1]=!0,m>0&&(e[s==="top"?"away":"home"]+=m,j(`⚾ ¡Anotación! +${m} carrera(s)`,"success"))}function V(){r>=3&&(j("¡Tres Outs! Cambio de lado 🔄","info"),r=0,i=[!1,!1,!1],s==="top"?(s="bottom",setTimeout(B,1500)):(s="top",t++,F()))}function B(){if(o||s==="top")return;const T=y[Math.floor(Math.random()*y.length)],v=Math.random()<.6;setTimeout(()=>{v?(j(`La IA conecta un ${T.type}`,"warning"),D(T.type)):(j("¡La IA falla! Out","info"),r++),b(),r<3?setTimeout(B,2e3):(V(),b())},2e3)}function F(){var T;if(t>f){o=!0;let v=e.away>e.home?"¡Has ganado el Partido! 🎉":e.away<e.home?"La IA ha ganado 🤖":"¡Empate! 🤝";e.away>e.home&&(jn(50),zn(30)),n.innerHTML=`
        <div class="bsb-game-over glass">
          <h2>⚾ JUEGO TERMINADO ⚾</h2>
          <h3>${v}</h3>
          <div class="bsb-final-score">
            <div>Tú: ${e.away}</div>
            <div>IA: ${e.home}</div>
          </div>
          <button class="btn btn-primary" id="bsb-restart">Jugar de Nuevo</button>
        </div>
      `,(T=n.querySelector("#bsb-restart"))==null||T.addEventListener("click",()=>{e={away:0,home:0},t=1,s="top",r=0,i=[!1,!1,!1],o=!1,b()})}}function x(){M()}function M(){var T,v;n.innerHTML=`
      <div class="bsb-mode-selection">
        <div class="bb-menu-header text-center">
          <h3>⚾ Béisbol Cristiano</h3>
          <p class="text-secondary text-sm">Selecciona cómo deseas jugar</p>
        </div>
        
        <div class="bb-modes-grid mt-xl">
          <button class="btn btn-primary btn-block btn-lg" id="btn-mode-solo">
             <span class="btn-icon">🧑‍💻</span>
             <div class="btn-text">
               <div class="btn-title">Modo Solitario</div>
               <div class="btn-desc">Juega contra la IA y entrena</div>
             </div>
          </button>

          <button class="btn btn-success btn-block btn-lg mt-sm" id="btn-mode-teams">
             <span class="btn-icon">👥</span>
             <div class="btn-text">
               <div class="btn-title">Modo Equipos</div>
               <div class="btn-desc">Crea o únete a un equipo ppa participar</div>
             </div>
          </button>
        </div>
      </div>
    `,(T=document.getElementById("btn-mode-solo"))==null||T.addEventListener("click",()=>{b()}),(v=document.getElementById("btn-mode-teams"))==null||v.addEventListener("click",()=>{fE(n)})}x()}ct({id:"trivia",name:"Trivia Bíblica",icon:"❓",description:"Pon a prueba tu conocimiento bíblico",difficulty:"easy",render:tE});ct({id:"characters",name:"Adivina el Personaje",icon:"🕵️",description:"Descubre quién es con las pistas",difficulty:"medium",render:nE});ct({id:"verse-complete",name:"Completa el Versículo",icon:"📖",description:"Llena las palabras que faltan",difficulty:"medium",render:sE});ct({id:"word-search",name:"Sopa de Letras",icon:"🔤",description:"Encuentra palabras bíblicas",difficulty:"easy",render:Gh});ct({id:"memory",name:"Memoria Bíblica",icon:"🃏",description:"Encuentra los pares bíblicos",difficulty:"easy",render:iE});ct({id:"stories",name:"Relatos de Fe",icon:"📜",description:"Historias interactivas con elecciones",difficulty:"media",render:aE});ct({id:"hangman",name:"Ahorcado Bíblico",icon:"🪧",description:"Adivina la palabra antes de agotar tus vidas",difficulty:"normal",render:uE});ct({id:"bible-battle",name:"Bible Battle 1v1",icon:"⚔️",description:"Trivia competitiva 1vs1 en tiempo real",difficulty:"alta",render:dE});ct({id:"balloon-pop",name:"Bible Balloon Pop",icon:"🎈",description:"Explotar globos con respuestas correctas",difficulty:"fácil",render:hE});ct({id:"baseball",name:"Béisbol Cristiano",icon:"⚾",description:"Gira la ruleta y responde preguntas bíblicas para correr las bases y anotar carreras.",difficulty:"Media",render:mE});dn("home",n=>Hb(n));dn("verse",n=>Jb(n));dn("profile",n=>Ia(n));dn("achievements",n=>Yb(n));dn("settings",n=>Xb(n));dn("ranking",n=>Zb(n));dn("game",(n,e)=>{const t=qh(e.gameId);if(t&&t.render)return t.render(n);n.innerHTML='<div class="empty-state"><p>Juego no encontrado</p></div>'});const pE=["home","verse","profile","achievements","settings"],gE={home:"Bible Games",verse:"Versículo del Día",profile:"Mi Perfil",achievements:"Logros",settings:"Ajustes",ranking:"Ranking",game:"Juego"};function vE(n,e={}){document.querySelectorAll(".nav-btn").forEach(l=>{l.classList.toggle("active",l.dataset.screen===n)});const s=document.getElementById("header-title");if(s)if(n==="game"&&e.gameId){const l=qh(e.gameId);s.textContent=l?l.name:"Juego"}else s.textContent=gE[n]||"Bible Games";const r=document.getElementById("btn-back"),i=!pE.includes(n);r&&r.classList.toggle("hidden",!i);const o=document.getElementById("bottom-nav");o&&o.classList.toggle("hidden",i),mi()}function cu(){var e;localStorage.getItem("theme")==="light"&&document.body.classList.add("light-theme"),wf(vE),document.querySelectorAll(".nav-btn").forEach(t=>{t.addEventListener("click",()=>{const s=t.dataset.screen;s&&ye(s)})}),(e=document.getElementById("btn-back"))==null||e.addEventListener("click",()=>{ye("home")}),mi(),Af("home")}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",cu):cu();
