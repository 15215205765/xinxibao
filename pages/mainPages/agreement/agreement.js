(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mainPages/agreement/agreement"],{"222c":function(e,t,n){"use strict";(function(e){n("f466");a(n("66fd"));var t=a(n("5af1"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},3156:function(e,t,n){"use strict";var a,o=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"b",function(){return o}),n.d(t,"c",function(){return r}),n.d(t,"a",function(){return a})},"5af1":function(e,t,n){"use strict";n.r(t);var a=n("3156"),o=n("b5d4");for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);n("9a92");var u,i=n("f0c5"),c=Object(i["a"])(o["default"],a["b"],a["c"],!1,null,"0d8b3a86",null,!1,a["a"],u);t["default"]=c.exports},7676:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("3099"));function o(e){return e&&e.__esModule?e:{default:e}}var r=function(){return n.e("components/template/loadlogo").then(n.bind(null,"9976"))},u={data:function(){return{agreementMain:null,loadlogo:!1}},onLoad:function(t){var n=this,o=(t.agremType,"user"===t.agremType?"&p=member&do=getRegisterSet":"store"===t.agremType?"&p=store&do=storeSettled":"&p=store&do=chargeList");a.default._post_form(o,{},function(e){n.setData({agreementMain:e.data.describe})},!1,function(){n.loadlogo=!0}),"user"==t.agremType?e.setNavigationBarTitle({title:"用户协议"}):"store"==t.agremType?e.setNavigationBarTitle({title:"入驻协议"}):e.setNavigationBarTitle({title:"付费说明"})},components:{Loadlogo:r}};t.default=u}).call(this,n("543d")["default"])},"9a92":function(e,t,n){"use strict";var a=n("c709"),o=n.n(a);o.a},b5d4:function(e,t,n){"use strict";n.r(t);var a=n("7676"),o=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);t["default"]=o.a},c709:function(e,t,n){}},[["222c","common/runtime","common/vendor"]]]);