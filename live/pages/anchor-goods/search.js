var _live = require("../../../api/live.js"), _dialog = require("../../vant/dialog/dialog"), _dialog2 = _interopRequireDefault(_dialog);

function _interopRequireDefault(t) {
  return t && t.__esModule ? t : {
    default: t
  };
}

function _defineProperty(t, e, a) {
  return e in t ? Object.defineProperty(t, e, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = a, t;
}

var app = getApp();

Page(_defineProperty({
  data: {
    parameter: {
     
    },
    addGoodsShow: !1,
    live_id: 0,
    searchGoods: [],
    liveGoods: []
  },
  onShow: function () {
    var e = this;
    (0, _live.getLiveYzyg)(this.data.live_id).then(function (t) {
      e.setData({
        liveGoods: t.data.goods
      });
    }).catch(function (t) {
      return app.Tips({
        title: t
      });
    });
  },
  
  input:function(e){
    console.log(e)
    var keyword = e.detail.value;
    var page = this;
    page.setData({
      keyword:keyword
    })
  },
  search:function(){
    var page = this;
    var data = {
      keyword :page.data.keyword,
      type:'S'
    }
    console.log(data);
    _live.liveZhtcGoods(data).then(function (t) {
      console.log(t)
          var livegoods = page.data.liveGoods
          var kanjia = t.data.kanjia;
          var pintuan = t.data.pintuan;
          var qianggou = t.data.qianggou;
          var tuangou = t.data.tuangou;
          for (let i = 0; i < kanjia.length; i++) {
            for (let k = 0; k < livegoods.length; k++) {
              if(livegoods[k]['type']=='kanjia'){
                if (parseInt(kanjia[i].id) == livegoods[k]['goods_id']) {
                  kanjia[i].yixuanze = 1;
                }
              }
            }
          }
          for (let i = 0; i < pintuan.length; i++) {
            for (let k = 0; k < livegoods.length; k++) {
              if (livegoods[k]['type'] == 'pintuan') {
                if (parseInt(pintuan[i].id) == livegoods[k]['goods_id']) {
                  pintuan[i].yixuanze = 1;
                }
              }
            }
          }
          for (let i = 0; i < qianggou.length; i++) {
            for (let k = 0; k < livegoods.length; k++) {
              if (livegoods[k]['type'] == 'qianggou') {
                if (parseInt(qianggou[i].id) == livegoods[k]['goods_id']) {
                  qianggou[i].yixuanze = 1;
                }
              }
            }
          }
          for (let i = 0; i < tuangou.length; i++) {
            for (let k = 0; k < livegoods.length; k++) {
              if (livegoods[k]['type'] == 'tuangou') {
                if (parseInt(tuangou[i].id) == livegoods[k]['goods_id']) {
                  tuangou[i].yixuanze = 1;
                }
              }
            }
          }
          page.setData({
            kanjia:kanjia,
            pintuan:pintuan,
            qianggou:qianggou,
            tuangou:tuangou
          })
         
       
     
    }).catch(function (t) {
      return app.Tips({
        title: t.data
      });
    });
  },
    livechoose: function (e) {
    console.log(e)
      let yixuanze = e.currentTarget.dataset.array.yixuanze;
      let index = e.currentTarget.dataset.index;
    if(yixuanze){
      return false;
    }
    let ID = e.currentTarget.dataset.array.id;
    let pic = e.currentTarget.dataset.array.thumb;
      let title = e.currentTarget.dataset.array.name;
      let price = e.currentTarget.dataset.array.price;
    let type = e.currentTarget.dataset.type;
    let invite_code = wx.getStorageSync('userinfo').mid;
    var data = {
      id: ID,
      pic: pic,
      title: title,
      type: type,
      invite_code: invite_code,
      price:price
    }
    console.log(data);
    _live.liveYzygGoods(data).then(function (t) {
      var page = this;
      console.log(t)
      if (t.data == '添加成功') {
        if(type=='tuangou'){
          let list = page.data.tuangou;
          console.log(index, list);
          list[index].yixuanze = 1;
          page.setData({
            tuangou: list
          })
        }
        if (type == 'kanjia') {
          let list = page.data.kanjia;
          console.log(index, list);
          list[index].yixuanze = 1;
          page.setData({
            kanjia: list
          })
        }
        if (type == 'pintuan') {
          let list = page.data.pintuan;
          console.log(index, list);
          list[index].yixuanze = 1;
          page.setData({
            pintuan: list
          })
        }
        if (type == 'qianggou') {
          let list = page.data.qianggou;
          console.log(index, list);
          list[index].yixuanze = 1;
          page.setData({
            qianggou: list
          })
        }
      }
      wx.showToast({
        title: t.data,
      })
    }).catch(function (t) {
      console.log(t)
      return app.Tips({
        title: t.data
      });
    });
  }
  
}));