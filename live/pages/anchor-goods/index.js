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
            navbar: "1",
            return: "1",
            title: "直播间商品",
            color: !0,
            class: "0"
        },
        addGoodsShow: !1,
        live_id: 0,
        searchGoods: [],
        liveGoods: []
    },
    onShow: function() {
        this.getAnchorInfo();
    },
    getAnchorInfo: function() {
        var e = this;
        (0, _live.getAnchorInfo)().then(function(t) {
            e.setData({
                live_id: t.data.live.id
            }), e.getInfo();
        }).catch(function(t) {
            return app.Tips({
                title: t
            });
        });
    },
    addGoodsOpen: function() {
      wx.showModal({
        title: '选择商品',
        content: '请选择添加商品类型', 
        showCancel: true,
        cancelText: "优惠券",
        cancelColor: "#000",
        confirmText: "平台商品",
        confirmColor: "#000",
        success: function (res) {
          console.log(res)
          if (res.confirm) {
            // _live.liveYzygGoods({}).then(function (t) {
            //   console.log(t)
            //   wx.showToast({
            //     title: t.data,
            //   })
            // }).catch(function (t) {
            //   return app.Tips({
            //     title: t.data
            //   });
            // });
            wx.navigateTo({
              url: '/live/pages/anchor-goods/search',
            })
          }else{
              wx.navigateTo({
                url: '/pages/subPages/yizhanyigou/searchLive/search',
              })
          }
        }
      })
      
    },
    changTop: function(t) {
        var a = this, o = this.data.liveGoods, i = t.currentTarget.dataset.goodsid, n = t.currentTarget.dataset.sort;
        _dialog2.default.confirm({
            title: "温馨提示",
            message: 1 == n ? "确定置顶该商品吗?" : "确定要取消置顶该商品吗?",
            cancelButtonText: "在考虑下",
            confirmButtonText: 1 == n ? "置顶" : "取消置顶"
        }).then(function() {
            (0, _live.changTop)(a.data.live_id, {
                goods_id: i,
                sort: n
            }).then(function(t) {
                for (var e = 0; e < o.length; e++) o[e].id == i && (o[e].sort = n), a.setData({
                    liveGoods: o
                });
            }).catch(function(t) {
                return app.Tips({
                    title: t
                });
            });
        }).catch(function() {});
    },
  joinCart: function (t) {
    var ID = t.currentTarget.dataset.id;
    var type = t.currentTarget.dataset.type;
    var invite_code = t.currentTarget.dataset.invite_code;
    if (type == 'J' || type == 'P') {
      wx.navigateTo({
        url: '/pages/subPages/yizhanyigou/shopDetails/details?id=' + ID + '&type=' + type + '&invite_code=' + invite_code
      })
    } else {
      if (type == 'qianggou') {
        var leibie = 1;
      } else if (type == 'kanjia') {
        var leibie = 7;
      } else if (type == 'pintuan') {
        var leibie = 3;
      } else if (type == 'tuangou') {
        var leibie = 2;
      }
      wx.navigateTo({
        url: '/pages/mainPages/goods/index?id=' + ID + '&type=' + leibie + '&invite_code=' + invite_code
      })
    }


  },
    addliveGoods: function(t) {
        var a = t.currentTarget.dataset.goodsid, o = this, i = this.data.liveGoods;
        (0, _live.addLiveGoods)(this.data.live_id, {
            goods_id: a
        }).then(function(t) {
            i.push(t.data), o.setData({
                liveGoods: i
            });
            for (var e = 0; e < o.data.searchGoods.length; e++) o.data.searchGoods[e].id == a && (o.data.searchGoods[e].has_add = !0, 
            o.setData({
                searchGoods: o.data.searchGoods
            }));
        }).catch(function(t) {
            return app.Tips({
                title: t
            });
        });
    },
    searchGoods: function(t) {
        var e = this, a = t.detail.value;
        a.replace(/^\s*|\s*$/g, "") && (0, _live.searchGoods)(this.data.live_id, {
            keywords: a
        }).then(function(t) {
            e.setData({
                searchGoods: t.data
            });
        }).catch(function(t) {
            return app.Tips({
                title: t
            });
        });
    },
    getInfo: function() {
        var e = this;
        (0, _live.getLiveYzyg)(this.data.live_id).then(function(t) {
            e.setData({
                liveGoods: t.data.goods
            });
        }).catch(function(t) {
            return app.Tips({
                title: t
            });
        });
    },
    delLiveGoods: function(t) {
        var e = this;
        _dialog2.default.confirm({
            title: "温馨提示",
            message: "确定移除商品吗?",
            cancelButtonText: "算了",
            confirmButtonText: "移除商品"
        }).then(function() {
            var o = e, i = e.data.liveGoods, n = t.currentTarget.dataset.goodsid;
            (0, _live.delLiveYzyg)(o.data.live_id, {
                goods_id: n
            }).then(function(t) {
                for (var e = 0; e < i.length; e++) i[e].id == n && i.splice(e, 1), o.setData({
                    liveGoods: i
                });
                var a = Math.round(4294967296 * Math.random());
                chatIm.sendMsg({
                    content: {
                        goods_id: n
                    },
                    content_type: 404,
                    nickname: o.data.userInfo.nickname,
                    user_id: o.data.userInfo.id,
                    random: a
                }, o.data.userInfo, o.data.chatConfig);
            }).catch(function(t) {
                return app.Tips({
                    title: t
                });
            });
        }).catch(function() {});
    },
    exposure: function(t) {
        var a = this, o = this.data.liveGoods, i = t.currentTarget.dataset.goodsid, n = t.currentTarget.dataset.status;
        _dialog2.default.confirm({
            title: "温馨提示",
            message: 1 == n ? "确定曝光该商品吗?" : "确定要取消曝光该商品吗?",
            cancelButtonText: "在考虑下",
            confirmButtonText: 1 == n ? "曝光" : "取消曝光"
        }).then(function() {
            (0, _live.exposure)(a.data.live_id, {
                goods_id: i,
                status: n
            }).then(function(t) {
                for (var e = 0; e < o.length; e++) o[e].id == i && (o[e].status = n, o[e]), a.setData({
                    liveGoods: o
                });
            }).catch(function(t) {
                return app.Tips({
                    title: t
                });
            });
        }).catch(function() {});
    }
}, "changTop", function(t) {
    var a = this, o = this.data.liveGoods, i = t.currentTarget.dataset.goodsid, n = t.currentTarget.dataset.sort;
    _dialog2.default.confirm({
        title: "温馨提示",
        message: 1 == n ? "确定置顶该商品吗?" : "确定要取消置顶该商品吗?",
        cancelButtonText: "在考虑下",
        confirmButtonText: 1 == n ? "置顶" : "取消置顶"
    }).then(function() {
        (0, _live.changTop)(a.data.live_id, {
            goods_id: i,
            sort: n
        }).then(function(t) {
            for (var e = 0; e < o.length; e++) o[e].id == i && (o[e].sort = n), a.setData({
                liveGoods: o
            });
        }).catch(function(t) {
            return app.Tips({
                title: t
            });
        });
    }).catch(function() {});
}));