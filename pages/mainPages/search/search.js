(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mainPages/search/search"],{"023a":function(t,n,e){"use strict";var o=e("1c76"),a=e.n(o);a.a},"1c76":function(t,n,e){},"24e9":function(t,n,e){"use strict";e.r(n);var o=e("38dc"),a=e("acee");for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);e("023a");var r,c=e("f0c5"),l=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,"6ac99872",null,!1,o["a"],r);n["default"]=l.exports},"38dc":function(t,n,e){"use strict";var o,a=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return i}),e.d(n,"a",function(){return o})},"93ba":function(t,n,e){"use strict";(function(t){e("f466");o(e("66fd"));var n=o(e("24e9"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},acee:function(t,n,e){"use strict";e.r(n);var o=e("c04b"),a=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);n["default"]=a.a},c04b:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(e("3099"));function a(t){return t&&t.__esModule?t:{default:t}}function i(t){return l(t)||c(t)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function l(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}var u=function(){return e.e("components/template/goodslist").then(e.bind(null,"8ab5"))},s=function(){return e.e("components/template/toplist").then(e.bind(null,"3cf6"))},f=function(){return e.e("components/template/storelist").then(e.bind(null,"c535"))},d=function(){return e.e("components/template/loadlogo").then(e.bind(null,"9976"))},h=function(){return e.e("components/page/pageComponents/goodsStyle").then(e.bind(null,"c20e"))},p=function(){return e.e("components/template/loadmore").then(e.bind(null,"789c"))},g=function(){return e.e("components/template/nonemores").then(e.bind(null,"5e83"))},m={data:function(){return{loadlogo:!1,listAct:0,lng:null,lat:null,current_page:1,keywords:"",is_headline:null,searchList:[],total:null,searchType:"1",hotSearchData:null,ishotSearch:!0,loadingMore:!0}},computed:{},components:{Goodslist:u,Toplist:s,Storelist:f,Loadlogo:d,goodsStyle:h,loadMore:p,noneMores:g},mounted:function(){var t=this;this.hotSearch(),o.default.getLocation().then(function(n){t.locationcb(n.latitude,n.longitude)})},methods:{hotSearch:function(){var t=this;o.default._post_form("&do=GetPlatformInfor",{type:2},function(n){t.setData({hotSearchData:n.data,ishotSearch:!!n.data})},!1,function(){t.loadlogo=!0})},hotItemSearch:function(t){var n=this;n.setData({keywords:t,ishotSearch:!1}),n.search()},wxApiCallback:function(){var t=this;console.log(jWeixin),jWeixin.ready(function(){jWeixin.getLocation({type:"gcj02",success:function(n){t.setData({lng:n.longitude,lat:n.latitude})}})})},locationcb:function(t,n){var e=this;e.setData({lng:n,lat:t})},cancelBtn:function(){t.navigateBack({delta:1})},listActDo:function(n,e){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];t.showLoading(),n>-1&&(this.listAct=n),this.initData(),this.searchDataInfo(1,e),this.searchType=o?"1":e},initData:function(){var t=this;t.current_page=1},search:function(){t.showLoading({}),this.listActDo("","1",!0)},searchDataInfo:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"1",a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=this,c={page:n,type:e,search:r.keywords,lng:r.lng,lat:r.lat};o.default._post_form("&do=Search",c,function(t){var n,o=t.data;("1"===e&&(o.list=o.list.map(function(t){var n=[];return n.push(t.info),t.info=n,t})),a)?o.list.length>0?(n=r["searchList"]).push.apply(n,i(o.list)):r.loadingMore=!0:r.setData({searchList:o.list,loadingMore:0===o.list.length||r.current_page===t.data.total,ishotSearch:!1});r.setData({total:t.data.total,is_headline:t.data.is_headline})},!1,function(){t.hideLoading()})}},onPullDownRefresh:function(){},onReachBottom:function(){console.log("Bottom");var t=this,n=t.current_page,e=t.total,o=t.searchType;if(n>=e)return t.loadingMore=!0,!1;t.searchDataInfo(++t.current_page,o,!0)}};n.default=m}).call(this,e("543d")["default"])}},[["93ba","common/runtime","common/vendor"]]]);