(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/subPages/dealer/client/client"],{"0c84":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("3099"));function r(t){return t&&t.__esModule?t:{default:t}}function i(t){return c(t)||u(t)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function u(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function c(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var l=function(){return n.e("components/template/loadlogo").then(n.bind(null,"9976"))},s=function(){return n.e("components/template/loading").then(n.bind(null,"a9ce"))},d={data:function(){return{TextSubstitution:null,currentTab:"0",day_number:null,total_number:null,loadlogo:!1,loading:!1,current_page:1,searchText:"",list:[],page_total:null,slide_Top:0,tabBar:[{title:"全部",typeTab:"0"},{title:"已下单",typeTab:"1"},{title:"未下单",typeTab:"2"}],paramType:[{title:"全部类型",paramtype:"0"},{title:"普通下线",paramtype:"1"},{title:"下级分销商",paramtype:"2"}],currentTypeT:"全部类型",currentType:"0",typeMask:!1}},components:{Loading:s,Loadlogo:l},computed:{},onShow:function(){},mounted:function(){this.getClientList()},onLoad:function(){var e=this;e.TextSubstitution=t.getStorageSync("TextSubstitution"),e.paramType[2].title="下级"+e.TextSubstitution.fxstext},methods:{getClientList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]&&arguments[3],u=this,c={name:u.searchText,page:n,state:e,type:r};a.default._post_form("&p=distribution&do=myTeam",c,function(t){var e,n=t.data;(console.log(n),o)?n.list.length>0?(e=u["list"]).push.apply(e,i(n.list)):u.loading=!0:(u.setData(n),u.loading=0===n.list.length||u.current_page===n.page_total)},!1,function(){t.hideLoading(),u.loadlogo=!0})},curtabBar:function(e){var n=this;t.showLoading({}),n.slide_Top=0,n.current_page=1,n.currentTab=e,n.searchText="",n.getClientList(e)},scrolly:function(t){this.slide_Top=t.detail.scrollTop},ReachBottom:function(){var t=this;if(t.current_page>=t.page_total)return t.loading=!0,!1;t.getClientList(t.currentTab,++t.current_page,t.currentType,!0)},search:function(){t.showLoading({}),this.current_page=1,this.currentTab="0",this.getClientList(this.currentTab)},selectUp:function(e){t.showLoading({}),this.setData({current_page:1,currentTypeT:e.title,currentType:e.paramtype,typeMask:!1}),this.getClientList(this.currentTab,1,this.currentType)}}};e.default=d}).call(this,n("543d")["default"])},"0d4d":function(t,e,n){"use strict";var a,r=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.typeMask=!t.typeMask})},i=[];n.d(e,"b",function(){return r}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return a})},4806:function(t,e,n){"use strict";(function(t){n("f466");a(n("66fd"));var e=a(n("cc84"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},9786:function(t,e,n){"use strict";n.r(e);var a=n("0c84"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=r.a},"9da2":function(t,e,n){},bddd:function(t,e,n){"use strict";var a=n("9da2"),r=n.n(a);r.a},cc84:function(t,e,n){"use strict";n.r(e);var a=n("0d4d"),r=n("9786");for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);n("bddd");var o,u=n("f0c5"),c=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,"52be4f6c",null,!1,a["a"],o);e["default"]=c.exports}},[["4806","common/runtime","common/vendor"]]]);