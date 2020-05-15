var _live = require("../../../api/live.js"), _wxParse = require("../../lib/wxParse/wxParse.js"), _wxParse2 = _interopRequireDefault(_wxParse);

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
            title: "主播申请",
            color: !0,
            class: "0"
        },
        show: !0,
        isPaySuccess: !1,
        show_form: !1,
        applyInfo: {},
        userInfo: [],
        extends: [],
        payMode: [ {
            name: "微信支付",
            icon: "icon-weixinzhifu",
            value: "weixin",
            title: "微信快捷支付"
        } ],
        pay_close: !1,
        pay_order_id: "",
        totalPrice: "",
        orderKey: "",
        extendsValue: [],
        isClone: !1
    },
    onLoadFun: function() {
        this.getInfo();
    },
    paySubmit: function(e) {
        e.detail.formId, this.data.payType, this.canDo(function() {
            (0, _live.applyAnchorPay)().then(function(e) {});
        });
    },
    goHome: function() {
        wx.redirectTo({
          url: "/pages/mainPages/index/index"
        });
    },
    goPushLive: function() {
        wx.redirectTo({
            url: "/live/pages/live_add/index"
        });
    },
    doPaySuccess: function() {
        this.setData({
            isPaySuccess: !0,
            pay_close: !1
        });
    },
    pay_close: function() {
        this.setData({
            pay_close: !1
        });
    },
    pay_open: function(e) {
        var t, a = e.detail.formId, n = this;
        t = {
            formId: a,
            payType: (n = this).data.payType
        }, this.canDo(function() {
            n.setData({
                pay_close: !0,
                orderData: t
            });
        });
    },
    canDo: function(e) {
      var renzheng = wx.getStorageSync('renzheng').is_attestation;
      return 2 != renzheng ? app.Tips({
            title: "您还未完成实名认证，请先认证"
        }, {
            tab: 5,
          url: "/pages/subPages/attestationCenter/index?rzType=1"
        }) : void e();
    },
    pay_complete: function() {
        this.setData({
            pay_close: !1,
            pay_order_id: ""
        }), this.getOrderInfo();
    },
    pay_fail: function() {
        this.setData({
            pay_close: !1,
            pay_order_id: ""
        });
    },
    submit: function() {
        this.canDo(function() {
            (0, _live.applyAnchor)({}).then(function(e) {
                return 200 == e.status ? app.Tips({
                    title: e.msg,
                    icon: "success"
                }, {
                    tab: 5,
                    url: "/pages/mainPages/userCenter/userCenter"
                }) : app.Tips({
                    title: e.msg,
                    icon: "error"
                });
            });
        });
    },
    show_form: function() {
        this.setData({
            show_form: !0
        });
    },
    getDiyFormData: function(e) {
        this.setData({
            extendsValue: e.detail
        });
    },
    formSubmit: function(e) {
        var n = this;
        this.canDo(function() {
            for (var e = n.data.extendsValue, t = "", a = 0; a < e.extends.length; a++) e.extends[a].err_msg && (t += e.extends[a].err_msg + "\n");
            if (t) return app.Tips({
                title: t
            });
            (0, _live.applyFormAnchor)(e).then(function(e) {
                return 200 == e.status ? app.Tips({
                    title: e.msg,
                    icon: "success"
                }, {
                    tab: 5,
                    url: "/common/pages/user/user"
                }) : app.Tips({
                    title: e.msg,
                    icon: "error"
                });
            });
        });
    },
    onLoad: function(e) {},
    onReady: function() {},
    onClose: function() {
        this.setData({
            show_form: !1
        });
    },
    onShow: function() {
        app.globalData.isLog && this.data.isClone;
    },
    getInfo: function() {
        var t = this;
        (0, _live.getApplyInfo)().then(function(e) {
            console.log(11111, e.data.applyInfo), t.setData({
                applyInfo: e.data.applyInfo,
                userInfo: e.data.userInfo,
                orderKey: e.data.orderKey
            }), _wxParse2.default.wxParse("apply_text", "html", e.data.applyInfo.apply_text, t, 0);
        });
    },
    onHide: function() {
        this.setData({
            isClone: !0
        });
    },
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});