(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/subPages/group/assemble/assemble"],{1665:function(o,t,e){"use strict";var n,i=function(){var o=this,t=o.$createElement;o._self._c;o._isMounted||(o.e0=function(t){o.show=!1})},s=[];e.d(t,"b",function(){return i}),e.d(t,"c",function(){return s}),e.d(t,"a",function(){return n})},"29e7c":function(o,t,e){"use strict";e.r(t);var n=e("1665"),i=e("a1ed");for(var s in i)"default"!==s&&function(o){e.d(t,o,function(){return i[o]})}(s);e("bece");var u,a=e("f0c5"),d=Object(a["a"])(i["default"],n["b"],n["c"],!1,null,"4b59fd72",null,!1,n["a"],u);t["default"]=d.exports},"45d8":function(o,t,e){},"92bb":function(o,t,e){"use strict";(function(o){e("f466");n(e("66fd"));var t=n(e("29e7c"));function n(o){return o&&o.__esModule?o:{default:o}}o(t.default)}).call(this,e("543d")["createPage"])},a1ed:function(o,t,e){"use strict";e.r(t);var n=e("c8ac"),i=e.n(n);for(var s in n)"default"!==s&&function(o){e.d(t,o,function(){return n[o]})}(s);t["default"]=i.a},bece:function(o,t,e){"use strict";var n=e("45d8"),i=e.n(n);i.a},c8ac:function(o,t,e){"use strict";(function(o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(e("3099"));function i(o){return o&&o.__esModule?o:{default:o}}var s=function(){return e.e("components/template/PopManager").then(e.bind(null,"b696"))},u=function(){return e.e("components/template/GoodsBuyMenu").then(e.bind(null,"da04"))},a={components:{PopManager:s,GoodsBuyMenu:u},computed:{imageSrc:function(){return this.imageRoot+"assemBack.png"}},data:function(){return{phoneHight:null,group_id:"",id:null,orderid:null,groupDetail:{},days:0,hours:0,minutes:0,seconds:0,show:!1,top:"top",bottom:"bottom",show1:!1,goodsDetail:{},goods_id:null,goodsType:null,goods_num:1,goods_sku_id:"",dataInfo:{},specData:[],group_buy_type:null}},onLoad:function(t){this.id=t.id;var e=this;o.getSystemInfo({success:function(o){e.phoneHight=o.windowHeight+"px"}}),void 0!==t.orderid&&(this.orderid=t.orderid),void 0==t.orderid&&(this.orderid=""),void 0!==t.group_id&&(this.group_id=t.group_id),void 0==t.group_id&&(this.group_id=""),this.init()},methods:{goGoods:function(){var o=this;n.default.navigationTo({url:"pages/subPages/goods/index?type=3&id="+o.id})},init:function(){var o=this;o.getGroupDetail1(),o.getGoodsDetail()},goodsSubmit:function(o){var t=this,e=o.btnType,n=o.goods_num,i=o.goods_sku_id;t.goods_num=n,t.goods_sku_id=i,"confirm"===e&&t.submit()},initGoodsDetailData:function(o){var t=this;return o["comment"]&&!!o["comment"]["length"]>0&&o.comment.map(function(o){return o.createtime=t.$util.formatTime(o.createtime,"rule","-"),o.star=Number(o.star),o}),o.is_vip=Number(o.is_vip),o},onToggleTrade:function(){this.$refs.goodsBuyMenu.onToggleTrade()},showM:function(){var o=this;o.getGoodsDetail(),o.show1=!0},showImg:function(){var o=this;o.show=!0},getGoodsDetail:function(o,t){var e=this,i={id:e.id,type:3};n.default._post_form("&p=goods&do=getGoodsDetail",i,function(o){var t=e.initGoodsDetailData(o.data),n=t.spec?t.spec.list:null;e.setData({dataInfo:t,specData:n}),console.info(e.dataInfo),console.info(e.specData)},!1,function(){e.loadlogo=!1})},submit:function(){console.info(333333333);var o=this,t=o.dataInfo,e=Number(t.buy_limit)||"",i=t.user_limit_num||"";if(e>0&&i<=0)return console.info(555555555),void n.default.showError("购买数量已达上限");console.info(o.dataInfo),console.info(o.goods_id),console.info(o.goods_num),console.info(o.goods_sku_id),n.default.navigationTo({url:"pages/subPages/submitOrder/submitOrder?goods_id="+o.dataInfo.id+"&goods_num="+o.goods_num+"&specid="+(o.goods_sku_id||"")+"&plugin="+o.dataInfo.type+"&buystatus=1&group_id="+o.group_id,success:function(){o.onToggleTrade()}})},getGroupDetail1:function(){var o=this,t={order_id:o.orderid,group_id:o.group_id};n.default._post_form("&p=wlfightgroup&do=groupDetail",t,function(t){t.data.goods.name.length>22&&(t.data.goods.name=t.data.goods.name.slice(0,22)+"..."),o.groupDetail=t.data,o.group_id=t.data.group_id;var e=(new Date).getTime(),n=1e3*Number(t.data.failtime),i=parseInt((n-e)/1e3),s=setInterval(function(){i--,o.days=parseInt(i/86400),o.hours=parseInt(i%86400/3600),o.minutes=parseInt(i%3600/60),o.seconds=parseInt(i%60),(0==i||i<0)&&(clearInterval(s),o.days="00",o.hours="00",o.minutes="00",o.seconds="00")},1e3)})},goOrder:function(){n.default.navigationTo({url:"pages/subPages/orderList/orderList"})}}};t.default=a}).call(this,e("543d")["default"])}},[["92bb","common/runtime","common/vendor"]]]);