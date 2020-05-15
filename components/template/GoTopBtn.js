(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/template/GoTopBtn"],{"06bc":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=null,o={data:function(){return{isShowTop:!1}},methods:{goTop:function(n){"page"===this.topType?t.pageScrollTo({scrollTop:0,duration:300}):"view"===this.topType&&this.$emit("clickBtn")},debounce:function(t,n){var o=this;return function(){clearTimeout(e),e=setTimeout(function(){o.handler(n)},t)}()},handler:function(t){this.isShowTop=t>this.showTopHeight}},watch:{pageScroll:function(t){this.debounce(200,t)}},props:{pageScroll:Number,showTopHeight:{type:Number,default:300},topType:{type:String,default:"page"},goTopStyle:String}};n.default=o}).call(this,e("543d")["default"])},"0d4d4":function(t,n,e){"use strict";var o,u=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"b",function(){return u}),e.d(n,"c",function(){return i}),e.d(n,"a",function(){return o})},1110:function(t,n,e){"use strict";var o=e("494f"),u=e.n(o);u.a},"494f":function(t,n,e){},b872:function(t,n,e){"use strict";e.r(n);var o=e("06bc"),u=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);n["default"]=u.a},c918:function(t,n,e){"use strict";e.r(n);var o=e("0d4d4"),u=e("b872");for(var i in u)"default"!==i&&function(t){e.d(n,t,function(){return u[t]})}(i);e("1110");var c,r=e("f0c5"),a=Object(r["a"])(u["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);n["default"]=a.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/template/GoTopBtn-create-component',
    {
        'components/template/GoTopBtn-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("c918"))
        })
    },
    [['components/template/GoTopBtn-create-component']]
]);
