(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/subPages/merchant/merchantClerkList/merchantClerkList"],{"0447":function(e,t,n){"use strict";var a=n("6160"),o=n.n(a);o.a},"09b2":function(e,t,n){"use strict";(function(e){n("f466");a(n("66fd"));var t=a(n("988f"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},6160:function(e,t,n){},"988f":function(e,t,n){"use strict";n.r(t);var a=n("b666"),o=n("9c97");for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);n("0447");var i,s=n("f0c5"),u=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],i);t["default"]=u.exports},"9c97":function(e,t,n){"use strict";n.r(t);var a=n("c0c7"),o=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);t["default"]=o.a},b666:function(e,t,n){"use strict";var a,o=function(){var e=this,t=e.$createElement,n=(e._self._c,e.__map(e.adminList,function(t,n){var a=Number(t.enabled);return{$orig:e.__get_orig(t),m0:a}}));e.$mp.data=Object.assign({},{$root:{l0:n}})},r=[];n.d(t,"b",function(){return o}),n.d(t,"c",function(){return r}),n.d(t,"a",function(){return a})},c0c7:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("3099"));function o(e){return e&&e.__esModule?e:{default:e}}var r=function(){return n.e("components/template/loadlogo").then(n.bind(null,"9976"))},i=function(){return n.e("components/template/tabBar").then(n.bind(null,"27e4"))},s=function(){return n.e("components/template/PopManager").then(n.bind(null,"b696"))},u={data:function(){return{openButton:1,qrcode:null,src:null,popShow:!1,popType:"center",loadlogo:!1,addDialog:!0,ismainList:["店长","核销员","管理员","业务员"],adminList:{},enabledList:["开启","停用"]}},components:{Loadlogo:r,TabBars:i,PopManager:s},computed:{},onShow:function(){},mounted:function(){},onLoad:function(t){var n=this;e.getStorage({key:"checkStoreid",success:function(e){n.storeid=e.data,n.init(e.data)}})},methods:{closePopShow:function(){var e=this;e.popShow=!1,e.openButton=1,clearInterval(e.t1)},init:function(e){var t=this;t.getAdminList(e)},adminAjax:function(){},getAdminInfo:function(){var e=this;e.openButton=0;var t={storeid:e.storeid};a.default._post_form("&p=store&do=adminInfo",t,function(t){function n(){var t={qrcode:e.qrcode};a.default._post_form("&p=store&do=adminAjax",t,function(t){e.userInfo=t.data,t.data.id&&(clearInterval(e.t1),e.popShow=!1,a.default.navigationTo({url:"pages/subPages/merchant/merchantClerkEdit/merchantClerkEdit?newadminid="+t.data.id}))},function(t){console.info("过期结束"),clearInterval(e.t1)})}e.popShow=!0,e.src=t.data.src,e.qrcode=t.data.qrcode,e.t1=setInterval(n,3e3)},function(e){})},getAdminList:function(e){var t=this,n={storeid:t.storeid||e};a.default._post_form("&p=store&do=adminList",n,function(e){t.adminList=e.data})},goEdit:function(e){a.default.navigationTo({url:"pages/subPages/merchant/merchantClerkEdit/merchantClerkEdit?adminid="+e})},changeAdminEnabled:function(t){var n=this,o={userid:t};a.default._post_form("&p=store&do=changeAdminEnabled",o,function(a){e.showToast({icon:"none",title:"修改店员状态成功",duration:2e3});for(var o=0;o<n.adminList.length;o++)t==n.adminList[o].id&&(0==n.adminList[o].enabled?n.adminList[o].enabled=1:n.adminList[o].enabled=0)})},navgateTo:function(e,t){switch(t){case"contactway":a.default.navigationTo({url:"pages/subPages/dealer/contactway/contactway"});break;case"withdraw":a.default.navigationTo({url:"pages/subPages/dealer/withdraw/withdraw"});break;case"setshop":a.default.navigationTo({url:"pages/subPages/dealer/setshop/setshop"});break;case"order":a.default.navigationTo({url:"pages/subPages/merchant/merchantUserCenter/merchantUserCenter"});break;case"rank":a.default.navigationTo({url:"pages/subPages/dealer/rank/rank"});break;case"level":a.default.navigationTo({url:"pages/subPages/dealer/level/level"});break;case"client":a.default.navigationTo({url:"pages/subPages/dealer/client/client"});break;case"help":a.default.navigationTo({url:"pages/subPages/dealer/richtext/setrich"});break;case"gener":a.default.navigationTo({url:"pages/subPages/dealer/gener/gener"});break;case"poster":break;case"shops":break}}}};t.default=u}).call(this,n("543d")["default"])}},[["09b2","common/runtime","common/vendor"]]]);