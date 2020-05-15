(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["common/main"], {
    "1d26": function(e, a, t) {
      "use strict";
      (function(e, a) {
        t("f466");
        var n = c(t("66fd")),
          s = c(t("436f")),
          i = c(t("1071")),
          d = c(t("a81a")),
          r = c(t("6de1")),
          o = c(t("3099")),
          u = c(t("9e9f"));
        c(t("a80e"));

        function c(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }

        function l(e) {
          for (var a = 1; a < arguments.length; a++) {
            var t = null != arguments[a] ? arguments[a] : {},
              n = Object.keys(t);
            "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.forEach(function(a) {
              g(e, a, t[a])
            })
          }
          return e
        }

        function g(e, a, t) {
          return a in e ? Object.defineProperty(e, a, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[a] = t, e
        }
        n.default.config.productionTip = !1, n.default.prototype.setData = i.default, n.default.prototype.$util = d.default, n.default.prototype.$store = r.default, s.default.mpType = "app", n.default.mixin(g({
          data: function() {
            return {
              imageRoot: o.default.img_root,
              shareDataInfo: {},
              onShowPageTitle: !1
            }
          },
          computed: {},
          mounted: function() {},
          onLoad: function(e) {
            this.mprequestShareInfo(), this.pageHeaderColor(), this.pageTitle()
          },
          onReady: function() {},
          methods: {
            pageHeaderColor: function() {
              e.setNavigationBarColor({
                frontColor: this.Textbuff.textc,
                backgroundColor: this.Textbuff.bgc
              })
            },
            pageTitle: function() {
              var a = "pages/mainPages/index/index",
                t = "pages/mainPages/index/diypage",
                n = getCurrentPages(),
                s = n[n.length - 1].route,
                i = -1 !== s.indexOf(a) || -1 !== s.indexOf(t);
              if (!i && r.default.state.appInfo && r.default.state.appInfo.name) {
                var d = r.default.state.appInfo.name;
                e.setNavigationBarTitle({
                  title: d
                }), this.onShowPageTitle = !0
              }
            },
            saveForm: function(e) {
              o.default.saveFormId(e)
            },
            mprequestShareInfo: function() {
              var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = this,
                n = ["pages/subPages/businesscard/mycard/mycard", "pages/subPages/businesscard/carddetail/renewcarddetail"],
                s = e.getStorageSync("head_id"),
                i = getCurrentPages(),
                d = i[i.length - 1],
                r = d.route,
                u = d.options,
                c = 0 === Object.keys(u).length,
                l = c ? r : r + "?" + o.default.urlEncode(u),
                g = "pages/subPages/businesscard/carddetail/renewcarddetail";
              n.includes(r) && e.hideShareMenu(), -1 !== r.indexOf(g) && (l = a ? "pages/subPages/businesscard/carddetail/carddetail?cardid=".concat(a) : l);
              var f = {
                pageinfo: l
              };
              s && s && Object.assign(f, {
                head_id: s
              }), o.default._post_form("&do=Shareinfo", f, function(e) {
                t.setData({
                  shareDataInfo: e.data
                })
              }, !1, function() {})
            },
            requestShareInfo: function() {
              var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = this,
                n = location.href.split("#/")[1],
                s = e.getStorageSync("head_id"),
                i = "pages/subPages/businesscard/carddetail/renewcarddetail"; - 1 !== n.indexOf(i) && (n = a ? "pages/subPages/businesscard/carddetail/carddetail?cardid=".concat(a) : n);
              var d = {
                pageinfo: n
              };
              s && s && Object.assign(d, {
                head_id: s
              }), o.default._post_form("&do=Shareinfo", d, function(e) {
                t.setData({
                  shareDataInfo: e.data
                }), t.setSharePages(e.data)
              }, !1, function() {})
            },
            setSharePages: function(a) {
              var t = ["#/pages/subPages/orderList/orderList", "#/pages/subPages/coupon/coupon", "#/pages/subPages/consumptionRecords/consumptionRecords", "#/pages/subPages/myPost/myPost", "#/pages/subPages/dealer/apply/apply", "#/pages/subPages/bargin/barginlist/barginlist", "#/pages/subPages/receivingAddress/receivingAddress", "#/pages/mainPages/userCenter/userCenter", "#/pages/mainPages/submitOrder/submitOrder", "#/pages/subPages/attestationCenter/index", "#/pages/mainPages/userset/userset", "#/pages/subPages/businesscard/mycard/mycard", "#/pages/subPages/businesscard/carddetail/renewcarddetail", "#/pages/subPages/redpacket/myredpacket", "#/pages/subPages/redpacket/redsquare"],
                n = ["#/pages/subPages/businesscard/carddetail/renewcarddetail"],
                s = location.hash,
                i = location.protocol + "//" + location.host + location.pathname + "?#/pages/mainPages/index/index?i=" + o.default.siteInfo.uniacid,
                d = s.split("?")[0],
                c = n.includes(d),
                l = -1 !== a.mpurl.indexOf("businesscard/carddetail/carddetail"),
                g = e.getStorageSync("userinfo"),
                f = e.getStorageSync("agencyData"),
                p = location.protocol + "//" + location.host + location.pathname + "?#/" + a.mpurl + (-1 === a.mpurl.indexOf("i=" + o.default.siteInfo.uniacid) ? -1 === a.mpurl.indexOf("?") ? "?i=" + o.default.siteInfo.uniacid : "&i=" + o.default.siteInfo.uniacid : ""),
                b = l && c ? p : t.includes(d) ? i : location.href,
                m = -1 === b.indexOf("head_id") ? -1 === b.indexOf("?") ? b + "?head_id=" + g.mid : b + "&head_id=" + g.mid : b,
                h = -1 === m.indexOf("aid") ? -1 === m.indexOf("?") ? m + "?aid=" + f.aid : m + "&aid=" + f.aid : m;
              h = encodeURIComponent(h), jWeixin.ready(function() {
                u.default.wxShare({
                  title: a.title || "",
                  desc: a.desc || "",
                  link: "".concat(o.default.siteInfo.siteroot, "/app/index.php?i=").concat(o.default.siteInfo.uniacid, "&c=entry&m=weliam_smartcity&do=returnRequest&link=").concat(h),
                  imgUrl: a.img || "",
                  success: function(e) {
                    console.log(a);
                    var t = "pages/subPages/businesscard/carddetail/carddetail";
                    if (-1 !== b.indexOf(t)) {
                      var n = r.default.state.isCardshare;
                      r.default.commit("ISCARDSHARE", n + 1)
                    }
                  }
                })
              })
            }
          },
          onShareAppMessage: function(a) {
            var t = ["pages/subPages/orderList/orderList", "pages/subPages/coupon/coupon", "pages/subPages/consumptionRecords/consumptionRecords", "pages/subPages/myPost/myPost", "pages/subPages/dealer/apply/apply", "pages/subPages/bargin/barginlist/barginlist", "pages/subPages/receivingAddress/receivingAddress", "pages/mainPages/userCenter/userCenter", "pages/subPages/submitOrder/submitOrder", "pages/subPages/attestationCenter/index", "pages/mainPages/userset/userset", "pages/subPages/redpacket/myredpacket", "pages/subPages/redpacket/redsquare"],
              n = e.getStorageSync("userinfo"),
              s = e.getStorageSync("agencyData"),
              i = getCurrentPages(),
              d = i[i.length - 1],
              o = d.route,
              u = r.default.state.mpshareInfo,
              c = this.shareDataInfo,
              l = c.mpurl,
              g = -1 !== l.indexOf("?"),
              f = "pages/subPages/businesscard/carddetail/carddetail",
              p = {
                title: t.includes(o) ? u.title : c.title,
                desc: t.includes(o) ? u.desc : c.desc,
                imageUrl: t.includes(o) ? u.img : c.img,
                path: t.includes(o) ? "pages/mainPages/index/index?head_id=" + n.mid + "&aid=" + s.aid : g ? l + "&head_id=" + n.mid + "&aid=" + s.aid : l + "?head_id=" + n.mid + "&aid=" + s.aid
              };
            if (-1 !== o.indexOf(f)) {
              var b = r.default.state.isCardshare;
              r.default.commit("ISCARDSHARE", b + 1)
            }
            return console.log(p), p
          },
          onShow: function() {
            o.default.getInt(), this.onShowPageTitle && this.pageTitle()
          }
        }, "computed", {
          Textbuff: function() {
            return e.getStorageSync("TextSubstitution")
          },
          resouCliType: function() {
            return o.default.getClientType()
          }
        }));
        var f = new n.default(l({}, s.default));
        a(f).$mount()
      }).call(this, t("543d")["default"], t("543d")["createApp"])
    },
    "3db8": function(e, a, t) {
      "use strict";
      var n = t("e6a9"),
        s = t.n(n);
      s.a
    },
    "436f": function(e, a, t) {
      "use strict";
      t.r(a);
      var n = t("59b5");
      for (var s in n) "default" !== s && function(e) {
        t.d(a, e, function() {
          return n[e]
        })
      }(s);
      t("3db8");
      var i, d, r, o, u = t("f0c5"),
        c = Object(u["a"])(n["default"], i, d, !1, null, null, null, !1, r, o);
      a["default"] = c.exports
    },
    "45a2": function(e, a, t) {
      "use strict";
      (function(e) {
        Object.defineProperty(a, "__esModule", {
          value: !0
        }), a.default = void 0;
        var n = s(t("3099"));

        function s(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }
        var i = {
          onLaunch: function(a) {
            console.log("App Launch"), n.default.setSiteInfo();
            var t = e.getStorageSync("agencyData"),
              s = "0" == a.query.aid ? t.aid : a.query.aid || t.aid;
            console.log(a, "我是aid", t), n.default.setAppRoot(s), n.default.updateAppInfo(), n.default.navgatetoLink(), n.default.wxApiCallback();
            var i = e.getStorageInfoSync("agencyData");
            i && n.default.getAreaId()
          },
          onShow: function(e) {
            e.query && "{}" !== JSON.stringify(e.query) && (console.log("e.query", e.query), n.default.scanCode = !0, n.default.onStartupScene(e.query))
          },
          onHide: function() {
            console.log("App Hide")
          }
        };
        a.default = i
      }).call(this, t("543d")["default"])
    },
    "59b5": function(e, a, t) {
      "use strict";
      t.r(a);
      var n = t("45a2"),
        s = t.n(n);
      for (var i in n) "default" !== i && function(e) {
        t.d(a, e, function() {
          return n[e]
        })
      }(i);
      a["default"] = s.a
    },
    e6a9: function(e, a, t) {}
  },
  [
    ["1d26", "common/runtime", "common/vendor"]
  ]
]);