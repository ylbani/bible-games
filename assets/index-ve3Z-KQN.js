(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const ks={};let kl=null,bs=null,Zr=null;function Ft(n,e){ks[n]=e}function pe(n,e={}){bs&&(bs(),bs=null),kl=n,window.location.hash=n;const t=document.getElementById("main-content");if(t){if(t.innerHTML="",t.className="main-content screen-enter",ks[n]){const s=ks[n](t,e);typeof s=="function"&&(bs=s)}Zr&&Zr(n,e)}}function md(n){Zr=n}function pd(n="home"){window.addEventListener("hashchange",()=>{const t=window.location.hash.slice(1)||n;t!==kl&&ks[t]&&pe(t)});const e=window.location.hash.slice(1)||n;pe(e)}const wi="bgc_";function Ll(n,e){try{return localStorage.setItem(wi+n,JSON.stringify(e)),!0}catch(t){return console.warn("Storage save failed:",t),!1}}function Ml(n,e=null){try{const t=localStorage.getItem(wi+n);return t?JSON.parse(t):e}catch(t){return console.warn("Storage load failed:",t),e}}function gd(){Object.keys(localStorage).filter(e=>e.startsWith(wi)).forEach(e=>localStorage.removeItem(e))}const vd=()=>{};var go={};/**
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
 */const Ol=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},yd=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const a=n[t++];e[s++]=String.fromCharCode((r&31)<<6|a&63)}else if(r>239&&r<365){const a=n[t++],o=n[t++],c=n[t++],d=((r&7)<<18|(a&63)<<12|(o&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(d>>10)),e[s++]=String.fromCharCode(56320+(d&1023))}else{const a=n[t++],o=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(a&63)<<6|o&63)}}return e.join("")},Fl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const a=n[r],o=r+1<n.length,c=o?n[r+1]:0,d=r+2<n.length,h=d?n[r+2]:0,f=a>>2,p=(a&3)<<4|c>>4;let _=(c&15)<<2|h>>6,A=h&63;d||(A=64,o||(_=64)),s.push(t[f],t[p],t[_],t[A])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ol(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):yd(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const a=t[n.charAt(r++)],c=r<n.length?t[n.charAt(r)]:0;++r;const h=r<n.length?t[n.charAt(r)]:64;++r;const p=r<n.length?t[n.charAt(r)]:64;if(++r,a==null||c==null||h==null||p==null)throw new _d;const _=a<<2|c>>4;if(s.push(_),h!==64){const A=c<<4&240|h>>2;if(s.push(A),p!==64){const R=h<<6&192|p;s.push(R)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class _d extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bd=function(n){const e=Ol(n);return Fl.encodeByteArray(e,!0)},Ls=function(n){return bd(n).replace(/\./g,"")},Ed=function(n){try{return Fl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Td(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const wd=()=>Td().__FIREBASE_DEFAULTS__,Id=()=>{if(typeof process>"u"||typeof go>"u")return;const n=go.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ad=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ed(n[1]);return e&&JSON.parse(e)},Ii=()=>{try{return vd()||wd()||Id()||Ad()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Sd=n=>{var e,t;return(t=(e=Ii())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Rd=n=>{const e=Sd(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},$l=()=>{var n;return(n=Ii())==null?void 0:n.config};/**
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
 */class Cd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Ai(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Pd(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Dd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Ls(JSON.stringify(t)),Ls(JSON.stringify(o)),""].join(".")}const Mn={};function Vd(){const n={prod:[],emulator:[]};for(const e of Object.keys(Mn))Mn[e]?n.emulator.push(e):n.prod.push(e);return n}function xd(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let vo=!1;function Nd(n,e){if(typeof window>"u"||typeof document>"u"||!Ai(window.location.host)||Mn[n]===e||Mn[n]||vo)return;Mn[n]=e;function t(_){return`__firebase__banner__${_}`}const s="__firebase__banner",a=Vd().prod.length>0;function o(){const _=document.getElementById(s);_&&_.remove()}function c(_){_.style.display="flex",_.style.background="#7faaf0",_.style.position="fixed",_.style.bottom="5px",_.style.left="5px",_.style.padding=".5em",_.style.borderRadius="5px",_.style.alignItems="center"}function d(_,A){_.setAttribute("width","24"),_.setAttribute("id",A),_.setAttribute("height","24"),_.setAttribute("viewBox","0 0 24 24"),_.setAttribute("fill","none"),_.style.marginLeft="-6px"}function h(){const _=document.createElement("span");return _.style.cursor="pointer",_.style.marginLeft="16px",_.style.fontSize="24px",_.innerHTML=" &times;",_.onclick=()=>{vo=!0,o()},_}function f(_,A){_.setAttribute("id",A),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline"}function p(){const _=xd(s),A=t("text"),R=document.getElementById(A)||document.createElement("span"),V=t("learnmore"),x=document.getElementById(V)||document.createElement("a"),D=t("preprendIcon"),L=document.getElementById(D)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(_.created){const q=_.element;c(q),f(x,V);const F=h();d(L,D),q.append(L,R,x,F),document.body.appendChild(q)}a?(R.innerText="Preview backend disconnected.",L.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function kd(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ld(){var e;const n=(e=Ii())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Md(){return!Ld()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Od(){try{return typeof indexedDB=="object"}catch{return!1}}function Fd(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var a;e(((a=r.error)==null?void 0:a.message)||"")}}catch(t){e(t)}})}/**
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
 */const $d="FirebaseError";class an extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=$d,Object.setPrototypeOf(this,an.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ql.prototype.create)}}class ql{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,a=this.errors[e],o=a?qd(a,s):"Error",c=`${this.serviceName}: ${o} (${r}).`;return new an(r,c,s)}}function qd(n,e){return n.replace(Bd,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Bd=/\{\$([^}]+)}/g;function Ms(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const a=n[r],o=e[r];if(yo(a)&&yo(o)){if(!Ms(a,o))return!1}else if(a!==o)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function yo(n){return n!==null&&typeof n=="object"}/**
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
 */function Ke(n){return n&&n._delegate?n._delegate:n}class Un{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Dt="[DEFAULT]";/**
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
 */class Ud{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Cd;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zd(e))try{this.getOrInitializeService({instanceIdentifier:Dt})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:r});s.resolve(a)}catch{}}}}clearInstance(e=Dt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Dt){return this.instances.has(e)}getOptions(e=Dt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[a,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(a);s===c&&o.resolve(r)}return r}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const a=this.instances.get(s);return a&&e(a,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:jd(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Dt){return this.component?this.component.multipleInstances?e:Dt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jd(n){return n===Dt?void 0:n}function zd(n){return n.instantiationMode==="EAGER"}/**
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
 */class Gd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ud(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ee;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ee||(ee={}));const Hd={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},Qd=ee.INFO,Jd={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},Wd=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=Jd[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bl{constructor(e){this.name=e,this._logLevel=Qd,this._logHandler=Wd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Hd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const Kd=(n,e)=>e.some(t=>n instanceof t);let _o,bo;function Yd(){return _o||(_o=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Xd(){return bo||(bo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ul=new WeakMap,ei=new WeakMap,jl=new WeakMap,qr=new WeakMap,Si=new WeakMap;function Zd(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",a),n.removeEventListener("error",o)},a=()=>{t(ut(n.result)),r()},o=()=>{s(n.error),r()};n.addEventListener("success",a),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Ul.set(t,n)}).catch(()=>{}),Si.set(e,n),e}function eh(n){if(ei.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",o),n.removeEventListener("abort",o)},a=()=>{t(),r()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",a),n.addEventListener("error",o),n.addEventListener("abort",o)});ei.set(n,e)}let ti={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ei.get(n);if(e==="objectStoreNames")return n.objectStoreNames||jl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ut(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function th(n){ti=n(ti)}function nh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Br(this),e,...t);return jl.set(s,e.sort?e.sort():[e]),ut(s)}:Xd().includes(n)?function(...e){return n.apply(Br(this),e),ut(Ul.get(this))}:function(...e){return ut(n.apply(Br(this),e))}}function sh(n){return typeof n=="function"?nh(n):(n instanceof IDBTransaction&&eh(n),Kd(n,Yd())?new Proxy(n,ti):n)}function ut(n){if(n instanceof IDBRequest)return Zd(n);if(qr.has(n))return qr.get(n);const e=sh(n);return e!==n&&(qr.set(n,e),Si.set(e,n)),e}const Br=n=>Si.get(n);function rh(n,e,{blocked:t,upgrade:s,blocking:r,terminated:a}={}){const o=indexedDB.open(n,e),c=ut(o);return s&&o.addEventListener("upgradeneeded",d=>{s(ut(o.result),d.oldVersion,d.newVersion,ut(o.transaction),d)}),t&&o.addEventListener("blocked",d=>t(d.oldVersion,d.newVersion,d)),c.then(d=>{a&&d.addEventListener("close",()=>a()),r&&d.addEventListener("versionchange",h=>r(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const ih=["get","getKey","getAll","getAllKeys","count"],ah=["put","add","delete","clear"],Ur=new Map;function Eo(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ur.get(e))return Ur.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=ah.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||ih.includes(t)))return;const a=async function(o,...c){const d=this.transaction(o,r?"readwrite":"readonly");let h=d.store;return s&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),r&&d.done]))[0]};return Ur.set(e,a),a}th(n=>({...n,get:(e,t,s)=>Eo(e,t)||n.get(e,t,s),has:(e,t)=>!!Eo(e,t)||n.has(e,t)}));/**
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
 */class oh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(lh(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function lh(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ni="@firebase/app",To="0.14.9";/**
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
 */const Ze=new Bl("@firebase/app"),ch="@firebase/app-compat",uh="@firebase/analytics-compat",dh="@firebase/analytics",hh="@firebase/app-check-compat",fh="@firebase/app-check",mh="@firebase/auth",ph="@firebase/auth-compat",gh="@firebase/database",vh="@firebase/data-connect",yh="@firebase/database-compat",_h="@firebase/functions",bh="@firebase/functions-compat",Eh="@firebase/installations",Th="@firebase/installations-compat",wh="@firebase/messaging",Ih="@firebase/messaging-compat",Ah="@firebase/performance",Sh="@firebase/performance-compat",Rh="@firebase/remote-config",Ch="@firebase/remote-config-compat",Ph="@firebase/storage",Dh="@firebase/storage-compat",Vh="@firebase/firestore",xh="@firebase/ai",Nh="@firebase/firestore-compat",kh="firebase",Lh="12.10.0";/**
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
 */const si="[DEFAULT]",Mh={[ni]:"fire-core",[ch]:"fire-core-compat",[dh]:"fire-analytics",[uh]:"fire-analytics-compat",[fh]:"fire-app-check",[hh]:"fire-app-check-compat",[mh]:"fire-auth",[ph]:"fire-auth-compat",[gh]:"fire-rtdb",[vh]:"fire-data-connect",[yh]:"fire-rtdb-compat",[_h]:"fire-fn",[bh]:"fire-fn-compat",[Eh]:"fire-iid",[Th]:"fire-iid-compat",[wh]:"fire-fcm",[Ih]:"fire-fcm-compat",[Ah]:"fire-perf",[Sh]:"fire-perf-compat",[Rh]:"fire-rc",[Ch]:"fire-rc-compat",[Ph]:"fire-gcs",[Dh]:"fire-gcs-compat",[Vh]:"fire-fst",[Nh]:"fire-fst-compat",[xh]:"fire-vertex","fire-js":"fire-js",[kh]:"fire-js-all"};/**
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
 */const Os=new Map,Oh=new Map,ri=new Map;function wo(n,e){try{n.container.addComponent(e)}catch(t){Ze.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Fs(n){const e=n.name;if(ri.has(e))return Ze.debug(`There were multiple attempts to register component ${e}.`),!1;ri.set(e,n);for(const t of Os.values())wo(t,n);for(const t of Oh.values())wo(t,n);return!0}function Fh(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function $h(n){return n==null?!1:n.settings!==void 0}/**
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
 */const qh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},dt=new ql("app","Firebase",qh);/**
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
 */class Bh{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dt.create("app-deleted",{appName:this._name})}}/**
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
 */const Uh=Lh;function zl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:si,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw dt.create("bad-app-name",{appName:String(r)});if(t||(t=$l()),!t)throw dt.create("no-options");const a=Os.get(r);if(a){if(Ms(t,a.options)&&Ms(s,a.config))return a;throw dt.create("duplicate-app",{appName:r})}const o=new Gd(r);for(const d of ri.values())o.addComponent(d);const c=new Bh(t,s,o);return Os.set(r,c),c}function jh(n=si){const e=Os.get(n);if(!e&&n===si&&$l())return zl();if(!e)throw dt.create("no-app",{appName:n});return e}function Yt(n,e,t){let s=Mh[n]??n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),a=e.match(/\s|\//);if(r||a){const o=[`Unable to register library "${s}" with version "${e}":`];r&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&a&&o.push("and"),a&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ze.warn(o.join(" "));return}Fs(new Un(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const zh="firebase-heartbeat-database",Gh=1,jn="firebase-heartbeat-store";let jr=null;function Gl(){return jr||(jr=rh(zh,Gh,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(jn)}catch(t){console.warn(t)}}}}).catch(n=>{throw dt.create("idb-open",{originalErrorMessage:n.message})})),jr}async function Hh(n){try{const t=(await Gl()).transaction(jn),s=await t.objectStore(jn).get(Hl(n));return await t.done,s}catch(e){if(e instanceof an)Ze.warn(e.message);else{const t=dt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ze.warn(t.message)}}}async function Io(n,e){try{const s=(await Gl()).transaction(jn,"readwrite");await s.objectStore(jn).put(e,Hl(n)),await s.done}catch(t){if(t instanceof an)Ze.warn(t.message);else{const s=dt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ze.warn(s.message)}}}function Hl(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Qh=1024,Jh=30;class Wh{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Yh(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Ao();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(o=>o.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:r}),this._heartbeatsCache.heartbeats.length>Jh){const o=Xh(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Ze.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ao(),{heartbeatsToSend:s,unsentEntries:r}=Kh(this._heartbeatsCache.heartbeats),a=Ls(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return Ze.warn(t),""}}}function Ao(){return new Date().toISOString().substring(0,10)}function Kh(n,e=Qh){const t=[];let s=n.slice();for(const r of n){const a=t.find(o=>o.agent===r.agent);if(a){if(a.dates.push(r.date),So(t)>e){a.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),So(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Yh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Od()?Fd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Hh(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Io(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Io(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function So(n){return Ls(JSON.stringify({version:2,heartbeats:n})).length}function Xh(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function Zh(n){Fs(new Un("platform-logger",e=>new oh(e),"PRIVATE")),Fs(new Un("heartbeat",e=>new Wh(e),"PRIVATE")),Yt(ni,To,n),Yt(ni,To,"esm2020"),Yt("fire-js","")}Zh("");var ef="firebase",tf="12.10.0";/**
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
 */Yt(ef,tf,"app");var Ro=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ht,Ql;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,g){function v(){}v.prototype=g.prototype,b.F=g.prototype,b.prototype=new v,b.prototype.constructor=b,b.D=function(E,w,T){for(var y=Array(arguments.length-2),B=2;B<arguments.length;B++)y[B-2]=arguments[B];return g.prototype[w].apply(E,y)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(b,g,v){v||(v=0);const E=Array(16);if(typeof g=="string")for(var w=0;w<16;++w)E[w]=g.charCodeAt(v++)|g.charCodeAt(v++)<<8|g.charCodeAt(v++)<<16|g.charCodeAt(v++)<<24;else for(w=0;w<16;++w)E[w]=g[v++]|g[v++]<<8|g[v++]<<16|g[v++]<<24;g=b.g[0],v=b.g[1],w=b.g[2];let T=b.g[3],y;y=g+(T^v&(w^T))+E[0]+3614090360&4294967295,g=v+(y<<7&4294967295|y>>>25),y=T+(w^g&(v^w))+E[1]+3905402710&4294967295,T=g+(y<<12&4294967295|y>>>20),y=w+(v^T&(g^v))+E[2]+606105819&4294967295,w=T+(y<<17&4294967295|y>>>15),y=v+(g^w&(T^g))+E[3]+3250441966&4294967295,v=w+(y<<22&4294967295|y>>>10),y=g+(T^v&(w^T))+E[4]+4118548399&4294967295,g=v+(y<<7&4294967295|y>>>25),y=T+(w^g&(v^w))+E[5]+1200080426&4294967295,T=g+(y<<12&4294967295|y>>>20),y=w+(v^T&(g^v))+E[6]+2821735955&4294967295,w=T+(y<<17&4294967295|y>>>15),y=v+(g^w&(T^g))+E[7]+4249261313&4294967295,v=w+(y<<22&4294967295|y>>>10),y=g+(T^v&(w^T))+E[8]+1770035416&4294967295,g=v+(y<<7&4294967295|y>>>25),y=T+(w^g&(v^w))+E[9]+2336552879&4294967295,T=g+(y<<12&4294967295|y>>>20),y=w+(v^T&(g^v))+E[10]+4294925233&4294967295,w=T+(y<<17&4294967295|y>>>15),y=v+(g^w&(T^g))+E[11]+2304563134&4294967295,v=w+(y<<22&4294967295|y>>>10),y=g+(T^v&(w^T))+E[12]+1804603682&4294967295,g=v+(y<<7&4294967295|y>>>25),y=T+(w^g&(v^w))+E[13]+4254626195&4294967295,T=g+(y<<12&4294967295|y>>>20),y=w+(v^T&(g^v))+E[14]+2792965006&4294967295,w=T+(y<<17&4294967295|y>>>15),y=v+(g^w&(T^g))+E[15]+1236535329&4294967295,v=w+(y<<22&4294967295|y>>>10),y=g+(w^T&(v^w))+E[1]+4129170786&4294967295,g=v+(y<<5&4294967295|y>>>27),y=T+(v^w&(g^v))+E[6]+3225465664&4294967295,T=g+(y<<9&4294967295|y>>>23),y=w+(g^v&(T^g))+E[11]+643717713&4294967295,w=T+(y<<14&4294967295|y>>>18),y=v+(T^g&(w^T))+E[0]+3921069994&4294967295,v=w+(y<<20&4294967295|y>>>12),y=g+(w^T&(v^w))+E[5]+3593408605&4294967295,g=v+(y<<5&4294967295|y>>>27),y=T+(v^w&(g^v))+E[10]+38016083&4294967295,T=g+(y<<9&4294967295|y>>>23),y=w+(g^v&(T^g))+E[15]+3634488961&4294967295,w=T+(y<<14&4294967295|y>>>18),y=v+(T^g&(w^T))+E[4]+3889429448&4294967295,v=w+(y<<20&4294967295|y>>>12),y=g+(w^T&(v^w))+E[9]+568446438&4294967295,g=v+(y<<5&4294967295|y>>>27),y=T+(v^w&(g^v))+E[14]+3275163606&4294967295,T=g+(y<<9&4294967295|y>>>23),y=w+(g^v&(T^g))+E[3]+4107603335&4294967295,w=T+(y<<14&4294967295|y>>>18),y=v+(T^g&(w^T))+E[8]+1163531501&4294967295,v=w+(y<<20&4294967295|y>>>12),y=g+(w^T&(v^w))+E[13]+2850285829&4294967295,g=v+(y<<5&4294967295|y>>>27),y=T+(v^w&(g^v))+E[2]+4243563512&4294967295,T=g+(y<<9&4294967295|y>>>23),y=w+(g^v&(T^g))+E[7]+1735328473&4294967295,w=T+(y<<14&4294967295|y>>>18),y=v+(T^g&(w^T))+E[12]+2368359562&4294967295,v=w+(y<<20&4294967295|y>>>12),y=g+(v^w^T)+E[5]+4294588738&4294967295,g=v+(y<<4&4294967295|y>>>28),y=T+(g^v^w)+E[8]+2272392833&4294967295,T=g+(y<<11&4294967295|y>>>21),y=w+(T^g^v)+E[11]+1839030562&4294967295,w=T+(y<<16&4294967295|y>>>16),y=v+(w^T^g)+E[14]+4259657740&4294967295,v=w+(y<<23&4294967295|y>>>9),y=g+(v^w^T)+E[1]+2763975236&4294967295,g=v+(y<<4&4294967295|y>>>28),y=T+(g^v^w)+E[4]+1272893353&4294967295,T=g+(y<<11&4294967295|y>>>21),y=w+(T^g^v)+E[7]+4139469664&4294967295,w=T+(y<<16&4294967295|y>>>16),y=v+(w^T^g)+E[10]+3200236656&4294967295,v=w+(y<<23&4294967295|y>>>9),y=g+(v^w^T)+E[13]+681279174&4294967295,g=v+(y<<4&4294967295|y>>>28),y=T+(g^v^w)+E[0]+3936430074&4294967295,T=g+(y<<11&4294967295|y>>>21),y=w+(T^g^v)+E[3]+3572445317&4294967295,w=T+(y<<16&4294967295|y>>>16),y=v+(w^T^g)+E[6]+76029189&4294967295,v=w+(y<<23&4294967295|y>>>9),y=g+(v^w^T)+E[9]+3654602809&4294967295,g=v+(y<<4&4294967295|y>>>28),y=T+(g^v^w)+E[12]+3873151461&4294967295,T=g+(y<<11&4294967295|y>>>21),y=w+(T^g^v)+E[15]+530742520&4294967295,w=T+(y<<16&4294967295|y>>>16),y=v+(w^T^g)+E[2]+3299628645&4294967295,v=w+(y<<23&4294967295|y>>>9),y=g+(w^(v|~T))+E[0]+4096336452&4294967295,g=v+(y<<6&4294967295|y>>>26),y=T+(v^(g|~w))+E[7]+1126891415&4294967295,T=g+(y<<10&4294967295|y>>>22),y=w+(g^(T|~v))+E[14]+2878612391&4294967295,w=T+(y<<15&4294967295|y>>>17),y=v+(T^(w|~g))+E[5]+4237533241&4294967295,v=w+(y<<21&4294967295|y>>>11),y=g+(w^(v|~T))+E[12]+1700485571&4294967295,g=v+(y<<6&4294967295|y>>>26),y=T+(v^(g|~w))+E[3]+2399980690&4294967295,T=g+(y<<10&4294967295|y>>>22),y=w+(g^(T|~v))+E[10]+4293915773&4294967295,w=T+(y<<15&4294967295|y>>>17),y=v+(T^(w|~g))+E[1]+2240044497&4294967295,v=w+(y<<21&4294967295|y>>>11),y=g+(w^(v|~T))+E[8]+1873313359&4294967295,g=v+(y<<6&4294967295|y>>>26),y=T+(v^(g|~w))+E[15]+4264355552&4294967295,T=g+(y<<10&4294967295|y>>>22),y=w+(g^(T|~v))+E[6]+2734768916&4294967295,w=T+(y<<15&4294967295|y>>>17),y=v+(T^(w|~g))+E[13]+1309151649&4294967295,v=w+(y<<21&4294967295|y>>>11),y=g+(w^(v|~T))+E[4]+4149444226&4294967295,g=v+(y<<6&4294967295|y>>>26),y=T+(v^(g|~w))+E[11]+3174756917&4294967295,T=g+(y<<10&4294967295|y>>>22),y=w+(g^(T|~v))+E[2]+718787259&4294967295,w=T+(y<<15&4294967295|y>>>17),y=v+(T^(w|~g))+E[9]+3951481745&4294967295,b.g[0]=b.g[0]+g&4294967295,b.g[1]=b.g[1]+(w+(y<<21&4294967295|y>>>11))&4294967295,b.g[2]=b.g[2]+w&4294967295,b.g[3]=b.g[3]+T&4294967295}s.prototype.v=function(b,g){g===void 0&&(g=b.length);const v=g-this.blockSize,E=this.C;let w=this.h,T=0;for(;T<g;){if(w==0)for(;T<=v;)r(this,b,T),T+=this.blockSize;if(typeof b=="string"){for(;T<g;)if(E[w++]=b.charCodeAt(T++),w==this.blockSize){r(this,E),w=0;break}}else for(;T<g;)if(E[w++]=b[T++],w==this.blockSize){r(this,E),w=0;break}}this.h=w,this.o+=g},s.prototype.A=function(){var b=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);b[0]=128;for(var g=1;g<b.length-8;++g)b[g]=0;g=this.o*8;for(var v=b.length-8;v<b.length;++v)b[v]=g&255,g/=256;for(this.v(b),b=Array(16),g=0,v=0;v<4;++v)for(let E=0;E<32;E+=8)b[g++]=this.g[v]>>>E&255;return b};function a(b,g){var v=c;return Object.prototype.hasOwnProperty.call(v,b)?v[b]:v[b]=g(b)}function o(b,g){this.h=g;const v=[];let E=!0;for(let w=b.length-1;w>=0;w--){const T=b[w]|0;E&&T==g||(v[w]=T,E=!1)}this.g=v}var c={};function d(b){return-128<=b&&b<128?a(b,function(g){return new o([g|0],g<0?-1:0)}):new o([b|0],b<0?-1:0)}function h(b){if(isNaN(b)||!isFinite(b))return p;if(b<0)return x(h(-b));const g=[];let v=1;for(let E=0;b>=v;E++)g[E]=b/v|0,v*=4294967296;return new o(g,0)}function f(b,g){if(b.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(b.charAt(0)=="-")return x(f(b.substring(1),g));if(b.indexOf("-")>=0)throw Error('number format error: interior "-" character');const v=h(Math.pow(g,8));let E=p;for(let T=0;T<b.length;T+=8){var w=Math.min(8,b.length-T);const y=parseInt(b.substring(T,T+w),g);w<8?(w=h(Math.pow(g,w)),E=E.j(w).add(h(y))):(E=E.j(v),E=E.add(h(y)))}return E}var p=d(0),_=d(1),A=d(16777216);n=o.prototype,n.m=function(){if(V(this))return-x(this).m();let b=0,g=1;for(let v=0;v<this.g.length;v++){const E=this.i(v);b+=(E>=0?E:4294967296+E)*g,g*=4294967296}return b},n.toString=function(b){if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(R(this))return"0";if(V(this))return"-"+x(this).toString(b);const g=h(Math.pow(b,6));var v=this;let E="";for(;;){const w=F(v,g).g;v=D(v,w.j(g));let T=((v.g.length>0?v.g[0]:v.h)>>>0).toString(b);if(v=w,R(v))return T+E;for(;T.length<6;)T="0"+T;E=T+E}},n.i=function(b){return b<0?0:b<this.g.length?this.g[b]:this.h};function R(b){if(b.h!=0)return!1;for(let g=0;g<b.g.length;g++)if(b.g[g]!=0)return!1;return!0}function V(b){return b.h==-1}n.l=function(b){return b=D(this,b),V(b)?-1:R(b)?0:1};function x(b){const g=b.g.length,v=[];for(let E=0;E<g;E++)v[E]=~b.g[E];return new o(v,~b.h).add(_)}n.abs=function(){return V(this)?x(this):this},n.add=function(b){const g=Math.max(this.g.length,b.g.length),v=[];let E=0;for(let w=0;w<=g;w++){let T=E+(this.i(w)&65535)+(b.i(w)&65535),y=(T>>>16)+(this.i(w)>>>16)+(b.i(w)>>>16);E=y>>>16,T&=65535,y&=65535,v[w]=y<<16|T}return new o(v,v[v.length-1]&-2147483648?-1:0)};function D(b,g){return b.add(x(g))}n.j=function(b){if(R(this)||R(b))return p;if(V(this))return V(b)?x(this).j(x(b)):x(x(this).j(b));if(V(b))return x(this.j(x(b)));if(this.l(A)<0&&b.l(A)<0)return h(this.m()*b.m());const g=this.g.length+b.g.length,v=[];for(var E=0;E<2*g;E++)v[E]=0;for(E=0;E<this.g.length;E++)for(let w=0;w<b.g.length;w++){const T=this.i(E)>>>16,y=this.i(E)&65535,B=b.i(w)>>>16,j=b.i(w)&65535;v[2*E+2*w]+=y*j,L(v,2*E+2*w),v[2*E+2*w+1]+=T*j,L(v,2*E+2*w+1),v[2*E+2*w+1]+=y*B,L(v,2*E+2*w+1),v[2*E+2*w+2]+=T*B,L(v,2*E+2*w+2)}for(b=0;b<g;b++)v[b]=v[2*b+1]<<16|v[2*b];for(b=g;b<2*g;b++)v[b]=0;return new o(v,0)};function L(b,g){for(;(b[g]&65535)!=b[g];)b[g+1]+=b[g]>>>16,b[g]&=65535,g++}function q(b,g){this.g=b,this.h=g}function F(b,g){if(R(g))throw Error("division by zero");if(R(b))return new q(p,p);if(V(b))return g=F(x(b),g),new q(x(g.g),x(g.h));if(V(g))return g=F(b,x(g)),new q(x(g.g),g.h);if(b.g.length>30){if(V(b)||V(g))throw Error("slowDivide_ only works with positive integers.");for(var v=_,E=g;E.l(b)<=0;)v=k(v),E=k(E);var w=N(v,1),T=N(E,1);for(E=N(E,2),v=N(v,2);!R(E);){var y=T.add(E);y.l(b)<=0&&(w=w.add(v),T=y),E=N(E,1),v=N(v,1)}return g=D(b,w.j(g)),new q(w,g)}for(w=p;b.l(g)>=0;){for(v=Math.max(1,Math.floor(b.m()/g.m())),E=Math.ceil(Math.log(v)/Math.LN2),E=E<=48?1:Math.pow(2,E-48),T=h(v),y=T.j(g);V(y)||y.l(b)>0;)v-=E,T=h(v),y=T.j(g);R(T)&&(T=_),w=w.add(T),b=D(b,y)}return new q(w,b)}n.B=function(b){return F(this,b).h},n.and=function(b){const g=Math.max(this.g.length,b.g.length),v=[];for(let E=0;E<g;E++)v[E]=this.i(E)&b.i(E);return new o(v,this.h&b.h)},n.or=function(b){const g=Math.max(this.g.length,b.g.length),v=[];for(let E=0;E<g;E++)v[E]=this.i(E)|b.i(E);return new o(v,this.h|b.h)},n.xor=function(b){const g=Math.max(this.g.length,b.g.length),v=[];for(let E=0;E<g;E++)v[E]=this.i(E)^b.i(E);return new o(v,this.h^b.h)};function k(b){const g=b.g.length+1,v=[];for(let E=0;E<g;E++)v[E]=b.i(E)<<1|b.i(E-1)>>>31;return new o(v,b.h)}function N(b,g){const v=g>>5;g%=32;const E=b.g.length-v,w=[];for(let T=0;T<E;T++)w[T]=g>0?b.i(T+v)>>>g|b.i(T+v+1)<<32-g:b.i(T+v);return new o(w,b.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,Ql=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,ht=o}).apply(typeof Ro<"u"?Ro:typeof self<"u"?self:typeof window<"u"?window:{});var Es=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jl,xn,Wl,Ss,ii,Kl,Yl,Xl;(function(){var n,e=Object.defineProperty;function t(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Es=="object"&&Es];for(var l=0;l<i.length;++l){var u=i[l];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var s=t(this);function r(i,l){if(l)e:{var u=s;i=i.split(".");for(var m=0;m<i.length-1;m++){var I=i[m];if(!(I in u))break e;u=u[I]}i=i[i.length-1],m=u[i],l=l(m),l!=m&&l!=null&&e(u,i,{configurable:!0,writable:!0,value:l})}}r("Symbol.dispose",function(i){return i||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(i){return i||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(i){return i||function(l){var u=[],m;for(m in l)Object.prototype.hasOwnProperty.call(l,m)&&u.push([m,l[m]]);return u}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},o=this||self;function c(i){var l=typeof i;return l=="object"&&i!=null||l=="function"}function d(i,l,u){return i.call.apply(i.bind,arguments)}function h(i,l,u){return h=d,h.apply(null,arguments)}function f(i,l){var u=Array.prototype.slice.call(arguments,1);return function(){var m=u.slice();return m.push.apply(m,arguments),i.apply(this,m)}}function p(i,l){function u(){}u.prototype=l.prototype,i.Z=l.prototype,i.prototype=new u,i.prototype.constructor=i,i.Ob=function(m,I,S){for(var M=Array(arguments.length-2),K=2;K<arguments.length;K++)M[K-2]=arguments[K];return l.prototype[I].apply(m,M)}}var _=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?i=>i&&AsyncContext.Snapshot.wrap(i):i=>i;function A(i){const l=i.length;if(l>0){const u=Array(l);for(let m=0;m<l;m++)u[m]=i[m];return u}return[]}function R(i,l){for(let m=1;m<arguments.length;m++){const I=arguments[m];var u=typeof I;if(u=u!="object"?u:I?Array.isArray(I)?"array":u:"null",u=="array"||u=="object"&&typeof I.length=="number"){u=i.length||0;const S=I.length||0;i.length=u+S;for(let M=0;M<S;M++)i[u+M]=I[M]}else i.push(I)}}class V{constructor(l,u){this.i=l,this.j=u,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function x(i){o.setTimeout(()=>{throw i},0)}function D(){var i=b;let l=null;return i.g&&(l=i.g,i.g=i.g.next,i.g||(i.h=null),l.next=null),l}class L{constructor(){this.h=this.g=null}add(l,u){const m=q.get();m.set(l,u),this.h?this.h.next=m:this.g=m,this.h=m}}var q=new V(()=>new F,i=>i.reset());class F{constructor(){this.next=this.g=this.h=null}set(l,u){this.h=l,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let k,N=!1,b=new L,g=()=>{const i=Promise.resolve(void 0);k=()=>{i.then(v)}};function v(){for(var i;i=D();){try{i.h.call(i.g)}catch(u){x(u)}var l=q;l.j(i),l.h<100&&(l.h++,i.next=l.g,l.g=i)}N=!1}function E(){this.u=this.u,this.C=this.C}E.prototype.u=!1,E.prototype.dispose=function(){this.u||(this.u=!0,this.N())},E.prototype[Symbol.dispose]=function(){this.dispose()},E.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function w(i,l){this.type=i,this.g=this.target=l,this.defaultPrevented=!1}w.prototype.h=function(){this.defaultPrevented=!0};var T=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var i=!1,l=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const u=()=>{};o.addEventListener("test",u,l),o.removeEventListener("test",u,l)}catch{}return i})();function y(i){return/^[\s\xa0]*$/.test(i)}function B(i,l){w.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i&&this.init(i,l)}p(B,w),B.prototype.init=function(i,l){const u=this.type=i.type,m=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;this.target=i.target||i.srcElement,this.g=l,l=i.relatedTarget,l||(u=="mouseover"?l=i.fromElement:u=="mouseout"&&(l=i.toElement)),this.relatedTarget=l,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=i.pointerType,this.state=i.state,this.i=i,i.defaultPrevented&&B.Z.h.call(this)},B.prototype.h=function(){B.Z.h.call(this);const i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var j="closure_listenable_"+(Math.random()*1e6|0),G=0;function te(i,l,u,m,I){this.listener=i,this.proxy=null,this.src=l,this.type=u,this.capture=!!m,this.ha=I,this.key=++G,this.da=this.fa=!1}function de(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function It(i,l,u){for(const m in i)l.call(u,i[m],m,i)}function as(i,l){for(const u in i)l.call(void 0,i[u],u,i)}function mn(i){const l={};for(const u in i)l[u]=i[u];return l}const pa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ga(i,l){let u,m;for(let I=1;I<arguments.length;I++){m=arguments[I];for(u in m)i[u]=m[u];for(let S=0;S<pa.length;S++)u=pa[S],Object.prototype.hasOwnProperty.call(m,u)&&(i[u]=m[u])}}function os(i){this.src=i,this.g={},this.h=0}os.prototype.add=function(i,l,u,m,I){const S=i.toString();i=this.g[S],i||(i=this.g[S]=[],this.h++);const M=vr(i,l,m,I);return M>-1?(l=i[M],u||(l.fa=!1)):(l=new te(l,this.src,S,!!m,I),l.fa=u,i.push(l)),l};function gr(i,l){const u=l.type;if(u in i.g){var m=i.g[u],I=Array.prototype.indexOf.call(m,l,void 0),S;(S=I>=0)&&Array.prototype.splice.call(m,I,1),S&&(de(l),i.g[u].length==0&&(delete i.g[u],i.h--))}}function vr(i,l,u,m){for(let I=0;I<i.length;++I){const S=i[I];if(!S.da&&S.listener==l&&S.capture==!!u&&S.ha==m)return I}return-1}var yr="closure_lm_"+(Math.random()*1e6|0),_r={};function va(i,l,u,m,I){if(Array.isArray(l)){for(let S=0;S<l.length;S++)va(i,l[S],u,m,I);return null}return u=ba(u),i&&i[j]?i.J(l,u,c(m)?!!m.capture:!1,I):$u(i,l,u,!1,m,I)}function $u(i,l,u,m,I,S){if(!l)throw Error("Invalid event type");const M=c(I)?!!I.capture:!!I;let K=Er(i);if(K||(i[yr]=K=new os(i)),u=K.add(l,u,m,M,S),u.proxy)return u;if(m=qu(),u.proxy=m,m.src=i,m.listener=u,i.addEventListener)T||(I=M),I===void 0&&(I=!1),i.addEventListener(l.toString(),m,I);else if(i.attachEvent)i.attachEvent(_a(l.toString()),m);else if(i.addListener&&i.removeListener)i.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return u}function qu(){function i(u){return l.call(i.src,i.listener,u)}const l=Bu;return i}function ya(i,l,u,m,I){if(Array.isArray(l))for(var S=0;S<l.length;S++)ya(i,l[S],u,m,I);else m=c(m)?!!m.capture:!!m,u=ba(u),i&&i[j]?(i=i.i,S=String(l).toString(),S in i.g&&(l=i.g[S],u=vr(l,u,m,I),u>-1&&(de(l[u]),Array.prototype.splice.call(l,u,1),l.length==0&&(delete i.g[S],i.h--)))):i&&(i=Er(i))&&(l=i.g[l.toString()],i=-1,l&&(i=vr(l,u,m,I)),(u=i>-1?l[i]:null)&&br(u))}function br(i){if(typeof i!="number"&&i&&!i.da){var l=i.src;if(l&&l[j])gr(l.i,i);else{var u=i.type,m=i.proxy;l.removeEventListener?l.removeEventListener(u,m,i.capture):l.detachEvent?l.detachEvent(_a(u),m):l.addListener&&l.removeListener&&l.removeListener(m),(u=Er(l))?(gr(u,i),u.h==0&&(u.src=null,l[yr]=null)):de(i)}}}function _a(i){return i in _r?_r[i]:_r[i]="on"+i}function Bu(i,l){if(i.da)i=!0;else{l=new B(l,this);const u=i.listener,m=i.ha||i.src;i.fa&&br(i),i=u.call(m,l)}return i}function Er(i){return i=i[yr],i instanceof os?i:null}var Tr="__closure_events_fn_"+(Math.random()*1e9>>>0);function ba(i){return typeof i=="function"?i:(i[Tr]||(i[Tr]=function(l){return i.handleEvent(l)}),i[Tr])}function we(){E.call(this),this.i=new os(this),this.M=this,this.G=null}p(we,E),we.prototype[j]=!0,we.prototype.removeEventListener=function(i,l,u,m){ya(this,i,l,u,m)};function Ve(i,l){var u,m=i.G;if(m)for(u=[];m;m=m.G)u.push(m);if(i=i.M,m=l.type||l,typeof l=="string")l=new w(l,i);else if(l instanceof w)l.target=l.target||i;else{var I=l;l=new w(m,i),ga(l,I)}I=!0;let S,M;if(u)for(M=u.length-1;M>=0;M--)S=l.g=u[M],I=ls(S,m,!0,l)&&I;if(S=l.g=i,I=ls(S,m,!0,l)&&I,I=ls(S,m,!1,l)&&I,u)for(M=0;M<u.length;M++)S=l.g=u[M],I=ls(S,m,!1,l)&&I}we.prototype.N=function(){if(we.Z.N.call(this),this.i){var i=this.i;for(const l in i.g){const u=i.g[l];for(let m=0;m<u.length;m++)de(u[m]);delete i.g[l],i.h--}}this.G=null},we.prototype.J=function(i,l,u,m){return this.i.add(String(i),l,!1,u,m)},we.prototype.K=function(i,l,u,m){return this.i.add(String(i),l,!0,u,m)};function ls(i,l,u,m){if(l=i.i.g[String(l)],!l)return!0;l=l.concat();let I=!0;for(let S=0;S<l.length;++S){const M=l[S];if(M&&!M.da&&M.capture==u){const K=M.listener,ge=M.ha||M.src;M.fa&&gr(i.i,M),I=K.call(ge,m)!==!1&&I}}return I&&!m.defaultPrevented}function Uu(i,l){if(typeof i!="function")if(i&&typeof i.handleEvent=="function")i=h(i.handleEvent,i);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:o.setTimeout(i,l||0)}function Ea(i){i.g=Uu(()=>{i.g=null,i.i&&(i.i=!1,Ea(i))},i.l);const l=i.h;i.h=null,i.m.apply(null,l)}class ju extends E{constructor(l,u){super(),this.m=l,this.l=u,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Ea(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pn(i){E.call(this),this.h=i,this.g={}}p(pn,E);var Ta=[];function wa(i){It(i.g,function(l,u){this.g.hasOwnProperty(u)&&br(l)},i),i.g={}}pn.prototype.N=function(){pn.Z.N.call(this),wa(this)},pn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var wr=o.JSON.stringify,zu=o.JSON.parse,Gu=class{stringify(i){return o.JSON.stringify(i,void 0)}parse(i){return o.JSON.parse(i,void 0)}};function Ia(){}function Aa(){}var gn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ir(){w.call(this,"d")}p(Ir,w);function Ar(){w.call(this,"c")}p(Ar,w);var At={},Sa=null;function cs(){return Sa=Sa||new we}At.Ia="serverreachability";function Ra(i){w.call(this,At.Ia,i)}p(Ra,w);function vn(i){const l=cs();Ve(l,new Ra(l))}At.STAT_EVENT="statevent";function Ca(i,l){w.call(this,At.STAT_EVENT,i),this.stat=l}p(Ca,w);function xe(i){const l=cs();Ve(l,new Ca(l,i))}At.Ja="timingevent";function Pa(i,l){w.call(this,At.Ja,i),this.size=l}p(Pa,w);function yn(i,l){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){i()},l)}function _n(){this.g=!0}_n.prototype.ua=function(){this.g=!1};function Hu(i,l,u,m,I,S){i.info(function(){if(i.g)if(S){var M="",K=S.split("&");for(let se=0;se<K.length;se++){var ge=K[se].split("=");if(ge.length>1){const ye=ge[0];ge=ge[1];const ze=ye.split("_");M=ze.length>=2&&ze[1]=="type"?M+(ye+"="+ge+"&"):M+(ye+"=redacted&")}}}else M=null;else M=S;return"XMLHTTP REQ ("+m+") [attempt "+I+"]: "+l+`
`+u+`
`+M})}function Qu(i,l,u,m,I,S,M){i.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+I+"]: "+l+`
`+u+`
`+S+" "+M})}function Ut(i,l,u,m){i.info(function(){return"XMLHTTP TEXT ("+l+"): "+Wu(i,u)+(m?" "+m:"")})}function Ju(i,l){i.info(function(){return"TIMEOUT: "+l})}_n.prototype.info=function(){};function Wu(i,l){if(!i.g)return l;if(!l)return null;try{const S=JSON.parse(l);if(S){for(i=0;i<S.length;i++)if(Array.isArray(S[i])){var u=S[i];if(!(u.length<2)){var m=u[1];if(Array.isArray(m)&&!(m.length<1)){var I=m[0];if(I!="noop"&&I!="stop"&&I!="close")for(let M=1;M<m.length;M++)m[M]=""}}}}return wr(S)}catch{return l}}var us={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Da={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Va;function Sr(){}p(Sr,Ia),Sr.prototype.g=function(){return new XMLHttpRequest},Va=new Sr;function bn(i){return encodeURIComponent(String(i))}function Ku(i){var l=1;i=i.split(":");const u=[];for(;l>0&&i.length;)u.push(i.shift()),l--;return i.length&&u.push(i.join(":")),u}function st(i,l,u,m){this.j=i,this.i=l,this.l=u,this.S=m||1,this.V=new pn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new xa}function xa(){this.i=null,this.g="",this.h=!1}var Na={},Rr={};function Cr(i,l,u){i.M=1,i.A=hs(je(l)),i.u=u,i.R=!0,ka(i,null)}function ka(i,l){i.F=Date.now(),ds(i),i.B=je(i.A);var u=i.B,m=i.S;Array.isArray(m)||(m=[String(m)]),Qa(u.i,"t",m),i.C=0,u=i.j.L,i.h=new xa,i.g=ho(i.j,u?l:null,!i.u),i.P>0&&(i.O=new ju(h(i.Y,i,i.g),i.P)),l=i.V,u=i.g,m=i.ba;var I="readystatechange";Array.isArray(I)||(I&&(Ta[0]=I.toString()),I=Ta);for(let S=0;S<I.length;S++){const M=va(u,I[S],m||l.handleEvent,!1,l.h||l);if(!M)break;l.g[M.key]=M}l=i.J?mn(i.J):{},i.u?(i.v||(i.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.B,i.v,i.u,l)):(i.v="GET",i.g.ea(i.B,i.v,null,l)),vn(),Hu(i.i,i.v,i.B,i.l,i.S,i.u)}st.prototype.ba=function(i){i=i.target;const l=this.O;l&&at(i)==3?l.j():this.Y(i)},st.prototype.Y=function(i){try{if(i==this.g)e:{const K=at(this.g),ge=this.g.ya(),se=this.g.ca();if(!(K<3)&&(K!=3||this.g&&(this.h.h||this.g.la()||eo(this.g)))){this.K||K!=4||ge==7||(ge==8||se<=0?vn(3):vn(2)),Pr(this);var l=this.g.ca();this.X=l;var u=Yu(this);if(this.o=l==200,Qu(this.i,this.v,this.B,this.l,this.S,K,l),this.o){if(this.U&&!this.L){t:{if(this.g){var m,I=this.g;if((m=I.g?I.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(m)){var S=m;break t}}S=null}if(i=S)Ut(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Dr(this,i);else{this.o=!1,this.m=3,xe(12),St(this),En(this);break e}}if(this.R){i=!0;let ye;for(;!this.K&&this.C<u.length;)if(ye=Xu(this,u),ye==Rr){K==4&&(this.m=4,xe(14),i=!1),Ut(this.i,this.l,null,"[Incomplete Response]");break}else if(ye==Na){this.m=4,xe(15),Ut(this.i,this.l,u,"[Invalid Chunk]"),i=!1;break}else Ut(this.i,this.l,ye,null),Dr(this,ye);if(La(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),K!=4||u.length!=0||this.h.h||(this.m=1,xe(16),i=!1),this.o=this.o&&i,!i)Ut(this.i,this.l,u,"[Invalid Chunked Response]"),St(this),En(this);else if(u.length>0&&!this.W){this.W=!0;var M=this.j;M.g==this&&M.aa&&!M.P&&(M.j.info("Great, no buffering proxy detected. Bytes received: "+u.length),Fr(M),M.P=!0,xe(11))}}else Ut(this.i,this.l,u,null),Dr(this,u);K==4&&St(this),this.o&&!this.K&&(K==4?oo(this.j,this):(this.o=!1,ds(this)))}else hd(this.g),l==400&&u.indexOf("Unknown SID")>0?(this.m=3,xe(12)):(this.m=0,xe(13)),St(this),En(this)}}}catch{}finally{}};function Yu(i){if(!La(i))return i.g.la();const l=eo(i.g);if(l==="")return"";let u="";const m=l.length,I=at(i.g)==4;if(!i.h.i){if(typeof TextDecoder>"u")return St(i),En(i),"";i.h.i=new o.TextDecoder}for(let S=0;S<m;S++)i.h.h=!0,u+=i.h.i.decode(l[S],{stream:!(I&&S==m-1)});return l.length=0,i.h.g+=u,i.C=0,i.h.g}function La(i){return i.g?i.v=="GET"&&i.M!=2&&i.j.Aa:!1}function Xu(i,l){var u=i.C,m=l.indexOf(`
`,u);return m==-1?Rr:(u=Number(l.substring(u,m)),isNaN(u)?Na:(m+=1,m+u>l.length?Rr:(l=l.slice(m,m+u),i.C=m+u,l)))}st.prototype.cancel=function(){this.K=!0,St(this)};function ds(i){i.T=Date.now()+i.H,Ma(i,i.H)}function Ma(i,l){if(i.D!=null)throw Error("WatchDog timer not null");i.D=yn(h(i.aa,i),l)}function Pr(i){i.D&&(o.clearTimeout(i.D),i.D=null)}st.prototype.aa=function(){this.D=null;const i=Date.now();i-this.T>=0?(Ju(this.i,this.B),this.M!=2&&(vn(),xe(17)),St(this),this.m=2,En(this)):Ma(this,this.T-i)};function En(i){i.j.I==0||i.K||oo(i.j,i)}function St(i){Pr(i);var l=i.O;l&&typeof l.dispose=="function"&&l.dispose(),i.O=null,wa(i.V),i.g&&(l=i.g,i.g=null,l.abort(),l.dispose())}function Dr(i,l){try{var u=i.j;if(u.I!=0&&(u.g==i||Vr(u.h,i))){if(!i.L&&Vr(u.h,i)&&u.I==3){try{var m=u.Ba.g.parse(l)}catch{m=null}if(Array.isArray(m)&&m.length==3){var I=m;if(I[0]==0){e:if(!u.v){if(u.g)if(u.g.F+3e3<i.F)vs(u),ps(u);else break e;Or(u),xe(18)}}else u.xa=I[1],0<u.xa-u.K&&I[2]<37500&&u.F&&u.A==0&&!u.C&&(u.C=yn(h(u.Va,u),6e3));$a(u.h)<=1&&u.ta&&(u.ta=void 0)}else Ct(u,11)}else if((i.L||u.g==i)&&vs(u),!y(l))for(I=u.Ba.g.parse(l),l=0;l<I.length;l++){let se=I[l];const ye=se[0];if(!(ye<=u.K))if(u.K=ye,se=se[1],u.I==2)if(se[0]=="c"){u.M=se[1],u.ba=se[2];const ze=se[3];ze!=null&&(u.ka=ze,u.j.info("VER="+u.ka));const Pt=se[4];Pt!=null&&(u.za=Pt,u.j.info("SVER="+u.za));const ot=se[5];ot!=null&&typeof ot=="number"&&ot>0&&(m=1.5*ot,u.O=m,u.j.info("backChannelRequestTimeoutMs_="+m)),m=u;const lt=i.g;if(lt){const _s=lt.g?lt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_s){var S=m.h;S.g||_s.indexOf("spdy")==-1&&_s.indexOf("quic")==-1&&_s.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(xr(S,S.h),S.h=null))}if(m.G){const $r=lt.g?lt.g.getResponseHeader("X-HTTP-Session-Id"):null;$r&&(m.wa=$r,ie(m.J,m.G,$r))}}u.I=3,u.l&&u.l.ra(),u.aa&&(u.T=Date.now()-i.F,u.j.info("Handshake RTT: "+u.T+"ms")),m=u;var M=i;if(m.na=uo(m,m.L?m.ba:null,m.W),M.L){qa(m.h,M);var K=M,ge=m.O;ge&&(K.H=ge),K.D&&(Pr(K),ds(K)),m.g=M}else io(m);u.i.length>0&&gs(u)}else se[0]!="stop"&&se[0]!="close"||Ct(u,7);else u.I==3&&(se[0]=="stop"||se[0]=="close"?se[0]=="stop"?Ct(u,7):Mr(u):se[0]!="noop"&&u.l&&u.l.qa(se),u.A=0)}}vn(4)}catch{}}var Zu=class{constructor(i,l){this.g=i,this.map=l}};function Oa(i){this.l=i||10,o.PerformanceNavigationTiming?(i=o.performance.getEntriesByType("navigation"),i=i.length>0&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Fa(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function $a(i){return i.h?1:i.g?i.g.size:0}function Vr(i,l){return i.h?i.h==l:i.g?i.g.has(l):!1}function xr(i,l){i.g?i.g.add(l):i.h=l}function qa(i,l){i.h&&i.h==l?i.h=null:i.g&&i.g.has(l)&&i.g.delete(l)}Oa.prototype.cancel=function(){if(this.i=Ba(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Ba(i){if(i.h!=null)return i.i.concat(i.h.G);if(i.g!=null&&i.g.size!==0){let l=i.i;for(const u of i.g.values())l=l.concat(u.G);return l}return A(i.i)}var Ua=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ed(i,l){if(i){i=i.split("&");for(let u=0;u<i.length;u++){const m=i[u].indexOf("=");let I,S=null;m>=0?(I=i[u].substring(0,m),S=i[u].substring(m+1)):I=i[u],l(I,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function rt(i){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;i instanceof rt?(this.l=i.l,Tn(this,i.j),this.o=i.o,this.g=i.g,wn(this,i.u),this.h=i.h,Nr(this,Ja(i.i)),this.m=i.m):i&&(l=String(i).match(Ua))?(this.l=!1,Tn(this,l[1]||"",!0),this.o=In(l[2]||""),this.g=In(l[3]||"",!0),wn(this,l[4]),this.h=In(l[5]||"",!0),Nr(this,l[6]||"",!0),this.m=In(l[7]||"")):(this.l=!1,this.i=new Sn(null,this.l))}rt.prototype.toString=function(){const i=[];var l=this.j;l&&i.push(An(l,ja,!0),":");var u=this.g;return(u||l=="file")&&(i.push("//"),(l=this.o)&&i.push(An(l,ja,!0),"@"),i.push(bn(u).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.u,u!=null&&i.push(":",String(u))),(u=this.h)&&(this.g&&u.charAt(0)!="/"&&i.push("/"),i.push(An(u,u.charAt(0)=="/"?sd:nd,!0))),(u=this.i.toString())&&i.push("?",u),(u=this.m)&&i.push("#",An(u,id)),i.join("")},rt.prototype.resolve=function(i){const l=je(this);let u=!!i.j;u?Tn(l,i.j):u=!!i.o,u?l.o=i.o:u=!!i.g,u?l.g=i.g:u=i.u!=null;var m=i.h;if(u)wn(l,i.u);else if(u=!!i.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var I=l.h.lastIndexOf("/");I!=-1&&(m=l.h.slice(0,I+1)+m)}if(I=m,I==".."||I==".")m="";else if(I.indexOf("./")!=-1||I.indexOf("/.")!=-1){m=I.lastIndexOf("/",0)==0,I=I.split("/");const S=[];for(let M=0;M<I.length;){const K=I[M++];K=="."?m&&M==I.length&&S.push(""):K==".."?((S.length>1||S.length==1&&S[0]!="")&&S.pop(),m&&M==I.length&&S.push("")):(S.push(K),m=!0)}m=S.join("/")}else m=I}return u?l.h=m:u=i.i.toString()!=="",u?Nr(l,Ja(i.i)):u=!!i.m,u&&(l.m=i.m),l};function je(i){return new rt(i)}function Tn(i,l,u){i.j=u?In(l,!0):l,i.j&&(i.j=i.j.replace(/:$/,""))}function wn(i,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);i.u=l}else i.u=null}function Nr(i,l,u){l instanceof Sn?(i.i=l,ad(i.i,i.l)):(u||(l=An(l,rd)),i.i=new Sn(l,i.l))}function ie(i,l,u){i.i.set(l,u)}function hs(i){return ie(i,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),i}function In(i,l){return i?l?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function An(i,l,u){return typeof i=="string"?(i=encodeURI(i).replace(l,td),u&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function td(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var ja=/[#\/\?@]/g,nd=/[#\?:]/g,sd=/[#\?]/g,rd=/[#\?@]/g,id=/#/g;function Sn(i,l){this.h=this.g=null,this.i=i||null,this.j=!!l}function Rt(i){i.g||(i.g=new Map,i.h=0,i.i&&ed(i.i,function(l,u){i.add(decodeURIComponent(l.replace(/\+/g," ")),u)}))}n=Sn.prototype,n.add=function(i,l){Rt(this),this.i=null,i=jt(this,i);let u=this.g.get(i);return u||this.g.set(i,u=[]),u.push(l),this.h+=1,this};function za(i,l){Rt(i),l=jt(i,l),i.g.has(l)&&(i.i=null,i.h-=i.g.get(l).length,i.g.delete(l))}function Ga(i,l){return Rt(i),l=jt(i,l),i.g.has(l)}n.forEach=function(i,l){Rt(this),this.g.forEach(function(u,m){u.forEach(function(I){i.call(l,I,m,this)},this)},this)};function Ha(i,l){Rt(i);let u=[];if(typeof l=="string")Ga(i,l)&&(u=u.concat(i.g.get(jt(i,l))));else for(i=Array.from(i.g.values()),l=0;l<i.length;l++)u=u.concat(i[l]);return u}n.set=function(i,l){return Rt(this),this.i=null,i=jt(this,i),Ga(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[l]),this.h+=1,this},n.get=function(i,l){return i?(i=Ha(this,i),i.length>0?String(i[0]):l):l};function Qa(i,l,u){za(i,l),u.length>0&&(i.i=null,i.g.set(jt(i,l),A(u)),i.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],l=Array.from(this.g.keys());for(let m=0;m<l.length;m++){var u=l[m];const I=bn(u);u=Ha(this,u);for(let S=0;S<u.length;S++){let M=I;u[S]!==""&&(M+="="+bn(u[S])),i.push(M)}}return this.i=i.join("&")};function Ja(i){const l=new Sn;return l.i=i.i,i.g&&(l.g=new Map(i.g),l.h=i.h),l}function jt(i,l){return l=String(l),i.j&&(l=l.toLowerCase()),l}function ad(i,l){l&&!i.j&&(Rt(i),i.i=null,i.g.forEach(function(u,m){const I=m.toLowerCase();m!=I&&(za(this,m),Qa(this,I,u))},i)),i.j=l}function od(i,l){const u=new _n;if(o.Image){const m=new Image;m.onload=f(it,u,"TestLoadImage: loaded",!0,l,m),m.onerror=f(it,u,"TestLoadImage: error",!1,l,m),m.onabort=f(it,u,"TestLoadImage: abort",!1,l,m),m.ontimeout=f(it,u,"TestLoadImage: timeout",!1,l,m),o.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=i}else l(!1)}function ld(i,l){const u=new _n,m=new AbortController,I=setTimeout(()=>{m.abort(),it(u,"TestPingServer: timeout",!1,l)},1e4);fetch(i,{signal:m.signal}).then(S=>{clearTimeout(I),S.ok?it(u,"TestPingServer: ok",!0,l):it(u,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(I),it(u,"TestPingServer: error",!1,l)})}function it(i,l,u,m,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),m(u)}catch{}}function cd(){this.g=new Gu}function kr(i){this.i=i.Sb||null,this.h=i.ab||!1}p(kr,Ia),kr.prototype.g=function(){return new fs(this.i,this.h)};function fs(i,l){we.call(this),this.H=i,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(fs,we),n=fs.prototype,n.open=function(i,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=i,this.D=l,this.readyState=1,Cn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};i&&(l.body=i),(this.H||o).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Rn(this)),this.readyState=0},n.Pa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Cn(this)),this.g&&(this.readyState=3,Cn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Wa(this)}else i.text().then(this.Oa.bind(this),this.ga.bind(this))};function Wa(i){i.j.read().then(i.Ma.bind(i)).catch(i.ga.bind(i))}n.Ma=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var l=i.value?i.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!i.done}))&&(this.response=this.responseText+=l)}i.done?Rn(this):Cn(this),this.readyState==3&&Wa(this)}},n.Oa=function(i){this.g&&(this.response=this.responseText=i,Rn(this))},n.Na=function(i){this.g&&(this.response=i,Rn(this))},n.ga=function(){this.g&&Rn(this)};function Rn(i){i.readyState=4,i.l=null,i.j=null,i.B=null,Cn(i)}n.setRequestHeader=function(i,l){this.A.append(i,l)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],l=this.h.entries();for(var u=l.next();!u.done;)u=u.value,i.push(u[0]+": "+u[1]),u=l.next();return i.join(`\r
`)};function Cn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(fs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Ka(i){let l="";return It(i,function(u,m){l+=m,l+=":",l+=u,l+=`\r
`}),l}function Lr(i,l,u){e:{for(m in u){var m=!1;break e}m=!0}m||(u=Ka(u),typeof i=="string"?u!=null&&bn(u):ie(i,l,u))}function le(i){we.call(this),this.headers=new Map,this.L=i||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(le,we);var ud=/^https?$/i,dd=["POST","PUT"];n=le.prototype,n.Fa=function(i){this.H=i},n.ea=function(i,l,u,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);l=l?l.toUpperCase():"GET",this.D=i,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Va.g(),this.g.onreadystatechange=_(h(this.Ca,this));try{this.B=!0,this.g.open(l,String(i),!0),this.B=!1}catch(S){Ya(this,S);return}if(i=u||"",u=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var I in m)u.set(I,m[I]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const S of m.keys())u.set(S,m.get(S));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(u.keys()).find(S=>S.toLowerCase()=="content-type"),I=o.FormData&&i instanceof o.FormData,!(Array.prototype.indexOf.call(dd,l,void 0)>=0)||m||I||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,M]of u)this.g.setRequestHeader(S,M);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(i),this.v=!1}catch(S){Ya(this,S)}};function Ya(i,l){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=l,i.o=5,Xa(i),ms(i)}function Xa(i){i.A||(i.A=!0,Ve(i,"complete"),Ve(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=i||7,Ve(this,"complete"),Ve(this,"abort"),ms(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ms(this,!0)),le.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Za(this):this.Xa())},n.Xa=function(){Za(this)};function Za(i){if(i.h&&typeof a<"u"){if(i.v&&at(i)==4)setTimeout(i.Ca.bind(i),0);else if(Ve(i,"readystatechange"),at(i)==4){i.h=!1;try{const S=i.ca();e:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var u;if(!(u=l)){var m;if(m=S===0){let M=String(i.D).match(Ua)[1]||null;!M&&o.self&&o.self.location&&(M=o.self.location.protocol.slice(0,-1)),m=!ud.test(M?M.toLowerCase():"")}u=m}if(u)Ve(i,"complete"),Ve(i,"success");else{i.o=6;try{var I=at(i)>2?i.g.statusText:""}catch{I=""}i.l=I+" ["+i.ca()+"]",Xa(i)}}finally{ms(i)}}}}function ms(i,l){if(i.g){i.m&&(clearTimeout(i.m),i.m=null);const u=i.g;i.g=null,l||Ve(i,"ready");try{u.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function at(i){return i.g?i.g.readyState:0}n.ca=function(){try{return at(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(i){if(this.g){var l=this.g.responseText;return i&&l.indexOf(i)==0&&(l=l.substring(i.length)),zu(l)}};function eo(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.F){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function hd(i){const l={};i=(i.g&&at(i)>=2&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<i.length;m++){if(y(i[m]))continue;var u=Ku(i[m]);const I=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const S=l[I]||[];l[I]=S,S.push(u)}as(l,function(m){return m.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Pn(i,l,u){return u&&u.internalChannelParams&&u.internalChannelParams[i]||l}function to(i){this.za=0,this.i=[],this.j=new _n,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Pn("failFast",!1,i),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Pn("baseRetryDelayMs",5e3,i),this.Za=Pn("retryDelaySeedMs",1e4,i),this.Ta=Pn("forwardChannelMaxRetries",2,i),this.va=Pn("forwardChannelRequestTimeoutMs",2e4,i),this.ma=i&&i.xmlHttpFactory||void 0,this.Ua=i&&i.Rb||void 0,this.Aa=i&&i.useFetchStreams||!1,this.O=void 0,this.L=i&&i.supportsCrossDomainXhr||!1,this.M="",this.h=new Oa(i&&i.concurrentRequestLimit),this.Ba=new cd,this.S=i&&i.fastHandshake||!1,this.R=i&&i.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=i&&i.Pb||!1,i&&i.ua&&this.j.ua(),i&&i.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&i&&i.detectBufferingProxy||!1,this.ia=void 0,i&&i.longPollingTimeout&&i.longPollingTimeout>0&&(this.ia=i.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=to.prototype,n.ka=8,n.I=1,n.connect=function(i,l,u,m){xe(0),this.W=i,this.H=l||{},u&&m!==void 0&&(this.H.OSID=u,this.H.OAID=m),this.F=this.X,this.J=uo(this,null,this.W),gs(this)};function Mr(i){if(no(i),i.I==3){var l=i.V++,u=je(i.J);if(ie(u,"SID",i.M),ie(u,"RID",l),ie(u,"TYPE","terminate"),Dn(i,u),l=new st(i,i.j,l),l.M=2,l.A=hs(je(u)),u=!1,o.navigator&&o.navigator.sendBeacon)try{u=o.navigator.sendBeacon(l.A.toString(),"")}catch{}!u&&o.Image&&(new Image().src=l.A,u=!0),u||(l.g=ho(l.j,null),l.g.ea(l.A)),l.F=Date.now(),ds(l)}co(i)}function ps(i){i.g&&(Fr(i),i.g.cancel(),i.g=null)}function no(i){ps(i),i.v&&(o.clearTimeout(i.v),i.v=null),vs(i),i.h.cancel(),i.m&&(typeof i.m=="number"&&o.clearTimeout(i.m),i.m=null)}function gs(i){if(!Fa(i.h)&&!i.m){i.m=!0;var l=i.Ea;k||g(),N||(k(),N=!0),b.add(l,i),i.D=0}}function fd(i,l){return $a(i.h)>=i.h.j-(i.m?1:0)?!1:i.m?(i.i=l.G.concat(i.i),!0):i.I==1||i.I==2||i.D>=(i.Sa?0:i.Ta)?!1:(i.m=yn(h(i.Ea,i,l),lo(i,i.D)),i.D++,!0)}n.Ea=function(i){if(this.m)if(this.m=null,this.I==1){if(!i){this.V=Math.floor(Math.random()*1e5),i=this.V++;const I=new st(this,this.j,i);let S=this.o;if(this.U&&(S?(S=mn(S),ga(S,this.U)):S=this.U),this.u!==null||this.R||(I.J=S,S=null),this.S)e:{for(var l=0,u=0;u<this.i.length;u++){t:{var m=this.i[u];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(l+=m,l>4096){l=u;break e}if(l===4096||u===this.i.length-1){l=u+1;break e}}l=1e3}else l=1e3;l=ro(this,I,l),u=je(this.J),ie(u,"RID",i),ie(u,"CVER",22),this.G&&ie(u,"X-HTTP-Session-Id",this.G),Dn(this,u),S&&(this.R?l="headers="+bn(Ka(S))+"&"+l:this.u&&Lr(u,this.u,S)),xr(this.h,I),this.Ra&&ie(u,"TYPE","init"),this.S?(ie(u,"$req",l),ie(u,"SID","null"),I.U=!0,Cr(I,u,null)):Cr(I,u,l),this.I=2}}else this.I==3&&(i?so(this,i):this.i.length==0||Fa(this.h)||so(this))};function so(i,l){var u;l?u=l.l:u=i.V++;const m=je(i.J);ie(m,"SID",i.M),ie(m,"RID",u),ie(m,"AID",i.K),Dn(i,m),i.u&&i.o&&Lr(m,i.u,i.o),u=new st(i,i.j,u,i.D+1),i.u===null&&(u.J=i.o),l&&(i.i=l.G.concat(i.i)),l=ro(i,u,1e3),u.H=Math.round(i.va*.5)+Math.round(i.va*.5*Math.random()),xr(i.h,u),Cr(u,m,l)}function Dn(i,l){i.H&&It(i.H,function(u,m){ie(l,m,u)}),i.l&&It({},function(u,m){ie(l,m,u)})}function ro(i,l,u){u=Math.min(i.i.length,u);const m=i.l?h(i.l.Ka,i.l,i):null;e:{var I=i.i;let K=-1;for(;;){const ge=["count="+u];K==-1?u>0?(K=I[0].g,ge.push("ofs="+K)):K=0:ge.push("ofs="+K);let se=!0;for(let ye=0;ye<u;ye++){var S=I[ye].g;const ze=I[ye].map;if(S-=K,S<0)K=Math.max(0,I[ye].g-100),se=!1;else try{S="req"+S+"_"||"";try{var M=ze instanceof Map?ze:Object.entries(ze);for(const[Pt,ot]of M){let lt=ot;c(ot)&&(lt=wr(ot)),ge.push(S+Pt+"="+encodeURIComponent(lt))}}catch(Pt){throw ge.push(S+"type="+encodeURIComponent("_badmap")),Pt}}catch{m&&m(ze)}}if(se){M=ge.join("&");break e}}M=void 0}return i=i.i.splice(0,u),l.G=i,M}function io(i){if(!i.g&&!i.v){i.Y=1;var l=i.Da;k||g(),N||(k(),N=!0),b.add(l,i),i.A=0}}function Or(i){return i.g||i.v||i.A>=3?!1:(i.Y++,i.v=yn(h(i.Da,i),lo(i,i.A)),i.A++,!0)}n.Da=function(){if(this.v=null,ao(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var i=4*this.T;this.j.info("BP detection timer enabled: "+i),this.B=yn(h(this.Wa,this),i)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,xe(10),ps(this),ao(this))};function Fr(i){i.B!=null&&(o.clearTimeout(i.B),i.B=null)}function ao(i){i.g=new st(i,i.j,"rpc",i.Y),i.u===null&&(i.g.J=i.o),i.g.P=0;var l=je(i.na);ie(l,"RID","rpc"),ie(l,"SID",i.M),ie(l,"AID",i.K),ie(l,"CI",i.F?"0":"1"),!i.F&&i.ia&&ie(l,"TO",i.ia),ie(l,"TYPE","xmlhttp"),Dn(i,l),i.u&&i.o&&Lr(l,i.u,i.o),i.O&&(i.g.H=i.O);var u=i.g;i=i.ba,u.M=1,u.A=hs(je(l)),u.u=null,u.R=!0,ka(u,i)}n.Va=function(){this.C!=null&&(this.C=null,ps(this),Or(this),xe(19))};function vs(i){i.C!=null&&(o.clearTimeout(i.C),i.C=null)}function oo(i,l){var u=null;if(i.g==l){vs(i),Fr(i),i.g=null;var m=2}else if(Vr(i.h,l))u=l.G,qa(i.h,l),m=1;else return;if(i.I!=0){if(l.o)if(m==1){u=l.u?l.u.length:0,l=Date.now()-l.F;var I=i.D;m=cs(),Ve(m,new Pa(m,u)),gs(i)}else io(i);else if(I=l.m,I==3||I==0&&l.X>0||!(m==1&&fd(i,l)||m==2&&Or(i)))switch(u&&u.length>0&&(l=i.h,l.i=l.i.concat(u)),I){case 1:Ct(i,5);break;case 4:Ct(i,10);break;case 3:Ct(i,6);break;default:Ct(i,2)}}}function lo(i,l){let u=i.Qa+Math.floor(Math.random()*i.Za);return i.isActive()||(u*=2),u*l}function Ct(i,l){if(i.j.info("Error code "+l),l==2){var u=h(i.bb,i),m=i.Ua;const I=!m;m=new rt(m||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Tn(m,"https"),hs(m),I?od(m.toString(),u):ld(m.toString(),u)}else xe(2);i.I=0,i.l&&i.l.pa(l),co(i),no(i)}n.bb=function(i){i?(this.j.info("Successfully pinged google.com"),xe(2)):(this.j.info("Failed to ping google.com"),xe(1))};function co(i){if(i.I=0,i.ja=[],i.l){const l=Ba(i.h);(l.length!=0||i.i.length!=0)&&(R(i.ja,l),R(i.ja,i.i),i.h.i.length=0,A(i.i),i.i.length=0),i.l.oa()}}function uo(i,l,u){var m=u instanceof rt?je(u):new rt(u);if(m.g!="")l&&(m.g=l+"."+m.g),wn(m,m.u);else{var I=o.location;m=I.protocol,l=l?l+"."+I.hostname:I.hostname,I=+I.port;const S=new rt(null);m&&Tn(S,m),l&&(S.g=l),I&&wn(S,I),u&&(S.h=u),m=S}return u=i.G,l=i.wa,u&&l&&ie(m,u,l),ie(m,"VER",i.ka),Dn(i,m),m}function ho(i,l,u){if(l&&!i.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=i.Aa&&!i.ma?new le(new kr({ab:u})):new le(i.ma),l.Fa(i.L),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function fo(){}n=fo.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function ys(){}ys.prototype.g=function(i,l){return new Le(i,l)};function Le(i,l){we.call(this),this.g=new to(l),this.l=i,this.h=l&&l.messageUrlParams||null,i=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(i?i["X-WebChannel-Content-Type"]=l.messageContentType:i={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(i?i["X-WebChannel-Client-Profile"]=l.sa:i={"X-WebChannel-Client-Profile":l.sa}),this.g.U=i,(i=l&&l.Qb)&&!y(i)&&(this.g.u=i),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!y(l)&&(this.g.G=l,i=this.h,i!==null&&l in i&&(i=this.h,l in i&&delete i[l])),this.j=new zt(this)}p(Le,we),Le.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Le.prototype.close=function(){Mr(this.g)},Le.prototype.o=function(i){var l=this.g;if(typeof i=="string"){var u={};u.__data__=i,i=u}else this.v&&(u={},u.__data__=wr(i),i=u);l.i.push(new Zu(l.Ya++,i)),l.I==3&&gs(l)},Le.prototype.N=function(){this.g.l=null,delete this.j,Mr(this.g),delete this.g,Le.Z.N.call(this)};function mo(i){Ir.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var l=i.__sm__;if(l){e:{for(const u in l){i=u;break e}i=void 0}(this.i=i)&&(i=this.i,l=l!==null&&i in l?l[i]:void 0),this.data=l}else this.data=i}p(mo,Ir);function po(){Ar.call(this),this.status=1}p(po,Ar);function zt(i){this.g=i}p(zt,fo),zt.prototype.ra=function(){Ve(this.g,"a")},zt.prototype.qa=function(i){Ve(this.g,new mo(i))},zt.prototype.pa=function(i){Ve(this.g,new po)},zt.prototype.oa=function(){Ve(this.g,"b")},ys.prototype.createWebChannel=ys.prototype.g,Le.prototype.send=Le.prototype.o,Le.prototype.open=Le.prototype.m,Le.prototype.close=Le.prototype.close,Xl=function(){return new ys},Yl=function(){return cs()},Kl=At,ii={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},us.NO_ERROR=0,us.TIMEOUT=8,us.HTTP_ERROR=6,Ss=us,Da.COMPLETE="complete",Wl=Da,Aa.EventType=gn,gn.OPEN="a",gn.CLOSE="b",gn.ERROR="c",gn.MESSAGE="d",we.prototype.listen=we.prototype.J,xn=Aa,le.prototype.listenOnce=le.prototype.K,le.prototype.getLastError=le.prototype.Ha,le.prototype.getLastErrorCode=le.prototype.ya,le.prototype.getStatus=le.prototype.ca,le.prototype.getResponseJson=le.prototype.La,le.prototype.getResponseText=le.prototype.la,le.prototype.send=le.prototype.ea,le.prototype.setWithCredentials=le.prototype.Fa,Jl=le}).apply(typeof Es<"u"?Es:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class Re{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Re.UNAUTHENTICATED=new Re(null),Re.GOOGLE_CREDENTIALS=new Re("google-credentials-uid"),Re.FIRST_PARTY=new Re("first-party-uid"),Re.MOCK_USER=new Re("mock-user");/**
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
 */let on="12.10.0";function nf(n){on=n}/**
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
 */const kt=new Bl("@firebase/firestore");function Qt(){return kt.logLevel}function $(n,...e){if(kt.logLevel<=ee.DEBUG){const t=e.map(Ri);kt.debug(`Firestore (${on}): ${n}`,...t)}}function et(n,...e){if(kt.logLevel<=ee.ERROR){const t=e.map(Ri);kt.error(`Firestore (${on}): ${n}`,...t)}}function Lt(n,...e){if(kt.logLevel<=ee.WARN){const t=e.map(Ri);kt.warn(`Firestore (${on}): ${n}`,...t)}}function Ri(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
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
 */function z(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Zl(n,s,t)}function Zl(n,e,t){let s=`FIRESTORE (${on}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw et(s),new Error(s)}function ne(n,e,t,s){let r="Unexpected state";typeof t=="string"?r=t:s=t,n||Zl(e,r,s)}function Q(n,e){return n}/**
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
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends an{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ft{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class ec{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Re.UNAUTHENTICATED)))}shutdown(){}}class rf{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class af{constructor(e){this.t=e,this.currentUser=Re.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ne(this.o===void 0,42304);let s=this.i;const r=d=>this.i!==s?(s=this.i,t(d)):Promise.resolve();let a=new ft;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new ft,e.enqueueRetryable((()=>r(this.currentUser)))};const o=()=>{const d=a;e.enqueueRetryable((async()=>{await d.promise,await r(this.currentUser)}))},c=d=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((d=>c(d))),setTimeout((()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?c(d):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new ft)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ne(typeof s.accessToken=="string",31837,{l:s}),new ec(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ne(e===null||typeof e=="string",2055,{h:e}),new Re(e)}}class of{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Re.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class lf{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new of(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Re.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Co{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cf{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,$h(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ne(this.o===void 0,3512);const s=a=>{a.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const o=a.token!==this.m;return this.m=a.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable((()=>s(a)))};const r=a=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((a=>r(a))),setTimeout((()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?r(a):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Co(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(ne(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Co(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function uf(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class Ci{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=uf(40);for(let a=0;a<r.length;++a)s.length<20&&r[a]<t&&(s+=e.charAt(r[a]%62))}return s}}function Y(n,e){return n<e?-1:n>e?1:0}function ai(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const r=n.charAt(s),a=e.charAt(s);if(r!==a)return zr(r)===zr(a)?Y(r,a):zr(r)?1:-1}return Y(n.length,e.length)}const df=55296,hf=57343;function zr(n){const e=n.charCodeAt(0);return e>=df&&e<=hf}function en(n,e,t){return n.length===e.length&&n.every(((s,r)=>t(s,e[r])))}/**
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
 */const Po="__name__";class He{constructor(e,t,s){t===void 0?t=0:t>e.length&&z(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&z(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return He.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof He?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const a=He.compareSegments(e.get(r),t.get(r));if(a!==0)return a}return Y(e.length,t.length)}static compareSegments(e,t){const s=He.isNumericId(e),r=He.isNumericId(t);return s&&!r?-1:!s&&r?1:s&&r?He.extractNumericId(e).compare(He.extractNumericId(t)):ai(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ht.fromString(e.substring(4,e.length-2))}}class re extends He{construct(e,t,s){return new re(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new O(C.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((r=>r.length>0)))}return new re(t)}static emptyPath(){return new re([])}}const ff=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ee extends He{construct(e,t,s){return new Ee(e,t,s)}static isValidIdentifier(e){return ff.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ee.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Po}static keyField(){return new Ee([Po])}static fromServerFormat(e){const t=[];let s="",r=0;const a=()=>{if(s.length===0)throw new O(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let o=!1;for(;r<e.length;){const c=e[r];if(c==="\\"){if(r+1===e.length)throw new O(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const d=e[r+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new O(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=d,r+=2}else c==="`"?(o=!o,r++):c!=="."||o?(s+=c,r++):(a(),r++)}if(a(),o)throw new O(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ee(t)}static emptyPath(){return new Ee([])}}/**
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
 */class U{constructor(e){this.path=e}static fromPath(e){return new U(re.fromString(e))}static fromName(e){return new U(re.fromString(e).popFirst(5))}static empty(){return new U(re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return re.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new U(new re(e.slice()))}}/**
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
 */function tc(n,e,t){if(!t)throw new O(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function mf(n,e,t,s){if(e===!0&&s===!0)throw new O(C.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Do(n){if(!U.isDocumentKey(n))throw new O(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Vo(n){if(U.isDocumentKey(n))throw new O(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function nc(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ys(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":z(12329,{type:typeof n})}function $e(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new O(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ys(n);throw new O(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function me(n,e){const t={typeString:n};return e&&(t.value=e),t}function Xn(n,e){if(!nc(n))throw new O(C.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const r=e[s].typeString,a="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const o=n[s];if(r&&typeof o!==r){t=`JSON field '${s}' must be a ${r}.`;break}if(a!==void 0&&o!==a.value){t=`Expected '${s}' field to equal '${a.value}'`;break}}if(t)throw new O(C.INVALID_ARGUMENT,t);return!0}/**
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
 */const xo=-62135596800,No=1e6;class ae{static now(){return ae.fromMillis(Date.now())}static fromDate(e){return ae.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*No);return new ae(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new O(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new O(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<xo)throw new O(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/No}_compareTo(e){return this.seconds===e.seconds?Y(this.nanoseconds,e.nanoseconds):Y(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ae._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Xn(e,ae._jsonSchema))return new ae(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-xo;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ae._jsonSchemaVersion="firestore/timestamp/1.0",ae._jsonSchema={type:me("string",ae._jsonSchemaVersion),seconds:me("number"),nanoseconds:me("number")};/**
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
 */class H{static fromTimestamp(e){return new H(e)}static min(){return new H(new ae(0,0))}static max(){return new H(new ae(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const zn=-1;function pf(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=H.fromTimestamp(s===1e9?new ae(t+1,0):new ae(t,s));return new pt(r,U.empty(),e)}function gf(n){return new pt(n.readTime,n.key,zn)}class pt{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new pt(H.min(),U.empty(),zn)}static max(){return new pt(H.max(),U.empty(),zn)}}function vf(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=U.comparator(n.documentKey,e.documentKey),t!==0?t:Y(n.largestBatchId,e.largestBatchId))}/**
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
 */const yf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _f{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function ln(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==yf)throw n;$("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&z(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new P(((s,r)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(s,r)},this.catchCallback=a=>{this.wrapFailure(t,a).next(s,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof P?t:P.resolve(t)}catch(t){return P.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):P.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):P.reject(t)}static resolve(e){return new P(((t,s)=>{t(e)}))}static reject(e){return new P(((t,s)=>{s(e)}))}static waitFor(e){return new P(((t,s)=>{let r=0,a=0,o=!1;e.forEach((c=>{++r,c.next((()=>{++a,o&&a===r&&t()}),(d=>s(d)))})),o=!0,a===r&&t()}))}static or(e){let t=P.resolve(!1);for(const s of e)t=t.next((r=>r?P.resolve(r):s()));return t}static forEach(e,t){const s=[];return e.forEach(((r,a)=>{s.push(t.call(this,r,a))})),this.waitFor(s)}static mapArray(e,t){return new P(((s,r)=>{const a=e.length,o=new Array(a);let c=0;for(let d=0;d<a;d++){const h=d;t(e[h]).next((f=>{o[h]=f,++c,c===a&&s(o)}),(f=>r(f)))}}))}static doWhile(e,t){return new P(((s,r)=>{const a=()=>{e()===!0?t().next((()=>{a()}),r):s()};a()}))}}function bf(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function cn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Xs{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Xs.ce=-1;/**
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
 */const Pi=-1;function Zs(n){return n==null}function $s(n){return n===0&&1/n==-1/0}function Ef(n){return typeof n=="number"&&Number.isInteger(n)&&!$s(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const sc="";function Tf(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=ko(e)),e=wf(n.get(t),e);return ko(e)}function wf(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const a=n.charAt(r);switch(a){case"\0":t+="";break;case sc:t+="";break;default:t+=a}}return t}function ko(n){return n+sc+""}/**
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
 */function Lo(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Tt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function rc(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class oe{constructor(e,t){this.comparator=e,this.root=t||be.EMPTY}insert(e,t){return new oe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,be.BLACK,null,null))}remove(e){return new oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,be.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ts(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ts(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ts(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ts(this.root,e,this.comparator,!0)}}class Ts{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?s(e.key,t):1,t&&r&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class be{constructor(e,t,s,r,a){this.key=e,this.value=t,this.color=s??be.RED,this.left=r??be.EMPTY,this.right=a??be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,a){return new be(e??this.key,t??this.value,s??this.color,r??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const a=s(e,r.key);return r=a<0?r.copy(null,null,null,r.left.insert(e,t,s),null):a===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return be.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw z(43730,{key:this.key,value:this.value});if(this.right.isRed())throw z(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw z(27949);return e+(this.isRed()?0:1)}}be.EMPTY=null,be.RED=!0,be.BLACK=!1;be.EMPTY=new class{constructor(){this.size=0}get key(){throw z(57766)}get value(){throw z(16141)}get color(){throw z(16727)}get left(){throw z(29726)}get right(){throw z(36894)}copy(e,t,s,r,a){return this}insert(e,t,s){return new be(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ve{constructor(e){this.comparator=e,this.data=new oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Mo(this.data.getIterator())}getIteratorFrom(e){return new Mo(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof ve)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,a=s.getNext().key;if(this.comparator(r,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new ve(this.comparator);return t.data=e,t}}class Mo{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Oe{constructor(e){this.fields=e,e.sort(Ee.comparator)}static empty(){return new Oe([])}unionWith(e){let t=new ve(Ee.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Oe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return en(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class Te{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(r){try{return atob(r)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new ic("Invalid base64 string: "+a):a}})(e);return new Te(t)}static fromUint8Array(e){const t=(function(r){let a="";for(let o=0;o<r.length;++o)a+=String.fromCharCode(r[o]);return a})(e);return new Te(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Y(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Te.EMPTY_BYTE_STRING=new Te("");const If=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gt(n){if(ne(!!n,39018),typeof n=="string"){let e=0;const t=If.exec(n);if(ne(!!t,46558,{timestamp:n}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ce(n.seconds),nanos:ce(n.nanos)}}function ce(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function vt(n){return typeof n=="string"?Te.fromBase64String(n):Te.fromUint8Array(n)}/**
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
 */const ac="server_timestamp",oc="__type__",lc="__previous_value__",cc="__local_write_time__";function Di(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[oc])==null?void 0:s.stringValue)===ac}function er(n){const e=n.mapValue.fields[lc];return Di(e)?er(e):e}function Gn(n){const e=gt(n.mapValue.fields[cc].timestampValue);return new ae(e.seconds,e.nanos)}/**
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
 */class Af{constructor(e,t,s,r,a,o,c,d,h,f,p){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=a,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=d,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=p}}const qs="(default)";class Hn{constructor(e,t){this.projectId=e,this.database=t||qs}static empty(){return new Hn("","")}get isDefaultDatabase(){return this.database===qs}isEqual(e){return e instanceof Hn&&e.projectId===this.projectId&&e.database===this.database}}function Sf(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new O(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Hn(n.options.projectId,e)}/**
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
 */const uc="__type__",Rf="__max__",ws={mapValue:{}},dc="__vector__",Bs="value";function yt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Di(n)?4:Pf(n)?9007199254740991:Cf(n)?10:11:z(28295,{value:n})}function Ye(n,e){if(n===e)return!0;const t=yt(n);if(t!==yt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Gn(n).isEqual(Gn(e));case 3:return(function(r,a){if(typeof r.timestampValue=="string"&&typeof a.timestampValue=="string"&&r.timestampValue.length===a.timestampValue.length)return r.timestampValue===a.timestampValue;const o=gt(r.timestampValue),c=gt(a.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(r,a){return vt(r.bytesValue).isEqual(vt(a.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(r,a){return ce(r.geoPointValue.latitude)===ce(a.geoPointValue.latitude)&&ce(r.geoPointValue.longitude)===ce(a.geoPointValue.longitude)})(n,e);case 2:return(function(r,a){if("integerValue"in r&&"integerValue"in a)return ce(r.integerValue)===ce(a.integerValue);if("doubleValue"in r&&"doubleValue"in a){const o=ce(r.doubleValue),c=ce(a.doubleValue);return o===c?$s(o)===$s(c):isNaN(o)&&isNaN(c)}return!1})(n,e);case 9:return en(n.arrayValue.values||[],e.arrayValue.values||[],Ye);case 10:case 11:return(function(r,a){const o=r.mapValue.fields||{},c=a.mapValue.fields||{};if(Lo(o)!==Lo(c))return!1;for(const d in o)if(o.hasOwnProperty(d)&&(c[d]===void 0||!Ye(o[d],c[d])))return!1;return!0})(n,e);default:return z(52216,{left:n})}}function Qn(n,e){return(n.values||[]).find((t=>Ye(t,e)))!==void 0}function tn(n,e){if(n===e)return 0;const t=yt(n),s=yt(e);if(t!==s)return Y(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Y(n.booleanValue,e.booleanValue);case 2:return(function(a,o){const c=ce(a.integerValue||a.doubleValue),d=ce(o.integerValue||o.doubleValue);return c<d?-1:c>d?1:c===d?0:isNaN(c)?isNaN(d)?0:-1:1})(n,e);case 3:return Oo(n.timestampValue,e.timestampValue);case 4:return Oo(Gn(n),Gn(e));case 5:return ai(n.stringValue,e.stringValue);case 6:return(function(a,o){const c=vt(a),d=vt(o);return c.compareTo(d)})(n.bytesValue,e.bytesValue);case 7:return(function(a,o){const c=a.split("/"),d=o.split("/");for(let h=0;h<c.length&&h<d.length;h++){const f=Y(c[h],d[h]);if(f!==0)return f}return Y(c.length,d.length)})(n.referenceValue,e.referenceValue);case 8:return(function(a,o){const c=Y(ce(a.latitude),ce(o.latitude));return c!==0?c:Y(ce(a.longitude),ce(o.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Fo(n.arrayValue,e.arrayValue);case 10:return(function(a,o){var _,A,R,V;const c=a.fields||{},d=o.fields||{},h=(_=c[Bs])==null?void 0:_.arrayValue,f=(A=d[Bs])==null?void 0:A.arrayValue,p=Y(((R=h==null?void 0:h.values)==null?void 0:R.length)||0,((V=f==null?void 0:f.values)==null?void 0:V.length)||0);return p!==0?p:Fo(h,f)})(n.mapValue,e.mapValue);case 11:return(function(a,o){if(a===ws.mapValue&&o===ws.mapValue)return 0;if(a===ws.mapValue)return 1;if(o===ws.mapValue)return-1;const c=a.fields||{},d=Object.keys(c),h=o.fields||{},f=Object.keys(h);d.sort(),f.sort();for(let p=0;p<d.length&&p<f.length;++p){const _=ai(d[p],f[p]);if(_!==0)return _;const A=tn(c[d[p]],h[f[p]]);if(A!==0)return A}return Y(d.length,f.length)})(n.mapValue,e.mapValue);default:throw z(23264,{he:t})}}function Oo(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Y(n,e);const t=gt(n),s=gt(e),r=Y(t.seconds,s.seconds);return r!==0?r:Y(t.nanos,s.nanos)}function Fo(n,e){const t=n.values||[],s=e.values||[];for(let r=0;r<t.length&&r<s.length;++r){const a=tn(t[r],s[r]);if(a)return a}return Y(t.length,s.length)}function nn(n){return oi(n)}function oi(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=gt(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return vt(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return U.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",r=!0;for(const a of t.values||[])r?r=!1:s+=",",s+=oi(a);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let r="{",a=!0;for(const o of s)a?a=!1:r+=",",r+=`${o}:${oi(t.fields[o])}`;return r+"}"})(n.mapValue):z(61005,{value:n})}function Rs(n){switch(yt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=er(n);return e?16+Rs(e):16;case 5:return 2*n.stringValue.length;case 6:return vt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((r,a)=>r+Rs(a)),0)})(n.arrayValue);case 10:case 11:return(function(s){let r=0;return Tt(s.fields,((a,o)=>{r+=a.length+Rs(o)})),r})(n.mapValue);default:throw z(13486,{value:n})}}function $o(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function li(n){return!!n&&"integerValue"in n}function Vi(n){return!!n&&"arrayValue"in n}function qo(n){return!!n&&"nullValue"in n}function Bo(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Cs(n){return!!n&&"mapValue"in n}function Cf(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[uc])==null?void 0:s.stringValue)===dc}function On(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Tt(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=On(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=On(n.arrayValue.values[t]);return e}return{...n}}function Pf(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Rf}/**
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
 */class ke{constructor(e){this.value=e}static empty(){return new ke({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Cs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=On(t)}setAll(e){let t=Ee.emptyPath(),s={},r=[];e.forEach(((o,c)=>{if(!t.isImmediateParentOf(c)){const d=this.getFieldsMap(t);this.applyChanges(d,s,r),s={},r=[],t=c.popLast()}o?s[c.lastSegment()]=On(o):r.push(c.lastSegment())}));const a=this.getFieldsMap(t);this.applyChanges(a,s,r)}delete(e){const t=this.field(e.popLast());Cs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ye(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];Cs(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){Tt(t,((r,a)=>e[r]=a));for(const r of s)delete e[r]}clone(){return new ke(On(this.value))}}function hc(n){const e=[];return Tt(n.fields,((t,s)=>{const r=new Ee([t]);if(Cs(s)){const a=hc(s.mapValue).fields;if(a.length===0)e.push(r);else for(const o of a)e.push(r.child(o))}else e.push(r)})),new Oe(e)}/**
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
 */class Ce{constructor(e,t,s,r,a,o,c){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=a,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Ce(e,0,H.min(),H.min(),H.min(),ke.empty(),0)}static newFoundDocument(e,t,s,r){return new Ce(e,1,t,H.min(),s,r,0)}static newNoDocument(e,t){return new Ce(e,2,t,H.min(),H.min(),ke.empty(),0)}static newUnknownDocument(e,t){return new Ce(e,3,t,H.min(),H.min(),ke.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ke.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ke.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ce&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ce(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Us{constructor(e,t){this.position=e,this.inclusive=t}}function Uo(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const a=e[r],o=n.position[r];if(a.field.isKeyField()?s=U.comparator(U.fromName(o.referenceValue),t.key):s=tn(o,t.data.field(a.field)),a.dir==="desc"&&(s*=-1),s!==0)break}return s}function jo(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ye(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Jn{constructor(e,t="asc"){this.field=e,this.dir=t}}function Df(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class fc{}class fe extends fc{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new xf(e,t,s):t==="array-contains"?new Lf(e,s):t==="in"?new Mf(e,s):t==="not-in"?new Of(e,s):t==="array-contains-any"?new Ff(e,s):new fe(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new Nf(e,s):new kf(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(tn(t,this.value)):t!==null&&yt(this.value)===yt(t)&&this.matchesComparison(tn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ue extends fc{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Ue(e,t)}matches(e){return mc(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function mc(n){return n.op==="and"}function pc(n){return Vf(n)&&mc(n)}function Vf(n){for(const e of n.filters)if(e instanceof Ue)return!1;return!0}function ci(n){if(n instanceof fe)return n.field.canonicalString()+n.op.toString()+nn(n.value);if(pc(n))return n.filters.map((e=>ci(e))).join(",");{const e=n.filters.map((t=>ci(t))).join(",");return`${n.op}(${e})`}}function gc(n,e){return n instanceof fe?(function(s,r){return r instanceof fe&&s.op===r.op&&s.field.isEqual(r.field)&&Ye(s.value,r.value)})(n,e):n instanceof Ue?(function(s,r){return r instanceof Ue&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce(((a,o,c)=>a&&gc(o,r.filters[c])),!0):!1})(n,e):void z(19439)}function vc(n){return n instanceof fe?(function(t){return`${t.field.canonicalString()} ${t.op} ${nn(t.value)}`})(n):n instanceof Ue?(function(t){return t.op.toString()+" {"+t.getFilters().map(vc).join(" ,")+"}"})(n):"Filter"}class xf extends fe{constructor(e,t,s){super(e,t,s),this.key=U.fromName(s.referenceValue)}matches(e){const t=U.comparator(e.key,this.key);return this.matchesComparison(t)}}class Nf extends fe{constructor(e,t){super(e,"in",t),this.keys=yc("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class kf extends fe{constructor(e,t){super(e,"not-in",t),this.keys=yc("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function yc(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>U.fromName(s.referenceValue)))}class Lf extends fe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Vi(t)&&Qn(t.arrayValue,this.value)}}class Mf extends fe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Qn(this.value.arrayValue,t)}}class Of extends fe{constructor(e,t){super(e,"not-in",t)}matches(e){if(Qn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Qn(this.value.arrayValue,t)}}class Ff extends fe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Vi(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Qn(this.value.arrayValue,s)))}}/**
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
 */class $f{constructor(e,t=null,s=[],r=[],a=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=a,this.startAt=o,this.endAt=c,this.Te=null}}function zo(n,e=null,t=[],s=[],r=null,a=null,o=null){return new $f(n,e,t,s,r,a,o)}function xi(n){const e=Q(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>ci(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(a){return a.field.canonicalString()+a.dir})(s))).join(","),Zs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>nn(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>nn(s))).join(",")),e.Te=t}return e.Te}function Ni(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Df(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!gc(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!jo(n.startAt,e.startAt)&&jo(n.endAt,e.endAt)}function ui(n){return U.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class un{constructor(e,t=null,s=[],r=[],a=null,o="F",c=null,d=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=a,this.limitType=o,this.startAt=c,this.endAt=d,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function qf(n,e,t,s,r,a,o,c){return new un(n,e,t,s,r,a,o,c)}function ki(n){return new un(n)}function Go(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Bf(n){return U.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function _c(n){return n.collectionGroup!==null}function Fn(n){const e=Q(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const a of e.explicitOrderBy)e.Ie.push(a),t.add(a.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new ve(Ee.comparator);return o.filters.forEach((d=>{d.getFlattenedFilters().forEach((h=>{h.isInequality()&&(c=c.add(h.field))}))})),c})(e).forEach((a=>{t.has(a.canonicalString())||a.isKeyField()||e.Ie.push(new Jn(a,s))})),t.has(Ee.keyField().canonicalString())||e.Ie.push(new Jn(Ee.keyField(),s))}return e.Ie}function Qe(n){const e=Q(n);return e.Ee||(e.Ee=Uf(e,Fn(n))),e.Ee}function Uf(n,e){if(n.limitType==="F")return zo(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((r=>{const a=r.dir==="desc"?"asc":"desc";return new Jn(r.field,a)}));const t=n.endAt?new Us(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Us(n.startAt.position,n.startAt.inclusive):null;return zo(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function di(n,e){const t=n.filters.concat([e]);return new un(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function jf(n,e){const t=n.explicitOrderBy.concat([e]);return new un(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function js(n,e,t){return new un(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function tr(n,e){return Ni(Qe(n),Qe(e))&&n.limitType===e.limitType}function bc(n){return`${xi(Qe(n))}|lt:${n.limitType}`}function Jt(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((r=>vc(r))).join(", ")}]`),Zs(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((r=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(r))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((r=>nn(r))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((r=>nn(r))).join(",")),`Target(${s})`})(Qe(n))}; limitType=${n.limitType})`}function nr(n,e){return e.isFoundDocument()&&(function(s,r){const a=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(a):U.isDocumentKey(s.path)?s.path.isEqual(a):s.path.isImmediateParentOf(a)})(n,e)&&(function(s,r){for(const a of Fn(s))if(!a.field.isKeyField()&&r.data.field(a.field)===null)return!1;return!0})(n,e)&&(function(s,r){for(const a of s.filters)if(!a.matches(r))return!1;return!0})(n,e)&&(function(s,r){return!(s.startAt&&!(function(o,c,d){const h=Uo(o,c,d);return o.inclusive?h<=0:h<0})(s.startAt,Fn(s),r)||s.endAt&&!(function(o,c,d){const h=Uo(o,c,d);return o.inclusive?h>=0:h>0})(s.endAt,Fn(s),r))})(n,e)}function zf(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Ec(n){return(e,t)=>{let s=!1;for(const r of Fn(n)){const a=Gf(r,e,t);if(a!==0)return a;s=s||r.field.isKeyField()}return 0}}function Gf(n,e,t){const s=n.field.isKeyField()?U.comparator(e.key,t.key):(function(a,o,c){const d=o.data.field(a),h=c.data.field(a);return d!==null&&h!==null?tn(d,h):z(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return z(19790,{direction:n.dir})}}/**
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
 */class $t{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,a]of s)if(this.equalsFn(r,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let a=0;a<r.length;a++)if(this.equalsFn(r[a][0],e))return void(r[a]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Tt(this.inner,((t,s)=>{for(const[r,a]of s)e(r,a)}))}isEmpty(){return rc(this.inner)}size(){return this.innerSize}}/**
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
 */const Hf=new oe(U.comparator);function tt(){return Hf}const Tc=new oe(U.comparator);function Nn(...n){let e=Tc;for(const t of n)e=e.insert(t.key,t);return e}function wc(n){let e=Tc;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function Vt(){return $n()}function Ic(){return $n()}function $n(){return new $t((n=>n.toString()),((n,e)=>n.isEqual(e)))}const Qf=new oe(U.comparator),Jf=new ve(U.comparator);function X(...n){let e=Jf;for(const t of n)e=e.add(t);return e}const Wf=new ve(Y);function Kf(){return Wf}/**
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
 */function Li(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$s(e)?"-0":e}}function Ac(n){return{integerValue:""+n}}function Yf(n,e){return Ef(e)?Ac(e):Li(n,e)}/**
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
 */class sr{constructor(){this._=void 0}}function Xf(n,e,t){return n instanceof Wn?(function(r,a){const o={fields:{[oc]:{stringValue:ac},[cc]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return a&&Di(a)&&(a=er(a)),a&&(o.fields[lc]=a),{mapValue:o}})(t,e):n instanceof Kn?Rc(n,e):n instanceof Yn?Cc(n,e):(function(r,a){const o=Sc(r,a),c=Ho(o)+Ho(r.Ae);return li(o)&&li(r.Ae)?Ac(c):Li(r.serializer,c)})(n,e)}function Zf(n,e,t){return n instanceof Kn?Rc(n,e):n instanceof Yn?Cc(n,e):t}function Sc(n,e){return n instanceof zs?(function(s){return li(s)||(function(a){return!!a&&"doubleValue"in a})(s)})(e)?e:{integerValue:0}:null}class Wn extends sr{}class Kn extends sr{constructor(e){super(),this.elements=e}}function Rc(n,e){const t=Pc(e);for(const s of n.elements)t.some((r=>Ye(r,s)))||t.push(s);return{arrayValue:{values:t}}}class Yn extends sr{constructor(e){super(),this.elements=e}}function Cc(n,e){let t=Pc(e);for(const s of n.elements)t=t.filter((r=>!Ye(r,s)));return{arrayValue:{values:t}}}class zs extends sr{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Ho(n){return ce(n.integerValue||n.doubleValue)}function Pc(n){return Vi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class em{constructor(e,t){this.field=e,this.transform=t}}function tm(n,e){return n.field.isEqual(e.field)&&(function(s,r){return s instanceof Kn&&r instanceof Kn||s instanceof Yn&&r instanceof Yn?en(s.elements,r.elements,Ye):s instanceof zs&&r instanceof zs?Ye(s.Ae,r.Ae):s instanceof Wn&&r instanceof Wn})(n.transform,e.transform)}class nm{constructor(e,t){this.version=e,this.transformResults=t}}class qe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new qe}static exists(e){return new qe(void 0,e)}static updateTime(e){return new qe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ps(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class rr{}function Dc(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Mi(n.key,qe.none()):new Zn(n.key,n.data,qe.none());{const t=n.data,s=ke.empty();let r=new ve(Ee.comparator);for(let a of e.fields)if(!r.has(a)){let o=t.field(a);o===null&&a.length>1&&(a=a.popLast(),o=t.field(a)),o===null?s.delete(a):s.set(a,o),r=r.add(a)}return new wt(n.key,s,new Oe(r.toArray()),qe.none())}}function sm(n,e,t){n instanceof Zn?(function(r,a,o){const c=r.value.clone(),d=Jo(r.fieldTransforms,a,o.transformResults);c.setAll(d),a.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(n,e,t):n instanceof wt?(function(r,a,o){if(!Ps(r.precondition,a))return void a.convertToUnknownDocument(o.version);const c=Jo(r.fieldTransforms,a,o.transformResults),d=a.data;d.setAll(Vc(r)),d.setAll(c),a.convertToFoundDocument(o.version,d).setHasCommittedMutations()})(n,e,t):(function(r,a,o){a.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function qn(n,e,t,s){return n instanceof Zn?(function(a,o,c,d){if(!Ps(a.precondition,o))return c;const h=a.value.clone(),f=Wo(a.fieldTransforms,d,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null})(n,e,t,s):n instanceof wt?(function(a,o,c,d){if(!Ps(a.precondition,o))return c;const h=Wo(a.fieldTransforms,d,o),f=o.data;return f.setAll(Vc(a)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map((p=>p.field)))})(n,e,t,s):(function(a,o,c){return Ps(a.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(n,e,t)}function rm(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),a=Sc(s.transform,r||null);a!=null&&(t===null&&(t=ke.empty()),t.set(s.field,a))}return t||null}function Qo(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&en(s,r,((a,o)=>tm(a,o)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Zn extends rr{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class wt extends rr{constructor(e,t,s,r,a=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function Vc(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function Jo(n,e,t){const s=new Map;ne(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let r=0;r<t.length;r++){const a=n[r],o=a.transform,c=e.data.field(a.field);s.set(a.field,Zf(o,c,t[r]))}return s}function Wo(n,e,t){const s=new Map;for(const r of n){const a=r.transform,o=t.data.field(r.field);s.set(r.field,Xf(a,o,e))}return s}class Mi extends rr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class im extends rr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class am{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const a=this.mutations[r];a.key.isEqual(e.key)&&sm(a,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=qn(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=qn(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Ic();return this.mutations.forEach((r=>{const a=e.get(r.key),o=a.overlayedDocument;let c=this.applyToLocalView(o,a.mutatedFields);c=t.has(r.key)?null:c;const d=Dc(o,c);d!==null&&s.set(r.key,d),o.isValidDocument()||o.convertToNoDocument(H.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),X())}isEqual(e){return this.batchId===e.batchId&&en(this.mutations,e.mutations,((t,s)=>Qo(t,s)))&&en(this.baseMutations,e.baseMutations,((t,s)=>Qo(t,s)))}}class Oi{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){ne(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let r=(function(){return Qf})();const a=e.mutations;for(let o=0;o<a.length;o++)r=r.insert(a[o].key,s[o].version);return new Oi(e,t,s,r)}}/**
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
 */class om{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class lm{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var he,Z;function cm(n){switch(n){case C.OK:return z(64938);case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return z(15467,{code:n})}}function xc(n){if(n===void 0)return et("GRPC error has no .code"),C.UNKNOWN;switch(n){case he.OK:return C.OK;case he.CANCELLED:return C.CANCELLED;case he.UNKNOWN:return C.UNKNOWN;case he.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case he.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case he.INTERNAL:return C.INTERNAL;case he.UNAVAILABLE:return C.UNAVAILABLE;case he.UNAUTHENTICATED:return C.UNAUTHENTICATED;case he.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case he.NOT_FOUND:return C.NOT_FOUND;case he.ALREADY_EXISTS:return C.ALREADY_EXISTS;case he.PERMISSION_DENIED:return C.PERMISSION_DENIED;case he.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case he.ABORTED:return C.ABORTED;case he.OUT_OF_RANGE:return C.OUT_OF_RANGE;case he.UNIMPLEMENTED:return C.UNIMPLEMENTED;case he.DATA_LOSS:return C.DATA_LOSS;default:return z(39323,{code:n})}}(Z=he||(he={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function um(){return new TextEncoder}/**
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
 */const dm=new ht([4294967295,4294967295],0);function Ko(n){const e=um().encode(n),t=new Ql;return t.update(e),new Uint8Array(t.digest())}function Yo(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new ht([t,s],0),new ht([r,a],0)]}class Fi{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new kn(`Invalid padding: ${t}`);if(s<0)throw new kn(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new kn(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new kn(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=ht.fromNumber(this.ge)}ye(e,t,s){let r=e.add(t.multiply(ht.fromNumber(s)));return r.compare(dm)===1&&(r=new ht([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Ko(e),[s,r]=Yo(t);for(let a=0;a<this.hashCount;a++){const o=this.ye(s,r,a);if(!this.we(o))return!1}return!0}static create(e,t,s){const r=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),o=new Fi(a,r,t);return s.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const t=Ko(e),[s,r]=Yo(t);for(let a=0;a<this.hashCount;a++){const o=this.ye(s,r,a);this.be(o)}}be(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class kn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ir{constructor(e,t,s,r,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const r=new Map;return r.set(e,es.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new ir(H.min(),r,new oe(Y),tt(),X())}}class es{constructor(e,t,s,r,a){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new es(s,t,X(),X(),X())}}/**
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
 */class Ds{constructor(e,t,s,r){this.Se=e,this.removedTargetIds=t,this.key=s,this.De=r}}class Nc{constructor(e,t){this.targetId=e,this.Ce=t}}class kc{constructor(e,t,s=Te.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class Xo{constructor(){this.ve=0,this.Fe=Zo(),this.Me=Te.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=X(),t=X(),s=X();return this.Fe.forEach(((r,a)=>{switch(a){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:z(38017,{changeType:a})}})),new es(this.Me,this.xe,e,t,s)}Ke(){this.Oe=!1,this.Fe=Zo()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,ne(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class hm{constructor(e){this.Ge=e,this.ze=new Map,this.je=tt(),this.He=Is(),this.Je=Is(),this.Ze=new oe(Y)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.Ke(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:z(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,r)=>{this.rt(r)&&t(r)}))}st(e){const t=e.targetId,s=e.Ce.count,r=this.ot(t);if(r){const a=r.target;if(ui(a))if(s===0){const o=new U(a.path);this.et(t,o,Ce.newNoDocument(o,H.min()))}else ne(s===1,20013,{expectedCount:s});else{const o=this._t(t);if(o!==s){const c=this.ut(e),d=c?this.ct(c,e,o):1;if(d!==0){this.it(t);const h=d===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:a=0}=t;let o,c;try{o=vt(s).toUint8Array()}catch(d){if(d instanceof ic)return Lt("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw d}try{c=new Fi(o,r,a)}catch(d){return Lt(d instanceof kn?"BloomFilter error: ":"Applying bloom filter failed: ",d),null}return c.ge===0?null:c}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let r=0;return s.forEach((a=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${a.path.canonicalString()}`;e.mightContain(c)||(this.et(t,a,null),r++)})),r}Tt(e){const t=new Map;this.ze.forEach(((a,o)=>{const c=this.ot(o);if(c){if(a.current&&ui(c.target)){const d=new U(c.target.path);this.It(d).has(o)||this.Et(o,d)||this.et(o,d,Ce.newNoDocument(d,e))}a.Be&&(t.set(o,a.ke()),a.Ke())}}));let s=X();this.Je.forEach(((a,o)=>{let c=!0;o.forEachWhile((d=>{const h=this.ot(d);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(s=s.add(a))})),this.je.forEach(((a,o)=>o.setReadTime(e)));const r=new ir(e,t,this.Ze,this.je,s);return this.je=tt(),this.He=Is(),this.Je=Is(),this.Ze=new oe(Y),r}Ye(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,s),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const r=this.nt(e);this.Et(e,t)?r.qe(t,1):r.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Xo,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new ve(Y),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new ve(Y),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||$("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Xo),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Is(){return new oe(U.comparator)}function Zo(){return new oe(U.comparator)}const fm={asc:"ASCENDING",desc:"DESCENDING"},mm={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},pm={and:"AND",or:"OR"};class gm{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function hi(n,e){return n.useProto3Json||Zs(e)?e:{value:e}}function Gs(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Lc(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function vm(n,e){return Gs(n,e.toTimestamp())}function Je(n){return ne(!!n,49232),H.fromTimestamp((function(t){const s=gt(t);return new ae(s.seconds,s.nanos)})(n))}function $i(n,e){return fi(n,e).canonicalString()}function fi(n,e){const t=(function(r){return new re(["projects",r.projectId,"databases",r.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Mc(n){const e=re.fromString(n);return ne(Bc(e),10190,{key:e.toString()}),e}function mi(n,e){return $i(n.databaseId,e.path)}function Gr(n,e){const t=Mc(e);if(t.get(1)!==n.databaseId.projectId)throw new O(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new O(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new U(Fc(t))}function Oc(n,e){return $i(n.databaseId,e)}function ym(n){const e=Mc(n);return e.length===4?re.emptyPath():Fc(e)}function pi(n){return new re(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Fc(n){return ne(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function el(n,e,t){return{name:mi(n,e),fields:t.value.mapValue.fields}}function _m(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:z(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],a=(function(h,f){return h.useProto3Json?(ne(f===void 0||typeof f=="string",58123),Te.fromBase64String(f||"")):(ne(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Te.fromUint8Array(f||new Uint8Array))})(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(h){const f=h.code===void 0?C.UNKNOWN:xc(h.code);return new O(f,h.message||"")})(o);t=new kc(s,r,a,c||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Gr(n,s.document.name),a=Je(s.document.updateTime),o=s.document.createTime?Je(s.document.createTime):H.min(),c=new ke({mapValue:{fields:s.document.fields}}),d=Ce.newFoundDocument(r,a,o,c),h=s.targetIds||[],f=s.removedTargetIds||[];t=new Ds(h,f,d.key,d)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Gr(n,s.document),a=s.readTime?Je(s.readTime):H.min(),o=Ce.newNoDocument(r,a),c=s.removedTargetIds||[];t=new Ds([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Gr(n,s.document),a=s.removedTargetIds||[];t=new Ds([],a,r,null)}else{if(!("filter"in e))return z(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:a}=s,o=new lm(r,a),c=s.targetId;t=new Nc(c,o)}}return t}function bm(n,e){let t;if(e instanceof Zn)t={update:el(n,e.key,e.value)};else if(e instanceof Mi)t={delete:mi(n,e.key)};else if(e instanceof wt)t={update:el(n,e.key,e.data),updateMask:Pm(e.fieldMask)};else{if(!(e instanceof im))return z(16599,{dt:e.type});t={verify:mi(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(a,o){const c=o.transform;if(c instanceof Wn)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Kn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Yn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof zs)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw z(20930,{transform:o.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(r,a){return a.updateTime!==void 0?{updateTime:vm(r,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:z(27497)})(n,e.precondition)),t}function Em(n,e){return n&&n.length>0?(ne(e!==void 0,14353),n.map((t=>(function(r,a){let o=r.updateTime?Je(r.updateTime):Je(a);return o.isEqual(H.min())&&(o=Je(a)),new nm(o,r.transformResults||[])})(t,e)))):[]}function Tm(n,e){return{documents:[Oc(n,e.path)]}}function wm(n,e){const t={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Oc(n,r);const a=(function(h){if(h.length!==0)return qc(Ue.create(h,"and"))})(e.filters);a&&(t.structuredQuery.where=a);const o=(function(h){if(h.length!==0)return h.map((f=>(function(_){return{field:Wt(_.field),direction:Sm(_.dir)}})(f)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=hi(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{ft:t,parent:r}}function Im(n){let e=ym(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){ne(s===1,65062);const f=t.from[0];f.allDescendants?r=f.collectionId:e=e.child(f.collectionId)}let a=[];t.where&&(a=(function(p){const _=$c(p);return _ instanceof Ue&&pc(_)?_.getFilters():[_]})(t.where));let o=[];t.orderBy&&(o=(function(p){return p.map((_=>(function(R){return new Jn(Kt(R.field),(function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(R.direction))})(_)))})(t.orderBy));let c=null;t.limit&&(c=(function(p){let _;return _=typeof p=="object"?p.value:p,Zs(_)?null:_})(t.limit));let d=null;t.startAt&&(d=(function(p){const _=!!p.before,A=p.values||[];return new Us(A,_)})(t.startAt));let h=null;return t.endAt&&(h=(function(p){const _=!p.before,A=p.values||[];return new Us(A,_)})(t.endAt)),qf(e,r,o,a,c,"F",d,h)}function Am(n,e){const t=(function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return z(28987,{purpose:r})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function $c(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Kt(t.unaryFilter.field);return fe.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=Kt(t.unaryFilter.field);return fe.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=Kt(t.unaryFilter.field);return fe.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Kt(t.unaryFilter.field);return fe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return z(61313);default:return z(60726)}})(n):n.fieldFilter!==void 0?(function(t){return fe.create(Kt(t.fieldFilter.field),(function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return z(58110);default:return z(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Ue.create(t.compositeFilter.filters.map((s=>$c(s))),(function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return z(1026)}})(t.compositeFilter.op))})(n):z(30097,{filter:n})}function Sm(n){return fm[n]}function Rm(n){return mm[n]}function Cm(n){return pm[n]}function Wt(n){return{fieldPath:n.canonicalString()}}function Kt(n){return Ee.fromServerFormat(n.fieldPath)}function qc(n){return n instanceof fe?(function(t){if(t.op==="=="){if(Bo(t.value))return{unaryFilter:{field:Wt(t.field),op:"IS_NAN"}};if(qo(t.value))return{unaryFilter:{field:Wt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Bo(t.value))return{unaryFilter:{field:Wt(t.field),op:"IS_NOT_NAN"}};if(qo(t.value))return{unaryFilter:{field:Wt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wt(t.field),op:Rm(t.op),value:t.value}}})(n):n instanceof Ue?(function(t){const s=t.getFilters().map((r=>qc(r)));return s.length===1?s[0]:{compositeFilter:{op:Cm(t.op),filters:s}}})(n):z(54877,{filter:n})}function Pm(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Bc(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Uc(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
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
 */class ct{constructor(e,t,s,r,a=H.min(),o=H.min(),c=Te.EMPTY_BYTE_STRING,d=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=d}withSequenceNumber(e){return new ct(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ct(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ct(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ct(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Dm{constructor(e){this.yt=e}}function Vm(n){const e=Im({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?js(e,e.limit,"L"):e}/**
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
 */class xm{constructor(){this.Sn=new Nm}addToCollectionParentIndex(e,t){return this.Sn.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(pt.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(pt.min())}updateCollectionGroup(e,t,s){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}}class Nm{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new ve(re.comparator),a=!r.has(s);return this.index[t]=r.add(s),a}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new ve(re.comparator)).toArray()}}/**
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
 */const tl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},jc=41943040;class Ne{static withCacheSize(e){return new Ne(e,Ne.DEFAULT_COLLECTION_PERCENTILE,Ne.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Ne.DEFAULT_COLLECTION_PERCENTILE=10,Ne.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ne.DEFAULT=new Ne(jc,Ne.DEFAULT_COLLECTION_PERCENTILE,Ne.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ne.DISABLED=new Ne(-1,0,0);/**
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
 */class sn{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new sn(0)}static ar(){return new sn(-1)}}/**
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
 */const nl="LruGarbageCollector",km=1048576;function sl([n,e],[t,s]){const r=Y(n,t);return r===0?Y(e,s):r}class Lm{constructor(e){this.Pr=e,this.buffer=new ve(sl),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();sl(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Mm{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){$(nl,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){cn(t)?$(nl,"Ignoring IndexedDB error during garbage collection: ",t):await ln(t)}await this.Ar(3e5)}))}}class Om{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return P.resolve(Xs.ce);const s=new Lm(t);return this.Vr.forEachTarget(e,(r=>s.Er(r.sequenceNumber))).next((()=>this.Vr.mr(e,(r=>s.Er(r))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?($("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(tl)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?($("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),tl):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let s,r,a,o,c,d,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?($("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),r=this.params.maximumSequenceNumbersToCollect):r=p,o=Date.now(),this.nthSequenceNumber(e,r)))).next((p=>(s=p,c=Date.now(),this.removeTargets(e,s,t)))).next((p=>(a=p,d=Date.now(),this.removeOrphanedDocuments(e,s)))).next((p=>(h=Date.now(),Qt()<=ee.DEBUG&&$("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${r} in `+(c-o)+`ms
	Removed ${a} targets in `+(d-c)+`ms
	Removed ${p} documents in `+(h-d)+`ms
Total Duration: ${h-f}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:a,documentsRemoved:p}))))}}function Fm(n,e){return new Om(n,e)}/**
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
 */class $m{constructor(){this.changes=new $t((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ce.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?P.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class qm{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Bm{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(s=r,this.remoteDocumentCache.getEntry(e,t)))).next((r=>(s!==null&&qn(s.mutation,r,Oe.empty(),ae.now()),r)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,X()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=X()){const r=Vt();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,s).next((a=>{let o=Nn();return a.forEach(((c,d)=>{o=o.insert(c,d.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const s=Vt();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,X())))}populateOverlays(e,t,s){const r=[];return s.forEach((a=>{t.has(a)||r.push(a)})),this.documentOverlayCache.getOverlays(e,r).next((a=>{a.forEach(((o,c)=>{t.set(o,c)}))}))}computeViews(e,t,s,r){let a=tt();const o=$n(),c=(function(){return $n()})();return t.forEach(((d,h)=>{const f=s.get(h.key);r.has(h.key)&&(f===void 0||f.mutation instanceof wt)?a=a.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),qn(f.mutation,h,f.mutation.getFieldMask(),ae.now())):o.set(h.key,Oe.empty())})),this.recalculateAndSaveOverlays(e,a).next((d=>(d.forEach(((h,f)=>o.set(h,f))),t.forEach(((h,f)=>c.set(h,new qm(f,o.get(h)??null)))),c)))}recalculateAndSaveOverlays(e,t){const s=$n();let r=new oe(((o,c)=>o-c)),a=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const c of o)c.keys().forEach((d=>{const h=t.get(d);if(h===null)return;let f=s.get(d)||Oe.empty();f=c.applyToLocalView(h,f),s.set(d,f);const p=(r.get(c.batchId)||X()).add(d);r=r.insert(c.batchId,p)}))})).next((()=>{const o=[],c=r.getReverseIterator();for(;c.hasNext();){const d=c.getNext(),h=d.key,f=d.value,p=Ic();f.forEach((_=>{if(!a.has(_)){const A=Dc(t.get(_),s.get(_));A!==null&&p.set(_,A),a=a.add(_)}})),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return P.waitFor(o)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,r){return Bf(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):_c(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,r):this.getDocumentsMatchingCollectionQuery(e,t,s,r)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next((a=>{const o=r-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-a.size):P.resolve(Vt());let c=zn,d=a;return o.next((h=>P.forEach(h,((f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),a.get(f)?P.resolve():this.remoteDocumentCache.getEntry(e,f).next((_=>{d=d.insert(f,_)}))))).next((()=>this.populateOverlays(e,h,a))).next((()=>this.computeViews(e,d,h,X()))).next((f=>({batchId:c,changes:wc(f)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new U(t)).next((s=>{let r=Nn();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,r){const a=t.collectionGroup;let o=Nn();return this.indexManager.getCollectionParents(e,a).next((c=>P.forEach(c,(d=>{const h=(function(p,_){return new un(_,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(t,d.child(a));return this.getDocumentsMatchingCollectionQuery(e,h,s,r).next((f=>{f.forEach(((p,_)=>{o=o.insert(p,_)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,s,r){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((o=>(a=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,a,r)))).next((o=>{a.forEach(((d,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,Ce.newInvalidDocument(f)))}));let c=Nn();return o.forEach(((d,h)=>{const f=a.get(d);f!==void 0&&qn(f.mutation,h,Oe.empty(),ae.now()),nr(t,h)&&(c=c.insert(d,h))})),c}))}}/**
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
 */class Um{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return P.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(r){return{id:r.id,version:r.version,createTime:Je(r.createTime)}})(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(r){return{name:r.name,query:Vm(r.bundledQuery),readTime:Je(r.readTime)}})(t)),P.resolve()}}/**
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
 */class jm{constructor(){this.overlays=new oe(U.comparator),this.Lr=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Vt();return P.forEach(t,(r=>this.getOverlay(e,r).next((a=>{a!==null&&s.set(r,a)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((r,a)=>{this.bt(e,t,a)})),P.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.Lr.get(s);return r!==void 0&&(r.forEach((a=>this.overlays=this.overlays.remove(a))),this.Lr.delete(s)),P.resolve()}getOverlaysForCollection(e,t,s){const r=Vt(),a=t.length+1,o=new U(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const d=c.getNext().value,h=d.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===a&&d.largestBatchId>s&&r.set(d.getKey(),d)}return P.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let a=new oe(((h,f)=>h-f));const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>s){let f=a.get(h.largestBatchId);f===null&&(f=Vt(),a=a.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=Vt(),d=a.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach(((h,f)=>c.set(h,f))),!(c.size()>=r)););return P.resolve(c)}bt(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.Lr.get(r.largestBatchId).delete(s.key);this.Lr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new om(t,s));let a=this.Lr.get(t);a===void 0&&(a=X(),this.Lr.set(t,a)),this.Lr.set(t,a.add(s.key))}}/**
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
 */class zm{constructor(){this.sessionToken=Te.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}}/**
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
 */class qi{constructor(){this.kr=new ve(_e.Kr),this.qr=new ve(_e.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const s=new _e(e,t);this.kr=this.kr.add(s),this.qr=this.qr.add(s)}$r(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new _e(e,t))}Qr(e,t){e.forEach((s=>this.removeReference(s,t)))}Gr(e){const t=new U(new re([])),s=new _e(t,e),r=new _e(t,e+1),a=[];return this.qr.forEachInRange([s,r],(o=>{this.Wr(o),a.push(o.key)})),a}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new U(new re([])),s=new _e(t,e),r=new _e(t,e+1);let a=X();return this.qr.forEachInRange([s,r],(o=>{a=a.add(o.key)})),a}containsKey(e){const t=new _e(e,0),s=this.kr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class _e{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return U.comparator(e.key,t.key)||Y(e.Hr,t.Hr)}static Ur(e,t){return Y(e.Hr,t.Hr)||U.comparator(e.key,t.key)}}/**
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
 */class Gm{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new ve(_e.Kr)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const a=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new am(a,t,s,r);this.mutationQueue.push(o);for(const c of r)this.Jr=this.Jr.add(new _e(c.key,a)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return P.resolve(o)}lookupMutationBatch(e,t){return P.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.Xr(s),a=r<0?0:r;return P.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?Pi:this.Yn-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new _e(t,0),r=new _e(t,Number.POSITIVE_INFINITY),a=[];return this.Jr.forEachInRange([s,r],(o=>{const c=this.Zr(o.Hr);a.push(c)})),P.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new ve(Y);return t.forEach((r=>{const a=new _e(r,0),o=new _e(r,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([a,o],(c=>{s=s.add(c.Hr)}))})),P.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let a=s;U.isDocumentKey(a)||(a=a.child(""));const o=new _e(new U(a),0);let c=new ve(Y);return this.Jr.forEachWhile((d=>{const h=d.key.path;return!!s.isPrefixOf(h)&&(h.length===r&&(c=c.add(d.Hr)),!0)}),o),P.resolve(this.Yr(c))}Yr(e){const t=[];return e.forEach((s=>{const r=this.Zr(s);r!==null&&t.push(r)})),t}removeMutationBatch(e,t){ne(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Jr;return P.forEach(t.mutations,(r=>{const a=new _e(r.key,t.batchId);return s=s.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Jr=s}))}nr(e){}containsKey(e,t){const s=new _e(t,0),r=this.Jr.firstAfterOrEqual(s);return P.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Hm{constructor(e){this.ti=e,this.docs=(function(){return new oe(U.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),a=r?r.size:0,o=this.ti(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:o}),this.size+=o-a,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return P.resolve(s?s.document.mutableCopy():Ce.newInvalidDocument(t))}getEntries(e,t){let s=tt();return t.forEach((r=>{const a=this.docs.get(r);s=s.insert(r,a?a.document.mutableCopy():Ce.newInvalidDocument(r))})),P.resolve(s)}getDocumentsMatchingQuery(e,t,s,r){let a=tt();const o=t.path,c=new U(o.child("__id-9223372036854775808__")),d=this.docs.getIteratorFrom(c);for(;d.hasNext();){const{key:h,value:{document:f}}=d.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||vf(gf(f),s)<=0||(r.has(f.key)||nr(t,f))&&(a=a.insert(f.key,f.mutableCopy()))}return P.resolve(a)}getAllFromCollectionGroup(e,t,s,r){z(9500)}ni(e,t){return P.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new Qm(this)}getSize(e){return P.resolve(this.size)}}class Qm extends $m{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,r)=>{r.isValidDocument()?t.push(this.Mr.addEntry(e,r)):this.Mr.removeEntry(s)})),P.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class Jm{constructor(e){this.persistence=e,this.ri=new $t((t=>xi(t)),Ni),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.ii=0,this.si=new qi,this.targetCount=0,this.oi=sn._r()}forEachTarget(e,t){return this.ri.forEach(((s,r)=>t(r))),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.ii&&(this.ii=t),P.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new sn(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.lr(t),P.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,s){let r=0;const a=[];return this.ri.forEach(((o,c)=>{c.sequenceNumber<=t&&s.get(c.targetId)===null&&(this.ri.delete(o),a.push(this.removeMatchingKeysForTargetId(e,c.targetId)),r++)})),P.waitFor(a).next((()=>r))}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){const s=this.ri.get(t)||null;return P.resolve(s)}addMatchingKeys(e,t,s){return this.si.$r(t,s),P.resolve()}removeMatchingKeys(e,t,s){this.si.Qr(t,s);const r=this.persistence.referenceDelegate,a=[];return r&&t.forEach((o=>{a.push(r.markPotentiallyOrphaned(e,o))})),P.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),P.resolve()}getMatchingKeysForTargetId(e,t){const s=this.si.jr(t);return P.resolve(s)}containsKey(e,t){return P.resolve(this.si.containsKey(t))}}/**
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
 */class zc{constructor(e,t){this._i={},this.overlays={},this.ai=new Xs(0),this.ui=!1,this.ui=!0,this.ci=new zm,this.referenceDelegate=e(this),this.li=new Jm(this),this.indexManager=new xm,this.remoteDocumentCache=(function(r){return new Hm(r)})((s=>this.referenceDelegate.hi(s))),this.serializer=new Dm(t),this.Pi=new Um(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new jm,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this._i[e.toKey()];return s||(s=new Gm(t,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,s){$("MemoryPersistence","Starting transaction:",e);const r=new Wm(this.ai.next());return this.referenceDelegate.Ti(),s(r).next((a=>this.referenceDelegate.Ii(r).next((()=>a)))).toPromise().then((a=>(r.raiseOnCommittedEvent(),a)))}Ei(e,t){return P.or(Object.values(this._i).map((s=>()=>s.containsKey(e,t))))}}class Wm extends _f{constructor(e){super(),this.currentSequenceNumber=e}}class Bi{constructor(e){this.persistence=e,this.Ri=new qi,this.Ai=null}static Vi(e){return new Bi(e)}get di(){if(this.Ai)return this.Ai;throw z(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.di.delete(s.toString()),P.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.di.add(s.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),P.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((r=>this.di.add(r.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((r=>{r.forEach((a=>this.di.add(a.toString())))})).next((()=>s.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.di,(s=>{const r=U.fromPath(s);return this.mi(e,r).next((a=>{a||t.removeEntry(r,H.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((s=>{s?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return P.or([()=>P.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Hs{constructor(e,t){this.persistence=e,this.fi=new $t((s=>Tf(s.path)),((s,r)=>s.isEqual(r))),this.garbageCollector=Fm(this,t)}static Vi(e,t){return new Hs(e,t)}Ti(){}Ii(e){return P.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((r=>s+r))))}pr(e){let t=0;return this.mr(e,(s=>{t++})).next((()=>t))}mr(e,t){return P.forEach(this.fi,((s,r)=>this.wr(e,s,r).next((a=>a?P.resolve():t(r)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const r=this.persistence.getRemoteDocumentCache(),a=r.newChangeBuffer();return r.ni(e,(o=>this.wr(e,o,t).next((c=>{c||(s++,a.removeEntry(o,H.min()))})))).next((()=>a.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),P.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),P.resolve()}removeReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),P.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),P.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Rs(e.data.value)),t}wr(e,t,s){return P.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.fi.get(t);return P.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Ui{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Ts=s,this.Is=r}static Es(e,t){let s=X(),r=X();for(const a of t.docChanges)switch(a.type){case 0:s=s.add(a.doc.key);break;case 1:r=r.add(a.doc.key)}return new Ui(e,t.fromCache,s,r)}}/**
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
 */class Km{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Ym{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return Md()?8:bf(kd())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,r){const a={result:null};return this.gs(e,t).next((o=>{a.result=o})).next((()=>{if(!a.result)return this.ps(e,t,r,s).next((o=>{a.result=o}))})).next((()=>{if(a.result)return;const o=new Km;return this.ys(e,t,o).next((c=>{if(a.result=c,this.As)return this.ws(e,t,o,c.size)}))})).next((()=>a.result))}ws(e,t,s,r){return s.documentReadCount<this.Vs?(Qt()<=ee.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",Jt(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),P.resolve()):(Qt()<=ee.DEBUG&&$("QueryEngine","Query:",Jt(t),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.ds*r?(Qt()<=ee.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",Jt(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Qe(t))):P.resolve())}gs(e,t){if(Go(t))return P.resolve(null);let s=Qe(t);return this.indexManager.getIndexType(e,s).next((r=>r===0?null:(t.limit!==null&&r===1&&(t=js(t,null,"F"),s=Qe(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((a=>{const o=X(...a);return this.fs.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,s).next((d=>{const h=this.bs(t,c);return this.Ss(t,h,o,d.readTime)?this.gs(e,js(t,null,"F")):this.Ds(e,h,t,d)}))))})))))}ps(e,t,s,r){return Go(t)||r.isEqual(H.min())?P.resolve(null):this.fs.getDocuments(e,s).next((a=>{const o=this.bs(t,a);return this.Ss(t,o,s,r)?P.resolve(null):(Qt()<=ee.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Jt(t)),this.Ds(e,o,t,pf(r,zn)).next((c=>c)))}))}bs(e,t){let s=new ve(Ec(e));return t.forEach(((r,a)=>{nr(e,a)&&(s=s.add(a))})),s}Ss(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(r)>0)}ys(e,t,s){return Qt()<=ee.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",Jt(t)),this.fs.getDocumentsMatchingQuery(e,t,pt.min(),s)}Ds(e,t,s,r){return this.fs.getDocumentsMatchingQuery(e,s,r).next((a=>(t.forEach((o=>{a=a.insert(o.key,o)})),a)))}}/**
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
 */const ji="LocalStore",Xm=3e8;class Zm{constructor(e,t,s,r){this.persistence=e,this.Cs=t,this.serializer=r,this.vs=new oe(Y),this.Fs=new $t((a=>xi(a)),Ni),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Bm(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function ep(n,e,t,s){return new Zm(n,e,t,s)}async function Gc(n,e){const t=Q(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next((a=>(r=a,t.Os(e),t.mutationQueue.getAllMutationBatches(s)))).next((a=>{const o=[],c=[];let d=X();for(const h of r){o.push(h.batchId);for(const f of h.mutations)d=d.add(f.key)}for(const h of a){c.push(h.batchId);for(const f of h.mutations)d=d.add(f.key)}return t.localDocuments.getDocuments(s,d).next((h=>({Ns:h,removedBatchIds:o,addedBatchIds:c})))}))}))}function tp(n,e){const t=Q(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const r=e.batch.keys(),a=t.xs.newChangeBuffer({trackRemovals:!0});return(function(c,d,h,f){const p=h.batch,_=p.keys();let A=P.resolve();return _.forEach((R=>{A=A.next((()=>f.getEntry(d,R))).next((V=>{const x=h.docVersions.get(R);ne(x!==null,48541),V.version.compareTo(x)<0&&(p.applyToRemoteDocument(V,h),V.isValidDocument()&&(V.setReadTime(h.commitVersion),f.addEntry(V)))}))})),A.next((()=>c.mutationQueue.removeMutationBatch(d,p)))})(t,s,e,a).next((()=>a.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(c){let d=X();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(d=d.add(c.batch.mutations[h].key));return d})(e)))).next((()=>t.localDocuments.getDocuments(s,r)))}))}function Hc(n){const e=Q(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function np(n,e){const t=Q(n),s=e.snapshotVersion;let r=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(a=>{const o=t.xs.newChangeBuffer({trackRemovals:!0});r=t.vs;const c=[];e.targetChanges.forEach(((f,p)=>{const _=r.get(p);if(!_)return;c.push(t.li.removeMatchingKeys(a,f.removedDocuments,p).next((()=>t.li.addMatchingKeys(a,f.addedDocuments,p))));let A=_.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(p)!==null?A=A.withResumeToken(Te.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,s)),r=r.insert(p,A),(function(V,x,D){return V.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=Xm?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0})(_,A,f)&&c.push(t.li.updateTargetData(a,A))}));let d=tt(),h=X();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(a,f))})),c.push(sp(a,o,e.documentUpdates).next((f=>{d=f.Bs,h=f.Ls}))),!s.isEqual(H.min())){const f=t.li.getLastRemoteSnapshotVersion(a).next((p=>t.li.setTargetsMetadata(a,a.currentSequenceNumber,s)));c.push(f)}return P.waitFor(c).next((()=>o.apply(a))).next((()=>t.localDocuments.getLocalViewOfDocuments(a,d,h))).next((()=>d))})).then((a=>(t.vs=r,a)))}function sp(n,e,t){let s=X(),r=X();return t.forEach((a=>s=s.add(a))),e.getEntries(n,s).next((a=>{let o=tt();return t.forEach(((c,d)=>{const h=a.get(c);d.isFoundDocument()!==h.isFoundDocument()&&(r=r.add(c)),d.isNoDocument()&&d.version.isEqual(H.min())?(e.removeEntry(c,d.readTime),o=o.insert(c,d)):!h.isValidDocument()||d.version.compareTo(h.version)>0||d.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(d),o=o.insert(c,d)):$(ji,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",d.version)})),{Bs:o,Ls:r}}))}function rp(n,e){const t=Q(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Pi),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function ip(n,e){const t=Q(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let r;return t.li.getTargetData(s,e).next((a=>a?(r=a,P.resolve(r)):t.li.allocateTargetId(s).next((o=>(r=new ct(e,o,"TargetPurposeListen",s.currentSequenceNumber),t.li.addTargetData(s,r).next((()=>r)))))))})).then((s=>{const r=t.vs.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.vs=t.vs.insert(s.targetId,s),t.Fs.set(e,s.targetId)),s}))}async function gi(n,e,t){const s=Q(n),r=s.vs.get(e),a=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",a,(o=>s.persistence.referenceDelegate.removeTarget(o,r)))}catch(o){if(!cn(o))throw o;$(ji,`Failed to update sequence numbers for target ${e}: ${o}`)}s.vs=s.vs.remove(e),s.Fs.delete(r.target)}function rl(n,e,t){const s=Q(n);let r=H.min(),a=X();return s.persistence.runTransaction("Execute query","readwrite",(o=>(function(d,h,f){const p=Q(d),_=p.Fs.get(f);return _!==void 0?P.resolve(p.vs.get(_)):p.li.getTargetData(h,f)})(s,o,Qe(e)).next((c=>{if(c)return r=c.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(o,c.targetId).next((d=>{a=d}))})).next((()=>s.Cs.getDocumentsMatchingQuery(o,e,t?r:H.min(),t?a:X()))).next((c=>(ap(s,zf(e),c),{documents:c,ks:a})))))}function ap(n,e,t){let s=n.Ms.get(e)||H.min();t.forEach(((r,a)=>{a.readTime.compareTo(s)>0&&(s=a.readTime)})),n.Ms.set(e,s)}class il{constructor(){this.activeTargetIds=Kf()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class op{constructor(){this.vo=new il,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,s){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new il,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class lp{Mo(e){}shutdown(){}}/**
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
 */const al="ConnectivityMonitor";class ol{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){$(al,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){$(al,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let As=null;function vi(){return As===null?As=(function(){return 268435456+Math.round(2147483648*Math.random())})():As++,"0x"+As.toString(16)}/**
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
 */const Hr="RestConnection",cp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class up{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${s}/databases/${r}`,this.$o=this.databaseId.database===qs?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Wo(e,t,s,r,a){const o=vi(),c=this.Qo(e,t.toUriEncodedString());$(Hr,`Sending RPC '${e}' ${o}:`,c,s);const d={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(d,r,a);const{host:h}=new URL(c),f=Ai(h);return this.zo(e,c,d,s,f).then((p=>($(Hr,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw Lt(Hr,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",s),p}))}jo(e,t,s,r,a,o){return this.Wo(e,t,s,r,a)}Go(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+on})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((r,a)=>e[a]=r)),s&&s.headers.forEach(((r,a)=>e[a]=r))}Qo(e,t){const s=cp[e];let r=`${this.qo}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}/**
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
 */class dp{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const Ie="WebChannelConnection",Vn=(n,e,t)=>{n.listen(e,(s=>{try{t(s)}catch(r){setTimeout((()=>{throw r}),0)}}))};class Xt extends up{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Xt.c_){const e=Yl();Vn(e,Kl.STAT_EVENT,(t=>{t.stat===ii.PROXY?$(Ie,"STAT_EVENT: detected buffering proxy"):t.stat===ii.NOPROXY&&$(Ie,"STAT_EVENT: detected no buffering proxy")})),Xt.c_=!0}}zo(e,t,s,r,a){const o=vi();return new Promise(((c,d)=>{const h=new Jl;h.setWithCredentials(!0),h.listenOnce(Wl.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case Ss.NO_ERROR:const p=h.getResponseJson();$(Ie,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case Ss.TIMEOUT:$(Ie,`RPC '${e}' ${o} timed out`),d(new O(C.DEADLINE_EXCEEDED,"Request time out"));break;case Ss.HTTP_ERROR:const _=h.getStatus();if($(Ie,`RPC '${e}' ${o} failed with status:`,_,"response text:",h.getResponseText()),_>0){let A=h.getResponseJson();Array.isArray(A)&&(A=A[0]);const R=A==null?void 0:A.error;if(R&&R.status&&R.message){const V=(function(D){const L=D.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(L)>=0?L:C.UNKNOWN})(R.status);d(new O(V,R.message))}else d(new O(C.UNKNOWN,"Server responded with status "+h.getStatus()))}else d(new O(C.UNAVAILABLE,"Connection failed."));break;default:z(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{$(Ie,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(r);$(Ie,`RPC '${e}' ${o} sending request:`,r),h.send(t,"POST",f,s,15)}))}T_(e,t,s){const r=vi(),a=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(c.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,t,s),c.encodeInitMessageHeaders=!0;const h=a.join("");$(Ie,`Creating RPC '${e}' stream ${r}: ${h}`,c);const f=o.createWebChannel(h,c);this.I_(f);let p=!1,_=!1;const A=new dp({Ho:R=>{_?$(Ie,`Not sending because RPC '${e}' stream ${r} is closed:`,R):(p||($(Ie,`Opening RPC '${e}' stream ${r} transport.`),f.open(),p=!0),$(Ie,`RPC '${e}' stream ${r} sending:`,R),f.send(R))},Jo:()=>f.close()});return Vn(f,xn.EventType.OPEN,(()=>{_||($(Ie,`RPC '${e}' stream ${r} transport opened.`),A.i_())})),Vn(f,xn.EventType.CLOSE,(()=>{_||(_=!0,$(Ie,`RPC '${e}' stream ${r} transport closed`),A.o_(),this.E_(f))})),Vn(f,xn.EventType.ERROR,(R=>{_||(_=!0,Lt(Ie,`RPC '${e}' stream ${r} transport errored. Name:`,R.name,"Message:",R.message),A.o_(new O(C.UNAVAILABLE,"The operation could not be completed")))})),Vn(f,xn.EventType.MESSAGE,(R=>{var V;if(!_){const x=R.data[0];ne(!!x,16349);const D=x,L=(D==null?void 0:D.error)||((V=D[0])==null?void 0:V.error);if(L){$(Ie,`RPC '${e}' stream ${r} received error:`,L);const q=L.status;let F=(function(b){const g=he[b];if(g!==void 0)return xc(g)})(q),k=L.message;q==="NOT_FOUND"&&k.includes("database")&&k.includes("does not exist")&&k.includes(this.databaseId.database)&&Lt(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),F===void 0&&(F=C.INTERNAL,k="Unknown error status: "+q+" with message "+L.message),_=!0,A.o_(new O(F,k)),f.close()}else $(Ie,`RPC '${e}' stream ${r} received:`,x),A.__(x)}})),Xt.u_(),setTimeout((()=>{A.s_()}),0),A}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,s){super.Go(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Xl()}}/**
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
 */function hp(n){return new Xt(n)}function Qr(){return typeof document<"u"?document:null}/**
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
 */function ar(n){return new gm(n,!0)}/**
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
 */Xt.c_=!1;class Qc{constructor(e,t,s=1e3,r=1.5,a=6e4){this.Ci=e,this.timerId=t,this.R_=s,this.A_=r,this.V_=a,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-s);r>0&&$("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,r,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const ll="PersistentStream";class Jc{constructor(e,t,s,r,a,o,c,d){this.Ci=e,this.b_=s,this.S_=r,this.connection=a,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=d,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Qc(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===C.RESOURCE_EXHAUSTED?(et(t.toString()),et("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,r])=>{this.D_===t&&this.G_(s,r)}),(s=>{e((()=>{const r=new O(C.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(r)}))}))}G_(e,t){const s=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.Yo((()=>{s((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((r=>{s((()=>this.z_(r)))})),this.stream.onMessage((r=>{s((()=>++this.F_==1?this.H_(r):this.onNext(r)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return $(ll,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():($(ll,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class fp extends Jc{constructor(e,t,s,r,a,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,o),this.serializer=a}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=_m(this.serializer,e),s=(function(a){if(!("targetChange"in a))return H.min();const o=a.targetChange;return o.targetIds&&o.targetIds.length?H.min():o.readTime?Je(o.readTime):H.min()})(e);return this.listener.J_(t,s)}Z_(e){const t={};t.database=pi(this.serializer),t.addTarget=(function(a,o){let c;const d=o.target;if(c=ui(d)?{documents:Tm(a,d)}:{query:wm(a,d).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Lc(a,o.resumeToken);const h=hi(a,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(H.min())>0){c.readTime=Gs(a,o.snapshotVersion.toTimestamp());const h=hi(a,o.expectedCount);h!==null&&(c.expectedCount=h)}return c})(this.serializer,e);const s=Am(this.serializer,e);s&&(t.labels=s),this.K_(t)}X_(e){const t={};t.database=pi(this.serializer),t.removeTarget=e,this.K_(t)}}class mp extends Jc{constructor(e,t,s,r,a,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,o),this.serializer=a}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}H_(e){return ne(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ne(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ne(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Em(e.writeResults,e.commitTime),s=Je(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=pi(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>bm(this.serializer,s)))};this.K_(t)}}/**
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
 */class pp{}class gp extends pp{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new O(C.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,o])=>this.connection.Wo(e,fi(t,s),r,a,o))).catch((a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new O(C.UNKNOWN,a.toString())}))}jo(e,t,s,r,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.jo(e,fi(t,s),r,o,c,a))).catch((o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new O(C.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function vp(n,e,t,s){return new gp(n,e,t,s)}class yp{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(et(t),this.aa=!1):$("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Mt="RemoteStore";class _p{constructor(e,t,s,r,a){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=a,this.Aa.Mo((o=>{s.enqueueAndForget((async()=>{qt(this)&&($(Mt,"Restarting streams for network reachability change."),await(async function(d){const h=Q(d);h.Ea.add(4),await ts(h),h.Va.set("Unknown"),h.Ea.delete(4),await or(h)})(this))}))})),this.Va=new yp(s,r)}}async function or(n){if(qt(n))for(const e of n.Ra)await e(!0)}async function ts(n){for(const e of n.Ra)await e(!1)}function Wc(n,e){const t=Q(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Qi(t)?Hi(t):dn(t).O_()&&Gi(t,e))}function zi(n,e){const t=Q(n),s=dn(t);t.Ia.delete(e),s.O_()&&Kc(t,e),t.Ia.size===0&&(s.O_()?s.L_():qt(t)&&t.Va.set("Unknown"))}function Gi(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(H.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}dn(n).Z_(e)}function Kc(n,e){n.da.$e(e),dn(n).X_(e)}function Hi(n){n.da=new hm({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),dn(n).start(),n.Va.ua()}function Qi(n){return qt(n)&&!dn(n).x_()&&n.Ia.size>0}function qt(n){return Q(n).Ea.size===0}function Yc(n){n.da=void 0}async function bp(n){n.Va.set("Online")}async function Ep(n){n.Ia.forEach(((e,t)=>{Gi(n,e)}))}async function Tp(n,e){Yc(n),Qi(n)?(n.Va.ha(e),Hi(n)):n.Va.set("Unknown")}async function wp(n,e,t){if(n.Va.set("Online"),e instanceof kc&&e.state===2&&e.cause)try{await(async function(r,a){const o=a.cause;for(const c of a.targetIds)r.Ia.has(c)&&(await r.remoteSyncer.rejectListen(c,o),r.Ia.delete(c),r.da.removeTarget(c))})(n,e)}catch(s){$(Mt,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Qs(n,s)}else if(e instanceof Ds?n.da.Xe(e):e instanceof Nc?n.da.st(e):n.da.tt(e),!t.isEqual(H.min()))try{const s=await Hc(n.localStore);t.compareTo(s)>=0&&await(function(a,o){const c=a.da.Tt(o);return c.targetChanges.forEach(((d,h)=>{if(d.resumeToken.approximateByteSize()>0){const f=a.Ia.get(h);f&&a.Ia.set(h,f.withResumeToken(d.resumeToken,o))}})),c.targetMismatches.forEach(((d,h)=>{const f=a.Ia.get(d);if(!f)return;a.Ia.set(d,f.withResumeToken(Te.EMPTY_BYTE_STRING,f.snapshotVersion)),Kc(a,d);const p=new ct(f.target,d,h,f.sequenceNumber);Gi(a,p)})),a.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(s){$(Mt,"Failed to raise snapshot:",s),await Qs(n,s)}}async function Qs(n,e,t){if(!cn(e))throw e;n.Ea.add(1),await ts(n),n.Va.set("Offline"),t||(t=()=>Hc(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{$(Mt,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await or(n)}))}function Xc(n,e){return e().catch((t=>Qs(n,t,e)))}async function lr(n){const e=Q(n),t=_t(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Pi;for(;Ip(e);)try{const r=await rp(e.localStore,s);if(r===null){e.Ta.length===0&&t.L_();break}s=r.batchId,Ap(e,r)}catch(r){await Qs(e,r)}Zc(e)&&eu(e)}function Ip(n){return qt(n)&&n.Ta.length<10}function Ap(n,e){n.Ta.push(e);const t=_t(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function Zc(n){return qt(n)&&!_t(n).x_()&&n.Ta.length>0}function eu(n){_t(n).start()}async function Sp(n){_t(n).ra()}async function Rp(n){const e=_t(n);for(const t of n.Ta)e.ea(t.mutations)}async function Cp(n,e,t){const s=n.Ta.shift(),r=Oi.from(s,e,t);await Xc(n,(()=>n.remoteSyncer.applySuccessfulWrite(r))),await lr(n)}async function Pp(n,e){e&&_t(n).Y_&&await(async function(s,r){if((function(o){return cm(o)&&o!==C.ABORTED})(r.code)){const a=s.Ta.shift();_t(s).B_(),await Xc(s,(()=>s.remoteSyncer.rejectFailedWrite(a.batchId,r))),await lr(s)}})(n,e),Zc(n)&&eu(n)}async function cl(n,e){const t=Q(n);t.asyncQueue.verifyOperationInProgress(),$(Mt,"RemoteStore received new credentials");const s=qt(t);t.Ea.add(3),await ts(t),s&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await or(t)}async function Dp(n,e){const t=Q(n);e?(t.Ea.delete(2),await or(t)):e||(t.Ea.add(2),await ts(t),t.Va.set("Unknown"))}function dn(n){return n.ma||(n.ma=(function(t,s,r){const a=Q(t);return a.sa(),new fp(s,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,r)})(n.datastore,n.asyncQueue,{Zo:bp.bind(null,n),Yo:Ep.bind(null,n),t_:Tp.bind(null,n),J_:wp.bind(null,n)}),n.Ra.push((async e=>{e?(n.ma.B_(),Qi(n)?Hi(n):n.Va.set("Unknown")):(await n.ma.stop(),Yc(n))}))),n.ma}function _t(n){return n.fa||(n.fa=(function(t,s,r){const a=Q(t);return a.sa(),new mp(s,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,r)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:Sp.bind(null,n),t_:Pp.bind(null,n),ta:Rp.bind(null,n),na:Cp.bind(null,n)}),n.Ra.push((async e=>{e?(n.fa.B_(),await lr(n)):(await n.fa.stop(),n.Ta.length>0&&($(Mt,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
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
 */class Ji{constructor(e,t,s,r,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=a,this.deferred=new ft,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,r,a){const o=Date.now()+s,c=new Ji(e,t,o,r,a);return c.start(s),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wi(n,e){if(et("AsyncQueue",`${e}: ${n}`),cn(n))return new O(C.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Zt{static emptySet(e){return new Zt(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||U.comparator(t.key,s.key):(t,s)=>U.comparator(t.key,s.key),this.keyedMap=Nn(),this.sortedSet=new oe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Zt)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,a=s.getNext().key;if(!r.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Zt;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class ul{constructor(){this.ga=new oe(U.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):z(63341,{Vt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class rn{constructor(e,t,s,r,a,o,c,d,h){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=a,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=d,this.hasCachedResults=h}static fromInitialDocuments(e,t,s,r,a){const o=[];return t.forEach((c=>{o.push({type:0,doc:c})})),new rn(e,t,Zt.emptySet(t),o,s,r,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&tr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class Vp{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class xp{constructor(){this.queries=dl(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const r=Q(t),a=r.queries;r.queries=dl(),a.forEach(((o,c)=>{for(const d of c.ba)d.onError(s)}))})(this,new O(C.ABORTED,"Firestore shutting down"))}}function dl(){return new $t((n=>bc(n)),tr)}async function tu(n,e){const t=Q(n);let s=3;const r=e.query;let a=t.queries.get(r);a?!a.Sa()&&e.Da()&&(s=2):(a=new Vp,s=e.Da()?0:1);try{switch(s){case 0:a.wa=await t.onListen(r,!0);break;case 1:a.wa=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(o){const c=Wi(o,`Initialization of query '${Jt(e.query)}' failed`);return void e.onError(c)}t.queries.set(r,a),a.ba.push(e),e.va(t.onlineState),a.wa&&e.Fa(a.wa)&&Ki(t)}async function nu(n,e){const t=Q(n),s=e.query;let r=3;const a=t.queries.get(s);if(a){const o=a.ba.indexOf(e);o>=0&&(a.ba.splice(o,1),a.ba.length===0?r=e.Da()?0:1:!a.Sa()&&e.Da()&&(r=2))}switch(r){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function Np(n,e){const t=Q(n);let s=!1;for(const r of e){const a=r.query,o=t.queries.get(a);if(o){for(const c of o.ba)c.Fa(r)&&(s=!0);o.wa=r}}s&&Ki(t)}function kp(n,e,t){const s=Q(n),r=s.queries.get(e);if(r)for(const a of r.ba)a.onError(t);s.queries.delete(e)}function Ki(n){n.Ca.forEach((e=>{e.next()}))}var yi,hl;(hl=yi||(yi={})).Ma="default",hl.Cache="cache";class su{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new rn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.Ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=rn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==yi.Cache}}/**
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
 */class ru{constructor(e){this.key=e}}class iu{constructor(e){this.key=e}}class Lp{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=X(),this.mutatedKeys=X(),this.eu=Ec(e),this.tu=new Zt(this.eu)}get nu(){return this.Za}ru(e,t){const s=t?t.iu:new ul,r=t?t.tu:this.tu;let a=t?t.mutatedKeys:this.mutatedKeys,o=r,c=!1;const d=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,h=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((f,p)=>{const _=r.get(f),A=nr(this.query,p)?p:null,R=!!_&&this.mutatedKeys.has(_.key),V=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let x=!1;_&&A?_.data.isEqual(A.data)?R!==V&&(s.track({type:3,doc:A}),x=!0):this.su(_,A)||(s.track({type:2,doc:A}),x=!0,(d&&this.eu(A,d)>0||h&&this.eu(A,h)<0)&&(c=!0)):!_&&A?(s.track({type:0,doc:A}),x=!0):_&&!A&&(s.track({type:1,doc:_}),x=!0,(d||h)&&(c=!0)),x&&(A?(o=o.add(A),a=V?a.add(f):a.delete(f)):(o=o.delete(f),a=a.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),a=a.delete(f.key),s.track({type:1,doc:f})}return{tu:o,iu:s,Ss:c,mutatedKeys:a}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,r){const a=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((f,p)=>(function(A,R){const V=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z(20277,{Vt:x})}};return V(A)-V(R)})(f.type,p.type)||this.eu(f.doc,p.doc))),this.ou(s),r=r??!1;const c=t&&!r?this._u():[],d=this.Ya.size===0&&this.current&&!r?1:0,h=d!==this.Xa;return this.Xa=d,o.length!==0||h?{snapshot:new rn(this.query,e.tu,a,o,e.mutatedKeys,d===0,h,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new ul,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=X(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Ya=this.Ya.add(s.key))}));const t=[];return e.forEach((s=>{this.Ya.has(s)||t.push(new iu(s))})),this.Ya.forEach((s=>{e.has(s)||t.push(new ru(s))})),t}cu(e){this.Za=e.ks,this.Ya=X();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return rn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Yi="SyncEngine";class Mp{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class Op{constructor(e){this.key=e,this.hu=!1}}class Fp{constructor(e,t,s,r,a,o){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=a,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new $t((c=>bc(c)),tr),this.Iu=new Map,this.Eu=new Set,this.Ru=new oe(U.comparator),this.Au=new Map,this.Vu=new qi,this.du={},this.mu=new Map,this.fu=sn.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function $p(n,e,t=!0){const s=du(n);let r;const a=s.Tu.get(e);return a?(s.sharedClientState.addLocalQueryTarget(a.targetId),r=a.view.lu()):r=await au(s,e,t,!0),r}async function qp(n,e){const t=du(n);await au(t,e,!0,!1)}async function au(n,e,t,s){const r=await ip(n.localStore,Qe(e)),a=r.targetId,o=n.sharedClientState.addLocalQueryTarget(a,t);let c;return s&&(c=await Bp(n,e,a,o==="current",r.resumeToken)),n.isPrimaryClient&&t&&Wc(n.remoteStore,r),c}async function Bp(n,e,t,s,r){n.pu=(p,_,A)=>(async function(V,x,D,L){let q=x.view.ru(D);q.Ss&&(q=await rl(V.localStore,x.query,!1).then((({documents:b})=>x.view.ru(b,q))));const F=L&&L.targetChanges.get(x.targetId),k=L&&L.targetMismatches.get(x.targetId)!=null,N=x.view.applyChanges(q,V.isPrimaryClient,F,k);return ml(V,x.targetId,N.au),N.snapshot})(n,p,_,A);const a=await rl(n.localStore,e,!0),o=new Lp(e,a.ks),c=o.ru(a.documents),d=es.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),h=o.applyChanges(c,n.isPrimaryClient,d);ml(n,t,h.au);const f=new Mp(e,t,o);return n.Tu.set(e,f),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),h.snapshot}async function Up(n,e,t){const s=Q(n),r=s.Tu.get(e),a=s.Iu.get(r.targetId);if(a.length>1)return s.Iu.set(r.targetId,a.filter((o=>!tr(o,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await gi(s.localStore,r.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(r.targetId),t&&zi(s.remoteStore,r.targetId),_i(s,r.targetId)})).catch(ln)):(_i(s,r.targetId),await gi(s.localStore,r.targetId,!0))}async function jp(n,e){const t=Q(n),s=t.Tu.get(e),r=t.Iu.get(s.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),zi(t.remoteStore,s.targetId))}async function zp(n,e,t){const s=Yp(n);try{const r=await(function(o,c){const d=Q(o),h=ae.now(),f=c.reduce(((A,R)=>A.add(R.key)),X());let p,_;return d.persistence.runTransaction("Locally write mutations","readwrite",(A=>{let R=tt(),V=X();return d.xs.getEntries(A,f).next((x=>{R=x,R.forEach(((D,L)=>{L.isValidDocument()||(V=V.add(D))}))})).next((()=>d.localDocuments.getOverlayedDocuments(A,R))).next((x=>{p=x;const D=[];for(const L of c){const q=rm(L,p.get(L.key).overlayedDocument);q!=null&&D.push(new wt(L.key,q,hc(q.value.mapValue),qe.exists(!0)))}return d.mutationQueue.addMutationBatch(A,h,D,c)})).next((x=>{_=x;const D=x.applyToLocalDocumentSet(p,V);return d.documentOverlayCache.saveOverlays(A,x.batchId,D)}))})).then((()=>({batchId:_.batchId,changes:wc(p)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),(function(o,c,d){let h=o.du[o.currentUser.toKey()];h||(h=new oe(Y)),h=h.insert(c,d),o.du[o.currentUser.toKey()]=h})(s,r.batchId,t),await ns(s,r.changes),await lr(s.remoteStore)}catch(r){const a=Wi(r,"Failed to persist write");t.reject(a)}}async function ou(n,e){const t=Q(n);try{const s=await np(t.localStore,e);e.targetChanges.forEach(((r,a)=>{const o=t.Au.get(a);o&&(ne(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?o.hu=!0:r.modifiedDocuments.size>0?ne(o.hu,14607):r.removedDocuments.size>0&&(ne(o.hu,42227),o.hu=!1))})),await ns(t,s,e)}catch(s){await ln(s)}}function fl(n,e,t){const s=Q(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.Tu.forEach(((a,o)=>{const c=o.view.va(e);c.snapshot&&r.push(c.snapshot)})),(function(o,c){const d=Q(o);d.onlineState=c;let h=!1;d.queries.forEach(((f,p)=>{for(const _ of p.ba)_.va(c)&&(h=!0)})),h&&Ki(d)})(s.eventManager,e),r.length&&s.Pu.J_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Gp(n,e,t){const s=Q(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.Au.get(e),a=r&&r.key;if(a){let o=new oe(U.comparator);o=o.insert(a,Ce.newNoDocument(a,H.min()));const c=X().add(a),d=new ir(H.min(),new Map,new oe(Y),o,c);await ou(s,d),s.Ru=s.Ru.remove(a),s.Au.delete(e),Xi(s)}else await gi(s.localStore,e,!1).then((()=>_i(s,e,t))).catch(ln)}async function Hp(n,e){const t=Q(n),s=e.batch.batchId;try{const r=await tp(t.localStore,e);cu(t,s,null),lu(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await ns(t,r)}catch(r){await ln(r)}}async function Qp(n,e,t){const s=Q(n);try{const r=await(function(o,c){const d=Q(o);return d.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let f;return d.mutationQueue.lookupMutationBatch(h,c).next((p=>(ne(p!==null,37113),f=p.keys(),d.mutationQueue.removeMutationBatch(h,p)))).next((()=>d.mutationQueue.performConsistencyCheck(h))).next((()=>d.documentOverlayCache.removeOverlaysForBatchId(h,f,c))).next((()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f))).next((()=>d.localDocuments.getDocuments(h,f)))}))})(s.localStore,e);cu(s,e,t),lu(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await ns(s,r)}catch(r){await ln(r)}}function lu(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function cu(n,e,t){const s=Q(n);let r=s.du[s.currentUser.toKey()];if(r){const a=r.get(e);a&&(t?a.reject(t):a.resolve(),r=r.remove(e)),s.du[s.currentUser.toKey()]=r}}function _i(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Iu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Iu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach((s=>{n.Vu.containsKey(s)||uu(n,s)}))}function uu(n,e){n.Eu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(zi(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),Xi(n))}function ml(n,e,t){for(const s of t)s instanceof ru?(n.Vu.addReference(s.key,e),Jp(n,s)):s instanceof iu?($(Yi,"Document no longer in limbo: "+s.key),n.Vu.removeReference(s.key,e),n.Vu.containsKey(s.key)||uu(n,s.key)):z(19791,{wu:s})}function Jp(n,e){const t=e.key,s=t.path.canonicalString();n.Ru.get(t)||n.Eu.has(s)||($(Yi,"New document in limbo: "+t),n.Eu.add(s),Xi(n))}function Xi(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new U(re.fromString(e)),s=n.fu.next();n.Au.set(s,new Op(t)),n.Ru=n.Ru.insert(t,s),Wc(n.remoteStore,new ct(Qe(ki(t.path)),s,"TargetPurposeLimboResolution",Xs.ce))}}async function ns(n,e,t){const s=Q(n),r=[],a=[],o=[];s.Tu.isEmpty()||(s.Tu.forEach(((c,d)=>{o.push(s.pu(d,e,t).then((h=>{var f;if((h||t)&&s.isPrimaryClient){const p=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(d.targetId))==null?void 0:f.current;s.sharedClientState.updateQueryState(d.targetId,p?"current":"not-current")}if(h){r.push(h);const p=Ui.Es(d.targetId,h);a.push(p)}})))})),await Promise.all(o),s.Pu.J_(r),await(async function(d,h){const f=Q(d);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>P.forEach(h,(_=>P.forEach(_.Ts,(A=>f.persistence.referenceDelegate.addReference(p,_.targetId,A))).next((()=>P.forEach(_.Is,(A=>f.persistence.referenceDelegate.removeReference(p,_.targetId,A)))))))))}catch(p){if(!cn(p))throw p;$(ji,"Failed to update sequence numbers: "+p)}for(const p of h){const _=p.targetId;if(!p.fromCache){const A=f.vs.get(_),R=A.snapshotVersion,V=A.withLastLimboFreeSnapshotVersion(R);f.vs=f.vs.insert(_,V)}}})(s.localStore,a))}async function Wp(n,e){const t=Q(n);if(!t.currentUser.isEqual(e)){$(Yi,"User change. New user:",e.toKey());const s=await Gc(t.localStore,e);t.currentUser=e,(function(a,o){a.mu.forEach((c=>{c.forEach((d=>{d.reject(new O(C.CANCELLED,o))}))})),a.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ns(t,s.Ns)}}function Kp(n,e){const t=Q(n),s=t.Au.get(e);if(s&&s.hu)return X().add(s.key);{let r=X();const a=t.Iu.get(e);if(!a)return r;for(const o of a){const c=t.Tu.get(o);r=r.unionWith(c.view.nu)}return r}}function du(n){const e=Q(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=ou.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Kp.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Gp.bind(null,e),e.Pu.J_=Np.bind(null,e.eventManager),e.Pu.yu=kp.bind(null,e.eventManager),e}function Yp(n){const e=Q(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Hp.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Qp.bind(null,e),e}class Js{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ar(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return ep(this.persistence,new Ym,e.initialUser,this.serializer)}Cu(e){return new zc(Bi.Vi,this.serializer)}Du(e){return new op}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Js.provider={build:()=>new Js};class Xp extends Js{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){ne(this.persistence.referenceDelegate instanceof Hs,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new Mm(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Ne.withCacheSize(this.cacheSizeBytes):Ne.DEFAULT;return new zc((s=>Hs.Vi(s,t)),this.serializer)}}class bi{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>fl(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Wp.bind(null,this.syncEngine),await Dp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new xp})()}createDatastore(e){const t=ar(e.databaseInfo.databaseId),s=hp(e.databaseInfo);return vp(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,r,a,o,c){return new _p(s,r,a,o,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>fl(this.syncEngine,t,0)),(function(){return ol.v()?new ol:new lp})())}createSyncEngine(e,t){return(function(r,a,o,c,d,h,f){const p=new Fp(r,a,o,c,d,h);return f&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(r){const a=Q(r);$(Mt,"RemoteStore shutting down."),a.Ea.add(5),await ts(a),a.Aa.shutdown(),a.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}bi.provider={build:()=>new bi};/**
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
 */class hu{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):et("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const bt="FirestoreClient";class Zp{constructor(e,t,s,r,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=r,this.user=Re.UNAUTHENTICATED,this.clientId=Ci.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(s,(async o=>{$(bt,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(s,(o=>($(bt,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ft;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Wi(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Jr(n,e){n.asyncQueue.verifyOperationInProgress(),$(bt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async r=>{s.isEqual(r)||(await Gc(e.localStore,r),s=r)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function pl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await eg(n);$(bt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>cl(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,r)=>cl(e.remoteStore,r))),n._onlineComponents=e}async function eg(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){$(bt,"Using user provided OfflineComponentProvider");try{await Jr(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(r){return r.name==="FirebaseError"?r.code===C.FAILED_PRECONDITION||r.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11})(t))throw t;Lt("Error using user provided cache. Falling back to memory cache: "+t),await Jr(n,new Js)}}else $(bt,"Using default OfflineComponentProvider"),await Jr(n,new Xp(void 0));return n._offlineComponents}async function fu(n){return n._onlineComponents||(n._uninitializedComponentsProvider?($(bt,"Using user provided OnlineComponentProvider"),await pl(n,n._uninitializedComponentsProvider._online)):($(bt,"Using default OnlineComponentProvider"),await pl(n,new bi))),n._onlineComponents}function tg(n){return fu(n).then((e=>e.syncEngine))}async function Ei(n){const e=await fu(n),t=e.eventManager;return t.onListen=$p.bind(null,e.syncEngine),t.onUnlisten=Up.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=qp.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=jp.bind(null,e.syncEngine),t}function ng(n,e,t,s){const r=new hu(s),a=new su(e,r,t);return n.asyncQueue.enqueueAndForget((async()=>tu(await Ei(n),a))),()=>{r.Nu(),n.asyncQueue.enqueueAndForget((async()=>nu(await Ei(n),a)))}}function sg(n,e,t={}){const s=new ft;return n.asyncQueue.enqueueAndForget((async()=>(function(a,o,c,d,h){const f=new hu({next:_=>{f.Nu(),o.enqueueAndForget((()=>nu(a,p))),_.fromCache&&d.source==="server"?h.reject(new O(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(_)},error:_=>h.reject(_)}),p=new su(c,f,{includeMetadataChanges:!0,Ka:!0});return tu(a,p)})(await Ei(n),n.asyncQueue,e,t,s))),s.promise}function rg(n,e){const t=new ft;return n.asyncQueue.enqueueAndForget((async()=>zp(await tg(n),e,t))),t.promise}/**
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
 */const ig="ComponentProvider",gl=new Map;function ag(n,e,t,s,r){return new Af(n,e,t,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,mu(r.experimentalLongPollingOptions),r.useFetchStreams,r.isUsingEmulator,s)}/**
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
 */const pu="firestore.googleapis.com",vl=!0;class yl{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new O(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=pu,this.ssl=vl}else this.host=e.host,this.ssl=e.ssl??vl;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=jc;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<km)throw new O(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}mf("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=mu(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,r){return s.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class cr{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new O(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yl(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new sf;switch(s.type){case"firstParty":return new lf(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new O(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=gl.get(t);s&&($(ig,"Removing Datastore"),gl.delete(t),s.terminate())})(this),Promise.resolve()}}function og(n,e,t,s={}){var h;n=$e(n,cr);const r=Ai(e),a=n._getSettings(),o={...a,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;r&&(Pd(`https://${c}`),Nd("Firestore",!0)),a.host!==pu&&a.host!==c&&Lt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d={...a,host:c,ssl:r,emulatorOptions:s};if(!Ms(d,o)&&(n._setSettings(d),s.mockUserToken)){let f,p;if(typeof s.mockUserToken=="string")f=s.mockUserToken,p=Re.MOCK_USER;else{f=Dd(s.mockUserToken,(h=n._app)==null?void 0:h.options.projectId);const _=s.mockUserToken.sub||s.mockUserToken.user_id;if(!_)throw new O(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Re(_)}n._authCredentials=new rf(new ec(f,p))}}/**
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
 */class nt{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new nt(this.firestore,e,this._query)}}class ue{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ue(this.firestore,e,this._key)}toJSON(){return{type:ue._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Xn(t,ue._jsonSchema))return new ue(e,s||null,new U(re.fromString(t.referencePath)))}}ue._jsonSchemaVersion="firestore/documentReference/1.0",ue._jsonSchema={type:me("string",ue._jsonSchemaVersion),referencePath:me("string")};class mt extends nt{constructor(e,t,s){super(e,t,ki(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ue(this.firestore,null,new U(e))}withConverter(e){return new mt(this.firestore,e,this._path)}}function Gt(n,e,...t){if(n=Ke(n),tc("collection","path",e),n instanceof cr){const s=re.fromString(e,...t);return Vo(s),new mt(n,null,s)}{if(!(n instanceof ue||n instanceof mt))throw new O(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(re.fromString(e,...t));return Vo(s),new mt(n.firestore,null,s)}}function Ge(n,e,...t){if(n=Ke(n),arguments.length===1&&(e=Ci.newId()),tc("doc","path",e),n instanceof cr){const s=re.fromString(e,...t);return Do(s),new ue(n,null,new U(s))}{if(!(n instanceof ue||n instanceof mt))throw new O(C.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(re.fromString(e,...t));return Do(s),new ue(n.firestore,n instanceof mt?n.converter:null,new U(s))}}/**
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
 */const _l="AsyncQueue";class bl{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Qc(this,"async_queue_retry"),this._c=()=>{const s=Qr();s&&$(_l,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=Qr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Qr();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new ft;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!cn(e))throw e;$(_l,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,et("INTERNAL UNHANDLED ERROR: ",El(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const r=Ji.createAndSchedule(this,e,t,s,(a=>this.hc(a)));return this.tc.push(r),r}uc(){this.nc&&z(47125,{Pc:El(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function El(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Et extends cr{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new bl,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new bl(e),this._firestoreClient=void 0,await e}}}function lg(n,e){const t=typeof n=="object"?n:jh(),s=typeof n=="string"?n:qs,r=Fh(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const a=Rd("firestore");a&&og(r,...a)}return r}function Zi(n){if(n._terminated)throw new O(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||cg(n),n._firestoreClient}function cg(n){var s,r,a,o;const e=n._freezeSettings(),t=ag(n._databaseId,((s=n._app)==null?void 0:s.options.appId)||"",n._persistenceKey,(r=n._app)==null?void 0:r.options.apiKey,e);n._componentsProvider||(a=e.localCache)!=null&&a._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new Zp(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(d){const h=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(h),_online:h}})(n._componentsProvider))}/**
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
 */class Fe{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Fe(Te.fromBase64String(e))}catch(t){throw new O(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Fe(Te.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Fe._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Xn(e,Fe._jsonSchema))return Fe.fromBase64String(e.bytes)}}Fe._jsonSchemaVersion="firestore/bytes/1.0",Fe._jsonSchema={type:me("string",Fe._jsonSchemaVersion),bytes:me("string")};/**
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
 */class ea{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new O(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ee(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ur{constructor(e){this._methodName=e}}/**
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
 */class We{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new O(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new O(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Y(this._lat,e._lat)||Y(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:We._jsonSchemaVersion}}static fromJSON(e){if(Xn(e,We._jsonSchema))return new We(e.latitude,e.longitude)}}We._jsonSchemaVersion="firestore/geoPoint/1.0",We._jsonSchema={type:me("string",We._jsonSchemaVersion),latitude:me("number"),longitude:me("number")};/**
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
 */class Be{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,r){if(s.length!==r.length)return!1;for(let a=0;a<s.length;++a)if(s[a]!==r[a])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Be._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Xn(e,Be._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Be(e.vectorValues);throw new O(C.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Be._jsonSchemaVersion="firestore/vectorValue/1.0",Be._jsonSchema={type:me("string",Be._jsonSchemaVersion),vectorValues:me("object")};/**
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
 */const ug=/^__.*__$/;class dg{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new wt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Zn(e,this.data,t,this.fieldTransforms)}}class gu{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new wt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function vu(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z(40011,{dataSource:n})}}class ta{constructor(e,t,s,r,a,o){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=r,a===void 0&&this.validatePath(),this.fieldTransforms=a||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new ta({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.contextWith({path:t,arrayElement:!1});return s.validatePathSegment(e),s}childContextForFieldPath(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.contextWith({path:t,arrayElement:!1});return s.validatePath(),s}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Ws(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(vu(this.dataSource)&&ug.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class hg{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||ar(e)}createContext(e,t,s,r=!1){return new ta({dataSource:e,methodName:t,targetDoc:s,path:Ee.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function dr(n){const e=n._freezeSettings(),t=ar(n._databaseId);return new hg(n._databaseId,!!e.ignoreUndefinedProperties,t)}function yu(n,e,t,s,r,a={}){const o=n.createContext(a.merge||a.mergeFields?2:0,e,t,r);sa("Data must be an object, but it was:",o,s);const c=_u(s,o);let d,h;if(a.merge)d=new Oe(o.fieldMask),h=o.fieldTransforms;else if(a.mergeFields){const f=[];for(const p of a.mergeFields){const _=Ot(e,p,t);if(!o.contains(_))throw new O(C.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);Tu(f,_)||f.push(_)}d=new Oe(f),h=o.fieldTransforms.filter((p=>d.covers(p.field)))}else d=null,h=o.fieldTransforms;return new dg(new ke(c),d,h)}class hr extends ur{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof hr}}class na extends ur{_toFieldTransform(e){return new em(e.path,new Wn)}isEqual(e){return e instanceof na}}function fg(n,e,t,s){const r=n.createContext(1,e,t);sa("Data must be an object, but it was:",r,s);const a=[],o=ke.empty();Tt(s,((d,h)=>{const f=Eu(e,d,t);h=Ke(h);const p=r.childContextForFieldPath(f);if(h instanceof hr)a.push(f);else{const _=ss(h,p);_!=null&&(a.push(f),o.set(f,_))}}));const c=new Oe(a);return new gu(o,c,r.fieldTransforms)}function mg(n,e,t,s,r,a){const o=n.createContext(1,e,t),c=[Ot(e,s,t)],d=[r];if(a.length%2!=0)throw new O(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<a.length;_+=2)c.push(Ot(e,a[_])),d.push(a[_+1]);const h=[],f=ke.empty();for(let _=c.length-1;_>=0;--_)if(!Tu(h,c[_])){const A=c[_];let R=d[_];R=Ke(R);const V=o.childContextForFieldPath(A);if(R instanceof hr)h.push(A);else{const x=ss(R,V);x!=null&&(h.push(A),f.set(A,x))}}const p=new Oe(h);return new gu(f,p,o.fieldTransforms)}function pg(n,e,t,s=!1){return ss(t,n.createContext(s?4:3,e))}function ss(n,e){if(bu(n=Ke(n)))return sa("Unsupported field value:",e,n),_u(n,e);if(n instanceof ur)return(function(s,r){if(!vu(r.dataSource))throw r.createError(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.createError(`${s._methodName}() is not currently supported inside arrays`);const a=s._toFieldTransform(r);a&&r.fieldTransforms.push(a)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(s,r){const a=[];let o=0;for(const c of s){let d=ss(c,r.childContextForArray(o));d==null&&(d={nullValue:"NULL_VALUE"}),a.push(d),o++}return{arrayValue:{values:a}}})(n,e)}return(function(s,r){if((s=Ke(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Yf(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const a=ae.fromDate(s);return{timestampValue:Gs(r.serializer,a)}}if(s instanceof ae){const a=new ae(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Gs(r.serializer,a)}}if(s instanceof We)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Fe)return{bytesValue:Lc(r.serializer,s._byteString)};if(s instanceof ue){const a=r.databaseId,o=s.firestore._databaseId;if(!o.isEqual(a))throw r.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:$i(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof Be)return(function(o,c){const d=o instanceof Be?o.toArray():o;return{mapValue:{fields:{[uc]:{stringValue:dc},[Bs]:{arrayValue:{values:d.map((f=>{if(typeof f!="number")throw c.createError("VectorValues must only contain numeric values.");return Li(c.serializer,f)}))}}}}}})(s,r);if(Uc(s))return s._toProto(r.serializer);throw r.createError(`Unsupported field value: ${Ys(s)}`)})(n,e)}function _u(n,e){const t={};return rc(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Tt(n,((s,r)=>{const a=ss(r,e.childContextForField(s));a!=null&&(t[s]=a)})),{mapValue:{fields:t}}}function bu(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ae||n instanceof We||n instanceof Fe||n instanceof ue||n instanceof ur||n instanceof Be||Uc(n))}function sa(n,e,t){if(!bu(t)||!nc(t)){const s=Ys(t);throw s==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+s)}}function Ot(n,e,t){if((e=Ke(e))instanceof ea)return e._internalPath;if(typeof e=="string")return Eu(n,e);throw Ws("Field path arguments must be of type string or ",n,!1,void 0,t)}const gg=new RegExp("[~\\*/\\[\\]]");function Eu(n,e,t){if(e.search(gg)>=0)throw Ws(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ea(...e.split("."))._internalPath}catch{throw Ws(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ws(n,e,t,s,r){const a=s&&!s.isEmpty(),o=r!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let d="";return(a||o)&&(d+=" (found",a&&(d+=` in field ${s}`),o&&(d+=` in document ${r}`),d+=")"),new O(C.INVALID_ARGUMENT,c+n+d)}function Tu(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class vg{convertValue(e,t="none"){switch(yt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(vt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw z(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Tt(e,((r,a)=>{s[r]=this.convertValue(a,t)})),s}convertVectorValue(e){var s,r,a;const t=(a=(r=(s=e.fields)==null?void 0:s[Bs].arrayValue)==null?void 0:r.values)==null?void 0:a.map((o=>ce(o.doubleValue)));return new Be(t)}convertGeoPoint(e){return new We(ce(e.latitude),ce(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=er(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Gn(e));default:return null}}convertTimestamp(e){const t=gt(e);return new ae(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=re.fromString(e);ne(Bc(s),9688,{name:e});const r=new Hn(s.get(1),s.get(3)),a=new U(s.popFirst(5));return r.isEqual(t)||et(`Document ${a} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
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
 */class ra extends vg{constructor(e){super(),this.firestore=e}convertBytes(e){return new Fe(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ue(this.firestore,null,t)}}function Vs(){return new na("serverTimestamp")}const Tl="@firebase/firestore",wl="4.12.0";/**
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
 */function Il(n){return(function(t,s){if(typeof t!="object"||t===null)return!1;const r=t;for(const a of s)if(a in r&&typeof r[a]=="function")return!0;return!1})(n,["next","error","complete"])}/**
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
 */class wu{constructor(e,t,s,r,a){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new ue(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new yg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Ot("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class yg extends wu{data(){return super.data()}}/**
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
 */function Iu(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new O(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ia{}class aa extends ia{}function Wr(n,e,...t){let s=[];e instanceof ia&&s.push(e),s=s.concat(t),(function(a){const o=a.filter((d=>d instanceof oa)).length,c=a.filter((d=>d instanceof fr)).length;if(o>1||o>0&&c>0)throw new O(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const r of s)n=r._apply(n);return n}class fr extends aa{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new fr(e,t,s)}_apply(e){const t=this._parse(e);return Au(e._query,t),new nt(e.firestore,e.converter,di(e._query,t))}_parse(e){const t=dr(e.firestore);return(function(a,o,c,d,h,f,p){let _;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new O(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Rl(p,f);const R=[];for(const V of p)R.push(Sl(d,a,V));_={arrayValue:{values:R}}}else _=Sl(d,a,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Rl(p,f),_=pg(c,o,p,f==="in"||f==="not-in");return fe.create(h,f,_)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Kr(n,e,t){const s=e,r=Ot("where",n);return fr._create(r,s,t)}class oa extends ia{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new oa(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:Ue.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(r,a){let o=r;const c=a.getFlattenedFilters();for(const d of c)Au(o,d),o=di(o,d)})(e._query,t),new nt(e.firestore,e.converter,di(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class la extends aa{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new la(e,t)}_apply(e){const t=(function(r,a,o){if(r.startAt!==null)throw new O(C.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new O(C.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Jn(a,o)})(e._query,this._field,this._direction);return new nt(e.firestore,e.converter,jf(e._query,t))}}function _g(n,e="asc"){const t=e,s=Ot("orderBy",n);return la._create(s,t)}class ca extends aa{constructor(e,t,s){super(),this.type=e,this._limit=t,this._limitType=s}static _create(e,t,s){return new ca(e,t,s)}_apply(e){return new nt(e.firestore,e.converter,js(e._query,this._limit,this._limitType))}}function Al(n){return ca._create("limit",n,"F")}function Sl(n,e,t){if(typeof(t=Ke(t))=="string"){if(t==="")throw new O(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!_c(e)&&t.indexOf("/")!==-1)throw new O(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(re.fromString(t));if(!U.isDocumentKey(s))throw new O(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return $o(n,new U(s))}if(t instanceof ue)return $o(n,t._key);throw new O(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ys(t)}.`)}function Rl(n,e){if(!Array.isArray(n)||n.length===0)throw new O(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Au(n,e){const t=(function(r,a){for(const o of r)for(const c of o.getFlattenedFilters())if(a.indexOf(c.op)>=0)return c.op;return null})(n.filters,(function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new O(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new O(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function Su(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}class Ln{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class xt extends wu{constructor(e,t,s,r,a,o){super(e,t,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new xs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Ot("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new O(C.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=xt._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}xt._jsonSchemaVersion="firestore/documentSnapshot/1.0",xt._jsonSchema={type:me("string",xt._jsonSchemaVersion),bundleSource:me("string","DocumentSnapshot"),bundleName:me("string"),bundle:me("string")};class xs extends xt{data(e={}){return super.data(e)}}class Nt{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Ln(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new xs(this._firestore,this._userDataWriter,s.key,s,new Ln(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new O(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(r,a){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map((c=>{const d=new xs(r._firestore,r._userDataWriter,c.doc.key,c.doc,new Ln(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);return c.doc,{type:"added",doc:d,oldIndex:-1,newIndex:o++}}))}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((c=>a||c.type!==3)).map((c=>{const d=new xs(r._firestore,r._userDataWriter,c.doc.key,c.doc,new Ln(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:bg(c.type),doc:d,oldIndex:h,newIndex:f}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new O(C.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Nt._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ci.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],r=[];return this.docs.forEach((a=>{a._document!==null&&(t.push(a._document),s.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),r.push(a.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function bg(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z(61501,{type:n})}}/**
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
 */Nt._jsonSchemaVersion="firestore/querySnapshot/1.0",Nt._jsonSchema={type:me("string",Nt._jsonSchemaVersion),bundleSource:me("string","QuerySnapshot"),bundleName:me("string"),bundle:me("string")};function Yr(n){n=$e(n,nt);const e=$e(n.firestore,Et),t=Zi(e),s=new ra(e);return Iu(n._query),sg(t,n._query).then((r=>new Nt(e,s,n,r)))}function Eg(n,e,t){n=$e(n,ue);const s=$e(n.firestore,Et),r=Su(n.converter,e,t),a=dr(s);return mr(s,[yu(a,"setDoc",n._key,r,n.converter!==null,t).toMutation(n._key,qe.none())])}function Ht(n,e,t,...s){n=$e(n,ue);const r=$e(n.firestore,Et),a=dr(r);let o;return o=typeof(e=Ke(e))=="string"||e instanceof ea?mg(a,"updateDoc",n._key,e,t,s):fg(a,"updateDoc",n._key,e),mr(r,[o.toMutation(n._key,qe.exists(!0))])}function Tg(n){return mr($e(n.firestore,Et),[new Mi(n._key,qe.none())])}function Xr(n,e){const t=$e(n.firestore,Et),s=Ge(n),r=Su(n.converter,e),a=dr(n.firestore);return mr(t,[yu(a,"addDoc",s._key,r,n.converter!==null,{}).toMutation(s._key,qe.exists(!1))]).then((()=>s))}function Cl(n,...e){var h,f,p;n=Ke(n);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||Il(e[s])||(t=e[s++]);const r={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Il(e[s])){const _=e[s];e[s]=(h=_.next)==null?void 0:h.bind(_),e[s+1]=(f=_.error)==null?void 0:f.bind(_),e[s+2]=(p=_.complete)==null?void 0:p.bind(_)}let a,o,c;if(n instanceof ue)o=$e(n.firestore,Et),c=ki(n._key.path),a={next:_=>{e[s]&&e[s](wg(o,n,_))},error:e[s+1],complete:e[s+2]};else{const _=$e(n,nt);o=$e(_.firestore,Et),c=_._query;const A=new ra(o);a={next:R=>{e[s]&&e[s](new Nt(o,A,_,R))},error:e[s+1],complete:e[s+2]},Iu(n._query)}const d=Zi(o);return ng(d,c,r,a)}function mr(n,e){const t=Zi(n);return rg(t,e)}function wg(n,e,t){const s=t.docs.get(e._key),r=new ra(n);return new xt(n,r,e._key,s,new Ln(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){nf(Uh),Fs(new Un("firestore",((s,{instanceIdentifier:r,options:a})=>{const o=s.getProvider("app").getImmediate(),c=new Et(new af(s.getProvider("auth-internal")),new cf(o,s.getProvider("app-check-internal")),Sf(o,r),o);return a={useFetchStreams:t,...a},c._setSettings(a),c}),"PUBLIC").setMultipleInstances(!0)),Yt(Tl,wl,e),Yt(Tl,wl,"esm2020")})();const Ig={apiKey:"AIzaSyD90SkLA57LCNnPRCDp5-sA6x2lF0oasMc",authDomain:"comebiblia-43643.firebaseapp.com",projectId:"comebiblia-43643",storageBucket:"comebiblia-43643.firebasestorage.app",messagingSenderId:"704190300094",appId:"1:704190300094:web:0a726168ed731032d803ef",measurementId:"G-DZPX4SB193"},Ag=zl(Ig),Ae=lg(Ag),Ru="player",Cu={name:"Jugador",avatar:"😊",level:1,xp:0,coins:50,totalGamesPlayed:0,totalCorrectAnswers:0,totalScore:0,gamesCompleted:{},bestScores:{},leaguePoints:0,league:"Pescador",createdAt:Date.now()},Bn=[0,100,250,500,800,1200,1700,2300,3e3,3800,4700,5700,6800,8e3,9500,11e3,13e3,15e3,17500,2e4],Pl=["Semilla","Brote","Plantita","Arbusto","Árbol Joven","Roble","Cedro del Líbano","Discípulo","Apóstol","Profeta","Siervo Fiel","Guerrero de Fe","Sabio","Maestro","Pastor","Evangelista","Misionero","Guardián","Ángel","Leyenda Bíblica"],Sg=["😊","😇","🙏","✝️","⭐","👑","🕊️","🌟","💪","🎯","📖","🏆"];let J=null;function De(){return J||(J=Ml(Ru,{...Cu})),{...J}}function Bt(){Ll(Ru,J)}function Pu(n){J||De(),J.name=n.trim()||"Jugador",Bt()}function Rg(n){J||De(),J.avatar=n,Bt()}function hn(n){J||De(),J.xp+=n;let e=!1;for(;J.level<Bn.length&&J.xp>=Bn[J.level];)J.level++,e=!0;return Bt(),e}function fn(n){J||De(),J.coins+=n,Bt(),pr()}function rs(n,e,t=0){J||De(),J.totalGamesPlayed++,J.totalScore+=e,J.totalCorrectAnswers+=t,J.gamesCompleted[n]||(J.gamesCompleted[n]=0),J.gamesCompleted[n]++,(!J.bestScores[n]||e>J.bestScores[n])&&(J.bestScores[n]=e),Bt()}function Cg(){const n=De();if(n.level>=Bn.length)return{current:n.xp,needed:n.xp,progress:1};const e=Bn[n.level-1]||0,t=Bn[n.level],s=(n.xp-e)/(t-e);return{current:n.xp-e,needed:t-e,progress:Math.min(s,1)}}function Pg(n=null){const e=n||De().level;return Pl[Math.min(e-1,Pl.length-1)]}function Dg(){return[...Sg]}function Vg(){J={...Cu,createdAt:Date.now()},Bt(),pr()}function pr(){const n=document.getElementById("coin-count");if(n){const e=De();n.textContent=e.coins}}function Dl(n){J||De(),J.leaguePoints=(J.leaguePoints||0)+n,J.leaguePoints<0&&(J.leaguePoints=0);const e=J.leaguePoints;e>=2e3?J.league="Profeta":e>=1200?J.league="Apóstol":e>=600?J.league="Evangelista":e>=200?J.league="Discípulo":J.league="Pescador",Bt(),Du()}async function Du(){const n=localStorage.getItem("bb_player_id");if(n&&Ae)try{await Eg(Ge(Ae,"bb_users",n),{name:J.name,avatar:J.avatar,leaguePoints:J.leaguePoints||0,league:J.league||"Pescador",updatedAt:Vs()},{merge:!0})}catch(e){console.error("Error syncing player state to Firestore:",e)}}const ua=[];function Xe(n){ua.push(n)}function xg(){return[...ua]}function Vu(n){return ua.find(e=>e.id===n)}const Ks=[{text:"Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.",ref:"Juan 3:16"},{text:"Todo lo puedo en Cristo que me fortalece.",ref:"Filipenses 4:13"},{text:"Jehová es mi pastor; nada me faltará.",ref:"Salmos 23:1"},{text:"Confía en Jehová con todo tu corazón, y no te apoyes en tu propia prudencia.",ref:"Proverbios 3:5"},{text:"Y sabemos que a los que aman a Dios, todas las cosas les ayudan a bien.",ref:"Romanos 8:28"},{text:"No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios.",ref:"Isaías 41:10"},{text:"Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal.",ref:"Jeremías 29:11"},{text:"El Señor es mi luz y mi salvación; ¿de quién temeré?",ref:"Salmos 27:1"},{text:"Mas el fruto del Espíritu es amor, gozo, paz, paciencia, benignidad, bondad, fe.",ref:"Gálatas 5:22"},{text:"Esforzaos y cobrad ánimo; no temáis, ni tengáis miedo de ellos.",ref:"Deuteronomio 31:6"},{text:"En el principio creó Dios los cielos y la tierra.",ref:"Génesis 1:1"},{text:"Clama a mí, y yo te responderé, y te enseñaré cosas grandes y ocultas que tú no conoces.",ref:"Jeremías 33:3"},{text:"Porque donde están dos o tres congregados en mi nombre, allí estoy yo en medio de ellos.",ref:"Mateo 18:20"},{text:"Yo soy el camino, la verdad y la vida; nadie viene al Padre sino por mí.",ref:"Juan 14:6"},{text:"Dad gracias en todo, porque esta es la voluntad de Dios para con vosotros en Cristo Jesús.",ref:"1 Tesalonicenses 5:18"},{text:"El amor es paciente, es bondadoso. El amor no es envidioso ni jactancioso ni orgulloso.",ref:"1 Corintios 13:4"},{text:"Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios.",ref:"Efesios 2:8"},{text:"Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.",ref:"Mateo 11:28"},{text:"He aquí, yo estoy a la puerta y llamo; si alguno oye mi voz y abre la puerta, entraré a él.",ref:"Apocalipsis 3:20"},{text:"Bienaventurados los pacificadores, porque ellos serán llamados hijos de Dios.",ref:"Mateo 5:9"},{text:"Lámpara es a mis pies tu palabra, y lumbrera a mi camino.",ref:"Salmos 119:105"},{text:"Amarás al Señor tu Dios con todo tu corazón, y con toda tu alma, y con toda tu mente.",ref:"Mateo 22:37"},{text:"Los cielos cuentan la gloria de Dios, y el firmamento anuncia la obra de sus manos.",ref:"Salmos 19:1"},{text:"No se amolden al mundo actual, sino sean transformados mediante la renovación de su mente.",ref:"Romanos 12:2"},{text:"Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes.",ref:"Josué 1:9"},{text:"Ama a tu prójimo como a ti mismo.",ref:"Marcos 12:31"},{text:"Pedid, y se os dará; buscad, y hallaréis; llamad, y se os abrirá.",ref:"Mateo 7:7"},{text:"El Señor es bueno; es refugio en el día de la angustia, y conoce a los que en Él confían.",ref:"Nahúm 1:7"},{text:"Alégrate, joven, en tu juventud; y tome placer tu corazón en los días de tu adolescencia.",ref:"Eclesiastés 11:9"},{text:"Grande es el Señor y digno de toda alabanza; su grandeza es insondable.",ref:"Salmos 145:3"},{text:"Si Dios es por nosotros, ¿quién contra nosotros?",ref:"Romanos 8:31"},{text:"Yo he venido para que tengan vida, y para que la tengan en abundancia.",ref:"Juan 10:10"},{text:"Sean fuertes y valientes. No teman ni se asusten, porque el Señor su Dios siempre los acompañará.",ref:"Deuteronomio 31:6"},{text:"Así brille la luz de ustedes delante de todos, para que vean sus buenas obras y glorifiquen al Padre.",ref:"Mateo 5:16"},{text:"Encomienda al Señor tu camino; confía en él, y él actuará.",ref:"Salmos 37:5"},{text:"Instruye al niño en su camino, y aun cuando fuere viejo no se apartará de él.",ref:"Proverbios 22:6"},{text:"El que habita al abrigo del Altísimo morará bajo la sombra del Omnipotente.",ref:"Salmos 91:1"},{text:"Acerquémonos con confianza al trono de la gracia para recibir misericordia y hallar gracia.",ref:"Hebreos 4:16"},{text:"Deléitate asimismo en Jehová, y él te concederá las peticiones de tu corazón.",ref:"Salmos 37:4"},{text:"Con amor eterno te he amado; por tanto, te prolongué mi misericordia.",ref:"Jeremías 31:3"}];function xu(){const n=new Date,e=Math.floor((n-new Date(n.getFullYear(),0,0))/864e5);return Ks[e%Ks.length]}function Ng(n,e=[]){return Ks.filter(r=>!e.includes(r.ref)).sort(()=>Math.random()-.5).slice(0,n)}const kg=[{name:"María",avatar:"👩",score:2800,level:8},{name:"Daniel",avatar:"👦",score:2400,level:7},{name:"Sara",avatar:"👧",score:2100,level:6},{name:"José",avatar:"🧑",score:1800,level:5},{name:"Rebeca",avatar:"👩‍🦱",score:1500,level:5},{name:"David",avatar:"👨",score:1200,level:4},{name:"Esther",avatar:"👩‍🦰",score:900,level:3},{name:"Pablo",avatar:"🧔",score:600,level:2},{name:"Ana",avatar:"👱‍♀️",score:400,level:2},{name:"Samuel",avatar:"👶",score:200,level:1}];function Nu(){const n=De(),e=[...kg,{name:n.name,avatar:n.avatar,score:n.totalScore,level:n.level,isCurrentPlayer:!0}];return e.sort((t,s)=>s.score-t.score),e.map((t,s)=>({...t,position:s+1}))}function da(){const n=Nu(),e=n.find(t=>t.isCurrentPlayer);return(e==null?void 0:e.position)||n.length}function Lg(n){var o,c;const e=De(),t=xu(),s=xg(),r=da(),a=["linear-gradient(135deg, #4361ee, #6c83f7)","linear-gradient(135deg, #a855f7, #c084fc)","linear-gradient(135deg, #06d6a0, #34d399)","linear-gradient(135deg, #fb923c, #fdba74)","linear-gradient(135deg, #f472b6, #f9a8d4)"];n.innerHTML=`
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
  `,n.querySelectorAll(".game-card").forEach(d=>{d.addEventListener("click",()=>{const h=d.dataset.gameId;pe("game",{gameId:h})})}),(o=document.getElementById("verse-card-home"))==null||o.addEventListener("click",()=>{pe("verse")}),(c=document.getElementById("btn-ranking"))==null||c.addEventListener("click",()=>{pe("ranking")})}function W(n,e="info",t=3e3){const s=document.getElementById("toast-container");if(!s)return;const r=document.createElement("div");r.className=`toast toast-${e}`;const a={success:"✅",error:"❌",info:"ℹ️",reward:"🎁"};r.innerHTML=`<span>${a[e]||"📢"}</span><span>${n}</span>`,s.appendChild(r),setTimeout(()=>{r.classList.add("removing"),setTimeout(()=>r.remove(),300)},t)}function Mg(n,e,t=[]){const s=document.getElementById("modal-overlay");if(!s)return;const r=t.map(a=>`<button class="btn ${a.class||"btn-primary"} btn-block" id="modal-btn-${a.id}">${a.label}</button>`).join("");s.innerHTML=`
    <div class="modal">
      <h2>${n}</h2>
      <p>${e}</p>
      <div class="flex flex-col gap-sm">${r}</div>
    </div>
  `,s.classList.remove("hidden"),t.forEach(a=>{const o=document.getElementById(`modal-btn-${a.id}`);o&&o.addEventListener("click",()=>{s.classList.add("hidden"),a.onClick&&a.onClick()})})}function Pe(n){const e=[...n];for(let t=e.length-1;t>0;t--){const s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}return e}function Vl(n){return n>=1e3?(n/1e3).toFixed(1)+"K":n.toString()}function Og(n){var s,r;const e=xu(),t=Ng(5,[e.ref]);n.innerHTML=`
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
  `,(s=document.getElementById("btn-share-verse"))==null||s.addEventListener("click",()=>{var o;const a=`"${e.text}" — ${e.ref}`;navigator.share?navigator.share({title:"Versículo del Día",text:a}).catch(()=>{}):(o=navigator.clipboard)==null||o.writeText(a).then(()=>{W("Versículo copiado al portapapeles","success")})}),(r=document.getElementById("btn-copy-verse"))==null||r.addEventListener("click",()=>{var o;const a=`"${e.text}" — ${e.ref}`;(o=navigator.clipboard)==null||o.writeText(a).then(()=>{W("Versículo copiado ✅","success")}).catch(()=>{W("No se pudo copiar","error")})})}const ku="achievements",ha=[{id:"first_game",name:"Primeros Pasos",desc:"Completa tu primer juego",icon:"🐣",coins:10},{id:"games_5",name:"Jugador Activo",desc:"Completa 5 juegos",icon:"🎮",coins:25},{id:"games_25",name:"Veterano",desc:"Completa 25 juegos",icon:"🏅",coins:50},{id:"games_100",name:"Leyenda",desc:"Completa 100 juegos",icon:"🏆",coins:100},{id:"perfect_trivia",name:"Erudito Bíblico",desc:"Puntuación perfecta en Trivia",icon:"🧠",coins:30},{id:"trivia_10",name:"Sabio",desc:"Completa 10 partidas de Trivia",icon:"📚",coins:25},{id:"character_5",name:"Detective Bíblico",desc:"Adivina 5 personajes",icon:"🔍",coins:20},{id:"verse_master",name:"Memorizador",desc:"Completa 10 versículos",icon:"📖",coins:30},{id:"word_hunter",name:"Cazapalabras",desc:"Completa 5 sopas de letras",icon:"🔤",coins:20},{id:"memory_king",name:"Rey de la Memoria",desc:"Completa 5 juegos de Memoria",icon:"🃏",coins:20},{id:"level_5",name:"Discípulo",desc:"Alcanza el nivel 5",icon:"⭐",coins:30},{id:"level_10",name:"Apóstol",desc:"Alcanza el nivel 10",icon:"🌟",coins:50},{id:"coins_500",name:"Tesoro",desc:"Acumula 500 monedas",icon:"💰",coins:25},{id:"all_games",name:"Explorador",desc:"Juega todos los juegos",icon:"🗺️",coins:40},{id:"streak_3",name:"Racha Divina",desc:"3 respuestas correctas seguidas",icon:"🔥",coins:15},{id:"fast_answer",name:"Rayo",desc:"Responde en menos de 3 segundos",icon:"⚡",coins:15}];let Ns=null;function fa(){return Ns||(Ns=Ml(ku,{})),Ns}function Se(n){const e=fa();if(e[n])return!1;const t=ha.find(s=>s.id===n);return t?(e[n]={unlockedAt:Date.now()},Ns=e,Ll(ku,e),W(`🏆 ¡Logro desbloqueado: ${t.name}!`,"reward"),!0):!1}function Lu(){return Object.keys(fa()).length}function Mu(){return ha.length}function Fg(){const n=fa();return ha.map(e=>{var t;return{...e,unlocked:!!n[e.id],unlockedAt:((t=n[e.id])==null?void 0:t.unlockedAt)||null}})}function $g(){const n=De();n.totalGamesPlayed>=1&&Se("first_game"),n.totalGamesPlayed>=5&&Se("games_5"),n.totalGamesPlayed>=25&&Se("games_25"),n.totalGamesPlayed>=100&&Se("games_100"),n.level>=5&&Se("level_5"),n.level>=10&&Se("level_10"),n.coins>=500&&Se("coins_500"),["trivia","characters","verse-complete","word-search","memory"].every(s=>(n.gamesCompleted[s]||0)>0)&&Se("all_games"),(n.gamesCompleted.trivia||0)>=10&&Se("trivia_10"),(n.gamesCompleted.characters||0)>=5&&Se("character_5"),(n.gamesCompleted["verse-complete"]||0)>=10&&Se("verse_master"),(n.gamesCompleted["word-search"]||0)>=5&&Se("word_hunter"),(n.gamesCompleted.memory||0)>=5&&Se("memory_king")}function qg(n){var d,h,f;const e=De(),t=Cg(),s=Pg(),r=Lu(),a=Mu(),o=da(),c=Dg();n.innerHTML=`
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
  `,(d=document.getElementById("btn-change-avatar"))==null||d.addEventListener("click",()=>{var p;(p=document.getElementById("avatar-picker"))==null||p.classList.toggle("hidden")}),(h=document.getElementById("btn-close-avatar-picker"))==null||h.addEventListener("click",()=>{var p;(p=document.getElementById("avatar-picker"))==null||p.classList.add("hidden")}),document.querySelectorAll(".avatar-option").forEach(p=>{p.addEventListener("click",()=>{const _=p.dataset.avatar;Rg(_),document.getElementById("profile-avatar").textContent=_,document.querySelectorAll(".avatar-option").forEach(A=>A.classList.remove("selected")),p.classList.add("selected"),W("Avatar actualizado ✅","success")})}),(f=document.getElementById("btn-edit-name"))==null||f.addEventListener("click",()=>{const p=prompt("Ingresa tu nombre:",e.name);p&&p.trim()&&(Pu(p.trim()),document.getElementById("profile-name").textContent=p.trim(),W("Nombre actualizado ✅","success"))})}function Bg(n){const e=Fg(),t=Lu(),s=Mu(),r=Math.round(t/s*100);n.innerHTML=`
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
  `}function Ug(n){var s,r;const e=De();n.innerHTML=`
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
  `,(s=document.getElementById("setting-name"))==null||s.addEventListener("click",()=>{const a=prompt("Ingresa tu nombre:",e.name);a&&a.trim()&&(Pu(a.trim()),document.getElementById("display-name").textContent=a.trim(),W("Nombre actualizado ✅","success"))});const t=document.getElementById("toggle-dark");t&&(t.checked=!document.body.classList.contains("light-theme"),t.addEventListener("change",a=>{a.target.checked?(document.body.classList.remove("light-theme"),localStorage.setItem("theme","dark")):(document.body.classList.add("light-theme"),localStorage.setItem("theme","light"))})),(r=document.getElementById("btn-reset-data"))==null||r.addEventListener("click",()=>{Mg("⚠️ ¿Estás seguro?","Se borrarán todas tus monedas, logros, estadísticas y progreso. Esta acción no se puede deshacer.",[{id:"confirm-reset",label:"🗑️ Sí, borrar todo",class:"btn-danger",onClick:()=>{gd(),Vg(),W("Datos borrados","info"),pe("home")}},{id:"cancel-reset",label:"Cancelar",class:"btn-secondary"}])})}function jg(n){const e=Nu(),t=da(),s=["🥇","🥈","🥉"];n.innerHTML=`
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
  `}const Me={easy:[{q:"¿Quién construyó el arca?",options:["Abraham","Noé","Moisés","David"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuántos días tomó crear Dios el mundo?",options:["5","6","7","3"],answer:1,category:"Creación"},{q:"¿Quién fue el primer hombre?",options:["Noé","Abel","Adán","Set"],answer:2,category:"Creación"},{q:"¿Quién fue la primera mujer?",options:["Sara","Eva","Rebeca","María"],answer:1,category:"Creación"},{q:"¿En qué ciudad nació Jesús?",options:["Nazaret","Jerusalén","Belén","Capernaúm"],answer:2,category:"Nuevo Testamento"},{q:"¿Cuántos discípulos tuvo Jesús?",options:["10","11","12","13"],answer:2,category:"Nuevo Testamento"},{q:"¿Quién mató a Goliat?",options:["Saúl","David","Jonatán","Sansón"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué animal habló con Balaam?",options:["Un perro","Una burra","Un león","Una serpiente"],answer:1,category:"Antiguo Testamento"},{q:"¿De dónde era la madre de Jesús?",options:["Belén","Jerusalén","Nazaret","Egipto"],answer:2,category:"Nuevo Testamento"},{q:"¿Quién fue tragado por un gran pez?",options:["Pedro","Elías","Jonás","Daniel"],answer:2,category:"Antiguo Testamento"},{q:"¿Cuál fue el primer milagro de Jesús?",options:["Caminar sobre agua","Convertir agua en vino","Sanar un ciego","Multiplicar panes"],answer:1,category:"Milagros"},{q:"¿Quién bautizó a Jesús?",options:["Pedro","Juan el Bautista","Pablo","Santiago"],answer:1,category:"Nuevo Testamento"},{q:"¿En qué monte recibió Moisés los mandamientos?",options:["Carmelo","Sinaí","Ararat","Sión"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuántos mandamientos dio Dios?",options:["5","7","10","12"],answer:2,category:"Antiguo Testamento"},{q:"¿Quién negó a Jesús tres veces?",options:["Judas","Pedro","Tomás","Juan"],answer:1,category:"Nuevo Testamento"},{q:"¿Cuántos libros tiene la Biblia?",options:["55","66","72","39"],answer:1,category:"General"},{q:"¿Quién fue el hermano de Moisés?",options:["Josué","Aarón","Caleb","Leví"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué instrumento tocaba David?",options:["Flauta","Arpa","Trompeta","Tambor"],answer:1,category:"Antiguo Testamento"},{q:"¿Quién fue vendido por sus hermanos?",options:["Benjamín","José","Rubén","Judá"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuál es el primer libro de la Biblia?",options:["Éxodo","Génesis","Salmos","Mateo"],answer:1,category:"General"},{q:"¿Qué símbolo apareció después del diluvio?",options:["Una estrella","Un arcoíris","Una paloma","Una nube"],answer:1,category:"Antiguo Testamento"},{q:"¿En qué se convirtió la esposa de Lot?",options:["Piedra","Estatua de sal","Arena","Ceniza"],answer:1,category:"Antiguo Testamento"},{q:"¿Quién era el rey más sabio?",options:["David","Salomón","Saúl","Josías"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué fruta comieron Adán y Eva?",options:["Manzana","Fruto prohibido","Uva","Higo"],answer:1,category:"Creación"},{q:"¿Quién era el padre de Juan el Bautista?",options:["José","Zacarías","Simeón","Elías"],answer:1,category:"Nuevo Testamento"}],medium:[{q:"¿Cuántos años vivió Matusalén?",options:["800","900","969","1000"],answer:2,category:"Antiguo Testamento"},{q:"¿Quién era el padre de Salomón?",options:["Abraham","David","Saúl","Moisés"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué profeta subió al cielo en un carro de fuego?",options:["Elías","Eliseo","Isaías","Jeremías"],answer:0,category:"Profetas"},{q:"¿Cuántos años duró el pueblo de Israel en el desierto?",options:["20","30","40","50"],answer:2,category:"Antiguo Testamento"},{q:"¿Quién interpretó los sueños del Faraón?",options:["Moisés","Daniel","José","Aarón"],answer:2,category:"Antiguo Testamento"},{q:"¿Quién escribió la mayor parte de los Salmos?",options:["Salomón","David","Moisés","Asaf"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuál era la profesión de Pablo antes de ser apóstol?",options:["Pescador","Carpintero","Fabricante de tiendas","Recaudador"],answer:2,category:"Nuevo Testamento"},{q:"¿Quién fue el primer mártir cristiano?",options:["Pedro","Esteban","Santiago","Pablo"],answer:1,category:"Nuevo Testamento"},{q:"¿En qué isla estuvo exiliado Juan?",options:["Creta","Chipre","Patmos","Malta"],answer:2,category:"Nuevo Testamento"},{q:"¿Cuántas tribus de Israel había?",options:["10","11","12","13"],answer:2,category:"Antiguo Testamento"},{q:"¿Quién fue el sucesor de Moisés?",options:["Caleb","Josué","Aarón","Eleazar"],answer:1,category:"Antiguo Testamento"},{q:"¿Dónde fue crucificado Jesús?",options:["Monte Sión","Getsemaní","Gólgota","Betania"],answer:2,category:"Nuevo Testamento"},{q:"¿Quién fue arrojado al foso de los leones?",options:["Jonás","Daniel","Eliseo","Jeremías"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuál es el libro más corto del Nuevo Testamento?",options:["Judas","2 Juan","3 Juan","Filemón"],answer:2,category:"General"},{q:"¿Quién fue la esposa de Abraham?",options:["Agar","Sara","Lea","Rebeca"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué apóstol era recaudador de impuestos?",options:["Pedro","Mateo","Juan","Andrés"],answer:1,category:"Nuevo Testamento"},{q:"¿Cuántos panes usó Jesús para alimentar a 5000?",options:["3","5","7","12"],answer:1,category:"Milagros"},{q:"¿Quién traicionó a Jesús?",options:["Pedro","Tomás","Judas Iscariote","Bartolomé"],answer:2,category:"Nuevo Testamento"},{q:"¿Cómo murió Sansón?",options:["En batalla","Derribó el templo","Por enfermedad","Crucificado"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué reina visitó a Salomón por su sabiduría?",options:["Jezabel","Ester","Reina de Sabá","Betsabé"],answer:2,category:"Antiguo Testamento"},{q:"¿Cuántos libros del Nuevo Testamento escribió Pablo?",options:["7","10","13","15"],answer:2,category:"General"},{q:"¿Quién fue el primer rey de Israel?",options:["David","Salomón","Saúl","Samuel"],answer:2,category:"Antiguo Testamento"},{q:"¿Qué lenguaje hablaba Jesús?",options:["Hebreo","Griego","Arameo","Latín"],answer:2,category:"General"},{q:"¿Quién cortó la oreja de un soldado en Getsemaní?",options:["Juan","Pedro","Santiago","Judas"],answer:1,category:"Nuevo Testamento"},{q:"¿Cuántos días estuvo Lázaro muerto antes de ser resucitado?",options:["2","3","4","7"],answer:2,category:"Milagros"}],hard:[{q:"¿Cuál es el versículo más corto de la Biblia?",options:["Juan 3:16","Juan 11:35","Éxodo 20:13","1 Tesalonicenses 5:16"],answer:1,category:"General"},{q:"¿Quién era Melquisedec?",options:["Un profeta","Rey y sacerdote de Salem","Un ángel","Un juez de Israel"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuántos años reinó David en Jerusalén?",options:["20","33","40","45"],answer:1,category:"Antiguo Testamento"},{q:"¿Quién fue la primera persona en ver a Jesús resucitado?",options:["Pedro","Juan","María Magdalena","Tomás"],answer:2,category:"Nuevo Testamento"},{q:"¿En qué río fue bautizado Jesús?",options:["Nilo","Éufrates","Jordán","Tigris"],answer:2,category:"Nuevo Testamento"},{q:"¿Qué iglesia criticó Jesús por ser tibia?",options:["Éfeso","Sardis","Filadelfia","Laodicea"],answer:3,category:"Apocalipsis"},{q:"¿Quién era Nicodemo?",options:["Sacerdote","Fariseo","Saduceo","Centurión"],answer:1,category:"Nuevo Testamento"},{q:"¿Cuántos hijos tuvo Jacob?",options:["10","11","12","13"],answer:2,category:"Antiguo Testamento"},{q:"¿Qué profeta fue llamado por Dios siendo niño?",options:["Isaías","Jeremías","Samuel","Daniel"],answer:2,category:"Profetas"},{q:"¿Cuál es el salmo más largo?",options:["Salmo 23","Salmo 91","Salmo 119","Salmo 150"],answer:2,category:"General"},{q:"¿Quién fue el suegro de Moisés?",options:["Labán","Jetro","Ragüel","Éter"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuántas plagas envió Dios a Egipto?",options:["7","9","10","12"],answer:2,category:"Antiguo Testamento"},{q:"¿Quién construyó el primer templo en Jerusalén?",options:["David","Salomón","Herodes","Zorobabel"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué don especial tenía José el hijo de Jacob?",options:["Fuerza","Interpretar sueños","Profecía","Sabiduría"],answer:1,category:"Antiguo Testamento"},{q:"¿En qué libro se encuentra el capítulo del amor?",options:["Romanos","1 Corintios","Efesios","Filipenses"],answer:1,category:"Nuevo Testamento"},{q:"¿Cuántos jinetes del Apocalipsis hay?",options:["3","4","7","12"],answer:1,category:"Apocalipsis"},{q:"¿Quién era Barrabás?",options:["Discípulo","Sacerdote","Prisionero liberado","Soldado romano"],answer:2,category:"Nuevo Testamento"},{q:"¿En qué se transformó la vara de Moisés ante Faraón?",options:["Fuego","Serpiente","Flores","Agua"],answer:1,category:"Antiguo Testamento"},{q:"¿Quién escribió el Apocalipsis?",options:["Pablo","Pedro","Juan","Lucas"],answer:2,category:"General"},{q:"¿Cuántas puertas tiene la Nueva Jerusalén?",options:["7","10","12","24"],answer:2,category:"Apocalipsis"},{q:"¿Qué patriarca vivió en Ur de los Caldeos?",options:["Isaac","Abraham","Jacob","Noé"],answer:1,category:"Antiguo Testamento"},{q:"¿Quién era Bernabé?",options:["Apóstol original","Compañero de Pablo","Profeta del AT","Juez"],answer:1,category:"Nuevo Testamento"},{q:"¿Qué mujer se disfrazó para consultar a una médium?",options:["Jezabel","Saúl","Dalila","Mical"],answer:1,category:"Antiguo Testamento"},{q:"¿En qué batalla se detuvo el sol?",options:["Jericó","Gabaón","Hai","Betel"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué apóstol fue arrebatado al tercer cielo?",options:["Juan","Pedro","Pablo","Santiago"],answer:2,category:"Nuevo Testamento"}]};function zg(n,e,t="easy"){const r={easy:1,medium:1.5,hard:2}[t]||1,a=Math.floor(e*.5*r),o=Math.floor(e*r);return{coins:Math.max(a,5),xp:Math.max(o,10)}}function is(n,e,t=0,s="easy"){const r=zg(n,e,s);fn(r.coins);const a=hn(r.xp);if(a){const o=De();W(`🎉 ¡Subiste al nivel ${o.level}!`,"reward")}return setTimeout(()=>$g(),500),{...r,leveledUp:a}}function Gg(n){const s=[...Me.easy.map(D=>({...D,diff:"easy"})),...Me.medium.map(D=>({...D,diff:"medium"})),...Me.hard.map(D=>({...D,diff:"hard"}))],r=Pe(s).slice(0,10);let a=0,o=0,c=0,d=0,h=null,f=20,p=!1;function _(){const D=r[a];p=!1,f=20;const L={easy:"Fácil",medium:"Medio",hard:"Difícil"},q={easy:"var(--color-success)",medium:"var(--color-gold)",hard:"var(--color-error)"};n.innerHTML=`
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
    `,A(),n.querySelectorAll(".trivia-option").forEach(F=>{F.addEventListener("click",()=>{if(p)return;const k=parseInt(F.dataset.index);R(k,D)})})}function A(){clearInterval(h);const D=document.getElementById("timer-ring"),L=2*Math.PI*42;h=setInterval(()=>{f--;const q=document.getElementById("timer-text");if(q&&(q.textContent=f),D){const F=L*(1-f/20);D.setAttribute("stroke-dashoffset",F),f<=5&&D.setAttribute("stroke","var(--color-error)")}f<=0&&(clearInterval(h),V())},1e3)}function R(D,L){p=!0,clearInterval(h);const q=n.querySelectorAll(".trivia-option"),F=D===L.answer;if(q.forEach((k,N)=>{k.disabled=!0,N===L.answer&&k.classList.add("correct"),N===D&&!F&&k.classList.add("wrong")}),F){c++,d++;const k=Math.floor(f*2),N={easy:10,medium:20,hard:30},b=10+k+(N[L.diff]||0);o+=b,d>=3&&Se("streak_3"),f>=17&&Se("fast_answer")}else d=0;setTimeout(()=>{a++,a<10?_():x()},1500)}function V(){p=!0,d=0;const D=r[a];n.querySelectorAll(".trivia-option").forEach((q,F)=>{q.disabled=!0,F===D.answer&&q.classList.add("correct")}),W("⏰ ¡Se acabó el tiempo!","error"),setTimeout(()=>{a++,a<10?_():x()},1500)}function x(){var F,k;clearInterval(h);const D=Math.round(c/10*100);D===100&&Se("perfect_trivia");const L=is("trivia",o,c,"easy");rs("trivia",o,c);const q=D>=80?"🏆":D>=60?"😊":D>=40?"🤔":"📖";n.innerHTML=`
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
    `,(F=document.getElementById("btn-play-again"))==null||F.addEventListener("click",()=>{pe("game",{gameId:"trivia"})}),(k=document.getElementById("btn-go-home"))==null||k.addEventListener("click",()=>{pe("home")})}return _(),()=>{clearInterval(h)}}const Ti=[{name:"Moisés",clues:["Fue criado en el palacio de un faraón.","Dios le habló desde una zarza ardiente.","Liberó al pueblo de Israel de la esclavitud.","Recibió los Diez Mandamientos en el monte Sinaí.","Abrió las aguas del Mar Rojo."],book:"Éxodo"},{name:"David",clues:["Era el hijo menor de su familia.","Fue pastor de ovejas en su juventud.","Tocaba el arpa con gran habilidad.","Derrotó a un gigante con una piedra y una honda.","Se convirtió en el segundo rey de Israel."],book:"Samuel"},{name:"Noé",clues:["Era un hombre justo en su generación.","Dios le encomendó una misión especial de rescate.","Trabajó construyendo algo enorme durante muchos años.","Reunió animales de todas las especies.","Construyó el arca y sobrevivió al diluvio."],book:"Génesis"},{name:"Abraham",clues:["Vivía originalmente en Ur de los Caldeos.","Dios le prometió descendencia como las estrellas.","Su esposa se llamaba Sara.","Fue llamado el padre de la fe.","Estuvo dispuesto a sacrificar a su hijo Isaac."],book:"Génesis"},{name:"José",clues:["Era el favorito de su padre Jacob.","Sus hermanos le tenían envidia.","Fue vendido y llevado a un país lejano.","Tenía el don de interpretar sueños.","Llegó a ser gobernador de Egipto."],book:"Génesis"},{name:"Daniel",clues:["Fue llevado cautivo a Babilonia siendo joven.","Se negó a comer la comida del rey.","Interpretó el sueño de una gran estatua.","Sus enemigos buscaron destruirlo por su fe.","Fue arrojado al foso de los leones."],book:"Daniel"},{name:"Sansón",clues:["Su nacimiento fue anunciado por un ángel.","Era nazareo desde su nacimiento.","Su fuerza era sobrenatural.","Una mujer descubrió el secreto de su poder.","Derribó el templo de los filisteos."],book:"Jueces"},{name:"Salomón",clues:["Era hijo del segundo rey de Israel.","Pidió sabiduría a Dios en lugar de riquezas.","Construyó el primer templo de Jerusalén.","La Reina de Sabá visitó su corte.","Es considerado el hombre más sabio que ha existido."],book:"Reyes"},{name:"María",clues:["Era una joven de Nazaret.","Un ángel le anunció un mensaje especial.","Estaba comprometida con un carpintero.","Visitó a su prima Elisabet.","Es la madre de Jesús."],book:"Lucas"},{name:"Pedro",clues:["Era pescador de profesión.","Su hermano también era discípulo de Jesús.","Caminó sobre el agua por un momento.","Negó conocer a Jesús tres veces.","Se convirtió en líder de la iglesia primitiva."],book:"Evangelios"},{name:"Pablo",clues:["Su nombre original era Saulo.","Perseguía a los primeros cristianos.","Tuvo un encuentro sobrenatural camino a Damasco.","Escribió muchas cartas del Nuevo Testamento.","Realizó varios viajes misioneros por el Mediterráneo."],book:"Hechos"},{name:"Elías",clues:["Fue un profeta del reino del norte.","Desafió a los profetas de un dios falso.","Fue alimentado por cuervos junto a un arroyo.","Hizo descender fuego del cielo.","Subió al cielo en un carro de fuego."],book:"Reyes"},{name:"Rut",clues:["No era israelita de nacimiento.","Fue nuera de Noemí.",'Dijo: "A donde tú vayas, iré yo".',"Trabajó recogiendo espigas en un campo.","Se convirtió en bisabuela del rey David."],book:"Rut"},{name:"Ester",clues:["Era huérfana criada por su primo.","Llegó a ser reina de Persia.","Arriesgó su vida para salvar a su pueblo.","Organizó un banquete para revelar un complot.","Su historia se celebra en la fiesta de Purim."],book:"Ester"},{name:"Jonás",clues:["Dios le pidió ir a una ciudad malvada.","Intentó huir de la misión de Dios.","Fue lanzado al mar durante una tormenta.","Pasó tres días dentro de un gran pez.","Finalmente predicó en Nínive."],book:"Jonás"},{name:"Juan el Bautista",clues:["Su padre quedó mudo cuando anunció su nacimiento.","Vivía en el desierto.","Comía langostas y miel silvestre.","Predicaba arrepentimiento y bautismo.","Bautizó a Jesús en el río Jordán."],book:"Evangelios"},{name:"Josué",clues:["Fue asistente de Moisés durante años.","Era uno de los doce espías enviados a Canaán.","Fue valiente cuando otros tuvieron miedo.","Lideró al pueblo cruzando el río Jordán.","Conquistó las murallas de Jericó."],book:"Josué"},{name:"Jacob",clues:["Era hermano gemelo de Esaú.","Obtuvo la bendición de su padre mediante un engaño.","Soñó con una escalera que llegaba al cielo.","Trabajó 14 años para casarse con Raquel.","Luchó con un ángel y fue llamado Israel."],book:"Génesis"}];function Hg(n){const t=Pe([...Ti]).slice(0,5);let s=0,r=0,a=0,o=0;function c(){const p=t[s];o=0;const _=Ti.filter(V=>V.name!==p.name).map(V=>V.name),A=Pe(_).slice(0,3),R=Pe([p.name,...A]);d(p,R)}function d(p,_){var V;const A=p.clues.slice(0,o+1),R=Math.max(50-o*10,10);n.innerHTML=`
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
          ${_.map(x=>`
            <button class="characters-option" data-name="${x}">${x}</button>
          `).join("")}
        </div>
      </div>
    `,(V=document.getElementById("btn-more-clue"))==null||V.addEventListener("click",()=>{o++,d(p,_)}),n.querySelectorAll(".characters-option").forEach(x=>{x.addEventListener("click",()=>{const D=x.dataset.name;h(D,p)})})}function h(p,_,A){const R=p===_.name;if(n.querySelectorAll(".characters-option").forEach(V=>{V.disabled=!0,V.dataset.name===_.name&&V.classList.add("correct"),V.dataset.name===p&&!R&&V.classList.add("wrong")}),R){a++;const V=Math.max(50-o*10,10);r+=V,W(`✅ ¡Correcto! +${V} pts`,"success")}else W(`❌ Era: ${_.name}`,"error");setTimeout(()=>{s++,s<5?c():f()},1800)}function f(){var A,R;const p=is("characters",r,a,"medium");rs("characters",r,a);const _=a>=4?"🕵️":a>=3?"😊":"📖";n.innerHTML=`
      <div class="game-results">
        <div class="results-emoji">${_}</div>
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
    `,(A=document.getElementById("btn-play-again"))==null||A.addEventListener("click",()=>{pe("game",{gameId:"characters"})}),(R=document.getElementById("btn-go-home"))==null||R.addEventListener("click",()=>{pe("home")})}c()}function Qg(n){const t=Pe([...Ks]).slice(0,5);let s=0,r=0,a=0;function o(h){const f=h.text.split(" "),p=Math.min(3,Math.max(2,Math.floor(f.length/5))),_=[];for(;_.length<p;){const L=Math.floor(Math.random()*f.length);!_.includes(L)&&f[L].length>3&&_.push(L)}_.sort((L,q)=>L-q);const A=[],R=[];f.forEach((L,q)=>{if(_.includes(q)){const F=L.replace(/[.,;:!?¡¿"']/g,""),k=L.replace(F,"");A.push({type:"blank",original:F,punct:k,index:R.length}),R.push(F)}else A.push({type:"word",text:L})});const x=Pe(["gracia","verdad","camino","espíritu","gloria","pueblo","cielo","tierra","corazón","alma"].filter(L=>!R.includes(L.toLowerCase()))).slice(0,2),D=Pe([...R,...x]);return{blankedWords:A,missingWords:R,allOptions:D}}function c(){const h=t[s],{blankedWords:f,missingWords:p,allOptions:_}=o(h);let A=new Array(p.length).fill(null);function R(){var x;n.innerHTML=`
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
            ${_.map(D=>{const L=A.includes(D);return`<button class="vc-option ${L?"used":""}" data-word="${D}" ${L?"disabled":""}>${D}</button>`}).join("")}
          </div>

          <button class="btn btn-primary btn-block mt-lg ${A.includes(null)?"disabled":""}" id="btn-check-verse" ${A.includes(null)?"disabled":""}>
            ✅ Comprobar
          </button>
        </div>
      `,n.querySelectorAll(".vc-blank.filled").forEach(D=>{D.addEventListener("click",()=>{const L=parseInt(D.dataset.blank);A[L]=null,R()})}),n.querySelectorAll(".vc-option:not([disabled])").forEach(D=>{D.addEventListener("click",()=>{const L=D.dataset.word,q=A.indexOf(null);q!==-1&&(A[q]=L,R())})}),(x=document.getElementById("btn-check-verse"))==null||x.addEventListener("click",()=>{V(p)})}function V(x){let D=!0;x.forEach((L,q)=>{var F;((F=A[q])==null?void 0:F.toLowerCase())!==L.toLowerCase()&&(D=!1)}),D?(a++,r+=30,W("✅ ¡Correcto! +30 pts","success")):W(`❌ Respuesta: ${x.join(", ")}`,"error"),setTimeout(()=>{s++,s<5?c():d()},2e3)}R()}function d(){var p,_;const h=is("verse-complete",r,a,"medium");rs("verse-complete",r,a);const f=a>=4?"📖":a>=2?"😊":"🙏";n.innerHTML=`
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
    `,(p=document.getElementById("btn-play-again"))==null||p.addEventListener("click",()=>{pe("game",{gameId:"verse-complete"})}),(_=document.getElementById("btn-go-home"))==null||_.addEventListener("click",()=>{pe("home")})}c()}const Jg=[{theme:"Frutos del Espíritu",words:["AMOR","GOZO","PAZ","PACIENCIA","BONDAD","FE","MANSEDUMBRE","TEMPLANZA","BENIGNIDAD","PERDON","PIEDAD"]},{theme:"Discípulos de Jesús",words:["PEDRO","JUAN","MATEO","TOMAS","SANTIAGO","ANDRES","FELIPE","SIMON","BARTOLOME","JUDAS","TADEO","FELIPE"]},{theme:"Libros del Antiguo Testamento",words:["GENESIS","EXODO","LEVITICO","NUMEROS","DEUTERONOMIO","JOSUE","JUECES","RUT","SAMUEL","REYES","SALMOS"]},{theme:"Personajes Bíblicos",words:["MOISES","DAVID","SARA","NOE","ESTER","ABRAHAM","ISAAC","JACOB","JOSE","SAMUEL","DANIEL","SANSÓN"]},{theme:"Lugares Bíblicos",words:["EDEN","SINAI","BELEN","JORDAN","JERUSALEN","NAZARET","JERICO","EGIPTO","BETEL","CANAN","GOLGOTA"]},{theme:"Valores Cristianos",words:["GRACIA","VERDAD","VIDA","LUZ","PERDON","AMOR","JUSTICIA","SANTIDAD","HONESTIDAD","HUMILDAD","FE"]},{theme:"Profetas",words:["ELIAS","ISAIAS","DANIEL","JONAS","JEREMIAS","EZEQUIEL","OSEAS","MALAQUIAS","AMOS","MIQUEAS","HABACUC"]},{theme:"Animales de la Biblia",words:["LEON","PALOMA","OVEJA","PEZ","BURRA","AGUILA","TORO","CABALLO","LOBO","SERPIENTE","CORDERO"]},{theme:"Reyes de la Biblia",words:["DAVID","SAUL","SALOMON","JOSIAS","EZEQUIAS","ACAB","ROBOAM","OZIAS","HERODES","FELESTINO","BALAC"]},{theme:"Milagros de Jesús",words:["VINO","PAN","AGUA","VISTA","VIDA","PESCA","CALMA","LAZARO","PIES","OREJA","HIJA"]}];function Ou(n){e();function e(){n.innerHTML=`
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
    `,n.querySelectorAll(".btn-difficulty").forEach(s=>{s.addEventListener("click",r=>{const a=s.dataset.level;t(a)})})}function t(s){const a={easy:{size:11,wordCount:10,directions:[[0,1],[1,0]]},medium:{size:13,wordCount:11,directions:[[0,1],[1,0],[1,1]]},hard:{size:15,wordCount:12,directions:[[0,1],[1,0],[1,1],[0,-1],[-1,0]]}}[s],o=a.size,c=Pe([...Jg])[0],d=Pe([...c.words]).slice(0,a.wordCount);let h=[],f=[],p=!1,_=[],A=0,R=Date.now();function V(){h=Array.from({length:o},()=>Array.from({length:o},()=>""));const F=a.directions;d.forEach(N=>{let b=!1,g=0;for(;!b&&g<100;){g++;const v=F[Math.floor(Math.random()*F.length)],E=Math.floor(Math.random()*o),w=Math.floor(Math.random()*o),T=E+v[0]*(N.length-1),y=w+v[1]*(N.length-1);if(T<0||T>=o||y<0||y>=o)continue;let B=!0;for(let j=0;j<N.length;j++){const G=E+v[0]*j,te=w+v[1]*j;if(h[G][te]!==""&&h[G][te]!==N[j]){B=!1;break}}if(B){for(let j=0;j<N.length;j++){const G=E+v[0]*j,te=w+v[1]*j;h[G][te]=N[j]}b=!0}}});const k="ABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let N=0;N<o;N++)for(let b=0;b<o;b++)h[N][b]===""&&(h[N][b]=k[Math.floor(Math.random()*k.length)])}function x(){n.innerHTML=`
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
            ${h.map((k,N)=>k.map((b,g)=>`
                <div class="ws-cell" data-row="${N}" data-col="${g}">${b}</div>
              `).join("")).join("")}
          </div>

          <p class="text-sm text-muted text-center mt-md">Arrastra para seleccionar palabras consecutivas.</p>
        </div>
      `;const F=document.getElementById("ws-grid");F&&(F.style.gridTemplateColumns=`repeat(${o}, 1fr)`),D()}function D(){const F=document.getElementById("ws-grid");if(!F)return;const k=E=>{const w=E.touches?E.touches[0]:E,T=document.elementFromPoint(w.clientX,w.clientY);return T&&T.classList.contains("ws-cell")?{row:parseInt(T.dataset.row),col:parseInt(T.dataset.col),el:T}:null},N=E=>{E.preventDefault(),p=!0,_=[];const w=k(E);w&&(_.push(w),w.el.classList.add("cell-selected"))},b=E=>{if(!p)return;E.preventDefault();const w=k(E);w&&!_.some(T=>T.row===w.row&&T.col===w.col)&&(_.length===1||v(w))&&(_.push(w),w.el.classList.add("cell-selected"))},g=()=>{p&&(p=!1,L(),document.querySelectorAll(".cell-selected").forEach(E=>E.classList.remove("cell-selected")),_=[])};function v(E){if(_.length<1)return!0;const w=_[0],T=_[_.length-1],y=Math.sign(T.row-w.row),B=Math.sign(T.col-w.col),j=T.row+y,G=T.col+B;return E.row===j&&E.col===G}F.addEventListener("mousedown",N),F.addEventListener("mousemove",b),window.addEventListener("mouseup",g),F.addEventListener("touchstart",N,{passive:!1}),F.addEventListener("touchmove",b,{passive:!1}),window.addEventListener("touchend",g)}function L(){if(_.length<2)return;const F=_.map(b=>h[b.row][b.col]).join(""),k=F.split("").reverse().join(""),N=d.find(b=>(b===F||b===k)&&!f.includes(b));if(N){f.push(N),A+=25,_.forEach(v=>{const E=document.querySelector(`.ws-cell[data-row="${v.row}"][data-col="${v.col}"]`);E&&E.classList.add("cell-found")});const b=Array.from(document.querySelectorAll(".ws-word")).find(v=>v.textContent===N);b&&b.classList.add("found");const g=document.querySelector(".ws-found");if(g&&(g.textContent=`${f.length} / ${d.length}`),W(`✅ ¡Encontraste "${N}"!`,"success"),f.length===d.length){const v=Math.max(0,60-Math.floor((Date.now()-R)/1e3));A+=v,setTimeout(q,1e3)}}}function q(){var k,N;const F=is("word-search",A,f.length,s);rs("word-search",A,f.length),n.innerHTML=`
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
      `,(k=document.getElementById("btn-play-again"))==null||k.addEventListener("click",()=>{Ou(n)}),(N=document.getElementById("btn-go-home"))==null||N.addEventListener("click",()=>{pe("home")})}V(),x()}}function Wg(n){const s=Pe([...Ti]).slice(0,6).map((R,V)=>[{id:V,type:"name",text:R.name,icon:"👤",pairId:V},{id:V,type:"clue",text:R.clues[0],icon:"💡",pairId:V}]).flat(),r=Pe(s);let a=[],o=[],c=0,d=0,h=Date.now(),f=!0;function p(){n.innerHTML=`
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
    `,n.querySelectorAll(".memory-card").forEach(R=>{R.addEventListener("click",()=>{if(!f)return;const V=parseInt(R.dataset.index);_(V)})})}function _(R){if(a.includes(R)||o.includes(r[R].pairId)||a.length>=2)return;a.push(R);const V=n.querySelector(`.memory-card[data-index="${R}"]`);if(V&&V.classList.add("flipped"),a.length===2){c++,f=!1;const[x,D]=a,L=r[x],q=r[D];L.pairId===q.pairId&&L.type!==q.type?(o.push(L.pairId),d+=Math.max(30-c,10),setTimeout(()=>{var k,N;(k=document.querySelector(`.memory-card[data-index="${x}"]`))==null||k.classList.add("matched"),(N=document.querySelector(`.memory-card[data-index="${D}"]`))==null||N.classList.add("matched");const F=n.querySelector(".memory-stats");F&&(F.innerHTML=`<span>🎯 ${o.length}/6</span><span>🔄 ${c} movimientos</span>`),a=[],f=!0,W("✅ ¡Par encontrado!","success"),o.length===6&&setTimeout(A,800)},600)):setTimeout(()=>{var k,N;(k=document.querySelector(`.memory-card[data-index="${x}"]`))==null||k.classList.remove("flipped"),(N=document.querySelector(`.memory-card[data-index="${D}"]`))==null||N.classList.remove("flipped");const F=n.querySelector(".memory-stats");F&&(F.innerHTML=`<span>🎯 ${o.length}/6</span><span>🔄 ${c} movimientos</span>`),a=[],f=!0},1e3)}}function A(){var L,q;const R=Math.floor((Date.now()-h)/1e3),V=Math.max(0,120-R);d+=V;const x=is("memory",d,o.length,"easy");rs("memory",d,o.length);const D=c<=12?"🧠":c<=18?"😊":"🃏";n.innerHTML=`
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
    `,(L=document.getElementById("btn-play-again"))==null||L.addEventListener("click",()=>{pe("game",{gameId:"memory"})}),(q=document.getElementById("btn-go-home"))==null||q.addEventListener("click",()=>{pe("home")})}p()}const Fu={noah:{id:"noah",title:"El Arca de Noé",description:"Construye un arca para salvar a la creación del gran diluvio.",cover:"assets/stories/noah.png",difficulty:"Fácil",reward:100,xp:50,startNode:"start",nodes:{start:{text:'Dios ve que la tierra está llena de maldad, pero encuentra gracia en ti, Noé. Te dice: "Hazte un arca de madera de gofer; harás aposentos en el arca, y la calafatearás con brea". El cielo se oscurece.',image:"assets/stories/noah.png",choices:[{text:"🛠️ Obedecer y empezar a construir de inmediato",nextNode:"build"},{text:"🗣️ Hablar con los vecinos para advertirles del peligro",nextNode:"warn_neighbors"}]},build:{text:"Pasan los años. Construyes el Arca con tus hijos Sem, Cam y Jafet. La gente se burla de ti porque no hay señales de lluvia en el desierto. ¿Qué haces ante las burlas?",choices:[{text:"🙏 Continuar trabajando con fe y paciencia",nextNode:"animals"},{text:"🛑 Detenerte un momento para discutir y defenderte",nextNode:"argue"}]},warn_neighbors:{text:'Intentas advertir a la gente, pero se ríen de ti. "¡No ha llovido en años, viejo loco!", te gritan. El tiempo apremia y el arca aún no está lista.',choices:[{text:"🛠️ Volver al trabajo rápidamente en el Arca",nextNode:"build"},{text:"😔 Sentirte desanimado por su incredulidad",nextNode:"discouraged"}]},discouraged:{text:"Te sientas junto a las maderas y respiras profundo. Recuerdas la promesa de Dios de salvarte a ti y a tu familia. Tu fe te renueva.",choices:[{text:"🛠️ Levantar la herramienta y seguir construyendo",nextNode:"build"}]},argue:{text:"Al discutir, pierdes tiempo valioso y la ira entra en tu corazón. El trabajo se retrasa. Sin embargo, decides que lo mejor es concentrarse en lo importante.",choices:[{text:"🛠️ Ignorar las burlas y retomar la construcción",nextNode:"animals"}]},animals:{text:"¡El Arca está terminada! De repente, una procesión milagrosa comienza de la nada: animales de dos en dos, macho y hembra, entran caminando pacíficamente al Arca.",choices:[{text:"🚪 Entrar al Arca con tu familia y cerrar las puertas",nextNode:"flood"}]},flood:{text:"Las cataratas de los cielos se abren y el abismo estalla. Llueve durante 40 días y 40 noches. El Arca flota sobre las aguas. Estás a salvo con tu familia y los animales.",choices:[{text:"🕊️ Esperar a que las aguas bajen y enviar un ave",nextNode:"dove"}]},dove:{text:"Envías una paloma. Regresa la primera vez, pero la segunda vez trae una rama de olivo en el pico. ¡Las aguas están bajando! Finalmente, el Arca se asienta en el monte Ararat.",choices:[{text:"🌈 Salir del Arca y dar gracias a Dios",nextNode:"end"}]},end:{text:"Sales a tierra seca. Dios pone un hermoso arcoíris en el cielo como pacto de que nunca más destruirá la tierra con agua. ¡Has salvado la vida en la tierra!",isEnd:!0,message:"¡Felicidades! Completaste la historia de Noé con obediencia y fe."}}},david:{id:"david",title:"David y Goliat",description:"Enfrenta al gigante filisteo con una honda y mucha fe.",cover:"assets/stories/david.png",difficulty:"Media",reward:120,xp:60,startNode:"start",nodes:{start:{text:"Llegas al campamento del ejército de Israel para llevar comida a tus hermanos mayores. Allí, escuchas a un gigante de casi 3 metros, Goliat, desafiando a Israel al combate.",image:"assets/stories/david.png",choices:[{text:"🛡️ Preguntar qué recompensa tendrá quien lo venza",nextNode:"ask_king"},{text:"😠 Sentirte indignado por los insultos que lanza a Dios",nextNode:"indignant"}]},ask_king:{text:'Te llevan ante el Rey Saúl. Él te mira de arriba abajo: "Eres solo un muchacho, y él un hombre de guerra". Tú recuerdas cómo Dios te libró del león y el oso.',choices:[{text:"👑 Aceptar la armadura del Rey Saúl para pelear",nextNode:"armor"},{text:"❌ Rechazar la armadura y pelear como pastor",nextNode:"stones"}]},indignant:{text:'Dices en voz alta: "¿Quién es este filisteo incircunciso para que provoque a los escuadrones del Dios viviente?". El Rey Saúl escucha tu valentía.',choices:[{text:"👑 Ir a hablar con el Rey Saúl sobre el combate",nextNode:"ask_king"}]},armor:{text:"Te pones el casco de bronce y la pesada coraza. Al intentar dar un paso, te das cuenta de que no puedes moverte con soltura ni has practicado con ella.",choices:[{text:"❌ Quitarte la armadura y confiar en tu honda",nextNode:"stones"}]},stones:{text:"Vas al arroyo y recoges cinco piedras lisas del lecho del río. Las metes en tu bolsa de pastor y caminas hacia el centro del valle, donde Goliat te espera riéndose.",choices:[{text:"🪨 Elegir una piedra y avanzar corriendo",nextNode:"fight_start"}]},fight_start:{text:'Goliat grita: "¿Soy yo un perro para que vengas a mí con palos?". Tú le respondes: "¡Tú vienes a mí con espada, pero yo voy en el nombre de Jehová!".',choices:[{text:"🎯 Poner la piedra en la honda y girarla con fuerza",nextNode:"sling_shot"}]},sling_shot:{text:"Corres hacia el filisteo. Giras la honda y sueltas un extremo. La piedra vuela silbando por el aire y se clava directamente en la frente de Goliat.",choices:[{text:"🏆 El gigante cae al suelo de bruces",nextNode:"end"}]},end:{text:"El campamento filisteo huye aterrado, mientras el ejército de Israel celebra una gran victoria. Has demostrado que Dios no salva con espada, sino con fe.",isEnd:!0,message:"¡Felicidades! Venciste a Goliat con confianza en el Señor."}}},daniel:{id:"daniel",title:"Daniel en el Foso",description:"Permanece fiel a Dios ante un edicto del Rey Darío.",cover:"assets/stories/daniel.png",difficulty:"Difícil",reward:150,xp:75,startNode:"start",nodes:{start:{text:'Eres uno de los gobernadores más sabios del imperio. Otros oficiales, celosos de ti, engañan al Rey Darío para firmar una ley: "Ninguna persona puede orar a ningún dios excepto al Rey durante 30 días".',image:"assets/stories/daniel.png",choices:[{text:"🙏 Ignorar la ley y orar a Dios como siempre",nextNode:"pray"},{text:"🚪 Orar pero con las ventanas cerradas en secreto",nextNode:"secret_pray"}]},pray:{text:"Vas a tu casa, abres las ventanas hacia Jerusalén y te arrodillas a orar tres veces al día dando gracias a Dios. Los oficiales espías te ven y corren a decírselo al Rey.",choices:[{text:"👑 Dejarte llevar por los guardias ante el Rey Darío",nextNode:"arrest"}]},secret_pray:{text:"Decides orar en secreto por miedo. Pero tu corazón siente que estás ocultando tu fe. Quieres dar testimonio de la gloria del Dios vivo.",choices:[{text:"☀️ Abrir las ventanas y orar con valentía",nextNode:"pray"}]},arrest:{text:'El Rey Darío está muy triste porque te aprecia, pero su propia ley no puede cambiarse. Te dice: "El Dios tuyo, a quien tú continuamente sirves, él te libre". Te arrojan al foso de los leones.',choices:[{text:"🦁 Caer en el foso oscuro y esperar a que rujan",nextNode:"den"}]},den:{text:"Te encuentras en la oscuridad rodeado de ojos amenazantes que brillan. De repente, una luz celestial aparece y los leones se sientan pacíficamente a tu alrededor. ¿Qué haces?",choices:[{text:"🙏 Sentarte a dar gracias a Dios por el milagro",nextNode:"morning"},{text:"🦁 Intentar acariciar a uno de los leones",nextNode:"pet_lion"}]},pet_lion:{text:"Te acercas a un león y este ronronea como un gatito. Dios ha cerrado la boca de las fieras para protegerte de todo daño.",choices:[{text:"☀️ Esperar a que amanezca",nextNode:"morning"}]},morning:{text:'Amanece. El Rey Darío corre al foso y grita con dolor: "¡Daniel, siervo del Dios viviente! ¿Te ha podido salvar tu Dios?".',choices:[{text:"🗣️ ¡Rey, vive para siempre! ¡Dios envió su ángel!",nextNode:"end"}]},end:{text:"El Rey Darío, lleno de gozo, te saca del foso. Ni un rasguño hay en ti. Entonces firma un nuevo edicto mandando a todo el reino a temer al Dios de Daniel, que salva y libra.",isEnd:!0,message:"¡Felicidades! Mantuviste tu fe firme y Dios te protegió."}}},moses:{id:"moses",title:"Moisés y el Mar Rojo",description:"Guía al pueblo de Israel hacia la libertad cruzando el mar.",cover:"assets/stories/moses.png",difficulty:"Media",reward:130,xp:65,startNode:"start",nodes:{start:{text:"Has guiado al pueblo de Israel fuera de Egipto tras las diez plagas. Sin embargo, os encontráis atrapados: el Mar Rojo al frente y el ejército del Faraón cargando por detrás.",image:"assets/stories/moses.png",choices:[{text:"🙏 Clamar a Dios por ayuda y protección",nextNode:"pray"},{text:"🗣️ Decir al pueblo que mantengan la calma y tengan fe",nextNode:"calm"}]},pray:{text:'Dios te responde: "¿Por qué clamas a mí? Di a los hijos de Israel que marchen. Y tú, alza tu vara y extiende tu mano sobre el mar, y divídelo".',choices:[{text:"🌊 Alzar la vara hacia el Mar Rojo",nextNode:"part_sea"}]},calm:{text:'Dices al pueblo: "No temáis; estad firmes y ved la salvación que Jehová hará hoy con vosotros". El pueblo se detiene, pero las tropas de Egipto están muy cerca.',choices:[{text:"🌊 Alzar la vara hacia el mar para que se divida",nextNode:"part_sea"}]},part_sea:{text:"Levantas tu vara de madera. Un gran viento recio del oriente sopla toda la noche y las aguas se dividen formando dos inmensos muros sólidos a los lados. Hay tierra seca.",choices:[{text:"🚶‍♂️ Indicar al pueblo que cruce de inmediato",nextNode:"crossing"}]},crossing:{text:"Cruzan por el fondo del mar. Es una marcha larga pero segura. El ejército egipcio decide seguiros con sus carros de guerra adentrándose en el lecho seco.",choices:[{text:"🛡️ Llegar al otro lado y mirar atrás al Faraón",nextNode:"other_side"}]},other_side:{text:"Ya casi todo el pueblo está a salvo en la otra orilla. Los carros egipcios están en medio del mar. Dios te dice que extiendas tu mano una vez más.",choices:[{text:"Extendiendo tu mano sobre las aguas",nextNode:"close_sea"}]},close_sea:{text:"Extiendes tu mano. Las aguas vuelven a su curso normal con furia sobre el ejército de Faraón. El pueblo de Israel queda libre para siempre de Egipto.",choices:[{text:"🎶 Celebrar la libertad con cánticos a Dios",nextNode:"end"}]},end:{text:"Miriam toma un pandero y todo el pueblo danza y canta de gozo. Habéis cruzado el mar y la libertad os espera. ¡El Éxodo ha comenzado!",isEnd:!0,message:"¡Felicidades! Abriste camino en medio del mar con el poder de Dios."}}}};function Kg(n){ma(n)}function ma(n){n.innerHTML=`
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
    `,(d=document.getElementById("btn-exit-story"))==null||d.addEventListener("click",()=>{ma(n)});const c=document.getElementById("story-text-box");Zg(a.text,c,()=>{const h=document.getElementById("story-choices-container");h&&a.choices&&a.choices.forEach(f=>{const p=document.createElement("button");p.className="btn btn-option btn-glass fade-in",p.textContent=f.text,p.addEventListener("click",()=>{s=f.nextNode,r()}),h.appendChild(p)})})}r()}function Xg(n,e,t){var s;fn(e.reward),hn(e.xp),W(`¡Historia completada! +${e.reward} monedas`,"success"),n.innerHTML=`
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
  `,(s=document.getElementById("btn-finish-story"))==null||s.addEventListener("click",()=>{ma(n)})}function Zg(n,e,t,s=25){let r=0;e.innerHTML="";function a(){r<n.length?(e.innerHTML+=n.charAt(r),r++,setTimeout(a,s)):t&&t()}a()}const xl=[{word:"JESUS",category:"Personaje",hint:"El Hijo de Dios, Salvador del mundo.",verse:'"Y dará a luz un hijo, y llamarás su nombre JESÚS, porque él salvará a su pueblo de sus pecados." - Mateo 1:21'},{word:"MOISES",category:"Personaje",hint:"Líder que guió al pueblo de Israel fuera de Egipto.",verse:'"Por la fe Moisés, hecho ya grande, rehusó llamarse hijo de la hija de Faraón." - Hebreos 11:24'},{word:"DAVID",category:"Personaje",hint:"Rey de Israel, conocido por vencer a Goliat y escribir Salmos.",verse:'"Hallé a David hijo de Isaí, varón conforme a mi corazón, quien hará todo lo que yo quiero." - Hechos 13:22'},{word:"SALOMON",category:"Personaje",hint:"Hijo de David, conocido por su gran sabiduría.",verse:'"Y dio Dios a Salomón sabiduría y prudencia muy grandes, y anchura de corazón." - 1 Reyes 4:29'},{word:"MANA",category:"Objeto/Alimento",hint:"El pan del cielo que Dios envió al pueblo en el desierto.",verse:'"Y la casa de Israel lo llamó Maná; y era como semilla de culantro, blanco, y su sabor como de hojuelas con miel." - Éxodo 16:31'},{word:"JERUSALEN",category:"Lugar",hint:"La ciudad santa, capital del Reino de Israel.",verse:'"Pedid por la paz de Jerusalén; sean prosperados los que te aman." - Salmos 122:6'},{word:"JORDAN",category:"Lugar",hint:"Río donde Juan el Bautista bautizó a Jesús.",verse:'"Y Jesús, después que fue bautizado, subió luego del agua; y he aquí los cielos le fueron abiertos." - Mateo 3:16'},{word:"BIBLIA",category:"Concepto",hint:"La palabra escrita de Dios (Colección de libros).",verse:'"Toda la Escritura es inspirada por Dios, y útil para enseñar, para redargüir." - 2 Timoteo 3:16'},{word:"ORACION",category:"Acción",hint:"Hablar con Dios con fe y corazón sincero.",verse:'"Orad sin cesar. Dad gracias en todo, porque esta es la voluntad de Dios." - 1 Tesalonicenses 5:17-18'},{word:"GOLIAT",category:"Personaje",hint:"El gigante filisteo de Gat que desafió a Israel.",verse:'"Salió entonces del campamento de los filisteos un paladín que se llamaba Goliat, de Gat." - 1 Samuel 17:4'},{word:"MESA",category:"Concepto",hint:'Lugar de comunión; "Aderezas ____ delante de mí".',verse:'"Aderezas mesa delante de mí en presencia de mis angustiadores; unges mi cabeza con aceite." - Salmos 23:5'},{word:"ARCA",category:"Objeto",hint:"Estructura construida por Noé para flotar en el Diluvio.",verse:'"Por la fe Noé... con temor preparó el arca en que su casa se salvase." - Hebreos 11:7'},{word:"TABERNACULO",category:"Lugar",hint:"Santuario móvil que usaba Israel en el desierto.",verse:'"Y harán un santuario para mí, y habitaré en medio de ellos." - Éxodo 25:8'},{word:"PENTATEUCO",category:"Concepto",hint:"Los primeros cinco libros de la Biblia escrito por Moisés.",verse:"Génesis, Éxodo, Levítico, Números y Deuteronomio forman la Ley."},{word:"ESPERANZA",category:"Concepto",hint:"Confianza segura en las promesas futuras de Dios.",verse:'"Y la esperanza no avergüenza; porque el amor de Dios ha sido derramado en nuestros corazones." - Romanos 5:5'},{word:"GRACIA",category:"Concepto",hint:"Favor inmerecido de Dios para la salvación.",verse:'"Porque por gracia sois salvos por medio de la fe; y esto no de vosotros." - Efesios 2:8'},{word:"ESTER",category:"Personaje",hint:"Reina judía que salvó a su pueblo de la destrucción.",verse:'"¿Y quién sabe si para esta hora has llegado al reino?" - Ester 4:14'},{word:"NOE",category:"Personaje",hint:"Construyó un arca para salvar a su familia y animales.",verse:'"Hizo así Noé; hizo conforme a todo lo que Dios le mandó." - Génesis 6:22'},{word:"MARIA",category:"Personaje",hint:"Madre de Jesús en su forma humana.",verse:'"Engrandece mi alma al Señor; y mi espíritu se regocija en Dios mi Salvador." - Lucas 1:46-47'},{word:"PABLO",category:"Personaje",hint:"Apóstol de los gentiles, escribió muchas epístolas.",verse:'"Para mí el vivir es Cristo, y el morir es ganancia." - Filipenses 1:21'},{word:"PEDRO",category:"Personaje",hint:"Pescador que llegó a ser el líder de los apóstoles.",verse:'"Tú eres el Cristo, el Hijo del Dios viviente." - Mateo 16:16'},{word:"SANSON",category:"Personaje",hint:"Juez dotado de fuerza sobrehumana por el Espíritu de Dios.",verse:'"Y el Espíritu de Jehová vino sobre él con poder." - Jueces 14:19'},{word:"JONAS",category:"Personaje",hint:"Profeta que fue tragado por un gran pez por desobedecer.",verse:'"Pero Jehová tenía preparado un gran pez que tragase a Jonás." - Jonás 1:17'},{word:"DANIEL",category:"Personaje",hint:"Profeta que sobrevivió al foso de los leones.",verse:'"Mi Dios envió su ángel, el cual cerró la boca de los leones." - Daniel 6:22'},{word:"ELIAS",category:"Personaje",hint:"Profeta arrebatado al cielo en un carro de fuego.",verse:'"Y Elías subió al cielo en un torbellino." - 2 Reyes 2:11'},{word:"BELEN",category:"Lugar",hint:"Ciudad de Judea donde nació Jesucristo.",verse:'"Y tú, Belén... de ti saldrá un guiador que apacentará a mi pueblo." - Mateo 2:6'},{word:"NAZARET",category:"Lugar",hint:"Ciudad de Galilea donde creció Jesús.",verse:'"¿De Nazaret puede salir algo bueno? Le dijo Felipe: Ven y ve." - Juan 1:46'},{word:"MILAGRO",category:"Concepto",hint:"Hecho sobrenatural que manifiesta el poder de Dios.",verse:'"Y hacían muchos milagros y señales por mano de los apóstoles." - Hechos 5:12'},{word:"PARABOLA",category:"Concepto",hint:"Narración breve que transmite una enseñanza espiritual.",verse:'"Todo esto habló Jesús por parábolas a la gente." - Mateo 13:34'},{word:"FE",category:"Concepto",hint:"La certeza de lo que se espera, la convicción de lo que no se ve.",verse:'"Es, pues, la fe la certeza de lo que se espera..." - Hebreos 11:1'},{word:"AMOR",category:"Concepto",hint:"El vínculo perfecto y el mayor mandamiento.",verse:'"Y ahora permanecen la fe, la esperanza y el amor; pero el mayor es el amor." - 1 Corintios 13:13'},{word:"PAZ",category:"Concepto",hint:'Fruto del Espíritu; "La ____ de Dios que sobrepasa todo entendimiento".',verse:'"La paz os dejo, mi paz os doy; yo no os la doy como el mundo la da." - Juan 14:27'},{word:"REDENCION",category:"Concepto",hint:"Rescate o liberación pagada por la sangre de Cristo.",verse:'"En quien tenemos redención por su sangre, el perdón de pecados." - Efesios 1:7'},{word:"SABIDURIA",category:"Concepto",hint:"Temor de Dios es el principio de la _________.",verse:'"El principio de la sabiduría es el temor de Jehová." - Proverbios 1:7'},{word:"ALELUYA",category:"Concepto",hint:'Expresión de júbilo que significa "Alabad a Dios".',verse:'"¡Aleluya! Alabad a Dios en su santuario." - Salmos 150:1'},{word:"DISCIPULO",category:"Concepto",hint:"Seguidor o aprendiz de las enseñanzas de Jesús.",verse:'"En esto conocerán todos que sois mis discípulos, si tuviereis amor." - Juan 13:35'}];function ev(n){let e=a(),t=[],s=6,r=!1;function a(){let f=JSON.parse(localStorage.getItem("hm_played_words")||"[]"),p=xl.filter(R=>!f.includes(R.word));p.length===0&&(f=[],p=[...xl]);const _=Math.floor(Math.random()*p.length),A=p[_];return f.push(A.word),localStorage.setItem("hm_played_words",JSON.stringify(f)),A}function o(){if(r){h();return}const f=e.word.toUpperCase();if(f.split("").every(_=>t.includes(_)||_===" ")){d(!0);return}if(s<=0){d(!1);return}n.innerHTML=`
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
          ${f.split("").map(_=>`
            <div class="hm-letter-box ${_===" "?"hm-space":""}">
              ${t.includes(_)||_===" "?_:"_"}
            </div>
          `).join("")}
        </div>

        <div class="hm-keyboard" id="hm-keyboard">
          ${"ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split("").map(_=>`
            <button class="btn btn-keyboard" 
                    data-letter="${_}" 
                    ${t.includes(_)?"disabled":""}>
              ${_}
            </button>
          `).join("")}
        </div>
      </div>
    `,n.querySelectorAll(".btn-keyboard").forEach(_=>{_.addEventListener("click",A=>{const R=A.target.dataset.letter;c(R)})})}function c(f){if(t.includes(f))return;t.push(f),e.word.toUpperCase().includes(f)?W("¡Correcto!","success"):(s--,W("¡Letra incorrecta!","warning")),o()}function d(f){r=!0,f&&(fn(50),hn(25)),h(f)}function h(f){var p;n.innerHTML=`
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
    `,(p=document.getElementById("btn-restart-hm"))==null||p.addEventListener("click",()=>{e=a(),t=[],s=6,r=!1,o()})}o()}function tv(n){const e=De(),t=localStorage.getItem("bb_player_id")||A();localStorage.setItem("bb_player_id",t);let s=null,r=null,a=null,o=null,c="p1",d=10,h=null,f=!1,p={fiftyfifty:!0,freeze:!0,double:!0},_=!1;function A(){return"user_"+Math.random().toString(36).substr(2,9)}function R(){var T,y,B,j,G,te;n.innerHTML=`
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
    `,(T=document.getElementById("btn-mode-random"))==null||T.addEventListener("click",()=>{V(),q()}),(y=document.getElementById("btn-mode-create"))==null||y.addEventListener("click",()=>{x()}),(B=document.getElementById("btn-mode-join"))==null||B.addEventListener("click",()=>{D()}),(j=document.getElementById("btn-back-home"))==null||j.addEventListener("click",()=>{pe("home")}),(G=document.getElementById("btn-open-leaderboard"))==null||G.addEventListener("click",()=>{document.getElementById("bb-leaderboard-modal").style.display="flex",L()}),(te=document.getElementById("close-leaderboard"))==null||te.addEventListener("click",()=>{document.getElementById("bb-leaderboard-modal").style.display="none"})}function V(){var T;n.innerHTML=`
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
    `,(T=document.getElementById("btn-cancel-match"))==null||T.addEventListener("click",()=>{o&&o(),R()})}async function x(){var y,B;const T=Math.random().toString(36).substr(2,4).toUpperCase();n.innerHTML=`
      <div class="bible-battle-game">
        <div class="bb-private-room">
          <div class="bb-room-icon">🏠</div>
          <h3>Sala Privada Creada</h3>
          <p class="text-secondary text-sm">Comparte este código con tu amigo para que se una:</p>
          <div class="bb-room-code" id="room-code-display">${T}</div>
          <button class="btn btn-outline btn-sm mt-xs" id="btn-copy-code">📋 Copiar Código</button>
          
          <div class="bb-waiting-dots mt-xl">
             <div class="dot"></div><div class="dot"></div><div class="dot"></div>
          </div>
          <p class="text-muted text-sm text-center">Esperando a que tu amigo se una...</p>

          <button class="btn btn-secondary btn-block mt-xl" id="btn-cancel-room">Cancelar</button>
        </div>
      </div>
    `,(y=document.getElementById("btn-cancel-room"))==null||y.addEventListener("click",()=>{a&&a(),R()}),(B=document.getElementById("btn-copy-code"))==null||B.addEventListener("click",()=>{navigator.clipboard.writeText(T),W("¡Código copiado!","info")});try{c="p1";const j=Pe([...Me.easy,...Me.medium]).slice(0,5),G=await Xr(Gt(Ae,"bb_matches"),{status:"waiting_friend",code:T,p1:{uid:t,name:e.name,avatar:e.avatar,score:0,currentQ:0,lastAnswered:-1},p2:null,questions:j,p1_rematch:!1,p2_rematch:!1,createdAt:Vs()});F(G.id)}catch(j){W("Error creando sala: "+j.message,"danger"),R()}}function D(){var T,y;n.innerHTML=`
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
    `,(T=document.getElementById("btn-cancel-join"))==null||T.addEventListener("click",()=>{R()}),(y=document.getElementById("btn-confirm-join"))==null||y.addEventListener("click",async()=>{const B=document.getElementById("input-room-code").value.trim().toUpperCase();if(B.length<4){W("Ingresa un código válido de 4 letras.","warning");return}try{const j=Wr(Gt(Ae,"bb_matches"),Kr("status","==","waiting_friend"),Kr("code","==",B)),G=await Yr(j);if(G.empty){W("Sala no encontrada o llena.","warning");return}const te=G.docs[0];c="p2",await Ht(Ge(Ae,"bb_matches",te.id),{status:"playing",p2:{uid:t,name:e.name,avatar:e.avatar,score:0,currentQ:0,lastAnswered:-1}}),F(te.id)}catch(j){W("Error al unirse: "+j.message,"danger")}})}async function L(){const T=document.getElementById("leaderboard-list");if(T)try{const y=Wr(Gt(Ae,"bb_users"),_g("leaguePoints","desc"),Al(10)),B=await Yr(y);if(B.empty){T.innerHTML='<p class="text-center text-muted">Aún no hay clasificados. ¡Sé el primero!</p>';return}T.innerHTML=`
        <div class="ranking-list">
          ${B.docs.map((j,G)=>{const te=j.data();return`
              <div class="ranking-item ${te.uid===t?"me":""}">
                <div class="rank-pos">${G+1}</div>
                <div class="rank-avatar">${te.avatar||"👤"}</div>
                <div class="rank-info">
                  <div class="rank-name">${te.name}</div>
                  <div class="rank-league">${te.league||"Pescador"}</div>
                </div>
                <div class="rank-points">${te.leaguePoints||0} PL</div>
              </div>
            `}).join("")}
        </div>
      `}catch(y){console.error(y),T.innerHTML='<p class="text-center text-danger">Error cargando ranking.</p>'}}async function q(){const T=Gt(Ae,"bb_queue"),y=Wr(T,Kr("status","==","waiting"),Al(10));try{const j=(await Yr(y)).docs.find(G=>G.data().uid!==t);if(j){const G=j.data();c="p2";const te=Pe([...Me.easy,...Me.medium]).slice(0,5),de=await Xr(Gt(Ae,"bb_matches"),{status:"starting",p1:{uid:G.uid,name:G.name,avatar:G.avatar,score:0,currentQ:0,lastAnswered:-1},p2:{uid:t,name:e.name,avatar:e.avatar,score:0,currentQ:0,lastAnswered:-1},questions:te,p1_rematch:!1,p2_rematch:!1,startTime:Vs()});await Ht(Ge(Ae,"bb_queue",j.id),{status:"matched",matchId:de.id}),F(de.id)}else{c="p1";const G=await Xr(Gt(Ae,"bb_queue"),{uid:t,name:e.name,avatar:e.avatar,status:"waiting",createdAt:Vs()});o=Cl(Ge(Ae,"bb_queue",G.id),te=>{if(te.exists()&&te.data().status==="matched"){const de=te.data().matchId;o(),Tg(G),F(de)}})}}catch(B){console.error("Matchmaking error:",B),W("Error de conexión: "+B.message,"danger")}}function F(T){s=T,a=Cl(Ge(Ae,"bb_matches",T),y=>{if(!y.exists())return;r=y.data();const B=r[c],G=r[c==="p1"?"p2":"p1"];if(r.p1_rematch&&r.p2_rematch){c==="p1"&&k();return}r.status==="starting"?(p={fiftyfifty:!0,freeze:!0,double:!0},_=!1,f=!1,clearInterval(h),c==="p1"&&N("playing")):r.status==="playing"?b():r.status==="ended"||B.currentQ>=5&&G&&G.currentQ>=5?w():b()})}async function k(){const T=Pe([...Me.easy,...Me.medium]).slice(0,5);await Ht(Ge(Ae,"bb_matches",s),{status:"starting","p1.score":0,"p1.currentQ":0,"p1.lastAnswered":-1,"p2.score":0,"p2.currentQ":0,"p2.lastAnswered":-1,questions:T,p1_rematch:!1,p2_rematch:!1})}async function N(T){s&&await Ht(Ge(Ae,"bb_matches",s),{status:T})}function b(){if(!r)return;const T=r[c],B=r[c==="p1"?"p2":"p1"],j=T.currentQ;if(j>=5||r.status==="ended"){clearInterval(h),w();return}const G=r.questions[j];n.innerHTML=`
      <div class="bible-battle-game">
        <div class="bb-hud">
          <div class="bb-player">
            <div class="bb-avatar">${T.avatar}</div>
            <div class="bb-name">Tú</div>
            <div class="bb-score">${T.score} pts</div>
          </div>
          <div class="bb-vs">VS</div>
          <div class="bb-player">
            <div class="bb-avatar">${B.avatar}</div>
            <div class="bb-name">${B.name}</div>
            <div class="bb-score">${B.score} pts</div>
          </div>
        </div>

        <div class="bb-timer-bar">
          <div class="timer-fill" style="width: ${d/10*100}%"></div>
        </div>

        <div class="bb-question-box card">
          <div class="bb-q-header">Pregunta ${j+1}/5</div>
          <h3 class="bb-question">${G.q}</h3>
        </div>

        <div class="bb-options-grid" id="options-grid">
          ${G.options.map((te,de)=>`
            <button class="btn btn-option" data-ans="${de}">${te}</button>
          `).join("")}
        </div>

        <div class="bb-powerups">
          <button class="btn btn-powerup ${p.fiftyfifty?"":"disabled"}" id="p-5050" ${p.fiftyfifty?"":"disabled"}>✂️ 50/50</button>
          <button class="btn btn-powerup ${p.freeze?"":"disabled"}" id="p-freeze" ${p.freeze?"":"disabled"}>❄️ Hielo</button>
          <button class="btn btn-powerup ${p.double?"":"disabled"}" id="p-double" ${p.double?"":"disabled"}>🔥 X2</button>
        </div>
      </div>
    `,f=!1,g(),v(G.answer)}function g(){clearInterval(h),d=10;const T=n.querySelector(".timer-fill");h=setInterval(async()=>{d-=.1,T&&(T.style.width=`${d/10*100}%`),d<=0&&(clearInterval(h),f||E(-1,-1))},100)}function v(T){var y,B,j;n.querySelectorAll(".btn-option").forEach(G=>{G.addEventListener("click",te=>{if(f)return;f=!0;const de=parseInt(G.dataset.ans);E(de,T)})}),(y=document.getElementById("p-5050"))==null||y.addEventListener("click",()=>{if(!p.fiftyfifty||f)return;p.fiftyfifty=!1;let te=Array.from(n.querySelectorAll(".btn-option")).filter(de=>parseInt(de.dataset.ans)!==T);Pe(te).slice(0,2).forEach(de=>de.style.visibility="hidden"),document.getElementById("p-5050").classList.add("disabled")}),(B=document.getElementById("p-double"))==null||B.addEventListener("click",()=>{!p.double||f||(p.double=!1,_=!0,document.getElementById("p-double").classList.add("disabled"),W("¡Próximo acierto duplicado!","info"))}),(j=document.getElementById("p-freeze"))==null||j.addEventListener("click",()=>{p.freeze&&(p.freeze=!1,document.getElementById("p-freeze").classList.add("disabled"),W("❄️ Efecto visual de Hielo","info"))})}async function E(T,y){clearInterval(h);let B=0;T===y?(B=Math.floor(d*10*(_?2:1)),W("¡Correcto!","success")):W("¡Incorrecto!","warning"),_=!1;const j=r[c],G={};G[`${c}.score`]=j.score+B,G[`${c}.currentQ`]=j.currentQ+1,G[`${c}.lastAnswered`]=T,await Ht(Ge(Ae,"bb_matches",s),G)}function w(){var It,as;h&&clearInterval(h);const T=r[c],y=c==="p1"?"p2":"p1",B=r[y],j=T.score>B.score,G=T.score===B.score,te=r[`${c}_rematch`]||!1,de=r[`${y}_rematch`]||!1;(!window._bb_reward_given_for_match||window._bb_reward_given_for_match!==s)&&(window._bb_reward_given_for_match=s,j?(fn(100),hn(50),Dl(25)):G||Dl(-10),Du()),n.innerHTML=`
      <div class="game-results">
        <div class="results-emoji">${j?"🏆":G?"🤝":"😢"}</div>
        <h2 class="results-title">${j?"¡Victoria!":G?"¡Empate!":"¡Derrota!"}</h2>
        
        <div class="results-score-circle">
          <span class="results-score-value">${T.score}</span>
          <span class="results-score-label">Tus puntos</span>
        </div>

        <div class="results-stats">
          <p class="text-secondary">Rival: <b>${B.name}</b> (${B.score} pts)</p>
          <div class="bb-league-badge mt-sm">${e.league}</div>
          ${de?'<div class="badge mt-sm badge-warning">🔥 ¡El oponente quiere Revancha!</div>':""}
        </div>

        <div class="results-rewards">
          ${j?'<div class="reward-item">🪙 +100 monedas</div><div class="reward-item">⭐ +50 XP</div><div class="reward-item">🏆 +25 PL</div>':G?'<p class="text-sm">¡Buen combate!</p>':'<div class="reward-item">❌ -10 PL</div>'}
        </div>

        <div class="results-actions">
          <button class="btn btn-primary btn-block" id="btn-play-again-bb" ${te?"disabled":""}>
            ${te?"⌛ Esperando respuesta...":de?"🔥 Aceptar Revancha":"🔄 Pedir Revancha"}
          </button>
          <button class="btn btn-secondary btn-block" id="btn-go-home">🏠 Volver al Menú</button>
        </div>
      </div>
    `,(It=document.getElementById("btn-play-again-bb"))==null||It.addEventListener("click",async()=>{if(te)return;const mn={};mn[`${c}_rematch`]=!0,await Ht(Ge(Ae,"bb_matches",s),mn),W("Solicitud de revancha enviada","info")}),(as=document.getElementById("btn-go-home"))==null||as.addEventListener("click",()=>{a&&a(),pe("home")})}R()}function nv(n){let e=0,t=3,s=1,r=0,a=!1,o=null,c=[],d=null;const h=["#ef233c","#4361ee","#2ec4b6","#ffb703","#9b5de5"],f=["bomb","gold","freeze"];function p(){_(),A()}function _(){var v;const k=[...Me.easy,...Me.medium];o=k[Math.floor(Math.random()*k.length)],c=[];const N=Pe([...o.options]),b=((v=n.querySelector(".bbp-game-arena"))==null?void 0:v.clientWidth)||400,g=o.options[o.answer];N.forEach((E,w)=>{const T=E===g,y=Math.random()<.2;let B="normal";y&&(B=f[Math.floor(Math.random()*f.length)]),c.push({id:"bal_"+Date.now()+"_"+w,text:E,isCorrect:T,type:B,x:w*(b/N.length)+20,y:-120,speed:(1.2+Math.random()*.8)*s,color:B==="bomb"?"#2b2b2b":B==="gold"?"#ffd700":B==="freeze"?"#00f5d4":h[w%h.length],size:70+Math.random()*10})}),c.some(E=>E.isCorrect)||(c[0].isCorrect=!0),L()}function A(k){if(a)return;const N=n.querySelector(".bbp-game-arena");if(!N){d=requestAnimationFrame(A);return}const b=N.clientHeight;for(let g=c.length-1;g>=0;g--){const v=c[g];v.y+=v.speed;let E=document.getElementById(v.id);E||(E=document.createElement("div"),E.id=v.id,E.className=`balloon ${v.type}`,E.style.backgroundColor=v.color,E.style.width=v.size+"px",E.style.height=v.size*1.2+"px",E.innerHTML=`
          <div class="balloon-content">${v.text}</div>
          <div class="balloon-string"></div>
          ${v.type!=="normal"?`<div class="balloon-badge">${v.type==="bomb"?"💣":v.type==="gold"?"⭐":"❄️"}</div>`:""}
        `,E.addEventListener("click",()=>R(v)),N.appendChild(E)),E.style.left=v.x+"px",E.style.bottom=v.y+"px",b>100&&v.y>b+150&&(E.remove(),c.splice(g,1),v.isCorrect&&v.type!=="bomb"&&(t--,W("¡Se escapó la respuesta!","warning"),D(),a||_()))}a||(d=requestAnimationFrame(A))}function R(k){if(a)return;const N=document.getElementById(k.id);if(N&&(x(k.x+k.size/2,V()-k.y-k.size/2,k.color),N.remove()),c=c.filter(b=>b.id!==k.id),k.type==="bomb"){t--,W("¡BOOM! Globo Bomba 💣","danger"),D();return}if(k.isCorrect){let b=10;k.type==="gold"&&(b=20),e+=b,r++,W(k.type==="gold"?"¡Doble Puntos! 🌟":"¡Correcto! 🎉","success"),s=1+r*.05,k.type==="freeze"&&(s=.5,W("¡Tiempo Congelado! ❄️","info"),setTimeout(()=>{a||(s=1+r*.05)},4e3)),_()}else t--,W("¡Incorrecto! 💔","warning"),D();q()}function V(){var k;return((k=n.querySelector(".bbp-game-arena"))==null?void 0:k.clientHeight)||400}function x(k,N,b){const g=n.querySelector(".bbp-game-arena");if(g)for(let v=0;v<8;v++){const E=document.createElement("div");E.className="bbp-particle",E.style.backgroundColor=b,E.style.left=k+"px",E.style.top=N+"px";const w=Math.random()*Math.PI*2,T=2+Math.random()*4;E.style.setProperty("--dx",Math.cos(w)*T*20+"px"),E.style.setProperty("--dy",Math.sin(w)*T*20+"px"),g.appendChild(E),setTimeout(()=>E.remove(),600)}}function D(){t<=0?(a=!0,cancelAnimationFrame(d),fn(Math.floor(e/2)),hn(e),F()):q()}function L(){n.innerHTML=`
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
    `,(k=document.getElementById("btn-restart-bbp"))==null||k.addEventListener("click",()=>{e=0,t=3,s=1,r=0,a=!1,p()}),(N=document.getElementById("btn-home-bbp"))==null||N.addEventListener("click",()=>{pe("home")})}p()}function sv(n){let e={away:0,home:0},t=1,s="top",r=0,a=[!1,!1,!1],o=!1,c=!1,d=null,h=null;const f=3,p=[{label:"Hit (Sencillo)",type:"Hit",deg:0,diff:"easy"},{label:"Doble",type:"Doble",deg:90,diff:"medium"},{label:"Triple",type:"Triple",deg:180,diff:"hard"},{label:"Home Run",type:"HomeRun",deg:270,diff:"hard"}];function _(){A()}function A(){n.innerHTML=`
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
                ${d.options.map((N,b)=>`
                  <button class="bsb-opt-btn" onclick="handleBaseballAnswer(${b})">${N}</button>
                `).join("")}
              </div>
            </div>
          `:""}
        </div>
      </div>
    `,R()}function R(){const N=n.querySelector("#bsb-spin-btn");N&&N.addEventListener("click",V),window.handleBaseballAnswer=b=>{const g=b===d.answer;D(g)}}function V(){if(c)return;c=!0,A();const N=n.querySelector("#bsb-wheel"),b=p[Math.floor(Math.random()*p.length)];h=b.type;const g=2880,v=Math.floor(Math.random()*50)-25,E=g+b.deg+v;N&&(N.offsetHeight,requestAnimationFrame(()=>{N&&(N.style.transform=`rotate(-${E}deg)`)})),setTimeout(()=>{c=!1,x(b.diff)},3200)}function x(N){const b=Me[N]||Me.easy;d=b[Math.floor(Math.random()*b.length)],A()}function D(N){d=null,N?(W(`¡Excelente! Conectas un ${h}`,"success"),L(h)):(W("¡Fallo! Out registrado 🔴","error"),r++,q()),A()}function L(N){let b=1;N==="Doble"&&(b=2),N==="Triple"&&(b=3),N==="HomeRun"&&(b=4);let g=0;for(let v=0;v<b;v++)a[2]&&(g++,a[2]=!1),a[1]&&(a[2]=!0,a[1]=!1),a[0]&&(a[1]=!0,a[0]=!1);b===4?g++:a[b-1]=!0,g>0&&(e[s==="top"?"away":"home"]+=g,W(`⚾ ¡Anotación! +${g} carrera(s)`,"success"))}function q(){r>=3&&(W("¡Tres Outs! Cambio de lado 🔄","info"),r=0,a=[!1,!1,!1],s==="top"?(s="bottom",setTimeout(F,1500)):(s="top",t++,k()))}function F(){if(o||s==="top")return;const N=p[Math.floor(Math.random()*p.length)],b=Math.random()<.6;setTimeout(()=>{b?(W(`La IA conecta un ${N.type}`,"warning"),L(N.type)):(W("¡La IA falla! Out","info"),r++),A(),r<3?setTimeout(F,2e3):(q(),A())},2e3)}function k(){var N;if(t>f){o=!0;let b=e.away>e.home?"¡Has ganado el Partido! 🎉":e.away<e.home?"La IA ha ganado 🤖":"¡Empate! 🤝";e.away>e.home&&(hn(50),fn(30)),n.innerHTML=`
        <div class="bsb-game-over glass">
          <h2>⚾ JUEGO TERMINADO ⚾</h2>
          <h3>${b}</h3>
          <div class="bsb-final-score">
            <div>Tú: ${e.away}</div>
            <div>IA: ${e.home}</div>
          </div>
          <button class="btn btn-primary" id="bsb-restart">Jugar de Nuevo</button>
        </div>
      `,(N=n.querySelector("#bsb-restart"))==null||N.addEventListener("click",()=>{e={away:0,home:0},t=1,s="top",r=0,a=[!1,!1,!1],o=!1,A()})}}_()}Xe({id:"trivia",name:"Trivia Bíblica",icon:"❓",description:"Pon a prueba tu conocimiento bíblico",difficulty:"easy",render:Gg});Xe({id:"characters",name:"Adivina el Personaje",icon:"🕵️",description:"Descubre quién es con las pistas",difficulty:"medium",render:Hg});Xe({id:"verse-complete",name:"Completa el Versículo",icon:"📖",description:"Llena las palabras que faltan",difficulty:"medium",render:Qg});Xe({id:"word-search",name:"Sopa de Letras",icon:"🔤",description:"Encuentra palabras bíblicas",difficulty:"easy",render:Ou});Xe({id:"memory",name:"Memoria Bíblica",icon:"🃏",description:"Encuentra los pares bíblicos",difficulty:"easy",render:Wg});Xe({id:"stories",name:"Relatos de Fe",icon:"📜",description:"Historias interactivas con elecciones",difficulty:"media",render:Kg});Xe({id:"hangman",name:"Ahorcado Bíblico",icon:"🪧",description:"Adivina la palabra antes de agotar tus vidas",difficulty:"normal",render:ev});Xe({id:"bible-battle",name:"Bible Battle 1v1",icon:"⚔️",description:"Trivia competitiva 1vs1 en tiempo real",difficulty:"alta",render:tv});Xe({id:"balloon-pop",name:"Bible Balloon Pop",icon:"🎈",description:"Explotar globos con respuestas correctas",difficulty:"fácil",render:nv});Xe({id:"baseball",name:"Béisbol Cristiano",icon:"⚾",description:"Gira la ruleta y responde preguntas bíblicas para correr las bases y anotar carreras.",difficulty:"Media",render:sv});Ft("home",n=>Lg(n));Ft("verse",n=>Og(n));Ft("profile",n=>qg(n));Ft("achievements",n=>Bg(n));Ft("settings",n=>Ug(n));Ft("ranking",n=>jg(n));Ft("game",(n,e)=>{const t=Vu(e.gameId);if(t&&t.render)return t.render(n);n.innerHTML='<div class="empty-state"><p>Juego no encontrado</p></div>'});const rv=["home","verse","profile","achievements","settings"],iv={home:"Bible Games",verse:"Versículo del Día",profile:"Mi Perfil",achievements:"Logros",settings:"Ajustes",ranking:"Ranking",game:"Juego"};function av(n,e={}){document.querySelectorAll(".nav-btn").forEach(c=>{c.classList.toggle("active",c.dataset.screen===n)});const s=document.getElementById("header-title");if(s)if(n==="game"&&e.gameId){const c=Vu(e.gameId);s.textContent=c?c.name:"Juego"}else s.textContent=iv[n]||"Bible Games";const r=document.getElementById("btn-back"),a=!rv.includes(n);r&&r.classList.toggle("hidden",!a);const o=document.getElementById("bottom-nav");o&&o.classList.toggle("hidden",a),pr()}function Nl(){var e;localStorage.getItem("theme")==="light"&&document.body.classList.add("light-theme"),md(av),document.querySelectorAll(".nav-btn").forEach(t=>{t.addEventListener("click",()=>{const s=t.dataset.screen;s&&pe(s)})}),(e=document.getElementById("btn-back"))==null||e.addEventListener("click",()=>{pe("home")}),pr(),pd("home")}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Nl):Nl();
