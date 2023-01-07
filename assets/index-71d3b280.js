var ht=Object.defineProperty;var pt=(o,t,e)=>t in o?ht(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var x=(o,t,e)=>(pt(o,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerpolicy&&(n.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?n.credentials="include":i.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();const ut=(o,t)=>{o.filter(e=>e.isIntersecting).forEach(e=>{const s=e.target.querySelector("video"),i=e.target.querySelector("audio");i.src=i.dataset.src,s.src=s.dataset.src,s.poster=s.dataset.poster,i.addEventListener("ended",function(){const n=document.querySelector("josttme-music-container").shadowRoot.children[0];let r=window.innerHeight/2+100;n.scrollTo({top:n.scrollTop+r,behavior:"smooth"})}),t.unobserve(e.target)})},vt={root:null,rootMargin:"1000px 0px 2000px 0px ",threshold:0},mt=new IntersectionObserver(ut,vt);function gt(o){mt.observe(o)}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=window,V=R.ShadowRoot&&(R.ShadyCSS===void 0||R.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,W=Symbol(),Z=new WeakMap;let ot=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==W)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(V&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=Z.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Z.set(e,t))}return t}toString(){return this.cssText}};const $t=o=>new ot(typeof o=="string"?o:o+"",void 0,W),rt=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((s,i,n)=>s+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[n+1],o[0]);return new ot(e,o,W)},yt=(o,t)=>{V?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const s=document.createElement("style"),i=R.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,o.appendChild(s)})},K=V?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return $t(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var L;const k=window,X=k.trustedTypes,ft=X?X.emptyScript:"",F=k.reactiveElementPolyfillSupport,B={toAttribute(o,t){switch(t){case Boolean:o=o?ft:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},nt=(o,t)=>t!==o&&(t==t||o==o),O={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:nt};let y=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,s)=>{const i=this._$Ep(s,e);i!==void 0&&(this._$Ev.set(i,s),t.push(i))}),t}static createProperty(t,e=O){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||O}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,s=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of s)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(K(i))}else t!==void 0&&e.push(K(t));return e}static _$Ep(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)===null||s===void 0||s.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return yt(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostConnected)===null||s===void 0?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostDisconnected)===null||s===void 0?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=O){var i;const n=this.constructor._$Ep(t,s);if(n!==void 0&&s.reflect===!0){const r=(((i=s.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?s.converter:B).toAttribute(e,s.type);this._$El=t,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,e){var s;const i=this.constructor,n=i._$Ev.get(t);if(n!==void 0&&this._$El!==n){const r=i.getPropertyOptions(n),d=typeof r.converter=="function"?{fromAttribute:r.converter}:((s=r.converter)===null||s===void 0?void 0:s.fromAttribute)!==void 0?r.converter:B;this._$El=n,this[n]=d.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,s){let i=!0;t!==void 0&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||nt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,n)=>this[n]=i),this._$Ei=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var n;return(n=i.hostUpdate)===null||n===void 0?void 0:n.call(i)}),this.update(s)):this._$Ek()}catch(i){throw e=!1,this._$Ek(),i}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdated)===null||i===void 0?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,s)=>this._$EO(s,this[s],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};y.finalized=!0,y.elementProperties=new Map,y.elementStyles=[],y.shadowRootOptions={mode:"open"},F==null||F({ReactiveElement:y}),((L=k.reactiveElementVersions)!==null&&L!==void 0?L:k.reactiveElementVersions=[]).push("1.5.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var q;const M=window,b=M.trustedTypes,G=b?b.createPolicy("lit-html",{createHTML:o=>o}):void 0,g=`lit$${(Math.random()+"").slice(9)}$`,lt="?"+g,_t=`<${lt}>`,A=document,C=(o="")=>A.createComment(o),P=o=>o===null||typeof o!="object"&&typeof o!="function",at=Array.isArray,bt=o=>at(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,J=/-->/g,Q=/>/g,$=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Y=/'/g,tt=/"/g,dt=/^(?:script|style|textarea|title)$/i,At=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),ct=At(1),w=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),et=new WeakMap,f=A.createTreeWalker(A,129,null,!1),wt=(o,t)=>{const e=o.length-1,s=[];let i,n=t===2?"<svg>":"",r=E;for(let l=0;l<e;l++){const a=o[l];let u,c,h=-1,v=0;for(;v<a.length&&(r.lastIndex=v,c=r.exec(a),c!==null);)v=r.lastIndex,r===E?c[1]==="!--"?r=J:c[1]!==void 0?r=Q:c[2]!==void 0?(dt.test(c[2])&&(i=RegExp("</"+c[2],"g")),r=$):c[3]!==void 0&&(r=$):r===$?c[0]===">"?(r=i??E,h=-1):c[1]===void 0?h=-2:(h=r.lastIndex-c[2].length,u=c[1],r=c[3]===void 0?$:c[3]==='"'?tt:Y):r===tt||r===Y?r=$:r===J||r===Q?r=E:(r=$,i=void 0);const m=r===$&&o[l+1].startsWith("/>")?" ":"";n+=r===E?a+_t:h>=0?(s.push(u),a.slice(0,h)+"$lit$"+a.slice(h)+g+m):a+g+(h===-2?(s.push(void 0),l):m)}const d=n+(o[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return[G!==void 0?G.createHTML(d):d,s]};class T{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,r=0;const d=t.length-1,l=this.parts,[a,u]=wt(t,e);if(this.el=T.createElement(a,s),f.currentNode=this.el.content,e===2){const c=this.el.content,h=c.firstChild;h.remove(),c.append(...h.childNodes)}for(;(i=f.nextNode())!==null&&l.length<d;){if(i.nodeType===1){if(i.hasAttributes()){const c=[];for(const h of i.getAttributeNames())if(h.endsWith("$lit$")||h.startsWith(g)){const v=u[r++];if(c.push(h),v!==void 0){const m=i.getAttribute(v.toLowerCase()+"$lit$").split(g),j=/([.?@])?(.*)/.exec(v);l.push({type:1,index:n,name:j[2],strings:m,ctor:j[1]==="."?xt:j[1]==="?"?Ct:j[1]==="@"?Pt:U})}else l.push({type:6,index:n})}for(const h of c)i.removeAttribute(h)}if(dt.test(i.tagName)){const c=i.textContent.split(g),h=c.length-1;if(h>0){i.textContent=b?b.emptyScript:"";for(let v=0;v<h;v++)i.append(c[v],C()),f.nextNode(),l.push({type:2,index:++n});i.append(c[h],C())}}}else if(i.nodeType===8)if(i.data===lt)l.push({type:2,index:n});else{let c=-1;for(;(c=i.data.indexOf(g,c+1))!==-1;)l.push({type:7,index:n}),c+=g.length-1}n++}}static createElement(t,e){const s=A.createElement("template");return s.innerHTML=t,s}}function S(o,t,e=o,s){var i,n,r,d;if(t===w)return t;let l=s!==void 0?(i=e._$Co)===null||i===void 0?void 0:i[s]:e._$Cl;const a=P(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((n=l==null?void 0:l._$AO)===null||n===void 0||n.call(l,!1),a===void 0?l=void 0:(l=new a(o),l._$AT(o,e,s)),s!==void 0?((r=(d=e)._$Co)!==null&&r!==void 0?r:d._$Co=[])[s]=l:e._$Cl=l),l!==void 0&&(t=S(o,l._$AS(o,t.values),l,s)),t}class St{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:s},parts:i}=this._$AD,n=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:A).importNode(s,!0);f.currentNode=n;let r=f.nextNode(),d=0,l=0,a=i[0];for(;a!==void 0;){if(d===a.index){let u;a.type===2?u=new H(r,r.nextSibling,this,t):a.type===1?u=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(u=new Tt(r,this,t)),this.u.push(u),a=i[++l]}d!==(a==null?void 0:a.index)&&(r=f.nextNode(),d++)}return n}p(t){let e=0;for(const s of this.u)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class H{constructor(t,e,s,i){var n;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cm=(n=i==null?void 0:i.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=S(this,t,e),P(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==w&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):bt(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==p&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(A.createTextNode(t)),this._$AH=t}$(t){var e;const{values:s,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=T.createElement(i.h,this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.p(s);else{const r=new St(n,this),d=r.v(this.options);r.p(s),this.T(d),this._$AH=r}}_$AC(t){let e=et.get(t.strings);return e===void 0&&et.set(t.strings,e=new T(t)),e}k(t){at(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new H(this.O(C()),this.O(C()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class U{constructor(t,e,s,i,n){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const n=this.strings;let r=!1;if(n===void 0)t=S(this,t,e,0),r=!P(t)||t!==this._$AH&&t!==w,r&&(this._$AH=t);else{const d=t;let l,a;for(t=n[0],l=0;l<n.length-1;l++)a=S(this,d[s+l],e,l),a===w&&(a=this._$AH[l]),r||(r=!P(a)||a!==this._$AH[l]),a===p?t=p:t!==p&&(t+=(a??"")+n[l+1]),this._$AH[l]=a}r&&!i&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class xt extends U{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}}const Et=b?b.emptyScript:"";class Ct extends U{constructor(){super(...arguments),this.type=4}j(t){t&&t!==p?this.element.setAttribute(this.name,Et):this.element.removeAttribute(this.name)}}class Pt extends U{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){var s;if((t=(s=S(this,t,e,0))!==null&&s!==void 0?s:p)===w)return;const i=this._$AH,n=t===p&&i!==p||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==p&&(i===p||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}}class Tt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t)}}const st=M.litHtmlPolyfillSupport;st==null||st(T,H),((q=M.litHtmlVersions)!==null&&q!==void 0?q:M.litHtmlVersions=[]).push("2.5.0");const Ht=(o,t,e)=>{var s,i;const n=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:t;let r=n._$litPart$;if(r===void 0){const d=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;n._$litPart$=r=new H(t.insertBefore(C(),d),d,void 0,e??{})}return r._$AI(o),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var N,z;class _ extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ht(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return w}}_.finalized=!0,_._$litElement$=!0,(N=globalThis.litElementHydrateSupport)===null||N===void 0||N.call(globalThis,{LitElement:_});const it=globalThis.litElementPolyfillSupport;it==null||it({LitElement:_});((z=globalThis.litElementVersions)!==null&&z!==void 0?z:globalThis.litElementVersions=[]).push("3.2.2");class I extends _{constructor(){super(),this.isPlaying=!1}get music(){var t;return((t=this.renderRoot)==null?void 0:t.querySelector("audio"))??null}get play(){var t;return((t=this.renderRoot)==null?void 0:t.querySelector(".play"))??null}get pause(){var t;return((t=this.renderRoot)==null?void 0:t.querySelector(".pause"))??null}get video(){var t;return((t=this.renderRoot)==null?void 0:t.querySelector("video"))??null}get currentTimeEl(){var t;return((t=this.renderRoot)==null?void 0:t.querySelector("#current-time"))??null}get durationEl(){var t;return((t=this.renderRoot)==null?void 0:t.querySelector("#duration"))??null}get progressContainer(){var t;return((t=this.renderRoot)==null?void 0:t.querySelector("#progress-container"))??null}get progress(){var t;return((t=this.renderRoot)==null?void 0:t.querySelector("#progress"))??null}firstUpdated(){var n,r;const t=this,e=((n=this.renderRoot)==null?void 0:n.querySelector(".main-container-player"))??null;(r=this.renderRoot)==null||r.querySelector(".poster-container");function s(d){d.target.paused?(t.pause.classList.add("hidden"),t.play.classList.remove("hidden")):(t.pause.classList.remove("hidden"),t.play.classList.add("hidden"));const{duration:l,currentTime:a}=d.srcElement,u=a/l*100;t.progress.style.width=`${u}%`;const c=Math.floor(l/60);let h=Math.floor(l%60);h<10&&(h=`0${h}`),h&&(t.durationEl.textContent=`${c}:${h}`);const v=Math.floor(a/60);let m=Math.floor(a%60);m<10&&(m=`0${m}`),t.currentTimeEl.textContent=`0${v}:${m}`}function i(d){const l=this.clientWidth,a=d.offsetX,{duration:u}=t.music;t.music.currentTime=a/l*u}this.music.addEventListener("timeupdate",s),this.progressContainer.addEventListener("click",i),gt(e)}playSong(){this.music.paused&&(this.play.classList.add("hidden"),this.pause.classList.remove("hidden"),this.music.play(),this.video.play())}pauseSong(){this.play.classList.remove("hidden"),this.pause.classList.add("hidden"),this.music.pause(),this.video.pause()}togglePlay(){this.music.paused?this.playSong():this.pauseSong()}render(){return ct`
			<div id=${this.id} class="main-container-player">
				<div class="poster-container" @click=${this.togglePlay}>
					<video
						preload=${this.preload}
						data-src=${this.video_src}
						type="video/mp4"
						loop
						muted
						data-poster=${this.cover_image}
					></video>
				</div>
				<div class="player-container">
					<div class="details">
						<h2 id="title">${this.title}</h2>
						<h3 id="artist">${this.artista}</h3>
						<audio preload=${this.preload} data-src=${this.audio_src} type="audio/mpeg"></audio>
					</div>
					<!-- Duration -->
					<div class="duration-wrapper">
						<span id="current-time">00:00</span>
						<span id="duration">00:00</span>
					</div>
					<!-- Progress -->
					<div class="progress-container" id="progress-container">
						<div class="progress" id="progress"></div>
					</div>
					<!-- Controls -->
					<div class="player-controls">
						<svg width="22" height="22" viewBox="0 0 24 24">
							<path
								d="M7.5 2.25C10.5 2.25 12 4.25 12 4.25C12 4.25 13.5 2.25 16.5 2.25C20 2.25 22.5 4.99999 22.5 8.5C22.5 12.5 19.2311 16.0657 16.25 18.75C14.4095 20.4072 13 21.5 12 21.5C11 21.5 9.55051 20.3989 7.75 18.75C4.81949 16.0662 1.5 12.5 1.5 8.5C1.5 4.99999 4 2.25 7.5 2.25Z"
							></path>
						</svg>
						<div id="playBtn" @click=${this.togglePlay}>
							<svg class="play " title="Play" width="50" height="40" viewBox="0 0 24 24">
								<path d="m16.53 11.152-8-5A1 1 0 0 0 7 7v10a1 1 0 0 0 1.53.848l8-5a1 1 0 0 0 0-1.7z" />
							</svg>

							<svg class="pause hidden" title="Pause" width="40" height="40" viewBox="0 0 100 100">
								<path
									d="M46.667 70c0 3.665-3.002 6.667-6.667 6.667h-6.667c-3.665 0-6.666-3.002-6.666-6.667V30c0-3.665 3.001-6.667 6.666-6.667H40c3.665 0 6.667 3.002 6.667 6.667v40zM73.333 70c0 3.665-3.001 6.667-6.666 6.667H60c-3.665 0-6.667-3.002-6.667-6.667V30c0-3.665 3.002-6.667 6.667-6.667h6.667c3.665 0 6.666 3.002 6.666 6.667v40z"
								/>
							</svg>
						</div>
						<svg id="user-perfil" width="30" height="30" viewBox="0 0 24 24">
							<path
								d="M10 9C10.7956 9 11.5587 8.68393 12.1213 8.12132C12.6839 7.55871 13 6.79565 13 6C13 5.20435 12.6839 4.44129 12.1213 3.87868C11.5587 3.31607 10.7956 3 10 3C9.20435 3 8.44129 3.31607 7.87868 3.87868C7.31607 4.44129 7 5.20435 7 6C7 6.79565 7.31607 7.55871 7.87868 8.12132C8.44129 8.68393 9.20435 9 10 9ZM3 18C3 17.0807 3.18106 16.1705 3.53284 15.3212C3.88463 14.4719 4.40024 13.7003 5.05025 13.0503C5.70026 12.4002 6.47194 11.8846 7.32122 11.5328C8.1705 11.1811 9.08075 11 10 11C10.9193 11 11.8295 11.1811 12.6788 11.5328C13.5281 11.8846 14.2997 12.4002 14.9497 13.0503C15.5998 13.7003 16.1154 14.4719 16.4672 15.3212C16.8189 16.1705 17 17.0807 17 18H3Z"
							></path>
						</svg>
					</div>
				</div>
			</div>
		`}}x(I,"properties",{isPlaying:{type:Boolean},id:{},title:{},artista:{},audio_src:{},video_src:{},preload:{},cover_image:{}}),x(I,"styles",[rt`
			:host {
				display: block;
				width: 100%;
				height: 100%;
				scroll-snap-align: center;
			}
			.main-container-player {
				position: relative;
				width: 100%;
				height: 100%;
				overflow: hidden;
				color: #e6e4e1;
				background-color: #000;
				font-size: 1.2rem;
			}
			.poster-container {
				position: absolute;
				width: 100%;
				height: 100%;
				top: 0;
				left: 0;
				bottom: 0;
				right: 0;
				overflow: hidden;
			}
			video {
				position: absolute;
				top: 0;
				left: 0;
				height: 100%;
				left: 50%;
				transform: translateX(-50%);
			}

			.poster-container::before {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				z-index: 10;
				width: 100%;
				height: 100%;
				background-color: rgba(0, 0, 0, 0.3);
			}
			.player-container {
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				height: auto;
				display: grid;
				z-index: 15;
				left: 50%;
				transform: translateX(-50%);
			}
			.details {
				width: 100%;
				height: auto;
				display: grid;
				justify-items: start;
				margin-bottom: 0.5rem;
				line-height: 1.2;
			}
			h2,
			h3 {
				margin: 0;
				padding: 0;
				text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
			}
			h3 {
				font-weight: 400;
				font-size: 1.1rem;
				opacity: 0.7;
			}
			.details,
			.duration-wrapper,
			.player-container {
				padding: 0 5%;
			}
			/* Progress */

			.progress-container {
				border-radius: 5px;
				height: 0.2rem;
				width: 90%;
				margin: 1rem auto;
				background-color: #c2c2c268;
			}

			.progress {
				background: #0085ff;
				border-radius: 5px;
				height: 100%;
				width: 0;
				transition: width 0.1s linear;
			}

			.duration-wrapper {
				display: flex;
				justify-content: space-between;
			}
			/* player */
			.player-controls {
				display: grid;
				grid-template-columns: repeat(3, 1fr);
				place-items: center;
				margin-bottom: 0.3rem;
				height: 5rem;
			}
			.playBtn {
				width: 100%;
			}
			svg {
				fill: #e6e4e1;
				display: grid;
				place-content: center;
			}

			.hidden {
				display: none;
			}
		`]);customElements.define("josttme-music-player",I);const jt=[{id:"2923515042",title:"Past Lives",artista:"Martin Arteta, creamy, 11:11 Music Group",music:"https://dl.dropboxusercontent.com/s/0rep1xbixmkt6dx/2923515042.mp3",video:"https://dl.dropboxusercontent.com/s/n21huaxfduue7n5/2923515042.mp4",cover_image:"https://dl.dropboxusercontent.com/s/50rzat2meta0u6u/2923515042.jpeg",preload:"auto"},{id:"3787428395",title:"Promise",artista:"sapientdream",music:"https://dl.dropboxusercontent.com/s/0yygwwg9j1k0tjy/3787428395.mp3",video:"https://dl.dropboxusercontent.com/s/7p8a7au4fngzwc6/3787428395.mp4",cover_image:"https://dl.dropboxusercontent.com/s/kjoid91vtxxnnx3/3787428395.jpeg",preload:"auto"},{id:"2399116831",title:"Hurt Me",artista:"Låpsley",music:"https://dl.dropboxusercontent.com/s/giyxu1cn593i5yt/2399116831.mp3",video:"https://dl.dropboxusercontent.com/s/geso3l361qvpqio/2399116831.mp4",cover_image:"https://dl.dropboxusercontent.com/s/qluearasxi0hmwe/2399116831.jpeg",preload:"auto"},{id:"1558120066",title:"The Best Of Me",artista:"Dion Timmer&The Arcturians",music:"https://dl.dropboxusercontent.com/s/fi3eypcw5lmjkgx/1558120066.mp3",video:"https://dl.dropboxusercontent.com/s/ynje4eh9j8ygaer/1558120066.mp4",cover_image:"https://dl.dropboxusercontent.com/s/ww6dsa3ccg9gjli/1558120066.jpeg",preload:"auto"},{id:"1285707758",title:"Experience",artista:" ",music:"https://dl.dropboxusercontent.com/s/85y1n7zxmgeal9p/1285707758.mp3",video:"https://dl.dropboxusercontent.com/s/suylrh3nkhwcbad/1285707758.mp4",cover_image:"https://dl.dropboxusercontent.com/s/sk9tg31fjlfb4mr/1285707758.jpeg",preload:"auto"},{id:"1566375107",title:"Meant To Be Slowed",artista:"Verrier",music:"https://dl.dropboxusercontent.com/s/5hup96sv6yuszkr/1566375107.mp3",video:"https://dl.dropboxusercontent.com/s/r1sylrfglns2bhm/1566375107.mp4",cover_image:"https://dl.dropboxusercontent.com/s/a8w1pvdy1cm4cob/1566375107.jpeg",preload:"auto"},{id:"1719535308",title:"Stairs",artista:"Marcin Gasiewicz",music:"https://dl.dropboxusercontent.com/s/6j0tm47lwgrjc2p/1719535308.mp3",video:"https://dl.dropboxusercontent.com/s/o3arawj0ndklwzn/1719535308.mp4",cover_image:"https://dl.dropboxusercontent.com/s/q6nt2dqawdr8duc/1719535308.jpeg",preload:"auto"},{id:"2249643818",title:"His Theme",artista:"Toby Fox",music:"https://dl.dropboxusercontent.com/s/dlyktthv1lju6n0/2249643818.mp3",video:"https://dl.dropboxusercontent.com/s/s1m53y823vt5bfy/2249643818.mp4",cover_image:"https://dl.dropboxusercontent.com/s/c8l2f4qetkqtz42/2249643818.jpeg",preload:"auto"},{id:"3259693376",title:"Love Story Cover",artista:"HIKO",music:"https://dl.dropboxusercontent.com/s/en6ba5gpgbkvjed/3259693376.mp3",video:"https://dl.dropboxusercontent.com/s/7ecguoa124ye5uc/3259693376.mp4",cover_image:"https://dl.dropboxusercontent.com/s/smg1omsstvfihpz/3259693376.jpeg",preload:"auto"},{id:"3648835716",title:"All Time Low",artista:"Kurt Hugo Schneider&Sam Tsui&Casey Breves",music:"https://dl.dropboxusercontent.com/s/ekupycvcdozlo29/3648835716.mp3",video:"https://dl.dropboxusercontent.com/s/yty2qgrhrlxbbfq/3648835716.mp4",cover_image:"https://dl.dropboxusercontent.com/s/txr9tni4g1opqe6/3648835716.jpeg",preload:"auto"}];class D extends _{constructor(){super(),this.isPlaying=!1,this.title,this.artista,this.audio_src}firstUpdated(){var n;const t=this.songsList(),e=((n=this.renderRoot)==null?void 0:n.querySelector("div"))??null;e.insertAdjacentHTML("beforeend",t.join(" "));let s=!1;function i(r){var d=r.getBoundingClientRect();return d.top>=0&&d.left>=0&&d.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&d.right<=(window.innerWidth||document.documentElement.clientWidth)}e.addEventListener("scroll",function(){s&&e.querySelectorAll("josttme-music-player").forEach(r=>{if(i(r)){const d=r.shadowRoot.querySelector("video"),l=r.shadowRoot.querySelector("audio");d.play(),l.play()}else{const d=r.shadowRoot.querySelector("video"),l=r.shadowRoot.querySelector("audio");d.pause(),l.pause(),l.currentTime=0,d.currentTime=0}})}),document.querySelector("body").addEventListener("click",()=>{s=!0})}songsList(){return jt.map(t=>`
				<josttme-music-player
					id=${t.id}
					title="${t.title}"
					artista="${t.artista}"
					audio_src=${t.music}
					video_src=${t.video}
					preload=${t.preload}
					cover_image=${t.cover_image}
				></josttme-music-player>
			`)}render(){return ct` <div></div> `}}x(D,"properties",{title:{},artista:{},audio_src:{},cover_image:{}}),x(D,"styles",[rt`
			:host {
				display: block;
				overflow: hidden;
			}
			div {
				overflow-y: auto;
				scroll-snap-type: y mandatory;
				scroll-behavior: smooth;
				scrollbar-width: none;
			}
			div::-webkit-scrollbar {
				display: none;
			}
			:host,
			div {
				width: 100%;
				height: 100%;
			}
		`]);customElements.define("josttme-music-container",D);const Rt=window.innerHeight,kt=document.querySelector("body");kt.style.height=Rt+"px";
