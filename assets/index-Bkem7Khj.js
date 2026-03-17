(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const xs={};let kl=null,vs=null,Yr=null;function Mt(n,e){xs[n]=e}function me(n,e={}){vs&&(vs(),vs=null),kl=n,window.location.hash=n;const t=document.getElementById("main-content");if(t){if(t.innerHTML="",t.className="main-content screen-enter",xs[n]){const s=xs[n](t,e);typeof s=="function"&&(vs=s)}Yr&&Yr(n,e)}}function pd(n){Yr=n}function gd(n="home"){window.addEventListener("hashchange",()=>{const t=window.location.hash.slice(1)||n;t!==kl&&xs[t]&&me(t)});const e=window.location.hash.slice(1)||n;me(e)}const Ei="bgc_";function Ll(n,e){try{return localStorage.setItem(Ei+n,JSON.stringify(e)),!0}catch(t){return console.warn("Storage save failed:",t),!1}}function Ml(n,e=null){try{const t=localStorage.getItem(Ei+n);return t?JSON.parse(t):e}catch(t){return console.warn("Storage load failed:",t),e}}function vd(){Object.keys(localStorage).filter(e=>e.startsWith(Ei)).forEach(e=>localStorage.removeItem(e))}const yd=()=>{};var po={};/**
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
 */const Ol=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},_d=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const a=n[t++];e[s++]=String.fromCharCode((r&31)<<6|a&63)}else if(r>239&&r<365){const a=n[t++],o=n[t++],c=n[t++],d=((r&7)<<18|(a&63)<<12|(o&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(d>>10)),e[s++]=String.fromCharCode(56320+(d&1023))}else{const a=n[t++],o=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(a&63)<<6|o&63)}}return e.join("")},Fl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const a=n[r],o=r+1<n.length,c=o?n[r+1]:0,d=r+2<n.length,h=d?n[r+2]:0,f=a>>2,p=(a&3)<<4|c>>4;let b=(c&15)<<2|h>>6,A=h&63;d||(A=64,o||(b=64)),s.push(t[f],t[p],t[b],t[A])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ol(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):_d(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const a=t[n.charAt(r++)],c=r<n.length?t[n.charAt(r)]:0;++r;const h=r<n.length?t[n.charAt(r)]:64;++r;const p=r<n.length?t[n.charAt(r)]:64;if(++r,a==null||c==null||h==null||p==null)throw new bd;const b=a<<2|c>>4;if(s.push(b),h!==64){const A=c<<4&240|h>>2;if(s.push(A),p!==64){const R=h<<6&192|p;s.push(R)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class bd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ed=function(n){const e=Ol(n);return Fl.encodeByteArray(e,!0)},Ns=function(n){return Ed(n).replace(/\./g,"")},Td=function(n){try{return Fl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function wd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Id=()=>wd().__FIREBASE_DEFAULTS__,Ad=()=>{if(typeof process>"u"||typeof po>"u")return;const n=po.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Sd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Td(n[1]);return e&&JSON.parse(e)},Ti=()=>{try{return yd()||Id()||Ad()||Sd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Rd=n=>{var e,t;return(t=(e=Ti())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Cd=n=>{const e=Rd(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},$l=()=>{var n;return(n=Ti())==null?void 0:n.config};/**
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
 */class Pd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function wi(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Dd(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Vd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Ns(JSON.stringify(t)),Ns(JSON.stringify(o)),""].join(".")}const xn={};function xd(){const n={prod:[],emulator:[]};for(const e of Object.keys(xn))xn[e]?n.emulator.push(e):n.prod.push(e);return n}function Nd(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let go=!1;function kd(n,e){if(typeof window>"u"||typeof document>"u"||!wi(window.location.host)||xn[n]===e||xn[n]||go)return;xn[n]=e;function t(b){return`__firebase__banner__${b}`}const s="__firebase__banner",a=xd().prod.length>0;function o(){const b=document.getElementById(s);b&&b.remove()}function c(b){b.style.display="flex",b.style.background="#7faaf0",b.style.position="fixed",b.style.bottom="5px",b.style.left="5px",b.style.padding=".5em",b.style.borderRadius="5px",b.style.alignItems="center"}function d(b,A){b.setAttribute("width","24"),b.setAttribute("id",A),b.setAttribute("height","24"),b.setAttribute("viewBox","0 0 24 24"),b.setAttribute("fill","none"),b.style.marginLeft="-6px"}function h(){const b=document.createElement("span");return b.style.cursor="pointer",b.style.marginLeft="16px",b.style.fontSize="24px",b.innerHTML=" &times;",b.onclick=()=>{go=!0,o()},b}function f(b,A){b.setAttribute("id",A),b.innerText="Learn more",b.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",b.setAttribute("target","__blank"),b.style.paddingLeft="5px",b.style.textDecoration="underline"}function p(){const b=Nd(s),A=t("text"),R=document.getElementById(A)||document.createElement("span"),V=t("learnmore"),x=document.getElementById(V)||document.createElement("a"),D=t("preprendIcon"),L=document.getElementById(D)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(b.created){const q=b.element;c(q),f(x,V);const F=h();d(L,D),q.append(L,R,x,F),document.body.appendChild(q)}a?(R.innerText="Preview backend disconnected.",L.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(L.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",A)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function Ld(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Md(){var e;const n=(e=Ti())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Od(){return!Md()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Fd(){try{return typeof indexedDB=="object"}catch{return!1}}function $d(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var a;e(((a=r.error)==null?void 0:a.message)||"")}}catch(t){e(t)}})}/**
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
 */const qd="FirebaseError";class nn extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=qd,Object.setPrototypeOf(this,nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ql.prototype.create)}}class ql{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,a=this.errors[e],o=a?Bd(a,s):"Error",c=`${this.serviceName}: ${o} (${r}).`;return new nn(r,c,s)}}function Bd(n,e){return n.replace(Ud,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Ud=/\{\$([^}]+)}/g;function ks(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const a=n[r],o=e[r];if(vo(a)&&vo(o)){if(!ks(a,o))return!1}else if(a!==o)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function vo(n){return n!==null&&typeof n=="object"}/**
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
 */function Qe(n){return n&&n._delegate?n._delegate:n}class Fn{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ct="[DEFAULT]";/**
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
 */class jd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Pd;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Gd(e))try{this.getOrInitializeService({instanceIdentifier:Ct})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:r});s.resolve(a)}catch{}}}}clearInstance(e=Ct){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ct){return this.instances.has(e)}getOptions(e=Ct){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[a,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(a);s===c&&o.resolve(r)}return r}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const a=this.instances.get(s);return a&&e(a,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:zd(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ct){return this.component?this.component.multipleInstances?e:Ct:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zd(n){return n===Ct?void 0:n}function Gd(n){return n.instantiationMode==="EAGER"}/**
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
 */class Hd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new jd(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ee;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ee||(ee={}));const Jd={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},Qd=ee.INFO,Wd={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},Kd=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=Wd[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bl{constructor(e){this.name=e,this._logLevel=Qd,this._logHandler=Kd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Jd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const Yd=(n,e)=>e.some(t=>n instanceof t);let yo,_o;function Xd(){return yo||(yo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zd(){return _o||(_o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ul=new WeakMap,Xr=new WeakMap,jl=new WeakMap,Fr=new WeakMap,Ii=new WeakMap;function eh(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",a),n.removeEventListener("error",o)},a=()=>{t(ct(n.result)),r()},o=()=>{s(n.error),r()};n.addEventListener("success",a),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Ul.set(t,n)}).catch(()=>{}),Ii.set(e,n),e}function th(n){if(Xr.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",o),n.removeEventListener("abort",o)},a=()=>{t(),r()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",a),n.addEventListener("error",o),n.addEventListener("abort",o)});Xr.set(n,e)}let Zr={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Xr.get(n);if(e==="objectStoreNames")return n.objectStoreNames||jl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ct(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function nh(n){Zr=n(Zr)}function sh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call($r(this),e,...t);return jl.set(s,e.sort?e.sort():[e]),ct(s)}:Zd().includes(n)?function(...e){return n.apply($r(this),e),ct(Ul.get(this))}:function(...e){return ct(n.apply($r(this),e))}}function rh(n){return typeof n=="function"?sh(n):(n instanceof IDBTransaction&&th(n),Yd(n,Xd())?new Proxy(n,Zr):n)}function ct(n){if(n instanceof IDBRequest)return eh(n);if(Fr.has(n))return Fr.get(n);const e=rh(n);return e!==n&&(Fr.set(n,e),Ii.set(e,n)),e}const $r=n=>Ii.get(n);function ih(n,e,{blocked:t,upgrade:s,blocking:r,terminated:a}={}){const o=indexedDB.open(n,e),c=ct(o);return s&&o.addEventListener("upgradeneeded",d=>{s(ct(o.result),d.oldVersion,d.newVersion,ct(o.transaction),d)}),t&&o.addEventListener("blocked",d=>t(d.oldVersion,d.newVersion,d)),c.then(d=>{a&&d.addEventListener("close",()=>a()),r&&d.addEventListener("versionchange",h=>r(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const ah=["get","getKey","getAll","getAllKeys","count"],oh=["put","add","delete","clear"],qr=new Map;function bo(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(qr.get(e))return qr.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=oh.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||ah.includes(t)))return;const a=async function(o,...c){const d=this.transaction(o,r?"readwrite":"readonly");let h=d.store;return s&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),r&&d.done]))[0]};return qr.set(e,a),a}nh(n=>({...n,get:(e,t,s)=>bo(e,t)||n.get(e,t,s),has:(e,t)=>!!bo(e,t)||n.has(e,t)}));/**
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
 */class lh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(ch(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function ch(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ei="@firebase/app",Eo="0.14.9";/**
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
 */const Xe=new Bl("@firebase/app"),uh="@firebase/app-compat",dh="@firebase/analytics-compat",hh="@firebase/analytics",fh="@firebase/app-check-compat",mh="@firebase/app-check",ph="@firebase/auth",gh="@firebase/auth-compat",vh="@firebase/database",yh="@firebase/data-connect",_h="@firebase/database-compat",bh="@firebase/functions",Eh="@firebase/functions-compat",Th="@firebase/installations",wh="@firebase/installations-compat",Ih="@firebase/messaging",Ah="@firebase/messaging-compat",Sh="@firebase/performance",Rh="@firebase/performance-compat",Ch="@firebase/remote-config",Ph="@firebase/remote-config-compat",Dh="@firebase/storage",Vh="@firebase/storage-compat",xh="@firebase/firestore",Nh="@firebase/ai",kh="@firebase/firestore-compat",Lh="firebase",Mh="12.10.0";/**
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
 */const ti="[DEFAULT]",Oh={[ei]:"fire-core",[uh]:"fire-core-compat",[hh]:"fire-analytics",[dh]:"fire-analytics-compat",[mh]:"fire-app-check",[fh]:"fire-app-check-compat",[ph]:"fire-auth",[gh]:"fire-auth-compat",[vh]:"fire-rtdb",[yh]:"fire-data-connect",[_h]:"fire-rtdb-compat",[bh]:"fire-fn",[Eh]:"fire-fn-compat",[Th]:"fire-iid",[wh]:"fire-iid-compat",[Ih]:"fire-fcm",[Ah]:"fire-fcm-compat",[Sh]:"fire-perf",[Rh]:"fire-perf-compat",[Ch]:"fire-rc",[Ph]:"fire-rc-compat",[Dh]:"fire-gcs",[Vh]:"fire-gcs-compat",[xh]:"fire-fst",[kh]:"fire-fst-compat",[Nh]:"fire-vertex","fire-js":"fire-js",[Lh]:"fire-js-all"};/**
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
 */const Ls=new Map,Fh=new Map,ni=new Map;function To(n,e){try{n.container.addComponent(e)}catch(t){Xe.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ms(n){const e=n.name;if(ni.has(e))return Xe.debug(`There were multiple attempts to register component ${e}.`),!1;ni.set(e,n);for(const t of Ls.values())To(t,n);for(const t of Fh.values())To(t,n);return!0}function $h(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function qh(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Bh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ut=new ql("app","Firebase",Bh);/**
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
 */class Uh{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ut.create("app-deleted",{appName:this._name})}}/**
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
 */const jh=Mh;function zl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:ti,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw ut.create("bad-app-name",{appName:String(r)});if(t||(t=$l()),!t)throw ut.create("no-options");const a=Ls.get(r);if(a){if(ks(t,a.options)&&ks(s,a.config))return a;throw ut.create("duplicate-app",{appName:r})}const o=new Hd(r);for(const d of ni.values())o.addComponent(d);const c=new Uh(t,s,o);return Ls.set(r,c),c}function zh(n=ti){const e=Ls.get(n);if(!e&&n===ti&&$l())return zl();if(!e)throw ut.create("no-app",{appName:n});return e}function Qt(n,e,t){let s=Oh[n]??n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),a=e.match(/\s|\//);if(r||a){const o=[`Unable to register library "${s}" with version "${e}":`];r&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&a&&o.push("and"),a&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xe.warn(o.join(" "));return}Ms(new Fn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Gh="firebase-heartbeat-database",Hh=1,$n="firebase-heartbeat-store";let Br=null;function Gl(){return Br||(Br=ih(Gh,Hh,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore($n)}catch(t){console.warn(t)}}}}).catch(n=>{throw ut.create("idb-open",{originalErrorMessage:n.message})})),Br}async function Jh(n){try{const t=(await Gl()).transaction($n),s=await t.objectStore($n).get(Hl(n));return await t.done,s}catch(e){if(e instanceof nn)Xe.warn(e.message);else{const t=ut.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Xe.warn(t.message)}}}async function wo(n,e){try{const s=(await Gl()).transaction($n,"readwrite");await s.objectStore($n).put(e,Hl(n)),await s.done}catch(t){if(t instanceof nn)Xe.warn(t.message);else{const s=ut.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Xe.warn(s.message)}}}function Hl(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Qh=1024,Wh=30;class Kh{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Xh(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Io();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(o=>o.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:r}),this._heartbeatsCache.heartbeats.length>Wh){const o=Zh(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Xe.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Io(),{heartbeatsToSend:s,unsentEntries:r}=Yh(this._heartbeatsCache.heartbeats),a=Ns(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return Xe.warn(t),""}}}function Io(){return new Date().toISOString().substring(0,10)}function Yh(n,e=Qh){const t=[];let s=n.slice();for(const r of n){const a=t.find(o=>o.agent===r.agent);if(a){if(a.dates.push(r.date),Ao(t)>e){a.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),Ao(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Xh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fd()?$d().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Jh(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return wo(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return wo(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ao(n){return Ns(JSON.stringify({version:2,heartbeats:n})).length}function Zh(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function ef(n){Ms(new Fn("platform-logger",e=>new lh(e),"PRIVATE")),Ms(new Fn("heartbeat",e=>new Kh(e),"PRIVATE")),Qt(ei,Eo,n),Qt(ei,Eo,"esm2020"),Qt("fire-js","")}ef("");var tf="firebase",nf="12.10.0";/**
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
 */Qt(tf,nf,"app");var So=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dt,Jl;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,g){function v(){}v.prototype=g.prototype,E.F=g.prototype,E.prototype=new v,E.prototype.constructor=E,E.D=function(T,y,w){for(var _=Array(arguments.length-2),U=2;U<arguments.length;U++)_[U-2]=arguments[U];return g.prototype[y].apply(T,_)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(E,g,v){v||(v=0);const T=Array(16);if(typeof g=="string")for(var y=0;y<16;++y)T[y]=g.charCodeAt(v++)|g.charCodeAt(v++)<<8|g.charCodeAt(v++)<<16|g.charCodeAt(v++)<<24;else for(y=0;y<16;++y)T[y]=g[v++]|g[v++]<<8|g[v++]<<16|g[v++]<<24;g=E.g[0],v=E.g[1],y=E.g[2];let w=E.g[3],_;_=g+(w^v&(y^w))+T[0]+3614090360&4294967295,g=v+(_<<7&4294967295|_>>>25),_=w+(y^g&(v^y))+T[1]+3905402710&4294967295,w=g+(_<<12&4294967295|_>>>20),_=y+(v^w&(g^v))+T[2]+606105819&4294967295,y=w+(_<<17&4294967295|_>>>15),_=v+(g^y&(w^g))+T[3]+3250441966&4294967295,v=y+(_<<22&4294967295|_>>>10),_=g+(w^v&(y^w))+T[4]+4118548399&4294967295,g=v+(_<<7&4294967295|_>>>25),_=w+(y^g&(v^y))+T[5]+1200080426&4294967295,w=g+(_<<12&4294967295|_>>>20),_=y+(v^w&(g^v))+T[6]+2821735955&4294967295,y=w+(_<<17&4294967295|_>>>15),_=v+(g^y&(w^g))+T[7]+4249261313&4294967295,v=y+(_<<22&4294967295|_>>>10),_=g+(w^v&(y^w))+T[8]+1770035416&4294967295,g=v+(_<<7&4294967295|_>>>25),_=w+(y^g&(v^y))+T[9]+2336552879&4294967295,w=g+(_<<12&4294967295|_>>>20),_=y+(v^w&(g^v))+T[10]+4294925233&4294967295,y=w+(_<<17&4294967295|_>>>15),_=v+(g^y&(w^g))+T[11]+2304563134&4294967295,v=y+(_<<22&4294967295|_>>>10),_=g+(w^v&(y^w))+T[12]+1804603682&4294967295,g=v+(_<<7&4294967295|_>>>25),_=w+(y^g&(v^y))+T[13]+4254626195&4294967295,w=g+(_<<12&4294967295|_>>>20),_=y+(v^w&(g^v))+T[14]+2792965006&4294967295,y=w+(_<<17&4294967295|_>>>15),_=v+(g^y&(w^g))+T[15]+1236535329&4294967295,v=y+(_<<22&4294967295|_>>>10),_=g+(y^w&(v^y))+T[1]+4129170786&4294967295,g=v+(_<<5&4294967295|_>>>27),_=w+(v^y&(g^v))+T[6]+3225465664&4294967295,w=g+(_<<9&4294967295|_>>>23),_=y+(g^v&(w^g))+T[11]+643717713&4294967295,y=w+(_<<14&4294967295|_>>>18),_=v+(w^g&(y^w))+T[0]+3921069994&4294967295,v=y+(_<<20&4294967295|_>>>12),_=g+(y^w&(v^y))+T[5]+3593408605&4294967295,g=v+(_<<5&4294967295|_>>>27),_=w+(v^y&(g^v))+T[10]+38016083&4294967295,w=g+(_<<9&4294967295|_>>>23),_=y+(g^v&(w^g))+T[15]+3634488961&4294967295,y=w+(_<<14&4294967295|_>>>18),_=v+(w^g&(y^w))+T[4]+3889429448&4294967295,v=y+(_<<20&4294967295|_>>>12),_=g+(y^w&(v^y))+T[9]+568446438&4294967295,g=v+(_<<5&4294967295|_>>>27),_=w+(v^y&(g^v))+T[14]+3275163606&4294967295,w=g+(_<<9&4294967295|_>>>23),_=y+(g^v&(w^g))+T[3]+4107603335&4294967295,y=w+(_<<14&4294967295|_>>>18),_=v+(w^g&(y^w))+T[8]+1163531501&4294967295,v=y+(_<<20&4294967295|_>>>12),_=g+(y^w&(v^y))+T[13]+2850285829&4294967295,g=v+(_<<5&4294967295|_>>>27),_=w+(v^y&(g^v))+T[2]+4243563512&4294967295,w=g+(_<<9&4294967295|_>>>23),_=y+(g^v&(w^g))+T[7]+1735328473&4294967295,y=w+(_<<14&4294967295|_>>>18),_=v+(w^g&(y^w))+T[12]+2368359562&4294967295,v=y+(_<<20&4294967295|_>>>12),_=g+(v^y^w)+T[5]+4294588738&4294967295,g=v+(_<<4&4294967295|_>>>28),_=w+(g^v^y)+T[8]+2272392833&4294967295,w=g+(_<<11&4294967295|_>>>21),_=y+(w^g^v)+T[11]+1839030562&4294967295,y=w+(_<<16&4294967295|_>>>16),_=v+(y^w^g)+T[14]+4259657740&4294967295,v=y+(_<<23&4294967295|_>>>9),_=g+(v^y^w)+T[1]+2763975236&4294967295,g=v+(_<<4&4294967295|_>>>28),_=w+(g^v^y)+T[4]+1272893353&4294967295,w=g+(_<<11&4294967295|_>>>21),_=y+(w^g^v)+T[7]+4139469664&4294967295,y=w+(_<<16&4294967295|_>>>16),_=v+(y^w^g)+T[10]+3200236656&4294967295,v=y+(_<<23&4294967295|_>>>9),_=g+(v^y^w)+T[13]+681279174&4294967295,g=v+(_<<4&4294967295|_>>>28),_=w+(g^v^y)+T[0]+3936430074&4294967295,w=g+(_<<11&4294967295|_>>>21),_=y+(w^g^v)+T[3]+3572445317&4294967295,y=w+(_<<16&4294967295|_>>>16),_=v+(y^w^g)+T[6]+76029189&4294967295,v=y+(_<<23&4294967295|_>>>9),_=g+(v^y^w)+T[9]+3654602809&4294967295,g=v+(_<<4&4294967295|_>>>28),_=w+(g^v^y)+T[12]+3873151461&4294967295,w=g+(_<<11&4294967295|_>>>21),_=y+(w^g^v)+T[15]+530742520&4294967295,y=w+(_<<16&4294967295|_>>>16),_=v+(y^w^g)+T[2]+3299628645&4294967295,v=y+(_<<23&4294967295|_>>>9),_=g+(y^(v|~w))+T[0]+4096336452&4294967295,g=v+(_<<6&4294967295|_>>>26),_=w+(v^(g|~y))+T[7]+1126891415&4294967295,w=g+(_<<10&4294967295|_>>>22),_=y+(g^(w|~v))+T[14]+2878612391&4294967295,y=w+(_<<15&4294967295|_>>>17),_=v+(w^(y|~g))+T[5]+4237533241&4294967295,v=y+(_<<21&4294967295|_>>>11),_=g+(y^(v|~w))+T[12]+1700485571&4294967295,g=v+(_<<6&4294967295|_>>>26),_=w+(v^(g|~y))+T[3]+2399980690&4294967295,w=g+(_<<10&4294967295|_>>>22),_=y+(g^(w|~v))+T[10]+4293915773&4294967295,y=w+(_<<15&4294967295|_>>>17),_=v+(w^(y|~g))+T[1]+2240044497&4294967295,v=y+(_<<21&4294967295|_>>>11),_=g+(y^(v|~w))+T[8]+1873313359&4294967295,g=v+(_<<6&4294967295|_>>>26),_=w+(v^(g|~y))+T[15]+4264355552&4294967295,w=g+(_<<10&4294967295|_>>>22),_=y+(g^(w|~v))+T[6]+2734768916&4294967295,y=w+(_<<15&4294967295|_>>>17),_=v+(w^(y|~g))+T[13]+1309151649&4294967295,v=y+(_<<21&4294967295|_>>>11),_=g+(y^(v|~w))+T[4]+4149444226&4294967295,g=v+(_<<6&4294967295|_>>>26),_=w+(v^(g|~y))+T[11]+3174756917&4294967295,w=g+(_<<10&4294967295|_>>>22),_=y+(g^(w|~v))+T[2]+718787259&4294967295,y=w+(_<<15&4294967295|_>>>17),_=v+(w^(y|~g))+T[9]+3951481745&4294967295,E.g[0]=E.g[0]+g&4294967295,E.g[1]=E.g[1]+(y+(_<<21&4294967295|_>>>11))&4294967295,E.g[2]=E.g[2]+y&4294967295,E.g[3]=E.g[3]+w&4294967295}s.prototype.v=function(E,g){g===void 0&&(g=E.length);const v=g-this.blockSize,T=this.C;let y=this.h,w=0;for(;w<g;){if(y==0)for(;w<=v;)r(this,E,w),w+=this.blockSize;if(typeof E=="string"){for(;w<g;)if(T[y++]=E.charCodeAt(w++),y==this.blockSize){r(this,T),y=0;break}}else for(;w<g;)if(T[y++]=E[w++],y==this.blockSize){r(this,T),y=0;break}}this.h=y,this.o+=g},s.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var g=1;g<E.length-8;++g)E[g]=0;g=this.o*8;for(var v=E.length-8;v<E.length;++v)E[v]=g&255,g/=256;for(this.v(E),E=Array(16),g=0,v=0;v<4;++v)for(let T=0;T<32;T+=8)E[g++]=this.g[v]>>>T&255;return E};function a(E,g){var v=c;return Object.prototype.hasOwnProperty.call(v,E)?v[E]:v[E]=g(E)}function o(E,g){this.h=g;const v=[];let T=!0;for(let y=E.length-1;y>=0;y--){const w=E[y]|0;T&&w==g||(v[y]=w,T=!1)}this.g=v}var c={};function d(E){return-128<=E&&E<128?a(E,function(g){return new o([g|0],g<0?-1:0)}):new o([E|0],E<0?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return p;if(E<0)return x(h(-E));const g=[];let v=1;for(let T=0;E>=v;T++)g[T]=E/v|0,v*=4294967296;return new o(g,0)}function f(E,g){if(E.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(E.charAt(0)=="-")return x(f(E.substring(1),g));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const v=h(Math.pow(g,8));let T=p;for(let w=0;w<E.length;w+=8){var y=Math.min(8,E.length-w);const _=parseInt(E.substring(w,w+y),g);y<8?(y=h(Math.pow(g,y)),T=T.j(y).add(h(_))):(T=T.j(v),T=T.add(h(_)))}return T}var p=d(0),b=d(1),A=d(16777216);n=o.prototype,n.m=function(){if(V(this))return-x(this).m();let E=0,g=1;for(let v=0;v<this.g.length;v++){const T=this.i(v);E+=(T>=0?T:4294967296+T)*g,g*=4294967296}return E},n.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(R(this))return"0";if(V(this))return"-"+x(this).toString(E);const g=h(Math.pow(E,6));var v=this;let T="";for(;;){const y=F(v,g).g;v=D(v,y.j(g));let w=((v.g.length>0?v.g[0]:v.h)>>>0).toString(E);if(v=y,R(v))return w+T;for(;w.length<6;)w="0"+w;T=w+T}},n.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function R(E){if(E.h!=0)return!1;for(let g=0;g<E.g.length;g++)if(E.g[g]!=0)return!1;return!0}function V(E){return E.h==-1}n.l=function(E){return E=D(this,E),V(E)?-1:R(E)?0:1};function x(E){const g=E.g.length,v=[];for(let T=0;T<g;T++)v[T]=~E.g[T];return new o(v,~E.h).add(b)}n.abs=function(){return V(this)?x(this):this},n.add=function(E){const g=Math.max(this.g.length,E.g.length),v=[];let T=0;for(let y=0;y<=g;y++){let w=T+(this.i(y)&65535)+(E.i(y)&65535),_=(w>>>16)+(this.i(y)>>>16)+(E.i(y)>>>16);T=_>>>16,w&=65535,_&=65535,v[y]=_<<16|w}return new o(v,v[v.length-1]&-2147483648?-1:0)};function D(E,g){return E.add(x(g))}n.j=function(E){if(R(this)||R(E))return p;if(V(this))return V(E)?x(this).j(x(E)):x(x(this).j(E));if(V(E))return x(this.j(x(E)));if(this.l(A)<0&&E.l(A)<0)return h(this.m()*E.m());const g=this.g.length+E.g.length,v=[];for(var T=0;T<2*g;T++)v[T]=0;for(T=0;T<this.g.length;T++)for(let y=0;y<E.g.length;y++){const w=this.i(T)>>>16,_=this.i(T)&65535,U=E.i(y)>>>16,B=E.i(y)&65535;v[2*T+2*y]+=_*B,L(v,2*T+2*y),v[2*T+2*y+1]+=w*B,L(v,2*T+2*y+1),v[2*T+2*y+1]+=_*U,L(v,2*T+2*y+1),v[2*T+2*y+2]+=w*U,L(v,2*T+2*y+2)}for(E=0;E<g;E++)v[E]=v[2*E+1]<<16|v[2*E];for(E=g;E<2*g;E++)v[E]=0;return new o(v,0)};function L(E,g){for(;(E[g]&65535)!=E[g];)E[g+1]+=E[g]>>>16,E[g]&=65535,g++}function q(E,g){this.g=E,this.h=g}function F(E,g){if(R(g))throw Error("division by zero");if(R(E))return new q(p,p);if(V(E))return g=F(x(E),g),new q(x(g.g),x(g.h));if(V(g))return g=F(E,x(g)),new q(x(g.g),g.h);if(E.g.length>30){if(V(E)||V(g))throw Error("slowDivide_ only works with positive integers.");for(var v=b,T=g;T.l(E)<=0;)v=k(v),T=k(T);var y=N(v,1),w=N(T,1);for(T=N(T,2),v=N(v,2);!R(T);){var _=w.add(T);_.l(E)<=0&&(y=y.add(v),w=_),T=N(T,1),v=N(v,1)}return g=D(E,y.j(g)),new q(y,g)}for(y=p;E.l(g)>=0;){for(v=Math.max(1,Math.floor(E.m()/g.m())),T=Math.ceil(Math.log(v)/Math.LN2),T=T<=48?1:Math.pow(2,T-48),w=h(v),_=w.j(g);V(_)||_.l(E)>0;)v-=T,w=h(v),_=w.j(g);R(w)&&(w=b),y=y.add(w),E=D(E,_)}return new q(y,E)}n.B=function(E){return F(this,E).h},n.and=function(E){const g=Math.max(this.g.length,E.g.length),v=[];for(let T=0;T<g;T++)v[T]=this.i(T)&E.i(T);return new o(v,this.h&E.h)},n.or=function(E){const g=Math.max(this.g.length,E.g.length),v=[];for(let T=0;T<g;T++)v[T]=this.i(T)|E.i(T);return new o(v,this.h|E.h)},n.xor=function(E){const g=Math.max(this.g.length,E.g.length),v=[];for(let T=0;T<g;T++)v[T]=this.i(T)^E.i(T);return new o(v,this.h^E.h)};function k(E){const g=E.g.length+1,v=[];for(let T=0;T<g;T++)v[T]=E.i(T)<<1|E.i(T-1)>>>31;return new o(v,E.h)}function N(E,g){const v=g>>5;g%=32;const T=E.g.length-v,y=[];for(let w=0;w<T;w++)y[w]=g>0?E.i(w+v)>>>g|E.i(w+v+1)<<32-g:E.i(w+v);return new o(y,E.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,Jl=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,dt=o}).apply(typeof So<"u"?So:typeof self<"u"?self:typeof window<"u"?window:{});var ys=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ql,Cn,Wl,Is,si,Kl,Yl,Xl;(function(){var n,e=Object.defineProperty;function t(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof ys=="object"&&ys];for(var l=0;l<i.length;++l){var u=i[l];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var s=t(this);function r(i,l){if(l)e:{var u=s;i=i.split(".");for(var m=0;m<i.length-1;m++){var I=i[m];if(!(I in u))break e;u=u[I]}i=i[i.length-1],m=u[i],l=l(m),l!=m&&l!=null&&e(u,i,{configurable:!0,writable:!0,value:l})}}r("Symbol.dispose",function(i){return i||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(i){return i||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(i){return i||function(l){var u=[],m;for(m in l)Object.prototype.hasOwnProperty.call(l,m)&&u.push([m,l[m]]);return u}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},o=this||self;function c(i){var l=typeof i;return l=="object"&&i!=null||l=="function"}function d(i,l,u){return i.call.apply(i.bind,arguments)}function h(i,l,u){return h=d,h.apply(null,arguments)}function f(i,l){var u=Array.prototype.slice.call(arguments,1);return function(){var m=u.slice();return m.push.apply(m,arguments),i.apply(this,m)}}function p(i,l){function u(){}u.prototype=l.prototype,i.Z=l.prototype,i.prototype=new u,i.prototype.constructor=i,i.Ob=function(m,I,S){for(var M=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)M[Q-2]=arguments[Q];return l.prototype[I].apply(m,M)}}var b=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?i=>i&&AsyncContext.Snapshot.wrap(i):i=>i;function A(i){const l=i.length;if(l>0){const u=Array(l);for(let m=0;m<l;m++)u[m]=i[m];return u}return[]}function R(i,l){for(let m=1;m<arguments.length;m++){const I=arguments[m];var u=typeof I;if(u=u!="object"?u:I?Array.isArray(I)?"array":u:"null",u=="array"||u=="object"&&typeof I.length=="number"){u=i.length||0;const S=I.length||0;i.length=u+S;for(let M=0;M<S;M++)i[u+M]=I[M]}else i.push(I)}}class V{constructor(l,u){this.i=l,this.j=u,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function x(i){o.setTimeout(()=>{throw i},0)}function D(){var i=E;let l=null;return i.g&&(l=i.g,i.g=i.g.next,i.g||(i.h=null),l.next=null),l}class L{constructor(){this.h=this.g=null}add(l,u){const m=q.get();m.set(l,u),this.h?this.h.next=m:this.g=m,this.h=m}}var q=new V(()=>new F,i=>i.reset());class F{constructor(){this.next=this.g=this.h=null}set(l,u){this.h=l,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let k,N=!1,E=new L,g=()=>{const i=Promise.resolve(void 0);k=()=>{i.then(v)}};function v(){for(var i;i=D();){try{i.h.call(i.g)}catch(u){x(u)}var l=q;l.j(i),l.h<100&&(l.h++,i.next=l.g,l.g=i)}N=!1}function T(){this.u=this.u,this.C=this.C}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function y(i,l){this.type=i,this.g=this.target=l,this.defaultPrevented=!1}y.prototype.h=function(){this.defaultPrevented=!0};var w=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var i=!1,l=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const u=()=>{};o.addEventListener("test",u,l),o.removeEventListener("test",u,l)}catch{}return i})();function _(i){return/^[\s\xa0]*$/.test(i)}function U(i,l){y.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i&&this.init(i,l)}p(U,y),U.prototype.init=function(i,l){const u=this.type=i.type,m=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;this.target=i.target||i.srcElement,this.g=l,l=i.relatedTarget,l||(u=="mouseover"?l=i.fromElement:u=="mouseout"&&(l=i.toElement)),this.relatedTarget=l,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=i.pointerType,this.state=i.state,this.i=i,i.defaultPrevented&&U.Z.h.call(this)},U.prototype.h=function(){U.Z.h.call(this);const i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var B="closure_listenable_"+(Math.random()*1e6|0),X=0;function oe(i,l,u,m,I){this.listener=i,this.proxy=null,this.src=l,this.type=u,this.capture=!!m,this.ha=I,this.key=++X,this.da=this.fa=!1}function ns(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function ss(i,l,u){for(const m in i)l.call(u,i[m],m,i)}function $u(i,l){for(const u in i)l.call(void 0,i[u],u,i)}function fa(i){const l={};for(const u in i)l[u]=i[u];return l}const ma="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function pa(i,l){let u,m;for(let I=1;I<arguments.length;I++){m=arguments[I];for(u in m)i[u]=m[u];for(let S=0;S<ma.length;S++)u=ma[S],Object.prototype.hasOwnProperty.call(m,u)&&(i[u]=m[u])}}function rs(i){this.src=i,this.g={},this.h=0}rs.prototype.add=function(i,l,u,m,I){const S=i.toString();i=this.g[S],i||(i=this.g[S]=[],this.h++);const M=pr(i,l,m,I);return M>-1?(l=i[M],u||(l.fa=!1)):(l=new oe(l,this.src,S,!!m,I),l.fa=u,i.push(l)),l};function mr(i,l){const u=l.type;if(u in i.g){var m=i.g[u],I=Array.prototype.indexOf.call(m,l,void 0),S;(S=I>=0)&&Array.prototype.splice.call(m,I,1),S&&(ns(l),i.g[u].length==0&&(delete i.g[u],i.h--))}}function pr(i,l,u,m){for(let I=0;I<i.length;++I){const S=i[I];if(!S.da&&S.listener==l&&S.capture==!!u&&S.ha==m)return I}return-1}var gr="closure_lm_"+(Math.random()*1e6|0),vr={};function ga(i,l,u,m,I){if(Array.isArray(l)){for(let S=0;S<l.length;S++)ga(i,l[S],u,m,I);return null}return u=_a(u),i&&i[B]?i.J(l,u,c(m)?!!m.capture:!1,I):qu(i,l,u,!1,m,I)}function qu(i,l,u,m,I,S){if(!l)throw Error("Invalid event type");const M=c(I)?!!I.capture:!!I;let Q=_r(i);if(Q||(i[gr]=Q=new rs(i)),u=Q.add(l,u,m,M,S),u.proxy)return u;if(m=Bu(),u.proxy=m,m.src=i,m.listener=u,i.addEventListener)w||(I=M),I===void 0&&(I=!1),i.addEventListener(l.toString(),m,I);else if(i.attachEvent)i.attachEvent(ya(l.toString()),m);else if(i.addListener&&i.removeListener)i.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return u}function Bu(){function i(u){return l.call(i.src,i.listener,u)}const l=Uu;return i}function va(i,l,u,m,I){if(Array.isArray(l))for(var S=0;S<l.length;S++)va(i,l[S],u,m,I);else m=c(m)?!!m.capture:!!m,u=_a(u),i&&i[B]?(i=i.i,S=String(l).toString(),S in i.g&&(l=i.g[S],u=pr(l,u,m,I),u>-1&&(ns(l[u]),Array.prototype.splice.call(l,u,1),l.length==0&&(delete i.g[S],i.h--)))):i&&(i=_r(i))&&(l=i.g[l.toString()],i=-1,l&&(i=pr(l,u,m,I)),(u=i>-1?l[i]:null)&&yr(u))}function yr(i){if(typeof i!="number"&&i&&!i.da){var l=i.src;if(l&&l[B])mr(l.i,i);else{var u=i.type,m=i.proxy;l.removeEventListener?l.removeEventListener(u,m,i.capture):l.detachEvent?l.detachEvent(ya(u),m):l.addListener&&l.removeListener&&l.removeListener(m),(u=_r(l))?(mr(u,i),u.h==0&&(u.src=null,l[gr]=null)):ns(i)}}}function ya(i){return i in vr?vr[i]:vr[i]="on"+i}function Uu(i,l){if(i.da)i=!0;else{l=new U(l,this);const u=i.listener,m=i.ha||i.src;i.fa&&yr(i),i=u.call(m,l)}return i}function _r(i){return i=i[gr],i instanceof rs?i:null}var br="__closure_events_fn_"+(Math.random()*1e9>>>0);function _a(i){return typeof i=="function"?i:(i[br]||(i[br]=function(l){return i.handleEvent(l)}),i[br])}function Te(){T.call(this),this.i=new rs(this),this.M=this,this.G=null}p(Te,T),Te.prototype[B]=!0,Te.prototype.removeEventListener=function(i,l,u,m){va(this,i,l,u,m)};function Ce(i,l){var u,m=i.G;if(m)for(u=[];m;m=m.G)u.push(m);if(i=i.M,m=l.type||l,typeof l=="string")l=new y(l,i);else if(l instanceof y)l.target=l.target||i;else{var I=l;l=new y(m,i),pa(l,I)}I=!0;let S,M;if(u)for(M=u.length-1;M>=0;M--)S=l.g=u[M],I=is(S,m,!0,l)&&I;if(S=l.g=i,I=is(S,m,!0,l)&&I,I=is(S,m,!1,l)&&I,u)for(M=0;M<u.length;M++)S=l.g=u[M],I=is(S,m,!1,l)&&I}Te.prototype.N=function(){if(Te.Z.N.call(this),this.i){var i=this.i;for(const l in i.g){const u=i.g[l];for(let m=0;m<u.length;m++)ns(u[m]);delete i.g[l],i.h--}}this.G=null},Te.prototype.J=function(i,l,u,m){return this.i.add(String(i),l,!1,u,m)},Te.prototype.K=function(i,l,u,m){return this.i.add(String(i),l,!0,u,m)};function is(i,l,u,m){if(l=i.i.g[String(l)],!l)return!0;l=l.concat();let I=!0;for(let S=0;S<l.length;++S){const M=l[S];if(M&&!M.da&&M.capture==u){const Q=M.listener,pe=M.ha||M.src;M.fa&&mr(i.i,M),I=Q.call(pe,m)!==!1&&I}}return I&&!m.defaultPrevented}function ju(i,l){if(typeof i!="function")if(i&&typeof i.handleEvent=="function")i=h(i.handleEvent,i);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:o.setTimeout(i,l||0)}function ba(i){i.g=ju(()=>{i.g=null,i.i&&(i.i=!1,ba(i))},i.l);const l=i.h;i.h=null,i.m.apply(null,l)}class zu extends T{constructor(l,u){super(),this.m=l,this.l=u,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:ba(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function dn(i){T.call(this),this.h=i,this.g={}}p(dn,T);var Ea=[];function Ta(i){ss(i.g,function(l,u){this.g.hasOwnProperty(u)&&yr(l)},i),i.g={}}dn.prototype.N=function(){dn.Z.N.call(this),Ta(this)},dn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Er=o.JSON.stringify,Gu=o.JSON.parse,Hu=class{stringify(i){return o.JSON.stringify(i,void 0)}parse(i){return o.JSON.parse(i,void 0)}};function wa(){}function Ia(){}var hn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Tr(){y.call(this,"d")}p(Tr,y);function wr(){y.call(this,"c")}p(wr,y);var wt={},Aa=null;function as(){return Aa=Aa||new Te}wt.Ia="serverreachability";function Sa(i){y.call(this,wt.Ia,i)}p(Sa,y);function fn(i){const l=as();Ce(l,new Sa(l))}wt.STAT_EVENT="statevent";function Ra(i,l){y.call(this,wt.STAT_EVENT,i),this.stat=l}p(Ra,y);function Pe(i){const l=as();Ce(l,new Ra(l,i))}wt.Ja="timingevent";function Ca(i,l){y.call(this,wt.Ja,i),this.size=l}p(Ca,y);function mn(i,l){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){i()},l)}function pn(){this.g=!0}pn.prototype.ua=function(){this.g=!1};function Ju(i,l,u,m,I,S){i.info(function(){if(i.g)if(S){var M="",Q=S.split("&");for(let ne=0;ne<Q.length;ne++){var pe=Q[ne].split("=");if(pe.length>1){const ve=pe[0];pe=pe[1];const je=ve.split("_");M=je.length>=2&&je[1]=="type"?M+(ve+"="+pe+"&"):M+(ve+"=redacted&")}}}else M=null;else M=S;return"XMLHTTP REQ ("+m+") [attempt "+I+"]: "+l+`
`+u+`
`+M})}function Qu(i,l,u,m,I,S,M){i.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+I+"]: "+l+`
`+u+`
`+S+" "+M})}function qt(i,l,u,m){i.info(function(){return"XMLHTTP TEXT ("+l+"): "+Ku(i,u)+(m?" "+m:"")})}function Wu(i,l){i.info(function(){return"TIMEOUT: "+l})}pn.prototype.info=function(){};function Ku(i,l){if(!i.g)return l;if(!l)return null;try{const S=JSON.parse(l);if(S){for(i=0;i<S.length;i++)if(Array.isArray(S[i])){var u=S[i];if(!(u.length<2)){var m=u[1];if(Array.isArray(m)&&!(m.length<1)){var I=m[0];if(I!="noop"&&I!="stop"&&I!="close")for(let M=1;M<m.length;M++)m[M]=""}}}}return Er(S)}catch{return l}}var os={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Pa={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Da;function Ir(){}p(Ir,wa),Ir.prototype.g=function(){return new XMLHttpRequest},Da=new Ir;function gn(i){return encodeURIComponent(String(i))}function Yu(i){var l=1;i=i.split(":");const u=[];for(;l>0&&i.length;)u.push(i.shift()),l--;return i.length&&u.push(i.join(":")),u}function nt(i,l,u,m){this.j=i,this.i=l,this.l=u,this.S=m||1,this.V=new dn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Va}function Va(){this.i=null,this.g="",this.h=!1}var xa={},Ar={};function Sr(i,l,u){i.M=1,i.A=cs(Ue(l)),i.u=u,i.R=!0,Na(i,null)}function Na(i,l){i.F=Date.now(),ls(i),i.B=Ue(i.A);var u=i.B,m=i.S;Array.isArray(m)||(m=[String(m)]),Ha(u.i,"t",m),i.C=0,u=i.j.L,i.h=new Va,i.g=uo(i.j,u?l:null,!i.u),i.P>0&&(i.O=new zu(h(i.Y,i,i.g),i.P)),l=i.V,u=i.g,m=i.ba;var I="readystatechange";Array.isArray(I)||(I&&(Ea[0]=I.toString()),I=Ea);for(let S=0;S<I.length;S++){const M=ga(u,I[S],m||l.handleEvent,!1,l.h||l);if(!M)break;l.g[M.key]=M}l=i.J?fa(i.J):{},i.u?(i.v||(i.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.B,i.v,i.u,l)):(i.v="GET",i.g.ea(i.B,i.v,null,l)),fn(),Ju(i.i,i.v,i.B,i.l,i.S,i.u)}nt.prototype.ba=function(i){i=i.target;const l=this.O;l&&it(i)==3?l.j():this.Y(i)},nt.prototype.Y=function(i){try{if(i==this.g)e:{const Q=it(this.g),pe=this.g.ya(),ne=this.g.ca();if(!(Q<3)&&(Q!=3||this.g&&(this.h.h||this.g.la()||Za(this.g)))){this.K||Q!=4||pe==7||(pe==8||ne<=0?fn(3):fn(2)),Rr(this);var l=this.g.ca();this.X=l;var u=Xu(this);if(this.o=l==200,Qu(this.i,this.v,this.B,this.l,this.S,Q,l),this.o){if(this.U&&!this.L){t:{if(this.g){var m,I=this.g;if((m=I.g?I.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(m)){var S=m;break t}}S=null}if(i=S)qt(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Cr(this,i);else{this.o=!1,this.m=3,Pe(12),It(this),vn(this);break e}}if(this.R){i=!0;let ve;for(;!this.K&&this.C<u.length;)if(ve=Zu(this,u),ve==Ar){Q==4&&(this.m=4,Pe(14),i=!1),qt(this.i,this.l,null,"[Incomplete Response]");break}else if(ve==xa){this.m=4,Pe(15),qt(this.i,this.l,u,"[Invalid Chunk]"),i=!1;break}else qt(this.i,this.l,ve,null),Cr(this,ve);if(ka(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Q!=4||u.length!=0||this.h.h||(this.m=1,Pe(16),i=!1),this.o=this.o&&i,!i)qt(this.i,this.l,u,"[Invalid Chunked Response]"),It(this),vn(this);else if(u.length>0&&!this.W){this.W=!0;var M=this.j;M.g==this&&M.aa&&!M.P&&(M.j.info("Great, no buffering proxy detected. Bytes received: "+u.length),Mr(M),M.P=!0,Pe(11))}}else qt(this.i,this.l,u,null),Cr(this,u);Q==4&&It(this),this.o&&!this.K&&(Q==4?ao(this.j,this):(this.o=!1,ls(this)))}else fd(this.g),l==400&&u.indexOf("Unknown SID")>0?(this.m=3,Pe(12)):(this.m=0,Pe(13)),It(this),vn(this)}}}catch{}finally{}};function Xu(i){if(!ka(i))return i.g.la();const l=Za(i.g);if(l==="")return"";let u="";const m=l.length,I=it(i.g)==4;if(!i.h.i){if(typeof TextDecoder>"u")return It(i),vn(i),"";i.h.i=new o.TextDecoder}for(let S=0;S<m;S++)i.h.h=!0,u+=i.h.i.decode(l[S],{stream:!(I&&S==m-1)});return l.length=0,i.h.g+=u,i.C=0,i.h.g}function ka(i){return i.g?i.v=="GET"&&i.M!=2&&i.j.Aa:!1}function Zu(i,l){var u=i.C,m=l.indexOf(`
`,u);return m==-1?Ar:(u=Number(l.substring(u,m)),isNaN(u)?xa:(m+=1,m+u>l.length?Ar:(l=l.slice(m,m+u),i.C=m+u,l)))}nt.prototype.cancel=function(){this.K=!0,It(this)};function ls(i){i.T=Date.now()+i.H,La(i,i.H)}function La(i,l){if(i.D!=null)throw Error("WatchDog timer not null");i.D=mn(h(i.aa,i),l)}function Rr(i){i.D&&(o.clearTimeout(i.D),i.D=null)}nt.prototype.aa=function(){this.D=null;const i=Date.now();i-this.T>=0?(Wu(this.i,this.B),this.M!=2&&(fn(),Pe(17)),It(this),this.m=2,vn(this)):La(this,this.T-i)};function vn(i){i.j.I==0||i.K||ao(i.j,i)}function It(i){Rr(i);var l=i.O;l&&typeof l.dispose=="function"&&l.dispose(),i.O=null,Ta(i.V),i.g&&(l=i.g,i.g=null,l.abort(),l.dispose())}function Cr(i,l){try{var u=i.j;if(u.I!=0&&(u.g==i||Pr(u.h,i))){if(!i.L&&Pr(u.h,i)&&u.I==3){try{var m=u.Ba.g.parse(l)}catch{m=null}if(Array.isArray(m)&&m.length==3){var I=m;if(I[0]==0){e:if(!u.v){if(u.g)if(u.g.F+3e3<i.F)ms(u),hs(u);else break e;Lr(u),Pe(18)}}else u.xa=I[1],0<u.xa-u.K&&I[2]<37500&&u.F&&u.A==0&&!u.C&&(u.C=mn(h(u.Va,u),6e3));Fa(u.h)<=1&&u.ta&&(u.ta=void 0)}else St(u,11)}else if((i.L||u.g==i)&&ms(u),!_(l))for(I=u.Ba.g.parse(l),l=0;l<I.length;l++){let ne=I[l];const ve=ne[0];if(!(ve<=u.K))if(u.K=ve,ne=ne[1],u.I==2)if(ne[0]=="c"){u.M=ne[1],u.ba=ne[2];const je=ne[3];je!=null&&(u.ka=je,u.j.info("VER="+u.ka));const Rt=ne[4];Rt!=null&&(u.za=Rt,u.j.info("SVER="+u.za));const at=ne[5];at!=null&&typeof at=="number"&&at>0&&(m=1.5*at,u.O=m,u.j.info("backChannelRequestTimeoutMs_="+m)),m=u;const ot=i.g;if(ot){const gs=ot.g?ot.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(gs){var S=m.h;S.g||gs.indexOf("spdy")==-1&&gs.indexOf("quic")==-1&&gs.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(Dr(S,S.h),S.h=null))}if(m.G){const Or=ot.g?ot.g.getResponseHeader("X-HTTP-Session-Id"):null;Or&&(m.wa=Or,re(m.J,m.G,Or))}}u.I=3,u.l&&u.l.ra(),u.aa&&(u.T=Date.now()-i.F,u.j.info("Handshake RTT: "+u.T+"ms")),m=u;var M=i;if(m.na=co(m,m.L?m.ba:null,m.W),M.L){$a(m.h,M);var Q=M,pe=m.O;pe&&(Q.H=pe),Q.D&&(Rr(Q),ls(Q)),m.g=M}else ro(m);u.i.length>0&&fs(u)}else ne[0]!="stop"&&ne[0]!="close"||St(u,7);else u.I==3&&(ne[0]=="stop"||ne[0]=="close"?ne[0]=="stop"?St(u,7):kr(u):ne[0]!="noop"&&u.l&&u.l.qa(ne),u.A=0)}}fn(4)}catch{}}var ed=class{constructor(i,l){this.g=i,this.map=l}};function Ma(i){this.l=i||10,o.PerformanceNavigationTiming?(i=o.performance.getEntriesByType("navigation"),i=i.length>0&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Oa(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Fa(i){return i.h?1:i.g?i.g.size:0}function Pr(i,l){return i.h?i.h==l:i.g?i.g.has(l):!1}function Dr(i,l){i.g?i.g.add(l):i.h=l}function $a(i,l){i.h&&i.h==l?i.h=null:i.g&&i.g.has(l)&&i.g.delete(l)}Ma.prototype.cancel=function(){if(this.i=qa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function qa(i){if(i.h!=null)return i.i.concat(i.h.G);if(i.g!=null&&i.g.size!==0){let l=i.i;for(const u of i.g.values())l=l.concat(u.G);return l}return A(i.i)}var Ba=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function td(i,l){if(i){i=i.split("&");for(let u=0;u<i.length;u++){const m=i[u].indexOf("=");let I,S=null;m>=0?(I=i[u].substring(0,m),S=i[u].substring(m+1)):I=i[u],l(I,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function st(i){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;i instanceof st?(this.l=i.l,yn(this,i.j),this.o=i.o,this.g=i.g,_n(this,i.u),this.h=i.h,Vr(this,Ja(i.i)),this.m=i.m):i&&(l=String(i).match(Ba))?(this.l=!1,yn(this,l[1]||"",!0),this.o=bn(l[2]||""),this.g=bn(l[3]||"",!0),_n(this,l[4]),this.h=bn(l[5]||"",!0),Vr(this,l[6]||"",!0),this.m=bn(l[7]||"")):(this.l=!1,this.i=new Tn(null,this.l))}st.prototype.toString=function(){const i=[];var l=this.j;l&&i.push(En(l,Ua,!0),":");var u=this.g;return(u||l=="file")&&(i.push("//"),(l=this.o)&&i.push(En(l,Ua,!0),"@"),i.push(gn(u).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.u,u!=null&&i.push(":",String(u))),(u=this.h)&&(this.g&&u.charAt(0)!="/"&&i.push("/"),i.push(En(u,u.charAt(0)=="/"?rd:sd,!0))),(u=this.i.toString())&&i.push("?",u),(u=this.m)&&i.push("#",En(u,ad)),i.join("")},st.prototype.resolve=function(i){const l=Ue(this);let u=!!i.j;u?yn(l,i.j):u=!!i.o,u?l.o=i.o:u=!!i.g,u?l.g=i.g:u=i.u!=null;var m=i.h;if(u)_n(l,i.u);else if(u=!!i.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var I=l.h.lastIndexOf("/");I!=-1&&(m=l.h.slice(0,I+1)+m)}if(I=m,I==".."||I==".")m="";else if(I.indexOf("./")!=-1||I.indexOf("/.")!=-1){m=I.lastIndexOf("/",0)==0,I=I.split("/");const S=[];for(let M=0;M<I.length;){const Q=I[M++];Q=="."?m&&M==I.length&&S.push(""):Q==".."?((S.length>1||S.length==1&&S[0]!="")&&S.pop(),m&&M==I.length&&S.push("")):(S.push(Q),m=!0)}m=S.join("/")}else m=I}return u?l.h=m:u=i.i.toString()!=="",u?Vr(l,Ja(i.i)):u=!!i.m,u&&(l.m=i.m),l};function Ue(i){return new st(i)}function yn(i,l,u){i.j=u?bn(l,!0):l,i.j&&(i.j=i.j.replace(/:$/,""))}function _n(i,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);i.u=l}else i.u=null}function Vr(i,l,u){l instanceof Tn?(i.i=l,od(i.i,i.l)):(u||(l=En(l,id)),i.i=new Tn(l,i.l))}function re(i,l,u){i.i.set(l,u)}function cs(i){return re(i,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),i}function bn(i,l){return i?l?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function En(i,l,u){return typeof i=="string"?(i=encodeURI(i).replace(l,nd),u&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function nd(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Ua=/[#\/\?@]/g,sd=/[#\?:]/g,rd=/[#\?]/g,id=/[#\?@]/g,ad=/#/g;function Tn(i,l){this.h=this.g=null,this.i=i||null,this.j=!!l}function At(i){i.g||(i.g=new Map,i.h=0,i.i&&td(i.i,function(l,u){i.add(decodeURIComponent(l.replace(/\+/g," ")),u)}))}n=Tn.prototype,n.add=function(i,l){At(this),this.i=null,i=Bt(this,i);let u=this.g.get(i);return u||this.g.set(i,u=[]),u.push(l),this.h+=1,this};function ja(i,l){At(i),l=Bt(i,l),i.g.has(l)&&(i.i=null,i.h-=i.g.get(l).length,i.g.delete(l))}function za(i,l){return At(i),l=Bt(i,l),i.g.has(l)}n.forEach=function(i,l){At(this),this.g.forEach(function(u,m){u.forEach(function(I){i.call(l,I,m,this)},this)},this)};function Ga(i,l){At(i);let u=[];if(typeof l=="string")za(i,l)&&(u=u.concat(i.g.get(Bt(i,l))));else for(i=Array.from(i.g.values()),l=0;l<i.length;l++)u=u.concat(i[l]);return u}n.set=function(i,l){return At(this),this.i=null,i=Bt(this,i),za(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[l]),this.h+=1,this},n.get=function(i,l){return i?(i=Ga(this,i),i.length>0?String(i[0]):l):l};function Ha(i,l,u){ja(i,l),u.length>0&&(i.i=null,i.g.set(Bt(i,l),A(u)),i.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],l=Array.from(this.g.keys());for(let m=0;m<l.length;m++){var u=l[m];const I=gn(u);u=Ga(this,u);for(let S=0;S<u.length;S++){let M=I;u[S]!==""&&(M+="="+gn(u[S])),i.push(M)}}return this.i=i.join("&")};function Ja(i){const l=new Tn;return l.i=i.i,i.g&&(l.g=new Map(i.g),l.h=i.h),l}function Bt(i,l){return l=String(l),i.j&&(l=l.toLowerCase()),l}function od(i,l){l&&!i.j&&(At(i),i.i=null,i.g.forEach(function(u,m){const I=m.toLowerCase();m!=I&&(ja(this,m),Ha(this,I,u))},i)),i.j=l}function ld(i,l){const u=new pn;if(o.Image){const m=new Image;m.onload=f(rt,u,"TestLoadImage: loaded",!0,l,m),m.onerror=f(rt,u,"TestLoadImage: error",!1,l,m),m.onabort=f(rt,u,"TestLoadImage: abort",!1,l,m),m.ontimeout=f(rt,u,"TestLoadImage: timeout",!1,l,m),o.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=i}else l(!1)}function cd(i,l){const u=new pn,m=new AbortController,I=setTimeout(()=>{m.abort(),rt(u,"TestPingServer: timeout",!1,l)},1e4);fetch(i,{signal:m.signal}).then(S=>{clearTimeout(I),S.ok?rt(u,"TestPingServer: ok",!0,l):rt(u,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(I),rt(u,"TestPingServer: error",!1,l)})}function rt(i,l,u,m,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),m(u)}catch{}}function ud(){this.g=new Hu}function xr(i){this.i=i.Sb||null,this.h=i.ab||!1}p(xr,wa),xr.prototype.g=function(){return new us(this.i,this.h)};function us(i,l){Te.call(this),this.H=i,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(us,Te),n=us.prototype,n.open=function(i,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=i,this.D=l,this.readyState=1,In(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};i&&(l.body=i),(this.H||o).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,wn(this)),this.readyState=0},n.Pa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,In(this)),this.g&&(this.readyState=3,In(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Qa(this)}else i.text().then(this.Oa.bind(this),this.ga.bind(this))};function Qa(i){i.j.read().then(i.Ma.bind(i)).catch(i.ga.bind(i))}n.Ma=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var l=i.value?i.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!i.done}))&&(this.response=this.responseText+=l)}i.done?wn(this):In(this),this.readyState==3&&Qa(this)}},n.Oa=function(i){this.g&&(this.response=this.responseText=i,wn(this))},n.Na=function(i){this.g&&(this.response=i,wn(this))},n.ga=function(){this.g&&wn(this)};function wn(i){i.readyState=4,i.l=null,i.j=null,i.B=null,In(i)}n.setRequestHeader=function(i,l){this.A.append(i,l)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],l=this.h.entries();for(var u=l.next();!u.done;)u=u.value,i.push(u[0]+": "+u[1]),u=l.next();return i.join(`\r
`)};function In(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(us.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Wa(i){let l="";return ss(i,function(u,m){l+=m,l+=":",l+=u,l+=`\r
`}),l}function Nr(i,l,u){e:{for(m in u){var m=!1;break e}m=!0}m||(u=Wa(u),typeof i=="string"?u!=null&&gn(u):re(i,l,u))}function le(i){Te.call(this),this.headers=new Map,this.L=i||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(le,Te);var dd=/^https?$/i,hd=["POST","PUT"];n=le.prototype,n.Fa=function(i){this.H=i},n.ea=function(i,l,u,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);l=l?l.toUpperCase():"GET",this.D=i,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Da.g(),this.g.onreadystatechange=b(h(this.Ca,this));try{this.B=!0,this.g.open(l,String(i),!0),this.B=!1}catch(S){Ka(this,S);return}if(i=u||"",u=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var I in m)u.set(I,m[I]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const S of m.keys())u.set(S,m.get(S));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(u.keys()).find(S=>S.toLowerCase()=="content-type"),I=o.FormData&&i instanceof o.FormData,!(Array.prototype.indexOf.call(hd,l,void 0)>=0)||m||I||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,M]of u)this.g.setRequestHeader(S,M);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(i),this.v=!1}catch(S){Ka(this,S)}};function Ka(i,l){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=l,i.o=5,Ya(i),ds(i)}function Ya(i){i.A||(i.A=!0,Ce(i,"complete"),Ce(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=i||7,Ce(this,"complete"),Ce(this,"abort"),ds(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ds(this,!0)),le.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Xa(this):this.Xa())},n.Xa=function(){Xa(this)};function Xa(i){if(i.h&&typeof a<"u"){if(i.v&&it(i)==4)setTimeout(i.Ca.bind(i),0);else if(Ce(i,"readystatechange"),it(i)==4){i.h=!1;try{const S=i.ca();e:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var u;if(!(u=l)){var m;if(m=S===0){let M=String(i.D).match(Ba)[1]||null;!M&&o.self&&o.self.location&&(M=o.self.location.protocol.slice(0,-1)),m=!dd.test(M?M.toLowerCase():"")}u=m}if(u)Ce(i,"complete"),Ce(i,"success");else{i.o=6;try{var I=it(i)>2?i.g.statusText:""}catch{I=""}i.l=I+" ["+i.ca()+"]",Ya(i)}}finally{ds(i)}}}}function ds(i,l){if(i.g){i.m&&(clearTimeout(i.m),i.m=null);const u=i.g;i.g=null,l||Ce(i,"ready");try{u.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function it(i){return i.g?i.g.readyState:0}n.ca=function(){try{return it(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(i){if(this.g){var l=this.g.responseText;return i&&l.indexOf(i)==0&&(l=l.substring(i.length)),Gu(l)}};function Za(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.F){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function fd(i){const l={};i=(i.g&&it(i)>=2&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<i.length;m++){if(_(i[m]))continue;var u=Yu(i[m]);const I=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const S=l[I]||[];l[I]=S,S.push(u)}$u(l,function(m){return m.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function An(i,l,u){return u&&u.internalChannelParams&&u.internalChannelParams[i]||l}function eo(i){this.za=0,this.i=[],this.j=new pn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=An("failFast",!1,i),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=An("baseRetryDelayMs",5e3,i),this.Za=An("retryDelaySeedMs",1e4,i),this.Ta=An("forwardChannelMaxRetries",2,i),this.va=An("forwardChannelRequestTimeoutMs",2e4,i),this.ma=i&&i.xmlHttpFactory||void 0,this.Ua=i&&i.Rb||void 0,this.Aa=i&&i.useFetchStreams||!1,this.O=void 0,this.L=i&&i.supportsCrossDomainXhr||!1,this.M="",this.h=new Ma(i&&i.concurrentRequestLimit),this.Ba=new ud,this.S=i&&i.fastHandshake||!1,this.R=i&&i.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=i&&i.Pb||!1,i&&i.ua&&this.j.ua(),i&&i.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&i&&i.detectBufferingProxy||!1,this.ia=void 0,i&&i.longPollingTimeout&&i.longPollingTimeout>0&&(this.ia=i.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=eo.prototype,n.ka=8,n.I=1,n.connect=function(i,l,u,m){Pe(0),this.W=i,this.H=l||{},u&&m!==void 0&&(this.H.OSID=u,this.H.OAID=m),this.F=this.X,this.J=co(this,null,this.W),fs(this)};function kr(i){if(to(i),i.I==3){var l=i.V++,u=Ue(i.J);if(re(u,"SID",i.M),re(u,"RID",l),re(u,"TYPE","terminate"),Sn(i,u),l=new nt(i,i.j,l),l.M=2,l.A=cs(Ue(u)),u=!1,o.navigator&&o.navigator.sendBeacon)try{u=o.navigator.sendBeacon(l.A.toString(),"")}catch{}!u&&o.Image&&(new Image().src=l.A,u=!0),u||(l.g=uo(l.j,null),l.g.ea(l.A)),l.F=Date.now(),ls(l)}lo(i)}function hs(i){i.g&&(Mr(i),i.g.cancel(),i.g=null)}function to(i){hs(i),i.v&&(o.clearTimeout(i.v),i.v=null),ms(i),i.h.cancel(),i.m&&(typeof i.m=="number"&&o.clearTimeout(i.m),i.m=null)}function fs(i){if(!Oa(i.h)&&!i.m){i.m=!0;var l=i.Ea;k||g(),N||(k(),N=!0),E.add(l,i),i.D=0}}function md(i,l){return Fa(i.h)>=i.h.j-(i.m?1:0)?!1:i.m?(i.i=l.G.concat(i.i),!0):i.I==1||i.I==2||i.D>=(i.Sa?0:i.Ta)?!1:(i.m=mn(h(i.Ea,i,l),oo(i,i.D)),i.D++,!0)}n.Ea=function(i){if(this.m)if(this.m=null,this.I==1){if(!i){this.V=Math.floor(Math.random()*1e5),i=this.V++;const I=new nt(this,this.j,i);let S=this.o;if(this.U&&(S?(S=fa(S),pa(S,this.U)):S=this.U),this.u!==null||this.R||(I.J=S,S=null),this.S)e:{for(var l=0,u=0;u<this.i.length;u++){t:{var m=this.i[u];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(l+=m,l>4096){l=u;break e}if(l===4096||u===this.i.length-1){l=u+1;break e}}l=1e3}else l=1e3;l=so(this,I,l),u=Ue(this.J),re(u,"RID",i),re(u,"CVER",22),this.G&&re(u,"X-HTTP-Session-Id",this.G),Sn(this,u),S&&(this.R?l="headers="+gn(Wa(S))+"&"+l:this.u&&Nr(u,this.u,S)),Dr(this.h,I),this.Ra&&re(u,"TYPE","init"),this.S?(re(u,"$req",l),re(u,"SID","null"),I.U=!0,Sr(I,u,null)):Sr(I,u,l),this.I=2}}else this.I==3&&(i?no(this,i):this.i.length==0||Oa(this.h)||no(this))};function no(i,l){var u;l?u=l.l:u=i.V++;const m=Ue(i.J);re(m,"SID",i.M),re(m,"RID",u),re(m,"AID",i.K),Sn(i,m),i.u&&i.o&&Nr(m,i.u,i.o),u=new nt(i,i.j,u,i.D+1),i.u===null&&(u.J=i.o),l&&(i.i=l.G.concat(i.i)),l=so(i,u,1e3),u.H=Math.round(i.va*.5)+Math.round(i.va*.5*Math.random()),Dr(i.h,u),Sr(u,m,l)}function Sn(i,l){i.H&&ss(i.H,function(u,m){re(l,m,u)}),i.l&&ss({},function(u,m){re(l,m,u)})}function so(i,l,u){u=Math.min(i.i.length,u);const m=i.l?h(i.l.Ka,i.l,i):null;e:{var I=i.i;let Q=-1;for(;;){const pe=["count="+u];Q==-1?u>0?(Q=I[0].g,pe.push("ofs="+Q)):Q=0:pe.push("ofs="+Q);let ne=!0;for(let ve=0;ve<u;ve++){var S=I[ve].g;const je=I[ve].map;if(S-=Q,S<0)Q=Math.max(0,I[ve].g-100),ne=!1;else try{S="req"+S+"_"||"";try{var M=je instanceof Map?je:Object.entries(je);for(const[Rt,at]of M){let ot=at;c(at)&&(ot=Er(at)),pe.push(S+Rt+"="+encodeURIComponent(ot))}}catch(Rt){throw pe.push(S+"type="+encodeURIComponent("_badmap")),Rt}}catch{m&&m(je)}}if(ne){M=pe.join("&");break e}}M=void 0}return i=i.i.splice(0,u),l.G=i,M}function ro(i){if(!i.g&&!i.v){i.Y=1;var l=i.Da;k||g(),N||(k(),N=!0),E.add(l,i),i.A=0}}function Lr(i){return i.g||i.v||i.A>=3?!1:(i.Y++,i.v=mn(h(i.Da,i),oo(i,i.A)),i.A++,!0)}n.Da=function(){if(this.v=null,io(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var i=4*this.T;this.j.info("BP detection timer enabled: "+i),this.B=mn(h(this.Wa,this),i)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Pe(10),hs(this),io(this))};function Mr(i){i.B!=null&&(o.clearTimeout(i.B),i.B=null)}function io(i){i.g=new nt(i,i.j,"rpc",i.Y),i.u===null&&(i.g.J=i.o),i.g.P=0;var l=Ue(i.na);re(l,"RID","rpc"),re(l,"SID",i.M),re(l,"AID",i.K),re(l,"CI",i.F?"0":"1"),!i.F&&i.ia&&re(l,"TO",i.ia),re(l,"TYPE","xmlhttp"),Sn(i,l),i.u&&i.o&&Nr(l,i.u,i.o),i.O&&(i.g.H=i.O);var u=i.g;i=i.ba,u.M=1,u.A=cs(Ue(l)),u.u=null,u.R=!0,Na(u,i)}n.Va=function(){this.C!=null&&(this.C=null,hs(this),Lr(this),Pe(19))};function ms(i){i.C!=null&&(o.clearTimeout(i.C),i.C=null)}function ao(i,l){var u=null;if(i.g==l){ms(i),Mr(i),i.g=null;var m=2}else if(Pr(i.h,l))u=l.G,$a(i.h,l),m=1;else return;if(i.I!=0){if(l.o)if(m==1){u=l.u?l.u.length:0,l=Date.now()-l.F;var I=i.D;m=as(),Ce(m,new Ca(m,u)),fs(i)}else ro(i);else if(I=l.m,I==3||I==0&&l.X>0||!(m==1&&md(i,l)||m==2&&Lr(i)))switch(u&&u.length>0&&(l=i.h,l.i=l.i.concat(u)),I){case 1:St(i,5);break;case 4:St(i,10);break;case 3:St(i,6);break;default:St(i,2)}}}function oo(i,l){let u=i.Qa+Math.floor(Math.random()*i.Za);return i.isActive()||(u*=2),u*l}function St(i,l){if(i.j.info("Error code "+l),l==2){var u=h(i.bb,i),m=i.Ua;const I=!m;m=new st(m||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||yn(m,"https"),cs(m),I?ld(m.toString(),u):cd(m.toString(),u)}else Pe(2);i.I=0,i.l&&i.l.pa(l),lo(i),to(i)}n.bb=function(i){i?(this.j.info("Successfully pinged google.com"),Pe(2)):(this.j.info("Failed to ping google.com"),Pe(1))};function lo(i){if(i.I=0,i.ja=[],i.l){const l=qa(i.h);(l.length!=0||i.i.length!=0)&&(R(i.ja,l),R(i.ja,i.i),i.h.i.length=0,A(i.i),i.i.length=0),i.l.oa()}}function co(i,l,u){var m=u instanceof st?Ue(u):new st(u);if(m.g!="")l&&(m.g=l+"."+m.g),_n(m,m.u);else{var I=o.location;m=I.protocol,l=l?l+"."+I.hostname:I.hostname,I=+I.port;const S=new st(null);m&&yn(S,m),l&&(S.g=l),I&&_n(S,I),u&&(S.h=u),m=S}return u=i.G,l=i.wa,u&&l&&re(m,u,l),re(m,"VER",i.ka),Sn(i,m),m}function uo(i,l,u){if(l&&!i.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=i.Aa&&!i.ma?new le(new xr({ab:u})):new le(i.ma),l.Fa(i.L),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ho(){}n=ho.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function ps(){}ps.prototype.g=function(i,l){return new ke(i,l)};function ke(i,l){Te.call(this),this.g=new eo(l),this.l=i,this.h=l&&l.messageUrlParams||null,i=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(i?i["X-WebChannel-Content-Type"]=l.messageContentType:i={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(i?i["X-WebChannel-Client-Profile"]=l.sa:i={"X-WebChannel-Client-Profile":l.sa}),this.g.U=i,(i=l&&l.Qb)&&!_(i)&&(this.g.u=i),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!_(l)&&(this.g.G=l,i=this.h,i!==null&&l in i&&(i=this.h,l in i&&delete i[l])),this.j=new Ut(this)}p(ke,Te),ke.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},ke.prototype.close=function(){kr(this.g)},ke.prototype.o=function(i){var l=this.g;if(typeof i=="string"){var u={};u.__data__=i,i=u}else this.v&&(u={},u.__data__=Er(i),i=u);l.i.push(new ed(l.Ya++,i)),l.I==3&&fs(l)},ke.prototype.N=function(){this.g.l=null,delete this.j,kr(this.g),delete this.g,ke.Z.N.call(this)};function fo(i){Tr.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var l=i.__sm__;if(l){e:{for(const u in l){i=u;break e}i=void 0}(this.i=i)&&(i=this.i,l=l!==null&&i in l?l[i]:void 0),this.data=l}else this.data=i}p(fo,Tr);function mo(){wr.call(this),this.status=1}p(mo,wr);function Ut(i){this.g=i}p(Ut,ho),Ut.prototype.ra=function(){Ce(this.g,"a")},Ut.prototype.qa=function(i){Ce(this.g,new fo(i))},Ut.prototype.pa=function(i){Ce(this.g,new mo)},Ut.prototype.oa=function(){Ce(this.g,"b")},ps.prototype.createWebChannel=ps.prototype.g,ke.prototype.send=ke.prototype.o,ke.prototype.open=ke.prototype.m,ke.prototype.close=ke.prototype.close,Xl=function(){return new ps},Yl=function(){return as()},Kl=wt,si={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},os.NO_ERROR=0,os.TIMEOUT=8,os.HTTP_ERROR=6,Is=os,Pa.COMPLETE="complete",Wl=Pa,Ia.EventType=hn,hn.OPEN="a",hn.CLOSE="b",hn.ERROR="c",hn.MESSAGE="d",Te.prototype.listen=Te.prototype.J,Cn=Ia,le.prototype.listenOnce=le.prototype.K,le.prototype.getLastError=le.prototype.Ha,le.prototype.getLastErrorCode=le.prototype.ya,le.prototype.getStatus=le.prototype.ca,le.prototype.getResponseJson=le.prototype.La,le.prototype.getResponseText=le.prototype.la,le.prototype.send=le.prototype.ea,le.prototype.setWithCredentials=le.prototype.Fa,Ql=le}).apply(typeof ys<"u"?ys:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class Ae{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ae.UNAUTHENTICATED=new Ae(null),Ae.GOOGLE_CREDENTIALS=new Ae("google-credentials-uid"),Ae.FIRST_PARTY=new Ae("first-party-uid"),Ae.MOCK_USER=new Ae("mock-user");/**
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
 */let sn="12.10.0";function sf(n){sn=n}/**
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
 */const xt=new Bl("@firebase/firestore");function zt(){return xt.logLevel}function $(n,...e){if(xt.logLevel<=ee.DEBUG){const t=e.map(Ai);xt.debug(`Firestore (${sn}): ${n}`,...t)}}function Ze(n,...e){if(xt.logLevel<=ee.ERROR){const t=e.map(Ai);xt.error(`Firestore (${sn}): ${n}`,...t)}}function Nt(n,...e){if(xt.logLevel<=ee.WARN){const t=e.map(Ai);xt.warn(`Firestore (${sn}): ${n}`,...t)}}function Ai(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
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
 */function z(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Zl(n,s,t)}function Zl(n,e,t){let s=`FIRESTORE (${sn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Ze(s),new Error(s)}function te(n,e,t,s){let r="Unexpected state";typeof t=="string"?r=t:s=t,n||Zl(e,r,s)}function H(n,e){return n}/**
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
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends nn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ht{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class ec{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ae.UNAUTHENTICATED)))}shutdown(){}}class af{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class of{constructor(e){this.t=e,this.currentUser=Ae.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){te(this.o===void 0,42304);let s=this.i;const r=d=>this.i!==s?(s=this.i,t(d)):Promise.resolve();let a=new ht;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new ht,e.enqueueRetryable((()=>r(this.currentUser)))};const o=()=>{const d=a;e.enqueueRetryable((async()=>{await d.promise,await r(this.currentUser)}))},c=d=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((d=>c(d))),setTimeout((()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?c(d):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new ht)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(te(typeof s.accessToken=="string",31837,{l:s}),new ec(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return te(e===null||typeof e=="string",2055,{h:e}),new Ae(e)}}class lf{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ae.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class cf{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new lf(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ae.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ro{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class uf{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,qh(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){te(this.o===void 0,3512);const s=a=>{a.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const o=a.token!==this.m;return this.m=a.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable((()=>s(a)))};const r=a=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((a=>r(a))),setTimeout((()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?r(a):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Ro(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(te(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Ro(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function df(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class Si{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=df(40);for(let a=0;a<r.length;++a)s.length<20&&r[a]<t&&(s+=e.charAt(r[a]%62))}return s}}function K(n,e){return n<e?-1:n>e?1:0}function ri(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const r=n.charAt(s),a=e.charAt(s);if(r!==a)return Ur(r)===Ur(a)?K(r,a):Ur(r)?1:-1}return K(n.length,e.length)}const hf=55296,ff=57343;function Ur(n){const e=n.charCodeAt(0);return e>=hf&&e<=ff}function Yt(n,e,t){return n.length===e.length&&n.every(((s,r)=>t(s,e[r])))}/**
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
 */const Co="__name__";class ze{constructor(e,t,s){t===void 0?t=0:t>e.length&&z(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&z(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return ze.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ze?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const a=ze.compareSegments(e.get(r),t.get(r));if(a!==0)return a}return K(e.length,t.length)}static compareSegments(e,t){const s=ze.isNumericId(e),r=ze.isNumericId(t);return s&&!r?-1:!s&&r?1:s&&r?ze.extractNumericId(e).compare(ze.extractNumericId(t)):ri(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return dt.fromString(e.substring(4,e.length-2))}}class se extends ze{construct(e,t,s){return new se(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new O(C.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((r=>r.length>0)))}return new se(t)}static emptyPath(){return new se([])}}const mf=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class be extends ze{construct(e,t,s){return new be(e,t,s)}static isValidIdentifier(e){return mf.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),be.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Co}static keyField(){return new be([Co])}static fromServerFormat(e){const t=[];let s="",r=0;const a=()=>{if(s.length===0)throw new O(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let o=!1;for(;r<e.length;){const c=e[r];if(c==="\\"){if(r+1===e.length)throw new O(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const d=e[r+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new O(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=d,r+=2}else c==="`"?(o=!o,r++):c!=="."||o?(s+=c,r++):(a(),r++)}if(a(),o)throw new O(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new be(t)}static emptyPath(){return new be([])}}/**
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
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(se.fromString(e))}static fromName(e){return new j(se.fromString(e).popFirst(5))}static empty(){return new j(se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return se.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new se(e.slice()))}}/**
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
 */function tc(n,e,t){if(!t)throw new O(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function pf(n,e,t,s){if(e===!0&&s===!0)throw new O(C.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Po(n){if(!j.isDocumentKey(n))throw new O(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Do(n){if(j.isDocumentKey(n))throw new O(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function nc(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ws(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":z(12329,{type:typeof n})}function Oe(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new O(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ws(n);throw new O(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function fe(n,e){const t={typeString:n};return e&&(t.value=e),t}function Qn(n,e){if(!nc(n))throw new O(C.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const r=e[s].typeString,a="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const o=n[s];if(r&&typeof o!==r){t=`JSON field '${s}' must be a ${r}.`;break}if(a!==void 0&&o!==a.value){t=`Expected '${s}' field to equal '${a.value}'`;break}}if(t)throw new O(C.INVALID_ARGUMENT,t);return!0}/**
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
 */const Vo=-62135596800,xo=1e6;class ie{static now(){return ie.fromMillis(Date.now())}static fromDate(e){return ie.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*xo);return new ie(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new O(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new O(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Vo)throw new O(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/xo}_compareTo(e){return this.seconds===e.seconds?K(this.nanoseconds,e.nanoseconds):K(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ie._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Qn(e,ie._jsonSchema))return new ie(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Vo;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ie._jsonSchemaVersion="firestore/timestamp/1.0",ie._jsonSchema={type:fe("string",ie._jsonSchemaVersion),seconds:fe("number"),nanoseconds:fe("number")};/**
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
 */class G{static fromTimestamp(e){return new G(e)}static min(){return new G(new ie(0,0))}static max(){return new G(new ie(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const qn=-1;function gf(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=G.fromTimestamp(s===1e9?new ie(t+1,0):new ie(t,s));return new mt(r,j.empty(),e)}function vf(n){return new mt(n.readTime,n.key,qn)}class mt{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new mt(G.min(),j.empty(),qn)}static max(){return new mt(G.max(),j.empty(),qn)}}function yf(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=j.comparator(n.documentKey,e.documentKey),t!==0?t:K(n.largestBatchId,e.largestBatchId))}/**
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
 */const _f="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class bf{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function rn(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==_f)throw n;$("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&z(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new P(((s,r)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(s,r)},this.catchCallback=a=>{this.wrapFailure(t,a).next(s,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof P?t:P.resolve(t)}catch(t){return P.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):P.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):P.reject(t)}static resolve(e){return new P(((t,s)=>{t(e)}))}static reject(e){return new P(((t,s)=>{s(e)}))}static waitFor(e){return new P(((t,s)=>{let r=0,a=0,o=!1;e.forEach((c=>{++r,c.next((()=>{++a,o&&a===r&&t()}),(d=>s(d)))})),o=!0,a===r&&t()}))}static or(e){let t=P.resolve(!1);for(const s of e)t=t.next((r=>r?P.resolve(r):s()));return t}static forEach(e,t){const s=[];return e.forEach(((r,a)=>{s.push(t.call(this,r,a))})),this.waitFor(s)}static mapArray(e,t){return new P(((s,r)=>{const a=e.length,o=new Array(a);let c=0;for(let d=0;d<a;d++){const h=d;t(e[h]).next((f=>{o[h]=f,++c,c===a&&s(o)}),(f=>r(f)))}}))}static doWhile(e,t){return new P(((s,r)=>{const a=()=>{e()===!0?t().next((()=>{a()}),r):s()};a()}))}}function Ef(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function an(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Ks{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ks.ce=-1;/**
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
 */const Ri=-1;function Ys(n){return n==null}function Os(n){return n===0&&1/n==-1/0}function Tf(n){return typeof n=="number"&&Number.isInteger(n)&&!Os(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const sc="";function wf(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=No(e)),e=If(n.get(t),e);return No(e)}function If(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const a=n.charAt(r);switch(a){case"\0":t+="";break;case sc:t+="";break;default:t+=a}}return t}function No(n){return n+sc+""}/**
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
 */function ko(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Et(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function rc(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ae{constructor(e,t){this.comparator=e,this.root=t||_e.EMPTY}insert(e,t){return new ae(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,_e.BLACK,null,null))}remove(e){return new ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,_e.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _s(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _s(this.root,e,this.comparator,!1)}getReverseIterator(){return new _s(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _s(this.root,e,this.comparator,!0)}}class _s{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?s(e.key,t):1,t&&r&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class _e{constructor(e,t,s,r,a){this.key=e,this.value=t,this.color=s??_e.RED,this.left=r??_e.EMPTY,this.right=a??_e.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,a){return new _e(e??this.key,t??this.value,s??this.color,r??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const a=s(e,r.key);return r=a<0?r.copy(null,null,null,r.left.insert(e,t,s),null):a===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return _e.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return _e.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,_e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,_e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw z(43730,{key:this.key,value:this.value});if(this.right.isRed())throw z(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw z(27949);return e+(this.isRed()?0:1)}}_e.EMPTY=null,_e.RED=!0,_e.BLACK=!1;_e.EMPTY=new class{constructor(){this.size=0}get key(){throw z(57766)}get value(){throw z(16141)}get color(){throw z(16727)}get left(){throw z(29726)}get right(){throw z(36894)}copy(e,t,s,r,a){return this}insert(e,t,s){return new _e(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ge{constructor(e){this.comparator=e,this.data=new ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Lo(this.data.getIterator())}getIteratorFrom(e){return new Lo(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof ge)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,a=s.getNext().key;if(this.comparator(r,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new ge(this.comparator);return t.data=e,t}}class Lo{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Le{constructor(e){this.fields=e,e.sort(be.comparator)}static empty(){return new Le([])}unionWith(e){let t=new ge(be.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Le(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Yt(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class ic extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ee{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(r){try{return atob(r)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new ic("Invalid base64 string: "+a):a}})(e);return new Ee(t)}static fromUint8Array(e){const t=(function(r){let a="";for(let o=0;o<r.length;++o)a+=String.fromCharCode(r[o]);return a})(e);return new Ee(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return K(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ee.EMPTY_BYTE_STRING=new Ee("");const Af=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pt(n){if(te(!!n,39018),typeof n=="string"){let e=0;const t=Af.exec(n);if(te(!!t,46558,{timestamp:n}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ce(n.seconds),nanos:ce(n.nanos)}}function ce(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function gt(n){return typeof n=="string"?Ee.fromBase64String(n):Ee.fromUint8Array(n)}/**
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
 */const ac="server_timestamp",oc="__type__",lc="__previous_value__",cc="__local_write_time__";function Ci(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[oc])==null?void 0:s.stringValue)===ac}function Xs(n){const e=n.mapValue.fields[lc];return Ci(e)?Xs(e):e}function Bn(n){const e=pt(n.mapValue.fields[cc].timestampValue);return new ie(e.seconds,e.nanos)}/**
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
 */class Sf{constructor(e,t,s,r,a,o,c,d,h,f,p){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=a,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=d,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=p}}const Fs="(default)";class Un{constructor(e,t){this.projectId=e,this.database=t||Fs}static empty(){return new Un("","")}get isDefaultDatabase(){return this.database===Fs}isEqual(e){return e instanceof Un&&e.projectId===this.projectId&&e.database===this.database}}function Rf(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new O(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Un(n.options.projectId,e)}/**
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
 */const uc="__type__",Cf="__max__",bs={mapValue:{}},dc="__vector__",$s="value";function vt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ci(n)?4:Df(n)?9007199254740991:Pf(n)?10:11:z(28295,{value:n})}function We(n,e){if(n===e)return!0;const t=vt(n);if(t!==vt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Bn(n).isEqual(Bn(e));case 3:return(function(r,a){if(typeof r.timestampValue=="string"&&typeof a.timestampValue=="string"&&r.timestampValue.length===a.timestampValue.length)return r.timestampValue===a.timestampValue;const o=pt(r.timestampValue),c=pt(a.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(r,a){return gt(r.bytesValue).isEqual(gt(a.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(r,a){return ce(r.geoPointValue.latitude)===ce(a.geoPointValue.latitude)&&ce(r.geoPointValue.longitude)===ce(a.geoPointValue.longitude)})(n,e);case 2:return(function(r,a){if("integerValue"in r&&"integerValue"in a)return ce(r.integerValue)===ce(a.integerValue);if("doubleValue"in r&&"doubleValue"in a){const o=ce(r.doubleValue),c=ce(a.doubleValue);return o===c?Os(o)===Os(c):isNaN(o)&&isNaN(c)}return!1})(n,e);case 9:return Yt(n.arrayValue.values||[],e.arrayValue.values||[],We);case 10:case 11:return(function(r,a){const o=r.mapValue.fields||{},c=a.mapValue.fields||{};if(ko(o)!==ko(c))return!1;for(const d in o)if(o.hasOwnProperty(d)&&(c[d]===void 0||!We(o[d],c[d])))return!1;return!0})(n,e);default:return z(52216,{left:n})}}function jn(n,e){return(n.values||[]).find((t=>We(t,e)))!==void 0}function Xt(n,e){if(n===e)return 0;const t=vt(n),s=vt(e);if(t!==s)return K(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return K(n.booleanValue,e.booleanValue);case 2:return(function(a,o){const c=ce(a.integerValue||a.doubleValue),d=ce(o.integerValue||o.doubleValue);return c<d?-1:c>d?1:c===d?0:isNaN(c)?isNaN(d)?0:-1:1})(n,e);case 3:return Mo(n.timestampValue,e.timestampValue);case 4:return Mo(Bn(n),Bn(e));case 5:return ri(n.stringValue,e.stringValue);case 6:return(function(a,o){const c=gt(a),d=gt(o);return c.compareTo(d)})(n.bytesValue,e.bytesValue);case 7:return(function(a,o){const c=a.split("/"),d=o.split("/");for(let h=0;h<c.length&&h<d.length;h++){const f=K(c[h],d[h]);if(f!==0)return f}return K(c.length,d.length)})(n.referenceValue,e.referenceValue);case 8:return(function(a,o){const c=K(ce(a.latitude),ce(o.latitude));return c!==0?c:K(ce(a.longitude),ce(o.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Oo(n.arrayValue,e.arrayValue);case 10:return(function(a,o){var b,A,R,V;const c=a.fields||{},d=o.fields||{},h=(b=c[$s])==null?void 0:b.arrayValue,f=(A=d[$s])==null?void 0:A.arrayValue,p=K(((R=h==null?void 0:h.values)==null?void 0:R.length)||0,((V=f==null?void 0:f.values)==null?void 0:V.length)||0);return p!==0?p:Oo(h,f)})(n.mapValue,e.mapValue);case 11:return(function(a,o){if(a===bs.mapValue&&o===bs.mapValue)return 0;if(a===bs.mapValue)return 1;if(o===bs.mapValue)return-1;const c=a.fields||{},d=Object.keys(c),h=o.fields||{},f=Object.keys(h);d.sort(),f.sort();for(let p=0;p<d.length&&p<f.length;++p){const b=ri(d[p],f[p]);if(b!==0)return b;const A=Xt(c[d[p]],h[f[p]]);if(A!==0)return A}return K(d.length,f.length)})(n.mapValue,e.mapValue);default:throw z(23264,{he:t})}}function Mo(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return K(n,e);const t=pt(n),s=pt(e),r=K(t.seconds,s.seconds);return r!==0?r:K(t.nanos,s.nanos)}function Oo(n,e){const t=n.values||[],s=e.values||[];for(let r=0;r<t.length&&r<s.length;++r){const a=Xt(t[r],s[r]);if(a)return a}return K(t.length,s.length)}function Zt(n){return ii(n)}function ii(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=pt(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return gt(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return j.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",r=!0;for(const a of t.values||[])r?r=!1:s+=",",s+=ii(a);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let r="{",a=!0;for(const o of s)a?a=!1:r+=",",r+=`${o}:${ii(t.fields[o])}`;return r+"}"})(n.mapValue):z(61005,{value:n})}function As(n){switch(vt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Xs(n);return e?16+As(e):16;case 5:return 2*n.stringValue.length;case 6:return gt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((r,a)=>r+As(a)),0)})(n.arrayValue);case 10:case 11:return(function(s){let r=0;return Et(s.fields,((a,o)=>{r+=a.length+As(o)})),r})(n.mapValue);default:throw z(13486,{value:n})}}function Fo(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function ai(n){return!!n&&"integerValue"in n}function Pi(n){return!!n&&"arrayValue"in n}function $o(n){return!!n&&"nullValue"in n}function qo(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ss(n){return!!n&&"mapValue"in n}function Pf(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[uc])==null?void 0:s.stringValue)===dc}function Nn(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Et(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Nn(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Nn(n.arrayValue.values[t]);return e}return{...n}}function Df(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Cf}/**
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
 */class Ne{constructor(e){this.value=e}static empty(){return new Ne({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Ss(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Nn(t)}setAll(e){let t=be.emptyPath(),s={},r=[];e.forEach(((o,c)=>{if(!t.isImmediateParentOf(c)){const d=this.getFieldsMap(t);this.applyChanges(d,s,r),s={},r=[],t=c.popLast()}o?s[c.lastSegment()]=Nn(o):r.push(c.lastSegment())}));const a=this.getFieldsMap(t);this.applyChanges(a,s,r)}delete(e){const t=this.field(e.popLast());Ss(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return We(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];Ss(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){Et(t,((r,a)=>e[r]=a));for(const r of s)delete e[r]}clone(){return new Ne(Nn(this.value))}}function hc(n){const e=[];return Et(n.fields,((t,s)=>{const r=new be([t]);if(Ss(s)){const a=hc(s.mapValue).fields;if(a.length===0)e.push(r);else for(const o of a)e.push(r.child(o))}else e.push(r)})),new Le(e)}/**
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
 */class Se{constructor(e,t,s,r,a,o,c){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=a,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Se(e,0,G.min(),G.min(),G.min(),Ne.empty(),0)}static newFoundDocument(e,t,s,r){return new Se(e,1,t,G.min(),s,r,0)}static newNoDocument(e,t){return new Se(e,2,t,G.min(),G.min(),Ne.empty(),0)}static newUnknownDocument(e,t){return new Se(e,3,t,G.min(),G.min(),Ne.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ne.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ne.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Se&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Se(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class qs{constructor(e,t){this.position=e,this.inclusive=t}}function Bo(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const a=e[r],o=n.position[r];if(a.field.isKeyField()?s=j.comparator(j.fromName(o.referenceValue),t.key):s=Xt(o,t.data.field(a.field)),a.dir==="desc"&&(s*=-1),s!==0)break}return s}function Uo(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!We(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class zn{constructor(e,t="asc"){this.field=e,this.dir=t}}function Vf(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class fc{}class he extends fc{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new Nf(e,t,s):t==="array-contains"?new Mf(e,s):t==="in"?new Of(e,s):t==="not-in"?new Ff(e,s):t==="array-contains-any"?new $f(e,s):new he(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new kf(e,s):new Lf(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Xt(t,this.value)):t!==null&&vt(this.value)===vt(t)&&this.matchesComparison(Xt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Be extends fc{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Be(e,t)}matches(e){return mc(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function mc(n){return n.op==="and"}function pc(n){return xf(n)&&mc(n)}function xf(n){for(const e of n.filters)if(e instanceof Be)return!1;return!0}function oi(n){if(n instanceof he)return n.field.canonicalString()+n.op.toString()+Zt(n.value);if(pc(n))return n.filters.map((e=>oi(e))).join(",");{const e=n.filters.map((t=>oi(t))).join(",");return`${n.op}(${e})`}}function gc(n,e){return n instanceof he?(function(s,r){return r instanceof he&&s.op===r.op&&s.field.isEqual(r.field)&&We(s.value,r.value)})(n,e):n instanceof Be?(function(s,r){return r instanceof Be&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce(((a,o,c)=>a&&gc(o,r.filters[c])),!0):!1})(n,e):void z(19439)}function vc(n){return n instanceof he?(function(t){return`${t.field.canonicalString()} ${t.op} ${Zt(t.value)}`})(n):n instanceof Be?(function(t){return t.op.toString()+" {"+t.getFilters().map(vc).join(" ,")+"}"})(n):"Filter"}class Nf extends he{constructor(e,t,s){super(e,t,s),this.key=j.fromName(s.referenceValue)}matches(e){const t=j.comparator(e.key,this.key);return this.matchesComparison(t)}}class kf extends he{constructor(e,t){super(e,"in",t),this.keys=yc("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Lf extends he{constructor(e,t){super(e,"not-in",t),this.keys=yc("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function yc(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>j.fromName(s.referenceValue)))}class Mf extends he{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Pi(t)&&jn(t.arrayValue,this.value)}}class Of extends he{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&jn(this.value.arrayValue,t)}}class Ff extends he{constructor(e,t){super(e,"not-in",t)}matches(e){if(jn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!jn(this.value.arrayValue,t)}}class $f extends he{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Pi(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>jn(this.value.arrayValue,s)))}}/**
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
 */class qf{constructor(e,t=null,s=[],r=[],a=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=a,this.startAt=o,this.endAt=c,this.Te=null}}function jo(n,e=null,t=[],s=[],r=null,a=null,o=null){return new qf(n,e,t,s,r,a,o)}function Di(n){const e=H(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>oi(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(a){return a.field.canonicalString()+a.dir})(s))).join(","),Ys(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>Zt(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>Zt(s))).join(",")),e.Te=t}return e.Te}function Vi(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Vf(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!gc(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Uo(n.startAt,e.startAt)&&Uo(n.endAt,e.endAt)}function li(n){return j.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class on{constructor(e,t=null,s=[],r=[],a=null,o="F",c=null,d=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=a,this.limitType=o,this.startAt=c,this.endAt=d,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function Bf(n,e,t,s,r,a,o,c){return new on(n,e,t,s,r,a,o,c)}function xi(n){return new on(n)}function zo(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Uf(n){return j.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function _c(n){return n.collectionGroup!==null}function kn(n){const e=H(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const a of e.explicitOrderBy)e.Ie.push(a),t.add(a.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new ge(be.comparator);return o.filters.forEach((d=>{d.getFlattenedFilters().forEach((h=>{h.isInequality()&&(c=c.add(h.field))}))})),c})(e).forEach((a=>{t.has(a.canonicalString())||a.isKeyField()||e.Ie.push(new zn(a,s))})),t.has(be.keyField().canonicalString())||e.Ie.push(new zn(be.keyField(),s))}return e.Ie}function Ge(n){const e=H(n);return e.Ee||(e.Ee=jf(e,kn(n))),e.Ee}function jf(n,e){if(n.limitType==="F")return jo(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((r=>{const a=r.dir==="desc"?"asc":"desc";return new zn(r.field,a)}));const t=n.endAt?new qs(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new qs(n.startAt.position,n.startAt.inclusive):null;return jo(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function ci(n,e){const t=n.filters.concat([e]);return new on(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function zf(n,e){const t=n.explicitOrderBy.concat([e]);return new on(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function Bs(n,e,t){return new on(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Zs(n,e){return Vi(Ge(n),Ge(e))&&n.limitType===e.limitType}function bc(n){return`${Di(Ge(n))}|lt:${n.limitType}`}function Gt(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((r=>vc(r))).join(", ")}]`),Ys(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((r=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(r))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((r=>Zt(r))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((r=>Zt(r))).join(",")),`Target(${s})`})(Ge(n))}; limitType=${n.limitType})`}function er(n,e){return e.isFoundDocument()&&(function(s,r){const a=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(a):j.isDocumentKey(s.path)?s.path.isEqual(a):s.path.isImmediateParentOf(a)})(n,e)&&(function(s,r){for(const a of kn(s))if(!a.field.isKeyField()&&r.data.field(a.field)===null)return!1;return!0})(n,e)&&(function(s,r){for(const a of s.filters)if(!a.matches(r))return!1;return!0})(n,e)&&(function(s,r){return!(s.startAt&&!(function(o,c,d){const h=Bo(o,c,d);return o.inclusive?h<=0:h<0})(s.startAt,kn(s),r)||s.endAt&&!(function(o,c,d){const h=Bo(o,c,d);return o.inclusive?h>=0:h>0})(s.endAt,kn(s),r))})(n,e)}function Gf(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Ec(n){return(e,t)=>{let s=!1;for(const r of kn(n)){const a=Hf(r,e,t);if(a!==0)return a;s=s||r.field.isKeyField()}return 0}}function Hf(n,e,t){const s=n.field.isKeyField()?j.comparator(e.key,t.key):(function(a,o,c){const d=o.data.field(a),h=c.data.field(a);return d!==null&&h!==null?Xt(d,h):z(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return z(19790,{direction:n.dir})}}/**
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
 */class Ot{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,a]of s)if(this.equalsFn(r,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let a=0;a<r.length;a++)if(this.equalsFn(r[a][0],e))return void(r[a]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Et(this.inner,((t,s)=>{for(const[r,a]of s)e(r,a)}))}isEmpty(){return rc(this.inner)}size(){return this.innerSize}}/**
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
 */const Jf=new ae(j.comparator);function et(){return Jf}const Tc=new ae(j.comparator);function Pn(...n){let e=Tc;for(const t of n)e=e.insert(t.key,t);return e}function wc(n){let e=Tc;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function Pt(){return Ln()}function Ic(){return Ln()}function Ln(){return new Ot((n=>n.toString()),((n,e)=>n.isEqual(e)))}const Qf=new ae(j.comparator),Wf=new ge(j.comparator);function Y(...n){let e=Wf;for(const t of n)e=e.add(t);return e}const Kf=new ge(K);function Yf(){return Kf}/**
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
 */function Ni(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Os(e)?"-0":e}}function Ac(n){return{integerValue:""+n}}function Xf(n,e){return Tf(e)?Ac(e):Ni(n,e)}/**
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
 */class tr{constructor(){this._=void 0}}function Zf(n,e,t){return n instanceof Gn?(function(r,a){const o={fields:{[oc]:{stringValue:ac},[cc]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return a&&Ci(a)&&(a=Xs(a)),a&&(o.fields[lc]=a),{mapValue:o}})(t,e):n instanceof Hn?Rc(n,e):n instanceof Jn?Cc(n,e):(function(r,a){const o=Sc(r,a),c=Go(o)+Go(r.Ae);return ai(o)&&ai(r.Ae)?Ac(c):Ni(r.serializer,c)})(n,e)}function em(n,e,t){return n instanceof Hn?Rc(n,e):n instanceof Jn?Cc(n,e):t}function Sc(n,e){return n instanceof Us?(function(s){return ai(s)||(function(a){return!!a&&"doubleValue"in a})(s)})(e)?e:{integerValue:0}:null}class Gn extends tr{}class Hn extends tr{constructor(e){super(),this.elements=e}}function Rc(n,e){const t=Pc(e);for(const s of n.elements)t.some((r=>We(r,s)))||t.push(s);return{arrayValue:{values:t}}}class Jn extends tr{constructor(e){super(),this.elements=e}}function Cc(n,e){let t=Pc(e);for(const s of n.elements)t=t.filter((r=>!We(r,s)));return{arrayValue:{values:t}}}class Us extends tr{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Go(n){return ce(n.integerValue||n.doubleValue)}function Pc(n){return Pi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class tm{constructor(e,t){this.field=e,this.transform=t}}function nm(n,e){return n.field.isEqual(e.field)&&(function(s,r){return s instanceof Hn&&r instanceof Hn||s instanceof Jn&&r instanceof Jn?Yt(s.elements,r.elements,We):s instanceof Us&&r instanceof Us?We(s.Ae,r.Ae):s instanceof Gn&&r instanceof Gn})(n.transform,e.transform)}class sm{constructor(e,t){this.version=e,this.transformResults=t}}class Fe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Fe}static exists(e){return new Fe(void 0,e)}static updateTime(e){return new Fe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Rs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class nr{}function Dc(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ki(n.key,Fe.none()):new Wn(n.key,n.data,Fe.none());{const t=n.data,s=Ne.empty();let r=new ge(be.comparator);for(let a of e.fields)if(!r.has(a)){let o=t.field(a);o===null&&a.length>1&&(a=a.popLast(),o=t.field(a)),o===null?s.delete(a):s.set(a,o),r=r.add(a)}return new Tt(n.key,s,new Le(r.toArray()),Fe.none())}}function rm(n,e,t){n instanceof Wn?(function(r,a,o){const c=r.value.clone(),d=Jo(r.fieldTransforms,a,o.transformResults);c.setAll(d),a.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(n,e,t):n instanceof Tt?(function(r,a,o){if(!Rs(r.precondition,a))return void a.convertToUnknownDocument(o.version);const c=Jo(r.fieldTransforms,a,o.transformResults),d=a.data;d.setAll(Vc(r)),d.setAll(c),a.convertToFoundDocument(o.version,d).setHasCommittedMutations()})(n,e,t):(function(r,a,o){a.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function Mn(n,e,t,s){return n instanceof Wn?(function(a,o,c,d){if(!Rs(a.precondition,o))return c;const h=a.value.clone(),f=Qo(a.fieldTransforms,d,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null})(n,e,t,s):n instanceof Tt?(function(a,o,c,d){if(!Rs(a.precondition,o))return c;const h=Qo(a.fieldTransforms,d,o),f=o.data;return f.setAll(Vc(a)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map((p=>p.field)))})(n,e,t,s):(function(a,o,c){return Rs(a.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(n,e,t)}function im(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),a=Sc(s.transform,r||null);a!=null&&(t===null&&(t=Ne.empty()),t.set(s.field,a))}return t||null}function Ho(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Yt(s,r,((a,o)=>nm(a,o)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Wn extends nr{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Tt extends nr{constructor(e,t,s,r,a=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function Vc(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function Jo(n,e,t){const s=new Map;te(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let r=0;r<t.length;r++){const a=n[r],o=a.transform,c=e.data.field(a.field);s.set(a.field,em(o,c,t[r]))}return s}function Qo(n,e,t){const s=new Map;for(const r of n){const a=r.transform,o=t.data.field(r.field);s.set(r.field,Zf(a,o,e))}return s}class ki extends nr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class am extends nr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class om{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const a=this.mutations[r];a.key.isEqual(e.key)&&rm(a,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Mn(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Mn(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Ic();return this.mutations.forEach((r=>{const a=e.get(r.key),o=a.overlayedDocument;let c=this.applyToLocalView(o,a.mutatedFields);c=t.has(r.key)?null:c;const d=Dc(o,c);d!==null&&s.set(r.key,d),o.isValidDocument()||o.convertToNoDocument(G.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Y())}isEqual(e){return this.batchId===e.batchId&&Yt(this.mutations,e.mutations,((t,s)=>Ho(t,s)))&&Yt(this.baseMutations,e.baseMutations,((t,s)=>Ho(t,s)))}}class Li{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){te(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let r=(function(){return Qf})();const a=e.mutations;for(let o=0;o<a.length;o++)r=r.insert(a[o].key,s[o].version);return new Li(e,t,s,r)}}/**
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
 */class lm{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class cm{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var de,Z;function um(n){switch(n){case C.OK:return z(64938);case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return z(15467,{code:n})}}function xc(n){if(n===void 0)return Ze("GRPC error has no .code"),C.UNKNOWN;switch(n){case de.OK:return C.OK;case de.CANCELLED:return C.CANCELLED;case de.UNKNOWN:return C.UNKNOWN;case de.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case de.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case de.INTERNAL:return C.INTERNAL;case de.UNAVAILABLE:return C.UNAVAILABLE;case de.UNAUTHENTICATED:return C.UNAUTHENTICATED;case de.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case de.NOT_FOUND:return C.NOT_FOUND;case de.ALREADY_EXISTS:return C.ALREADY_EXISTS;case de.PERMISSION_DENIED:return C.PERMISSION_DENIED;case de.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case de.ABORTED:return C.ABORTED;case de.OUT_OF_RANGE:return C.OUT_OF_RANGE;case de.UNIMPLEMENTED:return C.UNIMPLEMENTED;case de.DATA_LOSS:return C.DATA_LOSS;default:return z(39323,{code:n})}}(Z=de||(de={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function dm(){return new TextEncoder}/**
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
 */const hm=new dt([4294967295,4294967295],0);function Wo(n){const e=dm().encode(n),t=new Jl;return t.update(e),new Uint8Array(t.digest())}function Ko(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new dt([t,s],0),new dt([r,a],0)]}class Mi{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Dn(`Invalid padding: ${t}`);if(s<0)throw new Dn(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Dn(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Dn(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=dt.fromNumber(this.ge)}ye(e,t,s){let r=e.add(t.multiply(dt.fromNumber(s)));return r.compare(hm)===1&&(r=new dt([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Wo(e),[s,r]=Ko(t);for(let a=0;a<this.hashCount;a++){const o=this.ye(s,r,a);if(!this.we(o))return!1}return!0}static create(e,t,s){const r=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),o=new Mi(a,r,t);return s.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const t=Wo(e),[s,r]=Ko(t);for(let a=0;a<this.hashCount;a++){const o=this.ye(s,r,a);this.be(o)}}be(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Dn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class sr{constructor(e,t,s,r,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const r=new Map;return r.set(e,Kn.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new sr(G.min(),r,new ae(K),et(),Y())}}class Kn{constructor(e,t,s,r,a){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Kn(s,t,Y(),Y(),Y())}}/**
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
 */class Cs{constructor(e,t,s,r){this.Se=e,this.removedTargetIds=t,this.key=s,this.De=r}}class Nc{constructor(e,t){this.targetId=e,this.Ce=t}}class kc{constructor(e,t,s=Ee.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class Yo{constructor(){this.ve=0,this.Fe=Xo(),this.Me=Ee.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Y(),t=Y(),s=Y();return this.Fe.forEach(((r,a)=>{switch(a){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:z(38017,{changeType:a})}})),new Kn(this.Me,this.xe,e,t,s)}Ke(){this.Oe=!1,this.Fe=Xo()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,te(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class fm{constructor(e){this.Ge=e,this.ze=new Map,this.je=et(),this.He=Es(),this.Je=Es(),this.Ze=new ae(K)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.Ke(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:z(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,r)=>{this.rt(r)&&t(r)}))}st(e){const t=e.targetId,s=e.Ce.count,r=this.ot(t);if(r){const a=r.target;if(li(a))if(s===0){const o=new j(a.path);this.et(t,o,Se.newNoDocument(o,G.min()))}else te(s===1,20013,{expectedCount:s});else{const o=this._t(t);if(o!==s){const c=this.ut(e),d=c?this.ct(c,e,o):1;if(d!==0){this.it(t);const h=d===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:a=0}=t;let o,c;try{o=gt(s).toUint8Array()}catch(d){if(d instanceof ic)return Nt("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw d}try{c=new Mi(o,r,a)}catch(d){return Nt(d instanceof Dn?"BloomFilter error: ":"Applying bloom filter failed: ",d),null}return c.ge===0?null:c}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let r=0;return s.forEach((a=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${a.path.canonicalString()}`;e.mightContain(c)||(this.et(t,a,null),r++)})),r}Tt(e){const t=new Map;this.ze.forEach(((a,o)=>{const c=this.ot(o);if(c){if(a.current&&li(c.target)){const d=new j(c.target.path);this.It(d).has(o)||this.Et(o,d)||this.et(o,d,Se.newNoDocument(d,e))}a.Be&&(t.set(o,a.ke()),a.Ke())}}));let s=Y();this.Je.forEach(((a,o)=>{let c=!0;o.forEachWhile((d=>{const h=this.ot(d);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(s=s.add(a))})),this.je.forEach(((a,o)=>o.setReadTime(e)));const r=new sr(e,t,this.Ze,this.je,s);return this.je=et(),this.He=Es(),this.Je=Es(),this.Ze=new ae(K),r}Ye(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,s),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const r=this.nt(e);this.Et(e,t)?r.qe(t,1):r.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Yo,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new ge(K),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new ge(K),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||$("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Yo),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Es(){return new ae(j.comparator)}function Xo(){return new ae(j.comparator)}const mm={asc:"ASCENDING",desc:"DESCENDING"},pm={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},gm={and:"AND",or:"OR"};class vm{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ui(n,e){return n.useProto3Json||Ys(e)?e:{value:e}}function js(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Lc(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function ym(n,e){return js(n,e.toTimestamp())}function He(n){return te(!!n,49232),G.fromTimestamp((function(t){const s=pt(t);return new ie(s.seconds,s.nanos)})(n))}function Oi(n,e){return di(n,e).canonicalString()}function di(n,e){const t=(function(r){return new se(["projects",r.projectId,"databases",r.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Mc(n){const e=se.fromString(n);return te(Bc(e),10190,{key:e.toString()}),e}function hi(n,e){return Oi(n.databaseId,e.path)}function jr(n,e){const t=Mc(e);if(t.get(1)!==n.databaseId.projectId)throw new O(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new O(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new j(Fc(t))}function Oc(n,e){return Oi(n.databaseId,e)}function _m(n){const e=Mc(n);return e.length===4?se.emptyPath():Fc(e)}function fi(n){return new se(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Fc(n){return te(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Zo(n,e,t){return{name:hi(n,e),fields:t.value.mapValue.fields}}function bm(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:z(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],a=(function(h,f){return h.useProto3Json?(te(f===void 0||typeof f=="string",58123),Ee.fromBase64String(f||"")):(te(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Ee.fromUint8Array(f||new Uint8Array))})(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(h){const f=h.code===void 0?C.UNKNOWN:xc(h.code);return new O(f,h.message||"")})(o);t=new kc(s,r,a,c||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=jr(n,s.document.name),a=He(s.document.updateTime),o=s.document.createTime?He(s.document.createTime):G.min(),c=new Ne({mapValue:{fields:s.document.fields}}),d=Se.newFoundDocument(r,a,o,c),h=s.targetIds||[],f=s.removedTargetIds||[];t=new Cs(h,f,d.key,d)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=jr(n,s.document),a=s.readTime?He(s.readTime):G.min(),o=Se.newNoDocument(r,a),c=s.removedTargetIds||[];t=new Cs([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=jr(n,s.document),a=s.removedTargetIds||[];t=new Cs([],a,r,null)}else{if(!("filter"in e))return z(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:a}=s,o=new cm(r,a),c=s.targetId;t=new Nc(c,o)}}return t}function Em(n,e){let t;if(e instanceof Wn)t={update:Zo(n,e.key,e.value)};else if(e instanceof ki)t={delete:hi(n,e.key)};else if(e instanceof Tt)t={update:Zo(n,e.key,e.data),updateMask:Dm(e.fieldMask)};else{if(!(e instanceof am))return z(16599,{dt:e.type});t={verify:hi(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(a,o){const c=o.transform;if(c instanceof Gn)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Hn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Jn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Us)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw z(20930,{transform:o.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(r,a){return a.updateTime!==void 0?{updateTime:ym(r,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:z(27497)})(n,e.precondition)),t}function Tm(n,e){return n&&n.length>0?(te(e!==void 0,14353),n.map((t=>(function(r,a){let o=r.updateTime?He(r.updateTime):He(a);return o.isEqual(G.min())&&(o=He(a)),new sm(o,r.transformResults||[])})(t,e)))):[]}function wm(n,e){return{documents:[Oc(n,e.path)]}}function Im(n,e){const t={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Oc(n,r);const a=(function(h){if(h.length!==0)return qc(Be.create(h,"and"))})(e.filters);a&&(t.structuredQuery.where=a);const o=(function(h){if(h.length!==0)return h.map((f=>(function(b){return{field:Ht(b.field),direction:Rm(b.dir)}})(f)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=ui(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{ft:t,parent:r}}function Am(n){let e=_m(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){te(s===1,65062);const f=t.from[0];f.allDescendants?r=f.collectionId:e=e.child(f.collectionId)}let a=[];t.where&&(a=(function(p){const b=$c(p);return b instanceof Be&&pc(b)?b.getFilters():[b]})(t.where));let o=[];t.orderBy&&(o=(function(p){return p.map((b=>(function(R){return new zn(Jt(R.field),(function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(R.direction))})(b)))})(t.orderBy));let c=null;t.limit&&(c=(function(p){let b;return b=typeof p=="object"?p.value:p,Ys(b)?null:b})(t.limit));let d=null;t.startAt&&(d=(function(p){const b=!!p.before,A=p.values||[];return new qs(A,b)})(t.startAt));let h=null;return t.endAt&&(h=(function(p){const b=!p.before,A=p.values||[];return new qs(A,b)})(t.endAt)),Bf(e,r,o,a,c,"F",d,h)}function Sm(n,e){const t=(function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return z(28987,{purpose:r})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function $c(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Jt(t.unaryFilter.field);return he.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=Jt(t.unaryFilter.field);return he.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=Jt(t.unaryFilter.field);return he.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Jt(t.unaryFilter.field);return he.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return z(61313);default:return z(60726)}})(n):n.fieldFilter!==void 0?(function(t){return he.create(Jt(t.fieldFilter.field),(function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return z(58110);default:return z(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Be.create(t.compositeFilter.filters.map((s=>$c(s))),(function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return z(1026)}})(t.compositeFilter.op))})(n):z(30097,{filter:n})}function Rm(n){return mm[n]}function Cm(n){return pm[n]}function Pm(n){return gm[n]}function Ht(n){return{fieldPath:n.canonicalString()}}function Jt(n){return be.fromServerFormat(n.fieldPath)}function qc(n){return n instanceof he?(function(t){if(t.op==="=="){if(qo(t.value))return{unaryFilter:{field:Ht(t.field),op:"IS_NAN"}};if($o(t.value))return{unaryFilter:{field:Ht(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(qo(t.value))return{unaryFilter:{field:Ht(t.field),op:"IS_NOT_NAN"}};if($o(t.value))return{unaryFilter:{field:Ht(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ht(t.field),op:Cm(t.op),value:t.value}}})(n):n instanceof Be?(function(t){const s=t.getFilters().map((r=>qc(r)));return s.length===1?s[0]:{compositeFilter:{op:Pm(t.op),filters:s}}})(n):z(54877,{filter:n})}function Dm(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Bc(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Uc(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
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
 */class lt{constructor(e,t,s,r,a=G.min(),o=G.min(),c=Ee.EMPTY_BYTE_STRING,d=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=d}withSequenceNumber(e){return new lt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new lt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new lt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new lt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Vm{constructor(e){this.yt=e}}function xm(n){const e=Am({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Bs(e,e.limit,"L"):e}/**
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
 */class Nm{constructor(){this.Sn=new km}addToCollectionParentIndex(e,t){return this.Sn.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(mt.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(mt.min())}updateCollectionGroup(e,t,s){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}}class km{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new ge(se.comparator),a=!r.has(s);return this.index[t]=r.add(s),a}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new ge(se.comparator)).toArray()}}/**
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
 */const el={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},jc=41943040;class xe{static withCacheSize(e){return new xe(e,xe.DEFAULT_COLLECTION_PERCENTILE,xe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */xe.DEFAULT_COLLECTION_PERCENTILE=10,xe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,xe.DEFAULT=new xe(jc,xe.DEFAULT_COLLECTION_PERCENTILE,xe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),xe.DISABLED=new xe(-1,0,0);/**
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
 */class en{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new en(0)}static ar(){return new en(-1)}}/**
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
 */const tl="LruGarbageCollector",Lm=1048576;function nl([n,e],[t,s]){const r=K(n,t);return r===0?K(e,s):r}class Mm{constructor(e){this.Pr=e,this.buffer=new ge(nl),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();nl(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Om{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){$(tl,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){an(t)?$(tl,"Ignoring IndexedDB error during garbage collection: ",t):await rn(t)}await this.Ar(3e5)}))}}class Fm{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return P.resolve(Ks.ce);const s=new Mm(t);return this.Vr.forEachTarget(e,(r=>s.Er(r.sequenceNumber))).next((()=>this.Vr.mr(e,(r=>s.Er(r))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?($("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(el)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?($("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),el):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let s,r,a,o,c,d,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?($("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),r=this.params.maximumSequenceNumbersToCollect):r=p,o=Date.now(),this.nthSequenceNumber(e,r)))).next((p=>(s=p,c=Date.now(),this.removeTargets(e,s,t)))).next((p=>(a=p,d=Date.now(),this.removeOrphanedDocuments(e,s)))).next((p=>(h=Date.now(),zt()<=ee.DEBUG&&$("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${r} in `+(c-o)+`ms
	Removed ${a} targets in `+(d-c)+`ms
	Removed ${p} documents in `+(h-d)+`ms
Total Duration: ${h-f}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:a,documentsRemoved:p}))))}}function $m(n,e){return new Fm(n,e)}/**
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
 */class qm{constructor(){this.changes=new Ot((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Se.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?P.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Bm{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Um{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(s=r,this.remoteDocumentCache.getEntry(e,t)))).next((r=>(s!==null&&Mn(s.mutation,r,Le.empty(),ie.now()),r)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Y()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Y()){const r=Pt();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,s).next((a=>{let o=Pn();return a.forEach(((c,d)=>{o=o.insert(c,d.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const s=Pt();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Y())))}populateOverlays(e,t,s){const r=[];return s.forEach((a=>{t.has(a)||r.push(a)})),this.documentOverlayCache.getOverlays(e,r).next((a=>{a.forEach(((o,c)=>{t.set(o,c)}))}))}computeViews(e,t,s,r){let a=et();const o=Ln(),c=(function(){return Ln()})();return t.forEach(((d,h)=>{const f=s.get(h.key);r.has(h.key)&&(f===void 0||f.mutation instanceof Tt)?a=a.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Mn(f.mutation,h,f.mutation.getFieldMask(),ie.now())):o.set(h.key,Le.empty())})),this.recalculateAndSaveOverlays(e,a).next((d=>(d.forEach(((h,f)=>o.set(h,f))),t.forEach(((h,f)=>c.set(h,new Bm(f,o.get(h)??null)))),c)))}recalculateAndSaveOverlays(e,t){const s=Ln();let r=new ae(((o,c)=>o-c)),a=Y();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const c of o)c.keys().forEach((d=>{const h=t.get(d);if(h===null)return;let f=s.get(d)||Le.empty();f=c.applyToLocalView(h,f),s.set(d,f);const p=(r.get(c.batchId)||Y()).add(d);r=r.insert(c.batchId,p)}))})).next((()=>{const o=[],c=r.getReverseIterator();for(;c.hasNext();){const d=c.getNext(),h=d.key,f=d.value,p=Ic();f.forEach((b=>{if(!a.has(b)){const A=Dc(t.get(b),s.get(b));A!==null&&p.set(b,A),a=a.add(b)}})),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return P.waitFor(o)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,r){return Uf(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):_c(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,r):this.getDocumentsMatchingCollectionQuery(e,t,s,r)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next((a=>{const o=r-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-a.size):P.resolve(Pt());let c=qn,d=a;return o.next((h=>P.forEach(h,((f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),a.get(f)?P.resolve():this.remoteDocumentCache.getEntry(e,f).next((b=>{d=d.insert(f,b)}))))).next((()=>this.populateOverlays(e,h,a))).next((()=>this.computeViews(e,d,h,Y()))).next((f=>({batchId:c,changes:wc(f)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new j(t)).next((s=>{let r=Pn();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,r){const a=t.collectionGroup;let o=Pn();return this.indexManager.getCollectionParents(e,a).next((c=>P.forEach(c,(d=>{const h=(function(p,b){return new on(b,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(t,d.child(a));return this.getDocumentsMatchingCollectionQuery(e,h,s,r).next((f=>{f.forEach(((p,b)=>{o=o.insert(p,b)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,s,r){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((o=>(a=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,a,r)))).next((o=>{a.forEach(((d,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,Se.newInvalidDocument(f)))}));let c=Pn();return o.forEach(((d,h)=>{const f=a.get(d);f!==void 0&&Mn(f.mutation,h,Le.empty(),ie.now()),er(t,h)&&(c=c.insert(d,h))})),c}))}}/**
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
 */class jm{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return P.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(r){return{id:r.id,version:r.version,createTime:He(r.createTime)}})(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(r){return{name:r.name,query:xm(r.bundledQuery),readTime:He(r.readTime)}})(t)),P.resolve()}}/**
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
 */class zm{constructor(){this.overlays=new ae(j.comparator),this.Lr=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Pt();return P.forEach(t,(r=>this.getOverlay(e,r).next((a=>{a!==null&&s.set(r,a)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((r,a)=>{this.bt(e,t,a)})),P.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.Lr.get(s);return r!==void 0&&(r.forEach((a=>this.overlays=this.overlays.remove(a))),this.Lr.delete(s)),P.resolve()}getOverlaysForCollection(e,t,s){const r=Pt(),a=t.length+1,o=new j(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const d=c.getNext().value,h=d.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===a&&d.largestBatchId>s&&r.set(d.getKey(),d)}return P.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let a=new ae(((h,f)=>h-f));const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>s){let f=a.get(h.largestBatchId);f===null&&(f=Pt(),a=a.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=Pt(),d=a.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach(((h,f)=>c.set(h,f))),!(c.size()>=r)););return P.resolve(c)}bt(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.Lr.get(r.largestBatchId).delete(s.key);this.Lr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new lm(t,s));let a=this.Lr.get(t);a===void 0&&(a=Y(),this.Lr.set(t,a)),this.Lr.set(t,a.add(s.key))}}/**
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
 */class Gm{constructor(){this.sessionToken=Ee.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}}/**
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
 */class Fi{constructor(){this.kr=new ge(ye.Kr),this.qr=new ge(ye.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const s=new ye(e,t);this.kr=this.kr.add(s),this.qr=this.qr.add(s)}$r(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new ye(e,t))}Qr(e,t){e.forEach((s=>this.removeReference(s,t)))}Gr(e){const t=new j(new se([])),s=new ye(t,e),r=new ye(t,e+1),a=[];return this.qr.forEachInRange([s,r],(o=>{this.Wr(o),a.push(o.key)})),a}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new j(new se([])),s=new ye(t,e),r=new ye(t,e+1);let a=Y();return this.qr.forEachInRange([s,r],(o=>{a=a.add(o.key)})),a}containsKey(e){const t=new ye(e,0),s=this.kr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class ye{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return j.comparator(e.key,t.key)||K(e.Hr,t.Hr)}static Ur(e,t){return K(e.Hr,t.Hr)||j.comparator(e.key,t.key)}}/**
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
 */class Hm{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new ge(ye.Kr)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const a=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new om(a,t,s,r);this.mutationQueue.push(o);for(const c of r)this.Jr=this.Jr.add(new ye(c.key,a)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return P.resolve(o)}lookupMutationBatch(e,t){return P.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.Xr(s),a=r<0?0:r;return P.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?Ri:this.Yn-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new ye(t,0),r=new ye(t,Number.POSITIVE_INFINITY),a=[];return this.Jr.forEachInRange([s,r],(o=>{const c=this.Zr(o.Hr);a.push(c)})),P.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new ge(K);return t.forEach((r=>{const a=new ye(r,0),o=new ye(r,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([a,o],(c=>{s=s.add(c.Hr)}))})),P.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let a=s;j.isDocumentKey(a)||(a=a.child(""));const o=new ye(new j(a),0);let c=new ge(K);return this.Jr.forEachWhile((d=>{const h=d.key.path;return!!s.isPrefixOf(h)&&(h.length===r&&(c=c.add(d.Hr)),!0)}),o),P.resolve(this.Yr(c))}Yr(e){const t=[];return e.forEach((s=>{const r=this.Zr(s);r!==null&&t.push(r)})),t}removeMutationBatch(e,t){te(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Jr;return P.forEach(t.mutations,(r=>{const a=new ye(r.key,t.batchId);return s=s.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Jr=s}))}nr(e){}containsKey(e,t){const s=new ye(t,0),r=this.Jr.firstAfterOrEqual(s);return P.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Jm{constructor(e){this.ti=e,this.docs=(function(){return new ae(j.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),a=r?r.size:0,o=this.ti(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:o}),this.size+=o-a,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return P.resolve(s?s.document.mutableCopy():Se.newInvalidDocument(t))}getEntries(e,t){let s=et();return t.forEach((r=>{const a=this.docs.get(r);s=s.insert(r,a?a.document.mutableCopy():Se.newInvalidDocument(r))})),P.resolve(s)}getDocumentsMatchingQuery(e,t,s,r){let a=et();const o=t.path,c=new j(o.child("__id-9223372036854775808__")),d=this.docs.getIteratorFrom(c);for(;d.hasNext();){const{key:h,value:{document:f}}=d.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||yf(vf(f),s)<=0||(r.has(f.key)||er(t,f))&&(a=a.insert(f.key,f.mutableCopy()))}return P.resolve(a)}getAllFromCollectionGroup(e,t,s,r){z(9500)}ni(e,t){return P.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new Qm(this)}getSize(e){return P.resolve(this.size)}}class Qm extends qm{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,r)=>{r.isValidDocument()?t.push(this.Mr.addEntry(e,r)):this.Mr.removeEntry(s)})),P.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class Wm{constructor(e){this.persistence=e,this.ri=new Ot((t=>Di(t)),Vi),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.ii=0,this.si=new Fi,this.targetCount=0,this.oi=en._r()}forEachTarget(e,t){return this.ri.forEach(((s,r)=>t(r))),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.ii&&(this.ii=t),P.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new en(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.lr(t),P.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,s){let r=0;const a=[];return this.ri.forEach(((o,c)=>{c.sequenceNumber<=t&&s.get(c.targetId)===null&&(this.ri.delete(o),a.push(this.removeMatchingKeysForTargetId(e,c.targetId)),r++)})),P.waitFor(a).next((()=>r))}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){const s=this.ri.get(t)||null;return P.resolve(s)}addMatchingKeys(e,t,s){return this.si.$r(t,s),P.resolve()}removeMatchingKeys(e,t,s){this.si.Qr(t,s);const r=this.persistence.referenceDelegate,a=[];return r&&t.forEach((o=>{a.push(r.markPotentiallyOrphaned(e,o))})),P.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),P.resolve()}getMatchingKeysForTargetId(e,t){const s=this.si.jr(t);return P.resolve(s)}containsKey(e,t){return P.resolve(this.si.containsKey(t))}}/**
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
 */class zc{constructor(e,t){this._i={},this.overlays={},this.ai=new Ks(0),this.ui=!1,this.ui=!0,this.ci=new Gm,this.referenceDelegate=e(this),this.li=new Wm(this),this.indexManager=new Nm,this.remoteDocumentCache=(function(r){return new Jm(r)})((s=>this.referenceDelegate.hi(s))),this.serializer=new Vm(t),this.Pi=new jm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new zm,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this._i[e.toKey()];return s||(s=new Hm(t,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,s){$("MemoryPersistence","Starting transaction:",e);const r=new Km(this.ai.next());return this.referenceDelegate.Ti(),s(r).next((a=>this.referenceDelegate.Ii(r).next((()=>a)))).toPromise().then((a=>(r.raiseOnCommittedEvent(),a)))}Ei(e,t){return P.or(Object.values(this._i).map((s=>()=>s.containsKey(e,t))))}}class Km extends bf{constructor(e){super(),this.currentSequenceNumber=e}}class $i{constructor(e){this.persistence=e,this.Ri=new Fi,this.Ai=null}static Vi(e){return new $i(e)}get di(){if(this.Ai)return this.Ai;throw z(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.di.delete(s.toString()),P.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.di.add(s.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),P.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((r=>this.di.add(r.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((r=>{r.forEach((a=>this.di.add(a.toString())))})).next((()=>s.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.di,(s=>{const r=j.fromPath(s);return this.mi(e,r).next((a=>{a||t.removeEntry(r,G.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((s=>{s?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return P.or([()=>P.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class zs{constructor(e,t){this.persistence=e,this.fi=new Ot((s=>wf(s.path)),((s,r)=>s.isEqual(r))),this.garbageCollector=$m(this,t)}static Vi(e,t){return new zs(e,t)}Ti(){}Ii(e){return P.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((r=>s+r))))}pr(e){let t=0;return this.mr(e,(s=>{t++})).next((()=>t))}mr(e,t){return P.forEach(this.fi,((s,r)=>this.wr(e,s,r).next((a=>a?P.resolve():t(r)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const r=this.persistence.getRemoteDocumentCache(),a=r.newChangeBuffer();return r.ni(e,(o=>this.wr(e,o,t).next((c=>{c||(s++,a.removeEntry(o,G.min()))})))).next((()=>a.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),P.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),P.resolve()}removeReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),P.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),P.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=As(e.data.value)),t}wr(e,t,s){return P.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.fi.get(t);return P.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class qi{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Ts=s,this.Is=r}static Es(e,t){let s=Y(),r=Y();for(const a of t.docChanges)switch(a.type){case 0:s=s.add(a.doc.key);break;case 1:r=r.add(a.doc.key)}return new qi(e,t.fromCache,s,r)}}/**
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
 */class Ym{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Xm{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return Od()?8:Ef(Ld())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,r){const a={result:null};return this.gs(e,t).next((o=>{a.result=o})).next((()=>{if(!a.result)return this.ps(e,t,r,s).next((o=>{a.result=o}))})).next((()=>{if(a.result)return;const o=new Ym;return this.ys(e,t,o).next((c=>{if(a.result=c,this.As)return this.ws(e,t,o,c.size)}))})).next((()=>a.result))}ws(e,t,s,r){return s.documentReadCount<this.Vs?(zt()<=ee.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",Gt(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),P.resolve()):(zt()<=ee.DEBUG&&$("QueryEngine","Query:",Gt(t),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.ds*r?(zt()<=ee.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",Gt(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ge(t))):P.resolve())}gs(e,t){if(zo(t))return P.resolve(null);let s=Ge(t);return this.indexManager.getIndexType(e,s).next((r=>r===0?null:(t.limit!==null&&r===1&&(t=Bs(t,null,"F"),s=Ge(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((a=>{const o=Y(...a);return this.fs.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,s).next((d=>{const h=this.bs(t,c);return this.Ss(t,h,o,d.readTime)?this.gs(e,Bs(t,null,"F")):this.Ds(e,h,t,d)}))))})))))}ps(e,t,s,r){return zo(t)||r.isEqual(G.min())?P.resolve(null):this.fs.getDocuments(e,s).next((a=>{const o=this.bs(t,a);return this.Ss(t,o,s,r)?P.resolve(null):(zt()<=ee.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Gt(t)),this.Ds(e,o,t,gf(r,qn)).next((c=>c)))}))}bs(e,t){let s=new ge(Ec(e));return t.forEach(((r,a)=>{er(e,a)&&(s=s.add(a))})),s}Ss(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(r)>0)}ys(e,t,s){return zt()<=ee.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",Gt(t)),this.fs.getDocumentsMatchingQuery(e,t,mt.min(),s)}Ds(e,t,s,r){return this.fs.getDocumentsMatchingQuery(e,s,r).next((a=>(t.forEach((o=>{a=a.insert(o.key,o)})),a)))}}/**
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
 */const Bi="LocalStore",Zm=3e8;class ep{constructor(e,t,s,r){this.persistence=e,this.Cs=t,this.serializer=r,this.vs=new ae(K),this.Fs=new Ot((a=>Di(a)),Vi),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Um(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function tp(n,e,t,s){return new ep(n,e,t,s)}async function Gc(n,e){const t=H(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next((a=>(r=a,t.Os(e),t.mutationQueue.getAllMutationBatches(s)))).next((a=>{const o=[],c=[];let d=Y();for(const h of r){o.push(h.batchId);for(const f of h.mutations)d=d.add(f.key)}for(const h of a){c.push(h.batchId);for(const f of h.mutations)d=d.add(f.key)}return t.localDocuments.getDocuments(s,d).next((h=>({Ns:h,removedBatchIds:o,addedBatchIds:c})))}))}))}function np(n,e){const t=H(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const r=e.batch.keys(),a=t.xs.newChangeBuffer({trackRemovals:!0});return(function(c,d,h,f){const p=h.batch,b=p.keys();let A=P.resolve();return b.forEach((R=>{A=A.next((()=>f.getEntry(d,R))).next((V=>{const x=h.docVersions.get(R);te(x!==null,48541),V.version.compareTo(x)<0&&(p.applyToRemoteDocument(V,h),V.isValidDocument()&&(V.setReadTime(h.commitVersion),f.addEntry(V)))}))})),A.next((()=>c.mutationQueue.removeMutationBatch(d,p)))})(t,s,e,a).next((()=>a.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(c){let d=Y();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(d=d.add(c.batch.mutations[h].key));return d})(e)))).next((()=>t.localDocuments.getDocuments(s,r)))}))}function Hc(n){const e=H(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function sp(n,e){const t=H(n),s=e.snapshotVersion;let r=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(a=>{const o=t.xs.newChangeBuffer({trackRemovals:!0});r=t.vs;const c=[];e.targetChanges.forEach(((f,p)=>{const b=r.get(p);if(!b)return;c.push(t.li.removeMatchingKeys(a,f.removedDocuments,p).next((()=>t.li.addMatchingKeys(a,f.addedDocuments,p))));let A=b.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(p)!==null?A=A.withResumeToken(Ee.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,s)),r=r.insert(p,A),(function(V,x,D){return V.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=Zm?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0})(b,A,f)&&c.push(t.li.updateTargetData(a,A))}));let d=et(),h=Y();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(a,f))})),c.push(rp(a,o,e.documentUpdates).next((f=>{d=f.Bs,h=f.Ls}))),!s.isEqual(G.min())){const f=t.li.getLastRemoteSnapshotVersion(a).next((p=>t.li.setTargetsMetadata(a,a.currentSequenceNumber,s)));c.push(f)}return P.waitFor(c).next((()=>o.apply(a))).next((()=>t.localDocuments.getLocalViewOfDocuments(a,d,h))).next((()=>d))})).then((a=>(t.vs=r,a)))}function rp(n,e,t){let s=Y(),r=Y();return t.forEach((a=>s=s.add(a))),e.getEntries(n,s).next((a=>{let o=et();return t.forEach(((c,d)=>{const h=a.get(c);d.isFoundDocument()!==h.isFoundDocument()&&(r=r.add(c)),d.isNoDocument()&&d.version.isEqual(G.min())?(e.removeEntry(c,d.readTime),o=o.insert(c,d)):!h.isValidDocument()||d.version.compareTo(h.version)>0||d.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(d),o=o.insert(c,d)):$(Bi,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",d.version)})),{Bs:o,Ls:r}}))}function ip(n,e){const t=H(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Ri),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function ap(n,e){const t=H(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let r;return t.li.getTargetData(s,e).next((a=>a?(r=a,P.resolve(r)):t.li.allocateTargetId(s).next((o=>(r=new lt(e,o,"TargetPurposeListen",s.currentSequenceNumber),t.li.addTargetData(s,r).next((()=>r)))))))})).then((s=>{const r=t.vs.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.vs=t.vs.insert(s.targetId,s),t.Fs.set(e,s.targetId)),s}))}async function mi(n,e,t){const s=H(n),r=s.vs.get(e),a=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",a,(o=>s.persistence.referenceDelegate.removeTarget(o,r)))}catch(o){if(!an(o))throw o;$(Bi,`Failed to update sequence numbers for target ${e}: ${o}`)}s.vs=s.vs.remove(e),s.Fs.delete(r.target)}function sl(n,e,t){const s=H(n);let r=G.min(),a=Y();return s.persistence.runTransaction("Execute query","readwrite",(o=>(function(d,h,f){const p=H(d),b=p.Fs.get(f);return b!==void 0?P.resolve(p.vs.get(b)):p.li.getTargetData(h,f)})(s,o,Ge(e)).next((c=>{if(c)return r=c.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(o,c.targetId).next((d=>{a=d}))})).next((()=>s.Cs.getDocumentsMatchingQuery(o,e,t?r:G.min(),t?a:Y()))).next((c=>(op(s,Gf(e),c),{documents:c,ks:a})))))}function op(n,e,t){let s=n.Ms.get(e)||G.min();t.forEach(((r,a)=>{a.readTime.compareTo(s)>0&&(s=a.readTime)})),n.Ms.set(e,s)}class rl{constructor(){this.activeTargetIds=Yf()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lp{constructor(){this.vo=new rl,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,s){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new rl,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class cp{Mo(e){}shutdown(){}}/**
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
 */const il="ConnectivityMonitor";class al{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){$(il,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){$(il,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ts=null;function pi(){return Ts===null?Ts=(function(){return 268435456+Math.round(2147483648*Math.random())})():Ts++,"0x"+Ts.toString(16)}/**
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
 */const zr="RestConnection",up={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class dp{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${s}/databases/${r}`,this.$o=this.databaseId.database===Fs?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Wo(e,t,s,r,a){const o=pi(),c=this.Qo(e,t.toUriEncodedString());$(zr,`Sending RPC '${e}' ${o}:`,c,s);const d={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(d,r,a);const{host:h}=new URL(c),f=wi(h);return this.zo(e,c,d,s,f).then((p=>($(zr,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw Nt(zr,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",s),p}))}jo(e,t,s,r,a,o){return this.Wo(e,t,s,r,a)}Go(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+sn})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((r,a)=>e[a]=r)),s&&s.headers.forEach(((r,a)=>e[a]=r))}Qo(e,t){const s=up[e];let r=`${this.qo}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}/**
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
 */class hp{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const we="WebChannelConnection",Rn=(n,e,t)=>{n.listen(e,(s=>{try{t(s)}catch(r){setTimeout((()=>{throw r}),0)}}))};class Wt extends dp{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Wt.c_){const e=Yl();Rn(e,Kl.STAT_EVENT,(t=>{t.stat===si.PROXY?$(we,"STAT_EVENT: detected buffering proxy"):t.stat===si.NOPROXY&&$(we,"STAT_EVENT: detected no buffering proxy")})),Wt.c_=!0}}zo(e,t,s,r,a){const o=pi();return new Promise(((c,d)=>{const h=new Ql;h.setWithCredentials(!0),h.listenOnce(Wl.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case Is.NO_ERROR:const p=h.getResponseJson();$(we,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case Is.TIMEOUT:$(we,`RPC '${e}' ${o} timed out`),d(new O(C.DEADLINE_EXCEEDED,"Request time out"));break;case Is.HTTP_ERROR:const b=h.getStatus();if($(we,`RPC '${e}' ${o} failed with status:`,b,"response text:",h.getResponseText()),b>0){let A=h.getResponseJson();Array.isArray(A)&&(A=A[0]);const R=A==null?void 0:A.error;if(R&&R.status&&R.message){const V=(function(D){const L=D.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(L)>=0?L:C.UNKNOWN})(R.status);d(new O(V,R.message))}else d(new O(C.UNKNOWN,"Server responded with status "+h.getStatus()))}else d(new O(C.UNAVAILABLE,"Connection failed."));break;default:z(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{$(we,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(r);$(we,`RPC '${e}' ${o} sending request:`,r),h.send(t,"POST",f,s,15)}))}T_(e,t,s){const r=pi(),a=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(c.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,t,s),c.encodeInitMessageHeaders=!0;const h=a.join("");$(we,`Creating RPC '${e}' stream ${r}: ${h}`,c);const f=o.createWebChannel(h,c);this.I_(f);let p=!1,b=!1;const A=new hp({Ho:R=>{b?$(we,`Not sending because RPC '${e}' stream ${r} is closed:`,R):(p||($(we,`Opening RPC '${e}' stream ${r} transport.`),f.open(),p=!0),$(we,`RPC '${e}' stream ${r} sending:`,R),f.send(R))},Jo:()=>f.close()});return Rn(f,Cn.EventType.OPEN,(()=>{b||($(we,`RPC '${e}' stream ${r} transport opened.`),A.i_())})),Rn(f,Cn.EventType.CLOSE,(()=>{b||(b=!0,$(we,`RPC '${e}' stream ${r} transport closed`),A.o_(),this.E_(f))})),Rn(f,Cn.EventType.ERROR,(R=>{b||(b=!0,Nt(we,`RPC '${e}' stream ${r} transport errored. Name:`,R.name,"Message:",R.message),A.o_(new O(C.UNAVAILABLE,"The operation could not be completed")))})),Rn(f,Cn.EventType.MESSAGE,(R=>{var V;if(!b){const x=R.data[0];te(!!x,16349);const D=x,L=(D==null?void 0:D.error)||((V=D[0])==null?void 0:V.error);if(L){$(we,`RPC '${e}' stream ${r} received error:`,L);const q=L.status;let F=(function(E){const g=de[E];if(g!==void 0)return xc(g)})(q),k=L.message;q==="NOT_FOUND"&&k.includes("database")&&k.includes("does not exist")&&k.includes(this.databaseId.database)&&Nt(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),F===void 0&&(F=C.INTERNAL,k="Unknown error status: "+q+" with message "+L.message),b=!0,A.o_(new O(F,k)),f.close()}else $(we,`RPC '${e}' stream ${r} received:`,x),A.__(x)}})),Wt.u_(),setTimeout((()=>{A.s_()}),0),A}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,s){super.Go(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Xl()}}/**
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
 */function fp(n){return new Wt(n)}function Gr(){return typeof document<"u"?document:null}/**
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
 */function rr(n){return new vm(n,!0)}/**
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
 */Wt.c_=!1;class Jc{constructor(e,t,s=1e3,r=1.5,a=6e4){this.Ci=e,this.timerId=t,this.R_=s,this.A_=r,this.V_=a,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-s);r>0&&$("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,r,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const ol="PersistentStream";class Qc{constructor(e,t,s,r,a,o,c,d){this.Ci=e,this.b_=s,this.S_=r,this.connection=a,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=d,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Jc(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===C.RESOURCE_EXHAUSTED?(Ze(t.toString()),Ze("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,r])=>{this.D_===t&&this.G_(s,r)}),(s=>{e((()=>{const r=new O(C.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(r)}))}))}G_(e,t){const s=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.Yo((()=>{s((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((r=>{s((()=>this.z_(r)))})),this.stream.onMessage((r=>{s((()=>++this.F_==1?this.H_(r):this.onNext(r)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return $(ol,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():($(ol,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class mp extends Qc{constructor(e,t,s,r,a,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,o),this.serializer=a}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=bm(this.serializer,e),s=(function(a){if(!("targetChange"in a))return G.min();const o=a.targetChange;return o.targetIds&&o.targetIds.length?G.min():o.readTime?He(o.readTime):G.min()})(e);return this.listener.J_(t,s)}Z_(e){const t={};t.database=fi(this.serializer),t.addTarget=(function(a,o){let c;const d=o.target;if(c=li(d)?{documents:wm(a,d)}:{query:Im(a,d).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Lc(a,o.resumeToken);const h=ui(a,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(G.min())>0){c.readTime=js(a,o.snapshotVersion.toTimestamp());const h=ui(a,o.expectedCount);h!==null&&(c.expectedCount=h)}return c})(this.serializer,e);const s=Sm(this.serializer,e);s&&(t.labels=s),this.K_(t)}X_(e){const t={};t.database=fi(this.serializer),t.removeTarget=e,this.K_(t)}}class pp extends Qc{constructor(e,t,s,r,a,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,o),this.serializer=a}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}H_(e){return te(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,te(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){te(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Tm(e.writeResults,e.commitTime),s=He(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=fi(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>Em(this.serializer,s)))};this.K_(t)}}/**
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
 */class gp{}class vp extends gp{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new O(C.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,o])=>this.connection.Wo(e,di(t,s),r,a,o))).catch((a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new O(C.UNKNOWN,a.toString())}))}jo(e,t,s,r,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.jo(e,di(t,s),r,o,c,a))).catch((o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new O(C.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function yp(n,e,t,s){return new vp(n,e,t,s)}class _p{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ze(t),this.aa=!1):$("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const kt="RemoteStore";class bp{constructor(e,t,s,r,a){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=a,this.Aa.Mo((o=>{s.enqueueAndForget((async()=>{Ft(this)&&($(kt,"Restarting streams for network reachability change."),await(async function(d){const h=H(d);h.Ea.add(4),await Yn(h),h.Va.set("Unknown"),h.Ea.delete(4),await ir(h)})(this))}))})),this.Va=new _p(s,r)}}async function ir(n){if(Ft(n))for(const e of n.Ra)await e(!0)}async function Yn(n){for(const e of n.Ra)await e(!1)}function Wc(n,e){const t=H(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Gi(t)?zi(t):ln(t).O_()&&ji(t,e))}function Ui(n,e){const t=H(n),s=ln(t);t.Ia.delete(e),s.O_()&&Kc(t,e),t.Ia.size===0&&(s.O_()?s.L_():Ft(t)&&t.Va.set("Unknown"))}function ji(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(G.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ln(n).Z_(e)}function Kc(n,e){n.da.$e(e),ln(n).X_(e)}function zi(n){n.da=new fm({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),ln(n).start(),n.Va.ua()}function Gi(n){return Ft(n)&&!ln(n).x_()&&n.Ia.size>0}function Ft(n){return H(n).Ea.size===0}function Yc(n){n.da=void 0}async function Ep(n){n.Va.set("Online")}async function Tp(n){n.Ia.forEach(((e,t)=>{ji(n,e)}))}async function wp(n,e){Yc(n),Gi(n)?(n.Va.ha(e),zi(n)):n.Va.set("Unknown")}async function Ip(n,e,t){if(n.Va.set("Online"),e instanceof kc&&e.state===2&&e.cause)try{await(async function(r,a){const o=a.cause;for(const c of a.targetIds)r.Ia.has(c)&&(await r.remoteSyncer.rejectListen(c,o),r.Ia.delete(c),r.da.removeTarget(c))})(n,e)}catch(s){$(kt,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Gs(n,s)}else if(e instanceof Cs?n.da.Xe(e):e instanceof Nc?n.da.st(e):n.da.tt(e),!t.isEqual(G.min()))try{const s=await Hc(n.localStore);t.compareTo(s)>=0&&await(function(a,o){const c=a.da.Tt(o);return c.targetChanges.forEach(((d,h)=>{if(d.resumeToken.approximateByteSize()>0){const f=a.Ia.get(h);f&&a.Ia.set(h,f.withResumeToken(d.resumeToken,o))}})),c.targetMismatches.forEach(((d,h)=>{const f=a.Ia.get(d);if(!f)return;a.Ia.set(d,f.withResumeToken(Ee.EMPTY_BYTE_STRING,f.snapshotVersion)),Kc(a,d);const p=new lt(f.target,d,h,f.sequenceNumber);ji(a,p)})),a.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(s){$(kt,"Failed to raise snapshot:",s),await Gs(n,s)}}async function Gs(n,e,t){if(!an(e))throw e;n.Ea.add(1),await Yn(n),n.Va.set("Offline"),t||(t=()=>Hc(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{$(kt,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await ir(n)}))}function Xc(n,e){return e().catch((t=>Gs(n,t,e)))}async function ar(n){const e=H(n),t=yt(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Ri;for(;Ap(e);)try{const r=await ip(e.localStore,s);if(r===null){e.Ta.length===0&&t.L_();break}s=r.batchId,Sp(e,r)}catch(r){await Gs(e,r)}Zc(e)&&eu(e)}function Ap(n){return Ft(n)&&n.Ta.length<10}function Sp(n,e){n.Ta.push(e);const t=yt(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function Zc(n){return Ft(n)&&!yt(n).x_()&&n.Ta.length>0}function eu(n){yt(n).start()}async function Rp(n){yt(n).ra()}async function Cp(n){const e=yt(n);for(const t of n.Ta)e.ea(t.mutations)}async function Pp(n,e,t){const s=n.Ta.shift(),r=Li.from(s,e,t);await Xc(n,(()=>n.remoteSyncer.applySuccessfulWrite(r))),await ar(n)}async function Dp(n,e){e&&yt(n).Y_&&await(async function(s,r){if((function(o){return um(o)&&o!==C.ABORTED})(r.code)){const a=s.Ta.shift();yt(s).B_(),await Xc(s,(()=>s.remoteSyncer.rejectFailedWrite(a.batchId,r))),await ar(s)}})(n,e),Zc(n)&&eu(n)}async function ll(n,e){const t=H(n);t.asyncQueue.verifyOperationInProgress(),$(kt,"RemoteStore received new credentials");const s=Ft(t);t.Ea.add(3),await Yn(t),s&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await ir(t)}async function Vp(n,e){const t=H(n);e?(t.Ea.delete(2),await ir(t)):e||(t.Ea.add(2),await Yn(t),t.Va.set("Unknown"))}function ln(n){return n.ma||(n.ma=(function(t,s,r){const a=H(t);return a.sa(),new mp(s,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,r)})(n.datastore,n.asyncQueue,{Zo:Ep.bind(null,n),Yo:Tp.bind(null,n),t_:wp.bind(null,n),J_:Ip.bind(null,n)}),n.Ra.push((async e=>{e?(n.ma.B_(),Gi(n)?zi(n):n.Va.set("Unknown")):(await n.ma.stop(),Yc(n))}))),n.ma}function yt(n){return n.fa||(n.fa=(function(t,s,r){const a=H(t);return a.sa(),new pp(s,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,r)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:Rp.bind(null,n),t_:Dp.bind(null,n),ta:Cp.bind(null,n),na:Pp.bind(null,n)}),n.Ra.push((async e=>{e?(n.fa.B_(),await ar(n)):(await n.fa.stop(),n.Ta.length>0&&($(kt,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
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
 */class Hi{constructor(e,t,s,r,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=a,this.deferred=new ht,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,r,a){const o=Date.now()+s,c=new Hi(e,t,o,r,a);return c.start(s),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ji(n,e){if(Ze("AsyncQueue",`${e}: ${n}`),an(n))return new O(C.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Kt{static emptySet(e){return new Kt(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||j.comparator(t.key,s.key):(t,s)=>j.comparator(t.key,s.key),this.keyedMap=Pn(),this.sortedSet=new ae(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Kt)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,a=s.getNext().key;if(!r.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Kt;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class cl{constructor(){this.ga=new ae(j.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):z(63341,{Vt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class tn{constructor(e,t,s,r,a,o,c,d,h){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=a,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=d,this.hasCachedResults=h}static fromInitialDocuments(e,t,s,r,a){const o=[];return t.forEach((c=>{o.push({type:0,doc:c})})),new tn(e,t,Kt.emptySet(t),o,s,r,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Zs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class xp{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class Np{constructor(){this.queries=ul(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const r=H(t),a=r.queries;r.queries=ul(),a.forEach(((o,c)=>{for(const d of c.ba)d.onError(s)}))})(this,new O(C.ABORTED,"Firestore shutting down"))}}function ul(){return new Ot((n=>bc(n)),Zs)}async function tu(n,e){const t=H(n);let s=3;const r=e.query;let a=t.queries.get(r);a?!a.Sa()&&e.Da()&&(s=2):(a=new xp,s=e.Da()?0:1);try{switch(s){case 0:a.wa=await t.onListen(r,!0);break;case 1:a.wa=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(o){const c=Ji(o,`Initialization of query '${Gt(e.query)}' failed`);return void e.onError(c)}t.queries.set(r,a),a.ba.push(e),e.va(t.onlineState),a.wa&&e.Fa(a.wa)&&Qi(t)}async function nu(n,e){const t=H(n),s=e.query;let r=3;const a=t.queries.get(s);if(a){const o=a.ba.indexOf(e);o>=0&&(a.ba.splice(o,1),a.ba.length===0?r=e.Da()?0:1:!a.Sa()&&e.Da()&&(r=2))}switch(r){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function kp(n,e){const t=H(n);let s=!1;for(const r of e){const a=r.query,o=t.queries.get(a);if(o){for(const c of o.ba)c.Fa(r)&&(s=!0);o.wa=r}}s&&Qi(t)}function Lp(n,e,t){const s=H(n),r=s.queries.get(e);if(r)for(const a of r.ba)a.onError(t);s.queries.delete(e)}function Qi(n){n.Ca.forEach((e=>{e.next()}))}var gi,dl;(dl=gi||(gi={})).Ma="default",dl.Cache="cache";class su{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new tn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.Ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=tn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==gi.Cache}}/**
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
 */class ru{constructor(e){this.key=e}}class iu{constructor(e){this.key=e}}class Mp{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Y(),this.mutatedKeys=Y(),this.eu=Ec(e),this.tu=new Kt(this.eu)}get nu(){return this.Za}ru(e,t){const s=t?t.iu:new cl,r=t?t.tu:this.tu;let a=t?t.mutatedKeys:this.mutatedKeys,o=r,c=!1;const d=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,h=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((f,p)=>{const b=r.get(f),A=er(this.query,p)?p:null,R=!!b&&this.mutatedKeys.has(b.key),V=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let x=!1;b&&A?b.data.isEqual(A.data)?R!==V&&(s.track({type:3,doc:A}),x=!0):this.su(b,A)||(s.track({type:2,doc:A}),x=!0,(d&&this.eu(A,d)>0||h&&this.eu(A,h)<0)&&(c=!0)):!b&&A?(s.track({type:0,doc:A}),x=!0):b&&!A&&(s.track({type:1,doc:b}),x=!0,(d||h)&&(c=!0)),x&&(A?(o=o.add(A),a=V?a.add(f):a.delete(f)):(o=o.delete(f),a=a.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),a=a.delete(f.key),s.track({type:1,doc:f})}return{tu:o,iu:s,Ss:c,mutatedKeys:a}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,r){const a=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((f,p)=>(function(A,R){const V=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z(20277,{Vt:x})}};return V(A)-V(R)})(f.type,p.type)||this.eu(f.doc,p.doc))),this.ou(s),r=r??!1;const c=t&&!r?this._u():[],d=this.Ya.size===0&&this.current&&!r?1:0,h=d!==this.Xa;return this.Xa=d,o.length!==0||h?{snapshot:new tn(this.query,e.tu,a,o,e.mutatedKeys,d===0,h,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new cl,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=Y(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Ya=this.Ya.add(s.key))}));const t=[];return e.forEach((s=>{this.Ya.has(s)||t.push(new iu(s))})),this.Ya.forEach((s=>{e.has(s)||t.push(new ru(s))})),t}cu(e){this.Za=e.ks,this.Ya=Y();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return tn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Wi="SyncEngine";class Op{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class Fp{constructor(e){this.key=e,this.hu=!1}}class $p{constructor(e,t,s,r,a,o){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=a,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Ot((c=>bc(c)),Zs),this.Iu=new Map,this.Eu=new Set,this.Ru=new ae(j.comparator),this.Au=new Map,this.Vu=new Fi,this.du={},this.mu=new Map,this.fu=en.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function qp(n,e,t=!0){const s=du(n);let r;const a=s.Tu.get(e);return a?(s.sharedClientState.addLocalQueryTarget(a.targetId),r=a.view.lu()):r=await au(s,e,t,!0),r}async function Bp(n,e){const t=du(n);await au(t,e,!0,!1)}async function au(n,e,t,s){const r=await ap(n.localStore,Ge(e)),a=r.targetId,o=n.sharedClientState.addLocalQueryTarget(a,t);let c;return s&&(c=await Up(n,e,a,o==="current",r.resumeToken)),n.isPrimaryClient&&t&&Wc(n.remoteStore,r),c}async function Up(n,e,t,s,r){n.pu=(p,b,A)=>(async function(V,x,D,L){let q=x.view.ru(D);q.Ss&&(q=await sl(V.localStore,x.query,!1).then((({documents:E})=>x.view.ru(E,q))));const F=L&&L.targetChanges.get(x.targetId),k=L&&L.targetMismatches.get(x.targetId)!=null,N=x.view.applyChanges(q,V.isPrimaryClient,F,k);return fl(V,x.targetId,N.au),N.snapshot})(n,p,b,A);const a=await sl(n.localStore,e,!0),o=new Mp(e,a.ks),c=o.ru(a.documents),d=Kn.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),h=o.applyChanges(c,n.isPrimaryClient,d);fl(n,t,h.au);const f=new Op(e,t,o);return n.Tu.set(e,f),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),h.snapshot}async function jp(n,e,t){const s=H(n),r=s.Tu.get(e),a=s.Iu.get(r.targetId);if(a.length>1)return s.Iu.set(r.targetId,a.filter((o=>!Zs(o,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await mi(s.localStore,r.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(r.targetId),t&&Ui(s.remoteStore,r.targetId),vi(s,r.targetId)})).catch(rn)):(vi(s,r.targetId),await mi(s.localStore,r.targetId,!0))}async function zp(n,e){const t=H(n),s=t.Tu.get(e),r=t.Iu.get(s.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Ui(t.remoteStore,s.targetId))}async function Gp(n,e,t){const s=Xp(n);try{const r=await(function(o,c){const d=H(o),h=ie.now(),f=c.reduce(((A,R)=>A.add(R.key)),Y());let p,b;return d.persistence.runTransaction("Locally write mutations","readwrite",(A=>{let R=et(),V=Y();return d.xs.getEntries(A,f).next((x=>{R=x,R.forEach(((D,L)=>{L.isValidDocument()||(V=V.add(D))}))})).next((()=>d.localDocuments.getOverlayedDocuments(A,R))).next((x=>{p=x;const D=[];for(const L of c){const q=im(L,p.get(L.key).overlayedDocument);q!=null&&D.push(new Tt(L.key,q,hc(q.value.mapValue),Fe.exists(!0)))}return d.mutationQueue.addMutationBatch(A,h,D,c)})).next((x=>{b=x;const D=x.applyToLocalDocumentSet(p,V);return d.documentOverlayCache.saveOverlays(A,x.batchId,D)}))})).then((()=>({batchId:b.batchId,changes:wc(p)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),(function(o,c,d){let h=o.du[o.currentUser.toKey()];h||(h=new ae(K)),h=h.insert(c,d),o.du[o.currentUser.toKey()]=h})(s,r.batchId,t),await Xn(s,r.changes),await ar(s.remoteStore)}catch(r){const a=Ji(r,"Failed to persist write");t.reject(a)}}async function ou(n,e){const t=H(n);try{const s=await sp(t.localStore,e);e.targetChanges.forEach(((r,a)=>{const o=t.Au.get(a);o&&(te(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?o.hu=!0:r.modifiedDocuments.size>0?te(o.hu,14607):r.removedDocuments.size>0&&(te(o.hu,42227),o.hu=!1))})),await Xn(t,s,e)}catch(s){await rn(s)}}function hl(n,e,t){const s=H(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.Tu.forEach(((a,o)=>{const c=o.view.va(e);c.snapshot&&r.push(c.snapshot)})),(function(o,c){const d=H(o);d.onlineState=c;let h=!1;d.queries.forEach(((f,p)=>{for(const b of p.ba)b.va(c)&&(h=!0)})),h&&Qi(d)})(s.eventManager,e),r.length&&s.Pu.J_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Hp(n,e,t){const s=H(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.Au.get(e),a=r&&r.key;if(a){let o=new ae(j.comparator);o=o.insert(a,Se.newNoDocument(a,G.min()));const c=Y().add(a),d=new sr(G.min(),new Map,new ae(K),o,c);await ou(s,d),s.Ru=s.Ru.remove(a),s.Au.delete(e),Ki(s)}else await mi(s.localStore,e,!1).then((()=>vi(s,e,t))).catch(rn)}async function Jp(n,e){const t=H(n),s=e.batch.batchId;try{const r=await np(t.localStore,e);cu(t,s,null),lu(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Xn(t,r)}catch(r){await rn(r)}}async function Qp(n,e,t){const s=H(n);try{const r=await(function(o,c){const d=H(o);return d.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let f;return d.mutationQueue.lookupMutationBatch(h,c).next((p=>(te(p!==null,37113),f=p.keys(),d.mutationQueue.removeMutationBatch(h,p)))).next((()=>d.mutationQueue.performConsistencyCheck(h))).next((()=>d.documentOverlayCache.removeOverlaysForBatchId(h,f,c))).next((()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f))).next((()=>d.localDocuments.getDocuments(h,f)))}))})(s.localStore,e);cu(s,e,t),lu(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Xn(s,r)}catch(r){await rn(r)}}function lu(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function cu(n,e,t){const s=H(n);let r=s.du[s.currentUser.toKey()];if(r){const a=r.get(e);a&&(t?a.reject(t):a.resolve(),r=r.remove(e)),s.du[s.currentUser.toKey()]=r}}function vi(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Iu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Iu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach((s=>{n.Vu.containsKey(s)||uu(n,s)}))}function uu(n,e){n.Eu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(Ui(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),Ki(n))}function fl(n,e,t){for(const s of t)s instanceof ru?(n.Vu.addReference(s.key,e),Wp(n,s)):s instanceof iu?($(Wi,"Document no longer in limbo: "+s.key),n.Vu.removeReference(s.key,e),n.Vu.containsKey(s.key)||uu(n,s.key)):z(19791,{wu:s})}function Wp(n,e){const t=e.key,s=t.path.canonicalString();n.Ru.get(t)||n.Eu.has(s)||($(Wi,"New document in limbo: "+t),n.Eu.add(s),Ki(n))}function Ki(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new j(se.fromString(e)),s=n.fu.next();n.Au.set(s,new Fp(t)),n.Ru=n.Ru.insert(t,s),Wc(n.remoteStore,new lt(Ge(xi(t.path)),s,"TargetPurposeLimboResolution",Ks.ce))}}async function Xn(n,e,t){const s=H(n),r=[],a=[],o=[];s.Tu.isEmpty()||(s.Tu.forEach(((c,d)=>{o.push(s.pu(d,e,t).then((h=>{var f;if((h||t)&&s.isPrimaryClient){const p=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(d.targetId))==null?void 0:f.current;s.sharedClientState.updateQueryState(d.targetId,p?"current":"not-current")}if(h){r.push(h);const p=qi.Es(d.targetId,h);a.push(p)}})))})),await Promise.all(o),s.Pu.J_(r),await(async function(d,h){const f=H(d);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>P.forEach(h,(b=>P.forEach(b.Ts,(A=>f.persistence.referenceDelegate.addReference(p,b.targetId,A))).next((()=>P.forEach(b.Is,(A=>f.persistence.referenceDelegate.removeReference(p,b.targetId,A)))))))))}catch(p){if(!an(p))throw p;$(Bi,"Failed to update sequence numbers: "+p)}for(const p of h){const b=p.targetId;if(!p.fromCache){const A=f.vs.get(b),R=A.snapshotVersion,V=A.withLastLimboFreeSnapshotVersion(R);f.vs=f.vs.insert(b,V)}}})(s.localStore,a))}async function Kp(n,e){const t=H(n);if(!t.currentUser.isEqual(e)){$(Wi,"User change. New user:",e.toKey());const s=await Gc(t.localStore,e);t.currentUser=e,(function(a,o){a.mu.forEach((c=>{c.forEach((d=>{d.reject(new O(C.CANCELLED,o))}))})),a.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Xn(t,s.Ns)}}function Yp(n,e){const t=H(n),s=t.Au.get(e);if(s&&s.hu)return Y().add(s.key);{let r=Y();const a=t.Iu.get(e);if(!a)return r;for(const o of a){const c=t.Tu.get(o);r=r.unionWith(c.view.nu)}return r}}function du(n){const e=H(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=ou.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Yp.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Hp.bind(null,e),e.Pu.J_=kp.bind(null,e.eventManager),e.Pu.yu=Lp.bind(null,e.eventManager),e}function Xp(n){const e=H(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Jp.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Qp.bind(null,e),e}class Hs{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=rr(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return tp(this.persistence,new Xm,e.initialUser,this.serializer)}Cu(e){return new zc($i.Vi,this.serializer)}Du(e){return new lp}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Hs.provider={build:()=>new Hs};class Zp extends Hs{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){te(this.persistence.referenceDelegate instanceof zs,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new Om(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?xe.withCacheSize(this.cacheSizeBytes):xe.DEFAULT;return new zc((s=>zs.Vi(s,t)),this.serializer)}}class yi{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>hl(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Kp.bind(null,this.syncEngine),await Vp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Np})()}createDatastore(e){const t=rr(e.databaseInfo.databaseId),s=fp(e.databaseInfo);return yp(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,r,a,o,c){return new bp(s,r,a,o,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>hl(this.syncEngine,t,0)),(function(){return al.v()?new al:new cp})())}createSyncEngine(e,t){return(function(r,a,o,c,d,h,f){const p=new $p(r,a,o,c,d,h);return f&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(r){const a=H(r);$(kt,"RemoteStore shutting down."),a.Ea.add(5),await Yn(a),a.Aa.shutdown(),a.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}yi.provider={build:()=>new yi};/**
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
 */class hu{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Ze("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const _t="FirestoreClient";class eg{constructor(e,t,s,r,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=r,this.user=Ae.UNAUTHENTICATED,this.clientId=Si.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(s,(async o=>{$(_t,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(s,(o=>($(_t,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ht;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Ji(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Hr(n,e){n.asyncQueue.verifyOperationInProgress(),$(_t,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async r=>{s.isEqual(r)||(await Gc(e.localStore,r),s=r)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function ml(n,e){n.asyncQueue.verifyOperationInProgress();const t=await tg(n);$(_t,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>ll(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,r)=>ll(e.remoteStore,r))),n._onlineComponents=e}async function tg(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){$(_t,"Using user provided OfflineComponentProvider");try{await Hr(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(r){return r.name==="FirebaseError"?r.code===C.FAILED_PRECONDITION||r.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11})(t))throw t;Nt("Error using user provided cache. Falling back to memory cache: "+t),await Hr(n,new Hs)}}else $(_t,"Using default OfflineComponentProvider"),await Hr(n,new Zp(void 0));return n._offlineComponents}async function fu(n){return n._onlineComponents||(n._uninitializedComponentsProvider?($(_t,"Using user provided OnlineComponentProvider"),await ml(n,n._uninitializedComponentsProvider._online)):($(_t,"Using default OnlineComponentProvider"),await ml(n,new yi))),n._onlineComponents}function ng(n){return fu(n).then((e=>e.syncEngine))}async function _i(n){const e=await fu(n),t=e.eventManager;return t.onListen=qp.bind(null,e.syncEngine),t.onUnlisten=jp.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Bp.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=zp.bind(null,e.syncEngine),t}function sg(n,e,t,s){const r=new hu(s),a=new su(e,r,t);return n.asyncQueue.enqueueAndForget((async()=>tu(await _i(n),a))),()=>{r.Nu(),n.asyncQueue.enqueueAndForget((async()=>nu(await _i(n),a)))}}function rg(n,e,t={}){const s=new ht;return n.asyncQueue.enqueueAndForget((async()=>(function(a,o,c,d,h){const f=new hu({next:b=>{f.Nu(),o.enqueueAndForget((()=>nu(a,p))),b.fromCache&&d.source==="server"?h.reject(new O(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(b)},error:b=>h.reject(b)}),p=new su(c,f,{includeMetadataChanges:!0,Ka:!0});return tu(a,p)})(await _i(n),n.asyncQueue,e,t,s))),s.promise}function ig(n,e){const t=new ht;return n.asyncQueue.enqueueAndForget((async()=>Gp(await ng(n),e,t))),t.promise}/**
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
 */function mu(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const ag="ComponentProvider",pl=new Map;function og(n,e,t,s,r){return new Sf(n,e,t,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,mu(r.experimentalLongPollingOptions),r.useFetchStreams,r.isUsingEmulator,s)}/**
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
 */const pu="firestore.googleapis.com",gl=!0;class vl{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new O(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=pu,this.ssl=gl}else this.host=e.host,this.ssl=e.ssl??gl;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=jc;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Lm)throw new O(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}pf("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=mu(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,r){return s.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class or{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new O(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vl(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new rf;switch(s.type){case"firstParty":return new cf(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new O(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=pl.get(t);s&&($(ag,"Removing Datastore"),pl.delete(t),s.terminate())})(this),Promise.resolve()}}function lg(n,e,t,s={}){var h;n=Oe(n,or);const r=wi(e),a=n._getSettings(),o={...a,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;r&&(Dd(`https://${c}`),kd("Firestore",!0)),a.host!==pu&&a.host!==c&&Nt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d={...a,host:c,ssl:r,emulatorOptions:s};if(!ks(d,o)&&(n._setSettings(d),s.mockUserToken)){let f,p;if(typeof s.mockUserToken=="string")f=s.mockUserToken,p=Ae.MOCK_USER;else{f=Vd(s.mockUserToken,(h=n._app)==null?void 0:h.options.projectId);const b=s.mockUserToken.sub||s.mockUserToken.user_id;if(!b)throw new O(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Ae(b)}n._authCredentials=new af(new ec(f,p))}}/**
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
 */class tt{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new tt(this.firestore,e,this._query)}}class ue{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ft(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ue(this.firestore,e,this._key)}toJSON(){return{type:ue._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Qn(t,ue._jsonSchema))return new ue(e,s||null,new j(se.fromString(t.referencePath)))}}ue._jsonSchemaVersion="firestore/documentReference/1.0",ue._jsonSchema={type:fe("string",ue._jsonSchemaVersion),referencePath:fe("string")};class ft extends tt{constructor(e,t,s){super(e,t,xi(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ue(this.firestore,null,new j(e))}withConverter(e){return new ft(this.firestore,e,this._path)}}function jt(n,e,...t){if(n=Qe(n),tc("collection","path",e),n instanceof or){const s=se.fromString(e,...t);return Do(s),new ft(n,null,s)}{if(!(n instanceof ue||n instanceof ft))throw new O(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(se.fromString(e,...t));return Do(s),new ft(n.firestore,null,s)}}function Ye(n,e,...t){if(n=Qe(n),arguments.length===1&&(e=Si.newId()),tc("doc","path",e),n instanceof or){const s=se.fromString(e,...t);return Po(s),new ue(n,null,new j(s))}{if(!(n instanceof ue||n instanceof ft))throw new O(C.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(se.fromString(e,...t));return Po(s),new ue(n.firestore,n instanceof ft?n.converter:null,new j(s))}}/**
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
 */const yl="AsyncQueue";class _l{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Jc(this,"async_queue_retry"),this._c=()=>{const s=Gr();s&&$(yl,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=Gr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Gr();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new ht;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!an(e))throw e;$(yl,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Ze("INTERNAL UNHANDLED ERROR: ",bl(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const r=Hi.createAndSchedule(this,e,t,s,(a=>this.hc(a)));return this.tc.push(r),r}uc(){this.nc&&z(47125,{Pc:bl(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function bl(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class bt extends or{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new _l,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new _l(e),this._firestoreClient=void 0,await e}}}function cg(n,e){const t=typeof n=="object"?n:zh(),s=typeof n=="string"?n:Fs,r=$h(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const a=Cd("firestore");a&&lg(r,...a)}return r}function Yi(n){if(n._terminated)throw new O(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||ug(n),n._firestoreClient}function ug(n){var s,r,a,o;const e=n._freezeSettings(),t=og(n._databaseId,((s=n._app)==null?void 0:s.options.appId)||"",n._persistenceKey,(r=n._app)==null?void 0:r.options.apiKey,e);n._componentsProvider||(a=e.localCache)!=null&&a._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new eg(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(d){const h=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(h),_online:h}})(n._componentsProvider))}/**
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
 */class Me{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Me(Ee.fromBase64String(e))}catch(t){throw new O(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Me(Ee.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Me._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Qn(e,Me._jsonSchema))return Me.fromBase64String(e.bytes)}}Me._jsonSchemaVersion="firestore/bytes/1.0",Me._jsonSchema={type:fe("string",Me._jsonSchemaVersion),bytes:fe("string")};/**
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
 */class Xi{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new O(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class lr{constructor(e){this._methodName=e}}/**
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
 */class Je{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new O(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new O(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return K(this._lat,e._lat)||K(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Je._jsonSchemaVersion}}static fromJSON(e){if(Qn(e,Je._jsonSchema))return new Je(e.latitude,e.longitude)}}Je._jsonSchemaVersion="firestore/geoPoint/1.0",Je._jsonSchema={type:fe("string",Je._jsonSchemaVersion),latitude:fe("number"),longitude:fe("number")};/**
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
 */class qe{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,r){if(s.length!==r.length)return!1;for(let a=0;a<s.length;++a)if(s[a]!==r[a])return!1;return!0})(this._values,e._values)}toJSON(){return{type:qe._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Qn(e,qe._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new qe(e.vectorValues);throw new O(C.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}qe._jsonSchemaVersion="firestore/vectorValue/1.0",qe._jsonSchema={type:fe("string",qe._jsonSchemaVersion),vectorValues:fe("object")};/**
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
 */const dg=/^__.*__$/;class hg{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Tt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Wn(e,this.data,t,this.fieldTransforms)}}class gu{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Tt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function vu(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z(40011,{dataSource:n})}}class Zi{constructor(e,t,s,r,a,o){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=r,a===void 0&&this.validatePath(),this.fieldTransforms=a||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Zi({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.contextWith({path:t,arrayElement:!1});return s.validatePathSegment(e),s}childContextForFieldPath(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.contextWith({path:t,arrayElement:!1});return s.validatePath(),s}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Js(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(vu(this.dataSource)&&dg.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class fg{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||rr(e)}createContext(e,t,s,r=!1){return new Zi({dataSource:e,methodName:t,targetDoc:s,path:be.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function cr(n){const e=n._freezeSettings(),t=rr(n._databaseId);return new fg(n._databaseId,!!e.ignoreUndefinedProperties,t)}function yu(n,e,t,s,r,a={}){const o=n.createContext(a.merge||a.mergeFields?2:0,e,t,r);ta("Data must be an object, but it was:",o,s);const c=_u(s,o);let d,h;if(a.merge)d=new Le(o.fieldMask),h=o.fieldTransforms;else if(a.mergeFields){const f=[];for(const p of a.mergeFields){const b=Lt(e,p,t);if(!o.contains(b))throw new O(C.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);Tu(f,b)||f.push(b)}d=new Le(f),h=o.fieldTransforms.filter((p=>d.covers(p.field)))}else d=null,h=o.fieldTransforms;return new hg(new Ne(c),d,h)}class ur extends lr{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ur}}class ea extends lr{_toFieldTransform(e){return new tm(e.path,new Gn)}isEqual(e){return e instanceof ea}}function mg(n,e,t,s){const r=n.createContext(1,e,t);ta("Data must be an object, but it was:",r,s);const a=[],o=Ne.empty();Et(s,((d,h)=>{const f=Eu(e,d,t);h=Qe(h);const p=r.childContextForFieldPath(f);if(h instanceof ur)a.push(f);else{const b=Zn(h,p);b!=null&&(a.push(f),o.set(f,b))}}));const c=new Le(a);return new gu(o,c,r.fieldTransforms)}function pg(n,e,t,s,r,a){const o=n.createContext(1,e,t),c=[Lt(e,s,t)],d=[r];if(a.length%2!=0)throw new O(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let b=0;b<a.length;b+=2)c.push(Lt(e,a[b])),d.push(a[b+1]);const h=[],f=Ne.empty();for(let b=c.length-1;b>=0;--b)if(!Tu(h,c[b])){const A=c[b];let R=d[b];R=Qe(R);const V=o.childContextForFieldPath(A);if(R instanceof ur)h.push(A);else{const x=Zn(R,V);x!=null&&(h.push(A),f.set(A,x))}}const p=new Le(h);return new gu(f,p,o.fieldTransforms)}function gg(n,e,t,s=!1){return Zn(t,n.createContext(s?4:3,e))}function Zn(n,e){if(bu(n=Qe(n)))return ta("Unsupported field value:",e,n),_u(n,e);if(n instanceof lr)return(function(s,r){if(!vu(r.dataSource))throw r.createError(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.createError(`${s._methodName}() is not currently supported inside arrays`);const a=s._toFieldTransform(r);a&&r.fieldTransforms.push(a)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(s,r){const a=[];let o=0;for(const c of s){let d=Zn(c,r.childContextForArray(o));d==null&&(d={nullValue:"NULL_VALUE"}),a.push(d),o++}return{arrayValue:{values:a}}})(n,e)}return(function(s,r){if((s=Qe(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Xf(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const a=ie.fromDate(s);return{timestampValue:js(r.serializer,a)}}if(s instanceof ie){const a=new ie(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:js(r.serializer,a)}}if(s instanceof Je)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Me)return{bytesValue:Lc(r.serializer,s._byteString)};if(s instanceof ue){const a=r.databaseId,o=s.firestore._databaseId;if(!o.isEqual(a))throw r.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Oi(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof qe)return(function(o,c){const d=o instanceof qe?o.toArray():o;return{mapValue:{fields:{[uc]:{stringValue:dc},[$s]:{arrayValue:{values:d.map((f=>{if(typeof f!="number")throw c.createError("VectorValues must only contain numeric values.");return Ni(c.serializer,f)}))}}}}}})(s,r);if(Uc(s))return s._toProto(r.serializer);throw r.createError(`Unsupported field value: ${Ws(s)}`)})(n,e)}function _u(n,e){const t={};return rc(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Et(n,((s,r)=>{const a=Zn(r,e.childContextForField(s));a!=null&&(t[s]=a)})),{mapValue:{fields:t}}}function bu(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ie||n instanceof Je||n instanceof Me||n instanceof ue||n instanceof lr||n instanceof qe||Uc(n))}function ta(n,e,t){if(!bu(t)||!nc(t)){const s=Ws(t);throw s==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+s)}}function Lt(n,e,t){if((e=Qe(e))instanceof Xi)return e._internalPath;if(typeof e=="string")return Eu(n,e);throw Js("Field path arguments must be of type string or ",n,!1,void 0,t)}const vg=new RegExp("[~\\*/\\[\\]]");function Eu(n,e,t){if(e.search(vg)>=0)throw Js(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Xi(...e.split("."))._internalPath}catch{throw Js(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Js(n,e,t,s,r){const a=s&&!s.isEmpty(),o=r!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let d="";return(a||o)&&(d+=" (found",a&&(d+=` in field ${s}`),o&&(d+=` in document ${r}`),d+=")"),new O(C.INVALID_ARGUMENT,c+n+d)}function Tu(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class yg{convertValue(e,t="none"){switch(vt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(gt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw z(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Et(e,((r,a)=>{s[r]=this.convertValue(a,t)})),s}convertVectorValue(e){var s,r,a;const t=(a=(r=(s=e.fields)==null?void 0:s[$s].arrayValue)==null?void 0:r.values)==null?void 0:a.map((o=>ce(o.doubleValue)));return new qe(t)}convertGeoPoint(e){return new Je(ce(e.latitude),ce(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Xs(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Bn(e));default:return null}}convertTimestamp(e){const t=pt(e);return new ie(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=se.fromString(e);te(Bc(s),9688,{name:e});const r=new Un(s.get(1),s.get(3)),a=new j(s.popFirst(5));return r.isEqual(t)||Ze(`Document ${a} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
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
 */class na extends yg{constructor(e){super(),this.firestore=e}convertBytes(e){return new Me(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ue(this.firestore,null,t)}}function Ps(){return new ea("serverTimestamp")}const El="@firebase/firestore",Tl="4.12.0";/**
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
 */function wl(n){return(function(t,s){if(typeof t!="object"||t===null)return!1;const r=t;for(const a of s)if(a in r&&typeof r[a]=="function")return!0;return!1})(n,["next","error","complete"])}/**
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
 */class wu{constructor(e,t,s,r,a){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new ue(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new _g(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Lt("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class _g extends wu{data(){return super.data()}}/**
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
 */function Iu(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new O(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class sa{}class ra extends sa{}function Jr(n,e,...t){let s=[];e instanceof sa&&s.push(e),s=s.concat(t),(function(a){const o=a.filter((d=>d instanceof ia)).length,c=a.filter((d=>d instanceof dr)).length;if(o>1||o>0&&c>0)throw new O(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const r of s)n=r._apply(n);return n}class dr extends ra{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new dr(e,t,s)}_apply(e){const t=this._parse(e);return Au(e._query,t),new tt(e.firestore,e.converter,ci(e._query,t))}_parse(e){const t=cr(e.firestore);return(function(a,o,c,d,h,f,p){let b;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new O(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Sl(p,f);const R=[];for(const V of p)R.push(Al(d,a,V));b={arrayValue:{values:R}}}else b=Al(d,a,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Sl(p,f),b=gg(c,o,p,f==="in"||f==="not-in");return he.create(h,f,b)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Qr(n,e,t){const s=e,r=Lt("where",n);return dr._create(r,s,t)}class ia extends sa{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ia(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:Be.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(r,a){let o=r;const c=a.getFlattenedFilters();for(const d of c)Au(o,d),o=ci(o,d)})(e._query,t),new tt(e.firestore,e.converter,ci(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class aa extends ra{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new aa(e,t)}_apply(e){const t=(function(r,a,o){if(r.startAt!==null)throw new O(C.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new O(C.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new zn(a,o)})(e._query,this._field,this._direction);return new tt(e.firestore,e.converter,zf(e._query,t))}}function bg(n,e="asc"){const t=e,s=Lt("orderBy",n);return aa._create(s,t)}class oa extends ra{constructor(e,t,s){super(),this.type=e,this._limit=t,this._limitType=s}static _create(e,t,s){return new oa(e,t,s)}_apply(e){return new tt(e.firestore,e.converter,Bs(e._query,this._limit,this._limitType))}}function Il(n){return oa._create("limit",n,"F")}function Al(n,e,t){if(typeof(t=Qe(t))=="string"){if(t==="")throw new O(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!_c(e)&&t.indexOf("/")!==-1)throw new O(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(se.fromString(t));if(!j.isDocumentKey(s))throw new O(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Fo(n,new j(s))}if(t instanceof ue)return Fo(n,t._key);throw new O(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ws(t)}.`)}function Sl(n,e){if(!Array.isArray(n)||n.length===0)throw new O(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Au(n,e){const t=(function(r,a){for(const o of r)for(const c of o.getFlattenedFilters())if(a.indexOf(c.op)>=0)return c.op;return null})(n.filters,(function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new O(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new O(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function Su(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}class Vn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Dt extends wu{constructor(e,t,s,r,a,o){super(e,t,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ds(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Lt("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new O(C.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Dt._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Dt._jsonSchemaVersion="firestore/documentSnapshot/1.0",Dt._jsonSchema={type:fe("string",Dt._jsonSchemaVersion),bundleSource:fe("string","DocumentSnapshot"),bundleName:fe("string"),bundle:fe("string")};class Ds extends Dt{data(e={}){return super.data(e)}}class Vt{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Vn(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Ds(this._firestore,this._userDataWriter,s.key,s,new Vn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new O(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(r,a){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map((c=>{const d=new Ds(r._firestore,r._userDataWriter,c.doc.key,c.doc,new Vn(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);return c.doc,{type:"added",doc:d,oldIndex:-1,newIndex:o++}}))}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((c=>a||c.type!==3)).map((c=>{const d=new Ds(r._firestore,r._userDataWriter,c.doc.key,c.doc,new Vn(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:Eg(c.type),doc:d,oldIndex:h,newIndex:f}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new O(C.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Vt._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Si.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],r=[];return this.docs.forEach((a=>{a._document!==null&&(t.push(a._document),s.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),r.push(a.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Eg(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z(61501,{type:n})}}/**
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
 */Vt._jsonSchemaVersion="firestore/querySnapshot/1.0",Vt._jsonSchema={type:fe("string",Vt._jsonSchemaVersion),bundleSource:fe("string","QuerySnapshot"),bundleName:fe("string"),bundle:fe("string")};function Wr(n){n=Oe(n,tt);const e=Oe(n.firestore,bt),t=Yi(e),s=new na(e);return Iu(n._query),rg(t,n._query).then((r=>new Vt(e,s,n,r)))}function Tg(n,e,t){n=Oe(n,ue);const s=Oe(n.firestore,bt),r=Su(n.converter,e,t),a=cr(s);return hr(s,[yu(a,"setDoc",n._key,r,n.converter!==null,t).toMutation(n._key,Fe.none())])}function ws(n,e,t,...s){n=Oe(n,ue);const r=Oe(n.firestore,bt),a=cr(r);let o;return o=typeof(e=Qe(e))=="string"||e instanceof Xi?pg(a,"updateDoc",n._key,e,t,s):mg(a,"updateDoc",n._key,e),hr(r,[o.toMutation(n._key,Fe.exists(!0))])}function Rl(n){return hr(Oe(n.firestore,bt),[new ki(n._key,Fe.none())])}function Kr(n,e){const t=Oe(n.firestore,bt),s=Ye(n),r=Su(n.converter,e),a=cr(n.firestore);return hr(t,[yu(a,"addDoc",s._key,r,n.converter!==null,{}).toMutation(s._key,Fe.exists(!1))]).then((()=>s))}function Cl(n,...e){var h,f,p;n=Qe(n);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||wl(e[s])||(t=e[s++]);const r={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(wl(e[s])){const b=e[s];e[s]=(h=b.next)==null?void 0:h.bind(b),e[s+1]=(f=b.error)==null?void 0:f.bind(b),e[s+2]=(p=b.complete)==null?void 0:p.bind(b)}let a,o,c;if(n instanceof ue)o=Oe(n.firestore,bt),c=xi(n._key.path),a={next:b=>{e[s]&&e[s](wg(o,n,b))},error:e[s+1],complete:e[s+2]};else{const b=Oe(n,tt);o=Oe(b.firestore,bt),c=b._query;const A=new na(o);a={next:R=>{e[s]&&e[s](new Vt(o,A,b,R))},error:e[s+1],complete:e[s+2]},Iu(n._query)}const d=Yi(o);return sg(d,c,r,a)}function hr(n,e){const t=Yi(n);return ig(t,e)}function wg(n,e,t){const s=t.docs.get(e._key),r=new na(n);return new Dt(n,r,e._key,s,new Vn(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){sf(jh),Ms(new Fn("firestore",((s,{instanceIdentifier:r,options:a})=>{const o=s.getProvider("app").getImmediate(),c=new bt(new of(s.getProvider("auth-internal")),new uf(o,s.getProvider("app-check-internal")),Rf(o,r),o);return a={useFetchStreams:t,...a},c._setSettings(a),c}),"PUBLIC").setMultipleInstances(!0)),Qt(El,Tl,e),Qt(El,Tl,"esm2020")})();const Ig={apiKey:"AIzaSyD90SkLA57LCNnPRCDp5-sA6x2lF0oasMc",authDomain:"comebiblia-43643.firebaseapp.com",projectId:"comebiblia-43643",storageBucket:"comebiblia-43643.firebasestorage.app",messagingSenderId:"704190300094",appId:"1:704190300094:web:0a726168ed731032d803ef",measurementId:"G-DZPX4SB193"},Ag=zl(Ig),De=cg(Ag),Ru="player",Cu={name:"Jugador",avatar:"😊",level:1,xp:0,coins:50,totalGamesPlayed:0,totalCorrectAnswers:0,totalScore:0,gamesCompleted:{},bestScores:{},leaguePoints:0,league:"Pescador",createdAt:Date.now()},On=[0,100,250,500,800,1200,1700,2300,3e3,3800,4700,5700,6800,8e3,9500,11e3,13e3,15e3,17500,2e4],Pl=["Semilla","Brote","Plantita","Arbusto","Árbol Joven","Roble","Cedro del Líbano","Discípulo","Apóstol","Profeta","Siervo Fiel","Guerrero de Fe","Sabio","Maestro","Pastor","Evangelista","Misionero","Guardián","Ángel","Leyenda Bíblica"],Sg=["😊","😇","🙏","✝️","⭐","👑","🕊️","🌟","💪","🎯","📖","🏆"];let J=null;function Re(){return J||(J=Ml(Ru,{...Cu})),{...J}}function $t(){Ll(Ru,J)}function Pu(n){J||Re(),J.name=n.trim()||"Jugador",$t()}function Rg(n){J||Re(),J.avatar=n,$t()}function cn(n){J||Re(),J.xp+=n;let e=!1;for(;J.level<On.length&&J.xp>=On[J.level];)J.level++,e=!0;return $t(),e}function un(n){J||Re(),J.coins+=n,$t(),fr()}function es(n,e,t=0){J||Re(),J.totalGamesPlayed++,J.totalScore+=e,J.totalCorrectAnswers+=t,J.gamesCompleted[n]||(J.gamesCompleted[n]=0),J.gamesCompleted[n]++,(!J.bestScores[n]||e>J.bestScores[n])&&(J.bestScores[n]=e),$t()}function Cg(){const n=Re();if(n.level>=On.length)return{current:n.xp,needed:n.xp,progress:1};const e=On[n.level-1]||0,t=On[n.level],s=(n.xp-e)/(t-e);return{current:n.xp-e,needed:t-e,progress:Math.min(s,1)}}function Pg(n=null){const e=n||Re().level;return Pl[Math.min(e-1,Pl.length-1)]}function Dg(){return[...Sg]}function Vg(){J={...Cu,createdAt:Date.now()},$t(),fr()}function fr(){const n=document.getElementById("coin-count");if(n){const e=Re();n.textContent=e.coins}}function Dl(n){J||Re(),J.leaguePoints=(J.leaguePoints||0)+n,J.leaguePoints<0&&(J.leaguePoints=0);const e=J.leaguePoints;e>=2e3?J.league="Profeta":e>=1200?J.league="Apóstol":e>=600?J.league="Evangelista":e>=200?J.league="Discípulo":J.league="Pescador",$t(),Du()}async function Du(){const n=localStorage.getItem("bb_player_id");if(n&&De)try{await Tg(Ye(De,"bb_users",n),{name:J.name,avatar:J.avatar,leaguePoints:J.leaguePoints||0,league:J.league||"Pescador",updatedAt:Ps()},{merge:!0})}catch(e){console.error("Error syncing player state to Firestore:",e)}}const la=[];function Ke(n){la.push(n)}function xg(){return[...la]}function Vu(n){return la.find(e=>e.id===n)}const Qs=[{text:"Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.",ref:"Juan 3:16"},{text:"Todo lo puedo en Cristo que me fortalece.",ref:"Filipenses 4:13"},{text:"Jehová es mi pastor; nada me faltará.",ref:"Salmos 23:1"},{text:"Confía en Jehová con todo tu corazón, y no te apoyes en tu propia prudencia.",ref:"Proverbios 3:5"},{text:"Y sabemos que a los que aman a Dios, todas las cosas les ayudan a bien.",ref:"Romanos 8:28"},{text:"No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios.",ref:"Isaías 41:10"},{text:"Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal.",ref:"Jeremías 29:11"},{text:"El Señor es mi luz y mi salvación; ¿de quién temeré?",ref:"Salmos 27:1"},{text:"Mas el fruto del Espíritu es amor, gozo, paz, paciencia, benignidad, bondad, fe.",ref:"Gálatas 5:22"},{text:"Esforzaos y cobrad ánimo; no temáis, ni tengáis miedo de ellos.",ref:"Deuteronomio 31:6"},{text:"En el principio creó Dios los cielos y la tierra.",ref:"Génesis 1:1"},{text:"Clama a mí, y yo te responderé, y te enseñaré cosas grandes y ocultas que tú no conoces.",ref:"Jeremías 33:3"},{text:"Porque donde están dos o tres congregados en mi nombre, allí estoy yo en medio de ellos.",ref:"Mateo 18:20"},{text:"Yo soy el camino, la verdad y la vida; nadie viene al Padre sino por mí.",ref:"Juan 14:6"},{text:"Dad gracias en todo, porque esta es la voluntad de Dios para con vosotros en Cristo Jesús.",ref:"1 Tesalonicenses 5:18"},{text:"El amor es paciente, es bondadoso. El amor no es envidioso ni jactancioso ni orgulloso.",ref:"1 Corintios 13:4"},{text:"Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios.",ref:"Efesios 2:8"},{text:"Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.",ref:"Mateo 11:28"},{text:"He aquí, yo estoy a la puerta y llamo; si alguno oye mi voz y abre la puerta, entraré a él.",ref:"Apocalipsis 3:20"},{text:"Bienaventurados los pacificadores, porque ellos serán llamados hijos de Dios.",ref:"Mateo 5:9"},{text:"Lámpara es a mis pies tu palabra, y lumbrera a mi camino.",ref:"Salmos 119:105"},{text:"Amarás al Señor tu Dios con todo tu corazón, y con toda tu alma, y con toda tu mente.",ref:"Mateo 22:37"},{text:"Los cielos cuentan la gloria de Dios, y el firmamento anuncia la obra de sus manos.",ref:"Salmos 19:1"},{text:"No se amolden al mundo actual, sino sean transformados mediante la renovación de su mente.",ref:"Romanos 12:2"},{text:"Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes.",ref:"Josué 1:9"},{text:"Ama a tu prójimo como a ti mismo.",ref:"Marcos 12:31"},{text:"Pedid, y se os dará; buscad, y hallaréis; llamad, y se os abrirá.",ref:"Mateo 7:7"},{text:"El Señor es bueno; es refugio en el día de la angustia, y conoce a los que en Él confían.",ref:"Nahúm 1:7"},{text:"Alégrate, joven, en tu juventud; y tome placer tu corazón en los días de tu adolescencia.",ref:"Eclesiastés 11:9"},{text:"Grande es el Señor y digno de toda alabanza; su grandeza es insondable.",ref:"Salmos 145:3"},{text:"Si Dios es por nosotros, ¿quién contra nosotros?",ref:"Romanos 8:31"},{text:"Yo he venido para que tengan vida, y para que la tengan en abundancia.",ref:"Juan 10:10"},{text:"Sean fuertes y valientes. No teman ni se asusten, porque el Señor su Dios siempre los acompañará.",ref:"Deuteronomio 31:6"},{text:"Así brille la luz de ustedes delante de todos, para que vean sus buenas obras y glorifiquen al Padre.",ref:"Mateo 5:16"},{text:"Encomienda al Señor tu camino; confía en él, y él actuará.",ref:"Salmos 37:5"},{text:"Instruye al niño en su camino, y aun cuando fuere viejo no se apartará de él.",ref:"Proverbios 22:6"},{text:"El que habita al abrigo del Altísimo morará bajo la sombra del Omnipotente.",ref:"Salmos 91:1"},{text:"Acerquémonos con confianza al trono de la gracia para recibir misericordia y hallar gracia.",ref:"Hebreos 4:16"},{text:"Deléitate asimismo en Jehová, y él te concederá las peticiones de tu corazón.",ref:"Salmos 37:4"},{text:"Con amor eterno te he amado; por tanto, te prolongué mi misericordia.",ref:"Jeremías 31:3"}];function xu(){const n=new Date,e=Math.floor((n-new Date(n.getFullYear(),0,0))/864e5);return Qs[e%Qs.length]}function Ng(n,e=[]){return Qs.filter(r=>!e.includes(r.ref)).sort(()=>Math.random()-.5).slice(0,n)}const kg=[{name:"María",avatar:"👩",score:2800,level:8},{name:"Daniel",avatar:"👦",score:2400,level:7},{name:"Sara",avatar:"👧",score:2100,level:6},{name:"José",avatar:"🧑",score:1800,level:5},{name:"Rebeca",avatar:"👩‍🦱",score:1500,level:5},{name:"David",avatar:"👨",score:1200,level:4},{name:"Esther",avatar:"👩‍🦰",score:900,level:3},{name:"Pablo",avatar:"🧔",score:600,level:2},{name:"Ana",avatar:"👱‍♀️",score:400,level:2},{name:"Samuel",avatar:"👶",score:200,level:1}];function Nu(){const n=Re(),e=[...kg,{name:n.name,avatar:n.avatar,score:n.totalScore,level:n.level,isCurrentPlayer:!0}];return e.sort((t,s)=>s.score-t.score),e.map((t,s)=>({...t,position:s+1}))}function ca(){const n=Nu(),e=n.find(t=>t.isCurrentPlayer);return(e==null?void 0:e.position)||n.length}function Lg(n){var o,c;const e=Re(),t=xu(),s=xg(),r=ca(),a=["linear-gradient(135deg, #4361ee, #6c83f7)","linear-gradient(135deg, #a855f7, #c084fc)","linear-gradient(135deg, #06d6a0, #34d399)","linear-gradient(135deg, #fb923c, #fdba74)","linear-gradient(135deg, #f472b6, #f9a8d4)"];n.innerHTML=`
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
        ${s.map((d,h)=>`
          <div class="game-card" data-game-id="${d.id}">
            <div class="game-card-icon" style="background: ${a[h%a.length]}">
              ${d.icon}
            </div>
            <div class="game-card-info">
              <h3>${d.name}</h3>
              <p>${d.description}</p>
              <div class="game-card-meta">
                <span class="badge badge-${d.difficulty}">${d.difficulty==="easy"?"Fácil":d.difficulty==="medium"?"Medio":"Difícil"}</span>
                ${e.bestScores[d.id]?`<span class="text-sm text-muted">Mejor: ${e.bestScores[d.id]}</span>`:""}
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
  `,n.querySelectorAll(".game-card").forEach(d=>{d.addEventListener("click",()=>{const h=d.dataset.gameId;me("game",{gameId:h})})}),(o=document.getElementById("verse-card-home"))==null||o.addEventListener("click",()=>{me("verse")}),(c=document.getElementById("btn-ranking"))==null||c.addEventListener("click",()=>{me("ranking")})}function W(n,e="info",t=3e3){const s=document.getElementById("toast-container");if(!s)return;const r=document.createElement("div");r.className=`toast toast-${e}`;const a={success:"✅",error:"❌",info:"ℹ️",reward:"🎁"};r.innerHTML=`<span>${a[e]||"📢"}</span><span>${n}</span>`,s.appendChild(r),setTimeout(()=>{r.classList.add("removing"),setTimeout(()=>r.remove(),300)},t)}function Mg(n,e,t=[]){const s=document.getElementById("modal-overlay");if(!s)return;const r=t.map(a=>`<button class="btn ${a.class||"btn-primary"} btn-block" id="modal-btn-${a.id}">${a.label}</button>`).join("");s.innerHTML=`
    <div class="modal">
      <h2>${n}</h2>
      <p>${e}</p>
      <div class="flex flex-col gap-sm">${r}</div>
    </div>
  `,s.classList.remove("hidden"),t.forEach(a=>{const o=document.getElementById(`modal-btn-${a.id}`);o&&o.addEventListener("click",()=>{s.classList.add("hidden"),a.onClick&&a.onClick()})})}function Ve(n){const e=[...n];for(let t=e.length-1;t>0;t--){const s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}return e}function Vl(n){return n>=1e3?(n/1e3).toFixed(1)+"K":n.toString()}function Og(n){var s,r;const e=xu(),t=Ng(5,[e.ref]);n.innerHTML=`
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
        ${t.map(a=>`
          <div class="verse-list-item">
            <div class="verse-list-text">"${a.text}"</div>
            <div class="verse-list-ref">— ${a.ref}</div>
          </div>
        `).join("")}
      </div>

      <div class="verse-footer">
        <p class="text-sm text-muted">Cada día un nuevo versículo para meditar 🙏</p>
      </div>
    </div>
  `,(s=document.getElementById("btn-share-verse"))==null||s.addEventListener("click",()=>{var o;const a=`"${e.text}" — ${e.ref}`;navigator.share?navigator.share({title:"Versículo del Día",text:a}).catch(()=>{}):(o=navigator.clipboard)==null||o.writeText(a).then(()=>{W("Versículo copiado al portapapeles","success")})}),(r=document.getElementById("btn-copy-verse"))==null||r.addEventListener("click",()=>{var o;const a=`"${e.text}" — ${e.ref}`;(o=navigator.clipboard)==null||o.writeText(a).then(()=>{W("Versículo copiado ✅","success")}).catch(()=>{W("No se pudo copiar","error")})})}const ku="achievements",ua=[{id:"first_game",name:"Primeros Pasos",desc:"Completa tu primer juego",icon:"🐣",coins:10},{id:"games_5",name:"Jugador Activo",desc:"Completa 5 juegos",icon:"🎮",coins:25},{id:"games_25",name:"Veterano",desc:"Completa 25 juegos",icon:"🏅",coins:50},{id:"games_100",name:"Leyenda",desc:"Completa 100 juegos",icon:"🏆",coins:100},{id:"perfect_trivia",name:"Erudito Bíblico",desc:"Puntuación perfecta en Trivia",icon:"🧠",coins:30},{id:"trivia_10",name:"Sabio",desc:"Completa 10 partidas de Trivia",icon:"📚",coins:25},{id:"character_5",name:"Detective Bíblico",desc:"Adivina 5 personajes",icon:"🔍",coins:20},{id:"verse_master",name:"Memorizador",desc:"Completa 10 versículos",icon:"📖",coins:30},{id:"word_hunter",name:"Cazapalabras",desc:"Completa 5 sopas de letras",icon:"🔤",coins:20},{id:"memory_king",name:"Rey de la Memoria",desc:"Completa 5 juegos de Memoria",icon:"🃏",coins:20},{id:"level_5",name:"Discípulo",desc:"Alcanza el nivel 5",icon:"⭐",coins:30},{id:"level_10",name:"Apóstol",desc:"Alcanza el nivel 10",icon:"🌟",coins:50},{id:"coins_500",name:"Tesoro",desc:"Acumula 500 monedas",icon:"💰",coins:25},{id:"all_games",name:"Explorador",desc:"Juega todos los juegos",icon:"🗺️",coins:40},{id:"streak_3",name:"Racha Divina",desc:"3 respuestas correctas seguidas",icon:"🔥",coins:15},{id:"fast_answer",name:"Rayo",desc:"Responde en menos de 3 segundos",icon:"⚡",coins:15}];let Vs=null;function da(){return Vs||(Vs=Ml(ku,{})),Vs}function Ie(n){const e=da();if(e[n])return!1;const t=ua.find(s=>s.id===n);return t?(e[n]={unlockedAt:Date.now()},Vs=e,Ll(ku,e),W(`🏆 ¡Logro desbloqueado: ${t.name}!`,"reward"),!0):!1}function Lu(){return Object.keys(da()).length}function Mu(){return ua.length}function Fg(){const n=da();return ua.map(e=>{var t;return{...e,unlocked:!!n[e.id],unlockedAt:((t=n[e.id])==null?void 0:t.unlockedAt)||null}})}function $g(){const n=Re();n.totalGamesPlayed>=1&&Ie("first_game"),n.totalGamesPlayed>=5&&Ie("games_5"),n.totalGamesPlayed>=25&&Ie("games_25"),n.totalGamesPlayed>=100&&Ie("games_100"),n.level>=5&&Ie("level_5"),n.level>=10&&Ie("level_10"),n.coins>=500&&Ie("coins_500"),["trivia","characters","verse-complete","word-search","memory"].every(s=>(n.gamesCompleted[s]||0)>0)&&Ie("all_games"),(n.gamesCompleted.trivia||0)>=10&&Ie("trivia_10"),(n.gamesCompleted.characters||0)>=5&&Ie("character_5"),(n.gamesCompleted["verse-complete"]||0)>=10&&Ie("verse_master"),(n.gamesCompleted["word-search"]||0)>=5&&Ie("word_hunter"),(n.gamesCompleted.memory||0)>=5&&Ie("memory_king")}function qg(n){var d,h,f;const e=Re(),t=Cg(),s=Pg(),r=Lu(),a=Mu(),o=ca(),c=Dg();n.innerHTML=`
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
            <span class="stats-value">${r} / ${a}</span>
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
        <button class="btn btn-secondary btn-block" id="btn-edit-name">
          ✏️ Cambiar Nombre
        </button>
      </div>

      <!-- Avatar Picker Modal -->
      <div class="avatar-picker hidden" id="avatar-picker">
        <div class="avatar-picker-title">Elige tu avatar</div>
        <div class="avatar-grid">
          ${c.map(p=>`
            <button class="avatar-option ${p===e.avatar?"selected":""}" data-avatar="${p}">${p}</button>
          `).join("")}
        </div>
        <button class="btn btn-sm btn-secondary mt-md" id="btn-close-avatar-picker">Cerrar</button>
      </div>
    </div>
  `,(d=document.getElementById("btn-change-avatar"))==null||d.addEventListener("click",()=>{var p;(p=document.getElementById("avatar-picker"))==null||p.classList.toggle("hidden")}),(h=document.getElementById("btn-close-avatar-picker"))==null||h.addEventListener("click",()=>{var p;(p=document.getElementById("avatar-picker"))==null||p.classList.add("hidden")}),document.querySelectorAll(".avatar-option").forEach(p=>{p.addEventListener("click",()=>{const b=p.dataset.avatar;Rg(b),document.getElementById("profile-avatar").textContent=b,document.querySelectorAll(".avatar-option").forEach(A=>A.classList.remove("selected")),p.classList.add("selected"),W("Avatar actualizado ✅","success")})}),(f=document.getElementById("btn-edit-name"))==null||f.addEventListener("click",()=>{const p=prompt("Ingresa tu nombre:",e.name);p&&p.trim()&&(Pu(p.trim()),document.getElementById("profile-name").textContent=p.trim(),W("Nombre actualizado ✅","success"))})}function Bg(n){const e=Fg(),t=Lu(),s=Mu(),r=Math.round(t/s*100);n.innerHTML=`
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
        ${e.map(a=>`
          <div class="achievement-card ${a.unlocked?"unlocked":"locked"}">
            <div class="achievement-icon">${a.unlocked?a.icon:"🔒"}</div>
            <div class="achievement-info">
              <div class="achievement-name">${a.name}</div>
              <div class="achievement-desc">${a.desc}</div>
              ${a.unlocked?`<div class="achievement-unlocked-date">✅ ${new Date(a.unlockedAt).toLocaleDateString("es")}</div>`:`<div class="achievement-reward">🪙 +${a.coins}</div>`}
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `}function Ug(n){var s,r;const e=Re();n.innerHTML=`
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
  `,(s=document.getElementById("setting-name"))==null||s.addEventListener("click",()=>{const a=prompt("Ingresa tu nombre:",e.name);a&&a.trim()&&(Pu(a.trim()),document.getElementById("display-name").textContent=a.trim(),W("Nombre actualizado ✅","success"))});const t=document.getElementById("toggle-dark");t&&(t.checked=!document.body.classList.contains("light-theme"),t.addEventListener("change",a=>{a.target.checked?(document.body.classList.remove("light-theme"),localStorage.setItem("theme","dark")):(document.body.classList.add("light-theme"),localStorage.setItem("theme","light"))})),(r=document.getElementById("btn-reset-data"))==null||r.addEventListener("click",()=>{Mg("⚠️ ¿Estás seguro?","Se borrarán todas tus monedas, logros, estadísticas y progreso. Esta acción no se puede deshacer.",[{id:"confirm-reset",label:"🗑️ Sí, borrar todo",class:"btn-danger",onClick:()=>{vd(),Vg(),W("Datos borrados","info"),me("home")}},{id:"cancel-reset",label:"Cancelar",class:"btn-secondary"}])})}function jg(n){const e=Nu(),t=ca(),s=["🥇","🥈","🥉"];n.innerHTML=`
    <div class="ranking-screen">
      <div class="ranking-header">
        <div class="ranking-podium">
          ${e.slice(0,3).map((r,a)=>`
            <div class="podium-item podium-${a+1} ${r.isCurrentPlayer?"is-player":""}">
              <div class="podium-avatar">${r.avatar}</div>
              <div class="podium-medal">${s[a]}</div>
              <div class="podium-name">${r.name}</div>
              <div class="podium-score">${Vl(r.score)}</div>
            </div>
          `).join("")}
        </div>
      </div>

      <div class="ranking-your-pos">
        Tu posición: <strong>#${t}</strong>
      </div>

      <div class="ranking-list">
        ${e.map((r,a)=>`
          <div class="ranking-row ${r.isCurrentPlayer?"is-player":""}">
            <div class="ranking-pos">
              ${a<3?s[a]:`#${r.position}`}
            </div>
            <div class="ranking-avatar">${r.avatar}</div>
            <div class="ranking-info">
              <div class="ranking-name">${r.name} ${r.isCurrentPlayer?"(Tú)":""}</div>
              <div class="ranking-level">Nivel ${r.level}</div>
            </div>
            <div class="ranking-score">${Vl(r.score)}</div>
          </div>
        `).join("")}
      </div>
    </div>
  `}const $e={easy:[{q:"¿Quién construyó el arca?",options:["Abraham","Noé","Moisés","David"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuántos días tomó crear Dios el mundo?",options:["5","6","7","3"],answer:1,category:"Creación"},{q:"¿Quién fue el primer hombre?",options:["Noé","Abel","Adán","Set"],answer:2,category:"Creación"},{q:"¿Quién fue la primera mujer?",options:["Sara","Eva","Rebeca","María"],answer:1,category:"Creación"},{q:"¿En qué ciudad nació Jesús?",options:["Nazaret","Jerusalén","Belén","Capernaúm"],answer:2,category:"Nuevo Testamento"},{q:"¿Cuántos discípulos tuvo Jesús?",options:["10","11","12","13"],answer:2,category:"Nuevo Testamento"},{q:"¿Quién mató a Goliat?",options:["Saúl","David","Jonatán","Sansón"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué animal habló con Balaam?",options:["Un perro","Una burra","Un león","Una serpiente"],answer:1,category:"Antiguo Testamento"},{q:"¿De dónde era la madre de Jesús?",options:["Belén","Jerusalén","Nazaret","Egipto"],answer:2,category:"Nuevo Testamento"},{q:"¿Quién fue tragado por un gran pez?",options:["Pedro","Elías","Jonás","Daniel"],answer:2,category:"Antiguo Testamento"},{q:"¿Cuál fue el primer milagro de Jesús?",options:["Caminar sobre agua","Convertir agua en vino","Sanar un ciego","Multiplicar panes"],answer:1,category:"Milagros"},{q:"¿Quién bautizó a Jesús?",options:["Pedro","Juan el Bautista","Pablo","Santiago"],answer:1,category:"Nuevo Testamento"},{q:"¿En qué monte recibió Moisés los mandamientos?",options:["Carmelo","Sinaí","Ararat","Sión"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuántos mandamientos dio Dios?",options:["5","7","10","12"],answer:2,category:"Antiguo Testamento"},{q:"¿Quién negó a Jesús tres veces?",options:["Judas","Pedro","Tomás","Juan"],answer:1,category:"Nuevo Testamento"},{q:"¿Cuántos libros tiene la Biblia?",options:["55","66","72","39"],answer:1,category:"General"},{q:"¿Quién fue el hermano de Moisés?",options:["Josué","Aarón","Caleb","Leví"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué instrumento tocaba David?",options:["Flauta","Arpa","Trompeta","Tambor"],answer:1,category:"Antiguo Testamento"},{q:"¿Quién fue vendido por sus hermanos?",options:["Benjamín","José","Rubén","Judá"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuál es el primer libro de la Biblia?",options:["Éxodo","Génesis","Salmos","Mateo"],answer:1,category:"General"},{q:"¿Qué símbolo apareció después del diluvio?",options:["Una estrella","Un arcoíris","Una paloma","Una nube"],answer:1,category:"Antiguo Testamento"},{q:"¿En qué se convirtió la esposa de Lot?",options:["Piedra","Estatua de sal","Arena","Ceniza"],answer:1,category:"Antiguo Testamento"},{q:"¿Quién era el rey más sabio?",options:["David","Salomón","Saúl","Josías"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué fruta comieron Adán y Eva?",options:["Manzana","Fruto prohibido","Uva","Higo"],answer:1,category:"Creación"},{q:"¿Quién era el padre de Juan el Bautista?",options:["José","Zacarías","Simeón","Elías"],answer:1,category:"Nuevo Testamento"}],medium:[{q:"¿Cuántos años vivió Matusalén?",options:["800","900","969","1000"],answer:2,category:"Antiguo Testamento"},{q:"¿Quién era el padre de Salomón?",options:["Abraham","David","Saúl","Moisés"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué profeta subió al cielo en un carro de fuego?",options:["Elías","Eliseo","Isaías","Jeremías"],answer:0,category:"Profetas"},{q:"¿Cuántos años duró el pueblo de Israel en el desierto?",options:["20","30","40","50"],answer:2,category:"Antiguo Testamento"},{q:"¿Quién interpretó los sueños del Faraón?",options:["Moisés","Daniel","José","Aarón"],answer:2,category:"Antiguo Testamento"},{q:"¿Quién escribió la mayor parte de los Salmos?",options:["Salomón","David","Moisés","Asaf"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuál era la profesión de Pablo antes de ser apóstol?",options:["Pescador","Carpintero","Fabricante de tiendas","Recaudador"],answer:2,category:"Nuevo Testamento"},{q:"¿Quién fue el primer mártir cristiano?",options:["Pedro","Esteban","Santiago","Pablo"],answer:1,category:"Nuevo Testamento"},{q:"¿En qué isla estuvo exiliado Juan?",options:["Creta","Chipre","Patmos","Malta"],answer:2,category:"Nuevo Testamento"},{q:"¿Cuántas tribus de Israel había?",options:["10","11","12","13"],answer:2,category:"Antiguo Testamento"},{q:"¿Quién fue el sucesor de Moisés?",options:["Caleb","Josué","Aarón","Eleazar"],answer:1,category:"Antiguo Testamento"},{q:"¿Dónde fue crucificado Jesús?",options:["Monte Sión","Getsemaní","Gólgota","Betania"],answer:2,category:"Nuevo Testamento"},{q:"¿Quién fue arrojado al foso de los leones?",options:["Jonás","Daniel","Eliseo","Jeremías"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuál es el libro más corto del Nuevo Testamento?",options:["Judas","2 Juan","3 Juan","Filemón"],answer:2,category:"General"},{q:"¿Quién fue la esposa de Abraham?",options:["Agar","Sara","Lea","Rebeca"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué apóstol era recaudador de impuestos?",options:["Pedro","Mateo","Juan","Andrés"],answer:1,category:"Nuevo Testamento"},{q:"¿Cuántos panes usó Jesús para alimentar a 5000?",options:["3","5","7","12"],answer:1,category:"Milagros"},{q:"¿Quién traicionó a Jesús?",options:["Pedro","Tomás","Judas Iscariote","Bartolomé"],answer:2,category:"Nuevo Testamento"},{q:"¿Cómo murió Sansón?",options:["En batalla","Derribó el templo","Por enfermedad","Crucificado"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué reina visitó a Salomón por su sabiduría?",options:["Jezabel","Ester","Reina de Sabá","Betsabé"],answer:2,category:"Antiguo Testamento"},{q:"¿Cuántos libros del Nuevo Testamento escribió Pablo?",options:["7","10","13","15"],answer:2,category:"General"},{q:"¿Quién fue el primer rey de Israel?",options:["David","Salomón","Saúl","Samuel"],answer:2,category:"Antiguo Testamento"},{q:"¿Qué lenguaje hablaba Jesús?",options:["Hebreo","Griego","Arameo","Latín"],answer:2,category:"General"},{q:"¿Quién cortó la oreja de un soldado en Getsemaní?",options:["Juan","Pedro","Santiago","Judas"],answer:1,category:"Nuevo Testamento"},{q:"¿Cuántos días estuvo Lázaro muerto antes de ser resucitado?",options:["2","3","4","7"],answer:2,category:"Milagros"}],hard:[{q:"¿Cuál es el versículo más corto de la Biblia?",options:["Juan 3:16","Juan 11:35","Éxodo 20:13","1 Tesalonicenses 5:16"],answer:1,category:"General"},{q:"¿Quién era Melquisedec?",options:["Un profeta","Rey y sacerdote de Salem","Un ángel","Un juez de Israel"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuántos años reinó David en Jerusalén?",options:["20","33","40","45"],answer:1,category:"Antiguo Testamento"},{q:"¿Quién fue la primera persona en ver a Jesús resucitado?",options:["Pedro","Juan","María Magdalena","Tomás"],answer:2,category:"Nuevo Testamento"},{q:"¿En qué río fue bautizado Jesús?",options:["Nilo","Éufrates","Jordán","Tigris"],answer:2,category:"Nuevo Testamento"},{q:"¿Qué iglesia criticó Jesús por ser tibia?",options:["Éfeso","Sardis","Filadelfia","Laodicea"],answer:3,category:"Apocalipsis"},{q:"¿Quién era Nicodemo?",options:["Sacerdote","Fariseo","Saduceo","Centurión"],answer:1,category:"Nuevo Testamento"},{q:"¿Cuántos hijos tuvo Jacob?",options:["10","11","12","13"],answer:2,category:"Antiguo Testamento"},{q:"¿Qué profeta fue llamado por Dios siendo niño?",options:["Isaías","Jeremías","Samuel","Daniel"],answer:2,category:"Profetas"},{q:"¿Cuál es el salmo más largo?",options:["Salmo 23","Salmo 91","Salmo 119","Salmo 150"],answer:2,category:"General"},{q:"¿Quién fue el suegro de Moisés?",options:["Labán","Jetro","Ragüel","Éter"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuántas plagas envió Dios a Egipto?",options:["7","9","10","12"],answer:2,category:"Antiguo Testamento"},{q:"¿Quién construyó el primer templo en Jerusalén?",options:["David","Salomón","Herodes","Zorobabel"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué don especial tenía José el hijo de Jacob?",options:["Fuerza","Interpretar sueños","Profecía","Sabiduría"],answer:1,category:"Antiguo Testamento"},{q:"¿En qué libro se encuentra el capítulo del amor?",options:["Romanos","1 Corintios","Efesios","Filipenses"],answer:1,category:"Nuevo Testamento"},{q:"¿Cuántos jinetes del Apocalipsis hay?",options:["3","4","7","12"],answer:1,category:"Apocalipsis"},{q:"¿Quién era Barrabás?",options:["Discípulo","Sacerdote","Prisionero liberado","Soldado romano"],answer:2,category:"Nuevo Testamento"},{q:"¿En qué se transformó la vara de Moisés ante Faraón?",options:["Fuego","Serpiente","Flores","Agua"],answer:1,category:"Antiguo Testamento"},{q:"¿Quién escribió el Apocalipsis?",options:["Pablo","Pedro","Juan","Lucas"],answer:2,category:"General"},{q:"¿Cuántas puertas tiene la Nueva Jerusalén?",options:["7","10","12","24"],answer:2,category:"Apocalipsis"},{q:"¿Qué patriarca vivió en Ur de los Caldeos?",options:["Isaac","Abraham","Jacob","Noé"],answer:1,category:"Antiguo Testamento"},{q:"¿Quién era Bernabé?",options:["Apóstol original","Compañero de Pablo","Profeta del AT","Juez"],answer:1,category:"Nuevo Testamento"},{q:"¿Qué mujer se disfrazó para consultar a una médium?",options:["Jezabel","Saúl","Dalila","Mical"],answer:1,category:"Antiguo Testamento"},{q:"¿En qué batalla se detuvo el sol?",options:["Jericó","Gabaón","Hai","Betel"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué apóstol fue arrebatado al tercer cielo?",options:["Juan","Pedro","Pablo","Santiago"],answer:2,category:"Nuevo Testamento"}]};function zg(n,e,t="easy"){const r={easy:1,medium:1.5,hard:2}[t]||1,a=Math.floor(e*.5*r),o=Math.floor(e*r);return{coins:Math.max(a,5),xp:Math.max(o,10)}}function ts(n,e,t=0,s="easy"){const r=zg(n,e,s);un(r.coins);const a=cn(r.xp);if(a){const o=Re();W(`🎉 ¡Subiste al nivel ${o.level}!`,"reward")}return setTimeout(()=>$g(),500),{...r,leveledUp:a}}function Gg(n){const s=[...$e.easy.map(D=>({...D,diff:"easy"})),...$e.medium.map(D=>({...D,diff:"medium"})),...$e.hard.map(D=>({...D,diff:"hard"}))],r=Ve(s).slice(0,10);let a=0,o=0,c=0,d=0,h=null,f=20,p=!1;function b(){const D=r[a];p=!1,f=20;const L={easy:"Fácil",medium:"Medio",hard:"Difícil"},q={easy:"var(--color-success)",medium:"var(--color-gold)",hard:"var(--color-error)"};n.innerHTML=`
      <div class="trivia-game">
        <div class="trivia-header">
          <div class="trivia-progress">
            <span>Pregunta ${a+1} / 10</span>
            <span class="trivia-score">⭐ ${o}</span>
          </div>
          <div class="trivia-progress-bar">
            <div class="trivia-progress-fill" style="width: ${a/10*100}%"></div>
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
          <span class="badge" style="background: ${q[D.diff]}">${L[D.diff]}</span>
          <span class="text-sm text-muted">${D.category}</span>
        </div>

        <div class="trivia-question">${D.q}</div>

        <div class="trivia-options">
          ${D.options.map((F,k)=>`
            <button class="trivia-option" data-index="${k}">
              <span class="option-letter">${String.fromCharCode(65+k)}</span>
              <span>${F}</span>
            </button>
          `).join("")}
        </div>

        ${d>=3?`<div class="streak-indicator">🔥 ¡Racha de ${d}!</div>`:""}
      </div>
    `,A(),n.querySelectorAll(".trivia-option").forEach(F=>{F.addEventListener("click",()=>{if(p)return;const k=parseInt(F.dataset.index);R(k,D)})})}function A(){clearInterval(h);const D=document.getElementById("timer-ring"),L=2*Math.PI*42;h=setInterval(()=>{f--;const q=document.getElementById("timer-text");if(q&&(q.textContent=f),D){const F=L*(1-f/20);D.setAttribute("stroke-dashoffset",F),f<=5&&D.setAttribute("stroke","var(--color-error)")}f<=0&&(clearInterval(h),V())},1e3)}function R(D,L){p=!0,clearInterval(h);const q=n.querySelectorAll(".trivia-option"),F=D===L.answer;if(q.forEach((k,N)=>{k.disabled=!0,N===L.answer&&k.classList.add("correct"),N===D&&!F&&k.classList.add("wrong")}),F){c++,d++;const k=Math.floor(f*2),N={easy:10,medium:20,hard:30},E=10+k+(N[L.diff]||0);o+=E,d>=3&&Ie("streak_3"),f>=17&&Ie("fast_answer")}else d=0;setTimeout(()=>{a++,a<10?b():x()},1500)}function V(){p=!0,d=0;const D=r[a];n.querySelectorAll(".trivia-option").forEach((q,F)=>{q.disabled=!0,F===D.answer&&q.classList.add("correct")}),W("⏰ ¡Se acabó el tiempo!","error"),setTimeout(()=>{a++,a<10?b():x()},1500)}function x(){var F,k;clearInterval(h);const D=Math.round(c/10*100);D===100&&Ie("perfect_trivia");const L=ts("trivia",o,c,"easy");es("trivia",o,c);const q=D>=80?"🏆":D>=60?"😊":D>=40?"🤔":"📖";n.innerHTML=`
      <div class="game-results">
        <div class="results-emoji">${q}</div>
        <h2 class="results-title">${D>=60?"¡Bien hecho!":"¡Sigue practicando!"}</h2>

        <div class="results-score-circle">
          <span class="results-score-value">${o}</span>
          <span class="results-score-label">puntos</span>
        </div>

        <div class="results-stats">
          <div class="results-stat">
            <span class="results-stat-value">${c}/10</span>
            <span class="results-stat-label">Correctas</span>
          </div>
          <div class="results-stat">
            <span class="results-stat-value">${D}%</span>
            <span class="results-stat-label">Precisión</span>
          </div>
        </div>

        <div class="results-rewards">
          <div class="reward-item">🪙 +${L.coins} monedas</div>
          <div class="reward-item">⭐ +${L.xp} XP</div>
        </div>

        <div class="results-actions">
          <button class="btn btn-primary btn-block" id="btn-play-again">🔄 Jugar de Nuevo</button>
          <button class="btn btn-secondary btn-block" id="btn-go-home">🏠 Volver al Menú</button>
        </div>
      </div>
    `,(F=document.getElementById("btn-play-again"))==null||F.addEventListener("click",()=>{me("game",{gameId:"trivia"})}),(k=document.getElementById("btn-go-home"))==null||k.addEventListener("click",()=>{me("home")})}return b(),()=>{clearInterval(h)}}const bi=[{name:"Moisés",clues:["Fue criado en el palacio de un faraón.","Dios le habló desde una zarza ardiente.","Liberó al pueblo de Israel de la esclavitud.","Recibió los Diez Mandamientos en el monte Sinaí.","Abrió las aguas del Mar Rojo."],book:"Éxodo"},{name:"David",clues:["Era el hijo menor de su familia.","Fue pastor de ovejas en su juventud.","Tocaba el arpa con gran habilidad.","Derrotó a un gigante con una piedra y una honda.","Se convirtió en el segundo rey de Israel."],book:"Samuel"},{name:"Noé",clues:["Era un hombre justo en su generación.","Dios le encomendó una misión especial de rescate.","Trabajó construyendo algo enorme durante muchos años.","Reunió animales de todas las especies.","Construyó el arca y sobrevivió al diluvio."],book:"Génesis"},{name:"Abraham",clues:["Vivía originalmente en Ur de los Caldeos.","Dios le prometió descendencia como las estrellas.","Su esposa se llamaba Sara.","Fue llamado el padre de la fe.","Estuvo dispuesto a sacrificar a su hijo Isaac."],book:"Génesis"},{name:"José",clues:["Era el favorito de su padre Jacob.","Sus hermanos le tenían envidia.","Fue vendido y llevado a un país lejano.","Tenía el don de interpretar sueños.","Llegó a ser gobernador de Egipto."],book:"Génesis"},{name:"Daniel",clues:["Fue llevado cautivo a Babilonia siendo joven.","Se negó a comer la comida del rey.","Interpretó el sueño de una gran estatua.","Sus enemigos buscaron destruirlo por su fe.","Fue arrojado al foso de los leones."],book:"Daniel"},{name:"Sansón",clues:["Su nacimiento fue anunciado por un ángel.","Era nazareo desde su nacimiento.","Su fuerza era sobrenatural.","Una mujer descubrió el secreto de su poder.","Derribó el templo de los filisteos."],book:"Jueces"},{name:"Salomón",clues:["Era hijo del segundo rey de Israel.","Pidió sabiduría a Dios en lugar de riquezas.","Construyó el primer templo de Jerusalén.","La Reina de Sabá visitó su corte.","Es considerado el hombre más sabio que ha existido."],book:"Reyes"},{name:"María",clues:["Era una joven de Nazaret.","Un ángel le anunció un mensaje especial.","Estaba comprometida con un carpintero.","Visitó a su prima Elisabet.","Es la madre de Jesús."],book:"Lucas"},{name:"Pedro",clues:["Era pescador de profesión.","Su hermano también era discípulo de Jesús.","Caminó sobre el agua por un momento.","Negó conocer a Jesús tres veces.","Se convirtió en líder de la iglesia primitiva."],book:"Evangelios"},{name:"Pablo",clues:["Su nombre original era Saulo.","Perseguía a los primeros cristianos.","Tuvo un encuentro sobrenatural camino a Damasco.","Escribió muchas cartas del Nuevo Testamento.","Realizó varios viajes misioneros por el Mediterráneo."],book:"Hechos"},{name:"Elías",clues:["Fue un profeta del reino del norte.","Desafió a los profetas de un dios falso.","Fue alimentado por cuervos junto a un arroyo.","Hizo descender fuego del cielo.","Subió al cielo en un carro de fuego."],book:"Reyes"},{name:"Rut",clues:["No era israelita de nacimiento.","Fue nuera de Noemí.",'Dijo: "A donde tú vayas, iré yo".',"Trabajó recogiendo espigas en un campo.","Se convirtió en bisabuela del rey David."],book:"Rut"},{name:"Ester",clues:["Era huérfana criada por su primo.","Llegó a ser reina de Persia.","Arriesgó su vida para salvar a su pueblo.","Organizó un banquete para revelar un complot.","Su historia se celebra en la fiesta de Purim."],book:"Ester"},{name:"Jonás",clues:["Dios le pidió ir a una ciudad malvada.","Intentó huir de la misión de Dios.","Fue lanzado al mar durante una tormenta.","Pasó tres días dentro de un gran pez.","Finalmente predicó en Nínive."],book:"Jonás"},{name:"Juan el Bautista",clues:["Su padre quedó mudo cuando anunció su nacimiento.","Vivía en el desierto.","Comía langostas y miel silvestre.","Predicaba arrepentimiento y bautismo.","Bautizó a Jesús en el río Jordán."],book:"Evangelios"},{name:"Josué",clues:["Fue asistente de Moisés durante años.","Era uno de los doce espías enviados a Canaán.","Fue valiente cuando otros tuvieron miedo.","Lideró al pueblo cruzando el río Jordán.","Conquistó las murallas de Jericó."],book:"Josué"},{name:"Jacob",clues:["Era hermano gemelo de Esaú.","Obtuvo la bendición de su padre mediante un engaño.","Soñó con una escalera que llegaba al cielo.","Trabajó 14 años para casarse con Raquel.","Luchó con un ángel y fue llamado Israel."],book:"Génesis"}];function Hg(n){const t=Ve([...bi]).slice(0,5);let s=0,r=0,a=0,o=0;function c(){const p=t[s];o=0;const b=bi.filter(V=>V.name!==p.name).map(V=>V.name),A=Ve(b).slice(0,3),R=Ve([p.name,...A]);d(p,R)}function d(p,b){var V;const A=p.clues.slice(0,o+1),R=Math.max(50-o*10,10);n.innerHTML=`
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
          <span>Pista ${o+1} de ${p.clues.length}</span>
          <span class="text-muted">Valor: ${R} pts</span>
        </div>

        <div class="characters-clues">
          ${A.map((x,D)=>`
            <div class="clue-card ${D===o?"clue-new":""}">
              <span class="clue-number">${D+1}</span>
              <span>${x}</span>
            </div>
          `).join("")}
        </div>

        ${o<p.clues.length-1?`
          <button class="btn btn-secondary btn-block mb-md" id="btn-more-clue">
            💡 Otra Pista (-10 pts)
          </button>
        `:""}

        <div class="section-title mt-md">¿Quién es?</div>
        <div class="characters-options">
          ${b.map(x=>`
            <button class="characters-option" data-name="${x}">${x}</button>
          `).join("")}
        </div>
      </div>
    `,(V=document.getElementById("btn-more-clue"))==null||V.addEventListener("click",()=>{o++,d(p,b)}),n.querySelectorAll(".characters-option").forEach(x=>{x.addEventListener("click",()=>{const D=x.dataset.name;h(D,p)})})}function h(p,b,A){const R=p===b.name;if(n.querySelectorAll(".characters-option").forEach(V=>{V.disabled=!0,V.dataset.name===b.name&&V.classList.add("correct"),V.dataset.name===p&&!R&&V.classList.add("wrong")}),R){a++;const V=Math.max(50-o*10,10);r+=V,W(`✅ ¡Correcto! +${V} pts`,"success")}else W(`❌ Era: ${b.name}`,"error");setTimeout(()=>{s++,s<5?c():f()},1800)}function f(){var A,R;const p=ts("characters",r,a,"medium");es("characters",r,a);const b=a>=4?"🕵️":a>=3?"😊":"📖";n.innerHTML=`
      <div class="game-results">
        <div class="results-emoji">${b}</div>
        <h2 class="results-title">${a>=3?"¡Gran detective bíblico!":"¡Sigue aprendiendo!"}</h2>

        <div class="results-score-circle">
          <span class="results-score-value">${r}</span>
          <span class="results-score-label">puntos</span>
        </div>

        <div class="results-stats">
          <div class="results-stat">
            <span class="results-stat-value">${a}/5</span>
            <span class="results-stat-label">Adivinados</span>
          </div>
        </div>

        <div class="results-rewards">
          <div class="reward-item">🪙 +${p.coins} monedas</div>
          <div class="reward-item">⭐ +${p.xp} XP</div>
        </div>

        <div class="results-actions">
          <button class="btn btn-primary btn-block" id="btn-play-again">🔄 Jugar de Nuevo</button>
          <button class="btn btn-secondary btn-block" id="btn-go-home">🏠 Volver al Menú</button>
        </div>
      </div>
    `,(A=document.getElementById("btn-play-again"))==null||A.addEventListener("click",()=>{me("game",{gameId:"characters"})}),(R=document.getElementById("btn-go-home"))==null||R.addEventListener("click",()=>{me("home")})}c()}function Jg(n){const t=Ve([...Qs]).slice(0,5);let s=0,r=0,a=0;function o(h){const f=h.text.split(" "),p=Math.min(3,Math.max(2,Math.floor(f.length/5))),b=[];for(;b.length<p;){const L=Math.floor(Math.random()*f.length);!b.includes(L)&&f[L].length>3&&b.push(L)}b.sort((L,q)=>L-q);const A=[],R=[];f.forEach((L,q)=>{if(b.includes(q)){const F=L.replace(/[.,;:!?¡¿"']/g,""),k=L.replace(F,"");A.push({type:"blank",original:F,punct:k,index:R.length}),R.push(F)}else A.push({type:"word",text:L})});const x=Ve(["gracia","verdad","camino","espíritu","gloria","pueblo","cielo","tierra","corazón","alma"].filter(L=>!R.includes(L.toLowerCase()))).slice(0,2),D=Ve([...R,...x]);return{blankedWords:A,missingWords:R,allOptions:D}}function c(){const h=t[s],{blankedWords:f,missingWords:p,allOptions:b}=o(h);let A=new Array(p.length).fill(null);function R(){var x;n.innerHTML=`
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
            ${f.map(D=>{if(D.type==="word")return`<span class="vc-word">${D.text}</span>`;{const L=A[D.index];return`<span class="vc-blank ${L?"filled":""}" data-blank="${D.index}">${L||"___"}${D.punct}</span>`}}).join(" ")}
          </div>

          <div class="section-title mt-lg">Elige las palabras:</div>
          <div class="vc-options">
            ${b.map(D=>{const L=A.includes(D);return`<button class="vc-option ${L?"used":""}" data-word="${D}" ${L?"disabled":""}>${D}</button>`}).join("")}
          </div>

          <button class="btn btn-primary btn-block mt-lg ${A.includes(null)?"disabled":""}" id="btn-check-verse" ${A.includes(null)?"disabled":""}>
            ✅ Comprobar
          </button>
        </div>
      `,n.querySelectorAll(".vc-blank.filled").forEach(D=>{D.addEventListener("click",()=>{const L=parseInt(D.dataset.blank);A[L]=null,R()})}),n.querySelectorAll(".vc-option:not([disabled])").forEach(D=>{D.addEventListener("click",()=>{const L=D.dataset.word,q=A.indexOf(null);q!==-1&&(A[q]=L,R())})}),(x=document.getElementById("btn-check-verse"))==null||x.addEventListener("click",()=>{V(p)})}function V(x){let D=!0;x.forEach((L,q)=>{var F;((F=A[q])==null?void 0:F.toLowerCase())!==L.toLowerCase()&&(D=!1)}),D?(a++,r+=30,W("✅ ¡Correcto! +30 pts","success")):W(`❌ Respuesta: ${x.join(", ")}`,"error"),setTimeout(()=>{s++,s<5?c():d()},2e3)}R()}function d(){var p,b;const h=ts("verse-complete",r,a,"medium");es("verse-complete",r,a);const f=a>=4?"📖":a>=2?"😊":"🙏";n.innerHTML=`
      <div class="game-results">
        <div class="results-emoji">${f}</div>
        <h2 class="results-title">${a>=3?"¡Excelente memorización!":"¡Sigue practicando la Palabra!"}</h2>

        <div class="results-score-circle">
          <span class="results-score-value">${r}</span>
          <span class="results-score-label">puntos</span>
        </div>

        <div class="results-stats">
          <div class="results-stat">
            <span class="results-stat-value">${a}/5</span>
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
    `,(p=document.getElementById("btn-play-again"))==null||p.addEventListener("click",()=>{me("game",{gameId:"verse-complete"})}),(b=document.getElementById("btn-go-home"))==null||b.addEventListener("click",()=>{me("home")})}c()}const Qg=[{theme:"Frutos del Espíritu",words:["AMOR","GOZO","PAZ","PACIENCIA","BONDAD","FE","MANSEDUMBRE","TEMPLANZA","BENIGNIDAD","PERDON","PIEDAD"]},{theme:"Discípulos de Jesús",words:["PEDRO","JUAN","MATEO","TOMAS","SANTIAGO","ANDRES","FELIPE","SIMON","BARTOLOME","JUDAS","TADEO","FELIPE"]},{theme:"Libros del Antiguo Testamento",words:["GENESIS","EXODO","LEVITICO","NUMEROS","DEUTERONOMIO","JOSUE","JUECES","RUT","SAMUEL","REYES","SALMOS"]},{theme:"Personajes Bíblicos",words:["MOISES","DAVID","SARA","NOE","ESTER","ABRAHAM","ISAAC","JACOB","JOSE","SAMUEL","DANIEL","SANSÓN"]},{theme:"Lugares Bíblicos",words:["EDEN","SINAI","BELEN","JORDAN","JERUSALEN","NAZARET","JERICO","EGIPTO","BETEL","CANAN","GOLGOTA"]},{theme:"Valores Cristianos",words:["GRACIA","VERDAD","VIDA","LUZ","PERDON","AMOR","JUSTICIA","SANTIDAD","HONESTIDAD","HUMILDAD","FE"]},{theme:"Profetas",words:["ELIAS","ISAIAS","DANIEL","JONAS","JEREMIAS","EZEQUIEL","OSEAS","MALAQUIAS","AMOS","MIQUEAS","HABACUC"]},{theme:"Animales de la Biblia",words:["LEON","PALOMA","OVEJA","PEZ","BURRA","AGUILA","TORO","CABALLO","LOBO","SERPIENTE","CORDERO"]},{theme:"Reyes de la Biblia",words:["DAVID","SAUL","SALOMON","JOSIAS","EZEQUIAS","ACAB","ROBOAM","OZIAS","HERODES","FELESTINO","BALAC"]},{theme:"Milagros de Jesús",words:["VINO","PAN","AGUA","VISTA","VIDA","PESCA","CALMA","LAZARO","PIES","OREJA","HIJA"]}];function Ou(n){e();function e(){n.innerHTML=`
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
    `,n.querySelectorAll(".btn-difficulty").forEach(s=>{s.addEventListener("click",r=>{const a=s.dataset.level;t(a)})})}function t(s){const a={easy:{size:11,wordCount:10,directions:[[0,1],[1,0]]},medium:{size:13,wordCount:11,directions:[[0,1],[1,0],[1,1]]},hard:{size:15,wordCount:12,directions:[[0,1],[1,0],[1,1],[0,-1],[-1,0]]}}[s],o=a.size,c=Ve([...Qg])[0],d=Ve([...c.words]).slice(0,a.wordCount);let h=[],f=[],p=!1,b=[],A=0,R=Date.now();function V(){h=Array.from({length:o},()=>Array.from({length:o},()=>""));const F=a.directions;d.forEach(N=>{let E=!1,g=0;for(;!E&&g<100;){g++;const v=F[Math.floor(Math.random()*F.length)],T=Math.floor(Math.random()*o),y=Math.floor(Math.random()*o),w=T+v[0]*(N.length-1),_=y+v[1]*(N.length-1);if(w<0||w>=o||_<0||_>=o)continue;let U=!0;for(let B=0;B<N.length;B++){const X=T+v[0]*B,oe=y+v[1]*B;if(h[X][oe]!==""&&h[X][oe]!==N[B]){U=!1;break}}if(U){for(let B=0;B<N.length;B++){const X=T+v[0]*B,oe=y+v[1]*B;h[X][oe]=N[B]}E=!0}}});const k="ABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let N=0;N<o;N++)for(let E=0;E<o;E++)h[N][E]===""&&(h[N][E]=k[Math.floor(Math.random()*k.length)])}function x(){n.innerHTML=`
        <div class="word-search-game">
          <div class="ws-header">
            <div class="ws-theme">
              <span class="ws-theme-icon">📚</span>
              <span>${c.theme} (${s.toUpperCase()})</span>
            </div>
            <div class="ws-found">${f.length} / ${d.length}</div>
          </div>

          <div class="ws-words-list">
            ${d.map(k=>`
              <span class="ws-word ${f.includes(k)?"found":""}">${k}</span>
            `).join("")}
          </div>

          <div class="ws-grid" id="ws-grid">
            ${h.map((k,N)=>k.map((E,g)=>`
                <div class="ws-cell" data-row="${N}" data-col="${g}">${E}</div>
              `).join("")).join("")}
          </div>

          <p class="text-sm text-muted text-center mt-md">Arrastra para seleccionar palabras consecutivas.</p>
        </div>
      `;const F=document.getElementById("ws-grid");F&&(F.style.gridTemplateColumns=`repeat(${o}, 1fr)`),D()}function D(){const F=document.getElementById("ws-grid");if(!F)return;const k=T=>{const y=T.touches?T.touches[0]:T,w=document.elementFromPoint(y.clientX,y.clientY);return w&&w.classList.contains("ws-cell")?{row:parseInt(w.dataset.row),col:parseInt(w.dataset.col),el:w}:null},N=T=>{T.preventDefault(),p=!0,b=[];const y=k(T);y&&(b.push(y),y.el.classList.add("cell-selected"))},E=T=>{if(!p)return;T.preventDefault();const y=k(T);y&&!b.some(w=>w.row===y.row&&w.col===y.col)&&(b.length===1||v(y))&&(b.push(y),y.el.classList.add("cell-selected"))},g=()=>{p&&(p=!1,L(),document.querySelectorAll(".cell-selected").forEach(T=>T.classList.remove("cell-selected")),b=[])};function v(T){if(b.length<1)return!0;const y=b[0],w=b[b.length-1],_=Math.sign(w.row-y.row),U=Math.sign(w.col-y.col),B=w.row+_,X=w.col+U;return T.row===B&&T.col===X}F.addEventListener("mousedown",N),F.addEventListener("mousemove",E),window.addEventListener("mouseup",g),F.addEventListener("touchstart",N,{passive:!1}),F.addEventListener("touchmove",E,{passive:!1}),window.addEventListener("touchend",g)}function L(){if(b.length<2)return;const F=b.map(E=>h[E.row][E.col]).join(""),k=F.split("").reverse().join(""),N=d.find(E=>(E===F||E===k)&&!f.includes(E));if(N){f.push(N),A+=25,b.forEach(v=>{const T=document.querySelector(`.ws-cell[data-row="${v.row}"][data-col="${v.col}"]`);T&&T.classList.add("cell-found")});const E=Array.from(document.querySelectorAll(".ws-word")).find(v=>v.textContent===N);E&&E.classList.add("found");const g=document.querySelector(".ws-found");if(g&&(g.textContent=`${f.length} / ${d.length}`),W(`✅ ¡Encontraste "${N}"!`,"success"),f.length===d.length){const v=Math.max(0,60-Math.floor((Date.now()-R)/1e3));A+=v,setTimeout(q,1e3)}}}function q(){var k,N;const F=ts("word-search",A,f.length,s);es("word-search",A,f.length),n.innerHTML=`
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
              <span class="results-stat-value">${Math.floor((Date.now()-R)/1e3)}s</span>
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
      `,(k=document.getElementById("btn-play-again"))==null||k.addEventListener("click",()=>{Ou(n)}),(N=document.getElementById("btn-go-home"))==null||N.addEventListener("click",()=>{me("home")})}V(),x()}}function Wg(n){const s=Ve([...bi]).slice(0,6).map((R,V)=>[{id:V,type:"name",text:R.name,icon:"👤",pairId:V},{id:V,type:"clue",text:R.clues[0],icon:"💡",pairId:V}]).flat(),r=Ve(s);let a=[],o=[],c=0,d=0,h=Date.now(),f=!0;function p(){n.innerHTML=`
      <div class="memory-game">
        <div class="memory-header">
          <div class="memory-stats">
            <span>🎯 ${o.length}/6</span>
            <span>🔄 ${c} movimientos</span>
          </div>
        </div>

        <div class="memory-grid">
          ${r.map((R,V)=>`
            <div class="memory-card ${o.includes(R.pairId)?"matched":""} ${a.includes(V)?"flipped":""}"
                 data-index="${V}">
              <div class="memory-card-inner">
                <div class="memory-card-front">
                  <span class="memory-card-icon">✝️</span>
                </div>
                <div class="memory-card-back">
                  <span class="memory-card-type">${R.icon}</span>
                  <span class="memory-card-text">${R.text}</span>
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `,n.querySelectorAll(".memory-card").forEach(R=>{R.addEventListener("click",()=>{if(!f)return;const V=parseInt(R.dataset.index);b(V)})})}function b(R){if(a.includes(R)||o.includes(r[R].pairId)||a.length>=2)return;a.push(R);const V=n.querySelector(`.memory-card[data-index="${R}"]`);if(V&&V.classList.add("flipped"),a.length===2){c++,f=!1;const[x,D]=a,L=r[x],q=r[D];L.pairId===q.pairId&&L.type!==q.type?(o.push(L.pairId),d+=Math.max(30-c,10),setTimeout(()=>{var k,N;(k=document.querySelector(`.memory-card[data-index="${x}"]`))==null||k.classList.add("matched"),(N=document.querySelector(`.memory-card[data-index="${D}"]`))==null||N.classList.add("matched");const F=n.querySelector(".memory-stats");F&&(F.innerHTML=`<span>🎯 ${o.length}/6</span><span>🔄 ${c} movimientos</span>`),a=[],f=!0,W("✅ ¡Par encontrado!","success"),o.length===6&&setTimeout(A,800)},600)):setTimeout(()=>{var k,N;(k=document.querySelector(`.memory-card[data-index="${x}"]`))==null||k.classList.remove("flipped"),(N=document.querySelector(`.memory-card[data-index="${D}"]`))==null||N.classList.remove("flipped");const F=n.querySelector(".memory-stats");F&&(F.innerHTML=`<span>🎯 ${o.length}/6</span><span>🔄 ${c} movimientos</span>`),a=[],f=!0},1e3)}}function A(){var L,q;const R=Math.floor((Date.now()-h)/1e3),V=Math.max(0,120-R);d+=V;const x=ts("memory",d,o.length,"easy");es("memory",d,o.length);const D=c<=12?"🧠":c<=18?"😊":"🃏";n.innerHTML=`
      <div class="game-results">
        <div class="results-emoji">${D}</div>
        <h2 class="results-title">${c<=12?"¡Memoria increíble!":"¡Bien jugado!"}</h2>

        <div class="results-score-circle">
          <span class="results-score-value">${d}</span>
          <span class="results-score-label">puntos</span>
        </div>

        <div class="results-stats">
          <div class="results-stat">
            <span class="results-stat-value">${c}</span>
            <span class="results-stat-label">Movimientos</span>
          </div>
          <div class="results-stat">
            <span class="results-stat-value">${R}s</span>
            <span class="results-stat-label">Tiempo</span>
          </div>
        </div>

        <div class="results-rewards">
          <div class="reward-item">🪙 +${x.coins} monedas</div>
          <div class="reward-item">⭐ +${x.xp} XP</div>
        </div>

        <div class="results-actions">
          <button class="btn btn-primary btn-block" id="btn-play-again">🔄 Jugar de Nuevo</button>
          <button class="btn btn-secondary btn-block" id="btn-go-home">🏠 Volver al Menú</button>
        </div>
      </div>
    `,(L=document.getElementById("btn-play-again"))==null||L.addEventListener("click",()=>{me("game",{gameId:"memory"})}),(q=document.getElementById("btn-go-home"))==null||q.addEventListener("click",()=>{me("home")})}p()}const Fu={noah:{id:"noah",title:"El Arca de Noé",description:"Construye un arca para salvar a la creación del gran diluvio.",cover:"assets/stories/noah.png",difficulty:"Fácil",reward:100,xp:50,startNode:"start",nodes:{start:{text:'Dios ve que la tierra está llena de maldad, pero encuentra gracia en ti, Noé. Te dice: "Hazte un arca de madera de gofer; harás aposentos en el arca, y la calafatearás con brea". El cielo se oscurece.',image:"assets/stories/noah.png",choices:[{text:"🛠️ Obedecer y empezar a construir de inmediato",nextNode:"build"},{text:"🗣️ Hablar con los vecinos para advertirles del peligro",nextNode:"warn_neighbors"}]},build:{text:"Pasan los años. Construyes el Arca con tus hijos Sem, Cam y Jafet. La gente se burla de ti porque no hay señales de lluvia en el desierto. ¿Qué haces ante las burlas?",choices:[{text:"🙏 Continuar trabajando con fe y paciencia",nextNode:"animals"},{text:"🛑 Detenerte un momento para discutir y defenderte",nextNode:"argue"}]},warn_neighbors:{text:'Intentas advertir a la gente, pero se ríen de ti. "¡No ha llovido en años, viejo loco!", te gritan. El tiempo apremia y el arca aún no está lista.',choices:[{text:"🛠️ Volver al trabajo rápidamente en el Arca",nextNode:"build"},{text:"😔 Sentirte desanimado por su incredulidad",nextNode:"discouraged"}]},discouraged:{text:"Te sientas junto a las maderas y respiras profundo. Recuerdas la promesa de Dios de salvarte a ti y a tu familia. Tu fe te renueva.",choices:[{text:"🛠️ Levantar la herramienta y seguir construyendo",nextNode:"build"}]},argue:{text:"Al discutir, pierdes tiempo valioso y la ira entra en tu corazón. El trabajo se retrasa. Sin embargo, decides que lo mejor es concentrarse en lo importante.",choices:[{text:"🛠️ Ignorar las burlas y retomar la construcción",nextNode:"animals"}]},animals:{text:"¡El Arca está terminada! De repente, una procesión milagrosa comienza de la nada: animales de dos en dos, macho y hembra, entran caminando pacíficamente al Arca.",choices:[{text:"🚪 Entrar al Arca con tu familia y cerrar las puertas",nextNode:"flood"}]},flood:{text:"Las cataratas de los cielos se abren y el abismo estalla. Llueve durante 40 días y 40 noches. El Arca flota sobre las aguas. Estás a salvo con tu familia y los animales.",choices:[{text:"🕊️ Esperar a que las aguas bajen y enviar un ave",nextNode:"dove"}]},dove:{text:"Envías una paloma. Regresa la primera vez, pero la segunda vez trae una rama de olivo en el pico. ¡Las aguas están bajando! Finalmente, el Arca se asienta en el monte Ararat.",choices:[{text:"🌈 Salir del Arca y dar gracias a Dios",nextNode:"end"}]},end:{text:"Sales a tierra seca. Dios pone un hermoso arcoíris en el cielo como pacto de que nunca más destruirá la tierra con agua. ¡Has salvado la vida en la tierra!",isEnd:!0,message:"¡Felicidades! Completaste la historia de Noé con obediencia y fe."}}},david:{id:"david",title:"David y Goliat",description:"Enfrenta al gigante filisteo con una honda y mucha fe.",cover:"assets/stories/david.png",difficulty:"Media",reward:120,xp:60,startNode:"start",nodes:{start:{text:"Llegas al campamento del ejército de Israel para llevar comida a tus hermanos mayores. Allí, escuchas a un gigante de casi 3 metros, Goliat, desafiando a Israel al combate.",image:"assets/stories/david.png",choices:[{text:"🛡️ Preguntar qué recompensa tendrá quien lo venza",nextNode:"ask_king"},{text:"😠 Sentirte indignado por los insultos que lanza a Dios",nextNode:"indignant"}]},ask_king:{text:'Te llevan ante el Rey Saúl. Él te mira de arriba abajo: "Eres solo un muchacho, y él un hombre de guerra". Tú recuerdas cómo Dios te libró del león y el oso.',choices:[{text:"👑 Aceptar la armadura del Rey Saúl para pelear",nextNode:"armor"},{text:"❌ Rechazar la armadura y pelear como pastor",nextNode:"stones"}]},indignant:{text:'Dices en voz alta: "¿Quién es este filisteo incircunciso para que provoque a los escuadrones del Dios viviente?". El Rey Saúl escucha tu valentía.',choices:[{text:"👑 Ir a hablar con el Rey Saúl sobre el combate",nextNode:"ask_king"}]},armor:{text:"Te pones el casco de bronce y la pesada coraza. Al intentar dar un paso, te das cuenta de que no puedes moverte con soltura ni has practicado con ella.",choices:[{text:"❌ Quitarte la armadura y confiar en tu honda",nextNode:"stones"}]},stones:{text:"Vas al arroyo y recoges cinco piedras lisas del lecho del río. Las metes en tu bolsa de pastor y caminas hacia el centro del valle, donde Goliat te espera riéndose.",choices:[{text:"🪨 Elegir una piedra y avanzar corriendo",nextNode:"fight_start"}]},fight_start:{text:'Goliat grita: "¿Soy yo un perro para que vengas a mí con palos?". Tú le respondes: "¡Tú vienes a mí con espada, pero yo voy en el nombre de Jehová!".',choices:[{text:"🎯 Poner la piedra en la honda y girarla con fuerza",nextNode:"sling_shot"}]},sling_shot:{text:"Corres hacia el filisteo. Giras la honda y sueltas un extremo. La piedra vuela silbando por el aire y se clava directamente en la frente de Goliat.",choices:[{text:"🏆 El gigante cae al suelo de bruces",nextNode:"end"}]},end:{text:"El campamento filisteo huye aterrado, mientras el ejército de Israel celebra una gran victoria. Has demostrado que Dios no salva con espada, sino con fe.",isEnd:!0,message:"¡Felicidades! Venciste a Goliat con confianza en el Señor."}}},daniel:{id:"daniel",title:"Daniel en el Foso",description:"Permanece fiel a Dios ante un edicto del Rey Darío.",cover:"assets/stories/daniel.png",difficulty:"Difícil",reward:150,xp:75,startNode:"start",nodes:{start:{text:'Eres uno de los gobernadores más sabios del imperio. Otros oficiales, celosos de ti, engañan al Rey Darío para firmar una ley: "Ninguna persona puede orar a ningún dios excepto al Rey durante 30 días".',image:"assets/stories/daniel.png",choices:[{text:"🙏 Ignorar la ley y orar a Dios como siempre",nextNode:"pray"},{text:"🚪 Orar pero con las ventanas cerradas en secreto",nextNode:"secret_pray"}]},pray:{text:"Vas a tu casa, abres las ventanas hacia Jerusalén y te arrodillas a orar tres veces al día dando gracias a Dios. Los oficiales espías te ven y corren a decírselo al Rey.",choices:[{text:"👑 Dejarte llevar por los guardias ante el Rey Darío",nextNode:"arrest"}]},secret_pray:{text:"Decides orar en secreto por miedo. Pero tu corazón siente que estás ocultando tu fe. Quieres dar testimonio de la gloria del Dios vivo.",choices:[{text:"☀️ Abrir las ventanas y orar con valentía",nextNode:"pray"}]},arrest:{text:'El Rey Darío está muy triste porque te aprecia, pero su propia ley no puede cambiarse. Te dice: "El Dios tuyo, a quien tú continuamente sirves, él te libre". Te arrojan al foso de los leones.',choices:[{text:"🦁 Caer en el foso oscuro y esperar a que rujan",nextNode:"den"}]},den:{text:"Te encuentras en la oscuridad rodeado de ojos amenazantes que brillan. De repente, una luz celestial aparece y los leones se sientan pacíficamente a tu alrededor. ¿Qué haces?",choices:[{text:"🙏 Sentarte a dar gracias a Dios por el milagro",nextNode:"morning"},{text:"🦁 Intentar acariciar a uno de los leones",nextNode:"pet_lion"}]},pet_lion:{text:"Te acercas a un león y este ronronea como un gatito. Dios ha cerrado la boca de las fieras para protegerte de todo daño.",choices:[{text:"☀️ Esperar a que amanezca",nextNode:"morning"}]},morning:{text:'Amanece. El Rey Darío corre al foso y grita con dolor: "¡Daniel, siervo del Dios viviente! ¿Te ha podido salvar tu Dios?".',choices:[{text:"🗣️ ¡Rey, vive para siempre! ¡Dios envió su ángel!",nextNode:"end"}]},end:{text:"El Rey Darío, lleno de gozo, te saca del foso. Ni un rasguño hay en ti. Entonces firma un nuevo edicto mandando a todo el reino a temer al Dios de Daniel, que salva y libra.",isEnd:!0,message:"¡Felicidades! Mantuviste tu fe firme y Dios te protegió."}}},moses:{id:"moses",title:"Moisés y el Mar Rojo",description:"Guía al pueblo de Israel hacia la libertad cruzando el mar.",cover:"assets/stories/moses.png",difficulty:"Media",reward:130,xp:65,startNode:"start",nodes:{start:{text:"Has guiado al pueblo de Israel fuera de Egipto tras las diez plagas. Sin embargo, os encontráis atrapados: el Mar Rojo al frente y el ejército del Faraón cargando por detrás.",image:"assets/stories/moses.png",choices:[{text:"🙏 Clamar a Dios por ayuda y protección",nextNode:"pray"},{text:"🗣️ Decir al pueblo que mantengan la calma y tengan fe",nextNode:"calm"}]},pray:{text:'Dios te responde: "¿Por qué clamas a mí? Di a los hijos de Israel que marchen. Y tú, alza tu vara y extiende tu mano sobre el mar, y divídelo".',choices:[{text:"🌊 Alzar la vara hacia el Mar Rojo",nextNode:"part_sea"}]},calm:{text:'Dices al pueblo: "No temáis; estad firmes y ved la salvación que Jehová hará hoy con vosotros". El pueblo se detiene, pero las tropas de Egipto están muy cerca.',choices:[{text:"🌊 Alzar la vara hacia el mar para que se divida",nextNode:"part_sea"}]},part_sea:{text:"Levantas tu vara de madera. Un gran viento recio del oriente sopla toda la noche y las aguas se dividen formando dos inmensos muros sólidos a los lados. Hay tierra seca.",choices:[{text:"🚶‍♂️ Indicar al pueblo que cruce de inmediato",nextNode:"crossing"}]},crossing:{text:"Cruzan por el fondo del mar. Es una marcha larga pero segura. El ejército egipcio decide seguiros con sus carros de guerra adentrándose en el lecho seco.",choices:[{text:"🛡️ Llegar al otro lado y mirar atrás al Faraón",nextNode:"other_side"}]},other_side:{text:"Ya casi todo el pueblo está a salvo en la otra orilla. Los carros egipcios están en medio del mar. Dios te dice que extiendas tu mano una vez más.",choices:[{text:"Extendiendo tu mano sobre las aguas",nextNode:"close_sea"}]},close_sea:{text:"Extiendes tu mano. Las aguas vuelven a su curso normal con furia sobre el ejército de Faraón. El pueblo de Israel queda libre para siempre de Egipto.",choices:[{text:"🎶 Celebrar la libertad con cánticos a Dios",nextNode:"end"}]},end:{text:"Miriam toma un pandero y todo el pueblo danza y canta de gozo. Habéis cruzado el mar y la libertad os espera. ¡El Éxodo ha comenzado!",isEnd:!0,message:"¡Felicidades! Abriste camino en medio del mar con el poder de Dios."}}}};function Kg(n){ha(n)}function ha(n){n.innerHTML=`
    <div class="stories-selection">
      <div class="stories-header">
        <h2>📜 Relatos de Fe</h2>
        <p class="text-muted">Elige una historia y toma decisiones para guiar su camino.</p>
      </div>
      
      <div class="stories-grid">
        ${Object.values(Fu).map(e=>`
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
  `,n.querySelectorAll(".btn-start-story").forEach(e=>{e.addEventListener("click",t=>{const s=t.target.dataset.id;Yg(n,s)})})}function Yg(n,e){const t=Fu[e];let s=t.startNode||"start";function r(){var d;const a=t.nodes[s];if(!a){console.error(`Node not found: ${s}`);return}const o=a.image||t.cover;if(a.isEnd){Xg(n,t,a);return}n.innerHTML=`
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
    `,(d=document.getElementById("btn-exit-story"))==null||d.addEventListener("click",()=>{ha(n)});const c=document.getElementById("story-text-box");Zg(a.text,c,()=>{const h=document.getElementById("story-choices-container");h&&a.choices&&a.choices.forEach(f=>{const p=document.createElement("button");p.className="btn btn-option btn-glass fade-in",p.textContent=f.text,p.addEventListener("click",()=>{s=f.nextNode,r()}),h.appendChild(p)})})}r()}function Xg(n,e,t){var s;un(e.reward),cn(e.xp),W(`¡Historia completada! +${e.reward} monedas`,"success"),n.innerHTML=`
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
  `,(s=document.getElementById("btn-finish-story"))==null||s.addEventListener("click",()=>{ha(n)})}function Zg(n,e,t,s=25){let r=0;e.innerHTML="";function a(){r<n.length?(e.innerHTML+=n.charAt(r),r++,setTimeout(a,s)):t&&t()}a()}const xl=[{word:"JESUS",category:"Personaje",hint:"El Hijo de Dios, Salvador del mundo.",verse:'"Y dará a luz un hijo, y llamarás su nombre JESÚS, porque él salvará a su pueblo de sus pecados." - Mateo 1:21'},{word:"MOISES",category:"Personaje",hint:"Líder que guió al pueblo de Israel fuera de Egipto.",verse:'"Por la fe Moisés, hecho ya grande, rehusó llamarse hijo de la hija de Faraón." - Hebreos 11:24'},{word:"DAVID",category:"Personaje",hint:"Rey de Israel, conocido por vencer a Goliat y escribir Salmos.",verse:'"Hallé a David hijo de Isaí, varón conforme a mi corazón, quien hará todo lo que yo quiero." - Hechos 13:22'},{word:"SALOMON",category:"Personaje",hint:"Hijo de David, conocido por su gran sabiduría.",verse:'"Y dio Dios a Salomón sabiduría y prudencia muy grandes, y anchura de corazón." - 1 Reyes 4:29'},{word:"MANA",category:"Objeto/Alimento",hint:"El pan del cielo que Dios envió al pueblo en el desierto.",verse:'"Y la casa de Israel lo llamó Maná; y era como semilla de culantro, blanco, y su sabor como de hojuelas con miel." - Éxodo 16:31'},{word:"JERUSALEN",category:"Lugar",hint:"La ciudad santa, capital del Reino de Israel.",verse:'"Pedid por la paz de Jerusalén; sean prosperados los que te aman." - Salmos 122:6'},{word:"JORDAN",category:"Lugar",hint:"Río donde Juan el Bautista bautizó a Jesús.",verse:'"Y Jesús, después que fue bautizado, subió luego del agua; y he aquí los cielos le fueron abiertos." - Mateo 3:16'},{word:"BIBLIA",category:"Concepto",hint:"La palabra escrita de Dios (Colección de libros).",verse:'"Toda la Escritura es inspirada por Dios, y útil para enseñar, para redargüir." - 2 Timoteo 3:16'},{word:"ORACION",category:"Acción",hint:"Hablar con Dios con fe y corazón sincero.",verse:'"Orad sin cesar. Dad gracias en todo, porque esta es la voluntad de Dios." - 1 Tesalonicenses 5:17-18'},{word:"GOLIAT",category:"Personaje",hint:"El gigante filisteo de Gat que desafió a Israel.",verse:'"Salió entonces del campamento de los filisteos un paladín que se llamaba Goliat, de Gat." - 1 Samuel 17:4'},{word:"MESA",category:"Concepto",hint:'Lugar de comunión; "Aderezas ____ delante de mí".',verse:'"Aderezas mesa delante de mí en presencia de mis angustiadores; unges mi cabeza con aceite." - Salmos 23:5'},{word:"ARCA",category:"Objeto",hint:"Estructura construida por Noé para flotar en el Diluvio.",verse:'"Por la fe Noé... con temor preparó el arca en que su casa se salvase." - Hebreos 11:7'},{word:"TABERNACULO",category:"Lugar",hint:"Santuario móvil que usaba Israel en el desierto.",verse:'"Y harán un santuario para mí, y habitaré en medio de ellos." - Éxodo 25:8'},{word:"PENTATEUCO",category:"Concepto",hint:"Los primeros cinco libros de la Biblia escrito por Moisés.",verse:"Génesis, Éxodo, Levítico, Números y Deuteronomio forman la Ley."},{word:"ESPERANZA",category:"Concepto",hint:"Confianza segura en las promesas futuras de Dios.",verse:'"Y la esperanza no avergüenza; porque el amor de Dios ha sido derramado en nuestros corazones." - Romanos 5:5'},{word:"GRACIA",category:"Concepto",hint:"Favor inmerecido de Dios para la salvación.",verse:'"Porque por gracia sois salvos por medio de la fe; y esto no de vosotros." - Efesios 2:8'},{word:"ESTER",category:"Personaje",hint:"Reina judía que salvó a su pueblo de la destrucción.",verse:'"¿Y quién sabe si para esta hora has llegado al reino?" - Ester 4:14'},{word:"NOE",category:"Personaje",hint:"Construyó un arca para salvar a su familia y animales.",verse:'"Hizo así Noé; hizo conforme a todo lo que Dios le mandó." - Génesis 6:22'},{word:"MARIA",category:"Personaje",hint:"Madre de Jesús en su forma humana.",verse:'"Engrandece mi alma al Señor; y mi espíritu se regocija en Dios mi Salvador." - Lucas 1:46-47'},{word:"PABLO",category:"Personaje",hint:"Apóstol de los gentiles, escribió muchas epístolas.",verse:'"Para mí el vivir es Cristo, y el morir es ganancia." - Filipenses 1:21'},{word:"PEDRO",category:"Personaje",hint:"Pescador que llegó a ser el líder de los apóstoles.",verse:'"Tú eres el Cristo, el Hijo del Dios viviente." - Mateo 16:16'},{word:"SANSON",category:"Personaje",hint:"Juez dotado de fuerza sobrehumana por el Espíritu de Dios.",verse:'"Y el Espíritu de Jehová vino sobre él con poder." - Jueces 14:19'},{word:"JONAS",category:"Personaje",hint:"Profeta que fue tragado por un gran pez por desobedecer.",verse:'"Pero Jehová tenía preparado un gran pez que tragase a Jonás." - Jonás 1:17'},{word:"DANIEL",category:"Personaje",hint:"Profeta que sobrevivió al foso de los leones.",verse:'"Mi Dios envió su ángel, el cual cerró la boca de los leones." - Daniel 6:22'},{word:"ELIAS",category:"Personaje",hint:"Profeta arrebatado al cielo en un carro de fuego.",verse:'"Y Elías subió al cielo en un torbellino." - 2 Reyes 2:11'},{word:"BELEN",category:"Lugar",hint:"Ciudad de Judea donde nació Jesucristo.",verse:'"Y tú, Belén... de ti saldrá un guiador que apacentará a mi pueblo." - Mateo 2:6'},{word:"NAZARET",category:"Lugar",hint:"Ciudad de Galilea donde creció Jesús.",verse:'"¿De Nazaret puede salir algo bueno? Le dijo Felipe: Ven y ve." - Juan 1:46'},{word:"MILAGRO",category:"Concepto",hint:"Hecho sobrenatural que manifiesta el poder de Dios.",verse:'"Y hacían muchos milagros y señales por mano de los apóstoles." - Hechos 5:12'},{word:"PARABOLA",category:"Concepto",hint:"Narración breve que transmite una enseñanza espiritual.",verse:'"Todo esto habló Jesús por parábolas a la gente." - Mateo 13:34'},{word:"FE",category:"Concepto",hint:"La certeza de lo que se espera, la convicción de lo que no se ve.",verse:'"Es, pues, la fe la certeza de lo que se espera..." - Hebreos 11:1'},{word:"AMOR",category:"Concepto",hint:"El vínculo perfecto y el mayor mandamiento.",verse:'"Y ahora permanecen la fe, la esperanza y el amor; pero el mayor es el amor." - 1 Corintios 13:13'},{word:"PAZ",category:"Concepto",hint:'Fruto del Espíritu; "La ____ de Dios que sobrepasa todo entendimiento".',verse:'"La paz os dejo, mi paz os doy; yo no os la doy como el mundo la da." - Juan 14:27'},{word:"REDENCION",category:"Concepto",hint:"Rescate o liberación pagada por la sangre de Cristo.",verse:'"En quien tenemos redención por su sangre, el perdón de pecados." - Efesios 1:7'},{word:"SABIDURIA",category:"Concepto",hint:"Temor de Dios es el principio de la _________.",verse:'"El principio de la sabiduría es el temor de Jehová." - Proverbios 1:7'},{word:"ALELUYA",category:"Concepto",hint:'Expresión de júbilo que significa "Alabad a Dios".',verse:'"¡Aleluya! Alabad a Dios en su santuario." - Salmos 150:1'},{word:"DISCIPULO",category:"Concepto",hint:"Seguidor o aprendiz de las enseñanzas de Jesús.",verse:'"En esto conocerán todos que sois mis discípulos, si tuviereis amor." - Juan 13:35'}];function ev(n){let e=a(),t=[],s=6,r=!1;function a(){let f=JSON.parse(localStorage.getItem("hm_played_words")||"[]"),p=xl.filter(R=>!f.includes(R.word));p.length===0&&(f=[],p=[...xl]);const b=Math.floor(Math.random()*p.length),A=p[b];return f.push(A.word),localStorage.setItem("hm_played_words",JSON.stringify(f)),A}function o(){if(r){h();return}const f=e.word.toUpperCase();if(f.split("").every(b=>t.includes(b)||b===" ")){d(!0);return}if(s<=0){d(!1);return}n.innerHTML=`
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
    `,n.querySelectorAll(".btn-keyboard").forEach(b=>{b.addEventListener("click",A=>{const R=A.target.dataset.letter;c(R)})})}function c(f){if(t.includes(f))return;t.push(f),e.word.toUpperCase().includes(f)?W("¡Correcto!","success"):(s--,W("¡Letra incorrecta!","warning")),o()}function d(f){r=!0,f&&(un(50),cn(25)),h(f)}function h(f){var p;n.innerHTML=`
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
    `,(p=document.getElementById("btn-restart-hm"))==null||p.addEventListener("click",()=>{e=a(),t=[],s=6,r=!1,o()})}o()}function tv(n){const e=Re(),t=localStorage.getItem("bb_player_id")||A();localStorage.setItem("bb_player_id",t);let s=null,r=null,a=null,o=null,c="p1",d=10,h=null,f=!1,p={fiftyfifty:!0,freeze:!0,double:!0},b=!1;function A(){return"user_"+Math.random().toString(36).substr(2,9)}function R(){var y,w,_,U,B,X;n.innerHTML=`
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
    `,(y=document.getElementById("btn-mode-random"))==null||y.addEventListener("click",()=>{V(),q()}),(w=document.getElementById("btn-mode-create"))==null||w.addEventListener("click",()=>{x()}),(_=document.getElementById("btn-mode-join"))==null||_.addEventListener("click",()=>{D()}),(U=document.getElementById("btn-back-home"))==null||U.addEventListener("click",()=>{me("home")}),(B=document.getElementById("btn-open-leaderboard"))==null||B.addEventListener("click",()=>{document.getElementById("bb-leaderboard-modal").style.display="flex",L()}),(X=document.getElementById("close-leaderboard"))==null||X.addEventListener("click",()=>{document.getElementById("bb-leaderboard-modal").style.display="none"})}function V(){var y;n.innerHTML=`
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
    `,(y=document.getElementById("btn-cancel-match"))==null||y.addEventListener("click",()=>{o&&o(),R()})}async function x(){var w,_;const y=Math.random().toString(36).substr(2,4).toUpperCase();n.innerHTML=`
      <div class="bible-battle-game">
        <div class="bb-private-room">
          <div class="bb-room-icon">🏠</div>
          <h3>Sala Privada Creada</h3>
          <p class="text-secondary text-sm">Comparte este código con tu amigo para que se una:</p>
          <div class="bb-room-code" id="room-code-display">${y}</div>
          <button class="btn btn-outline btn-sm mt-xs" id="btn-copy-code">📋 Copiar Código</button>
          
          <div class="bb-waiting-dots mt-xl">
             <div class="dot"></div><div class="dot"></div><div class="dot"></div>
          </div>
          <p class="text-muted text-sm text-center">Esperando a que tu amigo se una...</p>

          <button class="btn btn-secondary btn-block mt-xl" id="btn-cancel-room">Cancelar</button>
        </div>
      </div>
    `,(w=document.getElementById("btn-cancel-room"))==null||w.addEventListener("click",()=>{a&&a(),R()}),(_=document.getElementById("btn-copy-code"))==null||_.addEventListener("click",()=>{navigator.clipboard.writeText(y),W("¡Código copiado!","info")});try{c="p1";const U=Ve([...$e.easy,...$e.medium]).slice(0,5),B=await Kr(jt(De,"bb_matches"),{status:"waiting_friend",code:y,p1:{uid:t,name:e.name,avatar:e.avatar,score:0,currentQ:0,lastAnswered:-1},p2:null,questions:U,createdAt:Ps()});F(B.id)}catch(U){W("Error creando sala: "+U.message,"danger"),R()}}function D(){var y,w;n.innerHTML=`
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
    `,(y=document.getElementById("btn-cancel-join"))==null||y.addEventListener("click",()=>{R()}),(w=document.getElementById("btn-confirm-join"))==null||w.addEventListener("click",async()=>{const _=document.getElementById("input-room-code").value.trim().toUpperCase();if(_.length<4){W("Ingresa un código válido de 4 letras.","warning");return}try{const U=Jr(jt(De,"bb_matches"),Qr("status","==","waiting_friend"),Qr("code","==",_)),B=await Wr(U);if(B.empty){W("Sala no encontrada o llena.","warning");return}const X=B.docs[0];c="p2",await ws(Ye(De,"bb_matches",X.id),{status:"playing",p2:{uid:t,name:e.name,avatar:e.avatar,score:0,currentQ:0,lastAnswered:-1}}),F(X.id)}catch(U){W("Error al unirse: "+U.message,"danger")}})}async function L(){const y=document.getElementById("leaderboard-list");if(y)try{const w=Jr(jt(De,"bb_users"),bg("leaguePoints","desc"),Il(10)),_=await Wr(w);if(_.empty){y.innerHTML='<p class="text-center text-muted">Aún no hay clasificados. ¡Sé el primero!</p>';return}y.innerHTML=`
        <div class="ranking-list">
          ${_.docs.map((U,B)=>{const X=U.data();return`
              <div class="ranking-item ${X.uid===t?"me":""}">
                <div class="rank-pos">${B+1}</div>
                <div class="rank-avatar">${X.avatar||"👤"}</div>
                <div class="rank-info">
                  <div class="rank-name">${X.name}</div>
                  <div class="rank-league">${X.league||"Pescador"}</div>
                </div>
                <div class="rank-points">${X.leaguePoints||0} PL</div>
              </div>
            `}).join("")}
        </div>
      `}catch(w){console.error(w),y.innerHTML='<p class="text-center text-danger">Error cargando ranking.</p>'}}async function q(){const y=jt(De,"bb_queue"),w=Jr(y,Qr("status","==","waiting"),Il(10));try{const U=(await Wr(w)).docs.find(B=>B.data().uid!==t);if(U){const B=U.data();c="p2";const X=Ve([...$e.easy,...$e.medium]).slice(0,5),oe=await Kr(jt(De,"bb_matches"),{status:"starting",p1:{uid:B.uid,name:B.name,avatar:B.avatar,score:0,currentQ:0,lastAnswered:-1},p2:{uid:t,name:e.name,avatar:e.avatar,score:0,currentQ:0,lastAnswered:-1},questions:X,startTime:Ps()});await ws(Ye(De,"bb_queue",U.id),{status:"matched",matchId:oe.id}),F(oe.id)}else{c="p1";const B=await Kr(jt(De,"bb_queue"),{uid:t,name:e.name,avatar:e.avatar,status:"waiting",createdAt:Ps()});o=Cl(Ye(De,"bb_queue",B.id),X=>{if(X.exists()&&X.data().status==="matched"){const oe=X.data().matchId;o(),Rl(B),F(oe)}})}}catch(_){console.error("Matchmaking error:",_),W("Error de conexión: "+_.message,"danger")}}function F(y){s=y,a=Cl(Ye(De,"bb_matches",y),w=>{w.exists()&&(r=w.data(),r.status==="starting"?k("playing"):N())})}async function k(y){s&&await ws(Ye(De,"bb_matches",s),{status:y})}function N(){if(!r)return;const y=r[c],_=r[c==="p1"?"p2":"p1"],U=y.currentQ;if(U>=5||r.status==="ended"){clearInterval(h),T();return}const B=r.questions[U];n.innerHTML=`
      <div class="bible-battle-game">
        <div class="bb-hud">
          <div class="bb-player">
            <div class="bb-avatar">${y.avatar}</div>
            <div class="bb-name">Tú</div>
            <div class="bb-score">${y.score} pts</div>
          </div>
          <div class="bb-vs">VS</div>
          <div class="bb-player">
            <div class="bb-avatar">${_.avatar}</div>
            <div class="bb-name">${_.name}</div>
            <div class="bb-score">${_.score} pts</div>
          </div>
        </div>

        <div class="bb-timer-bar">
          <div class="timer-fill" style="width: ${d/10*100}%"></div>
        </div>

        <div class="bb-question-box card">
          <div class="bb-q-header">Pregunta ${U+1}/5</div>
          <h3 class="bb-question">${B.q}</h3>
        </div>

        <div class="bb-options-grid" id="options-grid">
          ${B.options.map((X,oe)=>`
            <button class="btn btn-option" data-ans="${oe}">${X}</button>
          `).join("")}
        </div>

        <div class="bb-powerups">
          <button class="btn btn-powerup ${p.fiftyfifty?"":"disabled"}" id="p-5050" ${p.fiftyfifty?"":"disabled"}>✂️ 50/50</button>
          <button class="btn btn-powerup ${p.freeze?"":"disabled"}" id="p-freeze" ${p.freeze?"":"disabled"}>❄️ Hielo</button>
          <button class="btn btn-powerup ${p.double?"":"disabled"}" id="p-double" ${p.double?"":"disabled"}>🔥 X2</button>
        </div>
      </div>
    `,f=!1,E(),g(B.answer)}function E(){clearInterval(h),d=10;const y=n.querySelector(".timer-fill");h=setInterval(async()=>{d-=.1,y&&(y.style.width=`${d/10*100}%`),d<=0&&(clearInterval(h),f||v(-1,-1))},100)}function g(y){var w,_,U;n.querySelectorAll(".btn-option").forEach(B=>{B.addEventListener("click",X=>{if(f)return;f=!0;const oe=parseInt(B.dataset.ans);v(oe,y)})}),(w=document.getElementById("p-5050"))==null||w.addEventListener("click",()=>{if(!p.fiftyfifty||f)return;p.fiftyfifty=!1;let X=Array.from(n.querySelectorAll(".btn-option")).filter(oe=>parseInt(oe.dataset.ans)!==y);Ve(X).slice(0,2).forEach(oe=>oe.style.visibility="hidden"),document.getElementById("p-5050").classList.add("disabled")}),(_=document.getElementById("p-double"))==null||_.addEventListener("click",()=>{!p.double||f||(p.double=!1,b=!0,document.getElementById("p-double").classList.add("disabled"),W("¡Próximo acierto duplicado!","info"))}),(U=document.getElementById("p-freeze"))==null||U.addEventListener("click",()=>{p.freeze&&(p.freeze=!1,document.getElementById("p-freeze").classList.add("disabled"),W("❄️ Efecto visual de Hielo","info"))})}async function v(y,w){clearInterval(h);let _=0;y===w?(_=Math.floor(d*10*(b?2:1)),W("¡Correcto!","success")):W("¡Incorrecto!","warning"),b=!1;const U=r[c],B={};B[`${c}.score`]=U.score+_,B[`${c}.currentQ`]=U.currentQ+1,B[`${c}.lastAnswered`]=y,await ws(Ye(De,"bb_matches",s),B)}function T(){var X,oe;a&&a();const y=r[c],_=r[c==="p1"?"p2":"p1"],U=y.score>_.score,B=y.score===_.score;U?(un(100),cn(50),Dl(25)):B||Dl(-10),Du(),n.innerHTML=`
      <div class="game-results">
        <div class="results-emoji">${U?"🏆":B?"🤝":"😢"}</div>
        <h2 class="results-title">${U?"¡Victoria!":B?"¡Empate!":"¡Derrota!"}</h2>

        <div class="results-score-circle">
          <span class="results-score-value">${y.score}</span>
          <span class="results-score-label">Tus puntos</span>
        </div>

        <div class="results-stats">
          <p class="text-secondary">Rival: <b>${_.name}</b> (${_.score} pts)</p>
          <div class="bb-league-badge mt-sm">${e.league}</div>
        </div>

        <div class="results-rewards">
          ${U?'<div class="reward-item">🪙 +100 monedas</div><div class="reward-item">⭐ +50 XP</div><div class="reward-item">🏆 +25 PL</div>':B?'<p class="text-sm">¡Buen combate!</p>':'<div class="reward-item">❌ -10 PL</div>'}
        </div>

        <div class="results-actions">
          <button class="btn btn-primary btn-block" id="btn-play-again-bb">🔄 Jugar de Nuevo</button>
          <button class="btn btn-secondary btn-block" id="btn-go-home">🏠 Volver al Menú</button>
        </div>
      </div>
    `,(X=document.getElementById("btn-play-again-bb"))==null||X.addEventListener("click",()=>{R()}),(oe=document.getElementById("btn-go-home"))==null||oe.addEventListener("click",()=>{me("home")}),setTimeout(()=>{c==="p1"&&Rl(Ye(De,"bb_matches",s))},5e3)}R()}function nv(n){let e=0,t=3,s=1,r=0,a=!1,o=null,c=[],d=null;const h=["#ef233c","#4361ee","#2ec4b6","#ffb703","#9b5de5"],f=["bomb","gold","freeze"];function p(){b(),A()}function b(){var v;const k=[...$e.easy,...$e.medium];o=k[Math.floor(Math.random()*k.length)],c=[];const N=Ve([...o.options]),E=((v=n.querySelector(".bbp-game-arena"))==null?void 0:v.clientWidth)||400,g=o.options[o.answer];N.forEach((T,y)=>{const w=T===g,_=Math.random()<.2;let U="normal";_&&(U=f[Math.floor(Math.random()*f.length)]),c.push({id:"bal_"+Date.now()+"_"+y,text:T,isCorrect:w,type:U,x:y*(E/N.length)+20,y:-120,speed:(1.2+Math.random()*.8)*s,color:U==="bomb"?"#2b2b2b":U==="gold"?"#ffd700":U==="freeze"?"#00f5d4":h[y%h.length],size:70+Math.random()*10})}),c.some(T=>T.isCorrect)||(c[0].isCorrect=!0),L()}function A(k){if(a)return;const N=n.querySelector(".bbp-game-arena");if(!N){d=requestAnimationFrame(A);return}const E=N.clientHeight;for(let g=c.length-1;g>=0;g--){const v=c[g];v.y+=v.speed;let T=document.getElementById(v.id);T||(T=document.createElement("div"),T.id=v.id,T.className=`balloon ${v.type}`,T.style.backgroundColor=v.color,T.style.width=v.size+"px",T.style.height=v.size*1.2+"px",T.innerHTML=`
          <div class="balloon-content">${v.text}</div>
          <div class="balloon-string"></div>
          ${v.type!=="normal"?`<div class="balloon-badge">${v.type==="bomb"?"💣":v.type==="gold"?"⭐":"❄️"}</div>`:""}
        `,T.addEventListener("click",()=>R(v)),N.appendChild(T)),T.style.left=v.x+"px",T.style.bottom=v.y+"px",E>100&&v.y>E+150&&(T.remove(),c.splice(g,1),v.isCorrect&&v.type!=="bomb"&&(t--,W("¡Se escapó la respuesta!","warning"),D(),a||b()))}a||(d=requestAnimationFrame(A))}function R(k){if(a)return;const N=document.getElementById(k.id);if(N&&(x(k.x+k.size/2,V()-k.y-k.size/2,k.color),N.remove()),c=c.filter(E=>E.id!==k.id),k.type==="bomb"){t--,W("¡BOOM! Globo Bomba 💣","danger"),D();return}if(k.isCorrect){let E=10;k.type==="gold"&&(E=20),e+=E,r++,W(k.type==="gold"?"¡Doble Puntos! 🌟":"¡Correcto! 🎉","success"),s=1+r*.05,k.type==="freeze"&&(s=.5,W("¡Tiempo Congelado! ❄️","info"),setTimeout(()=>{a||(s=1+r*.05)},4e3)),b()}else t--,W("¡Incorrecto! 💔","warning"),D();q()}function V(){var k;return((k=n.querySelector(".bbp-game-arena"))==null?void 0:k.clientHeight)||400}function x(k,N,E){const g=n.querySelector(".bbp-game-arena");if(g)for(let v=0;v<8;v++){const T=document.createElement("div");T.className="bbp-particle",T.style.backgroundColor=E,T.style.left=k+"px",T.style.top=N+"px";const y=Math.random()*Math.PI*2,w=2+Math.random()*4;T.style.setProperty("--dx",Math.cos(y)*w*20+"px"),T.style.setProperty("--dy",Math.sin(y)*w*20+"px"),g.appendChild(T),setTimeout(()=>T.remove(),600)}}function D(){t<=0?(a=!0,cancelAnimationFrame(d),un(Math.floor(e/2)),cn(e),F()):q()}function L(){n.innerHTML=`
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
    `}function q(){const k=n.querySelector(".bbp-hud");k&&(k.innerHTML=`
            <div class="bbp-stat">❤️ Vidas: <span>${t}</span></div>
            <div class="bbp-stat">🏆 Puntos: <span>${e}</span></div>
            <div class="bbp-stat">⚡ Velocidad: <span>x${s.toFixed(1)}</span></div>
          `)}function F(){var k,N;n.innerHTML=`
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
    `,(k=document.getElementById("btn-restart-bbp"))==null||k.addEventListener("click",()=>{e=0,t=3,s=1,r=0,a=!1,p()}),(N=document.getElementById("btn-home-bbp"))==null||N.addEventListener("click",()=>{me("home")})}p()}function sv(n){let e={away:0,home:0},t=1,s="top",r=0,a=[!1,!1,!1],o=!1,c=!1,d=null,h=null;const f=3,p=[{label:"Hit (Sencillo)",type:"Hit",deg:0,diff:"easy"},{label:"Doble",type:"Doble",deg:90,diff:"medium"},{label:"Triple",type:"Triple",deg:180,diff:"hard"},{label:"Home Run",type:"HomeRun",deg:270,diff:"hard"}];function b(){A()}function A(){n.innerHTML=`
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
            <div class="bsb-base edge-top ${a[1]?"occupied":""}" id="base-2">2B</div>
            <div class="bsb-base edge-left ${a[2]?"occupied":""}" id="base-3">3B</div>
            <div class="bsb-base edge-right ${a[0]?"occupied":""}" id="base-1">1B</div>
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
            <button class="btn btn-primary btn-lg" id="bsb-spin-btn" ${c?"disabled":""}>
              ${c?"GIRANDO...":"⚾ GIRAR RULETA"}
            </button>
          `:`
            <div class="bsb-cpu-turn glass">
              <p>🤖 Turno de la IA para batear...</p>
              <div class="spinner"></div>
            </div>
          `}
        </div>

        <!-- MODAL DE PREGUNTA -->
        <div class="bsb-question-modal ${d?"visible":""}">
          ${d?`
            <div class="bsb-modal-content glass">
              <div class="bsb-modal-header">
                <span class="badge diff-${h}">${h}</span>
                <p>Responde correctamente para avanzar</p>
              </div>
              <h3>${d.q}</h3>
              <div class="bsb-options">
                ${d.options.map((N,E)=>`
                  <button class="bsb-opt-btn" onclick="handleBaseballAnswer(${E})">${N}</button>
                `).join("")}
              </div>
            </div>
          `:""}
        </div>
      </div>
    `,R()}function R(){const N=n.querySelector("#bsb-spin-btn");N&&N.addEventListener("click",V),window.handleBaseballAnswer=E=>{const g=E===d.answer;D(g)}}function V(){if(c)return;c=!0,A();const N=n.querySelector("#bsb-wheel"),E=p[Math.floor(Math.random()*p.length)];h=E.type;const g=2880,v=Math.floor(Math.random()*50)-25,T=g+E.deg+v;N&&(N.offsetHeight,requestAnimationFrame(()=>{N&&(N.style.transform=`rotate(-${T}deg)`)})),setTimeout(()=>{c=!1,x(E.diff)},3200)}function x(N){const E=$e[N]||$e.easy;d=E[Math.floor(Math.random()*E.length)],A()}function D(N){d=null,N?(W(`¡Excelente! Conectas un ${h}`,"success"),L(h)):(W("¡Fallo! Out registrado 🔴","error"),r++,q()),A()}function L(N){let E=1;N==="Doble"&&(E=2),N==="Triple"&&(E=3),N==="HomeRun"&&(E=4);let g=0;for(let v=0;v<E;v++)a[2]&&(g++,a[2]=!1),a[1]&&(a[2]=!0,a[1]=!1),a[0]&&(a[1]=!0,a[0]=!1);E===4?g++:a[E-1]=!0,g>0&&(e[s==="top"?"away":"home"]+=g,W(`⚾ ¡Anotación! +${g} carrera(s)`,"success"))}function q(){r>=3&&(W("¡Tres Outs! Cambio de lado 🔄","info"),r=0,a=[!1,!1,!1],s==="top"?(s="bottom",setTimeout(F,1500)):(s="top",t++,k()))}function F(){if(o||s==="top")return;const N=p[Math.floor(Math.random()*p.length)],E=Math.random()<.6;setTimeout(()=>{E?(W(`La IA conecta un ${N.type}`,"warning"),L(N.type)):(W("¡La IA falla! Out","info"),r++),A(),r<3?setTimeout(F,2e3):(q(),A())},2e3)}function k(){var N;if(t>f){o=!0;let E=e.away>e.home?"¡Has ganado el Partido! 🎉":e.away<e.home?"La IA ha ganado 🤖":"¡Empate! 🤝";e.away>e.home&&(cn(50),un(30)),n.innerHTML=`
        <div class="bsb-game-over glass">
          <h2>⚾ JUEGO TERMINADO ⚾</h2>
          <h3>${E}</h3>
          <div class="bsb-final-score">
            <div>Tú: ${e.away}</div>
            <div>IA: ${e.home}</div>
          </div>
          <button class="btn btn-primary" id="bsb-restart">Jugar de Nuevo</button>
        </div>
      `,(N=n.querySelector("#bsb-restart"))==null||N.addEventListener("click",()=>{e={away:0,home:0},t=1,s="top",r=0,a=[!1,!1,!1],o=!1,A()})}}b()}Ke({id:"trivia",name:"Trivia Bíblica",icon:"❓",description:"Pon a prueba tu conocimiento bíblico",difficulty:"easy",render:Gg});Ke({id:"characters",name:"Adivina el Personaje",icon:"🕵️",description:"Descubre quién es con las pistas",difficulty:"medium",render:Hg});Ke({id:"verse-complete",name:"Completa el Versículo",icon:"📖",description:"Llena las palabras que faltan",difficulty:"medium",render:Jg});Ke({id:"word-search",name:"Sopa de Letras",icon:"🔤",description:"Encuentra palabras bíblicas",difficulty:"easy",render:Ou});Ke({id:"memory",name:"Memoria Bíblica",icon:"🃏",description:"Encuentra los pares bíblicos",difficulty:"easy",render:Wg});Ke({id:"stories",name:"Relatos de Fe",icon:"📜",description:"Historias interactivas con elecciones",difficulty:"media",render:Kg});Ke({id:"hangman",name:"Ahorcado Bíblico",icon:"🪧",description:"Adivina la palabra antes de agotar tus vidas",difficulty:"normal",render:ev});Ke({id:"bible-battle",name:"Bible Battle 1v1",icon:"⚔️",description:"Trivia competitiva 1vs1 en tiempo real",difficulty:"alta",render:tv});Ke({id:"balloon-pop",name:"Bible Balloon Pop",icon:"🎈",description:"Explotar globos con respuestas correctas",difficulty:"fácil",render:nv});Ke({id:"baseball",name:"Béisbol Cristiano",icon:"⚾",description:"Gira la ruleta y responde preguntas bíblicas para correr las bases y anotar carreras.",difficulty:"Media",render:sv});Mt("home",n=>Lg(n));Mt("verse",n=>Og(n));Mt("profile",n=>qg(n));Mt("achievements",n=>Bg(n));Mt("settings",n=>Ug(n));Mt("ranking",n=>jg(n));Mt("game",(n,e)=>{const t=Vu(e.gameId);if(t&&t.render)return t.render(n);n.innerHTML='<div class="empty-state"><p>Juego no encontrado</p></div>'});const rv=["home","verse","profile","achievements","settings"],iv={home:"Bible Games",verse:"Versículo del Día",profile:"Mi Perfil",achievements:"Logros",settings:"Ajustes",ranking:"Ranking",game:"Juego"};function av(n,e={}){document.querySelectorAll(".nav-btn").forEach(c=>{c.classList.toggle("active",c.dataset.screen===n)});const s=document.getElementById("header-title");if(s)if(n==="game"&&e.gameId){const c=Vu(e.gameId);s.textContent=c?c.name:"Juego"}else s.textContent=iv[n]||"Bible Games";const r=document.getElementById("btn-back"),a=!rv.includes(n);r&&r.classList.toggle("hidden",!a);const o=document.getElementById("bottom-nav");o&&o.classList.toggle("hidden",a),fr()}function Nl(){var e;localStorage.getItem("theme")==="light"&&document.body.classList.add("light-theme"),pd(av),document.querySelectorAll(".nav-btn").forEach(t=>{t.addEventListener("click",()=>{const s=t.dataset.screen;s&&me(s)})}),(e=document.getElementById("btn-back"))==null||e.addEventListener("click",()=>{me("home")}),fr(),gd("home")}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Nl):Nl();
