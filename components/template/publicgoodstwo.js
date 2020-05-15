(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/template/publicgoodstwo"],{"3d95":function(t,n,e){"use strict";e.r(n);var o=e("40fe"),u=e("68d9");for(var a in u)"default"!==a&&function(t){e.d(n,t,function(){return u[t]})}(a);e("6ee9");var r,i=e("f0c5"),c=Object(i["a"])(u["default"],o["b"],o["c"],!1,null,"53372e93",null,!1,o["a"],r);n["default"]=c.exports},"40fe":function(t,n,e){"use strict";var o,u=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"b",function(){return u}),e.d(n,"c",function(){return a}),e.d(n,"a",function(){return o})},"68d9":function(t,n,e){"use strict";e.r(n);var o=e("9662"),u=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);n["default"]=u.a},"6ee9":function(t,n,e){"use strict";var o=e("7f37"),u=e.n(o);u.a},"7f37":function(t,n,e){},9662:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=u(e("3099"));function u(t){return t&&t.__esModule?t:{default:t}}var a={props:["publicgoodstwoData"],data:function(){return{swiperI:1,publicgoodstwoDataArr:[]}},mounted:function(){for(var t in this.publicgoodstwoData.data)this.publicgoodstwoDataArr.push(this.publicgoodstwoData.data[t])},methods:{swiperCg:function(t){this.swiperI=t.detail.current+1},navigateTo:function(t){var n=-1!==t.indexOf("https");n?location.href=t:o.default.navigationTo({url:t})}}};n.default=a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/template/publicgoodstwo-create-component',
    {
        'components/template/publicgoodstwo-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("3d95"))
        })
    },
    [['components/template/publicgoodstwo-create-component']]
]);
