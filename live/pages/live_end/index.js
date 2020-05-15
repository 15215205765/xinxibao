var _live = require("../../../api/live.js"), _user = require("../../../api/user"), _live2 = require("../../../api/live"), app = getApp();

Page({
    data: {
        parameter: {},
        live_time: "",
        live_order: 0,
        live_follow: 0,
        live_shares: 0,
        live_likes: 0
    },
    goHome: function() {
        wx.reLaunch({
          url: "/pages/mainPages/index/index"
        });
    },
    onLoadFun: function(e) {
        var a = this;
        (0, _live.liveEndCount)().then(function(e) {
            a.setData({
                live_time: e.data.live_time,
                live_order: e.data.live_order,
                live_follow: e.data.live_follow,
                live_likes: e.data.live_likes,
                live_shares: e.data.live_shares
            });
        }).catch(function(e) {
            return app.Tips({
                title: e
            }, {
                tab: 5,
                url: "/common/pages/user/user"
            });
        });
    },
    onLoad: function(e) {},
    onReady: function() {
        this.setData({
            navH: app.globalData.navHeight,
            winH: app.globalData.winHeight,
            winW: app.globalData.winWidth,
            screenTotalH: app.globalData.screenTotalH,
            bgsrc: app.globalData.static_url + "end-bg-min.jpg"
        });
    },
    onShow: function() {},
    onHide: function() {
        this.setData({
            isClose: !0
        });
    },
    onUnload: function() {},
    onPullDownRefresh: function() {}
});