(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/subPages2/businessCenter/foodShopping/foodShopping"],{"0695":function(t,n,e){},"35c6":function(t,n,e){"use strict";e.r(n);var i=e("82d7"),o=e.n(i);for(var c in i)"default"!==c&&function(t){e.d(n,t,function(){return i[t]})}(c);n["default"]=o.a},3744:function(t,n,e){"use strict";var i,o=function(){var t=this,n=t.$createElement;t._self._c},c=[];e.d(n,"b",function(){return o}),e.d(n,"c",function(){return c}),e.d(n,"a",function(){return i})},"5fb6":function(t,n,e){},"82d7":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=o(e("3099"));function o(t){return t&&t.__esModule?t:{default:t}}var c=function(){return e.e("pages/subPages2/tamplate/evan-radio/evan-radio").then(e.bind(null,"fa7c"))},s=function(){return e.e("pages/subPages2/tamplate/evan-radio/evan-radio-group").then(e.bind(null,"ec17"))},a=function(){return e.e("pages/subPages2/tamplate/uni-icons/uni-icons").then(e.bind(null,"fd88"))},u=function(){return e.e("components/template/numberbox").then(e.bind(null,"b3dc"))},r={components:{EvanRadio:c,EvanRadioGroup:s,UniIcons:a,tuiNumberbox:u},data:function(){return{shoppingList:{},colorClear:null,checkedLength:0,allChecked:!1,price:0,count:0,settleAccountsArr:[],allPrices:{deliveryallmoney:"0.00",allmoney:"0.00"}}},onLoad:function(){this.getShoppingList()},onShow:function(){this.getShoppingList(),this.allChecked=!1},watch:{colorClear:function(t){var n=this;"全选"==t?this.shoppingList.map(function(t){n.$set(t,"checked",!0),t.cartinfo.goodslist.map(function(t){n.$set(t,"checked",!0)})}):null==t&&this.shoppingList.map(function(t){n.$set(t,"checked",!1),t.cartinfo.goodslist.map(function(t){n.$set(t,"checked",!1)})})}},methods:{goPay:function(){t.setStorageSync("rameck",this.settleAccountsArr);var n=JSON.stringify(this.settleAccountsArr),e=new this.$util.Base64,o=e.encode(n);i.default.navigationTo({url:"pages/subPages2/businessCenter/foodOrder/foodOrder?param="+o})},settleAccounts:function(){var n=this;this.settleAccountsArr=[];var e={},o=[];this.shoppingList.map(function(t){t.cartinfo.goodslist.map(function(n){n.checked&&(o.push(n.id),e={sid:t.sid,cartid:o})}),o[0]&&(n.settleAccountsArr.push(e),e={},o=[])}),this.settleAccountsArr[0]?i.default.showError("确定提交订单并前往支付？",function(t){t.confirm&&t&&n.goPay()},!0):t.showToast({title:"请选择要购买的商品",duration:2e3,icon:"none"})},NumArray:function(){var t=this;this.settleAccountsArr=[];var n={},e=[];this.shoppingList.map(function(i){i.cartinfo.goodslist.map(function(t){t.checked&&(e.push(t.id),n.sid=i.sid,n.cartid=e)}),e[0]&&(t.settleAccountsArr.push(n),n={},e=[])});var o=JSON.stringify(this.settleAccountsArr),c=new this.$util.Base64,s=c.encode(o);i.default._post_form("&p=citydelivery&do=CalculationPrice&goodsinfo=".concat(s),{},function(n){t.allPrices=n.data,console.log(n)},!1,function(){})},withdraw:function(n){var e=this;i.default._post_form("&p=citydelivery&do=deteShopCart&sid=".concat(n.sid),{},function(n){0==n.errno&&(t.showToast({title:"移除成功",duration:2e3}),e.getShoppingList())},!1,function(){})},empty:function(){var n=this;this.shoppingList.map(function(e){e.checked?i.default.showError("确定移除该商店及所属商品？",function(t){t.confirm&&t&&n.withdraw(e)},!0):!0!==e.checked&&!1!==e.checked&&t.showToast({title:"请先选择要移除的店铺",icon:"none"})})},ChangeShop:function(t){var n=this;this.shoppingList.map(function(t){n.$set(t,"checked",!1),t.cartinfo.goodslist.map(function(t){n.$set(t,"checked",!1)})}),t.detail.value.forEach(function(t){n.shoppingList.map(function(e){t==e.storename&&(n.$set(e,"checked",!0),e.cartinfo.goodslist.map(function(t){n.$set(t,"checked",!0)}))})}),t.detail.value.length==this.shoppingList.length?this.allChecked=!0:this.allChecked=!1,this.NumArray()},checkAllChange:function(t){var n=this;this.allChecked=!this.allChecked,"1"==t.detail.value?this.shoppingList.map(function(t){n.$set(t,"checked",!0),t.cartinfo.goodslist.map(function(t){n.$set(t,"checked",!0)})}):""==t.detail.value&&this.shoppingList.map(function(t){n.$set(t,"checked",!1),t.cartinfo.goodslist.map(function(t){n.$set(t,"checked",!1)})}),this.NumArray()},checkboxChange:function(t,n){var e=this;this.allChecked=!0,this.shoppingList.map(function(i,o){i.cartinfo.goodslist.map(function(c,s){t.detail.value.forEach(function(n){if(c.name==n){e.$set(c,"checked",!0);var s=t.detail.value.length,a=e.shoppingList[o].cartinfo.goodslist.length;s!==a?e.$set(i,"checked",!1):s&&a?e.$set(i,"checked",!0):e.$set(i,"checked",!1)}else i.checked||(e.allChecked=!1)}),0==t.detail.value&&i.sid==n&&(e.$set(i,"checked",!1),e.$set(c,"checked",!1))})}),0==t.detail.value&&(this.allChecked=!1),console.log(this.shoppingList),this.NumArray()},change:function(t,n){var e=this;this.shoppingList.map(function(o){o.cartinfo.goodslist.map(function(o){n.id==o.id&&(o.num=t.value,i.default._post_form("&p=citydelivery&do=addShopCart&goodid=".concat(n.goodid,"&specid=").concat(n.specid,"&addtype=").concat("plus"==t.type?1:0),{},function(t){e.getShoppingList()},!1,function(){}))})})},getShoppingList:function(){var t=this;i.default._post_form("&p=citydelivery&do=cartinfo",{},function(n){t.shoppingList=n.data.list,t.price=0,t.count=0,t.shoppingList.map(function(n){t.price+=n.cartinfo.totalmoney,t.count+=n.cartinfo.totalnum})},!1,function(){})},getChecked:function(){}}};n.default=r}).call(this,e("543d")["default"])},"91b7":function(t,n,e){"use strict";(function(t){e("f466");i(e("66fd"));var n=i(e("9388"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},9388:function(t,n,e){"use strict";e.r(n);var i=e("3744"),o=e("35c6");for(var c in o)"default"!==c&&function(t){e.d(n,t,function(){return o[t]})}(c);e("e8f4"),e("e860");var s,a=e("f0c5"),u=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,"66a765a2",null,!1,i["a"],s);n["default"]=u.exports},e860:function(t,n,e){"use strict";var i=e("5fb6"),o=e.n(i);o.a},e8f4:function(t,n,e){"use strict";var i=e("0695"),o=e.n(i);o.a}},[["91b7","common/runtime","common/vendor"]]]);