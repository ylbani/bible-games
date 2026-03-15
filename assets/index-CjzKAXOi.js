(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();const Ds={};let kl=null,ps=null,Yr=null;function Mt(n,e){Ds[n]=e}function pe(n,e={}){ps&&(ps(),ps=null),kl=n,window.location.hash=n;const t=document.getElementById("main-content");if(t){if(t.innerHTML="",t.className="main-content screen-enter",Ds[n]){const s=Ds[n](t,e);typeof s=="function"&&(ps=s)}Yr&&Yr(n,e)}}function pd(n){Yr=n}function gd(n="home"){window.addEventListener("hashchange",()=>{const t=window.location.hash.slice(1)||n;t!==kl&&Ds[t]&&pe(t)});const e=window.location.hash.slice(1)||n;pe(e)}const bi="bgc_";function Ll(n,e){try{return localStorage.setItem(bi+n,JSON.stringify(e)),!0}catch(t){return console.warn("Storage save failed:",t),!1}}function Ml(n,e=null){try{const t=localStorage.getItem(bi+n);return t?JSON.parse(t):e}catch(t){return console.warn("Storage load failed:",t),e}}function yd(){Object.keys(localStorage).filter(e=>e.startsWith(bi)).forEach(e=>localStorage.removeItem(e))}const vd=()=>{};var pa={};/**
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
 */const Ol=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},_d=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const o=n[t++];e[s++]=String.fromCharCode((r&31)<<6|o&63)}else if(r>239&&r<365){const o=n[t++],a=n[t++],c=n[t++],d=((r&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(d>>10)),e[s++]=String.fromCharCode(56320+(d&1023))}else{const o=n[t++],a=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(o&63)<<6|a&63)}}return e.join("")},Fl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const o=n[r],a=r+1<n.length,c=a?n[r+1]:0,d=r+2<n.length,h=d?n[r+2]:0,m=o>>2,p=(o&3)<<4|c>>4;let _=(c&15)<<2|h>>6,S=h&63;d||(S=64,a||(_=64)),s.push(t[m],t[p],t[_],t[S])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ol(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):_d(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const o=t[n.charAt(r++)],c=r<n.length?t[n.charAt(r)]:0;++r;const h=r<n.length?t[n.charAt(r)]:64;++r;const p=r<n.length?t[n.charAt(r)]:64;if(++r,o==null||c==null||h==null||p==null)throw new Ed;const _=o<<2|c>>4;if(s.push(_),h!==64){const S=c<<4&240|h>>2;if(s.push(S),p!==64){const R=h<<6&192|p;s.push(R)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ed extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bd=function(n){const e=Ol(n);return Fl.encodeByteArray(e,!0)},Vs=function(n){return bd(n).replace(/\./g,"")},Td=function(n){try{return Fl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Id(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const wd=()=>Id().__FIREBASE_DEFAULTS__,Ad=()=>{if(typeof process>"u"||typeof pa>"u")return;const n=pa.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Sd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Td(n[1]);return e&&JSON.parse(e)},Ti=()=>{try{return vd()||wd()||Ad()||Sd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Rd=n=>{var e,t;return(t=(e=Ti())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Cd=n=>{const e=Rd(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},$l=()=>{var n;return(n=Ti())==null?void 0:n.config};/**
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
 */function Ii(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Dd(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Vd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Vs(JSON.stringify(t)),Vs(JSON.stringify(a)),""].join(".")}const Dn={};function xd(){const n={prod:[],emulator:[]};for(const e of Object.keys(Dn))Dn[e]?n.emulator.push(e):n.prod.push(e);return n}function Nd(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let ga=!1;function kd(n,e){if(typeof window>"u"||typeof document>"u"||!Ii(window.location.host)||Dn[n]===e||Dn[n]||ga)return;Dn[n]=e;function t(_){return`__firebase__banner__${_}`}const s="__firebase__banner",o=xd().prod.length>0;function a(){const _=document.getElementById(s);_&&_.remove()}function c(_){_.style.display="flex",_.style.background="#7faaf0",_.style.position="fixed",_.style.bottom="5px",_.style.left="5px",_.style.padding=".5em",_.style.borderRadius="5px",_.style.alignItems="center"}function d(_,S){_.setAttribute("width","24"),_.setAttribute("id",S),_.setAttribute("height","24"),_.setAttribute("viewBox","0 0 24 24"),_.setAttribute("fill","none"),_.style.marginLeft="-6px"}function h(){const _=document.createElement("span");return _.style.cursor="pointer",_.style.marginLeft="16px",_.style.fontSize="24px",_.innerHTML=" &times;",_.onclick=()=>{ga=!0,a()},_}function m(_,S){_.setAttribute("id",S),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline"}function p(){const _=Nd(s),S=t("text"),R=document.getElementById(S)||document.createElement("span"),D=t("learnmore"),x=document.getElementById(D)||document.createElement("a"),V=t("preprendIcon"),k=document.getElementById(V)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(_.created){const $=_.element;c($),m(x,D);const O=h();d(k,V),$.append(k,R,x,O),document.body.appendChild($)}o?(R.innerText="Preview backend disconnected.",k.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(k.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function Ld(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Md(){var e;const n=(e=Ti())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Od(){return!Md()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Fd(){try{return typeof indexedDB=="object"}catch{return!1}}function $d(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var o;e(((o=r.error)==null?void 0:o.message)||"")}}catch(t){e(t)}})}/**
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
 */const qd="FirebaseError";class nn extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=qd,Object.setPrototypeOf(this,nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ql.prototype.create)}}class ql{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,o=this.errors[e],a=o?Bd(o,s):"Error",c=`${this.serviceName}: ${a} (${r}).`;return new nn(r,c,s)}}function Bd(n,e){return n.replace(Ud,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Ud=/\{\$([^}]+)}/g;function xs(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const o=n[r],a=e[r];if(ya(o)&&ya(a)){if(!xs(o,a))return!1}else if(o!==a)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function ya(n){return n!==null&&typeof n=="object"}/**
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
 */function Qe(n){return n&&n._delegate?n._delegate:n}class Mn{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Rt="[DEFAULT]";/**
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
 */class jd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Pd;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Gd(e))try{this.getOrInitializeService({instanceIdentifier:Rt})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:r});s.resolve(o)}catch{}}}}clearInstance(e=Rt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rt){return this.instances.has(e)}getOptions(e=Rt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);s===c&&a.resolve(r)}return r}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:zd(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Rt){return this.component?this.component.multipleInstances?e:Rt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zd(n){return n===Rt?void 0:n}function Gd(n){return n.instantiationMode==="EAGER"}/**
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
 */var Z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Z||(Z={}));const Qd={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},Jd=Z.INFO,Wd={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},Kd=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=Wd[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bl{constructor(e){this.name=e,this._logLevel=Jd,this._logHandler=Kd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Qd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const Yd=(n,e)=>e.some(t=>n instanceof t);let va,_a;function Xd(){return va||(va=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zd(){return _a||(_a=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ul=new WeakMap,Xr=new WeakMap,jl=new WeakMap,Fr=new WeakMap,wi=new WeakMap;function eh(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(at(n.result)),r()},a=()=>{s(n.error),r()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Ul.set(t,n)}).catch(()=>{}),wi.set(e,n),e}function th(n){if(Xr.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),r()},a=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Xr.set(n,e)}let Zr={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Xr.get(n);if(e==="objectStoreNames")return n.objectStoreNames||jl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return at(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function nh(n){Zr=n(Zr)}function sh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call($r(this),e,...t);return jl.set(s,e.sort?e.sort():[e]),at(s)}:Zd().includes(n)?function(...e){return n.apply($r(this),e),at(Ul.get(this))}:function(...e){return at(n.apply($r(this),e))}}function rh(n){return typeof n=="function"?sh(n):(n instanceof IDBTransaction&&th(n),Yd(n,Xd())?new Proxy(n,Zr):n)}function at(n){if(n instanceof IDBRequest)return eh(n);if(Fr.has(n))return Fr.get(n);const e=rh(n);return e!==n&&(Fr.set(n,e),wi.set(e,n)),e}const $r=n=>wi.get(n);function ih(n,e,{blocked:t,upgrade:s,blocking:r,terminated:o}={}){const a=indexedDB.open(n,e),c=at(a);return s&&a.addEventListener("upgradeneeded",d=>{s(at(a.result),d.oldVersion,d.newVersion,at(a.transaction),d)}),t&&a.addEventListener("blocked",d=>t(d.oldVersion,d.newVersion,d)),c.then(d=>{o&&d.addEventListener("close",()=>o()),r&&d.addEventListener("versionchange",h=>r(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const oh=["get","getKey","getAll","getAllKeys","count"],ah=["put","add","delete","clear"],qr=new Map;function Ea(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(qr.get(e))return qr.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=ah.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||oh.includes(t)))return;const o=async function(a,...c){const d=this.transaction(a,r?"readwrite":"readonly");let h=d.store;return s&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),r&&d.done]))[0]};return qr.set(e,o),o}nh(n=>({...n,get:(e,t,s)=>Ea(e,t)||n.get(e,t,s),has:(e,t)=>!!Ea(e,t)||n.has(e,t)}));/**
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
 */class lh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(ch(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function ch(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ei="@firebase/app",ba="0.14.9";/**
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
 */const Ke=new Bl("@firebase/app"),uh="@firebase/app-compat",dh="@firebase/analytics-compat",hh="@firebase/analytics",fh="@firebase/app-check-compat",mh="@firebase/app-check",ph="@firebase/auth",gh="@firebase/auth-compat",yh="@firebase/database",vh="@firebase/data-connect",_h="@firebase/database-compat",Eh="@firebase/functions",bh="@firebase/functions-compat",Th="@firebase/installations",Ih="@firebase/installations-compat",wh="@firebase/messaging",Ah="@firebase/messaging-compat",Sh="@firebase/performance",Rh="@firebase/performance-compat",Ch="@firebase/remote-config",Ph="@firebase/remote-config-compat",Dh="@firebase/storage",Vh="@firebase/storage-compat",xh="@firebase/firestore",Nh="@firebase/ai",kh="@firebase/firestore-compat",Lh="firebase",Mh="12.10.0";/**
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
 */const ti="[DEFAULT]",Oh={[ei]:"fire-core",[uh]:"fire-core-compat",[hh]:"fire-analytics",[dh]:"fire-analytics-compat",[mh]:"fire-app-check",[fh]:"fire-app-check-compat",[ph]:"fire-auth",[gh]:"fire-auth-compat",[yh]:"fire-rtdb",[vh]:"fire-data-connect",[_h]:"fire-rtdb-compat",[Eh]:"fire-fn",[bh]:"fire-fn-compat",[Th]:"fire-iid",[Ih]:"fire-iid-compat",[wh]:"fire-fcm",[Ah]:"fire-fcm-compat",[Sh]:"fire-perf",[Rh]:"fire-perf-compat",[Ch]:"fire-rc",[Ph]:"fire-rc-compat",[Dh]:"fire-gcs",[Vh]:"fire-gcs-compat",[xh]:"fire-fst",[kh]:"fire-fst-compat",[Nh]:"fire-vertex","fire-js":"fire-js",[Lh]:"fire-js-all"};/**
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
 */const Ns=new Map,Fh=new Map,ni=new Map;function Ta(n,e){try{n.container.addComponent(e)}catch(t){Ke.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ks(n){const e=n.name;if(ni.has(e))return Ke.debug(`There were multiple attempts to register component ${e}.`),!1;ni.set(e,n);for(const t of Ns.values())Ta(t,n);for(const t of Fh.values())Ta(t,n);return!0}function $h(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function qh(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Bh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},lt=new ql("app","Firebase",Bh);/**
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
 */class Uh{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw lt.create("app-deleted",{appName:this._name})}}/**
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
 */const jh=Mh;function zl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:ti,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw lt.create("bad-app-name",{appName:String(r)});if(t||(t=$l()),!t)throw lt.create("no-options");const o=Ns.get(r);if(o){if(xs(t,o.options)&&xs(s,o.config))return o;throw lt.create("duplicate-app",{appName:r})}const a=new Hd(r);for(const d of ni.values())a.addComponent(d);const c=new Uh(t,s,a);return Ns.set(r,c),c}function zh(n=ti){const e=Ns.get(n);if(!e&&n===ti&&$l())return zl();if(!e)throw lt.create("no-app",{appName:n});return e}function Jt(n,e,t){let s=Oh[n]??n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ke.warn(a.join(" "));return}ks(new Mn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Gh="firebase-heartbeat-database",Hh=1,On="firebase-heartbeat-store";let Br=null;function Gl(){return Br||(Br=ih(Gh,Hh,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(On)}catch(t){console.warn(t)}}}}).catch(n=>{throw lt.create("idb-open",{originalErrorMessage:n.message})})),Br}async function Qh(n){try{const t=(await Gl()).transaction(On),s=await t.objectStore(On).get(Hl(n));return await t.done,s}catch(e){if(e instanceof nn)Ke.warn(e.message);else{const t=lt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ke.warn(t.message)}}}async function Ia(n,e){try{const s=(await Gl()).transaction(On,"readwrite");await s.objectStore(On).put(e,Hl(n)),await s.done}catch(t){if(t instanceof nn)Ke.warn(t.message);else{const s=lt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ke.warn(s.message)}}}function Hl(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Jh=1024,Wh=30;class Kh{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Xh(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=wa();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:r}),this._heartbeatsCache.heartbeats.length>Wh){const a=Zh(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Ke.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=wa(),{heartbeatsToSend:s,unsentEntries:r}=Yh(this._heartbeatsCache.heartbeats),o=Vs(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return Ke.warn(t),""}}}function wa(){return new Date().toISOString().substring(0,10)}function Yh(n,e=Jh){const t=[];let s=n.slice();for(const r of n){const o=t.find(a=>a.agent===r.agent);if(o){if(o.dates.push(r.date),Aa(t)>e){o.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),Aa(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Xh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fd()?$d().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Qh(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Ia(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Ia(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Aa(n){return Vs(JSON.stringify({version:2,heartbeats:n})).length}function Zh(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function ef(n){ks(new Mn("platform-logger",e=>new lh(e),"PRIVATE")),ks(new Mn("heartbeat",e=>new Kh(e),"PRIVATE")),Jt(ei,ba,n),Jt(ei,ba,"esm2020"),Jt("fire-js","")}ef("");var tf="firebase",nf="12.10.0";/**
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
 */Jt(tf,nf,"app");var Sa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ct,Ql;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,v){function E(){}E.prototype=v.prototype,b.F=v.prototype,b.prototype=new E,b.prototype.constructor=b,b.D=function(T,y,I){for(var g=Array(arguments.length-2),j=2;j<arguments.length;j++)g[j-2]=arguments[j];return v.prototype[y].apply(T,g)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(b,v,E){E||(E=0);const T=Array(16);if(typeof v=="string")for(var y=0;y<16;++y)T[y]=v.charCodeAt(E++)|v.charCodeAt(E++)<<8|v.charCodeAt(E++)<<16|v.charCodeAt(E++)<<24;else for(y=0;y<16;++y)T[y]=v[E++]|v[E++]<<8|v[E++]<<16|v[E++]<<24;v=b.g[0],E=b.g[1],y=b.g[2];let I=b.g[3],g;g=v+(I^E&(y^I))+T[0]+3614090360&4294967295,v=E+(g<<7&4294967295|g>>>25),g=I+(y^v&(E^y))+T[1]+3905402710&4294967295,I=v+(g<<12&4294967295|g>>>20),g=y+(E^I&(v^E))+T[2]+606105819&4294967295,y=I+(g<<17&4294967295|g>>>15),g=E+(v^y&(I^v))+T[3]+3250441966&4294967295,E=y+(g<<22&4294967295|g>>>10),g=v+(I^E&(y^I))+T[4]+4118548399&4294967295,v=E+(g<<7&4294967295|g>>>25),g=I+(y^v&(E^y))+T[5]+1200080426&4294967295,I=v+(g<<12&4294967295|g>>>20),g=y+(E^I&(v^E))+T[6]+2821735955&4294967295,y=I+(g<<17&4294967295|g>>>15),g=E+(v^y&(I^v))+T[7]+4249261313&4294967295,E=y+(g<<22&4294967295|g>>>10),g=v+(I^E&(y^I))+T[8]+1770035416&4294967295,v=E+(g<<7&4294967295|g>>>25),g=I+(y^v&(E^y))+T[9]+2336552879&4294967295,I=v+(g<<12&4294967295|g>>>20),g=y+(E^I&(v^E))+T[10]+4294925233&4294967295,y=I+(g<<17&4294967295|g>>>15),g=E+(v^y&(I^v))+T[11]+2304563134&4294967295,E=y+(g<<22&4294967295|g>>>10),g=v+(I^E&(y^I))+T[12]+1804603682&4294967295,v=E+(g<<7&4294967295|g>>>25),g=I+(y^v&(E^y))+T[13]+4254626195&4294967295,I=v+(g<<12&4294967295|g>>>20),g=y+(E^I&(v^E))+T[14]+2792965006&4294967295,y=I+(g<<17&4294967295|g>>>15),g=E+(v^y&(I^v))+T[15]+1236535329&4294967295,E=y+(g<<22&4294967295|g>>>10),g=v+(y^I&(E^y))+T[1]+4129170786&4294967295,v=E+(g<<5&4294967295|g>>>27),g=I+(E^y&(v^E))+T[6]+3225465664&4294967295,I=v+(g<<9&4294967295|g>>>23),g=y+(v^E&(I^v))+T[11]+643717713&4294967295,y=I+(g<<14&4294967295|g>>>18),g=E+(I^v&(y^I))+T[0]+3921069994&4294967295,E=y+(g<<20&4294967295|g>>>12),g=v+(y^I&(E^y))+T[5]+3593408605&4294967295,v=E+(g<<5&4294967295|g>>>27),g=I+(E^y&(v^E))+T[10]+38016083&4294967295,I=v+(g<<9&4294967295|g>>>23),g=y+(v^E&(I^v))+T[15]+3634488961&4294967295,y=I+(g<<14&4294967295|g>>>18),g=E+(I^v&(y^I))+T[4]+3889429448&4294967295,E=y+(g<<20&4294967295|g>>>12),g=v+(y^I&(E^y))+T[9]+568446438&4294967295,v=E+(g<<5&4294967295|g>>>27),g=I+(E^y&(v^E))+T[14]+3275163606&4294967295,I=v+(g<<9&4294967295|g>>>23),g=y+(v^E&(I^v))+T[3]+4107603335&4294967295,y=I+(g<<14&4294967295|g>>>18),g=E+(I^v&(y^I))+T[8]+1163531501&4294967295,E=y+(g<<20&4294967295|g>>>12),g=v+(y^I&(E^y))+T[13]+2850285829&4294967295,v=E+(g<<5&4294967295|g>>>27),g=I+(E^y&(v^E))+T[2]+4243563512&4294967295,I=v+(g<<9&4294967295|g>>>23),g=y+(v^E&(I^v))+T[7]+1735328473&4294967295,y=I+(g<<14&4294967295|g>>>18),g=E+(I^v&(y^I))+T[12]+2368359562&4294967295,E=y+(g<<20&4294967295|g>>>12),g=v+(E^y^I)+T[5]+4294588738&4294967295,v=E+(g<<4&4294967295|g>>>28),g=I+(v^E^y)+T[8]+2272392833&4294967295,I=v+(g<<11&4294967295|g>>>21),g=y+(I^v^E)+T[11]+1839030562&4294967295,y=I+(g<<16&4294967295|g>>>16),g=E+(y^I^v)+T[14]+4259657740&4294967295,E=y+(g<<23&4294967295|g>>>9),g=v+(E^y^I)+T[1]+2763975236&4294967295,v=E+(g<<4&4294967295|g>>>28),g=I+(v^E^y)+T[4]+1272893353&4294967295,I=v+(g<<11&4294967295|g>>>21),g=y+(I^v^E)+T[7]+4139469664&4294967295,y=I+(g<<16&4294967295|g>>>16),g=E+(y^I^v)+T[10]+3200236656&4294967295,E=y+(g<<23&4294967295|g>>>9),g=v+(E^y^I)+T[13]+681279174&4294967295,v=E+(g<<4&4294967295|g>>>28),g=I+(v^E^y)+T[0]+3936430074&4294967295,I=v+(g<<11&4294967295|g>>>21),g=y+(I^v^E)+T[3]+3572445317&4294967295,y=I+(g<<16&4294967295|g>>>16),g=E+(y^I^v)+T[6]+76029189&4294967295,E=y+(g<<23&4294967295|g>>>9),g=v+(E^y^I)+T[9]+3654602809&4294967295,v=E+(g<<4&4294967295|g>>>28),g=I+(v^E^y)+T[12]+3873151461&4294967295,I=v+(g<<11&4294967295|g>>>21),g=y+(I^v^E)+T[15]+530742520&4294967295,y=I+(g<<16&4294967295|g>>>16),g=E+(y^I^v)+T[2]+3299628645&4294967295,E=y+(g<<23&4294967295|g>>>9),g=v+(y^(E|~I))+T[0]+4096336452&4294967295,v=E+(g<<6&4294967295|g>>>26),g=I+(E^(v|~y))+T[7]+1126891415&4294967295,I=v+(g<<10&4294967295|g>>>22),g=y+(v^(I|~E))+T[14]+2878612391&4294967295,y=I+(g<<15&4294967295|g>>>17),g=E+(I^(y|~v))+T[5]+4237533241&4294967295,E=y+(g<<21&4294967295|g>>>11),g=v+(y^(E|~I))+T[12]+1700485571&4294967295,v=E+(g<<6&4294967295|g>>>26),g=I+(E^(v|~y))+T[3]+2399980690&4294967295,I=v+(g<<10&4294967295|g>>>22),g=y+(v^(I|~E))+T[10]+4293915773&4294967295,y=I+(g<<15&4294967295|g>>>17),g=E+(I^(y|~v))+T[1]+2240044497&4294967295,E=y+(g<<21&4294967295|g>>>11),g=v+(y^(E|~I))+T[8]+1873313359&4294967295,v=E+(g<<6&4294967295|g>>>26),g=I+(E^(v|~y))+T[15]+4264355552&4294967295,I=v+(g<<10&4294967295|g>>>22),g=y+(v^(I|~E))+T[6]+2734768916&4294967295,y=I+(g<<15&4294967295|g>>>17),g=E+(I^(y|~v))+T[13]+1309151649&4294967295,E=y+(g<<21&4294967295|g>>>11),g=v+(y^(E|~I))+T[4]+4149444226&4294967295,v=E+(g<<6&4294967295|g>>>26),g=I+(E^(v|~y))+T[11]+3174756917&4294967295,I=v+(g<<10&4294967295|g>>>22),g=y+(v^(I|~E))+T[2]+718787259&4294967295,y=I+(g<<15&4294967295|g>>>17),g=E+(I^(y|~v))+T[9]+3951481745&4294967295,b.g[0]=b.g[0]+v&4294967295,b.g[1]=b.g[1]+(y+(g<<21&4294967295|g>>>11))&4294967295,b.g[2]=b.g[2]+y&4294967295,b.g[3]=b.g[3]+I&4294967295}s.prototype.v=function(b,v){v===void 0&&(v=b.length);const E=v-this.blockSize,T=this.C;let y=this.h,I=0;for(;I<v;){if(y==0)for(;I<=E;)r(this,b,I),I+=this.blockSize;if(typeof b=="string"){for(;I<v;)if(T[y++]=b.charCodeAt(I++),y==this.blockSize){r(this,T),y=0;break}}else for(;I<v;)if(T[y++]=b[I++],y==this.blockSize){r(this,T),y=0;break}}this.h=y,this.o+=v},s.prototype.A=function(){var b=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);b[0]=128;for(var v=1;v<b.length-8;++v)b[v]=0;v=this.o*8;for(var E=b.length-8;E<b.length;++E)b[E]=v&255,v/=256;for(this.v(b),b=Array(16),v=0,E=0;E<4;++E)for(let T=0;T<32;T+=8)b[v++]=this.g[E]>>>T&255;return b};function o(b,v){var E=c;return Object.prototype.hasOwnProperty.call(E,b)?E[b]:E[b]=v(b)}function a(b,v){this.h=v;const E=[];let T=!0;for(let y=b.length-1;y>=0;y--){const I=b[y]|0;T&&I==v||(E[y]=I,T=!1)}this.g=E}var c={};function d(b){return-128<=b&&b<128?o(b,function(v){return new a([v|0],v<0?-1:0)}):new a([b|0],b<0?-1:0)}function h(b){if(isNaN(b)||!isFinite(b))return p;if(b<0)return x(h(-b));const v=[];let E=1;for(let T=0;b>=E;T++)v[T]=b/E|0,E*=4294967296;return new a(v,0)}function m(b,v){if(b.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(b.charAt(0)=="-")return x(m(b.substring(1),v));if(b.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=h(Math.pow(v,8));let T=p;for(let I=0;I<b.length;I+=8){var y=Math.min(8,b.length-I);const g=parseInt(b.substring(I,I+y),v);y<8?(y=h(Math.pow(v,y)),T=T.j(y).add(h(g))):(T=T.j(E),T=T.add(h(g)))}return T}var p=d(0),_=d(1),S=d(16777216);n=a.prototype,n.m=function(){if(D(this))return-x(this).m();let b=0,v=1;for(let E=0;E<this.g.length;E++){const T=this.i(E);b+=(T>=0?T:4294967296+T)*v,v*=4294967296}return b},n.toString=function(b){if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(R(this))return"0";if(D(this))return"-"+x(this).toString(b);const v=h(Math.pow(b,6));var E=this;let T="";for(;;){const y=O(E,v).g;E=V(E,y.j(v));let I=((E.g.length>0?E.g[0]:E.h)>>>0).toString(b);if(E=y,R(E))return I+T;for(;I.length<6;)I="0"+I;T=I+T}},n.i=function(b){return b<0?0:b<this.g.length?this.g[b]:this.h};function R(b){if(b.h!=0)return!1;for(let v=0;v<b.g.length;v++)if(b.g[v]!=0)return!1;return!0}function D(b){return b.h==-1}n.l=function(b){return b=V(this,b),D(b)?-1:R(b)?0:1};function x(b){const v=b.g.length,E=[];for(let T=0;T<v;T++)E[T]=~b.g[T];return new a(E,~b.h).add(_)}n.abs=function(){return D(this)?x(this):this},n.add=function(b){const v=Math.max(this.g.length,b.g.length),E=[];let T=0;for(let y=0;y<=v;y++){let I=T+(this.i(y)&65535)+(b.i(y)&65535),g=(I>>>16)+(this.i(y)>>>16)+(b.i(y)>>>16);T=g>>>16,I&=65535,g&=65535,E[y]=g<<16|I}return new a(E,E[E.length-1]&-2147483648?-1:0)};function V(b,v){return b.add(x(v))}n.j=function(b){if(R(this)||R(b))return p;if(D(this))return D(b)?x(this).j(x(b)):x(x(this).j(b));if(D(b))return x(this.j(x(b)));if(this.l(S)<0&&b.l(S)<0)return h(this.m()*b.m());const v=this.g.length+b.g.length,E=[];for(var T=0;T<2*v;T++)E[T]=0;for(T=0;T<this.g.length;T++)for(let y=0;y<b.g.length;y++){const I=this.i(T)>>>16,g=this.i(T)&65535,j=b.i(y)>>>16,F=b.i(y)&65535;E[2*T+2*y]+=g*F,k(E,2*T+2*y),E[2*T+2*y+1]+=I*F,k(E,2*T+2*y+1),E[2*T+2*y+1]+=g*j,k(E,2*T+2*y+1),E[2*T+2*y+2]+=I*j,k(E,2*T+2*y+2)}for(b=0;b<v;b++)E[b]=E[2*b+1]<<16|E[2*b];for(b=v;b<2*v;b++)E[b]=0;return new a(E,0)};function k(b,v){for(;(b[v]&65535)!=b[v];)b[v+1]+=b[v]>>>16,b[v]&=65535,v++}function $(b,v){this.g=b,this.h=v}function O(b,v){if(R(v))throw Error("division by zero");if(R(b))return new $(p,p);if(D(b))return v=O(x(b),v),new $(x(v.g),x(v.h));if(D(v))return v=O(b,x(v)),new $(x(v.g),v.h);if(b.g.length>30){if(D(b)||D(v))throw Error("slowDivide_ only works with positive integers.");for(var E=_,T=v;T.l(b)<=0;)E=q(E),T=q(T);var y=U(E,1),I=U(T,1);for(T=U(T,2),E=U(E,2);!R(T);){var g=I.add(T);g.l(b)<=0&&(y=y.add(E),I=g),T=U(T,1),E=U(E,1)}return v=V(b,y.j(v)),new $(y,v)}for(y=p;b.l(v)>=0;){for(E=Math.max(1,Math.floor(b.m()/v.m())),T=Math.ceil(Math.log(E)/Math.LN2),T=T<=48?1:Math.pow(2,T-48),I=h(E),g=I.j(v);D(g)||g.l(b)>0;)E-=T,I=h(E),g=I.j(v);R(I)&&(I=_),y=y.add(I),b=V(b,g)}return new $(y,b)}n.B=function(b){return O(this,b).h},n.and=function(b){const v=Math.max(this.g.length,b.g.length),E=[];for(let T=0;T<v;T++)E[T]=this.i(T)&b.i(T);return new a(E,this.h&b.h)},n.or=function(b){const v=Math.max(this.g.length,b.g.length),E=[];for(let T=0;T<v;T++)E[T]=this.i(T)|b.i(T);return new a(E,this.h|b.h)},n.xor=function(b){const v=Math.max(this.g.length,b.g.length),E=[];for(let T=0;T<v;T++)E[T]=this.i(T)^b.i(T);return new a(E,this.h^b.h)};function q(b){const v=b.g.length+1,E=[];for(let T=0;T<v;T++)E[T]=b.i(T)<<1|b.i(T-1)>>>31;return new a(E,b.h)}function U(b,v){const E=v>>5;v%=32;const T=b.g.length-E,y=[];for(let I=0;I<T;I++)y[I]=v>0?b.i(I+E)>>>v|b.i(I+E+1)<<32-v:b.i(I+E);return new a(y,b.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,Ql=s,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=m,ct=a}).apply(typeof Sa<"u"?Sa:typeof self<"u"?self:typeof window<"u"?window:{});var gs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jl,Sn,Wl,Ts,si,Kl,Yl,Xl;(function(){var n,e=Object.defineProperty;function t(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof gs=="object"&&gs];for(var l=0;l<i.length;++l){var u=i[l];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var s=t(this);function r(i,l){if(l)e:{var u=s;i=i.split(".");for(var f=0;f<i.length-1;f++){var w=i[f];if(!(w in u))break e;u=u[w]}i=i[i.length-1],f=u[i],l=l(f),l!=f&&l!=null&&e(u,i,{configurable:!0,writable:!0,value:l})}}r("Symbol.dispose",function(i){return i||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(i){return i||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(i){return i||function(l){var u=[],f;for(f in l)Object.prototype.hasOwnProperty.call(l,f)&&u.push([f,l[f]]);return u}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(i){var l=typeof i;return l=="object"&&i!=null||l=="function"}function d(i,l,u){return i.call.apply(i.bind,arguments)}function h(i,l,u){return h=d,h.apply(null,arguments)}function m(i,l){var u=Array.prototype.slice.call(arguments,1);return function(){var f=u.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function p(i,l){function u(){}u.prototype=l.prototype,i.Z=l.prototype,i.prototype=new u,i.prototype.constructor=i,i.Ob=function(f,w,A){for(var N=Array(arguments.length-2),J=2;J<arguments.length;J++)N[J-2]=arguments[J];return l.prototype[w].apply(f,N)}}var _=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?i=>i&&AsyncContext.Snapshot.wrap(i):i=>i;function S(i){const l=i.length;if(l>0){const u=Array(l);for(let f=0;f<l;f++)u[f]=i[f];return u}return[]}function R(i,l){for(let f=1;f<arguments.length;f++){const w=arguments[f];var u=typeof w;if(u=u!="object"?u:w?Array.isArray(w)?"array":u:"null",u=="array"||u=="object"&&typeof w.length=="number"){u=i.length||0;const A=w.length||0;i.length=u+A;for(let N=0;N<A;N++)i[u+N]=w[N]}else i.push(w)}}class D{constructor(l,u){this.i=l,this.j=u,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function x(i){a.setTimeout(()=>{throw i},0)}function V(){var i=b;let l=null;return i.g&&(l=i.g,i.g=i.g.next,i.g||(i.h=null),l.next=null),l}class k{constructor(){this.h=this.g=null}add(l,u){const f=$.get();f.set(l,u),this.h?this.h.next=f:this.g=f,this.h=f}}var $=new D(()=>new O,i=>i.reset());class O{constructor(){this.next=this.g=this.h=null}set(l,u){this.h=l,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let q,U=!1,b=new k,v=()=>{const i=Promise.resolve(void 0);q=()=>{i.then(E)}};function E(){for(var i;i=V();){try{i.h.call(i.g)}catch(u){x(u)}var l=$;l.j(i),l.h<100&&(l.h++,i.next=l.g,l.g=i)}U=!1}function T(){this.u=this.u,this.C=this.C}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function y(i,l){this.type=i,this.g=this.target=l,this.defaultPrevented=!1}y.prototype.h=function(){this.defaultPrevented=!0};var I=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var i=!1,l=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const u=()=>{};a.addEventListener("test",u,l),a.removeEventListener("test",u,l)}catch{}return i})();function g(i){return/^[\s\xa0]*$/.test(i)}function j(i,l){y.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i&&this.init(i,l)}p(j,y),j.prototype.init=function(i,l){const u=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;this.target=i.target||i.srcElement,this.g=l,l=i.relatedTarget,l||(u=="mouseover"?l=i.fromElement:u=="mouseout"&&(l=i.toElement)),this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=i.pointerType,this.state=i.state,this.i=i,i.defaultPrevented&&j.Z.h.call(this)},j.prototype.h=function(){j.Z.h.call(this);const i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var F="closure_listenable_"+(Math.random()*1e6|0),Y=0;function ae(i,l,u,f,w){this.listener=i,this.proxy=null,this.src=l,this.type=u,this.capture=!!f,this.ha=w,this.key=++Y,this.da=this.fa=!1}function es(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function ts(i,l,u){for(const f in i)l.call(u,i[f],f,i)}function $u(i,l){for(const u in i)l.call(void 0,i[u],u,i)}function mo(i){const l={};for(const u in i)l[u]=i[u];return l}const po="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function go(i,l){let u,f;for(let w=1;w<arguments.length;w++){f=arguments[w];for(u in f)i[u]=f[u];for(let A=0;A<po.length;A++)u=po[A],Object.prototype.hasOwnProperty.call(f,u)&&(i[u]=f[u])}}function ns(i){this.src=i,this.g={},this.h=0}ns.prototype.add=function(i,l,u,f,w){const A=i.toString();i=this.g[A],i||(i=this.g[A]=[],this.h++);const N=pr(i,l,f,w);return N>-1?(l=i[N],u||(l.fa=!1)):(l=new ae(l,this.src,A,!!f,w),l.fa=u,i.push(l)),l};function mr(i,l){const u=l.type;if(u in i.g){var f=i.g[u],w=Array.prototype.indexOf.call(f,l,void 0),A;(A=w>=0)&&Array.prototype.splice.call(f,w,1),A&&(es(l),i.g[u].length==0&&(delete i.g[u],i.h--))}}function pr(i,l,u,f){for(let w=0;w<i.length;++w){const A=i[w];if(!A.da&&A.listener==l&&A.capture==!!u&&A.ha==f)return w}return-1}var gr="closure_lm_"+(Math.random()*1e6|0),yr={};function yo(i,l,u,f,w){if(Array.isArray(l)){for(let A=0;A<l.length;A++)yo(i,l[A],u,f,w);return null}return u=Eo(u),i&&i[F]?i.J(l,u,c(f)?!!f.capture:!1,w):qu(i,l,u,!1,f,w)}function qu(i,l,u,f,w,A){if(!l)throw Error("Invalid event type");const N=c(w)?!!w.capture:!!w;let J=_r(i);if(J||(i[gr]=J=new ns(i)),u=J.add(l,u,f,N,A),u.proxy)return u;if(f=Bu(),u.proxy=f,f.src=i,f.listener=u,i.addEventListener)I||(w=N),w===void 0&&(w=!1),i.addEventListener(l.toString(),f,w);else if(i.attachEvent)i.attachEvent(_o(l.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return u}function Bu(){function i(u){return l.call(i.src,i.listener,u)}const l=Uu;return i}function vo(i,l,u,f,w){if(Array.isArray(l))for(var A=0;A<l.length;A++)vo(i,l[A],u,f,w);else f=c(f)?!!f.capture:!!f,u=Eo(u),i&&i[F]?(i=i.i,A=String(l).toString(),A in i.g&&(l=i.g[A],u=pr(l,u,f,w),u>-1&&(es(l[u]),Array.prototype.splice.call(l,u,1),l.length==0&&(delete i.g[A],i.h--)))):i&&(i=_r(i))&&(l=i.g[l.toString()],i=-1,l&&(i=pr(l,u,f,w)),(u=i>-1?l[i]:null)&&vr(u))}function vr(i){if(typeof i!="number"&&i&&!i.da){var l=i.src;if(l&&l[F])mr(l.i,i);else{var u=i.type,f=i.proxy;l.removeEventListener?l.removeEventListener(u,f,i.capture):l.detachEvent?l.detachEvent(_o(u),f):l.addListener&&l.removeListener&&l.removeListener(f),(u=_r(l))?(mr(u,i),u.h==0&&(u.src=null,l[gr]=null)):es(i)}}}function _o(i){return i in yr?yr[i]:yr[i]="on"+i}function Uu(i,l){if(i.da)i=!0;else{l=new j(l,this);const u=i.listener,f=i.ha||i.src;i.fa&&vr(i),i=u.call(f,l)}return i}function _r(i){return i=i[gr],i instanceof ns?i:null}var Er="__closure_events_fn_"+(Math.random()*1e9>>>0);function Eo(i){return typeof i=="function"?i:(i[Er]||(i[Er]=function(l){return i.handleEvent(l)}),i[Er])}function Te(){T.call(this),this.i=new ns(this),this.M=this,this.G=null}p(Te,T),Te.prototype[F]=!0,Te.prototype.removeEventListener=function(i,l,u,f){vo(this,i,l,u,f)};function Ce(i,l){var u,f=i.G;if(f)for(u=[];f;f=f.G)u.push(f);if(i=i.M,f=l.type||l,typeof l=="string")l=new y(l,i);else if(l instanceof y)l.target=l.target||i;else{var w=l;l=new y(f,i),go(l,w)}w=!0;let A,N;if(u)for(N=u.length-1;N>=0;N--)A=l.g=u[N],w=ss(A,f,!0,l)&&w;if(A=l.g=i,w=ss(A,f,!0,l)&&w,w=ss(A,f,!1,l)&&w,u)for(N=0;N<u.length;N++)A=l.g=u[N],w=ss(A,f,!1,l)&&w}Te.prototype.N=function(){if(Te.Z.N.call(this),this.i){var i=this.i;for(const l in i.g){const u=i.g[l];for(let f=0;f<u.length;f++)es(u[f]);delete i.g[l],i.h--}}this.G=null},Te.prototype.J=function(i,l,u,f){return this.i.add(String(i),l,!1,u,f)},Te.prototype.K=function(i,l,u,f){return this.i.add(String(i),l,!0,u,f)};function ss(i,l,u,f){if(l=i.i.g[String(l)],!l)return!0;l=l.concat();let w=!0;for(let A=0;A<l.length;++A){const N=l[A];if(N&&!N.da&&N.capture==u){const J=N.listener,me=N.ha||N.src;N.fa&&mr(i.i,N),w=J.call(me,f)!==!1&&w}}return w&&!f.defaultPrevented}function ju(i,l){if(typeof i!="function")if(i&&typeof i.handleEvent=="function")i=h(i.handleEvent,i);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:a.setTimeout(i,l||0)}function bo(i){i.g=ju(()=>{i.g=null,i.i&&(i.i=!1,bo(i))},i.l);const l=i.h;i.h=null,i.m.apply(null,l)}class zu extends T{constructor(l,u){super(),this.m=l,this.l=u,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:bo(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function cn(i){T.call(this),this.h=i,this.g={}}p(cn,T);var To=[];function Io(i){ts(i.g,function(l,u){this.g.hasOwnProperty(u)&&vr(l)},i),i.g={}}cn.prototype.N=function(){cn.Z.N.call(this),Io(this)},cn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var br=a.JSON.stringify,Gu=a.JSON.parse,Hu=class{stringify(i){return a.JSON.stringify(i,void 0)}parse(i){return a.JSON.parse(i,void 0)}};function wo(){}function Ao(){}var un={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Tr(){y.call(this,"d")}p(Tr,y);function Ir(){y.call(this,"c")}p(Ir,y);var Tt={},So=null;function rs(){return So=So||new Te}Tt.Ia="serverreachability";function Ro(i){y.call(this,Tt.Ia,i)}p(Ro,y);function dn(i){const l=rs();Ce(l,new Ro(l))}Tt.STAT_EVENT="statevent";function Co(i,l){y.call(this,Tt.STAT_EVENT,i),this.stat=l}p(Co,y);function Pe(i){const l=rs();Ce(l,new Co(l,i))}Tt.Ja="timingevent";function Po(i,l){y.call(this,Tt.Ja,i),this.size=l}p(Po,y);function hn(i,l){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){i()},l)}function fn(){this.g=!0}fn.prototype.ua=function(){this.g=!1};function Qu(i,l,u,f,w,A){i.info(function(){if(i.g)if(A){var N="",J=A.split("&");for(let ne=0;ne<J.length;ne++){var me=J[ne].split("=");if(me.length>1){const ye=me[0];me=me[1];const Ue=ye.split("_");N=Ue.length>=2&&Ue[1]=="type"?N+(ye+"="+me+"&"):N+(ye+"=redacted&")}}}else N=null;else N=A;return"XMLHTTP REQ ("+f+") [attempt "+w+"]: "+l+`
`+u+`
`+N})}function Ju(i,l,u,f,w,A,N){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+w+"]: "+l+`
`+u+`
`+A+" "+N})}function qt(i,l,u,f){i.info(function(){return"XMLHTTP TEXT ("+l+"): "+Ku(i,u)+(f?" "+f:"")})}function Wu(i,l){i.info(function(){return"TIMEOUT: "+l})}fn.prototype.info=function(){};function Ku(i,l){if(!i.g)return l;if(!l)return null;try{const A=JSON.parse(l);if(A){for(i=0;i<A.length;i++)if(Array.isArray(A[i])){var u=A[i];if(!(u.length<2)){var f=u[1];if(Array.isArray(f)&&!(f.length<1)){var w=f[0];if(w!="noop"&&w!="stop"&&w!="close")for(let N=1;N<f.length;N++)f[N]=""}}}}return br(A)}catch{return l}}var is={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Do={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Vo;function wr(){}p(wr,wo),wr.prototype.g=function(){return new XMLHttpRequest},Vo=new wr;function mn(i){return encodeURIComponent(String(i))}function Yu(i){var l=1;i=i.split(":");const u=[];for(;l>0&&i.length;)u.push(i.shift()),l--;return i.length&&u.push(i.join(":")),u}function et(i,l,u,f){this.j=i,this.i=l,this.l=u,this.S=f||1,this.V=new cn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new xo}function xo(){this.i=null,this.g="",this.h=!1}var No={},Ar={};function Sr(i,l,u){i.M=1,i.A=as(Be(l)),i.u=u,i.R=!0,ko(i,null)}function ko(i,l){i.F=Date.now(),os(i),i.B=Be(i.A);var u=i.B,f=i.S;Array.isArray(f)||(f=[String(f)]),Qo(u.i,"t",f),i.C=0,u=i.j.L,i.h=new xo,i.g=da(i.j,u?l:null,!i.u),i.P>0&&(i.O=new zu(h(i.Y,i,i.g),i.P)),l=i.V,u=i.g,f=i.ba;var w="readystatechange";Array.isArray(w)||(w&&(To[0]=w.toString()),w=To);for(let A=0;A<w.length;A++){const N=yo(u,w[A],f||l.handleEvent,!1,l.h||l);if(!N)break;l.g[N.key]=N}l=i.J?mo(i.J):{},i.u?(i.v||(i.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.B,i.v,i.u,l)):(i.v="GET",i.g.ea(i.B,i.v,null,l)),dn(),Qu(i.i,i.v,i.B,i.l,i.S,i.u)}et.prototype.ba=function(i){i=i.target;const l=this.O;l&&st(i)==3?l.j():this.Y(i)},et.prototype.Y=function(i){try{if(i==this.g)e:{const J=st(this.g),me=this.g.ya(),ne=this.g.ca();if(!(J<3)&&(J!=3||this.g&&(this.h.h||this.g.la()||ea(this.g)))){this.K||J!=4||me==7||(me==8||ne<=0?dn(3):dn(2)),Rr(this);var l=this.g.ca();this.X=l;var u=Xu(this);if(this.o=l==200,Ju(this.i,this.v,this.B,this.l,this.S,J,l),this.o){if(this.U&&!this.L){t:{if(this.g){var f,w=this.g;if((f=w.g?w.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(f)){var A=f;break t}}A=null}if(i=A)qt(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Cr(this,i);else{this.o=!1,this.m=3,Pe(12),It(this),pn(this);break e}}if(this.R){i=!0;let ye;for(;!this.K&&this.C<u.length;)if(ye=Zu(this,u),ye==Ar){J==4&&(this.m=4,Pe(14),i=!1),qt(this.i,this.l,null,"[Incomplete Response]");break}else if(ye==No){this.m=4,Pe(15),qt(this.i,this.l,u,"[Invalid Chunk]"),i=!1;break}else qt(this.i,this.l,ye,null),Cr(this,ye);if(Lo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),J!=4||u.length!=0||this.h.h||(this.m=1,Pe(16),i=!1),this.o=this.o&&i,!i)qt(this.i,this.l,u,"[Invalid Chunked Response]"),It(this),pn(this);else if(u.length>0&&!this.W){this.W=!0;var N=this.j;N.g==this&&N.aa&&!N.P&&(N.j.info("Great, no buffering proxy detected. Bytes received: "+u.length),Mr(N),N.P=!0,Pe(11))}}else qt(this.i,this.l,u,null),Cr(this,u);J==4&&It(this),this.o&&!this.K&&(J==4?aa(this.j,this):(this.o=!1,os(this)))}else fd(this.g),l==400&&u.indexOf("Unknown SID")>0?(this.m=3,Pe(12)):(this.m=0,Pe(13)),It(this),pn(this)}}}catch{}finally{}};function Xu(i){if(!Lo(i))return i.g.la();const l=ea(i.g);if(l==="")return"";let u="";const f=l.length,w=st(i.g)==4;if(!i.h.i){if(typeof TextDecoder>"u")return It(i),pn(i),"";i.h.i=new a.TextDecoder}for(let A=0;A<f;A++)i.h.h=!0,u+=i.h.i.decode(l[A],{stream:!(w&&A==f-1)});return l.length=0,i.h.g+=u,i.C=0,i.h.g}function Lo(i){return i.g?i.v=="GET"&&i.M!=2&&i.j.Aa:!1}function Zu(i,l){var u=i.C,f=l.indexOf(`
`,u);return f==-1?Ar:(u=Number(l.substring(u,f)),isNaN(u)?No:(f+=1,f+u>l.length?Ar:(l=l.slice(f,f+u),i.C=f+u,l)))}et.prototype.cancel=function(){this.K=!0,It(this)};function os(i){i.T=Date.now()+i.H,Mo(i,i.H)}function Mo(i,l){if(i.D!=null)throw Error("WatchDog timer not null");i.D=hn(h(i.aa,i),l)}function Rr(i){i.D&&(a.clearTimeout(i.D),i.D=null)}et.prototype.aa=function(){this.D=null;const i=Date.now();i-this.T>=0?(Wu(this.i,this.B),this.M!=2&&(dn(),Pe(17)),It(this),this.m=2,pn(this)):Mo(this,this.T-i)};function pn(i){i.j.I==0||i.K||aa(i.j,i)}function It(i){Rr(i);var l=i.O;l&&typeof l.dispose=="function"&&l.dispose(),i.O=null,Io(i.V),i.g&&(l=i.g,i.g=null,l.abort(),l.dispose())}function Cr(i,l){try{var u=i.j;if(u.I!=0&&(u.g==i||Pr(u.h,i))){if(!i.L&&Pr(u.h,i)&&u.I==3){try{var f=u.Ba.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var w=f;if(w[0]==0){e:if(!u.v){if(u.g)if(u.g.F+3e3<i.F)hs(u),us(u);else break e;Lr(u),Pe(18)}}else u.xa=w[1],0<u.xa-u.K&&w[2]<37500&&u.F&&u.A==0&&!u.C&&(u.C=hn(h(u.Va,u),6e3));$o(u.h)<=1&&u.ta&&(u.ta=void 0)}else At(u,11)}else if((i.L||u.g==i)&&hs(u),!g(l))for(w=u.Ba.g.parse(l),l=0;l<w.length;l++){let ne=w[l];const ye=ne[0];if(!(ye<=u.K))if(u.K=ye,ne=ne[1],u.I==2)if(ne[0]=="c"){u.M=ne[1],u.ba=ne[2];const Ue=ne[3];Ue!=null&&(u.ka=Ue,u.j.info("VER="+u.ka));const St=ne[4];St!=null&&(u.za=St,u.j.info("SVER="+u.za));const rt=ne[5];rt!=null&&typeof rt=="number"&&rt>0&&(f=1.5*rt,u.O=f,u.j.info("backChannelRequestTimeoutMs_="+f)),f=u;const it=i.g;if(it){const ms=it.g?it.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ms){var A=f.h;A.g||ms.indexOf("spdy")==-1&&ms.indexOf("quic")==-1&&ms.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(Dr(A,A.h),A.h=null))}if(f.G){const Or=it.g?it.g.getResponseHeader("X-HTTP-Session-Id"):null;Or&&(f.wa=Or,re(f.J,f.G,Or))}}u.I=3,u.l&&u.l.ra(),u.aa&&(u.T=Date.now()-i.F,u.j.info("Handshake RTT: "+u.T+"ms")),f=u;var N=i;if(f.na=ua(f,f.L?f.ba:null,f.W),N.L){qo(f.h,N);var J=N,me=f.O;me&&(J.H=me),J.D&&(Rr(J),os(J)),f.g=N}else ia(f);u.i.length>0&&ds(u)}else ne[0]!="stop"&&ne[0]!="close"||At(u,7);else u.I==3&&(ne[0]=="stop"||ne[0]=="close"?ne[0]=="stop"?At(u,7):kr(u):ne[0]!="noop"&&u.l&&u.l.qa(ne),u.A=0)}}dn(4)}catch{}}var ed=class{constructor(i,l){this.g=i,this.map=l}};function Oo(i){this.l=i||10,a.PerformanceNavigationTiming?(i=a.performance.getEntriesByType("navigation"),i=i.length>0&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Fo(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function $o(i){return i.h?1:i.g?i.g.size:0}function Pr(i,l){return i.h?i.h==l:i.g?i.g.has(l):!1}function Dr(i,l){i.g?i.g.add(l):i.h=l}function qo(i,l){i.h&&i.h==l?i.h=null:i.g&&i.g.has(l)&&i.g.delete(l)}Oo.prototype.cancel=function(){if(this.i=Bo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Bo(i){if(i.h!=null)return i.i.concat(i.h.G);if(i.g!=null&&i.g.size!==0){let l=i.i;for(const u of i.g.values())l=l.concat(u.G);return l}return S(i.i)}var Uo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function td(i,l){if(i){i=i.split("&");for(let u=0;u<i.length;u++){const f=i[u].indexOf("=");let w,A=null;f>=0?(w=i[u].substring(0,f),A=i[u].substring(f+1)):w=i[u],l(w,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function tt(i){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;i instanceof tt?(this.l=i.l,gn(this,i.j),this.o=i.o,this.g=i.g,yn(this,i.u),this.h=i.h,Vr(this,Jo(i.i)),this.m=i.m):i&&(l=String(i).match(Uo))?(this.l=!1,gn(this,l[1]||"",!0),this.o=vn(l[2]||""),this.g=vn(l[3]||"",!0),yn(this,l[4]),this.h=vn(l[5]||"",!0),Vr(this,l[6]||"",!0),this.m=vn(l[7]||"")):(this.l=!1,this.i=new En(null,this.l))}tt.prototype.toString=function(){const i=[];var l=this.j;l&&i.push(_n(l,jo,!0),":");var u=this.g;return(u||l=="file")&&(i.push("//"),(l=this.o)&&i.push(_n(l,jo,!0),"@"),i.push(mn(u).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.u,u!=null&&i.push(":",String(u))),(u=this.h)&&(this.g&&u.charAt(0)!="/"&&i.push("/"),i.push(_n(u,u.charAt(0)=="/"?rd:sd,!0))),(u=this.i.toString())&&i.push("?",u),(u=this.m)&&i.push("#",_n(u,od)),i.join("")},tt.prototype.resolve=function(i){const l=Be(this);let u=!!i.j;u?gn(l,i.j):u=!!i.o,u?l.o=i.o:u=!!i.g,u?l.g=i.g:u=i.u!=null;var f=i.h;if(u)yn(l,i.u);else if(u=!!i.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var w=l.h.lastIndexOf("/");w!=-1&&(f=l.h.slice(0,w+1)+f)}if(w=f,w==".."||w==".")f="";else if(w.indexOf("./")!=-1||w.indexOf("/.")!=-1){f=w.lastIndexOf("/",0)==0,w=w.split("/");const A=[];for(let N=0;N<w.length;){const J=w[N++];J=="."?f&&N==w.length&&A.push(""):J==".."?((A.length>1||A.length==1&&A[0]!="")&&A.pop(),f&&N==w.length&&A.push("")):(A.push(J),f=!0)}f=A.join("/")}else f=w}return u?l.h=f:u=i.i.toString()!=="",u?Vr(l,Jo(i.i)):u=!!i.m,u&&(l.m=i.m),l};function Be(i){return new tt(i)}function gn(i,l,u){i.j=u?vn(l,!0):l,i.j&&(i.j=i.j.replace(/:$/,""))}function yn(i,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);i.u=l}else i.u=null}function Vr(i,l,u){l instanceof En?(i.i=l,ad(i.i,i.l)):(u||(l=_n(l,id)),i.i=new En(l,i.l))}function re(i,l,u){i.i.set(l,u)}function as(i){return re(i,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),i}function vn(i,l){return i?l?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function _n(i,l,u){return typeof i=="string"?(i=encodeURI(i).replace(l,nd),u&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function nd(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var jo=/[#\/\?@]/g,sd=/[#\?:]/g,rd=/[#\?]/g,id=/[#\?@]/g,od=/#/g;function En(i,l){this.h=this.g=null,this.i=i||null,this.j=!!l}function wt(i){i.g||(i.g=new Map,i.h=0,i.i&&td(i.i,function(l,u){i.add(decodeURIComponent(l.replace(/\+/g," ")),u)}))}n=En.prototype,n.add=function(i,l){wt(this),this.i=null,i=Bt(this,i);let u=this.g.get(i);return u||this.g.set(i,u=[]),u.push(l),this.h+=1,this};function zo(i,l){wt(i),l=Bt(i,l),i.g.has(l)&&(i.i=null,i.h-=i.g.get(l).length,i.g.delete(l))}function Go(i,l){return wt(i),l=Bt(i,l),i.g.has(l)}n.forEach=function(i,l){wt(this),this.g.forEach(function(u,f){u.forEach(function(w){i.call(l,w,f,this)},this)},this)};function Ho(i,l){wt(i);let u=[];if(typeof l=="string")Go(i,l)&&(u=u.concat(i.g.get(Bt(i,l))));else for(i=Array.from(i.g.values()),l=0;l<i.length;l++)u=u.concat(i[l]);return u}n.set=function(i,l){return wt(this),this.i=null,i=Bt(this,i),Go(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[l]),this.h+=1,this},n.get=function(i,l){return i?(i=Ho(this,i),i.length>0?String(i[0]):l):l};function Qo(i,l,u){zo(i,l),u.length>0&&(i.i=null,i.g.set(Bt(i,l),S(u)),i.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],l=Array.from(this.g.keys());for(let f=0;f<l.length;f++){var u=l[f];const w=mn(u);u=Ho(this,u);for(let A=0;A<u.length;A++){let N=w;u[A]!==""&&(N+="="+mn(u[A])),i.push(N)}}return this.i=i.join("&")};function Jo(i){const l=new En;return l.i=i.i,i.g&&(l.g=new Map(i.g),l.h=i.h),l}function Bt(i,l){return l=String(l),i.j&&(l=l.toLowerCase()),l}function ad(i,l){l&&!i.j&&(wt(i),i.i=null,i.g.forEach(function(u,f){const w=f.toLowerCase();f!=w&&(zo(this,f),Qo(this,w,u))},i)),i.j=l}function ld(i,l){const u=new fn;if(a.Image){const f=new Image;f.onload=m(nt,u,"TestLoadImage: loaded",!0,l,f),f.onerror=m(nt,u,"TestLoadImage: error",!1,l,f),f.onabort=m(nt,u,"TestLoadImage: abort",!1,l,f),f.ontimeout=m(nt,u,"TestLoadImage: timeout",!1,l,f),a.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else l(!1)}function cd(i,l){const u=new fn,f=new AbortController,w=setTimeout(()=>{f.abort(),nt(u,"TestPingServer: timeout",!1,l)},1e4);fetch(i,{signal:f.signal}).then(A=>{clearTimeout(w),A.ok?nt(u,"TestPingServer: ok",!0,l):nt(u,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(w),nt(u,"TestPingServer: error",!1,l)})}function nt(i,l,u,f,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),f(u)}catch{}}function ud(){this.g=new Hu}function xr(i){this.i=i.Sb||null,this.h=i.ab||!1}p(xr,wo),xr.prototype.g=function(){return new ls(this.i,this.h)};function ls(i,l){Te.call(this),this.H=i,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(ls,Te),n=ls.prototype,n.open=function(i,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=i,this.D=l,this.readyState=1,Tn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};i&&(l.body=i),(this.H||a).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,bn(this)),this.readyState=0},n.Pa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Tn(this)),this.g&&(this.readyState=3,Tn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Wo(this)}else i.text().then(this.Oa.bind(this),this.ga.bind(this))};function Wo(i){i.j.read().then(i.Ma.bind(i)).catch(i.ga.bind(i))}n.Ma=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var l=i.value?i.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!i.done}))&&(this.response=this.responseText+=l)}i.done?bn(this):Tn(this),this.readyState==3&&Wo(this)}},n.Oa=function(i){this.g&&(this.response=this.responseText=i,bn(this))},n.Na=function(i){this.g&&(this.response=i,bn(this))},n.ga=function(){this.g&&bn(this)};function bn(i){i.readyState=4,i.l=null,i.j=null,i.B=null,Tn(i)}n.setRequestHeader=function(i,l){this.A.append(i,l)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],l=this.h.entries();for(var u=l.next();!u.done;)u=u.value,i.push(u[0]+": "+u[1]),u=l.next();return i.join(`\r
`)};function Tn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(ls.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Ko(i){let l="";return ts(i,function(u,f){l+=f,l+=":",l+=u,l+=`\r
`}),l}function Nr(i,l,u){e:{for(f in u){var f=!1;break e}f=!0}f||(u=Ko(u),typeof i=="string"?u!=null&&mn(u):re(i,l,u))}function le(i){Te.call(this),this.headers=new Map,this.L=i||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(le,Te);var dd=/^https?$/i,hd=["POST","PUT"];n=le.prototype,n.Fa=function(i){this.H=i},n.ea=function(i,l,u,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);l=l?l.toUpperCase():"GET",this.D=i,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Vo.g(),this.g.onreadystatechange=_(h(this.Ca,this));try{this.B=!0,this.g.open(l,String(i),!0),this.B=!1}catch(A){Yo(this,A);return}if(i=u||"",u=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var w in f)u.set(w,f[w]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const A of f.keys())u.set(A,f.get(A));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(u.keys()).find(A=>A.toLowerCase()=="content-type"),w=a.FormData&&i instanceof a.FormData,!(Array.prototype.indexOf.call(hd,l,void 0)>=0)||f||w||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,N]of u)this.g.setRequestHeader(A,N);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(i),this.v=!1}catch(A){Yo(this,A)}};function Yo(i,l){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=l,i.o=5,Xo(i),cs(i)}function Xo(i){i.A||(i.A=!0,Ce(i,"complete"),Ce(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=i||7,Ce(this,"complete"),Ce(this,"abort"),cs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),cs(this,!0)),le.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Zo(this):this.Xa())},n.Xa=function(){Zo(this)};function Zo(i){if(i.h&&typeof o<"u"){if(i.v&&st(i)==4)setTimeout(i.Ca.bind(i),0);else if(Ce(i,"readystatechange"),st(i)==4){i.h=!1;try{const A=i.ca();e:switch(A){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var u;if(!(u=l)){var f;if(f=A===0){let N=String(i.D).match(Uo)[1]||null;!N&&a.self&&a.self.location&&(N=a.self.location.protocol.slice(0,-1)),f=!dd.test(N?N.toLowerCase():"")}u=f}if(u)Ce(i,"complete"),Ce(i,"success");else{i.o=6;try{var w=st(i)>2?i.g.statusText:""}catch{w=""}i.l=w+" ["+i.ca()+"]",Xo(i)}}finally{cs(i)}}}}function cs(i,l){if(i.g){i.m&&(clearTimeout(i.m),i.m=null);const u=i.g;i.g=null,l||Ce(i,"ready");try{u.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function st(i){return i.g?i.g.readyState:0}n.ca=function(){try{return st(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(i){if(this.g){var l=this.g.responseText;return i&&l.indexOf(i)==0&&(l=l.substring(i.length)),Gu(l)}};function ea(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.F){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function fd(i){const l={};i=(i.g&&st(i)>=2&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(g(i[f]))continue;var u=Yu(i[f]);const w=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const A=l[w]||[];l[w]=A,A.push(u)}$u(l,function(f){return f.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function In(i,l,u){return u&&u.internalChannelParams&&u.internalChannelParams[i]||l}function ta(i){this.za=0,this.i=[],this.j=new fn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=In("failFast",!1,i),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=In("baseRetryDelayMs",5e3,i),this.Za=In("retryDelaySeedMs",1e4,i),this.Ta=In("forwardChannelMaxRetries",2,i),this.va=In("forwardChannelRequestTimeoutMs",2e4,i),this.ma=i&&i.xmlHttpFactory||void 0,this.Ua=i&&i.Rb||void 0,this.Aa=i&&i.useFetchStreams||!1,this.O=void 0,this.L=i&&i.supportsCrossDomainXhr||!1,this.M="",this.h=new Oo(i&&i.concurrentRequestLimit),this.Ba=new ud,this.S=i&&i.fastHandshake||!1,this.R=i&&i.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=i&&i.Pb||!1,i&&i.ua&&this.j.ua(),i&&i.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&i&&i.detectBufferingProxy||!1,this.ia=void 0,i&&i.longPollingTimeout&&i.longPollingTimeout>0&&(this.ia=i.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=ta.prototype,n.ka=8,n.I=1,n.connect=function(i,l,u,f){Pe(0),this.W=i,this.H=l||{},u&&f!==void 0&&(this.H.OSID=u,this.H.OAID=f),this.F=this.X,this.J=ua(this,null,this.W),ds(this)};function kr(i){if(na(i),i.I==3){var l=i.V++,u=Be(i.J);if(re(u,"SID",i.M),re(u,"RID",l),re(u,"TYPE","terminate"),wn(i,u),l=new et(i,i.j,l),l.M=2,l.A=as(Be(u)),u=!1,a.navigator&&a.navigator.sendBeacon)try{u=a.navigator.sendBeacon(l.A.toString(),"")}catch{}!u&&a.Image&&(new Image().src=l.A,u=!0),u||(l.g=da(l.j,null),l.g.ea(l.A)),l.F=Date.now(),os(l)}ca(i)}function us(i){i.g&&(Mr(i),i.g.cancel(),i.g=null)}function na(i){us(i),i.v&&(a.clearTimeout(i.v),i.v=null),hs(i),i.h.cancel(),i.m&&(typeof i.m=="number"&&a.clearTimeout(i.m),i.m=null)}function ds(i){if(!Fo(i.h)&&!i.m){i.m=!0;var l=i.Ea;q||v(),U||(q(),U=!0),b.add(l,i),i.D=0}}function md(i,l){return $o(i.h)>=i.h.j-(i.m?1:0)?!1:i.m?(i.i=l.G.concat(i.i),!0):i.I==1||i.I==2||i.D>=(i.Sa?0:i.Ta)?!1:(i.m=hn(h(i.Ea,i,l),la(i,i.D)),i.D++,!0)}n.Ea=function(i){if(this.m)if(this.m=null,this.I==1){if(!i){this.V=Math.floor(Math.random()*1e5),i=this.V++;const w=new et(this,this.j,i);let A=this.o;if(this.U&&(A?(A=mo(A),go(A,this.U)):A=this.U),this.u!==null||this.R||(w.J=A,A=null),this.S)e:{for(var l=0,u=0;u<this.i.length;u++){t:{var f=this.i[u];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(l+=f,l>4096){l=u;break e}if(l===4096||u===this.i.length-1){l=u+1;break e}}l=1e3}else l=1e3;l=ra(this,w,l),u=Be(this.J),re(u,"RID",i),re(u,"CVER",22),this.G&&re(u,"X-HTTP-Session-Id",this.G),wn(this,u),A&&(this.R?l="headers="+mn(Ko(A))+"&"+l:this.u&&Nr(u,this.u,A)),Dr(this.h,w),this.Ra&&re(u,"TYPE","init"),this.S?(re(u,"$req",l),re(u,"SID","null"),w.U=!0,Sr(w,u,null)):Sr(w,u,l),this.I=2}}else this.I==3&&(i?sa(this,i):this.i.length==0||Fo(this.h)||sa(this))};function sa(i,l){var u;l?u=l.l:u=i.V++;const f=Be(i.J);re(f,"SID",i.M),re(f,"RID",u),re(f,"AID",i.K),wn(i,f),i.u&&i.o&&Nr(f,i.u,i.o),u=new et(i,i.j,u,i.D+1),i.u===null&&(u.J=i.o),l&&(i.i=l.G.concat(i.i)),l=ra(i,u,1e3),u.H=Math.round(i.va*.5)+Math.round(i.va*.5*Math.random()),Dr(i.h,u),Sr(u,f,l)}function wn(i,l){i.H&&ts(i.H,function(u,f){re(l,f,u)}),i.l&&ts({},function(u,f){re(l,f,u)})}function ra(i,l,u){u=Math.min(i.i.length,u);const f=i.l?h(i.l.Ka,i.l,i):null;e:{var w=i.i;let J=-1;for(;;){const me=["count="+u];J==-1?u>0?(J=w[0].g,me.push("ofs="+J)):J=0:me.push("ofs="+J);let ne=!0;for(let ye=0;ye<u;ye++){var A=w[ye].g;const Ue=w[ye].map;if(A-=J,A<0)J=Math.max(0,w[ye].g-100),ne=!1;else try{A="req"+A+"_"||"";try{var N=Ue instanceof Map?Ue:Object.entries(Ue);for(const[St,rt]of N){let it=rt;c(rt)&&(it=br(rt)),me.push(A+St+"="+encodeURIComponent(it))}}catch(St){throw me.push(A+"type="+encodeURIComponent("_badmap")),St}}catch{f&&f(Ue)}}if(ne){N=me.join("&");break e}}N=void 0}return i=i.i.splice(0,u),l.G=i,N}function ia(i){if(!i.g&&!i.v){i.Y=1;var l=i.Da;q||v(),U||(q(),U=!0),b.add(l,i),i.A=0}}function Lr(i){return i.g||i.v||i.A>=3?!1:(i.Y++,i.v=hn(h(i.Da,i),la(i,i.A)),i.A++,!0)}n.Da=function(){if(this.v=null,oa(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var i=4*this.T;this.j.info("BP detection timer enabled: "+i),this.B=hn(h(this.Wa,this),i)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Pe(10),us(this),oa(this))};function Mr(i){i.B!=null&&(a.clearTimeout(i.B),i.B=null)}function oa(i){i.g=new et(i,i.j,"rpc",i.Y),i.u===null&&(i.g.J=i.o),i.g.P=0;var l=Be(i.na);re(l,"RID","rpc"),re(l,"SID",i.M),re(l,"AID",i.K),re(l,"CI",i.F?"0":"1"),!i.F&&i.ia&&re(l,"TO",i.ia),re(l,"TYPE","xmlhttp"),wn(i,l),i.u&&i.o&&Nr(l,i.u,i.o),i.O&&(i.g.H=i.O);var u=i.g;i=i.ba,u.M=1,u.A=as(Be(l)),u.u=null,u.R=!0,ko(u,i)}n.Va=function(){this.C!=null&&(this.C=null,us(this),Lr(this),Pe(19))};function hs(i){i.C!=null&&(a.clearTimeout(i.C),i.C=null)}function aa(i,l){var u=null;if(i.g==l){hs(i),Mr(i),i.g=null;var f=2}else if(Pr(i.h,l))u=l.G,qo(i.h,l),f=1;else return;if(i.I!=0){if(l.o)if(f==1){u=l.u?l.u.length:0,l=Date.now()-l.F;var w=i.D;f=rs(),Ce(f,new Po(f,u)),ds(i)}else ia(i);else if(w=l.m,w==3||w==0&&l.X>0||!(f==1&&md(i,l)||f==2&&Lr(i)))switch(u&&u.length>0&&(l=i.h,l.i=l.i.concat(u)),w){case 1:At(i,5);break;case 4:At(i,10);break;case 3:At(i,6);break;default:At(i,2)}}}function la(i,l){let u=i.Qa+Math.floor(Math.random()*i.Za);return i.isActive()||(u*=2),u*l}function At(i,l){if(i.j.info("Error code "+l),l==2){var u=h(i.bb,i),f=i.Ua;const w=!f;f=new tt(f||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||gn(f,"https"),as(f),w?ld(f.toString(),u):cd(f.toString(),u)}else Pe(2);i.I=0,i.l&&i.l.pa(l),ca(i),na(i)}n.bb=function(i){i?(this.j.info("Successfully pinged google.com"),Pe(2)):(this.j.info("Failed to ping google.com"),Pe(1))};function ca(i){if(i.I=0,i.ja=[],i.l){const l=Bo(i.h);(l.length!=0||i.i.length!=0)&&(R(i.ja,l),R(i.ja,i.i),i.h.i.length=0,S(i.i),i.i.length=0),i.l.oa()}}function ua(i,l,u){var f=u instanceof tt?Be(u):new tt(u);if(f.g!="")l&&(f.g=l+"."+f.g),yn(f,f.u);else{var w=a.location;f=w.protocol,l=l?l+"."+w.hostname:w.hostname,w=+w.port;const A=new tt(null);f&&gn(A,f),l&&(A.g=l),w&&yn(A,w),u&&(A.h=u),f=A}return u=i.G,l=i.wa,u&&l&&re(f,u,l),re(f,"VER",i.ka),wn(i,f),f}function da(i,l,u){if(l&&!i.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=i.Aa&&!i.ma?new le(new xr({ab:u})):new le(i.ma),l.Fa(i.L),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ha(){}n=ha.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function fs(){}fs.prototype.g=function(i,l){return new ke(i,l)};function ke(i,l){Te.call(this),this.g=new ta(l),this.l=i,this.h=l&&l.messageUrlParams||null,i=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(i?i["X-WebChannel-Content-Type"]=l.messageContentType:i={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(i?i["X-WebChannel-Client-Profile"]=l.sa:i={"X-WebChannel-Client-Profile":l.sa}),this.g.U=i,(i=l&&l.Qb)&&!g(i)&&(this.g.u=i),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!g(l)&&(this.g.G=l,i=this.h,i!==null&&l in i&&(i=this.h,l in i&&delete i[l])),this.j=new Ut(this)}p(ke,Te),ke.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},ke.prototype.close=function(){kr(this.g)},ke.prototype.o=function(i){var l=this.g;if(typeof i=="string"){var u={};u.__data__=i,i=u}else this.v&&(u={},u.__data__=br(i),i=u);l.i.push(new ed(l.Ya++,i)),l.I==3&&ds(l)},ke.prototype.N=function(){this.g.l=null,delete this.j,kr(this.g),delete this.g,ke.Z.N.call(this)};function fa(i){Tr.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var l=i.__sm__;if(l){e:{for(const u in l){i=u;break e}i=void 0}(this.i=i)&&(i=this.i,l=l!==null&&i in l?l[i]:void 0),this.data=l}else this.data=i}p(fa,Tr);function ma(){Ir.call(this),this.status=1}p(ma,Ir);function Ut(i){this.g=i}p(Ut,ha),Ut.prototype.ra=function(){Ce(this.g,"a")},Ut.prototype.qa=function(i){Ce(this.g,new fa(i))},Ut.prototype.pa=function(i){Ce(this.g,new ma)},Ut.prototype.oa=function(){Ce(this.g,"b")},fs.prototype.createWebChannel=fs.prototype.g,ke.prototype.send=ke.prototype.o,ke.prototype.open=ke.prototype.m,ke.prototype.close=ke.prototype.close,Xl=function(){return new fs},Yl=function(){return rs()},Kl=Tt,si={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},is.NO_ERROR=0,is.TIMEOUT=8,is.HTTP_ERROR=6,Ts=is,Do.COMPLETE="complete",Wl=Do,Ao.EventType=un,un.OPEN="a",un.CLOSE="b",un.ERROR="c",un.MESSAGE="d",Te.prototype.listen=Te.prototype.J,Sn=Ao,le.prototype.listenOnce=le.prototype.K,le.prototype.getLastError=le.prototype.Ha,le.prototype.getLastErrorCode=le.prototype.ya,le.prototype.getStatus=le.prototype.ca,le.prototype.getResponseJson=le.prototype.La,le.prototype.getResponseText=le.prototype.la,le.prototype.send=le.prototype.ea,le.prototype.setWithCredentials=le.prototype.Fa,Jl=le}).apply(typeof gs<"u"?gs:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */const xt=new Bl("@firebase/firestore");function zt(){return xt.logLevel}function M(n,...e){if(xt.logLevel<=Z.DEBUG){const t=e.map(Ai);xt.debug(`Firestore (${sn}): ${n}`,...t)}}function Ye(n,...e){if(xt.logLevel<=Z.ERROR){const t=e.map(Ai);xt.error(`Firestore (${sn}): ${n}`,...t)}}function Nt(n,...e){if(xt.logLevel<=Z.WARN){const t=e.map(Ai);xt.warn(`Firestore (${sn}): ${n}`,...t)}}function Ai(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
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
 */function z(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Zl(n,s,t)}function Zl(n,e,t){let s=`FIRESTORE (${sn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Ye(s),new Error(s)}function ee(n,e,t,s){let r="Unexpected state";typeof t=="string"?r=t:s=t,n||Zl(e,r,s)}function H(n,e){return n}/**
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
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends nn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ut{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class ec{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ae.UNAUTHENTICATED)))}shutdown(){}}class of{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class af{constructor(e){this.t=e,this.currentUser=Ae.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ee(this.o===void 0,42304);let s=this.i;const r=d=>this.i!==s?(s=this.i,t(d)):Promise.resolve();let o=new ut;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ut,e.enqueueRetryable((()=>r(this.currentUser)))};const a=()=>{const d=o;e.enqueueRetryable((async()=>{await d.promise,await r(this.currentUser)}))},c=d=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((d=>c(d))),setTimeout((()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?c(d):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ut)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ee(typeof s.accessToken=="string",31837,{l:s}),new ec(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ee(e===null||typeof e=="string",2055,{h:e}),new Ae(e)}}class lf{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ae.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class cf{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new lf(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ae.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ra{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class uf{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,qh(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ee(this.o===void 0,3512);const s=o=>{o.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,M("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable((()=>s(o)))};const r=o=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>r(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?r(o):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Ra(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(ee(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Ra(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */class Si{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=df(40);for(let o=0;o<r.length;++o)s.length<20&&r[o]<t&&(s+=e.charAt(r[o]%62))}return s}}function W(n,e){return n<e?-1:n>e?1:0}function ri(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const r=n.charAt(s),o=e.charAt(s);if(r!==o)return Ur(r)===Ur(o)?W(r,o):Ur(r)?1:-1}return W(n.length,e.length)}const hf=55296,ff=57343;function Ur(n){const e=n.charCodeAt(0);return e>=hf&&e<=ff}function Yt(n,e,t){return n.length===e.length&&n.every(((s,r)=>t(s,e[r])))}/**
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
 */const Ca="__name__";class je{constructor(e,t,s){t===void 0?t=0:t>e.length&&z(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&z(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return je.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof je?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const o=je.compareSegments(e.get(r),t.get(r));if(o!==0)return o}return W(e.length,t.length)}static compareSegments(e,t){const s=je.isNumericId(e),r=je.isNumericId(t);return s&&!r?-1:!s&&r?1:s&&r?je.extractNumericId(e).compare(je.extractNumericId(t)):ri(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ct.fromString(e.substring(4,e.length-2))}}class se extends je{construct(e,t,s){return new se(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new L(C.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((r=>r.length>0)))}return new se(t)}static emptyPath(){return new se([])}}const mf=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ee extends je{construct(e,t,s){return new Ee(e,t,s)}static isValidIdentifier(e){return mf.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ee.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ca}static keyField(){return new Ee([Ca])}static fromServerFormat(e){const t=[];let s="",r=0;const o=()=>{if(s.length===0)throw new L(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let a=!1;for(;r<e.length;){const c=e[r];if(c==="\\"){if(r+1===e.length)throw new L(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const d=e[r+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new L(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=d,r+=2}else c==="`"?(a=!a,r++):c!=="."||a?(s+=c,r++):(o(),r++)}if(o(),a)throw new L(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ee(t)}static emptyPath(){return new Ee([])}}/**
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
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(se.fromString(e))}static fromName(e){return new B(se.fromString(e).popFirst(5))}static empty(){return new B(se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return se.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new se(e.slice()))}}/**
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
 */function tc(n,e,t){if(!t)throw new L(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function pf(n,e,t,s){if(e===!0&&s===!0)throw new L(C.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Pa(n){if(!B.isDocumentKey(n))throw new L(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Da(n){if(B.isDocumentKey(n))throw new L(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function nc(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Qs(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":z(12329,{type:typeof n})}function Oe(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new L(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Qs(n);throw new L(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function fe(n,e){const t={typeString:n};return e&&(t.value=e),t}function Hn(n,e){if(!nc(n))throw new L(C.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const r=e[s].typeString,o="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const a=n[s];if(r&&typeof a!==r){t=`JSON field '${s}' must be a ${r}.`;break}if(o!==void 0&&a!==o.value){t=`Expected '${s}' field to equal '${o.value}'`;break}}if(t)throw new L(C.INVALID_ARGUMENT,t);return!0}/**
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
 */const Va=-62135596800,xa=1e6;class ie{static now(){return ie.fromMillis(Date.now())}static fromDate(e){return ie.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*xa);return new ie(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new L(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new L(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Va)throw new L(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/xa}_compareTo(e){return this.seconds===e.seconds?W(this.nanoseconds,e.nanoseconds):W(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ie._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Hn(e,ie._jsonSchema))return new ie(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Va;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ie._jsonSchemaVersion="firestore/timestamp/1.0",ie._jsonSchema={type:fe("string",ie._jsonSchemaVersion),seconds:fe("number"),nanoseconds:fe("number")};/**
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
 */const Fn=-1;function gf(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=G.fromTimestamp(s===1e9?new ie(t+1,0):new ie(t,s));return new ht(r,B.empty(),e)}function yf(n){return new ht(n.readTime,n.key,Fn)}class ht{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new ht(G.min(),B.empty(),Fn)}static max(){return new ht(G.max(),B.empty(),Fn)}}function vf(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=B.comparator(n.documentKey,e.documentKey),t!==0?t:W(n.largestBatchId,e.largestBatchId))}/**
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
 */const _f="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ef{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function rn(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==_f)throw n;M("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&z(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new P(((s,r)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(s,r)},this.catchCallback=o=>{this.wrapFailure(t,o).next(s,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof P?t:P.resolve(t)}catch(t){return P.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):P.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):P.reject(t)}static resolve(e){return new P(((t,s)=>{t(e)}))}static reject(e){return new P(((t,s)=>{s(e)}))}static waitFor(e){return new P(((t,s)=>{let r=0,o=0,a=!1;e.forEach((c=>{++r,c.next((()=>{++o,a&&o===r&&t()}),(d=>s(d)))})),a=!0,o===r&&t()}))}static or(e){let t=P.resolve(!1);for(const s of e)t=t.next((r=>r?P.resolve(r):s()));return t}static forEach(e,t){const s=[];return e.forEach(((r,o)=>{s.push(t.call(this,r,o))})),this.waitFor(s)}static mapArray(e,t){return new P(((s,r)=>{const o=e.length,a=new Array(o);let c=0;for(let d=0;d<o;d++){const h=d;t(e[h]).next((m=>{a[h]=m,++c,c===o&&s(a)}),(m=>r(m)))}}))}static doWhile(e,t){return new P(((s,r)=>{const o=()=>{e()===!0?t().next((()=>{o()}),r):s()};o()}))}}function bf(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function on(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Js{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Js.ce=-1;/**
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
 */const Ri=-1;function Ws(n){return n==null}function Ls(n){return n===0&&1/n==-1/0}function Tf(n){return typeof n=="number"&&Number.isInteger(n)&&!Ls(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const sc="";function If(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Na(e)),e=wf(n.get(t),e);return Na(e)}function wf(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const o=n.charAt(r);switch(o){case"\0":t+="";break;case sc:t+="";break;default:t+=o}}return t}function Na(n){return n+sc+""}/**
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
 */function ka(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function _t(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function rc(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class oe{constructor(e,t){this.comparator=e,this.root=t||_e.EMPTY}insert(e,t){return new oe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,_e.BLACK,null,null))}remove(e){return new oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,_e.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ys(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ys(this.root,e,this.comparator,!1)}getReverseIterator(){return new ys(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ys(this.root,e,this.comparator,!0)}}class ys{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?s(e.key,t):1,t&&r&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class _e{constructor(e,t,s,r,o){this.key=e,this.value=t,this.color=s??_e.RED,this.left=r??_e.EMPTY,this.right=o??_e.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,o){return new _e(e??this.key,t??this.value,s??this.color,r??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const o=s(e,r.key);return r=o<0?r.copy(null,null,null,r.left.insert(e,t,s),null):o===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return _e.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return _e.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,_e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,_e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw z(43730,{key:this.key,value:this.value});if(this.right.isRed())throw z(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw z(27949);return e+(this.isRed()?0:1)}}_e.EMPTY=null,_e.RED=!0,_e.BLACK=!1;_e.EMPTY=new class{constructor(){this.size=0}get key(){throw z(57766)}get value(){throw z(16141)}get color(){throw z(16727)}get left(){throw z(29726)}get right(){throw z(36894)}copy(e,t,s,r,o){return this}insert(e,t,s){return new _e(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ge{constructor(e){this.comparator=e,this.data=new oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new La(this.data.getIterator())}getIteratorFrom(e){return new La(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof ge)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,o=s.getNext().key;if(this.comparator(r,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new ge(this.comparator);return t.data=e,t}}class La{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Le{constructor(e){this.fields=e,e.sort(Ee.comparator)}static empty(){return new Le([])}unionWith(e){let t=new ge(Ee.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Le(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Yt(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class be{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(r){try{return atob(r)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new ic("Invalid base64 string: "+o):o}})(e);return new be(t)}static fromUint8Array(e){const t=(function(r){let o="";for(let a=0;a<r.length;++a)o+=String.fromCharCode(r[a]);return o})(e);return new be(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return W(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}be.EMPTY_BYTE_STRING=new be("");const Af=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ft(n){if(ee(!!n,39018),typeof n=="string"){let e=0;const t=Af.exec(n);if(ee(!!t,46558,{timestamp:n}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ce(n.seconds),nanos:ce(n.nanos)}}function ce(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function mt(n){return typeof n=="string"?be.fromBase64String(n):be.fromUint8Array(n)}/**
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
 */const oc="server_timestamp",ac="__type__",lc="__previous_value__",cc="__local_write_time__";function Ci(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[ac])==null?void 0:s.stringValue)===oc}function Ks(n){const e=n.mapValue.fields[lc];return Ci(e)?Ks(e):e}function $n(n){const e=ft(n.mapValue.fields[cc].timestampValue);return new ie(e.seconds,e.nanos)}/**
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
 */class Sf{constructor(e,t,s,r,o,a,c,d,h,m,p){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=d,this.useFetchStreams=h,this.isUsingEmulator=m,this.apiKey=p}}const Ms="(default)";class qn{constructor(e,t){this.projectId=e,this.database=t||Ms}static empty(){return new qn("","")}get isDefaultDatabase(){return this.database===Ms}isEqual(e){return e instanceof qn&&e.projectId===this.projectId&&e.database===this.database}}function Rf(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new L(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qn(n.options.projectId,e)}/**
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
 */const uc="__type__",Cf="__max__",vs={mapValue:{}},dc="__vector__",Os="value";function pt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ci(n)?4:Df(n)?9007199254740991:Pf(n)?10:11:z(28295,{value:n})}function Je(n,e){if(n===e)return!0;const t=pt(n);if(t!==pt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return $n(n).isEqual($n(e));case 3:return(function(r,o){if(typeof r.timestampValue=="string"&&typeof o.timestampValue=="string"&&r.timestampValue.length===o.timestampValue.length)return r.timestampValue===o.timestampValue;const a=ft(r.timestampValue),c=ft(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(r,o){return mt(r.bytesValue).isEqual(mt(o.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(r,o){return ce(r.geoPointValue.latitude)===ce(o.geoPointValue.latitude)&&ce(r.geoPointValue.longitude)===ce(o.geoPointValue.longitude)})(n,e);case 2:return(function(r,o){if("integerValue"in r&&"integerValue"in o)return ce(r.integerValue)===ce(o.integerValue);if("doubleValue"in r&&"doubleValue"in o){const a=ce(r.doubleValue),c=ce(o.doubleValue);return a===c?Ls(a)===Ls(c):isNaN(a)&&isNaN(c)}return!1})(n,e);case 9:return Yt(n.arrayValue.values||[],e.arrayValue.values||[],Je);case 10:case 11:return(function(r,o){const a=r.mapValue.fields||{},c=o.mapValue.fields||{};if(ka(a)!==ka(c))return!1;for(const d in a)if(a.hasOwnProperty(d)&&(c[d]===void 0||!Je(a[d],c[d])))return!1;return!0})(n,e);default:return z(52216,{left:n})}}function Bn(n,e){return(n.values||[]).find((t=>Je(t,e)))!==void 0}function Xt(n,e){if(n===e)return 0;const t=pt(n),s=pt(e);if(t!==s)return W(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return W(n.booleanValue,e.booleanValue);case 2:return(function(o,a){const c=ce(o.integerValue||o.doubleValue),d=ce(a.integerValue||a.doubleValue);return c<d?-1:c>d?1:c===d?0:isNaN(c)?isNaN(d)?0:-1:1})(n,e);case 3:return Ma(n.timestampValue,e.timestampValue);case 4:return Ma($n(n),$n(e));case 5:return ri(n.stringValue,e.stringValue);case 6:return(function(o,a){const c=mt(o),d=mt(a);return c.compareTo(d)})(n.bytesValue,e.bytesValue);case 7:return(function(o,a){const c=o.split("/"),d=a.split("/");for(let h=0;h<c.length&&h<d.length;h++){const m=W(c[h],d[h]);if(m!==0)return m}return W(c.length,d.length)})(n.referenceValue,e.referenceValue);case 8:return(function(o,a){const c=W(ce(o.latitude),ce(a.latitude));return c!==0?c:W(ce(o.longitude),ce(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Oa(n.arrayValue,e.arrayValue);case 10:return(function(o,a){var _,S,R,D;const c=o.fields||{},d=a.fields||{},h=(_=c[Os])==null?void 0:_.arrayValue,m=(S=d[Os])==null?void 0:S.arrayValue,p=W(((R=h==null?void 0:h.values)==null?void 0:R.length)||0,((D=m==null?void 0:m.values)==null?void 0:D.length)||0);return p!==0?p:Oa(h,m)})(n.mapValue,e.mapValue);case 11:return(function(o,a){if(o===vs.mapValue&&a===vs.mapValue)return 0;if(o===vs.mapValue)return 1;if(a===vs.mapValue)return-1;const c=o.fields||{},d=Object.keys(c),h=a.fields||{},m=Object.keys(h);d.sort(),m.sort();for(let p=0;p<d.length&&p<m.length;++p){const _=ri(d[p],m[p]);if(_!==0)return _;const S=Xt(c[d[p]],h[m[p]]);if(S!==0)return S}return W(d.length,m.length)})(n.mapValue,e.mapValue);default:throw z(23264,{he:t})}}function Ma(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return W(n,e);const t=ft(n),s=ft(e),r=W(t.seconds,s.seconds);return r!==0?r:W(t.nanos,s.nanos)}function Oa(n,e){const t=n.values||[],s=e.values||[];for(let r=0;r<t.length&&r<s.length;++r){const o=Xt(t[r],s[r]);if(o)return o}return W(t.length,s.length)}function Zt(n){return ii(n)}function ii(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=ft(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return mt(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return B.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",r=!0;for(const o of t.values||[])r?r=!1:s+=",",s+=ii(o);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let r="{",o=!0;for(const a of s)o?o=!1:r+=",",r+=`${a}:${ii(t.fields[a])}`;return r+"}"})(n.mapValue):z(61005,{value:n})}function Is(n){switch(pt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ks(n);return e?16+Is(e):16;case 5:return 2*n.stringValue.length;case 6:return mt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((r,o)=>r+Is(o)),0)})(n.arrayValue);case 10:case 11:return(function(s){let r=0;return _t(s.fields,((o,a)=>{r+=o.length+Is(a)})),r})(n.mapValue);default:throw z(13486,{value:n})}}function Fa(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function oi(n){return!!n&&"integerValue"in n}function Pi(n){return!!n&&"arrayValue"in n}function $a(n){return!!n&&"nullValue"in n}function qa(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ws(n){return!!n&&"mapValue"in n}function Pf(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[uc])==null?void 0:s.stringValue)===dc}function Vn(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return _t(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Vn(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Vn(n.arrayValue.values[t]);return e}return{...n}}function Df(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Cf}/**
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
 */class xe{constructor(e){this.value=e}static empty(){return new xe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!ws(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Vn(t)}setAll(e){let t=Ee.emptyPath(),s={},r=[];e.forEach(((a,c)=>{if(!t.isImmediateParentOf(c)){const d=this.getFieldsMap(t);this.applyChanges(d,s,r),s={},r=[],t=c.popLast()}a?s[c.lastSegment()]=Vn(a):r.push(c.lastSegment())}));const o=this.getFieldsMap(t);this.applyChanges(o,s,r)}delete(e){const t=this.field(e.popLast());ws(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Je(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];ws(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){_t(t,((r,o)=>e[r]=o));for(const r of s)delete e[r]}clone(){return new xe(Vn(this.value))}}function hc(n){const e=[];return _t(n.fields,((t,s)=>{const r=new Ee([t]);if(ws(s)){const o=hc(s.mapValue).fields;if(o.length===0)e.push(r);else for(const a of o)e.push(r.child(a))}else e.push(r)})),new Le(e)}/**
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
 */class Se{constructor(e,t,s,r,o,a,c){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Se(e,0,G.min(),G.min(),G.min(),xe.empty(),0)}static newFoundDocument(e,t,s,r){return new Se(e,1,t,G.min(),s,r,0)}static newNoDocument(e,t){return new Se(e,2,t,G.min(),G.min(),xe.empty(),0)}static newUnknownDocument(e,t){return new Se(e,3,t,G.min(),G.min(),xe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Se&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Se(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Fs{constructor(e,t){this.position=e,this.inclusive=t}}function Ba(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const o=e[r],a=n.position[r];if(o.field.isKeyField()?s=B.comparator(B.fromName(a.referenceValue),t.key):s=Xt(a,t.data.field(o.field)),o.dir==="desc"&&(s*=-1),s!==0)break}return s}function Ua(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Je(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Un{constructor(e,t="asc"){this.field=e,this.dir=t}}function Vf(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class fc{}class he extends fc{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new Nf(e,t,s):t==="array-contains"?new Mf(e,s):t==="in"?new Of(e,s):t==="not-in"?new Ff(e,s):t==="array-contains-any"?new $f(e,s):new he(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new kf(e,s):new Lf(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Xt(t,this.value)):t!==null&&pt(this.value)===pt(t)&&this.matchesComparison(Xt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class qe extends fc{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new qe(e,t)}matches(e){return mc(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function mc(n){return n.op==="and"}function pc(n){return xf(n)&&mc(n)}function xf(n){for(const e of n.filters)if(e instanceof qe)return!1;return!0}function ai(n){if(n instanceof he)return n.field.canonicalString()+n.op.toString()+Zt(n.value);if(pc(n))return n.filters.map((e=>ai(e))).join(",");{const e=n.filters.map((t=>ai(t))).join(",");return`${n.op}(${e})`}}function gc(n,e){return n instanceof he?(function(s,r){return r instanceof he&&s.op===r.op&&s.field.isEqual(r.field)&&Je(s.value,r.value)})(n,e):n instanceof qe?(function(s,r){return r instanceof qe&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce(((o,a,c)=>o&&gc(a,r.filters[c])),!0):!1})(n,e):void z(19439)}function yc(n){return n instanceof he?(function(t){return`${t.field.canonicalString()} ${t.op} ${Zt(t.value)}`})(n):n instanceof qe?(function(t){return t.op.toString()+" {"+t.getFilters().map(yc).join(" ,")+"}"})(n):"Filter"}class Nf extends he{constructor(e,t,s){super(e,t,s),this.key=B.fromName(s.referenceValue)}matches(e){const t=B.comparator(e.key,this.key);return this.matchesComparison(t)}}class kf extends he{constructor(e,t){super(e,"in",t),this.keys=vc("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Lf extends he{constructor(e,t){super(e,"not-in",t),this.keys=vc("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function vc(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>B.fromName(s.referenceValue)))}class Mf extends he{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Pi(t)&&Bn(t.arrayValue,this.value)}}class Of extends he{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Bn(this.value.arrayValue,t)}}class Ff extends he{constructor(e,t){super(e,"not-in",t)}matches(e){if(Bn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Bn(this.value.arrayValue,t)}}class $f extends he{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Pi(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Bn(this.value.arrayValue,s)))}}/**
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
 */class qf{constructor(e,t=null,s=[],r=[],o=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=o,this.startAt=a,this.endAt=c,this.Te=null}}function ja(n,e=null,t=[],s=[],r=null,o=null,a=null){return new qf(n,e,t,s,r,o,a)}function Di(n){const e=H(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>ai(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(o){return o.field.canonicalString()+o.dir})(s))).join(","),Ws(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>Zt(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>Zt(s))).join(",")),e.Te=t}return e.Te}function Vi(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Vf(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!gc(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Ua(n.startAt,e.startAt)&&Ua(n.endAt,e.endAt)}function li(n){return B.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class an{constructor(e,t=null,s=[],r=[],o=null,a="F",c=null,d=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=d,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function Bf(n,e,t,s,r,o,a,c){return new an(n,e,t,s,r,o,a,c)}function xi(n){return new an(n)}function za(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Uf(n){return B.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function _c(n){return n.collectionGroup!==null}function xn(n){const e=H(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const o of e.explicitOrderBy)e.Ie.push(o),t.add(o.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new ge(Ee.comparator);return a.filters.forEach((d=>{d.getFlattenedFilters().forEach((h=>{h.isInequality()&&(c=c.add(h.field))}))})),c})(e).forEach((o=>{t.has(o.canonicalString())||o.isKeyField()||e.Ie.push(new Un(o,s))})),t.has(Ee.keyField().canonicalString())||e.Ie.push(new Un(Ee.keyField(),s))}return e.Ie}function ze(n){const e=H(n);return e.Ee||(e.Ee=jf(e,xn(n))),e.Ee}function jf(n,e){if(n.limitType==="F")return ja(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((r=>{const o=r.dir==="desc"?"asc":"desc";return new Un(r.field,o)}));const t=n.endAt?new Fs(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Fs(n.startAt.position,n.startAt.inclusive):null;return ja(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function ci(n,e){const t=n.filters.concat([e]);return new an(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function zf(n,e){const t=n.explicitOrderBy.concat([e]);return new an(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function $s(n,e,t){return new an(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ys(n,e){return Vi(ze(n),ze(e))&&n.limitType===e.limitType}function Ec(n){return`${Di(ze(n))}|lt:${n.limitType}`}function Gt(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((r=>yc(r))).join(", ")}]`),Ws(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((r=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(r))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((r=>Zt(r))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((r=>Zt(r))).join(",")),`Target(${s})`})(ze(n))}; limitType=${n.limitType})`}function Xs(n,e){return e.isFoundDocument()&&(function(s,r){const o=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(o):B.isDocumentKey(s.path)?s.path.isEqual(o):s.path.isImmediateParentOf(o)})(n,e)&&(function(s,r){for(const o of xn(s))if(!o.field.isKeyField()&&r.data.field(o.field)===null)return!1;return!0})(n,e)&&(function(s,r){for(const o of s.filters)if(!o.matches(r))return!1;return!0})(n,e)&&(function(s,r){return!(s.startAt&&!(function(a,c,d){const h=Ba(a,c,d);return a.inclusive?h<=0:h<0})(s.startAt,xn(s),r)||s.endAt&&!(function(a,c,d){const h=Ba(a,c,d);return a.inclusive?h>=0:h>0})(s.endAt,xn(s),r))})(n,e)}function Gf(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function bc(n){return(e,t)=>{let s=!1;for(const r of xn(n)){const o=Hf(r,e,t);if(o!==0)return o;s=s||r.field.isKeyField()}return 0}}function Hf(n,e,t){const s=n.field.isKeyField()?B.comparator(e.key,t.key):(function(o,a,c){const d=a.data.field(o),h=c.data.field(o);return d!==null&&h!==null?Xt(d,h):z(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return z(19790,{direction:n.dir})}}/**
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
 */class Ot{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,o]of s)if(this.equalsFn(r,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let o=0;o<r.length;o++)if(this.equalsFn(r[o][0],e))return void(r[o]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){_t(this.inner,((t,s)=>{for(const[r,o]of s)e(r,o)}))}isEmpty(){return rc(this.inner)}size(){return this.innerSize}}/**
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
 */const Qf=new oe(B.comparator);function Xe(){return Qf}const Tc=new oe(B.comparator);function Rn(...n){let e=Tc;for(const t of n)e=e.insert(t.key,t);return e}function Ic(n){let e=Tc;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function Ct(){return Nn()}function wc(){return Nn()}function Nn(){return new Ot((n=>n.toString()),((n,e)=>n.isEqual(e)))}const Jf=new oe(B.comparator),Wf=new ge(B.comparator);function K(...n){let e=Wf;for(const t of n)e=e.add(t);return e}const Kf=new ge(W);function Yf(){return Kf}/**
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
 */function Ni(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ls(e)?"-0":e}}function Ac(n){return{integerValue:""+n}}function Xf(n,e){return Tf(e)?Ac(e):Ni(n,e)}/**
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
 */class Zs{constructor(){this._=void 0}}function Zf(n,e,t){return n instanceof jn?(function(r,o){const a={fields:{[ac]:{stringValue:oc},[cc]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return o&&Ci(o)&&(o=Ks(o)),o&&(a.fields[lc]=o),{mapValue:a}})(t,e):n instanceof zn?Rc(n,e):n instanceof Gn?Cc(n,e):(function(r,o){const a=Sc(r,o),c=Ga(a)+Ga(r.Ae);return oi(a)&&oi(r.Ae)?Ac(c):Ni(r.serializer,c)})(n,e)}function em(n,e,t){return n instanceof zn?Rc(n,e):n instanceof Gn?Cc(n,e):t}function Sc(n,e){return n instanceof qs?(function(s){return oi(s)||(function(o){return!!o&&"doubleValue"in o})(s)})(e)?e:{integerValue:0}:null}class jn extends Zs{}class zn extends Zs{constructor(e){super(),this.elements=e}}function Rc(n,e){const t=Pc(e);for(const s of n.elements)t.some((r=>Je(r,s)))||t.push(s);return{arrayValue:{values:t}}}class Gn extends Zs{constructor(e){super(),this.elements=e}}function Cc(n,e){let t=Pc(e);for(const s of n.elements)t=t.filter((r=>!Je(r,s)));return{arrayValue:{values:t}}}class qs extends Zs{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Ga(n){return ce(n.integerValue||n.doubleValue)}function Pc(n){return Pi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class tm{constructor(e,t){this.field=e,this.transform=t}}function nm(n,e){return n.field.isEqual(e.field)&&(function(s,r){return s instanceof zn&&r instanceof zn||s instanceof Gn&&r instanceof Gn?Yt(s.elements,r.elements,Je):s instanceof qs&&r instanceof qs?Je(s.Ae,r.Ae):s instanceof jn&&r instanceof jn})(n.transform,e.transform)}class sm{constructor(e,t){this.version=e,this.transformResults=t}}class Fe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Fe}static exists(e){return new Fe(void 0,e)}static updateTime(e){return new Fe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function As(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class er{}function Dc(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ki(n.key,Fe.none()):new Qn(n.key,n.data,Fe.none());{const t=n.data,s=xe.empty();let r=new ge(Ee.comparator);for(let o of e.fields)if(!r.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?s.delete(o):s.set(o,a),r=r.add(o)}return new Et(n.key,s,new Le(r.toArray()),Fe.none())}}function rm(n,e,t){n instanceof Qn?(function(r,o,a){const c=r.value.clone(),d=Qa(r.fieldTransforms,o,a.transformResults);c.setAll(d),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(n,e,t):n instanceof Et?(function(r,o,a){if(!As(r.precondition,o))return void o.convertToUnknownDocument(a.version);const c=Qa(r.fieldTransforms,o,a.transformResults),d=o.data;d.setAll(Vc(r)),d.setAll(c),o.convertToFoundDocument(a.version,d).setHasCommittedMutations()})(n,e,t):(function(r,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function kn(n,e,t,s){return n instanceof Qn?(function(o,a,c,d){if(!As(o.precondition,a))return c;const h=o.value.clone(),m=Ja(o.fieldTransforms,d,a);return h.setAll(m),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null})(n,e,t,s):n instanceof Et?(function(o,a,c,d){if(!As(o.precondition,a))return c;const h=Ja(o.fieldTransforms,d,a),m=a.data;return m.setAll(Vc(o)),m.setAll(h),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((p=>p.field)))})(n,e,t,s):(function(o,a,c){return As(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(n,e,t)}function im(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),o=Sc(s.transform,r||null);o!=null&&(t===null&&(t=xe.empty()),t.set(s.field,o))}return t||null}function Ha(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Yt(s,r,((o,a)=>nm(o,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Qn extends er{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Et extends er{constructor(e,t,s,r,o=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Vc(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function Qa(n,e,t){const s=new Map;ee(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let r=0;r<t.length;r++){const o=n[r],a=o.transform,c=e.data.field(o.field);s.set(o.field,em(a,c,t[r]))}return s}function Ja(n,e,t){const s=new Map;for(const r of n){const o=r.transform,a=t.data.field(r.field);s.set(r.field,Zf(o,a,e))}return s}class ki extends er{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class om extends er{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class am{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const o=this.mutations[r];o.key.isEqual(e.key)&&rm(o,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=kn(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=kn(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=wc();return this.mutations.forEach((r=>{const o=e.get(r.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=t.has(r.key)?null:c;const d=Dc(a,c);d!==null&&s.set(r.key,d),a.isValidDocument()||a.convertToNoDocument(G.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),K())}isEqual(e){return this.batchId===e.batchId&&Yt(this.mutations,e.mutations,((t,s)=>Ha(t,s)))&&Yt(this.baseMutations,e.baseMutations,((t,s)=>Ha(t,s)))}}class Li{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){ee(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let r=(function(){return Jf})();const o=e.mutations;for(let a=0;a<o.length;a++)r=r.insert(o[a].key,s[a].version);return new Li(e,t,s,r)}}/**
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
 */var de,X;function um(n){switch(n){case C.OK:return z(64938);case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return z(15467,{code:n})}}function xc(n){if(n===void 0)return Ye("GRPC error has no .code"),C.UNKNOWN;switch(n){case de.OK:return C.OK;case de.CANCELLED:return C.CANCELLED;case de.UNKNOWN:return C.UNKNOWN;case de.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case de.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case de.INTERNAL:return C.INTERNAL;case de.UNAVAILABLE:return C.UNAVAILABLE;case de.UNAUTHENTICATED:return C.UNAUTHENTICATED;case de.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case de.NOT_FOUND:return C.NOT_FOUND;case de.ALREADY_EXISTS:return C.ALREADY_EXISTS;case de.PERMISSION_DENIED:return C.PERMISSION_DENIED;case de.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case de.ABORTED:return C.ABORTED;case de.OUT_OF_RANGE:return C.OUT_OF_RANGE;case de.UNIMPLEMENTED:return C.UNIMPLEMENTED;case de.DATA_LOSS:return C.DATA_LOSS;default:return z(39323,{code:n})}}(X=de||(de={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const hm=new ct([4294967295,4294967295],0);function Wa(n){const e=dm().encode(n),t=new Ql;return t.update(e),new Uint8Array(t.digest())}function Ka(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new ct([t,s],0),new ct([r,o],0)]}class Mi{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Cn(`Invalid padding: ${t}`);if(s<0)throw new Cn(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Cn(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Cn(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=ct.fromNumber(this.ge)}ye(e,t,s){let r=e.add(t.multiply(ct.fromNumber(s)));return r.compare(hm)===1&&(r=new ct([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Wa(e),[s,r]=Ka(t);for(let o=0;o<this.hashCount;o++){const a=this.ye(s,r,o);if(!this.we(a))return!1}return!0}static create(e,t,s){const r=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new Mi(o,r,t);return s.forEach((c=>a.insert(c))),a}insert(e){if(this.ge===0)return;const t=Wa(e),[s,r]=Ka(t);for(let o=0;o<this.hashCount;o++){const a=this.ye(s,r,o);this.be(a)}}be(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Cn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class tr{constructor(e,t,s,r,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const r=new Map;return r.set(e,Jn.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new tr(G.min(),r,new oe(W),Xe(),K())}}class Jn{constructor(e,t,s,r,o){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Jn(s,t,K(),K(),K())}}/**
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
 */class Ss{constructor(e,t,s,r){this.Se=e,this.removedTargetIds=t,this.key=s,this.De=r}}class Nc{constructor(e,t){this.targetId=e,this.Ce=t}}class kc{constructor(e,t,s=be.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class Ya{constructor(){this.ve=0,this.Fe=Xa(),this.Me=be.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=K(),t=K(),s=K();return this.Fe.forEach(((r,o)=>{switch(o){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:z(38017,{changeType:o})}})),new Jn(this.Me,this.xe,e,t,s)}Ke(){this.Oe=!1,this.Fe=Xa()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,ee(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class fm{constructor(e){this.Ge=e,this.ze=new Map,this.je=Xe(),this.He=_s(),this.Je=_s(),this.Ze=new oe(W)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.Ke(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:z(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,r)=>{this.rt(r)&&t(r)}))}st(e){const t=e.targetId,s=e.Ce.count,r=this.ot(t);if(r){const o=r.target;if(li(o))if(s===0){const a=new B(o.path);this.et(t,a,Se.newNoDocument(a,G.min()))}else ee(s===1,20013,{expectedCount:s});else{const a=this._t(t);if(a!==s){const c=this.ut(e),d=c?this.ct(c,e,a):1;if(d!==0){this.it(t);const h=d===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:o=0}=t;let a,c;try{a=mt(s).toUint8Array()}catch(d){if(d instanceof ic)return Nt("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw d}try{c=new Mi(a,r,o)}catch(d){return Nt(d instanceof Cn?"BloomFilter error: ":"Applying bloom filter failed: ",d),null}return c.ge===0?null:c}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let r=0;return s.forEach((o=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(c)||(this.et(t,o,null),r++)})),r}Tt(e){const t=new Map;this.ze.forEach(((o,a)=>{const c=this.ot(a);if(c){if(o.current&&li(c.target)){const d=new B(c.target.path);this.It(d).has(a)||this.Et(a,d)||this.et(a,d,Se.newNoDocument(d,e))}o.Be&&(t.set(a,o.ke()),o.Ke())}}));let s=K();this.Je.forEach(((o,a)=>{let c=!0;a.forEachWhile((d=>{const h=this.ot(d);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(s=s.add(o))})),this.je.forEach(((o,a)=>a.setReadTime(e)));const r=new tr(e,t,this.Ze,this.je,s);return this.je=Xe(),this.He=_s(),this.Je=_s(),this.Ze=new oe(W),r}Ye(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,s),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const r=this.nt(e);this.Et(e,t)?r.qe(t,1):r.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Ya,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new ge(W),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new ge(W),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||M("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Ya),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function _s(){return new oe(B.comparator)}function Xa(){return new oe(B.comparator)}const mm={asc:"ASCENDING",desc:"DESCENDING"},pm={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},gm={and:"AND",or:"OR"};class ym{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ui(n,e){return n.useProto3Json||Ws(e)?e:{value:e}}function Bs(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Lc(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function vm(n,e){return Bs(n,e.toTimestamp())}function Ge(n){return ee(!!n,49232),G.fromTimestamp((function(t){const s=ft(t);return new ie(s.seconds,s.nanos)})(n))}function Oi(n,e){return di(n,e).canonicalString()}function di(n,e){const t=(function(r){return new se(["projects",r.projectId,"databases",r.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Mc(n){const e=se.fromString(n);return ee(Bc(e),10190,{key:e.toString()}),e}function hi(n,e){return Oi(n.databaseId,e.path)}function jr(n,e){const t=Mc(e);if(t.get(1)!==n.databaseId.projectId)throw new L(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new L(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new B(Fc(t))}function Oc(n,e){return Oi(n.databaseId,e)}function _m(n){const e=Mc(n);return e.length===4?se.emptyPath():Fc(e)}function fi(n){return new se(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Fc(n){return ee(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Za(n,e,t){return{name:hi(n,e),fields:t.value.mapValue.fields}}function Em(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:z(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],o=(function(h,m){return h.useProto3Json?(ee(m===void 0||typeof m=="string",58123),be.fromBase64String(m||"")):(ee(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),be.fromUint8Array(m||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&(function(h){const m=h.code===void 0?C.UNKNOWN:xc(h.code);return new L(m,h.message||"")})(a);t=new kc(s,r,o,c||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=jr(n,s.document.name),o=Ge(s.document.updateTime),a=s.document.createTime?Ge(s.document.createTime):G.min(),c=new xe({mapValue:{fields:s.document.fields}}),d=Se.newFoundDocument(r,o,a,c),h=s.targetIds||[],m=s.removedTargetIds||[];t=new Ss(h,m,d.key,d)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=jr(n,s.document),o=s.readTime?Ge(s.readTime):G.min(),a=Se.newNoDocument(r,o),c=s.removedTargetIds||[];t=new Ss([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=jr(n,s.document),o=s.removedTargetIds||[];t=new Ss([],o,r,null)}else{if(!("filter"in e))return z(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:o}=s,a=new cm(r,o),c=s.targetId;t=new Nc(c,a)}}return t}function bm(n,e){let t;if(e instanceof Qn)t={update:Za(n,e.key,e.value)};else if(e instanceof ki)t={delete:hi(n,e.key)};else if(e instanceof Et)t={update:Za(n,e.key,e.data),updateMask:Dm(e.fieldMask)};else{if(!(e instanceof om))return z(16599,{dt:e.type});t={verify:hi(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(o,a){const c=a.transform;if(c instanceof jn)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof zn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Gn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof qs)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw z(20930,{transform:a.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(r,o){return o.updateTime!==void 0?{updateTime:vm(r,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:z(27497)})(n,e.precondition)),t}function Tm(n,e){return n&&n.length>0?(ee(e!==void 0,14353),n.map((t=>(function(r,o){let a=r.updateTime?Ge(r.updateTime):Ge(o);return a.isEqual(G.min())&&(a=Ge(o)),new sm(a,r.transformResults||[])})(t,e)))):[]}function Im(n,e){return{documents:[Oc(n,e.path)]}}function wm(n,e){const t={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Oc(n,r);const o=(function(h){if(h.length!==0)return qc(qe.create(h,"and"))})(e.filters);o&&(t.structuredQuery.where=o);const a=(function(h){if(h.length!==0)return h.map((m=>(function(_){return{field:Ht(_.field),direction:Rm(_.dir)}})(m)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=ui(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{ft:t,parent:r}}function Am(n){let e=_m(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){ee(s===1,65062);const m=t.from[0];m.allDescendants?r=m.collectionId:e=e.child(m.collectionId)}let o=[];t.where&&(o=(function(p){const _=$c(p);return _ instanceof qe&&pc(_)?_.getFilters():[_]})(t.where));let a=[];t.orderBy&&(a=(function(p){return p.map((_=>(function(R){return new Un(Qt(R.field),(function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(R.direction))})(_)))})(t.orderBy));let c=null;t.limit&&(c=(function(p){let _;return _=typeof p=="object"?p.value:p,Ws(_)?null:_})(t.limit));let d=null;t.startAt&&(d=(function(p){const _=!!p.before,S=p.values||[];return new Fs(S,_)})(t.startAt));let h=null;return t.endAt&&(h=(function(p){const _=!p.before,S=p.values||[];return new Fs(S,_)})(t.endAt)),Bf(e,r,a,o,c,"F",d,h)}function Sm(n,e){const t=(function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return z(28987,{purpose:r})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function $c(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Qt(t.unaryFilter.field);return he.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=Qt(t.unaryFilter.field);return he.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Qt(t.unaryFilter.field);return he.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Qt(t.unaryFilter.field);return he.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return z(61313);default:return z(60726)}})(n):n.fieldFilter!==void 0?(function(t){return he.create(Qt(t.fieldFilter.field),(function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return z(58110);default:return z(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return qe.create(t.compositeFilter.filters.map((s=>$c(s))),(function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return z(1026)}})(t.compositeFilter.op))})(n):z(30097,{filter:n})}function Rm(n){return mm[n]}function Cm(n){return pm[n]}function Pm(n){return gm[n]}function Ht(n){return{fieldPath:n.canonicalString()}}function Qt(n){return Ee.fromServerFormat(n.fieldPath)}function qc(n){return n instanceof he?(function(t){if(t.op==="=="){if(qa(t.value))return{unaryFilter:{field:Ht(t.field),op:"IS_NAN"}};if($a(t.value))return{unaryFilter:{field:Ht(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(qa(t.value))return{unaryFilter:{field:Ht(t.field),op:"IS_NOT_NAN"}};if($a(t.value))return{unaryFilter:{field:Ht(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ht(t.field),op:Cm(t.op),value:t.value}}})(n):n instanceof qe?(function(t){const s=t.getFilters().map((r=>qc(r)));return s.length===1?s[0]:{compositeFilter:{op:Pm(t.op),filters:s}}})(n):z(54877,{filter:n})}function Dm(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Bc(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Uc(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
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
 */class ot{constructor(e,t,s,r,o=G.min(),a=G.min(),c=be.EMPTY_BYTE_STRING,d=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=d}withSequenceNumber(e){return new ot(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ot(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ot(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ot(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Vm{constructor(e){this.yt=e}}function xm(n){const e=Am({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?$s(e,e.limit,"L"):e}/**
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
 */class Nm{constructor(){this.Sn=new km}addToCollectionParentIndex(e,t){return this.Sn.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(ht.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(ht.min())}updateCollectionGroup(e,t,s){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}}class km{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new ge(se.comparator),o=!r.has(s);return this.index[t]=r.add(s),o}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new ge(se.comparator)).toArray()}}/**
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
 */const el={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},jc=41943040;class Ve{static withCacheSize(e){return new Ve(e,Ve.DEFAULT_COLLECTION_PERCENTILE,Ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Ve.DEFAULT_COLLECTION_PERCENTILE=10,Ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ve.DEFAULT=new Ve(jc,Ve.DEFAULT_COLLECTION_PERCENTILE,Ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ve.DISABLED=new Ve(-1,0,0);/**
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
 */const tl="LruGarbageCollector",Lm=1048576;function nl([n,e],[t,s]){const r=W(n,t);return r===0?W(e,s):r}class Mm{constructor(e){this.Pr=e,this.buffer=new ge(nl),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();nl(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Om{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){M(tl,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){on(t)?M(tl,"Ignoring IndexedDB error during garbage collection: ",t):await rn(t)}await this.Ar(3e5)}))}}class Fm{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return P.resolve(Js.ce);const s=new Mm(t);return this.Vr.forEachTarget(e,(r=>s.Er(r.sequenceNumber))).next((()=>this.Vr.mr(e,(r=>s.Er(r))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(M("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(el)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(M("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),el):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let s,r,o,a,c,d,h;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(M("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),r=this.params.maximumSequenceNumbersToCollect):r=p,a=Date.now(),this.nthSequenceNumber(e,r)))).next((p=>(s=p,c=Date.now(),this.removeTargets(e,s,t)))).next((p=>(o=p,d=Date.now(),this.removeOrphanedDocuments(e,s)))).next((p=>(h=Date.now(),zt()<=Z.DEBUG&&M("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${r} in `+(c-a)+`ms
	Removed ${o} targets in `+(d-c)+`ms
	Removed ${p} documents in `+(h-d)+`ms
Total Duration: ${h-m}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:o,documentsRemoved:p}))))}}function $m(n,e){return new Fm(n,e)}/**
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
 */class Um{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(s=r,this.remoteDocumentCache.getEntry(e,t)))).next((r=>(s!==null&&kn(s.mutation,r,Le.empty(),ie.now()),r)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,K()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=K()){const r=Ct();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,s).next((o=>{let a=Rn();return o.forEach(((c,d)=>{a=a.insert(c,d.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const s=Ct();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,K())))}populateOverlays(e,t,s){const r=[];return s.forEach((o=>{t.has(o)||r.push(o)})),this.documentOverlayCache.getOverlays(e,r).next((o=>{o.forEach(((a,c)=>{t.set(a,c)}))}))}computeViews(e,t,s,r){let o=Xe();const a=Nn(),c=(function(){return Nn()})();return t.forEach(((d,h)=>{const m=s.get(h.key);r.has(h.key)&&(m===void 0||m.mutation instanceof Et)?o=o.insert(h.key,h):m!==void 0?(a.set(h.key,m.mutation.getFieldMask()),kn(m.mutation,h,m.mutation.getFieldMask(),ie.now())):a.set(h.key,Le.empty())})),this.recalculateAndSaveOverlays(e,o).next((d=>(d.forEach(((h,m)=>a.set(h,m))),t.forEach(((h,m)=>c.set(h,new Bm(m,a.get(h)??null)))),c)))}recalculateAndSaveOverlays(e,t){const s=Nn();let r=new oe(((a,c)=>a-c)),o=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const c of a)c.keys().forEach((d=>{const h=t.get(d);if(h===null)return;let m=s.get(d)||Le.empty();m=c.applyToLocalView(h,m),s.set(d,m);const p=(r.get(c.batchId)||K()).add(d);r=r.insert(c.batchId,p)}))})).next((()=>{const a=[],c=r.getReverseIterator();for(;c.hasNext();){const d=c.getNext(),h=d.key,m=d.value,p=wc();m.forEach((_=>{if(!o.has(_)){const S=Dc(t.get(_),s.get(_));S!==null&&p.set(_,S),o=o.add(_)}})),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return P.waitFor(a)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,r){return Uf(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):_c(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,r):this.getDocumentsMatchingCollectionQuery(e,t,s,r)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next((o=>{const a=r-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-o.size):P.resolve(Ct());let c=Fn,d=o;return a.next((h=>P.forEach(h,((m,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),o.get(m)?P.resolve():this.remoteDocumentCache.getEntry(e,m).next((_=>{d=d.insert(m,_)}))))).next((()=>this.populateOverlays(e,h,o))).next((()=>this.computeViews(e,d,h,K()))).next((m=>({batchId:c,changes:Ic(m)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new B(t)).next((s=>{let r=Rn();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,r){const o=t.collectionGroup;let a=Rn();return this.indexManager.getCollectionParents(e,o).next((c=>P.forEach(c,(d=>{const h=(function(p,_){return new an(_,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(t,d.child(o));return this.getDocumentsMatchingCollectionQuery(e,h,s,r).next((m=>{m.forEach(((p,_)=>{a=a.insert(p,_)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,s,r){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,o,r)))).next((a=>{o.forEach(((d,h)=>{const m=h.getKey();a.get(m)===null&&(a=a.insert(m,Se.newInvalidDocument(m)))}));let c=Rn();return a.forEach(((d,h)=>{const m=o.get(d);m!==void 0&&kn(m.mutation,h,Le.empty(),ie.now()),Xs(t,h)&&(c=c.insert(d,h))})),c}))}}/**
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
 */class jm{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return P.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(r){return{id:r.id,version:r.version,createTime:Ge(r.createTime)}})(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(r){return{name:r.name,query:xm(r.bundledQuery),readTime:Ge(r.readTime)}})(t)),P.resolve()}}/**
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
 */class zm{constructor(){this.overlays=new oe(B.comparator),this.Lr=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Ct();return P.forEach(t,(r=>this.getOverlay(e,r).next((o=>{o!==null&&s.set(r,o)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((r,o)=>{this.bt(e,t,o)})),P.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.Lr.get(s);return r!==void 0&&(r.forEach((o=>this.overlays=this.overlays.remove(o))),this.Lr.delete(s)),P.resolve()}getOverlaysForCollection(e,t,s){const r=Ct(),o=t.length+1,a=new B(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const d=c.getNext().value,h=d.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===o&&d.largestBatchId>s&&r.set(d.getKey(),d)}return P.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let o=new oe(((h,m)=>h-m));const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>s){let m=o.get(h.largestBatchId);m===null&&(m=Ct(),o=o.insert(h.largestBatchId,m)),m.set(h.getKey(),h)}}const c=Ct(),d=o.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach(((h,m)=>c.set(h,m))),!(c.size()>=r)););return P.resolve(c)}bt(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const a=this.Lr.get(r.largestBatchId).delete(s.key);this.Lr.set(r.largestBatchId,a)}this.overlays=this.overlays.insert(s.key,new lm(t,s));let o=this.Lr.get(t);o===void 0&&(o=K(),this.Lr.set(t,o)),this.Lr.set(t,o.add(s.key))}}/**
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
 */class Gm{constructor(){this.sessionToken=be.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}}/**
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
 */class Fi{constructor(){this.kr=new ge(ve.Kr),this.qr=new ge(ve.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const s=new ve(e,t);this.kr=this.kr.add(s),this.qr=this.qr.add(s)}$r(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new ve(e,t))}Qr(e,t){e.forEach((s=>this.removeReference(s,t)))}Gr(e){const t=new B(new se([])),s=new ve(t,e),r=new ve(t,e+1),o=[];return this.qr.forEachInRange([s,r],(a=>{this.Wr(a),o.push(a.key)})),o}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new B(new se([])),s=new ve(t,e),r=new ve(t,e+1);let o=K();return this.qr.forEachInRange([s,r],(a=>{o=o.add(a.key)})),o}containsKey(e){const t=new ve(e,0),s=this.kr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class ve{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return B.comparator(e.key,t.key)||W(e.Hr,t.Hr)}static Ur(e,t){return W(e.Hr,t.Hr)||B.comparator(e.key,t.key)}}/**
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
 */class Hm{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new ge(ve.Kr)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const o=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new am(o,t,s,r);this.mutationQueue.push(a);for(const c of r)this.Jr=this.Jr.add(new ve(c.key,o)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return P.resolve(a)}lookupMutationBatch(e,t){return P.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.Xr(s),o=r<0?0:r;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?Ri:this.Yn-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new ve(t,0),r=new ve(t,Number.POSITIVE_INFINITY),o=[];return this.Jr.forEachInRange([s,r],(a=>{const c=this.Zr(a.Hr);o.push(c)})),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new ge(W);return t.forEach((r=>{const o=new ve(r,0),a=new ve(r,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([o,a],(c=>{s=s.add(c.Hr)}))})),P.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let o=s;B.isDocumentKey(o)||(o=o.child(""));const a=new ve(new B(o),0);let c=new ge(W);return this.Jr.forEachWhile((d=>{const h=d.key.path;return!!s.isPrefixOf(h)&&(h.length===r&&(c=c.add(d.Hr)),!0)}),a),P.resolve(this.Yr(c))}Yr(e){const t=[];return e.forEach((s=>{const r=this.Zr(s);r!==null&&t.push(r)})),t}removeMutationBatch(e,t){ee(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Jr;return P.forEach(t.mutations,(r=>{const o=new ve(r.key,t.batchId);return s=s.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Jr=s}))}nr(e){}containsKey(e,t){const s=new ve(t,0),r=this.Jr.firstAfterOrEqual(s);return P.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Qm{constructor(e){this.ti=e,this.docs=(function(){return new oe(B.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),o=r?r.size:0,a=this.ti(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return P.resolve(s?s.document.mutableCopy():Se.newInvalidDocument(t))}getEntries(e,t){let s=Xe();return t.forEach((r=>{const o=this.docs.get(r);s=s.insert(r,o?o.document.mutableCopy():Se.newInvalidDocument(r))})),P.resolve(s)}getDocumentsMatchingQuery(e,t,s,r){let o=Xe();const a=t.path,c=new B(a.child("__id-9223372036854775808__")),d=this.docs.getIteratorFrom(c);for(;d.hasNext();){const{key:h,value:{document:m}}=d.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||vf(yf(m),s)<=0||(r.has(m.key)||Xs(t,m))&&(o=o.insert(m.key,m.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(e,t,s,r){z(9500)}ni(e,t){return P.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new Jm(this)}getSize(e){return P.resolve(this.size)}}class Jm extends qm{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,r)=>{r.isValidDocument()?t.push(this.Mr.addEntry(e,r)):this.Mr.removeEntry(s)})),P.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class Wm{constructor(e){this.persistence=e,this.ri=new Ot((t=>Di(t)),Vi),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.ii=0,this.si=new Fi,this.targetCount=0,this.oi=en._r()}forEachTarget(e,t){return this.ri.forEach(((s,r)=>t(r))),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.ii&&(this.ii=t),P.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new en(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.lr(t),P.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,s){let r=0;const o=[];return this.ri.forEach(((a,c)=>{c.sequenceNumber<=t&&s.get(c.targetId)===null&&(this.ri.delete(a),o.push(this.removeMatchingKeysForTargetId(e,c.targetId)),r++)})),P.waitFor(o).next((()=>r))}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){const s=this.ri.get(t)||null;return P.resolve(s)}addMatchingKeys(e,t,s){return this.si.$r(t,s),P.resolve()}removeMatchingKeys(e,t,s){this.si.Qr(t,s);const r=this.persistence.referenceDelegate,o=[];return r&&t.forEach((a=>{o.push(r.markPotentiallyOrphaned(e,a))})),P.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),P.resolve()}getMatchingKeysForTargetId(e,t){const s=this.si.jr(t);return P.resolve(s)}containsKey(e,t){return P.resolve(this.si.containsKey(t))}}/**
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
 */class zc{constructor(e,t){this._i={},this.overlays={},this.ai=new Js(0),this.ui=!1,this.ui=!0,this.ci=new Gm,this.referenceDelegate=e(this),this.li=new Wm(this),this.indexManager=new Nm,this.remoteDocumentCache=(function(r){return new Qm(r)})((s=>this.referenceDelegate.hi(s))),this.serializer=new Vm(t),this.Pi=new jm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new zm,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this._i[e.toKey()];return s||(s=new Hm(t,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,s){M("MemoryPersistence","Starting transaction:",e);const r=new Km(this.ai.next());return this.referenceDelegate.Ti(),s(r).next((o=>this.referenceDelegate.Ii(r).next((()=>o)))).toPromise().then((o=>(r.raiseOnCommittedEvent(),o)))}Ei(e,t){return P.or(Object.values(this._i).map((s=>()=>s.containsKey(e,t))))}}class Km extends Ef{constructor(e){super(),this.currentSequenceNumber=e}}class $i{constructor(e){this.persistence=e,this.Ri=new Fi,this.Ai=null}static Vi(e){return new $i(e)}get di(){if(this.Ai)return this.Ai;throw z(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.di.delete(s.toString()),P.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.di.add(s.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),P.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((r=>this.di.add(r.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((r=>{r.forEach((o=>this.di.add(o.toString())))})).next((()=>s.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.di,(s=>{const r=B.fromPath(s);return this.mi(e,r).next((o=>{o||t.removeEntry(r,G.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((s=>{s?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return P.or([()=>P.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Us{constructor(e,t){this.persistence=e,this.fi=new Ot((s=>If(s.path)),((s,r)=>s.isEqual(r))),this.garbageCollector=$m(this,t)}static Vi(e,t){return new Us(e,t)}Ti(){}Ii(e){return P.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((r=>s+r))))}pr(e){let t=0;return this.mr(e,(s=>{t++})).next((()=>t))}mr(e,t){return P.forEach(this.fi,((s,r)=>this.wr(e,s,r).next((o=>o?P.resolve():t(r)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const r=this.persistence.getRemoteDocumentCache(),o=r.newChangeBuffer();return r.ni(e,(a=>this.wr(e,a,t).next((c=>{c||(s++,o.removeEntry(a,G.min()))})))).next((()=>o.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),P.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),P.resolve()}removeReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),P.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),P.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Is(e.data.value)),t}wr(e,t,s){return P.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.fi.get(t);return P.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class qi{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Ts=s,this.Is=r}static Es(e,t){let s=K(),r=K();for(const o of t.docChanges)switch(o.type){case 0:s=s.add(o.doc.key);break;case 1:r=r.add(o.doc.key)}return new qi(e,t.fromCache,s,r)}}/**
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
 */class Xm{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return Od()?8:bf(Ld())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,r){const o={result:null};return this.gs(e,t).next((a=>{o.result=a})).next((()=>{if(!o.result)return this.ps(e,t,r,s).next((a=>{o.result=a}))})).next((()=>{if(o.result)return;const a=new Ym;return this.ys(e,t,a).next((c=>{if(o.result=c,this.As)return this.ws(e,t,a,c.size)}))})).next((()=>o.result))}ws(e,t,s,r){return s.documentReadCount<this.Vs?(zt()<=Z.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",Gt(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),P.resolve()):(zt()<=Z.DEBUG&&M("QueryEngine","Query:",Gt(t),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.ds*r?(zt()<=Z.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",Gt(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ze(t))):P.resolve())}gs(e,t){if(za(t))return P.resolve(null);let s=ze(t);return this.indexManager.getIndexType(e,s).next((r=>r===0?null:(t.limit!==null&&r===1&&(t=$s(t,null,"F"),s=ze(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((o=>{const a=K(...o);return this.fs.getDocuments(e,a).next((c=>this.indexManager.getMinOffset(e,s).next((d=>{const h=this.bs(t,c);return this.Ss(t,h,a,d.readTime)?this.gs(e,$s(t,null,"F")):this.Ds(e,h,t,d)}))))})))))}ps(e,t,s,r){return za(t)||r.isEqual(G.min())?P.resolve(null):this.fs.getDocuments(e,s).next((o=>{const a=this.bs(t,o);return this.Ss(t,a,s,r)?P.resolve(null):(zt()<=Z.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Gt(t)),this.Ds(e,a,t,gf(r,Fn)).next((c=>c)))}))}bs(e,t){let s=new ge(bc(e));return t.forEach(((r,o)=>{Xs(e,o)&&(s=s.add(o))})),s}Ss(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(r)>0)}ys(e,t,s){return zt()<=Z.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",Gt(t)),this.fs.getDocumentsMatchingQuery(e,t,ht.min(),s)}Ds(e,t,s,r){return this.fs.getDocumentsMatchingQuery(e,s,r).next((o=>(t.forEach((a=>{o=o.insert(a.key,a)})),o)))}}/**
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
 */const Bi="LocalStore",Zm=3e8;class ep{constructor(e,t,s,r){this.persistence=e,this.Cs=t,this.serializer=r,this.vs=new oe(W),this.Fs=new Ot((o=>Di(o)),Vi),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Um(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function tp(n,e,t,s){return new ep(n,e,t,s)}async function Gc(n,e){const t=H(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next((o=>(r=o,t.Os(e),t.mutationQueue.getAllMutationBatches(s)))).next((o=>{const a=[],c=[];let d=K();for(const h of r){a.push(h.batchId);for(const m of h.mutations)d=d.add(m.key)}for(const h of o){c.push(h.batchId);for(const m of h.mutations)d=d.add(m.key)}return t.localDocuments.getDocuments(s,d).next((h=>({Ns:h,removedBatchIds:a,addedBatchIds:c})))}))}))}function np(n,e){const t=H(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const r=e.batch.keys(),o=t.xs.newChangeBuffer({trackRemovals:!0});return(function(c,d,h,m){const p=h.batch,_=p.keys();let S=P.resolve();return _.forEach((R=>{S=S.next((()=>m.getEntry(d,R))).next((D=>{const x=h.docVersions.get(R);ee(x!==null,48541),D.version.compareTo(x)<0&&(p.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),m.addEntry(D)))}))})),S.next((()=>c.mutationQueue.removeMutationBatch(d,p)))})(t,s,e,o).next((()=>o.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(c){let d=K();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(d=d.add(c.batch.mutations[h].key));return d})(e)))).next((()=>t.localDocuments.getDocuments(s,r)))}))}function Hc(n){const e=H(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function sp(n,e){const t=H(n),s=e.snapshotVersion;let r=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(o=>{const a=t.xs.newChangeBuffer({trackRemovals:!0});r=t.vs;const c=[];e.targetChanges.forEach(((m,p)=>{const _=r.get(p);if(!_)return;c.push(t.li.removeMatchingKeys(o,m.removedDocuments,p).next((()=>t.li.addMatchingKeys(o,m.addedDocuments,p))));let S=_.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(p)!==null?S=S.withResumeToken(be.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):m.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(m.resumeToken,s)),r=r.insert(p,S),(function(D,x,V){return D.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=Zm?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0})(_,S,m)&&c.push(t.li.updateTargetData(o,S))}));let d=Xe(),h=K();if(e.documentUpdates.forEach((m=>{e.resolvedLimboDocuments.has(m)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(o,m))})),c.push(rp(o,a,e.documentUpdates).next((m=>{d=m.Bs,h=m.Ls}))),!s.isEqual(G.min())){const m=t.li.getLastRemoteSnapshotVersion(o).next((p=>t.li.setTargetsMetadata(o,o.currentSequenceNumber,s)));c.push(m)}return P.waitFor(c).next((()=>a.apply(o))).next((()=>t.localDocuments.getLocalViewOfDocuments(o,d,h))).next((()=>d))})).then((o=>(t.vs=r,o)))}function rp(n,e,t){let s=K(),r=K();return t.forEach((o=>s=s.add(o))),e.getEntries(n,s).next((o=>{let a=Xe();return t.forEach(((c,d)=>{const h=o.get(c);d.isFoundDocument()!==h.isFoundDocument()&&(r=r.add(c)),d.isNoDocument()&&d.version.isEqual(G.min())?(e.removeEntry(c,d.readTime),a=a.insert(c,d)):!h.isValidDocument()||d.version.compareTo(h.version)>0||d.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(d),a=a.insert(c,d)):M(Bi,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",d.version)})),{Bs:a,Ls:r}}))}function ip(n,e){const t=H(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Ri),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function op(n,e){const t=H(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let r;return t.li.getTargetData(s,e).next((o=>o?(r=o,P.resolve(r)):t.li.allocateTargetId(s).next((a=>(r=new ot(e,a,"TargetPurposeListen",s.currentSequenceNumber),t.li.addTargetData(s,r).next((()=>r)))))))})).then((s=>{const r=t.vs.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.vs=t.vs.insert(s.targetId,s),t.Fs.set(e,s.targetId)),s}))}async function mi(n,e,t){const s=H(n),r=s.vs.get(e),o=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",o,(a=>s.persistence.referenceDelegate.removeTarget(a,r)))}catch(a){if(!on(a))throw a;M(Bi,`Failed to update sequence numbers for target ${e}: ${a}`)}s.vs=s.vs.remove(e),s.Fs.delete(r.target)}function sl(n,e,t){const s=H(n);let r=G.min(),o=K();return s.persistence.runTransaction("Execute query","readwrite",(a=>(function(d,h,m){const p=H(d),_=p.Fs.get(m);return _!==void 0?P.resolve(p.vs.get(_)):p.li.getTargetData(h,m)})(s,a,ze(e)).next((c=>{if(c)return r=c.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(a,c.targetId).next((d=>{o=d}))})).next((()=>s.Cs.getDocumentsMatchingQuery(a,e,t?r:G.min(),t?o:K()))).next((c=>(ap(s,Gf(e),c),{documents:c,ks:o})))))}function ap(n,e,t){let s=n.Ms.get(e)||G.min();t.forEach(((r,o)=>{o.readTime.compareTo(s)>0&&(s=o.readTime)})),n.Ms.set(e,s)}class rl{constructor(){this.activeTargetIds=Yf()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lp{constructor(){this.vo=new rl,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,s){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new rl,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */const il="ConnectivityMonitor";class ol{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){M(il,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){M(il,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Es=null;function pi(){return Es===null?Es=(function(){return 268435456+Math.round(2147483648*Math.random())})():Es++,"0x"+Es.toString(16)}/**
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
 */const zr="RestConnection",up={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class dp{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${s}/databases/${r}`,this.$o=this.databaseId.database===Ms?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Wo(e,t,s,r,o){const a=pi(),c=this.Qo(e,t.toUriEncodedString());M(zr,`Sending RPC '${e}' ${a}:`,c,s);const d={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(d,r,o);const{host:h}=new URL(c),m=Ii(h);return this.zo(e,c,d,s,m).then((p=>(M(zr,`Received RPC '${e}' ${a}: `,p),p)),(p=>{throw Nt(zr,`RPC '${e}' ${a} failed with error: `,p,"url: ",c,"request:",s),p}))}jo(e,t,s,r,o,a){return this.Wo(e,t,s,r,o)}Go(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+sn})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((r,o)=>e[o]=r)),s&&s.headers.forEach(((r,o)=>e[o]=r))}Qo(e,t){const s=up[e];let r=`${this.qo}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}/**
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
 */const Ie="WebChannelConnection",An=(n,e,t)=>{n.listen(e,(s=>{try{t(s)}catch(r){setTimeout((()=>{throw r}),0)}}))};class Wt extends dp{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Wt.c_){const e=Yl();An(e,Kl.STAT_EVENT,(t=>{t.stat===si.PROXY?M(Ie,"STAT_EVENT: detected buffering proxy"):t.stat===si.NOPROXY&&M(Ie,"STAT_EVENT: detected no buffering proxy")})),Wt.c_=!0}}zo(e,t,s,r,o){const a=pi();return new Promise(((c,d)=>{const h=new Jl;h.setWithCredentials(!0),h.listenOnce(Wl.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case Ts.NO_ERROR:const p=h.getResponseJson();M(Ie,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),c(p);break;case Ts.TIMEOUT:M(Ie,`RPC '${e}' ${a} timed out`),d(new L(C.DEADLINE_EXCEEDED,"Request time out"));break;case Ts.HTTP_ERROR:const _=h.getStatus();if(M(Ie,`RPC '${e}' ${a} failed with status:`,_,"response text:",h.getResponseText()),_>0){let S=h.getResponseJson();Array.isArray(S)&&(S=S[0]);const R=S==null?void 0:S.error;if(R&&R.status&&R.message){const D=(function(V){const k=V.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(k)>=0?k:C.UNKNOWN})(R.status);d(new L(D,R.message))}else d(new L(C.UNKNOWN,"Server responded with status "+h.getStatus()))}else d(new L(C.UNAVAILABLE,"Connection failed."));break;default:z(9055,{l_:e,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{M(Ie,`RPC '${e}' ${a} completed.`)}}));const m=JSON.stringify(r);M(Ie,`RPC '${e}' ${a} sending request:`,r),h.send(t,"POST",m,s,15)}))}T_(e,t,s){const r=pi(),o=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(c.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,t,s),c.encodeInitMessageHeaders=!0;const h=o.join("");M(Ie,`Creating RPC '${e}' stream ${r}: ${h}`,c);const m=a.createWebChannel(h,c);this.I_(m);let p=!1,_=!1;const S=new hp({Ho:R=>{_?M(Ie,`Not sending because RPC '${e}' stream ${r} is closed:`,R):(p||(M(Ie,`Opening RPC '${e}' stream ${r} transport.`),m.open(),p=!0),M(Ie,`RPC '${e}' stream ${r} sending:`,R),m.send(R))},Jo:()=>m.close()});return An(m,Sn.EventType.OPEN,(()=>{_||(M(Ie,`RPC '${e}' stream ${r} transport opened.`),S.i_())})),An(m,Sn.EventType.CLOSE,(()=>{_||(_=!0,M(Ie,`RPC '${e}' stream ${r} transport closed`),S.o_(),this.E_(m))})),An(m,Sn.EventType.ERROR,(R=>{_||(_=!0,Nt(Ie,`RPC '${e}' stream ${r} transport errored. Name:`,R.name,"Message:",R.message),S.o_(new L(C.UNAVAILABLE,"The operation could not be completed")))})),An(m,Sn.EventType.MESSAGE,(R=>{var D;if(!_){const x=R.data[0];ee(!!x,16349);const V=x,k=(V==null?void 0:V.error)||((D=V[0])==null?void 0:D.error);if(k){M(Ie,`RPC '${e}' stream ${r} received error:`,k);const $=k.status;let O=(function(b){const v=de[b];if(v!==void 0)return xc(v)})($),q=k.message;$==="NOT_FOUND"&&q.includes("database")&&q.includes("does not exist")&&q.includes(this.databaseId.database)&&Nt(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),O===void 0&&(O=C.INTERNAL,q="Unknown error status: "+$+" with message "+k.message),_=!0,S.o_(new L(O,q)),m.close()}else M(Ie,`RPC '${e}' stream ${r} received:`,x),S.__(x)}})),Wt.u_(),setTimeout((()=>{S.s_()}),0),S}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,s){super.Go(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Xl()}}/**
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
 */function nr(n){return new ym(n,!0)}/**
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
 */Wt.c_=!1;class Qc{constructor(e,t,s=1e3,r=1.5,o=6e4){this.Ci=e,this.timerId=t,this.R_=s,this.A_=r,this.V_=o,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-s);r>0&&M("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,r,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const al="PersistentStream";class Jc{constructor(e,t,s,r,o,a,c,d){this.Ci=e,this.b_=s,this.S_=r,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=d,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Qc(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===C.RESOURCE_EXHAUSTED?(Ye(t.toString()),Ye("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,r])=>{this.D_===t&&this.G_(s,r)}),(s=>{e((()=>{const r=new L(C.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(r)}))}))}G_(e,t){const s=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.Yo((()=>{s((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((r=>{s((()=>this.z_(r)))})),this.stream.onMessage((r=>{s((()=>++this.F_==1?this.H_(r):this.onNext(r)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return M(al,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(M(al,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class mp extends Jc{constructor(e,t,s,r,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,a),this.serializer=o}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Em(this.serializer,e),s=(function(o){if(!("targetChange"in o))return G.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?G.min():a.readTime?Ge(a.readTime):G.min()})(e);return this.listener.J_(t,s)}Z_(e){const t={};t.database=fi(this.serializer),t.addTarget=(function(o,a){let c;const d=a.target;if(c=li(d)?{documents:Im(o,d)}:{query:wm(o,d).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Lc(o,a.resumeToken);const h=ui(o,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(G.min())>0){c.readTime=Bs(o,a.snapshotVersion.toTimestamp());const h=ui(o,a.expectedCount);h!==null&&(c.expectedCount=h)}return c})(this.serializer,e);const s=Sm(this.serializer,e);s&&(t.labels=s),this.K_(t)}X_(e){const t={};t.database=fi(this.serializer),t.removeTarget=e,this.K_(t)}}class pp extends Jc{constructor(e,t,s,r,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,a),this.serializer=o}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}H_(e){return ee(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ee(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ee(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Tm(e.writeResults,e.commitTime),s=Ge(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=fi(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>bm(this.serializer,s)))};this.K_(t)}}/**
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
 */class gp{}class yp extends gp{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new L(C.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Wo(e,di(t,s),r,o,a))).catch((o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new L(C.UNKNOWN,o.toString())}))}jo(e,t,s,r,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.jo(e,di(t,s),r,a,c,o))).catch((a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new L(C.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function vp(n,e,t,s){return new yp(n,e,t,s)}class _p{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ye(t),this.aa=!1):M("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const kt="RemoteStore";class Ep{constructor(e,t,s,r,o){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=o,this.Aa.Mo((a=>{s.enqueueAndForget((async()=>{Ft(this)&&(M(kt,"Restarting streams for network reachability change."),await(async function(d){const h=H(d);h.Ea.add(4),await Wn(h),h.Va.set("Unknown"),h.Ea.delete(4),await sr(h)})(this))}))})),this.Va=new _p(s,r)}}async function sr(n){if(Ft(n))for(const e of n.Ra)await e(!0)}async function Wn(n){for(const e of n.Ra)await e(!1)}function Wc(n,e){const t=H(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Gi(t)?zi(t):ln(t).O_()&&ji(t,e))}function Ui(n,e){const t=H(n),s=ln(t);t.Ia.delete(e),s.O_()&&Kc(t,e),t.Ia.size===0&&(s.O_()?s.L_():Ft(t)&&t.Va.set("Unknown"))}function ji(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(G.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ln(n).Z_(e)}function Kc(n,e){n.da.$e(e),ln(n).X_(e)}function zi(n){n.da=new fm({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),ln(n).start(),n.Va.ua()}function Gi(n){return Ft(n)&&!ln(n).x_()&&n.Ia.size>0}function Ft(n){return H(n).Ea.size===0}function Yc(n){n.da=void 0}async function bp(n){n.Va.set("Online")}async function Tp(n){n.Ia.forEach(((e,t)=>{ji(n,e)}))}async function Ip(n,e){Yc(n),Gi(n)?(n.Va.ha(e),zi(n)):n.Va.set("Unknown")}async function wp(n,e,t){if(n.Va.set("Online"),e instanceof kc&&e.state===2&&e.cause)try{await(async function(r,o){const a=o.cause;for(const c of o.targetIds)r.Ia.has(c)&&(await r.remoteSyncer.rejectListen(c,a),r.Ia.delete(c),r.da.removeTarget(c))})(n,e)}catch(s){M(kt,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await js(n,s)}else if(e instanceof Ss?n.da.Xe(e):e instanceof Nc?n.da.st(e):n.da.tt(e),!t.isEqual(G.min()))try{const s=await Hc(n.localStore);t.compareTo(s)>=0&&await(function(o,a){const c=o.da.Tt(a);return c.targetChanges.forEach(((d,h)=>{if(d.resumeToken.approximateByteSize()>0){const m=o.Ia.get(h);m&&o.Ia.set(h,m.withResumeToken(d.resumeToken,a))}})),c.targetMismatches.forEach(((d,h)=>{const m=o.Ia.get(d);if(!m)return;o.Ia.set(d,m.withResumeToken(be.EMPTY_BYTE_STRING,m.snapshotVersion)),Kc(o,d);const p=new ot(m.target,d,h,m.sequenceNumber);ji(o,p)})),o.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(s){M(kt,"Failed to raise snapshot:",s),await js(n,s)}}async function js(n,e,t){if(!on(e))throw e;n.Ea.add(1),await Wn(n),n.Va.set("Offline"),t||(t=()=>Hc(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{M(kt,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await sr(n)}))}function Xc(n,e){return e().catch((t=>js(n,t,e)))}async function rr(n){const e=H(n),t=gt(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Ri;for(;Ap(e);)try{const r=await ip(e.localStore,s);if(r===null){e.Ta.length===0&&t.L_();break}s=r.batchId,Sp(e,r)}catch(r){await js(e,r)}Zc(e)&&eu(e)}function Ap(n){return Ft(n)&&n.Ta.length<10}function Sp(n,e){n.Ta.push(e);const t=gt(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function Zc(n){return Ft(n)&&!gt(n).x_()&&n.Ta.length>0}function eu(n){gt(n).start()}async function Rp(n){gt(n).ra()}async function Cp(n){const e=gt(n);for(const t of n.Ta)e.ea(t.mutations)}async function Pp(n,e,t){const s=n.Ta.shift(),r=Li.from(s,e,t);await Xc(n,(()=>n.remoteSyncer.applySuccessfulWrite(r))),await rr(n)}async function Dp(n,e){e&&gt(n).Y_&&await(async function(s,r){if((function(a){return um(a)&&a!==C.ABORTED})(r.code)){const o=s.Ta.shift();gt(s).B_(),await Xc(s,(()=>s.remoteSyncer.rejectFailedWrite(o.batchId,r))),await rr(s)}})(n,e),Zc(n)&&eu(n)}async function ll(n,e){const t=H(n);t.asyncQueue.verifyOperationInProgress(),M(kt,"RemoteStore received new credentials");const s=Ft(t);t.Ea.add(3),await Wn(t),s&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await sr(t)}async function Vp(n,e){const t=H(n);e?(t.Ea.delete(2),await sr(t)):e||(t.Ea.add(2),await Wn(t),t.Va.set("Unknown"))}function ln(n){return n.ma||(n.ma=(function(t,s,r){const o=H(t);return o.sa(),new mp(s,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,r)})(n.datastore,n.asyncQueue,{Zo:bp.bind(null,n),Yo:Tp.bind(null,n),t_:Ip.bind(null,n),J_:wp.bind(null,n)}),n.Ra.push((async e=>{e?(n.ma.B_(),Gi(n)?zi(n):n.Va.set("Unknown")):(await n.ma.stop(),Yc(n))}))),n.ma}function gt(n){return n.fa||(n.fa=(function(t,s,r){const o=H(t);return o.sa(),new pp(s,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,r)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:Rp.bind(null,n),t_:Dp.bind(null,n),ta:Cp.bind(null,n),na:Pp.bind(null,n)}),n.Ra.push((async e=>{e?(n.fa.B_(),await rr(n)):(await n.fa.stop(),n.Ta.length>0&&(M(kt,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
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
 */class Hi{constructor(e,t,s,r,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=o,this.deferred=new ut,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,r,o){const a=Date.now()+s,c=new Hi(e,t,a,r,o);return c.start(s),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qi(n,e){if(Ye("AsyncQueue",`${e}: ${n}`),on(n))return new L(C.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Kt{static emptySet(e){return new Kt(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||B.comparator(t.key,s.key):(t,s)=>B.comparator(t.key,s.key),this.keyedMap=Rn(),this.sortedSet=new oe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Kt)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,o=s.getNext().key;if(!r.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class cl{constructor(){this.ga=new oe(B.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):z(63341,{Vt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class tn{constructor(e,t,s,r,o,a,c,d,h){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=d,this.hasCachedResults=h}static fromInitialDocuments(e,t,s,r,o){const a=[];return t.forEach((c=>{a.push({type:0,doc:c})})),new tn(e,t,Kt.emptySet(t),a,s,r,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ys(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class xp{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class Np{constructor(){this.queries=ul(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const r=H(t),o=r.queries;r.queries=ul(),o.forEach(((a,c)=>{for(const d of c.ba)d.onError(s)}))})(this,new L(C.ABORTED,"Firestore shutting down"))}}function ul(){return new Ot((n=>Ec(n)),Ys)}async function tu(n,e){const t=H(n);let s=3;const r=e.query;let o=t.queries.get(r);o?!o.Sa()&&e.Da()&&(s=2):(o=new xp,s=e.Da()?0:1);try{switch(s){case 0:o.wa=await t.onListen(r,!0);break;case 1:o.wa=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(a){const c=Qi(a,`Initialization of query '${Gt(e.query)}' failed`);return void e.onError(c)}t.queries.set(r,o),o.ba.push(e),e.va(t.onlineState),o.wa&&e.Fa(o.wa)&&Ji(t)}async function nu(n,e){const t=H(n),s=e.query;let r=3;const o=t.queries.get(s);if(o){const a=o.ba.indexOf(e);a>=0&&(o.ba.splice(a,1),o.ba.length===0?r=e.Da()?0:1:!o.Sa()&&e.Da()&&(r=2))}switch(r){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function kp(n,e){const t=H(n);let s=!1;for(const r of e){const o=r.query,a=t.queries.get(o);if(a){for(const c of a.ba)c.Fa(r)&&(s=!0);a.wa=r}}s&&Ji(t)}function Lp(n,e,t){const s=H(n),r=s.queries.get(e);if(r)for(const o of r.ba)o.onError(t);s.queries.delete(e)}function Ji(n){n.Ca.forEach((e=>{e.next()}))}var gi,dl;(dl=gi||(gi={})).Ma="default",dl.Cache="cache";class su{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new tn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.Ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=tn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==gi.Cache}}/**
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
 */class ru{constructor(e){this.key=e}}class iu{constructor(e){this.key=e}}class Mp{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=K(),this.mutatedKeys=K(),this.eu=bc(e),this.tu=new Kt(this.eu)}get nu(){return this.Za}ru(e,t){const s=t?t.iu:new cl,r=t?t.tu:this.tu;let o=t?t.mutatedKeys:this.mutatedKeys,a=r,c=!1;const d=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,h=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((m,p)=>{const _=r.get(m),S=Xs(this.query,p)?p:null,R=!!_&&this.mutatedKeys.has(_.key),D=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let x=!1;_&&S?_.data.isEqual(S.data)?R!==D&&(s.track({type:3,doc:S}),x=!0):this.su(_,S)||(s.track({type:2,doc:S}),x=!0,(d&&this.eu(S,d)>0||h&&this.eu(S,h)<0)&&(c=!0)):!_&&S?(s.track({type:0,doc:S}),x=!0):_&&!S&&(s.track({type:1,doc:_}),x=!0,(d||h)&&(c=!0)),x&&(S?(a=a.add(S),o=D?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),s.track({type:1,doc:m})}return{tu:a,iu:s,Ss:c,mutatedKeys:o}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,r){const o=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort(((m,p)=>(function(S,R){const D=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z(20277,{Vt:x})}};return D(S)-D(R)})(m.type,p.type)||this.eu(m.doc,p.doc))),this.ou(s),r=r??!1;const c=t&&!r?this._u():[],d=this.Ya.size===0&&this.current&&!r?1:0,h=d!==this.Xa;return this.Xa=d,a.length!==0||h?{snapshot:new tn(this.query,e.tu,o,a,e.mutatedKeys,d===0,h,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new cl,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=K(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Ya=this.Ya.add(s.key))}));const t=[];return e.forEach((s=>{this.Ya.has(s)||t.push(new iu(s))})),this.Ya.forEach((s=>{e.has(s)||t.push(new ru(s))})),t}cu(e){this.Za=e.ks,this.Ya=K();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return tn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Wi="SyncEngine";class Op{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class Fp{constructor(e){this.key=e,this.hu=!1}}class $p{constructor(e,t,s,r,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Ot((c=>Ec(c)),Ys),this.Iu=new Map,this.Eu=new Set,this.Ru=new oe(B.comparator),this.Au=new Map,this.Vu=new Fi,this.du={},this.mu=new Map,this.fu=en.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function qp(n,e,t=!0){const s=du(n);let r;const o=s.Tu.get(e);return o?(s.sharedClientState.addLocalQueryTarget(o.targetId),r=o.view.lu()):r=await ou(s,e,t,!0),r}async function Bp(n,e){const t=du(n);await ou(t,e,!0,!1)}async function ou(n,e,t,s){const r=await op(n.localStore,ze(e)),o=r.targetId,a=n.sharedClientState.addLocalQueryTarget(o,t);let c;return s&&(c=await Up(n,e,o,a==="current",r.resumeToken)),n.isPrimaryClient&&t&&Wc(n.remoteStore,r),c}async function Up(n,e,t,s,r){n.pu=(p,_,S)=>(async function(D,x,V,k){let $=x.view.ru(V);$.Ss&&($=await sl(D.localStore,x.query,!1).then((({documents:b})=>x.view.ru(b,$))));const O=k&&k.targetChanges.get(x.targetId),q=k&&k.targetMismatches.get(x.targetId)!=null,U=x.view.applyChanges($,D.isPrimaryClient,O,q);return fl(D,x.targetId,U.au),U.snapshot})(n,p,_,S);const o=await sl(n.localStore,e,!0),a=new Mp(e,o.ks),c=a.ru(o.documents),d=Jn.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),h=a.applyChanges(c,n.isPrimaryClient,d);fl(n,t,h.au);const m=new Op(e,t,a);return n.Tu.set(e,m),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),h.snapshot}async function jp(n,e,t){const s=H(n),r=s.Tu.get(e),o=s.Iu.get(r.targetId);if(o.length>1)return s.Iu.set(r.targetId,o.filter((a=>!Ys(a,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await mi(s.localStore,r.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(r.targetId),t&&Ui(s.remoteStore,r.targetId),yi(s,r.targetId)})).catch(rn)):(yi(s,r.targetId),await mi(s.localStore,r.targetId,!0))}async function zp(n,e){const t=H(n),s=t.Tu.get(e),r=t.Iu.get(s.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Ui(t.remoteStore,s.targetId))}async function Gp(n,e,t){const s=Xp(n);try{const r=await(function(a,c){const d=H(a),h=ie.now(),m=c.reduce(((S,R)=>S.add(R.key)),K());let p,_;return d.persistence.runTransaction("Locally write mutations","readwrite",(S=>{let R=Xe(),D=K();return d.xs.getEntries(S,m).next((x=>{R=x,R.forEach(((V,k)=>{k.isValidDocument()||(D=D.add(V))}))})).next((()=>d.localDocuments.getOverlayedDocuments(S,R))).next((x=>{p=x;const V=[];for(const k of c){const $=im(k,p.get(k.key).overlayedDocument);$!=null&&V.push(new Et(k.key,$,hc($.value.mapValue),Fe.exists(!0)))}return d.mutationQueue.addMutationBatch(S,h,V,c)})).next((x=>{_=x;const V=x.applyToLocalDocumentSet(p,D);return d.documentOverlayCache.saveOverlays(S,x.batchId,V)}))})).then((()=>({batchId:_.batchId,changes:Ic(p)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),(function(a,c,d){let h=a.du[a.currentUser.toKey()];h||(h=new oe(W)),h=h.insert(c,d),a.du[a.currentUser.toKey()]=h})(s,r.batchId,t),await Kn(s,r.changes),await rr(s.remoteStore)}catch(r){const o=Qi(r,"Failed to persist write");t.reject(o)}}async function au(n,e){const t=H(n);try{const s=await sp(t.localStore,e);e.targetChanges.forEach(((r,o)=>{const a=t.Au.get(o);a&&(ee(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?a.hu=!0:r.modifiedDocuments.size>0?ee(a.hu,14607):r.removedDocuments.size>0&&(ee(a.hu,42227),a.hu=!1))})),await Kn(t,s,e)}catch(s){await rn(s)}}function hl(n,e,t){const s=H(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.Tu.forEach(((o,a)=>{const c=a.view.va(e);c.snapshot&&r.push(c.snapshot)})),(function(a,c){const d=H(a);d.onlineState=c;let h=!1;d.queries.forEach(((m,p)=>{for(const _ of p.ba)_.va(c)&&(h=!0)})),h&&Ji(d)})(s.eventManager,e),r.length&&s.Pu.J_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Hp(n,e,t){const s=H(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.Au.get(e),o=r&&r.key;if(o){let a=new oe(B.comparator);a=a.insert(o,Se.newNoDocument(o,G.min()));const c=K().add(o),d=new tr(G.min(),new Map,new oe(W),a,c);await au(s,d),s.Ru=s.Ru.remove(o),s.Au.delete(e),Ki(s)}else await mi(s.localStore,e,!1).then((()=>yi(s,e,t))).catch(rn)}async function Qp(n,e){const t=H(n),s=e.batch.batchId;try{const r=await np(t.localStore,e);cu(t,s,null),lu(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Kn(t,r)}catch(r){await rn(r)}}async function Jp(n,e,t){const s=H(n);try{const r=await(function(a,c){const d=H(a);return d.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let m;return d.mutationQueue.lookupMutationBatch(h,c).next((p=>(ee(p!==null,37113),m=p.keys(),d.mutationQueue.removeMutationBatch(h,p)))).next((()=>d.mutationQueue.performConsistencyCheck(h))).next((()=>d.documentOverlayCache.removeOverlaysForBatchId(h,m,c))).next((()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,m))).next((()=>d.localDocuments.getDocuments(h,m)))}))})(s.localStore,e);cu(s,e,t),lu(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Kn(s,r)}catch(r){await rn(r)}}function lu(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function cu(n,e,t){const s=H(n);let r=s.du[s.currentUser.toKey()];if(r){const o=r.get(e);o&&(t?o.reject(t):o.resolve(),r=r.remove(e)),s.du[s.currentUser.toKey()]=r}}function yi(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Iu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Iu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach((s=>{n.Vu.containsKey(s)||uu(n,s)}))}function uu(n,e){n.Eu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(Ui(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),Ki(n))}function fl(n,e,t){for(const s of t)s instanceof ru?(n.Vu.addReference(s.key,e),Wp(n,s)):s instanceof iu?(M(Wi,"Document no longer in limbo: "+s.key),n.Vu.removeReference(s.key,e),n.Vu.containsKey(s.key)||uu(n,s.key)):z(19791,{wu:s})}function Wp(n,e){const t=e.key,s=t.path.canonicalString();n.Ru.get(t)||n.Eu.has(s)||(M(Wi,"New document in limbo: "+t),n.Eu.add(s),Ki(n))}function Ki(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new B(se.fromString(e)),s=n.fu.next();n.Au.set(s,new Fp(t)),n.Ru=n.Ru.insert(t,s),Wc(n.remoteStore,new ot(ze(xi(t.path)),s,"TargetPurposeLimboResolution",Js.ce))}}async function Kn(n,e,t){const s=H(n),r=[],o=[],a=[];s.Tu.isEmpty()||(s.Tu.forEach(((c,d)=>{a.push(s.pu(d,e,t).then((h=>{var m;if((h||t)&&s.isPrimaryClient){const p=h?!h.fromCache:(m=t==null?void 0:t.targetChanges.get(d.targetId))==null?void 0:m.current;s.sharedClientState.updateQueryState(d.targetId,p?"current":"not-current")}if(h){r.push(h);const p=qi.Es(d.targetId,h);o.push(p)}})))})),await Promise.all(a),s.Pu.J_(r),await(async function(d,h){const m=H(d);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>P.forEach(h,(_=>P.forEach(_.Ts,(S=>m.persistence.referenceDelegate.addReference(p,_.targetId,S))).next((()=>P.forEach(_.Is,(S=>m.persistence.referenceDelegate.removeReference(p,_.targetId,S)))))))))}catch(p){if(!on(p))throw p;M(Bi,"Failed to update sequence numbers: "+p)}for(const p of h){const _=p.targetId;if(!p.fromCache){const S=m.vs.get(_),R=S.snapshotVersion,D=S.withLastLimboFreeSnapshotVersion(R);m.vs=m.vs.insert(_,D)}}})(s.localStore,o))}async function Kp(n,e){const t=H(n);if(!t.currentUser.isEqual(e)){M(Wi,"User change. New user:",e.toKey());const s=await Gc(t.localStore,e);t.currentUser=e,(function(o,a){o.mu.forEach((c=>{c.forEach((d=>{d.reject(new L(C.CANCELLED,a))}))})),o.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Kn(t,s.Ns)}}function Yp(n,e){const t=H(n),s=t.Au.get(e);if(s&&s.hu)return K().add(s.key);{let r=K();const o=t.Iu.get(e);if(!o)return r;for(const a of o){const c=t.Tu.get(a);r=r.unionWith(c.view.nu)}return r}}function du(n){const e=H(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=au.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Yp.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Hp.bind(null,e),e.Pu.J_=kp.bind(null,e.eventManager),e.Pu.yu=Lp.bind(null,e.eventManager),e}function Xp(n){const e=H(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Qp.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Jp.bind(null,e),e}class zs{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=nr(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return tp(this.persistence,new Xm,e.initialUser,this.serializer)}Cu(e){return new zc($i.Vi,this.serializer)}Du(e){return new lp}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}zs.provider={build:()=>new zs};class Zp extends zs{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){ee(this.persistence.referenceDelegate instanceof Us,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new Om(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Ve.withCacheSize(this.cacheSizeBytes):Ve.DEFAULT;return new zc((s=>Us.Vi(s,t)),this.serializer)}}class vi{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>hl(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Kp.bind(null,this.syncEngine),await Vp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Np})()}createDatastore(e){const t=nr(e.databaseInfo.databaseId),s=fp(e.databaseInfo);return vp(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,r,o,a,c){return new Ep(s,r,o,a,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>hl(this.syncEngine,t,0)),(function(){return ol.v()?new ol:new cp})())}createSyncEngine(e,t){return(function(r,o,a,c,d,h,m){const p=new $p(r,o,a,c,d,h);return m&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(r){const o=H(r);M(kt,"RemoteStore shutting down."),o.Ea.add(5),await Wn(o),o.Aa.shutdown(),o.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}vi.provider={build:()=>new vi};/**
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
 */class hu{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Ye("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const yt="FirestoreClient";class eg{constructor(e,t,s,r,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=r,this.user=Ae.UNAUTHENTICATED,this.clientId=Si.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(s,(async a=>{M(yt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(s,(a=>(M(yt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ut;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Qi(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Hr(n,e){n.asyncQueue.verifyOperationInProgress(),M(yt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async r=>{s.isEqual(r)||(await Gc(e.localStore,r),s=r)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function ml(n,e){n.asyncQueue.verifyOperationInProgress();const t=await tg(n);M(yt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>ll(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,r)=>ll(e.remoteStore,r))),n._onlineComponents=e}async function tg(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){M(yt,"Using user provided OfflineComponentProvider");try{await Hr(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(r){return r.name==="FirebaseError"?r.code===C.FAILED_PRECONDITION||r.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11})(t))throw t;Nt("Error using user provided cache. Falling back to memory cache: "+t),await Hr(n,new zs)}}else M(yt,"Using default OfflineComponentProvider"),await Hr(n,new Zp(void 0));return n._offlineComponents}async function fu(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(M(yt,"Using user provided OnlineComponentProvider"),await ml(n,n._uninitializedComponentsProvider._online)):(M(yt,"Using default OnlineComponentProvider"),await ml(n,new vi))),n._onlineComponents}function ng(n){return fu(n).then((e=>e.syncEngine))}async function _i(n){const e=await fu(n),t=e.eventManager;return t.onListen=qp.bind(null,e.syncEngine),t.onUnlisten=jp.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Bp.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=zp.bind(null,e.syncEngine),t}function sg(n,e,t,s){const r=new hu(s),o=new su(e,r,t);return n.asyncQueue.enqueueAndForget((async()=>tu(await _i(n),o))),()=>{r.Nu(),n.asyncQueue.enqueueAndForget((async()=>nu(await _i(n),o)))}}function rg(n,e,t={}){const s=new ut;return n.asyncQueue.enqueueAndForget((async()=>(function(o,a,c,d,h){const m=new hu({next:_=>{m.Nu(),a.enqueueAndForget((()=>nu(o,p))),_.fromCache&&d.source==="server"?h.reject(new L(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(_)},error:_=>h.reject(_)}),p=new su(c,m,{includeMetadataChanges:!0,Ka:!0});return tu(o,p)})(await _i(n),n.asyncQueue,e,t,s))),s.promise}function ig(n,e){const t=new ut;return n.asyncQueue.enqueueAndForget((async()=>Gp(await ng(n),e,t))),t.promise}/**
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
 */const og="ComponentProvider",pl=new Map;function ag(n,e,t,s,r){return new Sf(n,e,t,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,mu(r.experimentalLongPollingOptions),r.useFetchStreams,r.isUsingEmulator,s)}/**
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
 */const pu="firestore.googleapis.com",gl=!0;class yl{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new L(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=pu,this.ssl=gl}else this.host=e.host,this.ssl=e.ssl??gl;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=jc;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Lm)throw new L(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}pf("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=mu(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new L(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new L(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new L(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,r){return s.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ir{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new L(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yl(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new rf;switch(s.type){case"firstParty":return new cf(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new L(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=pl.get(t);s&&(M(og,"Removing Datastore"),pl.delete(t),s.terminate())})(this),Promise.resolve()}}function lg(n,e,t,s={}){var h;n=Oe(n,ir);const r=Ii(e),o=n._getSettings(),a={...o,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;r&&(Dd(`https://${c}`),kd("Firestore",!0)),o.host!==pu&&o.host!==c&&Nt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d={...o,host:c,ssl:r,emulatorOptions:s};if(!xs(d,a)&&(n._setSettings(d),s.mockUserToken)){let m,p;if(typeof s.mockUserToken=="string")m=s.mockUserToken,p=Ae.MOCK_USER;else{m=Vd(s.mockUserToken,(h=n._app)==null?void 0:h.options.projectId);const _=s.mockUserToken.sub||s.mockUserToken.user_id;if(!_)throw new L(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Ae(_)}n._authCredentials=new of(new ec(m,p))}}/**
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
 */class Ze{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ze(this.firestore,e,this._query)}}class ue{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new dt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ue(this.firestore,e,this._key)}toJSON(){return{type:ue._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Hn(t,ue._jsonSchema))return new ue(e,s||null,new B(se.fromString(t.referencePath)))}}ue._jsonSchemaVersion="firestore/documentReference/1.0",ue._jsonSchema={type:fe("string",ue._jsonSchemaVersion),referencePath:fe("string")};class dt extends Ze{constructor(e,t,s){super(e,t,xi(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ue(this.firestore,null,new B(e))}withConverter(e){return new dt(this.firestore,e,this._path)}}function jt(n,e,...t){if(n=Qe(n),tc("collection","path",e),n instanceof ir){const s=se.fromString(e,...t);return Da(s),new dt(n,null,s)}{if(!(n instanceof ue||n instanceof dt))throw new L(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(se.fromString(e,...t));return Da(s),new dt(n.firestore,null,s)}}function We(n,e,...t){if(n=Qe(n),arguments.length===1&&(e=Si.newId()),tc("doc","path",e),n instanceof ir){const s=se.fromString(e,...t);return Pa(s),new ue(n,null,new B(s))}{if(!(n instanceof ue||n instanceof dt))throw new L(C.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(se.fromString(e,...t));return Pa(s),new ue(n.firestore,n instanceof dt?n.converter:null,new B(s))}}/**
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
 */const vl="AsyncQueue";class _l{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Qc(this,"async_queue_retry"),this._c=()=>{const s=Gr();s&&M(vl,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=Gr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Gr();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new ut;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!on(e))throw e;M(vl,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Ye("INTERNAL UNHANDLED ERROR: ",El(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const r=Hi.createAndSchedule(this,e,t,s,(o=>this.hc(o)));return this.tc.push(r),r}uc(){this.nc&&z(47125,{Pc:El(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function El(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class vt extends ir{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new _l,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new _l(e),this._firestoreClient=void 0,await e}}}function cg(n,e){const t=typeof n=="object"?n:zh(),s=typeof n=="string"?n:Ms,r=$h(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const o=Cd("firestore");o&&lg(r,...o)}return r}function Yi(n){if(n._terminated)throw new L(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||ug(n),n._firestoreClient}function ug(n){var s,r,o,a;const e=n._freezeSettings(),t=ag(n._databaseId,((s=n._app)==null?void 0:s.options.appId)||"",n._persistenceKey,(r=n._app)==null?void 0:r.options.apiKey,e);n._componentsProvider||(o=e.localCache)!=null&&o._offlineComponentProvider&&((a=e.localCache)!=null&&a._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new eg(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(d){const h=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(h),_online:h}})(n._componentsProvider))}/**
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
 */class Me{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Me(be.fromBase64String(e))}catch(t){throw new L(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Me(be.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Me._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Hn(e,Me._jsonSchema))return Me.fromBase64String(e.bytes)}}Me._jsonSchemaVersion="firestore/bytes/1.0",Me._jsonSchema={type:fe("string",Me._jsonSchemaVersion),bytes:fe("string")};/**
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
 */class Xi{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new L(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ee(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class or{constructor(e){this._methodName=e}}/**
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
 */class He{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new L(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new L(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return W(this._lat,e._lat)||W(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:He._jsonSchemaVersion}}static fromJSON(e){if(Hn(e,He._jsonSchema))return new He(e.latitude,e.longitude)}}He._jsonSchemaVersion="firestore/geoPoint/1.0",He._jsonSchema={type:fe("string",He._jsonSchemaVersion),latitude:fe("number"),longitude:fe("number")};/**
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
 */class $e{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,r){if(s.length!==r.length)return!1;for(let o=0;o<s.length;++o)if(s[o]!==r[o])return!1;return!0})(this._values,e._values)}toJSON(){return{type:$e._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Hn(e,$e._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new $e(e.vectorValues);throw new L(C.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}$e._jsonSchemaVersion="firestore/vectorValue/1.0",$e._jsonSchema={type:fe("string",$e._jsonSchemaVersion),vectorValues:fe("object")};/**
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
 */const dg=/^__.*__$/;class hg{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Et(e,this.data,this.fieldMask,t,this.fieldTransforms):new Qn(e,this.data,t,this.fieldTransforms)}}class gu{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Et(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function yu(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z(40011,{dataSource:n})}}class Zi{constructor(e,t,s,r,o,a){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=r,o===void 0&&this.validatePath(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Zi({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.contextWith({path:t,arrayElement:!1});return s.validatePathSegment(e),s}childContextForFieldPath(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.contextWith({path:t,arrayElement:!1});return s.validatePath(),s}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Gs(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(yu(this.dataSource)&&dg.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class fg{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||nr(e)}createContext(e,t,s,r=!1){return new Zi({dataSource:e,methodName:t,targetDoc:s,path:Ee.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ar(n){const e=n._freezeSettings(),t=nr(n._databaseId);return new fg(n._databaseId,!!e.ignoreUndefinedProperties,t)}function vu(n,e,t,s,r,o={}){const a=n.createContext(o.merge||o.mergeFields?2:0,e,t,r);to("Data must be an object, but it was:",a,s);const c=_u(s,a);let d,h;if(o.merge)d=new Le(a.fieldMask),h=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const p of o.mergeFields){const _=Lt(e,p,t);if(!a.contains(_))throw new L(C.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);Tu(m,_)||m.push(_)}d=new Le(m),h=a.fieldTransforms.filter((p=>d.covers(p.field)))}else d=null,h=a.fieldTransforms;return new hg(new xe(c),d,h)}class lr extends or{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof lr}}class eo extends or{_toFieldTransform(e){return new tm(e.path,new jn)}isEqual(e){return e instanceof eo}}function mg(n,e,t,s){const r=n.createContext(1,e,t);to("Data must be an object, but it was:",r,s);const o=[],a=xe.empty();_t(s,((d,h)=>{const m=bu(e,d,t);h=Qe(h);const p=r.childContextForFieldPath(m);if(h instanceof lr)o.push(m);else{const _=Yn(h,p);_!=null&&(o.push(m),a.set(m,_))}}));const c=new Le(o);return new gu(a,c,r.fieldTransforms)}function pg(n,e,t,s,r,o){const a=n.createContext(1,e,t),c=[Lt(e,s,t)],d=[r];if(o.length%2!=0)throw new L(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<o.length;_+=2)c.push(Lt(e,o[_])),d.push(o[_+1]);const h=[],m=xe.empty();for(let _=c.length-1;_>=0;--_)if(!Tu(h,c[_])){const S=c[_];let R=d[_];R=Qe(R);const D=a.childContextForFieldPath(S);if(R instanceof lr)h.push(S);else{const x=Yn(R,D);x!=null&&(h.push(S),m.set(S,x))}}const p=new Le(h);return new gu(m,p,a.fieldTransforms)}function gg(n,e,t,s=!1){return Yn(t,n.createContext(s?4:3,e))}function Yn(n,e){if(Eu(n=Qe(n)))return to("Unsupported field value:",e,n),_u(n,e);if(n instanceof or)return(function(s,r){if(!yu(r.dataSource))throw r.createError(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.createError(`${s._methodName}() is not currently supported inside arrays`);const o=s._toFieldTransform(r);o&&r.fieldTransforms.push(o)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(s,r){const o=[];let a=0;for(const c of s){let d=Yn(c,r.childContextForArray(a));d==null&&(d={nullValue:"NULL_VALUE"}),o.push(d),a++}return{arrayValue:{values:o}}})(n,e)}return(function(s,r){if((s=Qe(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Xf(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const o=ie.fromDate(s);return{timestampValue:Bs(r.serializer,o)}}if(s instanceof ie){const o=new ie(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Bs(r.serializer,o)}}if(s instanceof He)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Me)return{bytesValue:Lc(r.serializer,s._byteString)};if(s instanceof ue){const o=r.databaseId,a=s.firestore._databaseId;if(!a.isEqual(o))throw r.createError(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Oi(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof $e)return(function(a,c){const d=a instanceof $e?a.toArray():a;return{mapValue:{fields:{[uc]:{stringValue:dc},[Os]:{arrayValue:{values:d.map((m=>{if(typeof m!="number")throw c.createError("VectorValues must only contain numeric values.");return Ni(c.serializer,m)}))}}}}}})(s,r);if(Uc(s))return s._toProto(r.serializer);throw r.createError(`Unsupported field value: ${Qs(s)}`)})(n,e)}function _u(n,e){const t={};return rc(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_t(n,((s,r)=>{const o=Yn(r,e.childContextForField(s));o!=null&&(t[s]=o)})),{mapValue:{fields:t}}}function Eu(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ie||n instanceof He||n instanceof Me||n instanceof ue||n instanceof or||n instanceof $e||Uc(n))}function to(n,e,t){if(!Eu(t)||!nc(t)){const s=Qs(t);throw s==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+s)}}function Lt(n,e,t){if((e=Qe(e))instanceof Xi)return e._internalPath;if(typeof e=="string")return bu(n,e);throw Gs("Field path arguments must be of type string or ",n,!1,void 0,t)}const yg=new RegExp("[~\\*/\\[\\]]");function bu(n,e,t){if(e.search(yg)>=0)throw Gs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Xi(...e.split("."))._internalPath}catch{throw Gs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Gs(n,e,t,s,r){const o=s&&!s.isEmpty(),a=r!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let d="";return(o||a)&&(d+=" (found",o&&(d+=` in field ${s}`),a&&(d+=` in document ${r}`),d+=")"),new L(C.INVALID_ARGUMENT,c+n+d)}function Tu(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class vg{convertValue(e,t="none"){switch(pt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(mt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw z(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return _t(e,((r,o)=>{s[r]=this.convertValue(o,t)})),s}convertVectorValue(e){var s,r,o;const t=(o=(r=(s=e.fields)==null?void 0:s[Os].arrayValue)==null?void 0:r.values)==null?void 0:o.map((a=>ce(a.doubleValue)));return new $e(t)}convertGeoPoint(e){return new He(ce(e.latitude),ce(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Ks(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp($n(e));default:return null}}convertTimestamp(e){const t=ft(e);return new ie(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=se.fromString(e);ee(Bc(s),9688,{name:e});const r=new qn(s.get(1),s.get(3)),o=new B(s.popFirst(5));return r.isEqual(t)||Ye(`Document ${o} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
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
 */class no extends vg{constructor(e){super(),this.firestore=e}convertBytes(e){return new Me(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ue(this.firestore,null,t)}}function Rs(){return new eo("serverTimestamp")}const bl="@firebase/firestore",Tl="4.12.0";/**
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
 */function Il(n){return(function(t,s){if(typeof t!="object"||t===null)return!1;const r=t;for(const o of s)if(o in r&&typeof r[o]=="function")return!0;return!1})(n,["next","error","complete"])}/**
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
 */class Iu{constructor(e,t,s,r,o){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new ue(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new _g(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Lt("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class _g extends Iu{data(){return super.data()}}/**
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
 */function wu(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new L(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class so{}class ro extends so{}function Qr(n,e,...t){let s=[];e instanceof so&&s.push(e),s=s.concat(t),(function(o){const a=o.filter((d=>d instanceof io)).length,c=o.filter((d=>d instanceof cr)).length;if(a>1||a>0&&c>0)throw new L(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const r of s)n=r._apply(n);return n}class cr extends ro{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new cr(e,t,s)}_apply(e){const t=this._parse(e);return Au(e._query,t),new Ze(e.firestore,e.converter,ci(e._query,t))}_parse(e){const t=ar(e.firestore);return(function(o,a,c,d,h,m,p){let _;if(h.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new L(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Sl(p,m);const R=[];for(const D of p)R.push(Al(d,o,D));_={arrayValue:{values:R}}}else _=Al(d,o,p)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Sl(p,m),_=gg(c,a,p,m==="in"||m==="not-in");return he.create(h,m,_)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Jr(n,e,t){const s=e,r=Lt("where",n);return cr._create(r,s,t)}class io extends so{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new io(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:qe.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(r,o){let a=r;const c=o.getFlattenedFilters();for(const d of c)Au(a,d),a=ci(a,d)})(e._query,t),new Ze(e.firestore,e.converter,ci(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class oo extends ro{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new oo(e,t)}_apply(e){const t=(function(r,o,a){if(r.startAt!==null)throw new L(C.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new L(C.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Un(o,a)})(e._query,this._field,this._direction);return new Ze(e.firestore,e.converter,zf(e._query,t))}}function Eg(n,e="asc"){const t=e,s=Lt("orderBy",n);return oo._create(s,t)}class ao extends ro{constructor(e,t,s){super(),this.type=e,this._limit=t,this._limitType=s}static _create(e,t,s){return new ao(e,t,s)}_apply(e){return new Ze(e.firestore,e.converter,$s(e._query,this._limit,this._limitType))}}function wl(n){return ao._create("limit",n,"F")}function Al(n,e,t){if(typeof(t=Qe(t))=="string"){if(t==="")throw new L(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!_c(e)&&t.indexOf("/")!==-1)throw new L(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(se.fromString(t));if(!B.isDocumentKey(s))throw new L(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Fa(n,new B(s))}if(t instanceof ue)return Fa(n,t._key);throw new L(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Qs(t)}.`)}function Sl(n,e){if(!Array.isArray(n)||n.length===0)throw new L(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Au(n,e){const t=(function(r,o){for(const a of r)for(const c of a.getFlattenedFilters())if(o.indexOf(c.op)>=0)return c.op;return null})(n.filters,(function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new L(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function Su(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}class Pn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Dt extends Iu{constructor(e,t,s,r,o,a){super(e,t,s,r,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Cs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Lt("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new L(C.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Dt._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Dt._jsonSchemaVersion="firestore/documentSnapshot/1.0",Dt._jsonSchema={type:fe("string",Dt._jsonSchemaVersion),bundleSource:fe("string","DocumentSnapshot"),bundleName:fe("string"),bundle:fe("string")};class Cs extends Dt{data(e={}){return super.data(e)}}class Vt{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Pn(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Cs(this._firestore,this._userDataWriter,s.key,s,new Pn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new L(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(r,o){if(r._snapshot.oldDocs.isEmpty()){let a=0;return r._snapshot.docChanges.map((c=>{const d=new Cs(r._firestore,r._userDataWriter,c.doc.key,c.doc,new Pn(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);return c.doc,{type:"added",doc:d,oldIndex:-1,newIndex:a++}}))}{let a=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((c=>o||c.type!==3)).map((c=>{const d=new Cs(r._firestore,r._userDataWriter,c.doc.key,c.doc,new Pn(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);let h=-1,m=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),m=a.indexOf(c.doc.key)),{type:bg(c.type),doc:d,oldIndex:h,newIndex:m}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new L(C.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Vt._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Si.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],r=[];return this.docs.forEach((o=>{o._document!==null&&(t.push(o._document),s.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),r.push(o.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function bg(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z(61501,{type:n})}}/**
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
 */Vt._jsonSchemaVersion="firestore/querySnapshot/1.0",Vt._jsonSchema={type:fe("string",Vt._jsonSchemaVersion),bundleSource:fe("string","QuerySnapshot"),bundleName:fe("string"),bundle:fe("string")};function Wr(n){n=Oe(n,Ze);const e=Oe(n.firestore,vt),t=Yi(e),s=new no(e);return wu(n._query),rg(t,n._query).then((r=>new Vt(e,s,n,r)))}function Tg(n,e,t){n=Oe(n,ue);const s=Oe(n.firestore,vt),r=Su(n.converter,e,t),o=ar(s);return ur(s,[vu(o,"setDoc",n._key,r,n.converter!==null,t).toMutation(n._key,Fe.none())])}function bs(n,e,t,...s){n=Oe(n,ue);const r=Oe(n.firestore,vt),o=ar(r);let a;return a=typeof(e=Qe(e))=="string"||e instanceof Xi?pg(o,"updateDoc",n._key,e,t,s):mg(o,"updateDoc",n._key,e),ur(r,[a.toMutation(n._key,Fe.exists(!0))])}function Rl(n){return ur(Oe(n.firestore,vt),[new ki(n._key,Fe.none())])}function Kr(n,e){const t=Oe(n.firestore,vt),s=We(n),r=Su(n.converter,e),o=ar(n.firestore);return ur(t,[vu(o,"addDoc",s._key,r,n.converter!==null,{}).toMutation(s._key,Fe.exists(!1))]).then((()=>s))}function Cl(n,...e){var h,m,p;n=Qe(n);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||Il(e[s])||(t=e[s++]);const r={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Il(e[s])){const _=e[s];e[s]=(h=_.next)==null?void 0:h.bind(_),e[s+1]=(m=_.error)==null?void 0:m.bind(_),e[s+2]=(p=_.complete)==null?void 0:p.bind(_)}let o,a,c;if(n instanceof ue)a=Oe(n.firestore,vt),c=xi(n._key.path),o={next:_=>{e[s]&&e[s](Ig(a,n,_))},error:e[s+1],complete:e[s+2]};else{const _=Oe(n,Ze);a=Oe(_.firestore,vt),c=_._query;const S=new no(a);o={next:R=>{e[s]&&e[s](new Vt(a,S,_,R))},error:e[s+1],complete:e[s+2]},wu(n._query)}const d=Yi(a);return sg(d,c,r,o)}function ur(n,e){const t=Yi(n);return ig(t,e)}function Ig(n,e,t){const s=t.docs.get(e._key),r=new no(n);return new Dt(n,r,e._key,s,new Pn(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){sf(jh),ks(new Mn("firestore",((s,{instanceIdentifier:r,options:o})=>{const a=s.getProvider("app").getImmediate(),c=new vt(new af(s.getProvider("auth-internal")),new uf(a,s.getProvider("app-check-internal")),Rf(a,r),a);return o={useFetchStreams:t,...o},c._setSettings(o),c}),"PUBLIC").setMultipleInstances(!0)),Jt(bl,Tl,e),Jt(bl,Tl,"esm2020")})();const wg={apiKey:"AIzaSyD90SkLA57LCNnPRCDp5-sA6x2lF0oasMc",authDomain:"comebiblia-43643.firebaseapp.com",projectId:"comebiblia-43643",storageBucket:"comebiblia-43643.firebasestorage.app",messagingSenderId:"704190300094",appId:"1:704190300094:web:0a726168ed731032d803ef",measurementId:"G-DZPX4SB193"},Ag=zl(wg),De=cg(Ag),Ru="player",Cu={name:"Jugador",avatar:"😊",level:1,xp:0,coins:50,totalGamesPlayed:0,totalCorrectAnswers:0,totalScore:0,gamesCompleted:{},bestScores:{},leaguePoints:0,league:"Pescador",createdAt:Date.now()},Ln=[0,100,250,500,800,1200,1700,2300,3e3,3800,4700,5700,6800,8e3,9500,11e3,13e3,15e3,17500,2e4],Pl=["Semilla","Brote","Plantita","Arbusto","Árbol Joven","Roble","Cedro del Líbano","Discípulo","Apóstol","Profeta","Siervo Fiel","Guerrero de Fe","Sabio","Maestro","Pastor","Evangelista","Misionero","Guardián","Ángel","Leyenda Bíblica"],Sg=["😊","😇","🙏","✝️","⭐","👑","🕊️","🌟","💪","🎯","📖","🏆"];let Q=null;function Re(){return Q||(Q=Ml(Ru,{...Cu})),{...Q}}function $t(){Ll(Ru,Q)}function Pu(n){Q||Re(),Q.name=n.trim()||"Jugador",$t()}function Rg(n){Q||Re(),Q.avatar=n,$t()}function dr(n){Q||Re(),Q.xp+=n;let e=!1;for(;Q.level<Ln.length&&Q.xp>=Ln[Q.level];)Q.level++,e=!0;return $t(),e}function hr(n){Q||Re(),Q.coins+=n,$t(),fr()}function Xn(n,e,t=0){Q||Re(),Q.totalGamesPlayed++,Q.totalScore+=e,Q.totalCorrectAnswers+=t,Q.gamesCompleted[n]||(Q.gamesCompleted[n]=0),Q.gamesCompleted[n]++,(!Q.bestScores[n]||e>Q.bestScores[n])&&(Q.bestScores[n]=e),$t()}function Cg(){const n=Re();if(n.level>=Ln.length)return{current:n.xp,needed:n.xp,progress:1};const e=Ln[n.level-1]||0,t=Ln[n.level],s=(n.xp-e)/(t-e);return{current:n.xp-e,needed:t-e,progress:Math.min(s,1)}}function Pg(n=null){const e=n||Re().level;return Pl[Math.min(e-1,Pl.length-1)]}function Dg(){return[...Sg]}function Vg(){Q={...Cu,createdAt:Date.now()},$t(),fr()}function fr(){const n=document.getElementById("coin-count");if(n){const e=Re();n.textContent=e.coins}}function Dl(n){Q||Re(),Q.leaguePoints=(Q.leaguePoints||0)+n,Q.leaguePoints<0&&(Q.leaguePoints=0);const e=Q.leaguePoints;e>=2e3?Q.league="Profeta":e>=1200?Q.league="Apóstol":e>=600?Q.league="Evangelista":e>=200?Q.league="Discípulo":Q.league="Pescador",$t(),Du()}async function Du(){const n=localStorage.getItem("bb_player_id");if(n&&De)try{await Tg(We(De,"bb_users",n),{name:Q.name,avatar:Q.avatar,leaguePoints:Q.leaguePoints||0,league:Q.league||"Pescador",updatedAt:Rs()},{merge:!0})}catch(e){console.error("Error syncing player state to Firestore:",e)}}const lo=[];function bt(n){lo.push(n)}function xg(){return[...lo]}function Vu(n){return lo.find(e=>e.id===n)}const Hs=[{text:"Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.",ref:"Juan 3:16"},{text:"Todo lo puedo en Cristo que me fortalece.",ref:"Filipenses 4:13"},{text:"Jehová es mi pastor; nada me faltará.",ref:"Salmos 23:1"},{text:"Confía en Jehová con todo tu corazón, y no te apoyes en tu propia prudencia.",ref:"Proverbios 3:5"},{text:"Y sabemos que a los que aman a Dios, todas las cosas les ayudan a bien.",ref:"Romanos 8:28"},{text:"No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios.",ref:"Isaías 41:10"},{text:"Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal.",ref:"Jeremías 29:11"},{text:"El Señor es mi luz y mi salvación; ¿de quién temeré?",ref:"Salmos 27:1"},{text:"Mas el fruto del Espíritu es amor, gozo, paz, paciencia, benignidad, bondad, fe.",ref:"Gálatas 5:22"},{text:"Esforzaos y cobrad ánimo; no temáis, ni tengáis miedo de ellos.",ref:"Deuteronomio 31:6"},{text:"En el principio creó Dios los cielos y la tierra.",ref:"Génesis 1:1"},{text:"Clama a mí, y yo te responderé, y te enseñaré cosas grandes y ocultas que tú no conoces.",ref:"Jeremías 33:3"},{text:"Porque donde están dos o tres congregados en mi nombre, allí estoy yo en medio de ellos.",ref:"Mateo 18:20"},{text:"Yo soy el camino, la verdad y la vida; nadie viene al Padre sino por mí.",ref:"Juan 14:6"},{text:"Dad gracias en todo, porque esta es la voluntad de Dios para con vosotros en Cristo Jesús.",ref:"1 Tesalonicenses 5:18"},{text:"El amor es paciente, es bondadoso. El amor no es envidioso ni jactancioso ni orgulloso.",ref:"1 Corintios 13:4"},{text:"Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios.",ref:"Efesios 2:8"},{text:"Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.",ref:"Mateo 11:28"},{text:"He aquí, yo estoy a la puerta y llamo; si alguno oye mi voz y abre la puerta, entraré a él.",ref:"Apocalipsis 3:20"},{text:"Bienaventurados los pacificadores, porque ellos serán llamados hijos de Dios.",ref:"Mateo 5:9"},{text:"Lámpara es a mis pies tu palabra, y lumbrera a mi camino.",ref:"Salmos 119:105"},{text:"Amarás al Señor tu Dios con todo tu corazón, y con toda tu alma, y con toda tu mente.",ref:"Mateo 22:37"},{text:"Los cielos cuentan la gloria de Dios, y el firmamento anuncia la obra de sus manos.",ref:"Salmos 19:1"},{text:"No se amolden al mundo actual, sino sean transformados mediante la renovación de su mente.",ref:"Romanos 12:2"},{text:"Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes.",ref:"Josué 1:9"},{text:"Ama a tu prójimo como a ti mismo.",ref:"Marcos 12:31"},{text:"Pedid, y se os dará; buscad, y hallaréis; llamad, y se os abrirá.",ref:"Mateo 7:7"},{text:"El Señor es bueno; es refugio en el día de la angustia, y conoce a los que en Él confían.",ref:"Nahúm 1:7"},{text:"Alégrate, joven, en tu juventud; y tome placer tu corazón en los días de tu adolescencia.",ref:"Eclesiastés 11:9"},{text:"Grande es el Señor y digno de toda alabanza; su grandeza es insondable.",ref:"Salmos 145:3"},{text:"Si Dios es por nosotros, ¿quién contra nosotros?",ref:"Romanos 8:31"},{text:"Yo he venido para que tengan vida, y para que la tengan en abundancia.",ref:"Juan 10:10"},{text:"Sean fuertes y valientes. No teman ni se asusten, porque el Señor su Dios siempre los acompañará.",ref:"Deuteronomio 31:6"},{text:"Así brille la luz de ustedes delante de todos, para que vean sus buenas obras y glorifiquen al Padre.",ref:"Mateo 5:16"},{text:"Encomienda al Señor tu camino; confía en él, y él actuará.",ref:"Salmos 37:5"},{text:"Instruye al niño en su camino, y aun cuando fuere viejo no se apartará de él.",ref:"Proverbios 22:6"},{text:"El que habita al abrigo del Altísimo morará bajo la sombra del Omnipotente.",ref:"Salmos 91:1"},{text:"Acerquémonos con confianza al trono de la gracia para recibir misericordia y hallar gracia.",ref:"Hebreos 4:16"},{text:"Deléitate asimismo en Jehová, y él te concederá las peticiones de tu corazón.",ref:"Salmos 37:4"},{text:"Con amor eterno te he amado; por tanto, te prolongué mi misericordia.",ref:"Jeremías 31:3"}];function xu(){const n=new Date,e=Math.floor((n-new Date(n.getFullYear(),0,0))/864e5);return Hs[e%Hs.length]}function Ng(n,e=[]){return Hs.filter(r=>!e.includes(r.ref)).sort(()=>Math.random()-.5).slice(0,n)}const kg=[{name:"María",avatar:"👩",score:2800,level:8},{name:"Daniel",avatar:"👦",score:2400,level:7},{name:"Sara",avatar:"👧",score:2100,level:6},{name:"José",avatar:"🧑",score:1800,level:5},{name:"Rebeca",avatar:"👩‍🦱",score:1500,level:5},{name:"David",avatar:"👨",score:1200,level:4},{name:"Esther",avatar:"👩‍🦰",score:900,level:3},{name:"Pablo",avatar:"🧔",score:600,level:2},{name:"Ana",avatar:"👱‍♀️",score:400,level:2},{name:"Samuel",avatar:"👶",score:200,level:1}];function Nu(){const n=Re(),e=[...kg,{name:n.name,avatar:n.avatar,score:n.totalScore,level:n.level,isCurrentPlayer:!0}];return e.sort((t,s)=>s.score-t.score),e.map((t,s)=>({...t,position:s+1}))}function co(){const n=Nu(),e=n.find(t=>t.isCurrentPlayer);return(e==null?void 0:e.position)||n.length}function Lg(n){var a,c;const e=Re(),t=xu(),s=xg(),r=co(),o=["linear-gradient(135deg, #4361ee, #6c83f7)","linear-gradient(135deg, #a855f7, #c084fc)","linear-gradient(135deg, #06d6a0, #34d399)","linear-gradient(135deg, #fb923c, #fdba74)","linear-gradient(135deg, #f472b6, #f9a8d4)"];n.innerHTML=`
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
            <div class="game-card-icon" style="background: ${o[h%o.length]}">
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
  `,n.querySelectorAll(".game-card").forEach(d=>{d.addEventListener("click",()=>{const h=d.dataset.gameId;pe("game",{gameId:h})})}),(a=document.getElementById("verse-card-home"))==null||a.addEventListener("click",()=>{pe("verse")}),(c=document.getElementById("btn-ranking"))==null||c.addEventListener("click",()=>{pe("ranking")})}function te(n,e="info",t=3e3){const s=document.getElementById("toast-container");if(!s)return;const r=document.createElement("div");r.className=`toast toast-${e}`;const o={success:"✅",error:"❌",info:"ℹ️",reward:"🎁"};r.innerHTML=`<span>${o[e]||"📢"}</span><span>${n}</span>`,s.appendChild(r),setTimeout(()=>{r.classList.add("removing"),setTimeout(()=>r.remove(),300)},t)}function Mg(n,e,t=[]){const s=document.getElementById("modal-overlay");if(!s)return;const r=t.map(o=>`<button class="btn ${o.class||"btn-primary"} btn-block" id="modal-btn-${o.id}">${o.label}</button>`).join("");s.innerHTML=`
    <div class="modal">
      <h2>${n}</h2>
      <p>${e}</p>
      <div class="flex flex-col gap-sm">${r}</div>
    </div>
  `,s.classList.remove("hidden"),t.forEach(o=>{const a=document.getElementById(`modal-btn-${o.id}`);a&&a.addEventListener("click",()=>{s.classList.add("hidden"),o.onClick&&o.onClick()})})}function Ne(n){const e=[...n];for(let t=e.length-1;t>0;t--){const s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}return e}function Vl(n){return n>=1e3?(n/1e3).toFixed(1)+"K":n.toString()}function Og(n){var s,r;const e=xu(),t=Ng(5,[e.ref]);n.innerHTML=`
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
        ${t.map(o=>`
          <div class="verse-list-item">
            <div class="verse-list-text">"${o.text}"</div>
            <div class="verse-list-ref">— ${o.ref}</div>
          </div>
        `).join("")}
      </div>

      <div class="verse-footer">
        <p class="text-sm text-muted">Cada día un nuevo versículo para meditar 🙏</p>
      </div>
    </div>
  `,(s=document.getElementById("btn-share-verse"))==null||s.addEventListener("click",()=>{var a;const o=`"${e.text}" — ${e.ref}`;navigator.share?navigator.share({title:"Versículo del Día",text:o}).catch(()=>{}):(a=navigator.clipboard)==null||a.writeText(o).then(()=>{te("Versículo copiado al portapapeles","success")})}),(r=document.getElementById("btn-copy-verse"))==null||r.addEventListener("click",()=>{var a;const o=`"${e.text}" — ${e.ref}`;(a=navigator.clipboard)==null||a.writeText(o).then(()=>{te("Versículo copiado ✅","success")}).catch(()=>{te("No se pudo copiar","error")})})}const ku="achievements",uo=[{id:"first_game",name:"Primeros Pasos",desc:"Completa tu primer juego",icon:"🐣",coins:10},{id:"games_5",name:"Jugador Activo",desc:"Completa 5 juegos",icon:"🎮",coins:25},{id:"games_25",name:"Veterano",desc:"Completa 25 juegos",icon:"🏅",coins:50},{id:"games_100",name:"Leyenda",desc:"Completa 100 juegos",icon:"🏆",coins:100},{id:"perfect_trivia",name:"Erudito Bíblico",desc:"Puntuación perfecta en Trivia",icon:"🧠",coins:30},{id:"trivia_10",name:"Sabio",desc:"Completa 10 partidas de Trivia",icon:"📚",coins:25},{id:"character_5",name:"Detective Bíblico",desc:"Adivina 5 personajes",icon:"🔍",coins:20},{id:"verse_master",name:"Memorizador",desc:"Completa 10 versículos",icon:"📖",coins:30},{id:"word_hunter",name:"Cazapalabras",desc:"Completa 5 sopas de letras",icon:"🔤",coins:20},{id:"memory_king",name:"Rey de la Memoria",desc:"Completa 5 juegos de Memoria",icon:"🃏",coins:20},{id:"level_5",name:"Discípulo",desc:"Alcanza el nivel 5",icon:"⭐",coins:30},{id:"level_10",name:"Apóstol",desc:"Alcanza el nivel 10",icon:"🌟",coins:50},{id:"coins_500",name:"Tesoro",desc:"Acumula 500 monedas",icon:"💰",coins:25},{id:"all_games",name:"Explorador",desc:"Juega todos los juegos",icon:"🗺️",coins:40},{id:"streak_3",name:"Racha Divina",desc:"3 respuestas correctas seguidas",icon:"🔥",coins:15},{id:"fast_answer",name:"Rayo",desc:"Responde en menos de 3 segundos",icon:"⚡",coins:15}];let Ps=null;function ho(){return Ps||(Ps=Ml(ku,{})),Ps}function we(n){const e=ho();if(e[n])return!1;const t=uo.find(s=>s.id===n);return t?(e[n]={unlockedAt:Date.now()},Ps=e,Ll(ku,e),te(`🏆 ¡Logro desbloqueado: ${t.name}!`,"reward"),!0):!1}function Lu(){return Object.keys(ho()).length}function Mu(){return uo.length}function Fg(){const n=ho();return uo.map(e=>{var t;return{...e,unlocked:!!n[e.id],unlockedAt:((t=n[e.id])==null?void 0:t.unlockedAt)||null}})}function $g(){const n=Re();n.totalGamesPlayed>=1&&we("first_game"),n.totalGamesPlayed>=5&&we("games_5"),n.totalGamesPlayed>=25&&we("games_25"),n.totalGamesPlayed>=100&&we("games_100"),n.level>=5&&we("level_5"),n.level>=10&&we("level_10"),n.coins>=500&&we("coins_500"),["trivia","characters","verse-complete","word-search","memory"].every(s=>(n.gamesCompleted[s]||0)>0)&&we("all_games"),(n.gamesCompleted.trivia||0)>=10&&we("trivia_10"),(n.gamesCompleted.characters||0)>=5&&we("character_5"),(n.gamesCompleted["verse-complete"]||0)>=10&&we("verse_master"),(n.gamesCompleted["word-search"]||0)>=5&&we("word_hunter"),(n.gamesCompleted.memory||0)>=5&&we("memory_king")}function qg(n){var d,h,m;const e=Re(),t=Cg(),s=Pg(),r=Lu(),o=Mu(),a=co(),c=Dg();n.innerHTML=`
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
          <div class="profile-stat-value">#${a}</div>
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
            <span class="stats-value">${r} / ${o}</span>
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
  `,(d=document.getElementById("btn-change-avatar"))==null||d.addEventListener("click",()=>{var p;(p=document.getElementById("avatar-picker"))==null||p.classList.toggle("hidden")}),(h=document.getElementById("btn-close-avatar-picker"))==null||h.addEventListener("click",()=>{var p;(p=document.getElementById("avatar-picker"))==null||p.classList.add("hidden")}),document.querySelectorAll(".avatar-option").forEach(p=>{p.addEventListener("click",()=>{const _=p.dataset.avatar;Rg(_),document.getElementById("profile-avatar").textContent=_,document.querySelectorAll(".avatar-option").forEach(S=>S.classList.remove("selected")),p.classList.add("selected"),te("Avatar actualizado ✅","success")})}),(m=document.getElementById("btn-edit-name"))==null||m.addEventListener("click",()=>{const p=prompt("Ingresa tu nombre:",e.name);p&&p.trim()&&(Pu(p.trim()),document.getElementById("profile-name").textContent=p.trim(),te("Nombre actualizado ✅","success"))})}function Bg(n){const e=Fg(),t=Lu(),s=Mu(),r=Math.round(t/s*100);n.innerHTML=`
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
        ${e.map(o=>`
          <div class="achievement-card ${o.unlocked?"unlocked":"locked"}">
            <div class="achievement-icon">${o.unlocked?o.icon:"🔒"}</div>
            <div class="achievement-info">
              <div class="achievement-name">${o.name}</div>
              <div class="achievement-desc">${o.desc}</div>
              ${o.unlocked?`<div class="achievement-unlocked-date">✅ ${new Date(o.unlockedAt).toLocaleDateString("es")}</div>`:`<div class="achievement-reward">🪙 +${o.coins}</div>`}
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
  `,(s=document.getElementById("setting-name"))==null||s.addEventListener("click",()=>{const o=prompt("Ingresa tu nombre:",e.name);o&&o.trim()&&(Pu(o.trim()),document.getElementById("display-name").textContent=o.trim(),te("Nombre actualizado ✅","success"))});const t=document.getElementById("toggle-dark");t&&(t.checked=!document.body.classList.contains("light-theme"),t.addEventListener("change",o=>{o.target.checked?(document.body.classList.remove("light-theme"),localStorage.setItem("theme","dark")):(document.body.classList.add("light-theme"),localStorage.setItem("theme","light"))})),(r=document.getElementById("btn-reset-data"))==null||r.addEventListener("click",()=>{Mg("⚠️ ¿Estás seguro?","Se borrarán todas tus monedas, logros, estadísticas y progreso. Esta acción no se puede deshacer.",[{id:"confirm-reset",label:"🗑️ Sí, borrar todo",class:"btn-danger",onClick:()=>{yd(),Vg(),te("Datos borrados","info"),pe("home")}},{id:"cancel-reset",label:"Cancelar",class:"btn-secondary"}])})}function jg(n){const e=Nu(),t=co(),s=["🥇","🥈","🥉"];n.innerHTML=`
    <div class="ranking-screen">
      <div class="ranking-header">
        <div class="ranking-podium">
          ${e.slice(0,3).map((r,o)=>`
            <div class="podium-item podium-${o+1} ${r.isCurrentPlayer?"is-player":""}">
              <div class="podium-avatar">${r.avatar}</div>
              <div class="podium-medal">${s[o]}</div>
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
        ${e.map((r,o)=>`
          <div class="ranking-row ${r.isCurrentPlayer?"is-player":""}">
            <div class="ranking-pos">
              ${o<3?s[o]:`#${r.position}`}
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
  `}const Pt={easy:[{q:"¿Quién construyó el arca?",options:["Abraham","Noé","Moisés","David"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuántos días tomó crear Dios el mundo?",options:["5","6","7","3"],answer:1,category:"Creación"},{q:"¿Quién fue el primer hombre?",options:["Noé","Abel","Adán","Set"],answer:2,category:"Creación"},{q:"¿Quién fue la primera mujer?",options:["Sara","Eva","Rebeca","María"],answer:1,category:"Creación"},{q:"¿En qué ciudad nació Jesús?",options:["Nazaret","Jerusalén","Belén","Capernaúm"],answer:2,category:"Nuevo Testamento"},{q:"¿Cuántos discípulos tuvo Jesús?",options:["10","11","12","13"],answer:2,category:"Nuevo Testamento"},{q:"¿Quién mató a Goliat?",options:["Saúl","David","Jonatán","Sansón"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué animal habló con Balaam?",options:["Un perro","Una burra","Un león","Una serpiente"],answer:1,category:"Antiguo Testamento"},{q:"¿De dónde era la madre de Jesús?",options:["Belén","Jerusalén","Nazaret","Egipto"],answer:2,category:"Nuevo Testamento"},{q:"¿Quién fue tragado por un gran pez?",options:["Pedro","Elías","Jonás","Daniel"],answer:2,category:"Antiguo Testamento"},{q:"¿Cuál fue el primer milagro de Jesús?",options:["Caminar sobre agua","Convertir agua en vino","Sanar un ciego","Multiplicar panes"],answer:1,category:"Milagros"},{q:"¿Quién bautizó a Jesús?",options:["Pedro","Juan el Bautista","Pablo","Santiago"],answer:1,category:"Nuevo Testamento"},{q:"¿En qué monte recibió Moisés los mandamientos?",options:["Carmelo","Sinaí","Ararat","Sión"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuántos mandamientos dio Dios?",options:["5","7","10","12"],answer:2,category:"Antiguo Testamento"},{q:"¿Quién negó a Jesús tres veces?",options:["Judas","Pedro","Tomás","Juan"],answer:1,category:"Nuevo Testamento"},{q:"¿Cuántos libros tiene la Biblia?",options:["55","66","72","39"],answer:1,category:"General"},{q:"¿Quién fue el hermano de Moisés?",options:["Josué","Aarón","Caleb","Leví"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué instrumento tocaba David?",options:["Flauta","Arpa","Trompeta","Tambor"],answer:1,category:"Antiguo Testamento"},{q:"¿Quién fue vendido por sus hermanos?",options:["Benjamín","José","Rubén","Judá"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuál es el primer libro de la Biblia?",options:["Éxodo","Génesis","Salmos","Mateo"],answer:1,category:"General"},{q:"¿Qué símbolo apareció después del diluvio?",options:["Una estrella","Un arcoíris","Una paloma","Una nube"],answer:1,category:"Antiguo Testamento"},{q:"¿En qué se convirtió la esposa de Lot?",options:["Piedra","Estatua de sal","Arena","Ceniza"],answer:1,category:"Antiguo Testamento"},{q:"¿Quién era el rey más sabio?",options:["David","Salomón","Saúl","Josías"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué fruta comieron Adán y Eva?",options:["Manzana","Fruto prohibido","Uva","Higo"],answer:1,category:"Creación"},{q:"¿Quién era el padre de Juan el Bautista?",options:["José","Zacarías","Simeón","Elías"],answer:1,category:"Nuevo Testamento"}],medium:[{q:"¿Cuántos años vivió Matusalén?",options:["800","900","969","1000"],answer:2,category:"Antiguo Testamento"},{q:"¿Quién era el padre de Salomón?",options:["Abraham","David","Saúl","Moisés"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué profeta subió al cielo en un carro de fuego?",options:["Elías","Eliseo","Isaías","Jeremías"],answer:0,category:"Profetas"},{q:"¿Cuántos años duró el pueblo de Israel en el desierto?",options:["20","30","40","50"],answer:2,category:"Antiguo Testamento"},{q:"¿Quién interpretó los sueños del Faraón?",options:["Moisés","Daniel","José","Aarón"],answer:2,category:"Antiguo Testamento"},{q:"¿Quién escribió la mayor parte de los Salmos?",options:["Salomón","David","Moisés","Asaf"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuál era la profesión de Pablo antes de ser apóstol?",options:["Pescador","Carpintero","Fabricante de tiendas","Recaudador"],answer:2,category:"Nuevo Testamento"},{q:"¿Quién fue el primer mártir cristiano?",options:["Pedro","Esteban","Santiago","Pablo"],answer:1,category:"Nuevo Testamento"},{q:"¿En qué isla estuvo exiliado Juan?",options:["Creta","Chipre","Patmos","Malta"],answer:2,category:"Nuevo Testamento"},{q:"¿Cuántas tribus de Israel había?",options:["10","11","12","13"],answer:2,category:"Antiguo Testamento"},{q:"¿Quién fue el sucesor de Moisés?",options:["Caleb","Josué","Aarón","Eleazar"],answer:1,category:"Antiguo Testamento"},{q:"¿Dónde fue crucificado Jesús?",options:["Monte Sión","Getsemaní","Gólgota","Betania"],answer:2,category:"Nuevo Testamento"},{q:"¿Quién fue arrojado al foso de los leones?",options:["Jonás","Daniel","Eliseo","Jeremías"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuál es el libro más corto del Nuevo Testamento?",options:["Judas","2 Juan","3 Juan","Filemón"],answer:2,category:"General"},{q:"¿Quién fue la esposa de Abraham?",options:["Agar","Sara","Lea","Rebeca"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué apóstol era recaudador de impuestos?",options:["Pedro","Mateo","Juan","Andrés"],answer:1,category:"Nuevo Testamento"},{q:"¿Cuántos panes usó Jesús para alimentar a 5000?",options:["3","5","7","12"],answer:1,category:"Milagros"},{q:"¿Quién traicionó a Jesús?",options:["Pedro","Tomás","Judas Iscariote","Bartolomé"],answer:2,category:"Nuevo Testamento"},{q:"¿Cómo murió Sansón?",options:["En batalla","Derribó el templo","Por enfermedad","Crucificado"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué reina visitó a Salomón por su sabiduría?",options:["Jezabel","Ester","Reina de Sabá","Betsabé"],answer:2,category:"Antiguo Testamento"},{q:"¿Cuántos libros del Nuevo Testamento escribió Pablo?",options:["7","10","13","15"],answer:2,category:"General"},{q:"¿Quién fue el primer rey de Israel?",options:["David","Salomón","Saúl","Samuel"],answer:2,category:"Antiguo Testamento"},{q:"¿Qué lenguaje hablaba Jesús?",options:["Hebreo","Griego","Arameo","Latín"],answer:2,category:"General"},{q:"¿Quién cortó la oreja de un soldado en Getsemaní?",options:["Juan","Pedro","Santiago","Judas"],answer:1,category:"Nuevo Testamento"},{q:"¿Cuántos días estuvo Lázaro muerto antes de ser resucitado?",options:["2","3","4","7"],answer:2,category:"Milagros"}],hard:[{q:"¿Cuál es el versículo más corto de la Biblia?",options:["Juan 3:16","Juan 11:35","Éxodo 20:13","1 Tesalonicenses 5:16"],answer:1,category:"General"},{q:"¿Quién era Melquisedec?",options:["Un profeta","Rey y sacerdote de Salem","Un ángel","Un juez de Israel"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuántos años reinó David en Jerusalén?",options:["20","33","40","45"],answer:1,category:"Antiguo Testamento"},{q:"¿Quién fue la primera persona en ver a Jesús resucitado?",options:["Pedro","Juan","María Magdalena","Tomás"],answer:2,category:"Nuevo Testamento"},{q:"¿En qué río fue bautizado Jesús?",options:["Nilo","Éufrates","Jordán","Tigris"],answer:2,category:"Nuevo Testamento"},{q:"¿Qué iglesia criticó Jesús por ser tibia?",options:["Éfeso","Sardis","Filadelfia","Laodicea"],answer:3,category:"Apocalipsis"},{q:"¿Quién era Nicodemo?",options:["Sacerdote","Fariseo","Saduceo","Centurión"],answer:1,category:"Nuevo Testamento"},{q:"¿Cuántos hijos tuvo Jacob?",options:["10","11","12","13"],answer:2,category:"Antiguo Testamento"},{q:"¿Qué profeta fue llamado por Dios siendo niño?",options:["Isaías","Jeremías","Samuel","Daniel"],answer:2,category:"Profetas"},{q:"¿Cuál es el salmo más largo?",options:["Salmo 23","Salmo 91","Salmo 119","Salmo 150"],answer:2,category:"General"},{q:"¿Quién fue el suegro de Moisés?",options:["Labán","Jetro","Ragüel","Éter"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuántas plagas envió Dios a Egipto?",options:["7","9","10","12"],answer:2,category:"Antiguo Testamento"},{q:"¿Quién construyó el primer templo en Jerusalén?",options:["David","Salomón","Herodes","Zorobabel"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué don especial tenía José el hijo de Jacob?",options:["Fuerza","Interpretar sueños","Profecía","Sabiduría"],answer:1,category:"Antiguo Testamento"},{q:"¿En qué libro se encuentra el capítulo del amor?",options:["Romanos","1 Corintios","Efesios","Filipenses"],answer:1,category:"Nuevo Testamento"},{q:"¿Cuántos jinetes del Apocalipsis hay?",options:["3","4","7","12"],answer:1,category:"Apocalipsis"},{q:"¿Quién era Barrabás?",options:["Discípulo","Sacerdote","Prisionero liberado","Soldado romano"],answer:2,category:"Nuevo Testamento"},{q:"¿En qué se transformó la vara de Moisés ante Faraón?",options:["Fuego","Serpiente","Flores","Agua"],answer:1,category:"Antiguo Testamento"},{q:"¿Quién escribió el Apocalipsis?",options:["Pablo","Pedro","Juan","Lucas"],answer:2,category:"General"},{q:"¿Cuántas puertas tiene la Nueva Jerusalén?",options:["7","10","12","24"],answer:2,category:"Apocalipsis"},{q:"¿Qué patriarca vivió en Ur de los Caldeos?",options:["Isaac","Abraham","Jacob","Noé"],answer:1,category:"Antiguo Testamento"},{q:"¿Quién era Bernabé?",options:["Apóstol original","Compañero de Pablo","Profeta del AT","Juez"],answer:1,category:"Nuevo Testamento"},{q:"¿Qué mujer se disfrazó para consultar a una médium?",options:["Jezabel","Saúl","Dalila","Mical"],answer:1,category:"Antiguo Testamento"},{q:"¿En qué batalla se detuvo el sol?",options:["Jericó","Gabaón","Hai","Betel"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué apóstol fue arrebatado al tercer cielo?",options:["Juan","Pedro","Pablo","Santiago"],answer:2,category:"Nuevo Testamento"}]};function zg(n,e,t="easy"){const r={easy:1,medium:1.5,hard:2}[t]||1,o=Math.floor(e*.5*r),a=Math.floor(e*r);return{coins:Math.max(o,5),xp:Math.max(a,10)}}function Zn(n,e,t=0,s="easy"){const r=zg(n,e,s);hr(r.coins);const o=dr(r.xp);if(o){const a=Re();te(`🎉 ¡Subiste al nivel ${a.level}!`,"reward")}return setTimeout(()=>$g(),500),{...r,leveledUp:o}}function Gg(n){const s=[...Pt.easy.map(V=>({...V,diff:"easy"})),...Pt.medium.map(V=>({...V,diff:"medium"})),...Pt.hard.map(V=>({...V,diff:"hard"}))],r=Ne(s).slice(0,10);let o=0,a=0,c=0,d=0,h=null,m=20,p=!1;function _(){const V=r[o];p=!1,m=20;const k={easy:"Fácil",medium:"Medio",hard:"Difícil"},$={easy:"var(--color-success)",medium:"var(--color-gold)",hard:"var(--color-error)"};n.innerHTML=`
      <div class="trivia-game">
        <div class="trivia-header">
          <div class="trivia-progress">
            <span>Pregunta ${o+1} / 10</span>
            <span class="trivia-score">⭐ ${a}</span>
          </div>
          <div class="trivia-progress-bar">
            <div class="trivia-progress-fill" style="width: ${o/10*100}%"></div>
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
            <span id="timer-text" class="timer-text">${m}</span>
          </div>
        </div>

        <div class="trivia-category">
          <span class="badge" style="background: ${$[V.diff]}">${k[V.diff]}</span>
          <span class="text-sm text-muted">${V.category}</span>
        </div>

        <div class="trivia-question">${V.q}</div>

        <div class="trivia-options">
          ${V.options.map((O,q)=>`
            <button class="trivia-option" data-index="${q}">
              <span class="option-letter">${String.fromCharCode(65+q)}</span>
              <span>${O}</span>
            </button>
          `).join("")}
        </div>

        ${d>=3?`<div class="streak-indicator">🔥 ¡Racha de ${d}!</div>`:""}
      </div>
    `,S(),n.querySelectorAll(".trivia-option").forEach(O=>{O.addEventListener("click",()=>{if(p)return;const q=parseInt(O.dataset.index);R(q,V)})})}function S(){clearInterval(h);const V=document.getElementById("timer-ring"),k=2*Math.PI*42;h=setInterval(()=>{m--;const $=document.getElementById("timer-text");if($&&($.textContent=m),V){const O=k*(1-m/20);V.setAttribute("stroke-dashoffset",O),m<=5&&V.setAttribute("stroke","var(--color-error)")}m<=0&&(clearInterval(h),D())},1e3)}function R(V,k){p=!0,clearInterval(h);const $=n.querySelectorAll(".trivia-option"),O=V===k.answer;if($.forEach((q,U)=>{q.disabled=!0,U===k.answer&&q.classList.add("correct"),U===V&&!O&&q.classList.add("wrong")}),O){c++,d++;const q=Math.floor(m*2),U={easy:10,medium:20,hard:30},b=10+q+(U[k.diff]||0);a+=b,d>=3&&we("streak_3"),m>=17&&we("fast_answer")}else d=0;setTimeout(()=>{o++,o<10?_():x()},1500)}function D(){p=!0,d=0;const V=r[o];n.querySelectorAll(".trivia-option").forEach(($,O)=>{$.disabled=!0,O===V.answer&&$.classList.add("correct")}),te("⏰ ¡Se acabó el tiempo!","error"),setTimeout(()=>{o++,o<10?_():x()},1500)}function x(){var O,q;clearInterval(h);const V=Math.round(c/10*100);V===100&&we("perfect_trivia");const k=Zn("trivia",a,c,"easy");Xn("trivia",a,c);const $=V>=80?"🏆":V>=60?"😊":V>=40?"🤔":"📖";n.innerHTML=`
      <div class="game-results">
        <div class="results-emoji">${$}</div>
        <h2 class="results-title">${V>=60?"¡Bien hecho!":"¡Sigue practicando!"}</h2>

        <div class="results-score-circle">
          <span class="results-score-value">${a}</span>
          <span class="results-score-label">puntos</span>
        </div>

        <div class="results-stats">
          <div class="results-stat">
            <span class="results-stat-value">${c}/10</span>
            <span class="results-stat-label">Correctas</span>
          </div>
          <div class="results-stat">
            <span class="results-stat-value">${V}%</span>
            <span class="results-stat-label">Precisión</span>
          </div>
        </div>

        <div class="results-rewards">
          <div class="reward-item">🪙 +${k.coins} monedas</div>
          <div class="reward-item">⭐ +${k.xp} XP</div>
        </div>

        <div class="results-actions">
          <button class="btn btn-primary btn-block" id="btn-play-again">🔄 Jugar de Nuevo</button>
          <button class="btn btn-secondary btn-block" id="btn-go-home">🏠 Volver al Menú</button>
        </div>
      </div>
    `,(O=document.getElementById("btn-play-again"))==null||O.addEventListener("click",()=>{pe("game",{gameId:"trivia"})}),(q=document.getElementById("btn-go-home"))==null||q.addEventListener("click",()=>{pe("home")})}return _(),()=>{clearInterval(h)}}const Ei=[{name:"Moisés",clues:["Fue criado en el palacio de un faraón.","Dios le habló desde una zarza ardiente.","Liberó al pueblo de Israel de la esclavitud.","Recibió los Diez Mandamientos en el monte Sinaí.","Abrió las aguas del Mar Rojo."],book:"Éxodo"},{name:"David",clues:["Era el hijo menor de su familia.","Fue pastor de ovejas en su juventud.","Tocaba el arpa con gran habilidad.","Derrotó a un gigante con una piedra y una honda.","Se convirtió en el segundo rey de Israel."],book:"Samuel"},{name:"Noé",clues:["Era un hombre justo en su generación.","Dios le encomendó una misión especial de rescate.","Trabajó construyendo algo enorme durante muchos años.","Reunió animales de todas las especies.","Construyó el arca y sobrevivió al diluvio."],book:"Génesis"},{name:"Abraham",clues:["Vivía originalmente en Ur de los Caldeos.","Dios le prometió descendencia como las estrellas.","Su esposa se llamaba Sara.","Fue llamado el padre de la fe.","Estuvo dispuesto a sacrificar a su hijo Isaac."],book:"Génesis"},{name:"José",clues:["Era el favorito de su padre Jacob.","Sus hermanos le tenían envidia.","Fue vendido y llevado a un país lejano.","Tenía el don de interpretar sueños.","Llegó a ser gobernador de Egipto."],book:"Génesis"},{name:"Daniel",clues:["Fue llevado cautivo a Babilonia siendo joven.","Se negó a comer la comida del rey.","Interpretó el sueño de una gran estatua.","Sus enemigos buscaron destruirlo por su fe.","Fue arrojado al foso de los leones."],book:"Daniel"},{name:"Sansón",clues:["Su nacimiento fue anunciado por un ángel.","Era nazareo desde su nacimiento.","Su fuerza era sobrenatural.","Una mujer descubrió el secreto de su poder.","Derribó el templo de los filisteos."],book:"Jueces"},{name:"Salomón",clues:["Era hijo del segundo rey de Israel.","Pidió sabiduría a Dios en lugar de riquezas.","Construyó el primer templo de Jerusalén.","La Reina de Sabá visitó su corte.","Es considerado el hombre más sabio que ha existido."],book:"Reyes"},{name:"María",clues:["Era una joven de Nazaret.","Un ángel le anunció un mensaje especial.","Estaba comprometida con un carpintero.","Visitó a su prima Elisabet.","Es la madre de Jesús."],book:"Lucas"},{name:"Pedro",clues:["Era pescador de profesión.","Su hermano también era discípulo de Jesús.","Caminó sobre el agua por un momento.","Negó conocer a Jesús tres veces.","Se convirtió en líder de la iglesia primitiva."],book:"Evangelios"},{name:"Pablo",clues:["Su nombre original era Saulo.","Perseguía a los primeros cristianos.","Tuvo un encuentro sobrenatural camino a Damasco.","Escribió muchas cartas del Nuevo Testamento.","Realizó varios viajes misioneros por el Mediterráneo."],book:"Hechos"},{name:"Elías",clues:["Fue un profeta del reino del norte.","Desafió a los profetas de un dios falso.","Fue alimentado por cuervos junto a un arroyo.","Hizo descender fuego del cielo.","Subió al cielo en un carro de fuego."],book:"Reyes"},{name:"Rut",clues:["No era israelita de nacimiento.","Fue nuera de Noemí.",'Dijo: "A donde tú vayas, iré yo".',"Trabajó recogiendo espigas en un campo.","Se convirtió en bisabuela del rey David."],book:"Rut"},{name:"Ester",clues:["Era huérfana criada por su primo.","Llegó a ser reina de Persia.","Arriesgó su vida para salvar a su pueblo.","Organizó un banquete para revelar un complot.","Su historia se celebra en la fiesta de Purim."],book:"Ester"},{name:"Jonás",clues:["Dios le pidió ir a una ciudad malvada.","Intentó huir de la misión de Dios.","Fue lanzado al mar durante una tormenta.","Pasó tres días dentro de un gran pez.","Finalmente predicó en Nínive."],book:"Jonás"},{name:"Juan el Bautista",clues:["Su padre quedó mudo cuando anunció su nacimiento.","Vivía en el desierto.","Comía langostas y miel silvestre.","Predicaba arrepentimiento y bautismo.","Bautizó a Jesús en el río Jordán."],book:"Evangelios"},{name:"Josué",clues:["Fue asistente de Moisés durante años.","Era uno de los doce espías enviados a Canaán.","Fue valiente cuando otros tuvieron miedo.","Lideró al pueblo cruzando el río Jordán.","Conquistó las murallas de Jericó."],book:"Josué"},{name:"Jacob",clues:["Era hermano gemelo de Esaú.","Obtuvo la bendición de su padre mediante un engaño.","Soñó con una escalera que llegaba al cielo.","Trabajó 14 años para casarse con Raquel.","Luchó con un ángel y fue llamado Israel."],book:"Génesis"}];function Hg(n){const t=Ne([...Ei]).slice(0,5);let s=0,r=0,o=0,a=0;function c(){const p=t[s];a=0;const _=Ei.filter(D=>D.name!==p.name).map(D=>D.name),S=Ne(_).slice(0,3),R=Ne([p.name,...S]);d(p,R)}function d(p,_){var D;const S=p.clues.slice(0,a+1),R=Math.max(50-a*10,10);n.innerHTML=`
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
          <span>Pista ${a+1} de ${p.clues.length}</span>
          <span class="text-muted">Valor: ${R} pts</span>
        </div>

        <div class="characters-clues">
          ${S.map((x,V)=>`
            <div class="clue-card ${V===a?"clue-new":""}">
              <span class="clue-number">${V+1}</span>
              <span>${x}</span>
            </div>
          `).join("")}
        </div>

        ${a<p.clues.length-1?`
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
    `,(D=document.getElementById("btn-more-clue"))==null||D.addEventListener("click",()=>{a++,d(p,_)}),n.querySelectorAll(".characters-option").forEach(x=>{x.addEventListener("click",()=>{const V=x.dataset.name;h(V,p)})})}function h(p,_,S){const R=p===_.name;if(n.querySelectorAll(".characters-option").forEach(D=>{D.disabled=!0,D.dataset.name===_.name&&D.classList.add("correct"),D.dataset.name===p&&!R&&D.classList.add("wrong")}),R){o++;const D=Math.max(50-a*10,10);r+=D,te(`✅ ¡Correcto! +${D} pts`,"success")}else te(`❌ Era: ${_.name}`,"error");setTimeout(()=>{s++,s<5?c():m()},1800)}function m(){var S,R;const p=Zn("characters",r,o,"medium");Xn("characters",r,o);const _=o>=4?"🕵️":o>=3?"😊":"📖";n.innerHTML=`
      <div class="game-results">
        <div class="results-emoji">${_}</div>
        <h2 class="results-title">${o>=3?"¡Gran detective bíblico!":"¡Sigue aprendiendo!"}</h2>

        <div class="results-score-circle">
          <span class="results-score-value">${r}</span>
          <span class="results-score-label">puntos</span>
        </div>

        <div class="results-stats">
          <div class="results-stat">
            <span class="results-stat-value">${o}/5</span>
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
    `,(S=document.getElementById("btn-play-again"))==null||S.addEventListener("click",()=>{pe("game",{gameId:"characters"})}),(R=document.getElementById("btn-go-home"))==null||R.addEventListener("click",()=>{pe("home")})}c()}function Qg(n){const t=Ne([...Hs]).slice(0,5);let s=0,r=0,o=0;function a(h){const m=h.text.split(" "),p=Math.min(3,Math.max(2,Math.floor(m.length/5))),_=[];for(;_.length<p;){const k=Math.floor(Math.random()*m.length);!_.includes(k)&&m[k].length>3&&_.push(k)}_.sort((k,$)=>k-$);const S=[],R=[];m.forEach((k,$)=>{if(_.includes($)){const O=k.replace(/[.,;:!?¡¿"']/g,""),q=k.replace(O,"");S.push({type:"blank",original:O,punct:q,index:R.length}),R.push(O)}else S.push({type:"word",text:k})});const x=Ne(["gracia","verdad","camino","espíritu","gloria","pueblo","cielo","tierra","corazón","alma"].filter(k=>!R.includes(k.toLowerCase()))).slice(0,2),V=Ne([...R,...x]);return{blankedWords:S,missingWords:R,allOptions:V}}function c(){const h=t[s],{blankedWords:m,missingWords:p,allOptions:_}=a(h);let S=new Array(p.length).fill(null);function R(){var x;n.innerHTML=`
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
            ${m.map(V=>{if(V.type==="word")return`<span class="vc-word">${V.text}</span>`;{const k=S[V.index];return`<span class="vc-blank ${k?"filled":""}" data-blank="${V.index}">${k||"___"}${V.punct}</span>`}}).join(" ")}
          </div>

          <div class="section-title mt-lg">Elige las palabras:</div>
          <div class="vc-options">
            ${_.map(V=>{const k=S.includes(V);return`<button class="vc-option ${k?"used":""}" data-word="${V}" ${k?"disabled":""}>${V}</button>`}).join("")}
          </div>

          <button class="btn btn-primary btn-block mt-lg ${S.includes(null)?"disabled":""}" id="btn-check-verse" ${S.includes(null)?"disabled":""}>
            ✅ Comprobar
          </button>
        </div>
      `,n.querySelectorAll(".vc-blank.filled").forEach(V=>{V.addEventListener("click",()=>{const k=parseInt(V.dataset.blank);S[k]=null,R()})}),n.querySelectorAll(".vc-option:not([disabled])").forEach(V=>{V.addEventListener("click",()=>{const k=V.dataset.word,$=S.indexOf(null);$!==-1&&(S[$]=k,R())})}),(x=document.getElementById("btn-check-verse"))==null||x.addEventListener("click",()=>{D(p)})}function D(x){let V=!0;x.forEach((k,$)=>{var O;((O=S[$])==null?void 0:O.toLowerCase())!==k.toLowerCase()&&(V=!1)}),V?(o++,r+=30,te("✅ ¡Correcto! +30 pts","success")):te(`❌ Respuesta: ${x.join(", ")}`,"error"),setTimeout(()=>{s++,s<5?c():d()},2e3)}R()}function d(){var p,_;const h=Zn("verse-complete",r,o,"medium");Xn("verse-complete",r,o);const m=o>=4?"📖":o>=2?"😊":"🙏";n.innerHTML=`
      <div class="game-results">
        <div class="results-emoji">${m}</div>
        <h2 class="results-title">${o>=3?"¡Excelente memorización!":"¡Sigue practicando la Palabra!"}</h2>

        <div class="results-score-circle">
          <span class="results-score-value">${r}</span>
          <span class="results-score-label">puntos</span>
        </div>

        <div class="results-stats">
          <div class="results-stat">
            <span class="results-stat-value">${o}/5</span>
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
    `,n.querySelectorAll(".btn-difficulty").forEach(s=>{s.addEventListener("click",r=>{const o=s.dataset.level;t(o)})})}function t(s){const o={easy:{size:11,wordCount:10,directions:[[0,1],[1,0]]},medium:{size:13,wordCount:11,directions:[[0,1],[1,0],[1,1]]},hard:{size:15,wordCount:12,directions:[[0,1],[1,0],[1,1],[0,-1],[-1,0]]}}[s],a=o.size,c=Ne([...Jg])[0],d=Ne([...c.words]).slice(0,o.wordCount);let h=[],m=[],p=!1,_=[],S=0,R=Date.now();function D(){h=Array.from({length:a},()=>Array.from({length:a},()=>""));const O=o.directions;d.forEach(U=>{let b=!1,v=0;for(;!b&&v<100;){v++;const E=O[Math.floor(Math.random()*O.length)],T=Math.floor(Math.random()*a),y=Math.floor(Math.random()*a),I=T+E[0]*(U.length-1),g=y+E[1]*(U.length-1);if(I<0||I>=a||g<0||g>=a)continue;let j=!0;for(let F=0;F<U.length;F++){const Y=T+E[0]*F,ae=y+E[1]*F;if(h[Y][ae]!==""&&h[Y][ae]!==U[F]){j=!1;break}}if(j){for(let F=0;F<U.length;F++){const Y=T+E[0]*F,ae=y+E[1]*F;h[Y][ae]=U[F]}b=!0}}});const q="ABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let U=0;U<a;U++)for(let b=0;b<a;b++)h[U][b]===""&&(h[U][b]=q[Math.floor(Math.random()*q.length)])}function x(){n.innerHTML=`
        <div class="word-search-game">
          <div class="ws-header">
            <div class="ws-theme">
              <span class="ws-theme-icon">📚</span>
              <span>${c.theme} (${s.toUpperCase()})</span>
            </div>
            <div class="ws-found">${m.length} / ${d.length}</div>
          </div>

          <div class="ws-words-list">
            ${d.map(q=>`
              <span class="ws-word ${m.includes(q)?"found":""}">${q}</span>
            `).join("")}
          </div>

          <div class="ws-grid" id="ws-grid">
            ${h.map((q,U)=>q.map((b,v)=>`
                <div class="ws-cell" data-row="${U}" data-col="${v}">${b}</div>
              `).join("")).join("")}
          </div>

          <p class="text-sm text-muted text-center mt-md">Arrastra para seleccionar palabras consecutivas.</p>
        </div>
      `;const O=document.getElementById("ws-grid");O&&(O.style.gridTemplateColumns=`repeat(${a}, 1fr)`),V()}function V(){const O=document.getElementById("ws-grid");if(!O)return;const q=T=>{const y=T.touches?T.touches[0]:T,I=document.elementFromPoint(y.clientX,y.clientY);return I&&I.classList.contains("ws-cell")?{row:parseInt(I.dataset.row),col:parseInt(I.dataset.col),el:I}:null},U=T=>{T.preventDefault(),p=!0,_=[];const y=q(T);y&&(_.push(y),y.el.classList.add("cell-selected"))},b=T=>{if(!p)return;T.preventDefault();const y=q(T);y&&!_.some(I=>I.row===y.row&&I.col===y.col)&&(_.length===1||E(y))&&(_.push(y),y.el.classList.add("cell-selected"))},v=()=>{p&&(p=!1,k(),document.querySelectorAll(".cell-selected").forEach(T=>T.classList.remove("cell-selected")),_=[])};function E(T){if(_.length<1)return!0;const y=_[0],I=_[_.length-1],g=Math.sign(I.row-y.row),j=Math.sign(I.col-y.col),F=I.row+g,Y=I.col+j;return T.row===F&&T.col===Y}O.addEventListener("mousedown",U),O.addEventListener("mousemove",b),window.addEventListener("mouseup",v),O.addEventListener("touchstart",U,{passive:!1}),O.addEventListener("touchmove",b,{passive:!1}),window.addEventListener("touchend",v)}function k(){if(_.length<2)return;const O=_.map(b=>h[b.row][b.col]).join(""),q=O.split("").reverse().join(""),U=d.find(b=>(b===O||b===q)&&!m.includes(b));if(U){m.push(U),S+=25,_.forEach(E=>{const T=document.querySelector(`.ws-cell[data-row="${E.row}"][data-col="${E.col}"]`);T&&T.classList.add("cell-found")});const b=Array.from(document.querySelectorAll(".ws-word")).find(E=>E.textContent===U);b&&b.classList.add("found");const v=document.querySelector(".ws-found");if(v&&(v.textContent=`${m.length} / ${d.length}`),te(`✅ ¡Encontraste "${U}"!`,"success"),m.length===d.length){const E=Math.max(0,60-Math.floor((Date.now()-R)/1e3));S+=E,setTimeout($,1e3)}}}function $(){var q,U;const O=Zn("word-search",S,m.length,s);Xn("word-search",S,m.length),n.innerHTML=`
        <div class="game-results">
          <div class="results-emoji">🔤</div>
          <h2 class="results-title">¡Sopa Completada!</h2>

          <div class="results-score-circle">
            <span class="results-score-value">${S}</span>
            <span class="results-score-label">puntos</span>
          </div>

          <div class="results-stats">
            <div class="results-stat">
              <span class="results-stat-value">${m.length}</span>
              <span class="results-stat-label">Palabras</span>
            </div>
            <div class="results-stat">
              <span class="results-stat-value">${Math.floor((Date.now()-R)/1e3)}s</span>
              <span class="results-stat-label">Tiempo</span>
            </div>
          </div>

          <div class="results-rewards">
            <div class="reward-item">🪙 +${O.coins} monedas</div>
            <div class="reward-item">⭐ +${O.xp} XP</div>
          </div>

          <div class="results-actions">
            <button class="btn btn-primary btn-block" id="btn-play-again">🔄 Jugar de Nuevo</button>
            <button class="btn btn-secondary btn-block" id="btn-go-home">🏠 Volver al Menú</button>
          </div>
        </div>
      `,(q=document.getElementById("btn-play-again"))==null||q.addEventListener("click",()=>{Ou(n)}),(U=document.getElementById("btn-go-home"))==null||U.addEventListener("click",()=>{pe("home")})}D(),x()}}function Wg(n){const s=Ne([...Ei]).slice(0,6).map((R,D)=>[{id:D,type:"name",text:R.name,icon:"👤",pairId:D},{id:D,type:"clue",text:R.clues[0],icon:"💡",pairId:D}]).flat(),r=Ne(s);let o=[],a=[],c=0,d=0,h=Date.now(),m=!0;function p(){n.innerHTML=`
      <div class="memory-game">
        <div class="memory-header">
          <div class="memory-stats">
            <span>🎯 ${a.length}/6</span>
            <span>🔄 ${c} movimientos</span>
          </div>
        </div>

        <div class="memory-grid">
          ${r.map((R,D)=>`
            <div class="memory-card ${a.includes(R.pairId)?"matched":""} ${o.includes(D)?"flipped":""}"
                 data-index="${D}">
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
    `,n.querySelectorAll(".memory-card").forEach(R=>{R.addEventListener("click",()=>{if(!m)return;const D=parseInt(R.dataset.index);_(D)})})}function _(R){if(o.includes(R)||a.includes(r[R].pairId)||o.length>=2)return;o.push(R);const D=n.querySelector(`.memory-card[data-index="${R}"]`);if(D&&D.classList.add("flipped"),o.length===2){c++,m=!1;const[x,V]=o,k=r[x],$=r[V];k.pairId===$.pairId&&k.type!==$.type?(a.push(k.pairId),d+=Math.max(30-c,10),setTimeout(()=>{var q,U;(q=document.querySelector(`.memory-card[data-index="${x}"]`))==null||q.classList.add("matched"),(U=document.querySelector(`.memory-card[data-index="${V}"]`))==null||U.classList.add("matched");const O=n.querySelector(".memory-stats");O&&(O.innerHTML=`<span>🎯 ${a.length}/6</span><span>🔄 ${c} movimientos</span>`),o=[],m=!0,te("✅ ¡Par encontrado!","success"),a.length===6&&setTimeout(S,800)},600)):setTimeout(()=>{var q,U;(q=document.querySelector(`.memory-card[data-index="${x}"]`))==null||q.classList.remove("flipped"),(U=document.querySelector(`.memory-card[data-index="${V}"]`))==null||U.classList.remove("flipped");const O=n.querySelector(".memory-stats");O&&(O.innerHTML=`<span>🎯 ${a.length}/6</span><span>🔄 ${c} movimientos</span>`),o=[],m=!0},1e3)}}function S(){var k,$;const R=Math.floor((Date.now()-h)/1e3),D=Math.max(0,120-R);d+=D;const x=Zn("memory",d,a.length,"easy");Xn("memory",d,a.length);const V=c<=12?"🧠":c<=18?"😊":"🃏";n.innerHTML=`
      <div class="game-results">
        <div class="results-emoji">${V}</div>
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
    `,(k=document.getElementById("btn-play-again"))==null||k.addEventListener("click",()=>{pe("game",{gameId:"memory"})}),($=document.getElementById("btn-go-home"))==null||$.addEventListener("click",()=>{pe("home")})}p()}const Fu={noah:{id:"noah",title:"El Arca de Noé",description:"Construye un arca para salvar a la creación del gran diluvio.",cover:"assets/stories/noah.png",difficulty:"Fácil",reward:100,xp:50,startNode:"start",nodes:{start:{text:'Dios ve que la tierra está llena de maldad, pero encuentra gracia en ti, Noé. Te dice: "Hazte un arca de madera de gofer; harás aposentos en el arca, y la calafatearás con brea". El cielo se oscurece.',image:"assets/stories/noah.png",choices:[{text:"🛠️ Obedecer y empezar a construir de inmediato",nextNode:"build"},{text:"🗣️ Hablar con los vecinos para advertirles del peligro",nextNode:"warn_neighbors"}]},build:{text:"Pasan los años. Construyes el Arca con tus hijos Sem, Cam y Jafet. La gente se burla de ti porque no hay señales de lluvia en el desierto. ¿Qué haces ante las burlas?",choices:[{text:"🙏 Continuar trabajando con fe y paciencia",nextNode:"animals"},{text:"🛑 Detenerte un momento para discutir y defenderte",nextNode:"argue"}]},warn_neighbors:{text:'Intentas advertir a la gente, pero se ríen de ti. "¡No ha llovido en años, viejo loco!", te gritan. El tiempo apremia y el arca aún no está lista.',choices:[{text:"🛠️ Volver al trabajo rápidamente en el Arca",nextNode:"build"},{text:"😔 Sentirte desanimado por su incredulidad",nextNode:"discouraged"}]},discouraged:{text:"Te sientas junto a las maderas y respiras profundo. Recuerdas la promesa de Dios de salvarte a ti y a tu familia. Tu fe te renueva.",choices:[{text:"🛠️ Levantar la herramienta y seguir construyendo",nextNode:"build"}]},argue:{text:"Al discutir, pierdes tiempo valioso y la ira entra en tu corazón. El trabajo se retrasa. Sin embargo, decides que lo mejor es concentrarse en lo importante.",choices:[{text:"🛠️ Ignorar las burlas y retomar la construcción",nextNode:"animals"}]},animals:{text:"¡El Arca está terminada! De repente, una procesión milagrosa comienza de la nada: animales de dos en dos, macho y hembra, entran caminando pacíficamente al Arca.",choices:[{text:"🚪 Entrar al Arca con tu familia y cerrar las puertas",nextNode:"flood"}]},flood:{text:"Las cataratas de los cielos se abren y el abismo estalla. Llueve durante 40 días y 40 noches. El Arca flota sobre las aguas. Estás a salvo con tu familia y los animales.",choices:[{text:"🕊️ Esperar a que las aguas bajen y enviar un ave",nextNode:"dove"}]},dove:{text:"Envías una paloma. Regresa la primera vez, pero la segunda vez trae una rama de olivo en el pico. ¡Las aguas están bajando! Finalmente, el Arca se asienta en el monte Ararat.",choices:[{text:"🌈 Salir del Arca y dar gracias a Dios",nextNode:"end"}]},end:{text:"Sales a tierra seca. Dios pone un hermoso arcoíris en el cielo como pacto de que nunca más destruirá la tierra con agua. ¡Has salvado la vida en la tierra!",isEnd:!0,message:"¡Felicidades! Completaste la historia de Noé con obediencia y fe."}}},david:{id:"david",title:"David y Goliat",description:"Enfrenta al gigante filisteo con una honda y mucha fe.",cover:"assets/stories/david.png",difficulty:"Media",reward:120,xp:60,startNode:"start",nodes:{start:{text:"Llegas al campamento del ejército de Israel para llevar comida a tus hermanos mayores. Allí, escuchas a un gigante de casi 3 metros, Goliat, desafiando a Israel al combate.",image:"assets/stories/david.png",choices:[{text:"🛡️ Preguntar qué recompensa tendrá quien lo venza",nextNode:"ask_king"},{text:"😠 Sentirte indignado por los insultos que lanza a Dios",nextNode:"indignant"}]},ask_king:{text:'Te llevan ante el Rey Saúl. Él te mira de arriba abajo: "Eres solo un muchacho, y él un hombre de guerra". Tú recuerdas cómo Dios te libró del león y el oso.',choices:[{text:"👑 Aceptar la armadura del Rey Saúl para pelear",nextNode:"armor"},{text:"❌ Rechazar la armadura y pelear como pastor",nextNode:"stones"}]},indignant:{text:'Dices en voz alta: "¿Quién es este filisteo incircunciso para que provoque a los escuadrones del Dios viviente?". El Rey Saúl escucha tu valentía.',choices:[{text:"👑 Ir a hablar con el Rey Saúl sobre el combate",nextNode:"ask_king"}]},armor:{text:"Te pones el casco de bronce y la pesada coraza. Al intentar dar un paso, te das cuenta de que no puedes moverte con soltura ni has practicado con ella.",choices:[{text:"❌ Quitarte la armadura y confiar en tu honda",nextNode:"stones"}]},stones:{text:"Vas al arroyo y recoges cinco piedras lisas del lecho del río. Las metes en tu bolsa de pastor y caminas hacia el centro del valle, donde Goliat te espera riéndose.",choices:[{text:"🪨 Elegir una piedra y avanzar corriendo",nextNode:"fight_start"}]},fight_start:{text:'Goliat grita: "¿Soy yo un perro para que vengas a mí con palos?". Tú le respondes: "¡Tú vienes a mí con espada, pero yo voy en el nombre de Jehová!".',choices:[{text:"🎯 Poner la piedra en la honda y girarla con fuerza",nextNode:"sling_shot"}]},sling_shot:{text:"Corres hacia el filisteo. Giras la honda y sueltas un extremo. La piedra vuela silbando por el aire y se clava directamente en la frente de Goliat.",choices:[{text:"🏆 El gigante cae al suelo de bruces",nextNode:"end"}]},end:{text:"El campamento filisteo huye aterrado, mientras el ejército de Israel celebra una gran victoria. Has demostrado que Dios no salva con espada, sino con fe.",isEnd:!0,message:"¡Felicidades! Venciste a Goliat con confianza en el Señor."}}},daniel:{id:"daniel",title:"Daniel en el Foso",description:"Permanece fiel a Dios ante un edicto del Rey Darío.",cover:"assets/stories/daniel.png",difficulty:"Difícil",reward:150,xp:75,startNode:"start",nodes:{start:{text:'Eres uno de los gobernadores más sabios del imperio. Otros oficiales, celosos de ti, engañan al Rey Darío para firmar una ley: "Ninguna persona puede orar a ningún dios excepto al Rey durante 30 días".',image:"assets/stories/daniel.png",choices:[{text:"🙏 Ignorar la ley y orar a Dios como siempre",nextNode:"pray"},{text:"🚪 Orar pero con las ventanas cerradas en secreto",nextNode:"secret_pray"}]},pray:{text:"Vas a tu casa, abres las ventanas hacia Jerusalén y te arrodillas a orar tres veces al día dando gracias a Dios. Los oficiales espías te ven y corren a decírselo al Rey.",choices:[{text:"👑 Dejarte llevar por los guardias ante el Rey Darío",nextNode:"arrest"}]},secret_pray:{text:"Decides orar en secreto por miedo. Pero tu corazón siente que estás ocultando tu fe. Quieres dar testimonio de la gloria del Dios vivo.",choices:[{text:"☀️ Abrir las ventanas y orar con valentía",nextNode:"pray"}]},arrest:{text:'El Rey Darío está muy triste porque te aprecia, pero su propia ley no puede cambiarse. Te dice: "El Dios tuyo, a quien tú continuamente sirves, él te libre". Te arrojan al foso de los leones.',choices:[{text:"🦁 Caer en el foso oscuro y esperar a que rujan",nextNode:"den"}]},den:{text:"Te encuentras en la oscuridad rodeado de ojos amenazantes que brillan. De repente, una luz celestial aparece y los leones se sientan pacíficamente a tu alrededor. ¿Qué haces?",choices:[{text:"🙏 Sentarte a dar gracias a Dios por el milagro",nextNode:"morning"},{text:"🦁 Intentar acariciar a uno de los leones",nextNode:"pet_lion"}]},pet_lion:{text:"Te acercas a un león y este ronronea como un gatito. Dios ha cerrado la boca de las fieras para protegerte de todo daño.",choices:[{text:"☀️ Esperar a que amanezca",nextNode:"morning"}]},morning:{text:'Amanece. El Rey Darío corre al foso y grita con dolor: "¡Daniel, siervo del Dios viviente! ¿Te ha podido salvar tu Dios?".',choices:[{text:"🗣️ ¡Rey, vive para siempre! ¡Dios envió su ángel!",nextNode:"end"}]},end:{text:"El Rey Darío, lleno de gozo, te saca del foso. Ni un rasguño hay en ti. Entonces firma un nuevo edicto mandando a todo el reino a temer al Dios de Daniel, que salva y libra.",isEnd:!0,message:"¡Felicidades! Mantuviste tu fe firme y Dios te protegió."}}},moses:{id:"moses",title:"Moisés y el Mar Rojo",description:"Guía al pueblo de Israel hacia la libertad cruzando el mar.",cover:"assets/stories/moses.png",difficulty:"Media",reward:130,xp:65,startNode:"start",nodes:{start:{text:"Has guiado al pueblo de Israel fuera de Egipto tras las diez plagas. Sin embargo, os encontráis atrapados: el Mar Rojo al frente y el ejército del Faraón cargando por detrás.",image:"assets/stories/moses.png",choices:[{text:"🙏 Clamar a Dios por ayuda y protección",nextNode:"pray"},{text:"🗣️ Decir al pueblo que mantengan la calma y tengan fe",nextNode:"calm"}]},pray:{text:'Dios te responde: "¿Por qué clamas a mí? Di a los hijos de Israel que marchen. Y tú, alza tu vara y extiende tu mano sobre el mar, y divídelo".',choices:[{text:"🌊 Alzar la vara hacia el Mar Rojo",nextNode:"part_sea"}]},calm:{text:'Dices al pueblo: "No temáis; estad firmes y ved la salvación que Jehová hará hoy con vosotros". El pueblo se detiene, pero las tropas de Egipto están muy cerca.',choices:[{text:"🌊 Alzar la vara hacia el mar para que se divida",nextNode:"part_sea"}]},part_sea:{text:"Levantas tu vara de madera. Un gran viento recio del oriente sopla toda la noche y las aguas se dividen formando dos inmensos muros sólidos a los lados. Hay tierra seca.",choices:[{text:"🚶‍♂️ Indicar al pueblo que cruce de inmediato",nextNode:"crossing"}]},crossing:{text:"Cruzan por el fondo del mar. Es una marcha larga pero segura. El ejército egipcio decide seguiros con sus carros de guerra adentrándose en el lecho seco.",choices:[{text:"🛡️ Llegar al otro lado y mirar atrás al Faraón",nextNode:"other_side"}]},other_side:{text:"Ya casi todo el pueblo está a salvo en la otra orilla. Los carros egipcios están en medio del mar. Dios te dice que extiendas tu mano una vez más.",choices:[{text:"Extendiendo tu mano sobre las aguas",nextNode:"close_sea"}]},close_sea:{text:"Extiendes tu mano. Las aguas vuelven a su curso normal con furia sobre el ejército de Faraón. El pueblo de Israel queda libre para siempre de Egipto.",choices:[{text:"🎶 Celebrar la libertad con cánticos a Dios",nextNode:"end"}]},end:{text:"Miriam toma un pandero y todo el pueblo danza y canta de gozo. Habéis cruzado el mar y la libertad os espera. ¡El Éxodo ha comenzado!",isEnd:!0,message:"¡Felicidades! Abriste camino en medio del mar con el poder de Dios."}}}};function Kg(n){fo(n)}function fo(n){n.innerHTML=`
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
  `,n.querySelectorAll(".btn-start-story").forEach(e=>{e.addEventListener("click",t=>{const s=t.target.dataset.id;Yg(n,s)})})}function Yg(n,e){const t=Fu[e];let s=t.startNode||"start";function r(){var d;const o=t.nodes[s];if(!o){console.error(`Node not found: ${s}`);return}const a=o.image||t.cover;if(o.isEnd){Xg(n,t,o);return}n.innerHTML=`
      <div class="story-play-container" style="background-image: url('${a}')">
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
    `,(d=document.getElementById("btn-exit-story"))==null||d.addEventListener("click",()=>{fo(n)});const c=document.getElementById("story-text-box");Zg(o.text,c,()=>{const h=document.getElementById("story-choices-container");h&&o.choices&&o.choices.forEach(m=>{const p=document.createElement("button");p.className="btn btn-option btn-glass fade-in",p.textContent=m.text,p.addEventListener("click",()=>{s=m.nextNode,r()}),h.appendChild(p)})})}r()}function Xg(n,e,t){var s;hr(e.reward),dr(e.xp),te(`¡Historia completada! +${e.reward} monedas`,"success"),n.innerHTML=`
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
  `,(s=document.getElementById("btn-finish-story"))==null||s.addEventListener("click",()=>{fo(n)})}function Zg(n,e,t,s=25){let r=0;e.innerHTML="";function o(){r<n.length?(e.innerHTML+=n.charAt(r),r++,setTimeout(o,s)):t&&t()}o()}const xl=[{word:"JESUS",category:"Personaje",hint:"El Hijo de Dios, Salvador del mundo.",verse:'"Y dará a luz un hijo, y llamarás su nombre JESÚS, porque él salvará a su pueblo de sus pecados." - Mateo 1:21'},{word:"MOISES",category:"Personaje",hint:"Líder que guió al pueblo de Israel fuera de Egipto.",verse:'"Por la fe Moisés, hecho ya grande, rehusó llamarse hijo de la hija de Faraón." - Hebreos 11:24'},{word:"DAVID",category:"Personaje",hint:"Rey de Israel, conocido por vencer a Goliat y escribir Salmos.",verse:'"Hallé a David hijo de Isaí, varón conforme a mi corazón, quien hará todo lo que yo quiero." - Hechos 13:22'},{word:"SALOMON",category:"Personaje",hint:"Hijo de David, conocido por su gran sabiduría.",verse:'"Y dio Dios a Salomón sabiduría y prudencia muy grandes, y anchura de corazón." - 1 Reyes 4:29'},{word:"MANA",category:"Objeto/Alimento",hint:"El pan del cielo que Dios envió al pueblo en el desierto.",verse:'"Y la casa de Israel lo llamó Maná; y era como semilla de culantro, blanco, y su sabor como de hojuelas con miel." - Éxodo 16:31'},{word:"JERUSALEN",category:"Lugar",hint:"La ciudad santa, capital del Reino de Israel.",verse:'"Pedid por la paz de Jerusalén; sean prosperados los que te aman." - Salmos 122:6'},{word:"JORDAN",category:"Lugar",hint:"Río donde Juan el Bautista bautizó a Jesús.",verse:'"Y Jesús, después que fue bautizado, subió luego del agua; y he aquí los cielos le fueron abiertos." - Mateo 3:16'},{word:"BIBLIA",category:"Concepto",hint:"La palabra escrita de Dios (Colección de libros).",verse:'"Toda la Escritura es inspirada por Dios, y útil para enseñar, para redargüir." - 2 Timoteo 3:16'},{word:"ORACION",category:"Acción",hint:"Hablar con Dios con fe y corazón sincero.",verse:'"Orad sin cesar. Dad gracias en todo, porque esta es la voluntad de Dios." - 1 Tesalonicenses 5:17-18'},{word:"GOLIAT",category:"Personaje",hint:"El gigante filisteo de Gat que desafió a Israel.",verse:'"Salió entonces del campamento de los filisteos un paladín que se llamaba Goliat, de Gat." - 1 Samuel 17:4'},{word:"MESA",category:"Concepto",hint:'Lugar de comunión; "Aderezas ____ delante de mí".',verse:'"Aderezas mesa delante de mí en presencia de mis angustiadores; unges mi cabeza con aceite." - Salmos 23:5'},{word:"ARCA",category:"Objeto",hint:"Estructura construida por Noé para flotar en el Diluvio.",verse:'"Por la fe Noé... con temor preparó el arca en que su casa se salvase." - Hebreos 11:7'},{word:"TABERNACULO",category:"Lugar",hint:"Santuario móvil que usaba Israel en el desierto.",verse:'"Y harán un santuario para mí, y habitaré en medio de ellos." - Éxodo 25:8'},{word:"PENTATEUCO",category:"Concepto",hint:"Los primeros cinco libros de la Biblia escrito por Moisés.",verse:"Génesis, Éxodo, Levítico, Números y Deuteronomio forman la Ley."},{word:"ESPERANZA",category:"Concepto",hint:"Confianza segura en las promesas futuras de Dios.",verse:'"Y la esperanza no avergüenza; porque el amor de Dios ha sido derramado en nuestros corazones." - Romanos 5:5'},{word:"GRACIA",category:"Concepto",hint:"Favor inmerecido de Dios para la salvación.",verse:'"Porque por gracia sois salvos por medio de la fe; y esto no de vosotros." - Efesios 2:8'}];function ey(n){let e=o(),t=[],s=6,r=!1;function o(){const m=Math.floor(Math.random()*xl.length);return xl[m]}function a(){if(r){h();return}const m=e.word.toUpperCase();if(m.split("").every(_=>t.includes(_)||_===" ")){d(!0);return}if(s<=0){d(!1);return}n.innerHTML=`
      <div class="hangman-game">
        <div class="hm-header">
          <div class="hm-category">🏷️ ${e.category}</div>
        </div>

        <div class="hm-gallows">
          <svg height="180" width="140" class="gallows-svg">
            <!-- Posiciones fijas (Horca) -->
            <line x1="10" y1="170" x2="130" y2="170" class="gallows-line" /> <!-- Base -->
            <line x1="30" y1="170" x2="30" y2="10" class="gallows-line" />  <!-- Poste vertical -->
            <line x1="30" y1="10" x2="90" y2="10" class="gallows-line" />   <!-- Poste horizontal -->
            <line x1="90" y1="10" x2="90" y2="30" class="gallows-line" />   <!-- Soga -->

            <!-- Monigote (Cuerpo del Ahorcado) -->
            <!-- Cabeza -->
            <circle cx="90" cy="45" r="15" class="gallows-char ${s<=5?"visible":"hidden"}" />
            
            <!-- Cuerpo -->
            <line x1="90" y1="60" x2="90" y2="105" class="gallows-char ${s<=4?"visible":"hidden"}" />
            
            <!-- Brazo Izquierdo -->
            <line x1="90" y1="70" x2="70" y2="90" class="gallows-char ${s<=3?"visible":"hidden"}" />
            
            <!-- Brazo Derecho -->
            <line x1="90" y1="70" x2="110" y2="90" class="gallows-char ${s<=2?"visible":"hidden"}" />
            
            <!-- Pierna Izquierda -->
            <line x1="90" y1="105" x2="75" y2="140" class="gallows-char ${s<=1?"visible":"hidden"}" />
            
            <!-- Pierna Derecha -->
            <line x1="90" y1="105" x2="105" y2="140" class="gallows-char ${s<=0?"visible":"hidden"}" />
          </svg>
        </div>

        <div class="hm-hint-container">
          <p class="hm-hint">💡 Pista: <span>${e.hint}</span></p>
        </div>

        <div class="hm-word-display" id="hm-word-display">
          ${m.split("").map(_=>`
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
    `,n.querySelectorAll(".btn-keyboard").forEach(_=>{_.addEventListener("click",S=>{const R=S.target.dataset.letter;c(R)})})}function c(m){if(t.includes(m))return;t.push(m),e.word.toUpperCase().includes(m)?te("¡Correcto!","success"):(s--,te("¡Letra incorrecta!","warning")),a()}function d(m){r=!0,m&&(hr(50),dr(25)),h(m)}function h(m){var p;n.innerHTML=`
      <div class="hangman-game">
        <div class="hm-result-card glass">
          <div class="hm-result-icon">${m?"🎉":"😢"}</div>
          <h2>${m?"¡Victoria!":"¡Fin del Juego!"}</h2>
          
          <p class="hm-result-word">La palabra era: <span>${e.word}</span></p>
          
          <div class="hm-verse-box">
            <h4>📖 Contexto Bíblico:</h4>
            <p>${e.verse}</p>
          </div>

          <div class="reward-summary">
            ${m?`
              <div class="reward-item">💰 <span>+50</span></div>
              <div class="reward-item">⭐ <span>+25 XP</span></div>
            `:'<p class="text-muted">No te rindas, ¡sigue aprendiendo!</p>'}
          </div>

          <button class="btn btn-primary btn-block" id="btn-restart-hm">
            Jugar de Nuevo
          </button>
        </div>
      </div>
    `,(p=document.getElementById("btn-restart-hm"))==null||p.addEventListener("click",()=>{e=o(),t=[],s=6,r=!1,a()})}a()}function ty(n){const e=Re(),t=localStorage.getItem("bb_player_id")||S();localStorage.setItem("bb_player_id",t);let s=null,r=null,o=null,a=null,c="p1",d=10,h=null,m=!1,p={fiftyfifty:!0,freeze:!0,double:!0},_=!1;function S(){return"user_"+Math.random().toString(36).substr(2,9)}function R(){var y,I,g,j,F,Y;n.innerHTML=`
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
    `,(y=document.getElementById("btn-mode-random"))==null||y.addEventListener("click",()=>{D(),$()}),(I=document.getElementById("btn-mode-create"))==null||I.addEventListener("click",()=>{x()}),(g=document.getElementById("btn-mode-join"))==null||g.addEventListener("click",()=>{V()}),(j=document.getElementById("btn-back-home"))==null||j.addEventListener("click",()=>{pe("home")}),(F=document.getElementById("btn-open-leaderboard"))==null||F.addEventListener("click",()=>{document.getElementById("bb-leaderboard-modal").style.display="flex",k()}),(Y=document.getElementById("close-leaderboard"))==null||Y.addEventListener("click",()=>{document.getElementById("bb-leaderboard-modal").style.display="none"})}function D(){var y;n.innerHTML=`
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
    `,(y=document.getElementById("btn-cancel-match"))==null||y.addEventListener("click",()=>{a&&a(),R()})}async function x(){var I,g;const y=Math.random().toString(36).substr(2,4).toUpperCase();n.innerHTML=`
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
    `,(I=document.getElementById("btn-cancel-room"))==null||I.addEventListener("click",()=>{o&&o(),R()}),(g=document.getElementById("btn-copy-code"))==null||g.addEventListener("click",()=>{navigator.clipboard.writeText(y),te("¡Código copiado!","info")});try{c="p1";const j=Ne([...Pt.easy,...Pt.medium]).slice(0,5),F=await Kr(jt(De,"bb_matches"),{status:"waiting_friend",code:y,p1:{uid:t,name:e.name,avatar:e.avatar,score:0,currentQ:0,lastAnswered:-1},p2:null,questions:j,createdAt:Rs()});O(F.id)}catch(j){te("Error creando sala: "+j.message,"danger"),R()}}function V(){var y,I;n.innerHTML=`
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
    `,(y=document.getElementById("btn-cancel-join"))==null||y.addEventListener("click",()=>{R()}),(I=document.getElementById("btn-confirm-join"))==null||I.addEventListener("click",async()=>{const g=document.getElementById("input-room-code").value.trim().toUpperCase();if(g.length<4){te("Ingresa un código válido de 4 letras.","warning");return}try{const j=Qr(jt(De,"bb_matches"),Jr("status","==","waiting_friend"),Jr("code","==",g)),F=await Wr(j);if(F.empty){te("Sala no encontrada o llena.","warning");return}const Y=F.docs[0];c="p2",await bs(We(De,"bb_matches",Y.id),{status:"playing",p2:{uid:t,name:e.name,avatar:e.avatar,score:0,currentQ:0,lastAnswered:-1}}),O(Y.id)}catch(j){te("Error al unirse: "+j.message,"danger")}})}async function k(){const y=document.getElementById("leaderboard-list");if(y)try{const I=Qr(jt(De,"bb_users"),Eg("leaguePoints","desc"),wl(10)),g=await Wr(I);if(g.empty){y.innerHTML='<p class="text-center text-muted">Aún no hay clasificados. ¡Sé el primero!</p>';return}y.innerHTML=`
        <div class="ranking-list">
          ${g.docs.map((j,F)=>{const Y=j.data();return`
              <div class="ranking-item ${Y.uid===t?"me":""}">
                <div class="rank-pos">${F+1}</div>
                <div class="rank-avatar">${Y.avatar||"👤"}</div>
                <div class="rank-info">
                  <div class="rank-name">${Y.name}</div>
                  <div class="rank-league">${Y.league||"Pescador"}</div>
                </div>
                <div class="rank-points">${Y.leaguePoints||0} PL</div>
              </div>
            `}).join("")}
        </div>
      `}catch(I){console.error(I),y.innerHTML='<p class="text-center text-danger">Error cargando ranking.</p>'}}async function $(){const y=jt(De,"bb_queue"),I=Qr(y,Jr("status","==","waiting"),wl(10));try{const j=(await Wr(I)).docs.find(F=>F.data().uid!==t);if(j){const F=j.data();c="p2";const Y=Ne([...Pt.easy,...Pt.medium]).slice(0,5),ae=await Kr(jt(De,"bb_matches"),{status:"starting",p1:{uid:F.uid,name:F.name,avatar:F.avatar,score:0,currentQ:0,lastAnswered:-1},p2:{uid:t,name:e.name,avatar:e.avatar,score:0,currentQ:0,lastAnswered:-1},questions:Y,startTime:Rs()});await bs(We(De,"bb_queue",j.id),{status:"matched",matchId:ae.id}),O(ae.id)}else{c="p1";const F=await Kr(jt(De,"bb_queue"),{uid:t,name:e.name,avatar:e.avatar,status:"waiting",createdAt:Rs()});a=Cl(We(De,"bb_queue",F.id),Y=>{if(Y.exists()&&Y.data().status==="matched"){const ae=Y.data().matchId;a(),Rl(F),O(ae)}})}}catch(g){console.error("Matchmaking error:",g),te("Error de conexión: "+g.message,"danger")}}function O(y){s=y,o=Cl(We(De,"bb_matches",y),I=>{I.exists()&&(r=I.data(),r.status==="starting"?q("playing"):U())})}async function q(y){s&&await bs(We(De,"bb_matches",s),{status:y})}function U(){if(!r)return;const y=r[c],g=r[c==="p1"?"p2":"p1"],j=y.currentQ;if(j>=5||r.status==="ended"){clearInterval(h),T();return}const F=r.questions[j];n.innerHTML=`
      <div class="bible-battle-game">
        <div class="bb-hud">
          <div class="bb-player">
            <div class="bb-avatar">${y.avatar}</div>
            <div class="bb-name">Tú</div>
            <div class="bb-score">${y.score} pts</div>
          </div>
          <div class="bb-vs">VS</div>
          <div class="bb-player">
            <div class="bb-avatar">${g.avatar}</div>
            <div class="bb-name">${g.name}</div>
            <div class="bb-score">${g.score} pts</div>
          </div>
        </div>

        <div class="bb-timer-bar">
          <div class="timer-fill" style="width: ${d/10*100}%"></div>
        </div>

        <div class="bb-question-box card">
          <div class="bb-q-header">Pregunta ${j+1}/5</div>
          <h3 class="bb-question">${F.q}</h3>
        </div>

        <div class="bb-options-grid" id="options-grid">
          ${F.options.map((Y,ae)=>`
            <button class="btn btn-option" data-ans="${ae}">${Y}</button>
          `).join("")}
        </div>

        <div class="bb-powerups">
          <button class="btn btn-powerup ${p.fiftyfifty?"":"disabled"}" id="p-5050" ${p.fiftyfifty?"":"disabled"}>✂️ 50/50</button>
          <button class="btn btn-powerup ${p.freeze?"":"disabled"}" id="p-freeze" ${p.freeze?"":"disabled"}>❄️ Hielo</button>
          <button class="btn btn-powerup ${p.double?"":"disabled"}" id="p-double" ${p.double?"":"disabled"}>🔥 X2</button>
        </div>
      </div>
    `,m=!1,b(),v(F.answer)}function b(){clearInterval(h),d=10;const y=n.querySelector(".timer-fill");h=setInterval(async()=>{d-=.1,y&&(y.style.width=`${d/10*100}%`),d<=0&&(clearInterval(h),m||E(-1,-1))},100)}function v(y){var I,g,j;n.querySelectorAll(".btn-option").forEach(F=>{F.addEventListener("click",Y=>{if(m)return;m=!0;const ae=parseInt(F.dataset.ans);E(ae,y)})}),(I=document.getElementById("p-5050"))==null||I.addEventListener("click",()=>{if(!p.fiftyfifty||m)return;p.fiftyfifty=!1;let Y=Array.from(n.querySelectorAll(".btn-option")).filter(ae=>parseInt(ae.dataset.ans)!==y);Ne(Y).slice(0,2).forEach(ae=>ae.style.visibility="hidden"),document.getElementById("p-5050").classList.add("disabled")}),(g=document.getElementById("p-double"))==null||g.addEventListener("click",()=>{!p.double||m||(p.double=!1,_=!0,document.getElementById("p-double").classList.add("disabled"),te("¡Próximo acierto duplicado!","info"))}),(j=document.getElementById("p-freeze"))==null||j.addEventListener("click",()=>{p.freeze&&(p.freeze=!1,document.getElementById("p-freeze").classList.add("disabled"),te("❄️ Efecto visual de Hielo","info"))})}async function E(y,I){clearInterval(h);let g=0;y===I?(g=Math.floor(d*10*(_?2:1)),te("¡Correcto!","success")):te("¡Incorrecto!","warning"),_=!1;const j=r[c],F={};F[`${c}.score`]=j.score+g,F[`${c}.currentQ`]=j.currentQ+1,F[`${c}.lastAnswered`]=y,await bs(We(De,"bb_matches",s),F)}function T(){var Y,ae;o&&o();const y=r[c],g=r[c==="p1"?"p2":"p1"],j=y.score>g.score,F=y.score===g.score;j?(hr(100),dr(50),Dl(25)):F||Dl(-10),Du(),n.innerHTML=`
      <div class="game-results">
        <div class="results-emoji">${j?"🏆":F?"🤝":"😢"}</div>
        <h2 class="results-title">${j?"¡Victoria!":F?"¡Empate!":"¡Derrota!"}</h2>

        <div class="results-score-circle">
          <span class="results-score-value">${y.score}</span>
          <span class="results-score-label">Tus puntos</span>
        </div>

        <div class="results-stats">
          <p class="text-secondary">Rival: <b>${g.name}</b> (${g.score} pts)</p>
          <div class="bb-league-badge mt-sm">${e.league}</div>
        </div>

        <div class="results-rewards">
          ${j?'<div class="reward-item">🪙 +100 monedas</div><div class="reward-item">⭐ +50 XP</div><div class="reward-item">🏆 +25 PL</div>':F?'<p class="text-sm">¡Buen combate!</p>':'<div class="reward-item">❌ -10 PL</div>'}
        </div>

        <div class="results-actions">
          <button class="btn btn-primary btn-block" id="btn-play-again-bb">🔄 Jugar de Nuevo</button>
          <button class="btn btn-secondary btn-block" id="btn-go-home">🏠 Volver al Menú</button>
        </div>
      </div>
    `,(Y=document.getElementById("btn-play-again-bb"))==null||Y.addEventListener("click",()=>{R()}),(ae=document.getElementById("btn-go-home"))==null||ae.addEventListener("click",()=>{pe("home")}),setTimeout(()=>{c==="p1"&&Rl(We(De,"bb_matches",s))},5e3)}R()}bt({id:"trivia",name:"Trivia Bíblica",icon:"❓",description:"Pon a prueba tu conocimiento bíblico",difficulty:"easy",render:Gg});bt({id:"characters",name:"Adivina el Personaje",icon:"🕵️",description:"Descubre quién es con las pistas",difficulty:"medium",render:Hg});bt({id:"verse-complete",name:"Completa el Versículo",icon:"📖",description:"Llena las palabras que faltan",difficulty:"medium",render:Qg});bt({id:"word-search",name:"Sopa de Letras",icon:"🔤",description:"Encuentra palabras bíblicas",difficulty:"easy",render:Ou});bt({id:"memory",name:"Memoria Bíblica",icon:"🃏",description:"Encuentra los pares bíblicos",difficulty:"easy",render:Wg});bt({id:"stories",name:"Relatos de Fe",icon:"📜",description:"Historias interactivas con elecciones",difficulty:"media",render:Kg});bt({id:"hangman",name:"Ahorcado Bíblico",icon:"🪧",description:"Adivina la palabra antes de agotar tus vidas",difficulty:"normal",render:ey});bt({id:"bible-battle",name:"Bible Battle 1v1",icon:"⚔️",description:"Trivia competitiva 1vs1 en tiempo real",difficulty:"alta",render:ty});Mt("home",n=>Lg(n));Mt("verse",n=>Og(n));Mt("profile",n=>qg(n));Mt("achievements",n=>Bg(n));Mt("settings",n=>Ug(n));Mt("ranking",n=>jg(n));Mt("game",(n,e)=>{const t=Vu(e.gameId);if(t&&t.render)return t.render(n);n.innerHTML='<div class="empty-state"><p>Juego no encontrado</p></div>'});const ny=["home","verse","profile","achievements","settings"],sy={home:"Bible Games",verse:"Versículo del Día",profile:"Mi Perfil",achievements:"Logros",settings:"Ajustes",ranking:"Ranking",game:"Juego"};function ry(n,e={}){document.querySelectorAll(".nav-btn").forEach(c=>{c.classList.toggle("active",c.dataset.screen===n)});const s=document.getElementById("header-title");if(s)if(n==="game"&&e.gameId){const c=Vu(e.gameId);s.textContent=c?c.name:"Juego"}else s.textContent=sy[n]||"Bible Games";const r=document.getElementById("btn-back"),o=!ny.includes(n);r&&r.classList.toggle("hidden",!o);const a=document.getElementById("bottom-nav");a&&a.classList.toggle("hidden",o),fr()}function Nl(){var e;localStorage.getItem("theme")==="light"&&document.body.classList.add("light-theme"),pd(ry),document.querySelectorAll(".nav-btn").forEach(t=>{t.addEventListener("click",()=>{const s=t.dataset.screen;s&&pe(s)})}),(e=document.getElementById("btn-back"))==null||e.addEventListener("click",()=>{pe("home")}),fr(),gd("home")}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Nl):Nl();
