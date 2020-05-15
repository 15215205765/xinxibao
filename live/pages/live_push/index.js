var _live = require("../../../api/live.js"), _dialog = require("../../vant/dialog/dialog"), _dialog2 = _interopRequireDefault(_dialog), _live2 = require("../../../api/live"), _util = require("../../../lib/utils/util"), _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var chatIm = require("../../lib/chat/init.js"), app = getApp();

Page({
    data: {
        posterbackgd: "/live/resource/img/posterbackgd.png",
        focus: !1,
        playing: !1,
        frontCamera: !0,
        mic: !0,
        ans: !0,
        cameraContext: {},
        pushUrl: "",
        random: "",
        showHDTips: !1,
        mode: "HD",
        muted: !1,
        enableCamera: !0,
        orientation: "vertical",
        beauty: 63,
        whiteness: 3,
        minBitrate: 200,
        maxBitrate: 1e3,
        backgroundMute: !1,
        hide: !1,
        debug: !1,
        scrollT: 0,
        operUser: {},
        liveOrders: [],
        userManager: [],
        liveGoods: [],
        msgs: [],
        bottom_scroll_top: 0,
        showAudience: !1,
        needInitChat: !1,
        audienceNum: 0,
        audiences: [],
        navH: 0,
        winH: 0,
        followNums: 0,
        screenTotalH: 0,
        isInput: !1,
        popPayShow: !1,
        prohibitShow: !1,
        addPayShow: !1,
        searchValue: "",
        chat_notice: "",
        toolShow: !1,
        pullBlackShow: !1,
        live: {},
        shutlist: [],
        blacklist: [],
        searchGoods: [],
        popOrderShow: !1,
        toolMore: !1,
        cameraChecked: !1,
        livetime:'0:00',
        livetimeint:0,
        radio: "1",
        radioItems: [ {
            name: "SD",
            value: "标清"
        }, {
            name: "HD",
            value: "高清",
            checked: "true"
        }, {
            name: "FHD",
            value: "超清"
        }, {
            name: "RTC",
            value: "实时通话"
        } ],
        mikeChecked: !0,
        noiseChecked: !0,
        currentValue: 0,
        currentWhiteValue: 0,
        currentBitrateValue: 20,
        device: "front",
        goods_loading: !1,
        goods_loadend: !1,
        goods_loadTitle: "加载更多",
        goods_page: 1,
        goods_limit: 0
    },
    onLoadFun: function(t) {
        var a = this, e = this;
        (0, _live.getPushLiveInfo)().then(function(t) {
            e.setData({
                pushUrl: t.data.pushUrl,
                live: t.data.live,
                userInfo: t.data.userInfo,
                chatConfig: t.data.chatConfig,
                chat_notice: t.data.chat_notice,
                followNums: t.data.followNums
            }), chatIm.init(t.data.userInfo, t.data.chatConfig, t.data.live.id, a), e.onPushClick();
          e.downloadFilePromotionCode();
        });
    },
    showToolPopup: function() {
        this.setData({
            toolMore: !0,
            toolShow: !1
        });
    },
    onToolClose: function() {
        this.setData({
            toolMore: !1
        });
    },
    onCameraChecked: function(t) {
        var a = t.detail;
        console.log(a), this.setData({
            cameraChecked: a
        }), a ? this.setData({
            device: "back"
        }) : this.setData({
            device: "front"
        }), this.onSwitchCameraClick();
    },
    onRadioChange: function(t) {
        this.setData({
            mode: t.detail.value
        }), console.log("radio发生change事件，携带value值为：", t.detail.value);
    },
    onMikeChecked: function(t) {
        var a = t.detail;
        this.setData({
            mikeChecked: a,
            mic: a
        });
    },
    onNoiseChecked: function(t) {
        var a = t.detail;
        this.setData({
            noiseChecked: a,
            ans: a
        });
    },
    onDrag: function(t) {
        this.setData({
            beauty: t.detail.value
        });
    },
    onWhiteDrag: function(t) {
        this.setData({
            whiteness: t.detail.value
        });
    },
    onBitrateDrag: function(t) {
        this.setData({
            bitrate: t.detail.value,
            minBitrate: t.detail.value,
            maxBitrate: t.detail.value
        });
    },
    queryMultipleNodes: function() {
        var a = this;
        wx.nextTick(function() {
            wx.createSelectorQuery().in(a).select("#chatInfo").boundingClientRect(function(t) {
                t && (console.log(3333, t), a.setData({
                    scrollT: t.height
                }));
            }).exec();
        });
    },
    receiveMsgs: function(t) {
        var a = chatIm.receiveMsgs(t, this.data.userInfo, this.data.chatConfig);
        if (a) {
            console.log(1111, a);
            var e = this.data.msgs || [];
            this.data.random != a.random && a.live_id == this.data.live.id && (this.setData({
                "loginInfo.random": a.random
            }), 99 == a.content_type && this.updateLiveNum(), e.push(a), this.setData({
                msgs: e
            }), this.queryMultipleNodes());
        }
    },
    sendMsg: function(a) {
        var e = this, i = this;
        if ((a = a.detail.value).replace(/^\s*|\s*$/g, "")) {
            var n = Math.round(4294967296 * Math.random());
            this.setData({
                "loginInfo.random": n,
                "loginInfo.content_type": 1,
                isInput: !1
            }), (0, _live.getCommentsStore)(i.data.live.id, {
                content: a,
                content_type: 1
            }).then(function(t) {
                chatIm.sendMsg({
                    content: a,
                    content_type: 1,
                    nickname: i.data.userInfo.nickname,
                    user_id: i.data.userInfo.id,
                    random: n
                }, e.data.userInfo, e.data.chatConfig);
            }).catch(function(t) {
                return app.Tips({
                    title: t
                });
            });
        }
    },
    onInputTap: function() {
        this.setData({
            focus: !0
        });
    },
    updateLiveNum: function() {
        var a = this;
        (0, _live.getLiveNum)(a.data.live.id).then(function(t) {
            console.log(121212, t.data), a.setData({
                "live.fic_num": t.data
            });
        }).catch(function(t) {});
    },
    onInputChange: function(t) {
        this.setData({
            pushUrl: t.detail.value,
            playUrl: ""
        });
    },
    onScanQR: function() {
        this.stop(), console.log("onScaneQR");
        var a = this;
        wx.scanCode({
            onlyFromCamera: !0,
            success: function(t) {
                a.setData({
                    pushUrl: t.result
                }), wx.showToast({
                    title: "获取地址成功"
                });
            }
        });
    },
    onPushClick: function() {
        0 == this.data.pushUrl.indexOf("rtmp://") ? (this.setData({
            playing: !this.data.playing
        }), this.data.playing ? (this.data.cameraContext.start(), console.log("camera start")) : (this.data.cameraContext.stop(), 
        console.log("camera stop"))) : wx.showModal({
            title: "提示",
            content: "推流地址不合法，请点击右上角+按钮先获取腾讯云推流地址",
            showCancel: !1
        });
    },
    onSwitchCameraClick: function() {
        this.data.frontCamera = !this.data.frontCamera, this.setData({
            frontCamera: this.data.frontCamera
        }), this.data.cameraContext.switchCamera();
    },
    onBeautyClick: function() {
        0 != this.data.beauty ? (this.data.beauty = 0, this.data.whiteness = 0) : (this.data.beauty = 6.3, 
        this.data.whiteness = 3), this.setData({
            beauty: this.data.beauty,
            whiteness: this.data.whiteness
        });
    },
    onOrientationClick: function() {
        "vertical" == this.data.orientation ? this.data.orientation = "horizontal" : this.data.orientation = "vertical", 
        this.setData({
            orientation: this.data.orientation
        });
    },
    onLogClick: function() {
        this.setData({
            debug: !this.data.debug
        });
    },
    onSwitchMode: function() {
        var t = !this.data.showHDTips;
        this.setData({
            showHDTips: t
        });
    },
    onModeClick: function(t) {
        var a = "SD";
        switch (t.target.dataset.mode) {
          case "SD":
            a = "SD";
            break;

          case "HD":
            a = "HD";
            break;

          case "FHD":
            a = "FHD";
        }
        this.setData({
            mode: a,
            showHDTips: !1
        });
    },
    onEnableCameraClick: function() {
        var t = this;
        this.setData({
            enableCamera: !this.data.enableCamera
        }), this.data.playing && (this.data.cameraContext.stop(), setTimeout(function() {
            t.data.cameraContext.start();
        }, 500));
    },
    onMuteClick: function() {
        this.setData({
            muted: !this.data.muted
        });
    },
    onPushEvent: function(t) {
        console.log(1111111111, t.detail), -1307 == t.detail.code && (this.stop(), wx.showToast({
            title: "推流多次失败"
        }));
    },
    stop: function() {
        this.setData({
            playing: !1,
            mode: "HD",
            muted: !1,
            enableCamera: !0,
            orientation: "vertical",
            beauty: 6.3,
            whiteness: 3,
            backgroundMute: !1,
            debug: !1
        }), this.data.cameraContext.stop();
    },
    createContext: function() {
        this.setData({
            cameraContext: wx.createLivePusherContext("camera-push")
        });
    },
    onLoad: function(t) {
        wx.createLivePlayerContext("live-player").stop();
        var a = wx.getSystemInfoSync().SDKVersion;
        if (_util2.default.compareVersion(a, "2.9.1") < 0) return wx.showModal({
            title: "提示",
            content: "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"
        }), void setTimeout(function() {
            wx.redirectTo({
                url: "/common/pages/loading/loading"
            });
        }, 5e3);
      
    },
    onShareAppMessage: function(t) {
        return {
            title: this.data.live.title,
            imageUrl: this.data.live.cover,
            path: "/live/pages/live_room2/index?live_id=" + this.data.live.id,
            success: function(t) {},
            fail: function(t) {}
        };
    },
    onReady: function() {
        console.log("onLoad onReady"), this.setData({
            navH: app.globalData.navHeight,
            winH: app.globalData.winHeight,
            screenTotalH: app.globalData.screenTotalH
        }), this.createContext(), wx.setKeepScreenOn({
            keepScreenOn: !0
        });
    },
    liveBack: function() {
        _dialog2.default.confirm({
            title: "温馨提示",
            message: "确定要结束直播吗?",
            cancelButtonText: "再播一会",
            confirmButtonText: "结束直播"
        }).then(function() {
            (0, _live.liveEnd)({}).then(function(t) {
                200 == t.status ? wx.reLaunch({
                  url: "/live/pages/live_end/index"
                }) : wx.showToast({
                    title: t.msg,
                    icon: "none",
                    duration: 2e3
                });
            });
        }).catch(function() {});
    },
    getInput: function() {
        console.log(123123), this.setData({
            isInput: !0
        });
    },
    closeInput: function() {
        this.setData({
            isInput: !1
        });
    },
    getPopPay: function() {
        var i = this;
        i.data.goods_loadend || i.data.goods_loading || (i.setData({
            goods_loading: !0,
            goods_loadTitle: ""
        }), (0, _live.getLiveGoods)(i.data.live.id, {
            page: i.data.goods_page
        }).then(function(t) {
            var a = t.data.goods || [], e = a.length < t.data.limit;
            i.data.liveGoods = app.SplitArray(a, i.data.liveGoods), i.setData({
                liveGoods: i.data.liveGoods,
                goods_loadend: e,
                goods_limit: t.data.limit,
                goods_loading: !1,
                goods_loadTitle: e ? "拉到底了哦" : "加载更多",
                goods_page: i.data.goods_page + 1,
                popPayShow: !0
            });
        }).catch(function(t) {
            return app.Tips({
                title: t
            });
        }));
    },
  delLiveGoods: function (t) {
    var e = this;
    _dialog2.default.confirm({
      title: "温馨提示",
      message: "确定移除商品吗?",
      cancelButtonText: "算了",
      confirmButtonText: "移除商品"
    }).then(function () {
      var o = e, i = e.data.liveGoods, n = t.currentTarget.dataset.goodsid;
      (0, _live.delLiveYzyg)(o.data.live.id, {
        goods_id: n
      }).then(function (t) {
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
      }).catch(function (t) {
        return app.Tips({
          title: t
        });
      });
    }).catch(function () { });
  },
    exposure: function(t) {
        var n = this, o = this.data.liveGoods, s = t.currentTarget.dataset.goodsid, d = t.currentTarget.dataset.status;
        _dialog2.default.confirm({
            title: "温馨提示",
            message: 1 == d ? "确定曝光该商品吗?" : "确定要取消曝光该商品吗?",
            cancelButtonText: "在考虑下",
            confirmButtonText: 1 == d ? "曝光" : "取消曝光"
        }).then(function() {
            (0, _live.exposure)(n.data.live.id, {
                goods_id: s,
                status: d
            }).then(function(t) {
                for (var a = {}, e = 0; e < o.length; e++) o[e].id == s && (o[e].status = d, a = o[e]), 
                n.setData({
                    liveGoods: o
                });
                var i = Math.round(4294967296 * Math.random());
                chatIm.sendMsg({
                    content: a,
                    content_type: 300,
                    nickname: n.data.userInfo.nickname,
                    user_id: n.data.userInfo.id,
                    random: i
                }, n.data.userInfo, n.data.chatConfig);
            }).catch(function(t) {
                return app.Tips({
                    title: t
                });
            });
        }).catch(function() {});
    },
    changTop: function(t) {
        var e = this, i = this.data.liveGoods, n = t.currentTarget.dataset.goodsid, o = t.currentTarget.dataset.sort;
        _dialog2.default.confirm({
            title: "温馨提示",
            message: 1 == o ? "确定置顶该商品吗?" : "确定要取消置顶该商品吗?",
            cancelButtonText: "在考虑下",
            confirmButtonText: 1 == o ? "置顶" : "取消置顶"
        }).then(function() {
            (0, _live.changTop)(e.data.live.id, {
                goods_id: n,
                sort: o
            }).then(function(t) {
                for (var a = 0; a < i.length; a++) i[a].id == n && (i[a].sort = o), e.setData({
                    liveGoods: i
                });
            }).catch(function(t) {
                return app.Tips({
                    title: t
                });
            });
        }).catch(function() {});
    },
    closePopPay: function() {
        this.setData({
            popPayShow: !1
        });
    },
    getPopOrder: function() {
        var a = this;
        (0, _live.liveOrders)(this.data.live.id).then(function(t) {
            a.setData({
                liveOrders: t.data.orders,
                popOrderShow: !0
            });
        }).catch(function(t) {
            return app.Tips({
                title: t
            });
        });
    },
    closePopOrder: function() {
        this.setData({
            popOrderShow: !1
        });
    },
    getProhibit: function(t) {
        this.setData({
            "operUser.user_id": t.currentTarget.dataset.uid,
            "operUser.nickname": t.currentTarget.dataset.name,
            "operUser.avatar": t.currentTarget.dataset.avatar,
            prohibitShow: !0
        });
    },
    setShutup: function() {
        var e = this, i = this;
        (0, _live.setUserShutup)(this.data.live.id, {
            uid: this.data.operUser.user_id,
            type: 1
        }).then(function(t) {
            var a = Math.round(4294967296 * Math.random());
            chatIm.sendMsg({
                content: "系统消息：" + i.data.operUser.nickname + "用户被禁言",
                content_type: 400,
                nickname: i.data.operUser.nickname,
                user_id: i.data.operUser.user_id,
                random: a
            }, e.data.userInfo, e.data.chatConfig), i.setData({
                prohibitShow: !1
            });
        }).catch(function(t) {
            return app.Tips({
                title: t
            });
        });
    },
    setBlack: function() {
        var e = this, i = this;
        (0, _live.setUserBlack)(this.data.live.id, {
            uid: this.data.operUser.user_id,
            type: 1
        }).then(function(t) {
            var a = Math.round(4294967296 * Math.random());
            chatIm.sendMsg({
                content: "系统消息：" + i.data.operUser.nickname + "用户被拉黑",
                content_type: 500,
                nickname: i.data.operUser.nickname,
                user_id: i.data.operUser.user_id,
                random: a
            }, e.data.userInfo, e.data.chatConfig), i.setData({
                prohibitShow: !1
            });
        }).catch(function(t) {
            return app.Tips({
                title: t
            });
        });
    },
    cancelShut: function(i) {
        var n = this, o = this, s = this.data.shutlist;
        (0, _live.setUserShutup)(this.data.live.id, {
            uid: i.currentTarget.dataset.uid,
            type: 0
        }).then(function(t) {
            for (var a = 0; a < s.length; a++) s[a].uid == i.currentTarget.dataset.uid && s.splice(a, 1);
            var e = Math.round(4294967296 * Math.random());
            chatIm.sendMsg({
                content: "系统消息：" + i.currentTarget.dataset.nickname + "用户被解除禁言",
                content_type: 600,
                nickname: i.currentTarget.dataset.nickname,
                user_id: i.currentTarget.dataset.uid,
                random: e
            }, n.data.userInfo, n.data.chatConfig), o.setData({
                shutlist: s,
                prohibitShow: !1
            });
        }).catch(function(t) {
            return app.Tips({
                title: t
            });
        });
    },
    cancelBlack: function(i) {
        var n = this, o = this, s = this.data.blacklist;
        (0, _live.setUserBlack)(this.data.live.id, {
            uid: i.currentTarget.dataset.uid,
            type: 0
        }).then(function(t) {
            for (var a = 0; a < s.length; a++) s[a].uid == i.currentTarget.dataset.uid && s.splice(a, 1);
            var e = Math.round(4294967296 * Math.random());
            chatIm.sendMsg({
                content: "系统消息：" + i.currentTarget.dataset.nickname + "用户被解除拉黑",
                content_type: 700,
                nickname: i.currentTarget.dataset.nickname,
                user_id: i.currentTarget.dataset.uid,
                random: e
            }, n.data.userInfo, n.data.chatConfig), o.setData({
                blacklist: s,
                prohibitShow: !1
            });
        }).catch(function(t) {
            return app.Tips({
                title: t
            });
        });
    },
    searchGoods: function(t) {
        var a = this, e = t.detail.value;
        e.replace(/^\s*|\s*$/g, "") && (0, _live.searchGoods)(this.data.live.id, {
            keywords: e
        }).then(function(t) {
            a.setData({
                searchGoods: t.data
            });
        }).catch(function(t) {
            return app.Tips({
                title: t
            });
        });
    },
    addliveGoods: function(t) {
        console.log(11111, t);
        var e = t.currentTarget.dataset.goodsid, i = this, n = this.data.liveGoods;
        (0, _live.addLiveGoods)(this.data.live.id, {
            goods_id: e
        }).then(function(t) {
            n.push(t.data), i.setData({
                liveGoods: n
            });
            for (var a = 0; a < i.data.searchGoods.length; a++) i.data.searchGoods[a].id == e && (i.data.searchGoods[a].has_add = !0, 
            i.setData({
                searchGoods: i.data.searchGoods
            }));
        }).catch(function(t) {
            return app.Tips({
                title: t
            });
        });
    },
    closeProhibit: function() {
        this.setData({
            prohibitShow: !1
        });
    },
    getAddPay: function() {
        this.setData({
            addPayShow: !0
        });
    },
    closeAddPay: function() {
        this.setData({
            addPayShow: !1
        });
    },
    getTool: function() {
        this.setData({
            toolShow: !0
        });
    },
  getShare: function () {
    this.setData({
      shareShow: !0
    });
  },
    closeTool: function() {
        this.setData({
            toolShow: !1
        });
    },
  closeShare: function () {
    this.setData({
      shareShow: !1
    });
  },
    getForbidden: function() {
        var a = this;
        (0, _live.getShutupLists)(this.data.live.id).then(function(t) {
            a.setData({
                shutlist: t.data,
                forbiddenShow: !0
            });
        }).catch(function(t) {
            return app.Tips({
                title: t
            });
        });
    },
    closeForbidden: function() {
        this.setData({
            forbiddenShow: !1
        });
    },
    getPullBlack: function() {
        var a = this;
        (0, _live.getBlackLists)(this.data.live.id).then(function(t) {
            a.setData({
                blacklist: t.data,
                pullBlackShow: !0
            });
        }).catch(function(t) {
            return app.Tips({
                title: t
            });
        });
    },
    closePullBlack: function() {
        this.setData({
            pullBlackShow: !1
        });
    },
    searchValue: function(t) {
        this.setData({
            searchValue: t.detail.value
        });
    },
    onShow: function() {
        1 == this.data.needInitChat && (chatIm.init(this.data.userInfo, this.data.chatConfig, this.data.live.id, this), 
        this.setData({
            needInitChat: !1
        }), this.setData({
            playing: !this.data.playing
        }), this.data.cameraContext.start()), wx.setKeepScreenOn({
            keepScreenOn: !0
        });
      setInterval(this.animation, 1000);

    },
  animation : function () {
    var page = this;
    var times = page.data.livetimeint+1;

    var minutes = Math.floor(times / 60);
    var seconds = Math.floor((times - minutes * 60) / 1);
    var showTime =(minutes < 10 ? "0" + minutes : minutes) + ":"
      + (seconds < 10 ? "0" + seconds : seconds);
    page.setData({
      livetime:showTime,
      livetimeint:times
    })
  },
    onHide: function() {
        // this.setData({
        //     needInitChat: !1
        // }), wx.setKeepScreenOn({
        //     keepScreenOn: !1
        // }), this.stop(), chatIm.logout(this.data.chatConfig);
    },
    onUnload: function() {
        this.setData({
            needInitChat: !1
        }), this.stop(), wx.setKeepScreenOn({
            keepScreenOn: !1
        }), chatIm.logout(this.data.chatConfig);
    },
    onPullDownRefresh: function() {
        console.log("onLoad onPullDownRefresh");
    },
    onReachBottom: function() {
        console.log("onLoad onReachBottom");
    },
    logoutIM: function() {
        chatIm.logout(this.data.chatConfig);
    },
    switchAudience: function() {
        this.setData({
            showAudience: !this.data.showAudience
        });
    },
    onBindscroll: function() {
        this.getPopPay();
    },
  downloadFilePromotionCode: function (e) {
    var i = this;
    (0, _live.getLiveQrcode)(this.data.live.id).then(function (t) {
      wx.downloadFile({
        url: t.data.code,
        success: function (t) {
          "function" == typeof e ? e && e(t.tempFilePath) : i.setData({
            PromotionCode: t.tempFilePath
          });
           i.downloadFilestoreImage();
        },
        fail: function (t) {
          i.setData({
            PromotionCode: ""
          });
        }
      });
    }).catch(function (t) {
      i.setData({
        PromotionCode: ""
      });
    });
  },
  setDomain: function (t) {
    return -1 < (t = t ? t.toString() : "").indexOf("https://") ? t : t.replace("http://", "https://");
  },
  downloadFilestoreImage: function () {
    var e = this;
    console.log(111,e.data.live.cover);
    wx.downloadFile({
      url: e.setDomain(e.data.live.cover),
      success: function (t) {
        console.log(222,t)
        e.setData({
          storeImage: t.tempFilePath
        });
      },
      fail: function () {
        e.setData({
          storeImage: ""
        });
      }
    });
  },
  goPoster: function () {
    var e = this;
    e.setData({
      canvasStatus: !0
    });
    var i = [e.data.posterbackgd, e.data.storeImage, e.data.PromotionCode, e.data.live.id];
    console.log(11111, i), wx.getImageInfo({
      src: e.data.PromotionCode,
      fail: function (t) {
        return app.Tips({
          title: "小程序二维码需要发布正式版后才能获取到"
        });
      },
      success: function () {
        console.log(444444, e.data.live), "" == i[2] ? e.downloadFilePromotionCode(function (t) {
          if (i[2] = t, "" == i[2]) return app.Tips({
            title: "海报二维码生成失败！"
          });
          _util2.default.PosterCanvas(i, e.data.live.title, "", function (t) {
            console.log(t);
            e.setData({
              posterImage: t,
              posterImageStatus: !0,
              canvasStatus: !1,
              actionSheetHidden: !e.data.actionSheetHidden
            });
          });
        }) : _util2.default.PosterCanvas(i, e.data.live.title, "", function (t) {
          console.log(222222, i, e.data.live.title), e.setData({
            posterImage: t,
            posterImageStatus: !0,
            canvasStatus: !1,
            actionSheetHidden: !e.data.actionSheetHidden
          });
        });
      }
    });
  },
  savePosterPath: function () {
    var e = this;
    wx.downloadFile({
      url: e.data.posterImage,     //仅为示例，并非真实的资源
      success: function (res) {
        // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
        if (res.statusCode === 200) {
          wx.getSetting({
            success: function (t) {
              t.authSetting["scope.writePhotosAlbum"] ? wx.saveImageToPhotosAlbum({
                filePath: res.tempFilePath,
                success: function (t) {
                  e.posterImageClose(), app.Tips({
                    title: "保存成功",
                    icon: "success"
                  });
                },
                fail: function (t) {
                  app.Tips({
                    title: "保存失败"
                  });
                }
              }) : wx.authorize({
                scope: "scope.writePhotosAlbum",
                success: function () {
                  wx.saveImageToPhotosAlbum({
                    filePath: res.tempFilePath,
                    success: function (t) {
                      e.posterImageClose(), app.Tips({
                        title: "保存成功",
                        icon: "success"
                      });
                    },
                    fail: function (t) {
                      app.Tips({
                        title: "保存失败"
                      });
                    }
                  });
                }
              });
            }
          });
        }
      }
    })
  },
  posterImageClose: function () {
    this.setData({
      posterImageStatus: !1
    });
  },
});