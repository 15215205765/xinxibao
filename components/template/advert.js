(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/template/advert"],{"126b":function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=r(e("3099"));function r(t){return t&&t.__esModule?t:{default:t}}var u={props:["advertData"],data:function(){return{countTimeNmu:0,banner:{indicatorDots:!0,circular:!1},advertDataData:[],isadvert:null,advertflag:!1}},computed:{},mounted:function(){this.openAdvert()},methods:{openAdvert:function(){var a=this;if(a.advertData.params&&"1"===a.advertData.params.showtype){var e=t.getStorageSync("timeStamp".concat(a.advertData.id)),n=Date.parse(new Date)/1e3,r=a.advertData.params.showtime;if(e){var u=!(e+60*r>n);u&&t.setStorageSync("timeStamp".concat(a.advertData.id),n),a.isadvert=u}else a.isadvert=!0,t.setStorageSync("timeStamp".concat(a.advertData.id),n)}else a.isadvert=!0;for(var o in a.advertData.data)a.advertDataData.push(a.advertData.data[o]);a.advertData.params&&"default"==a.advertData.params.style&&(a.countTimeNmu=parseInt(a.advertData.params.autoclose),setTimeout(a.countTime,1e3))},advertClose:function(){var t=this;t.advertData.params&&"1"==t.advertData.params.canclose&&(t.isadvert=!1,t.advertflag=!0,t.countTimeNmu=0,clearTimeout(t.countTime))},countTime:function(){var t=this;t.countTimeNmu+=-1,t.countTimeNmu>0?setTimeout(t.countTime,1e3):t.advertClose()},navigateTo:function(t){n.default.navigationTo({url:t})}}};a.default=u}).call(this,e("543d")["default"])},"53f7":function(t,a,e){"use strict";var n=e("b2d0"),r=e.n(n);r.a},"7b35":function(t,a,e){"use strict";e.r(a);var n=e("126b"),r=e.n(n);for(var u in n)"default"!==u&&function(t){e.d(a,t,function(){return n[t]})}(u);a["default"]=r.a},"9a40":function(t,a,e){"use strict";var n,r=function(){var t=this,a=t.$createElement;t._self._c},u=[];e.d(a,"b",function(){return r}),e.d(a,"c",function(){return u}),e.d(a,"a",function(){return n})},b2d0:function(t,a,e){},dc1e:function(t,a,e){"use strict";e.r(a);var n=e("9a40"),r=e("7b35");for(var u in r)"default"!==u&&function(t){e.d(a,t,function(){return r[t]})}(u);e("53f7");var o,i=e("f0c5"),c=Object(i["a"])(r["default"],n["b"],n["c"],!1,null,"25e9e049",null,!1,n["a"],o);a["default"]=c.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/template/advert-create-component',
    {
        'components/template/advert-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("dc1e"))
        })
    },
    [['components/template/advert-create-component']]
]);
