(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/subPages/dealer/gener/gener"],{"088c":function(t,e,n){"use strict";var r,o=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",function(){return o}),n.d(e,"c",function(){return a}),n.d(e,"a",function(){return r})},"1b28":function(t,e,n){"use strict";n.r(e);var r=n("088c"),o=n("7f4d");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("e0ab");var u,i=n("f0c5"),l=Object(i["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],u);e["default"]=l.exports},"4dbe":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("3099"));function o(t){return t&&t.__esModule?t:{default:t}}function a(t){return l(t)||i(t)||u()}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function i(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function l(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var c=function(){return n.e("components/template/loadlogo").then(n.bind(null,"9976"))},s=function(){return n.e("components/template/loadmore").then(n.bind(null,"789c"))},d=function(){return n.e("components/template/nonemores").then(n.bind(null,"5e83"))},f={data:function(){return{currentTab:"0",loadlogo:!1,loadingMore:!1,current_page:1,searchText:"",list:[],page_total:null,unsettled_order:null,settled_order:null,refunded_order:null,slide_Top:0,tabBar:[{title:"全部",typeTab:"0"},{title:"未结算",typeTab:"1"},{title:"已结算",typeTab:"2"},{title:"已退款",typeTab:"3"}],orderStatus:[{title:"未结算",Status:"not"},{title:"已结算",Status:"alerea"},{title:"已退款",Status:"refund"},{title:"暂未结算",Status:"settle"}]}},onLoad:function(t){this.searchText=t.order_no},components:{loadMore:s,Loadlogo:c,noneMores:d},computed:{dealer_Info:function(){if(t.getStorageSync("TextSubstitution"))return t.getStorageSync("TextSubstitution")}},onShow:function(){},mounted:function(){this.getGenerList()},methods:{getGenerList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],u=this,i={order_no:u.searchText||"",page:n,state:e};r.default._post_form("&p=distribution&do=disOrder",i,function(t){var e,n=t.data;o?n.list.length>0?(e=u["list"]).push.apply(e,a(n.list)):u.loadingMore=!0:(u.setData(n),u.loadingMore=0===n.list.length||u.current_page===n.page_total)},!1,function(){t.hideLoading(),u.loadlogo=!0})},curtabBar:function(e){var n=this;t.showLoading({}),n.slide_Top=0,n.current_page=1,n.currentTab=e,n.searchText="",n.getGenerList(e)},scrolly:function(t){this.slide_Top=t.detail.scrollTop},ReachBottom:function(){var t=this;if(t.current_page>=t.page_total)return t.loadingMore=!0,!1;t.getGenerList(t.currentTab,++t.current_page,!0)},search:function(){t.showLoading({}),this.current_page=1,this.currentTab="0",this.getGenerList(this.currentTab)},copy_orderno:function(e){t.setClipboardData({data:e,success:function(t){r.default.showSuccess("复制成功")}})}}};e.default=f}).call(this,n("543d")["default"])},"5dfe":function(t,e,n){"use strict";(function(t){n("f466");r(n("66fd"));var e=r(n("1b28"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"723a":function(t,e,n){},"7f4d":function(t,e,n){"use strict";n.r(e);var r=n("4dbe"),o=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);e["default"]=o.a},e0ab:function(t,e,n){"use strict";var r=n("723a"),o=n.n(r);o.a}},[["5dfe","common/runtime","common/vendor"]]]);