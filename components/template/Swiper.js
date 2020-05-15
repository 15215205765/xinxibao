(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/template/Swiper"],{1942:function(t,n,e){"use strict";var i,u=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"b",function(){return u}),e.d(n,"c",function(){return a}),e.d(n,"a",function(){return i})},"1ab5":function(t,n,e){"use strict";var i=e("1dd6"),u=e.n(i);u.a},"1dd6":function(t,n,e){},a290:function(t,n,e){"use strict";e.r(n);var i=e("e59b"),u=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);n["default"]=u.a},e48c:function(t,n,e){"use strict";e.r(n);var i=e("1942"),u=e("a290");for(var a in u)"default"!==a&&function(t){e.d(n,t,function(){return u[t]})}(a);e("1ab5");var r,o=e("f0c5"),c=Object(o["a"])(u["default"],i["b"],i["c"],!1,null,"173fcc2b",null,!1,i["a"],r);n["default"]=c.exports},e59b:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=u(e("3099"));function u(t){return t&&t.__esModule?t:{default:t}}var a={data:function(){return{indicatorDots:!0,autoplay:!0,imgHeight:240,imgCurrent:0}},props:{itemData:{type:Array,default:function(){return[]}}},components:{},computed:{indicatorStyle:function(){return"arc2"}},beforeCreate:function(){},mounted:function(){},methods:{_imagesHeight:function(n,e){if(0===e){var i=this;t.getSystemInfo({success:function(t){var e=n.detail.width,u=n.detail.height,a=e/u,r=t.windowWidth/a;i.imgHeight=r}})}},_bindChange:function(t){this.imgCurrent=t.detail.current},navigationTo:function(t){i.default.navigationToH5(t)}}};n.default=a}).call(this,e("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/template/Swiper-create-component',
    {
        'components/template/Swiper-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("e48c"))
        })
    },
    [['components/template/Swiper-create-component']]
]);
