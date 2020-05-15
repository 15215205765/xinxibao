(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/mainPages/index/index"], {
    "29e3": function(a, t, e) {
      "use strict";
      var o, n = function() {
          var a = this,
            t = a.$createElement;
          a._self._c
        },
        i = [];
      e.d(t, "b", function() {
        return n
      }), e.d(t, "c", function() {
        return i
      }), e.d(t, "a", function() {
        return o
      })
    },
    "47c8": function(a, t, e) {
      "use strict";
      (function(a) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var o = n(e("3099"));
        n(e("9e9f"));

        function n(a) {
          return a && a.__esModule ? a : {
            default: a
          }
        }
        var i = a.createInnerAudioContext(),
          d = function() {
            return e.e("components/template/loadlogo").then(e.bind(null, "9976"))
          },
          s = function() {
            return e.e("components/template/diypages").then(e.bind(null, "14f2"))
          },
          r = function() {
            return e.e("components/template/advert").then(e.bind(null, "dc1e"))
          },
          g = function() {
            return e.e("components/template/tabBar").then(e.bind(null, "27e4"))
          },
          u = function() {
            return e.e("static/mpvue-wxparse/src/wxParse").then(e.bind(null, "65c3"))
          },
          c = function() {
            return e.e("components/page/pageComponents/Recommend_goods").then(e.bind(null, "ef24"))
          },
          l = function() {
            return e.e("components/template/follow").then(e.bind(null, "c771"))
          },
          p = function() {
            return e.e("components/template/redpacket").then(e.bind(null, "da4a"))
          },
          f = {
            data: function() {
              return {
                followTitleShow: !0,
                followShow: !1,
                followType: "0",
                loadlogo: !1,
                swiperI: 1,
                loading: !1,
                loadAgain: !1,
                isTabbars: !0,
                datas: {
                  basic: [],
                  adv: "",
                  page: {}
                },
                pageInfo: {},
                play_Audio: !1,
                diypagesData: [],
                richtext: {
                  imageProp: {
                    mode: "widthFix"
                  }
                },
                btngroup: {
                  backgroundColor: "#ffffff",
                  btnBordeRadius: "",
                  displayMode: "",
                  eachLineNum: "",
                  eachPageNum: "",
                  list: [],
                  indicatorDots: !0,
                  duration: 300,
                  btngroupHandleData: [],
                  swiperHeight: ""
                },
                bottomMenu: null
              }
            },
            components: {
              Loadlogo: d,
              diypages: s,
              Advert: r,
              TabBars: g,
              wxParse: u,
              recommendGoods: c,
              follow: l,
              redPacket: p
            },
            computed: {},
            onShow: function() {
              this.pageInfo && a.setNavigationBarTitle({
                title: this.pageInfo.title || ""
              })
            },
            created: function() {},
            mounted: function() {
              this.homePageInfo(), this.$nextTick(function() {
                this.getcurCityTime()
              })
            },
            methods: {
              getcurCityTime: function() {
                var t = this,
                  e = a.getStorageSync("agencyData"),
                  n = (new Date).getTime(),
                  i = a.getStorageSync("cityTimestamp"),
                  d = i ? n - i : "";
                if (d) {
                  var s = parseInt(d / 1e3 / 60 % 60);
                  s > 120 && o.default.getLocation().then(function(n) {
                    o.default.getAreaId(n, "", "", function(o) {
                      e.areaid !== o.data.areaid && a.showModal({
                        title: "定位到您在".concat(o.data.areaname),
                        content: "是否切换至该城市进行探索",
                        confirmText: "切换",
                        success: function(e) {
                          e.confirm && (a.setStorageSync("agencyData", o.data), t.$nextTick(function() {
                            t.getPagesData(o.data.aid), t.$refs.diypages.currentaidCity = o.data.areaname, a.setStorageSync("curLoction", n)
                          }))
                        }
                      })
                    }, !0)
                  })
                }
              },
              homePageInfo: function() {
                var t = this,
                  e = a.getStorageSync("agencyData");
                o.default.getAreaId(e, "", "", function(a) {
                  t.$nextTick(function() {
                    t.getPagesData(a.data.aid)
                  })
                })
              },
              closeFollowTitle: function() {
                var a = this;
                a.followTitleShow = !1
              },
              closeFollowPop: function() {
                var a = this;
                a.followShow = !1
              },
              openQrShow: function() {
                var a = this;
                a.followShow = !0
              },
              getPagesData: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                  e = this,
                  n = a.getStorageSync("curLoction"),
                  d = n.longitude || "",
                  s = n.latitude || "";
                o.default._post_form("&do=HomePage", {
                  aid: t,
                  lng: d,
                  lat: s
                }, function(t) {
                  if (0 === t.errno) {
                    e.datas.adv = t.data.adv && 0 !== t.data.adv.length ? t.data.adv : "", e.datas.page = t.data.page ? t.data.page : "", e.bottomMenu = t.data.menu, e.pageInfo = t.data.page, e.$store.commit("ISTABCONTRO", 1), t.data.page.title && a.setNavigationBarTitle({
                      title: t.data.page.title
                    }), t.data.page.music && (i.src = t.data.page.music);
                    var o = t.data.item,
                      n = [];
                    for (var d in o) n.push(o[d]);
                    for (var s in e.diypagesData = n, e.diypagesData) {
                      if ("menu" == e.diypagesData[s].id) {
                        e.diypagesData[s].btngroupData = {};
                        var r = {
                          list: [],
                          indicatorDots: !0,
                          duration: 300,
                          btngroupHandleData: [],
                          swiperHeight: ""
                        };
                        for (var g in r.backgroundColor = e.diypagesData[s].style.background, r.btnBordeRadius = e.diypagesData[s].style.navstyle, r.displayMode = e.diypagesData[s].style.showtype, r.eachLineNum = e.diypagesData[s].style.rownum, r.eachPageNum = e.diypagesData[s].style.pagenum, e.diypagesData[s].data) r.list.push(e.diypagesData[s].data[g]);
                        0 == e.diypagesData[s].style.showdot ? r.indicatorDots = !1 : r.indicatorDots = !0;
                        var u = "";
                        if (u = r.list.length > r.eachPageNum ? r.eachPageNum : r.list.length, r.swiperHeight = 87 * Math.ceil(u / r.eachLineNum) + 15, r.list && r.list.length > 0)
                          for (var c = Math.ceil(r.list.length / r.eachPageNum), l = 0; l < c; l++) {
                            for (var p = [], f = l * r.eachPageNum, y = f; y < r.eachPageNum * (l + 1) && y < r.list.length; y++) p.push(r.list[y]);
                            r.btngroupHandleData.push(p)
                          }
                        e.diypagesData[s].btngroupData = r
                      }
                      if ("picturew4" == e.diypagesData[s].id) {
                        var h = [];
                        for (var m in e.diypagesData[s].data) h.push(e.diypagesData[s].data[m]);
                        e.diypagesData[s].data = h
                      }
                      if ("picturew5" == e.diypagesData[s].id) {
                        var D = [];
                        for (var v in e.diypagesData[s].data) D.push(e.diypagesData[s].data[v]);
                        e.diypagesData[s].data = D
                      }
                      if ("pictures" == e.diypagesData[s].id) {
                        var b = [];
                        for (var w in e.diypagesData[s].data) b.push(e.diypagesData[s].data[w]);
                        e.diypagesData[s].data = b
                      }
                      if ("shop" == e.diypagesData[s].id) {
                        var P = [];
                        for (var S in e.diypagesData[s].data) {
                          var T = [];
                          for (var I in e.diypagesData[s].data[S].goods) "" !== e.diypagesData[s].data[S].goods[I] && ("active" == I ? (e.diypagesData[s].data[S].goods[I].css = "qiang", e.diypagesData[s].data[S].goods[I].tag = "抢") : "coupon" == I ? (e.diypagesData[s].data[S].goods[I].css = "hui", e.diypagesData[s].data[S].goods[I].tag = "券") : "fightgroup" == I ? (e.diypagesData[s].data[S].goods[I].css = "pin", e.diypagesData[s].data[S].goods[I].tag = "拼") : "groupon" == I ? (e.diypagesData[s].data[S].goods[I].css = "tuan", e.diypagesData[s].data[S].goods[I].tag = "团") : "halfcard" == I ? (e.diypagesData[s].data[S].goods[I].css = "ka", e.diypagesData[s].data[S].goods[I].tag = "卡") : "packages" == I ? (e.diypagesData[s].data[S].goods[I].css = "li", e.diypagesData[s].data[S].goods[I].tag = "礼") : "bargain" == I && (e.diypagesData[s].data[S].goods[I].css = "kan", e.diypagesData[s].data[S].goods[I].tag = "砍"), T.push(e.diypagesData[s].data[S].goods[I]));
                          e.diypagesData[s].data[S].goods = T, P.push(e.diypagesData[s].data[S])
                        }
                        e.diypagesData[s].shopArr = P
                      }
                      if ("banner" == e.diypagesData[s].id) {
                        var _ = e.diypagesData[s].width,
                          k = e.diypagesData[s].height,
                          x = _ / k,
                          N = a.getSystemInfoSync().windowWidth / x;
                        e.diypagesData[s].autoHeight = N
                      }
                    }
                    e.datas.basic = e.diypagesData
                  }
                }, !1, function() {
                  e.loadAgain = !0, e.loadlogo = !0
                })
              },
              playAudio: function() {
                var a = this,
                  t = !a.play_Audio;
                a.pageInfo.music;
                t && (i.play(), i.onPlay(function() {
                  console.log("开始播放")
                })), t || (i.pause(), i.onPause(function() {
                  console.log("暂停播放")
                })), a.play_Audio = t
              }
            },
            destroyed: function() {
              i.stop(), i.onStop(function() {
                console.log("页面跳转暂停播放")
              })
            },
            onPullDownRefresh: function() {
              a.stopPullDownRefresh()
            },
            onReachBottom: function(t) {
              a.$emit("isBottomMore"), a.$emit("tabisBottomMore")
            }
          };
        t.default = f
      }).call(this, e("543d")["default"])
    },
    "70d3": function(a, t, e) {},
    "78e8": function(a, t, e) {
      "use strict";
      var o = e("70d3"),
        n = e.n(o);
      n.a
    },
    "89fe": function(a, t, e) {
      "use strict";
      (function(a) {
        e("f466");
        o(e("66fd"));
        var t = o(e("da71"));

        function o(a) {
          return a && a.__esModule ? a : {
            default: a
          }
        }
        a(t.default)
      }).call(this, e("543d")["createPage"])
    },
    "8cec": function(a, t, e) {
      "use strict";
      e.r(t);
      var o = e("47c8"),
        n = e.n(o);
      for (var i in o) "default" !== i && function(a) {
        e.d(t, a, function() {
          return o[a]
        })
      }(i);
      t["default"] = n.a
    },
    da71: function(a, t, e) {
      "use strict";
      e.r(t);
      var o = e("29e3"),
        n = e("8cec");
      for (var i in n) "default" !== i && function(a) {
        e.d(t, a, function() {
          return n[a]
        })
      }(i);
      e("78e8");
      var d, s = e("f0c5"),
        r = Object(s["a"])(n["default"], o["b"], o["c"], !1, null, "37143f1b", null, !1, o["a"], d);
      t["default"] = r.exports
    }
  },
  [
    ["89fe", "common/runtime", "common/vendor"]
  ]
]);