(self["webpackChunkedify"]=self["webpackChunkedify"]||[]).push([[443],{6265:function(e,t,n){e.exports=n(9435)},4951:function(e,t,n){"use strict";n(2801);var r=n(6642),o=n(6806),s=n(3833),i=n(4360),a=n(5047),c=n(5976),u=n(9896),f=n(4393);e.exports=function(e){return new Promise((function(t,n){var l=e.data,d=e.headers,p=e.responseType;r.isFormData(l)&&delete d["Content-Type"];var h=new XMLHttpRequest;if(e.auth){var g=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";d.Authorization="Basic "+btoa(g+":"+m)}var v=a(e.baseURL,e.url);function y(){if(h){var r="getAllResponseHeaders"in h?c(h.getAllResponseHeaders()):null,s=p&&"text"!==p&&"json"!==p?h.response:h.responseText,i={data:s,status:h.status,statusText:h.statusText,headers:r,config:e,request:h};o(t,n,i),h=null}}if(h.open(e.method.toUpperCase(),i(v,e.params,e.paramsSerializer),!0),h.timeout=e.timeout,"onloadend"in h?h.onloadend=y:h.onreadystatechange=function(){h&&4===h.readyState&&(0!==h.status||h.responseURL&&0===h.responseURL.indexOf("file:"))&&setTimeout(y)},h.onabort=function(){h&&(n(f("Request aborted",e,"ECONNABORTED",h)),h=null)},h.onerror=function(){n(f("Network Error",e,null,h)),h=null},h.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(f(t,e,e.transitional&&e.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",h)),h=null},r.isStandardBrowserEnv()){var b=(e.withCredentials||u(v))&&e.xsrfCookieName?s.read(e.xsrfCookieName):void 0;b&&(d[e.xsrfHeaderName]=b)}"setRequestHeader"in h&&r.forEach(d,(function(e,t){"undefined"===typeof l&&"content-type"===t.toLowerCase()?delete d[t]:h.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(h.withCredentials=!!e.withCredentials),p&&"json"!==p&&(h.responseType=e.responseType),"function"===typeof e.onDownloadProgress&&h.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&h.upload&&h.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){h&&(h.abort(),n(e),h=null)})),l||(l=null),h.send(l)}))}},9435:function(e,t,n){"use strict";var r=n(6642),o=n(5955),s=n(7104),i=n(8186),a=n(8711);function c(e){var t=new s(e),n=o(s.prototype.request,t);return r.extend(n,s.prototype,t),r.extend(n,t),n}var u=c(a);u.Axios=s,u.create=function(e){return c(i(u.defaults,e))},u.Cancel=n(692),u.CancelToken=n(6016),u.isCancel=n(5936),u.all=function(e){return Promise.all(e)},u.spread=n(5431),u.isAxiosError=n(786),e.exports=u,e.exports["default"]=u},692:function(e){"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},6016:function(e,t,n){"use strict";n(1703);var r=n(692);function o(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e,t=new o((function(t){e=t}));return{token:t,cancel:e}},e.exports=o},5936:function(e){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},7104:function(e,t,n){"use strict";var r=n(6642),o=n(4360),s=n(999),i=n(6559),a=n(8186),c=n(6298),u=c.validators;function f(e){this.defaults=e,this.interceptors={request:new s,response:new s}}f.prototype.request=function(e){"string"===typeof e?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=a(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=e.transitional;void 0!==t&&c.assertOptions(t,{silentJSONParsing:u.transitional(u.boolean,"1.0.0"),forcedJSONParsing:u.transitional(u.boolean,"1.0.0"),clarifyTimeoutError:u.transitional(u.boolean,"1.0.0")},!1);var n=[],r=!0;this.interceptors.request.forEach((function(t){"function"===typeof t.runWhen&&!1===t.runWhen(e)||(r=r&&t.synchronous,n.unshift(t.fulfilled,t.rejected))}));var o,s=[];if(this.interceptors.response.forEach((function(e){s.push(e.fulfilled,e.rejected)})),!r){var f=[i,void 0];Array.prototype.unshift.apply(f,n),f=f.concat(s),o=Promise.resolve(e);while(f.length)o=o.then(f.shift(),f.shift());return o}var l=e;while(n.length){var d=n.shift(),p=n.shift();try{l=d(l)}catch(h){p(h);break}}try{o=i(l)}catch(h){return Promise.reject(h)}while(s.length)o=o.then(s.shift(),s.shift());return o},f.prototype.getUri=function(e){return e=a(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){f.prototype[e]=function(t,n){return this.request(a(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){f.prototype[e]=function(t,n,r){return this.request(a(r||{},{method:e,url:t,data:n}))}})),e.exports=f},999:function(e,t,n){"use strict";var r=n(6642);function o(){this.handlers=[]}o.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},5047:function(e,t,n){"use strict";var r=n(4777),o=n(2381);e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},4393:function(e,t,n){"use strict";n(1703);var r=n(5891);e.exports=function(e,t,n,o,s){var i=new Error(e);return r(i,t,n,o,s)}},6559:function(e,t,n){"use strict";var r=n(6642),o=n(3756),s=n(5936),i=n(8711);function a(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){a(e),e.headers=e.headers||{},e.data=o.call(e,e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]}));var t=e.adapter||i.adapter;return t(e).then((function(t){return a(e),t.data=o.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return s(t)||(a(e),t&&t.response&&(t.response.data=o.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},5891:function(e){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},8186:function(e,t,n){"use strict";var r=n(6642);e.exports=function(e,t){t=t||{};var n={},o=["url","method","data"],s=["headers","auth","proxy","params"],i=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],a=["validateStatus"];function c(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function u(o){r.isUndefined(t[o])?r.isUndefined(e[o])||(n[o]=c(void 0,e[o])):n[o]=c(e[o],t[o])}r.forEach(o,(function(e){r.isUndefined(t[e])||(n[e]=c(void 0,t[e]))})),r.forEach(s,u),r.forEach(i,(function(o){r.isUndefined(t[o])?r.isUndefined(e[o])||(n[o]=c(void 0,e[o])):n[o]=c(void 0,t[o])})),r.forEach(a,(function(r){r in t?n[r]=c(e[r],t[r]):r in e&&(n[r]=c(void 0,e[r]))}));var f=o.concat(s).concat(i).concat(a),l=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===f.indexOf(e)}));return r.forEach(l,u),n}},6806:function(e,t,n){"use strict";var r=n(4393);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},3756:function(e,t,n){"use strict";var r=n(6642),o=n(8711);e.exports=function(e,t,n){var s=this||o;return r.forEach(n,(function(n){e=n.call(s,e,t)})),e}},8711:function(e,t,n){"use strict";var r=n(6642),o=n(1446),s=n(5891),i={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function c(){var e;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(e=n(4951)),e}function u(e,t,n){if(r.isString(e))try{return(t||JSON.parse)(e),r.trim(e)}catch(o){if("SyntaxError"!==o.name)throw o}return(n||JSON.stringify)(e)}var f={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:c(),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)||t&&"application/json"===t["Content-Type"]?(a(t,"application/json"),u(e)):e}],transformResponse:[function(e){var t=this.transitional,n=t&&t.silentJSONParsing,o=t&&t.forcedJSONParsing,i=!n&&"json"===this.responseType;if(i||o&&r.isString(e)&&e.length)try{return JSON.parse(e)}catch(a){if(i){if("SyntaxError"===a.name)throw s(a,this,"E_JSON_PARSE");throw a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){f.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){f.headers[e]=r.merge(i)})),e.exports=f},5955:function(e){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},4360:function(e,t,n){"use strict";var r=n(6642);function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var s;if(n)s=n(t);else if(r.isURLSearchParams(t))s=t.toString();else{var i=[];r.forEach(t,(function(e,t){null!==e&&"undefined"!==typeof e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),i.push(o(t)+"="+o(e))})))})),s=i.join("&")}if(s){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}},2381:function(e){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},3833:function(e,t,n){"use strict";var r=n(6642);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,s,i){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(s)&&a.push("domain="+s),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},4777:function(e){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},786:function(e){"use strict";e.exports=function(e){return"object"===typeof e&&!0===e.isAxiosError}},9896:function(e,t,n){"use strict";var r=n(6642);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return function(){return!0}}()},1446:function(e,t,n){"use strict";var r=n(6642);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},5976:function(e,t,n){"use strict";var r=n(6642),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,s,i={};return e?(r.forEach(e.split("\n"),(function(e){if(s=e.indexOf(":"),t=r.trim(e.substr(0,s)).toLowerCase(),n=r.trim(e.substr(s+1)),t){if(i[t]&&o.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([n]):i[t]?i[t]+", "+n:n}})),i):i}},5431:function(e){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},6298:function(e,t,n){"use strict";n(1703);var r=n(8593),o={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){o[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var s={},i=r.version.split(".");function a(e,t){for(var n=t?t.split("."):i,r=e.split("."),o=0;o<3;o++){if(n[o]>r[o])return!0;if(n[o]<r[o])return!1}return!1}function c(e,t,n){if("object"!==typeof e)throw new TypeError("options must be an object");var r=Object.keys(e),o=r.length;while(o-- >0){var s=r[o],i=t[s];if(i){var a=e[s],c=void 0===a||i(a,s,e);if(!0!==c)throw new TypeError("option "+s+" must be "+c)}else if(!0!==n)throw Error("Unknown option "+s)}}o.transitional=function(e,t,n){var o=t&&a(t);function i(e,t){return"[Axios v"+r.version+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,r,a){if(!1===e)throw new Error(i(r," has been removed in "+t));return o&&!s[r]&&(s[r]=!0,console.warn(i(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,a)}},e.exports={isOlderVersion:a,assertOptions:c,validators:o}},6642:function(e,t,n){"use strict";var r=n(5955),o=Object.prototype.toString;function s(e){return"[object Array]"===o.call(e)}function i(e){return"undefined"===typeof e}function a(e){return null!==e&&!i(e)&&null!==e.constructor&&!i(e.constructor)&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function c(e){return"[object ArrayBuffer]"===o.call(e)}function u(e){return"undefined"!==typeof FormData&&e instanceof FormData}function f(e){var t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer,t}function l(e){return"string"===typeof e}function d(e){return"number"===typeof e}function p(e){return null!==e&&"object"===typeof e}function h(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function g(e){return"[object Date]"===o.call(e)}function m(e){return"[object File]"===o.call(e)}function v(e){return"[object Blob]"===o.call(e)}function y(e){return"[object Function]"===o.call(e)}function b(e){return p(e)&&y(e.pipe)}function x(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams}function w(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function j(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function S(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),s(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}function E(){var e={};function t(t,n){h(e[n])&&h(t)?e[n]=E(e[n],t):h(t)?e[n]=E({},t):s(t)?e[n]=t.slice():e[n]=t}for(var n=0,r=arguments.length;n<r;n++)S(arguments[n],t);return e}function k(e,t,n){return S(t,(function(t,o){e[o]=n&&"function"===typeof t?r(t,n):t})),e}function O(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}e.exports={isArray:s,isArrayBuffer:c,isBuffer:a,isFormData:u,isArrayBufferView:f,isString:l,isNumber:d,isObject:p,isPlainObject:h,isUndefined:i,isDate:g,isFile:m,isBlob:v,isFunction:y,isStream:b,isURLSearchParams:x,isStandardBrowserEnv:j,forEach:S,merge:E,extend:k,trim:w,stripBOM:O}},1110:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(3396);const o={class:"about"},s=(0,r._)("h1",null,"This is an about page",-1),i=[s];function a(e,t){return(0,r.wg)(),(0,r.iD)("div",o,i)}var c=n(89);const u={},f=(0,c.Z)(u,[["render",a]]);var l=f},1708:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(3396);function o(e,t,n,o,s,i){const a=(0,r.up)("networkGraph");return(0,r.wg)(),(0,r.j4)(a,{sheetName:"Electronics Track"})}function s(e,t,n,o,s,i){const a=(0,r.up)("v-network-graph");return(0,r.wg)(),(0,r.j4)(a,{nodes:e.nodes,edges:e.edges,configs:e.configs,layouts:e.layouts,"event-handlers":e.eventHandlers},null,8,["nodes","edges","configs","layouts","event-handlers"])}var i=n(4870),a=n(1957),c=n(6265),u=n.n(c),f=(0,r.aZ)({props:{sheetName:String},setup(){const e=(0,i.qj)(a.Kl({view:{panEnabled:!0,zoomEnabled:!0,scalingObjects:!1},node:{selectable:!0,draggable:!0,label:{visible:!0,fontFamily:"monospace",color:"#ffffff"},selected:{type:"circle",radius:16,color:"#fff"},hover:{type:"circle",radius:16,color:"#fff"}}})),t={"node:click":({node:e})=>{console.log("clicked ",e)}};return{configs:e,eventHandlers:t}},mounted(){const e="https://docs.google.com/spreadsheets/d/1l8NALL87S5_vra7CM6UCBXBNTI7dY4kkIE1fO2GYBkw/gviz/tq?tqx=out:csv&sheet=Electronics%20Track";u().get(e).then((e=>{this.csv=e.data,this.csv=this.csvToArray(this.csv)}))},methods:{csvToArray(e){const t=[];for(let n=0;n<e.split("\n").length;n++){let r=e.split("\n")[n];r=r.split(",");for(let e=0;e<r.length;e++)r[e]=r[e].substring(1,r[e].length-1);t.push(r)}return this.extractNodes(t),this.extractEdges(t),this.extractLayout(t),this.extractLayoutWithRealEstate(t),t},extractNodes(e){let t=[];for(let n=1;n<e.length;n++)t.push(e[n][0]);t=[...new Set(t)];for(let n=0;n<t.length;n++)this.nodes.push({name:t[n]});this.nodes.shift()},distance(e,t,n,r){return((n-e)**2+(r-t)**2)**.5},extractLayout(e){let t={},n=[],r=[],o=[],s=0,i=0;for(let a=0;a<this.nodes.length;a++){for(let e=0;e<this.edges.length;e++)i=this.findNodeIndex(this.nodes[a].name),this.edges[e].source!==i.toString()&&this.edges[e].target!==i.toString()||(s+=1,this.edges[e].source===i.toString()?o.push(this.edges[e].target):o.push(this.edges[e].source));n[a]=s,s=0,r.push(o),o=[]}for(let a=0;a<this.nodes.length;a++)n[a]===Math.max(...n)?t[a.toString()]={x:1500,y:-100*e[a+1][6]}:1===n[a]?void 0!=t[r[a][0]]&&(t[a.toString()]={x:t[r[a][0]]["x"],y:-100*e[a+1][6]}):t[a.toString()]={x:350*a,y:-100*e[a+1][6]};for(let a=0;a<Object.keys(t).length;a++){for(let e=0;e<Object.keys(t).length;e++)a!=e&&void 0!=t[Object.keys(t)[a].toString()]&&void 0!=t[Object.keys(t)[e].toString()]&&t[Object.keys(t)[a].toString()].x==t[Object.keys(t)[e].toString()].x&&t[Object.keys(t)[a].toString()].y==t[Object.keys(t)[e].toString()].y&&(t[Object.keys(t)[a].toString()].x+=175,t[Object.keys(t)[e].toString()].x-=175,console.log("change"));1===n[parseInt(Object.keys(t)[a])]&&void 0!=t[r[parseInt(Object.keys(t)[a])][0]]&&(console.log(a),t[Object.keys(t)[a].toString()]={x:t[r[parseInt(Object.keys(t)[a])][0]]["x"],y:-100*e[parseInt(Object.keys(t)[a])+1][6]})}console.log("table",e),console.log("layout",t),console.log("edges",this.edges),console.log("nodes",this.nodes),this.layouts.nodes=t},extractLayoutWithRealEstate(e){let t={},n=[];console.log("table",e);for(let r=0;r<=Math.max(...this.findDifficultyLevels(e));r++){n=[];for(let t=0;t<this.findDifficultyLevels(e).length;t++)this.findDifficultyLevels(e)[t]===r.toString()&&n.push(t);if(1===n.length)t[n[0].toString()]={x:0,y:-100*e[n[0]+1][6]};else{let r=0;for(let e=0;e<n.length;e++)r+=this.findRealEstateVal(n[e]);let o=200*r,s=100*-r;for(let i=0;i<n.length;i++)t[n[i]]={x:s+this.findRealEstateVal(n[i])/r*o/2,y:-100*e[n[i]+1][6]},s+=this.findRealEstateVal(n[i])*o/r}}console.log("layout new",t),this.layouts.nodes=t},findDifficultyLevels(e){let t=[];for(let n=1;n<e.length;n++)t.push(e[n][6]);return t},findRealEstateVal(e){let t=.5;for(let n=0;n<this.edges.length;n++)this.edges[n].target===e.toString()&&t++;return t},findNodeIndex(e){for(let t=0;t<this.nodes.length;t++)if(e===this.nodes[t].name)return t;return console.log("cannot find ",e),-1},extractEdges(e){let t=[];for(let n=1;n<e.length;n++){const r=e[n][2].split(";");for(let o=0;o<r.length;o++)t.push({source:this.findNodeIndex(e[n][0]).toString(),target:this.findNodeIndex(r[o]).toString(),label:`edge-${this.findNodeIndex(e[n][0]).toString()}-${this.findNodeIndex(r[o]).toString()}`})}this.edges=t}},data(){return{csv:["test"],nodes:[{name:"Test"}],edges:[{source:"0",target:"1",label:"test-edge"}],layouts:{nodes:{}}}}}),l=n(89);const d=(0,l.Z)(f,[["render",s],["__scopeId","data-v-10254079"]]);var p=d,h=(0,r.aZ)({components:{networkGraph:p}});const g=(0,l.Z)(h,[["render",o]]);var m=g},8593:function(e){"use strict";e.exports=JSON.parse('{"name":"axios","version":"0.21.4","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://axios-http.com","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"jsdelivr":"dist/axios.min.js","unpkg":"dist/axios.min.js","typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.14.0"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}')}}]);
//# sourceMappingURL=about.8ac3c676.js.map