!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["react-browser-support"]=t():e["react-browser-support"]=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist",t(t.s=12)}([function(e,t,n){"use strict";function r(e,t,n,r,i,a,u,s){if(o(t),!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,i,a,u,s],f=0;c=new Error(t.replace(/%s/g,function(){return l[f++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}}var o=function(e){};e.exports=r},function(e,t,n){"use strict";function r(e){return void 0!==e.ref}function o(e){return void 0!==e.key}var i=n(2),a=n(10),u=(n(4),n(8),Object.prototype.hasOwnProperty),s=n(11),c={key:!0,ref:!0,__self:!0,__source:!0},l=function(e,t,n,r,o,i,a){var u={$$typeof:s,type:e,key:t,ref:n,props:a,_owner:i};return u};l.createElement=function(e,t,n){var i,s={},f=null,p=null;if(null!=t){r(t)&&(p=t.ref),o(t)&&(f=""+t.key),void 0===t.__self?null:t.__self,void 0===t.__source?null:t.__source;for(i in t)u.call(t,i)&&!c.hasOwnProperty(i)&&(s[i]=t[i])}var d=arguments.length-2;if(1===d)s.children=n;else if(d>1){for(var h=Array(d),y=0;y<d;y++)h[y]=arguments[y+2];s.children=h}if(e&&e.defaultProps){var v=e.defaultProps;for(i in v)void 0===s[i]&&(s[i]=v[i])}return l(e,f,p,0,0,a.current,s)},l.createFactory=function(e){var t=l.createElement.bind(null,e);return t.type=e,t},l.cloneAndReplaceKey=function(e,t){return l(e.type,t,e.ref,e._self,e._source,e._owner,e.props)},l.cloneElement=function(e,t,n){var s,f=i({},e.props),p=e.key,d=e.ref,h=(e._self,e._source,e._owner);if(null!=t){r(t)&&(d=t.ref,h=a.current),o(t)&&(p=""+t.key);var y;e.type&&e.type.defaultProps&&(y=e.type.defaultProps);for(s in t)u.call(t,s)&&!c.hasOwnProperty(s)&&(void 0===t[s]&&void 0!==y?f[s]=y[s]:f[s]=t[s])}var v=arguments.length-2;if(1===v)f.children=n;else if(v>1){for(var m=Array(v),b=0;b<v;b++)m[b]=arguments[b+2];f.children=m}return l(e.type,p,d,0,0,h,f)},l.isValidElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===s},e.exports=l},function(e,t,n){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,u,s=r(e),c=1;c<arguments.length;c++){n=Object(arguments[c]);for(var l in n)i.call(n,l)&&(s[l]=n[l]);if(o){u=o(n);for(var f=0;f<u.length;f++)a.call(n,u[f])&&(s[u[f]]=n[u[f]])}}return s}},function(e,t,n){"use strict";function r(e){for(var t=arguments.length-1,n="Minified React error #"+e+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);n+=" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";var o=new Error(n);throw o.name="Invariant Violation",o.framesToPop=1,o}e.exports=r},function(e,t,n){"use strict";var r=n(5),o=r;e.exports=o},function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){"use strict";function r(e,t,n){this.props=e,this.context=t,this.refs=c,this.updater=n||s}function o(e,t,n){this.props=e,this.context=t,this.refs=c,this.updater=n||s}function i(){}var a=n(3),u=n(2),s=n(7),c=(n(8),n(9));n(0),n(15);r.prototype.isReactComponent={},r.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&a("85"),this.updater.enqueueSetState(this,e),t&&this.updater.enqueueCallback(this,t,"setState")},r.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this),e&&this.updater.enqueueCallback(this,e,"forceUpdate")};i.prototype=r.prototype,o.prototype=new i,o.prototype.constructor=o,u(o.prototype,r.prototype),o.prototype.isPureReactComponent=!0,e.exports={Component:r,PureComponent:o}},function(e,t,n){"use strict";var r=(n(4),{isMounted:function(e){return!1},enqueueCallback:function(e,t){},enqueueForceUpdate:function(e){},enqueueReplaceState:function(e,t){},enqueueSetState:function(e,t){}});e.exports=r},function(e,t,n){"use strict";var r=!1;e.exports=r},function(e,t,n){"use strict";var r={};e.exports=r},function(e,t,n){"use strict";var r={current:null};e.exports=r},function(e,t,n){"use strict";var r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;e.exports=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.detectBrowser=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(13),l=r(c),f=n(31),p=r(f);n(32);var d=n(37),h=d.detect,y=function(e){function t(){var e,n,r,a;o(this,t);for(var u=arguments.length,s=Array(u),c=0;c<u;c++)s[c]=arguments[c];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.state={browser:{},message:"",supported:!0},a=n,i(r,a)}return a(t,e),s(t,[{key:"componentDidMount",value:function(){var e=h();this.determineBrowserSupport(e)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,r=e.style;return this.state&&!this.state.supported?l.default.createElement("div",{className:r?"":n||"warning-callout",style:r||{}},t||l.default.createElement("div",null,this.state.message)):null}},{key:"determineBrowserSupport",value:function(e){var t=this.props.supported;if(e)if(t[e.name]){var n=t[e.name];(0,p.default)(e.version,n)<0?this.setAsUnsupported(e):this.setAsSupported(e)}else this.setAsUnsupported(e);else console.log("could not detect browser")}},{key:"setAsUnsupported",value:function(e){var t=this;this.setState({browser:e,supported:!1,message:e.name+" version "+e.version+" is not currently supported"},function(){return v(t.state)})}},{key:"setAsSupported",value:function(e){var t=this;this.setState({browser:e,supported:!0,message:e.name+" version "+e.version+" is supported"},function(){return v(t.state)})}}]),t}(c.Component);y.propTypes={supported:c.PropTypes.object.isRequired},t.default=y;var v=t.detectBrowser=function(e){return console.log("data",e),u({},h(),{message:"data.message",supported:"data.supported"})}},function(e,t,n){"use strict";e.exports=n(14)},function(e,t,n){"use strict";var r=n(2),o=n(6),i=n(16),a=n(21),u=n(1),s=n(22),c=n(27),l=n(28),f=n(30),p=u.createElement,d=u.createFactory,h=u.cloneElement,y=r,v=function(e){return e},m={Children:{map:i.map,forEach:i.forEach,count:i.count,toArray:i.toArray,only:f},Component:o.Component,PureComponent:o.PureComponent,createElement:p,cloneElement:h,isValidElement:u.isValidElement,PropTypes:s,createClass:l,createFactory:d,createMixin:v,DOM:a,version:c,__spread:y};e.exports=m},function(e,t,n){"use strict";var r=function(){};e.exports=r},function(e,t,n){"use strict";function r(e){return(""+e).replace(w,"$&/")}function o(e,t){this.func=e,this.context=t,this.count=0}function i(e,t,n){var r=e.func,o=e.context;r.call(o,t,e.count++)}function a(e,t,n){if(null==e)return e;var r=o.getPooled(t,n);m(e,i,r),o.release(r)}function u(e,t,n,r){this.result=e,this.keyPrefix=t,this.func=n,this.context=r,this.count=0}function s(e,t,n){var o=e.result,i=e.keyPrefix,a=e.func,u=e.context,s=a.call(u,t,e.count++);Array.isArray(s)?c(s,o,n,v.thatReturnsArgument):null!=s&&(y.isValidElement(s)&&(s=y.cloneAndReplaceKey(s,i+(!s.key||t&&t.key===s.key?"":r(s.key)+"/")+n)),o.push(s))}function c(e,t,n,o,i){var a="";null!=n&&(a=r(n)+"/");var c=u.getPooled(t,a,o,i);m(e,s,c),u.release(c)}function l(e,t,n){if(null==e)return e;var r=[];return c(e,r,null,t,n),r}function f(e,t,n){return null}function p(e,t){return m(e,f,null)}function d(e){var t=[];return c(e,t,null,v.thatReturnsArgument),t}var h=n(17),y=n(1),v=n(5),m=n(18),b=h.twoArgumentPooler,g=h.fourArgumentPooler,w=/\/+/g;o.prototype.destructor=function(){this.func=null,this.context=null,this.count=0},h.addPoolingTo(o,b),u.prototype.destructor=function(){this.result=null,this.keyPrefix=null,this.func=null,this.context=null,this.count=0},h.addPoolingTo(u,g);var x={forEach:a,map:l,mapIntoWithKeyPrefixInternal:c,count:p,toArray:d};e.exports=x},function(e,t,n){"use strict";var r=n(3),o=(n(0),function(e){var t=this;if(t.instancePool.length){var n=t.instancePool.pop();return t.call(n,e),n}return new t(e)}),i=function(e,t){var n=this;if(n.instancePool.length){var r=n.instancePool.pop();return n.call(r,e,t),r}return new n(e,t)},a=function(e,t,n){var r=this;if(r.instancePool.length){var o=r.instancePool.pop();return r.call(o,e,t,n),o}return new r(e,t,n)},u=function(e,t,n,r){var o=this;if(o.instancePool.length){var i=o.instancePool.pop();return o.call(i,e,t,n,r),i}return new o(e,t,n,r)},s=function(e){var t=this;e instanceof t||r("25"),e.destructor(),t.instancePool.length<t.poolSize&&t.instancePool.push(e)},c=o,l=function(e,t){var n=e;return n.instancePool=[],n.getPooled=t||c,n.poolSize||(n.poolSize=10),n.release=s,n},f={addPoolingTo:l,oneArgumentPooler:o,twoArgumentPooler:i,threeArgumentPooler:a,fourArgumentPooler:u};e.exports=f},function(e,t,n){"use strict";function r(e,t){return e&&"object"==typeof e&&null!=e.key?c.escape(e.key):t.toString(36)}function o(e,t,n,i){var p=typeof e;if("undefined"!==p&&"boolean"!==p||(e=null),null===e||"string"===p||"number"===p||"object"===p&&e.$$typeof===u)return n(i,e,""===t?l+r(e,0):t),1;var d,h,y=0,v=""===t?l:t+f;if(Array.isArray(e))for(var m=0;m<e.length;m++)d=e[m],h=v+r(d,m),y+=o(d,h,n,i);else{var b=s(e);if(b){var g,w=b.call(e);if(b!==e.entries)for(var x=0;!(g=w.next()).done;)d=g.value,h=v+r(d,x++),y+=o(d,h,n,i);else for(;!(g=w.next()).done;){var E=g.value;E&&(d=E[1],h=v+c.escape(E[0])+f+r(d,0),y+=o(d,h,n,i))}}else if("object"===p){var O="",P=String(e);a("31","[object Object]"===P?"object with keys {"+Object.keys(e).join(", ")+"}":P,O)}}return y}function i(e,t,n){return null==e?0:o(e,"",t,n)}var a=n(3),u=(n(10),n(11)),s=n(19),c=(n(0),n(20)),l=(n(4),"."),f=":";e.exports=i},function(e,t,n){"use strict";function r(e){var t=e&&(o&&e[o]||e[i]);if("function"==typeof t)return t}var o="function"==typeof Symbol&&Symbol.iterator,i="@@iterator";e.exports=r},function(e,t,n){"use strict";function r(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}function o(e){var t=/(=0|=2)/g,n={"=0":"=","=2":":"};return(""+("."===e[0]&&"$"===e[1]?e.substring(2):e.substring(1))).replace(t,function(e){return n[e]})}var i={escape:r,unescape:o};e.exports=i},function(e,t,n){"use strict";var r=n(1),o=r.createFactory,i={a:o("a"),abbr:o("abbr"),address:o("address"),area:o("area"),article:o("article"),aside:o("aside"),audio:o("audio"),b:o("b"),base:o("base"),bdi:o("bdi"),bdo:o("bdo"),big:o("big"),blockquote:o("blockquote"),body:o("body"),br:o("br"),button:o("button"),canvas:o("canvas"),caption:o("caption"),cite:o("cite"),code:o("code"),col:o("col"),colgroup:o("colgroup"),data:o("data"),datalist:o("datalist"),dd:o("dd"),del:o("del"),details:o("details"),dfn:o("dfn"),dialog:o("dialog"),div:o("div"),dl:o("dl"),dt:o("dt"),em:o("em"),embed:o("embed"),fieldset:o("fieldset"),figcaption:o("figcaption"),figure:o("figure"),footer:o("footer"),form:o("form"),h1:o("h1"),h2:o("h2"),h3:o("h3"),h4:o("h4"),h5:o("h5"),h6:o("h6"),head:o("head"),header:o("header"),hgroup:o("hgroup"),hr:o("hr"),html:o("html"),i:o("i"),iframe:o("iframe"),img:o("img"),input:o("input"),ins:o("ins"),kbd:o("kbd"),keygen:o("keygen"),label:o("label"),legend:o("legend"),li:o("li"),link:o("link"),main:o("main"),map:o("map"),mark:o("mark"),menu:o("menu"),menuitem:o("menuitem"),meta:o("meta"),meter:o("meter"),nav:o("nav"),noscript:o("noscript"),object:o("object"),ol:o("ol"),optgroup:o("optgroup"),option:o("option"),output:o("output"),p:o("p"),param:o("param"),picture:o("picture"),pre:o("pre"),progress:o("progress"),q:o("q"),rp:o("rp"),rt:o("rt"),ruby:o("ruby"),s:o("s"),samp:o("samp"),script:o("script"),section:o("section"),select:o("select"),small:o("small"),source:o("source"),span:o("span"),strong:o("strong"),style:o("style"),sub:o("sub"),summary:o("summary"),sup:o("sup"),table:o("table"),tbody:o("tbody"),td:o("td"),textarea:o("textarea"),tfoot:o("tfoot"),th:o("th"),thead:o("thead"),time:o("time"),title:o("title"),tr:o("tr"),track:o("track"),u:o("u"),ul:o("ul"),var:o("var"),video:o("video"),wbr:o("wbr"),circle:o("circle"),clipPath:o("clipPath"),defs:o("defs"),ellipse:o("ellipse"),g:o("g"),image:o("image"),line:o("line"),linearGradient:o("linearGradient"),mask:o("mask"),path:o("path"),pattern:o("pattern"),polygon:o("polygon"),polyline:o("polyline"),radialGradient:o("radialGradient"),rect:o("rect"),stop:o("stop"),svg:o("svg"),text:o("text"),tspan:o("tspan")};e.exports=i},function(e,t,n){"use strict";var r=n(1),o=r.isValidElement,i=n(23);e.exports=i(o)},function(e,t,n){"use strict";var r=n(24);e.exports=function(e){return r(e,!1)}},function(e,t,n){"use strict";var r=n(5),o=n(0),i=n(4),a=n(2),u=n(25),s=n(26);e.exports=function(e,t){function n(e){var t=e&&(N&&e[N]||e[A]);if("function"==typeof t)return t}function c(e,t){return e===t?0!==e||1/e==1/t:e!==e&&t!==t}function l(e){this.message=e,this.stack=""}function f(e){function n(n,r,i,a,s,c,f){if(a=a||j,c=c||i,f!==u)if(t)o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");else;return null==r[i]?n?new l(null===r[i]?"The "+s+" `"+c+"` is marked as required in `"+a+"`, but its value is `null`.":"The "+s+" `"+c+"` is marked as required in `"+a+"`, but its value is `undefined`."):null:e(r,i,a,s,c)}var r=n.bind(null,!1);return r.isRequired=n.bind(null,!0),r}function p(e){function t(t,n,r,o,i,a){var u=t[n];if(E(u)!==e)return new l("Invalid "+o+" `"+i+"` of type `"+O(u)+"` supplied to `"+r+"`, expected `"+e+"`.");return null}return f(t)}function d(e){function t(t,n,r,o,i){if("function"!=typeof e)return new l("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var a=t[n];if(!Array.isArray(a)){return new l("Invalid "+o+" `"+i+"` of type `"+E(a)+"` supplied to `"+r+"`, expected an array.")}for(var s=0;s<a.length;s++){var c=e(a,s,r,o,i+"["+s+"]",u);if(c instanceof Error)return c}return null}return f(t)}function h(e){function t(t,n,r,o,i){if(!(t[n]instanceof e)){var a=e.name||j;return new l("Invalid "+o+" `"+i+"` of type `"+_(t[n])+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}return null}return f(t)}function y(e){function t(t,n,r,o,i){for(var a=t[n],u=0;u<e.length;u++)if(c(a,e[u]))return null;return new l("Invalid "+o+" `"+i+"` of value `"+a+"` supplied to `"+r+"`, expected one of "+JSON.stringify(e)+".")}return Array.isArray(e)?f(t):r.thatReturnsNull}function v(e){function t(t,n,r,o,i){if("function"!=typeof e)return new l("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var a=t[n],s=E(a);if("object"!==s)return new l("Invalid "+o+" `"+i+"` of type `"+s+"` supplied to `"+r+"`, expected an object.");for(var c in a)if(a.hasOwnProperty(c)){var f=e(a,c,r,o,i+"."+c,u);if(f instanceof Error)return f}return null}return f(t)}function m(e){function t(t,n,r,o,i){for(var a=0;a<e.length;a++){if(null==(0,e[a])(t,n,r,o,i,u))return null}return new l("Invalid "+o+" `"+i+"` supplied to `"+r+"`.")}if(!Array.isArray(e))return r.thatReturnsNull;for(var n=0;n<e.length;n++){var o=e[n];if("function"!=typeof o)return i(!1,"Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.",P(o),n),r.thatReturnsNull}return f(t)}function b(e){function t(t,n,r,o,i){var a=t[n],s=E(a);if("object"!==s)return new l("Invalid "+o+" `"+i+"` of type `"+s+"` supplied to `"+r+"`, expected `object`.");for(var c in e){var f=e[c];if(f){var p=f(a,c,r,o,i+"."+c,u);if(p)return p}}return null}return f(t)}function g(e){function t(t,n,r,o,i){var s=t[n],c=E(s);if("object"!==c)return new l("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");var f=a({},t[n],e);for(var p in f){var d=e[p];if(!d)return new l("Invalid "+o+" `"+i+"` key `"+p+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var h=d(s,p,r,o,i+"."+p,u);if(h)return h}return null}return f(t)}function w(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(w);if(null===t||e(t))return!0;var r=n(t);if(!r)return!1;var o,i=r.call(t);if(r!==t.entries){for(;!(o=i.next()).done;)if(!w(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!w(a[1]))return!1}return!0;default:return!1}}function x(e,t){return"symbol"===e||("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}function E(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":x(t,e)?"symbol":t}function O(e){if(void 0===e||null===e)return""+e;var t=E(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function P(e){var t=O(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}function _(e){return e.constructor&&e.constructor.name?e.constructor.name:j}var N="function"==typeof Symbol&&Symbol.iterator,A="@@iterator",j="<<anonymous>>",S={array:p("array"),bool:p("boolean"),func:p("function"),number:p("number"),object:p("object"),string:p("string"),symbol:p("symbol"),any:function(){return f(r.thatReturnsNull)}(),arrayOf:d,element:function(){function t(t,n,r,o,i){var a=t[n];if(!e(a)){return new l("Invalid "+o+" `"+i+"` of type `"+E(a)+"` supplied to `"+r+"`, expected a single ReactElement.")}return null}return f(t)}(),instanceOf:h,node:function(){function e(e,t,n,r,o){return w(e[t])?null:new l("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")}return f(e)}(),objectOf:v,oneOf:y,oneOfType:m,shape:b,exact:g};return l.prototype=Error.prototype,S.checkPropTypes=s,S.PropTypes=S,S}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";function r(e,t,n,r,o){}e.exports=r},function(e,t,n){"use strict";e.exports="15.6.2"},function(e,t,n){"use strict";var r=n(6),o=r.Component,i=n(1),a=i.isValidElement,u=n(7),s=n(29);e.exports=s(o,a,u)},function(e,t,n){"use strict";function r(e){return e}function o(e,t,n){function o(e,t){var n=b.hasOwnProperty(t)?b[t]:null;E.hasOwnProperty(t)&&u("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&u("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function c(e,n){if(n){u("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),u(!t(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var r=e.prototype,i=r.__reactAutoBindPairs;n.hasOwnProperty(s)&&g.mixins(e,n.mixins);for(var a in n)if(n.hasOwnProperty(a)&&a!==s){var c=n[a],l=r.hasOwnProperty(a);if(o(l,a),g.hasOwnProperty(a))g[a](e,c);else{var f=b.hasOwnProperty(a),h="function"==typeof c,y=h&&!f&&!l&&!1!==n.autobind;if(y)i.push(a,c),r[a]=c;else if(l){var v=b[a];u(f&&("DEFINE_MANY_MERGED"===v||"DEFINE_MANY"===v),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",v,a),"DEFINE_MANY_MERGED"===v?r[a]=p(r[a],c):"DEFINE_MANY"===v&&(r[a]=d(r[a],c))}else r[a]=c}}}else;}function l(e,t){if(t)for(var n in t){var r=t[n];if(t.hasOwnProperty(n)){var o=n in g;u(!o,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var i=n in e;u(!i,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),e[n]=r}}}function f(e,t){u(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in t)t.hasOwnProperty(n)&&(u(void 0===e[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),e[n]=t[n]);return e}function p(e,t){return function(){var n=e.apply(this,arguments),r=t.apply(this,arguments);if(null==n)return r;if(null==r)return n;var o={};return f(o,n),f(o,r),o}}function d(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function h(e,t){var n=t.bind(e);return n}function y(e){for(var t=e.__reactAutoBindPairs,n=0;n<t.length;n+=2){var r=t[n],o=t[n+1];e[r]=h(e,o)}}function v(e){var t=r(function(e,r,o){this.__reactAutoBindPairs.length&&y(this),this.props=e,this.context=r,this.refs=a,this.updater=o||n,this.state=null;var i=this.getInitialState?this.getInitialState():null;u("object"==typeof i&&!Array.isArray(i),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=i});t.prototype=new O,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],m.forEach(c.bind(null,t)),c(t,w),c(t,e),c(t,x),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),u(t.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var o in b)t.prototype[o]||(t.prototype[o]=null);return t}var m=[],b={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},g={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)c(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=i({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=i({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=p(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=i({},e.propTypes,t)},statics:function(e,t){l(e,t)},autobind:function(){}},w={componentDidMount:function(){this.__isMounted=!0}},x={componentWillUnmount:function(){this.__isMounted=!1}},E={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},O=function(){};return i(O.prototype,e.prototype,E),v}var i=n(2),a=n(9),u=n(0),s="mixins";e.exports=o},function(e,t,n){"use strict";function r(e){return i.isValidElement(e)||o("143"),e}var o=n(3),i=n(1);n(0);e.exports=r},function(e,t){e.exports=function(e,t){for(var n=e.split("."),r=t.split("."),o=0;o<3;o++){var i=Number(n[o]),a=Number(r[o]);if(i>a)return 1;if(a>i)return-1;if(!isNaN(i)&&isNaN(a))return 1;if(isNaN(i)&&!isNaN(a))return-1}return 0}},function(e,t,n){var r=n(33);"string"==typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;n(35)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){t=e.exports=n(34)(void 0),t.push([e.i,".warning-callout{margin:1em;padding:1em;font-size:1.4em;border-radius:.5em;border:1px solid rgba(170,17,51,.4);background:rgba(170,17,51,.1);color:rgba(170,17,51,.9)}",""])},function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=h[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(l(r.parts[i],t))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(l(r.parts[i],t));h[r.id]={id:r.id,refs:1,parts:a}}}}function o(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],u=i[1],s=i[2],c=i[3],l={css:u,media:s,sourceMap:c};r[a]?r[a].parts.push(l):n.push(r[a]={id:a,parts:[l]})}return n}function i(e,t){var n=v(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=g[g.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function u(e){var t=document.createElement("style");return e.attrs.type="text/css",c(t,e.attrs),i(e,t),t}function s(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",c(t,e.attrs),i(e,t),t}function c(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function l(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var c=b++;n=m||(m=u(t)),r=f.bind(null,n,c,!1),o=f.bind(null,n,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=s(t),r=d.bind(null,n,t),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=u(t),r=p.bind(null,n),o=function(){a(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function f(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function d(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=w(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),u=e.href;e.href=URL.createObjectURL(a),u&&URL.revokeObjectURL(u)}var h={},y=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),v=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e.call(this,n)),t[n]}}(function(e){return document.querySelector(e)}),m=null,b=0,g=[],w=n(36);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=y()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=o(e,t);return r(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var u=n[a],s=h[u.id];s.refs--,i.push(s)}if(e){r(o(e,t),t)}for(var a=0;a<i.length;a++){var s=i[a];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete h[s.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return e;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},function(e,t,n){(function(t){function r(){var e=i();return e||("undefined"!=typeof navigator?a(navigator.userAgent):null)}function o(e){var t=s(),n=t.filter(function(t){return t.rule&&t.rule.test(e)})[0];return n?n.name:null}function i(){return"undefined"==typeof navigator&&void 0!==t?{name:"node",version:t.version.slice(1),os:n(39).type().toLowerCase()}:null}function a(e){var t=u();if(!e)return null;var n=t.map(function(t){var n=t.rule.exec(e),r=n&&n[1].split(/[._]/).slice(0,3);return r&&r.length<3&&(r=r.concat(1==r.length?[0,0]:[0])),n&&{name:t.name,version:r.join(".")}}).filter(Boolean)[0]||null;return n&&(n.os=o(e)),n}function u(){return c([["edge",/Edge\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["vivaldi",/Vivaldi\/([0-9\.]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)$/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/]])}function s(){return c([["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/],["Search Bot",/(nuhk)|(Googlebot)|(Yammybot)|(Openbot)|(Slurp)|(MSNBot)|(Ask Jeeves\/Teoma)|(ia_archiver)/]])}function c(e){return e.map(function(e){return{name:e[0],rule:e[1]}})}e.exports={detect:r,detectOS:o,getNodeVersion:i,parseUserAgent:a}}).call(t,n(38))},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function i(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function a(){y&&d&&(y=!1,d.length?h=d.concat(h):v=-1,h.length&&u())}function u(){if(!y){var e=o(a);y=!0;for(var t=h.length;t;){for(d=h,h=[];++v<t;)d&&d[v].run();v=-1,t=h.length}d=null,y=!1,i(e)}}function s(e,t){this.fun=e,this.array=t}function c(){}var l,f,p=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var d,h=[],y=!1,v=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new s(e,t)),1!==h.length||y||o(u)},s.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.prependListener=c,p.prependOnceListener=c,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(e,t){t.endianness=function(){return"LE"},t.hostname=function(){return"undefined"!=typeof location?location.hostname:""},t.loadavg=function(){return[]},t.uptime=function(){return 0},t.freemem=function(){return Number.MAX_VALUE},t.totalmem=function(){return Number.MAX_VALUE},t.cpus=function(){return[]},t.type=function(){return"Browser"},t.release=function(){return"undefined"!=typeof navigator?navigator.appVersion:""},t.networkInterfaces=t.getNetworkInterfaces=function(){return{}},t.arch=function(){return"javascript"},t.platform=function(){return"browser"},t.tmpdir=t.tmpDir=function(){return"/tmp"},t.EOL="\n"}])});
//# sourceMappingURL=index.js.map