(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/template/GoodsBuyMenu"],{3973:function(t,i,e){"use strict";var s,n=function(){var t=this,i=t.$createElement;t._self._c},o=[];e.d(i,"b",function(){return n}),e.d(i,"c",function(){return o}),e.d(i,"a",function(){return s})},"4c0a":function(t,i,e){"use strict";var s=e("aae8"),n=e.n(s);n.a},"4f8a":function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s=n(e("3099"));function n(t){return t&&t.__esModule?t:{default:t}}function o(t){return r(t)||a(t)||u()}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function a(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function r(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}var c=function(){return e.e("components/template/PopManager").then(e.bind(null,"b696"))},p={data:function(){return{showBuyMenu:!1,goods_price:"",goods_num:1,stock_num:0,buy_limit:0,user_limit_num:0,goods_sku_id:"",goods_spec_arr:[],sku_coupon_price:0,specData:[],image_path:null,skuItem:null,activityData:null,lp_now_stk:0}},props:{goodsSpec:{type:Array,default:function(){return null}},goodsDetail:{type:Object,default:function(){return null}},specDisabled:{type:Boolean,default:!1},groupBuyType:{type:String,default:""}},components:{PopupView:c},computed:{selectSpec:function(){var t=this.specData,i=[];return t&&t.length>0&&t.map(function(t){t.item.map(function(t){t.checked&&i.push(t.title)})}),i.join(" · ")},isSelectSpec:function(){if(this.goodsDetail)return!Number(this.goodsDetail.optionstatus>0)||this.goods_spec_arr.filter(function(t){return!!t}).length===this.specData.length},buyMeunHeight:function(){if(this.goodsDetail&&this.specData["list"])return Number(this.goodsDetail.optionstatus)>0?this.specData&&this.specData["list"]["length"]>1?"67vh":"50vh":"40vh"},hasGroups:function(){return this.goodsActivity&&this.goodsActivity.group_id},groupsType:function(){return"3"===this.goodsDetail.type&&"2"===this.groupBuyType},isShowJoinGroups:function(){return this.activityData&&1===this.activityData.is_show_groups&&this.activityData.groupsNumber>0},isMaxBuyLimit:function(){if(this.activityData){var t=this.limit_buy,i=this.surplus_quantity,e=this.activityData.buyNumber;if("string"===typeof e)return 10===t&&this.goods_num+Number(e)>=i}}},watch:{goodsSpec:function(t){var i;t&&t.length>0&&(i=this.specData).splice.apply(i,[0,t.length].concat(o(t)))},goodsDetail:function(t){t&&this.initBuyMeunData(t)},groupBuyType:function(t){t&&this.updateSpecGoods()}},mounted:function(){},methods:{initBuyMeunData:function(t){var i=this,e={};if(e.goods_sku_id=t["spec"]?t["spec"]["info"][0]["id"]:"",e.goods_price=t["spec"]?!i.groupsType&&t.is_vip>0&&"1"===t.vipstatus?t["spec"]["info"][0]["vipprice"]:t["spec"]["info"][0]["price"]:t["price"],e.sku_coupon_price=t["spec"]?t["spec"]["info"][0]["vipprice"]:t["vipprice"],e.stock_num=t.stk,e.buy_limit=Number(t.buy_limit),e.user_limit_num=t.user_limit_num,e.image_path="5"===t.type?t.logo:t.thumbs[0],e.lp_now_stk=t["lp_now_stk"],Number(t.optionstatus)>0&&t["spec"]["list"][0]["item"]["thumb"]&&(e.image_path=t["spec"]["list"][0]["item"]["thumb"]),Number(t.optionstatus)>0){var s=i.initManySpecData(this.specData),n=s.map(function(t){var i="";return t.item.map(function(t){t.checked&&(i=t.id)}),i});if(n.length>0){var o=t.spec.info.filter(function(t){return t.specs===n.join("_")});e.stock_num=o.length>0?o[0].stock:t.stk}e.specData=s}this.setData(e)},initManySpecData:function(t){for(var i in t)for(var e in t[i].item)e<1&&(t[i].item[0].checked=!0,this.goods_spec_arr.splice(i,1,t[i].item[0].id));return t},modelTap:function(t){var i=this,e=Number(t.currentTarget.dataset.attrIdx),s=Number(t.currentTarget.dataset.itemIdx),n=t.currentTarget.dataset.itemDisabled,o=t.currentTarget.dataset.itemCheck,u=null;i.specDisabled&&n||(u=i.specData[e].item.map(function(t,u){if(i.specDisabled?n||(t.checked=!o&&s===u,s===u&&i.goods_spec_arr.splice(e,1,t.signid)):t.checked=s===u,t.checked){var a=t.thumb?t.thumb:i.goodsDetail.thumbs[0];i.setData({image_path:a})}return s===u&&(i.goods_spec_arr.splice(e,1,t.checked?t.id:null),i.specDisabled&&i.filterDisabledSpec(t,e)),t}),i.$set(i.specData[e],"item",u),i.updateSpecGoods())},filterDisabledSpec:function(t,i){var e=this,s=e.goodsDetail.sku,n=e.specData,o=n.length,u=[];if(Array.isArray(n)&&Array.isArray(s)){if(s.map(function(i){var e=i.is_use,s=(i.title,i.spec_sku_id),n=void 0===s?"":s;1!==o||e?!e&&n.includes(t.signid)&&u.push(n):u.push(n)}),1===o)return;n.map(function(t,s){var n=t.spec_item_list;s!==i&&n.map(function(t){var i=e.goods_spec_arr.map(function(t){return t});i[s]=t.signid,i=i.filter(function(t){return!!t}).join("_"),t.disabled=u.includes(i)})})}},updateSpecGoods:function(){var t=this.goods_spec_arr.join("_"),i=this.goodsDetail.spec?this.goodsDetail.spec.info:[],e=this.goodsDetail,s=e.is_vip,n=(e.discount_price,e.vipstatus),o=e.type,u=null;if(u=i.find(function(i){return i.specs==t}),"object"===typeof u)this.skuItem=u,this.setData({goods_sku_id:u.id,goods_price:"1"===this.groupBuyType||s>0&&"1"===n?u.vipprice:u.price,stock_num:u.stock,goods_num:1,sku_coupon_price:u.vipprice});else if(void 0===u||""===u){this.skuItem?this.skuItem:i[0];"3"===o?(this.goods_price="2"===this.groupBuyType?this.goodsDetail["price"]:this.goodsDetail["aloneprice"],this.stock_num=this.stock_num):(this.goods_price=i[0].price,this.stock_num=i[0].stock)}},up:function(){var i=this.stock_num,e=this.buy_limit,s=this.user_limit_num;e>0&&this.goods_num>=s?t.showToast({icon:"none",title:0===s?"购买数量已达上限":"您最多可购买".concat(s,"件商品")}):this.goods_num<i&&++this.goods_num},down:function(){this.goods_num>1&&--this.goods_num},btnClick:function(t){var i=this.goods_num,e=this.goods_sku_id,n="3"===this.goodsDetail.type&&"2"===this.groupBuyType?"1":"2",o={btnType:t,goods_num:i,goods_sku_id:e};"3"===this.goodsDetail.type&&Object.assign(o,{buystatus:n}),"1"===this.goodsDetail.type&&this.lp_now_stk>0&&i>this.lp_now_stk?s.default.showError("抢购数量已达上限"):(this.showBuyMenu=!1,this.activeBuyMeuns(!1),this.$emit("submit",o))},activeBuyMeuns:function(t){var i=this,e=(i.groupBuyType,i.specData);t&&this.updateSpecGoods(),Array.isArray(e)&&e.length>0&&(e=e.map(function(e,s){return e.item=e.item.map(function(e,n){return t||(e.checked=!1),i.goods_spec_arr.splice(s,1,""),e}),e}),this.specData=e)},onToggleTrade:function(){this.showBuyMenu=!this.showBuyMenu}}};i.default=p}).call(this,e("543d")["default"])},"8eaf":function(t,i,e){"use strict";e.r(i);var s=e("4f8a"),n=e.n(s);for(var o in s)"default"!==o&&function(t){e.d(i,t,function(){return s[t]})}(o);i["default"]=n.a},aae8:function(t,i,e){},da04:function(t,i,e){"use strict";e.r(i);var s=e("3973"),n=e("8eaf");for(var o in n)"default"!==o&&function(t){e.d(i,t,function(){return n[t]})}(o);e("4c0a");var u,a=e("f0c5"),r=Object(a["a"])(n["default"],s["b"],s["c"],!1,null,"b1b215de",null,!1,s["a"],u);i["default"]=r.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/template/GoodsBuyMenu-create-component',
    {
        'components/template/GoodsBuyMenu-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("da04"))
        })
    },
    [['components/template/GoodsBuyMenu-create-component']]
]);
