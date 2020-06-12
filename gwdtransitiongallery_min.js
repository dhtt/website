(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var aa="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},f;if("function"==typeof Object.setPrototypeOf)f=Object.setPrototypeOf;else{var m;a:{var ba={ha:!0},p={};try{p.__proto__=ba;m=p.ha;break a}catch(a){}m=!1}f=m?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var q=f,ca=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");},r=ca(this),goog=goog||{},da=this||self,ea=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";
if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},u=function(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=
a};var v=function(a,b,c){a=parseInt(a.getAttribute(b),10);isNaN(a)&&(a=c);return a},x=function(a,b,c){a=w(a,b,c);return 0<a?a:c},w=function(a,b,c){a=parseFloat(a.getAttribute(b));isFinite(a)||(a=c);return a},y=function(a,b,c){return a.hasAttribute(b)?a.getAttribute(b):c};var z=function(a,b,c){c=void 0===c?null:c;var d=document.createEvent("CustomEvent");d.initCustomEvent(a,!0,!0,c);b.dispatchEvent(d);return d};var A=function(a){return"gwd-page"==a.tagName.toLowerCase()||"gwd-page"==a.getAttribute("is")},fa=function(a){if(A(a))return a;for(;a&&9!=a.nodeType;)if((a=a.parentElement)&&A(a))return a;return null},D=function(a,b,c,d){d=(void 0===d?"":d)||b;a.hasAttribute(b)?(a=a.getAttribute(b),c.setAttribute(d,a)):c.removeAttribute(d)},E=function(a,b){return(a=y(a,b,""))?a.split(",").map(function(c){return c.trim()}):[]};var ha=function(a,b,c,d){var e=new XMLHttpRequest;e.open("GET",b);e.setRequestHeader("Content-Type","image/svg+xml");e.addEventListener("load",function(){var g=e.responseText;if(g=(new DOMParser).parseFromString(g,"image/svg+xml").getElementsByTagName("svg")[0])if(g.hasAttribute("width")&&g.hasAttribute("height"))a.src=b;else{var n=c,l=d,h=g.getAttribute("viewBox");if(h){var k=h.match(/[\d,\.]+ [\d,\.]+ ([\d,\.]+) ([\d,\.]+)/);k&&(h=parseFloat(k[1]),k=parseFloat(k[2]),h&&k&&(l=Math.min(c/h,d/k),n=
h*l,l*=k))}g.setAttribute("width",n);g.setAttribute("height",l);g=(new XMLSerializer).serializeToString(g);a.src="data:image/svg+xml;base64,"+window.btoa(g)}});e.send()};var F=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,F);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};u(F,Error);F.prototype.name="CustomError";var G=function(a,b){a=a.split("%s");for(var c="",d=a.length-1,e=0;e<d;e++)c+=a[e]+(e<b.length?b[e]:"%s");F.call(this,c+a[d])};u(G,F);G.prototype.name="AssertionError";var ia=function(a,b,c){if(!a){var d="Assertion failed";if(b){d+=": "+b;var e=Array.prototype.slice.call(arguments,2)}throw new G(""+d,e||[]);}return a},ja=function(a,b){throw new G("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var K=function(a,b){this.R=a===H&&b||"";this.ga=I};K.prototype.M=!0;K.prototype.L=function(){return this.R.toString()};K.prototype.toString=function(){return"SafeUrl{"+this.R+"}"};var ka=function(a){if(a instanceof K&&a.constructor===K&&a.ga===I)return a.R;ja("expected object of type SafeUrl, got '"+a+"' of type "+ea(a));return"type_error:SafeUrl"},la=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,I={},H={};var L=function(){this.P=""};L.prototype.M=!0;L.prototype.L=function(){return this.P};L.prototype.toString=function(){return"SafeStyle{"+this.P+"}"};L.prototype.N=function(a){this.P=a};(new L).N("");var M=function(){this.O=""};M.prototype.M=!0;M.prototype.L=function(){return this.O};M.prototype.toString=function(){return"SafeStyleSheet{"+this.O+"}"};M.prototype.N=function(a){this.O=a};(new M).N("");var ma="gwd-blinds gwd-door-wipe gwd-fade gwd-iris-wipe gwd-push gwd-radial-wipe gwd-rotate gwd-slice gwd-split-push gwd-stripe-wipe gwd-venetian-blinds gwd-wipe gwd-zigzag".split(" ");var na=["easing","exit-urls","scaling","transition-duration"],N=function(){var a=HTMLElement.call(this)||this;a.s=[];a.m=[];a.C=a.ja.bind(a);a.w=!1;a.$=0;a.b=0;a.U=null;a.j=null;a.G=null;a.J=0;a.l=0;a.B=!1;a.A=!1;a.i=null;a.ba=a.ka.bind(a);a.ea=a.na.bind(a);a.da=a.ma.bind(a);a.ca=a.la.bind(a);a.I=!1;a.h=!1;a.canvas=null;a.o=null;a.aa=!1;return a},O=HTMLElement;N.prototype=aa(O.prototype);N.prototype.constructor=N;
if(q)q(N,O);else for(var P in O)if("prototype"!=P)if(Object.defineProperties){var Q=Object.getOwnPropertyDescriptor(O,P);Q&&Object.defineProperty(N,P,Q)}else N[P]=O[P];
N.prototype.connectedCallback=function(){var a=this;this.g=this.clientWidth;this.c=this.clientHeight;var b=w(this,"swipe-committed-threshold",.25);this.pa=b*this.g;this.qa=b*this.c;this.ra=w(this,"swipe-threshold",.3);this.D=E(this,"images");this.H=v(this,"start-frame",1);this.T=1E3*x(this,"transition-duration",1);this.ia=1E3*x(this,"autoplay-frame-interval",1.5);this.V=v(this,"autoplay-loop-count",0);this.fa=this.hasAttribute("wrap");this.F=y(this,"scaling","stretch");this.Y=y(this,"easing","linear");
this.v=y(this,"gesture","click");this.K=this.hasAttribute("enable-interactive-transition");this.oa=this.hasAttribute("ignore-reverse-swipe");this.Z=E(this,"exit-urls");setTimeout(function(){a.f=a.firstElementChild&&-1!==ma.indexOf(a.firstElementChild.tagName.toLowerCase())?a.firstElementChild:null;a.hasAttribute("has-navigation")&&!a.i&&(a.c-=36,a.i=a.ownerDocument.createElement("gwd-gallerynavigation"),a.i.setAttribute("for",a.id),a.appendChild(a.i),D(a,"navigation-highlight",a.i,"highlight"),D(a,
"navigation-thumbnails",a.i,"use-thumbnails"));a.canvas||(a.canvas=a.ownerDocument.createElement("canvas"),a.appendChild(a.canvas),R(a,a.canvas));a.W=a.canvas.getBoundingClientRect();a.X=a.canvas.getContext("2d");a.o||(a.o=a.ownerDocument.createElement("gwd-gesture"),a.appendChild(a.o));var c=a.o;c.addEventListener("tap",a.ba,!1);if("swipe"===a.v||"click"===a.v&&a.K)c.addEventListener("trackstart",a.ea,!1),c.addEventListener("track",a.da,!1),c.addEventListener("trackend",a.ca,!1);a.aa=!0;a.gwdIsLoaded()||
((c=fa(a))?c.gwdIsLoaded()&&a.gwdLoad():a.gwdLoad())},0)};N.prototype.disconnectedCallback=function(){if(this.o){var a=this.o;a.removeEventListener("tap",this.ba,!1);if("swipe"===this.v||"click"===this.v&&this.K)a.removeEventListener("trackstart",this.ea,!1),a.removeEventListener("track",this.da,!1),a.removeEventListener("trackend",this.ca,!1)}this.i&&(this.removeChild(this.i),this.i=null)};
N.prototype.attributeChangedCallback=function(a){if(this.w)switch(a){case "transition-duration":this.T=1E3*x(this,"transition-duration",1);break;case "easing":this.Y=y(this,"easing","linear");break;case "scaling":this.F=y(this,"scaling","stretch");S(this);T(this,this.a,!1);break;case "exit-urls":this.Z=E(this,"exit-urls")}};
N.prototype.gwdLoad=function(){if(!this.w||this.aa)if(this.$=0,this.D.length)for(var a=0;a<this.D.length;a++){var b=this.ownerDocument.createElement("img");b.addEventListener("load",this.C,!1);b.addEventListener("error",this.C,!1);var c=this.D[a];"svg"===c.split(".").pop().toLowerCase()?ha(b,c,this.g,this.c):b.src=c;this.s.push(b)}else this.w=!0,z("ready",this)};N.prototype.gwdIsLoaded=function(){return this.w};
var R=function(a,b){var c=window.devicePixelRatio;b.width=a.g*c;b.height=a.c*c;b.style.width=a.g+"px";b.style.height=a.c+"px";b.getContext("2d").scale(c,c)};N.prototype.ja=function(a){var b=a.target;b.removeEventListener("load",this.C,!1);b.removeEventListener("error",this.C,!1);b=this.s.indexOf(b);0<=b&&("error"===a.type&&this.s.splice(b,1),++this.$==this.D.length&&(S(this),this.hasAttribute("autoplay")?this.startAutoplay():this.goToFrame(this.H,!1),this.w=!0,z("ready",this)))};
N.prototype.getFrame=function(a){if(0!=this.b)return this.s[a-1]};N.prototype.goToFrame=function(a,b){b=void 0===b?!!this.f:b;this.stop(!1);this.b&&(a=U(this,a),a!=this.a&&T(this,a,b))};
var T=function(a,b,c){c=void 0===c?!!a.f:c;z("frameactivated",a,{id:b+1});c?(a.u=b,a.U=Date.now()-(a.h?a.l*a.T:0),a.h=!1,a.S()):(a.X.clearRect(0,0,a.g,a.c),a.X.drawImage(a.m[b],0,0,a.g,a.c),V(a,b))},S=function(a){a.m=[];for(var b=0;b<a.s.length;b++){var c=a.s[b],d=c.naturalWidth,e=c.naturalHeight,g=!1;d&&e||(a.appendChild(c),g=!0,d=c.width,e=c.height);var n=0,l=0,h=d,k=e,t=0,J=0,B=a.g,C=a.c;"contain"===a.F?(t=Math.min(a.g/d,a.c/e),B=t*d,C=t*e,t=(a.g-B)/2,J=(a.c-C)/2):"cover"===a.F?(n=Math.max(a.g/
d,a.c/e),h=a.g/n,k=a.c/n,n=(d-h)/2,l=(e-k)/2):"none"===a.F&&(l=d-a.g,h=e-a.c,n=Math.max(l/2,0),t=Math.max(-l/2,0),l=Math.max(h/2,0),J=Math.max(-h/2,0),h=Math.min(d,a.g),k=Math.min(e,a.c),B=h,C=k);d=a.ownerDocument.createElement("canvas");R(a,d);d.getContext("2d").drawImage(c,n,l,h,k,t,J,B,C);a.m.push(d);g&&a.removeChild(c)}a.b=a.m.length},V=function(a,b){a.a!=b&&(a.a=b,z("frameshown",a,{frameIndex:a.a}),0==a.a?z("reachleftend",a):a.a==a.b-1&&z("reachrightend",a))};
N.prototype.goForwards=function(){this.stop(!1);(this.fa||this.a!=this.b-1)&&this.b&&T(this,W(this,!0))};N.prototype.goBackwards=function(){this.stop(!1);(this.fa||0!=this.a)&&this.b&&T(this,W(this,!1))};var W=function(a,b){return((b?a.a+1:a.a-1)+a.b)%a.b},U=function(a,b){1>b?b=1:b>a.b&&(b=a.b);return b-1};
N.prototype.S=function(){this.h||null===this.U||(this.l=oa(this,Math.min(1,(Date.now()-this.U)/this.T)),this.j=requestAnimationFrame(this.S.bind(this)));this.f.renderAnimation(this.m[this.a],this.m[this.u],this.l);1!=this.l||this.h||(this.j&&(cancelAnimationFrame(this.j),this.j=null),this.f.resetDirection(),V(this,this.u),(this.A||this.B)&&X(this))};var oa=function(a,b){switch(a.Y){case "ease-in":return b*b*b;case "ease-in-out":return 3*b*b-2*b*b*b;case "ease-out":return a=1-b,1-a*a*a;default:return b}};
N.prototype.startAutoplay=function(a){this.J=0;(void 0===a?0:a)||this.goToFrame(this.H,!1);this.A=!0;X(this)};N.prototype.rotateOnce=function(a){(void 0===a?0:a)||this.goToFrame(this.H,!1);this.B=!0;X(this)};var pa=function(a){var b=U(a,a.H);return 0==b?a.b:b};N.prototype.updateAnimationElement=function(a){this.f=a};
var X=function(a){if(a.B){if(a.a==pa(a)-1){a.stop(!0);return}}else if(a.A&&0!=a.V&&(a.a==pa(a)-1&&a.J++,a.J>=a.V)){a.stop(!0);return}a.G=setTimeout(function(){requestAnimationFrame(function(){a.b&&T(a,W(a,!0));a.f||X(a)})},a.ia)},qa=function(a){.5<=a.l?T(a,a.u,!1):T(a,a.a,!1)};
N.prototype.stop=function(a,b){b=null!=b?b:!0;this.j&&(cancelAnimationFrame(this.j),this.j=null,qa(this));this.h&&(this.h=!1,qa(this),this.f.resetDirection());this.G&&(clearTimeout(this.G),this.G=null);this.B?(this.B=!1,b&&z("rotateonceended",this,{completed:!!a})):this.A&&(this.A=!1,b&&z("autoplayended",this,{completed:!!a}))};
N.prototype.ka=function(){if(this.b){z("frametap",this,{id:this.a+1});var a=this.Z[this.a];a?(this.stop(!1),z("frameexit",this,{url:a}).detail.handled||(a instanceof K||a instanceof K||(a="object"==typeof a&&a.M?a.L():String(a),ia(la.test(a),"%s does not match the safe URL pattern",a)||(a="about:invalid#zClosurez"),a=new K(H,a)),da.open(ka(a),"",void 0,void 0))):"click"==this.v&&this.goForwards()}};N.prototype.na=function(){this.stop(!1)};
N.prototype.ma=function(a){var b=this;if(!this.I)if(this.K&&Y(this,a.dx,a.dy,!1)){this.h||(this.h=!0,Z(this,a.dx,a.dy,function(){b.u=W(b,!0)},function(){b.u=W(b,!1)}));a=Math.abs(a.dy)>Math.abs(a.dx)?(a.clientY-this.W.top)/this.c:(a.clientX-this.W.left)/this.g;var c=this.f.getSupportedSwipeDirection();0>c[0]+c[1]&&(a=1-a);this.l=a;this.S()}else Y(this,a.dx,a.dy,!0)&&(this.I=!0,Z(this,a.dx,a.dy,this.goForwards.bind(this),this.goBackwards.bind(this)))};
N.prototype.la=function(a){this.I?this.I=!1:this.h?this.l>=this.ra?T(this,this.u):this.stop(!1,!1):Y(this,a.dx,a.dy,!1)&&Z(this,a.dx,a.dy,this.goForwards.bind(this),this.goBackwards.bind(this))};
var Y=function(a,b,c,d){var e=Math.abs(c)>Math.abs(b),g=a.f?a.f.getSupportedSwipeDirection():[0,0];b*=g[0];c*=g[1];return(e?c:b)?a.oa&&(e?0>c:0>b)?!1:d?e?Math.abs(c)>=a.qa:Math.abs(b)>=a.pa:!0:!1},Z=function(a,b,c,d,e){Math.abs(c)>Math.abs(b)?0<c?(a.f.setDirection("toptobottom"),e()):(a.f.setDirection("bottomtotop"),d()):0<b?(a.f.setDirection("lefttoright"),e()):(a.f.setDirection("righttoleft"),d())};
r.Object.defineProperties(N.prototype,{frameCount:{configurable:!0,enumerable:!0,get:function(){return this.b}},currentIndex:{configurable:!0,enumerable:!0,get:function(){return 0<this.b?this.a+1:void 0}}});r.Object.defineProperties(N,{observedAttributes:{configurable:!0,enumerable:!0,get:function(){return na}}});customElements.define("gwd-transitiongallery",N);}).call(this);
