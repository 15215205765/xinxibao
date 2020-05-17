(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/subPages/dealer/index/index"], {
    "3bad": function(e, t, a) {},
    "6abd": function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a("d554"),
        o = a.n(n);
      for (var i in n) "default" !== i && function(e) {
        a.d(t, e, function() {
          return n[e]
        })
      }(i);
      t["default"] = o.a
    },
    d554: function(e, t, a) {
      "use strict";
      (function(e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var n = o(a("3099"));

        function o(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }
        var i = function() {
            return a.e("components/template/loadlogo").then(a.bind(null, "9976"))
          },
          r = function() {
            return a.e("components/template/tabBar").then(a.bind(null, "27e4"))
          },
          s = {
            data: function() {
              return {
                wyPhone: "",
                wyName: "",
                wyCar: "",
                array: ["京", "沪", "津", "渝", "黑", "吉", "辽", "蒙", "冀", "新", "沪", "甘", "青", "陕", "宁", "豫", "鲁", "晋", "皖", "鄂", "湘", "苏", "川", "黔", "滇", "桂", "藏", "浙", "赣", "粤", "闽", "台", "琼", "港", "澳"],
                index: 0,
                array1: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
                index1: 0,
                array2: [],
                newArry: [],
                index2: 0,
                carId: "",
                seeYou: "",
                province: "京",
                letter: "A",
                setBackG: {
                  background: "red",
                  color: "white"
                },
                widthImg: {
                  height: "600upx"
                },
                centerMoH: {
                  height: "600rpx"
                },
                setBackW: {
                  background: "white",
                  color: "black"
                },
                shopImage: "",
                setShopShow: !1,
                setCarShow: !1,
                TextSubstitution: null,
                taxiType: null,
                taxipay: null,
                detalsData: null,
                loadlogo: !1,
                shopShow: !1,
                tool_list: [{
                  item_type: "total",
                  item_name: "收益明细",
                  item_icon: "/static/images/dealer_tool/total.png",
                  item_navType: "earnings",
                  show: !0
                }, {
                  item_type: "rank",
                  item_name: "排行榜",
                  item_icon: "/static/images/dealer_tool/rank.png",
                  item_navType: "rank",
                  show: !1
                }, {
                  item_type: "help",
                  item_name: "帮助说明",
                  item_icon: "/static/images/dealer_tool/help.png",
                  item_navType: "help",
                  show: !0
                }, {
                  item_type: "dealer",
                  item_name: "等级",
                  item_icon: "/static/images/dealer_tool/dealer.png",
                  item_navType: "level",
                  show: !1
                }, {
                  item_type: "erwei",
                  item_name: "收款二维码",
                  item_icon: "/static/images/dealer_tool/erweima.png",
                  item_navType: "erwei",
                  show: !1
                }],
                drshareInfo: {}
              }
            },
            components: {
              Loadlogo: i,
              TabBars: r
            },
            computed: {
              dealer_Info: function() {
                if (e.getStorageSync("TextSubstitution")) return e.getStorageSync("TextSubstitution")
              }
            },
            onShow: function() {},
            mounted: function() {
              this.getDealerInfo()
            },
            onLoad: function() {
              this.TextSubstitution = e.getStorageSync("TextSubstitution"), this.tool_list[3].item_name = this.TextSubstitution.fxstext + "等级"
            },
            methods: {
              cliShopFal: function() {
                this.setShopShow = !1
              },
              cliCarFal: function() {
                this.setCarShow = !1
              },
              submitForm: function() {
                var t = this,
                  a = this;
                if ("" == a.wyName) return e.showToast({
                  icon: "none",
                  title: "请输入正确姓名",
                  duration: 1e3
                }), !1;
                var o = /^[1][3,4,5,7,8][0-9]{9}$/;
                if (!o.test(a.wyPhone)) return e.showToast({
                  icon: "none",
                  title: "请输入正确手机号码",
                  duration: 1e3
                }), !1;
                var i = /^[0-9a-zA-Z]+$/;
                if (!i.test(a.wyCar)) return e.showToast({
                  icon: "none",
                  title: "请输入正确车牌号",
                  duration: 1e3
                }), !1;
                var r = {
                  drivername: a.wyName,
                  mobile: a.wyPhone,
                  plate1: a.province,
                  plate2: a.letter,
                  plate_number: a.wyCar,
                  cid: a.carId || a.newArry[0]
                };
                n.default._post_form("&p=taxipay&do=applyDriver", r, function(n) {
                  0 == n.errno && (a.setCarShow = !1, e.showToast({
                    title: "申请成功"
                  }), t.getDealerInfo())
                })
              },
              bindPickerChange: function(e) {
                this.index = e.target.value, this.province = this.array[this.index]
              },
              bindPickerChange1: function(e) {
                this.index1 = e.target.value, this.letter = this.array1[this.index1]
              },
              bindPickerChange2: function(e) {
                this.index2 = e.target.value, this.carId = this.newArry[this.index2]
              },
              setCarCli: function() {
                var e = this;
                e.setCarShow = !0, e.seeYou = 2
              },
              gongZcli: function() {
                var t = this;
                e.showLoading({}), t.setBackG.background = "red", t.widthImg.height = "500upx", t.setBackG.color = "white", t.setBackW.background = "white", t.setBackW.color = "black", t.centerMoH.height = "700rpx", n.default._post_form("&p=taxipay&do=driverQr", {}, function(a) {
                  t.shopImage = a.data.h5qr, e.hideLoading()
                })
              },
              wxCli: function() {
                var t = this;
                t.setBackG.background = "white", t.setBackG.color = "black", t.setBackW.background = "red", t.setBackW.color = "white", t.centerMoH.height = "700rpx", e.showLoading({}), n.default._post_form("&p=taxipay&do=driverQr", {}, function(a) {
                  t.shopImage = a.data.wxappqr, e.hideLoading()
                })
              },
              setShopCli: function() {
                var t = this;
                t.setShopShow = !0, t.seeYou = 1, t.widthImg.height = "350rpx", t.centerMoH.height = "600rpx", e.showLoading({}), n.default._post_form("&p=salesman&do=getSaleQr", {}, function(a) {
                  t.shopImage = a.data.imgurl, e.hideLoading()
                })
              },
              goStore: function() {
                n.default.navigationTo({
                  url: "pages/subPages/dealer/myStore/myStore"
                })
              },
              dealershareFc: function() {
                var t = this,
                  a = e.getStorageSync("userinfo");
                n.default.dealershareInfo(function(e) {
                  var n = {
                    title: e.data.title,
                    desc: e.data.desc,
                    imageUrl: e.data.img,
                    path: "pages/subPages/dealer/index/index?head_id=" + a.mid
                  };
                  t.drshareInfo = n
                })
              },
              getDealerInfo: function() {
                var e = this;
                n.default._post_form("&p=distribution&do=distributorInfo", {}, function(t) {
                  if (0 === t.errno)
                    if (t.data.type && 1 === t.data.type) n.default.navigationTo({
                      url: "pages/subPages/dealer/apply/apply",
                      navType: "rediRect"
                    });
                    else {
                      var a = [],
                        o = [];
                      t.data.taxicom && t.data.taxicom.forEach(function(e) {
                        a.push(e.name), o.push(e.id)
                      }), e.setData({
                        newArry: o,
                        array2: a,
                        detalsData: t.data,
                        shopShow: !!t.data.shop_switch && 1 === t.data.shop_switch && !!t.data.shop_total && t.data.shop_total > 0,
                        loadlogo: !0
                      }), 1 == e.detalsData.taxiqr && (e.tool_list[4].show = !0), t.data.taxipay ? e.setData({
                        taxipay: t.data.taxipay,
                        taxiType: 1
                      }) : e.setData({
                        taxiType: 0
                      }), 0 == t.data.show_lv ? e.tool_list[3].show = !1 : e.tool_list[3].show = !0, 0 == t.data.rankshow ? e.tool_list[1].show = !1 : e.tool_list[1].show = !0, e.dealershareFc()
                    }
                }, !1, function() {})
              },
              navgateTo: function(e, t) {
                var a = this;
                switch (t) {
                  case "contactway":
                    n.default.navigationTo({
                      url: "pages/subPages/dealer/contactway/contactway"
                    });
                    break;
                  case "withdraw":
                    n.default.navigationTo({
                      url: "pages/subPages/dealer/withdraw/withdraw"
                    });
                    break;
                  case "setshop":
                    n.default.navigationTo({
                      url: "pages/subPages/dealer/setshop/setshop"
                    });
                    break;
                  case "earnings":
                    n.default.navigationTo({
                      url: "pages/subPages/dealer/earnings/earnings"
                    });
                    break;
                  case "rank":
                    n.default.navigationTo({
                      url: "pages/subPages/dealer/rank/rank"
                    });
                    break;
                  case "level":
                    n.default.navigationTo({
                      url: "pages/subPages/dealer/level/level"
                    });
                    break;
                  case "client":
                    n.default.navigationTo({
                      url: "pages/subPages/dealer/client/client"
                    });
                    break;
                  case "help":
                    n.default.navigationTo({
                      url: "pages/subPages/dealer/richtext/setrich"
                    });
                    break;
                  case "erwei":
                    a.gongZcli(), a.setShopShow = !0, a.seeYou = 2;
                    break;
                  case "gener":
                    n.default.navigationTo({
                      url: "pages/subPages/dealer/gener/gener"
                    });
                    break;
                  case "poster":
                    n.default.navigationTo({
                      url: e.currentTarget.dataset.url
                    });
                    break;
                  case "shops":
                    n.default.navigationTo({
                      url: e.currentTarget.dataset.url
                    });
                    break
                }
              }
            },
            onShareAppMessage: function(e) {
              return this.drshareInfo
            }
          };
        t.default = s
      }).call(this, a("543d")["default"])
    },
    d9a3: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a("f508"),
        o = a("6abd");
      for (var i in o) "default" !== i && function(e) {
        a.d(t, e, function() {
          return o[e]
        })
      }(i);
      a("db36");
      var r, s = a("f0c5"),
        l = Object(s["a"])(o["default"], n["b"], n["c"], !1, null, "2d7151b8", null, !1, n["a"], r);
      t["default"] = l.exports
    },
    db36: function(e, t, a) {
      "use strict";
      var n = a("3bad"),
        o = a.n(n);
      o.a
    },
    f0ef: function(e, t, a) {
      "use strict";
      (function(e) {
        a("f466");
        n(a("66fd"));
        var t = n(a("d9a3"));

        function n(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }
        e(t.default)
      }).call(this, a("543d")["createPage"])
    },
    f508: function(e, t, a) {
      "use strict";
      var n, o = function() {
          var e = this,
            t = e.$createElement;
          e._self._c
        },
        i = [];
      a.d(t, "b", function() {
        return o
      }), a.d(t, "c", function() {
        return i
      }), a.d(t, "a", function() {
        return n
      })
    }
  },
  [
    ["f0ef", "common/runtime", "common/vendor"]
  ]
]);