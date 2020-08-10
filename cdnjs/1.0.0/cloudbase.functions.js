!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(function(){try{return require("null")}catch(t){}}()):"function"==typeof define&&define.amd?define("cloudbase_functions",["null"],e):"object"==typeof exports?exports.cloudbase_functions=e(function(){try{return require("null")}catch(t){}}()):t.cloudbase_functions=e(t.null)}("undefined"!=typeof window?window:this,(function(t){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}([function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.throwError=e.printInfo=e.printError=e.printWarn=e.execCallback=e.createPromiseCallback=e.removeParam=e.getHash=e.getQuery=e.toQueryString=e.createSign=e.formatUrl=e.genSeqId=e.isFormData=e.isInstanceOf=e.isNull=e.isPalinObject=e.isUndefined=e.isString=e.isArray=void 0;var o=r(n(11)),i=r(n(16)),s=r(n(17)),a=n(3);function u(t){var e=i.default.stringify(t);return e=(e=(e=e.replace(/=+$/,"")).replace(/\+/g,"-")).replace(/\//g,"_")}e.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)},e.isString=function(t){return"string"==typeof t},e.isUndefined=function(t){return void 0===t},e.isPalinObject=function(t){return"[object Object]"===Object.prototype.toString.call(t)},e.isNull=function(t){return"[object Null]"===Object.prototype.toString.call(t)},e.isInstanceOf=function(t,e){return t instanceof e},e.isFormData=function(t){return"[object FormData]"===Object.prototype.toString.call(t)},e.genSeqId=function(){return Math.random().toString(16).slice(2)},e.formatUrl=function(t,e,n){void 0===n&&(n={});var r=/\?/.test(e),o="";for(var i in n)""===o?!r&&(e+="?"):o+="&",o+=i+"="+encodeURIComponent(n[i]);return/^http(s)?\:\/\//.test(e+=o)?e:""+t+e},e.createSign=function(t,e){var n=u(s.default.parse(JSON.stringify({alg:"HS256",typ:"JWT"})))+"."+u(s.default.parse(JSON.stringify(t)));return n+"."+u(o.default(n,e))},e.toQueryString=function(t){void 0===t&&(t={});var e=[];for(var n in t)e.push(n+"="+encodeURIComponent(t[n]));return e.join("&")},e.getQuery=function(t,e){if("undefined"==typeof window)return!1;var n=e||window.location.search,r=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),o=n.substr(n.indexOf("?")+1).match(r);return null!=o?o[2]:""},e.getHash=function(t){if("undefined"==typeof window)return"";var e=window.location.hash.match(new RegExp("[#?&/]"+t+"=([^&#]*)"));return e?e[1]:""},e.removeParam=function(t,e){var n=e.split("?")[0],r=[],o=-1!==e.indexOf("?")?e.split("?")[1]:"";if(""!==o){for(var i=(r=o.split("&")).length-1;i>=0;i-=1)r[i].split("=")[0]===t&&r.splice(i,1);n=n+"?"+r.join("&")}return n},e.createPromiseCallback=function(){var t;if(!Promise){(t=function(){}).promise={};var e=function(){throw new Error('Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.')};return Object.defineProperty(t.promise,"then",{get:e}),Object.defineProperty(t.promise,"catch",{get:e}),t}var n=new Promise((function(e,n){t=function(t,r){return t?n(t):e(r)}}));return t.promise=n,t},e.execCallback=function(t,e,n){if(void 0===n&&(n=null),t&&"function"==typeof t)return t(e,n);if(e)throw e;return n},e.printWarn=function(t,e){console.warn("["+a.SDK_NAME+"]["+t+"]:"+e)},e.printError=function(t,e){console.error({code:t,msg:"["+a.SDK_NAME+"]["+t+"]:"+e})},e.printInfo=function(t,e){console.log("["+a.SDK_NAME+"]["+t+"]:"+e)},e.throwError=function(t,e){throw new Error(JSON.stringify({code:t,msg:"["+a.SDK_NAME+"]["+t+"]:"+e}))}},function(t,e,n){(function(e){var r;t.exports=(r=r||function(t,r){var o;if("undefined"!=typeof window&&window.crypto&&(o=window.crypto),!o&&"undefined"!=typeof window&&window.msCrypto&&(o=window.msCrypto),!o&&void 0!==e&&e.crypto&&(o=e.crypto),!o)try{o=n(13)}catch(t){}var i=function(){if(o){if("function"==typeof o.getRandomValues)try{return o.getRandomValues(new Uint32Array(1))[0]}catch(t){}if("function"==typeof o.randomBytes)try{return o.randomBytes(4).readInt32LE()}catch(t){}}throw new Error("Native crypto module could not be used to get secure random number.")},s=Object.create||function(){function t(){}return function(e){var n;return t.prototype=e,n=new t,t.prototype=null,n}}(),a={},u=a.lib={},c=u.Base={extend:function(t){var e=s(this);return t&&e.mixIn(t),e.hasOwnProperty("init")&&this.init!==e.init||(e.init=function(){e.$super.init.apply(this,arguments)}),e.init.prototype=e,e.$super=this,e},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}},f=u.WordArray=c.extend({init:function(t,e){t=this.words=t||[],this.sigBytes=null!=e?e:4*t.length},toString:function(t){return(t||p).stringify(this)},concat:function(t){var e=this.words,n=t.words,r=this.sigBytes,o=t.sigBytes;if(this.clamp(),r%4)for(var i=0;i<o;i++){var s=n[i>>>2]>>>24-i%4*8&255;e[r+i>>>2]|=s<<24-(r+i)%4*8}else for(i=0;i<o;i+=4)e[r+i>>>2]=n[i>>>2];return this.sigBytes+=o,this},clamp:function(){var e=this.words,n=this.sigBytes;e[n>>>2]&=4294967295<<32-n%4*8,e.length=t.ceil(n/4)},clone:function(){var t=c.clone.call(this);return t.words=this.words.slice(0),t},random:function(t){for(var e=[],n=0;n<t;n+=4)e.push(i());return new f.init(e,t)}}),l=a.enc={},p=l.Hex={stringify:function(t){for(var e=t.words,n=t.sigBytes,r=[],o=0;o<n;o++){var i=e[o>>>2]>>>24-o%4*8&255;r.push((i>>>4).toString(16)),r.push((15&i).toString(16))}return r.join("")},parse:function(t){for(var e=t.length,n=[],r=0;r<e;r+=2)n[r>>>3]|=parseInt(t.substr(r,2),16)<<24-r%8*4;return new f.init(n,e/2)}},h=l.Latin1={stringify:function(t){for(var e=t.words,n=t.sigBytes,r=[],o=0;o<n;o++){var i=e[o>>>2]>>>24-o%4*8&255;r.push(String.fromCharCode(i))}return r.join("")},parse:function(t){for(var e=t.length,n=[],r=0;r<e;r++)n[r>>>2]|=(255&t.charCodeAt(r))<<24-r%4*8;return new f.init(n,e)}},d=l.Utf8={stringify:function(t){try{return decodeURIComponent(escape(h.stringify(t)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:function(t){return h.parse(unescape(encodeURIComponent(t)))}},v=u.BufferedBlockAlgorithm=c.extend({reset:function(){this._data=new f.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=d.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(e){var n,r=this._data,o=r.words,i=r.sigBytes,s=this.blockSize,a=i/(4*s),u=(a=e?t.ceil(a):t.max((0|a)-this._minBufferSize,0))*s,c=t.min(4*u,i);if(u){for(var l=0;l<u;l+=s)this._doProcessBlock(o,l);n=o.splice(0,u),r.sigBytes-=c}return new f.init(n,c)},clone:function(){var t=c.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0}),y=(u.Hasher=v.extend({cfg:c.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){v.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){return t&&this._append(t),this._doFinalize()},blockSize:16,_createHelper:function(t){return function(e,n){return new t.init(n).finalize(e)}},_createHmacHelper:function(t){return function(e,n){return new y.HMAC.init(t,n).finalize(e)}}}),a.algo={});return a}(Math),r)}).call(this,n(12))},function(t,e,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),o=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),i=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.hasOwnProperty.call(t,n)&&r(e,t,n);return o(e,t),e};Object.defineProperty(e,"__esModule",{value:!0}),e.utils=e.events=e.cache=e.adapters=e.constants=void 0;var s=i(n(3));e.constants=s;var a=i(n(9));e.adapters=a;var u=i(n(18));e.cache=u;var c=i(n(20));e.events=c;var f=i(n(0));e.utils=f},function(t,e,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),o=this&&this.__exportStar||function(t,e){for(var n in t)"default"===n||e.hasOwnProperty(n)||r(e,t,n)};Object.defineProperty(e,"__esModule",{value:!0}),o(n(4),e),o(n(8),e)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.PROTOCOL=e.SDK_NAME=void 0,e.SDK_NAME="@cloudbase/js-sdk",e.PROTOCOL="https:"},function(t,e,n){"use strict";var r;n.r(e),n.d(e,"StorageType",(function(){return r})),n.d(e,"AbstractSDKRequest",(function(){return o})),n.d(e,"AbstractStorage",(function(){return i})),n.d(e,"formatUrl",(function(){return s})),function(t){t.local="local",t.none="none",t.session="session"}(r||(r={}));var o=function(){},i=function(){};function s(t,e,n){void 0===n&&(n={});var r=/\?/.test(e),o="";for(var i in n)""===o?!r&&(e+="?"):o+="&",o+=i+"="+encodeURIComponent(n[i]);return/^http(s)?\:\/\//.test(e+=o)?e:""+t+e}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.registerFunctions=void 0;var r=n(7);Object.defineProperty(e,"registerFunctions",{enumerable:!0,get:function(){return r.registerFunctions}})},function(t,e,n){"use strict";n.r(e),n.d(e,"registerFunctions",(function(){return f}));var r=n(2),o=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function s(t){try{u(r.next(t))}catch(t){i(t)}}function a(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}u((r=r.apply(t,e||[])).next())}))},i=function(t,e){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},s=r.constants.SDK_NAME,a=r.constants.ERRORS,u=r.utils.execCallback,c={name:"functions",entity:{callFunction:function(t,e){return o(this,void 0,void 0,(function(){var n,r,o,c,f,l,p,h,d,v,y,_;return i(this,(function(i){switch(i.label){case 0:n=t.name,r=t.data,o=t.query,c=t.parse,f=t.search,n||u(e,new Error("["+s+"]["+a.INVALID_PARAMS+"][functions.callFunction] invalid name"));try{l=r?JSON.stringify(r):""}catch(t){u(e,new Error("["+s+"]["+a.INVALID_PARAMS+"][functions.callFunction] invalid data"))}p="functions.invokeFunction",h={inQuery:o,parse:c,search:f,function_name:n,request_data:l},d=this.request,i.label=1;case 1:return i.trys.push([1,3,,4]),[4,d.send(p,h)];case 2:if((v=i.sent()).code)return[2,u(e,null,v)];if(y=v.data.response_data,c)return[2,u(e,null,{result:y,requestId:v.requestId})];try{return y=JSON.parse(v.data.response_data),[2,u(e,null,{result:y,requestId:v.requestId})]}catch(t){u(e,new Error("["+s+"]["+a.INVALID_PARAMS+"][functions.callFunction] response data must be json"))}return[3,4];case 3:return _=i.sent(),u(e,_),[3,4];case 4:return[2]}}))}))}}};try{cloudbase.registerComponent(c)}catch(t){}function f(t){t.registerComponent(c)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ERRORS=void 0,e.ERRORS={INVALID_PARAMS:"INVALID_PARAMS",INVALID_SYNTAX:"INVALID_SYNTAX",INVALID_OPERATION:"INVALID_OPERATION",OPERATION_FAIL:"OPERATION_FAIL",NETWORK_ERROR:"NETWORK_ERROR",UNKOWN_ERROR:"UNKOWN_ERROR"}},function(t,e,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),o=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),i=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.hasOwnProperty.call(t,n)&&r(e,t,n);return o(e,t),e};Object.defineProperty(e,"__esModule",{value:!0}),e.useDefaultAdapter=e.useAdapters=e.RUNTIME=void 0;var s,a=i(n(10)),u=n(0);!function(t){t.WEB="web",t.WX_MP="wx_mp"}(s=e.RUNTIME||(e.RUNTIME={})),e.useAdapters=function(t){for(var e=0,n=u.isArray(t)?t:[t];e<n.length;e++){var r=n[e],o=r.isMatch,i=r.genAdapter,s=r.runtime;if(o())return{adapter:i(),runtime:s}}},e.useDefaultAdapter=function(){return{adapter:a.genAdapter(),runtime:s.WEB}}},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__assign||function(){return(i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},s=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function s(t){try{u(r.next(t))}catch(t){i(t)}}function a(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}u((r=r.apply(t,e||[])).next())}))},a=this&&this.__generator||function(t,e){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(e,"__esModule",{value:!0}),e.WebRequest=e.genAdapter=void 0;var u=n(5),c=n(0),f=n(4),l=function(t){function e(e){var n=t.call(this)||this,r=e.timeout,o=e.timeoutMsg,i=e.restrictedMethods;return n._timeout=r||0,n._timeoutMsg=o||"请求超时",n._restrictedMethods=i||["get","post","upload","download"],n}return o(e,t),e.prototype.get=function(t){return this._request(i(i({},t),{method:"get"}),this._restrictedMethods.includes("get"))},e.prototype.post=function(t){return this._request(i(i({},t),{method:"post"}),this._restrictedMethods.includes("post"))},e.prototype.put=function(t){return this._request(i(i({},t),{method:"put"}))},e.prototype.upload=function(t){var e=t.data,n=t.file,r=t.name,o=new FormData;for(var s in e)o.append(s,e[s]);return o.append("key",r),o.append("file",n),this._request(i(i({},t),{data:o,method:"post"}),this._restrictedMethods.includes("upload"))},e.prototype.download=function(t){return s(this,void 0,void 0,(function(){var e,n;return a(this,(function(r){return e=decodeURIComponent(new URL(t.url).pathname.split("/").pop()||""),(n=document.createElement("a")).href=t.url,n.setAttribute("download",e),n.setAttribute("target","_blank"),document.body.appendChild(n),n.click(),[2,new Promise((function(e){e({statusCode:200,tempFilePath:t.url})}))]}))}))},e.prototype._request=function(t,e){var n=this;void 0===e&&(e=!1);var r=String(t.method).toLowerCase()||"get";return new Promise((function(o){var i,s,a=t.url,u=t.headers,l=void 0===u?{}:u,p=t.data,h=t.responseType,d=t.withCredentials,v=t.body,y=t.onUploadProgress,_=c.formatUrl(f.PROTOCOL,a,"get"===r?p:{}),g=new XMLHttpRequest;for(var m in g.open(r,_),h&&(g.responseType=h),l)g.setRequestHeader(m,l[m]);y&&g.addEventListener("progress",y),g.onreadystatechange=function(){var t={};if(4===g.readyState){var e=g.getAllResponseHeaders().trim().split(/[\r\n]+/),n={};e.forEach((function(t){var e=t.split(": "),r=e.shift().toLowerCase(),o=e.join(": ");n[r]=o})),t.header=n,t.statusCode=g.status;try{t.data=JSON.parse(g.responseText)}catch(e){t.data=g.responseText}clearTimeout(i),o(t)}},e&&n._timeout&&(i=setTimeout((function(){console.warn(n._timeoutMsg),g.abort()}),n._timeout)),s=c.isFormData(p)?p:"application/x-www-form-urlencoded"===l["content-type"]?c.toQueryString(p):v||(p?JSON.stringify(p):void 0),d&&(g.withCredentials=!0),g.send(s)}))},e}(u.AbstractSDKRequest);e.WebRequest=l,e.genAdapter=function(){return{root:window,reqClass:l,wsClass:WebSocket,localStorage:localStorage,sessionStorage:sessionStorage}}},function(t,e,n){var r;t.exports=(r=n(1),n(14),n(15),r.HmacSHA256)},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(e,n){if(void 0===t){var r=new Error("Cannot find module 'null'");throw r.code="MODULE_NOT_FOUND",r}e.exports=t},function(t,e,n){var r;t.exports=(r=n(1),function(t){var e=r,n=e.lib,o=n.WordArray,i=n.Hasher,s=e.algo,a=[],u=[];!function(){function e(e){for(var n=t.sqrt(e),r=2;r<=n;r++)if(!(e%r))return!1;return!0}function n(t){return 4294967296*(t-(0|t))|0}for(var r=2,o=0;o<64;)e(r)&&(o<8&&(a[o]=n(t.pow(r,.5))),u[o]=n(t.pow(r,1/3)),o++),r++}();var c=[],f=s.SHA256=i.extend({_doReset:function(){this._hash=new o.init(a.slice(0))},_doProcessBlock:function(t,e){for(var n=this._hash.words,r=n[0],o=n[1],i=n[2],s=n[3],a=n[4],f=n[5],l=n[6],p=n[7],h=0;h<64;h++){if(h<16)c[h]=0|t[e+h];else{var d=c[h-15],v=(d<<25|d>>>7)^(d<<14|d>>>18)^d>>>3,y=c[h-2],_=(y<<15|y>>>17)^(y<<13|y>>>19)^y>>>10;c[h]=v+c[h-7]+_+c[h-16]}var g=r&o^r&i^o&i,m=(r<<30|r>>>2)^(r<<19|r>>>13)^(r<<10|r>>>22),b=p+((a<<26|a>>>6)^(a<<21|a>>>11)^(a<<7|a>>>25))+(a&f^~a&l)+u[h]+c[h];p=l,l=f,f=a,a=s+b|0,s=i,i=o,o=r,r=b+(m+g)|0}n[0]=n[0]+r|0,n[1]=n[1]+o|0,n[2]=n[2]+i|0,n[3]=n[3]+s|0,n[4]=n[4]+a|0,n[5]=n[5]+f|0,n[6]=n[6]+l|0,n[7]=n[7]+p|0},_doFinalize:function(){var e=this._data,n=e.words,r=8*this._nDataBytes,o=8*e.sigBytes;return n[o>>>5]|=128<<24-o%32,n[14+(o+64>>>9<<4)]=t.floor(r/4294967296),n[15+(o+64>>>9<<4)]=r,e.sigBytes=4*n.length,this._process(),this._hash},clone:function(){var t=i.clone.call(this);return t._hash=this._hash.clone(),t}});e.SHA256=i._createHelper(f),e.HmacSHA256=i._createHmacHelper(f)}(Math),r.SHA256)},function(t,e,n){var r,o,i,s;t.exports=(r=n(1),i=(o=r).lib.Base,s=o.enc.Utf8,void(o.algo.HMAC=i.extend({init:function(t,e){t=this._hasher=new t.init,"string"==typeof e&&(e=s.parse(e));var n=t.blockSize,r=4*n;e.sigBytes>r&&(e=t.finalize(e)),e.clamp();for(var o=this._oKey=e.clone(),i=this._iKey=e.clone(),a=o.words,u=i.words,c=0;c<n;c++)a[c]^=1549556828,u[c]^=909522486;o.sigBytes=i.sigBytes=r,this.reset()},reset:function(){var t=this._hasher;t.reset(),t.update(this._iKey)},update:function(t){return this._hasher.update(t),this},finalize:function(t){var e=this._hasher,n=e.finalize(t);return e.reset(),e.finalize(this._oKey.clone().concat(n))}})))},function(t,e,n){var r,o,i;t.exports=(i=n(1),o=(r=i).lib.WordArray,r.enc.Base64={stringify:function(t){var e=t.words,n=t.sigBytes,r=this._map;t.clamp();for(var o=[],i=0;i<n;i+=3)for(var s=(e[i>>>2]>>>24-i%4*8&255)<<16|(e[i+1>>>2]>>>24-(i+1)%4*8&255)<<8|e[i+2>>>2]>>>24-(i+2)%4*8&255,a=0;a<4&&i+.75*a<n;a++)o.push(r.charAt(s>>>6*(3-a)&63));var u=r.charAt(64);if(u)for(;o.length%4;)o.push(u);return o.join("")},parse:function(t){var e=t.length,n=this._map,r=this._reverseMap;if(!r){r=this._reverseMap=[];for(var i=0;i<n.length;i++)r[n.charCodeAt(i)]=i}var s=n.charAt(64);if(s){var a=t.indexOf(s);-1!==a&&(e=a)}return function(t,e,n){for(var r=[],i=0,s=0;s<e;s++)if(s%4){var a=n[t.charCodeAt(s-1)]<<s%4*2,u=n[t.charCodeAt(s)]>>>6-s%4*2,c=a|u;r[i>>>2]|=c<<24-i%4*8,i++}return o.create(r,i)}(t,e,r)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="},i.enc.Base64)},function(t,e,n){var r;t.exports=(r=n(1),r.enc.Utf8)},function(t,e,n){"use strict";(function(t){var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function s(t){try{u(r.next(t))}catch(t){i(t)}}function a(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}u((r=r.apply(t,e||[])).next())}))},s=this&&this.__generator||function(t,e){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(e,"__esModule",{value:!0}),e.CloudbaseCache=void 0;var a=n(5),u=n(0),c=n(3),f=function(t){function e(e){var n=t.call(this)||this;return n._root=e,e.tcbCacheObject||(e.tcbCacheObject={}),n}return o(e,t),e.prototype.setItem=function(t,e){this._root.tcbCacheObject[t]=e},e.prototype.getItem=function(t){return this._root.tcbCacheObject[t]},e.prototype.removeItem=function(t){delete this._root.tcbCacheObject[t]},e.prototype.clear=function(){delete this._root.tcbCacheObject},e}(a.AbstractStorage);function l(t,e){switch(t){case"local":return e.localStorage?e.localStorage:(u.printWarn(c.ERRORS.INVALID_PARAMS,"localStorage is not supported on current platform"),new f(e.root));case"none":return new f(e.root);default:return e.sessionStorage?e.sessionStorage:(u.printWarn(c.ERRORS.INVALID_PARAMS,"sessionStorage is not supported on current platform"),new f(e.root))}}var p=function(){function e(t){this.keys={};var e=t.persistence,n=t.platformInfo,r=void 0===n?{}:n,o=t.keys,i=void 0===o?{}:o,s=t.alwaysLocalKeys,a=void 0===s?[]:s;this._platformInfo=r,this._alwaysLocalKeys=a,this._storage||(this._persistence=r.adapter.primaryStorage||e,this._storage=l(this._persistence,r.adapter),this.keys=i)}return Object.defineProperty(e.prototype,"mode",{get:function(){return this._storage.mode||"sync"},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"persistence",{get:function(){return this._persistence},enumerable:!1,configurable:!0}),e.prototype.updatePersistence=function(t){if("async"!==this.mode){if(t!==this._persistence){var e="local"===this._persistence;this._persistence=t;var n=l(t,this._platformInfo.adapter);for(var r in this.keys){var o=this.keys[r];if(!e||!this._alwaysLocalKeys.includes(r)){var i=this._storage.getItem(o);u.isUndefined(i)||u.isNull(i)||(n.setItem(o,i),this._storage.removeItem(o))}}this._storage=n}}else u.printWarn(c.ERRORS.INVALID_OPERATION,"current platform's storage is asynchronous, please use updatePersistenceAsync insteed")},e.prototype.updatePersistenceAsync=function(t){return i(this,void 0,void 0,(function(){var e,n,r,o,i,a,c,f;return s(this,(function(s){switch(s.label){case 0:if(t===this._persistence)return[2];for(o in e="local"===this._persistence,this._persistence=t,n=l(t,this._platformInfo.adapter),r=[],this.keys)r.push(o);i=0,s.label=1;case 1:return i<r.length?(a=r[i],c=this.keys[a],e&&this._alwaysLocalKeys.includes(a)?[3,4]:[4,this._storage.getItem(c)]):[3,5];case 2:return f=s.sent(),u.isUndefined(f)||u.isNull(f)?[3,4]:(n.setItem(c,f),[4,this._storage.removeItem(c)]);case 3:s.sent(),s.label=4;case 4:return i++,[3,1];case 5:return this._storage=n,[2]}}))}))},e.prototype.setStore=function(t,e,n){if("async"!==this.mode){if(this._storage)try{var r={version:n||"localCachev1",content:e};this._storage.setItem(t,JSON.stringify(r))}catch(t){return}}else u.printWarn(c.ERRORS.INVALID_OPERATION,"current platform's storage is asynchronous, please use setStoreAsync insteed")},e.prototype.setStoreAsync=function(t,e,n){return i(this,void 0,void 0,(function(){var r;return s(this,(function(o){switch(o.label){case 0:if(!this._storage)return[2];o.label=1;case 1:return o.trys.push([1,3,,4]),r={version:n||"localCachev1",content:e},[4,this._storage.setItem(t,JSON.stringify(r))];case 2:return o.sent(),[3,4];case 3:return o.sent(),[2];case 4:return[2]}}))}))},e.prototype.getStore=function(e,n){var r;if("async"!==this.mode){try{if(void 0!==t&&(null===(r=t.env)||void 0===r?void 0:r.tcb_token))return t.env.tcb_token;if(!this._storage)return""}catch(t){return""}n=n||"localCachev1";var o=this._storage.getItem(e);return o&&o.indexOf(n)>=0?JSON.parse(o).content:""}u.printWarn(c.ERRORS.INVALID_OPERATION,"current platform's storage is asynchronous, please use getStoreAsync insteed")},e.prototype.getStoreAsync=function(e,n){var r;return i(this,void 0,void 0,(function(){var o;return s(this,(function(i){switch(i.label){case 0:try{if(void 0!==t&&(null===(r=t.env)||void 0===r?void 0:r.tcb_token))return[2,t.env.tcb_token];if(!this._storage)return[2,""]}catch(t){return[2,""]}return n=n||"localCachev1",[4,this._storage.getItem(e)];case 1:return(o=i.sent())&&o.indexOf(n)>=0?[2,JSON.parse(o).content]:[2,""]}}))}))},e.prototype.removeStore=function(t){"async"!==this.mode?this._storage.removeItem(t):u.printWarn(c.ERRORS.INVALID_OPERATION,"current platform's storage is asynchronous, please use removeStoreAsync insteed")},e.prototype.removeStoreAsync=function(t){return i(this,void 0,void 0,(function(){return s(this,(function(e){switch(e.label){case 0:return[4,this._storage.removeItem(t)];case 1:return e.sent(),[2]}}))}))},e}();e.CloudbaseCache=p}).call(this,n(19))},function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(t){r=s}}();var u,c=[],f=!1,l=-1;function p(){f&&u&&(f=!1,u.length?c=u.concat(c):l=-1,c.length&&h())}function h(){if(!f){var t=a(p);f=!0;for(var e=c.length;e;){for(u=c,c=[];++l<e;)u&&u[l].run();l=-1,e=c.length}u=null,f=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function v(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new d(t,e)),1!==c.length||f||a(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__spreadArrays||function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var i=arguments[e],s=0,a=i.length;s<a;s++,o++)r[o]=i[s];return r};Object.defineProperty(e,"__esModule",{value:!0}),e.removeEventListener=e.activateEvent=e.addEventListener=e.CloudbaseEventEmitter=e.IErrorEvent=e.CloudbaseEvent=void 0;var s=n(0);var a=function(t,e){this.data=e||null,this.name=t};e.CloudbaseEvent=a;var u=function(t){function e(e,n){var r=t.call(this,"error",{error:e,data:n})||this;return r.error=e,r}return o(e,t),e}(a);e.IErrorEvent=u;var c=function(){function t(){this._listeners={}}return t.prototype.on=function(t,e){return function(t,e,n){n[t]=n[t]||[],n[t].push(e)}(t,e,this._listeners),this},t.prototype.off=function(t,e){return function(t,e,n){if(null==n?void 0:n[t]){var r=n[t].indexOf(e);-1!==r&&n[t].splice(r,1)}}(t,e,this._listeners),this},t.prototype.fire=function(t,e){if(s.isInstanceOf(t,u))return console.error(t.error),this;var n=s.isString(t)?new a(t,e||{}):t,r=n.name;if(this._listens(r)){n.target=this;for(var o=0,c=this._listeners[r]?i(this._listeners[r]):[];o<c.length;o++){c[o].call(this,n)}}return this},t.prototype._listens=function(t){return this._listeners[t]&&this._listeners[t].length>0},t}();e.CloudbaseEventEmitter=c;var f=new c;e.addEventListener=function(t,e){f.on(t,e)},e.activateEvent=function(t,e){void 0===e&&(e={}),f.fire(t,e)},e.removeEventListener=function(t,e){f.off(t,e)}}])}));