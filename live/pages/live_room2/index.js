var _live = require("../../../api/live"), _util = require("../../../lib/utils/util"), _util2 = _interopRequireDefault(_util), _live2 = require("../../../api/plugin/viewing_rewards/live");

function _interopRequireDefault(i) {
    return i && i.__esModule ? i : {
        default: i
    };
}

var app = getApp();

Page({
    data: {
        videoList: [],
        playerType: "video",
        fitType: "contain",
        live_id: 0,
        live: {},
        animation: "",
        shopIocn: !0,
        canvasStatus: !1,
        msgHeight: ""
    },
    onLoadFun: function(i) {
        this.getLiveDetail(this.data.live_id);
    },
    getLiveDetail: function(i) {
        var a = this, n = this;
        (0, _live.getLiveDetail)(i).then(function(i) {
            var e = [];
            e.push({
                live: i.data
            });
            var t = a.controlVideoPlayer(e, 0);
            n.setData({
                videoList: t,
                live: i.data.live
            });
        }).catch(function(i) {
            return app.Tips({
                title: i
            });
        });
    },
    getLivePlayerLives: function(t) {
        var a = this, n = this;
        (0, _live.getLivePlayerLives)(t).then(function(i) {
            var e = a.controlVideoPlayer(i.data.lives, t);
            console.log(555555, e), n.setData({
                videoList: e
            });
        });
    },
    controlVideoPlayer: function(i, t) {
        return 0 === i.length ? [] : (i.forEach(function(i, e) {
            i.video_is_player = t === e;
        }), i);
    },
    onHide: function() {
        this.selectComponent("#scrollvideo").leaveRoom();
    },
    onUnload: function() {
        this.selectComponent("#scrollvideo").leaveRoom();
    },
    onReady: function() {
        this.videoDom = this.selectComponent("#scrollvideo");
    },
    onLoad: function(i) {
        if (i.scene) {
            var e = _util2.default.getUrlParams(decodeURIComponent(i.scene));
            e.live_id && (i.live_id = e.live_id), e.spid && (app.globalData.spid = e.spid);
        }
        if (!i.live_id) return app.Tips({
            title: "缺少参数无法查看直播间"
        }, {
            tab: 3,
            url: 1
        });
        this.setData({
            live_id: i.live_id
        }), i.spid && (app.globalData.spid = i.spid);
    },
    swipeUpper: function(i) {
        var e = this;
        (0, _live.getNextLiveId)(this.data.live_id).then(function(i) {
            e.selectComponent("#scrollvideo").leaveRoom(), e.setData({
                live_id: i.data.live_id
            }), e.getLiveDetail(i.data.live_id);
        }).catch(function(i) {
            return app.Tips({
                title: i
            });
        });
    },
    swipeDown: function(i) {
        var e = this;
        (0, _live.getPreLiveId)(this.data.live_id).then(function(i) {
            e.selectComponent("#scrollvideo").leaveRoom(), e.setData({
                live_id: i.data.live_id
            }), e.getLiveDetail(i.data.live_id);
        }).catch(function(i) {
            return app.Tips({
                title: i
            });
        });
    },
    swipeToEnd: function(i) {
        var e = this;
        (0, _live.getPreLiveId)(this.data.live_id).then(function(i) {
            e.selectComponent("#scrollvideo").leaveRoom(), e.setData({
                live_id: i.data.live_id
            }), e.getLiveDetail(i.data.live_id);
        }).catch(function(i) {
            return app.Tips({
                title: i
            });
        });
    },
    swipeToStart: function(i) {
        var e = this;
        (0, _live.getNextLiveId)(this.data.live_id).then(function(i) {
            e.selectComponent("#scrollvideo").leaveRoom(), e.setData({
                live_id: i.data.live_id
            }), e.getLiveDetail(i.data.live_id);
        }).catch(function(i) {
            return app.Tips({
                title: i
            });
        });
    },
    sharePoster: function(i) {
        this.setData({
            canvasStatus: i.detail.canvasStatus
        });
    },
    onShopMsg: function() {
        var i = wx.createAnimation({
            duration: 500,
            timingFunction: "ease"
        });
        i.translateY(0).step(), this.setData({
            animation: i.export()
        }), this.moreMsg();
    },
    onHideMsg: function() {
        var i = wx.createAnimation({
            duration: 500,
            timingFunction: "ease"
        });
        i.translateY(1e3).step(), this.setData({
            animation: i.export(),
            shopIocn: !0
        });
    },
    moreMsg: function() {
        this.setData({
            msgList: this.data.msgList.concat(this.data.msgList),
            shopIocn: !1
        }), setTimeout(function() {
            wx.hideLoading();
        }, 1e3);
    },
    onShareAppMessage: function() {
        return {
            title: this.data.live.title || "",
            imageUrl: this.data.live.cover,
            path: "/live/pages/live_room2/index?live_id=" + this.data.live_id + "&spid=" + getApp().globalData.userInfo.id + "&mid=" + getApp().globalData.userInfo.id
        };
    }
});