(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/template/postList"],{"465c":function(e,t,o){"use strict";var n,i=function(){var e=this,t=e.$createElement,o=(e._self._c,e.textList.indexOf(e.indexNumber));e.$mp.data=Object.assign({},{$root:{g0:o}})},a=[];o.d(t,"b",function(){return i}),o.d(t,"c",function(){return a}),o.d(t,"a",function(){return n})},"5f37":function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(o("3099"));function i(e){return e&&e.__esModule?e:{default:e}}var a=function(){return o.e("components/template/PopManager").then(o.bind(null,"b696"))},s={components:{PopManager:a},props:{itemInfo:{type:Object,default:{}},indexNumber:{type:Number,default:0},indexShow:{type:Number,default:-1}},data:function(){return{itemInfos:{attestation:"",avatar:"",comment_list:null,content:"",createtime:"",fabulous_avatar:[],fabulous_num:null,id:"",img:[],is_fabulous:null,keyword:[],look:"",mid:"",nickname:"",onetype:"",package:"",phone:"",share:"",top:"",type:""},comment_list:null,show:!1,replyShow1:!1,answerShow1:!1,coverShow:!1,replyType:"center",text:"",phoneHight:0,cid:null,amid:null,answerText:"",items:null,answerName:"",textList:[],textTips:"全文",fabulous_num:null,fabulous_avatar:null,isComment:!1,textTip_color:[{color:"#2196F3",border:"0.5px solid #2196F3"},{color:"#25DC4C",border:"0.5px solid #25DC4C"},{color:"#F58F57",border:"0.5px solid #F58F57"},{color:"#A59DD1",border:"0.5px solid #A59DD1"},{color:"#DBB065",border:"0.5px solid #DBB065"}]}},watch:{itemInfo:{handler:function(e,t){var o=this;for(var n in e)o.itemInfos[n]=e[n];o.init()},deep:!0,immediate:!0}},mounted:function(){var e=this;for(var t in e.itemInfo)e.itemInfos[t]=e.itemInfo[t];e.init()},methods:{goHome:function(e){e>0&&n.default.navigationTo({url:"pages/subPages/homepage/homepage/homepage?mid="+e+"&checkType=1"})},imgPre:function(t,o){e.previewImage({current:o[t],urls:o})},init:function(){var t=this;e.getSystemInfo({success:function(e){t.phoneHight=e.windowHeight+"px"}}),t.itemInfos.comment_list=t.itemInfo.comment_list?t.itemInfo.comment_list:"",t.fabulous_avatar=t.itemInfos.fabulous_avatar,t.fabulous_num=t.itemInfos.fabulous_num,t.comment_list=t.itemInfo.comment_list?t.itemInfo.comment_list:""},goPostDetails:function(){var e=this;n.default.navigationTo({url:"pages/mainPages/postDetails/postDetails?id="+e.itemInfos.id})},coverClosePop:function(){var e=this;e.$emit("operationShow",-1),e.coverShow=!1,e.show=!1,e.replyShow1=!1,e.answerShow1=!1},lose:function(){},comment:function(){var t=this,o={text:t.text,id:t.itemInfos.id};t.isComment||(t.isComment=!0,n.default._post_form("&p=pocket&do=comment",o,function(o){t.replyShow1=!1,t.show=!1,t.answerShow1=!1,t.coverShow=!1,n.default.showSuccess("评论成功",function(){t.isComment=!1});var i={nickname:e.getStorageSync("userinfo").nickname,content:t.text};t.comment_list.list[t.comment_list.list.length]=i,t.text=""}))},show1:function(){var e=this;e.indexShow===e.indexNumber?(e.$emit("operationShow",-1),e.coverShow=!1):(e.$emit("operationShow",e.indexNumber),e.coverShow=!0)},fullText:function(e){var t=this;if(-1==t.textList.indexOf(e))t.textList.push(e),t.textTips="收起";else{t.textTips="展开全文";for(var o=0;o<t.textList.length;o++)t.textList[o]==e&&t.textList.splice(o,1)}},kfPhone:function(){var t=this;t.$emit("operationShow",-1),t.replyShow1=!1,t.answerShow1=!1,t.show=!1,t.coverShow=!1,e.showModal({title:"联系客户",content:t.itemInfos.phone,success:function(o){o.confirm?e.makePhoneCall({phoneNumber:t.itemInfos.phone}):o.cancel}})},answerPop:function(e,t,o,n){var i=this;i.$emit("operationShow",-1),this.answerShow1=!0,i.cid=e,i.amid=t,i.items=o,i.answerName=n,console.info(i.answerName)},replyClose:function(){var e=this;e.replyShow1=!1,e.answerShow1=!1,e.show=!1,e.coverShow=!1},replyShow:function(){var e=this;e.$emit("operationShow",-1),this.replyShow1=!0},reply:function(){var t=this,o={id:t.itemInfos.id,cid:t.cid,amid:t.amid,text:t.answerText};t.isComment||(t.isComment=!0,n.default._post_form("&p=pocket&do=reply",o,function(o){if(n.default.showSuccess("回复成功",function(){t.isComment=!1}),null!==t.items){var i={amid:e.getStorageSync("userinfo").mid,reply_name:e.getStorageSync("userinfo").nickname,name:t.answerName,content:t.answerText};t.items.list.push(i)}t.answerText="",t.answerShow1=!1}))},fabulous:function(){var t=this,o={id:t.itemInfos.id};n.default._post_form("&p=pocket&do=fabulous",o,function(o){if(t.$emit("operationShow",-1),t.replyShow1=!1,t.answerShow1=!1,t.show=!1,t.coverShow=!1,"1"==t.itemInfos.is_fabulous){t.itemInfos.is_fabulous=0;for(var n=0;n<t.itemInfos.fabulous_avatar.length;n++)t.itemInfos.fabulous_avatar[n]==e.getStorageSync("userinfo").avatar&&t.itemInfos.fabulous_avatar.splice(n,1);t.itemInfos.fabulous_num=t.itemInfos.fabulous_num-1,e.showToast({icon:"none",title:"取消点赞",duration:2e3})}else t.itemInfos.is_fabulous=1,t.itemInfos.fabulous_avatar.push(e.getStorageSync("userinfo").avatar),t.itemInfos.fabulous_num=t.itemInfos.fabulous_num+1,e.showToast({icon:"none",title:"点赞成功",duration:2e3});console.info(t.itemInfos.fabulous_num)})}}};t.default=s}).call(this,o("543d")["default"])},a056:function(e,t,o){"use strict";o.r(t);var n=o("5f37"),i=o.n(n);for(var a in n)"default"!==a&&function(e){o.d(t,e,function(){return n[e]})}(a);t["default"]=i.a},b476:function(e,t,o){"use strict";o.r(t);var n=o("465c"),i=o("a056");for(var a in i)"default"!==a&&function(e){o.d(t,e,function(){return i[e]})}(a);o("d7e7");var s,r=o("f0c5"),u=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"adfbab8a",null,!1,n["a"],s);t["default"]=u.exports},d7e7:function(e,t,o){"use strict";var n=o("e055"),i=o.n(n);i.a},e055:function(e,t,o){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/template/postList-create-component',
    {
        'components/template/postList-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("b476"))
        })
    },
    [['components/template/postList-create-component']]
]);