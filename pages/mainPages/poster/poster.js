(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/mainPages/poster/poster"], {
    "2f35": function(t, e, n) {
      "use strict";
      (function(t) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var o = u(n("3099"));

        function u(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }
        var i = {
          data: function() {
            return {
              posterList: {},
              id: "",
              type: 0,
              phoneHight: null,
              phoneHight1: null,
              phoneWidth: null,
              phoneWidth1: null,
              windowHeight: null,
              curbgImage: ""
            }
          },
          onLoad: function(t) {
            var e = this;
            e.getPoster(t.id, t.type), e.setData(t)
          },
          methods: {
            saveImg: function(e) {
              t.getImageInfo({
                src: e,
                success: function(e) {
                  t.saveImageToPhotosAlbum({
                    filePath: e.path,
                    success: function() {
                      t.showToast({
                        icon: "none",
                        title: "保存成功",
                        duration: 2e3
                      })
                    }
                  })
                }
              })
            },
            yl: function(e) {
              var n = [];
              n.push(e), t.previewImage({
                current: n[0],
                urls: n
              })
            },
            getPoster: function(e, n) {
              var u = this,
                i = {
                  id: e,
                  type: n,
                  bg_img: ""
                };
              o.default._post_form("&do=Poster", i, function(e) {
                u.posterList = e.data, t.getImageInfo({
                  src: e.data.url,
                  success: function(e) {
                    u.phoneHight1 = t.upx2px(e.height) + "px", u.phoneWidth1 = t.upx2px(e.width) + "px"
                  }
                }), t.getSystemInfo({
                  success: function(t) {
                    u.phoneHight = e.data.bg_list.length > 0 ? t.windowHeight - 110 + "px" : t.windowHeight + "px"
                  }
                }), e.data.bg_list.length, u.type
              })
            },
            selectPost: function(t) {
              this.postRequest(this.id, this.type, t)
            },
            postRequest: function(e, n, u) {
              var i = this,
                a = {
                  id: e,
                  type: n,
                  bg_img: u
                };
              o.default._post_form("&do=Poster", a, function(e) {
                i.posterList = e.data, i.curbgImage = u, t.getImageInfo({
                  src: e.data.url,
                  success: function(e) {
                    i.phoneHight1 = t.upx2px(e.height) + "px", i.phoneWidth1 = t.upx2px(e.width) + "px"
                  }
                }), e.data.bg_list.length, i.type
              })
            },
            changeImg: function(t) {
              var e = this;
              e.posterList.url = t
            }
          }
        };
        e.default = i
      }).call(this, n("543d")["default"])
    },
    "3ab7": function(t, e, n) {
      "use strict";
      (function(t) {
        n("f466");
        o(n("66fd"));
        var e = o(n("7d9a"));

        function o(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }
        t(e.default)
      }).call(this, n("543d")["createPage"])
    },
    5321: function(t, e, n) {
      "use strict";
      n.r(e);
      var o = n("2f35"),
        u = n.n(o);
      for (var i in o) "default" !== i && function(t) {
        n.d(e, t, function() {
          return o[t]
        })
      }(i);
      e["default"] = u.a
    },
    "65f3": function(t, e, n) {
      "use strict";
      var o, u = function() {
          var t = this,
            e = t.$createElement;
          t._self._c
        },
        i = [];
      n.d(e, "b", function() {
        return u
      }), n.d(e, "c", function() {
        return i
      }), n.d(e, "a", function() {
        return o
      })
    },
    "7ba4": function(t, e, n) {
      "use strict";
      var o = n("a7c3"),
        u = n.n(o);
      u.a
    },
    "7d9a": function(t, e, n) {
      "use strict";
      n.r(e);
      var o = n("65f3"),
        u = n("5321");
      for (var i in u) "default" !== i && function(t) {
        n.d(e, t, function() {
          return u[t]
        })
      }(i);
      n("7ba4");
      var a, s = n("f0c5"),
        c = Object(s["a"])(u["default"], o["b"], o["c"], !1, null, "2f54ee00", null, !1, o["a"], a);
      e["default"] = c.exports
    },
    a7c3: function(t, e, n) {}
  },
  [
    ["3ab7", "common/runtime", "common/vendor"]
  ]
]);