"use strict";(self.webpackChunkdoctor=self.webpackChunkdoctor||[]).push([[179],{405:()=>{function te(e){return"function"==typeof e}function No(e){const t=e(i=>{Error.call(i),i.stack=(new Error).stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}const la=No(e=>function(t){e(this),this.message=t?`${t.length} errors occurred during unsubscription:\n${t.map((i,r)=>`${r+1}) ${i.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=t});function yr(e,n){if(e){const t=e.indexOf(n);0<=t&&e.splice(t,1)}}class Vt{constructor(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let n;if(!this.closed){this.closed=!0;const{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(const o of t)o.remove(this);else t.remove(this);const{initialTeardown:i}=this;if(te(i))try{i()}catch(o){n=o instanceof la?o.errors:[o]}const{_finalizers:r}=this;if(r){this._finalizers=null;for(const o of r)try{Wp(o)}catch(s){n=n??[],s instanceof la?n=[...n,...s.errors]:n.push(s)}}if(n)throw new la(n)}}add(n){var t;if(n&&n!==this)if(this.closed)Wp(n);else{if(n instanceof Vt){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=null!==(t=this._finalizers)&&void 0!==t?t:[]).push(n)}}_hasParent(n){const{_parentage:t}=this;return t===n||Array.isArray(t)&&t.includes(n)}_addParent(n){const{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(n),t):t?[t,n]:n}_removeParent(n){const{_parentage:t}=this;t===n?this._parentage=null:Array.isArray(t)&&yr(t,n)}remove(n){const{_finalizers:t}=this;t&&yr(t,n),n instanceof Vt&&n._removeParent(this)}}Vt.EMPTY=(()=>{const e=new Vt;return e.closed=!0,e})();const Gp=Vt.EMPTY;function zp(e){return e instanceof Vt||e&&"closed"in e&&te(e.remove)&&te(e.add)&&te(e.unsubscribe)}function Wp(e){te(e)?e():e.unsubscribe()}const Fi={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},ca={setTimeout(e,n,...t){const{delegate:i}=ca;return i?.setTimeout?i.setTimeout(e,n,...t):setTimeout(e,n,...t)},clearTimeout(e){const{delegate:n}=ca;return(n?.clearTimeout||clearTimeout)(e)},delegate:void 0};function qp(e){ca.setTimeout(()=>{const{onUnhandledError:n}=Fi;if(!n)throw e;n(e)})}function br(){}const tE=Uc("C",void 0,void 0);function Uc(e,n,t){return{kind:e,value:n,error:t}}let Li=null;function ua(e){if(Fi.useDeprecatedSynchronousErrorHandling){const n=!Li;if(n&&(Li={errorThrown:!1,error:null}),e(),n){const{errorThrown:t,error:i}=Li;if(Li=null,t)throw i}}else e()}class Gc extends Vt{constructor(n){super(),this.isStopped=!1,n?(this.destination=n,zp(n)&&n.add(this)):this.destination=lE}static create(n,t,i){return new So(n,t,i)}next(n){this.isStopped?Wc(function iE(e){return Uc("N",e,void 0)}(n),this):this._next(n)}error(n){this.isStopped?Wc(function nE(e){return Uc("E",void 0,e)}(n),this):(this.isStopped=!0,this._error(n))}complete(){this.isStopped?Wc(tE,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(n){this.destination.next(n)}_error(n){try{this.destination.error(n)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}}const oE=Function.prototype.bind;function zc(e,n){return oE.call(e,n)}class sE{constructor(n){this.partialObserver=n}next(n){const{partialObserver:t}=this;if(t.next)try{t.next(n)}catch(i){da(i)}}error(n){const{partialObserver:t}=this;if(t.error)try{t.error(n)}catch(i){da(i)}else da(n)}complete(){const{partialObserver:n}=this;if(n.complete)try{n.complete()}catch(t){da(t)}}}class So extends Gc{constructor(n,t,i){let r;if(super(),te(n)||!n)r={next:n??void 0,error:t??void 0,complete:i??void 0};else{let o;this&&Fi.useDeprecatedNextContext?(o=Object.create(n),o.unsubscribe=()=>this.unsubscribe(),r={next:n.next&&zc(n.next,o),error:n.error&&zc(n.error,o),complete:n.complete&&zc(n.complete,o)}):r=n}this.destination=new sE(r)}}function da(e){Fi.useDeprecatedSynchronousErrorHandling?function rE(e){Fi.useDeprecatedSynchronousErrorHandling&&Li&&(Li.errorThrown=!0,Li.error=e)}(e):qp(e)}function Wc(e,n){const{onStoppedNotification:t}=Fi;t&&ca.setTimeout(()=>t(e,n))}const lE={closed:!0,next:br,error:function aE(e){throw e},complete:br},qc="function"==typeof Symbol&&Symbol.observable||"@@observable";function Gn(e){return e}function Yp(e){return 0===e.length?Gn:1===e.length?e[0]:function(t){return e.reduce((i,r)=>r(i),t)}}let he=(()=>{class e{constructor(t){t&&(this._subscribe=t)}lift(t){const i=new e;return i.source=this,i.operator=t,i}subscribe(t,i,r){const o=function dE(e){return e&&e instanceof Gc||function uE(e){return e&&te(e.next)&&te(e.error)&&te(e.complete)}(e)&&zp(e)}(t)?t:new So(t,i,r);return ua(()=>{const{operator:s,source:a}=this;o.add(s?s.call(o,a):a?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return new(i=Zp(i))((r,o)=>{const s=new So({next:a=>{try{t(a)}catch(l){o(l),s.unsubscribe()}},error:o,complete:r});this.subscribe(s)})}_subscribe(t){var i;return null===(i=this.source)||void 0===i?void 0:i.subscribe(t)}[qc](){return this}pipe(...t){return Yp(t)(this)}toPromise(t){return new(t=Zp(t))((i,r)=>{let o;this.subscribe(s=>o=s,s=>r(s),()=>i(o))})}}return e.create=n=>new e(n),e})();function Zp(e){var n;return null!==(n=e??Fi.Promise)&&void 0!==n?n:Promise}const fE=No(e=>function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});let Te=(()=>{class e extends he{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){const i=new Kp(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new fE}next(t){ua(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(const i of this.currentObservers)i.next(t)}})}error(t){ua(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;const{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){ua(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;const{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return(null===(t=this.observers)||void 0===t?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){const{hasError:i,isStopped:r,observers:o}=this;return i||r?Gp:(this.currentObservers=null,o.push(t),new Vt(()=>{this.currentObservers=null,yr(o,t)}))}_checkFinalizedStatuses(t){const{hasError:i,thrownError:r,isStopped:o}=this;i?t.error(r):o&&t.complete()}asObservable(){const t=new he;return t.source=this,t}}return e.create=(n,t)=>new Kp(n,t),e})();class Kp extends Te{constructor(n,t){super(),this.destination=n,this.source=t}next(n){var t,i;null===(i=null===(t=this.destination)||void 0===t?void 0:t.next)||void 0===i||i.call(t,n)}error(n){var t,i;null===(i=null===(t=this.destination)||void 0===t?void 0:t.error)||void 0===i||i.call(t,n)}complete(){var n,t;null===(t=null===(n=this.destination)||void 0===n?void 0:n.complete)||void 0===t||t.call(n)}_subscribe(n){var t,i;return null!==(i=null===(t=this.source)||void 0===t?void 0:t.subscribe(n))&&void 0!==i?i:Gp}}function Jp(e){return te(e?.lift)}function Pe(e){return n=>{if(Jp(n))return n.lift(function(t){try{return e(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function _e(e,n,t,i,r){return new hE(e,n,t,i,r)}class hE extends Gc{constructor(n,t,i,r,o,s){super(n),this.onFinalize=o,this.shouldUnsubscribe=s,this._next=t?function(a){try{t(a)}catch(l){n.error(l)}}:super._next,this._error=r?function(a){try{r(a)}catch(l){n.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){n.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){const{closed:t}=this;super.unsubscribe(),!t&&(null===(n=this.onFinalize)||void 0===n||n.call(this))}}}function L(e,n){return Pe((t,i)=>{let r=0;t.subscribe(_e(i,o=>{i.next(e.call(n,o,r++))}))})}function Vi(e){return this instanceof Vi?(this.v=e,this):new Vi(e)}function mE(e,n,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,i=t.apply(e,n||[]),o=[];return r={},s("next"),s("throw"),s("return"),r[Symbol.asyncIterator]=function(){return this},r;function s(f){i[f]&&(r[f]=function(h){return new Promise(function(p,g){o.push([f,h,p,g])>1||a(f,h)})})}function a(f,h){try{!function l(f){f.value instanceof Vi?Promise.resolve(f.value.v).then(c,u):d(o[0][2],f)}(i[f](h))}catch(p){d(o[0][3],p)}}function c(f){a("next",f)}function u(f){a("throw",f)}function d(f,h){f(h),o.shift(),o.length&&a(o[0][0],o[0][1])}}function _E(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=function eg(e){var n="function"==typeof Symbol&&Symbol.iterator,t=n&&e[n],i=0;if(t)return t.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&i>=e.length&&(e=void 0),{value:e&&e[i++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}(e),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(o){t[o]=e[o]&&function(s){return new Promise(function(a,l){!function r(o,s,a,l){Promise.resolve(l).then(function(c){o({value:c,done:a})},s)}(a,l,(s=e[o](s)).done,s.value)})}}}const Zc=e=>e&&"number"==typeof e.length&&"function"!=typeof e;function tg(e){return te(e?.then)}function ng(e){return te(e[qc])}function ig(e){return Symbol.asyncIterator&&te(e?.[Symbol.asyncIterator])}function rg(e){return new TypeError(`You provided ${null!==e&&"object"==typeof e?"an invalid object":`'${e}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}const og=function yE(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}();function sg(e){return te(e?.[og])}function ag(e){return mE(this,arguments,function*(){const t=e.getReader();try{for(;;){const{value:i,done:r}=yield Vi(t.read());if(r)return yield Vi(void 0);yield yield Vi(i)}}finally{t.releaseLock()}})}function lg(e){return te(e?.getReader)}function ct(e){if(e instanceof he)return e;if(null!=e){if(ng(e))return function bE(e){return new he(n=>{const t=e[qc]();if(te(t.subscribe))return t.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}(e);if(Zc(e))return function DE(e){return new he(n=>{for(let t=0;t<e.length&&!n.closed;t++)n.next(e[t]);n.complete()})}(e);if(tg(e))return function CE(e){return new he(n=>{e.then(t=>{n.closed||(n.next(t),n.complete())},t=>n.error(t)).then(null,qp)})}(e);if(ig(e))return cg(e);if(sg(e))return function wE(e){return new he(n=>{for(const t of e)if(n.next(t),n.closed)return;n.complete()})}(e);if(lg(e))return function EE(e){return cg(ag(e))}(e)}throw rg(e)}function cg(e){return new he(n=>{(function NE(e,n){var t,i,r,o;return function pE(e,n,t,i){return new(t||(t=Promise))(function(o,s){function a(u){try{c(i.next(u))}catch(d){s(d)}}function l(u){try{c(i.throw(u))}catch(d){s(d)}}function c(u){u.done?o(u.value):function r(o){return o instanceof t?o:new t(function(s){s(o)})}(u.value).then(a,l)}c((i=i.apply(e,n||[])).next())})}(this,void 0,void 0,function*(){try{for(t=_E(e);!(i=yield t.next()).done;)if(n.next(i.value),n.closed)return}catch(s){r={error:s}}finally{try{i&&!i.done&&(o=t.return)&&(yield o.call(t))}finally{if(r)throw r.error}}n.complete()})})(e,n).catch(t=>n.error(t))})}function zn(e,n,t,i=0,r=!1){const o=n.schedule(function(){t(),r?e.add(this.schedule(null,i)):this.unsubscribe()},i);if(e.add(o),!r)return o}function Ke(e,n,t=1/0){return te(n)?Ke((i,r)=>L((o,s)=>n(i,o,r,s))(ct(e(i,r))),t):("number"==typeof n&&(t=n),Pe((i,r)=>function SE(e,n,t,i,r,o,s,a){const l=[];let c=0,u=0,d=!1;const f=()=>{d&&!l.length&&!c&&n.complete()},h=g=>c<i?p(g):l.push(g),p=g=>{o&&n.next(g),c++;let m=!1;ct(t(g,u++)).subscribe(_e(n,v=>{r?.(v),o?h(v):n.next(v)},()=>{m=!0},void 0,()=>{if(m)try{for(c--;l.length&&c<i;){const v=l.shift();s?zn(n,s,()=>p(v)):p(v)}f()}catch(v){n.error(v)}}))};return e.subscribe(_e(n,h,()=>{d=!0,f()})),()=>{a?.()}}(i,r,e,t)))}function Dr(e=1/0){return Ke(Gn,e)}const ln=new he(e=>e.complete());function ug(e){return e&&te(e.schedule)}function Kc(e){return e[e.length-1]}function fa(e){return te(Kc(e))?e.pop():void 0}function To(e){return ug(Kc(e))?e.pop():void 0}function dg(e,n=0){return Pe((t,i)=>{t.subscribe(_e(i,r=>zn(i,e,()=>i.next(r),n),()=>zn(i,e,()=>i.complete(),n),r=>zn(i,e,()=>i.error(r),n)))})}function fg(e,n=0){return Pe((t,i)=>{i.add(e.schedule(()=>t.subscribe(i),n))})}function hg(e,n){if(!e)throw new Error("Iterable cannot be null");return new he(t=>{zn(t,n,()=>{const i=e[Symbol.asyncIterator]();zn(t,n,()=>{i.next().then(r=>{r.done?t.complete():t.next(r.value)})},0,!0)})})}function Ue(e,n){return n?function kE(e,n){if(null!=e){if(ng(e))return function ME(e,n){return ct(e).pipe(fg(n),dg(n))}(e,n);if(Zc(e))return function RE(e,n){return new he(t=>{let i=0;return n.schedule(function(){i===e.length?t.complete():(t.next(e[i++]),t.closed||this.schedule())})})}(e,n);if(tg(e))return function IE(e,n){return ct(e).pipe(fg(n),dg(n))}(e,n);if(ig(e))return hg(e,n);if(sg(e))return function AE(e,n){return new he(t=>{let i;return zn(t,n,()=>{i=e[og](),zn(t,n,()=>{let r,o;try{({value:r,done:o}=i.next())}catch(s){return void t.error(s)}o?t.complete():t.next(r)},0,!0)}),()=>te(i?.return)&&i.return()})}(e,n);if(lg(e))return function xE(e,n){return hg(ag(e),n)}(e,n)}throw rg(e)}(e,n):ct(e)}function Jc(e,n,...t){if(!0===n)return void e();if(!1===n)return;const i=new So({next:()=>{i.unsubscribe(),e()}});return n(...t).subscribe(i)}
/**
       * @license Angular v14.3.0
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function pe(e){for(let n in e)if(e[n]===pe)return n;throw Error("Could not find renamed property on target object.")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function ge(e){if("string"==typeof e)return e;if(Array.isArray(e))return"["+e.map(ge).join(", ")+"]";if(null==e)return""+e;if(e.overriddenName)return`${e.overriddenName}`;if(e.name)return`${e.name}`;const n=e.toString();if(null==n)return""+n;const t=n.indexOf("\n");return-1===t?n:n.substring(0,t)}function Xc(e,n){return null==e||""===e?null===n?"":n:null==n||""===n?e:e+" "+n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const LE=pe({__forward_ref__:pe});function ie(e){return e.__forward_ref__=ie,e.toString=function(){return ge(this())},e}function F(e){return function eu(e){return"function"==typeof e&&e.hasOwnProperty(LE)&&e.__forward_ref__===ie}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e)?e():e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class w extends Error{constructor(n,t){super(function ha(e,n){return`NG0${Math.abs(e)}${n?": "+n.trim():""}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(n,t)),this.code=n}}function B(e){return"string"==typeof e?e:null==e?"":String(e)}function pa(e,n){throw new w(-201,!1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function jt(e,n){null==e&&function ae(e,n,t,i){throw new Error(`ASSERTION ERROR: ${e}`+(null==i?"":` [Expected=> ${t} ${i} ${n} <=Actual]`))}(n,e,null,"!=")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function M(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function oe(e){return{providers:e.providers||[],imports:e.imports||[]}}function ga(e){return pg(e,ma)||pg(e,mg)}function pg(e,n){return e.hasOwnProperty(n)?e[n]:null}function gg(e){return e&&(e.hasOwnProperty(tu)||e.hasOwnProperty(WE))?e[tu]:null}const ma=pe({\u0275prov:pe}),tu=pe({\u0275inj:pe}),mg=pe({ngInjectableDef:pe}),WE=pe({ngInjectorDef:pe});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var k=(()=>((k=k||{})[k.Default=0]="Default",k[k.Host=1]="Host",k[k.Self=2]="Self",k[k.SkipSelf=4]="SkipSelf",k[k.Optional=8]="Optional",k))();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let nu;function Qt(e){const n=nu;return nu=e,n}function _g(e,n,t){const i=ga(e);return i&&"root"==i.providedIn?void 0===i.value?i.value=i.factory():i.value:t&k.Optional?null:void 0!==n?n:void pa(ge(e))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function pi(e){return{toString:e}.toString()}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var cn=(()=>((cn=cn||{})[cn.OnPush=0]="OnPush",cn[cn.Default=1]="Default",cn))(),On=(()=>{return(e=On||(On={}))[e.Emulated=0]="Emulated",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom",On;var e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const ve=(()=>typeof globalThis<"u"&&globalThis||typeof global<"u"&&global||typeof window<"u"&&window||typeof self<"u"&&typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&self)(),Cr={},se=[],_a=pe({\u0275cmp:pe}),iu=pe({\u0275dir:pe}),ru=pe({\u0275pipe:pe}),vg=pe({\u0275mod:pe}),qn=pe({\u0275fac:pe}),Oo=pe({__NG_ELEMENT_ID__:pe});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let YE=0;function Je(e){return pi(()=>{const t=!0===e.standalone,i={},r={type:e.type,providersResolver:null,decls:e.decls,vars:e.vars,factory:null,template:e.template||null,consts:e.consts||null,ngContentSelectors:e.ngContentSelectors,hostBindings:e.hostBindings||null,hostVars:e.hostVars||0,hostAttrs:e.hostAttrs||null,contentQueries:e.contentQueries||null,declaredInputs:i,inputs:null,outputs:null,exportAs:e.exportAs||null,onPush:e.changeDetection===cn.OnPush,directiveDefs:null,pipeDefs:null,standalone:t,dependencies:t&&e.dependencies||null,getStandaloneInjector:null,selectors:e.selectors||se,viewQuery:e.viewQuery||null,features:e.features||null,data:e.data||{},encapsulation:e.encapsulation||On.Emulated,id:"c"+YE++,styles:e.styles||se,_:null,setInput:null,schemas:e.schemas||null,tView:null},o=e.dependencies,s=e.features;return r.inputs=Dg(e.inputs,i),r.outputs=Dg(e.outputs),s&&s.forEach(a=>a(r)),r.directiveDefs=o?()=>("function"==typeof o?o():o).map(yg).filter(bg):null,r.pipeDefs=o?()=>("function"==typeof o?o():o).map(wt).filter(bg):null,r})}function yg(e){return de(e)||Ct(e)}function bg(e){return null!==e}function le(e){return pi(()=>({type:e.type,bootstrap:e.bootstrap||se,declarations:e.declarations||se,imports:e.imports||se,exports:e.exports||se,transitiveCompileScopes:null,schemas:e.schemas||null,id:e.id||null}))}function Dg(e,n){if(null==e)return Cr;const t={};for(const i in e)if(e.hasOwnProperty(i)){let r=e[i],o=r;Array.isArray(r)&&(o=r[1],r=r[0]),t[r]=i,n&&(n[r]=o)}return t}const N=Je;function de(e){return e[_a]||null}function Ct(e){return e[iu]||null}function wt(e){return e[ru]||null}function Ht(e,n){const t=e[vg]||null;if(!t&&!0===n)throw new Error(`Type ${ge(e)} does not have '\u0275mod' property.`);return t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const U=11;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Pt(e){return Array.isArray(e)&&"object"==typeof e[1]}function dn(e){return Array.isArray(e)&&!0===e[1]}function au(e){return 0!=(8&e.flags)}function Da(e){return 2==(2&e.flags)}function Ca(e){return 1==(1&e.flags)}function fn(e){return null!==e.template}function eN(e){return 0!=(256&e[2])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Ui(e,n){return e.hasOwnProperty(qn)?e[qn]:null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class iN{constructor(n,t,i){this.previousValue=n,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Eg(e){return e.type.prototype.ngOnChanges&&(e.setInput=oN),rN}function rN(){const e=Sg(this),n=e?.current;if(n){const t=e.previous;if(t===Cr)e.previous=n;else for(let i in n)t[i]=n[i];e.current=null,this.ngOnChanges(n)}}function oN(e,n,t,i){const r=Sg(e)||function sN(e,n){return e[Ng]=n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e,{previous:Cr,current:null}),o=r.current||(r.current={}),s=r.previous,a=this.declaredInputs[t],l=s[a];o[a]=new iN(l&&l.currentValue,n,s===Cr),e[i]=n}const Ng="__ngSimpleChanges__";function Sg(e){return e[Ng]||null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Ge(e){for(;Array.isArray(e);)e=e[0];return e}function wa(e,n){return Ge(n[e])}function Ut(e,n){return Ge(n[e.index])}function fu(e,n){return e.data[n]}function Gt(e,n){const t=n[e];return Pt(t)?t:t[0]}function Ea(e){return 64==(64&e[2])}function gi(e,n){return null==n?null:e[n]}function Tg(e){e[18]=0}function hu(e,n){e[5]+=n;let t=e,i=e[3];for(;null!==i&&(1===n&&1===t[5]||-1===n&&0===t[5]);)i[5]+=n,t=i,i=i[3]
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}const V={lFrame:Lg(null),bindingsEnabled:!0};function Mg(){return V.bindingsEnabled}function D(){return V.lFrame.lView}function X(){return V.lFrame.tView}function Qe(){let e=Ig();for(;null!==e&&64===e.type;)e=e.parent;return e}function Ig(){return V.lFrame.currentTNode}function Rn(e,n){const t=V.lFrame;t.currentTNode=e,t.isParent=n}function pu(){return V.lFrame.isParent}function gu(){V.lFrame.isParent=!1}function Or(){return V.lFrame.bindingIndex++}function Zn(e){const n=V.lFrame,t=n.bindingIndex;return n.bindingIndex=n.bindingIndex+e,t}function DN(e,n){const t=V.lFrame;t.bindingIndex=t.bindingRootIndex=e,mu(n)}function mu(e){V.lFrame.currentDirectiveIndex=e}function kg(){return V.lFrame.currentQueryIndex}function vu(e){V.lFrame.currentQueryIndex=e}function wN(e){const n=e[1];return 2===n.type?n.declTNode:1===n.type?e[6]:null}function Pg(e,n,t){if(t&k.SkipSelf){let r=n,o=e;for(;!(r=r.parent,null!==r||t&k.Host||(r=wN(o),null===r||(o=o[15],10&r.type))););if(null===r)return!1;n=r,e=o}const i=V.lFrame=Fg();return i.currentTNode=n,i.lView=e,!0}function yu(e){const n=Fg(),t=e[1];V.lFrame=n,n.currentTNode=t.firstChild,n.lView=e,n.tView=t,n.contextLView=e,n.bindingIndex=t.bindingStartIndex,n.inI18n=!1}function Fg(){const e=V.lFrame,n=null===e?null:e.child;return null===n?Lg(e):n}function Lg(e){const n={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null,inI18n:!1};return null!==e&&(e.child=n),n}function Vg(){const e=V.lFrame;return V.lFrame=e.parent,e.currentTNode=null,e.lView=null,e}const Bg=Vg;function bu(){const e=Vg();e.isParent=!0,e.tView=null,e.selectedIndex=-1,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function St(){return V.lFrame.selectedIndex}function mi(e){V.lFrame.selectedIndex=e}function Oe(){const e=V.lFrame;return fu(e.tView,e.selectedIndex)}function Na(e,n){for(let t=n.directiveStart,i=n.directiveEnd;t<i;t++){const o=e.data[t].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:l,ngAfterViewChecked:c,ngOnDestroy:u}=o;s&&(e.contentHooks||(e.contentHooks=[])).push(-t,s),a&&((e.contentHooks||(e.contentHooks=[])).push(t,a),(e.contentCheckHooks||(e.contentCheckHooks=[])).push(t,a)),l&&(e.viewHooks||(e.viewHooks=[])).push(-t,l),c&&((e.viewHooks||(e.viewHooks=[])).push(t,c),(e.viewCheckHooks||(e.viewCheckHooks=[])).push(t,c)),null!=u&&(e.destroyHooks||(e.destroyHooks=[])).push(t,u)}}function Sa(e,n,t){jg(e,n,3,t)}function Ta(e,n,t,i){(3&e[2])===t&&jg(e,n,t,i)}function Du(e,n){let t=e[2];(3&t)===n&&(t&=2047,t+=1,e[2]=t)}function jg(e,n,t,i){const o=i??-1,s=n.length-1;let a=0;for(let l=void 0!==i?65535&e[18]:0;l<s;l++)if("number"==typeof n[l+1]){if(a=n[l],null!=i&&a>=i)break}else n[l]<0&&(e[18]+=65536),(a<o||-1==o)&&(AN(e,t,n,l),e[18]=(4294901760&e[18])+l+2),l++}function AN(e,n,t,i){const r=t[i]<0,o=t[i+1],a=e[r?-t[i]:t[i]];if(r){if(e[2]>>11<e[18]>>16&&(3&e[2])===n){e[2]+=2048;try{o.call(a)}finally{}}}else try{o.call(a)}finally{}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ko{constructor(n,t,i){this.factory=n,this.resolving=!1,this.canSeeViewProviders=t,this.injectImpl=i}}function Oa(e,n,t){let i=0;for(;i<t.length;){const r=t[i];if("number"==typeof r){if(0!==r)break;i++;const o=t[i++],s=t[i++],a=t[i++];e.setAttribute(n,s,a,o)}else{const o=r,s=t[++i];$g(o)?e.setProperty(n,o,s):e.setAttribute(n,o,s),i++}}return i}function Hg(e){return 3===e||4===e||6===e}function $g(e){return 64===e.charCodeAt(0)}function Ma(e,n){if(null!==n&&0!==n.length)if(null===e||0===e.length)e=n.slice();else{let t=-1;for(let i=0;i<n.length;i++){const r=n[i];"number"==typeof r?t=r:0===t||Ug(e,t,r,null,-1===t||2===t?n[++i]:null)}}return e}function Ug(e,n,t,i,r){let o=0,s=e.length;if(-1===n)s=-1;else for(;o<e.length;){const a=e[o++];if("number"==typeof a){if(a===n){s=-1;break}if(a>n){s=o-1;break}}}for(;o<e.length;){const a=e[o];if("number"==typeof a)break;if(a===t){if(null===i)return void(null!==r&&(e[o+1]=r));if(i===e[o+1])return void(e[o+2]=r)}o++,null!==i&&o++,null!==r&&o++}-1!==s&&(e.splice(s,0,n),o=s+1),e.splice(o++,0,t),null!==i&&e.splice(o++,0,i),null!==r&&e.splice(o++,0,r)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Gg(e){return-1!==e}function Mr(e){return 32767&e}function Ir(e,n){let t=function LN(e){return e>>16}(e),i=n;for(;t>0;)i=i[15],t--;return i}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let wu=!0;function Ia(e){const n=wu;return wu=e,n}let VN=0;const An={};function Fo(e,n){const t=Nu(e,n);if(-1!==t)return t;const i=n[1];i.firstCreatePass&&(e.injectorIndex=n.length,Eu(i.data,e),Eu(n,null),Eu(i.blueprint,null));const r=Ra(e,n),o=e.injectorIndex;if(Gg(r)){const s=Mr(r),a=Ir(r,n),l=a[1].data;for(let c=0;c<8;c++)n[o+c]=a[s+c]|l[s+c]}return n[o+8]=r,o}function Eu(e,n){e.push(0,0,0,0,0,0,0,0,n)}function Nu(e,n){return-1===e.injectorIndex||e.parent&&e.parent.injectorIndex===e.injectorIndex||null===n[e.injectorIndex+8]?-1:e.injectorIndex}function Ra(e,n){if(e.parent&&-1!==e.parent.injectorIndex)return e.parent.injectorIndex;let t=0,i=null,r=n;for(;null!==r;){if(i=Xg(r),null===i)return-1;if(t++,r=r[15],-1!==i.injectorIndex)return i.injectorIndex|t<<16}return-1}function Aa(e,n,t){!function BN(e,n,t){let i;"string"==typeof t?i=t.charCodeAt(0)||0:t.hasOwnProperty(Oo)&&(i=t[Oo]),null==i&&(i=t[Oo]=VN++);const r=255&i;n.data[e+(r>>5)]|=1<<r}(e,n,t)}function qg(e,n,t){if(t&k.Optional||void 0!==e)return e;pa()}function Yg(e,n,t,i){if(t&k.Optional&&void 0===i&&(i=null),0==(t&(k.Self|k.Host))){const r=e[9],o=Qt(void 0);try{return r?r.get(n,i,t&k.Optional):_g(n,i,t&k.Optional)}finally{Qt(o)}}return qg(i,0,t)}function Zg(e,n,t,i=k.Default,r){if(null!==e){if(1024&n[2]){const s=function GN(e,n,t,i,r){let o=e,s=n;for(;null!==o&&null!==s&&1024&s[2]&&!(256&s[2]);){const a=Kg(o,s,t,i|k.Self,An);if(a!==An)return a;let l=o.parent;if(!l){const c=s[21];if(c){const u=c.get(t,An,i);if(u!==An)return u}l=Xg(s),s=s[15]}o=l}return r}(e,n,t,i,An);if(s!==An)return s}const o=Kg(e,n,t,i,An);if(o!==An)return o}return Yg(n,t,i,r)}function Kg(e,n,t,i,r){const o=function $N(e){if("string"==typeof e)return e.charCodeAt(0)||0;const n=e.hasOwnProperty(Oo)?e[Oo]:void 0;return"number"==typeof n?n>=0?255&n:UN:n}(t);if("function"==typeof o){if(!Pg(n,e,i))return i&k.Host?qg(r,0,i):Yg(n,t,i,r);try{const s=o(i);if(null!=s||i&k.Optional)return s;pa()}finally{Bg()}}else if("number"==typeof o){let s=null,a=Nu(e,n),l=-1,c=i&k.Host?n[16][6]:null;for((-1===a||i&k.SkipSelf)&&(l=-1===a?Ra(e,n):n[a+8],-1!==l&&Qg(i,!1)?(s=n[1],a=Mr(l),n=Ir(l,n)):a=-1);-1!==a;){const u=n[1];if(Jg(o,a,u.data)){const d=HN(a,n,t,s,i,c);if(d!==An)return d}l=n[a+8],-1!==l&&Qg(i,n[1].data[a+8]===c)&&Jg(o,a,n)?(s=u,a=Mr(l),n=Ir(l,n)):a=-1}}return r}function HN(e,n,t,i,r,o){const s=n[1],a=s.data[e+8],u=xa(a,s,t,null==i?Da(a)&&wu:i!=s&&0!=(3&a.type),r&k.Host&&o===a);return null!==u?Lo(n,s,u,a):An}function xa(e,n,t,i,r){const o=e.providerIndexes,s=n.data,a=1048575&o,l=e.directiveStart,u=o>>20,f=r?a+u:e.directiveEnd;for(let h=i?a:a+u;h<f;h++){const p=s[h];if(h<l&&t===p||h>=l&&p.type===t)return h}if(r){const h=s[l];if(h&&fn(h)&&h.type===t)return l}return null}function Lo(e,n,t,i){let r=e[t];const o=n.data;if(function xN(e){return e instanceof ko}(r)){const s=r;s.resolving&&
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function VE(e,n){const t=n?`. Dependency path: ${n.join(" > ")} > ${e}`:"";throw new w(-200,`Circular dependency in DI detected for ${e}${t}`)}(function re(e){return"function"==typeof e?e.name||e.toString():"object"==typeof e&&null!=e&&"function"==typeof e.type?e.type.name||e.type.toString():B(e)}(o[t]));const a=Ia(s.canSeeViewProviders);s.resolving=!0;const l=s.injectImpl?Qt(s.injectImpl):null;Pg(e,i,k.Default);try{r=e[t]=s.factory(void 0,o,e,i),n.firstCreatePass&&t>=i.directiveStart&&
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function RN(e,n,t){const{ngOnChanges:i,ngOnInit:r,ngDoCheck:o}=n.type.prototype;if(i){const s=Eg(n);(t.preOrderHooks||(t.preOrderHooks=[])).push(e,s),(t.preOrderCheckHooks||(t.preOrderCheckHooks=[])).push(e,s)}r&&(t.preOrderHooks||(t.preOrderHooks=[])).push(0-e,r),o&&((t.preOrderHooks||(t.preOrderHooks=[])).push(e,o),(t.preOrderCheckHooks||(t.preOrderCheckHooks=[])).push(e,o))}(t,o[t],n)}finally{null!==l&&Qt(l),Ia(a),s.resolving=!1,Bg()}}return r}function Jg(e,n,t){return!!(t[n+(e>>5)]&1<<e)}function Qg(e,n){return!(e&k.Self||e&k.Host&&n)}class Rr{constructor(n,t){this._tNode=n,this._lView=t}get(n,t,i){return Zg(this._tNode,this._lView,n,i,t)}}function UN(){return new Rr(Qe(),D())}function Xg(e){const n=e[1],t=n.type;return 2===t?n.declTNode:1===t?e[6]:null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const xr="__parameters__";function Pr(e,n,t){return pi(()=>{const i=function Tu(e){return function(...t){if(e){const i=e(...t);for(const r in i)this[r]=i[r]}}}(n);function r(...o){if(this instanceof r)return i.apply(this,o),this;const s=new r(...o);return a.annotation=s,a;function a(l,c,u){const d=l.hasOwnProperty(xr)?l[xr]:Object.defineProperty(l,xr,{value:[]})[xr];for(;d.length<=u;)d.push(null);return(d[u]=d[u]||[]).push(s),l}}return t&&(r.prototype=Object.create(t.prototype)),r.prototype.ngMetadataName=e,r.annotationCls=r,r})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class R{constructor(n,t){this._desc=n,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,"number"==typeof t?this.__NG_ELEMENT_ID__=t:void 0!==t&&(this.\u0275prov=M({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function zt(e,n){void 0===n&&(n=e);for(let t=0;t<e.length;t++){let i=e[t];Array.isArray(i)?(n===e&&(n=e.slice(0,t)),zt(i,n)):n!==e&&n.push(i)}return n}function Kn(e,n){e.forEach(t=>Array.isArray(t)?Kn(t,n):n(t))}function tm(e,n,t){n>=e.length?e.push(t):e.splice(n,0,t)}function ka(e,n){return n>=e.length-1?e.pop():e.splice(n,1)[0]}function jo(e,n){const t=[];for(let i=0;i<e;i++)t.push(n);return t}function Wt(e,n,t){let i=Fr(e,n);return i>=0?e[1|i]=t:(i=~i,function YN(e,n,t,i){let r=e.length;if(r==n)e.push(t,i);else if(1===r)e.push(i,e[0]),e[0]=t;else{for(r--,e.push(e[r-1],e[r]);r>n;)e[r]=e[r-2],r--;e[n]=t,e[n+1]=i}}(e,i,n,t)),i}function Mu(e,n){const t=Fr(e,n);if(t>=0)return e[1|t]}function Fr(e,n){return function rm(e,n,t){let i=0,r=e.length>>t;for(;r!==i;){const o=i+(r-i>>1),s=e[o<<t];if(n===s)return o<<t;s>n?r=o:i=o+1}return~(r<<t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e,n,1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Ho={},Ru="__NG_DI_FLAG__",Fa="ngTempTokenPath",nS=/\n/gm,om="__source";let $o;function Lr(e){const n=$o;return $o=e,n}function rS(e,n=k.Default){if(void 0===$o)throw new w(-203,!1);return null===$o?_g(e,void 0,n):$o.get(e,n&k.Optional?null:void 0,n)}function E(e,n=k.Default){return(function qE(){return nu}()||rS)(F(e),n)}function Be(e,n=k.Default){return"number"!=typeof n&&(n=0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)),E(e,n)}function Au(e){const n=[];for(let t=0;t<e.length;t++){const i=F(e[t]);if(Array.isArray(i)){if(0===i.length)throw new w(900,!1);let r,o=k.Default;for(let s=0;s<i.length;s++){const a=i[s],l=oS(a);"number"==typeof l?-1===l?r=a.token:o|=l:r=a}n.push(E(r,o))}else n.push(E(i))}return n}function Uo(e,n){return e[Ru]=n,e.prototype[Ru]=n,e}function oS(e){return e[Ru]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Go=Uo(Pr("Optional"),8),zo=Uo(Pr("SkipSelf"),4);
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
var Ft=(()=>((Ft=Ft||{})[Ft.Important=1]="Important",Ft[Ft.DashCase=2]="DashCase",Ft))();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Lu=new Map;let wS=0;const Bu="__ngContext__";function mt(e,n){Pt(n)?(e[Bu]=n[20],function NS(e){Lu.set(e[20],e)}(n)):e[Bu]=n}function Hu(e,n){return undefined(e,n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Zo(e){const n=e[3];return dn(n)?n[3]:n}function $u(e){return Sm(e[13])}function Uu(e){return Sm(e[4])}function Sm(e){for(;null!==e&&!dn(e);)e=e[4];return e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Br(e,n,t,i,r){if(null!=i){let o,s=!1;dn(i)?o=i:Pt(i)&&(s=!0,i=i[0]);const a=Ge(i);0===e&&null!==t?null==r?Am(n,t,a):zi(n,t,a,r||null,!0):1===e&&null!==t?zi(n,t,a,r||null,!0):2===e?function Ku(e,n,t){const i=Ba(e,n);i&&function qS(e,n,t,i){e.removeChild(n,t,i)}(e,i,n,t)}(n,a,s):3===e&&n.destroyNode(a),null!=o&&function KS(e,n,t,i,r){const o=t[7];o!==Ge(t)&&Br(n,e,i,o,r);for(let a=10;a<t.length;a++){const l=t[a];Ko(l[1],l,e,n,i,o)}}(n,e,o,t,r)}}function zu(e,n,t){return e.createElement(n,t)}function Om(e,n){const t=e[9],i=t.indexOf(n),r=n[3];512&n[2]&&(n[2]&=-513,hu(r,-1)),t.splice(i,1)}function Wu(e,n){if(e.length<=10)return;const t=10+n,i=e[t];if(i){const r=i[17];null!==r&&r!==e&&Om(r,i),n>0&&(e[t-1][4]=i[4]);const o=ka(e,10+n);!function BS(e,n){Ko(e,n,n[U],2,null,null),n[0]=null,n[6]=null}(i[1],i);const s=o[19];null!==s&&s.detachView(o[1]),i[3]=null,i[4]=null,i[2]&=-65}return i}function Mm(e,n){if(!(128&n[2])){const t=n[U];t.destroyNode&&Ko(e,n,t,3,null,null),function $S(e){let n=e[13];if(!n)return qu(e[1],e);for(;n;){let t=null;if(Pt(n))t=n[13];else{const i=n[10];i&&(t=i)}if(!t){for(;n&&!n[4]&&n!==e;)Pt(n)&&qu(n[1],n),n=n[3];null===n&&(n=e),Pt(n)&&qu(n[1],n),t=n&&n[4]}n=t}}(n)}}function qu(e,n){if(!(128&n[2])){n[2]&=-65,n[2]|=128,function WS(e,n){let t;if(null!=e&&null!=(t=e.destroyHooks))for(let i=0;i<t.length;i+=2){const r=n[t[i]];if(!(r instanceof ko)){const o=t[i+1];if(Array.isArray(o))for(let s=0;s<o.length;s+=2){const a=r[o[s]],l=o[s+1];try{l.call(a)}finally{}}else try{o.call(r)}finally{}}}}(e,n),function zS(e,n){const t=e.cleanup,i=n[7];let r=-1;if(null!==t)for(let o=0;o<t.length-1;o+=2)if("string"==typeof t[o]){const s=t[o+1],a="function"==typeof s?s(n):Ge(n[s]),l=i[r=t[o+2]],c=t[o+3];"boolean"==typeof c?a.removeEventListener(t[o],l,c):c>=0?i[r=c]():i[r=-c].unsubscribe(),o+=2}else{const s=i[r=t[o+1]];t[o].call(s)}if(null!==i){for(let o=r+1;o<i.length;o++)(0,i[o])();n[7]=null}}(e,n),1===n[1].type&&n[U].destroy();const t=n[17];if(null!==t&&dn(n[3])){t!==n[3]&&Om(t,n);const i=n[19];null!==i&&i.detachView(e)}!function SS(e){Lu.delete(e[20])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(n)}}function Im(e,n,t){return function Rm(e,n,t){let i=n;for(;null!==i&&40&i.type;)i=(n=i).parent;if(null===i)return t[0];if(2&i.flags){const r=e.data[i.directiveStart].encapsulation;if(r===On.None||r===On.Emulated)return null}return Ut(i,t)}(e,n.parent,t)}function zi(e,n,t,i,r){e.insertBefore(n,t,i,r)}function Am(e,n,t){e.appendChild(n,t)}function xm(e,n,t,i,r){null!==i?zi(e,n,t,i,r):Am(e,n,t)}function Ba(e,n){return e.parentNode(n)}function km(e,n,t){return Fm(e,n,t)}let ed,Fm=function Pm(e,n,t){return 40&e.type?Ut(e,t):null};function ja(e,n,t,i){const r=Im(e,i,n),o=n[U],a=km(i.parent||n[6],i,n);if(null!=r)if(Array.isArray(t))for(let l=0;l<t.length;l++)xm(o,r,t[l],a,!1);else xm(o,r,t,a,!1)}function Ha(e,n){if(null!==n){const t=n.type;if(3&t)return Ut(n,e);if(4&t)return Zu(-1,e[n.index]);if(8&t){const i=n.child;if(null!==i)return Ha(e,i);{const r=e[n.index];return dn(r)?Zu(-1,r):Ge(r)}}if(32&t)return Hu(n,e)()||Ge(e[n.index]);{const i=Vm(e,n);return null!==i?Array.isArray(i)?i[0]:Ha(Zo(e[16]),i):Ha(e,n.next)}}return null}function Vm(e,n){return null!==n?e[16][6].projection[n.projection]:null}function Zu(e,n){const t=10+e+1;if(t<n.length){const i=n[t],r=i[1].firstChild;if(null!==r)return Ha(i,r)}return n[7]}function Ju(e,n,t,i,r,o,s){for(;null!=t;){const a=i[t.index],l=t.type;if(s&&0===n&&(a&&mt(Ge(a),i),t.flags|=4),64!=(64&t.flags))if(8&l)Ju(e,n,t.child,i,r,o,!1),Br(n,e,r,a,o);else if(32&l){const c=Hu(t,i);let u;for(;u=c();)Br(n,e,r,u,o);Br(n,e,r,a,o)}else 16&l?Bm(e,n,i,t,r,o):Br(n,e,r,a,o);t=s?t.projectionNext:t.next}}function Ko(e,n,t,i,r,o){Ju(t,i,e.firstChild,n,r,o,!1)}function Bm(e,n,t,i,r,o){const s=t[16],l=s[6].projection[i.projection];if(Array.isArray(l))for(let c=0;c<l.length;c++)Br(n,e,r,l[c],o);else Ju(e,n,l,s[3],r,o,!0)}function jm(e,n,t){e.setAttribute(n,"style",t)}function Qu(e,n,t){""===t?e.removeAttribute(n,"class"):e.setAttribute(n,"class",t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function vi(e){return e instanceof
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class zm{constructor(n){this.changingThisBreaksApplicationSecurity=n}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`}}?e.changingThisBreaksApplicationSecurity:e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const ad=new R("ENVIRONMENT_INITIALIZER"),Xm=new R("INJECTOR",-1),e_=new R("INJECTOR_DEF_TYPES");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class t_{get(n,t=Ho){if(t===Ho){const i=new Error(`NullInjectorError: No provider for ${ge(n)}!`);throw i.name="NullInjectorError",i}return t}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function NT(...e){return{\u0275providers:n_(0,e)}}function n_(e,...n){const t=[],i=new Set;let r;return Kn(n,o=>{const s=o;ld(s,t,[],i)&&(r||(r=[]),r.push(s))}),void 0!==r&&i_(r,t),t}function i_(e,n){for(let t=0;t<e.length;t++){const{providers:r}=e[t];Kn(r,o=>{n.push(o)})}}function ld(e,n,t,i){if(!(e=F(e)))return!1;let r=null,o=gg(e);const s=!o&&de(e);if(o||s){if(s&&!s.standalone)return!1;r=e}else{const l=e.ngModule;if(o=gg(l),!o)return!1;r=l}const a=i.has(r);if(s){if(a)return!1;if(i.add(r),s.dependencies){const l="function"==typeof s.dependencies?s.dependencies():s.dependencies;for(const c of l)ld(c,n,t,i)}}else{if(!o)return!1;{if(null!=o.imports&&!a){let c;i.add(r);try{Kn(o.imports,u=>{ld(u,n,t,i)&&(c||(c=[]),c.push(u))})}finally{}void 0!==c&&i_(c,n)}if(!a){const c=Ui(r)||(()=>new r);n.push({provide:r,useFactory:c,deps:se},{provide:e_,useValue:r,multi:!0},{provide:ad,useValue:()=>E(r),multi:!0})}const l=o.providers;null==l||a||Kn(l,u=>{n.push(u)})}}return r!==e&&void 0!==e.providers}const ST=pe({provide:String,useValue:pe});function cd(e){return null!==e&&"object"==typeof e&&ST in e}function qi(e){return"function"==typeof e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const ud=new R("Set Injector scope."),za={},OT={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let dd;function Wa(){return void 0===dd&&(dd=new t_),dd}class yi{}class s_ extends yi{constructor(n,t,i,r){super(),this.parent=t,this.source=i,this.scopes=r,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,hd(n,s=>this.processProvider(s)),this.records.set(Xm,jr(void 0,this)),r.has("environment")&&this.records.set(yi,jr(void 0,this));const o=this.records.get(ud);null!=o&&"string"==typeof o.value&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(e_.multi,se,k.Self))}get destroyed(){return this._destroyed}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{for(const n of this._ngOnDestroyHooks)n.ngOnDestroy();for(const n of this._onDestroyHooks)n()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),this._onDestroyHooks.length=0}}onDestroy(n){this._onDestroyHooks.push(n)}runInContext(n){this.assertNotDestroyed();const t=Lr(this),i=Qt(void 0);try{return n()}finally{Lr(t),Qt(i)}}get(n,t=Ho,i=k.Default){this.assertNotDestroyed();const r=Lr(this),o=Qt(void 0);try{if(!(i&k.SkipSelf)){let a=this.records.get(n);if(void 0===a){const l=function xT(e){return"function"==typeof e||"object"==typeof e&&e instanceof R}(n)&&ga(n);a=l&&this.injectableDefInScope(l)?jr(fd(n),za):null,this.records.set(n,a)}if(null!=a)return this.hydrate(n,a)}return(i&k.Self?Wa():this.parent).get(n,t=i&k.Optional&&t===Ho?null:t)}catch(s){if("NullInjectorError"===s.name){if((s[Fa]=s[Fa]||[]).unshift(ge(n)),r)throw s;return function sS(e,n,t,i){const r=e[Fa];throw n[om]&&r.unshift(n[om]),e.message=function aS(e,n,t,i=null){e=e&&"\n"===e.charAt(0)&&"\u0275"==e.charAt(1)?e.slice(2):e;let r=ge(n);if(Array.isArray(n))r=n.map(ge).join(" -> ");else if("object"==typeof n){let o=[];for(let s in n)if(n.hasOwnProperty(s)){let a=n[s];o.push(s+":"+("string"==typeof a?JSON.stringify(a):ge(a)))}r=`{${o.join(", ")}}`}return`${t}${i?"("+i+")":""}[${r}]: ${e.replace(nS,"\n  ")}`}("\n"+e.message,r,t,i),e.ngTokenPath=r,e[Fa]=null,e}(s,n,"R3InjectorError",this.source)}throw s}finally{Qt(o),Lr(r)}}resolveInjectorInitializers(){const n=Lr(this),t=Qt(void 0);try{const i=this.get(ad.multi,se,k.Self);for(const r of i)r()}finally{Lr(n),Qt(t)}}toString(){const n=[],t=this.records;for(const i of t.keys())n.push(ge(i));return`R3Injector[${n.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new w(205,!1)}processProvider(n){let t=qi(n=F(n))?n:F(n&&n.provide);const i=function IT(e){return cd(e)?jr(void 0,e.useValue):jr(function a_(e,n,t){let i;if(qi(e)){const r=F(e);return Ui(r)||fd(r)}if(cd(e))i=()=>F(e.useValue);else if(function o_(e){return!(!e||!e.useFactory)}(e))i=()=>e.useFactory(...Au(e.deps||[]));else if(function r_(e){return!(!e||!e.useExisting)}(e))i=()=>E(F(e.useExisting));else{const r=F(e&&(e.useClass||e.provide));if(!function RT(e){return!!e.deps}(e))return Ui(r)||fd(r);i=()=>new r(...Au(e.deps))}return i}(e),za)}(n);if(qi(n)||!0!==n.multi)this.records.get(t);else{let r=this.records.get(t);r||(r=jr(void 0,za,!0),r.factory=()=>Au(r.multi),this.records.set(t,r)),t=n,r.multi.push(n)}this.records.set(t,i)}hydrate(n,t){return t.value===za&&(t.value=OT,t.value=t.factory()),"object"==typeof t.value&&t.value&&function AT(e){return null!==e&&"object"==typeof e&&"function"==typeof e.ngOnDestroy}(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}injectableDefInScope(n){if(!n.providedIn)return!1;const t=F(n.providedIn);return"string"==typeof t?"any"===t||this.scopes.has(t):this.injectorDefTypes.has(t)}}function fd(e){const n=ga(e),t=null!==n?n.factory:Ui(e);if(null!==t)return t;if(e instanceof R)throw new w(204,!1);if(e instanceof Function)return function MT(e){const n=e.length;if(n>0)throw jo(n,"?"),new w(204,!1);const t=function GE(e){const n=e&&(e[ma]||e[mg]);if(n){const t=function zE(e){if(e.hasOwnProperty("name"))return e.name;const n=(""+e).match(/^function\s*([^\s(]+)/);return null===n?"":n[1]}(e);return console.warn(`DEPRECATED: DI is instantiating a token "${t}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${t}" class.`),n}return null}(e);return null!==t?()=>t.factory(e):()=>new e}(e);throw new w(204,!1)}function jr(e,n,t=!1){return{factory:e,value:n,multi:t?[]:void 0}}function kT(e){return!!e.\u0275providers}function hd(e,n){for(const t of e)Array.isArray(t)?hd(t,n):kT(t)?hd(t.\u0275providers,n):n(t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class l_{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class LT{resolveComponentFactory(n){throw function FT(e){const n=Error(`No component factory found for ${ge(e)}. Did you add it to @NgModule.entryComponents?`);return n.ngComponent=e,n}(n)}}let es=(()=>{class e{}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.NULL=new LT,e})();function VT(){return Hr(Qe(),D())}function Hr(e,n){return new Ce(Ut(e,n))}let Ce=(()=>{class e{constructor(t){this.nativeElement=t}}return e.__NG_ELEMENT_ID__=VT,e})();function BT(e){return e instanceof Ce?e.nativeElement:e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class pd{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let HT=(()=>{class e{}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.\u0275prov=M({token:e,providedIn:"root",factory:()=>null}),e})();class ts{constructor(n){this.full=n,this.major=n.split(".")[0],this.minor=n.split(".")[1],this.patch=n.split(".").slice(2).join(".")}}const $T=new ts("14.3.0"),gd={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function _d(e){return e.ngOriginalError}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class $r{constructor(){this._console=console}handleError(n){const t=this._findOriginalError(n);this._console.error("ERROR",n),t&&this._console.error("ORIGINAL ERROR",t)}_findOriginalError(n){let t=n&&_d(n);for(;t&&_d(t);)t=_d(t);return t||null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Qn(e){return e instanceof Function?e():e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function d_(e,n,t){let i=e.length;for(;;){const r=e.indexOf(n,t);if(-1===r)return r;if(0===r||e.charCodeAt(r-1)<=32){const o=n.length;if(r+o===i||e.charCodeAt(r+o)<=32)return r}t=r+1}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const f_="ng-template";function XT(e,n,t){let i=0;for(;i<e.length;){let r=e[i++];if(t&&"class"===r){if(r=e[i],-1!==d_(r.toLowerCase(),n,0))return!0}else if(1===r){for(;i<e.length&&"string"==typeof(r=e[i++]);)if(r.toLowerCase()===n)return!0;return!1}}return!1}function h_(e){return 4===e.type&&e.value!==f_}function eO(e,n,t){return n===(4!==e.type||t?e.value:f_)}function tO(e,n,t){let i=4;const r=e.attrs||[],o=function rO(e){for(let n=0;n<e.length;n++)if(Hg(e[n]))return n;return e.length}(r);let s=!1;for(let a=0;a<n.length;a++){const l=n[a];if("number"!=typeof l){if(!s)if(4&i){if(i=2|1&i,""!==l&&!eO(e,l,t)||""===l&&1===n.length){if(pn(i))return!1;s=!0}}else{const c=8&i?l:n[++a];if(8&i&&null!==e.attrs){if(!XT(e.attrs,c,t)){if(pn(i))return!1;s=!0}continue}const d=nO(8&i?"class":l,r,h_(e),t);if(-1===d){if(pn(i))return!1;s=!0;continue}if(""!==c){let f;f=d>o?"":r[d+1].toLowerCase();const h=8&i?f:null;if(h&&-1!==d_(h,c,0)||2&i&&c!==f){if(pn(i))return!1;s=!0}}}}else{if(!s&&!pn(i)&&!pn(l))return!1;if(s&&pn(l))continue;s=!1,i=l|1&i}}return pn(i)||s}function pn(e){return 0==(1&e)}function nO(e,n,t,i){if(null===n)return-1;let r=0;if(i||!t){let o=!1;for(;r<n.length;){const s=n[r];if(s===e)return r;if(3===s||6===s)o=!0;else{if(1===s||2===s){let a=n[++r];for(;"string"==typeof a;)a=n[++r];continue}if(4===s)break;if(0===s){r+=4;continue}}r+=o?1:2}return-1}return function oO(e,n){let t=e.indexOf(4);if(t>-1)for(t++;t<e.length;){const i=e[t];if("number"==typeof i)return-1;if(i===n)return t;t++}return-1}(n,e)}function p_(e,n,t=!1){for(let i=0;i<n.length;i++)if(tO(e,n[i],t))return!0;return!1}function sO(e,n){e:for(let t=0;t<n.length;t++){const i=n[t];if(e.length===i.length){for(let r=0;r<e.length;r++)if(e[r]!==i[r])continue e;return!0}}return!1}function g_(e,n){return e?":not("+n.trim()+")":n}function aO(e){let n=e[0],t=1,i=2,r="",o=!1;for(;t<e.length;){let s=e[t];if("string"==typeof s)if(2&i){const a=e[++t];r+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else 8&i?r+="."+s:4&i&&(r+=" "+s);else""!==r&&!pn(s)&&(n+=g_(o,r),r=""),i=s,o=o||!pn(i);t++}return""!==r&&(n+=g_(o,r)),n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const j={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Z(e){m_(X(),D(),St()+e,!1)}function m_(e,n,t,i){if(!i)if(3==(3&n[2])){const o=e.preOrderCheckHooks;null!==o&&Sa(n,o,t)}else{const o=e.preOrderHooks;null!==o&&Ta(n,o,0,t)}mi(t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function b_(e,n=null,t=null,i){const r=D_(e,n,t,i);return r.resolveInjectorInitializers(),r}function D_(e,n=null,t=null,i,r=new Set){const o=[t||se,NT(e)];return i=i||("object"==typeof e?void 0:ge(e)),new s_(o,n||Wa(),i||null,r)
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}let _t=(()=>{class e{static create(t,i){if(Array.isArray(t))return b_({name:""},i,t,"");{const r=t.name??"";return b_({name:r},t.parent,t.providers,r)}}}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.THROW_IF_NOT_FOUND=Ho,e.NULL=new t_,e.\u0275prov=M({token:e,providedIn:"any",factory:()=>E(Xm)}),e.__NG_ELEMENT_ID__=-1,e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function _(e,n=k.Default){const t=D();return null===t?E(e,n):Zg(Qe(),t,F(e),n)}function Cd(){throw new Error("invalid")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Ya(e,n){return e<<17|n<<2}function gn(e){return e>>17&32767}function wd(e){return 2|e}function Xn(e){return(131068&e)>>2}function Ed(e,n){return-131069&e|n<<2}function Nd(e){return 1|e}function V_(e,n){const t=e.contentQueries;if(null!==t)for(let i=0;i<t.length;i+=2){const r=t[i],o=t[i+1];if(-1!==o){const s=e.data[o];vu(r),s.contentQueries(2,n[o],o)}}}function Ja(e,n,t,i,r,o,s,a,l,c,u){const d=n.blueprint.slice();return d[0]=r,d[2]=76|i,(null!==u||e&&1024&e[2])&&(d[2]|=1024),Tg(d),d[3]=d[15]=e,d[8]=t,d[10]=s||e&&e[10],d[U]=a||e&&e[U],d[12]=l||e&&e[12]||null,d[9]=c||e&&e[9]||null,d[6]=o,d[20]=function ES(){return wS++}(),d[21]=u,d[16]=2==n.type?e[16]:d,d}function zr(e,n,t,i,r){let o=e.data[n];if(null===o)o=function xd(e,n,t,i,r){const o=Ig(),s=pu(),l=e.data[n]=function UO(e,n,t,i,r,o){return{type:t,index:i,insertBeforeIndex:null,injectorIndex:n?n.injectorIndex:-1,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,propertyBindings:null,flags:0,providerIndexes:0,value:r,attrs:o,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tViews:null,next:null,projectionNext:null,child:null,parent:n,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}(0,s?o:o&&o.parent,t,n,i,r);return null===e.firstChild&&(e.firstChild=l),null!==o&&(s?null==o.child&&null!==l.parent&&(o.child=l):null===o.next&&(o.next=l)),l}(e,n,t,i,r),function bN(){return V.lFrame.inI18n}()&&(o.flags|=64);else if(64&o.type){o.type=t,o.value=i,o.attrs=r;const s=function xo(){const e=V.lFrame,n=e.currentTNode;return e.isParent?n:n.parent}();o.injectorIndex=null===s?-1:s.injectorIndex}return Rn(o,!0),o}function Wr(e,n,t,i){if(0===t)return-1;const r=n.length;for(let o=0;o<t;o++)n.push(i),e.blueprint.push(i),e.data.push(null);return r}function kd(e,n,t){yu(n);try{const i=e.viewQuery;null!==i&&$d(1,i,t);const r=e.template;null!==r&&B_(e,n,r,1,t),e.firstCreatePass&&(e.firstCreatePass=!1),e.staticContentQueries&&V_(e,n),e.staticViewQueries&&$d(2,e.viewQuery,t);const o=e.components;null!==o&&function jO(e,n){for(let t=0;t<n.length;t++)oM(e,n[t])}(n,o)}catch(i){throw e.firstCreatePass&&(e.incompleteFirstPass=!0,e.firstCreatePass=!1),i}finally{n[2]&=-5,bu()}}function Qa(e,n,t,i){const r=n[2];if(128!=(128&r)){yu(n);try{Tg(n),function Ag(e){return V.lFrame.bindingIndex=e}(e.bindingStartIndex),null!==t&&B_(e,n,t,2,i);const s=3==(3&r);if(s){const c=e.preOrderCheckHooks;null!==c&&Sa(n,c,null)}else{const c=e.preOrderHooks;null!==c&&Ta(n,c,0,null),Du(n,0)}if(function iM(e){for(let n=$u(e);null!==n;n=Uu(n)){if(!n[2])continue;const t=n[9];for(let i=0;i<t.length;i++){const r=t[i],o=r[3];0==(512&r[2])&&hu(o,1),r[2]|=512}}}(n),function nM(e){for(let n=$u(e);null!==n;n=Uu(n))for(let t=10;t<n.length;t++){const i=n[t],r=i[1];Ea(i)&&Qa(r,i,r.template,i[8])}}(n),null!==e.contentQueries&&V_(e,n),s){const c=e.contentCheckHooks;null!==c&&Sa(n,c)}else{const c=e.contentHooks;null!==c&&Ta(n,c,1),Du(n,1)}!
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function VO(e,n){const t=e.hostBindingOpCodes;if(null!==t)try{for(let i=0;i<t.length;i++){const r=t[i];if(r<0)mi(~r);else{const o=r,s=t[++i],a=t[++i];DN(s,o),a(2,n[o])}}}finally{mi(-1)}}(e,n);const a=e.components;null!==a&&function BO(e,n){for(let t=0;t<n.length;t++)rM(e,n[t])}(n,a);const l=e.viewQuery;if(null!==l&&$d(2,l,i),s){const c=e.viewCheckHooks;null!==c&&Sa(n,c)}else{const c=e.viewHooks;null!==c&&Ta(n,c,2),Du(n,2)}!0===e.firstUpdatePass&&(e.firstUpdatePass=!1),n[2]&=-41,512&n[2]&&(n[2]&=-513,hu(n[3],-1))}finally{bu()}}}function B_(e,n,t,i,r){const o=St(),s=2&i;try{mi(-1),s&&n.length>22&&m_(e,n,22,!1),t(i,r)}finally{mi(o)}}function Pd(e,n,t){!Mg()||(function YO(e,n,t,i){const r=t.directiveStart,o=t.directiveEnd;e.firstCreatePass||Fo(t,n),mt(i,n);const s=t.initialInputs;for(let a=r;a<o;a++){const l=e.data[a],c=fn(l);c&&XO(n,t,l);const u=Lo(n,e,a,t);mt(u,n),null!==s&&eM(0,a-r,u,l,0,s),c&&(Gt(t.index,n)[8]=u)}}(e,n,t,Ut(t,n)),128==(128&t.flags)&&function ZO(e,n,t){const i=t.directiveStart,r=t.directiveEnd,o=t.index,s=function CN(){return V.lFrame.currentDirectiveIndex}();try{mi(o);for(let a=i;a<r;a++){const l=e.data[a],c=n[a];mu(a),(null!==l.hostBindings||0!==l.hostVars||null!==l.hostAttrs)&&q_(l,c)}}finally{mi(-1),mu(s)}}(e,n,t))}function Fd(e,n,t=Ut){const i=n.localNames;if(null!==i){let r=n.index+1;for(let o=0;o<i.length;o+=2){const s=i[o+1],a=-1===s?t(n,e):e[s];e[r++]=a}}}function H_(e){const n=e.tView;return null===n||n.incompleteFirstPass?e.tView=Ld(1,null,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts):n}function Ld(e,n,t,i,r,o,s,a,l,c){const u=22+i,d=u+r,f=function HO(e,n){const t=[];for(let i=0;i<n;i++)t.push(i<e?null:j);return t}(u,d),h="function"==typeof c?c():c;return f[1]={type:e,blueprint:f,template:t,queries:null,viewQuery:a,declTNode:n,data:f.slice().fill(null,u),bindingStartIndex:u,expandoStartIndex:d,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof o?o():o,pipeRegistry:"function"==typeof s?s():s,firstChild:null,schemas:l,consts:h,incompleteFirstPass:!1}}function $_(e,n,t,i){const r=Q_(n);null===t?r.push(i):(r.push(t),e.firstCreatePass&&X_(e).push(i,r.length-1))}function U_(e,n,t){for(let i in e)if(e.hasOwnProperty(i)){const r=e[i];(t=null===t?{}:t).hasOwnProperty(i)?t[i].push(n,r):t[i]=[n,r]}return t}function G_(e,n){const i=n.directiveEnd,r=e.data,o=n.attrs,s=[];let a=null,l=null;for(let c=n.directiveStart;c<i;c++){const u=r[c],d=u.inputs,f=null===o||h_(n)?null:tM(d,o);s.push(f),a=U_(d,c,a),l=U_(u.outputs,c,l)}null!==a&&(a.hasOwnProperty("class")&&(n.flags|=16),a.hasOwnProperty("style")&&(n.flags|=32)),n.initialInputs=s,n.inputs=a,n.outputs=l}function z_(e,n){const t=Gt(n,e);16&t[2]||(t[2]|=32)}function Vd(e,n,t,i){let r=!1;if(Mg()){const o=function KO(e,n,t){const i=e.directiveRegistry;let r=null;if(i)for(let o=0;o<i.length;o++){const s=i[o];p_(t,s.selectors,!1)&&(r||(r=[]),Aa(Fo(t,n),e,s.type),fn(s)?(Y_(e,t),r.unshift(s)):r.push(s))}return r}(e,n,t),s=null===i?null:{"":-1};if(null!==o){r=!0,Z_(t,e.data.length,o.length);for(let u=0;u<o.length;u++){const d=o[u];d.providersResolver&&d.providersResolver(d)}let a=!1,l=!1,c=Wr(e,n,o.length,null);for(let u=0;u<o.length;u++){const d=o[u];t.mergedAttrs=Ma(t.mergedAttrs,d.hostAttrs),K_(e,t,n,c,d),QO(c,d,s),null!==d.contentQueries&&(t.flags|=8),(null!==d.hostBindings||null!==d.hostAttrs||0!==d.hostVars)&&(t.flags|=128);const f=d.type.prototype;!a&&(f.ngOnChanges||f.ngOnInit||f.ngDoCheck)&&((e.preOrderHooks||(e.preOrderHooks=[])).push(t.index),a=!0),!l&&(f.ngOnChanges||f.ngDoCheck)&&((e.preOrderCheckHooks||(e.preOrderCheckHooks=[])).push(t.index),l=!0),c++}G_(e,t)}s&&function JO(e,n,t){if(n){const i=e.localNames=[];for(let r=0;r<n.length;r+=2){const o=t[n[r+1]];if(null==o)throw new w(-301,!1);i.push(n[r],o)}}}(t,i,s)}return t.mergedAttrs=Ma(t.mergedAttrs,t.attrs),r}function W_(e,n,t,i,r,o){const s=o.hostBindings;if(s){let a=e.hostBindingOpCodes;null===a&&(a=e.hostBindingOpCodes=[]);const l=~n.index;(function qO(e){let n=e.length;for(;n>0;){const t=e[--n];if("number"==typeof t&&t<0)return t}return 0})(a)!=l&&a.push(l),a.push(i,r,s)}}function q_(e,n){null!==e.hostBindings&&e.hostBindings(1,n)}function Y_(e,n){n.flags|=2,(e.components||(e.components=[])).push(n.index)}function QO(e,n,t){if(t){if(n.exportAs)for(let i=0;i<n.exportAs.length;i++)t[n.exportAs[i]]=e;fn(n)&&(t[""]=e)}}function Z_(e,n,t){e.flags|=1,e.directiveStart=n,e.directiveEnd=n+t,e.providerIndexes=n}function K_(e,n,t,i,r){e.data[i]=r;const o=r.factory||(r.factory=Ui(r.type)),s=new ko(o,fn(r),_);e.blueprint[i]=s,t[i]=s,W_(e,n,0,i,Wr(e,t,r.hostVars,j),r)}function XO(e,n,t){const i=Ut(n,e),r=H_(t),o=e[10],s=Xa(e,Ja(e,r,null,t.onPush?32:16,i,n,o,o.createRenderer(i,t),null,null,null));e[n.index]=s}function xn(e,n,t,i,r,o){const s=Ut(e,n);!function Bd(e,n,t,i,r,o,s){if(null==o)e.removeAttribute(n,r,t);else{const a=null==s?B(o):s(o,i||"",r);e.setAttribute(n,r,a,t)}}(n[U],s,o,e.value,t,i,r)}function eM(e,n,t,i,r,o){const s=o[n];if(null!==s){const a=i.setInput;for(let l=0;l<s.length;){const c=s[l++],u=s[l++],d=s[l++];null!==a?i.setInput(t,d,c,u):t[u]=d}}}function tM(e,n){let t=null,i=0;for(;i<n.length;){const r=n[i];if(0!==r)if(5!==r){if("number"==typeof r)break;e.hasOwnProperty(r)&&(null===t&&(t=[]),t.push(r,e[r],n[i+1])),i+=2}else i+=2;else i+=4}return t}function J_(e,n,t,i){return new Array(e,!0,!1,n,null,0,i,t,null,null)}function rM(e,n){const t=Gt(n,e);if(Ea(t)){const i=t[1];48&t[2]?Qa(i,t,i.template,t[8]):t[5]>0&&jd(t)}}function jd(e){for(let i=$u(e);null!==i;i=Uu(i))for(let r=10;r<i.length;r++){const o=i[r];if(Ea(o))if(512&o[2]){const s=o[1];Qa(s,o,s.template,o[8])}else o[5]>0&&jd(o)}const t=e[1].components;if(null!==t)for(let i=0;i<t.length;i++){const r=Gt(t[i],e);Ea(r)&&r[5]>0&&jd(r)}}function oM(e,n){const t=Gt(n,e),i=t[1];(function sM(e,n){for(let t=n.length;t<e.blueprint.length;t++)n.push(e.blueprint[t])})(i,t),kd(i,t,t[8])}function Xa(e,n){return e[13]?e[14][4]=n:e[13]=n,e[14]=n,n}function Hd(e){for(;e;){e[2]|=32;const n=Zo(e);if(eN(e)&&!n)return e;e=n}return null}function el(e,n,t,i=!0){const r=n[10];r.begin&&r.begin();try{Qa(e,n,e.template,t)}catch(s){throw i&&tv(n,s),s}finally{r.end&&r.end()}}function $d(e,n,t){vu(0),n(e,t)}function Q_(e){return e[7]||(e[7]=[])}function X_(e){return e.cleanup||(e.cleanup=[])}function tv(e,n){const t=e[9],i=t?t.get($r,null):null;i&&i.handleError(n)}function Ud(e,n,t,i,r){for(let o=0;o<t.length;){const s=t[o++],a=t[o++],l=n[s],c=e.data[s];null!==c.setInput?c.setInput(l,r,i,a):l[a]=r}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function tl(e,n,t){let i=t?e.styles:null,r=t?e.classes:null,o=0;if(null!==n)for(let s=0;s<n.length;s++){const a=n[s];"number"==typeof a?o=a:1==o?r=Xc(r,a):2==o&&(i=Xc(i,a+": "+n[++s]+";"))}t?e.styles=i:e.stylesWithoutHost=i,t?e.classes=r:e.classesWithoutHost=r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function nl(e,n,t,i,r=!1){for(;null!==t;){const o=n[t.index];if(null!==o&&i.push(Ge(o)),dn(o))for(let a=10;a<o.length;a++){const l=o[a],c=l[1].firstChild;null!==c&&nl(l[1],l,c,i)}const s=t.type;if(8&s)nl(e,n,t.child,i);else if(32&s){const a=Hu(t,n);let l;for(;l=a();)i.push(l)}else if(16&s){const a=Vm(n,t);if(Array.isArray(a))i.push(...a);else{const l=Zo(n[16]);nl(l[1],l,a,i,!0)}}t=r?t.projectionNext:t.next}return i}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ns{constructor(n,t){this._lView=n,this._cdRefInjectingView=t,this._appRef=null,this._attachedToViewContainer=!1}get rootNodes(){const n=this._lView,t=n[1];return nl(t,n,t.firstChild,[])}get context(){return this._lView[8]}set context(n){this._lView[8]=n}get destroyed(){return 128==(128&this._lView[2])}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){const n=this._lView[3];if(dn(n)){const t=n[8],i=t?t.indexOf(this):-1;i>-1&&(Wu(n,i),ka(t,i))}this._attachedToViewContainer=!1}Mm(this._lView[1],this._lView)}onDestroy(n){$_(this._lView[1],this._lView,null,n)}markForCheck(){Hd(this._cdRefInjectingView||this._lView)}detach(){this._lView[2]&=-65}reattach(){this._lView[2]|=64}detectChanges(){el(this._lView[1],this._lView,this.context)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new w(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null,function HS(e,n){Ko(e,n,n[U],2,null,null)}(this._lView[1],this._lView)}attachToAppRef(n){if(this._attachedToViewContainer)throw new w(902,!1);this._appRef=n}}class aM extends ns{constructor(n){super(n),this._view=n}detectChanges(){const n=this._view;el(n[1],n,n[8],!1)}checkNoChanges(){}get context(){return null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Gd extends es{constructor(n){super(),this.ngModule=n}resolveComponentFactory(n){const t=de(n);return new is(t,this.ngModule)}}function nv(e){const n=[];for(let t in e)e.hasOwnProperty(t)&&n.push({propName:e[t],templateName:t});return n}class cM{constructor(n,t){this.injector=n,this.parentInjector=t}get(n,t,i){const r=this.injector.get(n,gd,i);return r!==gd||t===gd?r:this.parentInjector.get(n,t,i)}}class is extends l_{constructor(n,t){super(),this.componentDef=n,this.ngModule=t,this.componentType=n.type,this.selector=function lO(e){return e.map(aO).join(",")}(n.selectors),this.ngContentSelectors=n.ngContentSelectors?n.ngContentSelectors:[],this.isBoundToModule=!!t}get inputs(){return nv(this.componentDef.inputs)}get outputs(){return nv(this.componentDef.outputs)}create(n,t,i,r){let o=(r=r||this.ngModule)instanceof yi?r:r?.injector;o&&null!==this.componentDef.getStandaloneInjector&&(o=this.componentDef.getStandaloneInjector(o)||o);const s=o?new cM(n,o):n,a=s.get(pd,null);if(null===a)throw new w(407,!1);const l=s.get(HT,null),c=a.createRenderer(null,this.componentDef),u=this.componentDef.selectors[0][0]||"div",d=i?function $O(e,n,t){return e.selectRootElement(n,t===On.ShadowDom)}(c,i,this.componentDef.encapsulation):zu(c,u,function lM(e){const n=e.toLowerCase();return"svg"===n?"svg":"math"===n?"math":null}(u)),f=this.componentDef.onPush?288:272,h=Ld(0,null,null,1,0,null,null,null,null,null),p=Ja(null,h,null,f,null,null,a,c,l,s,null);let g,m;yu(p);try{const v=function fM(e,n,t,i,r,o){const s=t[1];t[22]=e;const l=zr(s,22,2,"#host",null),c=l.mergedAttrs=n.hostAttrs;null!==c&&(tl(l,c,!0),null!==e&&(Oa(r,e,c),null!==l.classes&&Qu(r,e,l.classes),null!==l.styles&&jm(r,e,l.styles)));const u=i.createRenderer(e,n),d=Ja(t,H_(n),null,n.onPush?32:16,t[22],l,i,u,o||null,null,null);return s.firstCreatePass&&(Aa(Fo(l,t),s,n.type),Y_(s,l),Z_(l,t.length,1)),Xa(t,d),t[22]=d}(d,this.componentDef,p,a,c);if(d)if(i)Oa(c,d,["ng-version",$T.full]);else{const{attrs:b,classes:y}=function cO(e){const n=[],t=[];let i=1,r=2;for(;i<e.length;){let o=e[i];if("string"==typeof o)2===r?""!==o&&n.push(o,e[++i]):8===r&&t.push(o);else{if(!pn(r))break;r=o}i++}return{attrs:n,classes:t}}(this.componentDef.selectors[0]);b&&Oa(c,d,b),y&&y.length>0&&Qu(c,d,y.join(" "))}if(m=fu(h,22),void 0!==t){const b=m.projection=[];for(let y=0;y<this.ngContentSelectors.length;y++){const C=t[y];b.push(null!=C?Array.from(C):null)}}g=function hM(e,n,t,i){const r=t[1],o=function WO(e,n,t){const i=Qe();e.firstCreatePass&&(t.providersResolver&&t.providersResolver(t),K_(e,i,n,Wr(e,n,1,null),t),G_(e,i));const r=Lo(n,e,i.directiveStart,i);mt(r,n);const o=Ut(i,n);return o&&mt(o,n),r}(r,t,n);if(e[8]=t[8]=o,null!==i)for(const a of i)a(o,n);if(n.contentQueries){const a=Qe();n.contentQueries(1,o,a.directiveStart)}const s=Qe();return!r.firstCreatePass||null===n.hostBindings&&null===n.hostAttrs||(mi(s.index),W_(t[1],s,0,s.directiveStart,s.directiveEnd,n),q_(n,o)),o}(v,this.componentDef,p,[pM]),kd(h,p,null)}finally{bu()}return new dM(this.componentType,g,Hr(m,p),p,m)}}class dM extends class PT{}{constructor(n,t,i,r,o){super(),this.location=i,this._rootLView=r,this._tNode=o,this.instance=t,this.hostView=this.changeDetectorRef=new aM(r),this.componentType=n}setInput(n,t){const i=this._tNode.inputs;let r;if(null!==i&&(r=i[n])){const o=this._rootLView;Ud(o[1],o,r,n,t),z_(o,this._tNode.index)}}get injector(){return new Rr(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(n){this.hostView.onDestroy(n)}}function pM(){const e=Qe();Na(D()[1],e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let il=null;function Yi(){if(!il){const e=ve.Symbol;if(e&&e.iterator)il=e.iterator;else{const n=Object.getOwnPropertyNames(Map.prototype);for(let t=0;t<n.length;++t){const i=n[t];"entries"!==i&&"size"!==i&&Map.prototype[i]===Map.prototype.entries&&(il=i)}}}return il}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function vt(e,n,t){return!Object.is(e[n],t)&&(e[n]=t,!0)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function me(e,n,t,i){const r=D();return vt(r,Or(),n)&&(X(),xn(Oe(),r,e,n,t,i)),me}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function q(e,n,t,i,r,o,s,a){const l=D(),c=X(),u=e+22,d=c.firstCreatePass?
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function SM(e,n,t,i,r,o,s,a,l){const c=n.consts,u=zr(n,e,4,s||null,gi(c,a));Vd(n,t,u,gi(c,l)),Na(n,u);const d=u.tViews=Ld(2,u,i,r,o,n.directiveRegistry,n.pipeRegistry,null,n.schemas,c);return null!==n.queries&&(n.queries.template(n,u),d.queries=n.queries.embeddedTView(u)),u}(u,c,l,n,t,i,r,o,s):c.data[u];Rn(d,!1);const f=l[U].createComment("");ja(c,l,f,d),mt(f,l),Xa(l,l[u]=J_(f,l,f,d)),Ca(d)&&Pd(c,l,d),null!=s&&Fd(l,d,a)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Q(e,n,t){const i=D();return vt(i,Or(),n)&&function qt(e,n,t,i,r,o,s,a){const l=Ut(n,t);let u,c=n.inputs;!a&&null!=c&&(u=c[i])?(Ud(e,t,u,i,r),Da(n)&&z_(t,n.index)):3&n.type&&(i=function GO(e){return"class"===e?"className":"for"===e?"htmlFor":"formaction"===e?"formAction":"innerHtml"===e?"innerHTML":"readonly"===e?"readOnly":"tabindex"===e?"tabIndex":e}(i),r=null!=s?s(r,n.value||"",i):r,o.setProperty(l,i,r))}(X(),Oe(),i,e,n,i[U],t,!1),Q}function qd(e,n,t,i,r){const s=r?"class":"style";Ud(e,t,n.inputs[s],s,i)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function $(e,n,t,i){const r=D(),o=X(),s=22+e,a=r[U],l=r[s]=zu(a,n,function IN(){return V.lFrame.currentNamespace}()),c=o.firstCreatePass?function OM(e,n,t,i,r,o,s){const a=n.consts,c=zr(n,e,2,r,gi(a,o));return Vd(n,t,c,gi(a,s)),null!==c.attrs&&tl(c,c.attrs,!1),null!==c.mergedAttrs&&tl(c,c.mergedAttrs,!0),null!==n.queries&&n.queries.elementStart(n,c),c}(s,o,r,0,n,t,i):o.data[s];Rn(c,!0);const u=c.mergedAttrs;null!==u&&Oa(a,l,u);const d=c.classes;null!==d&&Qu(a,l,d);const f=c.styles;return null!==f&&jm(a,l,f),64!=(64&c.flags)&&ja(o,r,l,c),0===function pN(){return V.lFrame.elementDepthCount}()&&mt(l,r),function gN(){V.lFrame.elementDepthCount++}(),Ca(c)&&(Pd(o,r,c),function j_(e,n,t){if(au(n)){const r=n.directiveEnd;for(let o=n.directiveStart;o<r;o++){const s=e.data[o];s.contentQueries&&s.contentQueries(1,t[o],o)}}}(o,c,r)),null!==i&&Fd(r,c),$}function W(){let e=Qe();pu()?gu():(e=e.parent,Rn(e,!1));const n=e;!function mN(){V.lFrame.elementDepthCount--}();const t=X();return t.firstCreatePass&&(Na(t,e),au(e)&&t.queries.elementEnd(e)),null!=n.classesWithoutHost&&function PN(e){return 0!=(16&e.flags)}(n)&&qd(t,n,D(),n.classesWithoutHost,!0),null!=n.stylesWithoutHost&&function FN(e){return 0!=(32&e.flags)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(n)&&qd(t,n,D(),n.stylesWithoutHost,!1),W}function Ki(e,n,t,i){return $(e,n,t,i),W(),Ki
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function ss(e){return!!e&&"function"==typeof e.then}const Kd=function pv(e){return!!e&&"function"==typeof e.subscribe};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function fe(e,n,t,i){const r=D(),o=X(),s=Qe();return function mv(e,n,t,i,r,o,s,a){const l=Ca(i),u=e.firstCreatePass&&X_(e),d=n[8],f=Q_(n);let h=!0;if(3&i.type||a){const m=Ut(i,n),v=a?a(m):m,b=f.length,y=a?O=>a(Ge(O[i.index])):i.index;let C=null;if(!a&&l&&(C=function IM(e,n,t,i){const r=e.cleanup;if(null!=r)for(let o=0;o<r.length-1;o+=2){const s=r[o];if(s===t&&r[o+1]===i){const a=n[7],l=r[o+2];return a.length>l?a[l]:null}"string"==typeof s&&(o+=2)}return null}(e,n,r,i.index)),null!==C)(C.__ngLastListenerFn__||C).__ngNextListenerFn__=o,C.__ngLastListenerFn__=o,h=!1;else{o=vv(i,n,d,o,!1);const O=t.listen(v,r,o);f.push(o,O),u&&u.push(r,y,b,b+1)}}else o=vv(i,n,d,o,!1);const p=i.outputs;let g;if(h&&null!==p&&(g=p[r])){const m=g.length;if(m)for(let v=0;v<m;v+=2){const I=n[g[v]][g[v+1]].subscribe(o),ee=f.length;f.push(o,I),u&&u.push(r,i.index,ee,-(ee+1))}}}(o,r,r[U],s,e,n,0,i),fe}function _v(e,n,t,i){try{return!1!==t(i)}catch(r){return tv(e,r),!1}}function vv(e,n,t,i,r){return function o(s){if(s===Function)return i;Hd(2&e.flags?Gt(e.index,n):n);let l=_v(n,0,i,s),c=o.__ngNextListenerFn__;for(;c;)l=_v(n,0,c,s)&&l,c=c.__ngNextListenerFn__;return r&&!1===l&&(s.preventDefault(),s.returnValue=!1),l}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ue(e=1){return function EN(e){return(V.lFrame.contextLView=function NN(e,n){for(;e>0;)n=n[15],e--;return n}(e,V.lFrame.contextLView))[8]}(e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function RM(e,n){let t=null;const i=function iO(e){const n=e.attrs;if(null!=n){const t=n.indexOf(5);if(0==(1&t))return n[t+1]}return null}(e);for(let r=0;r<n.length;r++){const o=n[r];if("*"!==o){if(null===i?p_(e,o,!0):sO(i,o))return r}else t=r}return t}function Mv(e,n,t,i,r){const o=e[t+1],s=null===n;let a=i?gn(o):Xn(o),l=!1;for(;0!==a&&(!1===l||s);){const u=e[a+1];kM(e[a],n)&&(l=!0,e[a+1]=i?Nd(u):wd(u)),a=i?gn(u):Xn(u)}l&&(e[t+1]=i?wd(o):Nd(o))}function kM(e,n){return null===e||null==n||(Array.isArray(e)?e[1]:e)===n||!(!Array.isArray(e)||"string"!=typeof n)&&Fr(e,n)>=0}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const et={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function Iv(e){return e.substring(et.key,et.keyEnd)}function Rv(e,n){const t=et.textEnd;return t===n?-1:(n=et.keyEnd=function VM(e,n,t){for(;n<t&&e.charCodeAt(n)>32;)n++;return n}(e,et.key=n,t),no(e,n,t))}function no(e,n,t){for(;n<t&&e.charCodeAt(n)<=32;)n++;return n}function Me(e,n){return function mn(e,n,t,i){const r=D(),o=X(),s=Zn(2);o.firstUpdatePass&&Lv(o,e,s,i),n!==j&&vt(r,s,n)&&Bv(o,o.data[St()],r,r[U],e,r[s+1]=function YM(e,n){return null==e||("string"==typeof n?e+=n:"object"==typeof e&&(e=ge(vi(e)))),e}(n,t),i,s)}(e,n,null,!0),Me}function Ji(e){!function _n(e,n,t,i){const r=X(),o=Zn(2);r.firstUpdatePass&&Lv(r,null,o,i);const s=D();if(t!==j&&vt(s,o,t)){const a=r.data[St()];if(Hv(a,i)&&!Fv(r,o)){let l=i?a.classesWithoutHost:a.stylesWithoutHost;null!==l&&(t=Xc(l,t||"")),qd(r,a,s,t,i)}else!function qM(e,n,t,i,r,o,s,a){r===j&&(r=se);let l=0,c=0,u=0<r.length?r[0]:null,d=0<o.length?o[0]:null;for(;null!==u||null!==d;){const f=l<r.length?r[l+1]:void 0,h=c<o.length?o[c+1]:void 0;let g,p=null;u===d?(l+=2,c+=2,f!==h&&(p=d,g=h)):null===d||null!==u&&u<d?(l+=2,p=u):(c+=2,p=d,g=h),null!==p&&Bv(e,n,t,i,p,g,s,a),u=l<r.length?r[l]:null,d=c<o.length?o[c]:null}}(r,a,s,s[U],s[o+1],s[o+1]=function WM(e,n,t){if(null==t||""===t)return se;const i=[],r=vi(t);if(Array.isArray(r))for(let o=0;o<r.length;o++)e(i,r[o],!0);else if("object"==typeof r)for(const o in r)r.hasOwnProperty(o)&&e(i,o,r[o]);else"string"==typeof r&&n(i,r);return i}(e,n,t),i,o)}}(Wt,Ln,e,!0)}function Ln(e,n){for(let t=function FM(e){return function xv(e){et.key=0,et.keyEnd=0,et.value=0,et.valueEnd=0,et.textEnd=e.length}(e),Rv(e,no(e,0,et.textEnd))}(n);t>=0;t=Rv(n,t))Wt(e,Iv(n),!0)}function Fv(e,n){return n>=e.expandoStartIndex}function Lv(e,n,t,i){const r=e.data;if(null===r[t+1]){const o=r[St()],s=Fv(e,t);Hv(o,i)&&null===n&&!s&&(n=!1),n=function $M(e,n,t,i){const r=function _u(e){const n=V.lFrame.currentDirectiveIndex;return-1===n?null:e[n]}(e);let o=i?n.residualClasses:n.residualStyles;if(null===r)0===(i?n.classBindings:n.styleBindings)&&(t=as(t=Xd(null,e,n,t,i),n.attrs,i),o=null);else{const s=n.directiveStylingLast;if(-1===s||e[s]!==r)if(t=Xd(r,e,n,t,i),null===o){let l=function UM(e,n,t){const i=t?n.classBindings:n.styleBindings;if(0!==Xn(i))return e[gn(i)]}(e,n,i);void 0!==l&&Array.isArray(l)&&(l=Xd(null,e,n,l[1],i),l=as(l,n.attrs,i),function GM(e,n,t,i){e[gn(t?n.classBindings:n.styleBindings)]=i}(e,n,i,l))}else o=function zM(e,n,t){let i;const r=n.directiveEnd;for(let o=1+n.directiveStylingLast;o<r;o++)i=as(i,e[o].hostAttrs,t);return as(i,n.attrs,t)}(e,n,i)}return void 0!==o&&(i?n.residualClasses=o:n.residualStyles=o),t}(r,o,n,i),function AM(e,n,t,i,r,o){let s=o?n.classBindings:n.styleBindings,a=gn(s),l=Xn(s);e[i]=t;let u,c=!1;if(Array.isArray(t)){const d=t;u=d[1],(null===u||Fr(d,u)>0)&&(c=!0)}else u=t;if(r)if(0!==l){const f=gn(e[a+1]);e[i+1]=Ya(f,a),0!==f&&(e[f+1]=Ed(e[f+1],i)),e[a+1]=function OO(e,n){return 131071&e|n<<17}(e[a+1],i)}else e[i+1]=Ya(a,0),0!==a&&(e[a+1]=Ed(e[a+1],i)),a=i;else e[i+1]=Ya(l,0),0===a?a=i:e[l+1]=Ed(e[l+1],i),l=i;c&&(e[i+1]=wd(e[i+1])),Mv(e,u,i,!0),Mv(e,u,i,!1),function xM(e,n,t,i,r){const o=r?e.residualClasses:e.residualStyles;null!=o&&"string"==typeof n&&Fr(o,n)>=0&&(t[i+1]=Nd(t[i+1]))}(n,u,e,i,o),s=Ya(a,l),o?n.classBindings=s:n.styleBindings=s}(r,o,n,t,s,i)}}function Xd(e,n,t,i,r){let o=null;const s=t.directiveEnd;let a=t.directiveStylingLast;for(-1===a?a=t.directiveStart:a++;a<s&&(o=n[a],i=as(i,o.hostAttrs,r),o!==e);)a++;return null!==e&&(t.directiveStylingLast=a),i}function as(e,n,t){const i=t?1:2;let r=-1;if(null!==n)for(let o=0;o<n.length;o++){const s=n[o];"number"==typeof s?r=s:r===i&&(Array.isArray(e)||(e=void 0===e?[]:["",e]),Wt(e,s,!!t||n[++o]))}return void 0===e?null:e}function Bv(e,n,t,i,r,o,s,a){if(!(3&n.type))return;const l=e.data,c=l[a+1];sl(function I_(e){return 1==(1&e)}(c)?jv(l,n,t,r,Xn(c),s):void 0)||(sl(o)||function M_(e){return 2==(2&e)}(c)&&(o=jv(l,null,t,r,a,s)),function JS(e,n,t,i,r){if(n)r?e.addClass(t,i):e.removeClass(t,i);else{let o=-1===i.indexOf("-")?void 0:Ft.DashCase;null==r?e.removeStyle(t,i,o):("string"==typeof r&&r.endsWith("!important")&&(r=r.slice(0,-10),o|=Ft.Important),e.setStyle(t,i,r,o))}}(i,s,wa(St(),t),r,o))}function jv(e,n,t,i,r,o){const s=null===n;let a;for(;r>0;){const l=e[r],c=Array.isArray(l),u=c?l[1]:l,d=null===u;let f=t[r+1];f===j&&(f=d?se:void 0);let h=d?Mu(f,i):u===i?f:void 0;if(c&&!sl(h)&&(h=Mu(l,i)),sl(h)&&(a=h,s))return a;const p=e[r+1];r=s?gn(p):Xn(p)}if(null!==n){let l=o?n.residualClasses:n.residualStyles;null!=l&&(a=Mu(l,i))}return a}function sl(e){return void 0!==e}function Hv(e,n){return 0!=(e.flags&(n?16:32))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function yt(e,n=""){const t=D(),i=X(),r=e+22,o=i.firstCreatePass?zr(i,r,1,n,null):i.data[r],s=t[r]=function Gu(e,n){return e.createText(n)}(t[U],n);ja(i,t,s,o),Rn(o,!1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function al(e){return ls("",e,""),al}function ls(e,n,t){const i=D(),r=function Yr(e,n,t,i){return vt(e,Or(),t)?n+B(t)+i:j}(i,e,n,t);return r!==j&&function ei(e,n,t){const i=wa(n,e);!function Tm(e,n,t){e.setValue(n,t)}(e[U],i,t)}(i,St(),r),ls}const oo="en-US";
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let ly=oo;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Xi{}class ky{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Py extends Xi{constructor(n,t){super(),this._parent=t,this._bootstrapComponents=[],this.destroyCbs=[],this.componentFactoryResolver=new Gd(this);const i=Ht(n);this._bootstrapComponents=Qn(i.bootstrap),this._r3Injector=D_(n,t,[{provide:Xi,useValue:this},{provide:es,useValue:this.componentFactoryResolver}],ge(n),new Set(["environment"])),this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(n)}get injector(){return this._r3Injector}destroy(){const n=this._r3Injector;!n.destroyed&&n.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(n){this.destroyCbs.push(n)}}class cf extends ky{constructor(n){super(),this.moduleType=n}create(n){return new Py(this.moduleType,n)}}class fR extends Xi{constructor(n,t,i){super(),this.componentFactoryResolver=new Gd(this),this.instance=null;const r=new s_([...n,{provide:Xi,useValue:this},{provide:es,useValue:this.componentFactoryResolver}],t||Wa(),i,new Set(["environment"]));this.injector=r,r.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(n){this.injector.onDestroy(n)}}function fl(e,n,t=null){return new fR(e,n,t).injector}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let hR=(()=>{class e{constructor(t){this._injector=t,this.cachedInjectors=new Map}getOrCreateStandaloneInjector(t){if(!t.standalone)return null;if(!this.cachedInjectors.has(t.id)){const i=n_(0,t.type),r=i.length>0?fl([i],this._injector,`Standalone[${t.type.name}]`):null;this.cachedInjectors.set(t.id,r)}return this.cachedInjectors.get(t.id)}ngOnDestroy(){try{for(const t of this.cachedInjectors.values())null!==t&&t.destroy()}finally{this.cachedInjectors.clear()}}}return e.\u0275prov=M({token:e,providedIn:"environment",factory:()=>new e(E(yi))}),e})();function Fy(e){e.getStandaloneInjector=n=>n.get(hR).getOrCreateStandaloneInjector(e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ff(e){return n=>{setTimeout(e,void 0,n)}}const G=
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class FR extends Te{constructor(n=!1){super(),this.__isAsync=n}emit(n){super.next(n)}subscribe(n,t,i){let r=n,o=t||(()=>null),s=i;if(n&&"object"==typeof n){const l=n;r=l.next?.bind(l),o=l.error?.bind(l),s=l.complete?.bind(l)}this.__isAsync&&(o=ff(o),r&&(r=ff(r)),s&&(s=ff(s)));const a=super.subscribe({next:r,error:o,complete:s});return n instanceof Vt&&n.add(a),a}};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function LR(){return this._results[Yi()]()}class hf{constructor(n=!1){this._emitDistinctChangesOnly=n,this.dirty=!0,this._results=[],this._changesDetected=!1,this._changes=null,this.length=0,this.first=void 0,this.last=void 0;const t=Yi(),i=hf.prototype;i[t]||(i[t]=LR)}get changes(){return this._changes||(this._changes=new G)}get(n){return this._results[n]}map(n){return this._results.map(n)}filter(n){return this._results.filter(n)}find(n){return this._results.find(n)}reduce(n,t){return this._results.reduce(n,t)}forEach(n){this._results.forEach(n)}some(n){return this._results.some(n)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(n,t){const i=this;i.dirty=!1;const r=zt(n);(this._changesDetected=!function WN(e,n,t){if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++){let r=e[i],o=n[i];if(t&&(r=t(r),o=t(o)),o!==r)return!1}return!0}(i._results,r,t))&&(i._results=r,i.length=r.length,i.last=r[this.length-1],i.first=r[0])}notifyOnChanges(){this._changes&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.emit(this)}setDirty(){this.dirty=!0}destroy(){this.changes.complete(),this.changes.unsubscribe()}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Ve=(()=>{class e{}return e.__NG_ELEMENT_ID__=jR,e})();const VR=Ve,BR=class extends VR{constructor(n,t,i){super(),this._declarationLView=n,this._declarationTContainer=t,this.elementRef=i}createEmbeddedView(n,t){const i=this._declarationTContainer.tViews,r=Ja(this._declarationLView,i,n,16,null,i.declTNode,null,null,null,null,t||null);r[17]=this._declarationLView[this._declarationTContainer.index];const s=this._declarationLView[19];return null!==s&&(r[19]=s.createEmbeddedView(i)),kd(i,r,n),new ns(r)}};function jR(){return pl(Qe(),D())}function pl(e,n){return 4&e.type?new BR(n,e,Hr(e,n)):null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let vn=(()=>{class e{}return e.__NG_ELEMENT_ID__=HR,e})();function HR(){return Ky(Qe(),D())}const $R=vn,Yy=class extends $R{constructor(n,t,i){super(),this._lContainer=n,this._hostTNode=t,this._hostLView=i}get element(){return Hr(this._hostTNode,this._hostLView)}get injector(){return new Rr(this._hostTNode,this._hostLView)}get parentInjector(){const n=Ra(this._hostTNode,this._hostLView);if(Gg(n)){const t=Ir(n,this._hostLView),i=Mr(n);return new Rr(t[1].data[i+8],t)}return new Rr(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(n){const t=Zy(this._lContainer);return null!==t&&t[n]||null}get length(){return this._lContainer.length-10}createEmbeddedView(n,t,i){let r,o;"number"==typeof i?r=i:null!=i&&(r=i.index,o=i.injector);const s=n.createEmbeddedView(t||{},o);return this.insert(s,r),s}createComponent(n,t,i,r,o){const s=n&&!function Bo(e){return"function"==typeof e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(n);let a;if(s)a=t;else{const d=t||{};a=d.index,i=d.injector,r=d.projectableNodes,o=d.environmentInjector||d.ngModuleRef}const l=s?n:new is(de(n)),c=i||this.parentInjector;if(!o&&null==l.ngModule){const f=(s?c:this.parentInjector).get(yi,null);f&&(o=f)}const u=l.create(c,r,void 0,o);return this.insert(u.hostView,a),u}insert(n,t){const i=n._lView,r=i[1];if(function hN(e){return dn(e[3])}(i)){const u=this.indexOf(n);if(-1!==u)this.detach(u);else{const d=i[3],f=new Yy(d,d[6],d[3]);f.detach(f.indexOf(n))}}const o=this._adjustIndex(t),s=this._lContainer;!function US(e,n,t,i){const r=10+i,o=t.length;i>0&&(t[r-1][4]=n),i<o-10?(n[4]=t[r],tm(t,10+i,n)):(t.push(n),n[4]=null),n[3]=t;const s=n[17];null!==s&&t!==s&&function GS(e,n){const t=e[9];n[16]!==n[3][3][16]&&(e[2]=!0),null===t?e[9]=[n]:t.push(n)}(s,n);const a=n[19];null!==a&&a.insertView(e),n[2]|=64}(r,i,s,o);const a=Zu(o,s),l=i[U],c=Ba(l,s[7]);return null!==c&&function jS(e,n,t,i,r,o){i[0]=r,i[6]=n,Ko(e,i,t,1,r,o)}(r,s[6],l,i,c,a),n.attachToViewContainerRef(),tm(pf(s),o,n),n}move(n,t){return this.insert(n,t)}indexOf(n){const t=Zy(this._lContainer);return null!==t?t.indexOf(n):-1}remove(n){const t=this._adjustIndex(n,-1),i=Wu(this._lContainer,t);i&&(ka(pf(this._lContainer),t),Mm(i[1],i))}detach(n){const t=this._adjustIndex(n,-1),i=Wu(this._lContainer,t);return i&&null!=ka(pf(this._lContainer),t)?new ns(i):null}_adjustIndex(n,t=0){return n??this.length+t}};function Zy(e){return e[8]}function pf(e){return e[8]||(e[8]=[])}function Ky(e,n){let t;const i=n[e.index];if(dn(i))t=i;else{let r;if(8&e.type)r=Ge(i);else{const o=n[U];r=o.createComment("");const s=Ut(e,n);zi(o,Ba(o,s),r,function YS(e,n){return e.nextSibling(n)}(o,s),!1)}n[e.index]=t=J_(i,n,r,e),Xa(n,t)}return new Yy(t,e,n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class gf{constructor(n){this.queryList=n,this.matches=null}clone(){return new gf(this.queryList)}setDirty(){this.queryList.setDirty()}}class mf{constructor(n=[]){this.queries=n}createEmbeddedView(n){const t=n.queries;if(null!==t){const i=null!==n.contentQueries?n.contentQueries[0]:t.length,r=[];for(let o=0;o<i;o++){const s=t.getByIndex(o);r.push(this.queries[s.indexInDeclarationView].clone())}return new mf(r)}return null}insertView(n){this.dirtyQueriesWithMatches(n)}detachView(n){this.dirtyQueriesWithMatches(n)}dirtyQueriesWithMatches(n){for(let t=0;t<this.queries.length;t++)null!==t0(n,t).matches&&this.queries[t].setDirty()}}class Jy{constructor(n,t,i=null){this.predicate=n,this.flags=t,this.read=i}}class _f{constructor(n=[]){this.queries=n}elementStart(n,t){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(n,t)}elementEnd(n){for(let t=0;t<this.queries.length;t++)this.queries[t].elementEnd(n)}embeddedTView(n){let t=null;for(let i=0;i<this.length;i++){const r=null!==t?t.length:0,o=this.getByIndex(i).embeddedTView(n,r);o&&(o.indexInDeclarationView=i,null!==t?t.push(o):t=[o])}return null!==t?new _f(t):null}template(n,t){for(let i=0;i<this.queries.length;i++)this.queries[i].template(n,t)}getByIndex(n){return this.queries[n]}get length(){return this.queries.length}track(n){this.queries.push(n)}}class vf{constructor(n,t=-1){this.metadata=n,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=t}elementStart(n,t){this.isApplyingToNode(t)&&this.matchTNode(n,t)}elementEnd(n){this._declarationNodeIndex===n.index&&(this._appliesToNextNode=!1)}template(n,t){this.elementStart(n,t)}embeddedTView(n,t){return this.isApplyingToNode(n)?(this.crossesNgTemplate=!0,this.addMatch(-n.index,t),new vf(this.metadata)):null}isApplyingToNode(n){if(this._appliesToNextNode&&1!=(1&this.metadata.flags)){const t=this._declarationNodeIndex;let i=n.parent;for(;null!==i&&8&i.type&&i.index!==t;)i=i.parent;return t===(null!==i?i.index:-1)}return this._appliesToNextNode}matchTNode(n,t){const i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){const o=i[r];this.matchTNodeWithReadOption(n,t,zR(t,o)),this.matchTNodeWithReadOption(n,t,xa(t,n,o,!1,!1))}else i===Ve?4&t.type&&this.matchTNodeWithReadOption(n,t,-1):this.matchTNodeWithReadOption(n,t,xa(t,n,i,!1,!1))}matchTNodeWithReadOption(n,t,i){if(null!==i){const r=this.metadata.read;if(null!==r)if(r===Ce||r===vn||r===Ve&&4&t.type)this.addMatch(t.index,-2);else{const o=xa(t,n,r,!1,!1);null!==o&&this.addMatch(t.index,o)}else this.addMatch(t.index,i)}}addMatch(n,t){null===this.matches?this.matches=[n,t]:this.matches.push(n,t)}}function zR(e,n){const t=e.localNames;if(null!==t)for(let i=0;i<t.length;i+=2)if(t[i]===n)return t[i+1];return null}function qR(e,n,t,i){return-1===t?function WR(e,n){return 11&e.type?Hr(e,n):4&e.type?pl(e,n):null}(n,e):-2===t?function YR(e,n,t){return t===Ce?Hr(n,e):t===Ve?pl(n,e):t===vn?Ky(n,e):void 0}(e,n,i):Lo(e,e[1],t,n)}function Qy(e,n,t,i){const r=n[19].queries[i];if(null===r.matches){const o=e.data,s=t.matches,a=[];for(let l=0;l<s.length;l+=2){const c=s[l];a.push(c<0?null:qR(n,o[c],s[l+1],t.metadata.read))}r.matches=a}return r.matches}function yf(e,n,t,i){const r=e.queries.getByIndex(t),o=r.matches;if(null!==o){const s=Qy(e,n,r,t);for(let a=0;a<o.length;a+=2){const l=o[a];if(l>0)i.push(s[a/2]);else{const c=o[a+1],u=n[-l];for(let d=10;d<u.length;d++){const f=u[d];f[17]===f[3]&&yf(f[1],f,c,i)}if(null!==u[9]){const d=u[9];for(let f=0;f<d.length;f++){const h=d[f];yf(h[1],h,c,i)}}}}}return i}function Ie(e){const n=D(),t=X(),i=kg();vu(i+1);const r=t0(t,i);if(e.dirty&&function fN(e){return 4==(4&e[2])}(n)===(2==(2&r.metadata.flags))){if(null===r.matches)e.reset([]);else{const o=r.crossesNgTemplate?yf(t,n,i,[]):Qy(t,n,r,i);e.reset(o,BT),e.notifyOnChanges()}return!0}return!1}function bf(e,n,t){const i=X();i.firstCreatePass&&(function e0(e,n,t){null===e.queries&&(e.queries=new _f),e.queries.track(new vf(n,t))}(i,new Jy(e,n,t),-1),2==(2&n)&&(i.staticViewQueries=!0)),function Xy(e,n,t){const i=new hf(4==(4&t));$_(e,n,i,i.destroy),null===n[19]&&(n[19]=new mf),n[19].queries.push(new gf(i))}(i,D(),n)}function t0(e,n){return e.queries.getByIndex(n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function ml(...e){}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const _l=new R("Application Initializer");let vl=(()=>{class e{constructor(t){this.appInits=t,this.resolve=ml,this.reject=ml,this.initialized=!1,this.done=!1,this.donePromise=new Promise((i,r)=>{this.resolve=i,this.reject=r})}runInitializers(){if(this.initialized)return;const t=[],i=()=>{this.done=!0,this.resolve()};if(this.appInits)for(let r=0;r<this.appInits.length;r++){const o=this.appInits[r]();if(ss(o))t.push(o);else if(Kd(o)){const s=new Promise((a,l)=>{o.subscribe({complete:a,error:l})});t.push(s)}}Promise.all(t).then(()=>{i()}).catch(r=>{this.reject(r)}),0===t.length&&i(),this.initialized=!0}}return e.\u0275fac=function(t){return new(t||e)(E(_l,8))},e.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const vs=new R("AppId",{providedIn:"root",factory:function D0(){return`${Nf()}${Nf()}${Nf()}`}});function Nf(){return String.fromCharCode(97+Math.floor(25*Math.random()))}const C0=new R("Platform Initializer"),yl=new R("Platform ID",{providedIn:"platform",factory:()=>"unknown"}),w0=new R("appBootstrapListener");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let mA=(()=>{class e{log(t){console.log(t)}warn(t){console.warn(t)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"platform"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const ii=new R("LocaleId",{providedIn:"root",factory:()=>Be(ii,k.Optional|k.SkipSelf)||function _A(){return typeof $localize<"u"&&$localize.locale||oo}()});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class yA{constructor(n,t){this.ngModuleFactory=n,this.componentFactories=t}}let Sf=(()=>{class e{compileModuleSync(t){return new cf(t)}compileModuleAsync(t){return Promise.resolve(this.compileModuleSync(t))}compileModuleAndAllComponentsSync(t){const i=this.compileModuleSync(t),o=Qn(Ht(t).declarations).reduce((s,a)=>{const l=de(a);return l&&s.push(new is(l)),s},[]);return new yA(i,o)}compileModuleAndAllComponentsAsync(t){return Promise.resolve(this.compileModuleAndAllComponentsSync(t))}clearCache(){}clearCacheFor(t){}getModuleId(t){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const CA=(()=>Promise.resolve(0))();function Tf(e){typeof Zone>"u"?CA.then(()=>{e&&e.apply(null,null)}):Zone.current.scheduleMicroTask("scheduleMicrotask",e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class be{constructor({enableLongStackTrace:n=!1,shouldCoalesceEventChangeDetection:t=!1,shouldCoalesceRunChangeDetection:i=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new G(!1),this.onMicrotaskEmpty=new G(!1),this.onStable=new G(!1),this.onError=new G(!1),typeof Zone>"u")throw new w(908,!1);Zone.assertZonePatched();const r=this;if(r._nesting=0,r._outer=r._inner=Zone.current,Zone.AsyncStackTaggingZoneSpec){const o=Zone.AsyncStackTaggingZoneSpec;r._inner=r._inner.fork(new o("Angular"))}Zone.TaskTrackingZoneSpec&&(r._inner=r._inner.fork(new Zone.TaskTrackingZoneSpec)),n&&Zone.longStackTraceZoneSpec&&(r._inner=r._inner.fork(Zone.longStackTraceZoneSpec)),r.shouldCoalesceEventChangeDetection=!i&&t,r.shouldCoalesceRunChangeDetection=i,r.lastRequestAnimationFrameId=-1,r.nativeRequestAnimationFrame=function wA(){let e=ve.requestAnimationFrame,n=ve.cancelAnimationFrame;if(typeof Zone<"u"&&e&&n){const t=e[Zone.__symbol__("OriginalDelegate")];t&&(e=t);const i=n[Zone.__symbol__("OriginalDelegate")];i&&(n=i)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:n}}().nativeRequestAnimationFrame,function SA(e){const n=()=>{!function NA(e){e.isCheckStableRunning||-1!==e.lastRequestAnimationFrameId||(e.lastRequestAnimationFrameId=e.nativeRequestAnimationFrame.call(ve,()=>{e.fakeTopEventTask||(e.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{e.lastRequestAnimationFrameId=-1,Mf(e),e.isCheckStableRunning=!0,Of(e),e.isCheckStableRunning=!1},void 0,()=>{},()=>{})),e.fakeTopEventTask.invoke()}),Mf(e))}(e)};e._inner=e._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(t,i,r,o,s,a)=>{try{return S0(e),t.invokeTask(r,o,s,a)}finally{(e.shouldCoalesceEventChangeDetection&&"eventTask"===o.type||e.shouldCoalesceRunChangeDetection)&&n(),T0(e)}},onInvoke:(t,i,r,o,s,a,l)=>{try{return S0(e),t.invoke(r,o,s,a,l)}finally{e.shouldCoalesceRunChangeDetection&&n(),T0(e)}},onHasTask:(t,i,r,o)=>{t.hasTask(r,o),i===r&&("microTask"==o.change?(e._hasPendingMicrotasks=o.microTask,Mf(e),Of(e)):"macroTask"==o.change&&(e.hasPendingMacrotasks=o.macroTask))},onHandleError:(t,i,r,o)=>(t.handleError(r,o),e.runOutsideAngular(()=>e.onError.emit(o)),!1)})}(r)}static isInAngularZone(){return typeof Zone<"u"&&!0===Zone.current.get("isAngularZone")}static assertInAngularZone(){if(!be.isInAngularZone())throw new w(909,!1)}static assertNotInAngularZone(){if(be.isInAngularZone())throw new w(909,!1)}run(n,t,i){return this._inner.run(n,t,i)}runTask(n,t,i,r){const o=this._inner,s=o.scheduleEventTask("NgZoneEvent: "+r,n,EA,ml,ml);try{return o.runTask(s,t,i)}finally{o.cancelTask(s)}}runGuarded(n,t,i){return this._inner.runGuarded(n,t,i)}runOutsideAngular(n){return this._outer.run(n)}}const EA={};function Of(e){if(0==e._nesting&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function Mf(e){e.hasPendingMicrotasks=!!(e._hasPendingMicrotasks||(e.shouldCoalesceEventChangeDetection||e.shouldCoalesceRunChangeDetection)&&-1!==e.lastRequestAnimationFrameId)}function S0(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function T0(e){e._nesting--,Of(e)}class TA{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new G,this.onMicrotaskEmpty=new G,this.onStable=new G,this.onError=new G}run(n,t,i){return n.apply(t,i)}runGuarded(n,t,i){return n.apply(t,i)}runOutsideAngular(n){return n()}runTask(n,t,i,r){return n.apply(t,i)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const O0=new R(""),bl=new R("");let Af,If=(()=>{class e{constructor(t,i,r){this._ngZone=t,this.registry=i,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,Af||(function OA(e){Af=e}(r),r.addToWindow(i)),this._watchAngularEvents(),t.run(()=>{this.taskTrackingZone=typeof Zone>"u"?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{be.assertNotInAngularZone(),Tf(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())Tf(()=>{for(;0!==this._callbacks.length;){let t=this._callbacks.pop();clearTimeout(t.timeoutId),t.doneCb(this._didWork)}this._didWork=!1});else{let t=this.getPendingTasks();this._callbacks=this._callbacks.filter(i=>!i.updateCb||!i.updateCb(t)||(clearTimeout(i.timeoutId),!1)),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(t=>({source:t.source,creationLocation:t.creationLocation,data:t.data})):[]}addCallback(t,i,r){let o=-1;i&&i>0&&(o=setTimeout(()=>{this._callbacks=this._callbacks.filter(s=>s.timeoutId!==o),t(this._didWork,this.getPendingTasks())},i)),this._callbacks.push({doneCb:t,timeoutId:o,updateCb:r})}whenStable(t,i,r){if(r&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(t,i,r),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}registerApplication(t){this.registry.registerApplication(t,this)}unregisterApplication(t){this.registry.unregisterApplication(t)}findProviders(t,i,r){return[]}}return e.\u0275fac=function(t){return new(t||e)(E(be),E(Rf),E(bl))},e.\u0275prov=M({token:e,factory:e.\u0275fac}),e})(),Rf=(()=>{class e{constructor(){this._applications=new Map}registerApplication(t,i){this._applications.set(t,i)}unregisterApplication(t){this._applications.delete(t)}unregisterAllApplications(){this._applications.clear()}getTestability(t){return this._applications.get(t)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(t,i=!0){return Af?.findTestabilityInTree(this,t,i)??null}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"platform"}),e})(),wi=null;const M0=new R("AllowMultipleToken"),xf=new R("PlatformDestroyListeners");class I0{constructor(n,t){this.name=n,this.token=t}}function A0(e,n,t=[]){const i=`Platform: ${n}`,r=new R(i);return(o=[])=>{let s=kf();if(!s||s.injector.get(M0,!1)){const a=[...t,...o,{provide:r,useValue:!0}];e?e(a):function RA(e){if(wi&&!wi.get(M0,!1))throw new w(400,!1);wi=e;const n=e.get(k0);(function R0(e){const n=e.get(C0,null);n&&n.forEach(t=>t())})(e)}(function x0(e=[],n){return _t.create({name:n,providers:[{provide:ud,useValue:"platform"},{provide:xf,useValue:new Set([()=>wi=null])},...e]})}(a,i))}return function xA(e){const n=kf();if(!n)throw new w(401,!1);return n}()}}function kf(){return wi?.get(k0)??null}let k0=(()=>{class e{constructor(t){this._injector=t,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(t,i){const r=function F0(e,n){let t;return t="noop"===e?new TA:("zone.js"===e?void 0:e)||new be(n),t}(i?.ngZone,function P0(e){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:!(!e||!e.ngZoneEventCoalescing)||!1,shouldCoalesceRunChangeDetection:!(!e||!e.ngZoneRunCoalescing)||!1}}(i)),o=[{provide:be,useValue:r}];return r.run(()=>{const s=_t.create({providers:o,parent:this.injector,name:t.moduleType.name}),a=t.create(s),l=a.injector.get($r,null);if(!l)throw new w(402,!1);return r.runOutsideAngular(()=>{const c=r.onError.subscribe({next:u=>{l.handleError(u)}});a.onDestroy(()=>{Dl(this._modules,a),c.unsubscribe()})}),function L0(e,n,t){try{const i=t();return ss(i)?i.catch(r=>{throw n.runOutsideAngular(()=>e.handleError(r)),r}):i}catch(i){throw n.runOutsideAngular(()=>e.handleError(i)),i}}(l,r,()=>{const c=a.injector.get(vl);return c.runInitializers(),c.donePromise.then(()=>(function cy(e){jt(e,"Expected localeId to be defined"),"string"==typeof e&&(ly=e.toLowerCase().replace(/_/g,"-"))}(a.injector.get(ii,oo)||oo),this._moduleDoBootstrap(a),a))})})}bootstrapModule(t,i=[]){const r=V0({},i);return function MA(e,n,t){const i=new cf(t);return Promise.resolve(i)}(0,0,t).then(o=>this.bootstrapModuleFactory(o,r))}_moduleDoBootstrap(t){const i=t.injector.get(ys);if(t._bootstrapComponents.length>0)t._bootstrapComponents.forEach(r=>i.bootstrap(r));else{if(!t.instance.ngDoBootstrap)throw new w(403,!1);t.instance.ngDoBootstrap(i)}this._modules.push(t)}onDestroy(t){this._destroyListeners.push(t)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new w(404,!1);this._modules.slice().forEach(i=>i.destroy()),this._destroyListeners.forEach(i=>i());const t=this._injector.get(xf,null);t&&(t.forEach(i=>i()),t.clear()),this._destroyed=!0}get destroyed(){return this._destroyed}}return e.\u0275fac=function(t){return new(t||e)(E(_t))},e.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"platform"}),e})();function V0(e,n){return Array.isArray(n)?n.reduce(V0,e):{...e,...n}}let ys=(()=>{class e{constructor(t,i,r){this._zone=t,this._injector=i,this._exceptionHandler=r,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._stable=!0,this._destroyed=!1,this._destroyListeners=[],this.componentTypes=[],this.components=[],this._onMicrotaskEmptySubscription=this._zone.onMicrotaskEmpty.subscribe({next:()=>{this._zone.run(()=>{this.tick()})}});const o=new he(a=>{this._stable=this._zone.isStable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks,this._zone.runOutsideAngular(()=>{a.next(this._stable),a.complete()})}),s=new he(a=>{let l;this._zone.runOutsideAngular(()=>{l=this._zone.onStable.subscribe(()=>{be.assertNotInAngularZone(),Tf(()=>{!this._stable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks&&(this._stable=!0,a.next(!0))})})});const c=this._zone.onUnstable.subscribe(()=>{be.assertInAngularZone(),this._stable&&(this._stable=!1,this._zone.runOutsideAngular(()=>{a.next(!1)}))});return()=>{l.unsubscribe(),c.unsubscribe()}});this.isStable=function PE(...e){const n=To(e),t=function OE(e,n){return"number"==typeof Kc(e)?e.pop():n}(e,1/0),i=e;return i.length?1===i.length?ct(i[0]):Dr(t)(Ue(i,n)):ln}(o,s.pipe(function FE(e={}){const{connector:n=(()=>new Te),resetOnError:t=!0,resetOnComplete:i=!0,resetOnRefCountZero:r=!0}=e;return o=>{let s,a,l,c=0,u=!1,d=!1;const f=()=>{a?.unsubscribe(),a=void 0},h=()=>{f(),s=l=void 0,u=d=!1},p=()=>{const g=s;h(),g?.unsubscribe()};return Pe((g,m)=>{c++,!d&&!u&&f();const v=l=l??n();m.add(()=>{c--,0===c&&!d&&!u&&(a=Jc(p,r))}),v.subscribe(m),!s&&c>0&&(s=new So({next:b=>v.next(b),error:b=>{d=!0,f(),a=Jc(h,t,b),v.error(b)},complete:()=>{u=!0,f(),a=Jc(h,i),v.complete()}}),ct(g).subscribe(s))})(o)}}()))}get destroyed(){return this._destroyed}get injector(){return this._injector}bootstrap(t,i){const r=t instanceof l_;if(!this._injector.get(vl).done)throw!r&&function wr(e){const n=de(e)||Ct(e)||wt(e);return null!==n&&n.standalone}(t),new w(405,false);let s;s=r?t:this._injector.get(es).resolveComponentFactory(t),this.componentTypes.push(s.componentType);const a=function IA(e){return e.isBoundToModule}(s)?void 0:this._injector.get(Xi),c=s.create(_t.NULL,[],i||s.selector,a),u=c.location.nativeElement,d=c.injector.get(O0,null);return d?.registerApplication(u),c.onDestroy(()=>{this.detachView(c.hostView),Dl(this.components,c),d?.unregisterApplication(u)}),this._loadComponent(c),c}tick(){if(this._runningTick)throw new w(101,!1);try{this._runningTick=!0;for(let t of this._views)t.detectChanges()}catch(t){this._zone.runOutsideAngular(()=>this._exceptionHandler.handleError(t))}finally{this._runningTick=!1}}attachView(t){const i=t;this._views.push(i),i.attachToAppRef(this)}detachView(t){const i=t;Dl(this._views,i),i.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView),this.tick(),this.components.push(t),this._injector.get(w0,[]).concat(this._bootstrapListeners).forEach(r=>r(t))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(t=>t()),this._views.slice().forEach(t=>t.destroy()),this._onMicrotaskEmptySubscription.unsubscribe()}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(t){return this._destroyListeners.push(t),()=>Dl(this._destroyListeners,t)}destroy(){if(this._destroyed)throw new w(406,!1);const t=this._injector;t.destroy&&!t.destroyed&&t.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}}return e.\u0275fac=function(t){return new(t||e)(E(be),E(yi),E($r))},e.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function Dl(e,n){const t=e.indexOf(n);t>-1&&e.splice(t,1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let j0=!0,oi=(()=>{class e{}return e.__NG_ELEMENT_ID__=FA,e})();function FA(e){return function LA(e,n,t){if(Da(e)&&!t){const i=Gt(e.index,n);return new ns(i,i)}return 47&e.type?new ns(n[16],n):null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(Qe(),D(),16==(16&e))}const KA=A0(null,"core",[]);
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let JA=(()=>{class e{constructor(t){}}return e.\u0275fac=function(t){return new(t||e)(E(ys))},e.\u0275mod=le({type:e}),e.\u0275inj=oe({}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Bf(e,n){const t=de(e),i=n.elementInjector||Wa();return new is(t).create(i,n.projectableNodes,n.hostElement,n.environmentInjector)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license Angular v14.3.0
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Nl=null;function Vn(){return Nl}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const We=new R("DocumentToken");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let jf=(()=>{class e{historyGo(t){throw new Error("Not implemented")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=M({token:e,factory:function(){return function tx(){return E(J0)}()},providedIn:"platform"}),e})();const nx=new R("Location Initialized");let J0=(()=>{class e extends jf{constructor(t){super(),this._doc=t,this._init()}_init(){this.location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Vn().getBaseHref(this._doc)}onPopState(t){const i=Vn().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",t,!1),()=>i.removeEventListener("popstate",t)}onHashChange(t){const i=Vn().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",t,!1),()=>i.removeEventListener("hashchange",t)}get href(){return this.location.href}get protocol(){return this.location.protocol}get hostname(){return this.location.hostname}get port(){return this.location.port}get pathname(){return this.location.pathname}get search(){return this.location.search}get hash(){return this.location.hash}set pathname(t){this.location.pathname=t}pushState(t,i,r){Q0()?this._history.pushState(t,i,r):this.location.hash=r}replaceState(t,i,r){Q0()?this._history.replaceState(t,i,r):this.location.hash=r}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}}return e.\u0275fac=function(t){return new(t||e)(E(We))},e.\u0275prov=M({token:e,factory:function(){return function ix(){return new J0(E(We))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */()},providedIn:"platform"}),e})();function Q0(){return!!window.history.pushState}function Hf(e,n){if(0==e.length)return n;if(0==n.length)return e;let t=0;return e.endsWith("/")&&t++,n.startsWith("/")&&t++,2==t?e+n.substring(1):1==t?e+n:e+"/"+n}function X0(e){const n=e.match(/#|\?|$/),t=n&&n.index||e.length;return e.slice(0,t-("/"===e[t-1]?1:0))+e.slice(t)}function ai(e){return e&&"?"!==e[0]?"?"+e:e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let tr=(()=>{class e{historyGo(t){throw new Error("Not implemented")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=M({token:e,factory:function(){return Be(tb)},providedIn:"root"}),e})();const eb=new R("appBaseHref");let tb=(()=>{class e extends tr{constructor(t,i){super(),this._platformLocation=t,this._removeListenerFns=[],this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??Be(We).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return Hf(this._baseHref,t)}path(t=!1){const i=this._platformLocation.pathname+ai(this._platformLocation.search),r=this._platformLocation.hash;return r&&t?`${i}${r}`:i}pushState(t,i,r,o){const s=this.prepareExternalUrl(r+ai(o));this._platformLocation.pushState(t,i,s)}replaceState(t,i,r,o){const s=this.prepareExternalUrl(r+ai(o));this._platformLocation.replaceState(t,i,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}}return e.\u0275fac=function(t){return new(t||e)(E(jf),E(eb,8))},e.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),rx=(()=>{class e extends tr{constructor(t,i){super(),this._platformLocation=t,this._baseHref="",this._removeListenerFns=[],null!=i&&(this._baseHref=i)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}path(t=!1){let i=this._platformLocation.hash;return null==i&&(i="#"),i.length>0?i.substring(1):i}prepareExternalUrl(t){const i=Hf(this._baseHref,t);return i.length>0?"#"+i:i}pushState(t,i,r,o){let s=this.prepareExternalUrl(r+ai(o));0==s.length&&(s=this._platformLocation.pathname),this._platformLocation.pushState(t,i,s)}replaceState(t,i,r,o){let s=this.prepareExternalUrl(r+ai(o));0==s.length&&(s=this._platformLocation.pathname),this._platformLocation.replaceState(t,i,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}}return e.\u0275fac=function(t){return new(t||e)(E(jf),E(eb,8))},e.\u0275prov=M({token:e,factory:e.\u0275fac}),e})(),Sl=(()=>{class e{constructor(t){this._subject=new G,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=t;const i=this._locationStrategy.getBaseHref();this._baseHref=X0(nb(i)),this._locationStrategy.onPopState(r=>{this._subject.emit({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,i=""){return this.path()==this.normalize(t+ai(i))}normalize(t){return e.stripTrailingSlash(function sx(e,n){return e&&n.startsWith(e)?n.substring(e.length):n}(this._baseHref,nb(t)))}prepareExternalUrl(t){return t&&"/"!==t[0]&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,i="",r=null){this._locationStrategy.pushState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+ai(i)),r)}replaceState(t,i="",r=null){this._locationStrategy.replaceState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+ai(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)})),()=>{const i=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(i,1),0===this._urlChangeListeners.length&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",i){this._urlChangeListeners.forEach(r=>r(t,i))}subscribe(t,i,r){return this._subject.subscribe({next:t,error:i,complete:r})}}return e.normalizeQueryParams=ai,e.joinWithSlash=Hf,e.stripTrailingSlash=X0,e.\u0275fac=function(t){return new(t||e)(E(tr))},e.\u0275prov=M({token:e,factory:function(){return function ox(){return new Sl(E(tr))}()},providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function nb(e){return e.replace(/\/index.html$/,"")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function db(e,n){n=encodeURIComponent(n);for(const t of e.split(";")){const i=t.indexOf("="),[r,o]=-1==i?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===n)return decodeURIComponent(o)}return null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let lo=(()=>{class e{constructor(t,i){this._viewContainer=t,this._context=new qx,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=i}set ngIf(t){this._context.$implicit=this._context.ngIf=t,this._updateView()}set ngIfThen(t){gb("ngIfThen",t),this._thenTemplateRef=t,this._thenViewRef=null,this._updateView()}set ngIfElse(t){gb("ngIfElse",t),this._elseTemplateRef=t,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(t,i){return!0}}return e.\u0275fac=function(t){return new(t||e)(_(vn),_(Ve))},e.\u0275dir=N({type:e,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0}),e})();class qx{constructor(){this.$implicit=null,this.ngIf=null}}function gb(e,n){if(n&&!n.createEmbeddedView)throw new Error(`${e} must be a TemplateRef, but received '${ge(n)}'.`)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Yt=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=le({type:e}),e.\u0275inj=oe({}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let wk=(()=>{class e{}return e.\u0275prov=M({token:e,providedIn:"root",factory:()=>new Ek(E(We),window)}),e})();class Ek{constructor(n,t){this.document=n,this.window=t,this.offset=()=>[0,0]}setOffset(n){this.offset=Array.isArray(n)?()=>n:n}getScrollPosition(){return this.supportsScrolling()?[this.window.pageXOffset,this.window.pageYOffset]:[0,0]}scrollToPosition(n){this.supportsScrolling()&&this.window.scrollTo(n[0],n[1])}scrollToAnchor(n){if(!this.supportsScrolling())return;const t=function Nk(e,n){const t=e.getElementById(n)||e.getElementsByName(n)[0];if(t)return t;if("function"==typeof e.createTreeWalker&&e.body&&(e.body.createShadowRoot||e.body.attachShadow)){const i=e.createTreeWalker(e.body,NodeFilter.SHOW_ELEMENT);let r=i.currentNode;for(;r;){const o=r.shadowRoot;if(o){const s=o.getElementById(n)||o.querySelector(`[name="${n}"]`);if(s)return s}r=i.nextNode()}}return null}(this.document,n);t&&(this.scrollToElement(t),t.focus())}setHistoryScrollRestoration(n){if(this.supportScrollRestoration()){const t=this.window.history;t&&t.scrollRestoration&&(t.scrollRestoration=n)}}scrollToElement(n){const t=n.getBoundingClientRect(),i=t.left+this.window.pageXOffset,r=t.top+this.window.pageYOffset,o=this.offset();this.window.scrollTo(i-o[0],r-o[1])}supportScrollRestoration(){try{if(!this.supportsScrolling())return!1;const n=yb(this.window.history)||yb(Object.getPrototypeOf(this.window.history));return!(!n||!n.writable&&!n.set)}catch{return!1}}supportsScrolling(){try{return!!this.window&&!!this.window.scrollTo&&"pageXOffset"in this.window}catch{return!1}}}function yb(e){return Object.getOwnPropertyDescriptor(e,"scrollRestoration")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class bb{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class ih extends
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license Angular v14.3.0
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Qk extends class ex{}{constructor(){super(...arguments),this.supportsDOMEvents=!0}}{static makeCurrent(){!function XA(e){Nl||(Nl=e)}(new ih)}onAndCancel(n,t,i){return n.addEventListener(t,i,!1),()=>{n.removeEventListener(t,i,!1)}}dispatchEvent(n,t){n.dispatchEvent(t)}remove(n){n.parentNode&&n.parentNode.removeChild(n)}createElement(n,t){return(t=t||this.getDefaultDocument()).createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,t){return"window"===t?window:"document"===t?n:"body"===t?n.body:null}getBaseHref(n){const t=function Xk(){return Ss=Ss||document.querySelector("base"),Ss?Ss.getAttribute("href"):null}();return null==t?null:function eP(e){Vl=Vl||document.createElement("a"),Vl.setAttribute("href",e);const n=Vl.pathname;return"/"===n.charAt(0)?n:`/${n}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t)}resetBaseElement(){Ss=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return db(document.cookie,n)}}let Vl,Ss=null;const Nb=new R("TRANSITION_ID"),nP=[{provide:_l,useFactory:function tP(e,n,t){return()=>{t.get(vl).donePromise.then(()=>{const i=Vn(),r=n.querySelectorAll(`style[ng-transition="${e}"]`);for(let o=0;o<r.length;o++)i.remove(r[o])})}},deps:[Nb,We,_t],multi:!0}];let rP=(()=>{class e{build(){return new XMLHttpRequest}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=M({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Bl=new R("EventManagerPlugins");let jl=(()=>{class e{constructor(t,i){this._zone=i,this._eventNameToPlugin=new Map,t.forEach(r=>r.manager=this),this._plugins=t.slice().reverse()}addEventListener(t,i,r){return this._findPluginFor(i).addEventListener(t,i,r)}addGlobalEventListener(t,i,r){return this._findPluginFor(i).addGlobalEventListener(t,i,r)}getZone(){return this._zone}_findPluginFor(t){const i=this._eventNameToPlugin.get(t);if(i)return i;const r=this._plugins;for(let o=0;o<r.length;o++){const s=r[o];if(s.supports(t))return this._eventNameToPlugin.set(t,s),s}throw new Error(`No event manager plugin found for event ${t}`)}}return e.\u0275fac=function(t){return new(t||e)(E(Bl),E(be))},e.\u0275prov=M({token:e,factory:e.\u0275fac}),e})();class Sb{constructor(n){this._doc=n}addGlobalEventListener(n,t,i){const r=Vn().getGlobalEventTarget(this._doc,n);if(!r)throw new Error(`Unsupported event target ${r} for event ${t}`);return this.addEventListener(r,t,i)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Tb=(()=>{class e{constructor(){this._stylesSet=new Set}addStyles(t){const i=new Set;t.forEach(r=>{this._stylesSet.has(r)||(this._stylesSet.add(r),i.add(r))}),this.onStylesAdded(i)}onStylesAdded(t){}getAllStyles(){return Array.from(this._stylesSet)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=M({token:e,factory:e.\u0275fac}),e})(),Ts=(()=>{class e extends Tb{constructor(t){super(),this._doc=t,this._hostNodes=new Map,this._hostNodes.set(t.head,[])}_addStylesToHost(t,i,r){t.forEach(o=>{const s=this._doc.createElement("style");s.textContent=o,r.push(i.appendChild(s))})}addHost(t){const i=[];this._addStylesToHost(this._stylesSet,t,i),this._hostNodes.set(t,i)}removeHost(t){const i=this._hostNodes.get(t);i&&i.forEach(Ob),this._hostNodes.delete(t)}onStylesAdded(t){this._hostNodes.forEach((i,r)=>{this._addStylesToHost(t,r,i)})}ngOnDestroy(){this._hostNodes.forEach(t=>t.forEach(Ob))}}return e.\u0275fac=function(t){return new(t||e)(E(We))},e.\u0275prov=M({token:e,factory:e.\u0275fac}),e})();function Ob(e){Vn().remove(e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const rh={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},oh=/%COMP%/g;function Hl(e,n,t){for(let i=0;i<n.length;i++){let r=n[i];Array.isArray(r)?Hl(e,r,t):(r=r.replace(oh,e),t.push(r))}return t}function Rb(e){return n=>{if("__ngUnwrap__"===n)return e;!1===e(n)&&(n.preventDefault(),n.returnValue=!1)}}let sh=(()=>{class e{constructor(t,i,r){this.eventManager=t,this.sharedStylesHost=i,this.appId=r,this.rendererByCompId=new Map,this.defaultRenderer=new ah(t)}createRenderer(t,i){if(!t||!i)return this.defaultRenderer;switch(i.encapsulation){case On.Emulated:{let r=this.rendererByCompId.get(i.id);return r||(r=new uP(this.eventManager,this.sharedStylesHost,i,this.appId),this.rendererByCompId.set(i.id,r)),r.applyToHost(t),r}case 1:case On.ShadowDom:return new dP(this.eventManager,this.sharedStylesHost,t,i);default:if(!this.rendererByCompId.has(i.id)){const r=Hl(i.id,i.styles,[]);this.sharedStylesHost.addStyles(r),this.rendererByCompId.set(i.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return e.\u0275fac=function(t){return new(t||e)(E(jl),E(Ts),E(vs))},e.\u0275prov=M({token:e,factory:e.\u0275fac}),e})();class ah{constructor(n){this.eventManager=n,this.data=Object.create(null),this.destroyNode=null}destroy(){}createElement(n,t){return t?document.createElementNS(rh[t]||t,n):document.createElement(n)}createComment(n){return document.createComment(n)}createText(n){return document.createTextNode(n)}appendChild(n,t){(xb(n)?n.content:n).appendChild(t)}insertBefore(n,t,i){n&&(xb(n)?n.content:n).insertBefore(t,i)}removeChild(n,t){n&&n.removeChild(t)}selectRootElement(n,t){let i="string"==typeof n?document.querySelector(n):n;if(!i)throw new Error(`The selector "${n}" did not match any elements`);return t||(i.textContent=""),i}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,t,i,r){if(r){t=r+":"+t;const o=rh[r];o?n.setAttributeNS(o,t,i):n.setAttribute(t,i)}else n.setAttribute(t,i)}removeAttribute(n,t,i){if(i){const r=rh[i];r?n.removeAttributeNS(r,t):n.removeAttribute(`${i}:${t}`)}else n.removeAttribute(t)}addClass(n,t){n.classList.add(t)}removeClass(n,t){n.classList.remove(t)}setStyle(n,t,i,r){r&(Ft.DashCase|Ft.Important)?n.style.setProperty(t,i,r&Ft.Important?"important":""):n.style[t]=i}removeStyle(n,t,i){i&Ft.DashCase?n.style.removeProperty(t):n.style[t]=""}setProperty(n,t,i){n[t]=i}setValue(n,t){n.nodeValue=t}listen(n,t,i){return"string"==typeof n?this.eventManager.addGlobalEventListener(n,t,Rb(i)):this.eventManager.addEventListener(n,t,Rb(i))}}function xb(e){return"TEMPLATE"===e.tagName&&void 0!==e.content}class uP extends ah{constructor(n,t,i,r){super(n),this.component=i;const o=Hl(r+"-"+i.id,i.styles,[]);t.addStyles(o),this.contentAttr=function aP(e){return"_ngcontent-%COMP%".replace(oh,e)}(r+"-"+i.id),this.hostAttr=function lP(e){return"_nghost-%COMP%".replace(oh,e)}(r+"-"+i.id)}applyToHost(n){super.setAttribute(n,this.hostAttr,"")}createElement(n,t){const i=super.createElement(n,t);return super.setAttribute(i,this.contentAttr,""),i}}class dP extends ah{constructor(n,t,i,r){super(n),this.sharedStylesHost=t,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const o=Hl(r.id,r.styles,[]);for(let s=0;s<o.length;s++){const a=document.createElement("style");a.textContent=o[s],this.shadowRoot.appendChild(a)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(n,t){return super.appendChild(this.nodeOrShadowRoot(n),t)}insertBefore(n,t,i){return super.insertBefore(this.nodeOrShadowRoot(n),t,i)}removeChild(n,t){return super.removeChild(this.nodeOrShadowRoot(n),t)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let fP=(()=>{class e extends Sb{constructor(t){super(t)}supports(t){return!0}addEventListener(t,i,r){return t.addEventListener(i,r,!1),()=>this.removeEventListener(t,i,r)}removeEventListener(t,i,r){return t.removeEventListener(i,r)}}return e.\u0275fac=function(t){return new(t||e)(E(We))},e.\u0275prov=M({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const kb=["alt","control","meta","shift"],hP={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},pP={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey};let gP=(()=>{class e extends Sb{constructor(t){super(t)}supports(t){return null!=e.parseEventName(t)}addEventListener(t,i,r){const o=e.parseEventName(i),s=e.eventCallback(o.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Vn().onAndCancel(t,o.domEventName,s))}static parseEventName(t){const i=t.toLowerCase().split("."),r=i.shift();if(0===i.length||"keydown"!==r&&"keyup"!==r)return null;const o=e._normalizeKey(i.pop());let s="",a=i.indexOf("code");if(a>-1&&(i.splice(a,1),s="code."),kb.forEach(c=>{const u=i.indexOf(c);u>-1&&(i.splice(u,1),s+=c+".")}),s+=o,0!=i.length||0===o.length)return null;const l={};return l.domEventName=r,l.fullKey=s,l}static matchEventFullKeyCode(t,i){let r=hP[t.key]||t.key,o="";return i.indexOf("code.")>-1&&(r=t.code,o="code."),!(null==r||!r)&&(r=r.toLowerCase()," "===r?r="space":"."===r&&(r="dot"),kb.forEach(s=>{s!==r&&(0,pP[s])(t)&&(o+=s+".")}),o+=r,o===i)}static eventCallback(t,i,r){return o=>{e.matchEventFullKeyCode(o,t)&&r.runGuarded(()=>i(o))}}static _normalizeKey(t){return"esc"===t?"escape":t}}return e.\u0275fac=function(t){return new(t||e)(E(We))},e.\u0275prov=M({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const yP=A0(KA,"browser",[{provide:yl,useValue:"browser"},{provide:C0,useValue:function mP(){ih.makeCurrent()},multi:!0},{provide:We,useFactory:function vP(){return function tT(e){ed=e}(document),document},deps:[]}]),Lb=new R(""),Vb=[{provide:bl,useClass:
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class iP{addToWindow(n){ve.getAngularTestability=(i,r=!0)=>{const o=n.findTestabilityInTree(i,r);if(null==o)throw new Error("Could not find testability for element.");return o},ve.getAllAngularTestabilities=()=>n.getAllTestabilities(),ve.getAllAngularRootElements=()=>n.getAllRootElements(),ve.frameworkStabilizers||(ve.frameworkStabilizers=[]),ve.frameworkStabilizers.push(i=>{const r=ve.getAllAngularTestabilities();let o=r.length,s=!1;const a=function(l){s=s||l,o--,0==o&&i(s)};r.forEach(function(l){l.whenStable(a)})})}findTestabilityInTree(n,t,i){return null==t?null:n.getTestability(t)??(i?Vn().isShadowRoot(t)?this.findTestabilityInTree(n,t.host,!0):this.findTestabilityInTree(n,t.parentElement,!0):null)}},deps:[]},{provide:O0,useClass:If,deps:[be,Rf,bl]},{provide:If,useClass:If,deps:[be,Rf,bl]}],Bb=[{provide:ud,useValue:"root"},{provide:$r,useFactory:function _P(){return new $r},deps:[]},{provide:Bl,useClass:fP,multi:!0,deps:[We,be,yl]},{provide:Bl,useClass:gP,multi:!0,deps:[We]},{provide:sh,useClass:sh,deps:[jl,Ts,vs]},{provide:pd,useExisting:sh},{provide:Tb,useExisting:Ts},{provide:Ts,useClass:Ts,deps:[We]},{provide:jl,useClass:jl,deps:[Bl,be]},{provide:bb,useClass:rP,deps:[]},[]];let bP=(()=>{class e{constructor(t){}static withServerTransition(t){return{ngModule:e,providers:[{provide:vs,useValue:t.appId},{provide:Nb,useExisting:vs},nP]}}}return e.\u0275fac=function(t){return new(t||e)(E(Lb,12))},e.\u0275mod=le({type:e}),e.\u0275inj=oe({providers:[...Bb,...Vb],imports:[Yt,JA]}),e})(),jb=(()=>{class e{constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}}return e.\u0275fac=function(t){return new(t||e)(E(We))},e.\u0275prov=M({token:e,factory:function(t){let i=null;return i=t?new t:
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function CP(){return new jb(E(We))}(),i},providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function A(...e){return Ue(e,To(e))}typeof window<"u"&&window;class st extends Te{constructor(n){super(),this._value=n}get value(){return this.getValue()}_subscribe(n){const t=super._subscribe(n);return!t.closed&&n.next(this._value),t}getValue(){const{hasError:n,thrownError:t,_value:i}=this;if(n)throw t;return this._throwIfClosed(),i}next(n){super.next(this._value=n)}}const $l=No(e=>function(){e(this),this.name="EmptyError",this.message="no elements in sequence"}),{isArray:IP}=Array,{getPrototypeOf:RP,prototype:AP,keys:xP}=Object;const{isArray:PP}=Array;function uh(e){return L(n=>function FP(e,n){return PP(n)?e(...n):e(n)}(e,n))}function Ul(...e){const n=To(e),t=fa(e),{args:i,keys:r}=function Ub(e){if(1===e.length){const n=e[0];if(IP(n))return{args:n,keys:null};if(function kP(e){return e&&"object"==typeof e&&RP(e)===AP}(n)){const t=xP(n);return{args:t.map(i=>n[i]),keys:t}}}return{args:e,keys:null}}(e);if(0===i.length)return Ue([],n);const o=new he(function LP(e,n,t=Gn){return i=>{zb(n,()=>{const{length:r}=e,o=new Array(r);let s=r,a=r;for(let l=0;l<r;l++)zb(n,()=>{const c=Ue(e[l],n);let u=!1;c.subscribe(_e(i,d=>{o[l]=d,u||(u=!0,a--),a||i.next(t(o.slice()))},()=>{--s||i.complete()}))},i)},i)}}(i,n,r?s=>function Gb(e,n){return e.reduce((t,i,r)=>(t[i]=n[r],t),{})}(r,s):Gn));return t?o.pipe(uh(t)):o}function zb(e,n,t){e?zn(t,e,n):n()}function Os(...e){return function VP(){return Dr(1)}()(Ue(e,To(e)))}function Wb(e){return new he(n=>{ct(e()).subscribe(n)})}function Ms(e,n){const t=te(e)?e:()=>e,i=r=>r.error(t());return new he(n?r=>n.schedule(i,0,r):i)}function dh(){return Pe((e,n)=>{let t=null;e._refCount++;const i=_e(n,void 0,void 0,void 0,()=>{if(!e||e._refCount<=0||0<--e._refCount)return void(t=null);const r=e._connection,o=t;t=null,r&&(!o||r===o)&&r.unsubscribe(),n.unsubscribe()});e.subscribe(i),i.closed||(t=e.connect())})}class qb extends he{constructor(n,t){super(),this.source=n,this.subjectFactory=t,this._subject=null,this._refCount=0,this._connection=null,Jp(n)&&(this.lift=n.lift)}_subscribe(n){return this.getSubject().subscribe(n)}getSubject(){const n=this._subject;return(!n||n.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;const{_connection:n}=this;this._subject=this._connection=null,n?.unsubscribe()}connect(){let n=this._connection;if(!n){n=this._connection=new Vt;const t=this.getSubject();n.add(this.source.subscribe(_e(t,void 0,()=>{this._teardown(),t.complete()},i=>{this._teardown(),t.error(i)},()=>this._teardown()))),n.closed&&(this._connection=null,n=Vt.EMPTY)}return n}refCount(){return dh()(this)}}function on(e,n){return Pe((t,i)=>{let r=null,o=0,s=!1;const a=()=>s&&!r&&i.complete();t.subscribe(_e(i,l=>{r?.unsubscribe();let c=0;const u=o++;ct(e(l,u)).subscribe(r=_e(i,d=>i.next(n?n(l,d,u,c++):d),()=>{r=null,a()}))},()=>{s=!0,a()}))})}function ut(e){return e<=0?()=>ln:Pe((n,t)=>{let i=0;n.subscribe(_e(t,r=>{++i<=e&&(t.next(r),e<=i&&t.complete())}))})}function bt(e,n){return Pe((t,i)=>{let r=0;t.subscribe(_e(i,o=>e.call(n,o,r++)&&i.next(o)))})}function zl(e){return Pe((n,t)=>{let i=!1;n.subscribe(_e(t,r=>{i=!0,t.next(r)},()=>{i||t.next(e),t.complete()}))})}function Yb(e=BP){return Pe((n,t)=>{let i=!1;n.subscribe(_e(t,r=>{i=!0,t.next(r)},()=>i?t.complete():t.error(e())))})}function BP(){return new $l}function Ni(e,n){const t=arguments.length>=2;return i=>i.pipe(e?bt((r,o)=>e(r,o,i)):Gn,ut(1),t?zl(n):Yb(()=>new $l))}function Si(e,n){return te(n)?Ke(e,n,1):Ke(e,1)}function at(e,n,t){const i=te(e)||n||t?{next:e,error:n,complete:t}:e;return i?Pe((r,o)=>{var s;null===(s=i.subscribe)||void 0===s||s.call(i);let a=!0;r.subscribe(_e(o,l=>{var c;null===(c=i.next)||void 0===c||c.call(i,l),o.next(l)},()=>{var l;a=!1,null===(l=i.complete)||void 0===l||l.call(i),o.complete()},l=>{var c;a=!1,null===(c=i.error)||void 0===c||c.call(i,l),o.error(l)},()=>{var l,c;a&&(null===(l=i.unsubscribe)||void 0===l||l.call(i)),null===(c=i.finalize)||void 0===c||c.call(i)}))}):Gn}function Ti(e){return Pe((n,t)=>{let o,i=null,r=!1;i=n.subscribe(_e(t,void 0,void 0,s=>{o=ct(e(s,Ti(e)(n))),i?(i.unsubscribe(),i=null,o.subscribe(t)):r=!0})),r&&(i.unsubscribe(),i=null,o.subscribe(t))})}function jP(e,n,t,i,r){return(o,s)=>{let a=t,l=n,c=0;o.subscribe(_e(s,u=>{const d=c++;l=a?e(l,u,d):(a=!0,u),i&&s.next(l)},r&&(()=>{a&&s.next(l),s.complete()})))}}function Zb(e,n){return Pe(jP(e,n,arguments.length>=2,!0))}function fh(e){return e<=0?()=>ln:Pe((n,t)=>{let i=[];n.subscribe(_e(t,r=>{i.push(r),e<i.length&&i.shift()},()=>{for(const r of i)t.next(r);t.complete()},void 0,()=>{i=null}))})}function Kb(e,n){const t=arguments.length>=2;return i=>i.pipe(e?bt((r,o)=>e(r,o,i)):Gn,fh(1),t?zl(n):Yb(()=>new $l))}function hh(e){return Pe((n,t)=>{try{n.subscribe(t)}finally{t.add(e)}})}
/**
       * @license Angular v14.3.0
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Y="primary",Is=Symbol("RouteTitle");class $P{constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){const t=this.params[n];return Array.isArray(t)?t[0]:t}return null}getAll(n){if(this.has(n)){const t=this.params[n];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}}function co(e){return new $P(e)}function UP(e,n,t){const i=t.path.split("/");if(i.length>e.length||"full"===t.pathMatch&&(n.hasChildren()||i.length<e.length))return null;const r={};for(let o=0;o<i.length;o++){const s=i[o],a=e[o];if(s.startsWith(":"))r[s.substring(1)]=a;else if(s!==a.path)return null}return{consumed:e.slice(0,i.length),posParams:r}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Bn(e,n){const t=e?Object.keys(e):void 0,i=n?Object.keys(n):void 0;if(!t||!i||t.length!=i.length)return!1;let r;for(let o=0;o<t.length;o++)if(r=t[o],!Qb(e[r],n[r]))return!1;return!0}function Qb(e,n){if(Array.isArray(e)&&Array.isArray(n)){if(e.length!==n.length)return!1;const t=[...e].sort(),i=[...n].sort();return t.every((r,o)=>i[o]===r)}return e===n}function Xb(e){return Array.prototype.concat.apply([],e)}function eD(e){return e.length>0?e[e.length-1]:null}function dt(e,n){for(const t in e)e.hasOwnProperty(t)&&n(e[t],t)}function Oi(e){return Kd(e)?e:ss(e)?Ue(Promise.resolve(e)):A(e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const WP={exact:function iD(e,n,t){if(!ir(e.segments,n.segments)||!Wl(e.segments,n.segments,t)||e.numberOfChildren!==n.numberOfChildren)return!1;for(const i in n.children)if(!e.children[i]||!iD(e.children[i],n.children[i],t))return!1;return!0},subset:rD},tD={exact:function qP(e,n){return Bn(e,n)},subset:function YP(e,n){return Object.keys(n).length<=Object.keys(e).length&&Object.keys(n).every(t=>Qb(e[t],n[t]))},ignored:()=>!0};function nD(e,n,t){return WP[t.paths](e.root,n.root,t.matrixParams)&&tD[t.queryParams](e.queryParams,n.queryParams)&&!("exact"===t.fragment&&e.fragment!==n.fragment)}function rD(e,n,t){return oD(e,n,n.segments,t)}function oD(e,n,t,i){if(e.segments.length>t.length){const r=e.segments.slice(0,t.length);return!(!ir(r,t)||n.hasChildren()||!Wl(r,t,i))}if(e.segments.length===t.length){if(!ir(e.segments,t)||!Wl(e.segments,t,i))return!1;for(const r in n.children)if(!e.children[r]||!rD(e.children[r],n.children[r],i))return!1;return!0}{const r=t.slice(0,e.segments.length),o=t.slice(e.segments.length);return!!(ir(e.segments,r)&&Wl(e.segments,r,i)&&e.children[Y])&&oD(e.children[Y],n,o,i)}}function Wl(e,n,t){return n.every((i,r)=>tD[t](e[r].parameters,i.parameters))}class nr{constructor(n,t,i){this.root=n,this.queryParams=t,this.fragment=i}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=co(this.queryParams)),this._queryParamMap}toString(){return JP.serialize(this)}}class K{constructor(n,t){this.segments=n,this.children=t,this.parent=null,dt(t,(i,r)=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return ql(this)}}class Rs{constructor(n,t){this.path=n,this.parameters=t}get parameterMap(){return this._parameterMap||(this._parameterMap=co(this.parameters)),this._parameterMap}toString(){return cD(this)}}function ir(e,n){return e.length===n.length&&e.every((t,i)=>t.path===n[i].path)}let sD=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=M({token:e,factory:function(){return new gh},providedIn:"root"}),e})();class gh{parse(n){const t=new sF(n);return new nr(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(n){const t=`/${As(n.root,!0)}`,i=function eF(e){const n=Object.keys(e).map(t=>{const i=e[t];return Array.isArray(i)?i.map(r=>`${Yl(t)}=${Yl(r)}`).join("&"):`${Yl(t)}=${Yl(i)}`}).filter(t=>!!t);return n.length?`?${n.join("&")}`:""}(n.queryParams);return`${t}${i}${"string"==typeof n.fragment?`#${function QP(e){return encodeURI(e)}(n.fragment)}`:""}`}}const JP=new gh;function ql(e){return e.segments.map(n=>cD(n)).join("/")}function As(e,n){if(!e.hasChildren())return ql(e);if(n){const t=e.children[Y]?As(e.children[Y],!1):"",i=[];return dt(e.children,(r,o)=>{o!==Y&&i.push(`${o}:${As(r,!1)}`)}),i.length>0?`${t}(${i.join("//")})`:t}{const t=function KP(e,n){let t=[];return dt(e.children,(i,r)=>{r===Y&&(t=t.concat(n(i,r)))}),dt(e.children,(i,r)=>{r!==Y&&(t=t.concat(n(i,r)))}),t}(e,(i,r)=>r===Y?[As(e.children[Y],!1)]:[`${r}:${As(i,!1)}`]);return 1===Object.keys(e.children).length&&null!=e.children[Y]?`${ql(e)}/${t[0]}`:`${ql(e)}/(${t.join("//")})`}}function aD(e){return encodeURIComponent(e).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Yl(e){return aD(e).replace(/%3B/gi,";")}function mh(e){return aD(e).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Zl(e){return decodeURIComponent(e)}function lD(e){return Zl(e.replace(/\+/g,"%20"))}function cD(e){return`${mh(e.path)}${function XP(e){return Object.keys(e).map(n=>`;${mh(n)}=${mh(e[n])}`).join("")}(e.parameters)}`}const tF=/^[^\/()?;=#]+/;function Kl(e){const n=e.match(tF);return n?n[0]:""}const nF=/^[^=?&#]+/,rF=/^[^&#]+/;class sF{constructor(n){this.url=n,this.remaining=n}parseRootSegment(){return this.consumeOptional("/"),""===this.remaining||this.peekStartsWith("?")||this.peekStartsWith("#")?new K([],{}):new K([],this.parseChildren())}parseQueryParams(){const n={};if(this.consumeOptional("?"))do{this.parseQueryParam(n)}while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(""===this.remaining)return{};this.consumeOptional("/");const n=[];for(this.peekStartsWith("(")||n.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),n.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1)),(n.length>0||Object.keys(t).length>0)&&(i[Y]=new K(n,t)),i}parseSegment(){const n=Kl(this.remaining);if(""===n&&this.peekStartsWith(";"))throw new w(4009,!1);return this.capture(n),new Rs(Zl(n),this.parseMatrixParams())}parseMatrixParams(){const n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){const t=Kl(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){const r=Kl(this.remaining);r&&(i=r,this.capture(i))}n[Zl(t)]=Zl(i)}parseQueryParam(n){const t=function iF(e){const n=e.match(nF);return n?n[0]:""}(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){const s=function oF(e){const n=e.match(rF);return n?n[0]:""}(this.remaining);s&&(i=s,this.capture(i))}const r=lD(t),o=lD(i);if(n.hasOwnProperty(r)){let s=n[r];Array.isArray(s)||(s=[s],n[r]=s),s.push(o)}else n[r]=o}parseParens(n){const t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){const i=Kl(this.remaining),r=this.remaining[i.length];if("/"!==r&&")"!==r&&";"!==r)throw new w(4010,!1);let o;i.indexOf(":")>-1?(o=i.slice(0,i.indexOf(":")),this.capture(o),this.capture(":")):n&&(o=Y);const s=this.parseChildren();t[o]=1===Object.keys(s).length?s[Y]:new K([],s),this.consumeOptional("//")}return t}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return!!this.peekStartsWith(n)&&(this.remaining=this.remaining.substring(n.length),!0)}capture(n){if(!this.consumeOptional(n))throw new w(4011,!1)}}function _h(e){return e.segments.length>0?new K([],{[Y]:e}):e}function Jl(e){const n={};for(const i of Object.keys(e.children)){const o=Jl(e.children[i]);(o.segments.length>0||o.hasChildren())&&(n[i]=o)}return function aF(e){if(1===e.numberOfChildren&&e.children[Y]){const n=e.children[Y];return new K(e.segments.concat(n.segments),n.children)}return e}(new K(e.segments,n))}function rr(e){return e instanceof nr}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function uF(e,n,t,i,r){if(0===t.length)return uo(n.root,n.root,n.root,i,r);const o=function fD(e){if("string"==typeof e[0]&&1===e.length&&"/"===e[0])return new dD(!0,0,e);let n=0,t=!1;const i=e.reduce((r,o,s)=>{if("object"==typeof o&&null!=o){if(o.outlets){const a={};return dt(o.outlets,(l,c)=>{a[c]="string"==typeof l?l.split("/"):l}),[...r,{outlets:a}]}if(o.segmentPath)return[...r,o.segmentPath]}return"string"!=typeof o?[...r,o]:0===s?(o.split("/").forEach((a,l)=>{0==l&&"."===a||(0==l&&""===a?t=!0:".."===a?n++:""!=a&&r.push(a))}),r):[...r,o]},[]);return new dD(t,n,i)}(t);return o.toRoot()?uo(n.root,n.root,new K([],{}),i,r):function s(l){const c=function fF(e,n,t,i){if(e.isAbsolute)return new fo(n.root,!0,0);if(-1===i)return new fo(t,t===n.root,0);return function hD(e,n,t){let i=e,r=n,o=t;for(;o>r;){if(o-=r,i=i.parent,!i)throw new w(4005,!1);r=i.segments.length}return new fo(i,!1,r-o)}(t,i+(xs(e.commands[0])?0:1),e.numberOfDoubleDots)}(o,n,e.snapshot?._urlSegment,l),u=c.processChildren?Ps(c.segmentGroup,c.index,o.commands):yh(c.segmentGroup,c.index,o.commands);return uo(n.root,c.segmentGroup,u,i,r)}(e.snapshot?._lastPathIndex)}function xs(e){return"object"==typeof e&&null!=e&&!e.outlets&&!e.segmentPath}function ks(e){return"object"==typeof e&&null!=e&&e.outlets}function uo(e,n,t,i,r){let s,o={};i&&dt(i,(l,c)=>{o[c]=Array.isArray(l)?l.map(u=>`${u}`):`${l}`}),s=e===n?t:uD(e,n,t);const a=_h(Jl(s));return new nr(a,o,r)}function uD(e,n,t){const i={};return dt(e.children,(r,o)=>{i[o]=r===n?t:uD(r,n,t)}),new K(e.segments,i)}class dD{constructor(n,t,i){if(this.isAbsolute=n,this.numberOfDoubleDots=t,this.commands=i,n&&i.length>0&&xs(i[0]))throw new w(4003,!1);const r=i.find(ks);if(r&&r!==eD(i))throw new w(4004,!1)}toRoot(){return this.isAbsolute&&1===this.commands.length&&"/"==this.commands[0]}}class fo{constructor(n,t,i){this.segmentGroup=n,this.processChildren=t,this.index=i}}function yh(e,n,t){if(e||(e=new K([],{})),0===e.segments.length&&e.hasChildren())return Ps(e,n,t);const i=function pF(e,n,t){let i=0,r=n;const o={match:!1,pathIndex:0,commandIndex:0};for(;r<e.segments.length;){if(i>=t.length)return o;const s=e.segments[r],a=t[i];if(ks(a))break;const l=`${a}`,c=i<t.length-1?t[i+1]:null;if(r>0&&void 0===l)break;if(l&&c&&"object"==typeof c&&void 0===c.outlets){if(!gD(l,c,s))return o;i+=2}else{if(!gD(l,{},s))return o;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}(e,n,t),r=t.slice(i.commandIndex);if(i.match&&i.pathIndex<e.segments.length){const o=new K(e.segments.slice(0,i.pathIndex),{});return o.children[Y]=new K(e.segments.slice(i.pathIndex),e.children),Ps(o,0,r)}return i.match&&0===r.length?new K(e.segments,{}):i.match&&!e.hasChildren()?bh(e,n,t):i.match?Ps(e,0,r):bh(e,n,t)}function Ps(e,n,t){if(0===t.length)return new K(e.segments,{});{const i=function hF(e){return ks(e[0])?e[0].outlets:{[Y]:e}}(t),r={};return dt(i,(o,s)=>{"string"==typeof o&&(o=[o]),null!==o&&(r[s]=yh(e.children[s],n,o))}),dt(e.children,(o,s)=>{void 0===i[s]&&(r[s]=o)}),new K(e.segments,r)}}function bh(e,n,t){const i=e.segments.slice(0,n);let r=0;for(;r<t.length;){const o=t[r];if(ks(o)){const l=gF(o.outlets);return new K(i,l)}if(0===r&&xs(t[0])){i.push(new Rs(e.segments[n].path,pD(t[0]))),r++;continue}const s=ks(o)?o.outlets[Y]:`${o}`,a=r<t.length-1?t[r+1]:null;s&&a&&xs(a)?(i.push(new Rs(s,pD(a))),r+=2):(i.push(new Rs(s,{})),r++)}return new K(i,{})}function gF(e){const n={};return dt(e,(t,i)=>{"string"==typeof t&&(t=[t]),null!==t&&(n[i]=bh(new K([],{}),0,t))}),n}function pD(e){const n={};return dt(e,(t,i)=>n[i]=`${t}`),n}function gD(e,n,t){return e==t.path&&Bn(n,t.parameters)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ci{constructor(n,t){this.id=n,this.url=t}}class Dh extends ci{constructor(n,t,i="imperative",r=null){super(n,t),this.type=0,this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}}class or extends ci{constructor(n,t,i){super(n,t),this.urlAfterRedirects=i,this.type=1}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}}class Ql extends ci{constructor(n,t,i,r){super(n,t),this.reason=i,this.code=r,this.type=2}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}}class mD extends ci{constructor(n,t,i,r){super(n,t),this.error=i,this.target=r,this.type=3}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}}class mF extends ci{constructor(n,t,i,r){super(n,t),this.urlAfterRedirects=i,this.state=r,this.type=4}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class _F extends ci{constructor(n,t,i,r){super(n,t),this.urlAfterRedirects=i,this.state=r,this.type=7}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class vF extends ci{constructor(n,t,i,r,o){super(n,t),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=o,this.type=8}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}}class yF extends ci{constructor(n,t,i,r){super(n,t),this.urlAfterRedirects=i,this.state=r,this.type=5}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class bF extends ci{constructor(n,t,i,r){super(n,t),this.urlAfterRedirects=i,this.state=r,this.type=6}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class DF{constructor(n){this.route=n,this.type=9}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}}class CF{constructor(n){this.route=n,this.type=10}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}}class wF{constructor(n){this.snapshot=n,this.type=11}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class EF{constructor(n){this.snapshot=n,this.type=12}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class NF{constructor(n){this.snapshot=n,this.type=13}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class SF{constructor(n){this.snapshot=n,this.type=14}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class _D{constructor(n,t,i){this.routerEvent=n,this.position=t,this.anchor=i,this.type=15}toString(){return`Scroll(anchor: '${this.anchor}', position: '${this.position?`${this.position[0]}, ${this.position[1]}`:null}')`}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class vD{constructor(n){this._root=n}get root(){return this._root.value}parent(n){const t=this.pathFromRoot(n);return t.length>1?t[t.length-2]:null}children(n){const t=Ch(n,this._root);return t?t.children.map(i=>i.value):[]}firstChild(n){const t=Ch(n,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(n){const t=wh(n,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==n)}pathFromRoot(n){return wh(n,this._root).map(t=>t.value)}}function Ch(e,n){if(e===n.value)return n;for(const t of n.children){const i=Ch(e,t);if(i)return i}return null}function wh(e,n){if(e===n.value)return[n];for(const t of n.children){const i=wh(e,t);if(i.length)return i.unshift(n),i}return[]}class ui{constructor(n,t){this.value=n,this.children=t}toString(){return`TreeNode(${this.value})`}}function ho(e){const n={};return e&&e.children.forEach(t=>n[t.value.outlet]=t),n
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}class yD extends vD{constructor(n,t){super(n),this.snapshot=t,Eh(this,n)}toString(){return this.snapshot.toString()}}function bD(e,n){const t=function OF(e,n){const s=new Xl([],{},{},"",{},Y,n,null,e.root,-1,{});return new CD("",new ui(s,[]))}(e,n),i=new st([new Rs("",{})]),r=new st({}),o=new st({}),s=new st({}),a=new st(""),l=new sr(i,r,s,a,o,Y,n,t.root);return l.snapshot=t.root,new yD(new ui(l,[]),t)}class sr{constructor(n,t,i,r,o,s,a,l){this.url=n,this.params=t,this.queryParams=i,this.fragment=r,this.data=o,this.outlet=s,this.component=a,this.title=this.data?.pipe(L(c=>c[Is]))??A(void 0),this._futureSnapshot=l}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=this.params.pipe(L(n=>co(n)))),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=this.queryParams.pipe(L(n=>co(n)))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}}function DD(e,n="emptyOnly"){const t=e.pathFromRoot;let i=0;if("always"!==n)for(i=t.length-1;i>=1;){const r=t[i],o=t[i-1];if(r.routeConfig&&""===r.routeConfig.path)i--;else{if(o.component)break;i--}}return function MF(e){return e.reduce((n,t)=>({params:{...n.params,...t.params},data:{...n.data,...t.data},resolve:{...t.data,...n.resolve,...t.routeConfig?.data,...t._resolvedData}}),{params:{},data:{},resolve:{}})}(t.slice(i))}class Xl{constructor(n,t,i,r,o,s,a,l,c,u,d,f){this.url=n,this.params=t,this.queryParams=i,this.fragment=r,this.data=o,this.outlet=s,this.component=a,this.title=this.data?.[Is],this.routeConfig=l,this._urlSegment=c,this._lastPathIndex=u,this._correctedLastPathIndex=f??u,this._resolve=d}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=co(this.params)),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=co(this.queryParams)),this._queryParamMap}toString(){return`Route(url:'${this.url.map(i=>i.toString()).join("/")}', path:'${this.routeConfig?this.routeConfig.path:""}')`}}class CD extends vD{constructor(n,t){super(t),this.url=n,Eh(this,t)}toString(){return wD(this._root)}}function Eh(e,n){n.value._routerState=e,n.children.forEach(t=>Eh(e,t))}function wD(e){const n=e.children.length>0?` { ${e.children.map(wD).join(", ")} } `:"";return`${e.value}${n}`}function Nh(e){if(e.snapshot){const n=e.snapshot,t=e._futureSnapshot;e.snapshot=t,Bn(n.queryParams,t.queryParams)||e.queryParams.next(t.queryParams),n.fragment!==t.fragment&&e.fragment.next(t.fragment),Bn(n.params,t.params)||e.params.next(t.params),function GP(e,n){if(e.length!==n.length)return!1;for(let t=0;t<e.length;++t)if(!Bn(e[t],n[t]))return!1;return!0}(n.url,t.url)||e.url.next(t.url),Bn(n.data,t.data)||e.data.next(t.data)}else e.snapshot=e._futureSnapshot,e.data.next(e._futureSnapshot.data)}function Sh(e,n){const t=Bn(e.params,n.params)&&function ZP(e,n){return ir(e,n)&&e.every((t,i)=>Bn(t.parameters,n[i].parameters))}(e.url,n.url);return t&&!(!e.parent!=!n.parent)&&(!e.parent||Sh(e.parent,n.parent))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Fs(e,n,t){if(t&&e.shouldReuseRoute(n.value,t.value.snapshot)){const i=t.value;i._futureSnapshot=n.value;const r=function RF(e,n,t){return n.children.map(i=>{for(const r of t.children)if(e.shouldReuseRoute(i.value,r.value.snapshot))return Fs(e,i,r);return Fs(e,i)})}(e,n,t);return new ui(i,r)}{if(e.shouldAttach(n.value)){const o=e.retrieve(n.value);if(null!==o){const s=o.route;return s.value._futureSnapshot=n.value,s.children=n.children.map(a=>Fs(e,a)),s}}const i=function AF(e){return new sr(new st(e.url),new st(e.params),new st(e.queryParams),new st(e.fragment),new st(e.data),e.outlet,e.component,e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(n.value),r=n.children.map(o=>Fs(e,o));return new ui(i,r)}}const Th="ngNavigationCancelingError";function ED(e,n){const{redirectTo:t,navigationBehaviorOptions:i}=rr(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,r=ND(!1,0,n);return r.url=t,r.navigationBehaviorOptions=i,r}function ND(e,n,t){const i=new Error("NavigationCancelingError: "+(e||""));return i[Th]=!0,i.cancellationCode=n,t&&(i.url=t),i}function SD(e){return TD(e)&&rr(e.url)}function TD(e){return e&&e[Th]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class xF{constructor(){this.outlet=null,this.route=null,this.resolver=null,this.injector=null,this.children=new Ls,this.attachRef=null}}let Ls=(()=>{class e{constructor(){this.contexts=new Map}onChildOutletCreated(t,i){const r=this.getOrCreateContext(t);r.outlet=i,this.contexts.set(t,r)}onChildOutletDestroyed(t){const i=this.getContext(t);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){const t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let i=this.getContext(t);return i||(i=new xF,this.contexts.set(t,i)),i}getContext(t){return this.contexts.get(t)||null}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const ec=!1;let Oh=(()=>{class e{constructor(t,i,r,o,s){this.parentContexts=t,this.location=i,this.changeDetector=o,this.environmentInjector=s,this.activated=null,this._activatedRoute=null,this.activateEvents=new G,this.deactivateEvents=new G,this.attachEvents=new G,this.detachEvents=new G,this.name=r||Y,t.onChildOutletCreated(this.name,this)}ngOnDestroy(){this.parentContexts.getContext(this.name)?.outlet===this&&this.parentContexts.onChildOutletDestroyed(this.name)}ngOnInit(){if(!this.activated){const t=this.parentContexts.getContext(this.name);t&&t.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new w(4012,ec);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new w(4012,ec);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new w(4012,ec);this.location.detach();const t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,i){this.activated=t,this._activatedRoute=i,this.location.insert(t.hostView),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){const t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,i){if(this.isActivated)throw new w(4013,ec);this._activatedRoute=t;const r=this.location,s=t._futureSnapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,l=new kF(t,a,r.injector);if(i&&function PF(e){return!!e.resolveComponentFactory}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(i)){const c=i.resolveComponentFactory(s);this.activated=r.createComponent(c,r.length,l)}else this.activated=r.createComponent(s,{index:r.length,injector:l,environmentInjector:i??this.environmentInjector});this.changeDetector.markForCheck(),this.activateEvents.emit(this.activated.instance)}}return e.\u0275fac=function(t){return new(t||e)(_(Ls),_(vn),function Gi(e){return function jN(e,n){if("class"===n)return e.classes;if("style"===n)return e.styles;const t=e.attrs;if(t){const i=t.length;let r=0;for(;r<i;){const o=t[r];if(Hg(o))break;if(0===o)r+=2;else if("number"==typeof o)for(r++;r<i&&"string"==typeof t[r];)r++;else{if(o===n)return t[r+1];r+=2}}}return null}(Qe(),e)}("name"),_(oi),_(yi))},e.\u0275dir=N({type:e,selectors:[["router-outlet"]],outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0}),e})();class kF{constructor(n,t,i){this.route=n,this.childContexts=t,this.parent=i}get(n,t){return n===sr?this.route:n===Ls?this.childContexts:this.parent.get(n,t)}}let Mh=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=Je({type:e,selectors:[["ng-component"]],standalone:!0,features:[Fy],decls:1,vars:0,template:function(t,i){1&t&&Ki(0,"router-outlet")},dependencies:[Oh],encapsulation:2}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function OD(e,n){return e.providers&&!e._injector&&(e._injector=fl(e.providers,n,`Route: ${e.path}`)),e._injector??n}function Rh(e){const n=e.children&&e.children.map(Rh),t=n?{...e,children:n}:{...e};return!t.component&&!t.loadComponent&&(n||t.loadChildren)&&t.outlet&&t.outlet!==Y&&(t.component=Mh),t}function sn(e){return e.outlet||Y}function MD(e,n){const t=e.filter(i=>sn(i)===n);return t.push(...e.filter(i=>sn(i)!==n)),t}function Vs(e){if(!e)return null;if(e.routeConfig?._injector)return e.routeConfig._injector;for(let n=e.parent;n;n=n.parent){const t=n.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class jF{constructor(n,t,i,r){this.routeReuseStrategy=n,this.futureState=t,this.currState=i,this.forwardEvent=r}activate(n){const t=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,i,n),Nh(this.futureState.root),this.activateChildRoutes(t,i,n)}deactivateChildRoutes(n,t,i){const r=ho(t);n.children.forEach(o=>{const s=o.value.outlet;this.deactivateRoutes(o,r[s],i),delete r[s]}),dt(r,(o,s)=>{this.deactivateRouteAndItsChildren(o,i)})}deactivateRoutes(n,t,i){const r=n.value,o=t?t.value:null;if(r===o)if(r.component){const s=i.getContext(r.outlet);s&&this.deactivateChildRoutes(n,t,s.children)}else this.deactivateChildRoutes(n,t,i);else o&&this.deactivateRouteAndItsChildren(t,i)}deactivateRouteAndItsChildren(n,t){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,t):this.deactivateRouteAndOutlet(n,t)}detachAndStoreRouteSubtree(n,t){const i=t.getContext(n.value.outlet),r=i&&n.value.component?i.children:t,o=ho(n);for(const s of Object.keys(o))this.deactivateRouteAndItsChildren(o[s],r);if(i&&i.outlet){const s=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:s,route:n,contexts:a})}}deactivateRouteAndOutlet(n,t){const i=t.getContext(n.value.outlet),r=i&&n.value.component?i.children:t,o=ho(n);for(const s of Object.keys(o))this.deactivateRouteAndItsChildren(o[s],r);i&&i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated(),i.attachRef=null,i.resolver=null,i.route=null)}activateChildRoutes(n,t,i){const r=ho(t);n.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],i),this.forwardEvent(new SF(o.value.snapshot))}),n.children.length&&this.forwardEvent(new EF(n.value.snapshot))}activateRoutes(n,t,i){const r=n.value,o=t?t.value:null;if(Nh(r),r===o)if(r.component){const s=i.getOrCreateContext(r.outlet);this.activateChildRoutes(n,t,s.children)}else this.activateChildRoutes(n,t,i);else if(r.component){const s=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){const a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),s.children.onOutletReAttached(a.contexts),s.attachRef=a.componentRef,s.route=a.route.value,s.outlet&&s.outlet.attach(a.componentRef,a.route.value),Nh(a.route.value),this.activateChildRoutes(n,null,s.children)}else{const a=Vs(r.snapshot),l=a?.get(es)??null;s.attachRef=null,s.route=r,s.resolver=l,s.injector=a,s.outlet&&s.outlet.activateWith(r,s.injector),this.activateChildRoutes(n,null,s.children)}}else this.activateChildRoutes(n,null,i)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ID{constructor(n){this.path=n,this.route=this.path[this.path.length-1]}}class tc{constructor(n,t){this.component=n,this.route=t}}function HF(e,n,t){const i=e._root;return Bs(i,n?n._root:null,t,[i.value])}function po(e,n){const t=Symbol(),i=n.get(e,t);return i===t?"function"!=typeof e||function UE(e){return null!==ga(e)}(e)?n.get(e):e:i}function Bs(e,n,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){const o=ho(n);return e.children.forEach(s=>{(function UF(e,n,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){const o=e.value,s=n?n.value:null,a=t?t.getContext(e.value.outlet):null;if(s&&o.routeConfig===s.routeConfig){const l=function GF(e,n,t){if("function"==typeof t)return t(e,n);switch(t){case"pathParamsChange":return!ir(e.url,n.url);case"pathParamsOrQueryParamsChange":return!ir(e.url,n.url)||!Bn(e.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Sh(e,n)||!Bn(e.queryParams,n.queryParams);default:return!Sh(e,n)}}(s,o,o.routeConfig.runGuardsAndResolvers);l?r.canActivateChecks.push(new ID(i)):(o.data=s.data,o._resolvedData=s._resolvedData),Bs(e,n,o.component?a?a.children:null:t,i,r),l&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new tc(a.outlet.component,s))}else s&&js(n,a,r),r.canActivateChecks.push(new ID(i)),Bs(e,null,o.component?a?a.children:null:t,i,r)})(s,o[s.value.outlet],t,i.concat([s.value]),r),delete o[s.value.outlet]}),dt(o,(s,a)=>js(s,t.getContext(a),r)),r}function js(e,n,t){const i=ho(e),r=e.value;dt(i,(o,s)=>{js(o,r.component?n?n.children.getContext(s):null:n,t)}),t.canDeactivateChecks.push(new tc(r.component&&n&&n.outlet&&n.outlet.isActivated?n.outlet.component:null,r))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Hs(e){return"function"==typeof e}function Ah(e){return e instanceof $l||"EmptyError"===e?.name}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const nc=Symbol("INITIAL_VALUE");function go(){return on(e=>Ul(e.map(n=>n.pipe(ut(1),function Gl(...e){const n=To(e);return Pe((t,i)=>{(n?Os(e,t,n):Os(e,t)).subscribe(i)})}(nc)))).pipe(L(n=>{for(const t of n)if(!0!==t){if(t===nc)return nc;if(!1===t||t instanceof nr)return t}return!0}),bt(n=>n!==nc),ut(1)))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function RD(e){return function cE(...e){return Yp(e)}(at(n=>{if(rr(n))throw ED(0,n)}),L(n=>!0===n))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const xh={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function AD(e,n,t,i,r){const o=kh(e,n,t);return o.matched?function aL(e,n,t,i){const r=n.canMatch;return r&&0!==r.length?A(r.map(s=>{const a=po(s,e);return Oi(function KF(e){return e&&Hs(e.canMatch)}(a)?a.canMatch(n,t):e.runInContext(()=>a(n,t)))})).pipe(go(),RD()):A(!0)}(i=OD(n,i),n,t).pipe(L(s=>!0===s?o:{...xh})):A(o)}function kh(e,n,t){if(""===n.path)return"full"===n.pathMatch&&(e.hasChildren()||t.length>0)?{...xh}:{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};const r=(n.matcher||UP)(t,e,n);if(!r)return{...xh};const o={};dt(r.posParams,(a,l)=>{o[l]=a.path});const s=r.consumed.length>0?{...o,...r.consumed[r.consumed.length-1].parameters}:o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:s,positionalParamSegments:r.posParams??{}}}function ic(e,n,t,i,r="corrected"){if(t.length>0&&function uL(e,n,t){return t.some(i=>rc(e,n,i)&&sn(i)!==Y)}(e,t,i)){const s=new K(n,function cL(e,n,t,i){const r={};r[Y]=i,i._sourceSegment=e,i._segmentIndexShift=n.length;for(const o of t)if(""===o.path&&sn(o)!==Y){const s=new K([],{});s._sourceSegment=e,s._segmentIndexShift=n.length,r[sn(o)]=s}return r}(e,n,i,new K(t,e.children)));return s._sourceSegment=e,s._segmentIndexShift=n.length,{segmentGroup:s,slicedSegments:[]}}if(0===t.length&&function dL(e,n,t){return t.some(i=>rc(e,n,i))}(e,t,i)){const s=new K(e.segments,function lL(e,n,t,i,r,o){const s={};for(const a of i)if(rc(e,t,a)&&!r[sn(a)]){const l=new K([],{});l._sourceSegment=e,l._segmentIndexShift="legacy"===o?e.segments.length:n.length,s[sn(a)]=l}return{...r,...s}}(e,n,t,i,e.children,r));return s._sourceSegment=e,s._segmentIndexShift=n.length,{segmentGroup:s,slicedSegments:t}}const o=new K(e.segments,e.children);return o._sourceSegment=e,o._segmentIndexShift=n.length,{segmentGroup:o,slicedSegments:t}}function rc(e,n,t){return(!(e.hasChildren()||n.length>0)||"full"!==t.pathMatch)&&""===t.path}function xD(e,n,t,i){return!!(sn(e)===i||i!==Y&&rc(n,t,e))&&("**"===e.path||kh(n,e,t).matched)}function kD(e,n,t){return 0===n.length&&!e.children[t]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const oc=!1;class sc{constructor(n){this.segmentGroup=n||null}}class PD{constructor(n){this.urlTree=n}}function $s(e){return Ms(new sc(e))}function FD(e){return Ms(new PD(e))}class gL{constructor(n,t,i,r,o){this.injector=n,this.configLoader=t,this.urlSerializer=i,this.urlTree=r,this.config=o,this.allowRedirects=!0}apply(){const n=ic(this.urlTree.root,[],[],this.config).segmentGroup,t=new K(n.segments,n.children);return this.expandSegmentGroup(this.injector,this.config,t,Y).pipe(L(o=>this.createUrlTree(Jl(o),this.urlTree.queryParams,this.urlTree.fragment))).pipe(Ti(o=>{if(o instanceof PD)return this.allowRedirects=!1,this.match(o.urlTree);throw o instanceof sc?this.noMatchError(o):o}))}match(n){return this.expandSegmentGroup(this.injector,this.config,n.root,Y).pipe(L(r=>this.createUrlTree(Jl(r),n.queryParams,n.fragment))).pipe(Ti(r=>{throw r instanceof sc?this.noMatchError(r):r}))}noMatchError(n){return new w(4002,oc)}createUrlTree(n,t,i){const r=_h(n);return new nr(r,t,i)}expandSegmentGroup(n,t,i,r){return 0===i.segments.length&&i.hasChildren()?this.expandChildren(n,t,i).pipe(L(o=>new K([],o))):this.expandSegment(n,i,t,i.segments,r,!0)}expandChildren(n,t,i){const r=[];for(const o of Object.keys(i.children))"primary"===o?r.unshift(o):r.push(o);return Ue(r).pipe(Si(o=>{const s=i.children[o],a=MD(t,o);return this.expandSegmentGroup(n,a,s,o).pipe(L(l=>({segment:l,outlet:o})))}),Zb((o,s)=>(o[s.outlet]=s.segment,o),{}),Kb())}expandSegment(n,t,i,r,o,s){return Ue(i).pipe(Si(a=>this.expandSegmentAgainstRoute(n,t,i,a,r,o,s).pipe(Ti(c=>{if(c instanceof sc)return A(null);throw c}))),Ni(a=>!!a),Ti((a,l)=>{if(Ah(a))return kD(t,r,o)?A(new K([],{})):$s(t);throw a}))}expandSegmentAgainstRoute(n,t,i,r,o,s,a){return xD(r,t,o,s)?void 0===r.redirectTo?this.matchSegmentAgainstRoute(n,t,r,o,s):a&&this.allowRedirects?this.expandSegmentAgainstRouteUsingRedirect(n,t,i,r,o,s):$s(t):$s(t)}expandSegmentAgainstRouteUsingRedirect(n,t,i,r,o,s){return"**"===r.path?this.expandWildCardWithParamsAgainstRouteUsingRedirect(n,i,r,s):this.expandRegularSegmentAgainstRouteUsingRedirect(n,t,i,r,o,s)}expandWildCardWithParamsAgainstRouteUsingRedirect(n,t,i,r){const o=this.applyRedirectCommands([],i.redirectTo,{});return i.redirectTo.startsWith("/")?FD(o):this.lineralizeSegments(i,o).pipe(Ke(s=>{const a=new K(s,{});return this.expandSegment(n,a,t,s,r,!1)}))}expandRegularSegmentAgainstRouteUsingRedirect(n,t,i,r,o,s){const{matched:a,consumedSegments:l,remainingSegments:c,positionalParamSegments:u}=kh(t,r,o);if(!a)return $s(t);const d=this.applyRedirectCommands(l,r.redirectTo,u);return r.redirectTo.startsWith("/")?FD(d):this.lineralizeSegments(r,d).pipe(Ke(f=>this.expandSegment(n,t,i,f.concat(c),s,!1)))}matchSegmentAgainstRoute(n,t,i,r,o){return"**"===i.path?(n=OD(i,n),i.loadChildren?(i._loadedRoutes?A({routes:i._loadedRoutes,injector:i._loadedInjector}):this.configLoader.loadChildren(n,i)).pipe(L(a=>(i._loadedRoutes=a.routes,i._loadedInjector=a.injector,new K(r,{})))):A(new K(r,{}))):AD(t,i,r,n).pipe(on(({matched:s,consumedSegments:a,remainingSegments:l})=>s?this.getChildConfig(n=i._injector??n,i,r).pipe(Ke(u=>{const d=u.injector??n,f=u.routes,{segmentGroup:h,slicedSegments:p}=ic(t,a,l,f),g=new K(h.segments,h.children);if(0===p.length&&g.hasChildren())return this.expandChildren(d,f,g).pipe(L(y=>new K(a,y)));if(0===f.length&&0===p.length)return A(new K(a,{}));const m=sn(i)===o;return this.expandSegment(d,g,f,p,m?Y:o,!0).pipe(L(b=>new K(a.concat(b.segments),b.children)))})):$s(t)))}getChildConfig(n,t,i){return t.children?A({routes:t.children,injector:n}):t.loadChildren?void 0!==t._loadedRoutes?A({routes:t._loadedRoutes,injector:t._loadedInjector}):function sL(e,n,t,i){const r=n.canLoad;return void 0===r||0===r.length?A(!0):A(r.map(s=>{const a=po(s,e);return Oi(function WF(e){return e&&Hs(e.canLoad)}(a)?a.canLoad(n,t):e.runInContext(()=>a(n,t)))})).pipe(go(),RD())}(n,t,i).pipe(Ke(r=>r?this.configLoader.loadChildren(n,t).pipe(at(o=>{t._loadedRoutes=o.routes,t._loadedInjector=o.injector})):function hL(e){return Ms(ND(oc,3))}())):A({routes:[],injector:n})}lineralizeSegments(n,t){let i=[],r=t.root;for(;;){if(i=i.concat(r.segments),0===r.numberOfChildren)return A(i);if(r.numberOfChildren>1||!r.children[Y])return Ms(new w(4e3,oc));r=r.children[Y]}}applyRedirectCommands(n,t,i){return this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),n,i)}applyRedirectCreateUrlTree(n,t,i,r){const o=this.createSegmentGroup(n,t.root,i,r);return new nr(o,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(n,t){const i={};return dt(n,(r,o)=>{if("string"==typeof r&&r.startsWith(":")){const a=r.substring(1);i[o]=t[a]}else i[o]=r}),i}createSegmentGroup(n,t,i,r){const o=this.createSegments(n,t.segments,i,r);let s={};return dt(t.children,(a,l)=>{s[l]=this.createSegmentGroup(n,a,i,r)}),new K(o,s)}createSegments(n,t,i,r){return t.map(o=>o.path.startsWith(":")?this.findPosParam(n,o,r):this.findOrReturn(o,i))}findPosParam(n,t,i){const r=i[t.path.substring(1)];if(!r)throw new w(4001,oc);return r}findOrReturn(n,t){let i=0;for(const r of t){if(r.path===n.path)return t.splice(i),r;i++}return n}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class _L{}class bL{constructor(n,t,i,r,o,s,a,l){this.injector=n,this.rootComponentType=t,this.config=i,this.urlTree=r,this.url=o,this.paramsInheritanceStrategy=s,this.relativeLinkResolution=a,this.urlSerializer=l}recognize(){const n=ic(this.urlTree.root,[],[],this.config.filter(t=>void 0===t.redirectTo),this.relativeLinkResolution).segmentGroup;return this.processSegmentGroup(this.injector,this.config,n,Y).pipe(L(t=>{if(null===t)return null;const i=new Xl([],Object.freeze({}),Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,{},Y,this.rootComponentType,null,this.urlTree.root,-1,{}),r=new ui(i,t),o=new CD(this.url,r);return this.inheritParamsAndData(o._root),o}))}inheritParamsAndData(n){const t=n.value,i=DD(t,this.paramsInheritanceStrategy);t.params=Object.freeze(i.params),t.data=Object.freeze(i.data),n.children.forEach(r=>this.inheritParamsAndData(r))}processSegmentGroup(n,t,i,r){return 0===i.segments.length&&i.hasChildren()?this.processChildren(n,t,i):this.processSegment(n,t,i,i.segments,r)}processChildren(n,t,i){return Ue(Object.keys(i.children)).pipe(Si(r=>{const o=i.children[r],s=MD(t,r);return this.processSegmentGroup(n,s,o,r)}),Zb((r,o)=>r&&o?(r.push(...o),r):null),function HP(e,n=!1){return Pe((t,i)=>{let r=0;t.subscribe(_e(i,o=>{const s=e(o,r++);(s||n)&&i.next(o),!s&&i.complete()}))})}(r=>null!==r),zl(null),Kb(),L(r=>{if(null===r)return null;const o=LD(r);return function DL(e){e.sort((n,t)=>n.value.outlet===Y?-1:t.value.outlet===Y?1:n.value.outlet.localeCompare(t.value.outlet))}(o),o}))}processSegment(n,t,i,r,o){return Ue(t).pipe(Si(s=>this.processSegmentAgainstRoute(s._injector??n,s,i,r,o)),Ni(s=>!!s),Ti(s=>{if(Ah(s))return kD(i,r,o)?A([]):A(null);throw s}))}processSegmentAgainstRoute(n,t,i,r,o){if(t.redirectTo||!xD(t,i,r,o))return A(null);let s;if("**"===t.path){const a=r.length>0?eD(r).parameters:{},l=BD(i)+r.length;s=A({snapshot:new Xl(r,a,Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,HD(t),sn(t),t.component??t._loadedComponent??null,t,VD(i),l,$D(t),l),consumedSegments:[],remainingSegments:[]})}else s=AD(i,t,r,n).pipe(L(({matched:a,consumedSegments:l,remainingSegments:c,parameters:u})=>{if(!a)return null;const d=BD(i)+l.length;return{snapshot:new Xl(l,u,Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,HD(t),sn(t),t.component??t._loadedComponent??null,t,VD(i),d,$D(t),d),consumedSegments:l,remainingSegments:c}}));return s.pipe(on(a=>{if(null===a)return A(null);const{snapshot:l,consumedSegments:c,remainingSegments:u}=a;n=t._injector??n;const d=t._loadedInjector??n,f=function CL(e){return e.children?e.children:e.loadChildren?e._loadedRoutes:[]}(t),{segmentGroup:h,slicedSegments:p}=ic(i,c,u,f.filter(m=>void 0===m.redirectTo),this.relativeLinkResolution);if(0===p.length&&h.hasChildren())return this.processChildren(d,f,h).pipe(L(m=>null===m?null:[new ui(l,m)]));if(0===f.length&&0===p.length)return A([new ui(l,[])]);const g=sn(t)===o;return this.processSegment(d,f,h,p,g?Y:o).pipe(L(m=>null===m?null:[new ui(l,m)]))}))}}function wL(e){const n=e.value.routeConfig;return n&&""===n.path&&void 0===n.redirectTo}function LD(e){const n=[],t=new Set;for(const i of e){if(!wL(i)){n.push(i);continue}const r=n.find(o=>i.value.routeConfig===o.value.routeConfig);void 0!==r?(r.children.push(...i.children),t.add(r)):n.push(i)}for(const i of t){const r=LD(i.children);n.push(new ui(i.value,r))}return n.filter(i=>!t.has(i))}function VD(e){let n=e;for(;n._sourceSegment;)n=n._sourceSegment;return n}function BD(e){let n=e,t=n._segmentIndexShift??0;for(;n._sourceSegment;)n=n._sourceSegment,t+=n._segmentIndexShift??0;return t-1}function HD(e){return e.data||{}}function $D(e){return e.resolve||{}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function SL(e,n){return Ke(t=>{const{targetSnapshot:i,guards:{canActivateChecks:r}}=t;if(!r.length)return A(t);let o=0;return Ue(r).pipe(Si(s=>function TL(e,n,t,i){const r=e.routeConfig,o=e._resolve;return void 0!==r?.title&&!UD(r)&&(o[Is]=r.title),function OL(e,n,t,i){const r=function ML(e){return[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}(e);if(0===r.length)return A({});const o={};return Ue(r).pipe(Ke(s=>function IL(e,n,t,i){const r=Vs(n)??i,o=po(e,r);return Oi(o.resolve?o.resolve(n,t):r.runInContext(()=>o(n,t)))}(e[s],n,t,i).pipe(Ni(),at(a=>{o[s]=a}))),fh(1),function Jb(e){return L(()=>e)}(o),Ti(s=>Ah(s)?ln:Ms(s)))}(o,e,n,i).pipe(L(s=>(e._resolvedData=s,e.data=DD(e,t).resolve,r&&UD(r)&&(e.data[Is]=r.title),null)))}(s.route,i,e,n)),at(()=>o++),fh(1),Ke(s=>o===r.length?A(t):ln))})}function UD(e){return"string"==typeof e.title||null===e.title}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ph(e){return on(n=>{const t=e(n);return t?Ue(t).pipe(L(()=>n)):A(n)})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let GD=(()=>{class e{buildTitle(t){let i,r=t.root;for(;void 0!==r;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(o=>o.outlet===Y);return i}getResolvedTitleForRoute(t){return t.data[Is]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=M({token:e,factory:function(){return Be(zD)},providedIn:"root"}),e})(),zD=(()=>{class e extends GD{constructor(t){super(),this.title=t}updateTitle(t){const i=this.buildTitle(t);void 0!==i&&this.title.setTitle(i)}}return e.\u0275fac=function(t){return new(t||e)(E(jb))},e.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class RL{}class xL extends class AL{shouldDetach(n){return!1}store(n,t){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,t){return n.routeConfig===t.routeConfig}}{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const lc=new R("",{providedIn:"root",factory:()=>({})}),Fh=new R("ROUTES");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Lh=(()=>{class e{constructor(t,i){this.injector=t,this.compiler=i,this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap}loadComponent(t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return A(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);const i=Oi(t.loadComponent()).pipe(at(o=>{this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=o}),hh(()=>{this.componentLoaders.delete(t)})),r=new qb(i,()=>new Te).pipe(dh());return this.componentLoaders.set(t,r),r}loadChildren(t,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return A({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);const o=this.loadModuleFactoryOrRoutes(i.loadChildren).pipe(L(a=>{this.onLoadEndListener&&this.onLoadEndListener(i);let l,c,u=!1;Array.isArray(a)?c=a:(l=a.create(t).injector,c=Xb(l.get(Fh,[],k.Self|k.Optional)));return{routes:c.map(Rh),injector:l}}),hh(()=>{this.childrenLoaders.delete(i)})),s=new qb(o,()=>new Te).pipe(dh());return this.childrenLoaders.set(i,s),s}loadModuleFactoryOrRoutes(t){return Oi(t()).pipe(Ke(i=>i instanceof ky||Array.isArray(i)?A(i):Ue(this.compiler.compileModuleAsync(i))))}}return e.\u0275fac=function(t){return new(t||e)(E(_t),E(Sf))},e.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class PL{}class FL{shouldProcessUrl(n){return!0}extract(n){return n}merge(n,t){return n}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function LL(e){throw e}function VL(e,n,t){return n.parse("/")}const BL={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},jL={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function qD(){const e=Be(sD),n=Be(Ls),t=Be(Sl),i=Be(_t),r=Be(Sf),o=Be(Fh,{optional:!0})??[],s=Be(lc,{optional:!0})??{},a=Be(zD),l=Be(GD,{optional:!0}),c=Be(PL,{optional:!0}),u=Be(RL,{optional:!0}),d=new lt(null,e,n,t,i,r,Xb(o));return c&&(d.urlHandlingStrategy=c),u&&(d.routeReuseStrategy=u),d.titleStrategy=l??a,function HL(e,n){e.errorHandler&&(n.errorHandler=e.errorHandler),e.malformedUriErrorHandler&&(n.malformedUriErrorHandler=e.malformedUriErrorHandler),e.onSameUrlNavigation&&(n.onSameUrlNavigation=e.onSameUrlNavigation),e.paramsInheritanceStrategy&&(n.paramsInheritanceStrategy=e.paramsInheritanceStrategy),e.relativeLinkResolution&&(n.relativeLinkResolution=e.relativeLinkResolution),e.urlUpdateStrategy&&(n.urlUpdateStrategy=e.urlUpdateStrategy),e.canceledNavigationResolution&&(n.canceledNavigationResolution=e.canceledNavigationResolution)}(s,d),d}let lt=(()=>{class e{constructor(t,i,r,o,s,a,l){this.rootComponentType=t,this.urlSerializer=i,this.rootContexts=r,this.location=o,this.config=l,this.lastSuccessfulNavigation=null,this.currentNavigation=null,this.disposed=!1,this.navigationId=0,this.currentPageId=0,this.isNgZoneEnabled=!1,this.events=new Te,this.errorHandler=LL,this.malformedUriErrorHandler=VL,this.navigated=!1,this.lastSuccessfulId=-1,this.afterPreactivation=()=>A(void 0),this.urlHandlingStrategy=new FL,this.routeReuseStrategy=new xL,this.onSameUrlNavigation="ignore",this.paramsInheritanceStrategy="emptyOnly",this.urlUpdateStrategy="deferred",this.relativeLinkResolution="corrected",this.canceledNavigationResolution="replace",this.configLoader=s.get(Lh),this.configLoader.onLoadEndListener=f=>this.triggerEvent(new CF(f)),this.configLoader.onLoadStartListener=f=>this.triggerEvent(new DF(f)),this.ngModule=s.get(Xi),this.console=s.get(mA);const d=s.get(be);this.isNgZoneEnabled=d instanceof be&&be.isInAngularZone(),this.resetConfig(l),this.currentUrlTree=function zP(){return new nr(new K([],{}),{},null)}(),this.rawUrlTree=this.currentUrlTree,this.browserUrlTree=this.currentUrlTree,this.routerState=bD(this.currentUrlTree,this.rootComponentType),this.transitions=new st({id:0,targetPageId:0,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,extractedUrl:this.urlHandlingStrategy.extract(this.currentUrlTree),urlAfterRedirects:this.urlHandlingStrategy.extract(this.currentUrlTree),rawUrl:this.currentUrlTree,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:"imperative",restoredState:null,currentSnapshot:this.routerState.snapshot,targetSnapshot:null,currentRouterState:this.routerState,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.navigations=this.setupNavigations(this.transitions),this.processNavigations()}get browserPageId(){return this.location.getState()?.\u0275routerPageId}setupNavigations(t){const i=this.events;return t.pipe(bt(r=>0!==r.id),L(r=>({...r,extractedUrl:this.urlHandlingStrategy.extract(r.rawUrl)})),on(r=>{let o=!1,s=!1;return A(r).pipe(at(a=>{this.currentNavigation={id:a.id,initialUrl:a.rawUrl,extractedUrl:a.extractedUrl,trigger:a.source,extras:a.extras,previousNavigation:this.lastSuccessfulNavigation?{...this.lastSuccessfulNavigation,previousNavigation:null}:null}}),on(a=>{const l=this.browserUrlTree.toString(),c=!this.navigated||a.extractedUrl.toString()!==l||l!==this.currentUrlTree.toString();if(("reload"===this.onSameUrlNavigation||c)&&this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))return YD(a.source)&&(this.browserUrlTree=a.extractedUrl),A(a).pipe(on(d=>{const f=this.transitions.getValue();return i.next(new Dh(d.id,this.serializeUrl(d.extractedUrl),d.source,d.restoredState)),f!==this.transitions.getValue()?ln:Promise.resolve(d)}),function mL(e,n,t,i){return on(r=>function pL(e,n,t,i,r){return new gL(e,n,t,i,r).apply()}(e,n,t,r.extractedUrl,i).pipe(L(o=>({...r,urlAfterRedirects:o}))))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(this.ngModule.injector,this.configLoader,this.urlSerializer,this.config),at(d=>{this.currentNavigation={...this.currentNavigation,finalUrl:d.urlAfterRedirects},r.urlAfterRedirects=d.urlAfterRedirects}),function NL(e,n,t,i,r,o){return Ke(s=>function yL(e,n,t,i,r,o,s="emptyOnly",a="legacy"){return new bL(e,n,t,i,r,s,a,o).recognize().pipe(on(l=>null===l?function vL(e){return new he(n=>n.error(e))}(new _L):A(l)))}(e,n,t,s.urlAfterRedirects,i.serialize(s.urlAfterRedirects),i,r,o).pipe(L(a=>({...s,targetSnapshot:a}))))}(this.ngModule.injector,this.rootComponentType,this.config,this.urlSerializer,this.paramsInheritanceStrategy,this.relativeLinkResolution),at(d=>{if(r.targetSnapshot=d.targetSnapshot,"eager"===this.urlUpdateStrategy){if(!d.extras.skipLocationChange){const h=this.urlHandlingStrategy.merge(d.urlAfterRedirects,d.rawUrl);this.setBrowserUrl(h,d)}this.browserUrlTree=d.urlAfterRedirects}const f=new mF(d.id,this.serializeUrl(d.extractedUrl),this.serializeUrl(d.urlAfterRedirects),d.targetSnapshot);i.next(f)}));if(c&&this.rawUrlTree&&this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)){const{id:f,extractedUrl:h,source:p,restoredState:g,extras:m}=a,v=new Dh(f,this.serializeUrl(h),p,g);i.next(v);const b=bD(h,this.rootComponentType).snapshot;return A(r={...a,targetSnapshot:b,urlAfterRedirects:h,extras:{...m,skipLocationChange:!1,replaceUrl:!1}})}return this.rawUrlTree=a.rawUrl,a.resolve(null),ln}),at(a=>{const l=new _F(a.id,this.serializeUrl(a.extractedUrl),this.serializeUrl(a.urlAfterRedirects),a.targetSnapshot);this.triggerEvent(l)}),L(a=>r={...a,guards:HF(a.targetSnapshot,a.currentSnapshot,this.rootContexts)}),function QF(e,n){return Ke(t=>{const{targetSnapshot:i,currentSnapshot:r,guards:{canActivateChecks:o,canDeactivateChecks:s}}=t;return 0===s.length&&0===o.length?A({...t,guardsResult:!0}):function XF(e,n,t,i){return Ue(e).pipe(Ke(r=>function oL(e,n,t,i,r){const o=n&&n.routeConfig?n.routeConfig.canDeactivate:null;return o&&0!==o.length?A(o.map(a=>{const l=Vs(n)??r,c=po(a,l);return Oi(function ZF(e){return e&&Hs(e.canDeactivate)}(c)?c.canDeactivate(e,n,t,i):l.runInContext(()=>c(e,n,t,i))).pipe(Ni())})).pipe(go()):A(!0)}(r.component,r.route,t,n,i)),Ni(r=>!0!==r,!0))}(s,i,r,e).pipe(Ke(a=>a&&function zF(e){return"boolean"==typeof e}(a)?function eL(e,n,t,i){return Ue(n).pipe(Si(r=>Os(function nL(e,n){return null!==e&&n&&n(new wF(e)),A(!0)}(r.route.parent,i),function tL(e,n){return null!==e&&n&&n(new NF(e)),A(!0)}(r.route,i),function rL(e,n,t){const i=n[n.length-1],o=n.slice(0,n.length-1).reverse().map(s=>function $F(e){const n=e.routeConfig?e.routeConfig.canActivateChild:null;return n&&0!==n.length?{node:e,guards:n}:null}(s)).filter(s=>null!==s).map(s=>Wb(()=>A(s.guards.map(l=>{const c=Vs(s.node)??t,u=po(l,c);return Oi(function YF(e){return e&&Hs(e.canActivateChild)}(u)?u.canActivateChild(i,e):c.runInContext(()=>u(i,e))).pipe(Ni())})).pipe(go())));return A(o).pipe(go())}(e,r.path,t),function iL(e,n,t){const i=n.routeConfig?n.routeConfig.canActivate:null;if(!i||0===i.length)return A(!0);const r=i.map(o=>Wb(()=>{const s=Vs(n)??t,a=po(o,s);return Oi(function qF(e){return e&&Hs(e.canActivate)}(a)?a.canActivate(n,e):s.runInContext(()=>a(n,e))).pipe(Ni())}));return A(r).pipe(go())}(e,r.route,t))),Ni(r=>!0!==r,!0))}(i,o,e,n):A(a)),L(a=>({...t,guardsResult:a})))})}(this.ngModule.injector,a=>this.triggerEvent(a)),at(a=>{if(r.guardsResult=a.guardsResult,rr(a.guardsResult))throw ED(0,a.guardsResult);const l=new vF(a.id,this.serializeUrl(a.extractedUrl),this.serializeUrl(a.urlAfterRedirects),a.targetSnapshot,!!a.guardsResult);this.triggerEvent(l)}),bt(a=>!!a.guardsResult||(this.restoreHistory(a),this.cancelNavigationTransition(a,"",3),!1)),Ph(a=>{if(a.guards.canActivateChecks.length)return A(a).pipe(at(l=>{const c=new yF(l.id,this.serializeUrl(l.extractedUrl),this.serializeUrl(l.urlAfterRedirects),l.targetSnapshot);this.triggerEvent(c)}),on(l=>{let c=!1;return A(l).pipe(SL(this.paramsInheritanceStrategy,this.ngModule.injector),at({next:()=>c=!0,complete:()=>{c||(this.restoreHistory(l),this.cancelNavigationTransition(l,"",2))}}))}),at(l=>{const c=new bF(l.id,this.serializeUrl(l.extractedUrl),this.serializeUrl(l.urlAfterRedirects),l.targetSnapshot);this.triggerEvent(c)}))}),Ph(a=>{const l=c=>{const u=[];c.routeConfig?.loadComponent&&!c.routeConfig._loadedComponent&&u.push(this.configLoader.loadComponent(c.routeConfig).pipe(at(d=>{c.component=d}),L(()=>{})));for(const d of c.children)u.push(...l(d));return u};return Ul(l(a.targetSnapshot.root)).pipe(zl(),ut(1))}),Ph(()=>this.afterPreactivation()),L(a=>{const l=function IF(e,n,t){const i=Fs(e,n._root,t?t._root:void 0);return new yD(i,n)}(this.routeReuseStrategy,a.targetSnapshot,a.currentRouterState);return r={...a,targetRouterState:l}}),at(a=>{this.currentUrlTree=a.urlAfterRedirects,this.rawUrlTree=this.urlHandlingStrategy.merge(a.urlAfterRedirects,a.rawUrl),this.routerState=a.targetRouterState,"deferred"===this.urlUpdateStrategy&&(a.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,a),this.browserUrlTree=a.urlAfterRedirects)}),((e,n,t)=>L(i=>(new jF(n,i.targetRouterState,i.currentRouterState,t).activate(e),i)))(this.rootContexts,this.routeReuseStrategy,a=>this.triggerEvent(a)),at({next(){o=!0},complete(){o=!0}}),hh(()=>{o||s||this.cancelNavigationTransition(r,"",1),this.currentNavigation?.id===r.id&&(this.currentNavigation=null)}),Ti(a=>{if(s=!0,TD(a)){SD(a)||(this.navigated=!0,this.restoreHistory(r,!0));const l=new Ql(r.id,this.serializeUrl(r.extractedUrl),a.message,a.cancellationCode);if(i.next(l),SD(a)){const c=this.urlHandlingStrategy.merge(a.url,this.rawUrlTree),u={skipLocationChange:r.extras.skipLocationChange,replaceUrl:"eager"===this.urlUpdateStrategy||YD(r.source)};this.scheduleNavigation(c,"imperative",null,u,{resolve:r.resolve,reject:r.reject,promise:r.promise})}else r.resolve(!1)}else{this.restoreHistory(r,!0);const l=new mD(r.id,this.serializeUrl(r.extractedUrl),a,r.targetSnapshot??void 0);i.next(l);try{r.resolve(this.errorHandler(a))}catch(c){r.reject(c)}}return ln}))}))}resetRootComponentType(t){this.rootComponentType=t,this.routerState.root.component=this.rootComponentType}setTransition(t){this.transitions.next({...this.transitions.value,...t})}initialNavigation(){this.setUpLocationChangeListener(),0===this.navigationId&&this.navigateByUrl(this.location.path(!0),{replaceUrl:!0})}setUpLocationChangeListener(){this.locationSubscription||(this.locationSubscription=this.location.subscribe(t=>{const i="popstate"===t.type?"popstate":"hashchange";"popstate"===i&&setTimeout(()=>{const r={replaceUrl:!0},o=t.state?.navigationId?t.state:null;if(o){const a={...o};delete a.navigationId,delete a.\u0275routerPageId,0!==Object.keys(a).length&&(r.state=a)}const s=this.parseUrl(t.url);this.scheduleNavigation(s,i,o,r)},0)}))}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.currentNavigation}triggerEvent(t){this.events.next(t)}resetConfig(t){this.config=t.map(Rh),this.navigated=!1,this.lastSuccessfulId=-1}ngOnDestroy(){this.dispose()}dispose(){this.transitions.complete(),this.locationSubscription&&(this.locationSubscription.unsubscribe(),this.locationSubscription=void 0),this.disposed=!0}createUrlTree(t,i={}){const{relativeTo:r,queryParams:o,fragment:s,queryParamsHandling:a,preserveFragment:l}=i,c=r||this.routerState.root,u=l?this.currentUrlTree.fragment:s;let d=null;switch(a){case"merge":d={...this.currentUrlTree.queryParams,...o};break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=o||null}return null!==d&&(d=this.removeEmptyProps(d)),uF(c,this.currentUrlTree,t,d,u??null)}navigateByUrl(t,i={skipLocationChange:!1}){const r=rr(t)?t:this.parseUrl(t),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,"imperative",null,i)}navigate(t,i={skipLocationChange:!1}){return function $L(e){for(let n=0;n<e.length;n++){if(null==e[n])throw new w(4008,false)}}(t),this.navigateByUrl(this.createUrlTree(t,i),i)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){let i;try{i=this.urlSerializer.parse(t)}catch(r){i=this.malformedUriErrorHandler(r,this.urlSerializer,t)}return i}isActive(t,i){let r;if(r=!0===i?{...BL}:!1===i?{...jL}:i,rr(t))return nD(this.currentUrlTree,t,r);const o=this.parseUrl(t);return nD(this.currentUrlTree,o,r)}removeEmptyProps(t){return Object.keys(t).reduce((i,r)=>{const o=t[r];return null!=o&&(i[r]=o),i},{})}processNavigations(){this.navigations.subscribe(t=>{this.navigated=!0,this.lastSuccessfulId=t.id,this.currentPageId=t.targetPageId,this.events.next(new or(t.id,this.serializeUrl(t.extractedUrl),this.serializeUrl(this.currentUrlTree))),this.lastSuccessfulNavigation=this.currentNavigation,this.titleStrategy?.updateTitle(this.routerState.snapshot),t.resolve(!0)},t=>{this.console.warn(`Unhandled Navigation Error: ${t}`)})}scheduleNavigation(t,i,r,o,s){if(this.disposed)return Promise.resolve(!1);let a,l,c;s?(a=s.resolve,l=s.reject,c=s.promise):c=new Promise((f,h)=>{a=f,l=h});const u=++this.navigationId;let d;return"computed"===this.canceledNavigationResolution?(0===this.currentPageId&&(r=this.location.getState()),d=r&&r.\u0275routerPageId?r.\u0275routerPageId:o.replaceUrl||o.skipLocationChange?this.browserPageId??0:(this.browserPageId??0)+1):d=0,this.setTransition({id:u,targetPageId:d,source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.rawUrlTree,rawUrl:t,extras:o,resolve:a,reject:l,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(f=>Promise.reject(f))}setBrowserUrl(t,i){const r=this.urlSerializer.serialize(t),o={...i.extras.state,...this.generateNgRouterState(i.id,i.targetPageId)};this.location.isCurrentPathEqualTo(r)||i.extras.replaceUrl?this.location.replaceState(r,"",o):this.location.go(r,"",o)}restoreHistory(t,i=!1){if("computed"===this.canceledNavigationResolution){const r=this.currentPageId-t.targetPageId;"popstate"!==t.source&&"eager"!==this.urlUpdateStrategy&&this.currentUrlTree!==this.currentNavigation?.finalUrl||0===r?this.currentUrlTree===this.currentNavigation?.finalUrl&&0===r&&(this.resetState(t),this.browserUrlTree=t.currentUrlTree,this.resetUrlToCurrentUrlTree()):this.location.historyGo(r)}else"replace"===this.canceledNavigationResolution&&(i&&this.resetState(t),this.resetUrlToCurrentUrlTree())}resetState(t){this.routerState=t.currentRouterState,this.currentUrlTree=t.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t.rawUrl)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}cancelNavigationTransition(t,i,r){const o=new Ql(t.id,this.serializeUrl(t.extractedUrl),i,r);this.triggerEvent(o),t.resolve(!1)}generateNgRouterState(t,i){return"computed"===this.canceledNavigationResolution?{navigationId:t,\u0275routerPageId:i}:{navigationId:t}}}return e.\u0275fac=function(t){Cd()},e.\u0275prov=M({token:e,factory:function(){return qD()},providedIn:"root"}),e})();function YD(e){return"imperative"!==e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class ZD{}let zL=(()=>{class e{constructor(t,i,r,o,s){this.router=t,this.injector=r,this.preloadingStrategy=o,this.loader=s}setUpPreloading(){this.subscription=this.router.events.pipe(bt(t=>t instanceof or),Si(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(t,i){const r=[];for(const o of i){o.providers&&!o._injector&&(o._injector=fl(o.providers,t,`Route: ${o.path}`));const s=o._injector??t,a=o._loadedInjector??s;o.loadChildren&&!o._loadedRoutes&&void 0===o.canLoad||o.loadComponent&&!o._loadedComponent?r.push(this.preloadConfig(s,o)):(o.children||o._loadedRoutes)&&r.push(this.processRoutes(a,o.children??o._loadedRoutes))}return Ue(r).pipe(Dr())}preloadConfig(t,i){return this.preloadingStrategy.preload(i,()=>{let r;r=i.loadChildren&&void 0===i.canLoad?this.loader.loadChildren(t,i):A(null);const o=r.pipe(Ke(s=>null===s?A(void 0):(i._loadedRoutes=s.routes,i._loadedInjector=s.injector,this.processRoutes(s.injector??t,s.routes))));return i.loadComponent&&!i._loadedComponent?Ue([o,this.loader.loadComponent(i)]).pipe(Dr()):o})}}return e.\u0275fac=function(t){return new(t||e)(E(lt),E(Sf),E(yi),E(ZD),E(Lh))},e.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const jh=new R("");let KD=(()=>{class e{constructor(t,i,r={}){this.router=t,this.viewportScroller=i,this.options=r,this.lastId=0,this.lastSource="imperative",this.restoredId=0,this.store={},r.scrollPositionRestoration=r.scrollPositionRestoration||"disabled",r.anchorScrolling=r.anchorScrolling||"disabled"}init(){"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.router.events.subscribe(t=>{t instanceof Dh?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=t.navigationTrigger,this.restoredId=t.restoredState?t.restoredState.navigationId:0):t instanceof or&&(this.lastId=t.id,this.scheduleScrollEvent(t,this.router.parseUrl(t.urlAfterRedirects).fragment))})}consumeScrollEvents(){return this.router.events.subscribe(t=>{t instanceof _D&&(t.position?"top"===this.options.scrollPositionRestoration?this.viewportScroller.scrollToPosition([0,0]):"enabled"===this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition(t.position):t.anchor&&"enabled"===this.options.anchorScrolling?this.viewportScroller.scrollToAnchor(t.anchor):"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(t,i){this.router.triggerEvent(new _D(t,"popstate"===this.lastSource?this.store[this.restoredId]:null,i))}ngOnDestroy(){this.routerEventsSubscription&&this.routerEventsSubscription.unsubscribe(),this.scrollEventsSubscription&&this.scrollEventsSubscription.unsubscribe()}}return e.\u0275fac=function(t){Cd()},e.\u0275prov=M({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function mo(e,n){return{\u0275kind:e,\u0275providers:n}}function Hh(e){return[{provide:Fh,multi:!0,useValue:e}]}function QD(){const e=Be(_t);return n=>{const t=e.get(ys);if(n!==t.components[0])return;const i=e.get(lt),r=e.get(XD);1===e.get($h)&&i.initialNavigation(),e.get(e1,null,k.Optional)?.setUpPreloading(),e.get(jh,null,k.Optional)?.init(),i.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.unsubscribe())}}const XD=new R("",{factory:()=>new Te}),$h=new R("",{providedIn:"root",factory:()=>1});const e1=new R("");function ZL(e){return mo(0,[{provide:e1,useExisting:zL},{provide:ZD,useExisting:e}])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const t1=new R("ROUTER_FORROOT_GUARD"),KL=[Sl,{provide:sD,useClass:gh},{provide:lt,useFactory:qD},Ls,{provide:sr,useFactory:function JD(e){return e.routerState.root},deps:[lt]},Lh];function JL(){return new I0("Router",lt)}let n1=(()=>{class e{constructor(t){}static forRoot(t,i){return{ngModule:e,providers:[KL,[],Hh(t),{provide:t1,useFactory:tV,deps:[[lt,new Go,new zo]]},{provide:lc,useValue:i||{}},i?.useHash?{provide:tr,useClass:rx}:{provide:tr,useClass:tb},{provide:jh,useFactory:()=>{const e=Be(lt),n=Be(wk),t=Be(lc);return t.scrollOffset&&n.setOffset(t.scrollOffset),new KD(e,n,t)}},i?.preloadingStrategy?ZL(i.preloadingStrategy).\u0275providers:[],{provide:I0,multi:!0,useFactory:JL},i?.initialNavigation?nV(i):[],[{provide:i1,useFactory:QD},{provide:w0,multi:!0,useExisting:i1}]]}}static forChild(t){return{ngModule:e,providers:[Hh(t)]}}}return e.\u0275fac=function(t){return new(t||e)(E(t1,8))},e.\u0275mod=le({type:e}),e.\u0275inj=oe({imports:[Mh]}),e})();function tV(e){return"guarded"}function nV(e){return["disabled"===e.initialNavigation?mo(3,[{provide:_l,multi:!0,useFactory:()=>{const n=Be(lt);return()=>{n.setUpLocationChangeListener()}}},{provide:$h,useValue:2}]).\u0275providers:[],"enabledBlocking"===e.initialNavigation?mo(2,[{provide:$h,useValue:0},{provide:_l,multi:!0,deps:[_t],useFactory:n=>{const t=n.get(nx,Promise.resolve());let i=!1;return()=>t.then(()=>new Promise(o=>{const s=n.get(lt),a=n.get(XD);(function r(o){n.get(lt).events.pipe(bt(a=>a instanceof or||a instanceof Ql||a instanceof mD),L(a=>a instanceof or||a instanceof Ql&&(0===a.code||1===a.code)&&null),bt(a=>null!==a),ut(1)).subscribe(()=>{o()})})(()=>{o(!0),i=!0}),s.afterPreactivation=()=>(o(!0),i||a.closed?A(void 0):a),s.initialNavigation()}))}}]).\u0275providers:[]]}const i1=new R("");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let rV=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=Je({type:e,selectors:[["app-about"]],decls:2,vars:0,template:function(t,i){1&t&&($(0,"p"),yt(1,"about works!"),W())}}),e})(),oV=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=Je({type:e,selectors:[["app-metrology"]],decls:2,vars:0,template:function(t,i){1&t&&($(0,"p"),yt(1,"metrology works!"),W())}}),e})(),r1=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=Je({type:e,selectors:[["app-locomotive-input"]],decls:2,vars:0,template:function(t,i){1&t&&($(0,"p"),yt(1,"locomotive-input works!"),W())}}),e})(),sV=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=Je({type:e,selectors:[["app-single-check"]],decls:2,vars:0,template:function(t,i){1&t&&($(0,"p"),yt(1,"single-check works!"),W())}}),e})(),aV=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=Je({type:e,selectors:[["app-full-check"]],decls:2,vars:0,template:function(t,i){1&t&&($(0,"p"),yt(1,"full-check works!"),W())}}),e})(),lV=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=Je({type:e,selectors:[["app-result"]],decls:2,vars:0,template:function(t,i){1&t&&($(0,"p"),yt(1,"result works!"),W())}}),e})(),cV=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=Je({type:e,selectors:[["app-print-form"]],decls:2,vars:0,template:function(t,i){1&t&&($(0,"p"),yt(1,"print-form works!"),W())}}),e})();
/**
       * @license Angular v14.3.0
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class o1{}class s1{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class di{constructor(n){this.normalizedNames=new Map,this.lazyUpdate=null,n?this.lazyInit="string"==typeof n?()=>{this.headers=new Map,n.split("\n").forEach(t=>{const i=t.indexOf(":");if(i>0){const r=t.slice(0,i),o=r.toLowerCase(),s=t.slice(i+1).trim();this.maybeSetNormalizedName(r,o),this.headers.has(o)?this.headers.get(o).push(s):this.headers.set(o,[s])}})}:()=>{this.headers=new Map,Object.keys(n).forEach(t=>{let i=n[t];const r=t.toLowerCase();"string"==typeof i&&(i=[i]),i.length>0&&(this.headers.set(r,i),this.maybeSetNormalizedName(t,r))})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();const t=this.headers.get(n.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,t){return this.clone({name:n,value:t,op:"a"})}set(n,t){return this.clone({name:n,value:t,op:"s"})}delete(n,t){return this.clone({name:n,value:t,op:"d"})}maybeSetNormalizedName(n,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,n)}init(){this.lazyInit&&(this.lazyInit instanceof di?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(t=>{this.headers.set(t,n.headers.get(t)),this.normalizedNames.set(t,n.normalizedNames.get(t))})}clone(n){const t=new di;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof di?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([n]),t}applyUpdate(n){const t=n.name.toLowerCase();switch(n.op){case"a":case"s":let i=n.value;if("string"==typeof i&&(i=[i]),0===i.length)return;this.maybeSetNormalizedName(n.name,t);const r=("a"===n.op?this.headers.get(t):void 0)||[];r.push(...i),this.headers.set(t,r);break;case"d":const o=n.value;if(o){let s=this.headers.get(t);if(!s)return;s=s.filter(a=>-1===o.indexOf(a)),0===s.length?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,s)}else this.headers.delete(t),this.normalizedNames.delete(t)}}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>n(this.normalizedNames.get(t),this.headers.get(t)))}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class uV{encodeKey(n){return a1(n)}encodeValue(n){return a1(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}}const fV=/%(\d[a-f0-9])/gi,hV={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function a1(e){return encodeURIComponent(e).replace(fV,(n,t)=>hV[t]??n)}function fc(e){return`${e}`}class Mi{constructor(n={}){if(this.updates=null,this.cloneFrom=null,this.encoder=n.encoder||new uV,n.fromString){if(n.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function dV(e,n){const t=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(r=>{const o=r.indexOf("="),[s,a]=-1==o?[n.decodeKey(r),""]:[n.decodeKey(r.slice(0,o)),n.decodeValue(r.slice(o+1))],l=t.get(s)||[];l.push(a),t.set(s,l)}),t}(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(t=>{const i=n.fromObject[t],r=Array.isArray(i)?i.map(fc):[fc(i)];this.map.set(t,r)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();const t=this.map.get(n);return t?t[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,t){return this.clone({param:n,value:t,op:"a"})}appendAll(n){const t=[];return Object.keys(n).forEach(i=>{const r=n[i];Array.isArray(r)?r.forEach(o=>{t.push({param:i,value:o,op:"a"})}):t.push({param:i,value:r,op:"a"})}),this.clone(t)}set(n,t){return this.clone({param:n,value:t,op:"s"})}delete(n,t){return this.clone({param:n,value:t,op:"d"})}toString(){return this.init(),this.keys().map(n=>{const t=this.encoder.encodeKey(n);return this.map.get(n).map(i=>t+"="+this.encoder.encodeValue(i)).join("&")}).filter(n=>""!==n).join("&")}clone(n){const t=new Mi({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(n),t}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":const t=("a"===n.op?this.map.get(n.param):void 0)||[];t.push(fc(n.value)),this.map.set(n.param,t);break;case"d":if(void 0===n.value){this.map.delete(n.param);break}{let i=this.map.get(n.param)||[];const r=i.indexOf(fc(n.value));-1!==r&&i.splice(r,1),i.length>0?this.map.set(n.param,i):this.map.delete(n.param)}}}),this.cloneFrom=this.updates=null)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class pV{constructor(){this.map=new Map}set(n,t){return this.map.set(n,t),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function l1(e){return typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer}function c1(e){return typeof Blob<"u"&&e instanceof Blob}function u1(e){return typeof FormData<"u"&&e instanceof FormData}class Us{constructor(n,t,i,r){let o;if(this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=n.toUpperCase(),function gV(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||r?(this.body=void 0!==i?i:null,o=r):o=i,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params)),this.headers||(this.headers=new di),this.context||(this.context=new pV),this.params){const s=this.params.toString();if(0===s.length)this.urlWithParams=t;else{const a=t.indexOf("?");this.urlWithParams=t+(-1===a?"?":a<t.length-1?"&":"")+s}}else this.params=new Mi,this.urlWithParams=t}serializeBody(){return null===this.body?null:l1(this.body)||c1(this.body)||u1(this.body)||function mV(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof Mi?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||u1(this.body)?null:c1(this.body)?this.body.type||null:l1(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof Mi?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(n={}){const t=n.method||this.method,i=n.url||this.url,r=n.responseType||this.responseType,o=void 0!==n.body?n.body:this.body,s=void 0!==n.withCredentials?n.withCredentials:this.withCredentials,a=void 0!==n.reportProgress?n.reportProgress:this.reportProgress;let l=n.headers||this.headers,c=n.params||this.params;const u=n.context??this.context;return void 0!==n.setHeaders&&(l=Object.keys(n.setHeaders).reduce((d,f)=>d.set(f,n.setHeaders[f]),l)),n.setParams&&(c=Object.keys(n.setParams).reduce((d,f)=>d.set(f,n.setParams[f]),c)),new Us(t,i,o,{params:c,headers:l,context:u,reportProgress:a,responseType:r,withCredentials:s})}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var Ze=(()=>((Ze=Ze||{})[Ze.Sent=0]="Sent",Ze[Ze.UploadProgress=1]="UploadProgress",Ze[Ze.ResponseHeader=2]="ResponseHeader",Ze[Ze.DownloadProgress=3]="DownloadProgress",Ze[Ze.Response=4]="Response",Ze[Ze.User=5]="User",Ze))();class Uh{constructor(n,t=200,i="OK"){this.headers=n.headers||new di,this.status=void 0!==n.status?n.status:t,this.statusText=n.statusText||i,this.url=n.url||null,this.ok=this.status>=200&&this.status<300}}class Gh extends Uh{constructor(n={}){super(n),this.type=Ze.ResponseHeader}clone(n={}){return new Gh({headers:n.headers||this.headers,status:void 0!==n.status?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}}class hc extends Uh{constructor(n={}){super(n),this.type=Ze.Response,this.body=void 0!==n.body?n.body:null}clone(n={}){return new hc({body:void 0!==n.body?n.body:this.body,headers:n.headers||this.headers,status:void 0!==n.status?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}}class d1 extends Uh{constructor(n){super(n,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${n.url||"(unknown url)"}`:`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function zh(e,n){return{body:n,headers:e.headers,context:e.context,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials}}let f1=(()=>{class e{constructor(t){this.handler=t}request(t,i,r={}){let o;if(t instanceof Us)o=t;else{let l,c;l=r.headers instanceof di?r.headers:new di(r.headers),r.params&&(c=r.params instanceof Mi?r.params:new Mi({fromObject:r.params})),o=new Us(t,i,void 0!==r.body?r.body:null,{headers:l,context:r.context,params:c,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials})}const s=A(o).pipe(Si(l=>this.handler.handle(l)));if(t instanceof Us||"events"===r.observe)return s;const a=s.pipe(bt(l=>l instanceof hc));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return a.pipe(L(l=>{if(null!==l.body&&!(l.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return l.body}));case"blob":return a.pipe(L(l=>{if(null!==l.body&&!(l.body instanceof Blob))throw new Error("Response is not a Blob.");return l.body}));case"text":return a.pipe(L(l=>{if(null!==l.body&&"string"!=typeof l.body)throw new Error("Response is not a string.");return l.body}));default:return a.pipe(L(l=>l.body))}case"response":return a;default:throw new Error(`Unreachable: unhandled observe type ${r.observe}}`)}}delete(t,i={}){return this.request("DELETE",t,i)}get(t,i={}){return this.request("GET",t,i)}head(t,i={}){return this.request("HEAD",t,i)}jsonp(t,i){return this.request("JSONP",t,{params:(new Mi).append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,i={}){return this.request("OPTIONS",t,i)}patch(t,i,r={}){return this.request("PATCH",t,zh(r,i))}post(t,i,r={}){return this.request("POST",t,zh(r,i))}put(t,i,r={}){return this.request("PUT",t,zh(r,i))}}return e.\u0275fac=function(t){return new(t||e)(E(o1))},e.\u0275prov=M({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class h1{constructor(n,t){this.next=n,this.interceptor=t}handle(n){return this.interceptor.intercept(n,this.next)}}const Wh=new R("HTTP_INTERCEPTORS");let _V=(()=>{class e{intercept(t,i){return i.handle(t)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=M({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const vV=/^\)\]\}',?\n/;let p1=(()=>{class e{constructor(t){this.xhrFactory=t}handle(t){if("JSONP"===t.method)throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new he(i=>{const r=this.xhrFactory.build();if(r.open(t.method,t.urlWithParams),t.withCredentials&&(r.withCredentials=!0),t.headers.forEach((h,p)=>r.setRequestHeader(h,p.join(","))),t.headers.has("Accept")||r.setRequestHeader("Accept","application/json, text/plain, */*"),!t.headers.has("Content-Type")){const h=t.detectContentTypeHeader();null!==h&&r.setRequestHeader("Content-Type",h)}if(t.responseType){const h=t.responseType.toLowerCase();r.responseType="json"!==h?h:"text"}const o=t.serializeBody();let s=null;const a=()=>{if(null!==s)return s;const h=r.statusText||"OK",p=new di(r.getAllResponseHeaders()),g=function yV(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}(r)||t.url;return s=new Gh({headers:p,status:r.status,statusText:h,url:g}),s},l=()=>{let{headers:h,status:p,statusText:g,url:m}=a(),v=null;204!==p&&(v=typeof r.response>"u"?r.responseText:r.response),0===p&&(p=v?200:0);let b=p>=200&&p<300;if("json"===t.responseType&&"string"==typeof v){const y=v;v=v.replace(vV,"");try{v=""!==v?JSON.parse(v):null}catch(C){v=y,b&&(b=!1,v={error:C,text:v})}}b?(i.next(new hc({body:v,headers:h,status:p,statusText:g,url:m||void 0})),i.complete()):i.error(new d1({error:v,headers:h,status:p,statusText:g,url:m||void 0}))},c=h=>{const{url:p}=a(),g=new d1({error:h,status:r.status||0,statusText:r.statusText||"Unknown Error",url:p||void 0});i.error(g)};let u=!1;const d=h=>{u||(i.next(a()),u=!0);let p={type:Ze.DownloadProgress,loaded:h.loaded};h.lengthComputable&&(p.total=h.total),"text"===t.responseType&&!!r.responseText&&(p.partialText=r.responseText),i.next(p)},f=h=>{let p={type:Ze.UploadProgress,loaded:h.loaded};h.lengthComputable&&(p.total=h.total),i.next(p)};return r.addEventListener("load",l),r.addEventListener("error",c),r.addEventListener("timeout",c),r.addEventListener("abort",c),t.reportProgress&&(r.addEventListener("progress",d),null!==o&&r.upload&&r.upload.addEventListener("progress",f)),r.send(o),i.next({type:Ze.Sent}),()=>{r.removeEventListener("error",c),r.removeEventListener("abort",c),r.removeEventListener("load",l),r.removeEventListener("timeout",c),t.reportProgress&&(r.removeEventListener("progress",d),null!==o&&r.upload&&r.upload.removeEventListener("progress",f)),r.readyState!==r.DONE&&r.abort()}})}}return e.\u0275fac=function(t){return new(t||e)(E(bb))},e.\u0275prov=M({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const qh=new R("XSRF_COOKIE_NAME"),Yh=new R("XSRF_HEADER_NAME");class g1{}let bV=(()=>{class e{constructor(t,i,r){this.doc=t,this.platform=i,this.cookieName=r,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=db(t,this.cookieName),this.lastCookieString=t),this.lastToken}}return e.\u0275fac=function(t){return new(t||e)(E(We),E(yl),E(qh))},e.\u0275prov=M({token:e,factory:e.\u0275fac}),e})(),Zh=(()=>{class e{constructor(t,i){this.tokenService=t,this.headerName=i}intercept(t,i){const r=t.url.toLowerCase();if("GET"===t.method||"HEAD"===t.method||r.startsWith("http://")||r.startsWith("https://"))return i.handle(t);const o=this.tokenService.getToken();return null!==o&&!t.headers.has(this.headerName)&&(t=t.clone({headers:t.headers.set(this.headerName,o)})),i.handle(t)}}return e.\u0275fac=function(t){return new(t||e)(E(g1),E(Yh))},e.\u0275prov=M({token:e,factory:e.\u0275fac}),e})(),DV=(()=>{class e{constructor(t,i){this.backend=t,this.injector=i,this.chain=null}handle(t){if(null===this.chain){const i=this.injector.get(Wh,[]);this.chain=i.reduceRight((r,o)=>new h1(r,o),this.backend)}return this.chain.handle(t)}}return e.\u0275fac=function(t){return new(t||e)(E(s1),E(_t))},e.\u0275prov=M({token:e,factory:e.\u0275fac}),e})(),CV=(()=>{class e{static disable(){return{ngModule:e,providers:[{provide:Zh,useClass:_V}]}}static withOptions(t={}){return{ngModule:e,providers:[t.cookieName?{provide:qh,useValue:t.cookieName}:[],t.headerName?{provide:Yh,useValue:t.headerName}:[]]}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=le({type:e}),e.\u0275inj=oe({providers:[Zh,{provide:Wh,useExisting:Zh,multi:!0},{provide:g1,useClass:bV},{provide:qh,useValue:"XSRF-TOKEN"},{provide:Yh,useValue:"X-XSRF-TOKEN"}]}),e})(),wV=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=le({type:e}),e.\u0275inj=oe({providers:[f1,{provide:o1,useClass:DV},p1,{provide:s1,useExisting:p1}],imports:[CV.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})]}),e})(),m1=(()=>{class e{constructor(t,i,r){this.http=t,this.location=i,this.router=r,this.testSend=()=>{this.http.get("api/test1").subscribe({next:o=>{this.response=o},error:o=>{this.error=o}})},this.back=o=>{const s=this.location.getState(),a=s?s?.navigationId:1;console.log(a),1!==a?this.location.back():this.go(o)},this.go=o=>{this.router.navigate([`/${o}`])},this.link=(o,s={isNewTab:!0})=>{window.open(o,s.isNewTab?"_blank":void 0)},this.setPath=o=>{this.location.replaceState(o)},this.getPath=()=>this.location.path(),this.getNavigation=()=>this.router.getCurrentNavigation()}}return e.\u0275fac=function(t){return new(t||e)(E(f1),E(Sl),E(lt))},e.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function EV(e,n){if(1&e&&($(0,"p",3),yt(1),W()),2&e){const t=ue();Z(1),al(t.doctor.response)}}function NV(e,n){if(1&e&&($(0,"p",4),yt(1),W()),2&e){const t=ue();Z(1),al(t.doctor.error)}}const SV=[{path:"about",component:rV},{path:"metrology",component:oV},{path:"single-check/input",component:r1},{path:"single-check",component:sV},{path:"full-check/input",component:r1},{path:"full-check",component:aV},{path:"result",component:lV},{path:"print-form",component:cV},{path:"menu",component:(()=>{class e{constructor(t){this.doctor=t}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(_(m1))},e.\u0275cmp=Je({type:e,selectors:[["app-main-menu"]],decls:4,vars:2,consts:[[3,"click"],["style","color: green;",4,"ngIf"],["style","color: red;",4,"ngIf"],[2,"color","green"],[2,"color","red"]],template:function(t,i){1&t&&($(0,"button",0),fe("click",function(){return i.doctor.testSend()}),yt(1,"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"),W(),q(2,EV,2,1,"p",1),q(3,NV,2,1,"p",2)),2&t&&(Z(2),Q("ngIf",i.doctor.response),Z(1),Q("ngIf",i.doctor.error))},dependencies:[lo]}),e})()},{path:"",component:(()=>{class e{constructor(t){this.doctor=t,this.fadeOut=!1,this.timeout=setTimeout(()=>{this.fadeOut=!0,this.timeout=setTimeout(()=>{this.doctor.go("menu")},1e3)},2e3)}ngOnInit(){}ngOnDestroy(){clearTimeout(this.timeout)}}return e.\u0275fac=function(t){return new(t||e)(_(m1))},e.\u0275cmp=Je({type:e,selectors:[["app-logo"]],decls:4,vars:2,consts:[[1,"logo-doctor"],["src","/assets/img/logo.svg",1,"logo-img"],[1,"logo-title"]],template:function(t,i){1&t&&($(0,"div",0),Ki(1,"img",1),$(2,"h2",2),yt(3,"\u0414\u043e\u043a\u0442\u043e\u0440 \u0410\u0422"),W()()),2&t&&Me("fade-out",i.fadeOut)},styles:["[_nghost-%COMP%]{width:100%;height:100%;position:relative}.logo-doctor[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:#ebecec;animation:fade-in 1s 1 forwards}.logo-doctor.fade-out[_ngcontent-%COMP%]{animation:fade-out 1s 1 forwards}.logo-img[_ngcontent-%COMP%]{width:30rem}.logo-title[_ngcontent-%COMP%]{margin-top:1.5rem;font-size:3rem;font-weight:700;color:#ec671f;text-transform:uppercase}@keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-out{0%{opacity:1}to{opacity:0}}"]}),e})()}];let TV=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=le({type:e}),e.\u0275inj=oe({imports:[n1.forRoot(SV),n1]}),e})(),OV=(()=>{class e{constructor(){this.title="doctor"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=Je({type:e,selectors:[["app-root"]],decls:1,vars:0,template:function(t,i){1&t&&Ki(0,"router-outlet")},dependencies:[Oh]}),e})(),sC=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=le({type:e}),e.\u0275inj=oe({}),e})(),M2=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=le({type:e}),e.\u0275inj=oe({imports:[sC]}),e})(),EC=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=le({type:e}),e.\u0275inj=oe({imports:[M2]}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const R2=["addListener","removeListener"],A2=["addEventListener","removeEventListener"],x2=["on","off"];
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Rt(e,n,t,i){if(te(t)&&(i=t,t=void 0),i)return Rt(e,n,t).pipe(uh(i));const[r,o]=function F2(e){return te(e.addEventListener)&&te(e.removeEventListener)}(e)?A2.map(s=>a=>e[s](n,a,t)):function k2(e){return te(e.addListener)&&te(e.removeListener)}(e)?R2.map(NC(e,n)):function P2(e){return te(e.on)&&te(e.off)}(e)?x2.map(NC(e,n)):[];if(!r&&Zc(e))return Ke(s=>Rt(s,n,t))(ct(e));if(!r)throw new TypeError("Invalid event target");return new he(s=>{const a=(...l)=>s.next(1<l.length?l:l[0]);return r(a),()=>o(a)})}function NC(e,n){return t=>i=>e[t](n,i)}class L2 extends Vt{constructor(n,t){super()}schedule(n,t=0){return this}}const wc={setInterval(e,n,...t){const{delegate:i}=wc;return i?.setInterval?i.setInterval(e,n,...t):setInterval(e,n,...t)},clearInterval(e){const{delegate:n}=wc;return(n?.clearInterval||clearInterval)(e)},delegate:void 0},SC={now:()=>(SC.delegate||Date).now(),delegate:void 0};class Ys{constructor(n,t=Ys.now){this.schedulerActionCtor=n,this.now=t}schedule(n,t=0,i){return new this.schedulerActionCtor(this,n).schedule(i,t)}}Ys.now=SC.now;const j2=new class B2 extends Ys{constructor(n,t=Ys.now){super(n,t),this.actions=[],this._active=!1}flush(n){const{actions:t}=this;if(this._active)return void t.push(n);let i;this._active=!0;do{if(i=n.execute(n.state,n.delay))break}while(n=t.shift());if(this._active=!1,i){for(;n=t.shift();)n.unsubscribe();throw i}}}(class V2 extends L2{constructor(n,t){super(n,t),this.scheduler=n,this.work=t,this.pending=!1}schedule(n,t=0){var i;if(this.closed)return this;this.state=n;const r=this.id,o=this.scheduler;return null!=r&&(this.id=this.recycleAsyncId(o,r,t)),this.pending=!0,this.delay=t,this.id=null!==(i=this.id)&&void 0!==i?i:this.requestAsyncId(o,this.id,t),this}requestAsyncId(n,t,i=0){return wc.setInterval(n.flush.bind(n,this),i)}recycleAsyncId(n,t,i=0){if(null!=i&&this.delay===i&&!1===this.pending)return t;null!=t&&wc.clearInterval(t)}execute(n,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const i=this._execute(n,t);if(i)return i;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,t){let r,i=!1;try{this.work(n)}catch(o){i=!0,r=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){const{id:n,scheduler:t}=this,{actions:i}=t;this.work=this.state=this.scheduler=null,this.pending=!1,yr(i,this),null!=n&&(this.id=this.recycleAsyncId(t,n,null)),this.delay=null,super.unsubscribe()}}});const{isArray:$2}=Array;function OC(e){return 1===e.length&&$2(e[0])?e[0]:e}function Ec(...e){const n=fa(e),t=OC(e);return t.length?new he(i=>{let r=t.map(()=>[]),o=t.map(()=>!1);i.add(()=>{r=o=null});for(let s=0;!i.closed&&s<t.length;s++)ct(t[s]).subscribe(_e(i,a=>{if(r[s].push(a),r.every(l=>l.length)){const l=r.map(c=>c.shift());i.next(n?n(...l):l),r.some((c,u)=>!c.length&&o[u])&&i.complete()}},()=>{o[s]=!0,!r[s].length&&i.complete()}));return()=>{r=o=null}}):ln}function nt(e){return Pe((n,t)=>{ct(e).subscribe(_e(t,()=>t.complete(),br)),!t.closed&&n.subscribe(t)})}function vp(...e){const n=fa(e);return Pe((t,i)=>{const r=e.length,o=new Array(r);let s=e.map(()=>!1),a=!1;for(let l=0;l<r;l++)ct(e[l]).subscribe(_e(i,c=>{o[l]=c,!a&&!s[l]&&(s[l]=!0,(a=s.every(Gn))&&(s=null))},br));t.subscribe(_e(i,l=>{if(a){const c=[l,...o];i.next(n?n(...c):c)}}))})}new he(br),Math,Math,Math;const oj=["*"],wj=["dialog"];function Ip(e){return"string"==typeof e}function dr(e){return null!=e}function Co(e){return(e||document.body).getBoundingClientRect()}const ZC={animation:!0,transitionTimerDelayMs:5},_H=()=>{},{transitionTimerDelayMs:vH}=ZC,ta=new Map,At=(e,n,t,i)=>{let r=i.context||{};const o=ta.get(n);if(o)switch(i.runningTransition){case"continue":return ln;case"stop":e.run(()=>o.transition$.complete()),r=Object.assign(o.context,r),ta.delete(n)}const s=t(n,i.animation,r)||_H;if(!i.animation||"none"===window.getComputedStyle(n).transitionProperty)return e.run(()=>s()),A(void 0).pipe(function gH(e){return n=>new he(t=>n.subscribe({next:s=>e.run(()=>t.next(s)),error:s=>e.run(()=>t.error(s)),complete:()=>e.run(()=>t.complete())}))}(e));const a=new Te,l=new Te,c=a.pipe(function G2(...e){return n=>Os(n,A(...e))}(!0));ta.set(n,{transition$:a,complete:()=>{l.next(),l.complete()},context:r});const u=function mH(e){const{transitionDelay:n,transitionDuration:t}=window.getComputedStyle(e);return 1e3*(parseFloat(n)+parseFloat(t))}(n);return e.runOutsideAngular(()=>{const d=Rt(n,"transitionend").pipe(nt(c),bt(({target:h})=>h===n));(function MC(...e){return 1===(e=OC(e)).length?ct(e[0]):new he(function U2(e){return n=>{let t=[];for(let i=0;t&&!n.closed&&i<e.length;i++)t.push(ct(e[i]).subscribe(_e(n,r=>{if(t){for(let o=0;o<t.length;o++)o!==i&&t[o].unsubscribe();t=null}n.next(r)})))}}(e))})(function mp(e=0,n,t=j2){let i=-1;return null!=n&&(ug(n)?t=n:i=n),new he(r=>{let o=function H2(e){return e instanceof Date&&!isNaN(e)}(e)?+e-t.now():e;o<0&&(o=0);let s=0;return t.schedule(function(){r.closed||(r.next(s++),0<=i?this.schedule(void 0,i):r.complete())},o)})}(u+vH).pipe(nt(c)),d,l).pipe(nt(c)).subscribe(()=>{ta.delete(n),e.run(()=>{s(),a.next(),a.complete()})})}),a.asObservable()};let Ic=(()=>{class e{constructor(){this.animation=ZC.animation}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),tw=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=le({type:e}),e.\u0275inj=oe({imports:[Yt]}),e})(),nw=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=le({type:e}),e.\u0275inj=oe({imports:[Yt]}),e})(),ow=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=le({type:e}),e.\u0275inj=oe({imports:[Yt]}),e})(),sw=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=le({type:e}),e.\u0275inj=oe({}),e})();var it=(()=>{return(e=it||(it={}))[e.Tab=9]="Tab",e[e.Enter=13]="Enter",e[e.Escape=27]="Escape",e[e.Space=32]="Space",e[e.PageUp=33]="PageUp",e[e.PageDown=34]="PageDown",e[e.End=35]="End",e[e.Home=36]="Home",e[e.ArrowLeft=37]="ArrowLeft",e[e.ArrowUp=38]="ArrowUp",e[e.ArrowRight=39]="ArrowRight",e[e.ArrowDown=40]="ArrowDown",it;var e})();typeof navigator<"u"&&navigator.userAgent&&(/iPad|iPhone|iPod/.test(navigator.userAgent)||/Macintosh/.test(navigator.userAgent)&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2||/Android/.test(navigator.userAgent));const lw=["a[href]","button:not([disabled])",'input:not([disabled]):not([type="hidden"])',"select:not([disabled])","textarea:not([disabled])","[contenteditable]",'[tabindex]:not([tabindex="-1"])'].join(", ");function cw(e){const n=Array.from(e.querySelectorAll(lw)).filter(t=>-1!==t.tabIndex);return[n[0],n[n.length-1]]}new Date(1882,10,12),new Date(2174,10,25);let _w=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=le({type:e}),e.\u0275inj=oe({imports:[Yt,EC]}),e})(),Dw=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=le({type:e}),e.\u0275inj=oe({}),e})();class gr{constructor(n,t,i){this.nodes=n,this.viewRef=t,this.componentRef=i}}let c$=(()=>{class e{constructor(t,i){this._el=t,this._zone=i}ngOnInit(){this._zone.onStable.asObservable().pipe(ut(1)).subscribe(()=>{At(this._zone,this._el.nativeElement,(t,i)=>{i&&Co(t),t.classList.add("show")},{animation:this.animation,runningTransition:"continue"})})}hide(){return At(this._zone,this._el.nativeElement,({classList:t})=>t.remove("show"),{animation:this.animation,runningTransition:"stop"})}}return e.\u0275fac=function(t){return new(t||e)(_(Ce),_(be))},e.\u0275cmp=Je({type:e,selectors:[["ngb-modal-backdrop"]],hostAttrs:[2,"z-index","1055"],hostVars:6,hostBindings:function(t,i){2&t&&(Ji("modal-backdrop"+(i.backdropClass?" "+i.backdropClass:"")),Me("show",!i.animation)("fade",i.animation))},inputs:{animation:"animation",backdropClass:"backdropClass"},decls:0,vars:0,template:function(t,i){},encapsulation:2}),e})();class Cw{close(n){}dismiss(n){}}class u${constructor(n,t,i,r){this._windowCmptRef=n,this._contentRef=t,this._backdropCmptRef=i,this._beforeDismiss=r,this._closed=new Te,this._dismissed=new Te,this._hidden=new Te,n.instance.dismissEvent.subscribe(o=>{this.dismiss(o)}),this.result=new Promise((o,s)=>{this._resolve=o,this._reject=s}),this.result.then(null,()=>{})}get componentInstance(){if(this._contentRef&&this._contentRef.componentRef)return this._contentRef.componentRef.instance}get closed(){return this._closed.asObservable().pipe(nt(this._hidden))}get dismissed(){return this._dismissed.asObservable().pipe(nt(this._hidden))}get hidden(){return this._hidden.asObservable()}get shown(){return this._windowCmptRef.instance.shown.asObservable()}close(n){this._windowCmptRef&&(this._closed.next(n),this._resolve(n),this._removeModalElements())}_dismiss(n){this._dismissed.next(n),this._reject(n),this._removeModalElements()}dismiss(n){if(this._windowCmptRef)if(this._beforeDismiss){const t=this._beforeDismiss();!function YC(e){return e&&e.then}(t)?!1!==t&&this._dismiss(n):t.then(i=>{!1!==i&&this._dismiss(n)},()=>{})}else this._dismiss(n)}_removeModalElements(){const n=this._windowCmptRef.instance.hide(),t=this._backdropCmptRef?this._backdropCmptRef.instance.hide():A(void 0);n.subscribe(()=>{const{nativeElement:i}=this._windowCmptRef.location;i.parentNode.removeChild(i),this._windowCmptRef.destroy(),this._contentRef&&this._contentRef.viewRef&&this._contentRef.viewRef.destroy(),this._windowCmptRef=null,this._contentRef=null}),t.subscribe(()=>{if(this._backdropCmptRef){const{nativeElement:i}=this._backdropCmptRef.location;i.parentNode.removeChild(i),this._backdropCmptRef.destroy(),this._backdropCmptRef=null}}),Ec(n,t).subscribe(()=>{this._hidden.next(),this._hidden.complete()})}}var oa=(()=>{return(e=oa||(oa={}))[e.BACKDROP_CLICK=0]="BACKDROP_CLICK",e[e.ESC=1]="ESC",oa;var e})();let d$=(()=>{class e{constructor(t,i,r){this._document=t,this._elRef=i,this._zone=r,this._closed$=new Te,this._elWithFocus=null,this.backdrop=!0,this.keyboard=!0,this.dismissEvent=new G,this.shown=new Te,this.hidden=new Te}get fullscreenClass(){return!0===this.fullscreen?" modal-fullscreen":Ip(this.fullscreen)?` modal-fullscreen-${this.fullscreen}-down`:""}dismiss(t){this.dismissEvent.emit(t)}ngOnInit(){this._elWithFocus=this._document.activeElement,this._zone.onStable.asObservable().pipe(ut(1)).subscribe(()=>{this._show()})}ngOnDestroy(){this._disableEventHandling()}hide(){const{nativeElement:t}=this._elRef,i={animation:this.animation,runningTransition:"stop"},s=Ec(At(this._zone,t,()=>t.classList.remove("show"),i),At(this._zone,this._dialogEl.nativeElement,()=>{},i));return s.subscribe(()=>{this.hidden.next(),this.hidden.complete()}),this._disableEventHandling(),this._restoreFocus(),s}_show(){const t={animation:this.animation,runningTransition:"continue"};Ec(At(this._zone,this._elRef.nativeElement,(o,s)=>{s&&Co(o),o.classList.add("show")},t),At(this._zone,this._dialogEl.nativeElement,()=>{},t)).subscribe(()=>{this.shown.next(),this.shown.complete()}),this._enableEventHandling(),this._setFocus()}_enableEventHandling(){const{nativeElement:t}=this._elRef;this._zone.runOutsideAngular(()=>{Rt(t,"keydown").pipe(nt(this._closed$),bt(r=>r.which===it.Escape)).subscribe(r=>{this.keyboard?requestAnimationFrame(()=>{r.defaultPrevented||this._zone.run(()=>this.dismiss(oa.ESC))}):"static"===this.backdrop&&this._bumpBackdrop()});let i=!1;Rt(this._dialogEl.nativeElement,"mousedown").pipe(nt(this._closed$),at(()=>i=!1),on(()=>Rt(t,"mouseup").pipe(nt(this._closed$),ut(1))),bt(({target:r})=>t===r)).subscribe(()=>{i=!0}),Rt(t,"click").pipe(nt(this._closed$)).subscribe(({target:r})=>{t===r&&("static"===this.backdrop?this._bumpBackdrop():!0===this.backdrop&&!i&&this._zone.run(()=>this.dismiss(oa.BACKDROP_CLICK))),i=!1})})}_disableEventHandling(){this._closed$.next()}_setFocus(){const{nativeElement:t}=this._elRef;if(!t.contains(document.activeElement)){const i=t.querySelector("[ngbAutofocus]"),r=cw(t)[0];(i||r||t).focus()}}_restoreFocus(){const t=this._document.body,i=this._elWithFocus;let r;r=i&&i.focus&&t.contains(i)?i:t,this._zone.runOutsideAngular(()=>{setTimeout(()=>r.focus()),this._elWithFocus=null})}_bumpBackdrop(){"static"===this.backdrop&&At(this._zone,this._elRef.nativeElement,({classList:t})=>(t.add("modal-static"),()=>t.remove("modal-static")),{animation:this.animation,runningTransition:"continue"})}}return e.\u0275fac=function(t){return new(t||e)(_(We),_(Ce),_(be))},e.\u0275cmp=Je({type:e,selectors:[["ngb-modal-window"]],viewQuery:function(t,i){if(1&t&&bf(wj,7),2&t){let r;Ie(r=function Re(){return function ZR(e,n){return e[19].queries[n].queryList}(D(),kg())}())&&(i._dialogEl=r.first)}},hostAttrs:["role","dialog","tabindex","-1"],hostVars:7,hostBindings:function(t,i){2&t&&(me("aria-modal",!0)("aria-labelledby",i.ariaLabelledBy)("aria-describedby",i.ariaDescribedBy),Ji("modal d-block"+(i.windowClass?" "+i.windowClass:"")),Me("fade",i.animation))},inputs:{animation:"animation",ariaLabelledBy:"ariaLabelledBy",ariaDescribedBy:"ariaDescribedBy",backdrop:"backdrop",centered:"centered",fullscreen:"fullscreen",keyboard:"keyboard",scrollable:"scrollable",size:"size",windowClass:"windowClass",modalDialogClass:"modalDialogClass"},outputs:{dismissEvent:"dismiss"},ngContentSelectors:oj,decls:4,vars:2,consts:[["role","document"],["dialog",""],[1,"modal-content"]],template:function(t,i){1&t&&(function yv(e){const n=D()[16][6];if(!n.projection){const i=n.projection=jo(e?e.length:1,null),r=i.slice();let o=n.child;for(;null!==o;){const s=e?RM(o,e):0;null!==s&&(r[s]?r[s].projectionNext=o:i[s]=o,r[s]=o),o=o.next}}}(),$(0,"div",0,1)(2,"div",2),function bv(e,n=0,t){const i=D(),r=X(),o=zr(r,22+e,16,null,t||null);null===o.projection&&(o.projection=n),gu(),64!=(64&o.flags)&&function ZS(e,n,t){Bm(n[U],0,n,t,Im(e,t,n),km(t.parent||n[6],t,n))}(r,i,o)}(3),W()()),2&t&&Ji("modal-dialog"+(i.size?" modal-"+i.size:"")+(i.centered?" modal-dialog-centered":"")+i.fullscreenClass+(i.scrollable?" modal-dialog-scrollable":"")+(i.modalDialogClass?" "+i.modalDialogClass:""))},styles:["ngb-modal-window .component-host-scrollable{display:flex;flex-direction:column;overflow:hidden}\n"],encapsulation:2}),e})(),f$=(()=>{class e{constructor(t){this._document=t}hide(){const t=Math.abs(window.innerWidth-this._document.documentElement.clientWidth),i=this._document.body,r=i.style,{overflow:o,paddingRight:s}=r;if(t>0){const a=parseFloat(window.getComputedStyle(i).paddingRight);r.paddingRight=`${a+t}px`}return r.overflow="hidden",()=>{t>0&&(r.paddingRight=s),r.overflow=o}}}return e.\u0275fac=function(t){return new(t||e)(E(We))},e.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),h$=(()=>{class e{constructor(t,i,r,o,s,a){this._applicationRef=t,this._injector=i,this._document=r,this._scrollBar=o,this._rendererFactory=s,this._ngZone=a,this._activeWindowCmptHasChanged=new Te,this._ariaHiddenValues=new Map,this._scrollBarRestoreFn=null,this._backdropAttributes=["animation","backdropClass"],this._modalRefs=[],this._windowAttributes=["animation","ariaLabelledBy","ariaDescribedBy","backdrop","centered","fullscreen","keyboard","scrollable","size","windowClass","modalDialogClass"],this._windowCmpts=[],this._activeInstances=new G,this._activeWindowCmptHasChanged.subscribe(()=>{if(this._windowCmpts.length){const l=this._windowCmpts[this._windowCmpts.length-1];((e,n,t,i=!1)=>{this._ngZone.runOutsideAngular(()=>{const r=Rt(n,"focusin").pipe(nt(t),L(o=>o.target));Rt(n,"keydown").pipe(nt(t),bt(o=>o.which===it.Tab),vp(r)).subscribe(([o,s])=>{const[a,l]=cw(n);(s===a||s===n)&&o.shiftKey&&(l.focus(),o.preventDefault()),s===l&&!o.shiftKey&&(a.focus(),o.preventDefault())}),i&&Rt(n,"click").pipe(nt(t),vp(r),L(o=>o[1])).subscribe(o=>o.focus())})})(0,l.location.nativeElement,this._activeWindowCmptHasChanged),this._revertAriaHidden(),this._setAriaHidden(l.location.nativeElement)}})}_restoreScrollBar(){const t=this._scrollBarRestoreFn;t&&(this._scrollBarRestoreFn=null,t())}_hideScrollBar(){this._scrollBarRestoreFn||(this._scrollBarRestoreFn=this._scrollBar.hide())}open(t,i,r){const o=r.container instanceof HTMLElement?r.container:dr(r.container)?this._document.querySelector(r.container):this._document.body,s=this._rendererFactory.createRenderer(null,null);if(!o)throw new Error(`The specified modal container "${r.container||"body"}" was not found in the DOM.`);this._hideScrollBar();const a=new Cw,l=this._getContentRef(r.injector||t,i,a,r);let c=!1!==r.backdrop?this._attachBackdrop(o):void 0,u=this._attachWindowComponent(o,l.nodes),d=new u$(u,l,c,r.beforeDismiss);return this._registerModalRef(d),this._registerWindowCmpt(u),d.hidden.pipe(ut(1)).subscribe(()=>Promise.resolve(!0).then(()=>{this._modalRefs.length||(s.removeClass(this._document.body,"modal-open"),this._restoreScrollBar(),this._revertAriaHidden())})),a.close=f=>{d.close(f)},a.dismiss=f=>{d.dismiss(f)},this._applyWindowOptions(u.instance,r),1===this._modalRefs.length&&s.addClass(this._document.body,"modal-open"),c&&c.instance&&(this._applyBackdropOptions(c.instance,r),c.changeDetectorRef.detectChanges()),u.changeDetectorRef.detectChanges(),d}get activeInstances(){return this._activeInstances}dismissAll(t){this._modalRefs.forEach(i=>i.dismiss(t))}hasOpenModals(){return this._modalRefs.length>0}_attachBackdrop(t){let i=Bf(c$,{environmentInjector:this._applicationRef.injector,elementInjector:this._injector});return this._applicationRef.attachView(i.hostView),t.appendChild(i.location.nativeElement),i}_attachWindowComponent(t,i){let r=Bf(d$,{environmentInjector:this._applicationRef.injector,elementInjector:this._injector,projectableNodes:i});return this._applicationRef.attachView(r.hostView),t.appendChild(r.location.nativeElement),r}_applyWindowOptions(t,i){this._windowAttributes.forEach(r=>{dr(i[r])&&(t[r]=i[r])})}_applyBackdropOptions(t,i){this._backdropAttributes.forEach(r=>{dr(i[r])&&(t[r]=i[r])})}_getContentRef(t,i,r,o){return i?i instanceof Ve?this._createFromTemplateRef(i,r):Ip(i)?this._createFromString(i):this._createFromComponent(t,i,r,o):new gr([])}_createFromTemplateRef(t,i){const o=t.createEmbeddedView({$implicit:i,close(s){i.close(s)},dismiss(s){i.dismiss(s)}});return this._applicationRef.attachView(o),new gr([o.rootNodes],o)}_createFromString(t){const i=this._document.createTextNode(`${t}`);return new gr([[i]])}_createFromComponent(t,i,r,o){const s=_t.create({providers:[{provide:Cw,useValue:r}],parent:t}),a=Bf(i,{environmentInjector:this._applicationRef.injector,elementInjector:s}),l=a.location.nativeElement;return o.scrollable&&l.classList.add("component-host-scrollable"),this._applicationRef.attachView(a.hostView),new gr([[l]],a.hostView,a)}_setAriaHidden(t){const i=t.parentElement;i&&t!==this._document.body&&(Array.from(i.children).forEach(r=>{r!==t&&"SCRIPT"!==r.nodeName&&(this._ariaHiddenValues.set(r,r.getAttribute("aria-hidden")),r.setAttribute("aria-hidden","true"))}),this._setAriaHidden(i))}_revertAriaHidden(){this._ariaHiddenValues.forEach((t,i)=>{t?i.setAttribute("aria-hidden",t):i.removeAttribute("aria-hidden")}),this._ariaHiddenValues.clear()}_registerModalRef(t){const i=()=>{const r=this._modalRefs.indexOf(t);r>-1&&(this._modalRefs.splice(r,1),this._activeInstances.emit(this._modalRefs))};this._modalRefs.push(t),this._activeInstances.emit(this._modalRefs),t.result.then(i,i)}_registerWindowCmpt(t){this._windowCmpts.push(t),this._activeWindowCmptHasChanged.next(),t.onDestroy(()=>{const i=this._windowCmpts.indexOf(t);i>-1&&(this._windowCmpts.splice(i,1),this._activeWindowCmptHasChanged.next())})}}return e.\u0275fac=function(t){return new(t||e)(E(ys),E(_t),E(We),E(f$),E(pd),E(be))},e.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),p$=(()=>{class e{constructor(t){this._ngbConfig=t,this.backdrop=!0,this.fullscreen=!1,this.keyboard=!0}get animation(){return void 0===this._animation?this._ngbConfig.animation:this._animation}set animation(t){this._animation=t}}return e.\u0275fac=function(t){return new(t||e)(E(Ic))},e.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),g$=(()=>{class e{constructor(t,i,r){this._injector=t,this._modalStack=i,this._config=r}open(t,i={}){const r={...this._config,animation:this._config.animation,...i};return this._modalStack.open(this._injector,t,r)}get activeInstances(){return this._modalStack.activeInstances}dismissAll(t){this._modalStack.dismissAll(t)}hasOpenModals(){return this._modalStack.hasOpenModals()}}return e.\u0275fac=function(t){return new(t||e)(E(_t),E(h$),E(p$))},e.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),ww=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=le({type:e}),e.\u0275inj=oe({providers:[g$]}),e})(),Tw=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=le({type:e}),e.\u0275inj=oe({imports:[Yt]}),e})(),Pw=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=le({type:e}),e.\u0275inj=oe({imports:[Yt]}),e})(),Lw=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=le({type:e}),e.\u0275inj=oe({imports:[Yt]}),e})(),Vw=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=le({type:e}),e.\u0275inj=oe({imports:[Yt]}),e})(),Bw=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=le({type:e}),e.\u0275inj=oe({imports:[Yt]}),e})(),jw=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=le({type:e}),e.\u0275inj=oe({imports:[Yt]}),e})(),Hw=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=le({type:e}),e.\u0275inj=oe({imports:[Yt]}),e})(),$w=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=le({type:e}),e.\u0275inj=oe({}),e})();new R("live announcer delay",{providedIn:"root",factory:function O$(){return 100}});let Uw=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=le({type:e}),e.\u0275inj=oe({imports:[Yt]}),e})(),Gw=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=le({type:e}),e.\u0275inj=oe({}),e})();const M$=[tw,nw,ow,sw,_w,Dw,ww,Tw,Gw,Pw,Lw,Vw,Bw,jw,Hw,$w,Uw];let zw=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=le({type:e}),e.\u0275inj=oe({imports:[M$,tw,nw,ow,sw,_w,Dw,ww,Tw,Gw,Pw,Lw,Vw,Bw,jw,Hw,$w,Uw]}),e})(),I$=(()=>{class e{constructor(){}intercept(t,i){return i.handle(t)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=M({token:e,factory:e.\u0275fac}),e})(),R$=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=le({type:e,bootstrap:[OV]}),e.\u0275inj=oe({providers:[{provide:Wh,useClass:I$,multi:!0}],imports:[bP,wV,TV,EC,zw,zw]}),e})();(function PA(){j0=!1}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */)(),yP().bootstrapModule(R$).catch(e=>console.error(e))}},te=>{te(te.s=405)}]);