var _live = require("../../../api/live.js"), template = require("../../../common/template/template.js"), app = getApp();

Page({
    data: {
        parameter: {
            navbar: "1",
            return: "1",
            title: "直播",
            color: !0,
            loading: !1,
            loadend: !1,
            loadTitle: "加载更多",
            class: "0"
        },
        banners: [],
        categories: [],
        loading: !1,
        loadend: !1,
        page: 1,
        limit: 10,
        lives: [],
        currentTab: 0,
        isScorll: !1,
        navH: 0
    },
    onPageScroll: function(t) {
        150 < t.scrollTop ? this.setData({
            isScorll: !0
        }) : this.setData({
            isScorll: !1
        });
    },
    onLoad: function(t) {
        t.spid && (app.globalData.spid = t.spid), t.scene && (app.globalData.code = decodeURIComponent(t.scene)), 
        template.tabbar("tabBar", 1, this), this.getCatetory();
    },
    getCatetory: function() {
        var a = this;
        (0, _live.getCatetory)().then(function(t) {
            a.setData({
                banners: t.data.banners,
                currentTab: t.data.currentTab,
                categories: t.data.lists,
                limit: t.data.limit,
                lives: t.data.lives
            });
        });
    },
    goRoom: function(t) {
        var a = t.currentTarget.dataset.liveid;
        1 == t.currentTarget.dataset.livestatus ? wx.redirectTo({
            url: "/live/pages/live_nostart/index?live_id=" + a
        }) : wx.redirectTo({
            url: "/live/pages/live_room2/index?live_id=" + a
        });
    },
    clickTab: function(t) {
        if (this.data.currentTab === t.target.dataset.current) return !1;
        this.setData({
            currentTab: t.target.dataset.current,
            page: 1,
            loadend: !1,
            lives: []
        }), this.getCatetoryLives();
    },
    getCatetoryLives: function() {
        var i = this;
        i.data.loadend || i.data.loading || (i.setData({
            loading: !0,
            loadTitle: ""
        }), (0, _live.getCatetoryLives)({
            id: i.data.currentTab,
            page: i.data.page
        }).then(function(t) {
            var a = t.data.lives || [], e = a.length < i.data.limit;
            i.data.lives = app.SplitArray(a, i.data.lives), i.setData({
                lives: i.data.lives,
                limit: i.data.limit,
                loadend: e,
                loading: !1,
                loadTitle: e ? "拉到底了哦" : "加载更多",
                page: i.data.page + 1
            });
        }));
    },
    onReady: function() {
        this.setData({
            navH: app.globalData.navHeight
        });
    },
    onShow: function() {},
    onHide: function() {
        this.setData({
            isClose: !0
        });
    },
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {
        this.getCatetoryLives();
    },
    onShareAppMessage: function() {
        return {
            title: "直播购物新体验，万千好货等你选",
            path: "/live/pages/live_list/index?spid=" + getApp().globalData.userInfo.id + "&mid=" + getApp().globalData.userInfo.id
        };
    }
});