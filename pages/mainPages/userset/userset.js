(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mainPages/userset/userset"],{"52df":function(n,e,t){"use strict";var o=t("5315"),a=t.n(o);a.a},5315:function(n,e,t){},"62ba":function(n,e,t){"use strict";var o,a=function(){var n=this,e=n.$createElement;n._self._c;n._isMounted||(n.e0=function(e){n.phoneShow=!0})},u=[];t.d(e,"b",function(){return a}),t.d(e,"c",function(){return u}),t.d(e,"a",function(){return o})},b911:function(n,e,t){"use strict";t.r(e);var o=t("f7e4"),a=t.n(o);for(var u in o)"default"!==u&&function(n){t.d(e,n,function(){return o[n]})}(u);e["default"]=a.a},dd15:function(n,e,t){"use strict";(function(n){t("f466");o(t("66fd"));var e=o(t("efb1"));function o(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},efb1:function(n,e,t){"use strict";t.r(e);var o=t("62ba"),a=t("b911");for(var u in a)"default"!==u&&function(n){t.d(e,n,function(){return a[n]})}(u);t("52df");var i,r=t("f0c5"),c=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);e["default"]=c.exports},f7e4:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(t("3099"));function a(n){return n&&n.__esModule?n:{default:n}}var u=function(){return t.e("components/template/bindPhone").then(t.bind(null,"58dc"))},i=function(){return t.e("components/template/PopManager").then(t.bind(null,"b696"))},r={components:{bindPhone:u,PopManager:i},data:function(){return{phoneShow:!1,show1:!1,newpwd:""}},onLoad:function(n){},methods:{mobileBulr:function(e){n.pageScrollTo({scrollTop:0,duration:0})},goXgmm:function(){o.default.navigationTo({url:"pages/mainPages/forgetPassword/forgetPassword?type=1"})},skipagreement:function(){o.default.navigationTo({url:"pages/mainPages/agreement/agreement?agremType=user"})},clearToken:function(){n.removeStorage({key:"weliam_user_token",success:function(n){o.default.showSuccess("退出成功",function(){o.default.navigationTo({url:"pages/mainPages/login/login"})})}})},goSet:function(){o.default.navigationTo({url:"pages/mainPages/userset/userInfo/userInfo"})},closePop:function(){var n=this;n.phoneShow=!1},closePop1:function(){var n=this;n.show1=!1},changePwd:function(){var e=this,t={newpwd:e.newpwd};""!=e.newpwd?o.default._post_form("&p=member&do=changePwd",t,function(t){n.showToast({icon:"none",title:"修改成功",duration:2e3}),e.show1=!1}):n.showToast({icon:"none",title:"密码不能为空",duration:2e3})},showTips:function(){var e=this;n.showModal({title:"提示",content:"确定修改么？",success:function(n){n.confirm?e.changePwd():n.cancel}})}}};e.default=r}).call(this,t("543d")["default"])}},[["dd15","common/runtime","common/vendor"]]]);