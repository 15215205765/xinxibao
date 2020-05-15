var _data, _live = require("../../../api/live"), _wxParse = require("../../lib/wxParse/wxParse"), _wxParse2 = _interopRequireDefault(_wxParse), _goods = require("../../../api/goods"), _order = require("../../../api/order.js"), _live2 = require("../../../api/plugin/viewing_rewards/live"), _util = require("../../../lib/utils/util"), _util2 = _interopRequireDefault(_util);

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

var chatIm = require("../../lib/chat/init.js"), app = getApp();

Component({
    options: {
        multipleSlots: !0
    },
    properties: {
        videoList: {
            type: Array,
            value: [],
            observer: function(t, e) {
                console.log(2222222, t, e), this.setData({
                    videoSize: t.length,
                    live_id: t[0].live.live.id,
                    live: t[0].live.live,
                    is_follow: t[0].live.is_follow,
                    comments: t[0].live.comments,
                    recommend_goods: t[0].live.recommend_goods,
                    has_recommend: 0 < Object.keys(t[0].live.recommend_goods).length,
                    chatConfig: t[0].live.chatConfig,
                    chat_notice: t[0].live.chat_notice,
                    siteInfo: t[0].live.siteInfo,
                    userInfo: t[0].live.userInfo,
                    viewers: t[0].live.viewers,
                    gives: t[0].live.gives,
                    viewing_rewards: t[0].live.viewing_rewards
                }), console.log(11111, this.data.has_recommend), this.queryMultipleNodes(), chatIm.init(t[0].live.userInfo, t[0].live.chatConfig, t[0].live.live.id, this), 
                t[0].live.viewing_rewards && this.viewingRewardsPlugintoRoom(t[0].live.live.id), 
                this.downloadFilestoreImage(), this.downloadFilePromotionCode(), this.getLiveCommentsLists(t[0].live.live.id);
            }
        },
        userInfo: {
            type: Object,
            value: {}
        },
        fitType: {
            type: String,
            value: "contain"
        },
        thresholdValue: {
            type: Number,
            value: 100,
            observer: function(t, e) {
                console.log(t, e);
            }
        },
        playerType: {
            type: String,
            value: "video",
            observer: function(t, e) {}
        },
        shopIocn: {
            type: Boolean,
            value: !0,
            observer: function(t, e) {}
        }
    },
    data: (_data = {
        live_id: 0,
        live: {},
        comments: [],
        viewers: [],
        recommend_goods: {},
        chatConfig: {},
        chat_notice: "",
        siteInfo: {},
        rewardInfo: {},
        isAuto: !0,
        live_player_stream: !1,
        iShidden: !0,
        imgSrc: app.globalData.static_url,
        random: "",
        storeImage: "",
        posterbackgd: "/live/resource/img/posterbackgd.png",
        cover: "cover",
        userInfo: {},
        goods: [],
        giftData: [],
        gives: [],
        rankLists: {},
        startY: 0,
        screenHeight: 0,
        screenWidth: 0,
        scrollAnimate: 0,
        videoidx: 0,
        videoSize: 0,
        shopList: !1,
        shopBang: !1,
        benZhi: !1,
        inputShop: !1,
        guanZhu: !1,
        giftPorpShop: !1,
        nowNumShop: !1,
        hongbaoBang: !1,
        hongbaoKai: !1,
        hongbaoTan: !1,
        fenData: !1,
        glActive: 0,
        lwActive: 0,
        scrollT: 0,
        outTimeS: null,
        tiemOuter: null,
        nowNum: 1,
        sendMsgData: "",
        giftActive: "",
        giftNumData: "",
        countDownList: [],
        zhuboData: {
            name: "木潇潇",
            img: "../../../image/zhu1.png",
            title: "利物直播",
            id: "1212125"
        },
        shopListData: [],
        shopBangData: [],
        shopBangGL: {
            num: 3,
            list: [ {
                img: "../../../image/img4.png",
                name: "王梓涵GL",
                lv: "LV7",
                gold: 100
            }, {
                img: "../../../image/img4.png",
                name: "王梓涵GL",
                lv: "LV7",
                gold: 330
            }, {
                img: "../../../image/img4.png",
                name: "王梓涵GL",
                lv: "LV7",
                gold: 330
            } ]
        }
    }, _defineProperty(_data, "giftData", []), _defineProperty(_data, "myGiftData", []), 
    _defineProperty(_data, "socketGuankan", "20000"), _defineProperty(_data, "goods_loading", !1), 
    _defineProperty(_data, "goods_loadend", !1), _defineProperty(_data, "goods_loadTitle", "加载更多"), 
    _defineProperty(_data, "goods_page", 1), _defineProperty(_data, "goods_limit", 0), 
    _defineProperty(_data, "socketGiftData", []), _defineProperty(_data, "socketNum", [ {
        num: 1314,
        name: "一生一世"
    }, {
        num: 520,
        name: "我爱你"
    }, {
        num: 188,
        name: "要包包"
    }, {
        num: 66,
        name: "一切顺利"
    }, {
        num: 10,
        name: "十全十美"
    }, {
        num: 1,
        name: "一心一意"
    } ]), _defineProperty(_data, "attribute", {
        cartAttr: !1
    }), _defineProperty(_data, "cart_num", 0), _defineProperty(_data, "productAttr", []), 
    _defineProperty(_data, "productSelect", {}), _data),
    attach: function() {},
    ready: function() {
        var e = this;
        e.animation = wx.createAnimation({
            duration: 600,
            timingFunction: "linear"
        }), wx.getSystemInfo({
            success: function(t) {
                e.setData({
                    screenHeight: t.windowHeight,
                    screenWidth: t.windowWidth,
                    "commonHeadHeight.statusBarHeight": t.statusBarHeight - 4,
                    "commonHeadHeight.titleHeight": t.statusBarHeight + 50
                });
            }
        });
    },
    methods: {
        leaveRoom: function() {
            this.data.viewing_rewards && (0, _live2.viewingRewardsPlugleaveRoom)(this.data.live_id).then(function(t) {}), 
            chatIm.logout(this.data.chatConfig);
        },
        liveBack: function() {
            1 < getCurrentPages().length ? wx.navigateBack() : wx.redirectTo({
                url: "/common/pages/loading/loading"
            });
        },
        setDomain: function(t) {
            return -1 < (t = t ? t.toString() : "").indexOf("https://") ? t : t.replace("http://", "https://");
        },
        downloadFilePromotionCode: function(e) {
            var a = this;
            (0, _live.getLiveQrcode)(this.data.live_id).then(function(t) {
                wx.downloadFile({
                    url: t.data.code,
                    success: function(t) {
                        "function" == typeof e ? e && e(t.tempFilePath) : a.setData({
                            PromotionCode: t.tempFilePath
                        });
                    },
                    fail: function(t) {
                        a.setData({
                            PromotionCode: ""
                        });
                    }
                });
            }).catch(function(t) {
                a.setData({
                    PromotionCode: ""
                });
            });
        },
        downloadFilestoreImage: function() {
            var e = this;
            console.log(1111111, e.data.live.local_cover), wx.downloadFile({
                url: e.setDomain(e.data.live.local_cover),
                success: function(t) {
                    e.setData({
                        storeImage: t.tempFilePath
                    });
                },
                fail: function() {
                    e.setData({
                        storeImage: ""
                    });
                }
            });
        },
        viewingRewardsPlugintoRoom: function(t) {
            (0, _live2.viewingRewardsPlugintoRoom)(t).then(function(t) {});
        },
        queryMultipleNodes: function() {
            var e = this;
            wx.nextTick(function() {
                wx.createSelectorQuery().in(e).select("#chatInfo").boundingClientRect(function(t) {
                    t && e.setData({
                        scrollT: t.height,
                        socketBarrage: e.data.comments,
                        inputShop: !1
                    });
                }).exec();
            });
        },
        receiveMsgs: function(t) {
            var e = this, a = chatIm.receiveMsgs(t, this.data.userInfo, this.data.chatConfig);
            if (a) {
                var i = this.data.comments || [];
                if (this.data.random != a.random && a.live_id == this.data.live_id) {
                    if (this.setData({
                        "loginInfo.random": a.random
                    }), 99 == a.content_type) return this.setData({
                        welcome: a.nickname,
                        showNotice: !0
                    }), void setTimeout(function() {
                        e.setData({
                            showNotice: !1
                        });
                    }, 2e3);
                    if (300 == a.content_type) return 0 == (n = a.content).status && this.setData({
                        recommend_goods: {},
                        has_recommend: !1
                    }), void (1 == n.status && this.setData({
                        recommend_goods: n,
                        has_recommend: !0
                    }));
                    if (404 != a.content_type) a.user_id != this.data.userInfo.id || 400 != a.content_type && 600 != a.content_type || (i.push(a), 
                    this.setData({
                        comments: i
                    }), this.queryMultipleNodes()), 2 == a.content_type && this.data.userInfo.id == a.user_id && this.onRewardInfo(a), 
                    4 == a.content_type && this.onSendGift(a), 1 == a.content_type && (i.push(a), this.setData({
                        comments: i
                    }), this.queryMultipleNodes()); else {
                        var n = a.content, o = this.data.recommend_goods;
                        if (0 < o.length) for (var s = 0; s < o.length; s++) o[s].id == n.goods_id && o.splice(s, 1);
                        this.setData({
                            recommend_goods: o
                        });
                    }
                }
            }
        },
        onRewardInfo: function(t) {
            this.setData({
                rewardInfo: t,
                hongbaoKai: !this.data.hongbaoKai
            });
        },
        getLiveCommentsLists: function(t) {
            var e = this;
            (0, _live.getLiveCommentsLists)(t).then(function(t) {
                e.setData({
                    comments: t.data
                });
            });
        },
        onTouchStart: function(t) {
            var e = t.changedTouches[0].pageY;
            this.setData({
                startY: e
            });
        },
        onTouchEnd: function(t) {
            var e = t.currentTarget.dataset.videoidx;
            e = parseInt(e);
            var a = this.properties.thresholdValue, i = this.data.startY, n = t.changedTouches[0].pageY - i;
            if (0 < n) {
                if (a <= n) {
                    if (0 === e) return this.triggerEvent("swipeToStart", {
                        oldindex: 0,
                        newindex: e,
                        playerType: this.properties.playerType
                    }), !1;
                    var o = -(e - 1) * this.data.screenHeight;
                    this.triggerEvent("swipeDown", {
                        oldindex: e,
                        newindex: e - 1,
                        playerType: this.properties.playerType
                    }), this.animation.translateY(o).step(), this.setData({
                        scrollAnimate: this.animation.export(),
                        videoidx: e
                    });
                }
            } else if (a <= Math.abs(n)) {
                if (e + 1 === this.data.videoSize) return this.triggerEvent("swipeToEnd", {
                    oldindex: e + 1,
                    newindex: e,
                    playerType: this.properties.playerType
                }), !1;
                var s = -(e + 1) * this.data.screenHeight;
                this.triggerEvent("swipeUpper", {
                    oldindex: e,
                    newindex: e + 1,
                    playerType: this.properties.playerType
                }), this.animation.translateY(s).step(), this.setData({
                    scrollAnimate: this.animation.export(),
                    videoidx: e
                });
            }
        },
        onTouchLike: function() {
            var a = this;
            this.setData({
                hoverLike: !0,
                dataLike: 1
            });
            var t = function() {
                var t = a.selectComponent("#bubble"), e = a.data.dataLike;
                a.setData({
                    dataLike: e + 1
                }), t.showBubble();
            };
            t(), clearInterval(a.longTapBubbleTimer), a.longTapBubbleTimer = setInterval(t, 150);
        },
        onCancelTouchLike: function() {
          var e = this;
            this.setData({
                hoverLike: !1
            }), (0, _live.addLike)(e.data.live_id, {
              num: this.data.dataLike
            }).then(function (t) {
              e.setData({
                likeCount: t.data
              });
            }), clearInterval(this.longTapBubbleTimer);
        },
        timeFormat: function(t) {
            return t < 10 ? "0" + t : "" + t;
        },
        daojishi: function() {
            var t = this, e = new Date().getTime(), a = new Date(e + 3e5).getTime(), i = [], n = null;
            if (0 < a - e) {
                var o = (a - e) / 1e3, s = parseInt(o / 86400), r = parseInt(o % 86400 / 3600), d = parseInt(o % 86400 % 3600 / 60), c = parseInt(o % 86400 % 3600 % 60);
                n = {
                    day: t.timeFormat(s),
                    hou: t.timeFormat(r),
                    min: t.timeFormat(d),
                    sec: t.timeFormat(c)
                };
            } else n = {
                day: "00",
                hou: "00",
                min: "00",
                sec: "00"
            };
            i.push(n), t.setData({
                countDownList: i
            }), t.data.outTime = setTimeout(t.daojishi, 1e3), "00" === i[0].day && "00" === i[0].hou && "00" === i[0].min && "00" === i[0].sec && t.clearCountdown();
        },
        clearCountdown: function() {
            clearTimeout(this.data.outTime);
        },
        getLiveGoods: function() {
            var i = this, t = wx.createAnimation({
                duration: 500,
                timingFunction: "ease"
            });
            t.translateY(0).step(), i.setData({
                animation: t.export(),
                shopList: !i.data.shopList
            }), i.data.goods_loadend || i.data.goods_loading || (i.setData({
                goods_loading: !0,
                goods_loadTitle: ""
            }), (0, _live.getLiveGoods)(i.data.live_id, {
                page: i.data.goods_page
            }).then(function(t) {
                var e = t.data.goods || [], a = e.length < t.data.limit;
                i.data.goods = app.SplitArray(e, i.data.goods), i.setData({
                    goods: i.data.goods,
                    goods_loadend: a,
                    goods_limit: t.data.limit,
                    goods_loading: !1,
                    goods_loadTitle: a ? "拉到底了哦" : "加载更多",
                    goods_page: i.data.goods_page + 1
                });
            }).catch(function(t) {
                return app.Tips({
                    title: t
                });
            }));
        },
        onHideShopList: function() {
            var t = wx.createAnimation({
                duration: 500,
                timingFunction: "ease"
            });
            t.translateY("100%").step(), this.setData({
                animation: t.export(),
                shopList: !1
            });
        },
        onShopBang: function() {
            this.onTotalRank();
            var t = wx.createAnimation({
                duration: 500,
                timingFunction: "ease"
            });
            t.translateY(0).step(), this.setData({
                animation2: t.export(),
                shopBang: !0
            });
        },
        onHideShopBang: function() {
            var t = wx.createAnimation({
                duration: 500,
                timingFunction: "ease"
            });
            t.translateY("100%").step(), this.setData({
                animation2: t.export(),
                shopBang: !1
            });
        },
        onInputShop: function() {
            var t = wx.createAnimation({
                duration: 500,
                timingFunction: "ease"
            });
            t.translateY(0).step(), this.setData({
                animation3: t.export(),
                inputShop: !0
            });
        },
        onHideInputShop: function() {
            var t = wx.createAnimation({
                duration: 500,
                timingFunction: "ease"
            });
            t.translateY("100%").step(), this.setData({
                animation3: t.export(),
                inputShop: !1,
                sendMsgData: ""
            });
        },
        onGiftPorpShop: function() {
            var a = this;
            (0, _live.getLiveGifts)(this.data.live_id).then(function(t) {
                a.setData({
                    giftData: t.data.gifts
                });
                var e = wx.createAnimation({
                    duration: 500,
                    timingFunction: "ease"
                });
                e.translateY(0).step(), a.setData({
                    animation4: e.export(),
                    giftPorpShop: !0
                });
            });
        },
        onHideGiftPorpShop: function() {
            var t = wx.createAnimation({
                duration: 500,
                timingFunction: "ease"
            });
            t.translateY("100%").step(), this.setData({
                animation4: t.export(),
                giftPorpShop: !1
            });
        },
        onWeekRank: function() {
            var e = this;
            (0, _live.giftRank)(this.data.live_id, "week").then(function(t) {
                e.setData({
                    rankLists: t.data.rankLists,
                    benZhi: !e.data.benZhi
                });
            });
        },
        onTotalRank: function() {
            var e = this;
            (0, _live.giftRank)(this.data.live_id, "total").then(function(t) {
                e.setData({
                    rankLists: t.data.rankLists,
                    benZhi: !e.data.benZhi
                });
            });
        },
        onGlActive: function(t) {
            1 == t.currentTarget.dataset.active ? this.setData({
                glActive: t.currentTarget.dataset.active,
                shopBangData: this.data.shopBangGL
            }) : this.setData({
                glActive: t.currentTarget.dataset.active,
                shopBangData: this.data.shopBangA
            });
        },
        onLwActive: function(t) {
            this.setData({
                lwActive: t.currentTarget.dataset.active
            });
        },
        pagechange: function(t) {
            if ("touch" === t.detail.source) {
                var e = this.data.lwActive;
                e = (e + 1) % 2, this.setData({
                    lwActive: e
                });
            }
        },
        sendInput: function(t) {
            this.setData({
                sendMsgData: t.detail.value
            });
        },
        sendMsg: function() {
            var e = this, t = e.data.comments || [], a = e.data.sendMsgData;
            if (10 < t.length && (t = t.slice(1)), a.replace(/^\s*|\s*$/g, "")) {
                this.setData({
                    isInput: !1
                });
                var i = Math.round(4294967296 * Math.random());
                this.setData({
                    "loginInfo.random": i,
                    "loginInfo.content_type": 1
                }), (0, _live.getCommentsStore)(e.data.live_id, {
                    content: a,
                    content_type: 1
                }).then(function(t) {
                    chatIm.sendMsg({
                        content: a,
                        content_type: 1,
                        nickname: e.data.userInfo.nickname,
                        user_id: e.data.userInfo.id,
                        random: i
                    }, e.data.userInfo, e.data.chatConfig);
                }).catch(function(t) {
                    return app.Tips({
                        title: t
                    });
                });
            }
        },
        gopages: function(t) {
            t.target.dataset.url && wx.redirectTo({
                url: t.target.dataset.url
            });
        },
        follow: function(t) {
            var e = this, a = this;
            (0, _live.followLive)(this.data.live_id, 1).then(function(t) {
                a.setData({
                    is_follow: t.data.is_follow,
                    "live.anchor.follow_num": t.data.follow_num,
                    guanZhu: !e.data.guanZhu
                });
            });
        },
        onSendGift: function(t) {
            for (var e = this, a = this.data.socketGiftData, i = 0; i < a.length; i++) a[i].gift_id == t.gift_id && (t.gift_num = parseInt(t.gift_num) + parseInt(a[i].gift_num), 
            a.splice(i, 1));
            a.push(t), 2 < a.length && (a = a.slice(1));
            var n = wx.createAnimation({
                duration: 500,
                timingFunction: "ease"
            });
            n.translateX(0).step(), this.setData({
                animation5: n.export(),
                socketGiftData: a
            }), this.data.tiemOuter && clearTimeout(this.data.tiemOuter), this.data.tiemOuter = setTimeout(function() {
                e.onHideGift(), e.setData({
                    socketGiftData: []
                });
            }, 3e3);
        },
        onHideGift: function() {
            var t = wx.createAnimation({
                duration: 500,
                timingFunction: "ease"
            });
            t.translateX("-100%").step(), this.setData({
                animation5: t.export()
            });
        },
        onClickGift: function(e) {
            var t = this.data.giftData.find(function(t) {
                return t.id == e.currentTarget.dataset.id;
            });
            this.setData({
                giftActive: e.currentTarget.dataset.id,
                nowGift: t
            });
        },
        onNowNumShop: function(t) {
            this.setData({
                nowNum: t.currentTarget.dataset.item.num,
                nowNumShop: !1
            });
        },
        onNowSendGift: function() {
            if ("" === this.data.giftActive || null === this.data.giftActive) return wx.showToast({
                title: "选择礼物",
                duration: 1500
            }), !1;
            if (null === this.data.nowNum || "" === this.data.nowNum) this.setData({
                nowNumShop: !0
            }); else {
                var i = this, t = {
                    gift_id: this.data.nowGift.id,
                    gift_num: this.data.nowNum,
                    payType: "yue"
                };
                (0, _live.payGift)(this.data.live_id, t).then(function(t) {
                    i.setData({
                        "userInfo.total_balance": t.data.total_balance
                    });
                    var e = "送了" + i.data.nowGift.name, a = Math.round(4294967296 * Math.random());
                    chatIm.sendMsg({
                        content: e,
                        content_type: 4,
                        nickname: i.data.userInfo.nickname,
                        avatar: i.data.userInfo.avatar,
                        gift_id: i.data.nowGift.id,
                        gift_img: i.data.nowGift.image,
                        gift_num: i.data.nowNum,
                        user_id: i.data.userInfo.id,
                        random: a
                    }, i.data.userInfo, i.data.chatConfig);
                }).catch(function(t) {
                    return app.Tips({
                        title: t
                    });
                });
            }
        },
        onNumClick: function() {
            var t = wx.createAnimation({
                duration: 500,
                timingFunction: "ease"
            });
            t.translateY(0).step(), this.setData({
                animation7: t.export(),
                nowNumShop: !this.data.nowNumShop
            });
        },
        nowNumShopNum: function() {
            this.setData({
                nowNumShop: !this.data.nowNumShop
            });
        },
        onNumInput: function(t) {
            this.setData({
                nowNum: t.detail.value
            });
        },
        onNumInputClick: function(t) {
            this.setData({
                nowNum: this.data.nowNum
            }), this.onHideNumGiftShop();
        },
        onNumGiftShop: function() {
            var t = wx.createAnimation({
                duration: 500,
                timingFunction: "ease"
            });
            t.translateY(0).step(), this.setData({
                animation5: t.export(),
                nowNumShop: !1
            });
        },
        onHideNumGiftShop: function() {
            var t = wx.createAnimation({
                duration: 500,
                timingFunction: "ease"
            });
            t.translateY("100%").step(), this.setData({
                animation7: t.export(),
                giftNumData: ""
            });
        },
        onShopHongbao: function() {
            this.setData({
                hongbaoTan: !0
            });
        },
        onHideHongbao: function() {
            this.setData({
                hongbaoTan: !1
            });
        },
        onShopHongbaoKai: function() {
            this.setData({
                hongbaoKai: !0,
                hongbaoTan: !1
            });
        },
        onHideHongbaoKai: function() {
            this.setData({
                hongbaoKai: !1
            });
        },
        onHongbaoBang: function() {},
        onHideHongbaoBang: function() {
            var t = wx.createAnimation({
                duration: 500,
                timingFunction: "ease"
            });
            t.translateY("110%").step(), this.setData({
                animation6: t.export()
            });
        },
        sharePoster: function() {
            var e = this;
            this.onHideFen(), e.triggerEvent("sharePoster", {
                canvasStatus: !0
            });
            var a = [ e.data.posterbackgd, e.data.storeImage, e.data.PromotionCode,e.data.live.id ];
            wx.getImageInfo({
                src: e.data.PromotionCode,
                fail: function(t) {
                    return app.Tips({
                        title: "小程序二维码需要发布正式版后才能获取到"
                    });
                },
                success: function() {
                    "" == a[2] ? e.downloadFilePromotionCode(function(t) {
                        if (a[2] = t, "" == a[2]) return app.Tips({
                            title: "海报二维码生成失败！"
                        });
                        _util2.default.PosterCanvas(a, e.data.live.title, "", function(t) {
                            e.setData({
                                posterImage: t,
                                posterImageStatus: !0,
                                canvasStatus: !1,
                                actionSheetHidden: !e.data.actionSheetHidden
                            });
                        });
                    }) : _util2.default.PosterCanvas(a, e.data.live.title, "", function(t) {
                        console.log(222222, a, e.data.live.title), e.triggerEvent("sharePoster", {
                            canvasStatus: !1
                        }), e.setData({
                            posterImage: t,
                            posterImageStatus: !0,
                            canvasStatus: !1,
                            actionSheetHidden: !e.data.actionSheetHidden
                        });
                    });
                }
            });
        },
        posterImageClose: function() {
            this.setData({
                posterImageStatus: !1
            });
        },
        savePosterPath: function() {
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
        vip:function(){
          wx.navigateTo({
            url: '/pages/mainPages/memberCard/getMembership/getMembership'
          })
        },
        onShopFen: function() {
            var t = wx.createAnimation({
                duration: 500,
                timingFunction: "ease"
            });
            t.translateY(0).step(), this.setData({
                animation8: t.export(),
                fenData: !0
            });
          (0, _live.addLiveShare)(this.data.live_id).then(function (t) {
            
          });
        },
        onHideFen: function() {
            var t = wx.createAnimation({
                duration: 500,
                timingFunction: "ease"
            });
            t.translateY("100%").step(), this.setData({
                animation8: t.export(),
                fenData: !1
            });
        },
        getPopPay: function() {
            this.getLiveGoods();
        },
        onMyEvent: function(t) {
            this.setData({
                "attribute.cartAttr": t.detail.window,
                isOpen: !1
            });
        },
        closePopPay: function() {
            this.setData({
                popPayShow: !1
            });
        },
        joinCart: function(t) {
          var ID = t.currentTarget.dataset.id;
          var type = t.currentTarget.dataset.type;
          var invite_code = t.currentTarget.dataset.invite_code;
          if(type=='J' || type=='P'){
            wx.navigateTo({
              url: '/pages/subPages/yizhanyigou/shopDetails/details?id=' + ID + '&type=' + type + '&invite_code=' + invite_code
            })
          }else{
            if(type=='qianggou'){
                var leibie = 1;
            }else if(type=='kanjia'){
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
        closePopCart: function() {
            this.setData({
                "attribute.cartAttr": !1,
                isOpen: !1
            }), this.getPopPay();
        },
        goCat: function(t) {
            var e = this;
            console.log(11111111, t);
            var a = t.currentTarget.dataset.ispay, i = this.data.productValue[this.data.attrValue];
            return this.data.attrValue ? (this.setData({
                "attribute.cartAttr": !this.data.isOpen
            }), this.data.attribute.cartAttr ? this.closePopPay() : this.getPopPay()) : this.data.isOpen ? (this.setData({
                "attribute.cartAttr": !0
            }), this.closePopPay()) : (this.setData({
                "attribute.cartAttr": !this.data.attribute.cartAttr
            }), this.data.attribute.cartAttr ? this.closePopPay() : this.getPopPay()), !0 === this.data.attribute.cartAttr && 0 == this.data.isOpen ? this.setData({
                isOpen: !0
            }) : this.data.productAttr.length && void 0 === i && 1 == this.data.isOpen ? app.Tips({
                title: "请选择属性"
            }) : void (0, _order.postCartAdd)({
                productId: e.data.goods_id,
                relation_type: 1,
                relation_id: e.data.live_id,
                cartNum: e.data.cart_num,
                uniqueId: void 0 !== i ? i.unique : "",
                new: 0 === a ? 0 : 1
            }).then(function(t) {
                e.setData({
                    isOpen: !1,
                    "attribute.cartAttr": !1
                }), e.getPopPay(), console.log(111111, t.data, a), a ? wx.redirectTo({
                    url: "/order/pages/order_confirm/index?cartId=" + t.data.cartId
                }) : app.Tips({
                    title: "添加购物车成功",
                    icon: "success"
                }, function() {});
            }).catch(function(t) {
                return console.log(111111, t), app.Tips({
                    title: t
                });
            });
        },
        getGoodsDetails: function(a) {
            var i = this;
            (0, _goods.getGoodsDetail)(a).then(function(t) {
                var e = t.data.storeInfo;
                i.setData({
                    storeInfo: e,
                    goods_id: a,
                    productAttr: t.data.productAttr,
                    productValue: t.data.productValue
                }), i.DefaultSelect(), _wxParse2.default.wxParse("description", "html", i.data.description, i, 0);
            }).catch(function(t) {
                return app.Tips({
                    title: t
                });
            });
        },
        DefaultSelect: function() {
            for (var t = this.data.productAttr, e = this.data.storeInfo, a = 0, i = t.length; a < i; a++) t[a].attr_value[0] && (t[a].checked = t[a].attr_value[0].attr);
            var n, o, s = this.data.productAttr.map(function(t) {
                return t.checked;
            }), r = this.data.productValue[s.sort().join(",")];
            r ? this.setData((_defineProperty(n = {}, "productSelect.store_name", e.store_name), 
            _defineProperty(n, "productSelect.image", r.image), _defineProperty(n, "productSelect.price", r.price), 
            _defineProperty(n, "productSelect.stock", r.stock), _defineProperty(n, "productSelect.unique", r.unique), 
            _defineProperty(n, "productSelect.cart_num", 1), _defineProperty(n, "attrValue", s), 
            _defineProperty(n, "attr", "已选择"), n)) : this.setData((_defineProperty(o = {}, "productSelect.store_name", e.store_name), 
            _defineProperty(o, "productSelect.image", e.image), _defineProperty(o, "productSelect.price", e.price), 
            _defineProperty(o, "productSelect.stock", this.data.productAttr.length ? 0 : e.stock), 
            _defineProperty(o, "productSelect.unique", ""), _defineProperty(o, "productSelect.cart_num", this.data.productAttr.length ? 0 : 1), 
            _defineProperty(o, "attrValue", ""), _defineProperty(o, "attr", "请选择"), o));
            this.setData({
                productAttr: t
            });
        },
        ChangeAttr: function(t) {
            var e, a, i = t.detail, n = this.data.productValue[i], o = this.data.storeInfo;
            n ? this.setData((_defineProperty(e = {}, "productSelect.image", n.image), _defineProperty(e, "productSelect.price", n.price), 
            _defineProperty(e, "productSelect.stock", n.stock), _defineProperty(e, "productSelect.unique", n.unique), 
            _defineProperty(e, "productSelect.cart_num", 1), _defineProperty(e, "attrValue", i), 
            _defineProperty(e, "attr", "已选择"), e)) : this.setData((_defineProperty(a = {}, "productSelect.image", o.image), 
            _defineProperty(a, "productSelect.price", o.price), _defineProperty(a, "productSelect.stock", 0), 
            _defineProperty(a, "productSelect.unique", ""), _defineProperty(a, "productSelect.cart_num", 0), 
            _defineProperty(a, "attrValue", ""), _defineProperty(a, "attr", "请选择"), a));
        },
        ChangeCartNum: function(t) {
            var e = t.detail, a = this.data.productValue[this.data.attrValue];
            if (void 0 !== a || this.data.productAttr.length || (a = this.data.productSelect), 
            void 0 !== a) {
                var i, n, o = a.stock || 0;
                if (null == a.cart_num && (a.cart_num = 1), e) a.cart_num++, a.cart_num > o && (a.cart_num = o), 
                a.cart_num < 1 && (a.cart_num = 1), this.setData((_defineProperty(i = {}, "productSelect.cart_num", a.cart_num), 
                _defineProperty(i, "cart_num", a.cart_num), i)); else a.cart_num--, a.cart_num < 1 && (a.cart_num = 1), 
                this.setData((_defineProperty(n = {}, "productSelect.cart_num", a.cart_num), _defineProperty(n, "cart_num", a.cart_num), 
                n));
            }
        },
        onBindscroll: function(t) {
            this.getLiveGoods();
        }
    }
});