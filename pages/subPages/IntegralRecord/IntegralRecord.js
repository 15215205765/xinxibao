(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/subPages/IntegralRecord/IntegralRecord"],{"0055":function(t,e,n){},"07f6":function(t,e,n){"use strict";n.r(e);var r=n("77a2"),o=n("fa93");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("896c");var c,i=n("f0c5"),u=Object(i["a"])(o["default"],r["b"],r["c"],!1,null,"403a0c04",null,!1,r["a"],c);e["default"]=u.exports},"280c":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("3099"));function o(t){return t&&t.__esModule?t:{default:t}}function a(t){return u(t)||i(t)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function i(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function u(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){l(t,e,n[e])})}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d={data:function(){return{page:1,creditRecordInfo:{},scdpText:"",pagetotal:null,list:[],textList:{}}},onLoad:function(){this.init(),this.textList=t.getStorageSync("TextSubstitution")},methods:{init:function(){var t=this;t.creditRecord()},go:function(t){r.default.navigationTo({url:t})},creditRecord:function(){var t=this;t.scdpText="... ...加载中";var e={page:t.page,type:1};r.default._post_form("&p=member&do=creditRecord",e,function(e){t.creditRecordInfo=f({},t.creditRecordInfo,e.data),t.list=[].concat(a(t.list),a(e.data.list)),t.pagetotal=e.data.pagetotal,t.scdpText=""})},jfjlLoad:function(){var t=this;t.pagetotal==t.page?t.scdpText="没有更多数据了":(t.page++,t.creditRecord())}}};e.default=d}).call(this,n("543d")["default"])},"77a2":function(t,e,n){"use strict";var r,o=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",function(){return o}),n.d(e,"c",function(){return a}),n.d(e,"a",function(){return r})},"896c":function(t,e,n){"use strict";var r=n("0055"),o=n.n(r);o.a},dcf9:function(t,e,n){"use strict";(function(t){n("f466");r(n("66fd"));var e=r(n("07f6"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},fa93:function(t,e,n){"use strict";n.r(e);var r=n("280c"),o=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);e["default"]=o.a}},[["dcf9","common/runtime","common/vendor"]]]);