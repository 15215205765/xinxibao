var _live = require("../../../api/live.js"), _util = require("../../../lib/utils/util.js"), _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(t) {
  return t && t.__esModule ? t : {
    default: t
  };
}

var app = getApp();

Page({
  data: {
    uploadImg: "",
    cate_id: 0,
    cate: '选择直播类型',
    live_cover: "",
    placeholder: "好的标题能吸引更多粉丝哦！",
    title: "",
    isUpload: !1,
    textareaValue: "",
    lat: "",
    lng: "",
    isInput: !1,
    isHeight: !1,
    index: 0,
    isPicker: !1,
    livetype: []
  },
  onLoadFun: function (t) {
    var i = this;
    wx.showLoading(), (0, _live.getAnchorLiveInfo)().then(function (t) {
      1 == t.data.config.open_location && wx.getLocation({
        type: "wgs84",
        success: function (t) {
          var e = t.latitude, a = t.longitude;
          i.setData({
            lat: e,
            lng: a
          });
        }
      }), i.setData({
        live_cover: t.data.live.cover,
        title: t.data.live.title,
        placeholder: t.data.live.title,
        cate_id: t.data.live.cate_id
      }), t.data.live.title || i.setData({
        placeholder: "好的标题能吸引更多粉丝哦！"
      }), wx.hideLoading();
    }).catch(function (t) {
      return wx.hideLoading(), app.Tips({
        title: t
      }, {
          tab: 5,
          url: "/live/pages/anchor-apply/index"
        });
    });
    i.getCatetory();
  },
  onLoad: function () { },
  onReady: function () {
    this.setData({
      navH: app.globalData.navHeight,
      winH: app.globalData.winHeight,
      winW: app.globalData.winWidth,
      screenTotalH: app.globalData.screenTotalH
    });
  },
  getCatetory: function () {
    var a = this;
    (0, _live.getCatetory)().then(function (t) {
      a.setData({
        livetype: t.data.lists,
      });
    });
  },





  onShow: function () { },


  textareaValue: function (t) {
    console.log(t), this.setData({
      title: t.detail.value
    });
  },
  onHide: function () { },
  onUnload: function () { },
  onPullDownRefresh: function () { }
});