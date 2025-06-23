var fu=e=>{throw TypeError(e)};var sa=(e,t,n)=>t.has(e)||fu("Cannot "+n);var N=(e,t,n)=>(sa(e,t,"read from private field"),n?n.call(e):t.get(e)),Z=(e,t,n)=>t.has(e)?fu("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),V=(e,t,n,r)=>(sa(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),Ee=(e,t,n)=>(sa(e,t,"access private method"),n);var pi=(e,t,n,r)=>({set _(o){V(e,t,o,n)},get _(){return N(e,t,r)}});function hg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function mf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var hf={exports:{}},Ts={},gf={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ei=Symbol.for("react.element"),gg=Symbol.for("react.portal"),vg=Symbol.for("react.fragment"),yg=Symbol.for("react.strict_mode"),xg=Symbol.for("react.profiler"),wg=Symbol.for("react.provider"),bg=Symbol.for("react.context"),kg=Symbol.for("react.forward_ref"),Sg=Symbol.for("react.suspense"),jg=Symbol.for("react.memo"),Cg=Symbol.for("react.lazy"),pu=Symbol.iterator;function Eg(e){return e===null||typeof e!="object"?null:(e=pu&&e[pu]||e["@@iterator"],typeof e=="function"?e:null)}var vf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},yf=Object.assign,xf={};function Gr(e,t,n){this.props=e,this.context=t,this.refs=xf,this.updater=n||vf}Gr.prototype.isReactComponent={};Gr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Gr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function wf(){}wf.prototype=Gr.prototype;function Gl(e,t,n){this.props=e,this.context=t,this.refs=xf,this.updater=n||vf}var Xl=Gl.prototype=new wf;Xl.constructor=Gl;yf(Xl,Gr.prototype);Xl.isPureReactComponent=!0;var mu=Array.isArray,bf=Object.prototype.hasOwnProperty,ql={current:null},kf={key:!0,ref:!0,__self:!0,__source:!0};function Sf(e,t,n){var r,o={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)bf.call(t,r)&&!kf.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:ei,type:e,key:i,ref:s,props:o,_owner:ql.current}}function Ng(e,t){return{$$typeof:ei,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Zl(e){return typeof e=="object"&&e!==null&&e.$$typeof===ei}function Pg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var hu=/\/+/g;function aa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Pg(""+e.key):t.toString(36)}function Li(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case ei:case gg:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+aa(s,0):r,mu(o)?(n="",e!=null&&(n=e.replace(hu,"$&/")+"/"),Li(o,t,n,"",function(u){return u})):o!=null&&(Zl(o)&&(o=Ng(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(hu,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",mu(e))for(var l=0;l<e.length;l++){i=e[l];var c=r+aa(i,l);s+=Li(i,t,n,c,o)}else if(c=Eg(e),typeof c=="function")for(e=c.call(e),l=0;!(i=e.next()).done;)i=i.value,c=r+aa(i,l++),s+=Li(i,t,n,c,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function mi(e,t,n){if(e==null)return e;var r=[],o=0;return Li(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Tg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Le={current:null},Di={transition:null},Rg={ReactCurrentDispatcher:Le,ReactCurrentBatchConfig:Di,ReactCurrentOwner:ql};function jf(){throw Error("act(...) is not supported in production builds of React.")}G.Children={map:mi,forEach:function(e,t,n){mi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return mi(e,function(){t++}),t},toArray:function(e){return mi(e,function(t){return t})||[]},only:function(e){if(!Zl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};G.Component=Gr;G.Fragment=vg;G.Profiler=xg;G.PureComponent=Gl;G.StrictMode=yg;G.Suspense=Sg;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rg;G.act=jf;G.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=yf({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=ql.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)bf.call(t,c)&&!kf.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:ei,type:e.type,key:o,ref:i,props:r,_owner:s}};G.createContext=function(e){return e={$$typeof:bg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:wg,_context:e},e.Consumer=e};G.createElement=Sf;G.createFactory=function(e){var t=Sf.bind(null,e);return t.type=e,t};G.createRef=function(){return{current:null}};G.forwardRef=function(e){return{$$typeof:kg,render:e}};G.isValidElement=Zl;G.lazy=function(e){return{$$typeof:Cg,_payload:{_status:-1,_result:e},_init:Tg}};G.memo=function(e,t){return{$$typeof:jg,type:e,compare:t===void 0?null:t}};G.startTransition=function(e){var t=Di.transition;Di.transition={};try{e()}finally{Di.transition=t}};G.unstable_act=jf;G.useCallback=function(e,t){return Le.current.useCallback(e,t)};G.useContext=function(e){return Le.current.useContext(e)};G.useDebugValue=function(){};G.useDeferredValue=function(e){return Le.current.useDeferredValue(e)};G.useEffect=function(e,t){return Le.current.useEffect(e,t)};G.useId=function(){return Le.current.useId()};G.useImperativeHandle=function(e,t,n){return Le.current.useImperativeHandle(e,t,n)};G.useInsertionEffect=function(e,t){return Le.current.useInsertionEffect(e,t)};G.useLayoutEffect=function(e,t){return Le.current.useLayoutEffect(e,t)};G.useMemo=function(e,t){return Le.current.useMemo(e,t)};G.useReducer=function(e,t,n){return Le.current.useReducer(e,t,n)};G.useRef=function(e){return Le.current.useRef(e)};G.useState=function(e){return Le.current.useState(e)};G.useSyncExternalStore=function(e,t,n){return Le.current.useSyncExternalStore(e,t,n)};G.useTransition=function(){return Le.current.useTransition()};G.version="18.3.1";gf.exports=G;var x=gf.exports;const O=mf(x),Og=hg({__proto__:null,default:O},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mg=x,_g=Symbol.for("react.element"),Ag=Symbol.for("react.fragment"),zg=Object.prototype.hasOwnProperty,Lg=Mg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Dg={key:!0,ref:!0,__self:!0,__source:!0};function Cf(e,t,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)zg.call(t,r)&&!Dg.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:_g,type:e,key:i,ref:s,props:o,_owner:Lg.current}}Ts.Fragment=Ag;Ts.jsx=Cf;Ts.jsxs=Cf;hf.exports=Ts;var a=hf.exports,Ef={exports:{}},Je={},Nf={exports:{}},Pf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,R){var I=j.length;j.push(R);e:for(;0<I;){var z=I-1>>>1,F=j[z];if(0<o(F,R))j[z]=R,j[I]=F,I=z;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var R=j[0],I=j.pop();if(I!==R){j[0]=I;e:for(var z=0,F=j.length,X=F>>>1;z<X;){var le=2*(z+1)-1,Ve=j[le],J=le+1,lt=j[J];if(0>o(Ve,I))J<F&&0>o(lt,Ve)?(j[z]=lt,j[J]=I,z=J):(j[z]=Ve,j[le]=I,z=le);else if(J<F&&0>o(lt,I))j[z]=lt,j[J]=I,z=J;else break e}}return R}function o(j,R){var I=j.sortIndex-R.sortIndex;return I!==0?I:j.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var c=[],u=[],f=1,p=null,d=3,y=!1,w=!1,v=!1,b=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(j){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=j)r(u),R.sortIndex=R.expirationTime,t(c,R);else break;R=n(u)}}function k(j){if(v=!1,g(j),!w)if(n(c)!==null)w=!0,U(S);else{var R=n(u);R!==null&&K(k,R.startTime-j)}}function S(j,R){w=!1,v&&(v=!1,h(P),P=-1),y=!0;var I=d;try{for(g(R),p=n(c);p!==null&&(!(p.expirationTime>R)||j&&!$());){var z=p.callback;if(typeof z=="function"){p.callback=null,d=p.priorityLevel;var F=z(p.expirationTime<=R);R=e.unstable_now(),typeof F=="function"?p.callback=F:p===n(c)&&r(c),g(R)}else r(c);p=n(c)}if(p!==null)var X=!0;else{var le=n(u);le!==null&&K(k,le.startTime-R),X=!1}return X}finally{p=null,d=I,y=!1}}var C=!1,E=null,P=-1,L=5,M=-1;function $(){return!(e.unstable_now()-M<L)}function D(){if(E!==null){var j=e.unstable_now();M=j;var R=!0;try{R=E(!0,j)}finally{R?Q():(C=!1,E=null)}}else C=!1}var Q;if(typeof m=="function")Q=function(){m(D)};else if(typeof MessageChannel<"u"){var _=new MessageChannel,Y=_.port2;_.port1.onmessage=D,Q=function(){Y.postMessage(null)}}else Q=function(){b(D,0)};function U(j){E=j,C||(C=!0,Q())}function K(j,R){P=b(function(){j(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,U(S))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(j){switch(d){case 1:case 2:case 3:var R=3;break;default:R=d}var I=d;d=R;try{return j()}finally{d=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,R){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var I=d;d=j;try{return R()}finally{d=I}},e.unstable_scheduleCallback=function(j,R,I){var z=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?z+I:z):I=z,j){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=I+F,j={id:f++,callback:R,priorityLevel:j,startTime:I,expirationTime:F,sortIndex:-1},I>z?(j.sortIndex=I,t(u,j),n(c)===null&&j===n(u)&&(v?(h(P),P=-1):v=!0,K(k,I-z))):(j.sortIndex=F,t(c,j),w||y||(w=!0,U(S))),j},e.unstable_shouldYield=$,e.unstable_wrapCallback=function(j){var R=d;return function(){var I=d;d=R;try{return j.apply(this,arguments)}finally{d=I}}}})(Pf);Nf.exports=Pf;var Ig=Nf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fg=x,Ze=Ig;function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Tf=new Set,To={};function er(e,t){$r(e,t),$r(e+"Capture",t)}function $r(e,t){for(To[e]=t,e=0;e<t.length;e++)Tf.add(t[e])}var Bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ua=Object.prototype.hasOwnProperty,$g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gu={},vu={};function Ug(e){return Ua.call(vu,e)?!0:Ua.call(gu,e)?!1:$g.test(e)?vu[e]=!0:(gu[e]=!0,!1)}function Bg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Wg(e,t,n,r){if(t===null||typeof t>"u"||Bg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function De(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var Ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ce[e]=new De(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ce[t]=new De(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ce[e]=new De(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ce[e]=new De(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ce[e]=new De(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ce[e]=new De(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ce[e]=new De(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ce[e]=new De(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ce[e]=new De(e,5,!1,e.toLowerCase(),null,!1,!1)});var Jl=/[\-:]([a-z])/g;function ec(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Jl,ec);Ce[t]=new De(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Jl,ec);Ce[t]=new De(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Jl,ec);Ce[t]=new De(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ce[e]=new De(e,1,!1,e.toLowerCase(),null,!1,!1)});Ce.xlinkHref=new De("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ce[e]=new De(e,1,!1,e.toLowerCase(),null,!0,!0)});function tc(e,t,n,r){var o=Ce.hasOwnProperty(t)?Ce[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Wg(t,n,o,r)&&(n=null),r||o===null?Ug(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Kt=Fg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hi=Symbol.for("react.element"),dr=Symbol.for("react.portal"),fr=Symbol.for("react.fragment"),nc=Symbol.for("react.strict_mode"),Ba=Symbol.for("react.profiler"),Rf=Symbol.for("react.provider"),Of=Symbol.for("react.context"),rc=Symbol.for("react.forward_ref"),Wa=Symbol.for("react.suspense"),Va=Symbol.for("react.suspense_list"),oc=Symbol.for("react.memo"),on=Symbol.for("react.lazy"),Mf=Symbol.for("react.offscreen"),yu=Symbol.iterator;function oo(e){return e===null||typeof e!="object"?null:(e=yu&&e[yu]||e["@@iterator"],typeof e=="function"?e:null)}var de=Object.assign,la;function ho(e){if(la===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);la=t&&t[1]||""}return`
`+la+e}var ca=!1;function ua(e,t){if(!e||ca)return"";ca=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,l=i.length-1;1<=s&&0<=l&&o[s]!==i[l];)l--;for(;1<=s&&0<=l;s--,l--)if(o[s]!==i[l]){if(s!==1||l!==1)do if(s--,l--,0>l||o[s]!==i[l]){var c=`
`+o[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=l);break}}}finally{ca=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ho(e):""}function Vg(e){switch(e.tag){case 5:return ho(e.type);case 16:return ho("Lazy");case 13:return ho("Suspense");case 19:return ho("SuspenseList");case 0:case 2:case 15:return e=ua(e.type,!1),e;case 11:return e=ua(e.type.render,!1),e;case 1:return e=ua(e.type,!0),e;default:return""}}function Ha(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case fr:return"Fragment";case dr:return"Portal";case Ba:return"Profiler";case nc:return"StrictMode";case Wa:return"Suspense";case Va:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Of:return(e.displayName||"Context")+".Consumer";case Rf:return(e._context.displayName||"Context")+".Provider";case rc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case oc:return t=e.displayName||null,t!==null?t:Ha(e.type)||"Memo";case on:t=e._payload,e=e._init;try{return Ha(e(t))}catch{}}return null}function Hg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ha(t);case 8:return t===nc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function En(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _f(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Qg(e){var t=_f(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function gi(e){e._valueTracker||(e._valueTracker=Qg(e))}function Af(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=_f(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function qi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Qa(e,t){var n=t.checked;return de({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function xu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=En(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function zf(e,t){t=t.checked,t!=null&&tc(e,"checked",t,!1)}function Ya(e,t){zf(e,t);var n=En(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ka(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ka(e,t.type,En(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function wu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ka(e,t,n){(t!=="number"||qi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var go=Array.isArray;function Sr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+En(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ga(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return de({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function bu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(T(92));if(go(n)){if(1<n.length)throw Error(T(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:En(n)}}function Lf(e,t){var n=En(t.value),r=En(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ku(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Df(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Df(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var vi,If=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(vi=vi||document.createElement("div"),vi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=vi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ro(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var xo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Yg=["Webkit","ms","Moz","O"];Object.keys(xo).forEach(function(e){Yg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),xo[t]=xo[e]})});function Ff(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||xo.hasOwnProperty(e)&&xo[e]?(""+t).trim():t+"px"}function $f(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Ff(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Kg=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qa(e,t){if(t){if(Kg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function Za(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ja=null;function ic(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var el=null,jr=null,Cr=null;function Su(e){if(e=ri(e)){if(typeof el!="function")throw Error(T(280));var t=e.stateNode;t&&(t=As(t),el(e.stateNode,e.type,t))}}function Uf(e){jr?Cr?Cr.push(e):Cr=[e]:jr=e}function Bf(){if(jr){var e=jr,t=Cr;if(Cr=jr=null,Su(e),t)for(e=0;e<t.length;e++)Su(t[e])}}function Wf(e,t){return e(t)}function Vf(){}var da=!1;function Hf(e,t,n){if(da)return e(t,n);da=!0;try{return Wf(e,t,n)}finally{da=!1,(jr!==null||Cr!==null)&&(Vf(),Bf())}}function Oo(e,t){var n=e.stateNode;if(n===null)return null;var r=As(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(T(231,t,typeof n));return n}var tl=!1;if(Bt)try{var io={};Object.defineProperty(io,"passive",{get:function(){tl=!0}}),window.addEventListener("test",io,io),window.removeEventListener("test",io,io)}catch{tl=!1}function Gg(e,t,n,r,o,i,s,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var wo=!1,Zi=null,Ji=!1,nl=null,Xg={onError:function(e){wo=!0,Zi=e}};function qg(e,t,n,r,o,i,s,l,c){wo=!1,Zi=null,Gg.apply(Xg,arguments)}function Zg(e,t,n,r,o,i,s,l,c){if(qg.apply(this,arguments),wo){if(wo){var u=Zi;wo=!1,Zi=null}else throw Error(T(198));Ji||(Ji=!0,nl=u)}}function tr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Qf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ju(e){if(tr(e)!==e)throw Error(T(188))}function Jg(e){var t=e.alternate;if(!t){if(t=tr(e),t===null)throw Error(T(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return ju(o),e;if(i===r)return ju(o),t;i=i.sibling}throw Error(T(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s){for(l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?e:t}function Yf(e){return e=Jg(e),e!==null?Kf(e):null}function Kf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Kf(e);if(t!==null)return t;e=e.sibling}return null}var Gf=Ze.unstable_scheduleCallback,Cu=Ze.unstable_cancelCallback,e0=Ze.unstable_shouldYield,t0=Ze.unstable_requestPaint,me=Ze.unstable_now,n0=Ze.unstable_getCurrentPriorityLevel,sc=Ze.unstable_ImmediatePriority,Xf=Ze.unstable_UserBlockingPriority,es=Ze.unstable_NormalPriority,r0=Ze.unstable_LowPriority,qf=Ze.unstable_IdlePriority,Rs=null,Tt=null;function o0(e){if(Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(Rs,e,void 0,(e.current.flags&128)===128)}catch{}}var ht=Math.clz32?Math.clz32:a0,i0=Math.log,s0=Math.LN2;function a0(e){return e>>>=0,e===0?32:31-(i0(e)/s0|0)|0}var yi=64,xi=4194304;function vo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ts(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~o;l!==0?r=vo(l):(i&=s,i!==0&&(r=vo(i)))}else s=n&~o,s!==0?r=vo(s):i!==0&&(r=vo(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ht(t),o=1<<n,r|=e[n],t&=~o;return r}function l0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function c0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-ht(i),l=1<<s,c=o[s];c===-1?(!(l&n)||l&r)&&(o[s]=l0(l,t)):c<=t&&(e.expiredLanes|=l),i&=~l}}function rl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Zf(){var e=yi;return yi<<=1,!(yi&4194240)&&(yi=64),e}function fa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ti(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ht(t),e[t]=n}function u0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-ht(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function ac(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ht(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ee=0;function Jf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ep,lc,tp,np,rp,ol=!1,wi=[],vn=null,yn=null,xn=null,Mo=new Map,_o=new Map,an=[],d0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Eu(e,t){switch(e){case"focusin":case"focusout":vn=null;break;case"dragenter":case"dragleave":yn=null;break;case"mouseover":case"mouseout":xn=null;break;case"pointerover":case"pointerout":Mo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":_o.delete(t.pointerId)}}function so(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=ri(t),t!==null&&lc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function f0(e,t,n,r,o){switch(t){case"focusin":return vn=so(vn,e,t,n,r,o),!0;case"dragenter":return yn=so(yn,e,t,n,r,o),!0;case"mouseover":return xn=so(xn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Mo.set(i,so(Mo.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,_o.set(i,so(_o.get(i)||null,e,t,n,r,o)),!0}return!1}function op(e){var t=In(e.target);if(t!==null){var n=tr(t);if(n!==null){if(t=n.tag,t===13){if(t=Qf(n),t!==null){e.blockedOn=t,rp(e.priority,function(){tp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ii(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=il(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ja=r,n.target.dispatchEvent(r),Ja=null}else return t=ri(n),t!==null&&lc(t),e.blockedOn=n,!1;t.shift()}return!0}function Nu(e,t,n){Ii(e)&&n.delete(t)}function p0(){ol=!1,vn!==null&&Ii(vn)&&(vn=null),yn!==null&&Ii(yn)&&(yn=null),xn!==null&&Ii(xn)&&(xn=null),Mo.forEach(Nu),_o.forEach(Nu)}function ao(e,t){e.blockedOn===t&&(e.blockedOn=null,ol||(ol=!0,Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority,p0)))}function Ao(e){function t(o){return ao(o,e)}if(0<wi.length){ao(wi[0],e);for(var n=1;n<wi.length;n++){var r=wi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(vn!==null&&ao(vn,e),yn!==null&&ao(yn,e),xn!==null&&ao(xn,e),Mo.forEach(t),_o.forEach(t),n=0;n<an.length;n++)r=an[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<an.length&&(n=an[0],n.blockedOn===null);)op(n),n.blockedOn===null&&an.shift()}var Er=Kt.ReactCurrentBatchConfig,ns=!0;function m0(e,t,n,r){var o=ee,i=Er.transition;Er.transition=null;try{ee=1,cc(e,t,n,r)}finally{ee=o,Er.transition=i}}function h0(e,t,n,r){var o=ee,i=Er.transition;Er.transition=null;try{ee=4,cc(e,t,n,r)}finally{ee=o,Er.transition=i}}function cc(e,t,n,r){if(ns){var o=il(e,t,n,r);if(o===null)ka(e,t,r,rs,n),Eu(e,r);else if(f0(o,e,t,n,r))r.stopPropagation();else if(Eu(e,r),t&4&&-1<d0.indexOf(e)){for(;o!==null;){var i=ri(o);if(i!==null&&ep(i),i=il(e,t,n,r),i===null&&ka(e,t,r,rs,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else ka(e,t,r,null,n)}}var rs=null;function il(e,t,n,r){if(rs=null,e=ic(r),e=In(e),e!==null)if(t=tr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Qf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return rs=e,null}function ip(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(n0()){case sc:return 1;case Xf:return 4;case es:case r0:return 16;case qf:return 536870912;default:return 16}default:return 16}}var mn=null,uc=null,Fi=null;function sp(){if(Fi)return Fi;var e,t=uc,n=t.length,r,o="value"in mn?mn.value:mn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[i-r];r++);return Fi=o.slice(e,1<r?1-r:void 0)}function $i(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function bi(){return!0}function Pu(){return!1}function et(e){function t(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?bi:Pu,this.isPropagationStopped=Pu,this}return de(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=bi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=bi)},persist:function(){},isPersistent:bi}),t}var Xr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dc=et(Xr),ni=de({},Xr,{view:0,detail:0}),g0=et(ni),pa,ma,lo,Os=de({},ni,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==lo&&(lo&&e.type==="mousemove"?(pa=e.screenX-lo.screenX,ma=e.screenY-lo.screenY):ma=pa=0,lo=e),pa)},movementY:function(e){return"movementY"in e?e.movementY:ma}}),Tu=et(Os),v0=de({},Os,{dataTransfer:0}),y0=et(v0),x0=de({},ni,{relatedTarget:0}),ha=et(x0),w0=de({},Xr,{animationName:0,elapsedTime:0,pseudoElement:0}),b0=et(w0),k0=de({},Xr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),S0=et(k0),j0=de({},Xr,{data:0}),Ru=et(j0),C0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},E0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},N0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function P0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=N0[e])?!!t[e]:!1}function fc(){return P0}var T0=de({},ni,{key:function(e){if(e.key){var t=C0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$i(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?E0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fc,charCode:function(e){return e.type==="keypress"?$i(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$i(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),R0=et(T0),O0=de({},Os,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ou=et(O0),M0=de({},ni,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fc}),_0=et(M0),A0=de({},Xr,{propertyName:0,elapsedTime:0,pseudoElement:0}),z0=et(A0),L0=de({},Os,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),D0=et(L0),I0=[9,13,27,32],pc=Bt&&"CompositionEvent"in window,bo=null;Bt&&"documentMode"in document&&(bo=document.documentMode);var F0=Bt&&"TextEvent"in window&&!bo,ap=Bt&&(!pc||bo&&8<bo&&11>=bo),Mu=" ",_u=!1;function lp(e,t){switch(e){case"keyup":return I0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pr=!1;function $0(e,t){switch(e){case"compositionend":return cp(t);case"keypress":return t.which!==32?null:(_u=!0,Mu);case"textInput":return e=t.data,e===Mu&&_u?null:e;default:return null}}function U0(e,t){if(pr)return e==="compositionend"||!pc&&lp(e,t)?(e=sp(),Fi=uc=mn=null,pr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ap&&t.locale!=="ko"?null:t.data;default:return null}}var B0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Au(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!B0[e.type]:t==="textarea"}function up(e,t,n,r){Uf(r),t=os(t,"onChange"),0<t.length&&(n=new dc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ko=null,zo=null;function W0(e){bp(e,0)}function Ms(e){var t=gr(e);if(Af(t))return e}function V0(e,t){if(e==="change")return t}var dp=!1;if(Bt){var ga;if(Bt){var va="oninput"in document;if(!va){var zu=document.createElement("div");zu.setAttribute("oninput","return;"),va=typeof zu.oninput=="function"}ga=va}else ga=!1;dp=ga&&(!document.documentMode||9<document.documentMode)}function Lu(){ko&&(ko.detachEvent("onpropertychange",fp),zo=ko=null)}function fp(e){if(e.propertyName==="value"&&Ms(zo)){var t=[];up(t,zo,e,ic(e)),Hf(W0,t)}}function H0(e,t,n){e==="focusin"?(Lu(),ko=t,zo=n,ko.attachEvent("onpropertychange",fp)):e==="focusout"&&Lu()}function Q0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ms(zo)}function Y0(e,t){if(e==="click")return Ms(t)}function K0(e,t){if(e==="input"||e==="change")return Ms(t)}function G0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vt=typeof Object.is=="function"?Object.is:G0;function Lo(e,t){if(vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Ua.call(t,o)||!vt(e[o],t[o]))return!1}return!0}function Du(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Iu(e,t){var n=Du(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Du(n)}}function pp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?pp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function mp(){for(var e=window,t=qi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=qi(e.document)}return t}function mc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function X0(e){var t=mp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&pp(n.ownerDocument.documentElement,n)){if(r!==null&&mc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Iu(n,i);var s=Iu(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var q0=Bt&&"documentMode"in document&&11>=document.documentMode,mr=null,sl=null,So=null,al=!1;function Fu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;al||mr==null||mr!==qi(r)||(r=mr,"selectionStart"in r&&mc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),So&&Lo(So,r)||(So=r,r=os(sl,"onSelect"),0<r.length&&(t=new dc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=mr)))}function ki(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var hr={animationend:ki("Animation","AnimationEnd"),animationiteration:ki("Animation","AnimationIteration"),animationstart:ki("Animation","AnimationStart"),transitionend:ki("Transition","TransitionEnd")},ya={},hp={};Bt&&(hp=document.createElement("div").style,"AnimationEvent"in window||(delete hr.animationend.animation,delete hr.animationiteration.animation,delete hr.animationstart.animation),"TransitionEvent"in window||delete hr.transitionend.transition);function _s(e){if(ya[e])return ya[e];if(!hr[e])return e;var t=hr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in hp)return ya[e]=t[n];return e}var gp=_s("animationend"),vp=_s("animationiteration"),yp=_s("animationstart"),xp=_s("transitionend"),wp=new Map,$u="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mn(e,t){wp.set(e,t),er(t,[e])}for(var xa=0;xa<$u.length;xa++){var wa=$u[xa],Z0=wa.toLowerCase(),J0=wa[0].toUpperCase()+wa.slice(1);Mn(Z0,"on"+J0)}Mn(gp,"onAnimationEnd");Mn(vp,"onAnimationIteration");Mn(yp,"onAnimationStart");Mn("dblclick","onDoubleClick");Mn("focusin","onFocus");Mn("focusout","onBlur");Mn(xp,"onTransitionEnd");$r("onMouseEnter",["mouseout","mouseover"]);$r("onMouseLeave",["mouseout","mouseover"]);$r("onPointerEnter",["pointerout","pointerover"]);$r("onPointerLeave",["pointerout","pointerover"]);er("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));er("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));er("onBeforeInput",["compositionend","keypress","textInput","paste"]);er("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));er("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));er("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ev=new Set("cancel close invalid load scroll toggle".split(" ").concat(yo));function Uu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Zg(r,t,void 0,e),e.currentTarget=null}function bp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==i&&o.isPropagationStopped())break e;Uu(o,l,u),i=c}else for(s=0;s<r.length;s++){if(l=r[s],c=l.instance,u=l.currentTarget,l=l.listener,c!==i&&o.isPropagationStopped())break e;Uu(o,l,u),i=c}}}if(Ji)throw e=nl,Ji=!1,nl=null,e}function ie(e,t){var n=t[fl];n===void 0&&(n=t[fl]=new Set);var r=e+"__bubble";n.has(r)||(kp(t,e,2,!1),n.add(r))}function ba(e,t,n){var r=0;t&&(r|=4),kp(n,e,r,t)}var Si="_reactListening"+Math.random().toString(36).slice(2);function Do(e){if(!e[Si]){e[Si]=!0,Tf.forEach(function(n){n!=="selectionchange"&&(ev.has(n)||ba(n,!1,e),ba(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Si]||(t[Si]=!0,ba("selectionchange",!1,t))}}function kp(e,t,n,r){switch(ip(t)){case 1:var o=m0;break;case 4:o=h0;break;default:o=cc}n=o.bind(null,t,n,e),o=void 0,!tl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function ka(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===o||c.nodeType===8&&c.parentNode===o))return;s=s.return}for(;l!==null;){if(s=In(l),s===null)return;if(c=s.tag,c===5||c===6){r=i=s;continue e}l=l.parentNode}}r=r.return}Hf(function(){var u=i,f=ic(n),p=[];e:{var d=wp.get(e);if(d!==void 0){var y=dc,w=e;switch(e){case"keypress":if($i(n)===0)break e;case"keydown":case"keyup":y=R0;break;case"focusin":w="focus",y=ha;break;case"focusout":w="blur",y=ha;break;case"beforeblur":case"afterblur":y=ha;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Tu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=y0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=_0;break;case gp:case vp:case yp:y=b0;break;case xp:y=z0;break;case"scroll":y=g0;break;case"wheel":y=D0;break;case"copy":case"cut":case"paste":y=S0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Ou}var v=(t&4)!==0,b=!v&&e==="scroll",h=v?d!==null?d+"Capture":null:d;v=[];for(var m=u,g;m!==null;){g=m;var k=g.stateNode;if(g.tag===5&&k!==null&&(g=k,h!==null&&(k=Oo(m,h),k!=null&&v.push(Io(m,k,g)))),b)break;m=m.return}0<v.length&&(d=new y(d,w,null,n,f),p.push({event:d,listeners:v}))}}if(!(t&7)){e:{if(d=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",d&&n!==Ja&&(w=n.relatedTarget||n.fromElement)&&(In(w)||w[Wt]))break e;if((y||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=u,w=w?In(w):null,w!==null&&(b=tr(w),w!==b||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=u),y!==w)){if(v=Tu,k="onMouseLeave",h="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(v=Ou,k="onPointerLeave",h="onPointerEnter",m="pointer"),b=y==null?d:gr(y),g=w==null?d:gr(w),d=new v(k,m+"leave",y,n,f),d.target=b,d.relatedTarget=g,k=null,In(f)===u&&(v=new v(h,m+"enter",w,n,f),v.target=g,v.relatedTarget=b,k=v),b=k,y&&w)t:{for(v=y,h=w,m=0,g=v;g;g=ur(g))m++;for(g=0,k=h;k;k=ur(k))g++;for(;0<m-g;)v=ur(v),m--;for(;0<g-m;)h=ur(h),g--;for(;m--;){if(v===h||h!==null&&v===h.alternate)break t;v=ur(v),h=ur(h)}v=null}else v=null;y!==null&&Bu(p,d,y,v,!1),w!==null&&b!==null&&Bu(p,b,w,v,!0)}}e:{if(d=u?gr(u):window,y=d.nodeName&&d.nodeName.toLowerCase(),y==="select"||y==="input"&&d.type==="file")var S=V0;else if(Au(d))if(dp)S=K0;else{S=Q0;var C=H0}else(y=d.nodeName)&&y.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(S=Y0);if(S&&(S=S(e,u))){up(p,S,n,f);break e}C&&C(e,d,u),e==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&Ka(d,"number",d.value)}switch(C=u?gr(u):window,e){case"focusin":(Au(C)||C.contentEditable==="true")&&(mr=C,sl=u,So=null);break;case"focusout":So=sl=mr=null;break;case"mousedown":al=!0;break;case"contextmenu":case"mouseup":case"dragend":al=!1,Fu(p,n,f);break;case"selectionchange":if(q0)break;case"keydown":case"keyup":Fu(p,n,f)}var E;if(pc)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else pr?lp(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(ap&&n.locale!=="ko"&&(pr||P!=="onCompositionStart"?P==="onCompositionEnd"&&pr&&(E=sp()):(mn=f,uc="value"in mn?mn.value:mn.textContent,pr=!0)),C=os(u,P),0<C.length&&(P=new Ru(P,e,null,n,f),p.push({event:P,listeners:C}),E?P.data=E:(E=cp(n),E!==null&&(P.data=E)))),(E=F0?$0(e,n):U0(e,n))&&(u=os(u,"onBeforeInput"),0<u.length&&(f=new Ru("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:u}),f.data=E))}bp(p,t)})}function Io(e,t,n){return{instance:e,listener:t,currentTarget:n}}function os(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Oo(e,n),i!=null&&r.unshift(Io(e,i,o)),i=Oo(e,t),i!=null&&r.push(Io(e,i,o))),e=e.return}return r}function ur(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Bu(e,t,n,r,o){for(var i=t._reactName,s=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,o?(c=Oo(n,i),c!=null&&s.unshift(Io(n,c,l))):o||(c=Oo(n,i),c!=null&&s.push(Io(n,c,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var tv=/\r\n?/g,nv=/\u0000|\uFFFD/g;function Wu(e){return(typeof e=="string"?e:""+e).replace(tv,`
`).replace(nv,"")}function ji(e,t,n){if(t=Wu(t),Wu(e)!==t&&n)throw Error(T(425))}function is(){}var ll=null,cl=null;function ul(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var dl=typeof setTimeout=="function"?setTimeout:void 0,rv=typeof clearTimeout=="function"?clearTimeout:void 0,Vu=typeof Promise=="function"?Promise:void 0,ov=typeof queueMicrotask=="function"?queueMicrotask:typeof Vu<"u"?function(e){return Vu.resolve(null).then(e).catch(iv)}:dl;function iv(e){setTimeout(function(){throw e})}function Sa(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Ao(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Ao(t)}function wn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Hu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var qr=Math.random().toString(36).slice(2),Pt="__reactFiber$"+qr,Fo="__reactProps$"+qr,Wt="__reactContainer$"+qr,fl="__reactEvents$"+qr,sv="__reactListeners$"+qr,av="__reactHandles$"+qr;function In(e){var t=e[Pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Wt]||n[Pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Hu(e);e!==null;){if(n=e[Pt])return n;e=Hu(e)}return t}e=n,n=e.parentNode}return null}function ri(e){return e=e[Pt]||e[Wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function gr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function As(e){return e[Fo]||null}var pl=[],vr=-1;function _n(e){return{current:e}}function se(e){0>vr||(e.current=pl[vr],pl[vr]=null,vr--)}function ne(e,t){vr++,pl[vr]=e.current,e.current=t}var Nn={},Oe=_n(Nn),$e=_n(!1),Yn=Nn;function Ur(e,t){var n=e.type.contextTypes;if(!n)return Nn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ue(e){return e=e.childContextTypes,e!=null}function ss(){se($e),se(Oe)}function Qu(e,t,n){if(Oe.current!==Nn)throw Error(T(168));ne(Oe,t),ne($e,n)}function Sp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(T(108,Hg(e)||"Unknown",o));return de({},n,r)}function as(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Nn,Yn=Oe.current,ne(Oe,e),ne($e,$e.current),!0}function Yu(e,t,n){var r=e.stateNode;if(!r)throw Error(T(169));n?(e=Sp(e,t,Yn),r.__reactInternalMemoizedMergedChildContext=e,se($e),se(Oe),ne(Oe,e)):se($e),ne($e,n)}var It=null,zs=!1,ja=!1;function jp(e){It===null?It=[e]:It.push(e)}function lv(e){zs=!0,jp(e)}function An(){if(!ja&&It!==null){ja=!0;var e=0,t=ee;try{var n=It;for(ee=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}It=null,zs=!1}catch(o){throw It!==null&&(It=It.slice(e+1)),Gf(sc,An),o}finally{ee=t,ja=!1}}return null}var yr=[],xr=0,ls=null,cs=0,nt=[],rt=0,Kn=null,Ft=1,$t="";function Ln(e,t){yr[xr++]=cs,yr[xr++]=ls,ls=e,cs=t}function Cp(e,t,n){nt[rt++]=Ft,nt[rt++]=$t,nt[rt++]=Kn,Kn=e;var r=Ft;e=$t;var o=32-ht(r)-1;r&=~(1<<o),n+=1;var i=32-ht(t)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,Ft=1<<32-ht(t)+o|n<<o|r,$t=i+e}else Ft=1<<i|n<<o|r,$t=e}function hc(e){e.return!==null&&(Ln(e,1),Cp(e,1,0))}function gc(e){for(;e===ls;)ls=yr[--xr],yr[xr]=null,cs=yr[--xr],yr[xr]=null;for(;e===Kn;)Kn=nt[--rt],nt[rt]=null,$t=nt[--rt],nt[rt]=null,Ft=nt[--rt],nt[rt]=null}var Xe=null,Ge=null,ae=!1,mt=null;function Ep(e,t){var n=ot(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ku(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Xe=e,Ge=wn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Xe=e,Ge=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Kn!==null?{id:Ft,overflow:$t}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ot(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Xe=e,Ge=null,!0):!1;default:return!1}}function ml(e){return(e.mode&1)!==0&&(e.flags&128)===0}function hl(e){if(ae){var t=Ge;if(t){var n=t;if(!Ku(e,t)){if(ml(e))throw Error(T(418));t=wn(n.nextSibling);var r=Xe;t&&Ku(e,t)?Ep(r,n):(e.flags=e.flags&-4097|2,ae=!1,Xe=e)}}else{if(ml(e))throw Error(T(418));e.flags=e.flags&-4097|2,ae=!1,Xe=e}}}function Gu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Xe=e}function Ci(e){if(e!==Xe)return!1;if(!ae)return Gu(e),ae=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ul(e.type,e.memoizedProps)),t&&(t=Ge)){if(ml(e))throw Np(),Error(T(418));for(;t;)Ep(e,t),t=wn(t.nextSibling)}if(Gu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ge=wn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ge=null}}else Ge=Xe?wn(e.stateNode.nextSibling):null;return!0}function Np(){for(var e=Ge;e;)e=wn(e.nextSibling)}function Br(){Ge=Xe=null,ae=!1}function vc(e){mt===null?mt=[e]:mt.push(e)}var cv=Kt.ReactCurrentBatchConfig;function co(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var l=o.refs;s===null?delete l[i]:l[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,e))}return e}function Ei(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Xu(e){var t=e._init;return t(e._payload)}function Pp(e){function t(h,m){if(e){var g=h.deletions;g===null?(h.deletions=[m],h.flags|=16):g.push(m)}}function n(h,m){if(!e)return null;for(;m!==null;)t(h,m),m=m.sibling;return null}function r(h,m){for(h=new Map;m!==null;)m.key!==null?h.set(m.key,m):h.set(m.index,m),m=m.sibling;return h}function o(h,m){return h=jn(h,m),h.index=0,h.sibling=null,h}function i(h,m,g){return h.index=g,e?(g=h.alternate,g!==null?(g=g.index,g<m?(h.flags|=2,m):g):(h.flags|=2,m)):(h.flags|=1048576,m)}function s(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,m,g,k){return m===null||m.tag!==6?(m=Oa(g,h.mode,k),m.return=h,m):(m=o(m,g),m.return=h,m)}function c(h,m,g,k){var S=g.type;return S===fr?f(h,m,g.props.children,k,g.key):m!==null&&(m.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===on&&Xu(S)===m.type)?(k=o(m,g.props),k.ref=co(h,m,g),k.return=h,k):(k=Yi(g.type,g.key,g.props,null,h.mode,k),k.ref=co(h,m,g),k.return=h,k)}function u(h,m,g,k){return m===null||m.tag!==4||m.stateNode.containerInfo!==g.containerInfo||m.stateNode.implementation!==g.implementation?(m=Ma(g,h.mode,k),m.return=h,m):(m=o(m,g.children||[]),m.return=h,m)}function f(h,m,g,k,S){return m===null||m.tag!==7?(m=Qn(g,h.mode,k,S),m.return=h,m):(m=o(m,g),m.return=h,m)}function p(h,m,g){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Oa(""+m,h.mode,g),m.return=h,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case hi:return g=Yi(m.type,m.key,m.props,null,h.mode,g),g.ref=co(h,null,m),g.return=h,g;case dr:return m=Ma(m,h.mode,g),m.return=h,m;case on:var k=m._init;return p(h,k(m._payload),g)}if(go(m)||oo(m))return m=Qn(m,h.mode,g,null),m.return=h,m;Ei(h,m)}return null}function d(h,m,g,k){var S=m!==null?m.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return S!==null?null:l(h,m,""+g,k);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case hi:return g.key===S?c(h,m,g,k):null;case dr:return g.key===S?u(h,m,g,k):null;case on:return S=g._init,d(h,m,S(g._payload),k)}if(go(g)||oo(g))return S!==null?null:f(h,m,g,k,null);Ei(h,g)}return null}function y(h,m,g,k,S){if(typeof k=="string"&&k!==""||typeof k=="number")return h=h.get(g)||null,l(m,h,""+k,S);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case hi:return h=h.get(k.key===null?g:k.key)||null,c(m,h,k,S);case dr:return h=h.get(k.key===null?g:k.key)||null,u(m,h,k,S);case on:var C=k._init;return y(h,m,g,C(k._payload),S)}if(go(k)||oo(k))return h=h.get(g)||null,f(m,h,k,S,null);Ei(m,k)}return null}function w(h,m,g,k){for(var S=null,C=null,E=m,P=m=0,L=null;E!==null&&P<g.length;P++){E.index>P?(L=E,E=null):L=E.sibling;var M=d(h,E,g[P],k);if(M===null){E===null&&(E=L);break}e&&E&&M.alternate===null&&t(h,E),m=i(M,m,P),C===null?S=M:C.sibling=M,C=M,E=L}if(P===g.length)return n(h,E),ae&&Ln(h,P),S;if(E===null){for(;P<g.length;P++)E=p(h,g[P],k),E!==null&&(m=i(E,m,P),C===null?S=E:C.sibling=E,C=E);return ae&&Ln(h,P),S}for(E=r(h,E);P<g.length;P++)L=y(E,h,P,g[P],k),L!==null&&(e&&L.alternate!==null&&E.delete(L.key===null?P:L.key),m=i(L,m,P),C===null?S=L:C.sibling=L,C=L);return e&&E.forEach(function($){return t(h,$)}),ae&&Ln(h,P),S}function v(h,m,g,k){var S=oo(g);if(typeof S!="function")throw Error(T(150));if(g=S.call(g),g==null)throw Error(T(151));for(var C=S=null,E=m,P=m=0,L=null,M=g.next();E!==null&&!M.done;P++,M=g.next()){E.index>P?(L=E,E=null):L=E.sibling;var $=d(h,E,M.value,k);if($===null){E===null&&(E=L);break}e&&E&&$.alternate===null&&t(h,E),m=i($,m,P),C===null?S=$:C.sibling=$,C=$,E=L}if(M.done)return n(h,E),ae&&Ln(h,P),S;if(E===null){for(;!M.done;P++,M=g.next())M=p(h,M.value,k),M!==null&&(m=i(M,m,P),C===null?S=M:C.sibling=M,C=M);return ae&&Ln(h,P),S}for(E=r(h,E);!M.done;P++,M=g.next())M=y(E,h,P,M.value,k),M!==null&&(e&&M.alternate!==null&&E.delete(M.key===null?P:M.key),m=i(M,m,P),C===null?S=M:C.sibling=M,C=M);return e&&E.forEach(function(D){return t(h,D)}),ae&&Ln(h,P),S}function b(h,m,g,k){if(typeof g=="object"&&g!==null&&g.type===fr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case hi:e:{for(var S=g.key,C=m;C!==null;){if(C.key===S){if(S=g.type,S===fr){if(C.tag===7){n(h,C.sibling),m=o(C,g.props.children),m.return=h,h=m;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===on&&Xu(S)===C.type){n(h,C.sibling),m=o(C,g.props),m.ref=co(h,C,g),m.return=h,h=m;break e}n(h,C);break}else t(h,C);C=C.sibling}g.type===fr?(m=Qn(g.props.children,h.mode,k,g.key),m.return=h,h=m):(k=Yi(g.type,g.key,g.props,null,h.mode,k),k.ref=co(h,m,g),k.return=h,h=k)}return s(h);case dr:e:{for(C=g.key;m!==null;){if(m.key===C)if(m.tag===4&&m.stateNode.containerInfo===g.containerInfo&&m.stateNode.implementation===g.implementation){n(h,m.sibling),m=o(m,g.children||[]),m.return=h,h=m;break e}else{n(h,m);break}else t(h,m);m=m.sibling}m=Ma(g,h.mode,k),m.return=h,h=m}return s(h);case on:return C=g._init,b(h,m,C(g._payload),k)}if(go(g))return w(h,m,g,k);if(oo(g))return v(h,m,g,k);Ei(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,m!==null&&m.tag===6?(n(h,m.sibling),m=o(m,g),m.return=h,h=m):(n(h,m),m=Oa(g,h.mode,k),m.return=h,h=m),s(h)):n(h,m)}return b}var Wr=Pp(!0),Tp=Pp(!1),us=_n(null),ds=null,wr=null,yc=null;function xc(){yc=wr=ds=null}function wc(e){var t=us.current;se(us),e._currentValue=t}function gl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Nr(e,t){ds=e,yc=wr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Fe=!0),e.firstContext=null)}function st(e){var t=e._currentValue;if(yc!==e)if(e={context:e,memoizedValue:t,next:null},wr===null){if(ds===null)throw Error(T(308));wr=e,ds.dependencies={lanes:0,firstContext:e}}else wr=wr.next=e;return t}var Fn=null;function bc(e){Fn===null?Fn=[e]:Fn.push(e)}function Rp(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,bc(t)):(n.next=o.next,o.next=n),t.interleaved=n,Vt(e,r)}function Vt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var sn=!1;function kc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Op(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function bn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Vt(e,n)}return o=r.interleaved,o===null?(t.next=t,bc(r)):(t.next=o.next,o.next=t),r.interleaved=t,Vt(e,n)}function Ui(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ac(e,n)}}function qu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function fs(e,t,n,r){var o=e.updateQueue;sn=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var c=l,u=c.next;c.next=null,s===null?i=u:s.next=u,s=c;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==s&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=c))}if(i!==null){var p=o.baseState;s=0,f=u=c=null,l=i;do{var d=l.lane,y=l.eventTime;if((r&d)===d){f!==null&&(f=f.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var w=e,v=l;switch(d=t,y=n,v.tag){case 1:if(w=v.payload,typeof w=="function"){p=w.call(y,p,d);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=v.payload,d=typeof w=="function"?w.call(y,p,d):w,d==null)break e;p=de({},p,d);break e;case 2:sn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,d=o.effects,d===null?o.effects=[l]:d.push(l))}else y={eventTime:y,lane:d,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=y,c=p):f=f.next=y,s|=d;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;d=l,l=d.next,d.next=null,o.lastBaseUpdate=d,o.shared.pending=null}}while(!0);if(f===null&&(c=p),o.baseState=c,o.firstBaseUpdate=u,o.lastBaseUpdate=f,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Xn|=s,e.lanes=s,e.memoizedState=p}}function Zu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(T(191,o));o.call(r)}}}var oi={},Rt=_n(oi),$o=_n(oi),Uo=_n(oi);function $n(e){if(e===oi)throw Error(T(174));return e}function Sc(e,t){switch(ne(Uo,t),ne($o,e),ne(Rt,oi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Xa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Xa(t,e)}se(Rt),ne(Rt,t)}function Vr(){se(Rt),se($o),se(Uo)}function Mp(e){$n(Uo.current);var t=$n(Rt.current),n=Xa(t,e.type);t!==n&&(ne($o,e),ne(Rt,n))}function jc(e){$o.current===e&&(se(Rt),se($o))}var ce=_n(0);function ps(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ca=[];function Cc(){for(var e=0;e<Ca.length;e++)Ca[e]._workInProgressVersionPrimary=null;Ca.length=0}var Bi=Kt.ReactCurrentDispatcher,Ea=Kt.ReactCurrentBatchConfig,Gn=0,ue=null,ve=null,we=null,ms=!1,jo=!1,Bo=0,uv=0;function Ne(){throw Error(T(321))}function Ec(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!vt(e[n],t[n]))return!1;return!0}function Nc(e,t,n,r,o,i){if(Gn=i,ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Bi.current=e===null||e.memoizedState===null?mv:hv,e=n(r,o),jo){i=0;do{if(jo=!1,Bo=0,25<=i)throw Error(T(301));i+=1,we=ve=null,t.updateQueue=null,Bi.current=gv,e=n(r,o)}while(jo)}if(Bi.current=hs,t=ve!==null&&ve.next!==null,Gn=0,we=ve=ue=null,ms=!1,t)throw Error(T(300));return e}function Pc(){var e=Bo!==0;return Bo=0,e}function jt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?ue.memoizedState=we=e:we=we.next=e,we}function at(){if(ve===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=ve.next;var t=we===null?ue.memoizedState:we.next;if(t!==null)we=t,ve=e;else{if(e===null)throw Error(T(310));ve=e,e={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},we===null?ue.memoizedState=we=e:we=we.next=e}return we}function Wo(e,t){return typeof t=="function"?t(e):t}function Na(e){var t=at(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=ve,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=s=null,c=null,u=i;do{var f=u.lane;if((Gn&f)===f)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,s=r):c=c.next=p,ue.lanes|=f,Xn|=f}u=u.next}while(u!==null&&u!==i);c===null?s=r:c.next=l,vt(r,t.memoizedState)||(Fe=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ue.lanes|=i,Xn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Pa(e){var t=at(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);vt(i,t.memoizedState)||(Fe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function _p(){}function Ap(e,t){var n=ue,r=at(),o=t(),i=!vt(r.memoizedState,o);if(i&&(r.memoizedState=o,Fe=!0),r=r.queue,Tc(Dp.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||we!==null&&we.memoizedState.tag&1){if(n.flags|=2048,Vo(9,Lp.bind(null,n,r,o,t),void 0,null),be===null)throw Error(T(349));Gn&30||zp(n,t,o)}return o}function zp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ue.updateQueue,t===null?(t={lastEffect:null,stores:null},ue.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Lp(e,t,n,r){t.value=n,t.getSnapshot=r,Ip(t)&&Fp(e)}function Dp(e,t,n){return n(function(){Ip(t)&&Fp(e)})}function Ip(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!vt(e,n)}catch{return!0}}function Fp(e){var t=Vt(e,1);t!==null&&gt(t,e,1,-1)}function Ju(e){var t=jt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wo,lastRenderedState:e},t.queue=e,e=e.dispatch=pv.bind(null,ue,e),[t.memoizedState,e]}function Vo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ue.updateQueue,t===null?(t={lastEffect:null,stores:null},ue.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function $p(){return at().memoizedState}function Wi(e,t,n,r){var o=jt();ue.flags|=e,o.memoizedState=Vo(1|t,n,void 0,r===void 0?null:r)}function Ls(e,t,n,r){var o=at();r=r===void 0?null:r;var i=void 0;if(ve!==null){var s=ve.memoizedState;if(i=s.destroy,r!==null&&Ec(r,s.deps)){o.memoizedState=Vo(t,n,i,r);return}}ue.flags|=e,o.memoizedState=Vo(1|t,n,i,r)}function ed(e,t){return Wi(8390656,8,e,t)}function Tc(e,t){return Ls(2048,8,e,t)}function Up(e,t){return Ls(4,2,e,t)}function Bp(e,t){return Ls(4,4,e,t)}function Wp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Vp(e,t,n){return n=n!=null?n.concat([e]):null,Ls(4,4,Wp.bind(null,t,e),n)}function Rc(){}function Hp(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ec(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Qp(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ec(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Yp(e,t,n){return Gn&21?(vt(n,t)||(n=Zf(),ue.lanes|=n,Xn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Fe=!0),e.memoizedState=n)}function dv(e,t){var n=ee;ee=n!==0&&4>n?n:4,e(!0);var r=Ea.transition;Ea.transition={};try{e(!1),t()}finally{ee=n,Ea.transition=r}}function Kp(){return at().memoizedState}function fv(e,t,n){var r=Sn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Gp(e))Xp(t,n);else if(n=Rp(e,t,n,r),n!==null){var o=ze();gt(n,e,r,o),qp(n,t,r)}}function pv(e,t,n){var r=Sn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gp(e))Xp(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,l=i(s,n);if(o.hasEagerState=!0,o.eagerState=l,vt(l,s)){var c=t.interleaved;c===null?(o.next=o,bc(t)):(o.next=c.next,c.next=o),t.interleaved=o;return}}catch{}finally{}n=Rp(e,t,o,r),n!==null&&(o=ze(),gt(n,e,r,o),qp(n,t,r))}}function Gp(e){var t=e.alternate;return e===ue||t!==null&&t===ue}function Xp(e,t){jo=ms=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function qp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ac(e,n)}}var hs={readContext:st,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useInsertionEffect:Ne,useLayoutEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useMutableSource:Ne,useSyncExternalStore:Ne,useId:Ne,unstable_isNewReconciler:!1},mv={readContext:st,useCallback:function(e,t){return jt().memoizedState=[e,t===void 0?null:t],e},useContext:st,useEffect:ed,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Wi(4194308,4,Wp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Wi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Wi(4,2,e,t)},useMemo:function(e,t){var n=jt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=jt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=fv.bind(null,ue,e),[r.memoizedState,e]},useRef:function(e){var t=jt();return e={current:e},t.memoizedState=e},useState:Ju,useDebugValue:Rc,useDeferredValue:function(e){return jt().memoizedState=e},useTransition:function(){var e=Ju(!1),t=e[0];return e=dv.bind(null,e[1]),jt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ue,o=jt();if(ae){if(n===void 0)throw Error(T(407));n=n()}else{if(n=t(),be===null)throw Error(T(349));Gn&30||zp(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,ed(Dp.bind(null,r,i,e),[e]),r.flags|=2048,Vo(9,Lp.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=jt(),t=be.identifierPrefix;if(ae){var n=$t,r=Ft;n=(r&~(1<<32-ht(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Bo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=uv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},hv={readContext:st,useCallback:Hp,useContext:st,useEffect:Tc,useImperativeHandle:Vp,useInsertionEffect:Up,useLayoutEffect:Bp,useMemo:Qp,useReducer:Na,useRef:$p,useState:function(){return Na(Wo)},useDebugValue:Rc,useDeferredValue:function(e){var t=at();return Yp(t,ve.memoizedState,e)},useTransition:function(){var e=Na(Wo)[0],t=at().memoizedState;return[e,t]},useMutableSource:_p,useSyncExternalStore:Ap,useId:Kp,unstable_isNewReconciler:!1},gv={readContext:st,useCallback:Hp,useContext:st,useEffect:Tc,useImperativeHandle:Vp,useInsertionEffect:Up,useLayoutEffect:Bp,useMemo:Qp,useReducer:Pa,useRef:$p,useState:function(){return Pa(Wo)},useDebugValue:Rc,useDeferredValue:function(e){var t=at();return ve===null?t.memoizedState=e:Yp(t,ve.memoizedState,e)},useTransition:function(){var e=Pa(Wo)[0],t=at().memoizedState;return[e,t]},useMutableSource:_p,useSyncExternalStore:Ap,useId:Kp,unstable_isNewReconciler:!1};function ut(e,t){if(e&&e.defaultProps){t=de({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function vl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:de({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ds={isMounted:function(e){return(e=e._reactInternals)?tr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ze(),o=Sn(e),i=Ut(r,o);i.payload=t,n!=null&&(i.callback=n),t=bn(e,i,o),t!==null&&(gt(t,e,o,r),Ui(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ze(),o=Sn(e),i=Ut(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=bn(e,i,o),t!==null&&(gt(t,e,o,r),Ui(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ze(),r=Sn(e),o=Ut(n,r);o.tag=2,t!=null&&(o.callback=t),t=bn(e,o,r),t!==null&&(gt(t,e,r,n),Ui(t,e,r))}};function td(e,t,n,r,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!Lo(n,r)||!Lo(o,i):!0}function Zp(e,t,n){var r=!1,o=Nn,i=t.contextType;return typeof i=="object"&&i!==null?i=st(i):(o=Ue(t)?Yn:Oe.current,r=t.contextTypes,i=(r=r!=null)?Ur(e,o):Nn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ds,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function nd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ds.enqueueReplaceState(t,t.state,null)}function yl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},kc(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=st(i):(i=Ue(t)?Yn:Oe.current,o.context=Ur(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(vl(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ds.enqueueReplaceState(o,o.state,null),fs(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Hr(e,t){try{var n="",r=t;do n+=Vg(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Ta(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function xl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var vv=typeof WeakMap=="function"?WeakMap:Map;function Jp(e,t,n){n=Ut(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){vs||(vs=!0,Tl=r),xl(e,t)},n}function em(e,t,n){n=Ut(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){xl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){xl(e,t),typeof r!="function"&&(kn===null?kn=new Set([this]):kn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function rd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new vv;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Ov.bind(null,e,t,n),t.then(e,e))}function od(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function id(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ut(-1,1),t.tag=2,bn(n,t,1))),n.lanes|=1),e)}var yv=Kt.ReactCurrentOwner,Fe=!1;function _e(e,t,n,r){t.child=e===null?Tp(t,null,n,r):Wr(t,e.child,n,r)}function sd(e,t,n,r,o){n=n.render;var i=t.ref;return Nr(t,o),r=Nc(e,t,n,r,i,o),n=Pc(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ht(e,t,o)):(ae&&n&&hc(t),t.flags|=1,_e(e,t,r,o),t.child)}function ad(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Ic(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,tm(e,t,i,r,o)):(e=Yi(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:Lo,n(s,r)&&e.ref===t.ref)return Ht(e,t,o)}return t.flags|=1,e=jn(i,r),e.ref=t.ref,e.return=t,t.child=e}function tm(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Lo(i,r)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Fe=!0);else return t.lanes=e.lanes,Ht(e,t,o)}return wl(e,t,n,r,o)}function nm(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(kr,Ye),Ye|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ne(kr,Ye),Ye|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ne(kr,Ye),Ye|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ne(kr,Ye),Ye|=r;return _e(e,t,o,n),t.child}function rm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function wl(e,t,n,r,o){var i=Ue(n)?Yn:Oe.current;return i=Ur(t,i),Nr(t,o),n=Nc(e,t,n,r,i,o),r=Pc(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ht(e,t,o)):(ae&&r&&hc(t),t.flags|=1,_e(e,t,n,o),t.child)}function ld(e,t,n,r,o){if(Ue(n)){var i=!0;as(t)}else i=!1;if(Nr(t,o),t.stateNode===null)Vi(e,t),Zp(t,n,r),yl(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var c=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=st(u):(u=Ue(n)?Yn:Oe.current,u=Ur(t,u));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||c!==u)&&nd(t,s,r,u),sn=!1;var d=t.memoizedState;s.state=d,fs(t,r,s,o),c=t.memoizedState,l!==r||d!==c||$e.current||sn?(typeof f=="function"&&(vl(t,n,f,r),c=t.memoizedState),(l=sn||td(t,n,l,r,d,c,u))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),s.props=r,s.state=c,s.context=u,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Op(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:ut(t.type,l),s.props=u,p=t.pendingProps,d=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=st(c):(c=Ue(n)?Yn:Oe.current,c=Ur(t,c));var y=n.getDerivedStateFromProps;(f=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==p||d!==c)&&nd(t,s,r,c),sn=!1,d=t.memoizedState,s.state=d,fs(t,r,s,o);var w=t.memoizedState;l!==p||d!==w||$e.current||sn?(typeof y=="function"&&(vl(t,n,y,r),w=t.memoizedState),(u=sn||td(t,n,u,r,d,w,c)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,w,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,w,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),s.props=r,s.state=w,s.context=c,r=u):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return bl(e,t,n,r,i,o)}function bl(e,t,n,r,o,i){rm(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&Yu(t,n,!1),Ht(e,t,i);r=t.stateNode,yv.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Wr(t,e.child,null,i),t.child=Wr(t,null,l,i)):_e(e,t,l,i),t.memoizedState=r.state,o&&Yu(t,n,!0),t.child}function om(e){var t=e.stateNode;t.pendingContext?Qu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Qu(e,t.context,!1),Sc(e,t.containerInfo)}function cd(e,t,n,r,o){return Br(),vc(o),t.flags|=256,_e(e,t,n,r),t.child}var kl={dehydrated:null,treeContext:null,retryLane:0};function Sl(e){return{baseLanes:e,cachePool:null,transitions:null}}function im(e,t,n){var r=t.pendingProps,o=ce.current,i=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ne(ce,o&1),e===null)return hl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=$s(s,r,0,null),e=Qn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Sl(n),t.memoizedState=kl,e):Oc(t,s));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return xv(e,t,s,r,l,o,n);if(i){i=r.fallback,s=t.mode,o=e.child,l=o.sibling;var c={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=jn(o,c),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=jn(l,i):(i=Qn(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?Sl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=kl,r}return i=e.child,e=i.sibling,r=jn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Oc(e,t){return t=$s({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ni(e,t,n,r){return r!==null&&vc(r),Wr(t,e.child,null,n),e=Oc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function xv(e,t,n,r,o,i,s){if(n)return t.flags&256?(t.flags&=-257,r=Ta(Error(T(422))),Ni(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=$s({mode:"visible",children:r.children},o,0,null),i=Qn(i,o,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Wr(t,e.child,null,s),t.child.memoizedState=Sl(s),t.memoizedState=kl,i);if(!(t.mode&1))return Ni(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(T(419)),r=Ta(i,r,void 0),Ni(e,t,s,r)}if(l=(s&e.childLanes)!==0,Fe||l){if(r=be,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Vt(e,o),gt(r,e,o,-1))}return Dc(),r=Ta(Error(T(421))),Ni(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Mv.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ge=wn(o.nextSibling),Xe=t,ae=!0,mt=null,e!==null&&(nt[rt++]=Ft,nt[rt++]=$t,nt[rt++]=Kn,Ft=e.id,$t=e.overflow,Kn=t),t=Oc(t,r.children),t.flags|=4096,t)}function ud(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),gl(e.return,t,n)}function Ra(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function sm(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(_e(e,t,r.children,n),r=ce.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ud(e,n,t);else if(e.tag===19)ud(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ne(ce,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ps(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Ra(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ps(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Ra(t,!0,n,null,i);break;case"together":Ra(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Vi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ht(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Xn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,n=jn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=jn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function wv(e,t,n){switch(t.tag){case 3:om(t),Br();break;case 5:Mp(t);break;case 1:Ue(t.type)&&as(t);break;case 4:Sc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ne(us,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ne(ce,ce.current&1),t.flags|=128,null):n&t.child.childLanes?im(e,t,n):(ne(ce,ce.current&1),e=Ht(e,t,n),e!==null?e.sibling:null);ne(ce,ce.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return sm(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ne(ce,ce.current),r)break;return null;case 22:case 23:return t.lanes=0,nm(e,t,n)}return Ht(e,t,n)}var am,jl,lm,cm;am=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};jl=function(){};lm=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,$n(Rt.current);var i=null;switch(n){case"input":o=Qa(e,o),r=Qa(e,r),i=[];break;case"select":o=de({},o,{value:void 0}),r=de({},r,{value:void 0}),i=[];break;case"textarea":o=Ga(e,o),r=Ga(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=is)}qa(n,r);var s;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(To.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var c=r[u];if(l=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&l[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(i||(i=[]),i.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(i=i||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(To.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&ie("scroll",e),i||l===c||(i=[])):(i=i||[]).push(u,c))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};cm=function(e,t,n,r){n!==r&&(t.flags|=4)};function uo(e,t){if(!ae)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function bv(e,t,n){var r=t.pendingProps;switch(gc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(t),null;case 1:return Ue(t.type)&&ss(),Pe(t),null;case 3:return r=t.stateNode,Vr(),se($e),se(Oe),Cc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ci(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,mt!==null&&(Ml(mt),mt=null))),jl(e,t),Pe(t),null;case 5:jc(t);var o=$n(Uo.current);if(n=t.type,e!==null&&t.stateNode!=null)lm(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(T(166));return Pe(t),null}if(e=$n(Rt.current),Ci(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Pt]=t,r[Fo]=i,e=(t.mode&1)!==0,n){case"dialog":ie("cancel",r),ie("close",r);break;case"iframe":case"object":case"embed":ie("load",r);break;case"video":case"audio":for(o=0;o<yo.length;o++)ie(yo[o],r);break;case"source":ie("error",r);break;case"img":case"image":case"link":ie("error",r),ie("load",r);break;case"details":ie("toggle",r);break;case"input":xu(r,i),ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ie("invalid",r);break;case"textarea":bu(r,i),ie("invalid",r)}qa(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var l=i[s];s==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&ji(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&ji(r.textContent,l,e),o=["children",""+l]):To.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&ie("scroll",r)}switch(n){case"input":gi(r),wu(r,i,!0);break;case"textarea":gi(r),ku(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=is)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Df(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Pt]=t,e[Fo]=r,am(e,t,!1,!1),t.stateNode=e;e:{switch(s=Za(n,r),n){case"dialog":ie("cancel",e),ie("close",e),o=r;break;case"iframe":case"object":case"embed":ie("load",e),o=r;break;case"video":case"audio":for(o=0;o<yo.length;o++)ie(yo[o],e);o=r;break;case"source":ie("error",e),o=r;break;case"img":case"image":case"link":ie("error",e),ie("load",e),o=r;break;case"details":ie("toggle",e),o=r;break;case"input":xu(e,r),o=Qa(e,r),ie("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=de({},r,{value:void 0}),ie("invalid",e);break;case"textarea":bu(e,r),o=Ga(e,r),ie("invalid",e);break;default:o=r}qa(n,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var c=l[i];i==="style"?$f(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&If(e,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ro(e,c):typeof c=="number"&&Ro(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(To.hasOwnProperty(i)?c!=null&&i==="onScroll"&&ie("scroll",e):c!=null&&tc(e,i,c,s))}switch(n){case"input":gi(e),wu(e,r,!1);break;case"textarea":gi(e),ku(e);break;case"option":r.value!=null&&e.setAttribute("value",""+En(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Sr(e,!!r.multiple,i,!1):r.defaultValue!=null&&Sr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=is)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Pe(t),null;case 6:if(e&&t.stateNode!=null)cm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(T(166));if(n=$n(Uo.current),$n(Rt.current),Ci(t)){if(r=t.stateNode,n=t.memoizedProps,r[Pt]=t,(i=r.nodeValue!==n)&&(e=Xe,e!==null))switch(e.tag){case 3:ji(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ji(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Pt]=t,t.stateNode=r}return Pe(t),null;case 13:if(se(ce),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ae&&Ge!==null&&t.mode&1&&!(t.flags&128))Np(),Br(),t.flags|=98560,i=!1;else if(i=Ci(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(T(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(T(317));i[Pt]=t}else Br(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Pe(t),i=!1}else mt!==null&&(Ml(mt),mt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ce.current&1?xe===0&&(xe=3):Dc())),t.updateQueue!==null&&(t.flags|=4),Pe(t),null);case 4:return Vr(),jl(e,t),e===null&&Do(t.stateNode.containerInfo),Pe(t),null;case 10:return wc(t.type._context),Pe(t),null;case 17:return Ue(t.type)&&ss(),Pe(t),null;case 19:if(se(ce),i=t.memoizedState,i===null)return Pe(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)uo(i,!1);else{if(xe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=ps(e),s!==null){for(t.flags|=128,uo(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ne(ce,ce.current&1|2),t.child}e=e.sibling}i.tail!==null&&me()>Qr&&(t.flags|=128,r=!0,uo(i,!1),t.lanes=4194304)}else{if(!r)if(e=ps(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),uo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!ae)return Pe(t),null}else 2*me()-i.renderingStartTime>Qr&&n!==1073741824&&(t.flags|=128,r=!0,uo(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=me(),t.sibling=null,n=ce.current,ne(ce,r?n&1|2:n&1),t):(Pe(t),null);case 22:case 23:return Lc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ye&1073741824&&(Pe(t),t.subtreeFlags&6&&(t.flags|=8192)):Pe(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function kv(e,t){switch(gc(t),t.tag){case 1:return Ue(t.type)&&ss(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Vr(),se($e),se(Oe),Cc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return jc(t),null;case 13:if(se(ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));Br()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return se(ce),null;case 4:return Vr(),null;case 10:return wc(t.type._context),null;case 22:case 23:return Lc(),null;case 24:return null;default:return null}}var Pi=!1,Re=!1,Sv=typeof WeakSet=="function"?WeakSet:Set,A=null;function br(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){pe(e,t,r)}else n.current=null}function Cl(e,t,n){try{n()}catch(r){pe(e,t,r)}}var dd=!1;function jv(e,t){if(ll=ns,e=mp(),mc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,l=-1,c=-1,u=0,f=0,p=e,d=null;t:for(;;){for(var y;p!==n||o!==0&&p.nodeType!==3||(l=s+o),p!==i||r!==0&&p.nodeType!==3||(c=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(y=p.firstChild)!==null;)d=p,p=y;for(;;){if(p===e)break t;if(d===n&&++u===o&&(l=s),d===i&&++f===r&&(c=s),(y=p.nextSibling)!==null)break;p=d,d=p.parentNode}p=y}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(cl={focusedElem:e,selectionRange:n},ns=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var v=w.memoizedProps,b=w.memoizedState,h=t.stateNode,m=h.getSnapshotBeforeUpdate(t.elementType===t.type?v:ut(t.type,v),b);h.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(k){pe(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return w=dd,dd=!1,w}function Co(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Cl(t,n,i)}o=o.next}while(o!==r)}}function Is(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function El(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function um(e){var t=e.alternate;t!==null&&(e.alternate=null,um(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Pt],delete t[Fo],delete t[fl],delete t[sv],delete t[av])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function dm(e){return e.tag===5||e.tag===3||e.tag===4}function fd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||dm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Nl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=is));else if(r!==4&&(e=e.child,e!==null))for(Nl(e,t,n),e=e.sibling;e!==null;)Nl(e,t,n),e=e.sibling}function Pl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Pl(e,t,n),e=e.sibling;e!==null;)Pl(e,t,n),e=e.sibling}var Se=null,pt=!1;function en(e,t,n){for(n=n.child;n!==null;)fm(e,t,n),n=n.sibling}function fm(e,t,n){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(Rs,n)}catch{}switch(n.tag){case 5:Re||br(n,t);case 6:var r=Se,o=pt;Se=null,en(e,t,n),Se=r,pt=o,Se!==null&&(pt?(e=Se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Se.removeChild(n.stateNode));break;case 18:Se!==null&&(pt?(e=Se,n=n.stateNode,e.nodeType===8?Sa(e.parentNode,n):e.nodeType===1&&Sa(e,n),Ao(e)):Sa(Se,n.stateNode));break;case 4:r=Se,o=pt,Se=n.stateNode.containerInfo,pt=!0,en(e,t,n),Se=r,pt=o;break;case 0:case 11:case 14:case 15:if(!Re&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&Cl(n,t,s),o=o.next}while(o!==r)}en(e,t,n);break;case 1:if(!Re&&(br(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){pe(n,t,l)}en(e,t,n);break;case 21:en(e,t,n);break;case 22:n.mode&1?(Re=(r=Re)||n.memoizedState!==null,en(e,t,n),Re=r):en(e,t,n);break;default:en(e,t,n)}}function pd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Sv),t.forEach(function(r){var o=_v.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function ct(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:Se=l.stateNode,pt=!1;break e;case 3:Se=l.stateNode.containerInfo,pt=!0;break e;case 4:Se=l.stateNode.containerInfo,pt=!0;break e}l=l.return}if(Se===null)throw Error(T(160));fm(i,s,o),Se=null,pt=!1;var c=o.alternate;c!==null&&(c.return=null),o.return=null}catch(u){pe(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)pm(t,e),t=t.sibling}function pm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ct(t,e),St(e),r&4){try{Co(3,e,e.return),Is(3,e)}catch(v){pe(e,e.return,v)}try{Co(5,e,e.return)}catch(v){pe(e,e.return,v)}}break;case 1:ct(t,e),St(e),r&512&&n!==null&&br(n,n.return);break;case 5:if(ct(t,e),St(e),r&512&&n!==null&&br(n,n.return),e.flags&32){var o=e.stateNode;try{Ro(o,"")}catch(v){pe(e,e.return,v)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&zf(o,i),Za(l,s);var u=Za(l,i);for(s=0;s<c.length;s+=2){var f=c[s],p=c[s+1];f==="style"?$f(o,p):f==="dangerouslySetInnerHTML"?If(o,p):f==="children"?Ro(o,p):tc(o,f,p,u)}switch(l){case"input":Ya(o,i);break;case"textarea":Lf(o,i);break;case"select":var d=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?Sr(o,!!i.multiple,y,!1):d!==!!i.multiple&&(i.defaultValue!=null?Sr(o,!!i.multiple,i.defaultValue,!0):Sr(o,!!i.multiple,i.multiple?[]:"",!1))}o[Fo]=i}catch(v){pe(e,e.return,v)}}break;case 6:if(ct(t,e),St(e),r&4){if(e.stateNode===null)throw Error(T(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(v){pe(e,e.return,v)}}break;case 3:if(ct(t,e),St(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ao(t.containerInfo)}catch(v){pe(e,e.return,v)}break;case 4:ct(t,e),St(e);break;case 13:ct(t,e),St(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ac=me())),r&4&&pd(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Re=(u=Re)||f,ct(t,e),Re=u):ct(t,e),St(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(A=e,f=e.child;f!==null;){for(p=A=f;A!==null;){switch(d=A,y=d.child,d.tag){case 0:case 11:case 14:case 15:Co(4,d,d.return);break;case 1:br(d,d.return);var w=d.stateNode;if(typeof w.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(v){pe(r,n,v)}}break;case 5:br(d,d.return);break;case 22:if(d.memoizedState!==null){hd(p);continue}}y!==null?(y.return=d,A=y):hd(p)}f=f.sibling}e:for(f=null,p=e;;){if(p.tag===5){if(f===null){f=p;try{o=p.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=p.stateNode,c=p.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Ff("display",s))}catch(v){pe(e,e.return,v)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(v){pe(e,e.return,v)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:ct(t,e),St(e),r&4&&pd(e);break;case 21:break;default:ct(t,e),St(e)}}function St(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(dm(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Ro(o,""),r.flags&=-33);var i=fd(e);Pl(e,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,l=fd(e);Nl(e,l,s);break;default:throw Error(T(161))}}catch(c){pe(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Cv(e,t,n){A=e,mm(e)}function mm(e,t,n){for(var r=(e.mode&1)!==0;A!==null;){var o=A,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||Pi;if(!s){var l=o.alternate,c=l!==null&&l.memoizedState!==null||Re;l=Pi;var u=Re;if(Pi=s,(Re=c)&&!u)for(A=o;A!==null;)s=A,c=s.child,s.tag===22&&s.memoizedState!==null?gd(o):c!==null?(c.return=s,A=c):gd(o);for(;i!==null;)A=i,mm(i),i=i.sibling;A=o,Pi=l,Re=u}md(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,A=i):md(e)}}function md(e){for(;A!==null;){var t=A;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Re||Is(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Re)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:ut(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Zu(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Zu(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Ao(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}Re||t.flags&512&&El(t)}catch(d){pe(t,t.return,d)}}if(t===e){A=null;break}if(n=t.sibling,n!==null){n.return=t.return,A=n;break}A=t.return}}function hd(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var n=t.sibling;if(n!==null){n.return=t.return,A=n;break}A=t.return}}function gd(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Is(4,t)}catch(c){pe(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(c){pe(t,o,c)}}var i=t.return;try{El(t)}catch(c){pe(t,i,c)}break;case 5:var s=t.return;try{El(t)}catch(c){pe(t,s,c)}}}catch(c){pe(t,t.return,c)}if(t===e){A=null;break}var l=t.sibling;if(l!==null){l.return=t.return,A=l;break}A=t.return}}var Ev=Math.ceil,gs=Kt.ReactCurrentDispatcher,Mc=Kt.ReactCurrentOwner,it=Kt.ReactCurrentBatchConfig,q=0,be=null,he=null,je=0,Ye=0,kr=_n(0),xe=0,Ho=null,Xn=0,Fs=0,_c=0,Eo=null,Ie=null,Ac=0,Qr=1/0,Dt=null,vs=!1,Tl=null,kn=null,Ti=!1,hn=null,ys=0,No=0,Rl=null,Hi=-1,Qi=0;function ze(){return q&6?me():Hi!==-1?Hi:Hi=me()}function Sn(e){return e.mode&1?q&2&&je!==0?je&-je:cv.transition!==null?(Qi===0&&(Qi=Zf()),Qi):(e=ee,e!==0||(e=window.event,e=e===void 0?16:ip(e.type)),e):1}function gt(e,t,n,r){if(50<No)throw No=0,Rl=null,Error(T(185));ti(e,n,r),(!(q&2)||e!==be)&&(e===be&&(!(q&2)&&(Fs|=n),xe===4&&ln(e,je)),Be(e,r),n===1&&q===0&&!(t.mode&1)&&(Qr=me()+500,zs&&An()))}function Be(e,t){var n=e.callbackNode;c0(e,t);var r=ts(e,e===be?je:0);if(r===0)n!==null&&Cu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Cu(n),t===1)e.tag===0?lv(vd.bind(null,e)):jp(vd.bind(null,e)),ov(function(){!(q&6)&&An()}),n=null;else{switch(Jf(r)){case 1:n=sc;break;case 4:n=Xf;break;case 16:n=es;break;case 536870912:n=qf;break;default:n=es}n=km(n,hm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function hm(e,t){if(Hi=-1,Qi=0,q&6)throw Error(T(327));var n=e.callbackNode;if(Pr()&&e.callbackNode!==n)return null;var r=ts(e,e===be?je:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=xs(e,r);else{t=r;var o=q;q|=2;var i=vm();(be!==e||je!==t)&&(Dt=null,Qr=me()+500,Hn(e,t));do try{Tv();break}catch(l){gm(e,l)}while(!0);xc(),gs.current=i,q=o,he!==null?t=0:(be=null,je=0,t=xe)}if(t!==0){if(t===2&&(o=rl(e),o!==0&&(r=o,t=Ol(e,o))),t===1)throw n=Ho,Hn(e,0),ln(e,r),Be(e,me()),n;if(t===6)ln(e,r);else{if(o=e.current.alternate,!(r&30)&&!Nv(o)&&(t=xs(e,r),t===2&&(i=rl(e),i!==0&&(r=i,t=Ol(e,i))),t===1))throw n=Ho,Hn(e,0),ln(e,r),Be(e,me()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(T(345));case 2:Dn(e,Ie,Dt);break;case 3:if(ln(e,r),(r&130023424)===r&&(t=Ac+500-me(),10<t)){if(ts(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ze(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=dl(Dn.bind(null,e,Ie,Dt),t);break}Dn(e,Ie,Dt);break;case 4:if(ln(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-ht(r);i=1<<s,s=t[s],s>o&&(o=s),r&=~i}if(r=o,r=me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ev(r/1960))-r,10<r){e.timeoutHandle=dl(Dn.bind(null,e,Ie,Dt),r);break}Dn(e,Ie,Dt);break;case 5:Dn(e,Ie,Dt);break;default:throw Error(T(329))}}}return Be(e,me()),e.callbackNode===n?hm.bind(null,e):null}function Ol(e,t){var n=Eo;return e.current.memoizedState.isDehydrated&&(Hn(e,t).flags|=256),e=xs(e,t),e!==2&&(t=Ie,Ie=n,t!==null&&Ml(t)),e}function Ml(e){Ie===null?Ie=e:Ie.push.apply(Ie,e)}function Nv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!vt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ln(e,t){for(t&=~_c,t&=~Fs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ht(t),r=1<<n;e[n]=-1,t&=~r}}function vd(e){if(q&6)throw Error(T(327));Pr();var t=ts(e,0);if(!(t&1))return Be(e,me()),null;var n=xs(e,t);if(e.tag!==0&&n===2){var r=rl(e);r!==0&&(t=r,n=Ol(e,r))}if(n===1)throw n=Ho,Hn(e,0),ln(e,t),Be(e,me()),n;if(n===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Dn(e,Ie,Dt),Be(e,me()),null}function zc(e,t){var n=q;q|=1;try{return e(t)}finally{q=n,q===0&&(Qr=me()+500,zs&&An())}}function qn(e){hn!==null&&hn.tag===0&&!(q&6)&&Pr();var t=q;q|=1;var n=it.transition,r=ee;try{if(it.transition=null,ee=1,e)return e()}finally{ee=r,it.transition=n,q=t,!(q&6)&&An()}}function Lc(){Ye=kr.current,se(kr)}function Hn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,rv(n)),he!==null)for(n=he.return;n!==null;){var r=n;switch(gc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ss();break;case 3:Vr(),se($e),se(Oe),Cc();break;case 5:jc(r);break;case 4:Vr();break;case 13:se(ce);break;case 19:se(ce);break;case 10:wc(r.type._context);break;case 22:case 23:Lc()}n=n.return}if(be=e,he=e=jn(e.current,null),je=Ye=t,xe=0,Ho=null,_c=Fs=Xn=0,Ie=Eo=null,Fn!==null){for(t=0;t<Fn.length;t++)if(n=Fn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}Fn=null}return e}function gm(e,t){do{var n=he;try{if(xc(),Bi.current=hs,ms){for(var r=ue.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ms=!1}if(Gn=0,we=ve=ue=null,jo=!1,Bo=0,Mc.current=null,n===null||n.return===null){xe=1,Ho=t,he=null;break}e:{var i=e,s=n.return,l=n,c=t;if(t=je,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var y=od(s);if(y!==null){y.flags&=-257,id(y,s,l,i,t),y.mode&1&&rd(i,u,t),t=y,c=u;var w=t.updateQueue;if(w===null){var v=new Set;v.add(c),t.updateQueue=v}else w.add(c);break e}else{if(!(t&1)){rd(i,u,t),Dc();break e}c=Error(T(426))}}else if(ae&&l.mode&1){var b=od(s);if(b!==null){!(b.flags&65536)&&(b.flags|=256),id(b,s,l,i,t),vc(Hr(c,l));break e}}i=c=Hr(c,l),xe!==4&&(xe=2),Eo===null?Eo=[i]:Eo.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=Jp(i,c,t);qu(i,h);break e;case 1:l=c;var m=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof m.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(kn===null||!kn.has(g)))){i.flags|=65536,t&=-t,i.lanes|=t;var k=em(i,l,t);qu(i,k);break e}}i=i.return}while(i!==null)}xm(n)}catch(S){t=S,he===n&&n!==null&&(he=n=n.return);continue}break}while(!0)}function vm(){var e=gs.current;return gs.current=hs,e===null?hs:e}function Dc(){(xe===0||xe===3||xe===2)&&(xe=4),be===null||!(Xn&268435455)&&!(Fs&268435455)||ln(be,je)}function xs(e,t){var n=q;q|=2;var r=vm();(be!==e||je!==t)&&(Dt=null,Hn(e,t));do try{Pv();break}catch(o){gm(e,o)}while(!0);if(xc(),q=n,gs.current=r,he!==null)throw Error(T(261));return be=null,je=0,xe}function Pv(){for(;he!==null;)ym(he)}function Tv(){for(;he!==null&&!e0();)ym(he)}function ym(e){var t=bm(e.alternate,e,Ye);e.memoizedProps=e.pendingProps,t===null?xm(e):he=t,Mc.current=null}function xm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=kv(n,t),n!==null){n.flags&=32767,he=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{xe=6,he=null;return}}else if(n=bv(n,t,Ye),n!==null){he=n;return}if(t=t.sibling,t!==null){he=t;return}he=t=e}while(t!==null);xe===0&&(xe=5)}function Dn(e,t,n){var r=ee,o=it.transition;try{it.transition=null,ee=1,Rv(e,t,n,r)}finally{it.transition=o,ee=r}return null}function Rv(e,t,n,r){do Pr();while(hn!==null);if(q&6)throw Error(T(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(u0(e,i),e===be&&(he=be=null,je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ti||(Ti=!0,km(es,function(){return Pr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=it.transition,it.transition=null;var s=ee;ee=1;var l=q;q|=4,Mc.current=null,jv(e,n),pm(n,e),X0(cl),ns=!!ll,cl=ll=null,e.current=n,Cv(n),t0(),q=l,ee=s,it.transition=i}else e.current=n;if(Ti&&(Ti=!1,hn=e,ys=o),i=e.pendingLanes,i===0&&(kn=null),o0(n.stateNode),Be(e,me()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(vs)throw vs=!1,e=Tl,Tl=null,e;return ys&1&&e.tag!==0&&Pr(),i=e.pendingLanes,i&1?e===Rl?No++:(No=0,Rl=e):No=0,An(),null}function Pr(){if(hn!==null){var e=Jf(ys),t=it.transition,n=ee;try{if(it.transition=null,ee=16>e?16:e,hn===null)var r=!1;else{if(e=hn,hn=null,ys=0,q&6)throw Error(T(331));var o=q;for(q|=4,A=e.current;A!==null;){var i=A,s=i.child;if(A.flags&16){var l=i.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(A=u;A!==null;){var f=A;switch(f.tag){case 0:case 11:case 15:Co(8,f,i)}var p=f.child;if(p!==null)p.return=f,A=p;else for(;A!==null;){f=A;var d=f.sibling,y=f.return;if(um(f),f===u){A=null;break}if(d!==null){d.return=y,A=d;break}A=y}}}var w=i.alternate;if(w!==null){var v=w.child;if(v!==null){w.child=null;do{var b=v.sibling;v.sibling=null,v=b}while(v!==null)}}A=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,A=s;else e:for(;A!==null;){if(i=A,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Co(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,A=h;break e}A=i.return}}var m=e.current;for(A=m;A!==null;){s=A;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,A=g;else e:for(s=m;A!==null;){if(l=A,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Is(9,l)}}catch(S){pe(l,l.return,S)}if(l===s){A=null;break e}var k=l.sibling;if(k!==null){k.return=l.return,A=k;break e}A=l.return}}if(q=o,An(),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(Rs,e)}catch{}r=!0}return r}finally{ee=n,it.transition=t}}return!1}function yd(e,t,n){t=Hr(n,t),t=Jp(e,t,1),e=bn(e,t,1),t=ze(),e!==null&&(ti(e,1,t),Be(e,t))}function pe(e,t,n){if(e.tag===3)yd(e,e,n);else for(;t!==null;){if(t.tag===3){yd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(kn===null||!kn.has(r))){e=Hr(n,e),e=em(t,e,1),t=bn(t,e,1),e=ze(),t!==null&&(ti(t,1,e),Be(t,e));break}}t=t.return}}function Ov(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ze(),e.pingedLanes|=e.suspendedLanes&n,be===e&&(je&n)===n&&(xe===4||xe===3&&(je&130023424)===je&&500>me()-Ac?Hn(e,0):_c|=n),Be(e,t)}function wm(e,t){t===0&&(e.mode&1?(t=xi,xi<<=1,!(xi&130023424)&&(xi=4194304)):t=1);var n=ze();e=Vt(e,t),e!==null&&(ti(e,t,n),Be(e,n))}function Mv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),wm(e,n)}function _v(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(t),wm(e,n)}var bm;bm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||$e.current)Fe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Fe=!1,wv(e,t,n);Fe=!!(e.flags&131072)}else Fe=!1,ae&&t.flags&1048576&&Cp(t,cs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Vi(e,t),e=t.pendingProps;var o=Ur(t,Oe.current);Nr(t,n),o=Nc(null,t,r,e,o,n);var i=Pc();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ue(r)?(i=!0,as(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,kc(t),o.updater=Ds,t.stateNode=o,o._reactInternals=t,yl(t,r,e,n),t=bl(null,t,r,!0,i,n)):(t.tag=0,ae&&i&&hc(t),_e(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Vi(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=zv(r),e=ut(r,e),o){case 0:t=wl(null,t,r,e,n);break e;case 1:t=ld(null,t,r,e,n);break e;case 11:t=sd(null,t,r,e,n);break e;case 14:t=ad(null,t,r,ut(r.type,e),n);break e}throw Error(T(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ut(r,o),wl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ut(r,o),ld(e,t,r,o,n);case 3:e:{if(om(t),e===null)throw Error(T(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Op(e,t),fs(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Hr(Error(T(423)),t),t=cd(e,t,r,n,o);break e}else if(r!==o){o=Hr(Error(T(424)),t),t=cd(e,t,r,n,o);break e}else for(Ge=wn(t.stateNode.containerInfo.firstChild),Xe=t,ae=!0,mt=null,n=Tp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Br(),r===o){t=Ht(e,t,n);break e}_e(e,t,r,n)}t=t.child}return t;case 5:return Mp(t),e===null&&hl(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,ul(r,o)?s=null:i!==null&&ul(r,i)&&(t.flags|=32),rm(e,t),_e(e,t,s,n),t.child;case 6:return e===null&&hl(t),null;case 13:return im(e,t,n);case 4:return Sc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Wr(t,null,r,n):_e(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ut(r,o),sd(e,t,r,o,n);case 7:return _e(e,t,t.pendingProps,n),t.child;case 8:return _e(e,t,t.pendingProps.children,n),t.child;case 12:return _e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,ne(us,r._currentValue),r._currentValue=s,i!==null)if(vt(i.value,s)){if(i.children===o.children&&!$e.current){t=Ht(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){s=i.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=Ut(-1,n&-n),c.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?c.next=c:(c.next=f.next,f.next=c),u.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),gl(i.return,n,t),l.lanes|=n;break}c=c.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(T(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),gl(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}_e(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Nr(t,n),o=st(o),r=r(o),t.flags|=1,_e(e,t,r,n),t.child;case 14:return r=t.type,o=ut(r,t.pendingProps),o=ut(r.type,o),ad(e,t,r,o,n);case 15:return tm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ut(r,o),Vi(e,t),t.tag=1,Ue(r)?(e=!0,as(t)):e=!1,Nr(t,n),Zp(t,r,o),yl(t,r,o,n),bl(null,t,r,!0,e,n);case 19:return sm(e,t,n);case 22:return nm(e,t,n)}throw Error(T(156,t.tag))};function km(e,t){return Gf(e,t)}function Av(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(e,t,n,r){return new Av(e,t,n,r)}function Ic(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zv(e){if(typeof e=="function")return Ic(e)?1:0;if(e!=null){if(e=e.$$typeof,e===rc)return 11;if(e===oc)return 14}return 2}function jn(e,t){var n=e.alternate;return n===null?(n=ot(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Yi(e,t,n,r,o,i){var s=2;if(r=e,typeof e=="function")Ic(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case fr:return Qn(n.children,o,i,t);case nc:s=8,o|=8;break;case Ba:return e=ot(12,n,t,o|2),e.elementType=Ba,e.lanes=i,e;case Wa:return e=ot(13,n,t,o),e.elementType=Wa,e.lanes=i,e;case Va:return e=ot(19,n,t,o),e.elementType=Va,e.lanes=i,e;case Mf:return $s(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Rf:s=10;break e;case Of:s=9;break e;case rc:s=11;break e;case oc:s=14;break e;case on:s=16,r=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=ot(s,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Qn(e,t,n,r){return e=ot(7,e,r,t),e.lanes=n,e}function $s(e,t,n,r){return e=ot(22,e,r,t),e.elementType=Mf,e.lanes=n,e.stateNode={isHidden:!1},e}function Oa(e,t,n){return e=ot(6,e,null,t),e.lanes=n,e}function Ma(e,t,n){return t=ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Lv(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fa(0),this.expirationTimes=fa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fa(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Fc(e,t,n,r,o,i,s,l,c){return e=new Lv(e,t,n,l,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=ot(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},kc(i),e}function Dv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:dr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Sm(e){if(!e)return Nn;e=e._reactInternals;e:{if(tr(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ue(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var n=e.type;if(Ue(n))return Sp(e,n,t)}return t}function jm(e,t,n,r,o,i,s,l,c){return e=Fc(n,r,!0,e,o,i,s,l,c),e.context=Sm(null),n=e.current,r=ze(),o=Sn(n),i=Ut(r,o),i.callback=t??null,bn(n,i,o),e.current.lanes=o,ti(e,o,r),Be(e,r),e}function Us(e,t,n,r){var o=t.current,i=ze(),s=Sn(o);return n=Sm(n),t.context===null?t.context=n:t.pendingContext=n,t=Ut(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=bn(o,t,s),e!==null&&(gt(e,o,s,i),Ui(e,o,s)),s}function ws(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function xd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function $c(e,t){xd(e,t),(e=e.alternate)&&xd(e,t)}function Iv(){return null}var Cm=typeof reportError=="function"?reportError:function(e){console.error(e)};function Uc(e){this._internalRoot=e}Bs.prototype.render=Uc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));Us(e,t,null,null)};Bs.prototype.unmount=Uc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qn(function(){Us(null,e,null,null)}),t[Wt]=null}};function Bs(e){this._internalRoot=e}Bs.prototype.unstable_scheduleHydration=function(e){if(e){var t=np();e={blockedOn:null,target:e,priority:t};for(var n=0;n<an.length&&t!==0&&t<an[n].priority;n++);an.splice(n,0,e),n===0&&op(e)}};function Bc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ws(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function wd(){}function Fv(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=ws(s);i.call(u)}}var s=jm(t,r,e,0,null,!1,!1,"",wd);return e._reactRootContainer=s,e[Wt]=s.current,Do(e.nodeType===8?e.parentNode:e),qn(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var u=ws(c);l.call(u)}}var c=Fc(e,0,!1,null,null,!1,!1,"",wd);return e._reactRootContainer=c,e[Wt]=c.current,Do(e.nodeType===8?e.parentNode:e),qn(function(){Us(t,c,n,r)}),c}function Vs(e,t,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var l=o;o=function(){var c=ws(s);l.call(c)}}Us(t,s,e,o)}else s=Fv(n,t,e,o,r);return ws(s)}ep=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=vo(t.pendingLanes);n!==0&&(ac(t,n|1),Be(t,me()),!(q&6)&&(Qr=me()+500,An()))}break;case 13:qn(function(){var r=Vt(e,1);if(r!==null){var o=ze();gt(r,e,1,o)}}),$c(e,1)}};lc=function(e){if(e.tag===13){var t=Vt(e,134217728);if(t!==null){var n=ze();gt(t,e,134217728,n)}$c(e,134217728)}};tp=function(e){if(e.tag===13){var t=Sn(e),n=Vt(e,t);if(n!==null){var r=ze();gt(n,e,t,r)}$c(e,t)}};np=function(){return ee};rp=function(e,t){var n=ee;try{return ee=e,t()}finally{ee=n}};el=function(e,t,n){switch(t){case"input":if(Ya(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=As(r);if(!o)throw Error(T(90));Af(r),Ya(r,o)}}}break;case"textarea":Lf(e,n);break;case"select":t=n.value,t!=null&&Sr(e,!!n.multiple,t,!1)}};Wf=zc;Vf=qn;var $v={usingClientEntryPoint:!1,Events:[ri,gr,As,Uf,Bf,zc]},fo={findFiberByHostInstance:In,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Uv={bundleType:fo.bundleType,version:fo.version,rendererPackageName:fo.rendererPackageName,rendererConfig:fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Yf(e),e===null?null:e.stateNode},findFiberByHostInstance:fo.findFiberByHostInstance||Iv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ri=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ri.isDisabled&&Ri.supportsFiber)try{Rs=Ri.inject(Uv),Tt=Ri}catch{}}Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$v;Je.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bc(t))throw Error(T(200));return Dv(e,t,null,n)};Je.createRoot=function(e,t){if(!Bc(e))throw Error(T(299));var n=!1,r="",o=Cm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Fc(e,1,!1,null,null,n,!1,r,o),e[Wt]=t.current,Do(e.nodeType===8?e.parentNode:e),new Uc(t)};Je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=Yf(t),e=e===null?null:e.stateNode,e};Je.flushSync=function(e){return qn(e)};Je.hydrate=function(e,t,n){if(!Ws(t))throw Error(T(200));return Vs(null,e,t,!0,n)};Je.hydrateRoot=function(e,t,n){if(!Bc(e))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=Cm;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=jm(t,null,e,1,n??null,o,!1,i,s),e[Wt]=t.current,Do(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Bs(t)};Je.render=function(e,t,n){if(!Ws(t))throw Error(T(200));return Vs(null,e,t,!1,n)};Je.unmountComponentAtNode=function(e){if(!Ws(e))throw Error(T(40));return e._reactRootContainer?(qn(function(){Vs(null,null,e,!1,function(){e._reactRootContainer=null,e[Wt]=null})}),!0):!1};Je.unstable_batchedUpdates=zc;Je.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ws(n))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return Vs(e,t,n,!1,r)};Je.version="18.3.1-next-f1338f8080-20240426";function Em(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Em)}catch(e){console.error(e)}}Em(),Ef.exports=Je;var ii=Ef.exports;const Nm=mf(ii);var Pm,bd=ii;Pm=bd.createRoot,bd.hydrateRoot;const Bv=1,Wv=1e6;let _a=0;function Vv(){return _a=(_a+1)%Number.MAX_SAFE_INTEGER,_a.toString()}const Aa=new Map,kd=e=>{if(Aa.has(e))return;const t=setTimeout(()=>{Aa.delete(e),Po({type:"REMOVE_TOAST",toastId:e})},Wv);Aa.set(e,t)},Hv=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,Bv)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(n=>n.id===t.toast.id?{...n,...t.toast}:n)};case"DISMISS_TOAST":{const{toastId:n}=t;return n?kd(n):e.toasts.forEach(r=>{kd(r.id)}),{...e,toasts:e.toasts.map(r=>r.id===n||n===void 0?{...r,open:!1}:r)}}case"REMOVE_TOAST":return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(n=>n.id!==t.toastId)}}},Ki=[];let Gi={toasts:[]};function Po(e){Gi=Hv(Gi,e),Ki.forEach(t=>{t(Gi)})}function Qv({...e}){const t=Vv(),n=o=>Po({type:"UPDATE_TOAST",toast:{...o,id:t}}),r=()=>Po({type:"DISMISS_TOAST",toastId:t});return Po({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:o=>{o||r()}}}),{id:t,dismiss:r,update:n}}function Yv(){const[e,t]=x.useState(Gi);return x.useEffect(()=>(Ki.push(t),()=>{const n=Ki.indexOf(t);n>-1&&Ki.splice(n,1)}),[e]),{...e,toast:Qv,dismiss:n=>Po({type:"DISMISS_TOAST",toastId:n})}}function ye(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e==null||e(o),n===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function Kv(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function Tm(...e){return t=>e.forEach(n=>Kv(n,t))}function yt(...e){return x.useCallback(Tm(...e),e)}function Gv(e,t=[]){let n=[];function r(i,s){const l=x.createContext(s),c=n.length;n=[...n,s];function u(p){const{scope:d,children:y,...w}=p,v=(d==null?void 0:d[e][c])||l,b=x.useMemo(()=>w,Object.values(w));return a.jsx(v.Provider,{value:b,children:y})}function f(p,d){const y=(d==null?void 0:d[e][c])||l,w=x.useContext(y);if(w)return w;if(s!==void 0)return s;throw new Error(`\`${p}\` must be used within \`${i}\``)}return u.displayName=i+"Provider",[u,f]}const o=()=>{const i=n.map(s=>x.createContext(s));return function(l){const c=(l==null?void 0:l[e])||i;return x.useMemo(()=>({[`__scope${e}`]:{...l,[e]:c}}),[l,c])}};return o.scopeName=e,[r,Xv(o,...t)]}function Xv(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(i){const s=r.reduce((l,{useScope:c,scopeName:u})=>{const p=c(i)[`__scope${u}`];return{...l,...p}},{});return x.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])}};return n.scopeName=t.scopeName,n}var bs=x.forwardRef((e,t)=>{const{children:n,...r}=e,o=x.Children.toArray(n),i=o.find(qv);if(i){const s=i.props.children,l=o.map(c=>c===i?x.Children.count(s)>1?x.Children.only(null):x.isValidElement(s)?s.props.children:null:c);return a.jsx(_l,{...r,ref:t,children:x.isValidElement(s)?x.cloneElement(s,void 0,l):null})}return a.jsx(_l,{...r,ref:t,children:n})});bs.displayName="Slot";var _l=x.forwardRef((e,t)=>{const{children:n,...r}=e;if(x.isValidElement(n)){const o=Jv(n);return x.cloneElement(n,{...Zv(r,n.props),ref:t?Tm(t,o):o})}return x.Children.count(n)>1?x.Children.only(null):null});_l.displayName="SlotClone";var Rm=({children:e})=>a.jsx(a.Fragment,{children:e});function qv(e){return x.isValidElement(e)&&e.type===Rm}function Zv(e,t){const n={...t};for(const r in t){const o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...l)=>{i(...l),o(...l)}:o&&(n[r]=o):r==="style"?n[r]={...o,...i}:r==="className"&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}function Jv(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function ey(e){const t=e+"CollectionProvider",[n,r]=Gv(t),[o,i]=n(t,{collectionRef:{current:null},itemMap:new Map}),s=y=>{const{scope:w,children:v}=y,b=O.useRef(null),h=O.useRef(new Map).current;return a.jsx(o,{scope:w,itemMap:h,collectionRef:b,children:v})};s.displayName=t;const l=e+"CollectionSlot",c=O.forwardRef((y,w)=>{const{scope:v,children:b}=y,h=i(l,v),m=yt(w,h.collectionRef);return a.jsx(bs,{ref:m,children:b})});c.displayName=l;const u=e+"CollectionItemSlot",f="data-radix-collection-item",p=O.forwardRef((y,w)=>{const{scope:v,children:b,...h}=y,m=O.useRef(null),g=yt(w,m),k=i(u,v);return O.useEffect(()=>(k.itemMap.set(m,{ref:m,...h}),()=>void k.itemMap.delete(m))),a.jsx(bs,{[f]:"",ref:g,children:b})});p.displayName=u;function d(y){const w=i(e+"CollectionConsumer",y);return O.useCallback(()=>{const b=w.collectionRef.current;if(!b)return[];const h=Array.from(b.querySelectorAll(`[${f}]`));return Array.from(w.itemMap.values()).sort((k,S)=>h.indexOf(k.ref.current)-h.indexOf(S.ref.current))},[w.collectionRef,w.itemMap])}return[{Provider:s,Slot:c,ItemSlot:p},d,r]}function Om(e,t=[]){let n=[];function r(i,s){const l=x.createContext(s),c=n.length;n=[...n,s];const u=p=>{var h;const{scope:d,children:y,...w}=p,v=((h=d==null?void 0:d[e])==null?void 0:h[c])||l,b=x.useMemo(()=>w,Object.values(w));return a.jsx(v.Provider,{value:b,children:y})};u.displayName=i+"Provider";function f(p,d){var v;const y=((v=d==null?void 0:d[e])==null?void 0:v[c])||l,w=x.useContext(y);if(w)return w;if(s!==void 0)return s;throw new Error(`\`${p}\` must be used within \`${i}\``)}return[u,f]}const o=()=>{const i=n.map(s=>x.createContext(s));return function(l){const c=(l==null?void 0:l[e])||i;return x.useMemo(()=>({[`__scope${e}`]:{...l,[e]:c}}),[l,c])}};return o.scopeName=e,[r,ty(o,...t)]}function ty(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(i){const s=r.reduce((l,{useScope:c,scopeName:u})=>{const p=c(i)[`__scope${u}`];return{...l,...p}},{});return x.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])}};return n.scopeName=t.scopeName,n}var ny=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],We=ny.reduce((e,t)=>{const n=x.forwardRef((r,o)=>{const{asChild:i,...s}=r,l=i?bs:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),a.jsx(l,{...s,ref:o})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function Mm(e,t){e&&ii.flushSync(()=>e.dispatchEvent(t))}function Ot(e){const t=x.useRef(e);return x.useEffect(()=>{t.current=e}),x.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function ry(e,t=globalThis==null?void 0:globalThis.document){const n=Ot(e);x.useEffect(()=>{const r=o=>{o.key==="Escape"&&n(o)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[n,t])}var oy="DismissableLayer",Al="dismissableLayer.update",iy="dismissableLayer.pointerDownOutside",sy="dismissableLayer.focusOutside",Sd,_m=x.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Wc=x.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:o,onFocusOutside:i,onInteractOutside:s,onDismiss:l,...c}=e,u=x.useContext(_m),[f,p]=x.useState(null),d=(f==null?void 0:f.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,y]=x.useState({}),w=yt(t,E=>p(E)),v=Array.from(u.layers),[b]=[...u.layersWithOutsidePointerEventsDisabled].slice(-1),h=v.indexOf(b),m=f?v.indexOf(f):-1,g=u.layersWithOutsidePointerEventsDisabled.size>0,k=m>=h,S=ly(E=>{const P=E.target,L=[...u.branches].some(M=>M.contains(P));!k||L||(o==null||o(E),s==null||s(E),E.defaultPrevented||l==null||l())},d),C=cy(E=>{const P=E.target;[...u.branches].some(M=>M.contains(P))||(i==null||i(E),s==null||s(E),E.defaultPrevented||l==null||l())},d);return ry(E=>{m===u.layers.size-1&&(r==null||r(E),!E.defaultPrevented&&l&&(E.preventDefault(),l()))},d),x.useEffect(()=>{if(f)return n&&(u.layersWithOutsidePointerEventsDisabled.size===0&&(Sd=d.body.style.pointerEvents,d.body.style.pointerEvents="none"),u.layersWithOutsidePointerEventsDisabled.add(f)),u.layers.add(f),jd(),()=>{n&&u.layersWithOutsidePointerEventsDisabled.size===1&&(d.body.style.pointerEvents=Sd)}},[f,d,n,u]),x.useEffect(()=>()=>{f&&(u.layers.delete(f),u.layersWithOutsidePointerEventsDisabled.delete(f),jd())},[f,u]),x.useEffect(()=>{const E=()=>y({});return document.addEventListener(Al,E),()=>document.removeEventListener(Al,E)},[]),a.jsx(We.div,{...c,ref:w,style:{pointerEvents:g?k?"auto":"none":void 0,...e.style},onFocusCapture:ye(e.onFocusCapture,C.onFocusCapture),onBlurCapture:ye(e.onBlurCapture,C.onBlurCapture),onPointerDownCapture:ye(e.onPointerDownCapture,S.onPointerDownCapture)})});Wc.displayName=oy;var ay="DismissableLayerBranch",Am=x.forwardRef((e,t)=>{const n=x.useContext(_m),r=x.useRef(null),o=yt(t,r);return x.useEffect(()=>{const i=r.current;if(i)return n.branches.add(i),()=>{n.branches.delete(i)}},[n.branches]),a.jsx(We.div,{...e,ref:o})});Am.displayName=ay;function ly(e,t=globalThis==null?void 0:globalThis.document){const n=Ot(e),r=x.useRef(!1),o=x.useRef(()=>{});return x.useEffect(()=>{const i=l=>{if(l.target&&!r.current){let c=function(){zm(iy,n,u,{discrete:!0})};const u={originalEvent:l};l.pointerType==="touch"?(t.removeEventListener("click",o.current),o.current=c,t.addEventListener("click",o.current,{once:!0})):c()}else t.removeEventListener("click",o.current);r.current=!1},s=window.setTimeout(()=>{t.addEventListener("pointerdown",i)},0);return()=>{window.clearTimeout(s),t.removeEventListener("pointerdown",i),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function cy(e,t=globalThis==null?void 0:globalThis.document){const n=Ot(e),r=x.useRef(!1);return x.useEffect(()=>{const o=i=>{i.target&&!r.current&&zm(sy,n,{originalEvent:i},{discrete:!1})};return t.addEventListener("focusin",o),()=>t.removeEventListener("focusin",o)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function jd(){const e=new CustomEvent(Al);document.dispatchEvent(e)}function zm(e,t,n,{discrete:r}){const o=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?Mm(o,i):o.dispatchEvent(i)}var uy=Wc,dy=Am,Zn=globalThis!=null&&globalThis.document?x.useLayoutEffect:()=>{},fy="Portal",Lm=x.forwardRef((e,t)=>{var l;const{container:n,...r}=e,[o,i]=x.useState(!1);Zn(()=>i(!0),[]);const s=n||o&&((l=globalThis==null?void 0:globalThis.document)==null?void 0:l.body);return s?Nm.createPortal(a.jsx(We.div,{...r,ref:t}),s):null});Lm.displayName=fy;function py(e,t){return x.useReducer((n,r)=>t[n][r]??n,e)}var Vc=e=>{const{present:t,children:n}=e,r=my(t),o=typeof n=="function"?n({present:r.isPresent}):x.Children.only(n),i=yt(r.ref,hy(o));return typeof n=="function"||r.isPresent?x.cloneElement(o,{ref:i}):null};Vc.displayName="Presence";function my(e){const[t,n]=x.useState(),r=x.useRef({}),o=x.useRef(e),i=x.useRef("none"),s=e?"mounted":"unmounted",[l,c]=py(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return x.useEffect(()=>{const u=Oi(r.current);i.current=l==="mounted"?u:"none"},[l]),Zn(()=>{const u=r.current,f=o.current;if(f!==e){const d=i.current,y=Oi(u);e?c("MOUNT"):y==="none"||(u==null?void 0:u.display)==="none"?c("UNMOUNT"):c(f&&d!==y?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,c]),Zn(()=>{if(t){let u;const f=t.ownerDocument.defaultView??window,p=y=>{const v=Oi(r.current).includes(y.animationName);if(y.target===t&&v&&(c("ANIMATION_END"),!o.current)){const b=t.style.animationFillMode;t.style.animationFillMode="forwards",u=f.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=b)})}},d=y=>{y.target===t&&(i.current=Oi(r.current))};return t.addEventListener("animationstart",d),t.addEventListener("animationcancel",p),t.addEventListener("animationend",p),()=>{f.clearTimeout(u),t.removeEventListener("animationstart",d),t.removeEventListener("animationcancel",p),t.removeEventListener("animationend",p)}}else c("ANIMATION_END")},[t,c]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:x.useCallback(u=>{u&&(r.current=getComputedStyle(u)),n(u)},[])}}function Oi(e){return(e==null?void 0:e.animationName)||"none"}function hy(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function gy({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,o]=vy({defaultProp:t,onChange:n}),i=e!==void 0,s=i?e:r,l=Ot(n),c=x.useCallback(u=>{if(i){const p=typeof u=="function"?u(e):u;p!==e&&l(p)}else o(u)},[i,e,o,l]);return[s,c]}function vy({defaultProp:e,onChange:t}){const n=x.useState(e),[r]=n,o=x.useRef(r),i=Ot(t);return x.useEffect(()=>{o.current!==r&&(i(r),o.current=r)},[r,o,i]),n}var yy="VisuallyHidden",Hs=x.forwardRef((e,t)=>a.jsx(We.span,{...e,ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));Hs.displayName=yy;var xy=Hs,Hc="ToastProvider",[Qc,wy,by]=ey("Toast"),[Dm,pk]=Om("Toast",[by]),[ky,Qs]=Dm(Hc),Im=e=>{const{__scopeToast:t,label:n="Notification",duration:r=5e3,swipeDirection:o="right",swipeThreshold:i=50,children:s}=e,[l,c]=x.useState(null),[u,f]=x.useState(0),p=x.useRef(!1),d=x.useRef(!1);return n.trim()||console.error(`Invalid prop \`label\` supplied to \`${Hc}\`. Expected non-empty \`string\`.`),a.jsx(Qc.Provider,{scope:t,children:a.jsx(ky,{scope:t,label:n,duration:r,swipeDirection:o,swipeThreshold:i,toastCount:u,viewport:l,onViewportChange:c,onToastAdd:x.useCallback(()=>f(y=>y+1),[]),onToastRemove:x.useCallback(()=>f(y=>y-1),[]),isFocusedToastEscapeKeyDownRef:p,isClosePausedRef:d,children:s})})};Im.displayName=Hc;var Fm="ToastViewport",Sy=["F8"],zl="toast.viewportPause",Ll="toast.viewportResume",$m=x.forwardRef((e,t)=>{const{__scopeToast:n,hotkey:r=Sy,label:o="Notifications ({hotkey})",...i}=e,s=Qs(Fm,n),l=wy(n),c=x.useRef(null),u=x.useRef(null),f=x.useRef(null),p=x.useRef(null),d=yt(t,p,s.onViewportChange),y=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),w=s.toastCount>0;x.useEffect(()=>{const b=h=>{var g;r.length!==0&&r.every(k=>h[k]||h.code===k)&&((g=p.current)==null||g.focus())};return document.addEventListener("keydown",b),()=>document.removeEventListener("keydown",b)},[r]),x.useEffect(()=>{const b=c.current,h=p.current;if(w&&b&&h){const m=()=>{if(!s.isClosePausedRef.current){const C=new CustomEvent(zl);h.dispatchEvent(C),s.isClosePausedRef.current=!0}},g=()=>{if(s.isClosePausedRef.current){const C=new CustomEvent(Ll);h.dispatchEvent(C),s.isClosePausedRef.current=!1}},k=C=>{!b.contains(C.relatedTarget)&&g()},S=()=>{b.contains(document.activeElement)||g()};return b.addEventListener("focusin",m),b.addEventListener("focusout",k),b.addEventListener("pointermove",m),b.addEventListener("pointerleave",S),window.addEventListener("blur",m),window.addEventListener("focus",g),()=>{b.removeEventListener("focusin",m),b.removeEventListener("focusout",k),b.removeEventListener("pointermove",m),b.removeEventListener("pointerleave",S),window.removeEventListener("blur",m),window.removeEventListener("focus",g)}}},[w,s.isClosePausedRef]);const v=x.useCallback(({tabbingDirection:b})=>{const m=l().map(g=>{const k=g.ref.current,S=[k,...Ly(k)];return b==="forwards"?S:S.reverse()});return(b==="forwards"?m.reverse():m).flat()},[l]);return x.useEffect(()=>{const b=p.current;if(b){const h=m=>{var S,C,E;const g=m.altKey||m.ctrlKey||m.metaKey;if(m.key==="Tab"&&!g){const P=document.activeElement,L=m.shiftKey;if(m.target===b&&L){(S=u.current)==null||S.focus();return}const D=v({tabbingDirection:L?"backwards":"forwards"}),Q=D.findIndex(_=>_===P);za(D.slice(Q+1))?m.preventDefault():L?(C=u.current)==null||C.focus():(E=f.current)==null||E.focus()}};return b.addEventListener("keydown",h),()=>b.removeEventListener("keydown",h)}},[l,v]),a.jsxs(dy,{ref:c,role:"region","aria-label":o.replace("{hotkey}",y),tabIndex:-1,style:{pointerEvents:w?void 0:"none"},children:[w&&a.jsx(Dl,{ref:u,onFocusFromOutsideViewport:()=>{const b=v({tabbingDirection:"forwards"});za(b)}}),a.jsx(Qc.Slot,{scope:n,children:a.jsx(We.ol,{tabIndex:-1,...i,ref:d})}),w&&a.jsx(Dl,{ref:f,onFocusFromOutsideViewport:()=>{const b=v({tabbingDirection:"backwards"});za(b)}})]})});$m.displayName=Fm;var Um="ToastFocusProxy",Dl=x.forwardRef((e,t)=>{const{__scopeToast:n,onFocusFromOutsideViewport:r,...o}=e,i=Qs(Um,n);return a.jsx(Hs,{"aria-hidden":!0,tabIndex:0,...o,ref:t,style:{position:"fixed"},onFocus:s=>{var u;const l=s.relatedTarget;!((u=i.viewport)!=null&&u.contains(l))&&r()}})});Dl.displayName=Um;var Ys="Toast",jy="toast.swipeStart",Cy="toast.swipeMove",Ey="toast.swipeCancel",Ny="toast.swipeEnd",Bm=x.forwardRef((e,t)=>{const{forceMount:n,open:r,defaultOpen:o,onOpenChange:i,...s}=e,[l=!0,c]=gy({prop:r,defaultProp:o,onChange:i});return a.jsx(Vc,{present:n||l,children:a.jsx(Ry,{open:l,...s,ref:t,onClose:()=>c(!1),onPause:Ot(e.onPause),onResume:Ot(e.onResume),onSwipeStart:ye(e.onSwipeStart,u=>{u.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:ye(e.onSwipeMove,u=>{const{x:f,y:p}=u.detail.delta;u.currentTarget.setAttribute("data-swipe","move"),u.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${f}px`),u.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${p}px`)}),onSwipeCancel:ye(e.onSwipeCancel,u=>{u.currentTarget.setAttribute("data-swipe","cancel"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:ye(e.onSwipeEnd,u=>{const{x:f,y:p}=u.detail.delta;u.currentTarget.setAttribute("data-swipe","end"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),u.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${f}px`),u.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${p}px`),c(!1)})})})});Bm.displayName=Ys;var[Py,Ty]=Dm(Ys,{onClose(){}}),Ry=x.forwardRef((e,t)=>{const{__scopeToast:n,type:r="foreground",duration:o,open:i,onClose:s,onEscapeKeyDown:l,onPause:c,onResume:u,onSwipeStart:f,onSwipeMove:p,onSwipeCancel:d,onSwipeEnd:y,...w}=e,v=Qs(Ys,n),[b,h]=x.useState(null),m=yt(t,_=>h(_)),g=x.useRef(null),k=x.useRef(null),S=o||v.duration,C=x.useRef(0),E=x.useRef(S),P=x.useRef(0),{onToastAdd:L,onToastRemove:M}=v,$=Ot(()=>{var Y;(b==null?void 0:b.contains(document.activeElement))&&((Y=v.viewport)==null||Y.focus()),s()}),D=x.useCallback(_=>{!_||_===1/0||(window.clearTimeout(P.current),C.current=new Date().getTime(),P.current=window.setTimeout($,_))},[$]);x.useEffect(()=>{const _=v.viewport;if(_){const Y=()=>{D(E.current),u==null||u()},U=()=>{const K=new Date().getTime()-C.current;E.current=E.current-K,window.clearTimeout(P.current),c==null||c()};return _.addEventListener(zl,U),_.addEventListener(Ll,Y),()=>{_.removeEventListener(zl,U),_.removeEventListener(Ll,Y)}}},[v.viewport,S,c,u,D]),x.useEffect(()=>{i&&!v.isClosePausedRef.current&&D(S)},[i,S,v.isClosePausedRef,D]),x.useEffect(()=>(L(),()=>M()),[L,M]);const Q=x.useMemo(()=>b?Gm(b):null,[b]);return v.viewport?a.jsxs(a.Fragment,{children:[Q&&a.jsx(Oy,{__scopeToast:n,role:"status","aria-live":r==="foreground"?"assertive":"polite","aria-atomic":!0,children:Q}),a.jsx(Py,{scope:n,onClose:$,children:ii.createPortal(a.jsx(Qc.ItemSlot,{scope:n,children:a.jsx(uy,{asChild:!0,onEscapeKeyDown:ye(l,()=>{v.isFocusedToastEscapeKeyDownRef.current||$(),v.isFocusedToastEscapeKeyDownRef.current=!1}),children:a.jsx(We.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":i?"open":"closed","data-swipe-direction":v.swipeDirection,...w,ref:m,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:ye(e.onKeyDown,_=>{_.key==="Escape"&&(l==null||l(_.nativeEvent),_.nativeEvent.defaultPrevented||(v.isFocusedToastEscapeKeyDownRef.current=!0,$()))}),onPointerDown:ye(e.onPointerDown,_=>{_.button===0&&(g.current={x:_.clientX,y:_.clientY})}),onPointerMove:ye(e.onPointerMove,_=>{if(!g.current)return;const Y=_.clientX-g.current.x,U=_.clientY-g.current.y,K=!!k.current,j=["left","right"].includes(v.swipeDirection),R=["left","up"].includes(v.swipeDirection)?Math.min:Math.max,I=j?R(0,Y):0,z=j?0:R(0,U),F=_.pointerType==="touch"?10:2,X={x:I,y:z},le={originalEvent:_,delta:X};K?(k.current=X,Mi(Cy,p,le,{discrete:!1})):Cd(X,v.swipeDirection,F)?(k.current=X,Mi(jy,f,le,{discrete:!1}),_.target.setPointerCapture(_.pointerId)):(Math.abs(Y)>F||Math.abs(U)>F)&&(g.current=null)}),onPointerUp:ye(e.onPointerUp,_=>{const Y=k.current,U=_.target;if(U.hasPointerCapture(_.pointerId)&&U.releasePointerCapture(_.pointerId),k.current=null,g.current=null,Y){const K=_.currentTarget,j={originalEvent:_,delta:Y};Cd(Y,v.swipeDirection,v.swipeThreshold)?Mi(Ny,y,j,{discrete:!0}):Mi(Ey,d,j,{discrete:!0}),K.addEventListener("click",R=>R.preventDefault(),{once:!0})}})})})}),v.viewport)})]}):null}),Oy=e=>{const{__scopeToast:t,children:n,...r}=e,o=Qs(Ys,t),[i,s]=x.useState(!1),[l,c]=x.useState(!1);return Ay(()=>s(!0)),x.useEffect(()=>{const u=window.setTimeout(()=>c(!0),1e3);return()=>window.clearTimeout(u)},[]),l?null:a.jsx(Lm,{asChild:!0,children:a.jsx(Hs,{...r,children:i&&a.jsxs(a.Fragment,{children:[o.label," ",n]})})})},My="ToastTitle",Wm=x.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e;return a.jsx(We.div,{...r,ref:t})});Wm.displayName=My;var _y="ToastDescription",Vm=x.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e;return a.jsx(We.div,{...r,ref:t})});Vm.displayName=_y;var Hm="ToastAction",Qm=x.forwardRef((e,t)=>{const{altText:n,...r}=e;return n.trim()?a.jsx(Km,{altText:n,asChild:!0,children:a.jsx(Yc,{...r,ref:t})}):(console.error(`Invalid prop \`altText\` supplied to \`${Hm}\`. Expected non-empty \`string\`.`),null)});Qm.displayName=Hm;var Ym="ToastClose",Yc=x.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e,o=Ty(Ym,n);return a.jsx(Km,{asChild:!0,children:a.jsx(We.button,{type:"button",...r,ref:t,onClick:ye(e.onClick,o.onClose)})})});Yc.displayName=Ym;var Km=x.forwardRef((e,t)=>{const{__scopeToast:n,altText:r,...o}=e;return a.jsx(We.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":r||void 0,...o,ref:t})});function Gm(e){const t=[];return Array.from(e.childNodes).forEach(r=>{if(r.nodeType===r.TEXT_NODE&&r.textContent&&t.push(r.textContent),zy(r)){const o=r.ariaHidden||r.hidden||r.style.display==="none",i=r.dataset.radixToastAnnounceExclude==="";if(!o)if(i){const s=r.dataset.radixToastAnnounceAlt;s&&t.push(s)}else t.push(...Gm(r))}}),t}function Mi(e,t,n,{discrete:r}){const o=n.originalEvent.currentTarget,i=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?Mm(o,i):o.dispatchEvent(i)}var Cd=(e,t,n=0)=>{const r=Math.abs(e.x),o=Math.abs(e.y),i=r>o;return t==="left"||t==="right"?i&&r>n:!i&&o>n};function Ay(e=()=>{}){const t=Ot(e);Zn(()=>{let n=0,r=0;return n=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(n),window.cancelAnimationFrame(r)}},[t])}function zy(e){return e.nodeType===e.ELEMENT_NODE}function Ly(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function za(e){const t=document.activeElement;return e.some(n=>n===t?!0:(n.focus(),document.activeElement!==t))}var Dy=Im,Xm=$m,qm=Bm,Zm=Wm,Jm=Vm,eh=Qm,th=Yc;function nh(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=nh(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function rh(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=nh(e))&&(r&&(r+=" "),r+=t);return r}const Ed=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,Nd=rh,Iy=(e,t)=>n=>{var r;if((t==null?void 0:t.variants)==null)return Nd(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:o,defaultVariants:i}=t,s=Object.keys(o).map(u=>{const f=n==null?void 0:n[u],p=i==null?void 0:i[u];if(f===null)return null;const d=Ed(f)||Ed(p);return o[u][d]}),l=n&&Object.entries(n).reduce((u,f)=>{let[p,d]=f;return d===void 0||(u[p]=d),u},{}),c=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((u,f)=>{let{class:p,className:d,...y}=f;return Object.entries(y).every(w=>{let[v,b]=w;return Array.isArray(b)?b.includes({...i,...l}[v]):{...i,...l}[v]===b})?[...u,p,d]:u},[]);return Nd(e,s,c,n==null?void 0:n.class,n==null?void 0:n.className)};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),oh=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $y={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=x.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:i,iconNode:s,...l},c)=>x.createElement("svg",{ref:c,...$y,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:oh("lucide",o),...l},[...s.map(([u,f])=>x.createElement(u,f)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zr=(e,t)=>{const n=x.forwardRef(({className:r,...o},i)=>x.createElement(Uy,{ref:i,iconNode:t,className:oh(`lucide-${Fy(e)}`,r),...o}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=Zr("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=Zr("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=Zr("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=Zr("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd=Zr("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=Zr("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Kc="-",Vy=e=>{const t=Qy(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:s=>{const l=s.split(Kc);return l[0]===""&&l.length!==1&&l.shift(),sh(l,t)||Hy(s)},getConflictingClassGroupIds:(s,l)=>{const c=n[s]||[];return l&&r[s]?[...c,...r[s]]:c}}},sh=(e,t)=>{var s;if(e.length===0)return t.classGroupId;const n=e[0],r=t.nextPart.get(n),o=r?sh(e.slice(1),r):void 0;if(o)return o;if(t.validators.length===0)return;const i=e.join(Kc);return(s=t.validators.find(({validator:l})=>l(i)))==null?void 0:s.classGroupId},Od=/^\[(.+)\]$/,Hy=e=>{if(Od.test(e)){const t=Od.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},Qy=e=>{const{theme:t,prefix:n}=e,r={nextPart:new Map,validators:[]};return Ky(Object.entries(e.classGroups),n).forEach(([i,s])=>{Il(s,r,i,t)}),r},Il=(e,t,n,r)=>{e.forEach(o=>{if(typeof o=="string"){const i=o===""?t:Md(t,o);i.classGroupId=n;return}if(typeof o=="function"){if(Yy(o)){Il(o(r),t,n,r);return}t.validators.push({validator:o,classGroupId:n});return}Object.entries(o).forEach(([i,s])=>{Il(s,Md(t,i),n,r)})})},Md=(e,t)=>{let n=e;return t.split(Kc).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},Yy=e=>e.isThemeGetter,Ky=(e,t)=>t?e.map(([n,r])=>{const o=r.map(i=>typeof i=="string"?t+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(([s,l])=>[t+s,l])):i);return[n,o]}):e,Gy=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,r=new Map;const o=(i,s)=>{n.set(i,s),t++,t>e&&(t=0,r=n,n=new Map)};return{get(i){let s=n.get(i);if(s!==void 0)return s;if((s=r.get(i))!==void 0)return o(i,s),s},set(i,s){n.has(i)?n.set(i,s):o(i,s)}}},ah="!",Xy=e=>{const{separator:t,experimentalParseClassName:n}=e,r=t.length===1,o=t[0],i=t.length,s=l=>{const c=[];let u=0,f=0,p;for(let b=0;b<l.length;b++){let h=l[b];if(u===0){if(h===o&&(r||l.slice(b,b+i)===t)){c.push(l.slice(f,b)),f=b+i;continue}if(h==="/"){p=b;continue}}h==="["?u++:h==="]"&&u--}const d=c.length===0?l:l.substring(f),y=d.startsWith(ah),w=y?d.substring(1):d,v=p&&p>f?p-f:void 0;return{modifiers:c,hasImportantModifier:y,baseClassName:w,maybePostfixModifierPosition:v}};return n?l=>n({className:l,parseClassName:s}):s},qy=e=>{if(e.length<=1)return e;const t=[];let n=[];return e.forEach(r=>{r[0]==="["?(t.push(...n.sort(),r),n=[]):n.push(r)}),t.push(...n.sort()),t},Zy=e=>({cache:Gy(e.cacheSize),parseClassName:Xy(e),...Vy(e)}),Jy=/\s+/,ex=(e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:o}=t,i=[],s=e.trim().split(Jy);let l="";for(let c=s.length-1;c>=0;c-=1){const u=s[c],{modifiers:f,hasImportantModifier:p,baseClassName:d,maybePostfixModifierPosition:y}=n(u);let w=!!y,v=r(w?d.substring(0,y):d);if(!v){if(!w){l=u+(l.length>0?" "+l:l);continue}if(v=r(d),!v){l=u+(l.length>0?" "+l:l);continue}w=!1}const b=qy(f).join(":"),h=p?b+ah:b,m=h+v;if(i.includes(m))continue;i.push(m);const g=o(v,w);for(let k=0;k<g.length;++k){const S=g[k];i.push(h+S)}l=u+(l.length>0?" "+l:l)}return l};function tx(){let e=0,t,n,r="";for(;e<arguments.length;)(t=arguments[e++])&&(n=lh(t))&&(r&&(r+=" "),r+=n);return r}const lh=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=lh(e[r]))&&(n&&(n+=" "),n+=t);return n};function nx(e,...t){let n,r,o,i=s;function s(c){const u=t.reduce((f,p)=>p(f),e());return n=Zy(u),r=n.cache.get,o=n.cache.set,i=l,l(c)}function l(c){const u=r(c);if(u)return u;const f=ex(c,n);return o(c,f),f}return function(){return i(tx.apply(null,arguments))}}const oe=e=>{const t=n=>n[e]||[];return t.isThemeGetter=!0,t},ch=/^\[(?:([a-z-]+):)?(.+)\]$/i,rx=/^\d+\/\d+$/,ox=new Set(["px","full","screen"]),ix=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,sx=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,ax=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,lx=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,cx=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,At=e=>Tr(e)||ox.has(e)||rx.test(e),tn=e=>Jr(e,"length",vx),Tr=e=>!!e&&!Number.isNaN(Number(e)),La=e=>Jr(e,"number",Tr),po=e=>!!e&&Number.isInteger(Number(e)),ux=e=>e.endsWith("%")&&Tr(e.slice(0,-1)),W=e=>ch.test(e),nn=e=>ix.test(e),dx=new Set(["length","size","percentage"]),fx=e=>Jr(e,dx,uh),px=e=>Jr(e,"position",uh),mx=new Set(["image","url"]),hx=e=>Jr(e,mx,xx),gx=e=>Jr(e,"",yx),mo=()=>!0,Jr=(e,t,n)=>{const r=ch.exec(e);return r?r[1]?typeof t=="string"?r[1]===t:t.has(r[1]):n(r[2]):!1},vx=e=>sx.test(e)&&!ax.test(e),uh=()=>!1,yx=e=>lx.test(e),xx=e=>cx.test(e),wx=()=>{const e=oe("colors"),t=oe("spacing"),n=oe("blur"),r=oe("brightness"),o=oe("borderColor"),i=oe("borderRadius"),s=oe("borderSpacing"),l=oe("borderWidth"),c=oe("contrast"),u=oe("grayscale"),f=oe("hueRotate"),p=oe("invert"),d=oe("gap"),y=oe("gradientColorStops"),w=oe("gradientColorStopPositions"),v=oe("inset"),b=oe("margin"),h=oe("opacity"),m=oe("padding"),g=oe("saturate"),k=oe("scale"),S=oe("sepia"),C=oe("skew"),E=oe("space"),P=oe("translate"),L=()=>["auto","contain","none"],M=()=>["auto","hidden","clip","visible","scroll"],$=()=>["auto",W,t],D=()=>[W,t],Q=()=>["",At,tn],_=()=>["auto",Tr,W],Y=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],U=()=>["solid","dashed","dotted","double","none"],K=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],j=()=>["start","end","center","between","around","evenly","stretch"],R=()=>["","0",W],I=()=>["auto","avoid","all","avoid-page","page","left","right","column"],z=()=>[Tr,W];return{cacheSize:500,separator:":",theme:{colors:[mo],spacing:[At,tn],blur:["none","",nn,W],brightness:z(),borderColor:[e],borderRadius:["none","","full",nn,W],borderSpacing:D(),borderWidth:Q(),contrast:z(),grayscale:R(),hueRotate:z(),invert:R(),gap:D(),gradientColorStops:[e],gradientColorStopPositions:[ux,tn],inset:$(),margin:$(),opacity:z(),padding:D(),saturate:z(),scale:z(),sepia:R(),skew:z(),space:D(),translate:D()},classGroups:{aspect:[{aspect:["auto","square","video",W]}],container:["container"],columns:[{columns:[nn]}],"break-after":[{"break-after":I()}],"break-before":[{"break-before":I()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Y(),W]}],overflow:[{overflow:M()}],"overflow-x":[{"overflow-x":M()}],"overflow-y":[{"overflow-y":M()}],overscroll:[{overscroll:L()}],"overscroll-x":[{"overscroll-x":L()}],"overscroll-y":[{"overscroll-y":L()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[v]}],"inset-x":[{"inset-x":[v]}],"inset-y":[{"inset-y":[v]}],start:[{start:[v]}],end:[{end:[v]}],top:[{top:[v]}],right:[{right:[v]}],bottom:[{bottom:[v]}],left:[{left:[v]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",po,W]}],basis:[{basis:$()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",W]}],grow:[{grow:R()}],shrink:[{shrink:R()}],order:[{order:["first","last","none",po,W]}],"grid-cols":[{"grid-cols":[mo]}],"col-start-end":[{col:["auto",{span:["full",po,W]},W]}],"col-start":[{"col-start":_()}],"col-end":[{"col-end":_()}],"grid-rows":[{"grid-rows":[mo]}],"row-start-end":[{row:["auto",{span:[po,W]},W]}],"row-start":[{"row-start":_()}],"row-end":[{"row-end":_()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",W]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",W]}],gap:[{gap:[d]}],"gap-x":[{"gap-x":[d]}],"gap-y":[{"gap-y":[d]}],"justify-content":[{justify:["normal",...j()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...j(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...j(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[m]}],px:[{px:[m]}],py:[{py:[m]}],ps:[{ps:[m]}],pe:[{pe:[m]}],pt:[{pt:[m]}],pr:[{pr:[m]}],pb:[{pb:[m]}],pl:[{pl:[m]}],m:[{m:[b]}],mx:[{mx:[b]}],my:[{my:[b]}],ms:[{ms:[b]}],me:[{me:[b]}],mt:[{mt:[b]}],mr:[{mr:[b]}],mb:[{mb:[b]}],ml:[{ml:[b]}],"space-x":[{"space-x":[E]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[E]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",W,t]}],"min-w":[{"min-w":[W,t,"min","max","fit"]}],"max-w":[{"max-w":[W,t,"none","full","min","max","fit","prose",{screen:[nn]},nn]}],h:[{h:[W,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[W,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[W,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[W,t,"auto","min","max","fit"]}],"font-size":[{text:["base",nn,tn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",La]}],"font-family":[{font:[mo]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",W]}],"line-clamp":[{"line-clamp":["none",Tr,La]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",At,W]}],"list-image":[{"list-image":["none",W]}],"list-style-type":[{list:["none","disc","decimal",W]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[h]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[h]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...U(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",At,tn]}],"underline-offset":[{"underline-offset":["auto",At,W]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:D()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",W]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",W]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[h]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Y(),px]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",fx]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},hx]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[w]}],"gradient-via-pos":[{via:[w]}],"gradient-to-pos":[{to:[w]}],"gradient-from":[{from:[y]}],"gradient-via":[{via:[y]}],"gradient-to":[{to:[y]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[h]}],"border-style":[{border:[...U(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[h]}],"divide-style":[{divide:U()}],"border-color":[{border:[o]}],"border-color-x":[{"border-x":[o]}],"border-color-y":[{"border-y":[o]}],"border-color-s":[{"border-s":[o]}],"border-color-e":[{"border-e":[o]}],"border-color-t":[{"border-t":[o]}],"border-color-r":[{"border-r":[o]}],"border-color-b":[{"border-b":[o]}],"border-color-l":[{"border-l":[o]}],"divide-color":[{divide:[o]}],"outline-style":[{outline:["",...U()]}],"outline-offset":[{"outline-offset":[At,W]}],"outline-w":[{outline:[At,tn]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:Q()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[h]}],"ring-offset-w":[{"ring-offset":[At,tn]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",nn,gx]}],"shadow-color":[{shadow:[mo]}],opacity:[{opacity:[h]}],"mix-blend":[{"mix-blend":[...K(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":K()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",nn,W]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[f]}],invert:[{invert:[p]}],saturate:[{saturate:[g]}],sepia:[{sepia:[S]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f]}],"backdrop-invert":[{"backdrop-invert":[p]}],"backdrop-opacity":[{"backdrop-opacity":[h]}],"backdrop-saturate":[{"backdrop-saturate":[g]}],"backdrop-sepia":[{"backdrop-sepia":[S]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",W]}],duration:[{duration:z()}],ease:[{ease:["linear","in","out","in-out",W]}],delay:[{delay:z()}],animate:[{animate:["none","spin","ping","pulse","bounce",W]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[k]}],"scale-x":[{"scale-x":[k]}],"scale-y":[{"scale-y":[k]}],rotate:[{rotate:[po,W]}],"translate-x":[{"translate-x":[P]}],"translate-y":[{"translate-y":[P]}],"skew-x":[{"skew-x":[C]}],"skew-y":[{"skew-y":[C]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",W]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",W]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":D()}],"scroll-mx":[{"scroll-mx":D()}],"scroll-my":[{"scroll-my":D()}],"scroll-ms":[{"scroll-ms":D()}],"scroll-me":[{"scroll-me":D()}],"scroll-mt":[{"scroll-mt":D()}],"scroll-mr":[{"scroll-mr":D()}],"scroll-mb":[{"scroll-mb":D()}],"scroll-ml":[{"scroll-ml":D()}],"scroll-p":[{"scroll-p":D()}],"scroll-px":[{"scroll-px":D()}],"scroll-py":[{"scroll-py":D()}],"scroll-ps":[{"scroll-ps":D()}],"scroll-pe":[{"scroll-pe":D()}],"scroll-pt":[{"scroll-pt":D()}],"scroll-pr":[{"scroll-pr":D()}],"scroll-pb":[{"scroll-pb":D()}],"scroll-pl":[{"scroll-pl":D()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",W]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[At,tn,La]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},bx=nx(wx);function nr(...e){return bx(rh(e))}const kx=Dy,dh=x.forwardRef(({className:e,...t},n)=>a.jsx(Xm,{ref:n,className:nr("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...t}));dh.displayName=Xm.displayName;const Sx=Iy("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),fh=x.forwardRef(({className:e,variant:t,...n},r)=>a.jsx(qm,{ref:r,className:nr(Sx({variant:t}),e),...n}));fh.displayName=qm.displayName;const jx=x.forwardRef(({className:e,...t},n)=>a.jsx(eh,{ref:n,className:nr("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",e),...t}));jx.displayName=eh.displayName;const ph=x.forwardRef(({className:e,...t},n)=>a.jsx(th,{ref:n,className:nr("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...t,children:a.jsx(ih,{className:"h-4 w-4"})}));ph.displayName=th.displayName;const mh=x.forwardRef(({className:e,...t},n)=>a.jsx(Zm,{ref:n,className:nr("text-sm font-semibold",e),...t}));mh.displayName=Zm.displayName;const hh=x.forwardRef(({className:e,...t},n)=>a.jsx(Jm,{ref:n,className:nr("text-sm opacity-90",e),...t}));hh.displayName=Jm.displayName;function Cx(){const{toasts:e}=Yv();return a.jsxs(kx,{children:[e.map(function({id:t,title:n,description:r,action:o,...i}){return a.jsxs(fh,{...i,children:[a.jsxs("div",{className:"grid gap-1",children:[n&&a.jsx(mh,{children:n}),r&&a.jsx(hh,{children:r})]}),o,a.jsx(ph,{})]},t)}),a.jsx(dh,{})]})}var _d=["light","dark"],Ex="(prefers-color-scheme: dark)",Nx=x.createContext(void 0),Px={setTheme:e=>{},themes:[]},Tx=()=>{var e;return(e=x.useContext(Nx))!=null?e:Px};x.memo(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:r,enableColorScheme:o,defaultTheme:i,value:s,attrs:l,nonce:c})=>{let u=i==="system",f=n==="class"?`var d=document.documentElement,c=d.classList;${`c.remove(${l.map(w=>`'${w}'`).join(",")})`};`:`var d=document.documentElement,n='${n}',s='setAttribute';`,p=o?_d.includes(i)&&i?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",d=(w,v=!1,b=!0)=>{let h=s?s[w]:w,m=v?w+"|| ''":`'${h}'`,g="";return o&&b&&!v&&_d.includes(w)&&(g+=`d.style.colorScheme = '${w}';`),n==="class"?v||h?g+=`c.add(${m})`:g+="null":h&&(g+=`d[s](n,${m})`),g},y=e?`!function(){${f}${d(e)}}()`:r?`!function(){try{${f}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${Ex}',m=window.matchMedia(t);if(m.media!==t||m.matches){${d("dark")}}else{${d("light")}}}else if(e){${s?`var x=${JSON.stringify(s)};`:""}${d(s?"x[e]":"e",!0)}}${u?"":"else{"+d(i,!1,!1)+"}"}${p}}catch(e){}}()`:`!function(){try{${f}var e=localStorage.getItem('${t}');if(e){${s?`var x=${JSON.stringify(s)};`:""}${d(s?"x[e]":"e",!0)}}else{${d(i,!1,!1)};}${p}}catch(t){}}();`;return x.createElement("script",{nonce:c,dangerouslySetInnerHTML:{__html:y}})});var Rx=e=>{switch(e){case"success":return _x;case"info":return zx;case"warning":return Ax;case"error":return Lx;default:return null}},Ox=Array(12).fill(0),Mx=({visible:e})=>O.createElement("div",{className:"sonner-loading-wrapper","data-visible":e},O.createElement("div",{className:"sonner-spinner"},Ox.map((t,n)=>O.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${n}`})))),_x=O.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},O.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),Ax=O.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},O.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),zx=O.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},O.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),Lx=O.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},O.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),Dx=()=>{let[e,t]=O.useState(document.hidden);return O.useEffect(()=>{let n=()=>{t(document.hidden)};return document.addEventListener("visibilitychange",n),()=>window.removeEventListener("visibilitychange",n)},[]),e},Fl=1,Ix=class{constructor(){this.subscribe=e=>(this.subscribers.push(e),()=>{let t=this.subscribers.indexOf(e);this.subscribers.splice(t,1)}),this.publish=e=>{this.subscribers.forEach(t=>t(e))},this.addToast=e=>{this.publish(e),this.toasts=[...this.toasts,e]},this.create=e=>{var t;let{message:n,...r}=e,o=typeof(e==null?void 0:e.id)=="number"||((t=e.id)==null?void 0:t.length)>0?e.id:Fl++,i=this.toasts.find(l=>l.id===o),s=e.dismissible===void 0?!0:e.dismissible;return i?this.toasts=this.toasts.map(l=>l.id===o?(this.publish({...l,...e,id:o,title:n}),{...l,...e,id:o,dismissible:s,title:n}):l):this.addToast({title:n,...r,dismissible:s,id:o}),o},this.dismiss=e=>(e||this.toasts.forEach(t=>{this.subscribers.forEach(n=>n({id:t.id,dismiss:!0}))}),this.subscribers.forEach(t=>t({id:e,dismiss:!0})),e),this.message=(e,t)=>this.create({...t,message:e}),this.error=(e,t)=>this.create({...t,message:e,type:"error"}),this.success=(e,t)=>this.create({...t,type:"success",message:e}),this.info=(e,t)=>this.create({...t,type:"info",message:e}),this.warning=(e,t)=>this.create({...t,type:"warning",message:e}),this.loading=(e,t)=>this.create({...t,type:"loading",message:e}),this.promise=(e,t)=>{if(!t)return;let n;t.loading!==void 0&&(n=this.create({...t,promise:e,type:"loading",message:t.loading,description:typeof t.description!="function"?t.description:void 0}));let r=e instanceof Promise?e:e(),o=n!==void 0;return r.then(async i=>{if($x(i)&&!i.ok){o=!1;let s=typeof t.error=="function"?await t.error(`HTTP error! status: ${i.status}`):t.error,l=typeof t.description=="function"?await t.description(`HTTP error! status: ${i.status}`):t.description;this.create({id:n,type:"error",message:s,description:l})}else if(t.success!==void 0){o=!1;let s=typeof t.success=="function"?await t.success(i):t.success,l=typeof t.description=="function"?await t.description(i):t.description;this.create({id:n,type:"success",message:s,description:l})}}).catch(async i=>{if(t.error!==void 0){o=!1;let s=typeof t.error=="function"?await t.error(i):t.error,l=typeof t.description=="function"?await t.description(i):t.description;this.create({id:n,type:"error",message:s,description:l})}}).finally(()=>{var i;o&&(this.dismiss(n),n=void 0),(i=t.finally)==null||i.call(t)}),n},this.custom=(e,t)=>{let n=(t==null?void 0:t.id)||Fl++;return this.create({jsx:e(n),id:n,...t}),n},this.subscribers=[],this.toasts=[]}},Qe=new Ix,Fx=(e,t)=>{let n=(t==null?void 0:t.id)||Fl++;return Qe.addToast({title:e,...t,id:n}),n},$x=e=>e&&typeof e=="object"&&"ok"in e&&typeof e.ok=="boolean"&&"status"in e&&typeof e.status=="number",Ux=Fx,Bx=()=>Qe.toasts;Object.assign(Ux,{success:Qe.success,info:Qe.info,warning:Qe.warning,error:Qe.error,custom:Qe.custom,message:Qe.message,promise:Qe.promise,dismiss:Qe.dismiss,loading:Qe.loading},{getHistory:Bx});function Wx(e,{insertAt:t}={}){if(typeof document>"u")return;let n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}Wx(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function _i(e){return e.label!==void 0}var Vx=3,Hx="32px",Qx=4e3,Yx=356,Kx=14,Gx=20,Xx=200;function qx(...e){return e.filter(Boolean).join(" ")}var Zx=e=>{var t,n,r,o,i,s,l,c,u,f;let{invert:p,toast:d,unstyled:y,interacting:w,setHeights:v,visibleToasts:b,heights:h,index:m,toasts:g,expanded:k,removeToast:S,defaultRichColors:C,closeButton:E,style:P,cancelButtonStyle:L,actionButtonStyle:M,className:$="",descriptionClassName:D="",duration:Q,position:_,gap:Y,loadingIcon:U,expandByDefault:K,classNames:j,icons:R,closeButtonAriaLabel:I="Close toast",pauseWhenPageIsHidden:z,cn:F}=e,[X,le]=O.useState(!1),[Ve,J]=O.useState(!1),[lt,Gt]=O.useState(!1),[Xt,qt]=O.useState(!1),[ci,sr]=O.useState(0),[zn,ro]=O.useState(0),ui=O.useRef(null),Zt=O.useRef(null),na=m===0,ra=m+1<=b,ke=d.type,ar=d.dismissible!==!1,lg=d.className||"",cg=d.descriptionClassName||"",di=O.useMemo(()=>h.findIndex(B=>B.toastId===d.id)||0,[h,d.id]),ug=O.useMemo(()=>{var B;return(B=d.closeButton)!=null?B:E},[d.closeButton,E]),au=O.useMemo(()=>d.duration||Q||Qx,[d.duration,Q]),oa=O.useRef(0),lr=O.useRef(0),lu=O.useRef(0),cr=O.useRef(null),[cu,dg]=_.split("-"),uu=O.useMemo(()=>h.reduce((B,re,te)=>te>=di?B:B+re.height,0),[h,di]),du=Dx(),fg=d.invert||p,ia=ke==="loading";lr.current=O.useMemo(()=>di*Y+uu,[di,uu]),O.useEffect(()=>{le(!0)},[]),O.useLayoutEffect(()=>{if(!X)return;let B=Zt.current,re=B.style.height;B.style.height="auto";let te=B.getBoundingClientRect().height;B.style.height=re,ro(te),v(bt=>bt.find(kt=>kt.toastId===d.id)?bt.map(kt=>kt.toastId===d.id?{...kt,height:te}:kt):[{toastId:d.id,height:te,position:d.position},...bt])},[X,d.title,d.description,v,d.id]);let Jt=O.useCallback(()=>{J(!0),sr(lr.current),v(B=>B.filter(re=>re.toastId!==d.id)),setTimeout(()=>{S(d)},Xx)},[d,S,v,lr]);O.useEffect(()=>{if(d.promise&&ke==="loading"||d.duration===1/0||d.type==="loading")return;let B,re=au;return k||w||z&&du?(()=>{if(lu.current<oa.current){let te=new Date().getTime()-oa.current;re=re-te}lu.current=new Date().getTime()})():re!==1/0&&(oa.current=new Date().getTime(),B=setTimeout(()=>{var te;(te=d.onAutoClose)==null||te.call(d,d),Jt()},re)),()=>clearTimeout(B)},[k,w,K,d,au,Jt,d.promise,ke,z,du]),O.useEffect(()=>{let B=Zt.current;if(B){let re=B.getBoundingClientRect().height;return ro(re),v(te=>[{toastId:d.id,height:re,position:d.position},...te]),()=>v(te=>te.filter(bt=>bt.toastId!==d.id))}},[v,d.id]),O.useEffect(()=>{d.delete&&Jt()},[Jt,d.delete]);function pg(){return R!=null&&R.loading?O.createElement("div",{className:"sonner-loader","data-visible":ke==="loading"},R.loading):U?O.createElement("div",{className:"sonner-loader","data-visible":ke==="loading"},U):O.createElement(Mx,{visible:ke==="loading"})}return O.createElement("li",{"aria-live":d.important?"assertive":"polite","aria-atomic":"true",role:"status",tabIndex:0,ref:Zt,className:F($,lg,j==null?void 0:j.toast,(t=d==null?void 0:d.classNames)==null?void 0:t.toast,j==null?void 0:j.default,j==null?void 0:j[ke],(n=d==null?void 0:d.classNames)==null?void 0:n[ke]),"data-sonner-toast":"","data-rich-colors":(r=d.richColors)!=null?r:C,"data-styled":!(d.jsx||d.unstyled||y),"data-mounted":X,"data-promise":!!d.promise,"data-removed":Ve,"data-visible":ra,"data-y-position":cu,"data-x-position":dg,"data-index":m,"data-front":na,"data-swiping":lt,"data-dismissible":ar,"data-type":ke,"data-invert":fg,"data-swipe-out":Xt,"data-expanded":!!(k||K&&X),style:{"--index":m,"--toasts-before":m,"--z-index":g.length-m,"--offset":`${Ve?ci:lr.current}px`,"--initial-height":K?"auto":`${zn}px`,...P,...d.style},onPointerDown:B=>{ia||!ar||(ui.current=new Date,sr(lr.current),B.target.setPointerCapture(B.pointerId),B.target.tagName!=="BUTTON"&&(Gt(!0),cr.current={x:B.clientX,y:B.clientY}))},onPointerUp:()=>{var B,re,te,bt;if(Xt||!ar)return;cr.current=null;let kt=Number(((B=Zt.current)==null?void 0:B.style.getPropertyValue("--swipe-amount").replace("px",""))||0),fi=new Date().getTime()-((re=ui.current)==null?void 0:re.getTime()),mg=Math.abs(kt)/fi;if(Math.abs(kt)>=Gx||mg>.11){sr(lr.current),(te=d.onDismiss)==null||te.call(d,d),Jt(),qt(!0);return}(bt=Zt.current)==null||bt.style.setProperty("--swipe-amount","0px"),Gt(!1)},onPointerMove:B=>{var re;if(!cr.current||!ar)return;let te=B.clientY-cr.current.y,bt=B.clientX-cr.current.x,kt=(cu==="top"?Math.min:Math.max)(0,te),fi=B.pointerType==="touch"?10:2;Math.abs(kt)>fi?(re=Zt.current)==null||re.style.setProperty("--swipe-amount",`${te}px`):Math.abs(bt)>fi&&(cr.current=null)}},ug&&!d.jsx?O.createElement("button",{"aria-label":I,"data-disabled":ia,"data-close-button":!0,onClick:ia||!ar?()=>{}:()=>{var B;Jt(),(B=d.onDismiss)==null||B.call(d,d)},className:F(j==null?void 0:j.closeButton,(o=d==null?void 0:d.classNames)==null?void 0:o.closeButton)},O.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},O.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),O.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))):null,d.jsx||O.isValidElement(d.title)?d.jsx||d.title:O.createElement(O.Fragment,null,ke||d.icon||d.promise?O.createElement("div",{"data-icon":"",className:F(j==null?void 0:j.icon,(i=d==null?void 0:d.classNames)==null?void 0:i.icon)},d.promise||d.type==="loading"&&!d.icon?d.icon||pg():null,d.type!=="loading"?d.icon||(R==null?void 0:R[ke])||Rx(ke):null):null,O.createElement("div",{"data-content":"",className:F(j==null?void 0:j.content,(s=d==null?void 0:d.classNames)==null?void 0:s.content)},O.createElement("div",{"data-title":"",className:F(j==null?void 0:j.title,(l=d==null?void 0:d.classNames)==null?void 0:l.title)},d.title),d.description?O.createElement("div",{"data-description":"",className:F(D,cg,j==null?void 0:j.description,(c=d==null?void 0:d.classNames)==null?void 0:c.description)},d.description):null),O.isValidElement(d.cancel)?d.cancel:d.cancel&&_i(d.cancel)?O.createElement("button",{"data-button":!0,"data-cancel":!0,style:d.cancelButtonStyle||L,onClick:B=>{var re,te;_i(d.cancel)&&ar&&((te=(re=d.cancel).onClick)==null||te.call(re,B),Jt())},className:F(j==null?void 0:j.cancelButton,(u=d==null?void 0:d.classNames)==null?void 0:u.cancelButton)},d.cancel.label):null,O.isValidElement(d.action)?d.action:d.action&&_i(d.action)?O.createElement("button",{"data-button":!0,"data-action":!0,style:d.actionButtonStyle||M,onClick:B=>{var re,te;_i(d.action)&&(B.defaultPrevented||((te=(re=d.action).onClick)==null||te.call(re,B),Jt()))},className:F(j==null?void 0:j.actionButton,(f=d==null?void 0:d.classNames)==null?void 0:f.actionButton)},d.action.label):null))};function Ad(){if(typeof window>"u"||typeof document>"u")return"ltr";let e=document.documentElement.getAttribute("dir");return e==="auto"||!e?window.getComputedStyle(document.documentElement).direction:e}var Jx=e=>{let{invert:t,position:n="bottom-right",hotkey:r=["altKey","KeyT"],expand:o,closeButton:i,className:s,offset:l,theme:c="light",richColors:u,duration:f,style:p,visibleToasts:d=Vx,toastOptions:y,dir:w=Ad(),gap:v=Kx,loadingIcon:b,icons:h,containerAriaLabel:m="Notifications",pauseWhenPageIsHidden:g,cn:k=qx}=e,[S,C]=O.useState([]),E=O.useMemo(()=>Array.from(new Set([n].concat(S.filter(z=>z.position).map(z=>z.position)))),[S,n]),[P,L]=O.useState([]),[M,$]=O.useState(!1),[D,Q]=O.useState(!1),[_,Y]=O.useState(c!=="system"?c:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),U=O.useRef(null),K=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),j=O.useRef(null),R=O.useRef(!1),I=O.useCallback(z=>{var F;(F=S.find(X=>X.id===z.id))!=null&&F.delete||Qe.dismiss(z.id),C(X=>X.filter(({id:le})=>le!==z.id))},[S]);return O.useEffect(()=>Qe.subscribe(z=>{if(z.dismiss){C(F=>F.map(X=>X.id===z.id?{...X,delete:!0}:X));return}setTimeout(()=>{Nm.flushSync(()=>{C(F=>{let X=F.findIndex(le=>le.id===z.id);return X!==-1?[...F.slice(0,X),{...F[X],...z},...F.slice(X+1)]:[z,...F]})})})}),[]),O.useEffect(()=>{if(c!=="system"){Y(c);return}c==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?Y("dark"):Y("light")),typeof window<"u"&&window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",({matches:z})=>{Y(z?"dark":"light")})},[c]),O.useEffect(()=>{S.length<=1&&$(!1)},[S]),O.useEffect(()=>{let z=F=>{var X,le;r.every(Ve=>F[Ve]||F.code===Ve)&&($(!0),(X=U.current)==null||X.focus()),F.code==="Escape"&&(document.activeElement===U.current||(le=U.current)!=null&&le.contains(document.activeElement))&&$(!1)};return document.addEventListener("keydown",z),()=>document.removeEventListener("keydown",z)},[r]),O.useEffect(()=>{if(U.current)return()=>{j.current&&(j.current.focus({preventScroll:!0}),j.current=null,R.current=!1)}},[U.current]),S.length?O.createElement("section",{"aria-label":`${m} ${K}`,tabIndex:-1},E.map((z,F)=>{var X;let[le,Ve]=z.split("-");return O.createElement("ol",{key:z,dir:w==="auto"?Ad():w,tabIndex:-1,ref:U,className:s,"data-sonner-toaster":!0,"data-theme":_,"data-y-position":le,"data-x-position":Ve,style:{"--front-toast-height":`${((X=P[0])==null?void 0:X.height)||0}px`,"--offset":typeof l=="number"?`${l}px`:l||Hx,"--width":`${Yx}px`,"--gap":`${v}px`,...p},onBlur:J=>{R.current&&!J.currentTarget.contains(J.relatedTarget)&&(R.current=!1,j.current&&(j.current.focus({preventScroll:!0}),j.current=null))},onFocus:J=>{J.target instanceof HTMLElement&&J.target.dataset.dismissible==="false"||R.current||(R.current=!0,j.current=J.relatedTarget)},onMouseEnter:()=>$(!0),onMouseMove:()=>$(!0),onMouseLeave:()=>{D||$(!1)},onPointerDown:J=>{J.target instanceof HTMLElement&&J.target.dataset.dismissible==="false"||Q(!0)},onPointerUp:()=>Q(!1)},S.filter(J=>!J.position&&F===0||J.position===z).map((J,lt)=>{var Gt,Xt;return O.createElement(Zx,{key:J.id,icons:h,index:lt,toast:J,defaultRichColors:u,duration:(Gt=y==null?void 0:y.duration)!=null?Gt:f,className:y==null?void 0:y.className,descriptionClassName:y==null?void 0:y.descriptionClassName,invert:t,visibleToasts:d,closeButton:(Xt=y==null?void 0:y.closeButton)!=null?Xt:i,interacting:D,position:z,style:y==null?void 0:y.style,unstyled:y==null?void 0:y.unstyled,classNames:y==null?void 0:y.classNames,cancelButtonStyle:y==null?void 0:y.cancelButtonStyle,actionButtonStyle:y==null?void 0:y.actionButtonStyle,removeToast:I,toasts:S.filter(qt=>qt.position==J.position),heights:P.filter(qt=>qt.position==J.position),setHeights:L,expandByDefault:o,gap:v,loadingIcon:b,expanded:M,pauseWhenPageIsHidden:g,cn:k})}))})):null};const e1=({...e})=>{const{theme:t="system"}=Tx();return a.jsx(Jx,{theme:t,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...e})},t1=["top","right","bottom","left"],Pn=Math.min,Ke=Math.max,ks=Math.round,Ai=Math.floor,Tn=e=>({x:e,y:e}),n1={left:"right",right:"left",bottom:"top",top:"bottom"},r1={start:"end",end:"start"};function $l(e,t,n){return Ke(e,Pn(t,n))}function Qt(e,t){return typeof e=="function"?e(t):e}function Yt(e){return e.split("-")[0]}function eo(e){return e.split("-")[1]}function Gc(e){return e==="x"?"y":"x"}function Xc(e){return e==="y"?"height":"width"}function Rn(e){return["top","bottom"].includes(Yt(e))?"y":"x"}function qc(e){return Gc(Rn(e))}function o1(e,t,n){n===void 0&&(n=!1);const r=eo(e),o=qc(e),i=Xc(o);let s=o==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(s=Ss(s)),[s,Ss(s)]}function i1(e){const t=Ss(e);return[Ul(e),t,Ul(t)]}function Ul(e){return e.replace(/start|end/g,t=>r1[t])}function s1(e,t,n){const r=["left","right"],o=["right","left"],i=["top","bottom"],s=["bottom","top"];switch(e){case"top":case"bottom":return n?t?o:r:t?r:o;case"left":case"right":return t?i:s;default:return[]}}function a1(e,t,n,r){const o=eo(e);let i=s1(Yt(e),n==="start",r);return o&&(i=i.map(s=>s+"-"+o),t&&(i=i.concat(i.map(Ul)))),i}function Ss(e){return e.replace(/left|right|bottom|top/g,t=>n1[t])}function l1(e){return{top:0,right:0,bottom:0,left:0,...e}}function gh(e){return typeof e!="number"?l1(e):{top:e,right:e,bottom:e,left:e}}function js(e){const{x:t,y:n,width:r,height:o}=e;return{width:r,height:o,top:n,left:t,right:t+r,bottom:n+o,x:t,y:n}}function zd(e,t,n){let{reference:r,floating:o}=e;const i=Rn(t),s=qc(t),l=Xc(s),c=Yt(t),u=i==="y",f=r.x+r.width/2-o.width/2,p=r.y+r.height/2-o.height/2,d=r[l]/2-o[l]/2;let y;switch(c){case"top":y={x:f,y:r.y-o.height};break;case"bottom":y={x:f,y:r.y+r.height};break;case"right":y={x:r.x+r.width,y:p};break;case"left":y={x:r.x-o.width,y:p};break;default:y={x:r.x,y:r.y}}switch(eo(t)){case"start":y[s]-=d*(n&&u?-1:1);break;case"end":y[s]+=d*(n&&u?-1:1);break}return y}const c1=async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:s}=n,l=i.filter(Boolean),c=await(s.isRTL==null?void 0:s.isRTL(t));let u=await s.getElementRects({reference:e,floating:t,strategy:o}),{x:f,y:p}=zd(u,r,c),d=r,y={},w=0;for(let v=0;v<l.length;v++){const{name:b,fn:h}=l[v],{x:m,y:g,data:k,reset:S}=await h({x:f,y:p,initialPlacement:r,placement:d,strategy:o,middlewareData:y,rects:u,platform:s,elements:{reference:e,floating:t}});f=m??f,p=g??p,y={...y,[b]:{...y[b],...k}},S&&w<=50&&(w++,typeof S=="object"&&(S.placement&&(d=S.placement),S.rects&&(u=S.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:o}):S.rects),{x:f,y:p}=zd(u,d,c)),v=-1)}return{x:f,y:p,placement:d,strategy:o,middlewareData:y}};async function Qo(e,t){var n;t===void 0&&(t={});const{x:r,y:o,platform:i,rects:s,elements:l,strategy:c}=e,{boundary:u="clippingAncestors",rootBoundary:f="viewport",elementContext:p="floating",altBoundary:d=!1,padding:y=0}=Qt(t,e),w=gh(y),b=l[d?p==="floating"?"reference":"floating":p],h=js(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(b)))==null||n?b:b.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(l.floating)),boundary:u,rootBoundary:f,strategy:c})),m=p==="floating"?{x:r,y:o,width:s.floating.width,height:s.floating.height}:s.reference,g=await(i.getOffsetParent==null?void 0:i.getOffsetParent(l.floating)),k=await(i.isElement==null?void 0:i.isElement(g))?await(i.getScale==null?void 0:i.getScale(g))||{x:1,y:1}:{x:1,y:1},S=js(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:m,offsetParent:g,strategy:c}):m);return{top:(h.top-S.top+w.top)/k.y,bottom:(S.bottom-h.bottom+w.bottom)/k.y,left:(h.left-S.left+w.left)/k.x,right:(S.right-h.right+w.right)/k.x}}const u1=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:o,rects:i,platform:s,elements:l,middlewareData:c}=t,{element:u,padding:f=0}=Qt(e,t)||{};if(u==null)return{};const p=gh(f),d={x:n,y:r},y=qc(o),w=Xc(y),v=await s.getDimensions(u),b=y==="y",h=b?"top":"left",m=b?"bottom":"right",g=b?"clientHeight":"clientWidth",k=i.reference[w]+i.reference[y]-d[y]-i.floating[w],S=d[y]-i.reference[y],C=await(s.getOffsetParent==null?void 0:s.getOffsetParent(u));let E=C?C[g]:0;(!E||!await(s.isElement==null?void 0:s.isElement(C)))&&(E=l.floating[g]||i.floating[w]);const P=k/2-S/2,L=E/2-v[w]/2-1,M=Pn(p[h],L),$=Pn(p[m],L),D=M,Q=E-v[w]-$,_=E/2-v[w]/2+P,Y=$l(D,_,Q),U=!c.arrow&&eo(o)!=null&&_!==Y&&i.reference[w]/2-(_<D?M:$)-v[w]/2<0,K=U?_<D?_-D:_-Q:0;return{[y]:d[y]+K,data:{[y]:Y,centerOffset:_-Y-K,...U&&{alignmentOffset:K}},reset:U}}}),d1=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:o,middlewareData:i,rects:s,initialPlacement:l,platform:c,elements:u}=t,{mainAxis:f=!0,crossAxis:p=!0,fallbackPlacements:d,fallbackStrategy:y="bestFit",fallbackAxisSideDirection:w="none",flipAlignment:v=!0,...b}=Qt(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};const h=Yt(o),m=Rn(l),g=Yt(l)===l,k=await(c.isRTL==null?void 0:c.isRTL(u.floating)),S=d||(g||!v?[Ss(l)]:i1(l)),C=w!=="none";!d&&C&&S.push(...a1(l,v,w,k));const E=[l,...S],P=await Qo(t,b),L=[];let M=((r=i.flip)==null?void 0:r.overflows)||[];if(f&&L.push(P[h]),p){const _=o1(o,s,k);L.push(P[_[0]],P[_[1]])}if(M=[...M,{placement:o,overflows:L}],!L.every(_=>_<=0)){var $,D;const _=((($=i.flip)==null?void 0:$.index)||0)+1,Y=E[_];if(Y)return{data:{index:_,overflows:M},reset:{placement:Y}};let U=(D=M.filter(K=>K.overflows[0]<=0).sort((K,j)=>K.overflows[1]-j.overflows[1])[0])==null?void 0:D.placement;if(!U)switch(y){case"bestFit":{var Q;const K=(Q=M.filter(j=>{if(C){const R=Rn(j.placement);return R===m||R==="y"}return!0}).map(j=>[j.placement,j.overflows.filter(R=>R>0).reduce((R,I)=>R+I,0)]).sort((j,R)=>j[1]-R[1])[0])==null?void 0:Q[0];K&&(U=K);break}case"initialPlacement":U=l;break}if(o!==U)return{reset:{placement:U}}}return{}}}};function Ld(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function Dd(e){return t1.some(t=>e[t]>=0)}const f1=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:r="referenceHidden",...o}=Qt(e,t);switch(r){case"referenceHidden":{const i=await Qo(t,{...o,elementContext:"reference"}),s=Ld(i,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:Dd(s)}}}case"escaped":{const i=await Qo(t,{...o,altBoundary:!0}),s=Ld(i,n.floating);return{data:{escapedOffsets:s,escaped:Dd(s)}}}default:return{}}}}};async function p1(e,t){const{placement:n,platform:r,elements:o}=e,i=await(r.isRTL==null?void 0:r.isRTL(o.floating)),s=Yt(n),l=eo(n),c=Rn(n)==="y",u=["left","top"].includes(s)?-1:1,f=i&&c?-1:1,p=Qt(t,e);let{mainAxis:d,crossAxis:y,alignmentAxis:w}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return l&&typeof w=="number"&&(y=l==="end"?w*-1:w),c?{x:y*f,y:d*u}:{x:d*u,y:y*f}}const m1=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:o,y:i,placement:s,middlewareData:l}=t,c=await p1(t,e);return s===((n=l.offset)==null?void 0:n.placement)&&(r=l.arrow)!=null&&r.alignmentOffset?{}:{x:o+c.x,y:i+c.y,data:{...c,placement:s}}}}},h1=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:i=!0,crossAxis:s=!1,limiter:l={fn:b=>{let{x:h,y:m}=b;return{x:h,y:m}}},...c}=Qt(e,t),u={x:n,y:r},f=await Qo(t,c),p=Rn(Yt(o)),d=Gc(p);let y=u[d],w=u[p];if(i){const b=d==="y"?"top":"left",h=d==="y"?"bottom":"right",m=y+f[b],g=y-f[h];y=$l(m,y,g)}if(s){const b=p==="y"?"top":"left",h=p==="y"?"bottom":"right",m=w+f[b],g=w-f[h];w=$l(m,w,g)}const v=l.fn({...t,[d]:y,[p]:w});return{...v,data:{x:v.x-n,y:v.y-r,enabled:{[d]:i,[p]:s}}}}}},g1=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:o,rects:i,middlewareData:s}=t,{offset:l=0,mainAxis:c=!0,crossAxis:u=!0}=Qt(e,t),f={x:n,y:r},p=Rn(o),d=Gc(p);let y=f[d],w=f[p];const v=Qt(l,t),b=typeof v=="number"?{mainAxis:v,crossAxis:0}:{mainAxis:0,crossAxis:0,...v};if(c){const g=d==="y"?"height":"width",k=i.reference[d]-i.floating[g]+b.mainAxis,S=i.reference[d]+i.reference[g]-b.mainAxis;y<k?y=k:y>S&&(y=S)}if(u){var h,m;const g=d==="y"?"width":"height",k=["top","left"].includes(Yt(o)),S=i.reference[p]-i.floating[g]+(k&&((h=s.offset)==null?void 0:h[p])||0)+(k?0:b.crossAxis),C=i.reference[p]+i.reference[g]+(k?0:((m=s.offset)==null?void 0:m[p])||0)-(k?b.crossAxis:0);w<S?w=S:w>C&&(w=C)}return{[d]:y,[p]:w}}}},v1=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var n,r;const{placement:o,rects:i,platform:s,elements:l}=t,{apply:c=()=>{},...u}=Qt(e,t),f=await Qo(t,u),p=Yt(o),d=eo(o),y=Rn(o)==="y",{width:w,height:v}=i.floating;let b,h;p==="top"||p==="bottom"?(b=p,h=d===(await(s.isRTL==null?void 0:s.isRTL(l.floating))?"start":"end")?"left":"right"):(h=p,b=d==="end"?"top":"bottom");const m=v-f.top-f.bottom,g=w-f.left-f.right,k=Pn(v-f[b],m),S=Pn(w-f[h],g),C=!t.middlewareData.shift;let E=k,P=S;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(P=g),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(E=m),C&&!d){const M=Ke(f.left,0),$=Ke(f.right,0),D=Ke(f.top,0),Q=Ke(f.bottom,0);y?P=w-2*(M!==0||$!==0?M+$:Ke(f.left,f.right)):E=v-2*(D!==0||Q!==0?D+Q:Ke(f.top,f.bottom))}await c({...t,availableWidth:P,availableHeight:E});const L=await s.getDimensions(l.floating);return w!==L.width||v!==L.height?{reset:{rects:!0}}:{}}}};function Ks(){return typeof window<"u"}function to(e){return vh(e)?(e.nodeName||"").toLowerCase():"#document"}function qe(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function _t(e){var t;return(t=(vh(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function vh(e){return Ks()?e instanceof Node||e instanceof qe(e).Node:!1}function xt(e){return Ks()?e instanceof Element||e instanceof qe(e).Element:!1}function Mt(e){return Ks()?e instanceof HTMLElement||e instanceof qe(e).HTMLElement:!1}function Id(e){return!Ks()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof qe(e).ShadowRoot}function si(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=wt(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function y1(e){return["table","td","th"].includes(to(e))}function Gs(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function Zc(e){const t=Jc(),n=xt(e)?wt(e):e;return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function x1(e){let t=On(e);for(;Mt(t)&&!Yr(t);){if(Zc(t))return t;if(Gs(t))return null;t=On(t)}return null}function Jc(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Yr(e){return["html","body","#document"].includes(to(e))}function wt(e){return qe(e).getComputedStyle(e)}function Xs(e){return xt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function On(e){if(to(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Id(e)&&e.host||_t(e);return Id(t)?t.host:t}function yh(e){const t=On(e);return Yr(t)?e.ownerDocument?e.ownerDocument.body:e.body:Mt(t)&&si(t)?t:yh(t)}function Yo(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const o=yh(e),i=o===((r=e.ownerDocument)==null?void 0:r.body),s=qe(o);if(i){const l=Bl(s);return t.concat(s,s.visualViewport||[],si(o)?o:[],l&&n?Yo(l):[])}return t.concat(o,Yo(o,[],n))}function Bl(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function xh(e){const t=wt(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=Mt(e),i=o?e.offsetWidth:n,s=o?e.offsetHeight:r,l=ks(n)!==i||ks(r)!==s;return l&&(n=i,r=s),{width:n,height:r,$:l}}function eu(e){return xt(e)?e:e.contextElement}function Rr(e){const t=eu(e);if(!Mt(t))return Tn(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:i}=xh(t);let s=(i?ks(n.width):n.width)/r,l=(i?ks(n.height):n.height)/o;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const w1=Tn(0);function wh(e){const t=qe(e);return!Jc()||!t.visualViewport?w1:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function b1(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==qe(e)?!1:t}function Jn(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const o=e.getBoundingClientRect(),i=eu(e);let s=Tn(1);t&&(r?xt(r)&&(s=Rr(r)):s=Rr(e));const l=b1(i,n,r)?wh(i):Tn(0);let c=(o.left+l.x)/s.x,u=(o.top+l.y)/s.y,f=o.width/s.x,p=o.height/s.y;if(i){const d=qe(i),y=r&&xt(r)?qe(r):r;let w=d,v=Bl(w);for(;v&&r&&y!==w;){const b=Rr(v),h=v.getBoundingClientRect(),m=wt(v),g=h.left+(v.clientLeft+parseFloat(m.paddingLeft))*b.x,k=h.top+(v.clientTop+parseFloat(m.paddingTop))*b.y;c*=b.x,u*=b.y,f*=b.x,p*=b.y,c+=g,u+=k,w=qe(v),v=Bl(w)}}return js({width:f,height:p,x:c,y:u})}function k1(e){let{elements:t,rect:n,offsetParent:r,strategy:o}=e;const i=o==="fixed",s=_t(r),l=t?Gs(t.floating):!1;if(r===s||l&&i)return n;let c={scrollLeft:0,scrollTop:0},u=Tn(1);const f=Tn(0),p=Mt(r);if((p||!p&&!i)&&((to(r)!=="body"||si(s))&&(c=Xs(r)),Mt(r))){const d=Jn(r);u=Rr(r),f.x=d.x+r.clientLeft,f.y=d.y+r.clientTop}return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-c.scrollLeft*u.x+f.x,y:n.y*u.y-c.scrollTop*u.y+f.y}}function S1(e){return Array.from(e.getClientRects())}function Wl(e,t){const n=Xs(e).scrollLeft;return t?t.left+n:Jn(_t(e)).left+n}function j1(e){const t=_t(e),n=Xs(e),r=e.ownerDocument.body,o=Ke(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=Ke(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let s=-n.scrollLeft+Wl(e);const l=-n.scrollTop;return wt(r).direction==="rtl"&&(s+=Ke(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:s,y:l}}function C1(e,t){const n=qe(e),r=_t(e),o=n.visualViewport;let i=r.clientWidth,s=r.clientHeight,l=0,c=0;if(o){i=o.width,s=o.height;const u=Jc();(!u||u&&t==="fixed")&&(l=o.offsetLeft,c=o.offsetTop)}return{width:i,height:s,x:l,y:c}}function E1(e,t){const n=Jn(e,!0,t==="fixed"),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=Mt(e)?Rr(e):Tn(1),s=e.clientWidth*i.x,l=e.clientHeight*i.y,c=o*i.x,u=r*i.y;return{width:s,height:l,x:c,y:u}}function Fd(e,t,n){let r;if(t==="viewport")r=C1(e,n);else if(t==="document")r=j1(_t(e));else if(xt(t))r=E1(t,n);else{const o=wh(e);r={...t,x:t.x-o.x,y:t.y-o.y}}return js(r)}function bh(e,t){const n=On(e);return n===t||!xt(n)||Yr(n)?!1:wt(n).position==="fixed"||bh(n,t)}function N1(e,t){const n=t.get(e);if(n)return n;let r=Yo(e,[],!1).filter(l=>xt(l)&&to(l)!=="body"),o=null;const i=wt(e).position==="fixed";let s=i?On(e):e;for(;xt(s)&&!Yr(s);){const l=wt(s),c=Zc(s);!c&&l.position==="fixed"&&(o=null),(i?!c&&!o:!c&&l.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||si(s)&&!c&&bh(e,s))?r=r.filter(f=>f!==s):o=l,s=On(s)}return t.set(e,r),r}function P1(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const s=[...n==="clippingAncestors"?Gs(t)?[]:N1(t,this._c):[].concat(n),r],l=s[0],c=s.reduce((u,f)=>{const p=Fd(t,f,o);return u.top=Ke(p.top,u.top),u.right=Pn(p.right,u.right),u.bottom=Pn(p.bottom,u.bottom),u.left=Ke(p.left,u.left),u},Fd(t,l,o));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function T1(e){const{width:t,height:n}=xh(e);return{width:t,height:n}}function R1(e,t,n){const r=Mt(t),o=_t(t),i=n==="fixed",s=Jn(e,!0,i,t);let l={scrollLeft:0,scrollTop:0};const c=Tn(0);if(r||!r&&!i)if((to(t)!=="body"||si(o))&&(l=Xs(t)),r){const y=Jn(t,!0,i,t);c.x=y.x+t.clientLeft,c.y=y.y+t.clientTop}else o&&(c.x=Wl(o));let u=0,f=0;if(o&&!r&&!i){const y=o.getBoundingClientRect();f=y.top+l.scrollTop,u=y.left+l.scrollLeft-Wl(o,y)}const p=s.left+l.scrollLeft-c.x-u,d=s.top+l.scrollTop-c.y-f;return{x:p,y:d,width:s.width,height:s.height}}function Da(e){return wt(e).position==="static"}function $d(e,t){if(!Mt(e)||wt(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return _t(e)===n&&(n=n.ownerDocument.body),n}function kh(e,t){const n=qe(e);if(Gs(e))return n;if(!Mt(e)){let o=On(e);for(;o&&!Yr(o);){if(xt(o)&&!Da(o))return o;o=On(o)}return n}let r=$d(e,t);for(;r&&y1(r)&&Da(r);)r=$d(r,t);return r&&Yr(r)&&Da(r)&&!Zc(r)?n:r||x1(e)||n}const O1=async function(e){const t=this.getOffsetParent||kh,n=this.getDimensions,r=await n(e.floating);return{reference:R1(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function M1(e){return wt(e).direction==="rtl"}const _1={convertOffsetParentRelativeRectToViewportRelativeRect:k1,getDocumentElement:_t,getClippingRect:P1,getOffsetParent:kh,getElementRects:O1,getClientRects:S1,getDimensions:T1,getScale:Rr,isElement:xt,isRTL:M1};function A1(e,t){let n=null,r;const o=_t(e);function i(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function s(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),i();const{left:u,top:f,width:p,height:d}=e.getBoundingClientRect();if(l||t(),!p||!d)return;const y=Ai(f),w=Ai(o.clientWidth-(u+p)),v=Ai(o.clientHeight-(f+d)),b=Ai(u),m={rootMargin:-y+"px "+-w+"px "+-v+"px "+-b+"px",threshold:Ke(0,Pn(1,c))||1};let g=!0;function k(S){const C=S[0].intersectionRatio;if(C!==c){if(!g)return s();C?s(!1,C):r=setTimeout(()=>{s(!1,1e-7)},1e3)}g=!1}try{n=new IntersectionObserver(k,{...m,root:o.ownerDocument})}catch{n=new IntersectionObserver(k,m)}n.observe(e)}return s(!0),i}function z1(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=r,u=eu(e),f=o||i?[...u?Yo(u):[],...Yo(t)]:[];f.forEach(h=>{o&&h.addEventListener("scroll",n,{passive:!0}),i&&h.addEventListener("resize",n)});const p=u&&l?A1(u,n):null;let d=-1,y=null;s&&(y=new ResizeObserver(h=>{let[m]=h;m&&m.target===u&&y&&(y.unobserve(t),cancelAnimationFrame(d),d=requestAnimationFrame(()=>{var g;(g=y)==null||g.observe(t)})),n()}),u&&!c&&y.observe(u),y.observe(t));let w,v=c?Jn(e):null;c&&b();function b(){const h=Jn(e);v&&(h.x!==v.x||h.y!==v.y||h.width!==v.width||h.height!==v.height)&&n(),v=h,w=requestAnimationFrame(b)}return n(),()=>{var h;f.forEach(m=>{o&&m.removeEventListener("scroll",n),i&&m.removeEventListener("resize",n)}),p==null||p(),(h=y)==null||h.disconnect(),y=null,c&&cancelAnimationFrame(w)}}const L1=m1,D1=h1,I1=d1,F1=v1,$1=f1,Ud=u1,U1=g1,B1=(e,t,n)=>{const r=new Map,o={platform:_1,...n},i={...o.platform,_c:r};return c1(e,t,{...o,platform:i})};var Xi=typeof document<"u"?x.useLayoutEffect:x.useEffect;function Cs(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(!Cs(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,o[r]))return!1;for(r=n;r--!==0;){const i=o[r];if(!(i==="_owner"&&e.$$typeof)&&!Cs(e[i],t[i]))return!1}return!0}return e!==e&&t!==t}function Sh(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Bd(e,t){const n=Sh(e);return Math.round(t*n)/n}function Ia(e){const t=x.useRef(e);return Xi(()=>{t.current=e}),t}function W1(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:o,elements:{reference:i,floating:s}={},transform:l=!0,whileElementsMounted:c,open:u}=e,[f,p]=x.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[d,y]=x.useState(r);Cs(d,r)||y(r);const[w,v]=x.useState(null),[b,h]=x.useState(null),m=x.useCallback(j=>{j!==C.current&&(C.current=j,v(j))},[]),g=x.useCallback(j=>{j!==E.current&&(E.current=j,h(j))},[]),k=i||w,S=s||b,C=x.useRef(null),E=x.useRef(null),P=x.useRef(f),L=c!=null,M=Ia(c),$=Ia(o),D=Ia(u),Q=x.useCallback(()=>{if(!C.current||!E.current)return;const j={placement:t,strategy:n,middleware:d};$.current&&(j.platform=$.current),B1(C.current,E.current,j).then(R=>{const I={...R,isPositioned:D.current!==!1};_.current&&!Cs(P.current,I)&&(P.current=I,ii.flushSync(()=>{p(I)}))})},[d,t,n,$,D]);Xi(()=>{u===!1&&P.current.isPositioned&&(P.current.isPositioned=!1,p(j=>({...j,isPositioned:!1})))},[u]);const _=x.useRef(!1);Xi(()=>(_.current=!0,()=>{_.current=!1}),[]),Xi(()=>{if(k&&(C.current=k),S&&(E.current=S),k&&S){if(M.current)return M.current(k,S,Q);Q()}},[k,S,Q,M,L]);const Y=x.useMemo(()=>({reference:C,floating:E,setReference:m,setFloating:g}),[m,g]),U=x.useMemo(()=>({reference:k,floating:S}),[k,S]),K=x.useMemo(()=>{const j={position:n,left:0,top:0};if(!U.floating)return j;const R=Bd(U.floating,f.x),I=Bd(U.floating,f.y);return l?{...j,transform:"translate("+R+"px, "+I+"px)",...Sh(U.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:R,top:I}},[n,l,U.floating,f.x,f.y]);return x.useMemo(()=>({...f,update:Q,refs:Y,elements:U,floatingStyles:K}),[f,Q,Y,U,K])}const V1=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:r,padding:o}=typeof e=="function"?e(n):e;return r&&t(r)?r.current!=null?Ud({element:r.current,padding:o}).fn(n):{}:r?Ud({element:r,padding:o}).fn(n):{}}}},H1=(e,t)=>({...L1(e),options:[e,t]}),Q1=(e,t)=>({...D1(e),options:[e,t]}),Y1=(e,t)=>({...U1(e),options:[e,t]}),K1=(e,t)=>({...I1(e),options:[e,t]}),G1=(e,t)=>({...F1(e),options:[e,t]}),X1=(e,t)=>({...$1(e),options:[e,t]}),q1=(e,t)=>({...V1(e),options:[e,t]});var Z1="Arrow",jh=x.forwardRef((e,t)=>{const{children:n,width:r=10,height:o=5,...i}=e;return a.jsx(We.svg,{...i,ref:t,width:r,height:o,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:a.jsx("polygon",{points:"0,0 30,0 15,10"})})});jh.displayName=Z1;var J1=jh;function ew(e,t=[]){let n=[];function r(i,s){const l=x.createContext(s),c=n.length;n=[...n,s];function u(p){const{scope:d,children:y,...w}=p,v=(d==null?void 0:d[e][c])||l,b=x.useMemo(()=>w,Object.values(w));return a.jsx(v.Provider,{value:b,children:y})}function f(p,d){const y=(d==null?void 0:d[e][c])||l,w=x.useContext(y);if(w)return w;if(s!==void 0)return s;throw new Error(`\`${p}\` must be used within \`${i}\``)}return u.displayName=i+"Provider",[u,f]}const o=()=>{const i=n.map(s=>x.createContext(s));return function(l){const c=(l==null?void 0:l[e])||i;return x.useMemo(()=>({[`__scope${e}`]:{...l,[e]:c}}),[l,c])}};return o.scopeName=e,[r,tw(o,...t)]}function tw(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(i){const s=r.reduce((l,{useScope:c,scopeName:u})=>{const p=c(i)[`__scope${u}`];return{...l,...p}},{});return x.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])}};return n.scopeName=t.scopeName,n}function nw(e){const[t,n]=x.useState(void 0);return Zn(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const i=o[0];let s,l;if("borderBoxSize"in i){const c=i.borderBoxSize,u=Array.isArray(c)?c[0]:c;s=u.inlineSize,l=u.blockSize}else s=e.offsetWidth,l=e.offsetHeight;n({width:s,height:l})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}var Ch="Popper",[Eh,Nh]=ew(Ch),[mk,Ph]=Eh(Ch),Th="PopperAnchor",Rh=x.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:r,...o}=e,i=Ph(Th,n),s=x.useRef(null),l=yt(t,s);return x.useEffect(()=>{i.onAnchorChange((r==null?void 0:r.current)||s.current)}),r?null:a.jsx(We.div,{...o,ref:l})});Rh.displayName=Th;var tu="PopperContent",[rw,ow]=Eh(tu),Oh=x.forwardRef((e,t)=>{var lt,Gt,Xt,qt,ci,sr;const{__scopePopper:n,side:r="bottom",sideOffset:o=0,align:i="center",alignOffset:s=0,arrowPadding:l=0,avoidCollisions:c=!0,collisionBoundary:u=[],collisionPadding:f=0,sticky:p="partial",hideWhenDetached:d=!1,updatePositionStrategy:y="optimized",onPlaced:w,...v}=e,b=Ph(tu,n),[h,m]=x.useState(null),g=yt(t,zn=>m(zn)),[k,S]=x.useState(null),C=nw(k),E=(C==null?void 0:C.width)??0,P=(C==null?void 0:C.height)??0,L=r+(i!=="center"?"-"+i:""),M=typeof f=="number"?f:{top:0,right:0,bottom:0,left:0,...f},$=Array.isArray(u)?u:[u],D=$.length>0,Q={padding:M,boundary:$.filter(sw),altBoundary:D},{refs:_,floatingStyles:Y,placement:U,isPositioned:K,middlewareData:j}=W1({strategy:"fixed",placement:L,whileElementsMounted:(...zn)=>z1(...zn,{animationFrame:y==="always"}),elements:{reference:b.anchor},middleware:[H1({mainAxis:o+P,alignmentAxis:s}),c&&Q1({mainAxis:!0,crossAxis:!1,limiter:p==="partial"?Y1():void 0,...Q}),c&&K1({...Q}),G1({...Q,apply:({elements:zn,rects:ro,availableWidth:ui,availableHeight:Zt})=>{const{width:na,height:ra}=ro.reference,ke=zn.floating.style;ke.setProperty("--radix-popper-available-width",`${ui}px`),ke.setProperty("--radix-popper-available-height",`${Zt}px`),ke.setProperty("--radix-popper-anchor-width",`${na}px`),ke.setProperty("--radix-popper-anchor-height",`${ra}px`)}}),k&&q1({element:k,padding:l}),aw({arrowWidth:E,arrowHeight:P}),d&&X1({strategy:"referenceHidden",...Q})]}),[R,I]=Ah(U),z=Ot(w);Zn(()=>{K&&(z==null||z())},[K,z]);const F=(lt=j.arrow)==null?void 0:lt.x,X=(Gt=j.arrow)==null?void 0:Gt.y,le=((Xt=j.arrow)==null?void 0:Xt.centerOffset)!==0,[Ve,J]=x.useState();return Zn(()=>{h&&J(window.getComputedStyle(h).zIndex)},[h]),a.jsx("div",{ref:_.setFloating,"data-radix-popper-content-wrapper":"",style:{...Y,transform:K?Y.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:Ve,"--radix-popper-transform-origin":[(qt=j.transformOrigin)==null?void 0:qt.x,(ci=j.transformOrigin)==null?void 0:ci.y].join(" "),...((sr=j.hide)==null?void 0:sr.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:a.jsx(rw,{scope:n,placedSide:R,onArrowChange:S,arrowX:F,arrowY:X,shouldHideArrow:le,children:a.jsx(We.div,{"data-side":R,"data-align":I,...v,ref:g,style:{...v.style,animation:K?void 0:"none"}})})})});Oh.displayName=tu;var Mh="PopperArrow",iw={top:"bottom",right:"left",bottom:"top",left:"right"},_h=x.forwardRef(function(t,n){const{__scopePopper:r,...o}=t,i=ow(Mh,r),s=iw[i.placedSide];return a.jsx("span",{ref:i.onArrowChange,style:{position:"absolute",left:i.arrowX,top:i.arrowY,[s]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[i.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[i.placedSide],visibility:i.shouldHideArrow?"hidden":void 0},children:a.jsx(J1,{...o,ref:n,style:{...o.style,display:"block"}})})});_h.displayName=Mh;function sw(e){return e!==null}var aw=e=>({name:"transformOrigin",options:e,fn(t){var b,h,m;const{placement:n,rects:r,middlewareData:o}=t,s=((b=o.arrow)==null?void 0:b.centerOffset)!==0,l=s?0:e.arrowWidth,c=s?0:e.arrowHeight,[u,f]=Ah(n),p={start:"0%",center:"50%",end:"100%"}[f],d=(((h=o.arrow)==null?void 0:h.x)??0)+l/2,y=(((m=o.arrow)==null?void 0:m.y)??0)+c/2;let w="",v="";return u==="bottom"?(w=s?p:`${d}px`,v=`${-c}px`):u==="top"?(w=s?p:`${d}px`,v=`${r.floating.height+c}px`):u==="right"?(w=`${-c}px`,v=s?p:`${y}px`):u==="left"&&(w=`${r.floating.width+c}px`,v=s?p:`${y}px`),{data:{x:w,y:v}}}});function Ah(e){const[t,n="center"]=e.split("-");return[t,n]}var lw=Rh,cw=Oh,uw=_h,[qs,hk]=Om("Tooltip",[Nh]),nu=Nh(),zh="TooltipProvider",dw=700,Wd="tooltip.open",[fw,Lh]=qs(zh),Dh=e=>{const{__scopeTooltip:t,delayDuration:n=dw,skipDelayDuration:r=300,disableHoverableContent:o=!1,children:i}=e,[s,l]=x.useState(!0),c=x.useRef(!1),u=x.useRef(0);return x.useEffect(()=>{const f=u.current;return()=>window.clearTimeout(f)},[]),a.jsx(fw,{scope:t,isOpenDelayed:s,delayDuration:n,onOpen:x.useCallback(()=>{window.clearTimeout(u.current),l(!1)},[]),onClose:x.useCallback(()=>{window.clearTimeout(u.current),u.current=window.setTimeout(()=>l(!0),r)},[r]),isPointerInTransitRef:c,onPointerInTransitChange:x.useCallback(f=>{c.current=f},[]),disableHoverableContent:o,children:i})};Dh.displayName=zh;var Ih="Tooltip",[gk,Zs]=qs(Ih),Vl="TooltipTrigger",pw=x.forwardRef((e,t)=>{const{__scopeTooltip:n,...r}=e,o=Zs(Vl,n),i=Lh(Vl,n),s=nu(n),l=x.useRef(null),c=yt(t,l,o.onTriggerChange),u=x.useRef(!1),f=x.useRef(!1),p=x.useCallback(()=>u.current=!1,[]);return x.useEffect(()=>()=>document.removeEventListener("pointerup",p),[p]),a.jsx(lw,{asChild:!0,...s,children:a.jsx(We.button,{"aria-describedby":o.open?o.contentId:void 0,"data-state":o.stateAttribute,...r,ref:c,onPointerMove:ye(e.onPointerMove,d=>{d.pointerType!=="touch"&&!f.current&&!i.isPointerInTransitRef.current&&(o.onTriggerEnter(),f.current=!0)}),onPointerLeave:ye(e.onPointerLeave,()=>{o.onTriggerLeave(),f.current=!1}),onPointerDown:ye(e.onPointerDown,()=>{u.current=!0,document.addEventListener("pointerup",p,{once:!0})}),onFocus:ye(e.onFocus,()=>{u.current||o.onOpen()}),onBlur:ye(e.onBlur,o.onClose),onClick:ye(e.onClick,o.onClose)})})});pw.displayName=Vl;var mw="TooltipPortal",[vk,hw]=qs(mw,{forceMount:void 0}),Kr="TooltipContent",Fh=x.forwardRef((e,t)=>{const n=hw(Kr,e.__scopeTooltip),{forceMount:r=n.forceMount,side:o="top",...i}=e,s=Zs(Kr,e.__scopeTooltip);return a.jsx(Vc,{present:r||s.open,children:s.disableHoverableContent?a.jsx($h,{side:o,...i,ref:t}):a.jsx(gw,{side:o,...i,ref:t})})}),gw=x.forwardRef((e,t)=>{const n=Zs(Kr,e.__scopeTooltip),r=Lh(Kr,e.__scopeTooltip),o=x.useRef(null),i=yt(t,o),[s,l]=x.useState(null),{trigger:c,onClose:u}=n,f=o.current,{onPointerInTransitChange:p}=r,d=x.useCallback(()=>{l(null),p(!1)},[p]),y=x.useCallback((w,v)=>{const b=w.currentTarget,h={x:w.clientX,y:w.clientY},m=ww(h,b.getBoundingClientRect()),g=bw(h,m),k=kw(v.getBoundingClientRect()),S=jw([...g,...k]);l(S),p(!0)},[p]);return x.useEffect(()=>()=>d(),[d]),x.useEffect(()=>{if(c&&f){const w=b=>y(b,f),v=b=>y(b,c);return c.addEventListener("pointerleave",w),f.addEventListener("pointerleave",v),()=>{c.removeEventListener("pointerleave",w),f.removeEventListener("pointerleave",v)}}},[c,f,y,d]),x.useEffect(()=>{if(s){const w=v=>{const b=v.target,h={x:v.clientX,y:v.clientY},m=(c==null?void 0:c.contains(b))||(f==null?void 0:f.contains(b)),g=!Sw(h,s);m?d():g&&(d(),u())};return document.addEventListener("pointermove",w),()=>document.removeEventListener("pointermove",w)}},[c,f,s,u,d]),a.jsx($h,{...e,ref:i})}),[vw,yw]=qs(Ih,{isInside:!1}),$h=x.forwardRef((e,t)=>{const{__scopeTooltip:n,children:r,"aria-label":o,onEscapeKeyDown:i,onPointerDownOutside:s,...l}=e,c=Zs(Kr,n),u=nu(n),{onClose:f}=c;return x.useEffect(()=>(document.addEventListener(Wd,f),()=>document.removeEventListener(Wd,f)),[f]),x.useEffect(()=>{if(c.trigger){const p=d=>{const y=d.target;y!=null&&y.contains(c.trigger)&&f()};return window.addEventListener("scroll",p,{capture:!0}),()=>window.removeEventListener("scroll",p,{capture:!0})}},[c.trigger,f]),a.jsx(Wc,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:i,onPointerDownOutside:s,onFocusOutside:p=>p.preventDefault(),onDismiss:f,children:a.jsxs(cw,{"data-state":c.stateAttribute,...u,...l,ref:t,style:{...l.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[a.jsx(Rm,{children:r}),a.jsx(vw,{scope:n,isInside:!0,children:a.jsx(xy,{id:c.contentId,role:"tooltip",children:o||r})})]})})});Fh.displayName=Kr;var Uh="TooltipArrow",xw=x.forwardRef((e,t)=>{const{__scopeTooltip:n,...r}=e,o=nu(n);return yw(Uh,n).isInside?null:a.jsx(uw,{...o,...r,ref:t})});xw.displayName=Uh;function ww(e,t){const n=Math.abs(t.top-e.y),r=Math.abs(t.bottom-e.y),o=Math.abs(t.right-e.x),i=Math.abs(t.left-e.x);switch(Math.min(n,r,o,i)){case i:return"left";case o:return"right";case n:return"top";case r:return"bottom";default:throw new Error("unreachable")}}function bw(e,t,n=5){const r=[];switch(t){case"top":r.push({x:e.x-n,y:e.y+n},{x:e.x+n,y:e.y+n});break;case"bottom":r.push({x:e.x-n,y:e.y-n},{x:e.x+n,y:e.y-n});break;case"left":r.push({x:e.x+n,y:e.y-n},{x:e.x+n,y:e.y+n});break;case"right":r.push({x:e.x-n,y:e.y-n},{x:e.x-n,y:e.y+n});break}return r}function kw(e){const{top:t,right:n,bottom:r,left:o}=e;return[{x:o,y:t},{x:n,y:t},{x:n,y:r},{x:o,y:r}]}function Sw(e,t){const{x:n,y:r}=e;let o=!1;for(let i=0,s=t.length-1;i<t.length;s=i++){const l=t[i].x,c=t[i].y,u=t[s].x,f=t[s].y;c>r!=f>r&&n<(u-l)*(r-c)/(f-c)+l&&(o=!o)}return o}function jw(e){const t=e.slice();return t.sort((n,r)=>n.x<r.x?-1:n.x>r.x?1:n.y<r.y?-1:n.y>r.y?1:0),Cw(t)}function Cw(e){if(e.length<=1)return e.slice();const t=[];for(let r=0;r<e.length;r++){const o=e[r];for(;t.length>=2;){const i=t[t.length-1],s=t[t.length-2];if((i.x-s.x)*(o.y-s.y)>=(i.y-s.y)*(o.x-s.x))t.pop();else break}t.push(o)}t.pop();const n=[];for(let r=e.length-1;r>=0;r--){const o=e[r];for(;n.length>=2;){const i=n[n.length-1],s=n[n.length-2];if((i.x-s.x)*(o.y-s.y)>=(i.y-s.y)*(o.x-s.x))n.pop();else break}n.push(o)}return n.pop(),t.length===1&&n.length===1&&t[0].x===n[0].x&&t[0].y===n[0].y?t:t.concat(n)}var Ew=Dh,Bh=Fh;const Nw=Ew,Pw=x.forwardRef(({className:e,sideOffset:t=4,...n},r)=>a.jsx(Bh,{ref:r,sideOffset:t,className:nr("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...n}));Pw.displayName=Bh.displayName;var Js=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},ea=typeof window>"u"||"Deno"in globalThis;function dt(){}function Tw(e,t){return typeof e=="function"?e(t):e}function Rw(e){return typeof e=="number"&&e>=0&&e!==1/0}function Ow(e,t){return Math.max(e+(t||0)-Date.now(),0)}function Vd(e,t){return typeof e=="function"?e(t):e}function Mw(e,t){return typeof e=="function"?e(t):e}function Hd(e,t){const{type:n="all",exact:r,fetchStatus:o,predicate:i,queryKey:s,stale:l}=e;if(s){if(r){if(t.queryHash!==ru(s,t.options))return!1}else if(!Go(t.queryKey,s))return!1}if(n!=="all"){const c=t.isActive();if(n==="active"&&!c||n==="inactive"&&c)return!1}return!(typeof l=="boolean"&&t.isStale()!==l||o&&o!==t.state.fetchStatus||i&&!i(t))}function Qd(e,t){const{exact:n,status:r,predicate:o,mutationKey:i}=e;if(i){if(!t.options.mutationKey)return!1;if(n){if(Ko(t.options.mutationKey)!==Ko(i))return!1}else if(!Go(t.options.mutationKey,i))return!1}return!(r&&t.state.status!==r||o&&!o(t))}function ru(e,t){return((t==null?void 0:t.queryKeyHashFn)||Ko)(e)}function Ko(e){return JSON.stringify(e,(t,n)=>Hl(n)?Object.keys(n).sort().reduce((r,o)=>(r[o]=n[o],r),{}):n)}function Go(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?!Object.keys(t).some(n=>!Go(e[n],t[n])):!1}function Wh(e,t){if(e===t)return e;const n=Yd(e)&&Yd(t);if(n||Hl(e)&&Hl(t)){const r=n?e:Object.keys(e),o=r.length,i=n?t:Object.keys(t),s=i.length,l=n?[]:{};let c=0;for(let u=0;u<s;u++){const f=n?u:i[u];(!n&&r.includes(f)||n)&&e[f]===void 0&&t[f]===void 0?(l[f]=void 0,c++):(l[f]=Wh(e[f],t[f]),l[f]===e[f]&&e[f]!==void 0&&c++)}return o===s&&c===o?e:l}return t}function Yd(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function Hl(e){if(!Kd(e))return!1;const t=e.constructor;if(t===void 0)return!0;const n=t.prototype;return!(!Kd(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function Kd(e){return Object.prototype.toString.call(e)==="[object Object]"}function _w(e){return new Promise(t=>{setTimeout(t,e)})}function Aw(e,t,n){return typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?Wh(e,t):t}function zw(e,t,n=0){const r=[...e,t];return n&&r.length>n?r.slice(1):r}function Lw(e,t,n=0){const r=[t,...e];return n&&r.length>n?r.slice(0,-1):r}var ou=Symbol();function Vh(e,t){return!e.queryFn&&(t!=null&&t.initialPromise)?()=>t.initialPromise:!e.queryFn||e.queryFn===ou?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}var Un,cn,Or,sf,Dw=(sf=class extends Js{constructor(){super();Z(this,Un);Z(this,cn);Z(this,Or);V(this,Or,t=>{if(!ea&&window.addEventListener){const n=()=>t();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){N(this,cn)||this.setEventListener(N(this,Or))}onUnsubscribe(){var t;this.hasListeners()||((t=N(this,cn))==null||t.call(this),V(this,cn,void 0))}setEventListener(t){var n;V(this,Or,t),(n=N(this,cn))==null||n.call(this),V(this,cn,t(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(t){N(this,Un)!==t&&(V(this,Un,t),this.onFocus())}onFocus(){const t=this.isFocused();this.listeners.forEach(n=>{n(t)})}isFocused(){var t;return typeof N(this,Un)=="boolean"?N(this,Un):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"}},Un=new WeakMap,cn=new WeakMap,Or=new WeakMap,sf),Hh=new Dw,Mr,un,_r,af,Iw=(af=class extends Js{constructor(){super();Z(this,Mr,!0);Z(this,un);Z(this,_r);V(this,_r,t=>{if(!ea&&window.addEventListener){const n=()=>t(!0),r=()=>t(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",r)}}})}onSubscribe(){N(this,un)||this.setEventListener(N(this,_r))}onUnsubscribe(){var t;this.hasListeners()||((t=N(this,un))==null||t.call(this),V(this,un,void 0))}setEventListener(t){var n;V(this,_r,t),(n=N(this,un))==null||n.call(this),V(this,un,t(this.setOnline.bind(this)))}setOnline(t){N(this,Mr)!==t&&(V(this,Mr,t),this.listeners.forEach(r=>{r(t)}))}isOnline(){return N(this,Mr)}},Mr=new WeakMap,un=new WeakMap,_r=new WeakMap,af),Es=new Iw;function Fw(){let e,t;const n=new Promise((o,i)=>{e=o,t=i});n.status="pending",n.catch(()=>{});function r(o){Object.assign(n,o),delete n.resolve,delete n.reject}return n.resolve=o=>{r({status:"fulfilled",value:o}),e(o)},n.reject=o=>{r({status:"rejected",reason:o}),t(o)},n}function $w(e){return Math.min(1e3*2**e,3e4)}function Qh(e){return(e??"online")==="online"?Es.isOnline():!0}var Yh=class extends Error{constructor(e){super("CancelledError"),this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function Fa(e){return e instanceof Yh}function Kh(e){let t=!1,n=0,r=!1,o;const i=Fw(),s=v=>{var b;r||(d(new Yh(v)),(b=e.abort)==null||b.call(e))},l=()=>{t=!0},c=()=>{t=!1},u=()=>Hh.isFocused()&&(e.networkMode==="always"||Es.isOnline())&&e.canRun(),f=()=>Qh(e.networkMode)&&e.canRun(),p=v=>{var b;r||(r=!0,(b=e.onSuccess)==null||b.call(e,v),o==null||o(),i.resolve(v))},d=v=>{var b;r||(r=!0,(b=e.onError)==null||b.call(e,v),o==null||o(),i.reject(v))},y=()=>new Promise(v=>{var b;o=h=>{(r||u())&&v(h)},(b=e.onPause)==null||b.call(e)}).then(()=>{var v;o=void 0,r||(v=e.onContinue)==null||v.call(e)}),w=()=>{if(r)return;let v;const b=n===0?e.initialPromise:void 0;try{v=b??e.fn()}catch(h){v=Promise.reject(h)}Promise.resolve(v).then(p).catch(h=>{var C;if(r)return;const m=e.retry??(ea?0:3),g=e.retryDelay??$w,k=typeof g=="function"?g(n,h):g,S=m===!0||typeof m=="number"&&n<m||typeof m=="function"&&m(n,h);if(t||!S){d(h);return}n++,(C=e.onFail)==null||C.call(e,n,h),_w(k).then(()=>u()?void 0:y()).then(()=>{t?d(h):w()})})};return{promise:i,cancel:s,continue:()=>(o==null||o(),i),cancelRetry:l,continueRetry:c,canStart:f,start:()=>(f()?w():y().then(w),i)}}function Uw(){let e=[],t=0,n=l=>{l()},r=l=>{l()},o=l=>setTimeout(l,0);const i=l=>{t?e.push(l):o(()=>{n(l)})},s=()=>{const l=e;e=[],l.length&&o(()=>{r(()=>{l.forEach(c=>{n(c)})})})};return{batch:l=>{let c;t++;try{c=l()}finally{t--,t||s()}return c},batchCalls:l=>(...c)=>{i(()=>{l(...c)})},schedule:i,setNotifyFunction:l=>{n=l},setBatchNotifyFunction:l=>{r=l},setScheduler:l=>{o=l}}}var Ae=Uw(),Bn,lf,Gh=(lf=class{constructor(){Z(this,Bn)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),Rw(this.gcTime)&&V(this,Bn,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(ea?1/0:5*60*1e3))}clearGcTimeout(){N(this,Bn)&&(clearTimeout(N(this,Bn)),V(this,Bn,void 0))}},Bn=new WeakMap,lf),Ar,zr,tt,Te,Zo,Wn,ft,zt,cf,Bw=(cf=class extends Gh{constructor(t){super();Z(this,ft);Z(this,Ar);Z(this,zr);Z(this,tt);Z(this,Te);Z(this,Zo);Z(this,Wn);V(this,Wn,!1),V(this,Zo,t.defaultOptions),this.setOptions(t.options),this.observers=[],V(this,tt,t.cache),this.queryKey=t.queryKey,this.queryHash=t.queryHash,V(this,Ar,Vw(this.options)),this.state=t.state??N(this,Ar),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var t;return(t=N(this,Te))==null?void 0:t.promise}setOptions(t){this.options={...N(this,Zo),...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&N(this,tt).remove(this)}setData(t,n){const r=Aw(this.state.data,t,this.options);return Ee(this,ft,zt).call(this,{data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(t,n){Ee(this,ft,zt).call(this,{type:"setState",state:t,setStateOptions:n})}cancel(t){var r,o;const n=(r=N(this,Te))==null?void 0:r.promise;return(o=N(this,Te))==null||o.cancel(t),n?n.then(dt).catch(dt):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(N(this,Ar))}isActive(){return this.observers.some(t=>Mw(t.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===ou||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(t=0){return this.state.isInvalidated||this.state.data===void 0||!Ow(this.state.dataUpdatedAt,t)}onFocus(){var n;const t=this.observers.find(r=>r.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(n=N(this,Te))==null||n.continue()}onOnline(){var n;const t=this.observers.find(r=>r.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(n=N(this,Te))==null||n.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),N(this,tt).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(n=>n!==t),this.observers.length||(N(this,Te)&&(N(this,Wn)?N(this,Te).cancel({revert:!0}):N(this,Te).cancelRetry()),this.scheduleGc()),N(this,tt).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Ee(this,ft,zt).call(this,{type:"invalidate"})}fetch(t,n){var c,u,f;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(N(this,Te))return N(this,Te).continueRetry(),N(this,Te).promise}if(t&&this.setOptions(t),!this.options.queryFn){const p=this.observers.find(d=>d.options.queryFn);p&&this.setOptions(p.options)}const r=new AbortController,o=p=>{Object.defineProperty(p,"signal",{enumerable:!0,get:()=>(V(this,Wn,!0),r.signal)})},i=()=>{const p=Vh(this.options,n),d={queryKey:this.queryKey,meta:this.meta};return o(d),V(this,Wn,!1),this.options.persister?this.options.persister(p,d,this):p(d)},s={fetchOptions:n,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:i};o(s),(c=this.options.behavior)==null||c.onFetch(s,this),V(this,zr,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((u=s.fetchOptions)==null?void 0:u.meta))&&Ee(this,ft,zt).call(this,{type:"fetch",meta:(f=s.fetchOptions)==null?void 0:f.meta});const l=p=>{var d,y,w,v;Fa(p)&&p.silent||Ee(this,ft,zt).call(this,{type:"error",error:p}),Fa(p)||((y=(d=N(this,tt).config).onError)==null||y.call(d,p,this),(v=(w=N(this,tt).config).onSettled)==null||v.call(w,this.state.data,p,this)),this.scheduleGc()};return V(this,Te,Kh({initialPromise:n==null?void 0:n.initialPromise,fn:s.fetchFn,abort:r.abort.bind(r),onSuccess:p=>{var d,y,w,v;if(p===void 0){l(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(p)}catch(b){l(b);return}(y=(d=N(this,tt).config).onSuccess)==null||y.call(d,p,this),(v=(w=N(this,tt).config).onSettled)==null||v.call(w,p,this.state.error,this),this.scheduleGc()},onError:l,onFail:(p,d)=>{Ee(this,ft,zt).call(this,{type:"failed",failureCount:p,error:d})},onPause:()=>{Ee(this,ft,zt).call(this,{type:"pause"})},onContinue:()=>{Ee(this,ft,zt).call(this,{type:"continue"})},retry:s.options.retry,retryDelay:s.options.retryDelay,networkMode:s.options.networkMode,canRun:()=>!0})),N(this,Te).start()}},Ar=new WeakMap,zr=new WeakMap,tt=new WeakMap,Te=new WeakMap,Zo=new WeakMap,Wn=new WeakMap,ft=new WeakSet,zt=function(t){const n=r=>{switch(t.type){case"failed":return{...r,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,...Ww(r.data,this.options),fetchMeta:t.meta??null};case"success":return{...r,data:t.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const o=t.error;return Fa(o)&&o.revert&&N(this,zr)?{...N(this,zr),fetchStatus:"idle"}:{...r,error:o,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:o,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...t.state}}};this.state=n(this.state),Ae.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate()}),N(this,tt).notify({query:this,type:"updated",action:t})})},cf);function Ww(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Qh(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function Vw(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=t!==void 0,r=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var Ct,uf,Hw=(uf=class extends Js{constructor(t={}){super();Z(this,Ct);this.config=t,V(this,Ct,new Map)}build(t,n,r){const o=n.queryKey,i=n.queryHash??ru(o,n);let s=this.get(i);return s||(s=new Bw({cache:this,queryKey:o,queryHash:i,options:t.defaultQueryOptions(n),state:r,defaultOptions:t.getQueryDefaults(o)}),this.add(s)),s}add(t){N(this,Ct).has(t.queryHash)||(N(this,Ct).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const n=N(this,Ct).get(t.queryHash);n&&(t.destroy(),n===t&&N(this,Ct).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){Ae.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return N(this,Ct).get(t)}getAll(){return[...N(this,Ct).values()]}find(t){const n={exact:!0,...t};return this.getAll().find(r=>Hd(n,r))}findAll(t={}){const n=this.getAll();return Object.keys(t).length>0?n.filter(r=>Hd(t,r)):n}notify(t){Ae.batch(()=>{this.listeners.forEach(n=>{n(t)})})}onFocus(){Ae.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){Ae.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},Ct=new WeakMap,uf),Et,Me,Vn,Nt,rn,df,Qw=(df=class extends Gh{constructor(t){super();Z(this,Nt);Z(this,Et);Z(this,Me);Z(this,Vn);this.mutationId=t.mutationId,V(this,Me,t.mutationCache),V(this,Et,[]),this.state=t.state||Yw(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){N(this,Et).includes(t)||(N(this,Et).push(t),this.clearGcTimeout(),N(this,Me).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){V(this,Et,N(this,Et).filter(n=>n!==t)),this.scheduleGc(),N(this,Me).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){N(this,Et).length||(this.state.status==="pending"?this.scheduleGc():N(this,Me).remove(this))}continue(){var t;return((t=N(this,Vn))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var o,i,s,l,c,u,f,p,d,y,w,v,b,h,m,g,k,S,C,E;V(this,Vn,Kh({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(P,L)=>{Ee(this,Nt,rn).call(this,{type:"failed",failureCount:P,error:L})},onPause:()=>{Ee(this,Nt,rn).call(this,{type:"pause"})},onContinue:()=>{Ee(this,Nt,rn).call(this,{type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>N(this,Me).canRun(this)}));const n=this.state.status==="pending",r=!N(this,Vn).canStart();try{if(!n){Ee(this,Nt,rn).call(this,{type:"pending",variables:t,isPaused:r}),await((i=(o=N(this,Me).config).onMutate)==null?void 0:i.call(o,t,this));const L=await((l=(s=this.options).onMutate)==null?void 0:l.call(s,t));L!==this.state.context&&Ee(this,Nt,rn).call(this,{type:"pending",context:L,variables:t,isPaused:r})}const P=await N(this,Vn).start();return await((u=(c=N(this,Me).config).onSuccess)==null?void 0:u.call(c,P,t,this.state.context,this)),await((p=(f=this.options).onSuccess)==null?void 0:p.call(f,P,t,this.state.context)),await((y=(d=N(this,Me).config).onSettled)==null?void 0:y.call(d,P,null,this.state.variables,this.state.context,this)),await((v=(w=this.options).onSettled)==null?void 0:v.call(w,P,null,t,this.state.context)),Ee(this,Nt,rn).call(this,{type:"success",data:P}),P}catch(P){try{throw await((h=(b=N(this,Me).config).onError)==null?void 0:h.call(b,P,t,this.state.context,this)),await((g=(m=this.options).onError)==null?void 0:g.call(m,P,t,this.state.context)),await((S=(k=N(this,Me).config).onSettled)==null?void 0:S.call(k,void 0,P,this.state.variables,this.state.context,this)),await((E=(C=this.options).onSettled)==null?void 0:E.call(C,void 0,P,t,this.state.context)),P}finally{Ee(this,Nt,rn).call(this,{type:"error",error:P})}}finally{N(this,Me).runNext(this)}}},Et=new WeakMap,Me=new WeakMap,Vn=new WeakMap,Nt=new WeakSet,rn=function(t){const n=r=>{switch(t.type){case"failed":return{...r,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...r,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:t.error,failureCount:r.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=n(this.state),Ae.batch(()=>{N(this,Et).forEach(r=>{r.onMutationUpdate(t)}),N(this,Me).notify({mutation:this,type:"updated",action:t})})},df);function Yw(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var He,Jo,ff,Kw=(ff=class extends Js{constructor(t={}){super();Z(this,He);Z(this,Jo);this.config=t,V(this,He,new Map),V(this,Jo,Date.now())}build(t,n,r){const o=new Qw({mutationCache:this,mutationId:++pi(this,Jo)._,options:t.defaultMutationOptions(n),state:r});return this.add(o),o}add(t){const n=zi(t),r=N(this,He).get(n)??[];r.push(t),N(this,He).set(n,r),this.notify({type:"added",mutation:t})}remove(t){var r;const n=zi(t);if(N(this,He).has(n)){const o=(r=N(this,He).get(n))==null?void 0:r.filter(i=>i!==t);o&&(o.length===0?N(this,He).delete(n):N(this,He).set(n,o))}this.notify({type:"removed",mutation:t})}canRun(t){var r;const n=(r=N(this,He).get(zi(t)))==null?void 0:r.find(o=>o.state.status==="pending");return!n||n===t}runNext(t){var r;const n=(r=N(this,He).get(zi(t)))==null?void 0:r.find(o=>o!==t&&o.state.isPaused);return(n==null?void 0:n.continue())??Promise.resolve()}clear(){Ae.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}getAll(){return[...N(this,He).values()].flat()}find(t){const n={exact:!0,...t};return this.getAll().find(r=>Qd(n,r))}findAll(t={}){return this.getAll().filter(n=>Qd(t,n))}notify(t){Ae.batch(()=>{this.listeners.forEach(n=>{n(t)})})}resumePausedMutations(){const t=this.getAll().filter(n=>n.state.isPaused);return Ae.batch(()=>Promise.all(t.map(n=>n.continue().catch(dt))))}},He=new WeakMap,Jo=new WeakMap,ff);function zi(e){var t;return((t=e.options.scope)==null?void 0:t.id)??String(e.mutationId)}function Gd(e){return{onFetch:(t,n)=>{var f,p,d,y,w;const r=t.options,o=(d=(p=(f=t.fetchOptions)==null?void 0:f.meta)==null?void 0:p.fetchMore)==null?void 0:d.direction,i=((y=t.state.data)==null?void 0:y.pages)||[],s=((w=t.state.data)==null?void 0:w.pageParams)||[];let l={pages:[],pageParams:[]},c=0;const u=async()=>{let v=!1;const b=g=>{Object.defineProperty(g,"signal",{enumerable:!0,get:()=>(t.signal.aborted?v=!0:t.signal.addEventListener("abort",()=>{v=!0}),t.signal)})},h=Vh(t.options,t.fetchOptions),m=async(g,k,S)=>{if(v)return Promise.reject();if(k==null&&g.pages.length)return Promise.resolve(g);const C={queryKey:t.queryKey,pageParam:k,direction:S?"backward":"forward",meta:t.options.meta};b(C);const E=await h(C),{maxPages:P}=t.options,L=S?Lw:zw;return{pages:L(g.pages,E,P),pageParams:L(g.pageParams,k,P)}};if(o&&i.length){const g=o==="backward",k=g?Gw:Xd,S={pages:i,pageParams:s},C=k(r,S);l=await m(S,C,g)}else{const g=e??i.length;do{const k=c===0?s[0]??r.initialPageParam:Xd(r,l);if(c>0&&k==null)break;l=await m(l,k),c++}while(c<g)}return l};t.options.persister?t.fetchFn=()=>{var v,b;return(b=(v=t.options).persister)==null?void 0:b.call(v,u,{queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n)}:t.fetchFn=u}}}function Xd(e,{pages:t,pageParams:n}){const r=t.length-1;return t.length>0?e.getNextPageParam(t[r],t,n[r],n):void 0}function Gw(e,{pages:t,pageParams:n}){var r;return t.length>0?(r=e.getPreviousPageParam)==null?void 0:r.call(e,t[0],t,n[0],n):void 0}var fe,dn,fn,Lr,Dr,pn,Ir,Fr,pf,Xw=(pf=class{constructor(e={}){Z(this,fe);Z(this,dn);Z(this,fn);Z(this,Lr);Z(this,Dr);Z(this,pn);Z(this,Ir);Z(this,Fr);V(this,fe,e.queryCache||new Hw),V(this,dn,e.mutationCache||new Kw),V(this,fn,e.defaultOptions||{}),V(this,Lr,new Map),V(this,Dr,new Map),V(this,pn,0)}mount(){pi(this,pn)._++,N(this,pn)===1&&(V(this,Ir,Hh.subscribe(async e=>{e&&(await this.resumePausedMutations(),N(this,fe).onFocus())})),V(this,Fr,Es.subscribe(async e=>{e&&(await this.resumePausedMutations(),N(this,fe).onOnline())})))}unmount(){var e,t;pi(this,pn)._--,N(this,pn)===0&&((e=N(this,Ir))==null||e.call(this),V(this,Ir,void 0),(t=N(this,Fr))==null||t.call(this),V(this,Fr,void 0))}isFetching(e){return N(this,fe).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return N(this,dn).findAll({...e,status:"pending"}).length}getQueryData(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=N(this,fe).get(t.queryHash))==null?void 0:n.state.data}ensureQueryData(e){const t=this.getQueryData(e.queryKey);if(t===void 0)return this.fetchQuery(e);{const n=this.defaultQueryOptions(e),r=N(this,fe).build(this,n);return e.revalidateIfStale&&r.isStaleByTime(Vd(n.staleTime,r))&&this.prefetchQuery(n),Promise.resolve(t)}}getQueriesData(e){return N(this,fe).findAll(e).map(({queryKey:t,state:n})=>{const r=n.data;return[t,r]})}setQueryData(e,t,n){const r=this.defaultQueryOptions({queryKey:e}),o=N(this,fe).get(r.queryHash),i=o==null?void 0:o.state.data,s=Tw(t,i);if(s!==void 0)return N(this,fe).build(this,r).setData(s,{...n,manual:!0})}setQueriesData(e,t,n){return Ae.batch(()=>N(this,fe).findAll(e).map(({queryKey:r})=>[r,this.setQueryData(r,t,n)]))}getQueryState(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=N(this,fe).get(t.queryHash))==null?void 0:n.state}removeQueries(e){const t=N(this,fe);Ae.batch(()=>{t.findAll(e).forEach(n=>{t.remove(n)})})}resetQueries(e,t){const n=N(this,fe),r={type:"active",...e};return Ae.batch(()=>(n.findAll(e).forEach(o=>{o.reset()}),this.refetchQueries(r,t)))}cancelQueries(e={},t={}){const n={revert:!0,...t},r=Ae.batch(()=>N(this,fe).findAll(e).map(o=>o.cancel(n)));return Promise.all(r).then(dt).catch(dt)}invalidateQueries(e={},t={}){return Ae.batch(()=>{if(N(this,fe).findAll(e).forEach(r=>{r.invalidate()}),e.refetchType==="none")return Promise.resolve();const n={...e,type:e.refetchType??e.type??"active"};return this.refetchQueries(n,t)})}refetchQueries(e={},t){const n={...t,cancelRefetch:(t==null?void 0:t.cancelRefetch)??!0},r=Ae.batch(()=>N(this,fe).findAll(e).filter(o=>!o.isDisabled()).map(o=>{let i=o.fetch(void 0,n);return n.throwOnError||(i=i.catch(dt)),o.state.fetchStatus==="paused"?Promise.resolve():i}));return Promise.all(r).then(dt)}fetchQuery(e){const t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);const n=N(this,fe).build(this,t);return n.isStaleByTime(Vd(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(dt).catch(dt)}fetchInfiniteQuery(e){return e.behavior=Gd(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(dt).catch(dt)}ensureInfiniteQueryData(e){return e.behavior=Gd(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return Es.isOnline()?N(this,dn).resumePausedMutations():Promise.resolve()}getQueryCache(){return N(this,fe)}getMutationCache(){return N(this,dn)}getDefaultOptions(){return N(this,fn)}setDefaultOptions(e){V(this,fn,e)}setQueryDefaults(e,t){N(this,Lr).set(Ko(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...N(this,Lr).values()];let n={};return t.forEach(r=>{Go(e,r.queryKey)&&(n={...n,...r.defaultOptions})}),n}setMutationDefaults(e,t){N(this,Dr).set(Ko(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...N(this,Dr).values()];let n={};return t.forEach(r=>{Go(e,r.mutationKey)&&(n={...n,...r.defaultOptions})}),n}defaultQueryOptions(e){if(e._defaulted)return e;const t={...N(this,fn).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=ru(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.enabled!==!0&&t.queryFn===ou&&(t.enabled=!1),t}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...N(this,fn).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){N(this,fe).clear(),N(this,dn).clear()}},fe=new WeakMap,dn=new WeakMap,fn=new WeakMap,Lr=new WeakMap,Dr=new WeakMap,pn=new WeakMap,Ir=new WeakMap,Fr=new WeakMap,pf),qw=x.createContext(void 0),Zw=({client:e,children:t})=>(x.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),a.jsx(qw.Provider,{value:e,children:t}));/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xo(){return Xo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xo.apply(this,arguments)}var gn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(gn||(gn={}));const qd="popstate";function Jw(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:s,hash:l}=r.location;return Ql("",{pathname:i,search:s,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Ns(o)}return tb(t,n,null,e)}function ge(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Xh(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function eb(){return Math.random().toString(36).substr(2,8)}function Zd(e,t){return{usr:e.state,key:e.key,idx:t}}function Ql(e,t,n,r){return n===void 0&&(n=null),Xo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?no(t):t,{state:n,key:t&&t.key||r||eb()})}function Ns(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function no(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function tb(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,s=o.history,l=gn.Pop,c=null,u=f();u==null&&(u=0,s.replaceState(Xo({},s.state,{idx:u}),""));function f(){return(s.state||{idx:null}).idx}function p(){l=gn.Pop;let b=f(),h=b==null?null:b-u;u=b,c&&c({action:l,location:v.location,delta:h})}function d(b,h){l=gn.Push;let m=Ql(v.location,b,h);u=f()+1;let g=Zd(m,u),k=v.createHref(m);try{s.pushState(g,"",k)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;o.location.assign(k)}i&&c&&c({action:l,location:v.location,delta:1})}function y(b,h){l=gn.Replace;let m=Ql(v.location,b,h);u=f();let g=Zd(m,u),k=v.createHref(m);s.replaceState(g,"",k),i&&c&&c({action:l,location:v.location,delta:0})}function w(b){let h=o.location.origin!=="null"?o.location.origin:o.location.href,m=typeof b=="string"?b:Ns(b);return m=m.replace(/ $/,"%20"),ge(h,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,h)}let v={get action(){return l},get location(){return e(o,s)},listen(b){if(c)throw new Error("A history only accepts one active listener");return o.addEventListener(qd,p),c=b,()=>{o.removeEventListener(qd,p),c=null}},createHref(b){return t(o,b)},createURL:w,encodeLocation(b){let h=w(b);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:d,replace:y,go(b){return s.go(b)}};return v}var Jd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Jd||(Jd={}));function nb(e,t,n){return n===void 0&&(n="/"),rb(e,t,n,!1)}function rb(e,t,n,r){let o=typeof t=="string"?no(t):t,i=iu(o.pathname||"/",n);if(i==null)return null;let s=qh(e);ob(s);let l=null;for(let c=0;l==null&&c<s.length;++c){let u=hb(i);l=pb(s[c],u,r)}return l}function qh(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,s,l)=>{let c={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};c.relativePath.startsWith("/")&&(ge(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=Cn([r,c.relativePath]),f=n.concat(c);i.children&&i.children.length>0&&(ge(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),qh(i.children,t,f,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:db(u,i.index),routesMeta:f})};return e.forEach((i,s)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))o(i,s);else for(let c of Zh(i.path))o(i,s,c)}),t}function Zh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let s=Zh(r.join("/")),l=[];return l.push(...s.map(c=>c===""?i:[i,c].join("/"))),o&&l.push(...s),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function ob(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:fb(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ib=/^:[\w-]+$/,sb=3,ab=2,lb=1,cb=10,ub=-2,ef=e=>e==="*";function db(e,t){let n=e.split("/"),r=n.length;return n.some(ef)&&(r+=ub),t&&(r+=ab),n.filter(o=>!ef(o)).reduce((o,i)=>o+(ib.test(i)?sb:i===""?lb:cb),r)}function fb(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function pb(e,t,n){let{routesMeta:r}=e,o={},i="/",s=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,f=i==="/"?t:t.slice(i.length)||"/",p=tf({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},f),d=c.route;if(!p&&u&&n&&!r[r.length-1].route.index&&(p=tf({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},f)),!p)return null;Object.assign(o,p.params),s.push({params:o,pathname:Cn([i,p.pathname]),pathnameBase:xb(Cn([i,p.pathnameBase])),route:d}),p.pathnameBase!=="/"&&(i=Cn([i,p.pathnameBase]))}return s}function tf(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=mb(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],s=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((u,f,p)=>{let{paramName:d,isOptional:y}=f;if(d==="*"){let v=l[p]||"";s=i.slice(0,i.length-v.length).replace(/(.)\/+$/,"$1")}const w=l[p];return y&&!w?u[d]=void 0:u[d]=(w||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:s,pattern:e}}function mb(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Xh(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function hb(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Xh(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function iu(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function gb(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?no(e):e;return{pathname:n?n.startsWith("/")?n:vb(n,t):t,search:wb(r),hash:bb(o)}}function vb(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function $a(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function yb(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Jh(e,t){let n=yb(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function eg(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=no(e):(o=Xo({},e),ge(!o.pathname||!o.pathname.includes("?"),$a("?","pathname","search",o)),ge(!o.pathname||!o.pathname.includes("#"),$a("#","pathname","hash",o)),ge(!o.search||!o.search.includes("#"),$a("#","search","hash",o)));let i=e===""||o.pathname==="",s=i?"/":o.pathname,l;if(s==null)l=n;else{let p=t.length-1;if(!r&&s.startsWith("..")){let d=s.split("/");for(;d[0]==="..";)d.shift(),p-=1;o.pathname=d.join("/")}l=p>=0?t[p]:"/"}let c=gb(o,l),u=s&&s!=="/"&&s.endsWith("/"),f=(i||s===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||f)&&(c.pathname+="/"),c}const Cn=e=>e.join("/").replace(/\/\/+/g,"/"),xb=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),wb=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,bb=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function kb(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const tg=["post","put","patch","delete"];new Set(tg);const Sb=["get",...tg];new Set(Sb);/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qo(){return qo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qo.apply(this,arguments)}const su=x.createContext(null),jb=x.createContext(null),rr=x.createContext(null),ta=x.createContext(null),or=x.createContext({outlet:null,matches:[],isDataRoute:!1}),ng=x.createContext(null);function Cb(e,t){let{relative:n}=t===void 0?{}:t;ai()||ge(!1);let{basename:r,navigator:o}=x.useContext(rr),{hash:i,pathname:s,search:l}=og(e,{relative:n}),c=s;return r!=="/"&&(c=s==="/"?r:Cn([r,s])),o.createHref({pathname:c,search:l,hash:i})}function ai(){return x.useContext(ta)!=null}function li(){return ai()||ge(!1),x.useContext(ta).location}function rg(e){x.useContext(rr).static||x.useLayoutEffect(e)}function Eb(){let{isDataRoute:e}=x.useContext(or);return e?Fb():Nb()}function Nb(){ai()||ge(!1);let e=x.useContext(su),{basename:t,future:n,navigator:r}=x.useContext(rr),{matches:o}=x.useContext(or),{pathname:i}=li(),s=JSON.stringify(Jh(o,n.v7_relativeSplatPath)),l=x.useRef(!1);return rg(()=>{l.current=!0}),x.useCallback(function(u,f){if(f===void 0&&(f={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let p=eg(u,JSON.parse(s),i,f.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Cn([t,p.pathname])),(f.replace?r.replace:r.push)(p,f.state,f)},[t,r,s,i,e])}function og(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=x.useContext(rr),{matches:o}=x.useContext(or),{pathname:i}=li(),s=JSON.stringify(Jh(o,r.v7_relativeSplatPath));return x.useMemo(()=>eg(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function Pb(e,t){return Tb(e,t)}function Tb(e,t,n,r){ai()||ge(!1);let{navigator:o}=x.useContext(rr),{matches:i}=x.useContext(or),s=i[i.length-1],l=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let u=li(),f;if(t){var p;let b=typeof t=="string"?no(t):t;c==="/"||(p=b.pathname)!=null&&p.startsWith(c)||ge(!1),f=b}else f=u;let d=f.pathname||"/",y=d;if(c!=="/"){let b=c.replace(/^\//,"").split("/");y="/"+d.replace(/^\//,"").split("/").slice(b.length).join("/")}let w=nb(e,{pathname:y}),v=Ab(w&&w.map(b=>Object.assign({},b,{params:Object.assign({},l,b.params),pathname:Cn([c,o.encodeLocation?o.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?c:Cn([c,o.encodeLocation?o.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),i,n,r);return t&&v?x.createElement(ta.Provider,{value:{location:qo({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:gn.Pop}},v):v}function Rb(){let e=Ib(),t=kb(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),n?x.createElement("pre",{style:o},n):null,null)}const Ob=x.createElement(Rb,null);class Mb extends x.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?x.createElement(or.Provider,{value:this.props.routeContext},x.createElement(ng.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function _b(e){let{routeContext:t,match:n,children:r}=e,o=x.useContext(su);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(or.Provider,{value:t},r)}function Ab(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,l=(o=n)==null?void 0:o.errors;if(l!=null){let f=s.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);f>=0||ge(!1),s=s.slice(0,Math.min(s.length,f+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<s.length;f++){let p=s[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=f),p.route.id){let{loaderData:d,errors:y}=n,w=p.route.loader&&d[p.route.id]===void 0&&(!y||y[p.route.id]===void 0);if(p.route.lazy||w){c=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((f,p,d)=>{let y,w=!1,v=null,b=null;n&&(y=l&&p.route.id?l[p.route.id]:void 0,v=p.route.errorElement||Ob,c&&(u<0&&d===0?(w=!0,b=null):u===d&&(w=!0,b=p.route.hydrateFallbackElement||null)));let h=t.concat(s.slice(0,d+1)),m=()=>{let g;return y?g=v:w?g=b:p.route.Component?g=x.createElement(p.route.Component,null):p.route.element?g=p.route.element:g=f,x.createElement(_b,{match:p,routeContext:{outlet:f,matches:h,isDataRoute:n!=null},children:g})};return n&&(p.route.ErrorBoundary||p.route.errorElement||d===0)?x.createElement(Mb,{location:n.location,revalidation:n.revalidation,component:v,error:y,children:m(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):m()},null)}var ig=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ig||{}),Ps=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ps||{});function zb(e){let t=x.useContext(su);return t||ge(!1),t}function Lb(e){let t=x.useContext(jb);return t||ge(!1),t}function Db(e){let t=x.useContext(or);return t||ge(!1),t}function sg(e){let t=Db(),n=t.matches[t.matches.length-1];return n.route.id||ge(!1),n.route.id}function Ib(){var e;let t=x.useContext(ng),n=Lb(Ps.UseRouteError),r=sg(Ps.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Fb(){let{router:e}=zb(ig.UseNavigateStable),t=sg(Ps.UseNavigateStable),n=x.useRef(!1);return rg(()=>{n.current=!0}),x.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,qo({fromRouteId:t},i)))},[e,t])}function Lt(e){ge(!1)}function $b(e){let{basename:t="/",children:n=null,location:r,navigationType:o=gn.Pop,navigator:i,static:s=!1,future:l}=e;ai()&&ge(!1);let c=t.replace(/^\/*/,"/"),u=x.useMemo(()=>({basename:c,navigator:i,static:s,future:qo({v7_relativeSplatPath:!1},l)}),[c,l,i,s]);typeof r=="string"&&(r=no(r));let{pathname:f="/",search:p="",hash:d="",state:y=null,key:w="default"}=r,v=x.useMemo(()=>{let b=iu(f,c);return b==null?null:{location:{pathname:b,search:p,hash:d,state:y,key:w},navigationType:o}},[c,f,p,d,y,w,o]);return v==null?null:x.createElement(rr.Provider,{value:u},x.createElement(ta.Provider,{children:n,value:v}))}function Ub(e){let{children:t,location:n}=e;return Pb(Yl(t),n)}new Promise(()=>{});function Yl(e,t){t===void 0&&(t=[]);let n=[];return x.Children.forEach(e,(r,o)=>{if(!x.isValidElement(r))return;let i=[...t,o];if(r.type===x.Fragment){n.push.apply(n,Yl(r.props.children,i));return}r.type!==Lt&&ge(!1),!r.props.index||!r.props.children||ge(!1);let s={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Yl(r.props.children,i)),n.push(s)}),n}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Kl(){return Kl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Kl.apply(this,arguments)}function Bb(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Wb(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Vb(e,t){return e.button===0&&(!t||t==="_self")&&!Wb(e)}const Hb=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Qb="6";try{window.__reactRouterVersion=Qb}catch{}const Yb="startTransition",nf=Og[Yb];function Kb(e){let{basename:t,children:n,future:r,window:o}=e,i=x.useRef();i.current==null&&(i.current=Jw({window:o,v5Compat:!0}));let s=i.current,[l,c]=x.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},f=x.useCallback(p=>{u&&nf?nf(()=>c(p)):c(p)},[c,u]);return x.useLayoutEffect(()=>s.listen(f),[s,f]),x.createElement($b,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:s,future:r})}const Gb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Xb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,H=x.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:s,state:l,target:c,to:u,preventScrollReset:f,viewTransition:p}=t,d=Bb(t,Hb),{basename:y}=x.useContext(rr),w,v=!1;if(typeof u=="string"&&Xb.test(u)&&(w=u,Gb))try{let g=new URL(window.location.href),k=u.startsWith("//")?new URL(g.protocol+u):new URL(u),S=iu(k.pathname,y);k.origin===g.origin&&S!=null?u=S+k.search+k.hash:v=!0}catch{}let b=Cb(u,{relative:o}),h=qb(u,{replace:s,state:l,target:c,preventScrollReset:f,relative:o,viewTransition:p});function m(g){r&&r(g),g.defaultPrevented||h(g)}return x.createElement("a",Kl({},d,{href:w||b,onClick:v||i?r:m,ref:n,target:c}))});var rf;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(rf||(rf={}));var of;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(of||(of={}));function qb(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:s,viewTransition:l}=t===void 0?{}:t,c=Eb(),u=li(),f=og(e,{relative:s});return x.useCallback(p=>{if(Vb(p,n)){p.preventDefault();let d=r!==void 0?r:Ns(u)===Ns(f);c(e,{replace:d,state:o,preventScrollReset:i,relative:s,viewTransition:l})}},[u,c,f,r,o,n,e,i,s,l])}const ag=x.createContext(void 0),Zb=({children:e})=>{const[t,n]=x.useState(()=>localStorage.getItem("theme")||"system"),[r,o]=x.useState("light");return x.useEffect(()=>{const i=window.document.documentElement,s=()=>window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";let l;t==="system"?l=s():l=t,o(l),i.classList.remove("light","dark"),i.classList.add(l),localStorage.setItem("theme",t);const c=window.matchMedia("(prefers-color-scheme: dark)"),u=()=>{if(t==="system"){const f=s();o(f),i.classList.remove("light","dark"),i.classList.add(f)}};return c.addEventListener("change",u),()=>c.removeEventListener("change",u)},[t]),a.jsx(ag.Provider,{value:{theme:t,setTheme:n,actualTheme:r},children:e})},Jb=()=>{const e=x.useContext(ag);if(!e)throw new Error("useTheme must be used within ThemeProvider");return e},ek=()=>{const[e,t]=x.useState(!1),[n,r]=x.useState(""),[o,i]=x.useState([{id:1,text:"Hi! How can we help you today?",sender:"support",time:"now"}]),s=()=>{if(!n.trim())return;const l={id:o.length+1,text:n,sender:"user",time:"now"};i([...o,l]),r(""),setTimeout(()=>{const c={id:o.length+2,text:"Thanks for your message! Our team will get back to you shortly.",sender:"support",time:"now"};i(u=>[...u,c])},1e3)};return a.jsxs(a.Fragment,{children:[!e&&a.jsx("button",{onClick:()=>t(!0),className:"fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 z-50 animate-pulse",children:a.jsx(By,{size:24})}),e&&a.jsxs("div",{className:"fixed bottom-6 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col z-50 animate-scale-in",children:[a.jsxs("div",{className:"bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-lg flex justify-between items-center",children:[a.jsxs("div",{children:[a.jsx("h3",{className:"font-semibold",children:"Chat with TekBrandify"}),a.jsx("p",{className:"text-sm opacity-90",children:"We're here to help!"})]}),a.jsx("button",{onClick:()=>t(!1),className:"hover:bg-white/20 p-1 rounded transition-colors",children:a.jsx(ih,{size:20})})]}),a.jsx("div",{className:"flex-1 p-4 overflow-y-auto space-y-3",children:o.map(l=>a.jsx("div",{className:`flex ${l.sender==="user"?"justify-end":"justify-start"}`,children:a.jsxs("div",{className:`max-w-xs p-3 rounded-lg ${l.sender==="user"?"bg-blue-600 text-white":"bg-gray-100 text-gray-800"}`,children:[a.jsx("p",{className:"text-sm",children:l.text}),a.jsx("p",{className:"text-xs opacity-70 mt-1",children:l.time})]})},l.id))}),a.jsx("div",{className:"p-4 border-t border-gray-200",children:a.jsxs("div",{className:"flex gap-2",children:[a.jsx("input",{type:"text",value:n,onChange:l=>r(l.target.value),onKeyPress:l=>l.key==="Enter"&&s(),placeholder:"Type your message...",className:"flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"}),a.jsx("button",{onClick:s,className:"bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors",children:a.jsx(Wy,{size:16})})]})})]})]})},tk=()=>{const{theme:e,setTheme:t}=Jb(),n=[{key:"light",icon:Rd,label:"Light"},{key:"dark",icon:Pd,label:"Dark"},{key:"system",icon:Td,label:"System"}];return a.jsxs("div",{className:"relative group",children:[a.jsxs("button",{className:"p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors",children:[e==="light"&&a.jsx(Rd,{size:20,className:"text-yellow-500"}),e==="dark"&&a.jsx(Pd,{size:20,className:"text-blue-500"}),e==="system"&&a.jsx(Td,{size:20,className:"text-gray-500"})]}),a.jsx("div",{className:"absolute top-full right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50",children:a.jsx("div",{className:"p-2 space-y-1 min-w-[120px]",children:n.map(r=>{const o=r.icon;return a.jsxs("button",{onClick:()=>t(r.key),className:`w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${e===r.key?"bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400":"hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"}`,children:[a.jsx(o,{size:16}),r.label]},r.key)})})})]})},ir=({children:e})=>a.jsxs("div",{className:"modern-website",children:[a.jsx("style",{children:`
        /* Reset and Base Styles */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .modern-website {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          line-height: 1.6;
          color: #333;
          overflow-x: hidden;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .dark .modern-website {
          color: #e5e7eb;
          background-color: #111827;
        }

        /* Navigation */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1rem 0;
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        }

        .dark .navbar {
          background: rgba(17, 24, 39, 0.95);
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
        }

        .logo {
          font-size: 1.8rem;
          font-weight: 700;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          text-decoration: none;
          animation: fadeIn 1s ease;
        }

        .nav-menu {
          display: flex;
          list-style: none;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .nav-menu a {
          text-decoration: none;
          color: #333;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
          padding: 0.5rem 0;
        }

        .dark .nav-menu a {
          color: #e5e7eb;
        }

        .nav-menu a:hover {
          color: #667eea;
          transform: translateY(-2px);
        }

        .nav-menu a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          transition: width 0.3s ease;
        }

        .nav-menu a:hover::after {
          width: 100%;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .cta-button {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
          animation: pulse 2s infinite;
        }

        .cta-button:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 12px 30px rgba(102, 126, 234, 0.4);
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          transition: transform 0.3s ease;
          color: #333;
        }

        .dark .mobile-menu-btn {
          color: #e5e7eb;
        }

        .mobile-menu-btn:hover {
          transform: rotate(90deg);
        }

        .mobile-menu {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: white;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          padding: 1rem;
          border-radius: 0 0 20px 20px;
          animation: slideDown 0.3s ease;
        }

        .dark .mobile-menu {
          background: #1f2937;
        }

        .mobile-menu-open {
          display: block !important;
        }

        .mobile-menu a {
          display: block;
          padding: 1rem;
          text-decoration: none;
          color: #333;
          border-bottom: 1px solid #eee;
          transition: all 0.3s ease;
        }

        .dark .mobile-menu a {
          color: #e5e7eb;
          border-bottom-color: #374151;
        }

        .mobile-menu a:hover {
          background: #f8fafc;
          padding-left: 1.5rem;
        }

        .dark .mobile-menu a:hover {
          background: #374151;
        }

        /* Main Content */
        .main-content {
          padding-top: 80px;
          min-height: 100vh;
        }

        /* Footer */
        .footer {
          background: #1f2937;
          color: white;
          padding: 3rem 0 1rem;
          margin-top: 4rem;
        }

        .dark .footer {
          background: #0f172a;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .footer-section h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .footer-section p {
          color: #9ca3af;
          margin-bottom: 1rem;
          line-height: 1.8;
        }

        .social-links {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .social-link {
          width: 45px;
          height: 45px;
          background: #374151;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 1.2rem;
        }

        .social-link:hover {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
        }

        .footer-links {
          list-style: none;
        }

        .footer-links a {
          color: #9ca3af;
          text-decoration: none;
          display: block;
          padding: 0.5rem 0;
          transition: all 0.3s ease;
        }

        .footer-links a:hover {
          color: white;
          padding-left: 10px;
        }

        .footer-bottom {
          border-top: 1px solid #374151;
          padding-top: 1rem;
          text-align: center;
          color: #9ca3af;
          max-width: 1200px;
          margin: 0 auto;
          padding-left: 1rem;
          padding-right: 1rem;
        }

        /* Animations */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse {
          0%, 100% { box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3); }
          50% { box-shadow: 0 8px 25px rgba(102, 126, 234, 0.5); }
        }

        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease;
        }

        .animate-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Enhanced Responsive Design */
        @media (max-width: 1024px) {
          .nav-container {
            padding: 0 1rem;
          }
          
          .nav-menu {
            gap: 1rem;
          }
          
          .footer-content {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .nav-menu {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }

          .nav-container {
            padding: 0 1rem;
          }
          
          .logo {
            font-size: 1.5rem;
          }
          
          .cta-button {
            padding: 0.6rem 1.2rem;
            font-size: 0.9rem;
          }
          
          .footer-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
          
          .social-links {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .nav-container {
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
          }
          
          .logo {
            font-size: 1.3rem;
          }
          
          .mobile-menu {
            position: relative;
            top: 0;
            margin-top: 1rem;
            border-radius: 15px;
          }
        }
      `}),a.jsx("nav",{className:"navbar",children:a.jsxs("div",{className:"nav-container",children:[a.jsx(H,{to:"/",className:"logo",children:"TekBrandify"}),a.jsxs("ul",{className:"nav-menu",children:[a.jsx("li",{children:a.jsx(H,{to:"/",children:"Home"})}),a.jsx("li",{children:a.jsx(H,{to:"/services",children:"Services"})}),a.jsx("li",{children:a.jsx(H,{to:"/plans",children:"Plans & Packages"})}),a.jsx("li",{children:a.jsx(H,{to:"/portfolio",children:"Portfolio"})}),a.jsx("li",{children:a.jsx(H,{to:"/about",children:"About"})}),a.jsx("li",{children:a.jsx(H,{to:"/teams",children:"Teams"})}),a.jsx("li",{children:a.jsx(H,{to:"/contact",children:"Contact"})})]}),a.jsxs("div",{className:"nav-actions",children:[a.jsx(tk,{}),a.jsx(H,{to:"/contact",className:"cta-button",children:"Get Started"})]}),a.jsx("button",{className:"mobile-menu-btn",onClick:()=>{const t=document.querySelector(".mobile-menu");t==null||t.classList.toggle("mobile-menu-open")},children:"☰"}),a.jsxs("div",{className:"mobile-menu",children:[a.jsx(H,{to:"/",children:"Home"}),a.jsx(H,{to:"/services",children:"Services"}),a.jsx(H,{to:"/plans",children:"Plans & Packages"}),a.jsx(H,{to:"/portfolio",children:"Portfolio"}),a.jsx(H,{to:"/about",children:"About"}),a.jsx(H,{to:"/teams",children:"Teams"}),a.jsx(H,{to:"/contact",children:"Contact"})]})]})}),a.jsx("main",{className:"main-content",children:e}),a.jsx(ek,{}),a.jsxs("footer",{className:"footer",children:[a.jsxs("div",{className:"footer-content",children:[a.jsxs("div",{className:"footer-section",children:[a.jsx("h3",{children:"TekBrandify"}),a.jsx("p",{children:"Creating exceptional digital experiences that drive results and inspire audiences worldwide."}),a.jsxs("div",{className:"social-links",children:[a.jsx("a",{href:"#",className:"social-link",children:"📘"}),a.jsx("a",{href:"#",className:"social-link",children:"🐦"}),a.jsx("a",{href:"#",className:"social-link",children:"💼"}),a.jsx("a",{href:"#",className:"social-link",children:"📷"})]})]}),a.jsxs("div",{className:"footer-section",children:[a.jsx("h3",{children:"Services"}),a.jsxs("ul",{className:"footer-links",children:[a.jsx("li",{children:a.jsx(H,{to:"/services",children:"Web Design"})}),a.jsx("li",{children:a.jsx(H,{to:"/services",children:"Development"})}),a.jsx("li",{children:a.jsx(H,{to:"/services",children:"Digital Strategy"})}),a.jsx("li",{children:a.jsx(H,{to:"/services",children:"Consulting"})})]})]}),a.jsxs("div",{className:"footer-section",children:[a.jsx("h3",{children:"Company"}),a.jsxs("ul",{className:"footer-links",children:[a.jsx("li",{children:a.jsx(H,{to:"/about",children:"About Us"})}),a.jsx("li",{children:a.jsx(H,{to:"/portfolio",children:"Portfolio"})}),a.jsx("li",{children:a.jsx(H,{to:"/teams",children:"Teams"})}),a.jsx("li",{children:a.jsx(H,{to:"/contact",children:"Contact"})})]})]}),a.jsxs("div",{className:"footer-section",children:[a.jsx("h3",{children:"Connect"}),a.jsxs("ul",{className:"footer-links",children:[a.jsx("li",{children:a.jsx("a",{href:"#",children:"Newsletter"})}),a.jsx("li",{children:a.jsx("a",{href:"#",children:"Blog"})}),a.jsx("li",{children:a.jsx("a",{href:"#",children:"Events"})}),a.jsx("li",{children:a.jsx("a",{href:"#",children:"Support"})})]})]})]}),a.jsx("div",{className:"footer-bottom",children:a.jsx("p",{children:"© 2025 TekBrandify. All rights reserved. Built with passion and precision."})})]}),a.jsx("script",{children:`
        // Scroll animations
        const observerOptions = {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        }, observerOptions);

        // Observe all elements with animate-on-scroll class
        document.addEventListener('DOMContentLoaded', () => {
          const animatedElements = document.querySelectorAll('.animate-on-scroll');
          animatedElements.forEach(el => observer.observe(el));
        });
      `})]}),nk=()=>a.jsxs(ir,{children:[a.jsx("style",{children:`
        /* Enhanced Hero Section */
        .hero {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><polygon fill="rgba(255,255,255,0.05)" points="0,1000 1000,0 1000,1000"/></svg>');
          background-size: cover;
          animation: float 6s ease-in-out infinite;
        }

        .hero-content {
          max-width: 900px;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
        }

        .hero h1 {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          margin-bottom: 1.5rem;
          animation: slideInUp 1s ease 0.2s both;
          line-height: 1.2;
        }

        .hero p {
          font-size: clamp(1rem, 2vw, 1.3rem);
          margin-bottom: 2.5rem;
          opacity: 0.95;
          animation: slideInUp 1s ease 0.4s both;
          line-height: 1.6;
        }

        .hero-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
          animation: slideInUp 1s ease 0.6s both;
        }

        .btn-primary {
          background: white;
          color: #667eea;
          padding: 1.2rem 2.5rem;
          border: none;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          font-size: 1.1rem;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }

        .btn-secondary {
          background: transparent;
          color: white;
          padding: 1.2rem 2.5rem;
          border: 2px solid white;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          font-size: 1.1rem;
        }

        .btn-primary:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
        }

        .btn-secondary:hover {
          background: white;
          color: #667eea;
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 15px 40px rgba(255, 255, 255, 0.2);
        }

        /* Floating elements */
        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 1;
        }

        .floating-element {
          position: absolute;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          animation: float 8s ease-in-out infinite;
        }

        .floating-element:nth-child(1) {
          width: 80px;
          height: 80px;
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }

        .floating-element:nth-child(2) {
          width: 120px;
          height: 120px;
          top: 60%;
          right: 15%;
          animation-delay: 2s;
        }

        .floating-element:nth-child(3) {
          width: 60px;
          height: 60px;
          bottom: 30%;
          left: 20%;
          animation-delay: 4s;
        }

        /* Enhanced Features Section */
        .features {
          padding: 6rem 0;
          background: #f8fafc;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .section-title {
          text-align: center;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .section-subtitle {
          text-align: center;
          font-size: clamp(1rem, 2vw, 1.25rem);
          color: #666;
          margin-bottom: 4rem;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
          margin-top: 4rem;
        }

        .feature-card {
          background: white;
          padding: 2.5rem 2rem;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          text-align: center;
          transition: all 0.4s ease;
          border: 1px solid #f0f0f0;
          position: relative;
          overflow: hidden;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: left 0.6s ease;
        }

        .feature-card:hover::before {
          left: 100%;
        }

        .feature-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
        }

        .feature-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          font-size: 2rem;
          color: white;
          transition: all 0.3s ease;
        }

        .feature-card:hover .feature-icon {
          transform: scale(1.1) rotate(10deg);
        }

        .feature-card h3 {
          font-size: 1.4rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #333;
        }

        .feature-card p {
          color: #666;
          line-height: 1.7;
          font-size: 1rem;
        }

        /* Stats Section */
        .stats-section {
          padding: 5rem 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          text-align: center;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 3rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .stat-item {
          padding: 1rem;
        }

        .stat-item h4 {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          margin-bottom: 0.5rem;
          animation: countUp 2s ease;
        }

        .stat-item p {
          font-size: 1.2rem;
          opacity: 0.9;
          font-weight: 500;
        }

        /* Enhanced CTA Section */
        .cta-section {
          padding: 6rem 0;
          background: #1f2937;
          color: white;
          text-align: center;
          position: relative;
        }

        .cta-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><circle fill="rgba(102,126,234,0.1)" cx="200" cy="200" r="100"/><circle fill="rgba(118,75,162,0.1)" cx="800" cy="600" r="150"/></svg>');
          background-size: cover;
        }

        .cta-section h2 {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 2;
        }

        .cta-section p {
          font-size: clamp(1.1rem, 2vw, 1.3rem);
          margin-bottom: 3rem;
          opacity: 0.9;
          position: relative;
          z-index: 2;
        }

        /* Animations */
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes countUp {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Enhanced Responsive Design */
        @media (max-width: 768px) {
          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }

          .btn-primary,
          .btn-secondary {
            width: 100%;
            max-width: 280px;
            padding: 1rem 2rem;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .feature-card {
            padding: 2rem 1.5rem;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }

          .floating-elements {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 1rem;
          }

          .hero-content {
            padding: 0 1rem;
          }

          .features-grid {
            gap: 1.5rem;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}),a.jsxs("section",{className:"hero",children:[a.jsxs("div",{className:"floating-elements",children:[a.jsx("div",{className:"floating-element"}),a.jsx("div",{className:"floating-element"}),a.jsx("div",{className:"floating-element"})]}),a.jsxs("div",{className:"hero-content",children:[a.jsx("h1",{children:"Transform Your Digital Presence with TekBrandify"}),a.jsx("p",{children:"We create stunning, responsive digital experiences that captivate your audience and drive exceptional results. From concept to launch, we're your trusted partner in digital success."}),a.jsxs("div",{className:"hero-buttons",children:[a.jsx(H,{to:"/contact",className:"btn-primary",children:"Start Your Journey"}),a.jsx(H,{to:"/portfolio",className:"btn-secondary",children:"View Our Work"})]})]})]}),a.jsx("section",{className:"features",children:a.jsxs("div",{className:"container",children:[a.jsx("h2",{className:"section-title",children:"Why Choose TekBrandify?"}),a.jsx("p",{className:"section-subtitle",children:"We deliver comprehensive digital solutions that set your brand apart in today's competitive landscape"}),a.jsxs("div",{className:"features-grid",children:[a.jsxs("div",{className:"feature-card",children:[a.jsx("div",{className:"feature-icon",children:"🎨"}),a.jsx("h3",{children:"Creative Excellence"}),a.jsx("p",{children:"Award-winning designs that capture your brand essence and create lasting impressions with your target audience."})]}),a.jsxs("div",{className:"feature-card",children:[a.jsx("div",{className:"feature-icon",children:"⚡"}),a.jsx("h3",{children:"Lightning Fast Performance"}),a.jsx("p",{children:"Optimized websites with blazing-fast load times that keep your visitors engaged and improve your search rankings."})]}),a.jsxs("div",{className:"feature-card",children:[a.jsx("div",{className:"feature-icon",children:"🚀"}),a.jsx("h3",{children:"Growth-Focused Strategy"}),a.jsx("p",{children:"Strategic digital solutions designed to scale with your business and drive measurable, long-term results."})]}),a.jsxs("div",{className:"feature-card",children:[a.jsx("div",{className:"feature-icon",children:"🛡️"}),a.jsx("h3",{children:"Secure & Reliable"}),a.jsx("p",{children:"Enterprise-grade security and 99.9% uptime guarantee to keep your business running smoothly 24/7."})]}),a.jsxs("div",{className:"feature-card",children:[a.jsx("div",{className:"feature-icon",children:"📱"}),a.jsx("h3",{children:"Mobile-First Design"}),a.jsx("p",{children:"Responsive designs that look and perform perfectly on all devices, from smartphones to desktops."})]}),a.jsxs("div",{className:"feature-card",children:[a.jsx("div",{className:"feature-icon",children:"🤝"}),a.jsx("h3",{children:"Dedicated Support"}),a.jsx("p",{children:"24/7 expert support and ongoing maintenance to ensure your digital presence always stays ahead."})]})]})]})}),a.jsx("section",{className:"stats-section",children:a.jsxs("div",{className:"container",children:[a.jsx("h2",{className:"section-title",style:{color:"white",marginBottom:"3rem"},children:"Our Track Record"}),a.jsxs("div",{className:"stats-grid",children:[a.jsxs("div",{className:"stat-item",children:[a.jsx("h4",{children:"500+"}),a.jsx("p",{children:"Projects Completed"})]}),a.jsxs("div",{className:"stat-item",children:[a.jsx("h4",{children:"98%"}),a.jsx("p",{children:"Client Satisfaction"})]}),a.jsxs("div",{className:"stat-item",children:[a.jsx("h4",{children:"10+"}),a.jsx("p",{children:"Years Experience"})]}),a.jsxs("div",{className:"stat-item",children:[a.jsx("h4",{children:"24/7"}),a.jsx("p",{children:"Support Available"})]})]})]})}),a.jsx("section",{className:"cta-section",children:a.jsxs("div",{className:"container",children:[a.jsx("h2",{children:"Ready to Transform Your Brand?"}),a.jsx("p",{children:"Join hundreds of satisfied clients who have elevated their business with TekBrandify's expert digital solutions."}),a.jsxs("div",{className:"hero-buttons",children:[a.jsx(H,{to:"/plans",className:"btn-primary",children:"View Our Plans"}),a.jsx(H,{to:"/contact",className:"btn-secondary",children:"Get Free Consultation"})]})]})})]}),rk=()=>a.jsxs(ir,{children:[a.jsx("style",{children:`
        .about-page {
          padding: 5rem 0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .page-title {
          text-align: center;
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .page-subtitle {
          text-align: center;
          font-size: 1.25rem;
          color: #666;
          margin-bottom: 4rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          margin-bottom: 5rem;
        }

        .about-text h3 {
          font-size: 1.8rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #333;
        }

        .about-text p {
          color: #666;
          margin-bottom: 1.5rem;
          line-height: 1.8;
        }

        .about-image {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          height: 400px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 3rem;
          position: relative;
          overflow: hidden;
        }

        .about-image::before {
          content: '🚀';
          font-size: 5rem;
          opacity: 0.8;
        }

        .stats-section {
          background: #f8fafc;
          padding: 4rem 0;
          margin: 4rem 0;
          border-radius: 20px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          text-align: center;
        }

        .stat-item h4 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #667eea;
          margin-bottom: 0.5rem;
        }

        .stat-item p {
          color: #666;
          font-weight: 500;
        }

        .cta-button {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 1rem 2rem;
          border: none;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
        }

        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .page-title {
            font-size: 2.5rem;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}),a.jsx("div",{className:"about-page",children:a.jsxs("div",{className:"container",children:[a.jsx("h1",{className:"page-title",children:"About TekBrandify"}),a.jsx("p",{className:"page-subtitle",children:"We're passionate about creating digital solutions that make a difference"}),a.jsxs("div",{className:"about-content",children:[a.jsxs("div",{className:"about-text",children:[a.jsx("h3",{children:"Innovation Meets Excellence"}),a.jsx("p",{children:"With over a decade of experience in web development and digital design, we've helped hundreds of businesses transform their online presence. Our team combines creative vision with technical expertise to deliver solutions that not only look amazing but perform exceptionally."}),a.jsx("p",{children:"We believe in the power of collaboration and work closely with our clients to understand their unique needs and goals. Every project is an opportunity to push boundaries and create something truly remarkable."}),a.jsx(H,{to:"/contact",className:"cta-button",children:"Work With Us"})]}),a.jsx("div",{className:"about-image"})]}),a.jsx("div",{className:"stats-section",children:a.jsxs("div",{className:"stats-grid",children:[a.jsxs("div",{className:"stat-item",children:[a.jsx("h4",{children:"500+"}),a.jsx("p",{children:"Projects Completed"})]}),a.jsxs("div",{className:"stat-item",children:[a.jsx("h4",{children:"98%"}),a.jsx("p",{children:"Client Satisfaction"})]}),a.jsxs("div",{className:"stat-item",children:[a.jsx("h4",{children:"10+"}),a.jsx("p",{children:"Years Experience"})]}),a.jsxs("div",{className:"stat-item",children:[a.jsx("h4",{children:"24/7"}),a.jsx("p",{children:"Support Available"})]})]})})]})})]}),ok=()=>{const e=t=>{localStorage.setItem("selectedService",t)};return a.jsxs(ir,{children:[a.jsx("style",{children:`
        .services-page {
          padding: 2rem 0 5rem;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .page-header {
          text-align: center;
          margin-bottom: 4rem;
          padding-top: 2rem;
        }

        .page-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: slideInUp 1s ease;
        }

        .page-subtitle {
          font-size: clamp(1.1rem, 2vw, 1.3rem);
          color: #666;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
          animation: slideInUp 1s ease 0.2s both;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2.5rem;
          margin: 3rem 0;
        }

        .service-card {
          background: white;
          border-radius: 20px;
          padding: 2.5rem 2rem;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          transition: all 0.4s ease;
          border: 1px solid #f0f0f0;
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 4px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          transition: left 0.4s ease;
        }

        .service-card:hover::before {
          left: 0;
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
        }

        .service-icon {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          color: white;
          margin-bottom: 1.5rem;
          transition: all 0.3s ease;
        }

        .service-card:hover .service-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .service-card h3 {
          font-size: 1.6rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #333;
        }

        .service-card p {
          color: #666;
          line-height: 1.7;
          margin-bottom: 1.5rem;
          font-size: 1rem;
        }

        .service-features {
          list-style: none;
          margin-bottom: 1.5rem;
        }

        .service-features li {
          padding: 0.4rem 0;
          color: #555;
          position: relative;
          padding-left: 1.5rem;
          font-size: 0.95rem;
        }

        .service-features li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #667eea;
          font-weight: bold;
          font-size: 1rem;
        }

        .cta-button {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 0.8rem 1.5rem;
          border: none;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
          width: 100%;
          text-align: center;
          font-size: 0.95rem;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
        }

        .process-section {
          background: #f8fafc;
          padding: 4rem 0;
          margin: 4rem 0;
          border-radius: 25px;
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2.5rem;
          margin-top: 2.5rem;
        }

        .process-step {
          text-align: center;
          padding: 1.5rem 1rem;
        }

        .process-number {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          font-weight: bold;
          color: white;
          margin: 0 auto 1rem;
          animation: pulse 2s infinite;
        }

        .process-step h4 {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 0.8rem;
          color: #333;
        }

        .process-step p {
          color: #666;
          line-height: 1.6;
          font-size: 0.95rem;
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(102, 126, 234, 0.4);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 0 10px rgba(102, 126, 234, 0);
          }
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .service-card {
            padding: 2rem 1.5rem;
          }

          .process-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .container {
            padding: 0 1rem;
          }
        }

        @media (max-width: 480px) {
          .page-header {
            margin-bottom: 3rem;
          }
          
          .services-grid {
            gap: 1.5rem;
          }
        }
      `}),a.jsx("div",{className:"services-page",children:a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"page-header",children:[a.jsx("h1",{className:"page-title",children:"Our Services"}),a.jsx("p",{className:"page-subtitle",children:"Comprehensive digital solutions designed to elevate your brand and drive meaningful results in today's competitive marketplace."})]}),a.jsxs("div",{className:"services-grid",children:[a.jsxs("div",{className:"service-card",onClick:()=>e("Web Design & Development"),children:[a.jsx("div",{className:"service-icon",children:"🎨"}),a.jsx("h3",{children:"Web Design & Development"}),a.jsx("p",{children:"Custom, responsive websites that combine stunning visuals with exceptional user experience and cutting-edge functionality."}),a.jsxs("ul",{className:"service-features",children:[a.jsx("li",{children:"Responsive Mobile-First Design"}),a.jsx("li",{children:"Custom UI/UX Development"}),a.jsx("li",{children:"Performance Optimization"}),a.jsx("li",{children:"SEO-Friendly Structure"}),a.jsx("li",{children:"Cross-Browser Compatibility"})]}),a.jsx(H,{to:"/contact",className:"cta-button",onClick:()=>e("Web Design & Development"),children:"Get Started"})]}),a.jsxs("div",{className:"service-card",onClick:()=>e("Digital Marketing Strategy"),children:[a.jsx("div",{className:"service-icon",children:"🚀"}),a.jsx("h3",{children:"Digital Marketing Strategy"}),a.jsx("p",{children:"Data-driven marketing campaigns that increase your online visibility, engage your audience, and drive conversions."}),a.jsxs("ul",{className:"service-features",children:[a.jsx("li",{children:"SEO & Content Strategy"}),a.jsx("li",{children:"Social Media Management"}),a.jsx("li",{children:"PPC Campaign Management"}),a.jsx("li",{children:"Analytics & Reporting"}),a.jsx("li",{children:"Brand Positioning"})]}),a.jsx(H,{to:"/contact",className:"cta-button",onClick:()=>e("Digital Marketing Strategy"),children:"Learn More"})]}),a.jsxs("div",{className:"service-card",onClick:()=>e("Mobile App Development"),children:[a.jsx("div",{className:"service-icon",children:"📱"}),a.jsx("h3",{children:"Mobile App Development"}),a.jsx("p",{children:"Native and cross-platform mobile applications that deliver seamless user experiences across all devices."}),a.jsxs("ul",{className:"service-features",children:[a.jsx("li",{children:"iOS & Android Development"}),a.jsx("li",{children:"Cross-Platform Solutions"}),a.jsx("li",{children:"App Store Optimization"}),a.jsx("li",{children:"Backend Integration"}),a.jsx("li",{children:"Ongoing Maintenance"})]}),a.jsx(H,{to:"/contact",className:"cta-button",onClick:()=>e("Mobile App Development"),children:"Explore Options"})]}),a.jsxs("div",{className:"service-card",onClick:()=>e("E-Commerce Solutions"),children:[a.jsx("div",{className:"service-icon",children:"🛒"}),a.jsx("h3",{children:"E-Commerce Solutions"}),a.jsx("p",{children:"Complete online store development with secure payment processing, inventory management, and sales optimization."}),a.jsxs("ul",{className:"service-features",children:[a.jsx("li",{children:"Custom E-Commerce Platforms"}),a.jsx("li",{children:"Payment Gateway Integration"}),a.jsx("li",{children:"Inventory Management"}),a.jsx("li",{children:"Order Processing Systems"}),a.jsx("li",{children:"Sales Analytics"})]}),a.jsx(H,{to:"/contact",className:"cta-button",onClick:()=>e("E-Commerce Solutions"),children:"Build Your Store"})]}),a.jsxs("div",{className:"service-card",onClick:()=>e("Cloud & Infrastructure"),children:[a.jsx("div",{className:"service-icon",children:"☁️"}),a.jsx("h3",{children:"Cloud & Infrastructure"}),a.jsx("p",{children:"Scalable cloud solutions and infrastructure management to ensure your applications run smoothly and securely."}),a.jsxs("ul",{className:"service-features",children:[a.jsx("li",{children:"Cloud Migration Services"}),a.jsx("li",{children:"Infrastructure Setup"}),a.jsx("li",{children:"Security Implementation"}),a.jsx("li",{children:"Backup & Recovery"}),a.jsx("li",{children:"24/7 Monitoring"})]}),a.jsx(H,{to:"/contact",className:"cta-button",onClick:()=>e("Cloud & Infrastructure"),children:"Secure Your Future"})]}),a.jsxs("div",{className:"service-card",onClick:()=>e("Consulting & Strategy"),children:[a.jsx("div",{className:"service-icon",children:"🤝"}),a.jsx("h3",{children:"Consulting & Strategy"}),a.jsx("p",{children:"Expert guidance and strategic planning to help you make informed decisions about your digital transformation journey."}),a.jsxs("ul",{className:"service-features",children:[a.jsx("li",{children:"Digital Transformation"}),a.jsx("li",{children:"Technology Consulting"}),a.jsx("li",{children:"Project Management"}),a.jsx("li",{children:"Training & Support"}),a.jsx("li",{children:"Strategic Planning"})]}),a.jsx(H,{to:"/contact",className:"cta-button",onClick:()=>e("Consulting & Strategy"),children:"Get Consultation"})]})]}),a.jsx("div",{className:"process-section",children:a.jsxs("div",{className:"container",children:[a.jsx("h2",{className:"page-title",style:{marginBottom:"1rem"},children:"Our Process"}),a.jsx("p",{className:"page-subtitle",style:{marginBottom:"2.5rem"},children:"A proven methodology that ensures successful project delivery every time"}),a.jsxs("div",{className:"process-grid",children:[a.jsxs("div",{className:"process-step",children:[a.jsx("div",{className:"process-number",children:"1"}),a.jsx("h4",{children:"Discovery & Planning"}),a.jsx("p",{children:"We understand your goals, analyze your requirements, and create a comprehensive project roadmap."})]}),a.jsxs("div",{className:"process-step",children:[a.jsx("div",{className:"process-number",children:"2"}),a.jsx("h4",{children:"Design & Prototyping"}),a.jsx("p",{children:"Creating wireframes, mockups, and interactive prototypes to visualize your project before development."})]}),a.jsxs("div",{className:"process-step",children:[a.jsx("div",{className:"process-number",children:"3"}),a.jsx("h4",{children:"Development & Testing"}),a.jsx("p",{children:"Building your solution with clean, scalable code while conducting thorough testing at every stage."})]}),a.jsxs("div",{className:"process-step",children:[a.jsx("div",{className:"process-number",children:"4"}),a.jsx("h4",{children:"Launch & Optimization"}),a.jsx("p",{children:"Deploying your project and providing ongoing support, monitoring, and optimization for peak performance."})]})]})]})})]})})]})},ik=()=>a.jsxs(ir,{children:[a.jsx("style",{children:`
        .portfolio-page {
          padding: 5rem 0;
          background: #f8fafc;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .page-title {
          text-align: center;
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .page-subtitle {
          text-align: center;
          font-size: 1.25rem;
          color: #666;
          margin-bottom: 4rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .portfolio-item {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .portfolio-item:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        .portfolio-image {
          height: 250px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 3rem;
          position: relative;
          overflow: hidden;
        }

        .portfolio-content {
          padding: 2rem;
        }

        .portfolio-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #333;
        }

        .portfolio-content p {
          color: #666;
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .portfolio-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .tag {
          background: #e5e7eb;
          color: #374151;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .project-link {
          color: #667eea;
          text-decoration: none;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: color 0.3s ease;
        }

        .project-link:hover {
          color: #764ba2;
        }

        @media (max-width: 768px) {
          .portfolio-grid {
            grid-template-columns: 1fr;
          }

          .page-title {
            font-size: 2.5rem;
          }

          .portfolio-content {
            padding: 1.5rem;
          }
        }
      `}),a.jsx("div",{className:"portfolio-page",children:a.jsxs("div",{className:"container",children:[a.jsx("h1",{className:"page-title",children:"Our Work"}),a.jsx("p",{className:"page-subtitle",children:"A showcase of our recent projects and creative solutions"}),a.jsxs("div",{className:"portfolio-grid",children:[a.jsxs("div",{className:"portfolio-item",children:[a.jsx("div",{className:"portfolio-image",children:"🏢"}),a.jsxs("div",{className:"portfolio-content",children:[a.jsx("h3",{children:"TechCorp Enterprise"}),a.jsx("p",{children:"Complete digital transformation for a leading technology company, including website redesign and mobile application development."}),a.jsxs("div",{className:"portfolio-tags",children:[a.jsx("span",{className:"tag",children:"Web Design"}),a.jsx("span",{className:"tag",children:"Development"}),a.jsx("span",{className:"tag",children:"Mobile App"})]}),a.jsx("a",{href:"#",className:"project-link",children:"View Project →"})]})]}),a.jsxs("div",{className:"portfolio-item",children:[a.jsx("div",{className:"portfolio-image",children:"🛒"}),a.jsxs("div",{className:"portfolio-content",children:[a.jsx("h3",{children:"StyleHub E-commerce"}),a.jsx("p",{children:"Full-featured online fashion store with advanced filtering, secure payment processing, and inventory management system."}),a.jsxs("div",{className:"portfolio-tags",children:[a.jsx("span",{className:"tag",children:"E-commerce"}),a.jsx("span",{className:"tag",children:"Payment Gateway"}),a.jsx("span",{className:"tag",children:"Inventory"})]}),a.jsx("a",{href:"#",className:"project-link",children:"View Project →"})]})]}),a.jsxs("div",{className:"portfolio-item",children:[a.jsx("div",{className:"portfolio-image",children:"📱"}),a.jsxs("div",{className:"portfolio-content",children:[a.jsx("h3",{children:"FitTracker Mobile App"}),a.jsx("p",{children:"Cross-platform fitness tracking application with real-time analytics, social features, and wearable device integration."}),a.jsxs("div",{className:"portfolio-tags",children:[a.jsx("span",{className:"tag",children:"Mobile App"}),a.jsx("span",{className:"tag",children:"Analytics"}),a.jsx("span",{className:"tag",children:"IoT Integration"})]}),a.jsx("a",{href:"#",className:"project-link",children:"View Project →"})]})]}),a.jsxs("div",{className:"portfolio-item",children:[a.jsx("div",{className:"portfolio-image",children:"🎓"}),a.jsxs("div",{className:"portfolio-content",children:[a.jsx("h3",{children:"EduPlatform Learning System"}),a.jsx("p",{children:"Comprehensive online learning management system with video streaming, progress tracking, and certification features."}),a.jsxs("div",{className:"portfolio-tags",children:[a.jsx("span",{className:"tag",children:"LMS"}),a.jsx("span",{className:"tag",children:"Video Streaming"}),a.jsx("span",{className:"tag",children:"Certification"})]}),a.jsx("a",{href:"#",className:"project-link",children:"View Project →"})]})]}),a.jsxs("div",{className:"portfolio-item",children:[a.jsx("div",{className:"portfolio-image",children:"🏥"}),a.jsxs("div",{className:"portfolio-content",children:[a.jsx("h3",{children:"HealthCare Portal"}),a.jsx("p",{children:"Patient management system with appointment scheduling, medical records, and telemedicine integration for healthcare providers."}),a.jsxs("div",{className:"portfolio-tags",children:[a.jsx("span",{className:"tag",children:"Healthcare"}),a.jsx("span",{className:"tag",children:"HIPAA Compliant"}),a.jsx("span",{className:"tag",children:"Telemedicine"})]}),a.jsx("a",{href:"#",className:"project-link",children:"View Project →"})]})]}),a.jsxs("div",{className:"portfolio-item",children:[a.jsx("div",{className:"portfolio-image",children:"🏦"}),a.jsxs("div",{className:"portfolio-content",children:[a.jsx("h3",{children:"FinanceTracker Dashboard"}),a.jsx("p",{children:"Advanced financial analytics dashboard with real-time data visualization, reporting, and portfolio management features."}),a.jsxs("div",{className:"portfolio-tags",children:[a.jsx("span",{className:"tag",children:"FinTech"}),a.jsx("span",{className:"tag",children:"Analytics"}),a.jsx("span",{className:"tag",children:"Data Visualization"})]}),a.jsx("a",{href:"#",className:"project-link",children:"View Project →"})]})]})]})]})})]}),sk=()=>{const e=(t,n)=>{localStorage.setItem("selectedPlan",`${t} - ${n}`)};return a.jsxs(ir,{children:[a.jsx("style",{children:`
        .plans-page {
          padding: 4rem 0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .page-title {
          text-align: center;
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .page-subtitle {
          text-align: center;
          font-size: clamp(1rem, 2vw, 1.25rem);
          color: #666;
          margin-bottom: 3rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .plans-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .plan-card {
          background: white;
          padding: 2.5rem 2rem;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          text-align: center;
          transition: all 0.3s ease;
          border: 1px solid #f0f0f0;
          position: relative;
          cursor: pointer;
        }

        .plan-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
        }

        .plan-card.featured {
          border: 2px solid #667eea;
          transform: scale(1.02);
        }

        .plan-card.featured::before {
          content: 'Most Popular';
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 0.5rem 1.5rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .plan-name {
          font-size: 1.4rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #333;
        }

        .plan-price {
          font-size: 2.5rem;
          font-weight: 700;
          color: #667eea;
          margin-bottom: 0.5rem;
        }

        .plan-price span {
          font-size: 0.9rem;
          color: #666;
        }

        .plan-description {
          color: #666;
          margin-bottom: 1.5rem;
          line-height: 1.6;
          font-size: 0.95rem;
        }

        .plan-features {
          list-style: none;
          text-align: left;
          margin-bottom: 2rem;
        }

        .plan-features li {
          color: #666;
          margin-bottom: 0.8rem;
          padding-left: 1.5rem;
          position: relative;
          line-height: 1.5;
          font-size: 0.9rem;
        }

        .plan-features li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #667eea;
          font-weight: bold;
          font-size: 1rem;
        }

        .plan-features li.unavailable {
          opacity: 0.5;
        }

        .plan-features li.unavailable::before {
          content: '✗';
          color: #ef4444;
        }

        .cta-button {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 0.8rem 1.5rem;
          border: none;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
          width: 100%;
          font-size: 0.95rem;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
        }

        .cta-button.secondary {
          background: transparent;
          color: #667eea;
          border: 2px solid #667eea;
        }

        .cta-button.secondary:hover {
          background: #667eea;
          color: white;
        }

        .custom-package {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 3rem 2rem;
          border-radius: 20px;
          text-align: center;
          margin-top: 2rem;
        }

        .custom-package h3 {
          font-size: 1.8rem;
          margin-bottom: 1rem;
        }

        .custom-package p {
          margin-bottom: 2rem;
          opacity: 0.9;
        }

        .custom-package .cta-button {
          background: white;
          color: #667eea;
        }

        @media (max-width: 768px) {
          .plans-grid {
            grid-template-columns: 1fr;
          }

          .page-title {
            font-size: 2.5rem;
          }

          .plan-card.featured {
            transform: none;
          }

          .plan-card {
            padding: 2rem 1.5rem;
          }

          .container {
            padding: 0 1rem;
          }
        }
      `}),a.jsx("div",{className:"plans-page",children:a.jsxs("div",{className:"container",children:[a.jsx("h1",{className:"page-title",children:"Plans & Packages"}),a.jsx("p",{className:"page-subtitle",children:"Choose the perfect package that fits your business needs and budget"}),a.jsxs("div",{className:"plans-grid",children:[a.jsxs("div",{className:"plan-card",onClick:()=>e("Starter","$2,999"),children:[a.jsx("h3",{className:"plan-name",children:"Starter"}),a.jsxs("div",{className:"plan-price",children:["$2,999",a.jsx("span",{children:"/project"})]}),a.jsx("p",{className:"plan-description",children:"Perfect for small businesses and startups looking to establish their online presence."}),a.jsxs("ul",{className:"plan-features",children:[a.jsx("li",{children:"5-page responsive website"}),a.jsx("li",{children:"Mobile-first design"}),a.jsx("li",{children:"Basic SEO optimization"}),a.jsx("li",{children:"Contact form integration"}),a.jsx("li",{children:"1 month of support"}),a.jsx("li",{className:"unavailable",children:"E-commerce functionality"}),a.jsx("li",{className:"unavailable",children:"Custom CMS"}),a.jsx("li",{className:"unavailable",children:"Advanced analytics"})]}),a.jsx(H,{to:"/contact",className:"cta-button",onClick:()=>e("Starter","$2,999"),children:"Get Started"})]}),a.jsxs("div",{className:"plan-card featured",onClick:()=>e("Professional","$5,999"),children:[a.jsx("h3",{className:"plan-name",children:"Professional"}),a.jsxs("div",{className:"plan-price",children:["$5,999",a.jsx("span",{children:"/project"})]}),a.jsx("p",{className:"plan-description",children:"Ideal for growing businesses that need advanced features and functionality."}),a.jsxs("ul",{className:"plan-features",children:[a.jsx("li",{children:"10-page responsive website"}),a.jsx("li",{children:"Custom UI/UX design"}),a.jsx("li",{children:"Advanced SEO optimization"}),a.jsx("li",{children:"CMS integration"}),a.jsx("li",{children:"E-commerce functionality"}),a.jsx("li",{children:"Payment gateway setup"}),a.jsx("li",{children:"3 months of support"}),a.jsx("li",{className:"unavailable",children:"Mobile app development"})]}),a.jsx(H,{to:"/contact",className:"cta-button",onClick:()=>e("Professional","$5,999"),children:"Get Started"})]}),a.jsxs("div",{className:"plan-card",onClick:()=>e("Enterprise","$12,999"),children:[a.jsx("h3",{className:"plan-name",children:"Enterprise"}),a.jsxs("div",{className:"plan-price",children:["$12,999",a.jsx("span",{children:"/project"})]}),a.jsx("p",{className:"plan-description",children:"Comprehensive solution for large businesses requiring complex functionality."}),a.jsxs("ul",{className:"plan-features",children:[a.jsx("li",{children:"Unlimited pages"}),a.jsx("li",{children:"Custom web application"}),a.jsx("li",{children:"Mobile app development"}),a.jsx("li",{children:"Advanced integrations"}),a.jsx("li",{children:"Custom dashboard"}),a.jsx("li",{children:"Multi-user system"}),a.jsx("li",{children:"6 months of support"}),a.jsx("li",{children:"Priority support"})]}),a.jsx(H,{to:"/contact",className:"cta-button",onClick:()=>e("Enterprise","$12,999"),children:"Get Started"})]})]}),a.jsxs("div",{className:"custom-package",children:[a.jsx("h3",{children:"Need Something Custom?"}),a.jsx("p",{children:"Every business is unique. Let's discuss your specific requirements and create a tailored solution that perfectly fits your needs and budget."}),a.jsx(H,{to:"/contact",className:"cta-button",onClick:()=>e("Custom Package","Custom Quote"),children:"Request Custom Quote"})]})]})})]})},ak=()=>a.jsxs(ir,{children:[a.jsx("style",{children:`
        .teams-page {
          padding: 5rem 0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .page-title {
          text-align: center;
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .page-subtitle {
          text-align: center;
          font-size: 1.25rem;
          color: #666;
          margin-bottom: 4rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 3rem;
          margin-bottom: 5rem;
        }

        .team-member {
          background: white;
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
          text-align: center;
          transition: all 0.3s ease;
          border: 1px solid #f0f0f0;
        }

        .team-member:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        .member-photo {
          width: 120px;
          height: 120px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          font-size: 3rem;
          color: white;
          overflow: hidden;
        }

        .member-name {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #333;
        }

        .member-role {
          color: #667eea;
          font-weight: 500;
          margin-bottom: 1rem;
        }

        .member-bio {
          color: #666;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .member-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .skill-tag {
          background: #e5e7eb;
          color: #374151;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .social-links {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }

        .social-link {
          width: 35px;
          height: 35px;
          background: #f3f4f6;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #667eea;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          transform: translateY(-2px);
        }

        .join-team {
          background: #f8fafc;
          padding: 4rem 2rem;
          border-radius: 20px;
          text-align: center;
          margin-top: 3rem;
        }

        .join-team h3 {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: #333;
        }

        .join-team p {
          color: #666;
          margin-bottom: 2rem;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-button {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 1rem 2rem;
          border: none;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
        }

        @media (max-width: 768px) {
          .team-grid {
            grid-template-columns: 1fr;
          }

          .page-title {
            font-size: 2.5rem;
          }

          .team-member {
            padding: 1.5rem;
          }
        }
      `}),a.jsx("div",{className:"teams-page",children:a.jsxs("div",{className:"container",children:[a.jsx("h1",{className:"page-title",children:"Meet Our Team"}),a.jsx("p",{className:"page-subtitle",children:"The talented professionals who bring your digital vision to life"}),a.jsxs("div",{className:"team-grid",children:[a.jsxs("div",{className:"team-member",children:[a.jsx("div",{className:"member-photo",children:"👨‍💻"}),a.jsx("h3",{className:"member-name",children:"Alex Rodriguez"}),a.jsx("div",{className:"member-role",children:"Lead Developer & Founder"}),a.jsx("p",{className:"member-bio",children:"With over 10 years of experience in full-stack development, Alex leads our technical team and ensures every project meets the highest standards."}),a.jsxs("div",{className:"member-skills",children:[a.jsx("span",{className:"skill-tag",children:"React"}),a.jsx("span",{className:"skill-tag",children:"Node.js"}),a.jsx("span",{className:"skill-tag",children:"AWS"}),a.jsx("span",{className:"skill-tag",children:"TypeScript"})]}),a.jsxs("div",{className:"social-links",children:[a.jsx("a",{href:"#",className:"social-link",children:"in"}),a.jsx("a",{href:"#",className:"social-link",children:"gh"}),a.jsx("a",{href:"#",className:"social-link",children:"tw"})]})]}),a.jsxs("div",{className:"team-member",children:[a.jsx("div",{className:"member-photo",children:"👩‍🎨"}),a.jsx("h3",{className:"member-name",children:"Sarah Chen"}),a.jsx("div",{className:"member-role",children:"UI/UX Designer"}),a.jsx("p",{className:"member-bio",children:"Sarah brings creativity and user-centered design thinking to every project, ensuring beautiful and intuitive user experiences."}),a.jsxs("div",{className:"member-skills",children:[a.jsx("span",{className:"skill-tag",children:"Figma"}),a.jsx("span",{className:"skill-tag",children:"Adobe XD"}),a.jsx("span",{className:"skill-tag",children:"Prototyping"}),a.jsx("span",{className:"skill-tag",children:"User Research"})]}),a.jsxs("div",{className:"social-links",children:[a.jsx("a",{href:"#",className:"social-link",children:"dr"}),a.jsx("a",{href:"#",className:"social-link",children:"be"}),a.jsx("a",{href:"#",className:"social-link",children:"in"})]})]}),a.jsxs("div",{className:"team-member",children:[a.jsx("div",{className:"member-photo",children:"👨‍💼"}),a.jsx("h3",{className:"member-name",children:"Michael Thompson"}),a.jsx("div",{className:"member-role",children:"Project Manager"}),a.jsx("p",{className:"member-bio",children:"Michael ensures smooth project delivery and excellent client communication, keeping everything on track and on budget."}),a.jsxs("div",{className:"member-skills",children:[a.jsx("span",{className:"skill-tag",children:"Agile"}),a.jsx("span",{className:"skill-tag",children:"Scrum"}),a.jsx("span",{className:"skill-tag",children:"Client Relations"}),a.jsx("span",{className:"skill-tag",children:"Strategy"})]}),a.jsxs("div",{className:"social-links",children:[a.jsx("a",{href:"#",className:"social-link",children:"in"}),a.jsx("a",{href:"#",className:"social-link",children:"tw"})]})]}),a.jsxs("div",{className:"team-member",children:[a.jsx("div",{className:"member-photo",children:"👩‍💻"}),a.jsx("h3",{className:"member-name",children:"Emily Watson"}),a.jsx("div",{className:"member-role",children:"Frontend Developer"}),a.jsx("p",{className:"member-bio",children:"Emily specializes in creating responsive, performant web applications with modern frameworks and cutting-edge technologies."}),a.jsxs("div",{className:"member-skills",children:[a.jsx("span",{className:"skill-tag",children:"React"}),a.jsx("span",{className:"skill-tag",children:"Vue.js"}),a.jsx("span",{className:"skill-tag",children:"CSS"}),a.jsx("span",{className:"skill-tag",children:"Animation"})]}),a.jsxs("div",{className:"social-links",children:[a.jsx("a",{href:"#",className:"social-link",children:"gh"}),a.jsx("a",{href:"#",className:"social-link",children:"cd"}),a.jsx("a",{href:"#",className:"social-link",children:"in"})]})]}),a.jsxs("div",{className:"team-member",children:[a.jsx("div",{className:"member-photo",children:"👨‍🔧"}),a.jsx("h3",{className:"member-name",children:"David Kumar"}),a.jsx("div",{className:"member-role",children:"Backend Developer"}),a.jsx("p",{className:"member-bio",children:"David builds robust, scalable backend systems and APIs that power our applications with security and performance in mind."}),a.jsxs("div",{className:"member-skills",children:[a.jsx("span",{className:"skill-tag",children:"Python"}),a.jsx("span",{className:"skill-tag",children:"Django"}),a.jsx("span",{className:"skill-tag",children:"PostgreSQL"}),a.jsx("span",{className:"skill-tag",children:"Docker"})]}),a.jsxs("div",{className:"social-links",children:[a.jsx("a",{href:"#",className:"social-link",children:"gh"}),a.jsx("a",{href:"#",className:"social-link",children:"so"}),a.jsx("a",{href:"#",className:"social-link",children:"in"})]})]}),a.jsxs("div",{className:"team-member",children:[a.jsx("div",{className:"member-photo",children:"👩‍📊"}),a.jsx("h3",{className:"member-name",children:"Lisa Martinez"}),a.jsx("div",{className:"member-role",children:"Digital Marketing Specialist"}),a.jsx("p",{className:"member-bio",children:"Lisa helps our clients maximize their online presence through strategic SEO, analytics, and digital marketing campaigns."}),a.jsxs("div",{className:"member-skills",children:[a.jsx("span",{className:"skill-tag",children:"SEO"}),a.jsx("span",{className:"skill-tag",children:"Analytics"}),a.jsx("span",{className:"skill-tag",children:"PPC"}),a.jsx("span",{className:"skill-tag",children:"Content Strategy"})]}),a.jsxs("div",{className:"social-links",children:[a.jsx("a",{href:"#",className:"social-link",children:"in"}),a.jsx("a",{href:"#",className:"social-link",children:"tw"}),a.jsx("a",{href:"#",className:"social-link",children:"ig"})]})]})]}),a.jsxs("div",{className:"join-team",children:[a.jsx("h3",{children:"Want to Join Our Team?"}),a.jsx("p",{children:"We're always looking for talented individuals who share our passion for creating exceptional digital experiences. Check out our open positions and become part of the TekBrandify family."}),a.jsx(H,{to:"/contact",className:"cta-button",children:"View Open Positions"})]})]})})]}),lk=()=>{const[e,t]=x.useState({name:"",email:"",message:""}),[n,r]=x.useState(!1),[o,i]=x.useState(!1),[s,l]=x.useState(""),[c,u]=x.useState("");x.useEffect(()=>{const d=localStorage.getItem("selectedService"),y=localStorage.getItem("selectedPlan");d&&(l(d),localStorage.removeItem("selectedService")),y&&(u(y),localStorage.removeItem("selectedPlan"))},[]);const f=d=>{t({...e,[d.target.name]:d.target.value})},p=async d=>{d.preventDefault(),r(!0),setTimeout(()=>{r(!1),i(!0),t({name:"",email:"",message:""}),l(""),u(""),setTimeout(()=>{i(!1)},3e3)},1500)};return a.jsxs(ir,{children:[a.jsx("style",{children:`
        .contact-page {
          padding: 4rem 0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .page-title {
          text-align: center;
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .page-subtitle {
          text-align: center;
          font-size: clamp(1rem, 2vw, 1.25rem);
          color: #666;
          margin-bottom: 3rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin-top: 2rem;
        }

        .contact-info h3 {
          font-size: 1.6rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #333;
        }

        .contact-info p {
          color: #666;
          margin-bottom: 1.5rem;
          line-height: 1.7;
        }

        .contact-details {
          margin-bottom: 2rem;
        }

        .contact-detail {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.2rem;
        }

        .contact-detail-icon {
          width: 45px;
          height: 45px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.1rem;
        }

        .contact-detail-content strong {
          display: block;
          color: #333;
          margin-bottom: 0.2rem;
          font-size: 0.95rem;
        }

        .contact-detail-content span {
          color: #666;
          font-size: 0.9rem;
        }

        .contact-form {
          background: white;
          padding: 2.5rem;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
        }

        .selected-info {
          background: #f0f4ff;
          border: 2px solid #667eea;
          border-radius: 10px;
          padding: 1rem;
          margin-bottom: 1.5rem;
        }

        .selected-info h4 {
          color: #667eea;
          font-weight: 600;
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
        }

        .selected-info p {
          color: #333;
          font-weight: 500;
          margin: 0;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: #333;
          font-size: 0.95rem;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.8rem;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 100px;
        }

        .submit-btn {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 0.8rem 1.5rem;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .success-message {
          background: #10b981;
          color: white;
          text-align: center;
          padding: 1rem;
          border-radius: 8px;
          margin-bottom: 1rem;
          font-size: 0.95rem;
        }

        .office-hours {
          background: #f8fafc;
          padding: 1.5rem;
          border-radius: 12px;
          margin-top: 1.5rem;
        }

        .office-hours h4 {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.8rem;
          color: #333;
        }

        .hours-list {
          list-style: none;
        }

        .hours-list li {
          display: flex;
          justify-content: space-between;
          padding: 0.4rem 0;
          color: #666;
          border-bottom: 1px solid #e5e7eb;
          font-size: 0.9rem;
        }

        .hours-list li:last-child {
          border-bottom: none;
        }

        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .page-title {
            font-size: 2.5rem;
          }

          .contact-form {
            padding: 2rem;
          }

          .container {
            padding: 0 1rem;
          }
        }
      `}),a.jsx("div",{className:"contact-page",children:a.jsxs("div",{className:"container",children:[a.jsx("h1",{className:"page-title",children:"Get In Touch"}),a.jsx("p",{className:"page-subtitle",children:"Ready to start your project? We'd love to hear from you"}),a.jsxs("div",{className:"contact-content",children:[a.jsxs("div",{className:"contact-info",children:[a.jsx("h3",{children:"Let's Talk"}),a.jsx("p",{children:"Have a project in mind? We're here to help you bring your ideas to life. Get in touch and let's discuss how we can work together to create something amazing."}),a.jsxs("div",{className:"contact-details",children:[a.jsxs("div",{className:"contact-detail",children:[a.jsx("div",{className:"contact-detail-icon",children:"📧"}),a.jsxs("div",{className:"contact-detail-content",children:[a.jsx("strong",{children:"Email"}),a.jsx("span",{children:"hello@tekbrandify.com"})]})]}),a.jsxs("div",{className:"contact-detail",children:[a.jsx("div",{className:"contact-detail-icon",children:"📞"}),a.jsxs("div",{className:"contact-detail-content",children:[a.jsx("strong",{children:"Phone"}),a.jsx("span",{children:"+1 (555) 123-4567"})]})]}),a.jsxs("div",{className:"contact-detail",children:[a.jsx("div",{className:"contact-detail-icon",children:"📍"}),a.jsxs("div",{className:"contact-detail-content",children:[a.jsx("strong",{children:"Location"}),a.jsx("span",{children:"New York, NY"})]})]})]}),a.jsxs("div",{className:"office-hours",children:[a.jsx("h4",{children:"Office Hours"}),a.jsxs("ul",{className:"hours-list",children:[a.jsxs("li",{children:[a.jsx("span",{children:"Monday - Friday"}),a.jsx("span",{children:"9:00 AM - 6:00 PM"})]}),a.jsxs("li",{children:[a.jsx("span",{children:"Saturday"}),a.jsx("span",{children:"10:00 AM - 4:00 PM"})]}),a.jsxs("li",{children:[a.jsx("span",{children:"Sunday"}),a.jsx("span",{children:"Closed"})]})]})]})]}),a.jsxs("div",{className:"contact-form",children:[o&&a.jsx("div",{className:"success-message",children:"Thank you! Your message has been sent successfully. We'll get back to you soon."}),(s||c)&&a.jsxs("div",{className:"selected-info",children:[s&&a.jsxs(a.Fragment,{children:[a.jsx("h4",{children:"Selected Service:"}),a.jsx("p",{children:s})]}),c&&a.jsxs(a.Fragment,{children:[a.jsx("h4",{children:"Selected Plan:"}),a.jsx("p",{children:c})]})]}),a.jsxs("form",{onSubmit:p,children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"name",children:"Full Name"}),a.jsx("input",{type:"text",id:"name",name:"name",value:e.name,onChange:f,required:!0})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"email",children:"Email Address"}),a.jsx("input",{type:"email",id:"email",name:"email",value:e.email,onChange:f,required:!0})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"message",children:"Message"}),a.jsx("textarea",{id:"message",name:"message",value:e.message,onChange:f,placeholder:"Tell us about your project...",required:!0})]}),a.jsx("button",{type:"submit",className:"submit-btn",disabled:n,children:n?"Sending...":"Send Message"})]})]})]})]})})]})},ck=()=>{const e=li();return x.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",e.pathname)},[e.pathname]),a.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:a.jsxs("div",{className:"text-center",children:[a.jsx("h1",{className:"text-4xl font-bold mb-4",children:"404"}),a.jsx("p",{className:"text-xl text-gray-600 mb-4",children:"Oops! Page not found"}),a.jsx("a",{href:"/",className:"text-blue-500 hover:text-blue-700 underline",children:"Return to Home"})]})})},uk=new Xw,dk=()=>a.jsx(Zw,{client:uk,children:a.jsx(Zb,{children:a.jsxs(Nw,{children:[a.jsx(Cx,{}),a.jsx(e1,{}),a.jsx(Kb,{children:a.jsxs(Ub,{children:[a.jsx(Lt,{path:"/",element:a.jsx(nk,{})}),a.jsx(Lt,{path:"/about",element:a.jsx(rk,{})}),a.jsx(Lt,{path:"/services",element:a.jsx(ok,{})}),a.jsx(Lt,{path:"/portfolio",element:a.jsx(ik,{})}),a.jsx(Lt,{path:"/plans",element:a.jsx(sk,{})}),a.jsx(Lt,{path:"/teams",element:a.jsx(ak,{})}),a.jsx(Lt,{path:"/contact",element:a.jsx(lk,{})}),a.jsx(Lt,{path:"*",element:a.jsx(ck,{})})]})})]})})});Pm(document.getElementById("root")).render(a.jsx(dk,{}));
