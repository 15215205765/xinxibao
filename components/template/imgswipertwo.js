(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/template/imgswipertwo"],{"1dd4":function(t,n,a){"use strict";var e,r=function(){var t=this,n=t.$createElement;t._self._c},i=[];a.d(n,"b",function(){return r}),a.d(n,"c",function(){return i}),a.d(n,"a",function(){return e})},"587c":function(t,n,a){"use strict";a.r(n);var e=a("1dd4"),r=a("c987");for(var i in r)"default"!==i&&function(t){a.d(n,t,function(){return r[t]})}(i);a("6118");var o,u=a("f0c5"),c=Object(u["a"])(r["default"],e["b"],e["c"],!1,null,"f29ad356",null,!1,e["a"],o);n["default"]=c.exports},6118:function(t,n,a){"use strict";var e=a("aa46"),r=a.n(e);r.a},6444:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=r(a("3099"));function r(t){return t&&t.__esModule?t:{default:t}}var i={props:["imgswipertwoData"],data:function(){return{swiperI:1,imgswipertwoDataArr:[]}},mounted:function(){for(var t in this.imgswipertwoData.data)this.imgswipertwoDataArr.push(this.imgswipertwoData.data[t]);console.log()},methods:{swiperCg:function(t){this.swiperI=t.detail.current+1},navigateTo:function(t){var n=-1!==t.indexOf("https");n?location.href=t:e.default.navigationTo({url:t})}}};n.default=i},aa46:function(t,n,a){},c987:function(t,n,a){"use strict";a.r(n);var e=a("6444"),r=a.n(e);for(var i in e)"default"!==i&&function(t){a.d(n,t,function(){return e[t]})}(i);n["default"]=r.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/template/imgswipertwo-create-component',
    {
        'components/template/imgswipertwo-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("587c"))
        })
    },
    [['components/template/imgswipertwo-create-component']]
]);
