(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page/pageComponents/Recommend_goods"],{"0590":function(t,e,n){"use strict";var o,u=function(){var t=this,e=t.$createElement;t._self._c},d=[];n.d(e,"b",function(){return u}),n.d(e,"c",function(){return d}),n.d(e,"a",function(){return o})},"16d7":function(t,e,n){"use strict";n.r(e);var o=n("9fce"),u=n.n(o);for(var d in o)"default"!==d&&function(t){n.d(e,t,function(){return o[t]})}(d);e["default"]=u.a},"9fce":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=u(n("3099"));function u(t){return t&&t.__esModule?t:{default:t}}var d=function(){return n.e("components/page/pageComponents/goodsStyle").then(n.bind(null,"c20e"))},a={data:function(){return{goodslist:[]}},props:{goods_type:{type:String,default:function(){return""}},goods_id:{type:String,default:function(){return""}}},components:{goodsStyle:d},mounted:function(){this.getRecommendGoods()},methods:{getRecommendGoods:function(){var t=this;o.default._post_form("&do=getRecommendGoods",{type:t.goods_type,id:t.goods_id},function(e){t.setData({goodslist:e.data})},!1,function(){})},navgateto:function(t){var e=getCurrentPages(),n=e[e.length-1],u="pages/subPages/goods/index"===n.route?"rediRect":"navigate";o.default.navigationTo({url:"pages/subPages/goods/index?goods_id=".concat(t["id"],"&goodsType=").concat(t["type"]),navType:u})}}};e.default=a},ef24:function(t,e,n){"use strict";n.r(e);var o=n("0590"),u=n("16d7");for(var d in u)"default"!==d&&function(t){n.d(e,t,function(){return u[t]})}(d);var a,r=n("f0c5"),s=Object(r["a"])(u["default"],o["b"],o["c"],!1,null,"250bdb30",null,!1,o["a"],a);e["default"]=s.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page/pageComponents/Recommend_goods-create-component',
    {
        'components/page/pageComponents/Recommend_goods-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("ef24"))
        })
    },
    [['components/page/pageComponents/Recommend_goods-create-component']]
]);
