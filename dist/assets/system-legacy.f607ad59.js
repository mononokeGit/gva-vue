/*! 
 Build based on gin-vue-admin 
 Time : 1678795244000 */
!function(){function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return l};var l={},t=Object.prototype,u=t.hasOwnProperty,n=Object.defineProperty||function(e,l,t){e[l]=t.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",r=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function d(e,l,t){return Object.defineProperty(e,l,{value:t,enumerable:!0,configurable:!0,writable:!0}),e[l]}try{d({},"")}catch(j){d=function(e,l,t){return e[l]=t}}function c(e,l,t,u){var a=l&&l.prototype instanceof m?l:m,o=Object.create(a.prototype),r=new k(u||[]);return n(o,"_invoke",{value:w(e,t,r)}),o}function f(e,l,t){try{return{type:"normal",arg:e.call(l,t)}}catch(j){return{type:"throw",arg:j}}}l.wrap=c;var s={};function m(){}function p(){}function v(){}var V={};d(V,o,(function(){return this}));var y=Object.getPrototypeOf,h=y&&y(y(z([])));h&&h!==t&&u.call(h,o)&&(V=h);var b=v.prototype=m.prototype=Object.create(V);function _(e){["next","throw","return"].forEach((function(l){d(e,l,(function(e){return this._invoke(l,e)}))}))}function g(e,l){function t(n,a,o,r){var i=f(e[n],e,a);if("throw"!==i.type){var d=i.arg,c=d.value;return c&&"object"==typeof c&&u.call(c,"__await")?l.resolve(c.__await).then((function(e){t("next",e,o,r)}),(function(e){t("throw",e,o,r)})):l.resolve(c).then((function(e){d.value=e,o(d)}),(function(e){return t("throw",e,o,r)}))}r(i.arg)}var a;n(this,"_invoke",{value:function(e,u){function n(){return new l((function(l,n){t(e,u,l,n)}))}return a=a?a.then(n,n):n()}})}function w(e,l,t){var u="suspendedStart";return function(n,a){if("executing"===u)throw new Error("Generator is already running");if("completed"===u){if("throw"===n)throw a;return L()}for(t.method=n,t.arg=a;;){var o=t.delegate;if(o){var r=U(o,t);if(r){if(r===s)continue;return r}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if("suspendedStart"===u)throw u="completed",t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);u="executing";var i=f(e,l,t);if("normal"===i.type){if(u=t.done?"completed":"suspendedYield",i.arg===s)continue;return{value:i.arg,done:t.done}}"throw"===i.type&&(u="completed",t.method="throw",t.arg=i.arg)}}}function U(e,l){var t=l.method,u=e.iterator[t];if(void 0===u)return l.delegate=null,"throw"===t&&e.iterator.return&&(l.method="return",l.arg=void 0,U(e,l),"throw"===l.method)||"return"!==t&&(l.method="throw",l.arg=new TypeError("The iterator does not provide a '"+t+"' method")),s;var n=f(u,e.iterator,l.arg);if("throw"===n.type)return l.method="throw",l.arg=n.arg,l.delegate=null,s;var a=n.arg;return a?a.done?(l[e.resultName]=a.value,l.next=e.nextLoc,"return"!==l.method&&(l.method="next",l.arg=void 0),l.delegate=null,s):a:(l.method="throw",l.arg=new TypeError("iterator result is not an object"),l.delegate=null,s)}function x(e){var l={tryLoc:e[0]};1 in e&&(l.catchLoc=e[1]),2 in e&&(l.finallyLoc=e[2],l.afterLoc=e[3]),this.tryEntries.push(l)}function q(e){var l=e.completion||{};l.type="normal",delete l.arg,e.completion=l}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function z(e){if(e){var l=e[o];if(l)return l.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var t=-1,n=function l(){for(;++t<e.length;)if(u.call(e,t))return l.value=e[t],l.done=!1,l;return l.value=void 0,l.done=!0,l};return n.next=n}}return{next:L}}function L(){return{value:void 0,done:!0}}return p.prototype=v,n(b,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:p,configurable:!0}),p.displayName=d(v,i,"GeneratorFunction"),l.isGeneratorFunction=function(e){var l="function"==typeof e&&e.constructor;return!!l&&(l===p||"GeneratorFunction"===(l.displayName||l.name))},l.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,d(e,i,"GeneratorFunction")),e.prototype=Object.create(b),e},l.awrap=function(e){return{__await:e}},_(g.prototype),d(g.prototype,r,(function(){return this})),l.AsyncIterator=g,l.async=function(e,t,u,n,a){void 0===a&&(a=Promise);var o=new g(c(e,t,u,n),a);return l.isGeneratorFunction(t)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},_(b),d(b,i,"Generator"),d(b,o,(function(){return this})),d(b,"toString",(function(){return"[object Generator]"})),l.keys=function(e){var l=Object(e),t=[];for(var u in l)t.push(u);return t.reverse(),function e(){for(;t.length;){var u=t.pop();if(u in l)return e.value=u,e.done=!1,e}return e.done=!0,e}},l.values=z,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(q),!e)for(var l in this)"t"===l.charAt(0)&&u.call(this,l)&&!isNaN(+l.slice(1))&&(this[l]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var l=this;function t(t,u){return o.type="throw",o.arg=e,l.next=t,u&&(l.method="next",l.arg=void 0),!!u}for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],o=a.completion;if("root"===a.tryLoc)return t("end");if(a.tryLoc<=this.prev){var r=u.call(a,"catchLoc"),i=u.call(a,"finallyLoc");if(r&&i){if(this.prev<a.catchLoc)return t(a.catchLoc,!0);if(this.prev<a.finallyLoc)return t(a.finallyLoc)}else if(r){if(this.prev<a.catchLoc)return t(a.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return t(a.finallyLoc)}}}},abrupt:function(e,l){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc<=this.prev&&u.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=l&&l<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=l,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(o)},complete:function(e,l){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&l&&(this.next=l),s},finish:function(e){for(var l=this.tryEntries.length-1;l>=0;--l){var t=this.tryEntries[l];if(t.finallyLoc===e)return this.complete(t.completion,t.afterLoc),q(t),s}},catch:function(e){for(var l=this.tryEntries.length-1;l>=0;--l){var t=this.tryEntries[l];if(t.tryLoc===e){var u=t.completion;if("throw"===u.type){var n=u.arg;q(t)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,l,t){return this.delegate={iterator:z(e),resultName:l,nextLoc:t},"next"===this.method&&(this.arg=void 0),s}},l}function l(e,l,t,u,n,a,o){try{var r=e[a](o),i=r.value}catch(d){return void t(d)}r.done?l(i):Promise.resolve(i).then(u,n)}function t(e){return function(){var t=this,u=arguments;return new Promise((function(n,a){var o=e.apply(t,u);function r(e){l(o,n,a,r,i,"next",e)}function i(e){l(o,n,a,r,i,"throw",e)}r(void 0)}))}}System.register(["./system-legacy.45ed366f.js","./index-legacy.e58136e6.js"],(function(l,u){"use strict";var n,a,o,r,i,d,c,f,s,m,p,v,V,y,h,b,_,g=document.createElement("style");return g.textContent=".system{background:#fff;padding:36px;border-radius:2px}.system h2{padding:10px;margin:10px 0;font-size:16px;box-shadow:-4px 0 #e7e8e8}.system ::v-deep(.el-input-number__increase){top:5px!important}.system .gva-btn-list{margin-top:16px}\n",document.head.appendChild(g),{setters:[function(e){n=e.a,a=e.s},function(e){o=e.s,r=e.a,i=e.r,d=e.b,c=e.o,f=e.c,s=e.e,m=e.w,p=e.h,v=e.F,V=e.f,y=e.t,h=e.m,b=e.d,_=e.i}],execute:function(){var u={class:"system"},g=b("h2",null,"本地文件配置",-1),w=b("h2",null,"qiniu上传配置",-1),U=b("h2",null,"腾讯云COS上传配置",-1),x=b("h2",null,"阿里云OSS上传配置",-1),q=b("h2",null,"华为云Obs上传配置",-1),k={class:"gva-btn-list"},z={name:"Config"};l("default",Object.assign(z,{setup:function(l){var z=r([]),L=i({system:{"iplimit-count":0,"iplimit-time":0},jwt:{},mysql:{},pgsql:{},excel:{},autocode:{},redis:{},qiniu:{},"tencent-cos":{},"aliyun-oss":{},"hua-wei-obs":{},captcha:{},zap:{},local:{},email:{},timer:{detail:{}}}),j=function(){var l=t(e().mark((function l(){var t;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:0===(t=e.sent).code&&(L.value=t.data.config);case 4:case"end":return e.stop()}}),l)})));return function(){return l.apply(this,arguments)}}();j();var E=function(){},S=function(){var l=t(e().mark((function l(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a({config:L.value});case 2:if(0!==e.sent.code){e.next=7;break}return _({type:"success",message:"配置文件设置成功"}),e.next=7,j();case 7:case"end":return e.stop()}}),l)})));return function(){return l.apply(this,arguments)}}(),O=function(){var l=t(e().mark((function l(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o({url:"/email/emailTest",method:"post",data:void 0});case 2:if(0!==e.sent.code){e.next=9;break}return _({type:"success",message:"邮件发送成功"}),e.next=7,j();case 7:e.next=10;break;case 9:_({type:"error",message:"邮件发送失败"});case 10:case"end":return e.stop()}}),l)})));return function(){return l.apply(this,arguments)}}();return function(e,l){var t=d("el-option"),n=d("el-select"),a=d("el-form-item"),o=d("el-input"),r=d("el-checkbox"),i=d("el-input-number"),_=d("el-tooltip"),j=d("el-collapse-item"),M=d("el-button"),C=d("el-switch"),N=d("el-collapse"),T=d("el-form");return c(),f("div",u,[s(T,{ref:"form",model:L.value,"label-width":"240px"},{default:m((function(){return[s(N,{modelValue:z,"onUpdate:modelValue":l[97]||(l[97]=function(e){return function(e){throw new TypeError('"'+e+'" is read-only')}("activeNames")})},{default:m((function(){return[s(j,{title:"系统配置",name:"1"},{default:m((function(){return[s(a,{label:"环境值"},{default:m((function(){return[s(n,{modelValue:L.value.system.env,"onUpdate:modelValue":l[0]||(l[0]=function(e){return L.value.system.env=e}),style:{width:"100%"}},{default:m((function(){return[s(t,{value:"public"}),s(t,{value:"develop"})]})),_:1},8,["modelValue"])]})),_:1}),s(a,{label:"端口值"},{default:m((function(){return[s(o,{modelValue:L.value.system.addr,"onUpdate:modelValue":l[1]||(l[1]=function(e){return L.value.system.addr=e}),modelModifiers:{number:!0}},null,8,["modelValue"])]})),_:1}),s(a,{label:"数据库类型"},{default:m((function(){return[s(n,{modelValue:L.value.system["db-type"],"onUpdate:modelValue":l[2]||(l[2]=function(e){return L.value.system["db-type"]=e}),style:{width:"100%"}},{default:m((function(){return[s(t,{value:"mysql"}),s(t,{value:"pgsql"})]})),_:1},8,["modelValue"])]})),_:1}),s(a,{label:"Oss类型"},{default:m((function(){return[s(n,{modelValue:L.value.system["oss-type"],"onUpdate:modelValue":l[3]||(l[3]=function(e){return L.value.system["oss-type"]=e}),style:{width:"100%"}},{default:m((function(){return[s(t,{value:"local"}),s(t,{value:"qiniu"}),s(t,{value:"tencent-cos"}),s(t,{value:"aliyun-oss"}),s(t,{value:"huawei-obs"})]})),_:1},8,["modelValue"])]})),_:1}),s(a,{label:"多点登录拦截"},{default:m((function(){return[s(r,{modelValue:L.value.system["use-multipoint"],"onUpdate:modelValue":l[4]||(l[4]=function(e){return L.value.system["use-multipoint"]=e})},{default:m((function(){return[p("开启")]})),_:1},8,["modelValue"])]})),_:1}),s(a,{label:"开启redis"},{default:m((function(){return[s(r,{modelValue:L.value.system["use-redis"],"onUpdate:modelValue":l[5]||(l[5]=function(e){return L.value.system["use-redis"]=e})},{default:m((function(){return[p("开启")]})),_:1},8,["modelValue"])]})),_:1}),s(a,{label:"限流次数"},{default:m((function(){return[s(i,{modelValue:L.value.system["iplimit-count"],"onUpdate:modelValue":l[6]||(l[6]=function(e){return L.value.system["iplimit-count"]=e}),modelModifiers:{number:!0}},null,8,["modelValue"])]})),_:1}),s(a,{label:"限流时间"},{default:m((function(){return[s(i,{modelValue:L.value.system["iplimit-time"],"onUpdate:modelValue":l[7]||(l[7]=function(e){return L.value.system["iplimit-time"]=e}),modelModifiers:{number:!0}},null,8,["modelValue"])]})),_:1}),s(_,{content:"请修改完成后，注意一并修改前端env环境下的VITE_BASE_PATH",placement:"top-start"},{default:m((function(){return[s(a,{label:"全局路由前缀"},{default:m((function(){return[s(o,{modelValue:L.value.system["router-prefix"],"onUpdate:modelValue":l[8]||(l[8]=function(e){return L.value.system["router-prefix"]=e})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),s(j,{title:"jwt签名",name:"2"},{default:m((function(){return[s(a,{label:"jwt签名"},{default:m((function(){return[s(o,{modelValue:L.value.jwt["signing-key"],"onUpdate:modelValue":l[9]||(l[9]=function(e){return L.value.jwt["signing-key"]=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"有效期"},{default:m((function(){return[s(o,{modelValue:L.value.jwt["expires-time"],"onUpdate:modelValue":l[10]||(l[10]=function(e){return L.value.jwt["expires-time"]=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"缓冲期"},{default:m((function(){return[s(o,{modelValue:L.value.jwt["buffer-time"],"onUpdate:modelValue":l[11]||(l[11]=function(e){return L.value.jwt["buffer-time"]=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"签发者"},{default:m((function(){return[s(o,{modelValue:L.value.jwt.issuer,"onUpdate:modelValue":l[12]||(l[12]=function(e){return L.value.jwt.issuer=e})},null,8,["modelValue"])]})),_:1})]})),_:1}),s(j,{title:"Zap日志配置",name:"3"},{default:m((function(){return[s(a,{label:"级别"},{default:m((function(){return[s(o,{modelValue:L.value.zap.level,"onUpdate:modelValue":l[13]||(l[13]=function(e){return L.value.zap.level=e}),modelModifiers:{number:!0}},null,8,["modelValue"])]})),_:1}),s(a,{label:"输出"},{default:m((function(){return[s(o,{modelValue:L.value.zap.format,"onUpdate:modelValue":l[14]||(l[14]=function(e){return L.value.zap.format=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"日志前缀"},{default:m((function(){return[s(o,{modelValue:L.value.zap.prefix,"onUpdate:modelValue":l[15]||(l[15]=function(e){return L.value.zap.prefix=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"日志文件夹"},{default:m((function(){return[s(o,{modelValue:L.value.zap.director,"onUpdate:modelValue":l[16]||(l[16]=function(e){return L.value.zap.director=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"编码级"},{default:m((function(){return[s(o,{modelValue:L.value.zap["encode-level"],"onUpdate:modelValue":l[17]||(l[17]=function(e){return L.value.zap["encode-level"]=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"栈名"},{default:m((function(){return[s(o,{modelValue:L.value.zap["stacktrace-key"],"onUpdate:modelValue":l[18]||(l[18]=function(e){return L.value.zap["stacktrace-key"]=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"日志留存时间(默认以天为单位)"},{default:m((function(){return[s(o,{modelValue:L.value.zap["max-age"],"onUpdate:modelValue":l[19]||(l[19]=function(e){return L.value.zap["max-age"]=e}),modelModifiers:{number:!0}},null,8,["modelValue"])]})),_:1}),s(a,{label:"显示行"},{default:m((function(){return[s(r,{modelValue:L.value.zap["show-line"],"onUpdate:modelValue":l[20]||(l[20]=function(e){return L.value.zap["show-line"]=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"输出控制台"},{default:m((function(){return[s(r,{modelValue:L.value.zap["log-in-console"],"onUpdate:modelValue":l[21]||(l[21]=function(e){return L.value.zap["log-in-console"]=e})},null,8,["modelValue"])]})),_:1})]})),_:1}),s(j,{title:"Redis admin数据库配置",name:"4"},{default:m((function(){return[s(a,{label:"库"},{default:m((function(){return[s(o,{modelValue:L.value.redis.db,"onUpdate:modelValue":l[22]||(l[22]=function(e){return L.value.redis.db=e}),modelModifiers:{number:!0}},null,8,["modelValue"])]})),_:1}),s(a,{label:"地址"},{default:m((function(){return[s(o,{modelValue:L.value.redis.addr,"onUpdate:modelValue":l[23]||(l[23]=function(e){return L.value.redis.addr=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"密码"},{default:m((function(){return[s(o,{modelValue:L.value.redis.password,"onUpdate:modelValue":l[24]||(l[24]=function(e){return L.value.redis.password=e})},null,8,["modelValue"])]})),_:1})]})),_:1}),s(j,{title:"邮箱配置",name:"5"},{default:m((function(){return[s(a,{label:"接收者邮箱"},{default:m((function(){return[s(o,{modelValue:L.value.email.to,"onUpdate:modelValue":l[25]||(l[25]=function(e){return L.value.email.to=e}),placeholder:"可多个，以逗号分隔"},null,8,["modelValue"])]})),_:1}),s(a,{label:"端口"},{default:m((function(){return[s(o,{modelValue:L.value.email.port,"onUpdate:modelValue":l[26]||(l[26]=function(e){return L.value.email.port=e}),modelModifiers:{number:!0}},null,8,["modelValue"])]})),_:1}),s(a,{label:"发送者邮箱"},{default:m((function(){return[s(o,{modelValue:L.value.email.from,"onUpdate:modelValue":l[27]||(l[27]=function(e){return L.value.email.from=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"host"},{default:m((function(){return[s(o,{modelValue:L.value.email.host,"onUpdate:modelValue":l[28]||(l[28]=function(e){return L.value.email.host=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"是否为ssl"},{default:m((function(){return[s(r,{modelValue:L.value.email["is-ssl"],"onUpdate:modelValue":l[29]||(l[29]=function(e){return L.value.email["is-ssl"]=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"secret"},{default:m((function(){return[s(o,{modelValue:L.value.email.secret,"onUpdate:modelValue":l[30]||(l[30]=function(e){return L.value.email.secret=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"测试邮件"},{default:m((function(){return[s(M,{onClick:O},{default:m((function(){return[p("测试邮件")]})),_:1})]})),_:1})]})),_:1}),s(j,{title:"验证码配置",name:"7"},{default:m((function(){return[s(a,{label:"字符长度"},{default:m((function(){return[s(o,{modelValue:L.value.captcha["key-long"],"onUpdate:modelValue":l[31]||(l[31]=function(e){return L.value.captcha["key-long"]=e}),modelModifiers:{number:!0}},null,8,["modelValue"])]})),_:1}),s(a,{label:"平台宽度"},{default:m((function(){return[s(o,{modelValue:L.value.captcha["img-width"],"onUpdate:modelValue":l[32]||(l[32]=function(e){return L.value.captcha["img-width"]=e}),modelModifiers:{number:!0}},null,8,["modelValue"])]})),_:1}),s(a,{label:"图片高度"},{default:m((function(){return[s(o,{modelValue:L.value.captcha["img-height"],"onUpdate:modelValue":l[33]||(l[33]=function(e){return L.value.captcha["img-height"]=e}),modelModifiers:{number:!0}},null,8,["modelValue"])]})),_:1})]})),_:1}),s(j,{title:"数据库配置",name:"9"},{default:m((function(){return["mysql"===L.value.system["db-type"]?(c(),f(v,{key:0},[s(a,{label:"用户名"},{default:m((function(){return[s(o,{modelValue:L.value.mysql.username,"onUpdate:modelValue":l[34]||(l[34]=function(e){return L.value.mysql.username=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"密码"},{default:m((function(){return[s(o,{modelValue:L.value.mysql.password,"onUpdate:modelValue":l[35]||(l[35]=function(e){return L.value.mysql.password=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"地址"},{default:m((function(){return[s(o,{modelValue:L.value.mysql.path,"onUpdate:modelValue":l[36]||(l[36]=function(e){return L.value.mysql.path=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"数据库"},{default:m((function(){return[s(o,{modelValue:L.value.mysql["db-name"],"onUpdate:modelValue":l[37]||(l[37]=function(e){return L.value.mysql["db-name"]=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"前缀"},{default:m((function(){return[s(o,{modelValue:L.value.mysql.refix,"onUpdate:modelValue":l[38]||(l[38]=function(e){return L.value.mysql.refix=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"复数表"},{default:m((function(){return[s(C,{modelValue:L.value.mysql.singular,"onUpdate:modelValue":l[39]||(l[39]=function(e){return L.value.mysql.singular=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"引擎"},{default:m((function(){return[s(o,{modelValue:L.value.mysql.engine,"onUpdate:modelValue":l[40]||(l[40]=function(e){return L.value.mysql.engine=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"maxIdleConns"},{default:m((function(){return[s(o,{modelValue:L.value.mysql["max-idle-conns"],"onUpdate:modelValue":l[41]||(l[41]=function(e){return L.value.mysql["max-idle-conns"]=e}),modelModifiers:{number:!0}},null,8,["modelValue"])]})),_:1}),s(a,{label:"maxOpenConns"},{default:m((function(){return[s(o,{modelValue:L.value.mysql["max-open-conns"],"onUpdate:modelValue":l[42]||(l[42]=function(e){return L.value.mysql["max-open-conns"]=e}),modelModifiers:{number:!0}},null,8,["modelValue"])]})),_:1}),s(a,{label:"写入日志"},{default:m((function(){return[s(r,{modelValue:L.value.mysql["log-zap"],"onUpdate:modelValue":l[43]||(l[43]=function(e){return L.value.mysql["log-zap"]=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"日志模式"},{default:m((function(){return[s(o,{modelValue:L.value.mysql["log-mode"],"onUpdate:modelValue":l[44]||(l[44]=function(e){return L.value.mysql["log-mode"]=e})},null,8,["modelValue"])]})),_:1})],64)):V("",!0),"pgsql"===L.value.system["db-type"]?(c(),f(v,{key:1},[s(a,{label:"用户名"},{default:m((function(){return[s(o,{modelValue:L.value.pgsql.username,"onUpdate:modelValue":l[45]||(l[45]=function(e){return L.value.pgsql.username=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"密码"},{default:m((function(){return[s(o,{modelValue:L.value.pgsql.password,"onUpdate:modelValue":l[46]||(l[46]=function(e){return L.value.pgsql.password=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"地址"},{default:m((function(){return[s(o,{modelValue:L.value.pgsql.path,"onUpdate:modelValue":l[47]||(l[47]=function(e){return L.value.pgsql.path=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"数据库"},{default:m((function(){return[s(o,{modelValue:L.value.pgsql.dbname,"onUpdate:modelValue":l[48]||(l[48]=function(e){return L.value.pgsql.dbname=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"前缀"},{default:m((function(){return[s(o,{modelValue:L.value.pgsql.refix,"onUpdate:modelValue":l[49]||(l[49]=function(e){return L.value.pgsql.refix=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"复数表"},{default:m((function(){return[s(C,{modelValue:L.value.pgsql.singular,"onUpdate:modelValue":l[50]||(l[50]=function(e){return L.value.pgsql.singular=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"引擎"},{default:m((function(){return[s(o,{modelValue:L.value.pgsql.engine,"onUpdate:modelValue":l[51]||(l[51]=function(e){return L.value.pgsql.engine=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"maxIdleConns"},{default:m((function(){return[s(o,{modelValue:L.value.pgsql["max-idle-conns"],"onUpdate:modelValue":l[52]||(l[52]=function(e){return L.value.pgsql["max-idle-conns"]=e}),modelModifiers:{number:!0}},null,8,["modelValue"])]})),_:1}),s(a,{label:"maxOpenConns"},{default:m((function(){return[s(o,{modelValue:L.value.pgsql["max-open-conns"],"onUpdate:modelValue":l[53]||(l[53]=function(e){return L.value.pgsql["max-open-conns"]=e}),modelModifiers:{number:!0}},null,8,["modelValue"])]})),_:1}),s(a,{label:"写入日志"},{default:m((function(){return[s(r,{modelValue:L.value.pgsql["log-zap"],"onUpdate:modelValue":l[54]||(l[54]=function(e){return L.value.pgsql["log-zap"]=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"日志模式"},{default:m((function(){return[s(o,{modelValue:L.value.pgsql["log-mode"],"onUpdate:modelValue":l[55]||(l[55]=function(e){return L.value.pgsql["log-mode"]=e})},null,8,["modelValue"])]})),_:1})],64)):V("",!0)]})),_:1}),s(j,{title:"oss配置",name:"10"},{default:m((function(){return["local"===L.value.system["oss-type"]?(c(),f(v,{key:0},[g,s(a,{label:"本地文件访问路径"},{default:m((function(){return[s(o,{modelValue:L.value.local.path,"onUpdate:modelValue":l[56]||(l[56]=function(e){return L.value.local.path=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"本地文件存储路径"},{default:m((function(){return[s(o,{modelValue:L.value.local["store-path"],"onUpdate:modelValue":l[57]||(l[57]=function(e){return L.value.local["store-path"]=e})},null,8,["modelValue"])]})),_:1})],64)):V("",!0),"qiniu"===L.value.system["oss-type"]?(c(),f(v,{key:1},[w,s(a,{label:"存储区域"},{default:m((function(){return[s(o,{modelValue:L.value.qiniu.zone,"onUpdate:modelValue":l[58]||(l[58]=function(e){return L.value.qiniu.zone=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"空间名称"},{default:m((function(){return[s(o,{modelValue:L.value.qiniu.bucket,"onUpdate:modelValue":l[59]||(l[59]=function(e){return L.value.qiniu.bucket=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"CDN加速域名"},{default:m((function(){return[s(o,{modelValue:L.value.qiniu["img-path"],"onUpdate:modelValue":l[60]||(l[60]=function(e){return L.value.qiniu["img-path"]=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"是否使用https"},{default:m((function(){return[s(r,{modelValue:L.value.qiniu["use-https"],"onUpdate:modelValue":l[61]||(l[61]=function(e){return L.value.qiniu["use-https"]=e})},{default:m((function(){return[p("开启")]})),_:1},8,["modelValue"])]})),_:1}),s(a,{label:"accessKey"},{default:m((function(){return[s(o,{modelValue:L.value.qiniu["access-key"],"onUpdate:modelValue":l[62]||(l[62]=function(e){return L.value.qiniu["access-key"]=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"secretKey"},{default:m((function(){return[s(o,{modelValue:L.value.qiniu["secret-key"],"onUpdate:modelValue":l[63]||(l[63]=function(e){return L.value.qiniu["secret-key"]=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"上传是否使用CDN上传加速"},{default:m((function(){return[s(r,{modelValue:L.value.qiniu["use-cdn-domains"],"onUpdate:modelValue":l[64]||(l[64]=function(e){return L.value.qiniu["use-cdn-domains"]=e})},{default:m((function(){return[p("开启")]})),_:1},8,["modelValue"])]})),_:1})],64)):V("",!0),"tencent-cos"===L.value.system["oss-type"]?(c(),f(v,{key:2},[U,s(a,{label:"存储桶名称"},{default:m((function(){return[s(o,{modelValue:L.value["tencent-cos"].bucket,"onUpdate:modelValue":l[65]||(l[65]=function(e){return L.value["tencent-cos"].bucket=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"所属地域"},{default:m((function(){return[s(o,{modelValue:L.value["tencent-cos"].region,"onUpdate:modelValue":l[66]||(l[66]=function(e){return L.value["tencent-cos"].region=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"secretID"},{default:m((function(){return[s(o,{modelValue:L.value["tencent-cos"]["secret-id"],"onUpdate:modelValue":l[67]||(l[67]=function(e){return L.value["tencent-cos"]["secret-id"]=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"secretKey"},{default:m((function(){return[s(o,{modelValue:L.value["tencent-cos"]["secret-key"],"onUpdate:modelValue":l[68]||(l[68]=function(e){return L.value["tencent-cos"]["secret-key"]=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"路径前缀"},{default:m((function(){return[s(o,{modelValue:L.value["tencent-cos"]["path-prefix"],"onUpdate:modelValue":l[69]||(l[69]=function(e){return L.value["tencent-cos"]["path-prefix"]=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"访问域名"},{default:m((function(){return[s(o,{modelValue:L.value["tencent-cos"]["base-url"],"onUpdate:modelValue":l[70]||(l[70]=function(e){return L.value["tencent-cos"]["base-url"]=e})},null,8,["modelValue"])]})),_:1})],64)):V("",!0),"aliyun-oss"===L.value.system["oss-type"]?(c(),f(v,{key:3},[x,s(a,{label:"区域"},{default:m((function(){return[s(o,{modelValue:L.value["aliyun-oss"].endpoint,"onUpdate:modelValue":l[71]||(l[71]=function(e){return L.value["aliyun-oss"].endpoint=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"accessKeyId"},{default:m((function(){return[s(o,{modelValue:L.value["aliyun-oss"]["access-key-id"],"onUpdate:modelValue":l[72]||(l[72]=function(e){return L.value["aliyun-oss"]["access-key-id"]=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"accessKeySecret"},{default:m((function(){return[s(o,{modelValue:L.value["aliyun-oss"]["access-key-secret"],"onUpdate:modelValue":l[73]||(l[73]=function(e){return L.value["aliyun-oss"]["access-key-secret"]=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"存储桶名称"},{default:m((function(){return[s(o,{modelValue:L.value["aliyun-oss"]["bucket-name"],"onUpdate:modelValue":l[74]||(l[74]=function(e){return L.value["aliyun-oss"]["bucket-name"]=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"访问域名"},{default:m((function(){return[s(o,{modelValue:L.value["aliyun-oss"]["bucket-url"],"onUpdate:modelValue":l[75]||(l[75]=function(e){return L.value["aliyun-oss"]["bucket-url"]=e})},null,8,["modelValue"])]})),_:1})],64)):V("",!0),"huawei-obs"===L.value.system["oss-type"]?(c(),f(v,{key:4},[q,s(a,{label:"路径"},{default:m((function(){return[s(o,{modelValue:L.value["hua-wei-obs"].path,"onUpdate:modelValue":l[76]||(l[76]=function(e){return L.value["hua-wei-obs"].path=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"存储桶名称"},{default:m((function(){return[s(o,{modelValue:L.value["hua-wei-obs"].bucket,"onUpdate:modelValue":l[77]||(l[77]=function(e){return L.value["hua-wei-obs"].bucket=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"区域"},{default:m((function(){return[s(o,{modelValue:L.value["hua-wei-obs"].endpoint,"onUpdate:modelValue":l[78]||(l[78]=function(e){return L.value["hua-wei-obs"].endpoint=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"accessKey"},{default:m((function(){return[s(o,{modelValue:L.value["hua-wei-obs"]["access-key"],"onUpdate:modelValue":l[79]||(l[79]=function(e){return L.value["hua-wei-obs"]["access-key"]=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"secretKey"},{default:m((function(){return[s(o,{modelValue:L.value["hua-wei-obs"]["secret-key"],"onUpdate:modelValue":l[80]||(l[80]=function(e){return L.value["hua-wei-obs"]["secret-key"]=e})},null,8,["modelValue"])]})),_:1})],64)):V("",!0)]})),_:1}),s(j,{title:"Excel上传配置",name:"11"},{default:m((function(){return[s(a,{label:"合成目标地址"},{default:m((function(){return[s(o,{modelValue:L.value.excel.dir,"onUpdate:modelValue":l[81]||(l[81]=function(e){return L.value.excel.dir=e})},null,8,["modelValue"])]})),_:1})]})),_:1}),s(j,{title:"自动化代码配置",name:"12"},{default:m((function(){return[s(a,{label:"是否自动重启(linux)"},{default:m((function(){return[s(r,{modelValue:L.value.autocode["transfer-restart"],"onUpdate:modelValue":l[82]||(l[82]=function(e){return L.value.autocode["transfer-restart"]=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"root(项目根路径)"},{default:m((function(){return[s(o,{modelValue:L.value.autocode.root,"onUpdate:modelValue":l[83]||(l[83]=function(e){return L.value.autocode.root=e}),disabled:""},null,8,["modelValue"])]})),_:1}),s(a,{label:"Server(后端代码地址)"},{default:m((function(){return[s(o,{modelValue:L.value.autocode["transfer-restart"],"onUpdate:modelValue":l[84]||(l[84]=function(e){return L.value.autocode["transfer-restart"]=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"SApi(后端api文件夹地址)"},{default:m((function(){return[s(o,{modelValue:L.value.autocode["server-api"],"onUpdate:modelValue":l[85]||(l[85]=function(e){return L.value.autocode["server-api"]=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"SInitialize(后端Initialize文件夹)"},{default:m((function(){return[s(o,{modelValue:L.value.autocode["server-initialize"],"onUpdate:modelValue":l[86]||(l[86]=function(e){return L.value.autocode["server-initialize"]=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"SModel(后端Model文件地址)"},{default:m((function(){return[s(o,{modelValue:L.value.autocode["server-model"],"onUpdate:modelValue":l[87]||(l[87]=function(e){return L.value.autocode["server-model"]=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"SRequest(后端Request文件夹地址)"},{default:m((function(){return[s(o,{modelValue:L.value.autocode["server-request"],"onUpdate:modelValue":l[88]||(l[88]=function(e){return L.value.autocode["server-request"]=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"SRouter(后端Router文件夹地址)"},{default:m((function(){return[s(o,{modelValue:L.value.autocode["server-router"],"onUpdate:modelValue":l[89]||(l[89]=function(e){return L.value.autocode["server-router"]=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"SService(后端Service文件夹地址)"},{default:m((function(){return[s(o,{modelValue:L.value.autocode["server-service"],"onUpdate:modelValue":l[90]||(l[90]=function(e){return L.value.autocode["server-service"]=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"Web(前端文件夹地址)"},{default:m((function(){return[s(o,{modelValue:L.value.autocode.web,"onUpdate:modelValue":l[91]||(l[91]=function(e){return L.value.autocode.web=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"WApi(后端WApi文件夹地址)"},{default:m((function(){return[s(o,{modelValue:L.value.autocode["web-api"],"onUpdate:modelValue":l[92]||(l[92]=function(e){return L.value.autocode["web-api"]=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"WForm(后端WForm文件夹地址)"},{default:m((function(){return[s(o,{modelValue:L.value.autocode["web-form"],"onUpdate:modelValue":l[93]||(l[93]=function(e){return L.value.autocode["web-form"]=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"WTable(后端WTable文件夹地址)"},{default:m((function(){return[s(o,{modelValue:L.value.autocode["web-table"],"onUpdate:modelValue":l[94]||(l[94]=function(e){return L.value.autocode["web-table"]=e})},null,8,["modelValue"])]})),_:1})]})),_:1}),s(j,{title:"Timer(定时任务)",name:"13"},{default:m((function(){return[s(a,{label:"Start（是否启用）"},{default:m((function(){return[s(r,{modelValue:L.value.timer.start,"onUpdate:modelValue":l[95]||(l[95]=function(e){return L.value.timer.start=e})},null,8,["modelValue"])]})),_:1}),s(a,{label:"Spec(CRON表达式)"},{default:m((function(){return[s(o,{modelValue:L.value.timer.spec,"onUpdate:modelValue":l[96]||(l[96]=function(e){return L.value.timer.spec=e})},null,8,["modelValue"])]})),_:1}),(c(!0),f(v,null,y(L.value.timer.detail,(function(e,l){return c(),f(v,null,[(c(!0),f(v,null,y(e,(function(t,u){return c(),f("div",{key:u},[(c(),h(a,{key:l+u,label:u},{default:m((function(){return[s(o,{modelValue:e[u],"onUpdate:modelValue":function(l){return e[u]=l}},null,8,["modelValue","onUpdate:modelValue"])]})),_:2},1032,["label"]))])})),128))],64)})),256))]})),_:1})]})),_:1},8,["modelValue"])]})),_:1},8,["model"]),b("div",k,[s(M,{type:"primary",size:"small",onClick:S},{default:m((function(){return[p("立即更新")]})),_:1}),s(M,{type:"primary",size:"small",onClick:E},{default:m((function(){return[p("重启服务（开发中）")]})),_:1})])])}}}))}}}))}();
