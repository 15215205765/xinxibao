(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mainPages/city/city"],{2075:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(e("3099")),o=a(e("9e9f"));function a(t){return t&&t.__esModule?t:{default:t}}var c=function(){return e.e("components/template/lee-select").then(e.bind(null,"99a1"))},u=function(){return e.e("components/template/loadlogo").then(e.bind(null,"9976"))},l={components:{uniSelect:c,Loadlogo:u},data:function(){return{citylist:null,hotcity:null,addressData:null,searchText:"",isSearch:!1,isFixed:!1,searchCitylist:null,location:null,listAttr:{listBackgroundColor:"none",titleFontSize:24,titleColor:"#999999",titleHeight:40,titleBackground:"#F6F6F6",titlePadding:28,itemHeight:80,itemFontSize:24,itemBorderBottom:"1px solid rgba(0, 0, 0, 0.1)",itemColor:"#333333"},navAttr:{enable:!0,backgroundColor:"#fffff",color:"#333",activeColor:"#333333",fontSize:24,itemPadding:"6 0",borderRadius:100,padding:"20 0"},recenCity:null,iphoneModel:null,loadlogo:!0}},methods:{inputFocus:function(){this.isFixed=!0},inputBlur:function(){this.isFixed=!1},chooseItem:function(t){},search:function(){var n=this;t.showLoading({}),i.default._post_form("&do=cityList",{keyword:n.searchText},function(t){var e=t.data.citylist,i=[],o={};for(var a in e)o={initial:a,list:e[a]},i.push(o);n.setData({searchCitylist:i,isSearch:!0})},!1,function(){t.hideLoading()})},getCurrentcity:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",e=this,o={lat:t,lng:n};i.default._post_form("&do=cityLocation",o,function(t){e.setData({addressData:t.data}),e.getCityList()})},getCityList:function(){var t=this;i.default._post_form("&do=cityList",{},function(n){var e=n.data.citylist,i=[],o={};for(var a in console.log(e),e)o={initial:a,list:e[a]},i.push(o);t.setData({citylist:i,hotcity:n.data.hotcity,location:n.data.location})},!1,function(){t.loadlogo=!0})},closeSearch:function(){this.setData({searchText:"",isSearch:!1}),this.$refs.uniSelect.scrollTop=0},wxApiCallback:function(){var t=this;o.default.wxRegister(function(){jWeixin.ready(function(){jWeixin.getLocation({type:"gcj02",success:function(n){t.getCurrentcity(n.latitude,n.longitude)},fail:function(){t.getCurrentcity()},cancel:function(){t.getCurrentcity()}})})})}},onLoad:function(){},mounted:function(){var n=this;i.default.getClientType();t.getSystemInfo({success:function(t){var e=t.model,i=-1!==e.indexOf("iPhone");n.iphoneModel=i}}),i.default.getLocation().then(function(t){n.getCurrentcity(t.latitude,t.longitude)}),n.recenCity=t.getStorageSync("locationArray".concat(i.default.siteInfo.uniacid))||[]},watch:{searchText:function(t,n){}}};n.default=l}).call(this,e("543d")["default"])},"3dd4":function(t,n,e){"use strict";e.r(n);var i=e("abdf"),o=e("5480");for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);e("e1eb");var c,u=e("f0c5"),l=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,"a1aded68",null,!1,i["a"],c);n["default"]=l.exports},5480:function(t,n,e){"use strict";e.r(n);var i=e("2075"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);n["default"]=o.a},abdf:function(t,n,e){"use strict";var i,o=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"b",function(){return o}),e.d(n,"c",function(){return a}),e.d(n,"a",function(){return i})},b320:function(t,n,e){},ced4:function(t,n,e){"use strict";(function(t){e("f466");i(e("66fd"));var n=i(e("3dd4"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},e1eb:function(t,n,e){"use strict";var i=e("b320"),o=e.n(i);o.a}},[["ced4","common/runtime","common/vendor"]]]);