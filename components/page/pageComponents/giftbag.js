(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page/pageComponents/giftbag"],{"106e":function(t,n,e){"use strict";e.r(n);var a=e("87c4"),u=e("32a1");for(var o in u)"default"!==o&&function(t){e.d(n,t,function(){return u[t]})}(o);e("d69e");var i,f=e("f0c5"),r=Object(f["a"])(u["default"],a["b"],a["c"],!1,null,"3e2eb19c",null,!1,a["a"],i);n["default"]=r.exports},"32a1":function(t,n,e){"use strict";e.r(n);var a=e("6432"),u=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);n["default"]=u.a},6432:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=u(e("3099"));function u(t){return t&&t.__esModule?t:{default:t}}var o={data:function(){return{}},components:{},props:{giftData:{type:Object,default:function(){return{}}},giftData_two:{type:Array,default:function(){return[]}},disType:{type:Number,default:function(){return 1}},isdiyPage:{type:Boolean,default:function(){return!1}},isdiyPageStyle:{type:Object,default:function(){return{}}},isdiyPageParams:{type:Object,default:function(){return{}}}},computed:{giftList:function(){return 1===this.disType?this.giftData["data"]:this.giftData_two}},onShow:function(){},onLoad:function(){},mounted:function(){},methods:{isUnfold_act:function(t){var n=this,e=n.giftData.data||n.giftData_two;n.$set(e[t],"isUnfold",!e[t].isUnfold)},navigateTo:function(t){console.log(t),a.default.navigationTo({url:t})}}};n.default=o},"87c4":function(t,n,e){"use strict";var a,u=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"b",function(){return u}),e.d(n,"c",function(){return o}),e.d(n,"a",function(){return a})},a205:function(t,n,e){},d69e:function(t,n,e){"use strict";var a=e("a205"),u=e.n(a);u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page/pageComponents/giftbag-create-component',
    {
        'components/page/pageComponents/giftbag-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("106e"))
        })
    },
    [['components/page/pageComponents/giftbag-create-component']]
]);