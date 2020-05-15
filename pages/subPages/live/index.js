(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/subPages/live/index"], {
    6626: function(n, t, e) {
      "use strict";
      (function(n) {
        e("f466");
        o(e("66fd"));
        var t = o(e("fe38"));

        function o(n) {
          return n && n.__esModule ? n : {
            default: n
          }
        }
        n(t.default)
      }).call(this, e("543d")["createPage"])
    },
    "7aac": function(n, t, e) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var o = r(e("3099"));

      function r(n) {
        return n && n.__esModule ? n : {
          default: n
        }
      }

      function i(n) {
        return l(n) || u(n) || a()
      }

      function a() {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
      }

      function u(n) {
        if (Symbol.iterator in Object(n) || "[object Arguments]" === Object.prototype.toString.call(n)) return Array.from(n)
      }

      function l(n) {
        if (Array.isArray(n)) {
          for (var t = 0, e = new Array(n.length); t < n.length; t++) e[t] = n[t];
          return e
        }
      }
      var c = function() {
          return e.e("components/template/live").then(e.bind(null, "a82b"))
        },
        f = function() {
          return e.e("components/template/loadmore").then(e.bind(null, "789c"))
        },
        d = function() {
          return e.e("components/template/loadlogo").then(e.bind(null, "9976"))
        },
        s = function() {
          return e.e("components/template/nonemores").then(e.bind(null, "5e83"))
        },
        p = {
          data: function() {
            return {
              curpage: 1,
              liveList: [],
              loadingMore: !1,
              loadlogo: !1
            }
          },
          props: {},
          components: {
            liveComponets: c,
            loadMore: f,
            Loadlogo: d,
            nonemores: s
          },
          computed: {},
          methods: {
            getLivelist: function() {
              var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                e = this,
                r = {
                  page: n
                };
              o.default._post_form("&p=wxapp&do=liveList", r, function(n) {
                var o, r = n.data;
                t ? r.length > 0 ? (o = e["liveList"]).push.apply(o, i(r)) : e.loadingMore = !0 : (e["liveList"] = r, e.loadingMore = 0 === r.length || r.length <= 10, e.loadlogo = !0)
              })
            }
          },
          onLoad: function() {
            this.getLivelist()
          },
          onReachBottom: function() {
            var n = this;
            n.getLivelist(++n.curpage, !0)
          }
        };
      t.default = p
    },
    "85bd": function(n, t, e) {
      "use strict";
      e.r(t);
      var o = e("7aac"),
        r = e.n(o);
      for (var i in o) "default" !== i && function(n) {
        e.d(t, n, function() {
          return o[n]
        })
      }(i);
      t["default"] = r.a
    },
    "8dc4": function(n, t, e) {},
    dbeb: function(n, t, e) {
      "use strict";
      var o = e("8dc4"),
        r = e.n(o);
      r.a
    },
    f5cd: function(n, t, e) {
      "use strict";
      var o, r = function() {
          var n = this,
            t = n.$createElement;
          n._self._c
        },
        i = [];
      e.d(t, "b", function() {
        return r
      }), e.d(t, "c", function() {
        return i
      }), e.d(t, "a", function() {
        return o
      })
    },
    fe38: function(n, t, e) {
      "use strict";
      e.r(t);
      var o = e("f5cd"),
        r = e("85bd");
      for (var i in r) "default" !== i && function(n) {
        e.d(t, n, function() {
          return r[n]
        })
      }(i);
      e("dbeb");
      var a, u = e("f0c5"),
        l = Object(u["a"])(r["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], a);
      t["default"] = l.exports
    }
  },
  [
    ["6626", "common/runtime", "common/vendor"]
  ]
]);