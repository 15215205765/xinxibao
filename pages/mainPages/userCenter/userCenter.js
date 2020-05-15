(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/mainPages/userCenter/userCenter"], {
    "1e43": function(e, n, o) {
      "use strict";
      (function(e) {
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var t = a(o("3099"));
        a(o("a81a"));

        function a(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }
        var i = function() {
            return o.e("components/template/tabBar").then(o.bind(null, "27e4"))
          },
          u = function() {
            return o.e("components/template/loadlogo").then(o.bind(null, "9976"))
          },
          l = function() {
            return o.e("components/template/follow").then(o.bind(null, "c771"))
          },
          r = function() {
            return o.e("components/template/PhoneMask").then(o.bind(null, "6173"))
          },
          s = {
            components: {
              TabBars: i,
              loadlogo: u,
              follow: l,
              PhoneMask: r
            },
            data: function() {
              return {
                show1: !1,
                mobilediv: 1,
                followTitleShow: !0,
                followShow: !1,
                followType: "0",
                memberInfo: {
                  nickname: ""
                },
                pinText: "获取验证码",
                show: !1,
                phone: "",
                smsCode: "",
                getSmsCode: "",
                textList: {},
                TextSubstitution: {},
                scollHeight: null,
                fullHeight: null,
                card: "",
                timeCount: 0,
                timeEnd: "",
                login: !0,
                loading: !0,
                phoneHeight: null,
                kfInfo: {},
                ptType: null,
                aa: !1,
                userCenterBackImg: null,
                nLogin: null
              }
            },
            onLoad: function(n) {
              var o = this;
              this.textList = e.getStorageSync("TextSubstitution"), n.show && (this.show = n.show), o.ptType = 2
            },
            onShow: function() {
              this.init(),this.memberCardHome();
            },
            mounted: function() {
              var n = this;
              e.getSystemInfo({
                success: function(e) {
                  n.phoneHeight = e.windowHeight + "px"
                }
              }), e.createSelectorQuery().select(".userCenterMain").boundingClientRect(function(o) {
                console.info("data", o), n.scollHeight = e.upx2px(1866) + "px"
              }).exec()
            },
            computed: {
              userImg: function() {
                return this.imageRoot + "userCenterImg.png"
              }
            },
            methods: {
              closePop1: function() {
                var e = this;
                e.show1 = !1
              },
              mobileBlur: function(n) {
                e.pageScrollTo({
                  scrollTop: 0,
                  duration: 0
                })
              },
              closeFollowTitle: function() {
                var e = this;
                e.followTitleShow = !1
              },
              closeFollowPop: function() {
                var e = this;
                e.followShow = !1
              },
              openQrShow: function() {
                var e = this;
                e.followShow = !0
              },
              afterSale: function() {
                t.default.navigationTo({
                  url: "pages/subPages/afterSale/index"
                })
              },
              memberCardHome: function () {
                var a = this;
                t.default._post_form("&p=halfcard&do=memberCardHome", e, function (e) {
                  console.log(e)
                  wx.setStorage({
                    key: 'halfcard',
                    data: e.data.info,
                  })
                  a.halfcard = e.data.info;
                }, function (t) {
                  console.info()
                });
                t.default._post_form("&p=attestation&do=getInfo", n, function (t) {
                  wx.setStorage({
                    key: 'renzheng',
                    data: t.data
                  })
                });
              },
              getPhoneNumber: function(n) {
                var o = this;
                console.log(n), "getPhoneNumber:ok" === n.detail.errMsg ? e.checkSession({
                  success: function() {
                    console.info("登陆有效");
                    var a = {
                      data: n.detail.encryptedData,
                      iv: n.detail.iv
                    };
                    t.default._post_form("&p=member&do=phoneDecrypt", a, function(n) {
                      var a = n.data.phone.slice(0, 3),
                        i = n.data.phone.slice(7, 11),
                        u = n.data.phone;
                      e.showModal({
                        title: "提示",
                        content: "确定绑定手机" + a + "****" + i + "?",
                        success: function(n) {
                          if (n.confirm) {
                            var a = {
                              mobile: u
                            };
                            t.default._post_form("&p=member&do=changeMobile", a, function(n) {
                              e.showToast({
                                icon: "none",
                                title: "绑定成功",
                                duration: 2e3
                              }), o.getMemberInfo()
                            }, function(n) {
                              e.showModal({
                                title: "友情提示",
                                content: n.data.message,
                                showCancel: !0,
                                success: function(n) {
                                  if (n.confirm) {
                                    var a = {
                                      mobile: u,
                                      mergeflag: 1
                                    };
                                    t.default._post_form("&p=member&do=changeMobile", a, function(n) {
                                      e.showToast({
                                        icon: "none",
                                        title: "修改成功",
                                        duration: 2e3
                                      }), e.setStorageSync("weliam_user_token", n.data.token), o.getMemberInfo()
                                    })
                                  } else n.cancel
                                }
                              })
                            })
                          } else n.cancel
                        }
                      })
                    })
                  },
                  fail: function() {
                    console.info("登陆失效"), t.default.navigationTo({
                      url: "pages/mainPages/login/minLogin"
                    })
                  }
                }) : t.default.showError("手机号绑定取消")
              },
              goAppLogin: function() {
                t.default.navigationTo({
                  url: "pages/mainPages/login/minLogin"
                })
              },
              init: function() {
                var n = this;
                n.getMemberInfo(), n.loading = !1, e.getStorage({
                  key: "weliam_user_token",
                  success: function(e) {
                    n.login = !0, n.getMemberInfo()
                  },
                  fail: function(e) {
                    n.memberInfo.avatar = n.imageRoot + "nLogin.png", n.userCenterBackImg = n.userImg, n.login = !1, n.memberInfo.halfcardflag = "--", n.memberInfo.credit2 = "--", n.memberInfo.credit1 = "--", n.memberInfo.collectnum = "--", n.memberInfo.news_total = "--", n.memberInfo.ellipsismoney = "--"
                  }
                }), n.KefuInfo()
              },
              go: function(e) {
                var a = this; 
                if (a.halfcard.levelid <= 6 && e == 'live/pages/anchor-goods/index') {
                  wx.showModal({
                    title: '温馨提示',
                    content: '请先升级VIP再添加商品',
                    showCancel: true,
                    cancelText: "取消",
                    cancelColor: "#000",
                    confirmText: "确定",
                    confirmColor: "#000",
                    success: function (res) {
                      console.log(res)
                      if (res.confirm) {
                        wx.navigateTo({
                          url: '/pages/mainPages/memberCard/getMembership/getMembership',
                        })
                      }
                    }
                  })
                } else {
                  t.default.navigationTo({
                    url: e
                  });
                }
                // t.default.navigationTo({
                //   url: e
                // })
              },
              KefuInfo: function() {
                var e = this,
                  n = {};
                t.default._post_form("&do=CustomerService", n, function(n) {
                  e.kfInfo = n.data
                })
              },
              goSigndesk: function() {
                t.default.navigationTo({
                  url: "pages/subPages/signdesk/index/index"
                })
              },
              goPrivate: function() {
                t.default.navigationTo({
                  url: "pages/subPages/homepage/private/private"
                })
              },
              gobalance: function() {
                t.default.navigationTo({
                  url: "pages/subPages/balance/balance"
                })
              },
              goCollection: function() {
                t.default.navigationTo({
                  url: "pages/subPages/mineCollection/mineCollection"
                })
              },
              goIntegralRecord: function() {
                t.default.navigationTo({
                  url: "pages/subPages/IntegralRecord/IntegralRecord"
                })
              },
              gokf: function() {
                console.info(11111111);
                var e = this;
                t.default.navigationTo({
                  url: e.kfInfo.url
                })
              },
              goCoupon: function() {
                t.default.navigationTo({
                  url: "pages/subPages/coupon/coupon"
                })
              },
              closePop: function() {
                var e = this;
                e.show = !1
              },
              goMemberCard: function() {
                var e = this;
                0 == e.memberInfo.halfcardflag ? e.card = "nhave" : e.card = "have", t.default.navigationTo({
                  url: "pages/mainPages/memberCard/getMembership/getMembership?card=" + e.card
                })
              },
              goPt: function() {
                var e = this;
                e.aa = !0
              },
              goSet: function() {
                t.default.navigationTo({
                  url: "pages/mainPages/userset/userset"
                })
              },
              close: function() {
                var e = this;
                e.show = !1
              },
              getMemberInfo: function() {
                var e = this,
                  n = {};
                t.default._post_form("&p=member&do=memberInfo", n, function(n) {
                  e.memberInfo = n.data, e.userCenterBackImg = n.data.bgimg, e.loading = !1, e.mobilediv = n.data.mobilediv
                })
              },
              orderList: function(e) {
                t.default.navigationTo({
                  url: "pages/subPages/orderList/orderList?type=" + e
                })
              },
              goAddress: function() {
                t.default.navigationTo({
                  url: "pages/subPages/receivingAddress/receivingAddress"
                })
              }
            }
          };
        n.default = s
      }).call(this, o("543d")["default"])
    },
    "79c5": function(e, n, o) {
      "use strict";
      o.r(n);
      var t = o("9d88"),
        a = o("9f14");
      for (var i in a) "default" !== i && function(e) {
        o.d(n, e, function() {
          return a[e]
        })
      }(i);
      o("84de");
      var u, l = o("f0c5"),
        r = Object(l["a"])(a["default"], t["b"], t["c"], !1, null, "3e529fd3", null, !1, t["a"], u);
      n["default"] = r.exports
    },
    "84de": function(e, n, o) {
      "use strict";
      var t = o("95dc"),
        a = o.n(t);
      a.a
    },
    "95dc": function(e, n, o) {},
    "9d88": function(e, n, o) {
      "use strict";
      var t, a = function() {
          var e = this,
            n = e.$createElement;
          e._self._c;
          e._isMounted || (e.e0 = function(n) {
            e.show1 = !0
          })
        },
        i = [];
      o.d(n, "b", function() {
        return a
      }), o.d(n, "c", function() {
        return i
      }), o.d(n, "a", function() {
        return t
      })
    },
    "9f14": function(e, n, o) {
      "use strict";
      o.r(n);
      var t = o("1e43"),
        a = o.n(t);
      for (var i in t) "default" !== i && function(e) {
        o.d(n, e, function() {
          return t[e]
        })
      }(i);
      n["default"] = a.a
    },
    f03e: function(e, n, o) {
      "use strict";
      (function(e) {
        o("f466");
        t(o("66fd"));
        var n = t(o("79c5"));

        function t(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }
        e(n.default)
      }).call(this, o("543d")["createPage"])
    }
  },
  [
    ["f03e", "common/runtime", "common/vendor"]
  ]
]);