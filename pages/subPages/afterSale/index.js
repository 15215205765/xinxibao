(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/subPages/afterSale/index"],{"32e6":function(t,e,n){"use strict";n.r(e);var o=n("eea4"),a=n("d19a");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);n("d061");var r,u=n("f0c5"),l=Object(u["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);e["default"]=l.exports},4105:function(t,e,n){},ce2c:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("3099"));function a(t){return t&&t.__esModule?t:{default:t}}function i(t){return l(t)||u(t)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function u(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function l(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var c=function(){return n.e("components/template/loadlogo").then(n.bind(null,"9976"))},s=function(){return n.e("components/template/loadmore").then(n.bind(null,"789c"))},f=function(){return n.e("components/template/nonemores").then(n.bind(null,"5e83"))},d={components:{loadlogo:c,loadmore:s,noneMores:f},data:function(){return{phoneHeight:null,type:0,typeList:["","处理中","已完成","已拒绝"],isMore:!0,page:1,total:null,list:[]}},onLoad:function(t){var e=this;e.init()},methods:{init:function(){var e=this;t.getSystemInfo({success:function(t){e.phoneHeight=t.windowHeight+"px"}}),e.saleAfterList()},godatli:function(t,e,n){o.default.navigationTo({url:"pages/subPages/afterSale/afterDatli/afterDatli?id="+t+"&plugin="+e+"&orderno="+n})},checkType:function(t){var e=this;e.type=t,e.list=[],e.page=1,e.saleAfterList()},load:function(){var t=this;t.total==t.page?t.isMore=!0:(t.page++,t.saleAfterList())},revokeSaleAfter:function(e){var n=this;t.showModal({title:"提示",content:"确定撤销申请?",success:function(a){if(a.confirm){var i={id:e};o.default._post_form("&p=pay&do=revokeSaleAfter",i,function(e){t.showToast({icon:"none",title:"撤销成功",duration:2e3}),n.list=[],n.page=1,n.saleAfterList()},function(e){t.showToast({icon:"none",title:"撤销失败",duration:2e3})})}else a.cancel}})},saleAfterList:function(){var t=this,e={pindex:t.page,status:t.type};t.isMore=!1,o.default._post_form("&p=pay&do=saleAfterList",e,function(e){t.list=[].concat(i(t.list),i(e.data.list)),t.total=e.data.total,t.isMore=!0})}}};e.default=d}).call(this,n("543d")["default"])},d02f:function(t,e,n){"use strict";(function(t){n("f466");o(n("66fd"));var e=o(n("32e6"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},d061:function(t,e,n){"use strict";var o=n("4105"),a=n.n(o);a.a},d19a:function(t,e,n){"use strict";n.r(e);var o=n("ce2c"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e["default"]=a.a},eea4:function(t,e,n){"use strict";var o,a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return o})}},[["d02f","common/runtime","common/vendor"]]]);