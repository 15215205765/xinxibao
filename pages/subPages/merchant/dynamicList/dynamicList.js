(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/subPages/merchant/dynamicList/dynamicList"], {
    "2ed5": function(t, e, n) {
      "use strict";
      var i = n("c367"),
        o = n.n(i);
      o.a
    },
    "33d3": function(t, e, n) {
      "use strict";
      (function(t) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var i = o(n("3099"));

        function o(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }

        function a(t) {
          return c(t) || s(t) || r()
        }

        function r() {
          throw new TypeError("Invalid attempt to spread non-iterable instance")
        }

        function s(t) {
          if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }

        function c(t) {
          if (Array.isArray(t)) {
            for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
            return n
          }
        }
        var u = function() {
            return n.e("components/template/loadlogo").then(n.bind(null, "9976"))
          },
          d = function() {
            return n.e("components/template/nonemores").then(n.bind(null, "5e83"))
          },
          l = function() {
            return n.e("components/template/loadmore").then(n.bind(null, "789c"))
          },
          f = {
            data: function() {
              return {
                textList: [],
                statusList: ["待审核", "待推送", "已推送", "被驳回"],
                scrollHeight: null,
                storeid: null,
                page: 1,
                dynamicList: [],
                total: null,
                scdpText: "",
                textTips: "全文",
                isMore: !0,
                hideadd: ""
              }
            },
            components: {
              Loadlogo: u,
              nonemores: d,
              loadmore: l
            },
            computed: {},
            onShow: function(t) {
              var e = this;
              e.init()
            },
            mounted: function() {},
            methods: {
              init: function() {
                var e = this;
                t.getSystemInfo({
                  success: function(t) {
                    e.phoneHight = t.windowHeight, e.scrollHeight = e.phoneHight + "px"
                  }
                }), t.getStorage({
                  key: "checkStoreid",
                  success: function(t) {
                    e.storeid = t.data, e.getStoreDynamic(t.data)
                  }
                })
              },
              fullText: function(t) {
                var e = this;
                if (-1 == e.textList.indexOf(t)) e.textList.push(t), e.textTips = "收起";
                else {
                  e.textTips = "展开全文";
                  for (var n = 0; n < e.textList.length; n++) e.textList[n] == t && e.textList.splice(n, 1)
                }
              },
              load: function() {
                var t = this;
                if (t.page == t.total) t.isMore = !0;
                else {
                  t.isMore = !1, t.page++;
                  var e = {
                    storeid: t.storeid,
                    page: t.page
                  };
                  i.default._post_form("&p=store&do=dynamicList", e, function(e) {
                    t.dynamicList = [].concat(a(t.dynamicList), a(e.data.list)), t.total = e.data.total, t.isMore = !0
                  })
                }
              },
              goSend: function() {
                i.default.navigationTo({
                  url: "pages/subPages/merchant/sendDynamic/sendDynamic"
                })
              },
              getStoreDynamic: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                  e = this;
                e.isMore = !1, e.page = 1;
                var n = {
                  storeid: e.storeid || t,
                  page: e.page
                };
                i.default._post_form("&p=store&do=dynamicList", n, function(t) {
                  console.log(t.data.hideadd);
                  if(t.data.hideadd==0){
                      e.hideadd = 'none'
                  }
                  e.dynamicList = t.data.list, e.total = t.data.total,  e.isMore = !0
                  console.log(e.hideadd);
                })
              },
              deletMb: function(e) {
                var n = this;
                t.showModal({
                  title: "提示",
                  content: "确认删除，数据将无法恢复",
                  success: function(o) {
                    if (o.confirm) {
                      var a = {
                        id: e.id
                      };
                      i.default._post_form("&p=store&do=deleteDynamic", a, function(i) {
                        for (var o = 0; o < n.dynamicList.length; o++) e.id == n.dynamicList[o].id && n.dynamicList.splice(o, 1);
                        t.showToast({
                          icon: "none",
                          title: "删除成功",
                          duration: 2e3
                        })
                      })
                    } else o.cancel && console.log("用户点击取消")
                  }
                })
              }
            }
          };
        e.default = f
      }).call(this, n("543d")["default"])
    },
    "42f4": function(t, e, n) {
      "use strict";
      var i, o = function() {
          var t = this,
            e = t.$createElement,
            n = (t._self._c, t.__map(t.dynamicList, function(e, n) {
              var i = t.textList.indexOf(n),
                o = t.textList.indexOf(n);
              return {
                $orig: t.__get_orig(e),
                g0: i,
                g1: o
              }
            }));
          t.$mp.data = Object.assign({}, {
            $root: {
              l0: n
            }
          })
        },
        a = [];
      n.d(e, "b", function() {
        return o
      }), n.d(e, "c", function() {
        return a
      }), n.d(e, "a", function() {
        return i
      })
    },
    "5bfc": function(t, e, n) {
      "use strict";
      n.r(e);
      var i = n("33d3"),
        o = n.n(i);
      for (var a in i) "default" !== a && function(t) {
        n.d(e, t, function() {
          return i[t]
        })
      }(a);
      e["default"] = o.a
    },
    "8b87": function(t, e, n) {
      "use strict";
      (function(t) {
        n("f466");
        i(n("66fd"));
        var e = i(n("a57a"));

        function i(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }
        t(e.default)
      }).call(this, n("543d")["createPage"])
    },
    a57a: function(t, e, n) {
      "use strict";
      n.r(e);
      var i = n("42f4"),
        o = n("5bfc");
      for (var a in o) "default" !== a && function(t) {
        n.d(e, t, function() {
          return o[t]
        })
      }(a);
      n("2ed5");
      var r, s = n("f0c5"),
        c = Object(s["a"])(o["default"], i["b"], i["c"], !1, null, null, null, !1, i["a"], r);
      e["default"] = c.exports
    },
    c367: function(t, e, n) {}
  },
  [
    ["8b87", "common/runtime", "common/vendor"]
  ]
]);