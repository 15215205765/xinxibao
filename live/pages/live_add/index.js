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
        cate_id:0,
        cate:'选择直播类型',
        live_cover: "",
        placeholder: "好的标题能吸引更多粉丝哦！",
        title: "",
        isUpload: !1,
        textareaValue: "",
        lat: "",
        lng: "",
        isInput: !1,
        isHeight:!1,
        index:0,
        isPicker:!1,
        livetype:[],
        typeStatus:!1
    },
    onLoadFun: function(t) {
        var i = this;
        wx.showLoading(), (0, _live.getAnchorLiveInfo)().then(function(t) {
            1 == t.data.config.open_location && wx.getLocation({
                type: "wgs84",
                success: function(t) {
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
                cate_id:t.data.live.cate_id
            }), t.data.live.title || i.setData({
                placeholder: "好的标题能吸引更多粉丝哦！"
            }), wx.hideLoading();
        }).catch(function(t) {
            return wx.hideLoading(), app.Tips({
                title: t
            }, {
                tab: 5,
                url: "/live/pages/anchor-apply/index"
            });
        });
      i.getCatetory();
    },
    onLoad: function() {},
    onReady: function() {
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
        cate_id: t.data.lists[0].id,
        cate: t.data.lists[0].name
      });
    });
  },
    onInputChange: function(t) {
        this.setData({
            placeholder: t.detail.value,
            title: t.detail.value
        });
    },
    getInput: function() {
        this.setData({
            isInput: !0,
            isHeight:!0
        });
    },
  getPicker:function(){
    this.setData({
      typeStatus: !0
    });
  },
    closeInput: function() {
        this.setData({
            isInput: !1,
            isPicker: !1,
            isHeight: !1
        });
    },
  typeChoose:function(e){
    console.log(e)
    var page = this;
    var livetype = page.data.livetype;
    console.log(livetype)
    var index = e.currentTarget.dataset.index;
    console.log(index)
    var cate_id = livetype[index].id;
    var cate = livetype[index].name;
    this.setData({
      index: index,
      cate_id: cate_id,
      cate:cate
    })
  },
  typeSubmit:function(){
    var page = this;
    page.setData({
      typeStatus:!1
    })
  },
    liveBack: function() {
        1 < getCurrentPages().length ? wx.navigateBack() : wx.reLaunch({
            url: "/common/pages/index/index"
        });
    },
    LiveGoods:function(){
      wx.navigateTo({
        url: "/live/pages/anchor-goods/index"
      });
  },
    getShowNotice: function() {
        this.setData({
            showNotice: !this.data.showNotice
        });
    },
    onShow: function() {},
    uploadpic: function() {
        var e = this;
        _util2.default.uploadImageOne("common/upload/image", function(t) {
            console.log(t), t.data.url ? e.setData({
                isUpload: !0,
                live_cover: t.data.url
            }) : e.setData({
                isUpload: !1
            });
        });
    },
    goLivePush: function() {
      this.data.live_cover ? this.data.title ? this.data.cate_id ? (0, _live.liveStart)({
            live_cover: this.data.live_cover,
            title: this.data.title,
            cate_id: this.data.cate_id,
            lat: this.data.lat,
            lng: this.data.lng
        }).then(function(t) {
            200 == t.status ? wx.reLaunch({
                url: "/live/pages/live_push/index"
            }) : wx.showToast({
                title: t.msg,
                icon: "none",
                duration: 2e3
            });
        }) : wx.showToast({
          title: "请选择直播类型",
          icon: "none",
          duration: 2e3
        }) : wx.showToast({
            title: "请输入直播标题",
            icon: "none",
            duration: 2e3
        }) : wx.showToast({
            title: "请上传封面",
            icon: "none",
            duration: 2e3
        });
    },
    textareaValue: function(t) {
        console.log(t), this.setData({
            title: t.detail.value
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {}
});