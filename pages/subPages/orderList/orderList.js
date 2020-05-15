(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/subPages/orderList/orderList", "components/template/PopManager"], {
    1000: function(t, e, a) {
      "use strict";
      var o, r = function() {
          var t = this,
            e = t.$createElement;
          t._self._c
        },
        n = [];
      a.d(e, "b", function() {
        return r
      }), a.d(e, "c", function() {
        return n
      }), a.d(e, "a", function() {
        return o
      })
    },
    4013: function(t, e, a) {
      "use strict";
      a.r(e);
      var o = a("9e40"),
        r = a.n(o);
      for (var n in o) "default" !== n && function(t) {
        a.d(e, t, function() {
          return o[t]
        })
      }(n);
      e["default"] = r.a
    },
    "47ee": function(t, e, a) {
      "use strict";
      a.r(e);
      var o = a("f400"),
        r = a.n(o);
      for (var n in o) "default" !== n && function(t) {
        a.d(e, t, function() {
          return o[t]
        })
      }(n);
      e["default"] = r.a
    },
    7427: function(t, e, a) {
      "use strict";
      var o = a("e101"),
        r = a.n(o);
      r.a
    },
    "85d7": function(t, e, a) {
      "use strict";
      a.r(e);
      var o = a("1000"),
        r = a("47ee");
      for (var n in r) "default" !== n && function(t) {
        a.d(e, t, function() {
          return r[t]
        })
      }(n);
      a("b645b");
      var s, d = a("f0c5"),
        i = Object(d["a"])(r["default"], o["b"], o["c"], !1, null, "54e16dbe", null, !1, o["a"], s);
      e["default"] = i.exports
    },
    "9e40": function(t, e, a) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var o = {
        data: function() {
          return {}
        },
        props: {
          show: {
            type: Boolean,
            default: !1
          },
          overlay: {
            default: !0
          },
          showOverlay: {
            default: !0
          },
          type: {
            type: String,
            default: "center"
          },
          bottom: {
            type: String,
            default: ""
          },
          modelData: {
            type: Object,
            default: function() {}
          }
        },
        components: {},
        computed: {},
        mounted: function() {},
        methods: {
          handleMaskClick: function() {
            this.$emit("clickmask")
          }
        }
      };
      e.default = o
    },
    b645b: function(t, e, a) {
      "use strict";
      var o = a("fcdc"),
        r = a.n(o);
      r.a
    },
    b696: function(t, e, a) {
      "use strict";
      a.r(e);
      var o = a("f118"),
        r = a("4013");
      for (var n in r) "default" !== n && function(t) {
        a.d(e, t, function() {
          return r[t]
        })
      }(n);
      a("7427");
      var s, d = a("f0c5"),
        i = Object(d["a"])(r["default"], o["b"], o["c"], !1, null, "52c2644d", null, !1, o["a"], s);
      e["default"] = i.exports
    },
    e101: function(t, e, a) {},
    f118: function(t, e, a) {
      "use strict";
      var o, r = function() {
          var t = this,
            e = t.$createElement;
          t._self._c
        },
        n = [];
      a.d(e, "b", function() {
        return r
      }), a.d(e, "c", function() {
        return n
      }), a.d(e, "a", function() {
        return o
      })
    },
    f400: function(t, e, a) {
      "use strict";
      (function(t) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        r(a("b696"));
        var o = r(a("3099"));

        function r(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }

        function n(t) {
          return i(t) || d(t) || s()
        }

        function s() {
          throw new TypeError("Invalid attempt to spread non-iterable instance")
        }

        function d(t) {
          if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }

        function i(t) {
          if (Array.isArray(t)) {
            for (var e = 0, a = new Array(t.length); e < t.length; e++) a[e] = t[e];
            return a
          }
        }
        var u = function() {
            return a.e("components/template/nonemores").then(a.bind(null, "5e83"))
          },
          l = function() {
            return a.e("components/template/loadlogo").then(a.bind(null, "9976"))
          },
          c = function() {
            return a.e("components/template/loadmore").then(a.bind(null, "789c"))
          },
          f = {
            components: {
              loadlogo: l,
              loadmore: c,
              noneMores: u
            },
            data: function() {
              return {
                type: 10,
                page: 1,
                status: 10,
                orderList: [],
                pagetotal: 0,
                loadingText: "",
                phoneHight: 0,
                loading: !0,
                isMore: !1,
                option: {},
                changeflag: "",
                current_page: 1,
                scrollTop: 0
              }
            },
            onLoad: function(t) {
              var e = this;
              e.option = t
            },
            onShow: function() {
              var t = this;
              void 0 == t.option.type ? (t.type = 10, t.status = 10, t.init()) : (this.type = t.option.type, this.status = t.option.type, t.init())
            },
            methods: {
              accomplish: function(e) {
                var a = this;
                o.default._post_form("&p=citydelivery&do=finishOrder&id=".concat(e.id, "&type=1"), {}, function(e) {
                  console.log(e), t.showToast({
                    icon: "none",
                    title: e.message,
                    duration: 2e3
                  });
                  var o = a;
                  void 0 == o.option.type ? (o.type = 10, o.status = 10, o.init()) : (a.type = o.option.type, a.status = o.option.type, o.init())
                })
              },
              go: function() {
                o.default.navigationTo({
                  url: "pages/subPages/dealer/index/index"
                })
              },
              goPl: function(t, e, a, r, n) {
                "citydelivery" == n.plugin ? (console.log(n), o.default.navigationTo({
                  url: "pages/mainPages/comment/comment?goods_id=" + n.sid + "&order_id=" + n.id + "&plugin=" + n.plugin + "&a=" + n.a
                })) : o.default.navigationTo({
                  url: "pages/mainPages/comment/comment?goods_id=" + t + "&order_id=" + e + "&plugin=" + a + "&a=" + r
                })
              },
              logistics: function(t, e) {
                o.default.navigationTo({
                  url: "pages/mainPages/express/express?order_id=" + t + "&table_id=" + e
                })
              },
              init: function() {
                var e = this;
                e.getOrderList(), t.getSystemInfo({
                  success: function(t) {
                    e.phoneHight = t.windowHeight - 40 + "px"
                  }
                })
              },
              goAfterSale: function(t, e) {
                o.default.navigationTo({
                  url: "pages/subPages/orderList/afterSale/afterSale?id=" + t + "&plugin=" + e
                })
              },
              goZt: function(t, e, a) {
                o.default.navigationTo({
                  url: "pages/subPages/group/assemble/assemble?orderid=" + t + "&plugin=" + e + "&id=" + a
                })
              },
              goOrderDetails: function(t, e, a, r, n, s, d) {
                console.log(d);
                "rush" == e || "groupon" == e || "wlfightgroup" == e || "bargain" == e || "consumption" == e ? "wlfightgroup" == e && "待使用" == a ? (console.info(111111111), 2 == n ? o.default.navigationTo({
                  url: "pages/subPages/orderList/orderDetails/orderDetails?orderid=" + t + "&plugin=" + e
                }) : "2" == s ? o.default.navigationTo({
                  url: "pages/subPages/orderList/orderDetails/orderDetails?orderid=" + t + "&plugin=" + e
                }) : o.default.navigationTo({
                  url: "pages/subPages/group/assemble/assemble?orderid=" + t + "&plugin=" + e + "&id=" + r
                })) : (console.info(222222222), o.default.navigationTo({
                  url: "pages/subPages/orderList/orderDetails/orderDetails?orderid=" + t + "&plugin=" + e
                })) : "citydelivery" == e && o.default.navigationTo({
                  url: "pages/subPages/orderList/orderTakeout/orderTakeout?orderid=" + t + "&sid=".concat(d.sid, "&plugin=").concat(e, "&state=", 2)
                })
              },
              goCouponDetails: function(t, e, a, r, n, s) {
                var d = this;
                "coupon" == a ? o.default.navigationTo({
                  url: "pages/subPages/coupon/couponDetails/couponDetails?order_id=" + t + "&id=" + e
                }) : d.goOrderDetails(t, a, r, t, n, s)
              },
              changType: function(e) {
                t.showLoading({});
                var a = this;
                a.type = e, a.status = e, a.scrollTop = 0, a.current_page = 1, a.getOrderList()
              },
              cancelOrder: function(e, a) {
                var r = this,
                  n = {
                    id: e,
                    plugin: a
                  };
                t.showModal({
                  title: "提示",
                  content: "是否取消订单？",
                  success: function(e) {
                    e.confirm ? o.default._post_form("&p=pay&do=cancelOrder", n, function(e) {
                      r.getOrderList(), t.showToast({
                        icon: "none",
                        title: "取消成功",
                        duration: 2e3
                      })
                    }) : e.cancel
                  }
                })
              },
              sureReceive: function(e, a) {
                var r = this,
                  n = {
                    id: e,
                    plugin: a
                  };
                o.default._post_form("&p=pay&do=sureReceive", n, function(e) {
                  r.getOrderList(), t.showToast({
                    icon: "none",
                    title: "已确认收货",
                    duration: 2e3
                  })
                })
              },
              downLoading: function() {
                var t = this;
                if (t.current_page >= t.pagetotal) return t.isMore = !0, !1;
                t.getOrderList(++t.current_page, !0)
              },
              goPayment: function(t, e) {
                o.default.navigationTo({
                  url: "pages/mainPages/payment/payment?orderid=" + t + "&plugin=" + e
                })
              },
              goGoodDetails: function(t, e, a) {
                var r = 8 === e ? "pages/subPages/goods/index?id=" + a + "&goodsType=integral" : "pages/subPages/goods/index?id=" + a + "&goodsType=" + e;
                "member" !== t ? o.default.navigationTo({
                  url: r
                }) : o.default.navigationTo({
                  url: "pages/subPages/balance/balance"
                })
              },
              remindSend: function(t, e, a, r) {
                var n = this,
                  s = {
                    orderid: e,
                    plugin: a,
                    goodsname: r
                  };
                n.$set(t, "isRemind", !0), o.default.showSuccess("已提醒发货", function() {}), setTimeout(function() {
                  o.default._post_form("&p=member&do=remindSend", s, function(t) {})
                }, 500)
              },
              loadings: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                  a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                console.log("orderList2");
                var r = this;
                o.default._post_form("&p=member&do=orderList", {
                  page: e,
                  status: r.status
                }, function(t) {
                  for (var e = 0; e < t.data.myorder.length; e++) 0 == t.data.myorder[e].status && (t.data.myorder[e].status = "待付款"), 1 == t.data.myorder[e].status && (t.data.myorder[e].status = "待使用"), 2 == t.data.myorder[e].status && (t.data.myorder[e].status = "待评价"), 3 == t.data.myorder[e].status && (t.data.myorder[e].status = "已完成"), 4 == t.data.myorder[e].status && (t.data.myorder[e].status = "待收货"), 5 == t.data.myorder[e].status && (t.data.myorder[e].status = "已取消"), 6 == t.data.myorder[e].status && (t.data.myorder[e].status = "待退款"), 7 == t.data.myorder[e].status && (t.data.myorder[e].status = "已退款"), 8 == t.data.myorder[e].status && (t.data.myorder[e].status = "待发货"), 9 == t.data.myorder[e].status && (t.data.myorder[e].status = "已过期"), 10 == t.data.myorder[e].status && (t.data.myorder[e].status = "退款中");
                  var o;
                  a ? t.data.myorder.length > 0 ? (o = r["orderList"]).push.apply(o, n(t.data.myorder)) : r.isMore = !0 : r.setData({
                    current_page: 1,
                    orderList: t.data.myorder,
                    pagetotal: t.data.pagetotal,
                    isMore: 0 === t.data.myorder.length || r.current_page === t.data.pagetotal,
                    loadingText: ""
                  })
                }, !1, function() {
                  t.hideLoading()
                })
              },
              getOrderList: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                  a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                console.log("orderList1");
                var r = this;
                o.default._post_form("&p=member&do=orderList", {
                  page: e,
                  status: r.status
                }, function(t) {
                  for (var e = 0; e < t.data.myorder.length; e++) 0 == t.data.myorder[e].status && (t.data.myorder[e].status = "待付款"), 1 == t.data.myorder[e].status && (t.data.myorder[e].status = "待使用"), 2 == t.data.myorder[e].status && (t.data.myorder[e].status = "待评价"), 3 == t.data.myorder[e].status && (t.data.myorder[e].status = "已完成"), 4 == t.data.myorder[e].status && (t.data.myorder[e].status = "待收货"), 5 == t.data.myorder[e].status && (t.data.myorder[e].status = "已取消"), 6 == t.data.myorder[e].status && (t.data.myorder[e].status = "待退款"), 7 == t.data.myorder[e].status && (t.data.myorder[e].status = "已退款"), 8 == t.data.myorder[e].status && (t.data.myorder[e].status = "待发货"), 9 == t.data.myorder[e].status && (t.data.myorder[e].status = "已过期"), 10 == t.data.myorder[e].status && (t.data.myorder[e].status = "退款中");
                  var o;
                  a ? t.data.myorder.length > 0 ? (o = r["orderList"]).push.apply(o, n(t.data.myorder)) : r.isMore = !0 : (console.log(0 === t.data.myorder.length || r.current_page === t.data.pagetotal), r.setData({
                    current_page: 1,
                    orderList: t.data.myorder,
                    pagetotal: t.data.pagetotal,
                    isMore: 0 === t.data.myorder.length || r.current_page === t.data.pagetotal,
                    loadingText: "",
                    changeflag: t.data.changeflag
                  }))
                }, !1, function() {
                  r.loading = !1, t.hideLoading()
                })
              },
              scrollyTop: function(t) {
                var e = this;
                e.$util.debounce(200, function() {
                  e.scrollTop = t.detail.scrollTop
                })
              }
            }
          };
        e.default = f
      }).call(this, a("543d")["default"])
    },
    fcdc: function(t, e, a) {},
    fcfb: function(t, e, a) {
      "use strict";
      (function(t) {
        a("f466");
        o(a("66fd"));
        var e = o(a("85d7"));

        function o(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }
        t(e.default)
      }).call(this, a("543d")["createPage"])
    }
  },
  [
    ["fcfb", "common/runtime", "common/vendor"]
  ]
]);