(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/subPages/businesscard/mycard/mycard"],{"0e26":function(t,n,e){"use strict";var a=e("6d3e"),o=e.n(a);o.a},2565:function(t,n,e){"use strict";(function(t){e("f466");a(e("66fd"));var n=a(e("ed51"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"3a03":function(t,n,e){"use strict";e.r(n);var a=e("6571"),o=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(n,t,function(){return a[t]})}(r);n["default"]=o.a},6571:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=o(e("3099"));function o(t){return t&&t.__esModule?t:{default:t}}function r(t){return c(t)||i(t)||u()}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function i(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function c(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}var l=function(){return e.e("components/page/pageComponents/businessCard").then(e.bind(null,"79bd"))},s=function(){return e.e("components/template/nonemores").then(e.bind(null,"5e83"))},d=function(){return e.e("components/template/loadlogo").then(e.bind(null,"9976"))},f=function(){return e.e("components/template/loadmore").then(e.bind(null,"789c"))},g=function(){return e.e("components/template/tabBar").then(e.bind(null,"27e4"))},p={data:function(){return{loadlogo:!1,cardList:[],loadingMore:!0,current_page:1,total:null,is_have:null}},methods:{chrbusinCard:function(t){this.setData({cardList:t})},getCardList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=this,o=e.agencyData,u={page:t,lat:o.lat,lng:o.lng,city_id:o.areaid,is_collect:"1"};a.default._post_form("&p=citycard&do=homeList",u,function(t){var a,o=t.data.list;(e.is_have=t.data.is_have,n)?storeList.length>0?(a=e["cardList"]).push.apply(a,r(o)):e.loadingMore=!0:e.setData({cardList:o,loadingMore:0===o.length||e.current_page===t.data.total,total:t.data.total})},!1,function(){e.loadlogo=!0})}},computed:{agencyData:function(){return t.getStorageSync("agencyData")}},components:{businessCard:l,noneMores:s,Loadlogo:d,loadMore:f,TabBars:g},onLoad:function(t){var n=this;n.getCardList()},onReachBottom:function(){console.log("Bottom");var t=this,n=t.current_page,e=t.total;if(n>=e)return t.loadingMore=!0,!1;t.getShoplist(++t.current_page,!0)}};n.default=p}).call(this,e("543d")["default"])},"6d3e":function(t,n,e){},"93b8":function(t,n,e){"use strict";var a,o=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"b",function(){return o}),e.d(n,"c",function(){return r}),e.d(n,"a",function(){return a})},ed51:function(t,n,e){"use strict";e.r(n);var a=e("93b8"),o=e("3a03");for(var r in o)"default"!==r&&function(t){e.d(n,t,function(){return o[t]})}(r);e("0e26");var u,i=e("f0c5"),c=Object(i["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);n["default"]=c.exports}},[["2565","common/runtime","common/vendor"]]]);