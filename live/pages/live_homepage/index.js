var _live = require("../../../api/live.js");

function _defineProperty(a, t, e) {
    return t in a ? Object.defineProperty(a, t, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[t] = e, a;
}

var app = getApp();

Page({
    data: {
        parameter: {
            navbar: "1",
            return: "1",
            title: ""
        },
        currentTab: 0,
        where: {
            sid: 0,
            keyword: "",
            priceOrder: "",
            salesOrder: "",
            news: 0,
            page: 1,
            limit: 10,
            cid: 0
        },
        price: 0,
        stock: 0,
        live_id: 0,
        nows: !1,
        loadend_0: !1,
        loading_0: !1,
        loadend_1: !1,
        loading_1: !1,
        loadend_2: !1,
        loading_2: !1,
        loadend_3: !1,
        loading_3: !1,
        loadTitle_0: "加载更多",
        loadTitle_2: "加载更多",
        navTop: "",
        headTop: "",
        navFexid: !1,
        scrollH: 0,
        imgWidth: 0,
        loadingCount: 0,
        total_nums: 0,
        images: [],
        banners: [],
        viewers: [],
        live: [],
        goods: [],
        livelogs: [],
        page_0: 1,
        page_1: 1,
        page_2: 1,
        page_3: 1
    },
    onLoadFun: function(a) {
        this.anchorCenter(), this.getAnchorCenterGoods();
    },
    onLoad: function(a) {
        var t, i = this;
        a.live_id ? (this.setData((_defineProperty(t = {
            live_id: a.live_id || ""
        }, "where.keyword", a.searchValue || ""), _defineProperty(t, "navH", app.globalData.navHeight), 
        t)), wx.getSystemInfo({
            success: function(a) {
                var t = .48 * a.windowWidth, e = a.windowHeight;
                i.setData({
                    scrollH: e,
                    imgWidth: t
                });
            }
        })) : wx.redirectTo({
            url: "/common/pages/user/user"
        });
    },
    goRoom: function(a) {
        var t = a.currentTarget.dataset.id;
        t && wx.redirectTo({
            url: "/live/pages/live_playback/index?playback=" + t
        });
    },
    anchorCenter: function() {
        var t = this;
        (0, _live.anchorCenter)(this.data.live_id).then(function(a) {
            t.setData({
                banners: a.data.banners,
                live: a.data.live,
                total_nums: a.data.total_nums,
                viewers: a.data.viewers,
                "parameter.title": a.data.live.title
            });
        }).catch(function(a) {
            return app.Tips({
                title: a
            }, {
                tab: 5,
                url: "/common/pages/user/user"
            });
        });
    },
    getAnchorCenterGoods: function() {
        var i = this;
        i.data.loadend_0 || i.data.loading_0 || (i.setData({
            loading_0: !0,
            loadTitle_0: ""
        }), (0, _live.getAnchorCenterGoods)(this.data.live_id, {
            page: i.data.page_0
        }).then(function(a) {
            var t = a.data.goods || [], e = t.length < a.data.limit;
            i.data.goods = app.SplitArray(t, i.data.goods), i.setData({
                goods: i.data.goods,
                loadend_0: e,
                limit: a.data.limit,
                loading_0: !1,
                loadTitle_0: e ? "拉到底了哦" : "加载更多",
                page_0: i.data.page_0 + 1
            });
        }).catch(function(a) {
            i.setData({
                loading_0: !1,
                loadTitle_0: "加载更多"
            });
        }));
    },
    getAnchorLiveLogs: function() {
        var i = this;
        i.data.loadend_2 || i.data.loading_2 || (i.setData({
            loading_2: !0,
            loadTitle_2: ""
        }), (0, _live.getAnchorLiveLogs)(this.data.live_id, {
            page: i.data.page_2
        }).then(function(a) {
            var t = a.data.livelogs || [], e = t.length < a.data.limit;
            i.data.livelogs = app.SplitArray(t, i.data.livelogs), i.setData({
                livelogs: i.data.livelogs,
                loadend_2: e,
                limit: a.data.limit,
                loading_2: !1,
                loadTitle_2: e ? "拉到底了哦" : "加载更多",
                page_2: i.data.page_2 + 1
            });
        }).catch(function(a) {
            i.setData({
                loading_2: !1,
                loadTitle_2: "加载更多"
            });
        }));
    },
    gopages: function(a) {
        a.target.dataset.url && wx.redirectTo({
            url: a.target.dataset.url
        });
    },
    onReady: function() {
        var t = this;
        this.setData({
            navH: app.globalData.navHeight,
            winH: app.globalData.winHeight,
            winW: app.globalData.winWidth,
            screenTotalH: app.globalData.screenTotalH,
            bgsrc: app.globalData.static_url + "end-bg-min.jpg"
        }), wx.createSelectorQuery().selectAll(".home-page-nav").boundingClientRect(function(a) {
            console.log(a), t.setData({
                navTop: a[0].top
            });
        }).exec(), wx.createSelectorQuery().selectAll(".home-page-img").boundingClientRect(function(a) {
            console.log(a), t.setData({
                headTop: a[0].top
            });
        }).exec();
    },
    clickTab: function(a) {
        if (this.data.currentTab === a.target.dataset.current) return !1;
        this.setData({
            currentTab: a.target.dataset.current
        }), 2 == a.target.dataset.current && this.getAnchorLiveLogs();
    },
    onPageScroll: function(a) {
        a.scrollTop > this.data.navTop - this.data.headTop ? this.setData({
            navFexid: !0
        }) : this.setData({
            navFexid: !1
        });
    },
    set_where: function(a) {
        switch (a.target.dataset.type) {
          case "1":
            return wx.navigateBack({
                delta: 1
            });

          case "2":
            0 == this.data.price ? this.data.price = 1 : 1 == this.data.price ? this.data.price = 2 : 2 == this.data.price && (this.data.price = 0), 
            this.setData({
                price: this.data.price,
                stock: 0
            });
            break;

          case "3":
            0 == this.data.stock ? this.data.stock = 1 : 1 == this.data.stock ? this.data.stock = 2 : 2 == this.data.stock && (this.data.stock = 0), 
            this.setData({
                stock: this.data.stock,
                price: 0
            });
            break;

          case "4":
            this.setData({
                nows: !this.data.nows
            });
        }
        this.setData(_defineProperty({
            loadend: !1
        }, "where.page", 1)), this.get_product_list(!0);
    },
    setWhere: function() {
        0 == this.data.price ? this.data.where.priceOrder = "" : 1 == this.data.price ? this.data.where.priceOrder = "desc" : 2 == this.data.price && (this.data.where.priceOrder = "asc"), 
        0 == this.data.stock ? this.data.where.salesOrder = "" : 1 == this.data.stock ? this.data.where.salesOrder = "desc" : 2 == this.data.stock && (this.data.where.salesOrder = "asc"), 
        this.data.where.news = this.data.nows ? 1 : 0, this.setData({
            where: this.data.where
        });
    },
    onShow: function() {},
    onHide: function() {
        this.setData({
            isClose: !0
        });
    },
    onUnload: function() {},
    onPullDownRefresh: function() {
        this.anchorCenter(), wx.stopPullDownRefresh();
    },
    onShareAppMessage: function() {
        return console.log(11111, "/live/pages/live_room2/index?live_id=" + this.data.live_id + "&spid=" + getApp().globalData.userInfo.id + "&mid=" + getApp().globalData.userInfo.id), 
        {
            title: this.data.live.title || "",
            path: "/live/pages/live_room2/index?live_id=" + this.data.live_id + "&spid=" + getApp().globalData.userInfo.id + "&mid=" + getApp().globalData.userInfo.id
        };
    },
    onReachBottom: function() {
        0 == this.data.currentTab ? this.getAnchorCenterGoods() : 2 == this.data.currentTab && this.getAnchorLiveLogs();
    }
});