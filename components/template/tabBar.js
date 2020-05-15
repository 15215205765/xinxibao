(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["components/template/tabBar"], {
    "1abe": function(t, a, e) {
      "use strict";
      (function(t) {
        Object.defineProperty(a, "__esModule", {
          value: !0
        }), a.default = void 0;
        var n = u(e("3099"));

        function u(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }
        var r = {
          data: function() {
            return {
              current: 0,
              isPadding: null,
              menu: null
            }
          },
          props: {
            tabBarAct: {
              type: Number,
              default: function() {
                return 0
              }
            },
            tabBarData: {
              type: Array,
              default: function() {
                return []
              }
            },
            pageType: {
              type: String,
              default: function() {
                return ""
              }
            },
            pageId: {
              type: String,
              default: function() {
                return ""
              }
            }
          },
          mounted: function() {
            var a = this;
            t.getSystemInfo({
              success: function(t) {
                var e = t.model,
                  n = ["iPhone10,3", "iPhone10,6", "iPhone11,8", "iPhone11,2", "iPhone11,6"];
                a.isPadding = n.includes(e) || -1 !== e.indexOf("iPhone X") || -1 !== e.indexOf("iPhone12")
              }
            }), a.getbtmNavBar()
          },
          methods: {
            onTabItem: function(t, a) {
              if (t == 'live/pages/live_list1/index' || t == 'pages/subPages/yizhanyigou/index/index') {
                var type = 'navigate';
              } else {
                var type = 'rediRect';
              }
              n.default.navigationTo({
                url: t,
                navType: type
              })
            },
            getbtmNavBar: function() {
              var t = this,
                a = {};
              t.pageType && (a = {
                type: t.pageType
              }), t.pageId && Object.assign(a, {
                id: t.pageId
              }), n.default._post_form("&do=BottomMenu", a, function(a) {
                t.setData({
                  menu: a.data.data
                })
              })
            }
          },
          computed: {
            TabBarsData: function() {
              var t, a = getCurrentPages(),
                e = a[a.length - 1],
                n = e.route || e.__route__,
                u = {
                  data: this.tabBarData && this.tabBarData.length > 0 ? this.tabBarData : this.menu
                },
                r = e.$vm.$mp.query;
              if (u.data) {
                var i = [];
                for (var o in u.data.data) i.push(u.data.data[o]);
                return "pages/mainPages/index/diypage" === n && (n = n + "?type=" + r.type), t = i.findIndex(function(t) {
                  return t.page_path === n
                }), this.current = t, console.log(t), u.data.data = i, u.data
              }
            }
          }
        };
        a.default = r
      }).call(this, e("543d")["default"])
    },
    "27e4": function(t, a, e) {
      "use strict";
      e.r(a);
      var n = e("ca96"),
        u = e("f373");
      for (var r in u) "default" !== r && function(t) {
        e.d(a, t, function() {
          return u[t]
        })
      }(r);
      e("4adc");
      var i, o = e("f0c5"),
        d = Object(o["a"])(u["default"], n["b"], n["c"], !1, null, "7c500e40", null, !1, n["a"], i);
      a["default"] = d.exports
    },
    "3e18": function(t, a, e) {},
    "4adc": function(t, a, e) {
      "use strict";
      var n = e("3e18"),
        u = e.n(n);
      u.a
    },
    ca96: function(t, a, e) {
      "use strict";
      var n, u = function() {
          var t = this,
            a = t.$createElement;
          t._self._c
        },
        r = [];
      e.d(a, "b", function() {
        return u
      }), e.d(a, "c", function() {
        return r
      }), e.d(a, "a", function() {
        return n
      })
    },
    f373: function(t, a, e) {
      "use strict";
      e.r(a);
      var n = e("1abe"),
        u = e.n(n);
      for (var r in n) "default" !== r && function(t) {
        e.d(a, t, function() {
          return n[t]
        })
      }(r);
      a["default"] = u.a
    }
  }
]);;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  'components/template/tabBar-create-component',
  {
    'components/template/tabBar-create-component': (function(module, exports, __webpack_require__) {
      __webpack_require__('543d')['createComponent'](__webpack_require__("27e4"))
    })
  },
  [
    ['components/template/tabBar-create-component']
  ]
]);