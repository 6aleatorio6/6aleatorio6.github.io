const __vite__fileDeps=["./DefaultLayout-Dk8hzQYQ.js","./index-CNQcs3Zr.js","./cil-user-CEJpfGFl.js","./DefaultLayout-DIKJ0DAD.css","./style-DUA3lmzi.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as g,R as T,a as A,j as E,_ as H,b as B,c as K}from"./index-CNQcs3Zr.js";/* empty css              */var M=function(e){return typeof window<"u"&&localStorage.getItem(e)},q=function(e,t){return localStorage.setItem(e,t)},Z=function(e){if(typeof window>"u")return"light";var t=M(e);return t||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")},P=function(e){document.documentElement.dataset.coreuiTheme=e==="auto"&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":e;var t=new Event("ColorSchemeChange");document.documentElement.dispatchEvent(t)},F=function(e){var t=g.useState(Z(e)),r=t[0],n=t[1];return g.useEffect(function(){r&&(q(e,r),P(r))},[r]),g.useEffect(function(){window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",function(){var o=M(e);o!=="light"&&o!=="dark"&&r&&P(r)})}),{colorMode:r,isColorModeSet:function(){return!!M(e)},setColorMode:n}},D={exports:{}},U={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C=g;function G(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var J=typeof Object.is=="function"?Object.is:G,Q=C.useSyncExternalStore,X=C.useRef,Y=C.useEffect,ee=C.useMemo,te=C.useDebugValue;U.useSyncExternalStoreWithSelector=function(e,t,r,n,o){var u=X(null);if(u.current===null){var s={hasValue:!1,value:null};u.current=s}else s=u.current;u=ee(function(){function a(l){if(!i){if(i=!0,v=l,l=n(l),o!==void 0&&s.hasValue){var d=s.value;if(o(d,l))return b=d}return b=l}if(d=b,J(v,l))return d;var w=n(l);return o!==void 0&&o(d,w)?d:(v=l,b=w)}var i=!1,v,b,m=r===void 0?null:r;return[function(){return a(t())},m===null?void 0:function(){return a(m())}]},[t,r,n,o]);var f=Q(e,u[0],u[1]);return Y(function(){s.hasValue=!0,s.value=f},[f]),te(f),f};D.exports=U;var re=D.exports,p="default"in T?A:T,j=Symbol.for("react-redux-context"),N=typeof globalThis<"u"?globalThis:{};function ne(){if(!p.createContext)return{};const e=N[j]??(N[j]=new Map);let t=e.get(p.createContext);return t||(t=p.createContext(null),e.set(p.createContext,t)),t}var y=ne(),oe=()=>{throw new Error("uSES not initialized!")};function _(e=y){return function(){return p.useContext(e)}}var V=_(),$=oe,ue=e=>{$=e},se=(e,t)=>e===t;function ie(e=y){const t=e===y?V:_(e),r=(n,o={})=>{const{equalityFn:u=se,devModeChecks:s={}}=typeof o=="function"?{equalityFn:o}:o,{store:f,subscription:a,getServerState:i,stabilityCheck:v,identityFunctionCheck:b}=t();p.useRef(!0);const m=p.useCallback({[n.name](d){return n(d)}}[n.name],[n,v,s.stabilityCheck]),l=$(a.addNestedSub,f.getState,i||f.getState,m,u);return p.useDebugValue(l),l};return Object.assign(r,{withTypes:()=>r}),r}var ce=ie();function ae(e){e()}function le(){let e=null,t=null;return{clear(){e=null,t=null},notify(){ae(()=>{let r=e;for(;r;)r.callback(),r=r.next})},get(){const r=[];let n=e;for(;n;)r.push(n),n=n.next;return r},subscribe(r){let n=!0;const o=t={callback:r,next:null,prev:t};return o.prev?o.prev.next=o:e=o,function(){!n||e===null||(n=!1,o.next?o.next.prev=o.prev:t=o.prev,o.prev?o.prev.next=o.next:e=o.next)}}}}var L={notify(){},get:()=>[]};function fe(e,t){let r,n=L,o=0,u=!1;function s(w){v();const c=n.subscribe(w);let h=!1;return()=>{h||(h=!0,c(),b())}}function f(){n.notify()}function a(){d.onStateChange&&d.onStateChange()}function i(){return u}function v(){o++,r||(r=e.subscribe(a),n=le())}function b(){o--,r&&o===0&&(r(),r=void 0,n.clear(),n=L)}function m(){u||(u=!0,v())}function l(){u&&(u=!1,b())}const d={addNestedSub:s,notifyNestedSubs:f,handleChangeWrapper:a,isSubscribed:i,trySubscribe:m,tryUnsubscribe:l,getListeners:()=>n};return d}var de=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",pe=typeof navigator<"u"&&navigator.product==="ReactNative",he=de||pe?p.useLayoutEffect:p.useEffect;function ve({store:e,context:t,children:r,serverState:n,stabilityCheck:o="once",identityFunctionCheck:u="once"}){const s=p.useMemo(()=>{const i=fe(e);return{store:e,subscription:i,getServerState:n?()=>n:void 0,stabilityCheck:o,identityFunctionCheck:u}},[e,n,o,u]),f=p.useMemo(()=>e.getState(),[e]);he(()=>{const{subscription:i}=s;return i.onStateChange=i.notifyNestedSubs,i.trySubscribe(),f!==e.getState()&&i.notifyNestedSubs(),()=>{i.tryUnsubscribe(),i.onStateChange=void 0}},[s,f]);const a=t||y;return p.createElement(a.Provider,{value:s},r)}var be=ve;function W(e=y){const t=e===y?V:_(e),r=()=>{const{store:n}=t();return n};return Object.assign(r,{withTypes:()=>r}),r}var Se=W();function me(e=y){const t=e===y?Se:W(e),r=()=>t().dispatch;return Object.assign(r,{withTypes:()=>r}),r}var Le=me();ue(re.useSyncExternalStoreWithSelector);function S(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var ye=typeof Symbol=="function"&&Symbol.observable||"@@observable",k=ye,R=()=>Math.random().toString(36).substring(7).split("").join("."),xe={INIT:`@@redux/INIT${R()}`,REPLACE:`@@redux/REPLACE${R()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${R()}`},I=xe;function we(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function ge(e,t,r){if(typeof e!="function")throw new Error(S(2));let n=e,o=t,u=new Map,s=u,f=0,a=!1;function i(){s===u&&(s=new Map,u.forEach((c,h)=>{s.set(h,c)}))}function v(){if(a)throw new Error(S(3));return o}function b(c){if(typeof c!="function")throw new Error(S(4));if(a)throw new Error(S(5));let h=!0;i();const x=f++;return s.set(x,c),function(){if(h){if(a)throw new Error(S(6));h=!1,i(),s.delete(x),u=null}}}function m(c){if(!we(c))throw new Error(S(7));if(typeof c.type>"u")throw new Error(S(8));if(typeof c.type!="string")throw new Error(S(17));if(a)throw new Error(S(9));try{a=!0,o=n(o,c)}finally{a=!1}return(u=s).forEach(x=>{x()}),c}function l(c){if(typeof c!="function")throw new Error(S(10));n=c,m({type:I.REPLACE})}function d(){const c=b;return{subscribe(h){if(typeof h!="object"||h===null)throw new Error(S(11));function x(){const O=h;O.next&&O.next(v())}return x(),{unsubscribe:c(x)}},[k](){return this}}}return m({type:I.INIT}),{dispatch:m,subscribe:b,getState:v,replaceReducer:l,[k]:d}}function Ee(e,t,r){return ge(e,t)}const Ce={sidebarShow:!0,theme:"light"},Re=(e=Ce,{type:t,...r})=>{switch(t){case"set":return{...e,...r};default:return e}},Me=Ee(Re),_e=Me,Oe=A.lazy(()=>H(()=>import("./DefaultLayout-Dk8hzQYQ.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url)),Te=()=>{const{isColorModeSet:e,setColorMode:t}=F("coreui-free-react-admin-template-theme"),r=ce(n=>n.theme);return g.useEffect(()=>{const n=new URLSearchParams(window.location.href.split("?")[1]),o=n.get("theme")&&n.get("theme").match(/^[A-Za-z0-9\s]+/)[0];o&&t(o),!e()&&t(r)},[]),E.jsx(B,{children:E.jsx(K,{path:"*",name:"Home",element:E.jsx(Oe,{})})})};function Pe(){return E.jsx(be,{store:_e,children:E.jsx(Te,{})})}const ke=Object.freeze(Object.defineProperty({__proto__:null,default:Pe},Symbol.toStringTag,{value:"Module"}));export{ke as S,Le as a,ce as b,F as u};
