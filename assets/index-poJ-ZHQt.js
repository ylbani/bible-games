(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();const Cs={};let Nl=null,ms=null,Hr=null;function kt(n,e){Cs[n]=e}function he(n,e={}){ms&&(ms(),ms=null),Nl=n,window.location.hash=n;const t=document.getElementById("main-content");if(t){if(t.innerHTML="",t.className="main-content screen-enter",Cs[n]){const s=Cs[n](t,e);typeof s=="function"&&(ms=s)}Hr&&Hr(n,e)}}function md(n){Hr=n}function pd(n="home"){window.addEventListener("hashchange",()=>{const t=window.location.hash.slice(1)||n;t!==Nl&&Cs[t]&&he(t)});const e=window.location.hash.slice(1)||n;he(e)}const yi="bgc_";function kl(n,e){try{return localStorage.setItem(yi+n,JSON.stringify(e)),!0}catch(t){return console.warn("Storage save failed:",t),!1}}function Ll(n,e=null){try{const t=localStorage.getItem(yi+n);return t?JSON.parse(t):e}catch(t){return console.warn("Storage load failed:",t),e}}function gd(){Object.keys(localStorage).filter(e=>e.startsWith(yi)).forEach(e=>localStorage.removeItem(e))}const yd=()=>{};var da={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},vd=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const o=n[t++];e[s++]=String.fromCharCode((r&31)<<6|o&63)}else if(r>239&&r<365){const o=n[t++],a=n[t++],c=n[t++],d=((r&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(d>>10)),e[s++]=String.fromCharCode(56320+(d&1023))}else{const o=n[t++],a=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(o&63)<<6|a&63)}}return e.join("")},Ol={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const o=n[r],a=r+1<n.length,c=a?n[r+1]:0,d=r+2<n.length,h=d?n[r+2]:0,m=o>>2,g=(o&3)<<4|c>>4;let E=(c&15)<<2|h>>6,w=h&63;d||(w=64,a||(E=64)),s.push(t[m],t[g],t[E],t[w])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ml(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):vd(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const o=t[n.charAt(r++)],c=r<n.length?t[n.charAt(r)]:0;++r;const h=r<n.length?t[n.charAt(r)]:64;++r;const g=r<n.length?t[n.charAt(r)]:64;if(++r,o==null||c==null||h==null||g==null)throw new _d;const E=o<<2|c>>4;if(s.push(E),h!==64){const w=c<<4&240|h>>2;if(s.push(w),g!==64){const R=h<<6&192|g;s.push(R)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class _d extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ed=function(n){const e=Ml(n);return Ol.encodeByteArray(e,!0)},Ps=function(n){return Ed(n).replace(/\./g,"")},Td=function(n){try{return Ol.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function bd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Id=()=>bd().__FIREBASE_DEFAULTS__,Ad=()=>{if(typeof process>"u"||typeof da>"u")return;const n=da.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},wd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Td(n[1]);return e&&JSON.parse(e)},vi=()=>{try{return yd()||Id()||Ad()||wd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Sd=n=>{var e,t;return(t=(e=vi())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Rd=n=>{const e=Sd(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Fl=()=>{var n;return(n=vi())==null?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function _i(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Pd(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Dd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Ps(JSON.stringify(t)),Ps(JSON.stringify(a)),""].join(".")}const Cn={};function Vd(){const n={prod:[],emulator:[]};for(const e of Object.keys(Cn))Cn[e]?n.emulator.push(e):n.prod.push(e);return n}function xd(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let ha=!1;function Nd(n,e){if(typeof window>"u"||typeof document>"u"||!_i(window.location.host)||Cn[n]===e||Cn[n]||ha)return;Cn[n]=e;function t(E){return`__firebase__banner__${E}`}const s="__firebase__banner",o=Vd().prod.length>0;function a(){const E=document.getElementById(s);E&&E.remove()}function c(E){E.style.display="flex",E.style.background="#7faaf0",E.style.position="fixed",E.style.bottom="5px",E.style.left="5px",E.style.padding=".5em",E.style.borderRadius="5px",E.style.alignItems="center"}function d(E,w){E.setAttribute("width","24"),E.setAttribute("id",w),E.setAttribute("height","24"),E.setAttribute("viewBox","0 0 24 24"),E.setAttribute("fill","none"),E.style.marginLeft="-6px"}function h(){const E=document.createElement("span");return E.style.cursor="pointer",E.style.marginLeft="16px",E.style.fontSize="24px",E.innerHTML=" &times;",E.onclick=()=>{ha=!0,a()},E}function m(E,w){E.setAttribute("id",w),E.innerText="Learn more",E.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",E.setAttribute("target","__blank"),E.style.paddingLeft="5px",E.style.textDecoration="underline"}function g(){const E=xd(s),w=t("text"),R=document.getElementById(w)||document.createElement("span"),D=t("learnmore"),x=document.getElementById(D)||document.createElement("a"),V=t("preprendIcon"),k=document.getElementById(V)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(E.created){const F=E.element;c(F),m(x,D);const O=h();d(k,V),F.append(k,R,x,O),document.body.appendChild(F)}o?(R.innerText="Preview backend disconnected.",k.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",w)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ld(){var e;const n=(e=vi())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Md(){return!Ld()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Od(){try{return typeof indexedDB=="object"}catch{return!1}}function Fd(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var o;e(((o=r.error)==null?void 0:o.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d="FirebaseError";class en extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=$d,Object.setPrototypeOf(this,en.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$l.prototype.create)}}class $l{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,o=this.errors[e],a=o?qd(o,s):"Error",c=`${this.serviceName}: ${a} (${r}).`;return new en(r,c,s)}}function qd(n,e){return n.replace(Bd,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Bd=/\{\$([^}]+)}/g;function Ds(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const o=n[r],a=e[r];if(fa(o)&&fa(a)){if(!Ds(o,a))return!1}else if(o!==a)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function fa(n){return n!==null&&typeof n=="object"}/**
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
 */function Ge(n){return n&&n._delegate?n._delegate:n}class Ln{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const St="[DEFAULT]";/**
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
 */class Ud{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Cd;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zd(e))try{this.getOrInitializeService({instanceIdentifier:St})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:r});s.resolve(o)}catch{}}}}clearInstance(e=St){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=St){return this.instances.has(e)}getOptions(e=St){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);s===c&&a.resolve(r)}return r}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:jd(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=St){return this.component?this.component.multipleInstances?e:St:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jd(n){return n===St?void 0:n}function zd(n){return n.instantiationMode==="EAGER"}/**
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
 */var K;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(K||(K={}));const Hd={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},Qd=K.INFO,Jd={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},Wd=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=Jd[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ql{constructor(e){this.name=e,this._logLevel=Qd,this._logHandler=Wd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in K))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Hd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...e),this._logHandler(this,K.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...e),this._logHandler(this,K.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,K.INFO,...e),this._logHandler(this,K.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,K.WARN,...e),this._logHandler(this,K.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...e),this._logHandler(this,K.ERROR,...e)}}const Kd=(n,e)=>e.some(t=>n instanceof t);let ma,pa;function Yd(){return ma||(ma=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Xd(){return pa||(pa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bl=new WeakMap,Qr=new WeakMap,Ul=new WeakMap,Mr=new WeakMap,Ei=new WeakMap;function Zd(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(ot(n.result)),r()},a=()=>{s(n.error),r()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Bl.set(t,n)}).catch(()=>{}),Ei.set(e,n),e}function eh(n){if(Qr.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),r()},a=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Qr.set(n,e)}let Jr={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Qr.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ul.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ot(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function th(n){Jr=n(Jr)}function nh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Or(this),e,...t);return Ul.set(s,e.sort?e.sort():[e]),ot(s)}:Xd().includes(n)?function(...e){return n.apply(Or(this),e),ot(Bl.get(this))}:function(...e){return ot(n.apply(Or(this),e))}}function sh(n){return typeof n=="function"?nh(n):(n instanceof IDBTransaction&&eh(n),Kd(n,Yd())?new Proxy(n,Jr):n)}function ot(n){if(n instanceof IDBRequest)return Zd(n);if(Mr.has(n))return Mr.get(n);const e=sh(n);return e!==n&&(Mr.set(n,e),Ei.set(e,n)),e}const Or=n=>Ei.get(n);function rh(n,e,{blocked:t,upgrade:s,blocking:r,terminated:o}={}){const a=indexedDB.open(n,e),c=ot(a);return s&&a.addEventListener("upgradeneeded",d=>{s(ot(a.result),d.oldVersion,d.newVersion,ot(a.transaction),d)}),t&&a.addEventListener("blocked",d=>t(d.oldVersion,d.newVersion,d)),c.then(d=>{o&&d.addEventListener("close",()=>o()),r&&d.addEventListener("versionchange",h=>r(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const ih=["get","getKey","getAll","getAllKeys","count"],oh=["put","add","delete","clear"],Fr=new Map;function ga(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Fr.get(e))return Fr.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=oh.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||ih.includes(t)))return;const o=async function(a,...c){const d=this.transaction(a,r?"readwrite":"readonly");let h=d.store;return s&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),r&&d.done]))[0]};return Fr.set(e,o),o}th(n=>({...n,get:(e,t,s)=>ga(e,t)||n.get(e,t,s),has:(e,t)=>!!ga(e,t)||n.has(e,t)}));/**
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
 */class ah{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(lh(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function lh(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wr="@firebase/app",ya="0.14.9";/**
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
 */const Qe=new ql("@firebase/app"),ch="@firebase/app-compat",uh="@firebase/analytics-compat",dh="@firebase/analytics",hh="@firebase/app-check-compat",fh="@firebase/app-check",mh="@firebase/auth",ph="@firebase/auth-compat",gh="@firebase/database",yh="@firebase/data-connect",vh="@firebase/database-compat",_h="@firebase/functions",Eh="@firebase/functions-compat",Th="@firebase/installations",bh="@firebase/installations-compat",Ih="@firebase/messaging",Ah="@firebase/messaging-compat",wh="@firebase/performance",Sh="@firebase/performance-compat",Rh="@firebase/remote-config",Ch="@firebase/remote-config-compat",Ph="@firebase/storage",Dh="@firebase/storage-compat",Vh="@firebase/firestore",xh="@firebase/ai",Nh="@firebase/firestore-compat",kh="firebase",Lh="12.10.0";/**
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
 */const Kr="[DEFAULT]",Mh={[Wr]:"fire-core",[ch]:"fire-core-compat",[dh]:"fire-analytics",[uh]:"fire-analytics-compat",[fh]:"fire-app-check",[hh]:"fire-app-check-compat",[mh]:"fire-auth",[ph]:"fire-auth-compat",[gh]:"fire-rtdb",[yh]:"fire-data-connect",[vh]:"fire-rtdb-compat",[_h]:"fire-fn",[Eh]:"fire-fn-compat",[Th]:"fire-iid",[bh]:"fire-iid-compat",[Ih]:"fire-fcm",[Ah]:"fire-fcm-compat",[wh]:"fire-perf",[Sh]:"fire-perf-compat",[Rh]:"fire-rc",[Ch]:"fire-rc-compat",[Ph]:"fire-gcs",[Dh]:"fire-gcs-compat",[Vh]:"fire-fst",[Nh]:"fire-fst-compat",[xh]:"fire-vertex","fire-js":"fire-js",[kh]:"fire-js-all"};/**
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
 */const Vs=new Map,Oh=new Map,Yr=new Map;function va(n,e){try{n.container.addComponent(e)}catch(t){Qe.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function xs(n){const e=n.name;if(Yr.has(e))return Qe.debug(`There were multiple attempts to register component ${e}.`),!1;Yr.set(e,n);for(const t of Vs.values())va(t,n);for(const t of Oh.values())va(t,n);return!0}function Fh(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function $h(n){return n==null?!1:n.settings!==void 0}/**
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
 */const qh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},at=new $l("app","Firebase",qh);/**
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
 */class Bh{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw at.create("app-deleted",{appName:this._name})}}/**
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
 */const Uh=Lh;function jl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:Kr,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw at.create("bad-app-name",{appName:String(r)});if(t||(t=Fl()),!t)throw at.create("no-options");const o=Vs.get(r);if(o){if(Ds(t,o.options)&&Ds(s,o.config))return o;throw at.create("duplicate-app",{appName:r})}const a=new Gd(r);for(const d of Yr.values())a.addComponent(d);const c=new Bh(t,s,a);return Vs.set(r,c),c}function jh(n=Kr){const e=Vs.get(n);if(!e&&n===Kr&&Fl())return jl();if(!e)throw at.create("no-app",{appName:n});return e}function Ht(n,e,t){let s=Mh[n]??n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qe.warn(a.join(" "));return}xs(new Ln(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const zh="firebase-heartbeat-database",Gh=1,Mn="firebase-heartbeat-store";let $r=null;function zl(){return $r||($r=rh(zh,Gh,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Mn)}catch(t){console.warn(t)}}}}).catch(n=>{throw at.create("idb-open",{originalErrorMessage:n.message})})),$r}async function Hh(n){try{const t=(await zl()).transaction(Mn),s=await t.objectStore(Mn).get(Gl(n));return await t.done,s}catch(e){if(e instanceof en)Qe.warn(e.message);else{const t=at.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qe.warn(t.message)}}}async function _a(n,e){try{const s=(await zl()).transaction(Mn,"readwrite");await s.objectStore(Mn).put(e,Gl(n)),await s.done}catch(t){if(t instanceof en)Qe.warn(t.message);else{const s=at.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Qe.warn(s.message)}}}function Gl(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Qh=1024,Jh=30;class Wh{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Yh(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ea();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:r}),this._heartbeatsCache.heartbeats.length>Jh){const a=Xh(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Qe.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ea(),{heartbeatsToSend:s,unsentEntries:r}=Kh(this._heartbeatsCache.heartbeats),o=Ps(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return Qe.warn(t),""}}}function Ea(){return new Date().toISOString().substring(0,10)}function Kh(n,e=Qh){const t=[];let s=n.slice();for(const r of n){const o=t.find(a=>a.agent===r.agent);if(o){if(o.dates.push(r.date),Ta(t)>e){o.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),Ta(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Yh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Od()?Fd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Hh(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return _a(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return _a(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ta(n){return Ps(JSON.stringify({version:2,heartbeats:n})).length}function Xh(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function Zh(n){xs(new Ln("platform-logger",e=>new ah(e),"PRIVATE")),xs(new Ln("heartbeat",e=>new Wh(e),"PRIVATE")),Ht(Wr,ya,n),Ht(Wr,ya,"esm2020"),Ht("fire-js","")}Zh("");var ef="firebase",tf="12.10.0";/**
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
 */Ht(ef,tf,"app");var ba=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var lt,Hl;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,p){function y(){}y.prototype=p.prototype,b.F=p.prototype,b.prototype=new y,b.prototype.constructor=b,b.D=function(T,_,I){for(var v=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)v[Y-2]=arguments[Y];return p.prototype[_].apply(T,v)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(b,p,y){y||(y=0);const T=Array(16);if(typeof p=="string")for(var _=0;_<16;++_)T[_]=p.charCodeAt(y++)|p.charCodeAt(y++)<<8|p.charCodeAt(y++)<<16|p.charCodeAt(y++)<<24;else for(_=0;_<16;++_)T[_]=p[y++]|p[y++]<<8|p[y++]<<16|p[y++]<<24;p=b.g[0],y=b.g[1],_=b.g[2];let I=b.g[3],v;v=p+(I^y&(_^I))+T[0]+3614090360&4294967295,p=y+(v<<7&4294967295|v>>>25),v=I+(_^p&(y^_))+T[1]+3905402710&4294967295,I=p+(v<<12&4294967295|v>>>20),v=_+(y^I&(p^y))+T[2]+606105819&4294967295,_=I+(v<<17&4294967295|v>>>15),v=y+(p^_&(I^p))+T[3]+3250441966&4294967295,y=_+(v<<22&4294967295|v>>>10),v=p+(I^y&(_^I))+T[4]+4118548399&4294967295,p=y+(v<<7&4294967295|v>>>25),v=I+(_^p&(y^_))+T[5]+1200080426&4294967295,I=p+(v<<12&4294967295|v>>>20),v=_+(y^I&(p^y))+T[6]+2821735955&4294967295,_=I+(v<<17&4294967295|v>>>15),v=y+(p^_&(I^p))+T[7]+4249261313&4294967295,y=_+(v<<22&4294967295|v>>>10),v=p+(I^y&(_^I))+T[8]+1770035416&4294967295,p=y+(v<<7&4294967295|v>>>25),v=I+(_^p&(y^_))+T[9]+2336552879&4294967295,I=p+(v<<12&4294967295|v>>>20),v=_+(y^I&(p^y))+T[10]+4294925233&4294967295,_=I+(v<<17&4294967295|v>>>15),v=y+(p^_&(I^p))+T[11]+2304563134&4294967295,y=_+(v<<22&4294967295|v>>>10),v=p+(I^y&(_^I))+T[12]+1804603682&4294967295,p=y+(v<<7&4294967295|v>>>25),v=I+(_^p&(y^_))+T[13]+4254626195&4294967295,I=p+(v<<12&4294967295|v>>>20),v=_+(y^I&(p^y))+T[14]+2792965006&4294967295,_=I+(v<<17&4294967295|v>>>15),v=y+(p^_&(I^p))+T[15]+1236535329&4294967295,y=_+(v<<22&4294967295|v>>>10),v=p+(_^I&(y^_))+T[1]+4129170786&4294967295,p=y+(v<<5&4294967295|v>>>27),v=I+(y^_&(p^y))+T[6]+3225465664&4294967295,I=p+(v<<9&4294967295|v>>>23),v=_+(p^y&(I^p))+T[11]+643717713&4294967295,_=I+(v<<14&4294967295|v>>>18),v=y+(I^p&(_^I))+T[0]+3921069994&4294967295,y=_+(v<<20&4294967295|v>>>12),v=p+(_^I&(y^_))+T[5]+3593408605&4294967295,p=y+(v<<5&4294967295|v>>>27),v=I+(y^_&(p^y))+T[10]+38016083&4294967295,I=p+(v<<9&4294967295|v>>>23),v=_+(p^y&(I^p))+T[15]+3634488961&4294967295,_=I+(v<<14&4294967295|v>>>18),v=y+(I^p&(_^I))+T[4]+3889429448&4294967295,y=_+(v<<20&4294967295|v>>>12),v=p+(_^I&(y^_))+T[9]+568446438&4294967295,p=y+(v<<5&4294967295|v>>>27),v=I+(y^_&(p^y))+T[14]+3275163606&4294967295,I=p+(v<<9&4294967295|v>>>23),v=_+(p^y&(I^p))+T[3]+4107603335&4294967295,_=I+(v<<14&4294967295|v>>>18),v=y+(I^p&(_^I))+T[8]+1163531501&4294967295,y=_+(v<<20&4294967295|v>>>12),v=p+(_^I&(y^_))+T[13]+2850285829&4294967295,p=y+(v<<5&4294967295|v>>>27),v=I+(y^_&(p^y))+T[2]+4243563512&4294967295,I=p+(v<<9&4294967295|v>>>23),v=_+(p^y&(I^p))+T[7]+1735328473&4294967295,_=I+(v<<14&4294967295|v>>>18),v=y+(I^p&(_^I))+T[12]+2368359562&4294967295,y=_+(v<<20&4294967295|v>>>12),v=p+(y^_^I)+T[5]+4294588738&4294967295,p=y+(v<<4&4294967295|v>>>28),v=I+(p^y^_)+T[8]+2272392833&4294967295,I=p+(v<<11&4294967295|v>>>21),v=_+(I^p^y)+T[11]+1839030562&4294967295,_=I+(v<<16&4294967295|v>>>16),v=y+(_^I^p)+T[14]+4259657740&4294967295,y=_+(v<<23&4294967295|v>>>9),v=p+(y^_^I)+T[1]+2763975236&4294967295,p=y+(v<<4&4294967295|v>>>28),v=I+(p^y^_)+T[4]+1272893353&4294967295,I=p+(v<<11&4294967295|v>>>21),v=_+(I^p^y)+T[7]+4139469664&4294967295,_=I+(v<<16&4294967295|v>>>16),v=y+(_^I^p)+T[10]+3200236656&4294967295,y=_+(v<<23&4294967295|v>>>9),v=p+(y^_^I)+T[13]+681279174&4294967295,p=y+(v<<4&4294967295|v>>>28),v=I+(p^y^_)+T[0]+3936430074&4294967295,I=p+(v<<11&4294967295|v>>>21),v=_+(I^p^y)+T[3]+3572445317&4294967295,_=I+(v<<16&4294967295|v>>>16),v=y+(_^I^p)+T[6]+76029189&4294967295,y=_+(v<<23&4294967295|v>>>9),v=p+(y^_^I)+T[9]+3654602809&4294967295,p=y+(v<<4&4294967295|v>>>28),v=I+(p^y^_)+T[12]+3873151461&4294967295,I=p+(v<<11&4294967295|v>>>21),v=_+(I^p^y)+T[15]+530742520&4294967295,_=I+(v<<16&4294967295|v>>>16),v=y+(_^I^p)+T[2]+3299628645&4294967295,y=_+(v<<23&4294967295|v>>>9),v=p+(_^(y|~I))+T[0]+4096336452&4294967295,p=y+(v<<6&4294967295|v>>>26),v=I+(y^(p|~_))+T[7]+1126891415&4294967295,I=p+(v<<10&4294967295|v>>>22),v=_+(p^(I|~y))+T[14]+2878612391&4294967295,_=I+(v<<15&4294967295|v>>>17),v=y+(I^(_|~p))+T[5]+4237533241&4294967295,y=_+(v<<21&4294967295|v>>>11),v=p+(_^(y|~I))+T[12]+1700485571&4294967295,p=y+(v<<6&4294967295|v>>>26),v=I+(y^(p|~_))+T[3]+2399980690&4294967295,I=p+(v<<10&4294967295|v>>>22),v=_+(p^(I|~y))+T[10]+4293915773&4294967295,_=I+(v<<15&4294967295|v>>>17),v=y+(I^(_|~p))+T[1]+2240044497&4294967295,y=_+(v<<21&4294967295|v>>>11),v=p+(_^(y|~I))+T[8]+1873313359&4294967295,p=y+(v<<6&4294967295|v>>>26),v=I+(y^(p|~_))+T[15]+4264355552&4294967295,I=p+(v<<10&4294967295|v>>>22),v=_+(p^(I|~y))+T[6]+2734768916&4294967295,_=I+(v<<15&4294967295|v>>>17),v=y+(I^(_|~p))+T[13]+1309151649&4294967295,y=_+(v<<21&4294967295|v>>>11),v=p+(_^(y|~I))+T[4]+4149444226&4294967295,p=y+(v<<6&4294967295|v>>>26),v=I+(y^(p|~_))+T[11]+3174756917&4294967295,I=p+(v<<10&4294967295|v>>>22),v=_+(p^(I|~y))+T[2]+718787259&4294967295,_=I+(v<<15&4294967295|v>>>17),v=y+(I^(_|~p))+T[9]+3951481745&4294967295,b.g[0]=b.g[0]+p&4294967295,b.g[1]=b.g[1]+(_+(v<<21&4294967295|v>>>11))&4294967295,b.g[2]=b.g[2]+_&4294967295,b.g[3]=b.g[3]+I&4294967295}s.prototype.v=function(b,p){p===void 0&&(p=b.length);const y=p-this.blockSize,T=this.C;let _=this.h,I=0;for(;I<p;){if(_==0)for(;I<=y;)r(this,b,I),I+=this.blockSize;if(typeof b=="string"){for(;I<p;)if(T[_++]=b.charCodeAt(I++),_==this.blockSize){r(this,T),_=0;break}}else for(;I<p;)if(T[_++]=b[I++],_==this.blockSize){r(this,T),_=0;break}}this.h=_,this.o+=p},s.prototype.A=function(){var b=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);b[0]=128;for(var p=1;p<b.length-8;++p)b[p]=0;p=this.o*8;for(var y=b.length-8;y<b.length;++y)b[y]=p&255,p/=256;for(this.v(b),b=Array(16),p=0,y=0;y<4;++y)for(let T=0;T<32;T+=8)b[p++]=this.g[y]>>>T&255;return b};function o(b,p){var y=c;return Object.prototype.hasOwnProperty.call(y,b)?y[b]:y[b]=p(b)}function a(b,p){this.h=p;const y=[];let T=!0;for(let _=b.length-1;_>=0;_--){const I=b[_]|0;T&&I==p||(y[_]=I,T=!1)}this.g=y}var c={};function d(b){return-128<=b&&b<128?o(b,function(p){return new a([p|0],p<0?-1:0)}):new a([b|0],b<0?-1:0)}function h(b){if(isNaN(b)||!isFinite(b))return g;if(b<0)return x(h(-b));const p=[];let y=1;for(let T=0;b>=y;T++)p[T]=b/y|0,y*=4294967296;return new a(p,0)}function m(b,p){if(b.length==0)throw Error("number format error: empty string");if(p=p||10,p<2||36<p)throw Error("radix out of range: "+p);if(b.charAt(0)=="-")return x(m(b.substring(1),p));if(b.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=h(Math.pow(p,8));let T=g;for(let I=0;I<b.length;I+=8){var _=Math.min(8,b.length-I);const v=parseInt(b.substring(I,I+_),p);_<8?(_=h(Math.pow(p,_)),T=T.j(_).add(h(v))):(T=T.j(y),T=T.add(h(v)))}return T}var g=d(0),E=d(1),w=d(16777216);n=a.prototype,n.m=function(){if(D(this))return-x(this).m();let b=0,p=1;for(let y=0;y<this.g.length;y++){const T=this.i(y);b+=(T>=0?T:4294967296+T)*p,p*=4294967296}return b},n.toString=function(b){if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(R(this))return"0";if(D(this))return"-"+x(this).toString(b);const p=h(Math.pow(b,6));var y=this;let T="";for(;;){const _=O(y,p).g;y=V(y,_.j(p));let I=((y.g.length>0?y.g[0]:y.h)>>>0).toString(b);if(y=_,R(y))return I+T;for(;I.length<6;)I="0"+I;T=I+T}},n.i=function(b){return b<0?0:b<this.g.length?this.g[b]:this.h};function R(b){if(b.h!=0)return!1;for(let p=0;p<b.g.length;p++)if(b.g[p]!=0)return!1;return!0}function D(b){return b.h==-1}n.l=function(b){return b=V(this,b),D(b)?-1:R(b)?0:1};function x(b){const p=b.g.length,y=[];for(let T=0;T<p;T++)y[T]=~b.g[T];return new a(y,~b.h).add(E)}n.abs=function(){return D(this)?x(this):this},n.add=function(b){const p=Math.max(this.g.length,b.g.length),y=[];let T=0;for(let _=0;_<=p;_++){let I=T+(this.i(_)&65535)+(b.i(_)&65535),v=(I>>>16)+(this.i(_)>>>16)+(b.i(_)>>>16);T=v>>>16,I&=65535,v&=65535,y[_]=v<<16|I}return new a(y,y[y.length-1]&-2147483648?-1:0)};function V(b,p){return b.add(x(p))}n.j=function(b){if(R(this)||R(b))return g;if(D(this))return D(b)?x(this).j(x(b)):x(x(this).j(b));if(D(b))return x(this.j(x(b)));if(this.l(w)<0&&b.l(w)<0)return h(this.m()*b.m());const p=this.g.length+b.g.length,y=[];for(var T=0;T<2*p;T++)y[T]=0;for(T=0;T<this.g.length;T++)for(let _=0;_<b.g.length;_++){const I=this.i(T)>>>16,v=this.i(T)&65535,Y=b.i(_)>>>16,oe=b.i(_)&65535;y[2*T+2*_]+=v*oe,k(y,2*T+2*_),y[2*T+2*_+1]+=I*oe,k(y,2*T+2*_+1),y[2*T+2*_+1]+=v*Y,k(y,2*T+2*_+1),y[2*T+2*_+2]+=I*Y,k(y,2*T+2*_+2)}for(b=0;b<p;b++)y[b]=y[2*b+1]<<16|y[2*b];for(b=p;b<2*p;b++)y[b]=0;return new a(y,0)};function k(b,p){for(;(b[p]&65535)!=b[p];)b[p+1]+=b[p]>>>16,b[p]&=65535,p++}function F(b,p){this.g=b,this.h=p}function O(b,p){if(R(p))throw Error("division by zero");if(R(b))return new F(g,g);if(D(b))return p=O(x(b),p),new F(x(p.g),x(p.h));if(D(p))return p=O(b,x(p)),new F(x(p.g),p.h);if(b.g.length>30){if(D(b)||D(p))throw Error("slowDivide_ only works with positive integers.");for(var y=E,T=p;T.l(b)<=0;)y=$(y),T=$(T);var _=q(y,1),I=q(T,1);for(T=q(T,2),y=q(y,2);!R(T);){var v=I.add(T);v.l(b)<=0&&(_=_.add(y),I=v),T=q(T,1),y=q(y,1)}return p=V(b,_.j(p)),new F(_,p)}for(_=g;b.l(p)>=0;){for(y=Math.max(1,Math.floor(b.m()/p.m())),T=Math.ceil(Math.log(y)/Math.LN2),T=T<=48?1:Math.pow(2,T-48),I=h(y),v=I.j(p);D(v)||v.l(b)>0;)y-=T,I=h(y),v=I.j(p);R(I)&&(I=E),_=_.add(I),b=V(b,v)}return new F(_,b)}n.B=function(b){return O(this,b).h},n.and=function(b){const p=Math.max(this.g.length,b.g.length),y=[];for(let T=0;T<p;T++)y[T]=this.i(T)&b.i(T);return new a(y,this.h&b.h)},n.or=function(b){const p=Math.max(this.g.length,b.g.length),y=[];for(let T=0;T<p;T++)y[T]=this.i(T)|b.i(T);return new a(y,this.h|b.h)},n.xor=function(b){const p=Math.max(this.g.length,b.g.length),y=[];for(let T=0;T<p;T++)y[T]=this.i(T)^b.i(T);return new a(y,this.h^b.h)};function $(b){const p=b.g.length+1,y=[];for(let T=0;T<p;T++)y[T]=b.i(T)<<1|b.i(T-1)>>>31;return new a(y,b.h)}function q(b,p){const y=p>>5;p%=32;const T=b.g.length-y,_=[];for(let I=0;I<T;I++)_[I]=p>0?b.i(I+y)>>>p|b.i(I+y+1)<<32-p:b.i(I+y);return new a(_,b.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,Hl=s,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=m,lt=a}).apply(typeof ba<"u"?ba:typeof self<"u"?self:typeof window<"u"?window:{});var ps=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ql,An,Jl,Ts,Xr,Wl,Kl,Yl;(function(){var n,e=Object.defineProperty;function t(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof ps=="object"&&ps];for(var l=0;l<i.length;++l){var u=i[l];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var s=t(this);function r(i,l){if(l)e:{var u=s;i=i.split(".");for(var f=0;f<i.length-1;f++){var A=i[f];if(!(A in u))break e;u=u[A]}i=i[i.length-1],f=u[i],l=l(f),l!=f&&l!=null&&e(u,i,{configurable:!0,writable:!0,value:l})}}r("Symbol.dispose",function(i){return i||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(i){return i||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(i){return i||function(l){var u=[],f;for(f in l)Object.prototype.hasOwnProperty.call(l,f)&&u.push([f,l[f]]);return u}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(i){var l=typeof i;return l=="object"&&i!=null||l=="function"}function d(i,l,u){return i.call.apply(i.bind,arguments)}function h(i,l,u){return h=d,h.apply(null,arguments)}function m(i,l){var u=Array.prototype.slice.call(arguments,1);return function(){var f=u.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function g(i,l){function u(){}u.prototype=l.prototype,i.Z=l.prototype,i.prototype=new u,i.prototype.constructor=i,i.Ob=function(f,A,S){for(var N=Array(arguments.length-2),H=2;H<arguments.length;H++)N[H-2]=arguments[H];return l.prototype[A].apply(f,N)}}var E=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?i=>i&&AsyncContext.Snapshot.wrap(i):i=>i;function w(i){const l=i.length;if(l>0){const u=Array(l);for(let f=0;f<l;f++)u[f]=i[f];return u}return[]}function R(i,l){for(let f=1;f<arguments.length;f++){const A=arguments[f];var u=typeof A;if(u=u!="object"?u:A?Array.isArray(A)?"array":u:"null",u=="array"||u=="object"&&typeof A.length=="number"){u=i.length||0;const S=A.length||0;i.length=u+S;for(let N=0;N<S;N++)i[u+N]=A[N]}else i.push(A)}}class D{constructor(l,u){this.i=l,this.j=u,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function x(i){a.setTimeout(()=>{throw i},0)}function V(){var i=b;let l=null;return i.g&&(l=i.g,i.g=i.g.next,i.g||(i.h=null),l.next=null),l}class k{constructor(){this.h=this.g=null}add(l,u){const f=F.get();f.set(l,u),this.h?this.h.next=f:this.g=f,this.h=f}}var F=new D(()=>new O,i=>i.reset());class O{constructor(){this.next=this.g=this.h=null}set(l,u){this.h=l,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let $,q=!1,b=new k,p=()=>{const i=Promise.resolve(void 0);$=()=>{i.then(y)}};function y(){for(var i;i=V();){try{i.h.call(i.g)}catch(u){x(u)}var l=F;l.j(i),l.h<100&&(l.h++,i.next=l.g,l.g=i)}q=!1}function T(){this.u=this.u,this.C=this.C}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function _(i,l){this.type=i,this.g=this.target=l,this.defaultPrevented=!1}_.prototype.h=function(){this.defaultPrevented=!0};var I=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var i=!1,l=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const u=()=>{};a.addEventListener("test",u,l),a.removeEventListener("test",u,l)}catch{}return i})();function v(i){return/^[\s\xa0]*$/.test(i)}function Y(i,l){_.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i&&this.init(i,l)}g(Y,_),Y.prototype.init=function(i,l){const u=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;this.target=i.target||i.srcElement,this.g=l,l=i.relatedTarget,l||(u=="mouseover"?l=i.fromElement:u=="mouseout"&&(l=i.toElement)),this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=i.pointerType,this.state=i.state,this.i=i,i.defaultPrevented&&Y.Z.h.call(this)},Y.prototype.h=function(){Y.Z.h.call(this);const i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var oe="closure_listenable_"+(Math.random()*1e6|0),Ye=0;function Ft(i,l,u,f,A){this.listener=i,this.proxy=null,this.src=l,this.type=u,this.capture=!!f,this.ha=A,this.key=++Ye,this.da=this.fa=!1}function Zn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function es(i,l,u){for(const f in i)l.call(u,i[f],f,i)}function Fu(i,l){for(const u in i)l.call(void 0,i[u],u,i)}function co(i){const l={};for(const u in i)l[u]=i[u];return l}const uo="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ho(i,l){let u,f;for(let A=1;A<arguments.length;A++){f=arguments[A];for(u in f)i[u]=f[u];for(let S=0;S<uo.length;S++)u=uo[S],Object.prototype.hasOwnProperty.call(f,u)&&(i[u]=f[u])}}function ts(i){this.src=i,this.g={},this.h=0}ts.prototype.add=function(i,l,u,f,A){const S=i.toString();i=this.g[S],i||(i=this.g[S]=[],this.h++);const N=fr(i,l,f,A);return N>-1?(l=i[N],u||(l.fa=!1)):(l=new Ft(l,this.src,S,!!f,A),l.fa=u,i.push(l)),l};function hr(i,l){const u=l.type;if(u in i.g){var f=i.g[u],A=Array.prototype.indexOf.call(f,l,void 0),S;(S=A>=0)&&Array.prototype.splice.call(f,A,1),S&&(Zn(l),i.g[u].length==0&&(delete i.g[u],i.h--))}}function fr(i,l,u,f){for(let A=0;A<i.length;++A){const S=i[A];if(!S.da&&S.listener==l&&S.capture==!!u&&S.ha==f)return A}return-1}var mr="closure_lm_"+(Math.random()*1e6|0),pr={};function fo(i,l,u,f,A){if(Array.isArray(l)){for(let S=0;S<l.length;S++)fo(i,l[S],u,f,A);return null}return u=go(u),i&&i[oe]?i.J(l,u,c(f)?!!f.capture:!1,A):$u(i,l,u,!1,f,A)}function $u(i,l,u,f,A,S){if(!l)throw Error("Invalid event type");const N=c(A)?!!A.capture:!!A;let H=yr(i);if(H||(i[mr]=H=new ts(i)),u=H.add(l,u,f,N,S),u.proxy)return u;if(f=qu(),u.proxy=f,f.src=i,f.listener=u,i.addEventListener)I||(A=N),A===void 0&&(A=!1),i.addEventListener(l.toString(),f,A);else if(i.attachEvent)i.attachEvent(po(l.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return u}function qu(){function i(u){return l.call(i.src,i.listener,u)}const l=Bu;return i}function mo(i,l,u,f,A){if(Array.isArray(l))for(var S=0;S<l.length;S++)mo(i,l[S],u,f,A);else f=c(f)?!!f.capture:!!f,u=go(u),i&&i[oe]?(i=i.i,S=String(l).toString(),S in i.g&&(l=i.g[S],u=fr(l,u,f,A),u>-1&&(Zn(l[u]),Array.prototype.splice.call(l,u,1),l.length==0&&(delete i.g[S],i.h--)))):i&&(i=yr(i))&&(l=i.g[l.toString()],i=-1,l&&(i=fr(l,u,f,A)),(u=i>-1?l[i]:null)&&gr(u))}function gr(i){if(typeof i!="number"&&i&&!i.da){var l=i.src;if(l&&l[oe])hr(l.i,i);else{var u=i.type,f=i.proxy;l.removeEventListener?l.removeEventListener(u,f,i.capture):l.detachEvent?l.detachEvent(po(u),f):l.addListener&&l.removeListener&&l.removeListener(f),(u=yr(l))?(hr(u,i),u.h==0&&(u.src=null,l[mr]=null)):Zn(i)}}}function po(i){return i in pr?pr[i]:pr[i]="on"+i}function Bu(i,l){if(i.da)i=!0;else{l=new Y(l,this);const u=i.listener,f=i.ha||i.src;i.fa&&gr(i),i=u.call(f,l)}return i}function yr(i){return i=i[mr],i instanceof ts?i:null}var vr="__closure_events_fn_"+(Math.random()*1e9>>>0);function go(i){return typeof i=="function"?i:(i[vr]||(i[vr]=function(l){return i.handleEvent(l)}),i[vr])}function Ee(){T.call(this),this.i=new ts(this),this.M=this,this.G=null}g(Ee,T),Ee.prototype[oe]=!0,Ee.prototype.removeEventListener=function(i,l,u,f){mo(this,i,l,u,f)};function Se(i,l){var u,f=i.G;if(f)for(u=[];f;f=f.G)u.push(f);if(i=i.M,f=l.type||l,typeof l=="string")l=new _(l,i);else if(l instanceof _)l.target=l.target||i;else{var A=l;l=new _(f,i),ho(l,A)}A=!0;let S,N;if(u)for(N=u.length-1;N>=0;N--)S=l.g=u[N],A=ns(S,f,!0,l)&&A;if(S=l.g=i,A=ns(S,f,!0,l)&&A,A=ns(S,f,!1,l)&&A,u)for(N=0;N<u.length;N++)S=l.g=u[N],A=ns(S,f,!1,l)&&A}Ee.prototype.N=function(){if(Ee.Z.N.call(this),this.i){var i=this.i;for(const l in i.g){const u=i.g[l];for(let f=0;f<u.length;f++)Zn(u[f]);delete i.g[l],i.h--}}this.G=null},Ee.prototype.J=function(i,l,u,f){return this.i.add(String(i),l,!1,u,f)},Ee.prototype.K=function(i,l,u,f){return this.i.add(String(i),l,!0,u,f)};function ns(i,l,u,f){if(l=i.i.g[String(l)],!l)return!0;l=l.concat();let A=!0;for(let S=0;S<l.length;++S){const N=l[S];if(N&&!N.da&&N.capture==u){const H=N.listener,fe=N.ha||N.src;N.fa&&hr(i.i,N),A=H.call(fe,f)!==!1&&A}}return A&&!f.defaultPrevented}function Uu(i,l){if(typeof i!="function")if(i&&typeof i.handleEvent=="function")i=h(i.handleEvent,i);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:a.setTimeout(i,l||0)}function yo(i){i.g=Uu(()=>{i.g=null,i.i&&(i.i=!1,yo(i))},i.l);const l=i.h;i.h=null,i.m.apply(null,l)}class ju extends T{constructor(l,u){super(),this.m=l,this.l=u,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:yo(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function an(i){T.call(this),this.h=i,this.g={}}g(an,T);var vo=[];function _o(i){es(i.g,function(l,u){this.g.hasOwnProperty(u)&&gr(l)},i),i.g={}}an.prototype.N=function(){an.Z.N.call(this),_o(this)},an.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var _r=a.JSON.stringify,zu=a.JSON.parse,Gu=class{stringify(i){return a.JSON.stringify(i,void 0)}parse(i){return a.JSON.parse(i,void 0)}};function Eo(){}function To(){}var ln={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Er(){_.call(this,"d")}g(Er,_);function Tr(){_.call(this,"c")}g(Tr,_);var Tt={},bo=null;function ss(){return bo=bo||new Ee}Tt.Ia="serverreachability";function Io(i){_.call(this,Tt.Ia,i)}g(Io,_);function cn(i){const l=ss();Se(l,new Io(l))}Tt.STAT_EVENT="statevent";function Ao(i,l){_.call(this,Tt.STAT_EVENT,i),this.stat=l}g(Ao,_);function Re(i){const l=ss();Se(l,new Ao(l,i))}Tt.Ja="timingevent";function wo(i,l){_.call(this,Tt.Ja,i),this.size=l}g(wo,_);function un(i,l){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){i()},l)}function dn(){this.g=!0}dn.prototype.ua=function(){this.g=!1};function Hu(i,l,u,f,A,S){i.info(function(){if(i.g)if(S){var N="",H=S.split("&");for(let Z=0;Z<H.length;Z++){var fe=H[Z].split("=");if(fe.length>1){const pe=fe[0];fe=fe[1];const qe=pe.split("_");N=qe.length>=2&&qe[1]=="type"?N+(pe+"="+fe+"&"):N+(pe+"=redacted&")}}}else N=null;else N=S;return"XMLHTTP REQ ("+f+") [attempt "+A+"]: "+l+`
`+u+`
`+N})}function Qu(i,l,u,f,A,S,N){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+A+"]: "+l+`
`+u+`
`+S+" "+N})}function $t(i,l,u,f){i.info(function(){return"XMLHTTP TEXT ("+l+"): "+Wu(i,u)+(f?" "+f:"")})}function Ju(i,l){i.info(function(){return"TIMEOUT: "+l})}dn.prototype.info=function(){};function Wu(i,l){if(!i.g)return l;if(!l)return null;try{const S=JSON.parse(l);if(S){for(i=0;i<S.length;i++)if(Array.isArray(S[i])){var u=S[i];if(!(u.length<2)){var f=u[1];if(Array.isArray(f)&&!(f.length<1)){var A=f[0];if(A!="noop"&&A!="stop"&&A!="close")for(let N=1;N<f.length;N++)f[N]=""}}}}return _r(S)}catch{return l}}var rs={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},So={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ro;function br(){}g(br,Eo),br.prototype.g=function(){return new XMLHttpRequest},Ro=new br;function hn(i){return encodeURIComponent(String(i))}function Ku(i){var l=1;i=i.split(":");const u=[];for(;l>0&&i.length;)u.push(i.shift()),l--;return i.length&&u.push(i.join(":")),u}function Xe(i,l,u,f){this.j=i,this.i=l,this.l=u,this.S=f||1,this.V=new an(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Co}function Co(){this.i=null,this.g="",this.h=!1}var Po={},Ir={};function Ar(i,l,u){i.M=1,i.A=os($e(l)),i.u=u,i.R=!0,Do(i,null)}function Do(i,l){i.F=Date.now(),is(i),i.B=$e(i.A);var u=i.B,f=i.S;Array.isArray(f)||(f=[String(f)]),jo(u.i,"t",f),i.C=0,u=i.j.L,i.h=new Co,i.g=aa(i.j,u?l:null,!i.u),i.P>0&&(i.O=new ju(h(i.Y,i,i.g),i.P)),l=i.V,u=i.g,f=i.ba;var A="readystatechange";Array.isArray(A)||(A&&(vo[0]=A.toString()),A=vo);for(let S=0;S<A.length;S++){const N=fo(u,A[S],f||l.handleEvent,!1,l.h||l);if(!N)break;l.g[N.key]=N}l=i.J?co(i.J):{},i.u?(i.v||(i.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.B,i.v,i.u,l)):(i.v="GET",i.g.ea(i.B,i.v,null,l)),cn(),Hu(i.i,i.v,i.B,i.l,i.S,i.u)}Xe.prototype.ba=function(i){i=i.target;const l=this.O;l&&tt(i)==3?l.j():this.Y(i)},Xe.prototype.Y=function(i){try{if(i==this.g)e:{const H=tt(this.g),fe=this.g.ya(),Z=this.g.ca();if(!(H<3)&&(H!=3||this.g&&(this.h.h||this.g.la()||Ko(this.g)))){this.K||H!=4||fe==7||(fe==8||Z<=0?cn(3):cn(2)),wr(this);var l=this.g.ca();this.X=l;var u=Yu(this);if(this.o=l==200,Qu(this.i,this.v,this.B,this.l,this.S,H,l),this.o){if(this.U&&!this.L){t:{if(this.g){var f,A=this.g;if((f=A.g?A.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(f)){var S=f;break t}}S=null}if(i=S)$t(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Sr(this,i);else{this.o=!1,this.m=3,Re(12),bt(this),fn(this);break e}}if(this.R){i=!0;let pe;for(;!this.K&&this.C<u.length;)if(pe=Xu(this,u),pe==Ir){H==4&&(this.m=4,Re(14),i=!1),$t(this.i,this.l,null,"[Incomplete Response]");break}else if(pe==Po){this.m=4,Re(15),$t(this.i,this.l,u,"[Invalid Chunk]"),i=!1;break}else $t(this.i,this.l,pe,null),Sr(this,pe);if(Vo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),H!=4||u.length!=0||this.h.h||(this.m=1,Re(16),i=!1),this.o=this.o&&i,!i)$t(this.i,this.l,u,"[Invalid Chunked Response]"),bt(this),fn(this);else if(u.length>0&&!this.W){this.W=!0;var N=this.j;N.g==this&&N.aa&&!N.P&&(N.j.info("Great, no buffering proxy detected. Bytes received: "+u.length),kr(N),N.P=!0,Re(11))}}else $t(this.i,this.l,u,null),Sr(this,u);H==4&&bt(this),this.o&&!this.K&&(H==4?sa(this.j,this):(this.o=!1,is(this)))}else hd(this.g),l==400&&u.indexOf("Unknown SID")>0?(this.m=3,Re(12)):(this.m=0,Re(13)),bt(this),fn(this)}}}catch{}finally{}};function Yu(i){if(!Vo(i))return i.g.la();const l=Ko(i.g);if(l==="")return"";let u="";const f=l.length,A=tt(i.g)==4;if(!i.h.i){if(typeof TextDecoder>"u")return bt(i),fn(i),"";i.h.i=new a.TextDecoder}for(let S=0;S<f;S++)i.h.h=!0,u+=i.h.i.decode(l[S],{stream:!(A&&S==f-1)});return l.length=0,i.h.g+=u,i.C=0,i.h.g}function Vo(i){return i.g?i.v=="GET"&&i.M!=2&&i.j.Aa:!1}function Xu(i,l){var u=i.C,f=l.indexOf(`
`,u);return f==-1?Ir:(u=Number(l.substring(u,f)),isNaN(u)?Po:(f+=1,f+u>l.length?Ir:(l=l.slice(f,f+u),i.C=f+u,l)))}Xe.prototype.cancel=function(){this.K=!0,bt(this)};function is(i){i.T=Date.now()+i.H,xo(i,i.H)}function xo(i,l){if(i.D!=null)throw Error("WatchDog timer not null");i.D=un(h(i.aa,i),l)}function wr(i){i.D&&(a.clearTimeout(i.D),i.D=null)}Xe.prototype.aa=function(){this.D=null;const i=Date.now();i-this.T>=0?(Ju(this.i,this.B),this.M!=2&&(cn(),Re(17)),bt(this),this.m=2,fn(this)):xo(this,this.T-i)};function fn(i){i.j.I==0||i.K||sa(i.j,i)}function bt(i){wr(i);var l=i.O;l&&typeof l.dispose=="function"&&l.dispose(),i.O=null,_o(i.V),i.g&&(l=i.g,i.g=null,l.abort(),l.dispose())}function Sr(i,l){try{var u=i.j;if(u.I!=0&&(u.g==i||Rr(u.h,i))){if(!i.L&&Rr(u.h,i)&&u.I==3){try{var f=u.Ba.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var A=f;if(A[0]==0){e:if(!u.v){if(u.g)if(u.g.F+3e3<i.F)ds(u),cs(u);else break e;Nr(u),Re(18)}}else u.xa=A[1],0<u.xa-u.K&&A[2]<37500&&u.F&&u.A==0&&!u.C&&(u.C=un(h(u.Va,u),6e3));Lo(u.h)<=1&&u.ta&&(u.ta=void 0)}else At(u,11)}else if((i.L||u.g==i)&&ds(u),!v(l))for(A=u.Ba.g.parse(l),l=0;l<A.length;l++){let Z=A[l];const pe=Z[0];if(!(pe<=u.K))if(u.K=pe,Z=Z[1],u.I==2)if(Z[0]=="c"){u.M=Z[1],u.ba=Z[2];const qe=Z[3];qe!=null&&(u.ka=qe,u.j.info("VER="+u.ka));const wt=Z[4];wt!=null&&(u.za=wt,u.j.info("SVER="+u.za));const nt=Z[5];nt!=null&&typeof nt=="number"&&nt>0&&(f=1.5*nt,u.O=f,u.j.info("backChannelRequestTimeoutMs_="+f)),f=u;const st=i.g;if(st){const fs=st.g?st.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(fs){var S=f.h;S.g||fs.indexOf("spdy")==-1&&fs.indexOf("quic")==-1&&fs.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(Cr(S,S.h),S.h=null))}if(f.G){const Lr=st.g?st.g.getResponseHeader("X-HTTP-Session-Id"):null;Lr&&(f.wa=Lr,te(f.J,f.G,Lr))}}u.I=3,u.l&&u.l.ra(),u.aa&&(u.T=Date.now()-i.F,u.j.info("Handshake RTT: "+u.T+"ms")),f=u;var N=i;if(f.na=oa(f,f.L?f.ba:null,f.W),N.L){Mo(f.h,N);var H=N,fe=f.O;fe&&(H.H=fe),H.D&&(wr(H),is(H)),f.g=N}else ta(f);u.i.length>0&&us(u)}else Z[0]!="stop"&&Z[0]!="close"||At(u,7);else u.I==3&&(Z[0]=="stop"||Z[0]=="close"?Z[0]=="stop"?At(u,7):xr(u):Z[0]!="noop"&&u.l&&u.l.qa(Z),u.A=0)}}cn(4)}catch{}}var Zu=class{constructor(i,l){this.g=i,this.map=l}};function No(i){this.l=i||10,a.PerformanceNavigationTiming?(i=a.performance.getEntriesByType("navigation"),i=i.length>0&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ko(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Lo(i){return i.h?1:i.g?i.g.size:0}function Rr(i,l){return i.h?i.h==l:i.g?i.g.has(l):!1}function Cr(i,l){i.g?i.g.add(l):i.h=l}function Mo(i,l){i.h&&i.h==l?i.h=null:i.g&&i.g.has(l)&&i.g.delete(l)}No.prototype.cancel=function(){if(this.i=Oo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Oo(i){if(i.h!=null)return i.i.concat(i.h.G);if(i.g!=null&&i.g.size!==0){let l=i.i;for(const u of i.g.values())l=l.concat(u.G);return l}return w(i.i)}var Fo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ed(i,l){if(i){i=i.split("&");for(let u=0;u<i.length;u++){const f=i[u].indexOf("=");let A,S=null;f>=0?(A=i[u].substring(0,f),S=i[u].substring(f+1)):A=i[u],l(A,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function Ze(i){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;i instanceof Ze?(this.l=i.l,mn(this,i.j),this.o=i.o,this.g=i.g,pn(this,i.u),this.h=i.h,Pr(this,zo(i.i)),this.m=i.m):i&&(l=String(i).match(Fo))?(this.l=!1,mn(this,l[1]||"",!0),this.o=gn(l[2]||""),this.g=gn(l[3]||"",!0),pn(this,l[4]),this.h=gn(l[5]||"",!0),Pr(this,l[6]||"",!0),this.m=gn(l[7]||"")):(this.l=!1,this.i=new vn(null,this.l))}Ze.prototype.toString=function(){const i=[];var l=this.j;l&&i.push(yn(l,$o,!0),":");var u=this.g;return(u||l=="file")&&(i.push("//"),(l=this.o)&&i.push(yn(l,$o,!0),"@"),i.push(hn(u).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.u,u!=null&&i.push(":",String(u))),(u=this.h)&&(this.g&&u.charAt(0)!="/"&&i.push("/"),i.push(yn(u,u.charAt(0)=="/"?sd:nd,!0))),(u=this.i.toString())&&i.push("?",u),(u=this.m)&&i.push("#",yn(u,id)),i.join("")},Ze.prototype.resolve=function(i){const l=$e(this);let u=!!i.j;u?mn(l,i.j):u=!!i.o,u?l.o=i.o:u=!!i.g,u?l.g=i.g:u=i.u!=null;var f=i.h;if(u)pn(l,i.u);else if(u=!!i.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var A=l.h.lastIndexOf("/");A!=-1&&(f=l.h.slice(0,A+1)+f)}if(A=f,A==".."||A==".")f="";else if(A.indexOf("./")!=-1||A.indexOf("/.")!=-1){f=A.lastIndexOf("/",0)==0,A=A.split("/");const S=[];for(let N=0;N<A.length;){const H=A[N++];H=="."?f&&N==A.length&&S.push(""):H==".."?((S.length>1||S.length==1&&S[0]!="")&&S.pop(),f&&N==A.length&&S.push("")):(S.push(H),f=!0)}f=S.join("/")}else f=A}return u?l.h=f:u=i.i.toString()!=="",u?Pr(l,zo(i.i)):u=!!i.m,u&&(l.m=i.m),l};function $e(i){return new Ze(i)}function mn(i,l,u){i.j=u?gn(l,!0):l,i.j&&(i.j=i.j.replace(/:$/,""))}function pn(i,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);i.u=l}else i.u=null}function Pr(i,l,u){l instanceof vn?(i.i=l,od(i.i,i.l)):(u||(l=yn(l,rd)),i.i=new vn(l,i.l))}function te(i,l,u){i.i.set(l,u)}function os(i){return te(i,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),i}function gn(i,l){return i?l?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function yn(i,l,u){return typeof i=="string"?(i=encodeURI(i).replace(l,td),u&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function td(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var $o=/[#\/\?@]/g,nd=/[#\?:]/g,sd=/[#\?]/g,rd=/[#\?@]/g,id=/#/g;function vn(i,l){this.h=this.g=null,this.i=i||null,this.j=!!l}function It(i){i.g||(i.g=new Map,i.h=0,i.i&&ed(i.i,function(l,u){i.add(decodeURIComponent(l.replace(/\+/g," ")),u)}))}n=vn.prototype,n.add=function(i,l){It(this),this.i=null,i=qt(this,i);let u=this.g.get(i);return u||this.g.set(i,u=[]),u.push(l),this.h+=1,this};function qo(i,l){It(i),l=qt(i,l),i.g.has(l)&&(i.i=null,i.h-=i.g.get(l).length,i.g.delete(l))}function Bo(i,l){return It(i),l=qt(i,l),i.g.has(l)}n.forEach=function(i,l){It(this),this.g.forEach(function(u,f){u.forEach(function(A){i.call(l,A,f,this)},this)},this)};function Uo(i,l){It(i);let u=[];if(typeof l=="string")Bo(i,l)&&(u=u.concat(i.g.get(qt(i,l))));else for(i=Array.from(i.g.values()),l=0;l<i.length;l++)u=u.concat(i[l]);return u}n.set=function(i,l){return It(this),this.i=null,i=qt(this,i),Bo(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[l]),this.h+=1,this},n.get=function(i,l){return i?(i=Uo(this,i),i.length>0?String(i[0]):l):l};function jo(i,l,u){qo(i,l),u.length>0&&(i.i=null,i.g.set(qt(i,l),w(u)),i.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],l=Array.from(this.g.keys());for(let f=0;f<l.length;f++){var u=l[f];const A=hn(u);u=Uo(this,u);for(let S=0;S<u.length;S++){let N=A;u[S]!==""&&(N+="="+hn(u[S])),i.push(N)}}return this.i=i.join("&")};function zo(i){const l=new vn;return l.i=i.i,i.g&&(l.g=new Map(i.g),l.h=i.h),l}function qt(i,l){return l=String(l),i.j&&(l=l.toLowerCase()),l}function od(i,l){l&&!i.j&&(It(i),i.i=null,i.g.forEach(function(u,f){const A=f.toLowerCase();f!=A&&(qo(this,f),jo(this,A,u))},i)),i.j=l}function ad(i,l){const u=new dn;if(a.Image){const f=new Image;f.onload=m(et,u,"TestLoadImage: loaded",!0,l,f),f.onerror=m(et,u,"TestLoadImage: error",!1,l,f),f.onabort=m(et,u,"TestLoadImage: abort",!1,l,f),f.ontimeout=m(et,u,"TestLoadImage: timeout",!1,l,f),a.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else l(!1)}function ld(i,l){const u=new dn,f=new AbortController,A=setTimeout(()=>{f.abort(),et(u,"TestPingServer: timeout",!1,l)},1e4);fetch(i,{signal:f.signal}).then(S=>{clearTimeout(A),S.ok?et(u,"TestPingServer: ok",!0,l):et(u,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),et(u,"TestPingServer: error",!1,l)})}function et(i,l,u,f,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),f(u)}catch{}}function cd(){this.g=new Gu}function Dr(i){this.i=i.Sb||null,this.h=i.ab||!1}g(Dr,Eo),Dr.prototype.g=function(){return new as(this.i,this.h)};function as(i,l){Ee.call(this),this.H=i,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(as,Ee),n=as.prototype,n.open=function(i,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=i,this.D=l,this.readyState=1,En(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};i&&(l.body=i),(this.H||a).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,_n(this)),this.readyState=0},n.Pa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,En(this)),this.g&&(this.readyState=3,En(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Go(this)}else i.text().then(this.Oa.bind(this),this.ga.bind(this))};function Go(i){i.j.read().then(i.Ma.bind(i)).catch(i.ga.bind(i))}n.Ma=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var l=i.value?i.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!i.done}))&&(this.response=this.responseText+=l)}i.done?_n(this):En(this),this.readyState==3&&Go(this)}},n.Oa=function(i){this.g&&(this.response=this.responseText=i,_n(this))},n.Na=function(i){this.g&&(this.response=i,_n(this))},n.ga=function(){this.g&&_n(this)};function _n(i){i.readyState=4,i.l=null,i.j=null,i.B=null,En(i)}n.setRequestHeader=function(i,l){this.A.append(i,l)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],l=this.h.entries();for(var u=l.next();!u.done;)u=u.value,i.push(u[0]+": "+u[1]),u=l.next();return i.join(`\r
`)};function En(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(as.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Ho(i){let l="";return es(i,function(u,f){l+=f,l+=":",l+=u,l+=`\r
`}),l}function Vr(i,l,u){e:{for(f in u){var f=!1;break e}f=!0}f||(u=Ho(u),typeof i=="string"?u!=null&&hn(u):te(i,l,u))}function ie(i){Ee.call(this),this.headers=new Map,this.L=i||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(ie,Ee);var ud=/^https?$/i,dd=["POST","PUT"];n=ie.prototype,n.Fa=function(i){this.H=i},n.ea=function(i,l,u,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);l=l?l.toUpperCase():"GET",this.D=i,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ro.g(),this.g.onreadystatechange=E(h(this.Ca,this));try{this.B=!0,this.g.open(l,String(i),!0),this.B=!1}catch(S){Qo(this,S);return}if(i=u||"",u=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var A in f)u.set(A,f[A]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const S of f.keys())u.set(S,f.get(S));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(u.keys()).find(S=>S.toLowerCase()=="content-type"),A=a.FormData&&i instanceof a.FormData,!(Array.prototype.indexOf.call(dd,l,void 0)>=0)||f||A||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,N]of u)this.g.setRequestHeader(S,N);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(i),this.v=!1}catch(S){Qo(this,S)}};function Qo(i,l){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=l,i.o=5,Jo(i),ls(i)}function Jo(i){i.A||(i.A=!0,Se(i,"complete"),Se(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=i||7,Se(this,"complete"),Se(this,"abort"),ls(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ls(this,!0)),ie.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Wo(this):this.Xa())},n.Xa=function(){Wo(this)};function Wo(i){if(i.h&&typeof o<"u"){if(i.v&&tt(i)==4)setTimeout(i.Ca.bind(i),0);else if(Se(i,"readystatechange"),tt(i)==4){i.h=!1;try{const S=i.ca();e:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var u;if(!(u=l)){var f;if(f=S===0){let N=String(i.D).match(Fo)[1]||null;!N&&a.self&&a.self.location&&(N=a.self.location.protocol.slice(0,-1)),f=!ud.test(N?N.toLowerCase():"")}u=f}if(u)Se(i,"complete"),Se(i,"success");else{i.o=6;try{var A=tt(i)>2?i.g.statusText:""}catch{A=""}i.l=A+" ["+i.ca()+"]",Jo(i)}}finally{ls(i)}}}}function ls(i,l){if(i.g){i.m&&(clearTimeout(i.m),i.m=null);const u=i.g;i.g=null,l||Se(i,"ready");try{u.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function tt(i){return i.g?i.g.readyState:0}n.ca=function(){try{return tt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(i){if(this.g){var l=this.g.responseText;return i&&l.indexOf(i)==0&&(l=l.substring(i.length)),zu(l)}};function Ko(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.F){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function hd(i){const l={};i=(i.g&&tt(i)>=2&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(v(i[f]))continue;var u=Ku(i[f]);const A=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const S=l[A]||[];l[A]=S,S.push(u)}Fu(l,function(f){return f.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Tn(i,l,u){return u&&u.internalChannelParams&&u.internalChannelParams[i]||l}function Yo(i){this.za=0,this.i=[],this.j=new dn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Tn("failFast",!1,i),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Tn("baseRetryDelayMs",5e3,i),this.Za=Tn("retryDelaySeedMs",1e4,i),this.Ta=Tn("forwardChannelMaxRetries",2,i),this.va=Tn("forwardChannelRequestTimeoutMs",2e4,i),this.ma=i&&i.xmlHttpFactory||void 0,this.Ua=i&&i.Rb||void 0,this.Aa=i&&i.useFetchStreams||!1,this.O=void 0,this.L=i&&i.supportsCrossDomainXhr||!1,this.M="",this.h=new No(i&&i.concurrentRequestLimit),this.Ba=new cd,this.S=i&&i.fastHandshake||!1,this.R=i&&i.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=i&&i.Pb||!1,i&&i.ua&&this.j.ua(),i&&i.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&i&&i.detectBufferingProxy||!1,this.ia=void 0,i&&i.longPollingTimeout&&i.longPollingTimeout>0&&(this.ia=i.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Yo.prototype,n.ka=8,n.I=1,n.connect=function(i,l,u,f){Re(0),this.W=i,this.H=l||{},u&&f!==void 0&&(this.H.OSID=u,this.H.OAID=f),this.F=this.X,this.J=oa(this,null,this.W),us(this)};function xr(i){if(Xo(i),i.I==3){var l=i.V++,u=$e(i.J);if(te(u,"SID",i.M),te(u,"RID",l),te(u,"TYPE","terminate"),bn(i,u),l=new Xe(i,i.j,l),l.M=2,l.A=os($e(u)),u=!1,a.navigator&&a.navigator.sendBeacon)try{u=a.navigator.sendBeacon(l.A.toString(),"")}catch{}!u&&a.Image&&(new Image().src=l.A,u=!0),u||(l.g=aa(l.j,null),l.g.ea(l.A)),l.F=Date.now(),is(l)}ia(i)}function cs(i){i.g&&(kr(i),i.g.cancel(),i.g=null)}function Xo(i){cs(i),i.v&&(a.clearTimeout(i.v),i.v=null),ds(i),i.h.cancel(),i.m&&(typeof i.m=="number"&&a.clearTimeout(i.m),i.m=null)}function us(i){if(!ko(i.h)&&!i.m){i.m=!0;var l=i.Ea;$||p(),q||($(),q=!0),b.add(l,i),i.D=0}}function fd(i,l){return Lo(i.h)>=i.h.j-(i.m?1:0)?!1:i.m?(i.i=l.G.concat(i.i),!0):i.I==1||i.I==2||i.D>=(i.Sa?0:i.Ta)?!1:(i.m=un(h(i.Ea,i,l),ra(i,i.D)),i.D++,!0)}n.Ea=function(i){if(this.m)if(this.m=null,this.I==1){if(!i){this.V=Math.floor(Math.random()*1e5),i=this.V++;const A=new Xe(this,this.j,i);let S=this.o;if(this.U&&(S?(S=co(S),ho(S,this.U)):S=this.U),this.u!==null||this.R||(A.J=S,S=null),this.S)e:{for(var l=0,u=0;u<this.i.length;u++){t:{var f=this.i[u];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(l+=f,l>4096){l=u;break e}if(l===4096||u===this.i.length-1){l=u+1;break e}}l=1e3}else l=1e3;l=ea(this,A,l),u=$e(this.J),te(u,"RID",i),te(u,"CVER",22),this.G&&te(u,"X-HTTP-Session-Id",this.G),bn(this,u),S&&(this.R?l="headers="+hn(Ho(S))+"&"+l:this.u&&Vr(u,this.u,S)),Cr(this.h,A),this.Ra&&te(u,"TYPE","init"),this.S?(te(u,"$req",l),te(u,"SID","null"),A.U=!0,Ar(A,u,null)):Ar(A,u,l),this.I=2}}else this.I==3&&(i?Zo(this,i):this.i.length==0||ko(this.h)||Zo(this))};function Zo(i,l){var u;l?u=l.l:u=i.V++;const f=$e(i.J);te(f,"SID",i.M),te(f,"RID",u),te(f,"AID",i.K),bn(i,f),i.u&&i.o&&Vr(f,i.u,i.o),u=new Xe(i,i.j,u,i.D+1),i.u===null&&(u.J=i.o),l&&(i.i=l.G.concat(i.i)),l=ea(i,u,1e3),u.H=Math.round(i.va*.5)+Math.round(i.va*.5*Math.random()),Cr(i.h,u),Ar(u,f,l)}function bn(i,l){i.H&&es(i.H,function(u,f){te(l,f,u)}),i.l&&es({},function(u,f){te(l,f,u)})}function ea(i,l,u){u=Math.min(i.i.length,u);const f=i.l?h(i.l.Ka,i.l,i):null;e:{var A=i.i;let H=-1;for(;;){const fe=["count="+u];H==-1?u>0?(H=A[0].g,fe.push("ofs="+H)):H=0:fe.push("ofs="+H);let Z=!0;for(let pe=0;pe<u;pe++){var S=A[pe].g;const qe=A[pe].map;if(S-=H,S<0)H=Math.max(0,A[pe].g-100),Z=!1;else try{S="req"+S+"_"||"";try{var N=qe instanceof Map?qe:Object.entries(qe);for(const[wt,nt]of N){let st=nt;c(nt)&&(st=_r(nt)),fe.push(S+wt+"="+encodeURIComponent(st))}}catch(wt){throw fe.push(S+"type="+encodeURIComponent("_badmap")),wt}}catch{f&&f(qe)}}if(Z){N=fe.join("&");break e}}N=void 0}return i=i.i.splice(0,u),l.G=i,N}function ta(i){if(!i.g&&!i.v){i.Y=1;var l=i.Da;$||p(),q||($(),q=!0),b.add(l,i),i.A=0}}function Nr(i){return i.g||i.v||i.A>=3?!1:(i.Y++,i.v=un(h(i.Da,i),ra(i,i.A)),i.A++,!0)}n.Da=function(){if(this.v=null,na(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var i=4*this.T;this.j.info("BP detection timer enabled: "+i),this.B=un(h(this.Wa,this),i)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Re(10),cs(this),na(this))};function kr(i){i.B!=null&&(a.clearTimeout(i.B),i.B=null)}function na(i){i.g=new Xe(i,i.j,"rpc",i.Y),i.u===null&&(i.g.J=i.o),i.g.P=0;var l=$e(i.na);te(l,"RID","rpc"),te(l,"SID",i.M),te(l,"AID",i.K),te(l,"CI",i.F?"0":"1"),!i.F&&i.ia&&te(l,"TO",i.ia),te(l,"TYPE","xmlhttp"),bn(i,l),i.u&&i.o&&Vr(l,i.u,i.o),i.O&&(i.g.H=i.O);var u=i.g;i=i.ba,u.M=1,u.A=os($e(l)),u.u=null,u.R=!0,Do(u,i)}n.Va=function(){this.C!=null&&(this.C=null,cs(this),Nr(this),Re(19))};function ds(i){i.C!=null&&(a.clearTimeout(i.C),i.C=null)}function sa(i,l){var u=null;if(i.g==l){ds(i),kr(i),i.g=null;var f=2}else if(Rr(i.h,l))u=l.G,Mo(i.h,l),f=1;else return;if(i.I!=0){if(l.o)if(f==1){u=l.u?l.u.length:0,l=Date.now()-l.F;var A=i.D;f=ss(),Se(f,new wo(f,u)),us(i)}else ta(i);else if(A=l.m,A==3||A==0&&l.X>0||!(f==1&&fd(i,l)||f==2&&Nr(i)))switch(u&&u.length>0&&(l=i.h,l.i=l.i.concat(u)),A){case 1:At(i,5);break;case 4:At(i,10);break;case 3:At(i,6);break;default:At(i,2)}}}function ra(i,l){let u=i.Qa+Math.floor(Math.random()*i.Za);return i.isActive()||(u*=2),u*l}function At(i,l){if(i.j.info("Error code "+l),l==2){var u=h(i.bb,i),f=i.Ua;const A=!f;f=new Ze(f||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||mn(f,"https"),os(f),A?ad(f.toString(),u):ld(f.toString(),u)}else Re(2);i.I=0,i.l&&i.l.pa(l),ia(i),Xo(i)}n.bb=function(i){i?(this.j.info("Successfully pinged google.com"),Re(2)):(this.j.info("Failed to ping google.com"),Re(1))};function ia(i){if(i.I=0,i.ja=[],i.l){const l=Oo(i.h);(l.length!=0||i.i.length!=0)&&(R(i.ja,l),R(i.ja,i.i),i.h.i.length=0,w(i.i),i.i.length=0),i.l.oa()}}function oa(i,l,u){var f=u instanceof Ze?$e(u):new Ze(u);if(f.g!="")l&&(f.g=l+"."+f.g),pn(f,f.u);else{var A=a.location;f=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;const S=new Ze(null);f&&mn(S,f),l&&(S.g=l),A&&pn(S,A),u&&(S.h=u),f=S}return u=i.G,l=i.wa,u&&l&&te(f,u,l),te(f,"VER",i.ka),bn(i,f),f}function aa(i,l,u){if(l&&!i.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=i.Aa&&!i.ma?new ie(new Dr({ab:u})):new ie(i.ma),l.Fa(i.L),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function la(){}n=la.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function hs(){}hs.prototype.g=function(i,l){return new De(i,l)};function De(i,l){Ee.call(this),this.g=new Yo(l),this.l=i,this.h=l&&l.messageUrlParams||null,i=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(i?i["X-WebChannel-Content-Type"]=l.messageContentType:i={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(i?i["X-WebChannel-Client-Profile"]=l.sa:i={"X-WebChannel-Client-Profile":l.sa}),this.g.U=i,(i=l&&l.Qb)&&!v(i)&&(this.g.u=i),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!v(l)&&(this.g.G=l,i=this.h,i!==null&&l in i&&(i=this.h,l in i&&delete i[l])),this.j=new Bt(this)}g(De,Ee),De.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},De.prototype.close=function(){xr(this.g)},De.prototype.o=function(i){var l=this.g;if(typeof i=="string"){var u={};u.__data__=i,i=u}else this.v&&(u={},u.__data__=_r(i),i=u);l.i.push(new Zu(l.Ya++,i)),l.I==3&&us(l)},De.prototype.N=function(){this.g.l=null,delete this.j,xr(this.g),delete this.g,De.Z.N.call(this)};function ca(i){Er.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var l=i.__sm__;if(l){e:{for(const u in l){i=u;break e}i=void 0}(this.i=i)&&(i=this.i,l=l!==null&&i in l?l[i]:void 0),this.data=l}else this.data=i}g(ca,Er);function ua(){Tr.call(this),this.status=1}g(ua,Tr);function Bt(i){this.g=i}g(Bt,la),Bt.prototype.ra=function(){Se(this.g,"a")},Bt.prototype.qa=function(i){Se(this.g,new ca(i))},Bt.prototype.pa=function(i){Se(this.g,new ua)},Bt.prototype.oa=function(){Se(this.g,"b")},hs.prototype.createWebChannel=hs.prototype.g,De.prototype.send=De.prototype.o,De.prototype.open=De.prototype.m,De.prototype.close=De.prototype.close,Yl=function(){return new hs},Kl=function(){return ss()},Wl=Tt,Xr={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},rs.NO_ERROR=0,rs.TIMEOUT=8,rs.HTTP_ERROR=6,Ts=rs,So.COMPLETE="complete",Jl=So,To.EventType=ln,ln.OPEN="a",ln.CLOSE="b",ln.ERROR="c",ln.MESSAGE="d",Ee.prototype.listen=Ee.prototype.J,An=To,ie.prototype.listenOnce=ie.prototype.K,ie.prototype.getLastError=ie.prototype.Ha,ie.prototype.getLastErrorCode=ie.prototype.ya,ie.prototype.getStatus=ie.prototype.ca,ie.prototype.getResponseJson=ie.prototype.La,ie.prototype.getResponseText=ie.prototype.la,ie.prototype.send=ie.prototype.ea,ie.prototype.setWithCredentials=ie.prototype.Fa,Ql=ie}).apply(typeof ps<"u"?ps:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ie.UNAUTHENTICATED=new Ie(null),Ie.GOOGLE_CREDENTIALS=new Ie("google-credentials-uid"),Ie.FIRST_PARTY=new Ie("first-party-uid"),Ie.MOCK_USER=new Ie("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tn="12.10.0";function nf(n){tn=n}/**
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
 */const Dt=new ql("@firebase/firestore");function Ut(){return Dt.logLevel}function M(n,...e){if(Dt.logLevel<=K.DEBUG){const t=e.map(Ti);Dt.debug(`Firestore (${tn}): ${n}`,...t)}}function Je(n,...e){if(Dt.logLevel<=K.ERROR){const t=e.map(Ti);Dt.error(`Firestore (${tn}): ${n}`,...t)}}function Vt(n,...e){if(Dt.logLevel<=K.WARN){const t=e.map(Ti);Dt.warn(`Firestore (${tn}): ${n}`,...t)}}function Ti(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Xl(n,s,t)}function Xl(n,e,t){let s=`FIRESTORE (${tn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Je(s),new Error(s)}function X(n,e,t,s){let r="Unexpected state";typeof t=="string"?r=t:s=t,n||Xl(e,r,s)}function z(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends en{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ie.UNAUTHENTICATED)))}shutdown(){}}class rf{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class of{constructor(e){this.t=e,this.currentUser=Ie.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){X(this.o===void 0,42304);let s=this.i;const r=d=>this.i!==s?(s=this.i,t(d)):Promise.resolve();let o=new ct;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ct,e.enqueueRetryable((()=>r(this.currentUser)))};const a=()=>{const d=o;e.enqueueRetryable((async()=>{await d.promise,await r(this.currentUser)}))},c=d=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((d=>c(d))),setTimeout((()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?c(d):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ct)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(X(typeof s.accessToken=="string",31837,{l:s}),new Zl(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return X(e===null||typeof e=="string",2055,{h:e}),new Ie(e)}}class af{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ie.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class lf{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new af(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ie.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ia{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cf{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,$h(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){X(this.o===void 0,3512);const s=o=>{o.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,M("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable((()=>s(o)))};const r=o=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>r(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?r(o):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Ia(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(X(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Ia(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */class bi{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=uf(40);for(let o=0;o<r.length;++o)s.length<20&&r[o]<t&&(s+=e.charAt(r[o]%62))}return s}}function Q(n,e){return n<e?-1:n>e?1:0}function Zr(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const r=n.charAt(s),o=e.charAt(s);if(r!==o)return qr(r)===qr(o)?Q(r,o):qr(r)?1:-1}return Q(n.length,e.length)}const df=55296,hf=57343;function qr(n){const e=n.charCodeAt(0);return e>=df&&e<=hf}function Wt(n,e,t){return n.length===e.length&&n.every(((s,r)=>t(s,e[r])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa="__name__";class Be{constructor(e,t,s){t===void 0?t=0:t>e.length&&U(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&U(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Be.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Be?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const o=Be.compareSegments(e.get(r),t.get(r));if(o!==0)return o}return Q(e.length,t.length)}static compareSegments(e,t){const s=Be.isNumericId(e),r=Be.isNumericId(t);return s&&!r?-1:!s&&r?1:s&&r?Be.extractNumericId(e).compare(Be.extractNumericId(t)):Zr(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return lt.fromString(e.substring(4,e.length-2))}}class ee extends Be{construct(e,t,s){return new ee(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new L(C.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((r=>r.length>0)))}return new ee(t)}static emptyPath(){return new ee([])}}const ff=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ve extends Be{construct(e,t,s){return new ve(e,t,s)}static isValidIdentifier(e){return ff.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ve.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Aa}static keyField(){return new ve([Aa])}static fromServerFormat(e){const t=[];let s="",r=0;const o=()=>{if(s.length===0)throw new L(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let a=!1;for(;r<e.length;){const c=e[r];if(c==="\\"){if(r+1===e.length)throw new L(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const d=e[r+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new L(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=d,r+=2}else c==="`"?(a=!a,r++):c!=="."||a?(s+=c,r++):(o(),r++)}if(o(),a)throw new L(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ve(t)}static emptyPath(){return new ve([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(ee.fromString(e))}static fromName(e){return new B(ee.fromString(e).popFirst(5))}static empty(){return new B(ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ee.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new ee(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(n,e,t){if(!t)throw new L(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function mf(n,e,t,s){if(e===!0&&s===!0)throw new L(C.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function wa(n){if(!B.isDocumentKey(n))throw new L(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Sa(n){if(B.isDocumentKey(n))throw new L(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function tc(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Gs(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":U(12329,{type:typeof n})}function Le(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new L(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Gs(n);throw new L(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function de(n,e){const t={typeString:n};return e&&(t.value=e),t}function Gn(n,e){if(!tc(n))throw new L(C.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const r=e[s].typeString,o="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const a=n[s];if(r&&typeof a!==r){t=`JSON field '${s}' must be a ${r}.`;break}if(o!==void 0&&a!==o.value){t=`Expected '${s}' field to equal '${o.value}'`;break}}if(t)throw new L(C.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra=-62135596800,Ca=1e6;class ne{static now(){return ne.fromMillis(Date.now())}static fromDate(e){return ne.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Ca);return new ne(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new L(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new L(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Ra)throw new L(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ca}_compareTo(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ne._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Gn(e,ne._jsonSchema))return new ne(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ra;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ne._jsonSchemaVersion="firestore/timestamp/1.0",ne._jsonSchema={type:de("string",ne._jsonSchemaVersion),seconds:de("number"),nanoseconds:de("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{static fromTimestamp(e){return new j(e)}static min(){return new j(new ne(0,0))}static max(){return new j(new ne(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const On=-1;function pf(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=j.fromTimestamp(s===1e9?new ne(t+1,0):new ne(t,s));return new dt(r,B.empty(),e)}function gf(n){return new dt(n.readTime,n.key,On)}class dt{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new dt(j.min(),B.empty(),On)}static max(){return new dt(j.max(),B.empty(),On)}}function yf(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=B.comparator(n.documentKey,e.documentKey),t!==0?t:Q(n.largestBatchId,e.largestBatchId))}/**
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
 */const vf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _f{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nn(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==vf)throw n;M("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&U(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new P(((s,r)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(s,r)},this.catchCallback=o=>{this.wrapFailure(t,o).next(s,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof P?t:P.resolve(t)}catch(t){return P.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):P.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):P.reject(t)}static resolve(e){return new P(((t,s)=>{t(e)}))}static reject(e){return new P(((t,s)=>{s(e)}))}static waitFor(e){return new P(((t,s)=>{let r=0,o=0,a=!1;e.forEach((c=>{++r,c.next((()=>{++o,a&&o===r&&t()}),(d=>s(d)))})),a=!0,o===r&&t()}))}static or(e){let t=P.resolve(!1);for(const s of e)t=t.next((r=>r?P.resolve(r):s()));return t}static forEach(e,t){const s=[];return e.forEach(((r,o)=>{s.push(t.call(this,r,o))})),this.waitFor(s)}static mapArray(e,t){return new P(((s,r)=>{const o=e.length,a=new Array(o);let c=0;for(let d=0;d<o;d++){const h=d;t(e[h]).next((m=>{a[h]=m,++c,c===o&&s(a)}),(m=>r(m)))}}))}static doWhile(e,t){return new P(((s,r)=>{const o=()=>{e()===!0?t().next((()=>{o()}),r):s()};o()}))}}function Ef(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function sn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Hs{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Hs.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii=-1;function Qs(n){return n==null}function Ns(n){return n===0&&1/n==-1/0}function Tf(n){return typeof n=="number"&&Number.isInteger(n)&&!Ns(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc="";function bf(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Pa(e)),e=If(n.get(t),e);return Pa(e)}function If(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const o=n.charAt(r);switch(o){case"\0":t+="";break;case nc:t+="";break;default:t+=o}}return t}function Pa(n){return n+nc+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function vt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function sc(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,t){this.comparator=e,this.root=t||ye.EMPTY}insert(e,t){return new re(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ye.BLACK,null,null))}remove(e){return new re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ye.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new gs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new gs(this.root,e,this.comparator,!1)}getReverseIterator(){return new gs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new gs(this.root,e,this.comparator,!0)}}class gs{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?s(e.key,t):1,t&&r&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ye{constructor(e,t,s,r,o){this.key=e,this.value=t,this.color=s??ye.RED,this.left=r??ye.EMPTY,this.right=o??ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,o){return new ye(e??this.key,t??this.value,s??this.color,r??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const o=s(e,r.key);return r=o<0?r.copy(null,null,null,r.left.insert(e,t,s),null):o===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return ye.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw U(43730,{key:this.key,value:this.value});if(this.right.isRed())throw U(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw U(27949);return e+(this.isRed()?0:1)}}ye.EMPTY=null,ye.RED=!0,ye.BLACK=!1;ye.EMPTY=new class{constructor(){this.size=0}get key(){throw U(57766)}get value(){throw U(16141)}get color(){throw U(16727)}get left(){throw U(29726)}get right(){throw U(36894)}copy(e,t,s,r,o){return this}insert(e,t,s){return new ye(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.comparator=e,this.data=new re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Va(this.data.getIterator())}getIteratorFrom(e){return new Va(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof me)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,o=s.getNext().key;if(this.comparator(r,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new me(this.comparator);return t.data=e,t}}class Va{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ve{constructor(e){this.fields=e,e.sort(ve.comparator)}static empty(){return new Ve([])}unionWith(e){let t=new me(ve.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Ve(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Wt(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class rc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class _e{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(r){try{return atob(r)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new rc("Invalid base64 string: "+o):o}})(e);return new _e(t)}static fromUint8Array(e){const t=(function(r){let o="";for(let a=0;a<r.length;++a)o+=String.fromCharCode(r[a]);return o})(e);return new _e(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_e.EMPTY_BYTE_STRING=new _e("");const Af=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ht(n){if(X(!!n,39018),typeof n=="string"){let e=0;const t=Af.exec(n);if(X(!!t,46558,{timestamp:n}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ae(n.seconds),nanos:ae(n.nanos)}}function ae(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ft(n){return typeof n=="string"?_e.fromBase64String(n):_e.fromUint8Array(n)}/**
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
 */const ic="server_timestamp",oc="__type__",ac="__previous_value__",lc="__local_write_time__";function Ai(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[oc])==null?void 0:s.stringValue)===ic}function Js(n){const e=n.mapValue.fields[ac];return Ai(e)?Js(e):e}function Fn(n){const e=ht(n.mapValue.fields[lc].timestampValue);return new ne(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e,t,s,r,o,a,c,d,h,m,g){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=d,this.useFetchStreams=h,this.isUsingEmulator=m,this.apiKey=g}}const ks="(default)";class $n{constructor(e,t){this.projectId=e,this.database=t||ks}static empty(){return new $n("","")}get isDefaultDatabase(){return this.database===ks}isEqual(e){return e instanceof $n&&e.projectId===this.projectId&&e.database===this.database}}function Sf(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new L(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $n(n.options.projectId,e)}/**
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
 */const cc="__type__",Rf="__max__",ys={mapValue:{}},uc="__vector__",Ls="value";function mt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ai(n)?4:Pf(n)?9007199254740991:Cf(n)?10:11:U(28295,{value:n})}function He(n,e){if(n===e)return!0;const t=mt(n);if(t!==mt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Fn(n).isEqual(Fn(e));case 3:return(function(r,o){if(typeof r.timestampValue=="string"&&typeof o.timestampValue=="string"&&r.timestampValue.length===o.timestampValue.length)return r.timestampValue===o.timestampValue;const a=ht(r.timestampValue),c=ht(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(r,o){return ft(r.bytesValue).isEqual(ft(o.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(r,o){return ae(r.geoPointValue.latitude)===ae(o.geoPointValue.latitude)&&ae(r.geoPointValue.longitude)===ae(o.geoPointValue.longitude)})(n,e);case 2:return(function(r,o){if("integerValue"in r&&"integerValue"in o)return ae(r.integerValue)===ae(o.integerValue);if("doubleValue"in r&&"doubleValue"in o){const a=ae(r.doubleValue),c=ae(o.doubleValue);return a===c?Ns(a)===Ns(c):isNaN(a)&&isNaN(c)}return!1})(n,e);case 9:return Wt(n.arrayValue.values||[],e.arrayValue.values||[],He);case 10:case 11:return(function(r,o){const a=r.mapValue.fields||{},c=o.mapValue.fields||{};if(Da(a)!==Da(c))return!1;for(const d in a)if(a.hasOwnProperty(d)&&(c[d]===void 0||!He(a[d],c[d])))return!1;return!0})(n,e);default:return U(52216,{left:n})}}function qn(n,e){return(n.values||[]).find((t=>He(t,e)))!==void 0}function Kt(n,e){if(n===e)return 0;const t=mt(n),s=mt(e);if(t!==s)return Q(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Q(n.booleanValue,e.booleanValue);case 2:return(function(o,a){const c=ae(o.integerValue||o.doubleValue),d=ae(a.integerValue||a.doubleValue);return c<d?-1:c>d?1:c===d?0:isNaN(c)?isNaN(d)?0:-1:1})(n,e);case 3:return xa(n.timestampValue,e.timestampValue);case 4:return xa(Fn(n),Fn(e));case 5:return Zr(n.stringValue,e.stringValue);case 6:return(function(o,a){const c=ft(o),d=ft(a);return c.compareTo(d)})(n.bytesValue,e.bytesValue);case 7:return(function(o,a){const c=o.split("/"),d=a.split("/");for(let h=0;h<c.length&&h<d.length;h++){const m=Q(c[h],d[h]);if(m!==0)return m}return Q(c.length,d.length)})(n.referenceValue,e.referenceValue);case 8:return(function(o,a){const c=Q(ae(o.latitude),ae(a.latitude));return c!==0?c:Q(ae(o.longitude),ae(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Na(n.arrayValue,e.arrayValue);case 10:return(function(o,a){var E,w,R,D;const c=o.fields||{},d=a.fields||{},h=(E=c[Ls])==null?void 0:E.arrayValue,m=(w=d[Ls])==null?void 0:w.arrayValue,g=Q(((R=h==null?void 0:h.values)==null?void 0:R.length)||0,((D=m==null?void 0:m.values)==null?void 0:D.length)||0);return g!==0?g:Na(h,m)})(n.mapValue,e.mapValue);case 11:return(function(o,a){if(o===ys.mapValue&&a===ys.mapValue)return 0;if(o===ys.mapValue)return 1;if(a===ys.mapValue)return-1;const c=o.fields||{},d=Object.keys(c),h=a.fields||{},m=Object.keys(h);d.sort(),m.sort();for(let g=0;g<d.length&&g<m.length;++g){const E=Zr(d[g],m[g]);if(E!==0)return E;const w=Kt(c[d[g]],h[m[g]]);if(w!==0)return w}return Q(d.length,m.length)})(n.mapValue,e.mapValue);default:throw U(23264,{he:t})}}function xa(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Q(n,e);const t=ht(n),s=ht(e),r=Q(t.seconds,s.seconds);return r!==0?r:Q(t.nanos,s.nanos)}function Na(n,e){const t=n.values||[],s=e.values||[];for(let r=0;r<t.length&&r<s.length;++r){const o=Kt(t[r],s[r]);if(o)return o}return Q(t.length,s.length)}function Yt(n){return ei(n)}function ei(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=ht(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return ft(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return B.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",r=!0;for(const o of t.values||[])r?r=!1:s+=",",s+=ei(o);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let r="{",o=!0;for(const a of s)o?o=!1:r+=",",r+=`${a}:${ei(t.fields[a])}`;return r+"}"})(n.mapValue):U(61005,{value:n})}function bs(n){switch(mt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Js(n);return e?16+bs(e):16;case 5:return 2*n.stringValue.length;case 6:return ft(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((r,o)=>r+bs(o)),0)})(n.arrayValue);case 10:case 11:return(function(s){let r=0;return vt(s.fields,((o,a)=>{r+=o.length+bs(a)})),r})(n.mapValue);default:throw U(13486,{value:n})}}function ka(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function ti(n){return!!n&&"integerValue"in n}function wi(n){return!!n&&"arrayValue"in n}function La(n){return!!n&&"nullValue"in n}function Ma(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Is(n){return!!n&&"mapValue"in n}function Cf(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[cc])==null?void 0:s.stringValue)===uc}function Pn(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return vt(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Pn(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Pn(n.arrayValue.values[t]);return e}return{...n}}function Pf(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Rf}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.value=e}static empty(){return new Pe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Is(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Pn(t)}setAll(e){let t=ve.emptyPath(),s={},r=[];e.forEach(((a,c)=>{if(!t.isImmediateParentOf(c)){const d=this.getFieldsMap(t);this.applyChanges(d,s,r),s={},r=[],t=c.popLast()}a?s[c.lastSegment()]=Pn(a):r.push(c.lastSegment())}));const o=this.getFieldsMap(t);this.applyChanges(o,s,r)}delete(e){const t=this.field(e.popLast());Is(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return He(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];Is(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){vt(t,((r,o)=>e[r]=o));for(const r of s)delete e[r]}clone(){return new Pe(Pn(this.value))}}function dc(n){const e=[];return vt(n.fields,((t,s)=>{const r=new ve([t]);if(Is(s)){const o=dc(s.mapValue).fields;if(o.length===0)e.push(r);else for(const a of o)e.push(r.child(a))}else e.push(r)})),new Ve(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e,t,s,r,o,a,c){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Ae(e,0,j.min(),j.min(),j.min(),Pe.empty(),0)}static newFoundDocument(e,t,s,r){return new Ae(e,1,t,j.min(),s,r,0)}static newNoDocument(e,t){return new Ae(e,2,t,j.min(),j.min(),Pe.empty(),0)}static newUnknownDocument(e,t){return new Ae(e,3,t,j.min(),j.min(),Pe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(j.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=j.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ae&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ae(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ms{constructor(e,t){this.position=e,this.inclusive=t}}function Oa(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const o=e[r],a=n.position[r];if(o.field.isKeyField()?s=B.comparator(B.fromName(a.referenceValue),t.key):s=Kt(a,t.data.field(o.field)),o.dir==="desc"&&(s*=-1),s!==0)break}return s}function Fa(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!He(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Bn{constructor(e,t="asc"){this.field=e,this.dir=t}}function Df(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class hc{}class ue extends hc{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new xf(e,t,s):t==="array-contains"?new Lf(e,s):t==="in"?new Mf(e,s):t==="not-in"?new Of(e,s):t==="array-contains-any"?new Ff(e,s):new ue(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new Nf(e,s):new kf(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Kt(t,this.value)):t!==null&&mt(this.value)===mt(t)&&this.matchesComparison(Kt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Fe extends hc{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Fe(e,t)}matches(e){return fc(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function fc(n){return n.op==="and"}function mc(n){return Vf(n)&&fc(n)}function Vf(n){for(const e of n.filters)if(e instanceof Fe)return!1;return!0}function ni(n){if(n instanceof ue)return n.field.canonicalString()+n.op.toString()+Yt(n.value);if(mc(n))return n.filters.map((e=>ni(e))).join(",");{const e=n.filters.map((t=>ni(t))).join(",");return`${n.op}(${e})`}}function pc(n,e){return n instanceof ue?(function(s,r){return r instanceof ue&&s.op===r.op&&s.field.isEqual(r.field)&&He(s.value,r.value)})(n,e):n instanceof Fe?(function(s,r){return r instanceof Fe&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce(((o,a,c)=>o&&pc(a,r.filters[c])),!0):!1})(n,e):void U(19439)}function gc(n){return n instanceof ue?(function(t){return`${t.field.canonicalString()} ${t.op} ${Yt(t.value)}`})(n):n instanceof Fe?(function(t){return t.op.toString()+" {"+t.getFilters().map(gc).join(" ,")+"}"})(n):"Filter"}class xf extends ue{constructor(e,t,s){super(e,t,s),this.key=B.fromName(s.referenceValue)}matches(e){const t=B.comparator(e.key,this.key);return this.matchesComparison(t)}}class Nf extends ue{constructor(e,t){super(e,"in",t),this.keys=yc("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class kf extends ue{constructor(e,t){super(e,"not-in",t),this.keys=yc("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function yc(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>B.fromName(s.referenceValue)))}class Lf extends ue{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return wi(t)&&qn(t.arrayValue,this.value)}}class Mf extends ue{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&qn(this.value.arrayValue,t)}}class Of extends ue{constructor(e,t){super(e,"not-in",t)}matches(e){if(qn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!qn(this.value.arrayValue,t)}}class Ff extends ue{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!wi(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>qn(this.value.arrayValue,s)))}}/**
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
 */class $f{constructor(e,t=null,s=[],r=[],o=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=o,this.startAt=a,this.endAt=c,this.Te=null}}function $a(n,e=null,t=[],s=[],r=null,o=null,a=null){return new $f(n,e,t,s,r,o,a)}function Si(n){const e=z(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>ni(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(o){return o.field.canonicalString()+o.dir})(s))).join(","),Qs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>Yt(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>Yt(s))).join(",")),e.Te=t}return e.Te}function Ri(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Df(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!pc(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Fa(n.startAt,e.startAt)&&Fa(n.endAt,e.endAt)}function si(n){return B.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,t=null,s=[],r=[],o=null,a="F",c=null,d=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=d,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function qf(n,e,t,s,r,o,a,c){return new rn(n,e,t,s,r,o,a,c)}function Ci(n){return new rn(n)}function qa(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Bf(n){return B.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function vc(n){return n.collectionGroup!==null}function Dn(n){const e=z(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const o of e.explicitOrderBy)e.Ie.push(o),t.add(o.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new me(ve.comparator);return a.filters.forEach((d=>{d.getFlattenedFilters().forEach((h=>{h.isInequality()&&(c=c.add(h.field))}))})),c})(e).forEach((o=>{t.has(o.canonicalString())||o.isKeyField()||e.Ie.push(new Bn(o,s))})),t.has(ve.keyField().canonicalString())||e.Ie.push(new Bn(ve.keyField(),s))}return e.Ie}function Ue(n){const e=z(n);return e.Ee||(e.Ee=Uf(e,Dn(n))),e.Ee}function Uf(n,e){if(n.limitType==="F")return $a(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((r=>{const o=r.dir==="desc"?"asc":"desc";return new Bn(r.field,o)}));const t=n.endAt?new Ms(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Ms(n.startAt.position,n.startAt.inclusive):null;return $a(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function ri(n,e){const t=n.filters.concat([e]);return new rn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function jf(n,e){const t=n.explicitOrderBy.concat([e]);return new rn(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function Os(n,e,t){return new rn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ws(n,e){return Ri(Ue(n),Ue(e))&&n.limitType===e.limitType}function _c(n){return`${Si(Ue(n))}|lt:${n.limitType}`}function jt(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((r=>gc(r))).join(", ")}]`),Qs(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((r=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(r))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((r=>Yt(r))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((r=>Yt(r))).join(",")),`Target(${s})`})(Ue(n))}; limitType=${n.limitType})`}function Ks(n,e){return e.isFoundDocument()&&(function(s,r){const o=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(o):B.isDocumentKey(s.path)?s.path.isEqual(o):s.path.isImmediateParentOf(o)})(n,e)&&(function(s,r){for(const o of Dn(s))if(!o.field.isKeyField()&&r.data.field(o.field)===null)return!1;return!0})(n,e)&&(function(s,r){for(const o of s.filters)if(!o.matches(r))return!1;return!0})(n,e)&&(function(s,r){return!(s.startAt&&!(function(a,c,d){const h=Oa(a,c,d);return a.inclusive?h<=0:h<0})(s.startAt,Dn(s),r)||s.endAt&&!(function(a,c,d){const h=Oa(a,c,d);return a.inclusive?h>=0:h>0})(s.endAt,Dn(s),r))})(n,e)}function zf(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Ec(n){return(e,t)=>{let s=!1;for(const r of Dn(n)){const o=Gf(r,e,t);if(o!==0)return o;s=s||r.field.isKeyField()}return 0}}function Gf(n,e,t){const s=n.field.isKeyField()?B.comparator(e.key,t.key):(function(o,a,c){const d=a.data.field(o),h=c.data.field(o);return d!==null&&h!==null?Kt(d,h):U(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return U(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,o]of s)if(this.equalsFn(r,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let o=0;o<r.length;o++)if(this.equalsFn(r[o][0],e))return void(r[o]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){vt(this.inner,((t,s)=>{for(const[r,o]of s)e(r,o)}))}isEmpty(){return sc(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hf=new re(B.comparator);function We(){return Hf}const Tc=new re(B.comparator);function wn(...n){let e=Tc;for(const t of n)e=e.insert(t.key,t);return e}function bc(n){let e=Tc;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function Rt(){return Vn()}function Ic(){return Vn()}function Vn(){return new Lt((n=>n.toString()),((n,e)=>n.isEqual(e)))}const Qf=new re(B.comparator),Jf=new me(B.comparator);function J(...n){let e=Jf;for(const t of n)e=e.add(t);return e}const Wf=new me(Q);function Kf(){return Wf}/**
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
 */function Pi(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ns(e)?"-0":e}}function Ac(n){return{integerValue:""+n}}function Yf(n,e){return Tf(e)?Ac(e):Pi(n,e)}/**
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
 */class Ys{constructor(){this._=void 0}}function Xf(n,e,t){return n instanceof Un?(function(r,o){const a={fields:{[oc]:{stringValue:ic},[lc]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return o&&Ai(o)&&(o=Js(o)),o&&(a.fields[ac]=o),{mapValue:a}})(t,e):n instanceof jn?Sc(n,e):n instanceof zn?Rc(n,e):(function(r,o){const a=wc(r,o),c=Ba(a)+Ba(r.Ae);return ti(a)&&ti(r.Ae)?Ac(c):Pi(r.serializer,c)})(n,e)}function Zf(n,e,t){return n instanceof jn?Sc(n,e):n instanceof zn?Rc(n,e):t}function wc(n,e){return n instanceof Fs?(function(s){return ti(s)||(function(o){return!!o&&"doubleValue"in o})(s)})(e)?e:{integerValue:0}:null}class Un extends Ys{}class jn extends Ys{constructor(e){super(),this.elements=e}}function Sc(n,e){const t=Cc(e);for(const s of n.elements)t.some((r=>He(r,s)))||t.push(s);return{arrayValue:{values:t}}}class zn extends Ys{constructor(e){super(),this.elements=e}}function Rc(n,e){let t=Cc(e);for(const s of n.elements)t=t.filter((r=>!He(r,s)));return{arrayValue:{values:t}}}class Fs extends Ys{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Ba(n){return ae(n.integerValue||n.doubleValue)}function Cc(n){return wi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e,t){this.field=e,this.transform=t}}function tm(n,e){return n.field.isEqual(e.field)&&(function(s,r){return s instanceof jn&&r instanceof jn||s instanceof zn&&r instanceof zn?Wt(s.elements,r.elements,He):s instanceof Fs&&r instanceof Fs?He(s.Ae,r.Ae):s instanceof Un&&r instanceof Un})(n.transform,e.transform)}class nm{constructor(e,t){this.version=e,this.transformResults=t}}class Me{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Me}static exists(e){return new Me(void 0,e)}static updateTime(e){return new Me(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function As(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Xs{}function Pc(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Di(n.key,Me.none()):new Hn(n.key,n.data,Me.none());{const t=n.data,s=Pe.empty();let r=new me(ve.comparator);for(let o of e.fields)if(!r.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?s.delete(o):s.set(o,a),r=r.add(o)}return new _t(n.key,s,new Ve(r.toArray()),Me.none())}}function sm(n,e,t){n instanceof Hn?(function(r,o,a){const c=r.value.clone(),d=ja(r.fieldTransforms,o,a.transformResults);c.setAll(d),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(n,e,t):n instanceof _t?(function(r,o,a){if(!As(r.precondition,o))return void o.convertToUnknownDocument(a.version);const c=ja(r.fieldTransforms,o,a.transformResults),d=o.data;d.setAll(Dc(r)),d.setAll(c),o.convertToFoundDocument(a.version,d).setHasCommittedMutations()})(n,e,t):(function(r,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function xn(n,e,t,s){return n instanceof Hn?(function(o,a,c,d){if(!As(o.precondition,a))return c;const h=o.value.clone(),m=za(o.fieldTransforms,d,a);return h.setAll(m),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null})(n,e,t,s):n instanceof _t?(function(o,a,c,d){if(!As(o.precondition,a))return c;const h=za(o.fieldTransforms,d,a),m=a.data;return m.setAll(Dc(o)),m.setAll(h),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((g=>g.field)))})(n,e,t,s):(function(o,a,c){return As(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(n,e,t)}function rm(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),o=wc(s.transform,r||null);o!=null&&(t===null&&(t=Pe.empty()),t.set(s.field,o))}return t||null}function Ua(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Wt(s,r,((o,a)=>tm(o,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Hn extends Xs{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class _t extends Xs{constructor(e,t,s,r,o=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Dc(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function ja(n,e,t){const s=new Map;X(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let r=0;r<t.length;r++){const o=n[r],a=o.transform,c=e.data.field(o.field);s.set(o.field,Zf(a,c,t[r]))}return s}function za(n,e,t){const s=new Map;for(const r of n){const o=r.transform,a=t.data.field(r.field);s.set(r.field,Xf(o,a,e))}return s}class Di extends Xs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class im extends Xs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const o=this.mutations[r];o.key.isEqual(e.key)&&sm(o,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=xn(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=xn(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Ic();return this.mutations.forEach((r=>{const o=e.get(r.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=t.has(r.key)?null:c;const d=Pc(a,c);d!==null&&s.set(r.key,d),a.isValidDocument()||a.convertToNoDocument(j.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),J())}isEqual(e){return this.batchId===e.batchId&&Wt(this.mutations,e.mutations,((t,s)=>Ua(t,s)))&&Wt(this.baseMutations,e.baseMutations,((t,s)=>Ua(t,s)))}}class Vi{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){X(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let r=(function(){return Qf})();const o=e.mutations;for(let a=0;a<o.length;a++)r=r.insert(o[a].key,s[a].version);return new Vi(e,t,s,r)}}/**
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
 */class am{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */var ce,W;function cm(n){switch(n){case C.OK:return U(64938);case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return U(15467,{code:n})}}function Vc(n){if(n===void 0)return Je("GRPC error has no .code"),C.UNKNOWN;switch(n){case ce.OK:return C.OK;case ce.CANCELLED:return C.CANCELLED;case ce.UNKNOWN:return C.UNKNOWN;case ce.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case ce.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case ce.INTERNAL:return C.INTERNAL;case ce.UNAVAILABLE:return C.UNAVAILABLE;case ce.UNAUTHENTICATED:return C.UNAUTHENTICATED;case ce.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case ce.NOT_FOUND:return C.NOT_FOUND;case ce.ALREADY_EXISTS:return C.ALREADY_EXISTS;case ce.PERMISSION_DENIED:return C.PERMISSION_DENIED;case ce.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case ce.ABORTED:return C.ABORTED;case ce.OUT_OF_RANGE:return C.OUT_OF_RANGE;case ce.UNIMPLEMENTED:return C.UNIMPLEMENTED;case ce.DATA_LOSS:return C.DATA_LOSS;default:return U(39323,{code:n})}}(W=ce||(ce={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const dm=new lt([4294967295,4294967295],0);function Ga(n){const e=um().encode(n),t=new Hl;return t.update(e),new Uint8Array(t.digest())}function Ha(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new lt([t,s],0),new lt([r,o],0)]}class xi{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Sn(`Invalid padding: ${t}`);if(s<0)throw new Sn(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Sn(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Sn(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=lt.fromNumber(this.ge)}ye(e,t,s){let r=e.add(t.multiply(lt.fromNumber(s)));return r.compare(dm)===1&&(r=new lt([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Ga(e),[s,r]=Ha(t);for(let o=0;o<this.hashCount;o++){const a=this.ye(s,r,o);if(!this.we(a))return!1}return!0}static create(e,t,s){const r=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new xi(o,r,t);return s.forEach((c=>a.insert(c))),a}insert(e){if(this.ge===0)return;const t=Ga(e),[s,r]=Ha(t);for(let o=0;o<this.hashCount;o++){const a=this.ye(s,r,o);this.be(a)}}be(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Sn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,t,s,r,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const r=new Map;return r.set(e,Qn.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Zs(j.min(),r,new re(Q),We(),J())}}class Qn{constructor(e,t,s,r,o){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Qn(s,t,J(),J(),J())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,t,s,r){this.Se=e,this.removedTargetIds=t,this.key=s,this.De=r}}class xc{constructor(e,t){this.targetId=e,this.Ce=t}}class Nc{constructor(e,t,s=_e.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class Qa{constructor(){this.ve=0,this.Fe=Ja(),this.Me=_e.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=J(),t=J(),s=J();return this.Fe.forEach(((r,o)=>{switch(o){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:U(38017,{changeType:o})}})),new Qn(this.Me,this.xe,e,t,s)}Ke(){this.Oe=!1,this.Fe=Ja()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,X(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class hm{constructor(e){this.Ge=e,this.ze=new Map,this.je=We(),this.He=vs(),this.Je=vs(),this.Ze=new re(Q)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.Ke(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:U(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,r)=>{this.rt(r)&&t(r)}))}st(e){const t=e.targetId,s=e.Ce.count,r=this.ot(t);if(r){const o=r.target;if(si(o))if(s===0){const a=new B(o.path);this.et(t,a,Ae.newNoDocument(a,j.min()))}else X(s===1,20013,{expectedCount:s});else{const a=this._t(t);if(a!==s){const c=this.ut(e),d=c?this.ct(c,e,a):1;if(d!==0){this.it(t);const h=d===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:o=0}=t;let a,c;try{a=ft(s).toUint8Array()}catch(d){if(d instanceof rc)return Vt("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw d}try{c=new xi(a,r,o)}catch(d){return Vt(d instanceof Sn?"BloomFilter error: ":"Applying bloom filter failed: ",d),null}return c.ge===0?null:c}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let r=0;return s.forEach((o=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(c)||(this.et(t,o,null),r++)})),r}Tt(e){const t=new Map;this.ze.forEach(((o,a)=>{const c=this.ot(a);if(c){if(o.current&&si(c.target)){const d=new B(c.target.path);this.It(d).has(a)||this.Et(a,d)||this.et(a,d,Ae.newNoDocument(d,e))}o.Be&&(t.set(a,o.ke()),o.Ke())}}));let s=J();this.Je.forEach(((o,a)=>{let c=!0;a.forEachWhile((d=>{const h=this.ot(d);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(s=s.add(o))})),this.je.forEach(((o,a)=>a.setReadTime(e)));const r=new Zs(e,t,this.Ze,this.je,s);return this.je=We(),this.He=vs(),this.Je=vs(),this.Ze=new re(Q),r}Ye(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,s),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const r=this.nt(e);this.Et(e,t)?r.qe(t,1):r.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Qa,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new me(Q),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new me(Q),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||M("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Qa),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function vs(){return new re(B.comparator)}function Ja(){return new re(B.comparator)}const fm={asc:"ASCENDING",desc:"DESCENDING"},mm={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},pm={and:"AND",or:"OR"};class gm{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ii(n,e){return n.useProto3Json||Qs(e)?e:{value:e}}function $s(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function kc(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function ym(n,e){return $s(n,e.toTimestamp())}function je(n){return X(!!n,49232),j.fromTimestamp((function(t){const s=ht(t);return new ne(s.seconds,s.nanos)})(n))}function Ni(n,e){return oi(n,e).canonicalString()}function oi(n,e){const t=(function(r){return new ee(["projects",r.projectId,"databases",r.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Lc(n){const e=ee.fromString(n);return X(qc(e),10190,{key:e.toString()}),e}function ai(n,e){return Ni(n.databaseId,e.path)}function Br(n,e){const t=Lc(e);if(t.get(1)!==n.databaseId.projectId)throw new L(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new L(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new B(Oc(t))}function Mc(n,e){return Ni(n.databaseId,e)}function vm(n){const e=Lc(n);return e.length===4?ee.emptyPath():Oc(e)}function li(n){return new ee(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Oc(n){return X(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Wa(n,e,t){return{name:ai(n,e),fields:t.value.mapValue.fields}}function _m(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:U(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],o=(function(h,m){return h.useProto3Json?(X(m===void 0||typeof m=="string",58123),_e.fromBase64String(m||"")):(X(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),_e.fromUint8Array(m||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&(function(h){const m=h.code===void 0?C.UNKNOWN:Vc(h.code);return new L(m,h.message||"")})(a);t=new Nc(s,r,o,c||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Br(n,s.document.name),o=je(s.document.updateTime),a=s.document.createTime?je(s.document.createTime):j.min(),c=new Pe({mapValue:{fields:s.document.fields}}),d=Ae.newFoundDocument(r,o,a,c),h=s.targetIds||[],m=s.removedTargetIds||[];t=new ws(h,m,d.key,d)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Br(n,s.document),o=s.readTime?je(s.readTime):j.min(),a=Ae.newNoDocument(r,o),c=s.removedTargetIds||[];t=new ws([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Br(n,s.document),o=s.removedTargetIds||[];t=new ws([],o,r,null)}else{if(!("filter"in e))return U(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:o}=s,a=new lm(r,o),c=s.targetId;t=new xc(c,a)}}return t}function Em(n,e){let t;if(e instanceof Hn)t={update:Wa(n,e.key,e.value)};else if(e instanceof Di)t={delete:ai(n,e.key)};else if(e instanceof _t)t={update:Wa(n,e.key,e.data),updateMask:Pm(e.fieldMask)};else{if(!(e instanceof im))return U(16599,{dt:e.type});t={verify:ai(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(o,a){const c=a.transform;if(c instanceof Un)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof jn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof zn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Fs)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw U(20930,{transform:a.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(r,o){return o.updateTime!==void 0?{updateTime:ym(r,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:U(27497)})(n,e.precondition)),t}function Tm(n,e){return n&&n.length>0?(X(e!==void 0,14353),n.map((t=>(function(r,o){let a=r.updateTime?je(r.updateTime):je(o);return a.isEqual(j.min())&&(a=je(o)),new nm(a,r.transformResults||[])})(t,e)))):[]}function bm(n,e){return{documents:[Mc(n,e.path)]}}function Im(n,e){const t={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Mc(n,r);const o=(function(h){if(h.length!==0)return $c(Fe.create(h,"and"))})(e.filters);o&&(t.structuredQuery.where=o);const a=(function(h){if(h.length!==0)return h.map((m=>(function(E){return{field:zt(E.field),direction:Sm(E.dir)}})(m)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=ii(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{ft:t,parent:r}}function Am(n){let e=vm(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){X(s===1,65062);const m=t.from[0];m.allDescendants?r=m.collectionId:e=e.child(m.collectionId)}let o=[];t.where&&(o=(function(g){const E=Fc(g);return E instanceof Fe&&mc(E)?E.getFilters():[E]})(t.where));let a=[];t.orderBy&&(a=(function(g){return g.map((E=>(function(R){return new Bn(Gt(R.field),(function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(R.direction))})(E)))})(t.orderBy));let c=null;t.limit&&(c=(function(g){let E;return E=typeof g=="object"?g.value:g,Qs(E)?null:E})(t.limit));let d=null;t.startAt&&(d=(function(g){const E=!!g.before,w=g.values||[];return new Ms(w,E)})(t.startAt));let h=null;return t.endAt&&(h=(function(g){const E=!g.before,w=g.values||[];return new Ms(w,E)})(t.endAt)),qf(e,r,a,o,c,"F",d,h)}function wm(n,e){const t=(function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U(28987,{purpose:r})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Fc(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Gt(t.unaryFilter.field);return ue.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=Gt(t.unaryFilter.field);return ue.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Gt(t.unaryFilter.field);return ue.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Gt(t.unaryFilter.field);return ue.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return U(61313);default:return U(60726)}})(n):n.fieldFilter!==void 0?(function(t){return ue.create(Gt(t.fieldFilter.field),(function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return U(58110);default:return U(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Fe.create(t.compositeFilter.filters.map((s=>Fc(s))),(function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return U(1026)}})(t.compositeFilter.op))})(n):U(30097,{filter:n})}function Sm(n){return fm[n]}function Rm(n){return mm[n]}function Cm(n){return pm[n]}function zt(n){return{fieldPath:n.canonicalString()}}function Gt(n){return ve.fromServerFormat(n.fieldPath)}function $c(n){return n instanceof ue?(function(t){if(t.op==="=="){if(Ma(t.value))return{unaryFilter:{field:zt(t.field),op:"IS_NAN"}};if(La(t.value))return{unaryFilter:{field:zt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ma(t.value))return{unaryFilter:{field:zt(t.field),op:"IS_NOT_NAN"}};if(La(t.value))return{unaryFilter:{field:zt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:zt(t.field),op:Rm(t.op),value:t.value}}})(n):n instanceof Fe?(function(t){const s=t.getFilters().map((r=>$c(r)));return s.length===1?s[0]:{compositeFilter:{op:Cm(t.op),filters:s}}})(n):U(54877,{filter:n})}function Pm(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function qc(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Bc(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,t,s,r,o=j.min(),a=j.min(),c=_e.EMPTY_BYTE_STRING,d=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=d}withSequenceNumber(e){return new it(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new it(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new it(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new it(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e){this.yt=e}}function Vm(n){const e=Am({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Os(e,e.limit,"L"):e}/**
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
 */class xm{constructor(){this.Sn=new Nm}addToCollectionParentIndex(e,t){return this.Sn.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(dt.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(dt.min())}updateCollectionGroup(e,t,s){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}}class Nm{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new me(ee.comparator),o=!r.has(s);return this.index[t]=r.add(s),o}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new me(ee.comparator)).toArray()}}/**
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
 */const Ka={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Uc=41943040;class Ce{static withCacheSize(e){return new Ce(e,Ce.DEFAULT_COLLECTION_PERCENTILE,Ce.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ce.DEFAULT_COLLECTION_PERCENTILE=10,Ce.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ce.DEFAULT=new Ce(Uc,Ce.DEFAULT_COLLECTION_PERCENTILE,Ce.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ce.DISABLED=new Ce(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Xt(0)}static ar(){return new Xt(-1)}}/**
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
 */const Ya="LruGarbageCollector",km=1048576;function Xa([n,e],[t,s]){const r=Q(n,t);return r===0?Q(e,s):r}class Lm{constructor(e){this.Pr=e,this.buffer=new me(Xa),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Xa(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Mm{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){M(Ya,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){sn(t)?M(Ya,"Ignoring IndexedDB error during garbage collection: ",t):await nn(t)}await this.Ar(3e5)}))}}class Om{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return P.resolve(Hs.ce);const s=new Lm(t);return this.Vr.forEachTarget(e,(r=>s.Er(r.sequenceNumber))).next((()=>this.Vr.mr(e,(r=>s.Er(r))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(M("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(Ka)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(M("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ka):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let s,r,o,a,c,d,h;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((g=>(g>this.params.maximumSequenceNumbersToCollect?(M("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),r=this.params.maximumSequenceNumbersToCollect):r=g,a=Date.now(),this.nthSequenceNumber(e,r)))).next((g=>(s=g,c=Date.now(),this.removeTargets(e,s,t)))).next((g=>(o=g,d=Date.now(),this.removeOrphanedDocuments(e,s)))).next((g=>(h=Date.now(),Ut()<=K.DEBUG&&M("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${r} in `+(c-a)+`ms
	Removed ${o} targets in `+(d-c)+`ms
	Removed ${g} documents in `+(h-d)+`ms
Total Duration: ${h-m}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:o,documentsRemoved:g}))))}}function Fm(n,e){return new Om(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(){this.changes=new Lt((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ae.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?P.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Bm{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(s=r,this.remoteDocumentCache.getEntry(e,t)))).next((r=>(s!==null&&xn(s.mutation,r,Ve.empty(),ne.now()),r)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,J()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=J()){const r=Rt();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,s).next((o=>{let a=wn();return o.forEach(((c,d)=>{a=a.insert(c,d.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const s=Rt();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,J())))}populateOverlays(e,t,s){const r=[];return s.forEach((o=>{t.has(o)||r.push(o)})),this.documentOverlayCache.getOverlays(e,r).next((o=>{o.forEach(((a,c)=>{t.set(a,c)}))}))}computeViews(e,t,s,r){let o=We();const a=Vn(),c=(function(){return Vn()})();return t.forEach(((d,h)=>{const m=s.get(h.key);r.has(h.key)&&(m===void 0||m.mutation instanceof _t)?o=o.insert(h.key,h):m!==void 0?(a.set(h.key,m.mutation.getFieldMask()),xn(m.mutation,h,m.mutation.getFieldMask(),ne.now())):a.set(h.key,Ve.empty())})),this.recalculateAndSaveOverlays(e,o).next((d=>(d.forEach(((h,m)=>a.set(h,m))),t.forEach(((h,m)=>c.set(h,new qm(m,a.get(h)??null)))),c)))}recalculateAndSaveOverlays(e,t){const s=Vn();let r=new re(((a,c)=>a-c)),o=J();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const c of a)c.keys().forEach((d=>{const h=t.get(d);if(h===null)return;let m=s.get(d)||Ve.empty();m=c.applyToLocalView(h,m),s.set(d,m);const g=(r.get(c.batchId)||J()).add(d);r=r.insert(c.batchId,g)}))})).next((()=>{const a=[],c=r.getReverseIterator();for(;c.hasNext();){const d=c.getNext(),h=d.key,m=d.value,g=Ic();m.forEach((E=>{if(!o.has(E)){const w=Pc(t.get(E),s.get(E));w!==null&&g.set(E,w),o=o.add(E)}})),a.push(this.documentOverlayCache.saveOverlays(e,h,g))}return P.waitFor(a)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,r){return Bf(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):vc(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,r):this.getDocumentsMatchingCollectionQuery(e,t,s,r)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next((o=>{const a=r-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-o.size):P.resolve(Rt());let c=On,d=o;return a.next((h=>P.forEach(h,((m,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),o.get(m)?P.resolve():this.remoteDocumentCache.getEntry(e,m).next((E=>{d=d.insert(m,E)}))))).next((()=>this.populateOverlays(e,h,o))).next((()=>this.computeViews(e,d,h,J()))).next((m=>({batchId:c,changes:bc(m)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new B(t)).next((s=>{let r=wn();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,r){const o=t.collectionGroup;let a=wn();return this.indexManager.getCollectionParents(e,o).next((c=>P.forEach(c,(d=>{const h=(function(g,E){return new rn(E,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)})(t,d.child(o));return this.getDocumentsMatchingCollectionQuery(e,h,s,r).next((m=>{m.forEach(((g,E)=>{a=a.insert(g,E)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,s,r){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,o,r)))).next((a=>{o.forEach(((d,h)=>{const m=h.getKey();a.get(m)===null&&(a=a.insert(m,Ae.newInvalidDocument(m)))}));let c=wn();return a.forEach(((d,h)=>{const m=o.get(d);m!==void 0&&xn(m.mutation,h,Ve.empty(),ne.now()),Ks(t,h)&&(c=c.insert(d,h))})),c}))}}/**
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
 */class Um{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return P.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(r){return{id:r.id,version:r.version,createTime:je(r.createTime)}})(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(r){return{name:r.name,query:Vm(r.bundledQuery),readTime:je(r.readTime)}})(t)),P.resolve()}}/**
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
 */class jm{constructor(){this.overlays=new re(B.comparator),this.Lr=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Rt();return P.forEach(t,(r=>this.getOverlay(e,r).next((o=>{o!==null&&s.set(r,o)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((r,o)=>{this.bt(e,t,o)})),P.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.Lr.get(s);return r!==void 0&&(r.forEach((o=>this.overlays=this.overlays.remove(o))),this.Lr.delete(s)),P.resolve()}getOverlaysForCollection(e,t,s){const r=Rt(),o=t.length+1,a=new B(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const d=c.getNext().value,h=d.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===o&&d.largestBatchId>s&&r.set(d.getKey(),d)}return P.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let o=new re(((h,m)=>h-m));const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>s){let m=o.get(h.largestBatchId);m===null&&(m=Rt(),o=o.insert(h.largestBatchId,m)),m.set(h.getKey(),h)}}const c=Rt(),d=o.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach(((h,m)=>c.set(h,m))),!(c.size()>=r)););return P.resolve(c)}bt(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const a=this.Lr.get(r.largestBatchId).delete(s.key);this.Lr.set(r.largestBatchId,a)}this.overlays=this.overlays.insert(s.key,new am(t,s));let o=this.Lr.get(t);o===void 0&&(o=J(),this.Lr.set(t,o)),this.Lr.set(t,o.add(s.key))}}/**
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
 */class zm{constructor(){this.sessionToken=_e.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(){this.kr=new me(ge.Kr),this.qr=new me(ge.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const s=new ge(e,t);this.kr=this.kr.add(s),this.qr=this.qr.add(s)}$r(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new ge(e,t))}Qr(e,t){e.forEach((s=>this.removeReference(s,t)))}Gr(e){const t=new B(new ee([])),s=new ge(t,e),r=new ge(t,e+1),o=[];return this.qr.forEachInRange([s,r],(a=>{this.Wr(a),o.push(a.key)})),o}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new B(new ee([])),s=new ge(t,e),r=new ge(t,e+1);let o=J();return this.qr.forEachInRange([s,r],(a=>{o=o.add(a.key)})),o}containsKey(e){const t=new ge(e,0),s=this.kr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class ge{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return B.comparator(e.key,t.key)||Q(e.Hr,t.Hr)}static Ur(e,t){return Q(e.Hr,t.Hr)||B.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new me(ge.Kr)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const o=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new om(o,t,s,r);this.mutationQueue.push(a);for(const c of r)this.Jr=this.Jr.add(new ge(c.key,o)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return P.resolve(a)}lookupMutationBatch(e,t){return P.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.Xr(s),o=r<0?0:r;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?Ii:this.Yn-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new ge(t,0),r=new ge(t,Number.POSITIVE_INFINITY),o=[];return this.Jr.forEachInRange([s,r],(a=>{const c=this.Zr(a.Hr);o.push(c)})),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new me(Q);return t.forEach((r=>{const o=new ge(r,0),a=new ge(r,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([o,a],(c=>{s=s.add(c.Hr)}))})),P.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let o=s;B.isDocumentKey(o)||(o=o.child(""));const a=new ge(new B(o),0);let c=new me(Q);return this.Jr.forEachWhile((d=>{const h=d.key.path;return!!s.isPrefixOf(h)&&(h.length===r&&(c=c.add(d.Hr)),!0)}),a),P.resolve(this.Yr(c))}Yr(e){const t=[];return e.forEach((s=>{const r=this.Zr(s);r!==null&&t.push(r)})),t}removeMutationBatch(e,t){X(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Jr;return P.forEach(t.mutations,(r=>{const o=new ge(r.key,t.batchId);return s=s.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Jr=s}))}nr(e){}containsKey(e,t){const s=new ge(t,0),r=this.Jr.firstAfterOrEqual(s);return P.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e){this.ti=e,this.docs=(function(){return new re(B.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),o=r?r.size:0,a=this.ti(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return P.resolve(s?s.document.mutableCopy():Ae.newInvalidDocument(t))}getEntries(e,t){let s=We();return t.forEach((r=>{const o=this.docs.get(r);s=s.insert(r,o?o.document.mutableCopy():Ae.newInvalidDocument(r))})),P.resolve(s)}getDocumentsMatchingQuery(e,t,s,r){let o=We();const a=t.path,c=new B(a.child("__id-9223372036854775808__")),d=this.docs.getIteratorFrom(c);for(;d.hasNext();){const{key:h,value:{document:m}}=d.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||yf(gf(m),s)<=0||(r.has(m.key)||Ks(t,m))&&(o=o.insert(m.key,m.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(e,t,s,r){U(9500)}ni(e,t){return P.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new Qm(this)}getSize(e){return P.resolve(this.size)}}class Qm extends $m{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,r)=>{r.isValidDocument()?t.push(this.Mr.addEntry(e,r)):this.Mr.removeEntry(s)})),P.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e){this.persistence=e,this.ri=new Lt((t=>Si(t)),Ri),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.ii=0,this.si=new ki,this.targetCount=0,this.oi=Xt._r()}forEachTarget(e,t){return this.ri.forEach(((s,r)=>t(r))),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.ii&&(this.ii=t),P.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Xt(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.lr(t),P.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,s){let r=0;const o=[];return this.ri.forEach(((a,c)=>{c.sequenceNumber<=t&&s.get(c.targetId)===null&&(this.ri.delete(a),o.push(this.removeMatchingKeysForTargetId(e,c.targetId)),r++)})),P.waitFor(o).next((()=>r))}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){const s=this.ri.get(t)||null;return P.resolve(s)}addMatchingKeys(e,t,s){return this.si.$r(t,s),P.resolve()}removeMatchingKeys(e,t,s){this.si.Qr(t,s);const r=this.persistence.referenceDelegate,o=[];return r&&t.forEach((a=>{o.push(r.markPotentiallyOrphaned(e,a))})),P.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),P.resolve()}getMatchingKeysForTargetId(e,t){const s=this.si.jr(t);return P.resolve(s)}containsKey(e,t){return P.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,t){this._i={},this.overlays={},this.ai=new Hs(0),this.ui=!1,this.ui=!0,this.ci=new zm,this.referenceDelegate=e(this),this.li=new Jm(this),this.indexManager=new xm,this.remoteDocumentCache=(function(r){return new Hm(r)})((s=>this.referenceDelegate.hi(s))),this.serializer=new Dm(t),this.Pi=new Um(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new jm,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this._i[e.toKey()];return s||(s=new Gm(t,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,s){M("MemoryPersistence","Starting transaction:",e);const r=new Wm(this.ai.next());return this.referenceDelegate.Ti(),s(r).next((o=>this.referenceDelegate.Ii(r).next((()=>o)))).toPromise().then((o=>(r.raiseOnCommittedEvent(),o)))}Ei(e,t){return P.or(Object.values(this._i).map((s=>()=>s.containsKey(e,t))))}}class Wm extends _f{constructor(e){super(),this.currentSequenceNumber=e}}class Li{constructor(e){this.persistence=e,this.Ri=new ki,this.Ai=null}static Vi(e){return new Li(e)}get di(){if(this.Ai)return this.Ai;throw U(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.di.delete(s.toString()),P.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.di.add(s.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),P.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((r=>this.di.add(r.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((r=>{r.forEach((o=>this.di.add(o.toString())))})).next((()=>s.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.di,(s=>{const r=B.fromPath(s);return this.mi(e,r).next((o=>{o||t.removeEntry(r,j.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((s=>{s?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return P.or([()=>P.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class qs{constructor(e,t){this.persistence=e,this.fi=new Lt((s=>bf(s.path)),((s,r)=>s.isEqual(r))),this.garbageCollector=Fm(this,t)}static Vi(e,t){return new qs(e,t)}Ti(){}Ii(e){return P.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((r=>s+r))))}pr(e){let t=0;return this.mr(e,(s=>{t++})).next((()=>t))}mr(e,t){return P.forEach(this.fi,((s,r)=>this.wr(e,s,r).next((o=>o?P.resolve():t(r)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const r=this.persistence.getRemoteDocumentCache(),o=r.newChangeBuffer();return r.ni(e,(a=>this.wr(e,a,t).next((c=>{c||(s++,o.removeEntry(a,j.min()))})))).next((()=>o.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),P.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),P.resolve()}removeReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),P.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),P.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=bs(e.data.value)),t}wr(e,t,s){return P.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.fi.get(t);return P.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Ts=s,this.Is=r}static Es(e,t){let s=J(),r=J();for(const o of t.docChanges)switch(o.type){case 0:s=s.add(o.doc.key);break;case 1:r=r.add(o.doc.key)}return new Mi(e,t.fromCache,s,r)}}/**
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
 */class Ym{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return Md()?8:Ef(kd())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,r){const o={result:null};return this.gs(e,t).next((a=>{o.result=a})).next((()=>{if(!o.result)return this.ps(e,t,r,s).next((a=>{o.result=a}))})).next((()=>{if(o.result)return;const a=new Km;return this.ys(e,t,a).next((c=>{if(o.result=c,this.As)return this.ws(e,t,a,c.size)}))})).next((()=>o.result))}ws(e,t,s,r){return s.documentReadCount<this.Vs?(Ut()<=K.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",jt(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),P.resolve()):(Ut()<=K.DEBUG&&M("QueryEngine","Query:",jt(t),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.ds*r?(Ut()<=K.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",jt(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ue(t))):P.resolve())}gs(e,t){if(qa(t))return P.resolve(null);let s=Ue(t);return this.indexManager.getIndexType(e,s).next((r=>r===0?null:(t.limit!==null&&r===1&&(t=Os(t,null,"F"),s=Ue(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((o=>{const a=J(...o);return this.fs.getDocuments(e,a).next((c=>this.indexManager.getMinOffset(e,s).next((d=>{const h=this.bs(t,c);return this.Ss(t,h,a,d.readTime)?this.gs(e,Os(t,null,"F")):this.Ds(e,h,t,d)}))))})))))}ps(e,t,s,r){return qa(t)||r.isEqual(j.min())?P.resolve(null):this.fs.getDocuments(e,s).next((o=>{const a=this.bs(t,o);return this.Ss(t,a,s,r)?P.resolve(null):(Ut()<=K.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),jt(t)),this.Ds(e,a,t,pf(r,On)).next((c=>c)))}))}bs(e,t){let s=new me(Ec(e));return t.forEach(((r,o)=>{Ks(e,o)&&(s=s.add(o))})),s}Ss(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(r)>0)}ys(e,t,s){return Ut()<=K.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",jt(t)),this.fs.getDocumentsMatchingQuery(e,t,dt.min(),s)}Ds(e,t,s,r){return this.fs.getDocumentsMatchingQuery(e,s,r).next((o=>(t.forEach((a=>{o=o.insert(a.key,a)})),o)))}}/**
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
 */const Oi="LocalStore",Xm=3e8;class Zm{constructor(e,t,s,r){this.persistence=e,this.Cs=t,this.serializer=r,this.vs=new re(Q),this.Fs=new Lt((o=>Si(o)),Ri),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Bm(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function ep(n,e,t,s){return new Zm(n,e,t,s)}async function zc(n,e){const t=z(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next((o=>(r=o,t.Os(e),t.mutationQueue.getAllMutationBatches(s)))).next((o=>{const a=[],c=[];let d=J();for(const h of r){a.push(h.batchId);for(const m of h.mutations)d=d.add(m.key)}for(const h of o){c.push(h.batchId);for(const m of h.mutations)d=d.add(m.key)}return t.localDocuments.getDocuments(s,d).next((h=>({Ns:h,removedBatchIds:a,addedBatchIds:c})))}))}))}function tp(n,e){const t=z(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const r=e.batch.keys(),o=t.xs.newChangeBuffer({trackRemovals:!0});return(function(c,d,h,m){const g=h.batch,E=g.keys();let w=P.resolve();return E.forEach((R=>{w=w.next((()=>m.getEntry(d,R))).next((D=>{const x=h.docVersions.get(R);X(x!==null,48541),D.version.compareTo(x)<0&&(g.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),m.addEntry(D)))}))})),w.next((()=>c.mutationQueue.removeMutationBatch(d,g)))})(t,s,e,o).next((()=>o.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(c){let d=J();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(d=d.add(c.batch.mutations[h].key));return d})(e)))).next((()=>t.localDocuments.getDocuments(s,r)))}))}function Gc(n){const e=z(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function np(n,e){const t=z(n),s=e.snapshotVersion;let r=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(o=>{const a=t.xs.newChangeBuffer({trackRemovals:!0});r=t.vs;const c=[];e.targetChanges.forEach(((m,g)=>{const E=r.get(g);if(!E)return;c.push(t.li.removeMatchingKeys(o,m.removedDocuments,g).next((()=>t.li.addMatchingKeys(o,m.addedDocuments,g))));let w=E.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(g)!==null?w=w.withResumeToken(_e.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):m.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(m.resumeToken,s)),r=r.insert(g,w),(function(D,x,V){return D.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=Xm?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0})(E,w,m)&&c.push(t.li.updateTargetData(o,w))}));let d=We(),h=J();if(e.documentUpdates.forEach((m=>{e.resolvedLimboDocuments.has(m)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(o,m))})),c.push(sp(o,a,e.documentUpdates).next((m=>{d=m.Bs,h=m.Ls}))),!s.isEqual(j.min())){const m=t.li.getLastRemoteSnapshotVersion(o).next((g=>t.li.setTargetsMetadata(o,o.currentSequenceNumber,s)));c.push(m)}return P.waitFor(c).next((()=>a.apply(o))).next((()=>t.localDocuments.getLocalViewOfDocuments(o,d,h))).next((()=>d))})).then((o=>(t.vs=r,o)))}function sp(n,e,t){let s=J(),r=J();return t.forEach((o=>s=s.add(o))),e.getEntries(n,s).next((o=>{let a=We();return t.forEach(((c,d)=>{const h=o.get(c);d.isFoundDocument()!==h.isFoundDocument()&&(r=r.add(c)),d.isNoDocument()&&d.version.isEqual(j.min())?(e.removeEntry(c,d.readTime),a=a.insert(c,d)):!h.isValidDocument()||d.version.compareTo(h.version)>0||d.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(d),a=a.insert(c,d)):M(Oi,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",d.version)})),{Bs:a,Ls:r}}))}function rp(n,e){const t=z(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Ii),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function ip(n,e){const t=z(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let r;return t.li.getTargetData(s,e).next((o=>o?(r=o,P.resolve(r)):t.li.allocateTargetId(s).next((a=>(r=new it(e,a,"TargetPurposeListen",s.currentSequenceNumber),t.li.addTargetData(s,r).next((()=>r)))))))})).then((s=>{const r=t.vs.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.vs=t.vs.insert(s.targetId,s),t.Fs.set(e,s.targetId)),s}))}async function ci(n,e,t){const s=z(n),r=s.vs.get(e),o=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",o,(a=>s.persistence.referenceDelegate.removeTarget(a,r)))}catch(a){if(!sn(a))throw a;M(Oi,`Failed to update sequence numbers for target ${e}: ${a}`)}s.vs=s.vs.remove(e),s.Fs.delete(r.target)}function Za(n,e,t){const s=z(n);let r=j.min(),o=J();return s.persistence.runTransaction("Execute query","readwrite",(a=>(function(d,h,m){const g=z(d),E=g.Fs.get(m);return E!==void 0?P.resolve(g.vs.get(E)):g.li.getTargetData(h,m)})(s,a,Ue(e)).next((c=>{if(c)return r=c.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(a,c.targetId).next((d=>{o=d}))})).next((()=>s.Cs.getDocumentsMatchingQuery(a,e,t?r:j.min(),t?o:J()))).next((c=>(op(s,zf(e),c),{documents:c,ks:o})))))}function op(n,e,t){let s=n.Ms.get(e)||j.min();t.forEach(((r,o)=>{o.readTime.compareTo(s)>0&&(s=o.readTime)})),n.Ms.set(e,s)}class el{constructor(){this.activeTargetIds=Kf()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ap{constructor(){this.vo=new el,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,s){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new el,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */const tl="ConnectivityMonitor";class nl{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){M(tl,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){M(tl,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let _s=null;function ui(){return _s===null?_s=(function(){return 268435456+Math.round(2147483648*Math.random())})():_s++,"0x"+_s.toString(16)}/**
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
 */const Ur="RestConnection",cp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class up{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${s}/databases/${r}`,this.$o=this.databaseId.database===ks?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Wo(e,t,s,r,o){const a=ui(),c=this.Qo(e,t.toUriEncodedString());M(Ur,`Sending RPC '${e}' ${a}:`,c,s);const d={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(d,r,o);const{host:h}=new URL(c),m=_i(h);return this.zo(e,c,d,s,m).then((g=>(M(Ur,`Received RPC '${e}' ${a}: `,g),g)),(g=>{throw Vt(Ur,`RPC '${e}' ${a} failed with error: `,g,"url: ",c,"request:",s),g}))}jo(e,t,s,r,o,a){return this.Wo(e,t,s,r,o)}Go(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+tn})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((r,o)=>e[o]=r)),s&&s.headers.forEach(((r,o)=>e[o]=r))}Qo(e,t){const s=cp[e];let r=`${this.qo}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Te="WebChannelConnection",In=(n,e,t)=>{n.listen(e,(s=>{try{t(s)}catch(r){setTimeout((()=>{throw r}),0)}}))};class Qt extends up{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Qt.c_){const e=Kl();In(e,Wl.STAT_EVENT,(t=>{t.stat===Xr.PROXY?M(Te,"STAT_EVENT: detected buffering proxy"):t.stat===Xr.NOPROXY&&M(Te,"STAT_EVENT: detected no buffering proxy")})),Qt.c_=!0}}zo(e,t,s,r,o){const a=ui();return new Promise(((c,d)=>{const h=new Ql;h.setWithCredentials(!0),h.listenOnce(Jl.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case Ts.NO_ERROR:const g=h.getResponseJson();M(Te,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(g)),c(g);break;case Ts.TIMEOUT:M(Te,`RPC '${e}' ${a} timed out`),d(new L(C.DEADLINE_EXCEEDED,"Request time out"));break;case Ts.HTTP_ERROR:const E=h.getStatus();if(M(Te,`RPC '${e}' ${a} failed with status:`,E,"response text:",h.getResponseText()),E>0){let w=h.getResponseJson();Array.isArray(w)&&(w=w[0]);const R=w==null?void 0:w.error;if(R&&R.status&&R.message){const D=(function(V){const k=V.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(k)>=0?k:C.UNKNOWN})(R.status);d(new L(D,R.message))}else d(new L(C.UNKNOWN,"Server responded with status "+h.getStatus()))}else d(new L(C.UNAVAILABLE,"Connection failed."));break;default:U(9055,{l_:e,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{M(Te,`RPC '${e}' ${a} completed.`)}}));const m=JSON.stringify(r);M(Te,`RPC '${e}' ${a} sending request:`,r),h.send(t,"POST",m,s,15)}))}T_(e,t,s){const r=ui(),o=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(c.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,t,s),c.encodeInitMessageHeaders=!0;const h=o.join("");M(Te,`Creating RPC '${e}' stream ${r}: ${h}`,c);const m=a.createWebChannel(h,c);this.I_(m);let g=!1,E=!1;const w=new dp({Ho:R=>{E?M(Te,`Not sending because RPC '${e}' stream ${r} is closed:`,R):(g||(M(Te,`Opening RPC '${e}' stream ${r} transport.`),m.open(),g=!0),M(Te,`RPC '${e}' stream ${r} sending:`,R),m.send(R))},Jo:()=>m.close()});return In(m,An.EventType.OPEN,(()=>{E||(M(Te,`RPC '${e}' stream ${r} transport opened.`),w.i_())})),In(m,An.EventType.CLOSE,(()=>{E||(E=!0,M(Te,`RPC '${e}' stream ${r} transport closed`),w.o_(),this.E_(m))})),In(m,An.EventType.ERROR,(R=>{E||(E=!0,Vt(Te,`RPC '${e}' stream ${r} transport errored. Name:`,R.name,"Message:",R.message),w.o_(new L(C.UNAVAILABLE,"The operation could not be completed")))})),In(m,An.EventType.MESSAGE,(R=>{var D;if(!E){const x=R.data[0];X(!!x,16349);const V=x,k=(V==null?void 0:V.error)||((D=V[0])==null?void 0:D.error);if(k){M(Te,`RPC '${e}' stream ${r} received error:`,k);const F=k.status;let O=(function(b){const p=ce[b];if(p!==void 0)return Vc(p)})(F),$=k.message;F==="NOT_FOUND"&&$.includes("database")&&$.includes("does not exist")&&$.includes(this.databaseId.database)&&Vt(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),O===void 0&&(O=C.INTERNAL,$="Unknown error status: "+F+" with message "+k.message),E=!0,w.o_(new L(O,$)),m.close()}else M(Te,`RPC '${e}' stream ${r} received:`,x),w.__(x)}})),Qt.u_(),setTimeout((()=>{w.s_()}),0),w}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,s){super.Go(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Yl()}}/**
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
 */function hp(n){return new Qt(n)}function jr(){return typeof document<"u"?document:null}/**
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
 */function er(n){return new gm(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qt.c_=!1;class Hc{constructor(e,t,s=1e3,r=1.5,o=6e4){this.Ci=e,this.timerId=t,this.R_=s,this.A_=r,this.V_=o,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-s);r>0&&M("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,r,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl="PersistentStream";class Qc{constructor(e,t,s,r,o,a,c,d){this.Ci=e,this.b_=s,this.S_=r,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=d,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Hc(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===C.RESOURCE_EXHAUSTED?(Je(t.toString()),Je("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,r])=>{this.D_===t&&this.G_(s,r)}),(s=>{e((()=>{const r=new L(C.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(r)}))}))}G_(e,t){const s=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.Yo((()=>{s((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((r=>{s((()=>this.z_(r)))})),this.stream.onMessage((r=>{s((()=>++this.F_==1?this.H_(r):this.onNext(r)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return M(sl,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(M(sl,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class fp extends Qc{constructor(e,t,s,r,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,a),this.serializer=o}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=_m(this.serializer,e),s=(function(o){if(!("targetChange"in o))return j.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?j.min():a.readTime?je(a.readTime):j.min()})(e);return this.listener.J_(t,s)}Z_(e){const t={};t.database=li(this.serializer),t.addTarget=(function(o,a){let c;const d=a.target;if(c=si(d)?{documents:bm(o,d)}:{query:Im(o,d).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=kc(o,a.resumeToken);const h=ii(o,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(j.min())>0){c.readTime=$s(o,a.snapshotVersion.toTimestamp());const h=ii(o,a.expectedCount);h!==null&&(c.expectedCount=h)}return c})(this.serializer,e);const s=wm(this.serializer,e);s&&(t.labels=s),this.K_(t)}X_(e){const t={};t.database=li(this.serializer),t.removeTarget=e,this.K_(t)}}class mp extends Qc{constructor(e,t,s,r,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,a),this.serializer=o}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}H_(e){return X(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,X(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){X(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Tm(e.writeResults,e.commitTime),s=je(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=li(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>Em(this.serializer,s)))};this.K_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{}class gp extends pp{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new L(C.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Wo(e,oi(t,s),r,o,a))).catch((o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new L(C.UNKNOWN,o.toString())}))}jo(e,t,s,r,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.jo(e,oi(t,s),r,a,c,o))).catch((a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new L(C.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function yp(n,e,t,s){return new gp(n,e,t,s)}class vp{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Je(t),this.aa=!1):M("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt="RemoteStore";class _p{constructor(e,t,s,r,o){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=o,this.Aa.Mo((a=>{s.enqueueAndForget((async()=>{Mt(this)&&(M(xt,"Restarting streams for network reachability change."),await(async function(d){const h=z(d);h.Ea.add(4),await Jn(h),h.Va.set("Unknown"),h.Ea.delete(4),await tr(h)})(this))}))})),this.Va=new vp(s,r)}}async function tr(n){if(Mt(n))for(const e of n.Ra)await e(!0)}async function Jn(n){for(const e of n.Ra)await e(!1)}function Jc(n,e){const t=z(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Bi(t)?qi(t):on(t).O_()&&$i(t,e))}function Fi(n,e){const t=z(n),s=on(t);t.Ia.delete(e),s.O_()&&Wc(t,e),t.Ia.size===0&&(s.O_()?s.L_():Mt(t)&&t.Va.set("Unknown"))}function $i(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(j.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}on(n).Z_(e)}function Wc(n,e){n.da.$e(e),on(n).X_(e)}function qi(n){n.da=new hm({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),on(n).start(),n.Va.ua()}function Bi(n){return Mt(n)&&!on(n).x_()&&n.Ia.size>0}function Mt(n){return z(n).Ea.size===0}function Kc(n){n.da=void 0}async function Ep(n){n.Va.set("Online")}async function Tp(n){n.Ia.forEach(((e,t)=>{$i(n,e)}))}async function bp(n,e){Kc(n),Bi(n)?(n.Va.ha(e),qi(n)):n.Va.set("Unknown")}async function Ip(n,e,t){if(n.Va.set("Online"),e instanceof Nc&&e.state===2&&e.cause)try{await(async function(r,o){const a=o.cause;for(const c of o.targetIds)r.Ia.has(c)&&(await r.remoteSyncer.rejectListen(c,a),r.Ia.delete(c),r.da.removeTarget(c))})(n,e)}catch(s){M(xt,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Bs(n,s)}else if(e instanceof ws?n.da.Xe(e):e instanceof xc?n.da.st(e):n.da.tt(e),!t.isEqual(j.min()))try{const s=await Gc(n.localStore);t.compareTo(s)>=0&&await(function(o,a){const c=o.da.Tt(a);return c.targetChanges.forEach(((d,h)=>{if(d.resumeToken.approximateByteSize()>0){const m=o.Ia.get(h);m&&o.Ia.set(h,m.withResumeToken(d.resumeToken,a))}})),c.targetMismatches.forEach(((d,h)=>{const m=o.Ia.get(d);if(!m)return;o.Ia.set(d,m.withResumeToken(_e.EMPTY_BYTE_STRING,m.snapshotVersion)),Wc(o,d);const g=new it(m.target,d,h,m.sequenceNumber);$i(o,g)})),o.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(s){M(xt,"Failed to raise snapshot:",s),await Bs(n,s)}}async function Bs(n,e,t){if(!sn(e))throw e;n.Ea.add(1),await Jn(n),n.Va.set("Offline"),t||(t=()=>Gc(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{M(xt,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await tr(n)}))}function Yc(n,e){return e().catch((t=>Bs(n,t,e)))}async function nr(n){const e=z(n),t=pt(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Ii;for(;Ap(e);)try{const r=await rp(e.localStore,s);if(r===null){e.Ta.length===0&&t.L_();break}s=r.batchId,wp(e,r)}catch(r){await Bs(e,r)}Xc(e)&&Zc(e)}function Ap(n){return Mt(n)&&n.Ta.length<10}function wp(n,e){n.Ta.push(e);const t=pt(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function Xc(n){return Mt(n)&&!pt(n).x_()&&n.Ta.length>0}function Zc(n){pt(n).start()}async function Sp(n){pt(n).ra()}async function Rp(n){const e=pt(n);for(const t of n.Ta)e.ea(t.mutations)}async function Cp(n,e,t){const s=n.Ta.shift(),r=Vi.from(s,e,t);await Yc(n,(()=>n.remoteSyncer.applySuccessfulWrite(r))),await nr(n)}async function Pp(n,e){e&&pt(n).Y_&&await(async function(s,r){if((function(a){return cm(a)&&a!==C.ABORTED})(r.code)){const o=s.Ta.shift();pt(s).B_(),await Yc(s,(()=>s.remoteSyncer.rejectFailedWrite(o.batchId,r))),await nr(s)}})(n,e),Xc(n)&&Zc(n)}async function rl(n,e){const t=z(n);t.asyncQueue.verifyOperationInProgress(),M(xt,"RemoteStore received new credentials");const s=Mt(t);t.Ea.add(3),await Jn(t),s&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await tr(t)}async function Dp(n,e){const t=z(n);e?(t.Ea.delete(2),await tr(t)):e||(t.Ea.add(2),await Jn(t),t.Va.set("Unknown"))}function on(n){return n.ma||(n.ma=(function(t,s,r){const o=z(t);return o.sa(),new fp(s,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,r)})(n.datastore,n.asyncQueue,{Zo:Ep.bind(null,n),Yo:Tp.bind(null,n),t_:bp.bind(null,n),J_:Ip.bind(null,n)}),n.Ra.push((async e=>{e?(n.ma.B_(),Bi(n)?qi(n):n.Va.set("Unknown")):(await n.ma.stop(),Kc(n))}))),n.ma}function pt(n){return n.fa||(n.fa=(function(t,s,r){const o=z(t);return o.sa(),new mp(s,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,r)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:Sp.bind(null,n),t_:Pp.bind(null,n),ta:Rp.bind(null,n),na:Cp.bind(null,n)}),n.Ra.push((async e=>{e?(n.fa.B_(),await nr(n)):(await n.fa.stop(),n.Ta.length>0&&(M(xt,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,t,s,r,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=o,this.deferred=new ct,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,r,o){const a=Date.now()+s,c=new Ui(e,t,a,r,o);return c.start(s),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ji(n,e){if(Je("AsyncQueue",`${e}: ${n}`),sn(n))return new L(C.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{static emptySet(e){return new Jt(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||B.comparator(t.key,s.key):(t,s)=>B.comparator(t.key,s.key),this.keyedMap=wn(),this.sortedSet=new re(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Jt)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,o=s.getNext().key;if(!r.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Jt;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(){this.ga=new re(B.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):U(63341,{Vt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Zt{constructor(e,t,s,r,o,a,c,d,h){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=d,this.hasCachedResults=h}static fromInitialDocuments(e,t,s,r,o){const a=[];return t.forEach((c=>{a.push({type:0,doc:c})})),new Zt(e,t,Jt.emptySet(t),a,s,r,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ws(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class xp{constructor(){this.queries=ol(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const r=z(t),o=r.queries;r.queries=ol(),o.forEach(((a,c)=>{for(const d of c.ba)d.onError(s)}))})(this,new L(C.ABORTED,"Firestore shutting down"))}}function ol(){return new Lt((n=>_c(n)),Ws)}async function eu(n,e){const t=z(n);let s=3;const r=e.query;let o=t.queries.get(r);o?!o.Sa()&&e.Da()&&(s=2):(o=new Vp,s=e.Da()?0:1);try{switch(s){case 0:o.wa=await t.onListen(r,!0);break;case 1:o.wa=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(a){const c=ji(a,`Initialization of query '${jt(e.query)}' failed`);return void e.onError(c)}t.queries.set(r,o),o.ba.push(e),e.va(t.onlineState),o.wa&&e.Fa(o.wa)&&zi(t)}async function tu(n,e){const t=z(n),s=e.query;let r=3;const o=t.queries.get(s);if(o){const a=o.ba.indexOf(e);a>=0&&(o.ba.splice(a,1),o.ba.length===0?r=e.Da()?0:1:!o.Sa()&&e.Da()&&(r=2))}switch(r){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function Np(n,e){const t=z(n);let s=!1;for(const r of e){const o=r.query,a=t.queries.get(o);if(a){for(const c of a.ba)c.Fa(r)&&(s=!0);a.wa=r}}s&&zi(t)}function kp(n,e,t){const s=z(n),r=s.queries.get(e);if(r)for(const o of r.ba)o.onError(t);s.queries.delete(e)}function zi(n){n.Ca.forEach((e=>{e.next()}))}var di,al;(al=di||(di={})).Ma="default",al.Cache="cache";class nu{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Zt(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.Ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Zt.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==di.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e){this.key=e}}class ru{constructor(e){this.key=e}}class Lp{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=J(),this.mutatedKeys=J(),this.eu=Ec(e),this.tu=new Jt(this.eu)}get nu(){return this.Za}ru(e,t){const s=t?t.iu:new il,r=t?t.tu:this.tu;let o=t?t.mutatedKeys:this.mutatedKeys,a=r,c=!1;const d=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,h=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((m,g)=>{const E=r.get(m),w=Ks(this.query,g)?g:null,R=!!E&&this.mutatedKeys.has(E.key),D=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let x=!1;E&&w?E.data.isEqual(w.data)?R!==D&&(s.track({type:3,doc:w}),x=!0):this.su(E,w)||(s.track({type:2,doc:w}),x=!0,(d&&this.eu(w,d)>0||h&&this.eu(w,h)<0)&&(c=!0)):!E&&w?(s.track({type:0,doc:w}),x=!0):E&&!w&&(s.track({type:1,doc:E}),x=!0,(d||h)&&(c=!0)),x&&(w?(a=a.add(w),o=D?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),s.track({type:1,doc:m})}return{tu:a,iu:s,Ss:c,mutatedKeys:o}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,r){const o=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort(((m,g)=>(function(w,R){const D=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U(20277,{Vt:x})}};return D(w)-D(R)})(m.type,g.type)||this.eu(m.doc,g.doc))),this.ou(s),r=r??!1;const c=t&&!r?this._u():[],d=this.Ya.size===0&&this.current&&!r?1:0,h=d!==this.Xa;return this.Xa=d,a.length!==0||h?{snapshot:new Zt(this.query,e.tu,o,a,e.mutatedKeys,d===0,h,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new il,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=J(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Ya=this.Ya.add(s.key))}));const t=[];return e.forEach((s=>{this.Ya.has(s)||t.push(new ru(s))})),this.Ya.forEach((s=>{e.has(s)||t.push(new su(s))})),t}cu(e){this.Za=e.ks,this.Ya=J();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Zt.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Gi="SyncEngine";class Mp{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class Op{constructor(e){this.key=e,this.hu=!1}}class Fp{constructor(e,t,s,r,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Lt((c=>_c(c)),Ws),this.Iu=new Map,this.Eu=new Set,this.Ru=new re(B.comparator),this.Au=new Map,this.Vu=new ki,this.du={},this.mu=new Map,this.fu=Xt.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function $p(n,e,t=!0){const s=uu(n);let r;const o=s.Tu.get(e);return o?(s.sharedClientState.addLocalQueryTarget(o.targetId),r=o.view.lu()):r=await iu(s,e,t,!0),r}async function qp(n,e){const t=uu(n);await iu(t,e,!0,!1)}async function iu(n,e,t,s){const r=await ip(n.localStore,Ue(e)),o=r.targetId,a=n.sharedClientState.addLocalQueryTarget(o,t);let c;return s&&(c=await Bp(n,e,o,a==="current",r.resumeToken)),n.isPrimaryClient&&t&&Jc(n.remoteStore,r),c}async function Bp(n,e,t,s,r){n.pu=(g,E,w)=>(async function(D,x,V,k){let F=x.view.ru(V);F.Ss&&(F=await Za(D.localStore,x.query,!1).then((({documents:b})=>x.view.ru(b,F))));const O=k&&k.targetChanges.get(x.targetId),$=k&&k.targetMismatches.get(x.targetId)!=null,q=x.view.applyChanges(F,D.isPrimaryClient,O,$);return cl(D,x.targetId,q.au),q.snapshot})(n,g,E,w);const o=await Za(n.localStore,e,!0),a=new Lp(e,o.ks),c=a.ru(o.documents),d=Qn.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),h=a.applyChanges(c,n.isPrimaryClient,d);cl(n,t,h.au);const m=new Mp(e,t,a);return n.Tu.set(e,m),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),h.snapshot}async function Up(n,e,t){const s=z(n),r=s.Tu.get(e),o=s.Iu.get(r.targetId);if(o.length>1)return s.Iu.set(r.targetId,o.filter((a=>!Ws(a,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await ci(s.localStore,r.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(r.targetId),t&&Fi(s.remoteStore,r.targetId),hi(s,r.targetId)})).catch(nn)):(hi(s,r.targetId),await ci(s.localStore,r.targetId,!0))}async function jp(n,e){const t=z(n),s=t.Tu.get(e),r=t.Iu.get(s.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Fi(t.remoteStore,s.targetId))}async function zp(n,e,t){const s=Yp(n);try{const r=await(function(a,c){const d=z(a),h=ne.now(),m=c.reduce(((w,R)=>w.add(R.key)),J());let g,E;return d.persistence.runTransaction("Locally write mutations","readwrite",(w=>{let R=We(),D=J();return d.xs.getEntries(w,m).next((x=>{R=x,R.forEach(((V,k)=>{k.isValidDocument()||(D=D.add(V))}))})).next((()=>d.localDocuments.getOverlayedDocuments(w,R))).next((x=>{g=x;const V=[];for(const k of c){const F=rm(k,g.get(k.key).overlayedDocument);F!=null&&V.push(new _t(k.key,F,dc(F.value.mapValue),Me.exists(!0)))}return d.mutationQueue.addMutationBatch(w,h,V,c)})).next((x=>{E=x;const V=x.applyToLocalDocumentSet(g,D);return d.documentOverlayCache.saveOverlays(w,x.batchId,V)}))})).then((()=>({batchId:E.batchId,changes:bc(g)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),(function(a,c,d){let h=a.du[a.currentUser.toKey()];h||(h=new re(Q)),h=h.insert(c,d),a.du[a.currentUser.toKey()]=h})(s,r.batchId,t),await Wn(s,r.changes),await nr(s.remoteStore)}catch(r){const o=ji(r,"Failed to persist write");t.reject(o)}}async function ou(n,e){const t=z(n);try{const s=await np(t.localStore,e);e.targetChanges.forEach(((r,o)=>{const a=t.Au.get(o);a&&(X(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?a.hu=!0:r.modifiedDocuments.size>0?X(a.hu,14607):r.removedDocuments.size>0&&(X(a.hu,42227),a.hu=!1))})),await Wn(t,s,e)}catch(s){await nn(s)}}function ll(n,e,t){const s=z(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.Tu.forEach(((o,a)=>{const c=a.view.va(e);c.snapshot&&r.push(c.snapshot)})),(function(a,c){const d=z(a);d.onlineState=c;let h=!1;d.queries.forEach(((m,g)=>{for(const E of g.ba)E.va(c)&&(h=!0)})),h&&zi(d)})(s.eventManager,e),r.length&&s.Pu.J_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Gp(n,e,t){const s=z(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.Au.get(e),o=r&&r.key;if(o){let a=new re(B.comparator);a=a.insert(o,Ae.newNoDocument(o,j.min()));const c=J().add(o),d=new Zs(j.min(),new Map,new re(Q),a,c);await ou(s,d),s.Ru=s.Ru.remove(o),s.Au.delete(e),Hi(s)}else await ci(s.localStore,e,!1).then((()=>hi(s,e,t))).catch(nn)}async function Hp(n,e){const t=z(n),s=e.batch.batchId;try{const r=await tp(t.localStore,e);lu(t,s,null),au(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Wn(t,r)}catch(r){await nn(r)}}async function Qp(n,e,t){const s=z(n);try{const r=await(function(a,c){const d=z(a);return d.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let m;return d.mutationQueue.lookupMutationBatch(h,c).next((g=>(X(g!==null,37113),m=g.keys(),d.mutationQueue.removeMutationBatch(h,g)))).next((()=>d.mutationQueue.performConsistencyCheck(h))).next((()=>d.documentOverlayCache.removeOverlaysForBatchId(h,m,c))).next((()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,m))).next((()=>d.localDocuments.getDocuments(h,m)))}))})(s.localStore,e);lu(s,e,t),au(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Wn(s,r)}catch(r){await nn(r)}}function au(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function lu(n,e,t){const s=z(n);let r=s.du[s.currentUser.toKey()];if(r){const o=r.get(e);o&&(t?o.reject(t):o.resolve(),r=r.remove(e)),s.du[s.currentUser.toKey()]=r}}function hi(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Iu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Iu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach((s=>{n.Vu.containsKey(s)||cu(n,s)}))}function cu(n,e){n.Eu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(Fi(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),Hi(n))}function cl(n,e,t){for(const s of t)s instanceof su?(n.Vu.addReference(s.key,e),Jp(n,s)):s instanceof ru?(M(Gi,"Document no longer in limbo: "+s.key),n.Vu.removeReference(s.key,e),n.Vu.containsKey(s.key)||cu(n,s.key)):U(19791,{wu:s})}function Jp(n,e){const t=e.key,s=t.path.canonicalString();n.Ru.get(t)||n.Eu.has(s)||(M(Gi,"New document in limbo: "+t),n.Eu.add(s),Hi(n))}function Hi(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new B(ee.fromString(e)),s=n.fu.next();n.Au.set(s,new Op(t)),n.Ru=n.Ru.insert(t,s),Jc(n.remoteStore,new it(Ue(Ci(t.path)),s,"TargetPurposeLimboResolution",Hs.ce))}}async function Wn(n,e,t){const s=z(n),r=[],o=[],a=[];s.Tu.isEmpty()||(s.Tu.forEach(((c,d)=>{a.push(s.pu(d,e,t).then((h=>{var m;if((h||t)&&s.isPrimaryClient){const g=h?!h.fromCache:(m=t==null?void 0:t.targetChanges.get(d.targetId))==null?void 0:m.current;s.sharedClientState.updateQueryState(d.targetId,g?"current":"not-current")}if(h){r.push(h);const g=Mi.Es(d.targetId,h);o.push(g)}})))})),await Promise.all(a),s.Pu.J_(r),await(async function(d,h){const m=z(d);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",(g=>P.forEach(h,(E=>P.forEach(E.Ts,(w=>m.persistence.referenceDelegate.addReference(g,E.targetId,w))).next((()=>P.forEach(E.Is,(w=>m.persistence.referenceDelegate.removeReference(g,E.targetId,w)))))))))}catch(g){if(!sn(g))throw g;M(Oi,"Failed to update sequence numbers: "+g)}for(const g of h){const E=g.targetId;if(!g.fromCache){const w=m.vs.get(E),R=w.snapshotVersion,D=w.withLastLimboFreeSnapshotVersion(R);m.vs=m.vs.insert(E,D)}}})(s.localStore,o))}async function Wp(n,e){const t=z(n);if(!t.currentUser.isEqual(e)){M(Gi,"User change. New user:",e.toKey());const s=await zc(t.localStore,e);t.currentUser=e,(function(o,a){o.mu.forEach((c=>{c.forEach((d=>{d.reject(new L(C.CANCELLED,a))}))})),o.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Wn(t,s.Ns)}}function Kp(n,e){const t=z(n),s=t.Au.get(e);if(s&&s.hu)return J().add(s.key);{let r=J();const o=t.Iu.get(e);if(!o)return r;for(const a of o){const c=t.Tu.get(a);r=r.unionWith(c.view.nu)}return r}}function uu(n){const e=z(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=ou.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Kp.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Gp.bind(null,e),e.Pu.J_=Np.bind(null,e.eventManager),e.Pu.yu=kp.bind(null,e.eventManager),e}function Yp(n){const e=z(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Hp.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Qp.bind(null,e),e}class Us{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=er(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return ep(this.persistence,new Ym,e.initialUser,this.serializer)}Cu(e){return new jc(Li.Vi,this.serializer)}Du(e){return new ap}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Us.provider={build:()=>new Us};class Xp extends Us{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){X(this.persistence.referenceDelegate instanceof qs,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new Mm(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Ce.withCacheSize(this.cacheSizeBytes):Ce.DEFAULT;return new jc((s=>qs.Vi(s,t)),this.serializer)}}class fi{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>ll(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Wp.bind(null,this.syncEngine),await Dp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new xp})()}createDatastore(e){const t=er(e.databaseInfo.databaseId),s=hp(e.databaseInfo);return yp(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,r,o,a,c){return new _p(s,r,o,a,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>ll(this.syncEngine,t,0)),(function(){return nl.v()?new nl:new lp})())}createSyncEngine(e,t){return(function(r,o,a,c,d,h,m){const g=new Fp(r,o,a,c,d,h);return m&&(g.gu=!0),g})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(r){const o=z(r);M(xt,"RemoteStore shutting down."),o.Ea.add(5),await Jn(o),o.Aa.shutdown(),o.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}fi.provider={build:()=>new fi};/**
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
 */class du{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Je("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt="FirestoreClient";class Zp{constructor(e,t,s,r,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=r,this.user=Ie.UNAUTHENTICATED,this.clientId=bi.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(s,(async a=>{M(gt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(s,(a=>(M(gt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ct;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=ji(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function zr(n,e){n.asyncQueue.verifyOperationInProgress(),M(gt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async r=>{s.isEqual(r)||(await zc(e.localStore,r),s=r)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function ul(n,e){n.asyncQueue.verifyOperationInProgress();const t=await eg(n);M(gt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>rl(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,r)=>rl(e.remoteStore,r))),n._onlineComponents=e}async function eg(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){M(gt,"Using user provided OfflineComponentProvider");try{await zr(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(r){return r.name==="FirebaseError"?r.code===C.FAILED_PRECONDITION||r.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11})(t))throw t;Vt("Error using user provided cache. Falling back to memory cache: "+t),await zr(n,new Us)}}else M(gt,"Using default OfflineComponentProvider"),await zr(n,new Xp(void 0));return n._offlineComponents}async function hu(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(M(gt,"Using user provided OnlineComponentProvider"),await ul(n,n._uninitializedComponentsProvider._online)):(M(gt,"Using default OnlineComponentProvider"),await ul(n,new fi))),n._onlineComponents}function tg(n){return hu(n).then((e=>e.syncEngine))}async function mi(n){const e=await hu(n),t=e.eventManager;return t.onListen=$p.bind(null,e.syncEngine),t.onUnlisten=Up.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=qp.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=jp.bind(null,e.syncEngine),t}function ng(n,e,t,s){const r=new du(s),o=new nu(e,r,t);return n.asyncQueue.enqueueAndForget((async()=>eu(await mi(n),o))),()=>{r.Nu(),n.asyncQueue.enqueueAndForget((async()=>tu(await mi(n),o)))}}function sg(n,e,t={}){const s=new ct;return n.asyncQueue.enqueueAndForget((async()=>(function(o,a,c,d,h){const m=new du({next:E=>{m.Nu(),a.enqueueAndForget((()=>tu(o,g))),E.fromCache&&d.source==="server"?h.reject(new L(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(E)},error:E=>h.reject(E)}),g=new nu(c,m,{includeMetadataChanges:!0,Ka:!0});return eu(o,g)})(await mi(n),n.asyncQueue,e,t,s))),s.promise}function rg(n,e){const t=new ct;return n.asyncQueue.enqueueAndForget((async()=>zp(await tg(n),e,t))),t.promise}/**
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
 */function fu(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const ig="ComponentProvider",dl=new Map;function og(n,e,t,s,r){return new wf(n,e,t,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,fu(r.experimentalLongPollingOptions),r.useFetchStreams,r.isUsingEmulator,s)}/**
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
 */const mu="firestore.googleapis.com",hl=!0;class fl{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new L(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=mu,this.ssl=hl}else this.host=e.host,this.ssl=e.ssl??hl;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Uc;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<km)throw new L(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}mf("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fu(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new L(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new L(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new L(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,r){return s.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class sr{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new L(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fl(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new sf;switch(s.type){case"firstParty":return new lf(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new L(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=dl.get(t);s&&(M(ig,"Removing Datastore"),dl.delete(t),s.terminate())})(this),Promise.resolve()}}function ag(n,e,t,s={}){var h;n=Le(n,sr);const r=_i(e),o=n._getSettings(),a={...o,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;r&&(Pd(`https://${c}`),Nd("Firestore",!0)),o.host!==mu&&o.host!==c&&Vt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d={...o,host:c,ssl:r,emulatorOptions:s};if(!Ds(d,a)&&(n._setSettings(d),s.mockUserToken)){let m,g;if(typeof s.mockUserToken=="string")m=s.mockUserToken,g=Ie.MOCK_USER;else{m=Dd(s.mockUserToken,(h=n._app)==null?void 0:h.options.projectId);const E=s.mockUserToken.sub||s.mockUserToken.user_id;if(!E)throw new L(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Ie(E)}n._authCredentials=new rf(new Zl(m,g))}}/**
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
 */class Ke{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ke(this.firestore,e,this._query)}}class le{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ut(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new le(this.firestore,e,this._key)}toJSON(){return{type:le._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Gn(t,le._jsonSchema))return new le(e,s||null,new B(ee.fromString(t.referencePath)))}}le._jsonSchemaVersion="firestore/documentReference/1.0",le._jsonSchema={type:de("string",le._jsonSchemaVersion),referencePath:de("string")};class ut extends Ke{constructor(e,t,s){super(e,t,Ci(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new le(this.firestore,null,new B(e))}withConverter(e){return new ut(this.firestore,e,this._path)}}function Es(n,e,...t){if(n=Ge(n),ec("collection","path",e),n instanceof sr){const s=ee.fromString(e,...t);return Sa(s),new ut(n,null,s)}{if(!(n instanceof le||n instanceof ut))throw new L(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(ee.fromString(e,...t));return Sa(s),new ut(n.firestore,null,s)}}function rt(n,e,...t){if(n=Ge(n),arguments.length===1&&(e=bi.newId()),ec("doc","path",e),n instanceof sr){const s=ee.fromString(e,...t);return wa(s),new le(n,null,new B(s))}{if(!(n instanceof le||n instanceof ut))throw new L(C.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(ee.fromString(e,...t));return wa(s),new le(n.firestore,n instanceof ut?n.converter:null,new B(s))}}/**
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
 */const ml="AsyncQueue";class pl{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Hc(this,"async_queue_retry"),this._c=()=>{const s=jr();s&&M(ml,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=jr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=jr();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new ct;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!sn(e))throw e;M(ml,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Je("INTERNAL UNHANDLED ERROR: ",gl(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const r=Ui.createAndSchedule(this,e,t,s,(o=>this.hc(o)));return this.tc.push(r),r}uc(){this.nc&&U(47125,{Pc:gl(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function gl(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class yt extends sr{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new pl,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new pl(e),this._firestoreClient=void 0,await e}}}function lg(n,e){const t=typeof n=="object"?n:jh(),s=typeof n=="string"?n:ks,r=Fh(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const o=Rd("firestore");o&&ag(r,...o)}return r}function Qi(n){if(n._terminated)throw new L(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||cg(n),n._firestoreClient}function cg(n){var s,r,o,a;const e=n._freezeSettings(),t=og(n._databaseId,((s=n._app)==null?void 0:s.options.appId)||"",n._persistenceKey,(r=n._app)==null?void 0:r.options.apiKey,e);n._componentsProvider||(o=e.localCache)!=null&&o._offlineComponentProvider&&((a=e.localCache)!=null&&a._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new Zp(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(d){const h=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(h),_online:h}})(n._componentsProvider))}/**
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
 */class ke{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ke(_e.fromBase64String(e))}catch(t){throw new L(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ke(_e.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:ke._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Gn(e,ke._jsonSchema))return ke.fromBase64String(e.bytes)}}ke._jsonSchemaVersion="firestore/bytes/1.0",ke._jsonSchema={type:de("string",ke._jsonSchemaVersion),bytes:de("string")};/**
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
 */class Ji{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new L(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ve(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class rr{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new L(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new L(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ze._jsonSchemaVersion}}static fromJSON(e){if(Gn(e,ze._jsonSchema))return new ze(e.latitude,e.longitude)}}ze._jsonSchemaVersion="firestore/geoPoint/1.0",ze._jsonSchema={type:de("string",ze._jsonSchemaVersion),latitude:de("number"),longitude:de("number")};/**
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
 */class Oe{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,r){if(s.length!==r.length)return!1;for(let o=0;o<s.length;++o)if(s[o]!==r[o])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Oe._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Gn(e,Oe._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Oe(e.vectorValues);throw new L(C.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Oe._jsonSchemaVersion="firestore/vectorValue/1.0",Oe._jsonSchema={type:de("string",Oe._jsonSchemaVersion),vectorValues:de("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ug=/^__.*__$/;class dg{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new _t(e,this.data,this.fieldMask,t,this.fieldTransforms):new Hn(e,this.data,t,this.fieldTransforms)}}class pu{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new _t(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function gu(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U(40011,{dataSource:n})}}class Wi{constructor(e,t,s,r,o,a){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=r,o===void 0&&this.validatePath(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Wi({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.contextWith({path:t,arrayElement:!1});return s.validatePathSegment(e),s}childContextForFieldPath(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.contextWith({path:t,arrayElement:!1});return s.validatePath(),s}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return js(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(gu(this.dataSource)&&ug.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class hg{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||er(e)}createContext(e,t,s,r=!1){return new Wi({dataSource:e,methodName:t,targetDoc:s,path:ve.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ir(n){const e=n._freezeSettings(),t=er(n._databaseId);return new hg(n._databaseId,!!e.ignoreUndefinedProperties,t)}function yu(n,e,t,s,r,o={}){const a=n.createContext(o.merge||o.mergeFields?2:0,e,t,r);Yi("Data must be an object, but it was:",a,s);const c=vu(s,a);let d,h;if(o.merge)d=new Ve(a.fieldMask),h=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const g of o.mergeFields){const E=Nt(e,g,t);if(!a.contains(E))throw new L(C.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);Tu(m,E)||m.push(E)}d=new Ve(m),h=a.fieldTransforms.filter((g=>d.covers(g.field)))}else d=null,h=a.fieldTransforms;return new dg(new Pe(c),d,h)}class or extends rr{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof or}}class Ki extends rr{_toFieldTransform(e){return new em(e.path,new Un)}isEqual(e){return e instanceof Ki}}function fg(n,e,t,s){const r=n.createContext(1,e,t);Yi("Data must be an object, but it was:",r,s);const o=[],a=Pe.empty();vt(s,((d,h)=>{const m=Eu(e,d,t);h=Ge(h);const g=r.childContextForFieldPath(m);if(h instanceof or)o.push(m);else{const E=Kn(h,g);E!=null&&(o.push(m),a.set(m,E))}}));const c=new Ve(o);return new pu(a,c,r.fieldTransforms)}function mg(n,e,t,s,r,o){const a=n.createContext(1,e,t),c=[Nt(e,s,t)],d=[r];if(o.length%2!=0)throw new L(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<o.length;E+=2)c.push(Nt(e,o[E])),d.push(o[E+1]);const h=[],m=Pe.empty();for(let E=c.length-1;E>=0;--E)if(!Tu(h,c[E])){const w=c[E];let R=d[E];R=Ge(R);const D=a.childContextForFieldPath(w);if(R instanceof or)h.push(w);else{const x=Kn(R,D);x!=null&&(h.push(w),m.set(w,x))}}const g=new Ve(h);return new pu(m,g,a.fieldTransforms)}function pg(n,e,t,s=!1){return Kn(t,n.createContext(s?4:3,e))}function Kn(n,e){if(_u(n=Ge(n)))return Yi("Unsupported field value:",e,n),vu(n,e);if(n instanceof rr)return(function(s,r){if(!gu(r.dataSource))throw r.createError(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.createError(`${s._methodName}() is not currently supported inside arrays`);const o=s._toFieldTransform(r);o&&r.fieldTransforms.push(o)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(s,r){const o=[];let a=0;for(const c of s){let d=Kn(c,r.childContextForArray(a));d==null&&(d={nullValue:"NULL_VALUE"}),o.push(d),a++}return{arrayValue:{values:o}}})(n,e)}return(function(s,r){if((s=Ge(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Yf(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const o=ne.fromDate(s);return{timestampValue:$s(r.serializer,o)}}if(s instanceof ne){const o=new ne(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:$s(r.serializer,o)}}if(s instanceof ze)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof ke)return{bytesValue:kc(r.serializer,s._byteString)};if(s instanceof le){const o=r.databaseId,a=s.firestore._databaseId;if(!a.isEqual(o))throw r.createError(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Ni(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof Oe)return(function(a,c){const d=a instanceof Oe?a.toArray():a;return{mapValue:{fields:{[cc]:{stringValue:uc},[Ls]:{arrayValue:{values:d.map((m=>{if(typeof m!="number")throw c.createError("VectorValues must only contain numeric values.");return Pi(c.serializer,m)}))}}}}}})(s,r);if(Bc(s))return s._toProto(r.serializer);throw r.createError(`Unsupported field value: ${Gs(s)}`)})(n,e)}function vu(n,e){const t={};return sc(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):vt(n,((s,r)=>{const o=Kn(r,e.childContextForField(s));o!=null&&(t[s]=o)})),{mapValue:{fields:t}}}function _u(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ne||n instanceof ze||n instanceof ke||n instanceof le||n instanceof rr||n instanceof Oe||Bc(n))}function Yi(n,e,t){if(!_u(t)||!tc(t)){const s=Gs(t);throw s==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+s)}}function Nt(n,e,t){if((e=Ge(e))instanceof Ji)return e._internalPath;if(typeof e=="string")return Eu(n,e);throw js("Field path arguments must be of type string or ",n,!1,void 0,t)}const gg=new RegExp("[~\\*/\\[\\]]");function Eu(n,e,t){if(e.search(gg)>=0)throw js(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ji(...e.split("."))._internalPath}catch{throw js(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function js(n,e,t,s,r){const o=s&&!s.isEmpty(),a=r!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let d="";return(o||a)&&(d+=" (found",o&&(d+=` in field ${s}`),a&&(d+=` in document ${r}`),d+=")"),new L(C.INVALID_ARGUMENT,c+n+d)}function Tu(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class yg{convertValue(e,t="none"){switch(mt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ft(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw U(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return vt(e,((r,o)=>{s[r]=this.convertValue(o,t)})),s}convertVectorValue(e){var s,r,o;const t=(o=(r=(s=e.fields)==null?void 0:s[Ls].arrayValue)==null?void 0:r.values)==null?void 0:o.map((a=>ae(a.doubleValue)));return new Oe(t)}convertGeoPoint(e){return new ze(ae(e.latitude),ae(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Js(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Fn(e));default:return null}}convertTimestamp(e){const t=ht(e);return new ne(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=ee.fromString(e);X(qc(s),9688,{name:e});const r=new $n(s.get(1),s.get(3)),o=new B(s.popFirst(5));return r.isEqual(t)||Je(`Document ${o} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
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
 */class Xi extends yg{constructor(e){super(),this.firestore=e}convertBytes(e){return new ke(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new le(this.firestore,null,t)}}function pi(){return new Ki("serverTimestamp")}const yl="@firebase/firestore",vl="4.12.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(n){return(function(t,s){if(typeof t!="object"||t===null)return!1;const r=t;for(const o of s)if(o in r&&typeof r[o]=="function")return!0;return!1})(n,["next","error","complete"])}/**
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
 */class bu{constructor(e,t,s,r,o){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new vg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Nt("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class vg extends bu{data(){return super.data()}}/**
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
 */function Iu(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new L(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Zi{}class eo extends Zi{}function El(n,e,...t){let s=[];e instanceof Zi&&s.push(e),s=s.concat(t),(function(o){const a=o.filter((d=>d instanceof to)).length,c=o.filter((d=>d instanceof ar)).length;if(a>1||a>0&&c>0)throw new L(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const r of s)n=r._apply(n);return n}class ar extends eo{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new ar(e,t,s)}_apply(e){const t=this._parse(e);return Au(e._query,t),new Ke(e.firestore,e.converter,ri(e._query,t))}_parse(e){const t=ir(e.firestore);return(function(o,a,c,d,h,m,g){let E;if(h.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new L(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Il(g,m);const R=[];for(const D of g)R.push(bl(d,o,D));E={arrayValue:{values:R}}}else E=bl(d,o,g)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Il(g,m),E=pg(c,a,g,m==="in"||m==="not-in");return ue.create(h,m,E)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Tl(n,e,t){const s=e,r=Nt("where",n);return ar._create(r,s,t)}class to extends Zi{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new to(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:Fe.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(r,o){let a=r;const c=o.getFlattenedFilters();for(const d of c)Au(a,d),a=ri(a,d)})(e._query,t),new Ke(e.firestore,e.converter,ri(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class no extends eo{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new no(e,t)}_apply(e){const t=(function(r,o,a){if(r.startAt!==null)throw new L(C.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new L(C.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Bn(o,a)})(e._query,this._field,this._direction);return new Ke(e.firestore,e.converter,jf(e._query,t))}}function _g(n,e="asc"){const t=e,s=Nt("orderBy",n);return no._create(s,t)}class so extends eo{constructor(e,t,s){super(),this.type=e,this._limit=t,this._limitType=s}static _create(e,t,s){return new so(e,t,s)}_apply(e){return new Ke(e.firestore,e.converter,Os(e._query,this._limit,this._limitType))}}function Eg(n){return so._create("limit",n,"F")}function bl(n,e,t){if(typeof(t=Ge(t))=="string"){if(t==="")throw new L(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!vc(e)&&t.indexOf("/")!==-1)throw new L(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(ee.fromString(t));if(!B.isDocumentKey(s))throw new L(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return ka(n,new B(s))}if(t instanceof le)return ka(n,t._key);throw new L(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Gs(t)}.`)}function Il(n,e){if(!Array.isArray(n)||n.length===0)throw new L(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Au(n,e){const t=(function(r,o){for(const a of r)for(const c of a.getFlattenedFilters())if(o.indexOf(c.op)>=0)return c.op;return null})(n.filters,(function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new L(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function wu(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}class Rn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ct extends bu{constructor(e,t,s,r,o,a){super(e,t,s,r,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ss(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Nt("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new L(C.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Ct._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Ct._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ct._jsonSchema={type:de("string",Ct._jsonSchemaVersion),bundleSource:de("string","DocumentSnapshot"),bundleName:de("string"),bundle:de("string")};class Ss extends Ct{data(e={}){return super.data(e)}}class Pt{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Rn(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Ss(this._firestore,this._userDataWriter,s.key,s,new Rn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new L(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(r,o){if(r._snapshot.oldDocs.isEmpty()){let a=0;return r._snapshot.docChanges.map((c=>{const d=new Ss(r._firestore,r._userDataWriter,c.doc.key,c.doc,new Rn(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);return c.doc,{type:"added",doc:d,oldIndex:-1,newIndex:a++}}))}{let a=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((c=>o||c.type!==3)).map((c=>{const d=new Ss(r._firestore,r._userDataWriter,c.doc.key,c.doc,new Rn(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);let h=-1,m=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),m=a.indexOf(c.doc.key)),{type:Tg(c.type),doc:d,oldIndex:h,newIndex:m}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new L(C.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Pt._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=bi.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],r=[];return this.docs.forEach((o=>{o._document!==null&&(t.push(o._document),s.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),r.push(o.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Tg(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U(61501,{type:n})}}/**
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
 */Pt._jsonSchemaVersion="firestore/querySnapshot/1.0",Pt._jsonSchema={type:de("string",Pt._jsonSchemaVersion),bundleSource:de("string","QuerySnapshot"),bundleName:de("string"),bundle:de("string")};function Al(n){n=Le(n,Ke);const e=Le(n.firestore,yt),t=Qi(e),s=new Xi(e);return Iu(n._query),sg(t,n._query).then((r=>new Pt(e,s,n,r)))}function bg(n,e,t){n=Le(n,le);const s=Le(n.firestore,yt),r=wu(n.converter,e,t),o=ir(s);return lr(s,[yu(o,"setDoc",n._key,r,n.converter!==null,t).toMutation(n._key,Me.none())])}function Gr(n,e,t,...s){n=Le(n,le);const r=Le(n.firestore,yt),o=ir(r);let a;return a=typeof(e=Ge(e))=="string"||e instanceof Ji?mg(o,"updateDoc",n._key,e,t,s):fg(o,"updateDoc",n._key,e),lr(r,[a.toMutation(n._key,Me.exists(!0))])}function wl(n){return lr(Le(n.firestore,yt),[new Di(n._key,Me.none())])}function Sl(n,e){const t=Le(n.firestore,yt),s=rt(n),r=wu(n.converter,e),o=ir(n.firestore);return lr(t,[yu(o,"addDoc",s._key,r,n.converter!==null,{}).toMutation(s._key,Me.exists(!1))]).then((()=>s))}function Rl(n,...e){var h,m,g;n=Ge(n);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||_l(e[s])||(t=e[s++]);const r={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(_l(e[s])){const E=e[s];e[s]=(h=E.next)==null?void 0:h.bind(E),e[s+1]=(m=E.error)==null?void 0:m.bind(E),e[s+2]=(g=E.complete)==null?void 0:g.bind(E)}let o,a,c;if(n instanceof le)a=Le(n.firestore,yt),c=Ci(n._key.path),o={next:E=>{e[s]&&e[s](Ig(a,n,E))},error:e[s+1],complete:e[s+2]};else{const E=Le(n,Ke);a=Le(E.firestore,yt),c=E._query;const w=new Xi(a);o={next:R=>{e[s]&&e[s](new Pt(a,w,E,R))},error:e[s+1],complete:e[s+2]},Iu(n._query)}const d=Qi(a);return ng(d,c,r,o)}function lr(n,e){const t=Qi(n);return rg(t,e)}function Ig(n,e,t){const s=t.docs.get(e._key),r=new Xi(n);return new Ct(n,r,e._key,s,new Rn(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){nf(Uh),xs(new Ln("firestore",((s,{instanceIdentifier:r,options:o})=>{const a=s.getProvider("app").getImmediate(),c=new yt(new of(s.getProvider("auth-internal")),new cf(a,s.getProvider("app-check-internal")),Sf(a,r),a);return o={useFetchStreams:t,...o},c._setSettings(o),c}),"PUBLIC").setMultipleInstances(!0)),Ht(yl,vl,e),Ht(yl,vl,"esm2020")})();const Ag={apiKey:"AIzaSyD90SkLA57LCNnPRCDp5-sA6x2lF0oasMc",authDomain:"comebiblia-43643.firebaseapp.com",projectId:"comebiblia-43643",storageBucket:"comebiblia-43643.firebasestorage.app",messagingSenderId:"704190300094",appId:"1:704190300094:web:0a726168ed731032d803ef",measurementId:"G-DZPX4SB193"},wg=jl(Ag),Ne=lg(wg),Su="player",Ru={name:"Jugador",avatar:"😊",level:1,xp:0,coins:50,totalGamesPlayed:0,totalCorrectAnswers:0,totalScore:0,gamesCompleted:{},bestScores:{},leaguePoints:0,league:"Pescador",createdAt:Date.now()},Nn=[0,100,250,500,800,1200,1700,2300,3e3,3800,4700,5700,6800,8e3,9500,11e3,13e3,15e3,17500,2e4],Cl=["Semilla","Brote","Plantita","Arbusto","Árbol Joven","Roble","Cedro del Líbano","Discípulo","Apóstol","Profeta","Siervo Fiel","Guerrero de Fe","Sabio","Maestro","Pastor","Evangelista","Misionero","Guardián","Ángel","Leyenda Bíblica"],Sg=["😊","😇","🙏","✝️","⭐","👑","🕊️","🌟","💪","🎯","📖","🏆"];let G=null;function we(){return G||(G=Ll(Su,{...Ru})),{...G}}function Ot(){kl(Su,G)}function Cu(n){G||we(),G.name=n.trim()||"Jugador",Ot()}function Rg(n){G||we(),G.avatar=n,Ot()}function cr(n){G||we(),G.xp+=n;let e=!1;for(;G.level<Nn.length&&G.xp>=Nn[G.level];)G.level++,e=!0;return Ot(),e}function ur(n){G||we(),G.coins+=n,Ot(),dr()}function Yn(n,e,t=0){G||we(),G.totalGamesPlayed++,G.totalScore+=e,G.totalCorrectAnswers+=t,G.gamesCompleted[n]||(G.gamesCompleted[n]=0),G.gamesCompleted[n]++,(!G.bestScores[n]||e>G.bestScores[n])&&(G.bestScores[n]=e),Ot()}function Cg(){const n=we();if(n.level>=Nn.length)return{current:n.xp,needed:n.xp,progress:1};const e=Nn[n.level-1]||0,t=Nn[n.level],s=(n.xp-e)/(t-e);return{current:n.xp-e,needed:t-e,progress:Math.min(s,1)}}function Pg(n=null){const e=n||we().level;return Cl[Math.min(e-1,Cl.length-1)]}function Dg(){return[...Sg]}function Vg(){G={...Ru,createdAt:Date.now()},Ot(),dr()}function dr(){const n=document.getElementById("coin-count");if(n){const e=we();n.textContent=e.coins}}function Pl(n){G||we(),G.leaguePoints=(G.leaguePoints||0)+n,G.leaguePoints<0&&(G.leaguePoints=0);const e=G.leaguePoints;e>=2e3?G.league="Profeta":e>=1200?G.league="Apóstol":e>=600?G.league="Evangelista":e>=200?G.league="Discípulo":G.league="Pescador",Ot(),Pu()}async function Pu(){const n=localStorage.getItem("bb_player_id");if(n&&Ne)try{await bg(rt(Ne,"bb_users",n),{name:G.name,avatar:G.avatar,leaguePoints:G.leaguePoints||0,league:G.league||"Pescador",updatedAt:pi()},{merge:!0})}catch(e){console.error("Error syncing player state to Firestore:",e)}}const ro=[];function Et(n){ro.push(n)}function xg(){return[...ro]}function Du(n){return ro.find(e=>e.id===n)}const zs=[{text:"Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.",ref:"Juan 3:16"},{text:"Todo lo puedo en Cristo que me fortalece.",ref:"Filipenses 4:13"},{text:"Jehová es mi pastor; nada me faltará.",ref:"Salmos 23:1"},{text:"Confía en Jehová con todo tu corazón, y no te apoyes en tu propia prudencia.",ref:"Proverbios 3:5"},{text:"Y sabemos que a los que aman a Dios, todas las cosas les ayudan a bien.",ref:"Romanos 8:28"},{text:"No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios.",ref:"Isaías 41:10"},{text:"Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal.",ref:"Jeremías 29:11"},{text:"El Señor es mi luz y mi salvación; ¿de quién temeré?",ref:"Salmos 27:1"},{text:"Mas el fruto del Espíritu es amor, gozo, paz, paciencia, benignidad, bondad, fe.",ref:"Gálatas 5:22"},{text:"Esforzaos y cobrad ánimo; no temáis, ni tengáis miedo de ellos.",ref:"Deuteronomio 31:6"},{text:"En el principio creó Dios los cielos y la tierra.",ref:"Génesis 1:1"},{text:"Clama a mí, y yo te responderé, y te enseñaré cosas grandes y ocultas que tú no conoces.",ref:"Jeremías 33:3"},{text:"Porque donde están dos o tres congregados en mi nombre, allí estoy yo en medio de ellos.",ref:"Mateo 18:20"},{text:"Yo soy el camino, la verdad y la vida; nadie viene al Padre sino por mí.",ref:"Juan 14:6"},{text:"Dad gracias en todo, porque esta es la voluntad de Dios para con vosotros en Cristo Jesús.",ref:"1 Tesalonicenses 5:18"},{text:"El amor es paciente, es bondadoso. El amor no es envidioso ni jactancioso ni orgulloso.",ref:"1 Corintios 13:4"},{text:"Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios.",ref:"Efesios 2:8"},{text:"Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.",ref:"Mateo 11:28"},{text:"He aquí, yo estoy a la puerta y llamo; si alguno oye mi voz y abre la puerta, entraré a él.",ref:"Apocalipsis 3:20"},{text:"Bienaventurados los pacificadores, porque ellos serán llamados hijos de Dios.",ref:"Mateo 5:9"},{text:"Lámpara es a mis pies tu palabra, y lumbrera a mi camino.",ref:"Salmos 119:105"},{text:"Amarás al Señor tu Dios con todo tu corazón, y con toda tu alma, y con toda tu mente.",ref:"Mateo 22:37"},{text:"Los cielos cuentan la gloria de Dios, y el firmamento anuncia la obra de sus manos.",ref:"Salmos 19:1"},{text:"No se amolden al mundo actual, sino sean transformados mediante la renovación de su mente.",ref:"Romanos 12:2"},{text:"Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes.",ref:"Josué 1:9"},{text:"Ama a tu prójimo como a ti mismo.",ref:"Marcos 12:31"},{text:"Pedid, y se os dará; buscad, y hallaréis; llamad, y se os abrirá.",ref:"Mateo 7:7"},{text:"El Señor es bueno; es refugio en el día de la angustia, y conoce a los que en Él confían.",ref:"Nahúm 1:7"},{text:"Alégrate, joven, en tu juventud; y tome placer tu corazón en los días de tu adolescencia.",ref:"Eclesiastés 11:9"},{text:"Grande es el Señor y digno de toda alabanza; su grandeza es insondable.",ref:"Salmos 145:3"},{text:"Si Dios es por nosotros, ¿quién contra nosotros?",ref:"Romanos 8:31"},{text:"Yo he venido para que tengan vida, y para que la tengan en abundancia.",ref:"Juan 10:10"},{text:"Sean fuertes y valientes. No teman ni se asusten, porque el Señor su Dios siempre los acompañará.",ref:"Deuteronomio 31:6"},{text:"Así brille la luz de ustedes delante de todos, para que vean sus buenas obras y glorifiquen al Padre.",ref:"Mateo 5:16"},{text:"Encomienda al Señor tu camino; confía en él, y él actuará.",ref:"Salmos 37:5"},{text:"Instruye al niño en su camino, y aun cuando fuere viejo no se apartará de él.",ref:"Proverbios 22:6"},{text:"El que habita al abrigo del Altísimo morará bajo la sombra del Omnipotente.",ref:"Salmos 91:1"},{text:"Acerquémonos con confianza al trono de la gracia para recibir misericordia y hallar gracia.",ref:"Hebreos 4:16"},{text:"Deléitate asimismo en Jehová, y él te concederá las peticiones de tu corazón.",ref:"Salmos 37:4"},{text:"Con amor eterno te he amado; por tanto, te prolongué mi misericordia.",ref:"Jeremías 31:3"}];function Vu(){const n=new Date,e=Math.floor((n-new Date(n.getFullYear(),0,0))/864e5);return zs[e%zs.length]}function Ng(n,e=[]){return zs.filter(r=>!e.includes(r.ref)).sort(()=>Math.random()-.5).slice(0,n)}const kg=[{name:"María",avatar:"👩",score:2800,level:8},{name:"Daniel",avatar:"👦",score:2400,level:7},{name:"Sara",avatar:"👧",score:2100,level:6},{name:"José",avatar:"🧑",score:1800,level:5},{name:"Rebeca",avatar:"👩‍🦱",score:1500,level:5},{name:"David",avatar:"👨",score:1200,level:4},{name:"Esther",avatar:"👩‍🦰",score:900,level:3},{name:"Pablo",avatar:"🧔",score:600,level:2},{name:"Ana",avatar:"👱‍♀️",score:400,level:2},{name:"Samuel",avatar:"👶",score:200,level:1}];function xu(){const n=we(),e=[...kg,{name:n.name,avatar:n.avatar,score:n.totalScore,level:n.level,isCurrentPlayer:!0}];return e.sort((t,s)=>s.score-t.score),e.map((t,s)=>({...t,position:s+1}))}function io(){const n=xu(),e=n.find(t=>t.isCurrentPlayer);return(e==null?void 0:e.position)||n.length}function Lg(n){var a,c;const e=we(),t=Vu(),s=xg(),r=io(),o=["linear-gradient(135deg, #4361ee, #6c83f7)","linear-gradient(135deg, #a855f7, #c084fc)","linear-gradient(135deg, #06d6a0, #34d399)","linear-gradient(135deg, #fb923c, #fdba74)","linear-gradient(135deg, #f472b6, #f9a8d4)"];n.innerHTML=`
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
  `,n.querySelectorAll(".game-card").forEach(d=>{d.addEventListener("click",()=>{const h=d.dataset.gameId;he("game",{gameId:h})})}),(a=document.getElementById("verse-card-home"))==null||a.addEventListener("click",()=>{he("verse")}),(c=document.getElementById("btn-ranking"))==null||c.addEventListener("click",()=>{he("ranking")})}function se(n,e="info",t=3e3){const s=document.getElementById("toast-container");if(!s)return;const r=document.createElement("div");r.className=`toast toast-${e}`;const o={success:"✅",error:"❌",info:"ℹ️",reward:"🎁"};r.innerHTML=`<span>${o[e]||"📢"}</span><span>${n}</span>`,s.appendChild(r),setTimeout(()=>{r.classList.add("removing"),setTimeout(()=>r.remove(),300)},t)}function Mg(n,e,t=[]){const s=document.getElementById("modal-overlay");if(!s)return;const r=t.map(o=>`<button class="btn ${o.class||"btn-primary"} btn-block" id="modal-btn-${o.id}">${o.label}</button>`).join("");s.innerHTML=`
    <div class="modal">
      <h2>${n}</h2>
      <p>${e}</p>
      <div class="flex flex-col gap-sm">${r}</div>
    </div>
  `,s.classList.remove("hidden"),t.forEach(o=>{const a=document.getElementById(`modal-btn-${o.id}`);a&&a.addEventListener("click",()=>{s.classList.add("hidden"),o.onClick&&o.onClick()})})}function xe(n){const e=[...n];for(let t=e.length-1;t>0;t--){const s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}return e}function Dl(n){return n>=1e3?(n/1e3).toFixed(1)+"K":n.toString()}function Og(n){var s,r;const e=Vu(),t=Ng(5,[e.ref]);n.innerHTML=`
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
  `,(s=document.getElementById("btn-share-verse"))==null||s.addEventListener("click",()=>{var a;const o=`"${e.text}" — ${e.ref}`;navigator.share?navigator.share({title:"Versículo del Día",text:o}).catch(()=>{}):(a=navigator.clipboard)==null||a.writeText(o).then(()=>{se("Versículo copiado al portapapeles","success")})}),(r=document.getElementById("btn-copy-verse"))==null||r.addEventListener("click",()=>{var a;const o=`"${e.text}" — ${e.ref}`;(a=navigator.clipboard)==null||a.writeText(o).then(()=>{se("Versículo copiado ✅","success")}).catch(()=>{se("No se pudo copiar","error")})})}const Nu="achievements",oo=[{id:"first_game",name:"Primeros Pasos",desc:"Completa tu primer juego",icon:"🐣",coins:10},{id:"games_5",name:"Jugador Activo",desc:"Completa 5 juegos",icon:"🎮",coins:25},{id:"games_25",name:"Veterano",desc:"Completa 25 juegos",icon:"🏅",coins:50},{id:"games_100",name:"Leyenda",desc:"Completa 100 juegos",icon:"🏆",coins:100},{id:"perfect_trivia",name:"Erudito Bíblico",desc:"Puntuación perfecta en Trivia",icon:"🧠",coins:30},{id:"trivia_10",name:"Sabio",desc:"Completa 10 partidas de Trivia",icon:"📚",coins:25},{id:"character_5",name:"Detective Bíblico",desc:"Adivina 5 personajes",icon:"🔍",coins:20},{id:"verse_master",name:"Memorizador",desc:"Completa 10 versículos",icon:"📖",coins:30},{id:"word_hunter",name:"Cazapalabras",desc:"Completa 5 sopas de letras",icon:"🔤",coins:20},{id:"memory_king",name:"Rey de la Memoria",desc:"Completa 5 juegos de Memoria",icon:"🃏",coins:20},{id:"level_5",name:"Discípulo",desc:"Alcanza el nivel 5",icon:"⭐",coins:30},{id:"level_10",name:"Apóstol",desc:"Alcanza el nivel 10",icon:"🌟",coins:50},{id:"coins_500",name:"Tesoro",desc:"Acumula 500 monedas",icon:"💰",coins:25},{id:"all_games",name:"Explorador",desc:"Juega todos los juegos",icon:"🗺️",coins:40},{id:"streak_3",name:"Racha Divina",desc:"3 respuestas correctas seguidas",icon:"🔥",coins:15},{id:"fast_answer",name:"Rayo",desc:"Responde en menos de 3 segundos",icon:"⚡",coins:15}];let Rs=null;function ao(){return Rs||(Rs=Ll(Nu,{})),Rs}function be(n){const e=ao();if(e[n])return!1;const t=oo.find(s=>s.id===n);return t?(e[n]={unlockedAt:Date.now()},Rs=e,kl(Nu,e),se(`🏆 ¡Logro desbloqueado: ${t.name}!`,"reward"),!0):!1}function ku(){return Object.keys(ao()).length}function Lu(){return oo.length}function Fg(){const n=ao();return oo.map(e=>{var t;return{...e,unlocked:!!n[e.id],unlockedAt:((t=n[e.id])==null?void 0:t.unlockedAt)||null}})}function $g(){const n=we();n.totalGamesPlayed>=1&&be("first_game"),n.totalGamesPlayed>=5&&be("games_5"),n.totalGamesPlayed>=25&&be("games_25"),n.totalGamesPlayed>=100&&be("games_100"),n.level>=5&&be("level_5"),n.level>=10&&be("level_10"),n.coins>=500&&be("coins_500"),["trivia","characters","verse-complete","word-search","memory"].every(s=>(n.gamesCompleted[s]||0)>0)&&be("all_games"),(n.gamesCompleted.trivia||0)>=10&&be("trivia_10"),(n.gamesCompleted.characters||0)>=5&&be("character_5"),(n.gamesCompleted["verse-complete"]||0)>=10&&be("verse_master"),(n.gamesCompleted["word-search"]||0)>=5&&be("word_hunter"),(n.gamesCompleted.memory||0)>=5&&be("memory_king")}function qg(n){var d,h,m;const e=we(),t=Cg(),s=Pg(),r=ku(),o=Lu(),a=io(),c=Dg();n.innerHTML=`
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
          ${c.map(g=>`
            <button class="avatar-option ${g===e.avatar?"selected":""}" data-avatar="${g}">${g}</button>
          `).join("")}
        </div>
        <button class="btn btn-sm btn-secondary mt-md" id="btn-close-avatar-picker">Cerrar</button>
      </div>
    </div>
  `,(d=document.getElementById("btn-change-avatar"))==null||d.addEventListener("click",()=>{var g;(g=document.getElementById("avatar-picker"))==null||g.classList.toggle("hidden")}),(h=document.getElementById("btn-close-avatar-picker"))==null||h.addEventListener("click",()=>{var g;(g=document.getElementById("avatar-picker"))==null||g.classList.add("hidden")}),document.querySelectorAll(".avatar-option").forEach(g=>{g.addEventListener("click",()=>{const E=g.dataset.avatar;Rg(E),document.getElementById("profile-avatar").textContent=E,document.querySelectorAll(".avatar-option").forEach(w=>w.classList.remove("selected")),g.classList.add("selected"),se("Avatar actualizado ✅","success")})}),(m=document.getElementById("btn-edit-name"))==null||m.addEventListener("click",()=>{const g=prompt("Ingresa tu nombre:",e.name);g&&g.trim()&&(Cu(g.trim()),document.getElementById("profile-name").textContent=g.trim(),se("Nombre actualizado ✅","success"))})}function Bg(n){const e=Fg(),t=ku(),s=Lu(),r=Math.round(t/s*100);n.innerHTML=`
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
  `}function Ug(n){var s,r;const e=we();n.innerHTML=`
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
  `,(s=document.getElementById("setting-name"))==null||s.addEventListener("click",()=>{const o=prompt("Ingresa tu nombre:",e.name);o&&o.trim()&&(Cu(o.trim()),document.getElementById("display-name").textContent=o.trim(),se("Nombre actualizado ✅","success"))});const t=document.getElementById("toggle-dark");t&&(t.checked=!document.body.classList.contains("light-theme"),t.addEventListener("change",o=>{o.target.checked?(document.body.classList.remove("light-theme"),localStorage.setItem("theme","dark")):(document.body.classList.add("light-theme"),localStorage.setItem("theme","light"))})),(r=document.getElementById("btn-reset-data"))==null||r.addEventListener("click",()=>{Mg("⚠️ ¿Estás seguro?","Se borrarán todas tus monedas, logros, estadísticas y progreso. Esta acción no se puede deshacer.",[{id:"confirm-reset",label:"🗑️ Sí, borrar todo",class:"btn-danger",onClick:()=>{gd(),Vg(),se("Datos borrados","info"),he("home")}},{id:"cancel-reset",label:"Cancelar",class:"btn-secondary"}])})}function jg(n){const e=xu(),t=io(),s=["🥇","🥈","🥉"];n.innerHTML=`
    <div class="ranking-screen">
      <div class="ranking-header">
        <div class="ranking-podium">
          ${e.slice(0,3).map((r,o)=>`
            <div class="podium-item podium-${o+1} ${r.isCurrentPlayer?"is-player":""}">
              <div class="podium-avatar">${r.avatar}</div>
              <div class="podium-medal">${s[o]}</div>
              <div class="podium-name">${r.name}</div>
              <div class="podium-score">${Dl(r.score)}</div>
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
            <div class="ranking-score">${Dl(r.score)}</div>
          </div>
        `).join("")}
      </div>
    </div>
  `}const kn={easy:[{q:"¿Quién construyó el arca?",options:["Abraham","Noé","Moisés","David"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuántos días tomó crear Dios el mundo?",options:["5","6","7","3"],answer:1,category:"Creación"},{q:"¿Quién fue el primer hombre?",options:["Noé","Abel","Adán","Set"],answer:2,category:"Creación"},{q:"¿Quién fue la primera mujer?",options:["Sara","Eva","Rebeca","María"],answer:1,category:"Creación"},{q:"¿En qué ciudad nació Jesús?",options:["Nazaret","Jerusalén","Belén","Capernaúm"],answer:2,category:"Nuevo Testamento"},{q:"¿Cuántos discípulos tuvo Jesús?",options:["10","11","12","13"],answer:2,category:"Nuevo Testamento"},{q:"¿Quién mató a Goliat?",options:["Saúl","David","Jonatán","Sansón"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué animal habló con Balaam?",options:["Un perro","Una burra","Un león","Una serpiente"],answer:1,category:"Antiguo Testamento"},{q:"¿De dónde era la madre de Jesús?",options:["Belén","Jerusalén","Nazaret","Egipto"],answer:2,category:"Nuevo Testamento"},{q:"¿Quién fue tragado por un gran pez?",options:["Pedro","Elías","Jonás","Daniel"],answer:2,category:"Antiguo Testamento"},{q:"¿Cuál fue el primer milagro de Jesús?",options:["Caminar sobre agua","Convertir agua en vino","Sanar un ciego","Multiplicar panes"],answer:1,category:"Milagros"},{q:"¿Quién bautizó a Jesús?",options:["Pedro","Juan el Bautista","Pablo","Santiago"],answer:1,category:"Nuevo Testamento"},{q:"¿En qué monte recibió Moisés los mandamientos?",options:["Carmelo","Sinaí","Ararat","Sión"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuántos mandamientos dio Dios?",options:["5","7","10","12"],answer:2,category:"Antiguo Testamento"},{q:"¿Quién negó a Jesús tres veces?",options:["Judas","Pedro","Tomás","Juan"],answer:1,category:"Nuevo Testamento"},{q:"¿Cuántos libros tiene la Biblia?",options:["55","66","72","39"],answer:1,category:"General"},{q:"¿Quién fue el hermano de Moisés?",options:["Josué","Aarón","Caleb","Leví"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué instrumento tocaba David?",options:["Flauta","Arpa","Trompeta","Tambor"],answer:1,category:"Antiguo Testamento"},{q:"¿Quién fue vendido por sus hermanos?",options:["Benjamín","José","Rubén","Judá"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuál es el primer libro de la Biblia?",options:["Éxodo","Génesis","Salmos","Mateo"],answer:1,category:"General"},{q:"¿Qué símbolo apareció después del diluvio?",options:["Una estrella","Un arcoíris","Una paloma","Una nube"],answer:1,category:"Antiguo Testamento"},{q:"¿En qué se convirtió la esposa de Lot?",options:["Piedra","Estatua de sal","Arena","Ceniza"],answer:1,category:"Antiguo Testamento"},{q:"¿Quién era el rey más sabio?",options:["David","Salomón","Saúl","Josías"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué fruta comieron Adán y Eva?",options:["Manzana","Fruto prohibido","Uva","Higo"],answer:1,category:"Creación"},{q:"¿Quién era el padre de Juan el Bautista?",options:["José","Zacarías","Simeón","Elías"],answer:1,category:"Nuevo Testamento"}],medium:[{q:"¿Cuántos años vivió Matusalén?",options:["800","900","969","1000"],answer:2,category:"Antiguo Testamento"},{q:"¿Quién era el padre de Salomón?",options:["Abraham","David","Saúl","Moisés"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué profeta subió al cielo en un carro de fuego?",options:["Elías","Eliseo","Isaías","Jeremías"],answer:0,category:"Profetas"},{q:"¿Cuántos años duró el pueblo de Israel en el desierto?",options:["20","30","40","50"],answer:2,category:"Antiguo Testamento"},{q:"¿Quién interpretó los sueños del Faraón?",options:["Moisés","Daniel","José","Aarón"],answer:2,category:"Antiguo Testamento"},{q:"¿Quién escribió la mayor parte de los Salmos?",options:["Salomón","David","Moisés","Asaf"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuál era la profesión de Pablo antes de ser apóstol?",options:["Pescador","Carpintero","Fabricante de tiendas","Recaudador"],answer:2,category:"Nuevo Testamento"},{q:"¿Quién fue el primer mártir cristiano?",options:["Pedro","Esteban","Santiago","Pablo"],answer:1,category:"Nuevo Testamento"},{q:"¿En qué isla estuvo exiliado Juan?",options:["Creta","Chipre","Patmos","Malta"],answer:2,category:"Nuevo Testamento"},{q:"¿Cuántas tribus de Israel había?",options:["10","11","12","13"],answer:2,category:"Antiguo Testamento"},{q:"¿Quién fue el sucesor de Moisés?",options:["Caleb","Josué","Aarón","Eleazar"],answer:1,category:"Antiguo Testamento"},{q:"¿Dónde fue crucificado Jesús?",options:["Monte Sión","Getsemaní","Gólgota","Betania"],answer:2,category:"Nuevo Testamento"},{q:"¿Quién fue arrojado al foso de los leones?",options:["Jonás","Daniel","Eliseo","Jeremías"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuál es el libro más corto del Nuevo Testamento?",options:["Judas","2 Juan","3 Juan","Filemón"],answer:2,category:"General"},{q:"¿Quién fue la esposa de Abraham?",options:["Agar","Sara","Lea","Rebeca"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué apóstol era recaudador de impuestos?",options:["Pedro","Mateo","Juan","Andrés"],answer:1,category:"Nuevo Testamento"},{q:"¿Cuántos panes usó Jesús para alimentar a 5000?",options:["3","5","7","12"],answer:1,category:"Milagros"},{q:"¿Quién traicionó a Jesús?",options:["Pedro","Tomás","Judas Iscariote","Bartolomé"],answer:2,category:"Nuevo Testamento"},{q:"¿Cómo murió Sansón?",options:["En batalla","Derribó el templo","Por enfermedad","Crucificado"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué reina visitó a Salomón por su sabiduría?",options:["Jezabel","Ester","Reina de Sabá","Betsabé"],answer:2,category:"Antiguo Testamento"},{q:"¿Cuántos libros del Nuevo Testamento escribió Pablo?",options:["7","10","13","15"],answer:2,category:"General"},{q:"¿Quién fue el primer rey de Israel?",options:["David","Salomón","Saúl","Samuel"],answer:2,category:"Antiguo Testamento"},{q:"¿Qué lenguaje hablaba Jesús?",options:["Hebreo","Griego","Arameo","Latín"],answer:2,category:"General"},{q:"¿Quién cortó la oreja de un soldado en Getsemaní?",options:["Juan","Pedro","Santiago","Judas"],answer:1,category:"Nuevo Testamento"},{q:"¿Cuántos días estuvo Lázaro muerto antes de ser resucitado?",options:["2","3","4","7"],answer:2,category:"Milagros"}],hard:[{q:"¿Cuál es el versículo más corto de la Biblia?",options:["Juan 3:16","Juan 11:35","Éxodo 20:13","1 Tesalonicenses 5:16"],answer:1,category:"General"},{q:"¿Quién era Melquisedec?",options:["Un profeta","Rey y sacerdote de Salem","Un ángel","Un juez de Israel"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuántos años reinó David en Jerusalén?",options:["20","33","40","45"],answer:1,category:"Antiguo Testamento"},{q:"¿Quién fue la primera persona en ver a Jesús resucitado?",options:["Pedro","Juan","María Magdalena","Tomás"],answer:2,category:"Nuevo Testamento"},{q:"¿En qué río fue bautizado Jesús?",options:["Nilo","Éufrates","Jordán","Tigris"],answer:2,category:"Nuevo Testamento"},{q:"¿Qué iglesia criticó Jesús por ser tibia?",options:["Éfeso","Sardis","Filadelfia","Laodicea"],answer:3,category:"Apocalipsis"},{q:"¿Quién era Nicodemo?",options:["Sacerdote","Fariseo","Saduceo","Centurión"],answer:1,category:"Nuevo Testamento"},{q:"¿Cuántos hijos tuvo Jacob?",options:["10","11","12","13"],answer:2,category:"Antiguo Testamento"},{q:"¿Qué profeta fue llamado por Dios siendo niño?",options:["Isaías","Jeremías","Samuel","Daniel"],answer:2,category:"Profetas"},{q:"¿Cuál es el salmo más largo?",options:["Salmo 23","Salmo 91","Salmo 119","Salmo 150"],answer:2,category:"General"},{q:"¿Quién fue el suegro de Moisés?",options:["Labán","Jetro","Ragüel","Éter"],answer:1,category:"Antiguo Testamento"},{q:"¿Cuántas plagas envió Dios a Egipto?",options:["7","9","10","12"],answer:2,category:"Antiguo Testamento"},{q:"¿Quién construyó el primer templo en Jerusalén?",options:["David","Salomón","Herodes","Zorobabel"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué don especial tenía José el hijo de Jacob?",options:["Fuerza","Interpretar sueños","Profecía","Sabiduría"],answer:1,category:"Antiguo Testamento"},{q:"¿En qué libro se encuentra el capítulo del amor?",options:["Romanos","1 Corintios","Efesios","Filipenses"],answer:1,category:"Nuevo Testamento"},{q:"¿Cuántos jinetes del Apocalipsis hay?",options:["3","4","7","12"],answer:1,category:"Apocalipsis"},{q:"¿Quién era Barrabás?",options:["Discípulo","Sacerdote","Prisionero liberado","Soldado romano"],answer:2,category:"Nuevo Testamento"},{q:"¿En qué se transformó la vara de Moisés ante Faraón?",options:["Fuego","Serpiente","Flores","Agua"],answer:1,category:"Antiguo Testamento"},{q:"¿Quién escribió el Apocalipsis?",options:["Pablo","Pedro","Juan","Lucas"],answer:2,category:"General"},{q:"¿Cuántas puertas tiene la Nueva Jerusalén?",options:["7","10","12","24"],answer:2,category:"Apocalipsis"},{q:"¿Qué patriarca vivió en Ur de los Caldeos?",options:["Isaac","Abraham","Jacob","Noé"],answer:1,category:"Antiguo Testamento"},{q:"¿Quién era Bernabé?",options:["Apóstol original","Compañero de Pablo","Profeta del AT","Juez"],answer:1,category:"Nuevo Testamento"},{q:"¿Qué mujer se disfrazó para consultar a una médium?",options:["Jezabel","Saúl","Dalila","Mical"],answer:1,category:"Antiguo Testamento"},{q:"¿En qué batalla se detuvo el sol?",options:["Jericó","Gabaón","Hai","Betel"],answer:1,category:"Antiguo Testamento"},{q:"¿Qué apóstol fue arrebatado al tercer cielo?",options:["Juan","Pedro","Pablo","Santiago"],answer:2,category:"Nuevo Testamento"}]};function zg(n,e,t="easy"){const r={easy:1,medium:1.5,hard:2}[t]||1,o=Math.floor(e*.5*r),a=Math.floor(e*r);return{coins:Math.max(o,5),xp:Math.max(a,10)}}function Xn(n,e,t=0,s="easy"){const r=zg(n,e,s);ur(r.coins);const o=cr(r.xp);if(o){const a=we();se(`🎉 ¡Subiste al nivel ${a.level}!`,"reward")}return setTimeout(()=>$g(),500),{...r,leveledUp:o}}function Gg(n){const s=[...kn.easy.map(V=>({...V,diff:"easy"})),...kn.medium.map(V=>({...V,diff:"medium"})),...kn.hard.map(V=>({...V,diff:"hard"}))],r=xe(s).slice(0,10);let o=0,a=0,c=0,d=0,h=null,m=20,g=!1;function E(){const V=r[o];g=!1,m=20;const k={easy:"Fácil",medium:"Medio",hard:"Difícil"},F={easy:"var(--color-success)",medium:"var(--color-gold)",hard:"var(--color-error)"};n.innerHTML=`
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
          <span class="badge" style="background: ${F[V.diff]}">${k[V.diff]}</span>
          <span class="text-sm text-muted">${V.category}</span>
        </div>

        <div class="trivia-question">${V.q}</div>

        <div class="trivia-options">
          ${V.options.map((O,$)=>`
            <button class="trivia-option" data-index="${$}">
              <span class="option-letter">${String.fromCharCode(65+$)}</span>
              <span>${O}</span>
            </button>
          `).join("")}
        </div>

        ${d>=3?`<div class="streak-indicator">🔥 ¡Racha de ${d}!</div>`:""}
      </div>
    `,w(),n.querySelectorAll(".trivia-option").forEach(O=>{O.addEventListener("click",()=>{if(g)return;const $=parseInt(O.dataset.index);R($,V)})})}function w(){clearInterval(h);const V=document.getElementById("timer-ring"),k=2*Math.PI*42;h=setInterval(()=>{m--;const F=document.getElementById("timer-text");if(F&&(F.textContent=m),V){const O=k*(1-m/20);V.setAttribute("stroke-dashoffset",O),m<=5&&V.setAttribute("stroke","var(--color-error)")}m<=0&&(clearInterval(h),D())},1e3)}function R(V,k){g=!0,clearInterval(h);const F=n.querySelectorAll(".trivia-option"),O=V===k.answer;if(F.forEach(($,q)=>{$.disabled=!0,q===k.answer&&$.classList.add("correct"),q===V&&!O&&$.classList.add("wrong")}),O){c++,d++;const $=Math.floor(m*2),q={easy:10,medium:20,hard:30},b=10+$+(q[k.diff]||0);a+=b,d>=3&&be("streak_3"),m>=17&&be("fast_answer")}else d=0;setTimeout(()=>{o++,o<10?E():x()},1500)}function D(){g=!0,d=0;const V=r[o];n.querySelectorAll(".trivia-option").forEach((F,O)=>{F.disabled=!0,O===V.answer&&F.classList.add("correct")}),se("⏰ ¡Se acabó el tiempo!","error"),setTimeout(()=>{o++,o<10?E():x()},1500)}function x(){var O,$;clearInterval(h);const V=Math.round(c/10*100);V===100&&be("perfect_trivia");const k=Xn("trivia",a,c,"easy");Yn("trivia",a,c);const F=V>=80?"🏆":V>=60?"😊":V>=40?"🤔":"📖";n.innerHTML=`
      <div class="game-results">
        <div class="results-emoji">${F}</div>
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
    `,(O=document.getElementById("btn-play-again"))==null||O.addEventListener("click",()=>{he("game",{gameId:"trivia"})}),($=document.getElementById("btn-go-home"))==null||$.addEventListener("click",()=>{he("home")})}return E(),()=>{clearInterval(h)}}const gi=[{name:"Moisés",clues:["Fue criado en el palacio de un faraón.","Dios le habló desde una zarza ardiente.","Liberó al pueblo de Israel de la esclavitud.","Recibió los Diez Mandamientos en el monte Sinaí.","Abrió las aguas del Mar Rojo."],book:"Éxodo"},{name:"David",clues:["Era el hijo menor de su familia.","Fue pastor de ovejas en su juventud.","Tocaba el arpa con gran habilidad.","Derrotó a un gigante con una piedra y una honda.","Se convirtió en el segundo rey de Israel."],book:"Samuel"},{name:"Noé",clues:["Era un hombre justo en su generación.","Dios le encomendó una misión especial de rescate.","Trabajó construyendo algo enorme durante muchos años.","Reunió animales de todas las especies.","Construyó el arca y sobrevivió al diluvio."],book:"Génesis"},{name:"Abraham",clues:["Vivía originalmente en Ur de los Caldeos.","Dios le prometió descendencia como las estrellas.","Su esposa se llamaba Sara.","Fue llamado el padre de la fe.","Estuvo dispuesto a sacrificar a su hijo Isaac."],book:"Génesis"},{name:"José",clues:["Era el favorito de su padre Jacob.","Sus hermanos le tenían envidia.","Fue vendido y llevado a un país lejano.","Tenía el don de interpretar sueños.","Llegó a ser gobernador de Egipto."],book:"Génesis"},{name:"Daniel",clues:["Fue llevado cautivo a Babilonia siendo joven.","Se negó a comer la comida del rey.","Interpretó el sueño de una gran estatua.","Sus enemigos buscaron destruirlo por su fe.","Fue arrojado al foso de los leones."],book:"Daniel"},{name:"Sansón",clues:["Su nacimiento fue anunciado por un ángel.","Era nazareo desde su nacimiento.","Su fuerza era sobrenatural.","Una mujer descubrió el secreto de su poder.","Derribó el templo de los filisteos."],book:"Jueces"},{name:"Salomón",clues:["Era hijo del segundo rey de Israel.","Pidió sabiduría a Dios en lugar de riquezas.","Construyó el primer templo de Jerusalén.","La Reina de Sabá visitó su corte.","Es considerado el hombre más sabio que ha existido."],book:"Reyes"},{name:"María",clues:["Era una joven de Nazaret.","Un ángel le anunció un mensaje especial.","Estaba comprometida con un carpintero.","Visitó a su prima Elisabet.","Es la madre de Jesús."],book:"Lucas"},{name:"Pedro",clues:["Era pescador de profesión.","Su hermano también era discípulo de Jesús.","Caminó sobre el agua por un momento.","Negó conocer a Jesús tres veces.","Se convirtió en líder de la iglesia primitiva."],book:"Evangelios"},{name:"Pablo",clues:["Su nombre original era Saulo.","Perseguía a los primeros cristianos.","Tuvo un encuentro sobrenatural camino a Damasco.","Escribió muchas cartas del Nuevo Testamento.","Realizó varios viajes misioneros por el Mediterráneo."],book:"Hechos"},{name:"Elías",clues:["Fue un profeta del reino del norte.","Desafió a los profetas de un dios falso.","Fue alimentado por cuervos junto a un arroyo.","Hizo descender fuego del cielo.","Subió al cielo en un carro de fuego."],book:"Reyes"},{name:"Rut",clues:["No era israelita de nacimiento.","Fue nuera de Noemí.",'Dijo: "A donde tú vayas, iré yo".',"Trabajó recogiendo espigas en un campo.","Se convirtió en bisabuela del rey David."],book:"Rut"},{name:"Ester",clues:["Era huérfana criada por su primo.","Llegó a ser reina de Persia.","Arriesgó su vida para salvar a su pueblo.","Organizó un banquete para revelar un complot.","Su historia se celebra en la fiesta de Purim."],book:"Ester"},{name:"Jonás",clues:["Dios le pidió ir a una ciudad malvada.","Intentó huir de la misión de Dios.","Fue lanzado al mar durante una tormenta.","Pasó tres días dentro de un gran pez.","Finalmente predicó en Nínive."],book:"Jonás"},{name:"Juan el Bautista",clues:["Su padre quedó mudo cuando anunció su nacimiento.","Vivía en el desierto.","Comía langostas y miel silvestre.","Predicaba arrepentimiento y bautismo.","Bautizó a Jesús en el río Jordán."],book:"Evangelios"},{name:"Josué",clues:["Fue asistente de Moisés durante años.","Era uno de los doce espías enviados a Canaán.","Fue valiente cuando otros tuvieron miedo.","Lideró al pueblo cruzando el río Jordán.","Conquistó las murallas de Jericó."],book:"Josué"},{name:"Jacob",clues:["Era hermano gemelo de Esaú.","Obtuvo la bendición de su padre mediante un engaño.","Soñó con una escalera que llegaba al cielo.","Trabajó 14 años para casarse con Raquel.","Luchó con un ángel y fue llamado Israel."],book:"Génesis"}];function Hg(n){const t=xe([...gi]).slice(0,5);let s=0,r=0,o=0,a=0;function c(){const g=t[s];a=0;const E=gi.filter(D=>D.name!==g.name).map(D=>D.name),w=xe(E).slice(0,3),R=xe([g.name,...w]);d(g,R)}function d(g,E){var D;const w=g.clues.slice(0,a+1),R=Math.max(50-a*10,10);n.innerHTML=`
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
          <span>Pista ${a+1} de ${g.clues.length}</span>
          <span class="text-muted">Valor: ${R} pts</span>
        </div>

        <div class="characters-clues">
          ${w.map((x,V)=>`
            <div class="clue-card ${V===a?"clue-new":""}">
              <span class="clue-number">${V+1}</span>
              <span>${x}</span>
            </div>
          `).join("")}
        </div>

        ${a<g.clues.length-1?`
          <button class="btn btn-secondary btn-block mb-md" id="btn-more-clue">
            💡 Otra Pista (-10 pts)
          </button>
        `:""}

        <div class="section-title mt-md">¿Quién es?</div>
        <div class="characters-options">
          ${E.map(x=>`
            <button class="characters-option" data-name="${x}">${x}</button>
          `).join("")}
        </div>
      </div>
    `,(D=document.getElementById("btn-more-clue"))==null||D.addEventListener("click",()=>{a++,d(g,E)}),n.querySelectorAll(".characters-option").forEach(x=>{x.addEventListener("click",()=>{const V=x.dataset.name;h(V,g)})})}function h(g,E,w){const R=g===E.name;if(n.querySelectorAll(".characters-option").forEach(D=>{D.disabled=!0,D.dataset.name===E.name&&D.classList.add("correct"),D.dataset.name===g&&!R&&D.classList.add("wrong")}),R){o++;const D=Math.max(50-a*10,10);r+=D,se(`✅ ¡Correcto! +${D} pts`,"success")}else se(`❌ Era: ${E.name}`,"error");setTimeout(()=>{s++,s<5?c():m()},1800)}function m(){var w,R;const g=Xn("characters",r,o,"medium");Yn("characters",r,o);const E=o>=4?"🕵️":o>=3?"😊":"📖";n.innerHTML=`
      <div class="game-results">
        <div class="results-emoji">${E}</div>
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
          <div class="reward-item">🪙 +${g.coins} monedas</div>
          <div class="reward-item">⭐ +${g.xp} XP</div>
        </div>

        <div class="results-actions">
          <button class="btn btn-primary btn-block" id="btn-play-again">🔄 Jugar de Nuevo</button>
          <button class="btn btn-secondary btn-block" id="btn-go-home">🏠 Volver al Menú</button>
        </div>
      </div>
    `,(w=document.getElementById("btn-play-again"))==null||w.addEventListener("click",()=>{he("game",{gameId:"characters"})}),(R=document.getElementById("btn-go-home"))==null||R.addEventListener("click",()=>{he("home")})}c()}function Qg(n){const t=xe([...zs]).slice(0,5);let s=0,r=0,o=0;function a(h){const m=h.text.split(" "),g=Math.min(3,Math.max(2,Math.floor(m.length/5))),E=[];for(;E.length<g;){const k=Math.floor(Math.random()*m.length);!E.includes(k)&&m[k].length>3&&E.push(k)}E.sort((k,F)=>k-F);const w=[],R=[];m.forEach((k,F)=>{if(E.includes(F)){const O=k.replace(/[.,;:!?¡¿"']/g,""),$=k.replace(O,"");w.push({type:"blank",original:O,punct:$,index:R.length}),R.push(O)}else w.push({type:"word",text:k})});const x=xe(["gracia","verdad","camino","espíritu","gloria","pueblo","cielo","tierra","corazón","alma"].filter(k=>!R.includes(k.toLowerCase()))).slice(0,2),V=xe([...R,...x]);return{blankedWords:w,missingWords:R,allOptions:V}}function c(){const h=t[s],{blankedWords:m,missingWords:g,allOptions:E}=a(h);let w=new Array(g.length).fill(null);function R(){var x;n.innerHTML=`
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
            ${m.map(V=>{if(V.type==="word")return`<span class="vc-word">${V.text}</span>`;{const k=w[V.index];return`<span class="vc-blank ${k?"filled":""}" data-blank="${V.index}">${k||"___"}${V.punct}</span>`}}).join(" ")}
          </div>

          <div class="section-title mt-lg">Elige las palabras:</div>
          <div class="vc-options">
            ${E.map(V=>{const k=w.includes(V);return`<button class="vc-option ${k?"used":""}" data-word="${V}" ${k?"disabled":""}>${V}</button>`}).join("")}
          </div>

          <button class="btn btn-primary btn-block mt-lg ${w.includes(null)?"disabled":""}" id="btn-check-verse" ${w.includes(null)?"disabled":""}>
            ✅ Comprobar
          </button>
        </div>
      `,n.querySelectorAll(".vc-blank.filled").forEach(V=>{V.addEventListener("click",()=>{const k=parseInt(V.dataset.blank);w[k]=null,R()})}),n.querySelectorAll(".vc-option:not([disabled])").forEach(V=>{V.addEventListener("click",()=>{const k=V.dataset.word,F=w.indexOf(null);F!==-1&&(w[F]=k,R())})}),(x=document.getElementById("btn-check-verse"))==null||x.addEventListener("click",()=>{D(g)})}function D(x){let V=!0;x.forEach((k,F)=>{var O;((O=w[F])==null?void 0:O.toLowerCase())!==k.toLowerCase()&&(V=!1)}),V?(o++,r+=30,se("✅ ¡Correcto! +30 pts","success")):se(`❌ Respuesta: ${x.join(", ")}`,"error"),setTimeout(()=>{s++,s<5?c():d()},2e3)}R()}function d(){var g,E;const h=Xn("verse-complete",r,o,"medium");Yn("verse-complete",r,o);const m=o>=4?"📖":o>=2?"😊":"🙏";n.innerHTML=`
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
    `,(g=document.getElementById("btn-play-again"))==null||g.addEventListener("click",()=>{he("game",{gameId:"verse-complete"})}),(E=document.getElementById("btn-go-home"))==null||E.addEventListener("click",()=>{he("home")})}c()}const Jg=[{theme:"Frutos del Espíritu",words:["AMOR","GOZO","PAZ","PACIENCIA","BONDAD","FE","MANSEDUMBRE","TEMPLANZA","BENIGNIDAD","PERDON","PIEDAD"]},{theme:"Discípulos de Jesús",words:["PEDRO","JUAN","MATEO","TOMAS","SANTIAGO","ANDRES","FELIPE","SIMON","BARTOLOME","JUDAS","TADEO","FELIPE"]},{theme:"Libros del Antiguo Testamento",words:["GENESIS","EXODO","LEVITICO","NUMEROS","DEUTERONOMIO","JOSUE","JUECES","RUT","SAMUEL","REYES","SALMOS"]},{theme:"Personajes Bíblicos",words:["MOISES","DAVID","SARA","NOE","ESTER","ABRAHAM","ISAAC","JACOB","JOSE","SAMUEL","DANIEL","SANSÓN"]},{theme:"Lugares Bíblicos",words:["EDEN","SINAI","BELEN","JORDAN","JERUSALEN","NAZARET","JERICO","EGIPTO","BETEL","CANAN","GOLGOTA"]},{theme:"Valores Cristianos",words:["GRACIA","VERDAD","VIDA","LUZ","PERDON","AMOR","JUSTICIA","SANTIDAD","HONESTIDAD","HUMILDAD","FE"]},{theme:"Profetas",words:["ELIAS","ISAIAS","DANIEL","JONAS","JEREMIAS","EZEQUIEL","OSEAS","MALAQUIAS","AMOS","MIQUEAS","HABACUC"]},{theme:"Animales de la Biblia",words:["LEON","PALOMA","OVEJA","PEZ","BURRA","AGUILA","TORO","CABALLO","LOBO","SERPIENTE","CORDERO"]},{theme:"Reyes de la Biblia",words:["DAVID","SAUL","SALOMON","JOSIAS","EZEQUIAS","ACAB","ROBOAM","OZIAS","HERODES","FELESTINO","BALAC"]},{theme:"Milagros de Jesús",words:["VINO","PAN","AGUA","VISTA","VIDA","PESCA","CALMA","LAZARO","PIES","OREJA","HIJA"]}];function Mu(n){e();function e(){n.innerHTML=`
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
    `,n.querySelectorAll(".btn-difficulty").forEach(s=>{s.addEventListener("click",r=>{const o=s.dataset.level;t(o)})})}function t(s){const o={easy:{size:11,wordCount:10,directions:[[0,1],[1,0]]},medium:{size:13,wordCount:11,directions:[[0,1],[1,0],[1,1]]},hard:{size:15,wordCount:12,directions:[[0,1],[1,0],[1,1],[0,-1],[-1,0]]}}[s],a=o.size,c=xe([...Jg])[0],d=xe([...c.words]).slice(0,o.wordCount);let h=[],m=[],g=!1,E=[],w=0,R=Date.now();function D(){h=Array.from({length:a},()=>Array.from({length:a},()=>""));const O=o.directions;d.forEach(q=>{let b=!1,p=0;for(;!b&&p<100;){p++;const y=O[Math.floor(Math.random()*O.length)],T=Math.floor(Math.random()*a),_=Math.floor(Math.random()*a),I=T+y[0]*(q.length-1),v=_+y[1]*(q.length-1);if(I<0||I>=a||v<0||v>=a)continue;let Y=!0;for(let oe=0;oe<q.length;oe++){const Ye=T+y[0]*oe,Ft=_+y[1]*oe;if(h[Ye][Ft]!==""&&h[Ye][Ft]!==q[oe]){Y=!1;break}}if(Y){for(let oe=0;oe<q.length;oe++){const Ye=T+y[0]*oe,Ft=_+y[1]*oe;h[Ye][Ft]=q[oe]}b=!0}}});const $="ABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let q=0;q<a;q++)for(let b=0;b<a;b++)h[q][b]===""&&(h[q][b]=$[Math.floor(Math.random()*$.length)])}function x(){n.innerHTML=`
        <div class="word-search-game">
          <div class="ws-header">
            <div class="ws-theme">
              <span class="ws-theme-icon">📚</span>
              <span>${c.theme} (${s.toUpperCase()})</span>
            </div>
            <div class="ws-found">${m.length} / ${d.length}</div>
          </div>

          <div class="ws-words-list">
            ${d.map($=>`
              <span class="ws-word ${m.includes($)?"found":""}">${$}</span>
            `).join("")}
          </div>

          <div class="ws-grid" id="ws-grid">
            ${h.map(($,q)=>$.map((b,p)=>`
                <div class="ws-cell" data-row="${q}" data-col="${p}">${b}</div>
              `).join("")).join("")}
          </div>

          <p class="text-sm text-muted text-center mt-md">Arrastra para seleccionar palabras consecutivas.</p>
        </div>
      `;const O=document.getElementById("ws-grid");O&&(O.style.gridTemplateColumns=`repeat(${a}, 1fr)`),V()}function V(){const O=document.getElementById("ws-grid");if(!O)return;const $=T=>{const _=T.touches?T.touches[0]:T,I=document.elementFromPoint(_.clientX,_.clientY);return I&&I.classList.contains("ws-cell")?{row:parseInt(I.dataset.row),col:parseInt(I.dataset.col),el:I}:null},q=T=>{T.preventDefault(),g=!0,E=[];const _=$(T);_&&(E.push(_),_.el.classList.add("cell-selected"))},b=T=>{if(!g)return;T.preventDefault();const _=$(T);_&&!E.some(I=>I.row===_.row&&I.col===_.col)&&(E.length===1||y(_))&&(E.push(_),_.el.classList.add("cell-selected"))},p=()=>{g&&(g=!1,k(),document.querySelectorAll(".cell-selected").forEach(T=>T.classList.remove("cell-selected")),E=[])};function y(T){if(E.length<1)return!0;const _=E[0],I=E[E.length-1],v=Math.sign(I.row-_.row),Y=Math.sign(I.col-_.col),oe=I.row+v,Ye=I.col+Y;return T.row===oe&&T.col===Ye}O.addEventListener("mousedown",q),O.addEventListener("mousemove",b),window.addEventListener("mouseup",p),O.addEventListener("touchstart",q,{passive:!1}),O.addEventListener("touchmove",b,{passive:!1}),window.addEventListener("touchend",p)}function k(){if(E.length<2)return;const O=E.map(b=>h[b.row][b.col]).join(""),$=O.split("").reverse().join(""),q=d.find(b=>(b===O||b===$)&&!m.includes(b));if(q){m.push(q),w+=25,E.forEach(y=>{const T=document.querySelector(`.ws-cell[data-row="${y.row}"][data-col="${y.col}"]`);T&&T.classList.add("cell-found")});const b=Array.from(document.querySelectorAll(".ws-word")).find(y=>y.textContent===q);b&&b.classList.add("found");const p=document.querySelector(".ws-found");if(p&&(p.textContent=`${m.length} / ${d.length}`),se(`✅ ¡Encontraste "${q}"!`,"success"),m.length===d.length){const y=Math.max(0,60-Math.floor((Date.now()-R)/1e3));w+=y,setTimeout(F,1e3)}}}function F(){var $,q;const O=Xn("word-search",w,m.length,s);Yn("word-search",w,m.length),n.innerHTML=`
        <div class="game-results">
          <div class="results-emoji">🔤</div>
          <h2 class="results-title">¡Sopa Completada!</h2>

          <div class="results-score-circle">
            <span class="results-score-value">${w}</span>
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
      `,($=document.getElementById("btn-play-again"))==null||$.addEventListener("click",()=>{Mu(n)}),(q=document.getElementById("btn-go-home"))==null||q.addEventListener("click",()=>{he("home")})}D(),x()}}function Wg(n){const s=xe([...gi]).slice(0,6).map((R,D)=>[{id:D,type:"name",text:R.name,icon:"👤",pairId:D},{id:D,type:"clue",text:R.clues[0],icon:"💡",pairId:D}]).flat(),r=xe(s);let o=[],a=[],c=0,d=0,h=Date.now(),m=!0;function g(){n.innerHTML=`
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
    `,n.querySelectorAll(".memory-card").forEach(R=>{R.addEventListener("click",()=>{if(!m)return;const D=parseInt(R.dataset.index);E(D)})})}function E(R){if(o.includes(R)||a.includes(r[R].pairId)||o.length>=2)return;o.push(R);const D=n.querySelector(`.memory-card[data-index="${R}"]`);if(D&&D.classList.add("flipped"),o.length===2){c++,m=!1;const[x,V]=o,k=r[x],F=r[V];k.pairId===F.pairId&&k.type!==F.type?(a.push(k.pairId),d+=Math.max(30-c,10),setTimeout(()=>{var $,q;($=document.querySelector(`.memory-card[data-index="${x}"]`))==null||$.classList.add("matched"),(q=document.querySelector(`.memory-card[data-index="${V}"]`))==null||q.classList.add("matched");const O=n.querySelector(".memory-stats");O&&(O.innerHTML=`<span>🎯 ${a.length}/6</span><span>🔄 ${c} movimientos</span>`),o=[],m=!0,se("✅ ¡Par encontrado!","success"),a.length===6&&setTimeout(w,800)},600)):setTimeout(()=>{var $,q;($=document.querySelector(`.memory-card[data-index="${x}"]`))==null||$.classList.remove("flipped"),(q=document.querySelector(`.memory-card[data-index="${V}"]`))==null||q.classList.remove("flipped");const O=n.querySelector(".memory-stats");O&&(O.innerHTML=`<span>🎯 ${a.length}/6</span><span>🔄 ${c} movimientos</span>`),o=[],m=!0},1e3)}}function w(){var k,F;const R=Math.floor((Date.now()-h)/1e3),D=Math.max(0,120-R);d+=D;const x=Xn("memory",d,a.length,"easy");Yn("memory",d,a.length);const V=c<=12?"🧠":c<=18?"😊":"🃏";n.innerHTML=`
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
    `,(k=document.getElementById("btn-play-again"))==null||k.addEventListener("click",()=>{he("game",{gameId:"memory"})}),(F=document.getElementById("btn-go-home"))==null||F.addEventListener("click",()=>{he("home")})}g()}const Ou={noah:{id:"noah",title:"El Arca de Noé",description:"Construye un arca para salvar a la creación del gran diluvio.",cover:"assets/stories/noah.png",difficulty:"Fácil",reward:100,xp:50,startNode:"start",nodes:{start:{text:'Dios ve que la tierra está llena de maldad, pero encuentra gracia en ti, Noé. Te dice: "Hazte un arca de madera de gofer; harás aposentos en el arca, y la calafatearás con brea". El cielo se oscurece.',image:"assets/stories/noah.png",choices:[{text:"🛠️ Obedecer y empezar a construir de inmediato",nextNode:"build"},{text:"🗣️ Hablar con los vecinos para advertirles del peligro",nextNode:"warn_neighbors"}]},build:{text:"Pasan los años. Construyes el Arca con tus hijos Sem, Cam y Jafet. La gente se burla de ti porque no hay señales de lluvia en el desierto. ¿Qué haces ante las burlas?",choices:[{text:"🙏 Continuar trabajando con fe y paciencia",nextNode:"animals"},{text:"🛑 Detenerte un momento para discutir y defenderte",nextNode:"argue"}]},warn_neighbors:{text:'Intentas advertir a la gente, pero se ríen de ti. "¡No ha llovido en años, viejo loco!", te gritan. El tiempo apremia y el arca aún no está lista.',choices:[{text:"🛠️ Volver al trabajo rápidamente en el Arca",nextNode:"build"},{text:"😔 Sentirte desanimado por su incredulidad",nextNode:"discouraged"}]},discouraged:{text:"Te sientas junto a las maderas y respiras profundo. Recuerdas la promesa de Dios de salvarte a ti y a tu familia. Tu fe te renueva.",choices:[{text:"🛠️ Levantar la herramienta y seguir construyendo",nextNode:"build"}]},argue:{text:"Al discutir, pierdes tiempo valioso y la ira entra en tu corazón. El trabajo se retrasa. Sin embargo, decides que lo mejor es concentrarse en lo importante.",choices:[{text:"🛠️ Ignorar las burlas y retomar la construcción",nextNode:"animals"}]},animals:{text:"¡El Arca está terminada! De repente, una procesión milagrosa comienza de la nada: animales de dos en dos, macho y hembra, entran caminando pacíficamente al Arca.",choices:[{text:"🚪 Entrar al Arca con tu familia y cerrar las puertas",nextNode:"flood"}]},flood:{text:"Las cataratas de los cielos se abren y el abismo estalla. Llueve durante 40 días y 40 noches. El Arca flota sobre las aguas. Estás a salvo con tu familia y los animales.",choices:[{text:"🕊️ Esperar a que las aguas bajen y enviar un ave",nextNode:"dove"}]},dove:{text:"Envías una paloma. Regresa la primera vez, pero la segunda vez trae una rama de olivo en el pico. ¡Las aguas están bajando! Finalmente, el Arca se asienta en el monte Ararat.",choices:[{text:"🌈 Salir del Arca y dar gracias a Dios",nextNode:"end"}]},end:{text:"Sales a tierra seca. Dios pone un hermoso arcoíris en el cielo como pacto de que nunca más destruirá la tierra con agua. ¡Has salvado la vida en la tierra!",isEnd:!0,message:"¡Felicidades! Completaste la historia de Noé con obediencia y fe."}}},david:{id:"david",title:"David y Goliat",description:"Enfrenta al gigante filisteo con una honda y mucha fe.",cover:"assets/stories/david.png",difficulty:"Media",reward:120,xp:60,startNode:"start",nodes:{start:{text:"Llegas al campamento del ejército de Israel para llevar comida a tus hermanos mayores. Allí, escuchas a un gigante de casi 3 metros, Goliat, desafiando a Israel al combate.",image:"assets/stories/david.png",choices:[{text:"🛡️ Preguntar qué recompensa tendrá quien lo venza",nextNode:"ask_king"},{text:"😠 Sentirte indignado por los insultos que lanza a Dios",nextNode:"indignant"}]},ask_king:{text:'Te llevan ante el Rey Saúl. Él te mira de arriba abajo: "Eres solo un muchacho, y él un hombre de guerra". Tú recuerdas cómo Dios te libró del león y el oso.',choices:[{text:"👑 Aceptar la armadura del Rey Saúl para pelear",nextNode:"armor"},{text:"❌ Rechazar la armadura y pelear como pastor",nextNode:"stones"}]},indignant:{text:'Dices en voz alta: "¿Quién es este filisteo incircunciso para que provoque a los escuadrones del Dios viviente?". El Rey Saúl escucha tu valentía.',choices:[{text:"👑 Ir a hablar con el Rey Saúl sobre el combate",nextNode:"ask_king"}]},armor:{text:"Te pones el casco de bronce y la pesada coraza. Al intentar dar un paso, te das cuenta de que no puedes moverte con soltura ni has practicado con ella.",choices:[{text:"❌ Quitarte la armadura y confiar en tu honda",nextNode:"stones"}]},stones:{text:"Vas al arroyo y recoges cinco piedras lisas del lecho del río. Las metes en tu bolsa de pastor y caminas hacia el centro del valle, donde Goliat te espera riéndose.",choices:[{text:"🪨 Elegir una piedra y avanzar corriendo",nextNode:"fight_start"}]},fight_start:{text:'Goliat grita: "¿Soy yo un perro para que vengas a mí con palos?". Tú le respondes: "¡Tú vienes a mí con espada, pero yo voy en el nombre de Jehová!".',choices:[{text:"🎯 Poner la piedra en la honda y girarla con fuerza",nextNode:"sling_shot"}]},sling_shot:{text:"Corres hacia el filisteo. Giras la honda y sueltas un extremo. La piedra vuela silbando por el aire y se clava directamente en la frente de Goliat.",choices:[{text:"🏆 El gigante cae al suelo de bruces",nextNode:"end"}]},end:{text:"El campamento filisteo huye aterrado, mientras el ejército de Israel celebra una gran victoria. Has demostrado que Dios no salva con espada, sino con fe.",isEnd:!0,message:"¡Felicidades! Venciste a Goliat con confianza en el Señor."}}},daniel:{id:"daniel",title:"Daniel en el Foso",description:"Permanece fiel a Dios ante un edicto del Rey Darío.",cover:"assets/stories/daniel.png",difficulty:"Difícil",reward:150,xp:75,startNode:"start",nodes:{start:{text:'Eres uno de los gobernadores más sabios del imperio. Otros oficiales, celosos de ti, engañan al Rey Darío para firmar una ley: "Ninguna persona puede orar a ningún dios excepto al Rey durante 30 días".',image:"assets/stories/daniel.png",choices:[{text:"🙏 Ignorar la ley y orar a Dios como siempre",nextNode:"pray"},{text:"🚪 Orar pero con las ventanas cerradas en secreto",nextNode:"secret_pray"}]},pray:{text:"Vas a tu casa, abres las ventanas hacia Jerusalén y te arrodillas a orar tres veces al día dando gracias a Dios. Los oficiales espías te ven y corren a decírselo al Rey.",choices:[{text:"👑 Dejarte llevar por los guardias ante el Rey Darío",nextNode:"arrest"}]},secret_pray:{text:"Decides orar en secreto por miedo. Pero tu corazón siente que estás ocultando tu fe. Quieres dar testimonio de la gloria del Dios vivo.",choices:[{text:"☀️ Abrir las ventanas y orar con valentía",nextNode:"pray"}]},arrest:{text:'El Rey Darío está muy triste porque te aprecia, pero su propia ley no puede cambiarse. Te dice: "El Dios tuyo, a quien tú continuamente sirves, él te libre". Te arrojan al foso de los leones.',choices:[{text:"🦁 Caer en el foso oscuro y esperar a que rujan",nextNode:"den"}]},den:{text:"Te encuentras en la oscuridad rodeado de ojos amenazantes que brillan. De repente, una luz celestial aparece y los leones se sientan pacíficamente a tu alrededor. ¿Qué haces?",choices:[{text:"🙏 Sentarte a dar gracias a Dios por el milagro",nextNode:"morning"},{text:"🦁 Intentar acariciar a uno de los leones",nextNode:"pet_lion"}]},pet_lion:{text:"Te acercas a un león y este ronronea como un gatito. Dios ha cerrado la boca de las fieras para protegerte de todo daño.",choices:[{text:"☀️ Esperar a que amanezca",nextNode:"morning"}]},morning:{text:'Amanece. El Rey Darío corre al foso y grita con dolor: "¡Daniel, siervo del Dios viviente! ¿Te ha podido salvar tu Dios?".',choices:[{text:"🗣️ ¡Rey, vive para siempre! ¡Dios envió su ángel!",nextNode:"end"}]},end:{text:"El Rey Darío, lleno de gozo, te saca del foso. Ni un rasguño hay en ti. Entonces firma un nuevo edicto mandando a todo el reino a temer al Dios de Daniel, que salva y libra.",isEnd:!0,message:"¡Felicidades! Mantuviste tu fe firme y Dios te protegió."}}},moses:{id:"moses",title:"Moisés y el Mar Rojo",description:"Guía al pueblo de Israel hacia la libertad cruzando el mar.",cover:"assets/stories/moses.png",difficulty:"Media",reward:130,xp:65,startNode:"start",nodes:{start:{text:"Has guiado al pueblo de Israel fuera de Egipto tras las diez plagas. Sin embargo, os encontráis atrapados: el Mar Rojo al frente y el ejército del Faraón cargando por detrás.",image:"assets/stories/moses.png",choices:[{text:"🙏 Clamar a Dios por ayuda y protección",nextNode:"pray"},{text:"🗣️ Decir al pueblo que mantengan la calma y tengan fe",nextNode:"calm"}]},pray:{text:'Dios te responde: "¿Por qué clamas a mí? Di a los hijos de Israel que marchen. Y tú, alza tu vara y extiende tu mano sobre el mar, y divídelo".',choices:[{text:"🌊 Alzar la vara hacia el Mar Rojo",nextNode:"part_sea"}]},calm:{text:'Dices al pueblo: "No temáis; estad firmes y ved la salvación que Jehová hará hoy con vosotros". El pueblo se detiene, pero las tropas de Egipto están muy cerca.',choices:[{text:"🌊 Alzar la vara hacia el mar para que se divida",nextNode:"part_sea"}]},part_sea:{text:"Levantas tu vara de madera. Un gran viento recio del oriente sopla toda la noche y las aguas se dividen formando dos inmensos muros sólidos a los lados. Hay tierra seca.",choices:[{text:"🚶‍♂️ Indicar al pueblo que cruce de inmediato",nextNode:"crossing"}]},crossing:{text:"Cruzan por el fondo del mar. Es una marcha larga pero segura. El ejército egipcio decide seguiros con sus carros de guerra adentrándose en el lecho seco.",choices:[{text:"🛡️ Llegar al otro lado y mirar atrás al Faraón",nextNode:"other_side"}]},other_side:{text:"Ya casi todo el pueblo está a salvo en la otra orilla. Los carros egipcios están en medio del mar. Dios te dice que extiendas tu mano una vez más.",choices:[{text:"Extendiendo tu mano sobre las aguas",nextNode:"close_sea"}]},close_sea:{text:"Extiendes tu mano. Las aguas vuelven a su curso normal con furia sobre el ejército de Faraón. El pueblo de Israel queda libre para siempre de Egipto.",choices:[{text:"🎶 Celebrar la libertad con cánticos a Dios",nextNode:"end"}]},end:{text:"Miriam toma un pandero y todo el pueblo danza y canta de gozo. Habéis cruzado el mar y la libertad os espera. ¡El Éxodo ha comenzado!",isEnd:!0,message:"¡Felicidades! Abriste camino en medio del mar con el poder de Dios."}}}};function Kg(n){lo(n)}function lo(n){n.innerHTML=`
    <div class="stories-selection">
      <div class="stories-header">
        <h2>📜 Relatos de Fe</h2>
        <p class="text-muted">Elige una historia y toma decisiones para guiar su camino.</p>
      </div>
      
      <div class="stories-grid">
        ${Object.values(Ou).map(e=>`
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
  `,n.querySelectorAll(".btn-start-story").forEach(e=>{e.addEventListener("click",t=>{const s=t.target.dataset.id;Yg(n,s)})})}function Yg(n,e){const t=Ou[e];let s=t.startNode||"start";function r(){var d;const o=t.nodes[s];if(!o){console.error(`Node not found: ${s}`);return}const a=o.image||t.cover;if(o.isEnd){Xg(n,t,o);return}n.innerHTML=`
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
    `,(d=document.getElementById("btn-exit-story"))==null||d.addEventListener("click",()=>{lo(n)});const c=document.getElementById("story-text-box");Zg(o.text,c,()=>{const h=document.getElementById("story-choices-container");h&&o.choices&&o.choices.forEach(m=>{const g=document.createElement("button");g.className="btn btn-option btn-glass fade-in",g.textContent=m.text,g.addEventListener("click",()=>{s=m.nextNode,r()}),h.appendChild(g)})})}r()}function Xg(n,e,t){var s;ur(e.reward),cr(e.xp),se(`¡Historia completada! +${e.reward} monedas`,"success"),n.innerHTML=`
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
  `,(s=document.getElementById("btn-finish-story"))==null||s.addEventListener("click",()=>{lo(n)})}function Zg(n,e,t,s=25){let r=0;e.innerHTML="";function o(){r<n.length?(e.innerHTML+=n.charAt(r),r++,setTimeout(o,s)):t&&t()}o()}const Vl=[{word:"JESUS",category:"Personaje",hint:"El Hijo de Dios, Salvador del mundo.",verse:'"Y dará a luz un hijo, y llamarás su nombre JESÚS, porque él salvará a su pueblo de sus pecados." - Mateo 1:21'},{word:"MOISES",category:"Personaje",hint:"Líder que guió al pueblo de Israel fuera de Egipto.",verse:'"Por la fe Moisés, hecho ya grande, rehusó llamarse hijo de la hija de Faraón." - Hebreos 11:24'},{word:"DAVID",category:"Personaje",hint:"Rey de Israel, conocido por vencer a Goliat y escribir Salmos.",verse:'"Hallé a David hijo de Isaí, varón conforme a mi corazón, quien hará todo lo que yo quiero." - Hechos 13:22'},{word:"SALOMON",category:"Personaje",hint:"Hijo de David, conocido por su gran sabiduría.",verse:'"Y dio Dios a Salomón sabiduría y prudencia muy grandes, y anchura de corazón." - 1 Reyes 4:29'},{word:"MANA",category:"Objeto/Alimento",hint:"El pan del cielo que Dios envió al pueblo en el desierto.",verse:'"Y la casa de Israel lo llamó Maná; y era como semilla de culantro, blanco, y su sabor como de hojuelas con miel." - Éxodo 16:31'},{word:"JERUSALEN",category:"Lugar",hint:"La ciudad santa, capital del Reino de Israel.",verse:'"Pedid por la paz de Jerusalén; sean prosperados los que te aman." - Salmos 122:6'},{word:"JORDAN",category:"Lugar",hint:"Río donde Juan el Bautista bautizó a Jesús.",verse:'"Y Jesús, después que fue bautizado, subió luego del agua; y he aquí los cielos le fueron abiertos." - Mateo 3:16'},{word:"BIBLIA",category:"Concepto",hint:"La palabra escrita de Dios (Colección de libros).",verse:'"Toda la Escritura es inspirada por Dios, y útil para enseñar, para redargüir." - 2 Timoteo 3:16'},{word:"ORACION",category:"Acción",hint:"Hablar con Dios con fe y corazón sincero.",verse:'"Orad sin cesar. Dad gracias en todo, porque esta es la voluntad de Dios." - 1 Tesalonicenses 5:17-18'},{word:"GOLIAT",category:"Personaje",hint:"El gigante filisteo de Gat que desafió a Israel.",verse:'"Salió entonces del campamento de los filisteos un paladín que se llamaba Goliat, de Gat." - 1 Samuel 17:4'},{word:"MESA",category:"Concepto",hint:'Lugar de comunión; "Aderezas ____ delante de mí".',verse:'"Aderezas mesa delante de mí en presencia de mis angustiadores; unges mi cabeza con aceite." - Salmos 23:5'},{word:"ARCA",category:"Objeto",hint:"Estructura construida por Noé para flotar en el Diluvio.",verse:'"Por la fe Noé... con temor preparó el arca en que su casa se salvase." - Hebreos 11:7'},{word:"TABERNACULO",category:"Lugar",hint:"Santuario móvil que usaba Israel en el desierto.",verse:'"Y harán un santuario para mí, y habitaré en medio de ellos." - Éxodo 25:8'},{word:"PENTATEUCO",category:"Concepto",hint:"Los primeros cinco libros de la Biblia escrito por Moisés.",verse:"Génesis, Éxodo, Levítico, Números y Deuteronomio forman la Ley."},{word:"ESPERANZA",category:"Concepto",hint:"Confianza segura en las promesas futuras de Dios.",verse:'"Y la esperanza no avergüenza; porque el amor de Dios ha sido derramado en nuestros corazones." - Romanos 5:5'},{word:"GRACIA",category:"Concepto",hint:"Favor inmerecido de Dios para la salvación.",verse:'"Porque por gracia sois salvos por medio de la fe; y esto no de vosotros." - Efesios 2:8'}];function ey(n){let e=a(),t=[],s=6,r=6,o=!1;function a(){const g=Math.floor(Math.random()*Vl.length);return Vl[g]}function c(){if(o){m();return}const g=e.word.toUpperCase();if(g.split("").every(w=>t.includes(w)||w===" ")){h(!0);return}if(s<=0){h(!1);return}n.innerHTML=`
      <div class="hangman-game">
        <div class="hm-header">
          <div class="hm-category">🏷️ ${e.category}</div>
          <div class="hm-lives">
            ${Array.from({length:r},(w,R)=>`
              <span class="hm-heart ${R<s?"filled":"empty"}">❤️</span>
            `).join("")}
          </div>
        </div>

        <div class="hm-hint-container">
          <p class="hm-hint">💡 Pista: <span>${e.hint}</span></p>
        </div>

        <div class="hm-word-display" id="hm-word-display">
          ${g.split("").map(w=>`
            <div class="hm-letter-box ${w===" "?"hm-space":""}">
              ${t.includes(w)||w===" "?w:"_"}
            </div>
          `).join("")}
        </div>

        <div class="hm-keyboard" id="hm-keyboard">
          ${"ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split("").map(w=>`
            <button class="btn btn-keyboard" 
                    data-letter="${w}" 
                    ${t.includes(w)?"disabled":""}>
              ${w}
            </button>
          `).join("")}
        </div>
      </div>
    `,n.querySelectorAll(".btn-keyboard").forEach(w=>{w.addEventListener("click",R=>{const D=R.target.dataset.letter;d(D)})})}function d(g){if(t.includes(g))return;t.push(g),e.word.toUpperCase().includes(g)?se("¡Correcto!","success"):(s--,se("¡Letra incorrecta!","warning")),c()}function h(g){o=!0,g&&(ur(50),cr(25)),m(g)}function m(g){var E;n.innerHTML=`
      <div class="hangman-game">
        <div class="hm-result-card glass">
          <div class="hm-result-icon">${g?"🎉":"😢"}</div>
          <h2>${g?"¡Victoria!":"¡Fin del Juego!"}</h2>
          
          <p class="hm-result-word">La palabra era: <span>${e.word}</span></p>
          
          <div class="hm-verse-box">
            <h4>📖 Contexto Bíblico:</h4>
            <p>${e.verse}</p>
          </div>

          <div class="reward-summary">
            ${g?`
              <div class="reward-item">💰 <span>+50</span></div>
              <div class="reward-item">⭐ <span>+25 XP</span></div>
            `:'<p class="text-muted">No te rindas, ¡sigue aprendiendo!</p>'}
          </div>

          <button class="btn btn-primary btn-block" id="btn-restart-hm">
            Jugar de Nuevo
          </button>
        </div>
      </div>
    `,(E=document.getElementById("btn-restart-hm"))==null||E.addEventListener("click",()=>{e=a(),t=[],s=6,o=!1,c()})}c()}function ty(n){const e=we(),t=localStorage.getItem("bb_player_id")||w();localStorage.setItem("bb_player_id",t);let s=null,r=null,o=null,a=null,c="p1",d=10,h=null,m=!1,g={fiftyfifty:!0,freeze:!0,double:!0},E=!1;function w(){return"user_"+Math.random().toString(36).substr(2,9)}function R(){var p,y,T;n.innerHTML=`
      <div class="bible-battle-game">
        <div class="radar-container">
          <div class="radar-circle"></div>
          <div class="radar-scan"></div>
          <div class="radar-avatar">${e.avatar}</div>
        </div>
        <h3 class="text-center mt-md">Buscando Oponente...</h3>
        <p class="text-muted text-center text-sm">Emparejando en la arena de fe</p>
        
        <div class="bb-matchmaking-actions">
          <button class="btn btn-secondary btn-block mt-lg" id="btn-cancel-match">Cancelar</button>
          <button class="btn btn-outline btn-block mt-sm" id="btn-open-leaderboard">🏆 Ver Clasificación</button>
        </div>

        <!-- Modal Leaderboard -->
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
    `,(p=document.getElementById("btn-cancel-match"))==null||p.addEventListener("click",()=>{a&&a(),he("home")}),(y=document.getElementById("btn-open-leaderboard"))==null||y.addEventListener("click",()=>{document.getElementById("bb-leaderboard-modal").style.display="flex",D()}),(T=document.getElementById("close-leaderboard"))==null||T.addEventListener("click",()=>{document.getElementById("bb-leaderboard-modal").style.display="none"}),x()}async function D(){const p=document.getElementById("leaderboard-list");if(p)try{const y=El(Es(Ne,"bb_users"),_g("leaguePoints","desc"),Eg(10)),T=await Al(y);if(T.empty){p.innerHTML='<p class="text-center text-muted">Aún no hay clasificados. ¡Sé el primero!</p>';return}p.innerHTML=`
        <div class="ranking-list">
          ${T.docs.map((_,I)=>{const v=_.data();return`
              <div class="ranking-item ${v.uid===t?"me":""}">
                <div class="rank-pos">${I+1}</div>
                <div class="rank-avatar">${v.avatar||"👤"}</div>
                <div class="rank-info">
                  <div class="rank-name">${v.name}</div>
                  <div class="rank-league">${v.league||"Pescador"}</div>
                </div>
                <div class="rank-points">${v.leaguePoints||0} PL</div>
              </div>
            `}).join("")}
        </div>
      `}catch(y){console.error(y),p.innerHTML='<p class="text-center text-danger">Error cargando ranking.</p>'}}async function x(){const p=Es(Ne,"bb_queue"),y=El(p,Tl("status","==","waiting"),Tl("uid","!=",t));try{const T=await Al(y);if(T.empty){c="p1";const _=await Sl(Es(Ne,"bb_queue"),{uid:t,name:e.name,avatar:e.avatar,status:"waiting",createdAt:pi()});a=Rl(rt(Ne,"bb_queue",_.id),I=>{if(I.exists()&&I.data().status==="matched"){const v=I.data().matchId;a(),wl(_),V(v)}})}else{const _=T.docs[0],I=_.data();c="p2";const v=xe([...kn.easy,...kn.medium]).slice(0,5),Y=await Sl(Es(Ne,"bb_matches"),{status:"starting",p1:{uid:I.uid,name:I.name,avatar:I.avatar,score:0,currentQ:0,lastAnswered:-1},p2:{uid:t,name:e.name,avatar:e.avatar,score:0,currentQ:0,lastAnswered:-1},questions:v,startTime:pi()});await Gr(rt(Ne,"bb_queue",_.id),{status:"matched",matchId:Y.id}),V(Y.id)}}catch(T){console.error("Matchmaking error:",T),se("Error de conexión: "+T.message,"danger"),setTimeout(()=>he("home"),3e3)}}function V(p){s=p,o=Rl(rt(Ne,"bb_matches",p),y=>{y.exists()&&(r=y.data(),r.status==="starting"?k("playing"):F())})}async function k(p){s&&await Gr(rt(Ne,"bb_matches",s),{status:p})}function F(){if(!r)return;const p=r[c],T=r[c==="p1"?"p2":"p1"],_=p.currentQ;if(_>=5||r.status==="ended"){clearInterval(h),b();return}const I=r.questions[_];n.innerHTML=`
      <div class="bible-battle-game">
        <div class="bb-hud">
          <div class="bb-player">
            <div class="bb-avatar">${p.avatar}</div>
            <div class="bb-name">Tú</div>
            <div class="bb-score">${p.score} pts</div>
          </div>
          <div class="bb-vs">VS</div>
          <div class="bb-player">
            <div class="bb-avatar">${T.avatar}</div>
            <div class="bb-name">${T.name}</div>
            <div class="bb-score">${T.score} pts</div>
          </div>
        </div>

        <div class="bb-timer-bar">
          <div class="timer-fill" style="width: ${d/10*100}%"></div>
        </div>

        <div class="bb-question-box card">
          <div class="bb-q-header">Pregunta ${_+1}/5</div>
          <h3 class="bb-question">${I.q}</h3>
        </div>

        <div class="bb-options-grid" id="options-grid">
          ${I.options.map((v,Y)=>`
            <button class="btn btn-option" data-ans="${Y}">${v}</button>
          `).join("")}
        </div>

        <div class="bb-powerups">
          <button class="btn btn-powerup ${g.fiftyfifty?"":"disabled"}" id="p-5050" ${g.fiftyfifty?"":"disabled"}>✂️ 50/50</button>
          <button class="btn btn-powerup ${g.freeze?"":"disabled"}" id="p-freeze" ${g.freeze?"":"disabled"}>❄️ Hielo</button>
          <button class="btn btn-powerup ${g.double?"":"disabled"}" id="p-double" ${g.double?"":"disabled"}>🔥 X2</button>
        </div>
      </div>
    `,m=!1,O(),$(I.answer)}function O(){clearInterval(h),d=10;const p=n.querySelector(".timer-fill");h=setInterval(async()=>{d-=.1,p&&(p.style.width=`${d/10*100}%`),d<=0&&(clearInterval(h),m||q(-1,-1))},100)}function $(p){var y,T,_;n.querySelectorAll(".btn-option").forEach(I=>{I.addEventListener("click",v=>{if(m)return;m=!0;const Y=parseInt(I.dataset.ans);q(Y,p)})}),(y=document.getElementById("p-5050"))==null||y.addEventListener("click",()=>{if(!g.fiftyfifty||m)return;g.fiftyfifty=!1;let v=Array.from(n.querySelectorAll(".btn-option")).filter(Y=>parseInt(Y.dataset.ans)!==p);xe(v).slice(0,2).forEach(Y=>Y.style.visibility="hidden"),document.getElementById("p-5050").classList.add("disabled")}),(T=document.getElementById("p-double"))==null||T.addEventListener("click",()=>{!g.double||m||(g.double=!1,E=!0,document.getElementById("p-double").classList.add("disabled"),se("¡Próximo acierto duplicado!","info"))}),(_=document.getElementById("p-freeze"))==null||_.addEventListener("click",()=>{g.freeze&&(g.freeze=!1,document.getElementById("p-freeze").classList.add("disabled"),se("❄️ Efecto visual de Hielo","info"))})}async function q(p,y){clearInterval(h);let T=0;p===y?(T=Math.floor(d*10*(E?2:1)),se("¡Correcto!","success")):se("¡Incorrecto!","warning"),E=!1;const _=r[c],I={};I[`${c}.score`]=_.score+T,I[`${c}.currentQ`]=_.currentQ+1,I[`${c}.lastAnswered`]=p,await Gr(rt(Ne,"bb_matches",s),I)}function b(){var v,Y;o&&o();const p=r[c],T=r[c==="p1"?"p2":"p1"],_=p.score>T.score,I=p.score===T.score;_?(ur(100),cr(50),Pl(25)):I||Pl(-10),Pu(),n.innerHTML=`
      <div class="game-results">
        <div class="results-emoji">${_?"🏆":I?"🤝":"😢"}</div>
        <h2 class="results-title">${_?"¡Victoria!":I?"¡Empate!":"¡Derrota!"}</h2>

        <div class="results-score-circle">
          <span class="results-score-value">${p.score}</span>
          <span class="results-score-label">Tus puntos</span>
        </div>

        <div class="results-stats">
          <p class="text-secondary">Rival: <b>${T.name}</b> (${T.score} pts)</p>
          <div class="bb-league-badge mt-sm">${e.league}</div>
        </div>

        <div class="results-rewards">
          ${_?'<div class="reward-item">🪙 +100 monedas</div><div class="reward-item">⭐ +50 XP</div><div class="reward-item">🏆 +25 PL</div>':I?'<p class="text-sm">¡Buen combate!</p>':'<div class="reward-item">❌ -10 PL</div>'}
        </div>

        <div class="results-actions">
          <button class="btn btn-primary btn-block" id="btn-play-again-bb">🔄 Jugar de Nuevo</button>
          <button class="btn btn-secondary btn-block" id="btn-go-home">🏠 Volver al Menú</button>
        </div>
      </div>
    `,(v=document.getElementById("btn-play-again-bb"))==null||v.addEventListener("click",()=>{R()}),(Y=document.getElementById("btn-go-home"))==null||Y.addEventListener("click",()=>{he("home")}),setTimeout(()=>{c==="p1"&&wl(rt(Ne,"bb_matches",s))},5e3)}R()}Et({id:"trivia",name:"Trivia Bíblica",icon:"❓",description:"Pon a prueba tu conocimiento bíblico",difficulty:"easy",render:Gg});Et({id:"characters",name:"Adivina el Personaje",icon:"🕵️",description:"Descubre quién es con las pistas",difficulty:"medium",render:Hg});Et({id:"verse-complete",name:"Completa el Versículo",icon:"📖",description:"Llena las palabras que faltan",difficulty:"medium",render:Qg});Et({id:"word-search",name:"Sopa de Letras",icon:"🔤",description:"Encuentra palabras bíblicas",difficulty:"easy",render:Mu});Et({id:"memory",name:"Memoria Bíblica",icon:"🃏",description:"Encuentra los pares bíblicos",difficulty:"easy",render:Wg});Et({id:"stories",name:"Relatos de Fe",icon:"📜",description:"Historias interactivas con elecciones",difficulty:"media",render:Kg});Et({id:"hangman",name:"Ahorcado Bíblico",icon:"🪧",description:"Adivina la palabra antes de agotar tus vidas",difficulty:"normal",render:ey});Et({id:"bible-battle",name:"Bible Battle 1v1",icon:"⚔️",description:"Trivia competitiva 1vs1 en tiempo real",difficulty:"alta",render:ty});kt("home",n=>Lg(n));kt("verse",n=>Og(n));kt("profile",n=>qg(n));kt("achievements",n=>Bg(n));kt("settings",n=>Ug(n));kt("ranking",n=>jg(n));kt("game",(n,e)=>{const t=Du(e.gameId);if(t&&t.render)return t.render(n);n.innerHTML='<div class="empty-state"><p>Juego no encontrado</p></div>'});const ny=["home","verse","profile","achievements","settings"],sy={home:"Bible Games",verse:"Versículo del Día",profile:"Mi Perfil",achievements:"Logros",settings:"Ajustes",ranking:"Ranking",game:"Juego"};function ry(n,e={}){document.querySelectorAll(".nav-btn").forEach(c=>{c.classList.toggle("active",c.dataset.screen===n)});const s=document.getElementById("header-title");if(s)if(n==="game"&&e.gameId){const c=Du(e.gameId);s.textContent=c?c.name:"Juego"}else s.textContent=sy[n]||"Bible Games";const r=document.getElementById("btn-back"),o=!ny.includes(n);r&&r.classList.toggle("hidden",!o);const a=document.getElementById("bottom-nav");a&&a.classList.toggle("hidden",o),dr()}function xl(){var e;localStorage.getItem("theme")==="light"&&document.body.classList.add("light-theme"),md(ry),document.querySelectorAll(".nav-btn").forEach(t=>{t.addEventListener("click",()=>{const s=t.dataset.screen;s&&he(s)})}),(e=document.getElementById("btn-back"))==null||e.addEventListener("click",()=>{he("home")}),dr(),pd("home")}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",xl):xl();
