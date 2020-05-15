var _user = require("../../../api/user.js"), app = getApp();

Page({
    data: {
        parameter: {
            navbar: "1",
            return: "1",
            title: "推广人订单",
            color: !0,
            class: "0"
        },
        page: 0,
        status: !1,
        recordList: [],
        recordCount: 0
    },
    onLoad: function(t) {},
    onReady: function() {},
    onShow: function() {
        this.getRecordOrderList();
    },
    getRecordOrderList: function() {
        var e = this, t = e.data.page;
        1 != e.data.status && (0, _user.spreadAnchorOrder)({
            page: t
        }).then(function(t) {
            e.setData({
                recordCount: t.data.count || 0,
                recordList: t.data.list
            });
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});