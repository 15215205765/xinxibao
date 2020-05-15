var _live = require("../../../api/live.js"), _util = require("../../../lib/utils/util.js"), _util2 = _interopRequireDefault(_util), _user = require("../../../api/user");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var app = getApp();

Page({
    data: {
        parameter: {
            navbar: "1",
            return: "1",
            title: "主播绑定",
            color: !0,
            class: "0"
        },
        live: {}
    },
    onLoadFun: function(e) {
        this.getUserInfo();
        var t = _util2.default.getUrlParams(decodeURIComponent(this.options.scene));
        t.live_id && this.getBindPageLiveInfo(t.live_id);
    },
    agree: function() {
        (0, _live.getBindLive)(this.data.live.id).then(function(e) {
            return app.Tips({
                title: e.msg,
                icon: "success"
            });
        }).catch(function(e) {
            return app.Tips({
                title: e
            });
        });
    },
    goshop: function() {
        wx.redirectTo({
            url: "/common/pages/index/index"
        });
    },
    getUserInfo: function() {
        var t = this;
        (0, _user.getUserInfo)().then(function(e) {
            t.setData({
                userInfo: e.data,
                loginType: e.data.login_type,
                orderStatusNum: e.data.orderStatusNum
            });
        });
    },
    onLoad: function(e) {
        this.setData({
            "parameter.return": e.is_return ? "0" : "1"
        });
    },
    getBindPageLiveInfo: function(e) {
        var t = this;
        (0, _live.getBindPageLiveInfo)(e).then(function(e) {
            t.setData({
                live: e.data
            });
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {
        this.setData({
            isClose: !0
        });
    },
    onUnload: function() {},
    onPullDownRefresh: function() {}
});