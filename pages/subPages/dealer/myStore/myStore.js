(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/subPages/dealer/myStore/myStore"],{"087b":function(t,e,n){"use strict";(function(t){n("f466");a(n("66fd"));var e=a(n("513b"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"23ea":function(t,e,n){"use strict";n.r(e);var a=n("f5af"),r=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=r.a},4969:function(t,e,n){"use strict";var a,r=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"b",function(){return r}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return a})},"513b":function(t,e,n){"use strict";n.r(e);var a=n("4969"),r=n("23ea");for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);n("aace");var u,i=n("f0c5"),f=Object(i["a"])(r["default"],a["b"],a["c"],!1,null,"407496c8",null,!1,a["a"],u);e["default"]=f.exports},aace:function(t,e,n){"use strict";var a=n("bf27"),r=n.n(a);r.a},bf27:function(t,e,n){},f5af:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("3099"));function r(t){return t&&t.__esModule?t:{default:t}}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.forEach(function(e){u(t,e,n[e])})}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i={data:function(){return{page:1,initflag:1,userInfo:{},data:""}},onLoad:function(){this.init()},methods:{init:function(){var t=this;t.getMyStoreList()},goStoreDetails:function(t){a.default.navigationTo({url:"pages/subPages/dealer/myStoreDetails/myStoreDetails?id="+t})},getMyStoreList:function(){var t=this,e={page:t.page,initflag:t.initflag};a.default._post_form("&p=salesman&do=myStore",e,function(e){t.userInfo=o({},t.userInfo,e.data),0==e.data.settle&&(t.data="日"),1==e.data.settle&&(t.data="周"),2==e.data.settle&&(t.data="月")})}}};e.default=i}},[["087b","common/runtime","common/vendor"]]]);