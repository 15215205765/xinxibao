var _live = require("../../../api/live.js"), template = require("../../../common/template/template.js"), app = getApp();

Page({
    data: {
        sitepath: app.getDomain(),
        parameter: {
            navbar: "1",
            return: "1",
            title: "直播",
            color: !0,
            class: "0"
        },
        loading: !1,
        currentTab:0,
        loadend: !1,
        loadTitle: "加载更多",
        limit: 0,
        page: 1,
        lives: [],
        banners: [],
        isScorll: !1,
        navH: 0,
        deviceType: "iPhone-X",
        style: 1,
        indicatorDots: !1,
        circular: !0,
        autoplay: !0,
        interval: 3e3,
        duration: 500
    },
    onPageScroll: function(a) {
        150 < a.scrollTop ? this.setData({
            isScorll: !0
        }) : this.setData({
            isScorll: !1
        });
    },
    onLoad: function(a) {
        a.spid && (app.globalData.spid = a.spid), a.scene && (app.globalData.code = decodeURIComponent(a.scene)), 
          template.tabbar("tabBar", 1, this), this.getCatetory(), this.waterfallLiveLists();
    },
    inInput:function(e){
        var page = this;
        var keyword = e.detail.value;
        page.setData({
          keyword:keyword
        })
    },
    search:function(){
      var i = this;
      var keyword = i.data.keyword;
      (0, _live.waterfallLiveLists)({
        keyword: keyword
      }).then(function (a) {
        var t = a.data.lists || [], e = t.length < a.data.limit;
        i.data.lives = t, i.setData({
          lives: i.data.lives,
          loadend: e,
          limit: a.data.limit,
          banners: a.data.banners,
          loading: !1,
          loadTitle: e ? "拉到底了哦" : "加载更多",
        });
      }).catch(function (a) {
        i.setData({
          loading: !1,
          loadTitle: "加载更多"
        });
      })
    },
    waterfallLiveLists: function() {
        var i = this;
        i.data.loadend || i.data.loading || (i.setData({
            loading: !0,
            loadTitle: ""
        }), (0, _live.waterfallLiveLists)({
            page: i.data.page
        }).then(function(a) {
            var t = a.data.lists || [], e = t.length < a.data.limit;
            i.data.lives = app.SplitArray(t, i.data.lives), i.setData({
                lives: i.data.lives,
                loadend: e,
                limit: a.data.limit,
                banners: a.data.banners,
                loading: !1,
                loadTitle: e ? "拉到底了哦" : "加载更多",
                page: i.data.page + 1
            });
        }).catch(function(a) {
            i.setData({
                loading: !1,
                loadTitle: "加载更多"
            });
        }));
    },
  getCatetory: function () {
    var a = this;
    (0, _live.getCatetory)().then(function (t) {
      a.setData({
        banners: t.data.banners,
        categories: t.data.lists,
        limit: t.data.limit,
        // lives: t.data.lives
      });
      // a.getCatetoryLives()
    });
  },
  clickTab: function (t) {
    if (this.data.currentTab === t.target.dataset.current) return !1;
    this.setData({
      currentTab: t.target.dataset.current,
      page: 1,
      loadend: !1,
      lives: []
    })
     if (t.target.dataset.current == 0){
       this.waterfallLiveLists()
    }else{
       this.getCatetoryLives();
    }
    
    
  },
  getCatetoryLives: function () {
    var i = this;
    i.data.loadend || i.data.loading || (i.setData({
      loading: !0,
      loadTitle: ""
    }), (0, _live.getCatetoryLives)({
      id: i.data.currentTab,
      page: i.data.page
    }).then(function (a) {
      var t = a.data.lists || [], e = t.length < a.data.limit;
      i.data.lives = app.SplitArray(t, i.data.lives), i.setData({
        lives: i.data.lives,
        loadend: e,
        limit: a.data.limit,
        banners: a.data.banners,
        loading: !1,
        loadTitle: e ? "拉到底了哦" : "加载更多",
        page: i.data.page + 1
      });
    }));
  },
    onReachBottom: function() {
        this.waterfallLiveLists();
    },
    goRoom: function(a) {
        var t = a.currentTarget.dataset.liveid;
        1 == a.currentTarget.dataset.livestatus ? wx.redirectTo({
            url: "/live/pages/live_nostart/index?live_id=" + t
        }) : wx.redirectTo({
            url: "/live/pages/live_room2/index?live_id=" + t
        });
    },
    // clickTab: function(a) {
    //     if (console.log(11111, a), this.data.currentTab === a.target.dataset.current) return !1;
    //     this.getCatetoryLives(a.target.dataset.current);
    // },
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
    onUnload: function() {
      wx.navigateBack();
    },
    onPullDownRefresh: function() {},
    onShareAppMessage: function() {
        return {
            title: "直播购物新体验，万千好货等你选",
            path: "/live/pages/live_list1/index?spid=" + getApp().globalData.userInfo.id + "&mid=" + getApp().globalData.userInfo.id
        };
    }
});