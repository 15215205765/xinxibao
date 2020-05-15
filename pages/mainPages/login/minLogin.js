(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/mainPages/login/minLogin"], {
    "1d84": function(e, t, n) {
      "use strict";
      (function(e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var o = a(n("3099"));

        function a(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }

        function r(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              o = Object.keys(n);
            "function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), o.forEach(function(t) {
              i(e, t, n[t])
            })
          }
          return e
        }

        function i(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = n, e
        }
        var c = {
          data: function() {
            return {
              disabled: !1
            }
          },
          components: {},
          computed: {
            appInfo: function() {
              return this.$store.state.appInfo
            }
          },
          onLoad: function(e) {},
          onShow: function() {},
          mounted: function() {},
          methods: {
            cancelLogin: function() {
              e.navigateBack()
            },
            authorLogin: function(e) {
              var t = this,
                n = t.$store.state.clientType;
              if (t.disabled = !0, "2" === n && "getUserInfo:ok" !== e.detail.errMsg) return o.default.showError("登录失败,请重试"), t.disabled = !1, !1;
              t.userLogin("weixin", e.detail)
            },
            getLoginData: function(t, n) {
              return new Promise(function(o, a) {
                n.iv && n.encryptedData ? o(n) : e.getUserInfo({
                  withCredentials: !0,
                  complete: function(e) {
                    console.log(e), e.iv || "alipay" === t ? (!e.encryptedData && e.data && (e.encryptedData = e.data), o(e)) : a()
                  }
                })
              })
            },
            userLogin: function(t, n) {
              var a = this,
                r = o.default.getClientType(),
                i = {};
              e.showLoading({
                title: "正在登录"
              }), e.login({
                provider: t,
                scopes: "auth_user",
                success: function(c) {
                  i.code = c.code, i.head_id = e.getStorageSync("head_id"), a.getLoginData(t, n).then(function(e) {
                    "3" === r && (i = Object.assign(i, {
                      source: "3",
                      mode: "2",
                      encryptedData: e.encryptedData,
                      iv: e.iv
                    })), "7" === r && (i = Object.assign(i, {
                      nickName: e.userInfo.nickName || "",
                      avatarUrl: e.userInfo.avatarUrl
                    })), a.getUserInfo(i)
                  }).catch(function() {
                    a.disabled = !1, "9" === r ? e.showModal({
                      title: "登录失败",
                      content: "请点击确定允许授权后,重新登录",
                      success: function(t) {
                        t.confirm && e.openSetting({
                          success: function(e) {
                            e.authSetting["scope.userInfo"] && o.default.showError("授权成功,请重新登录")
                          }
                        })
                      }
                    }) : o.default.showError("登录失败,请重试")
                  })
                }
                }), e.login({
                  provider: n,
                  scopes: "auth_user",
                  success: function (u) {
                    var app = getApp();
                    i.code = u.code, a.getLoginData(n, t).then(function (e) {
                      "3" === a && (i = Object.assign(i, {
                        source: "3",
                        mode: "2",
                        encryptedData: e.encryptedData,
                        iv: e.iv
                      })), "7" === a && (i = Object.assign(i, {
                        nickName: e.userInfo.nickName || "",
                        avatarUrl: e.userInfo.avatarUrl
                      }));
                      wx.request({
                        url: `${app.globalData.phpUrl}/app/app.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=account.sns`,
                        method: 'POST',
                        header: {
                          yzyg: 'wxxcx',
                          "Content-Type": "application/x-www-form-urlencoded"
                        },
                        data: {
                          sns: "wa",
                          code: i.code,
                          sns_source: 'xxb',
                          invite_code: '',
                          avatar: e.userInfo.avatarUrl,
                          nickname: e.userInfo.nickName || "",

                        },
                        success(res) {
                          wx.setStorageSync('cookieLogin', res.header['Set-Cookie'].replace('path=/,', '').replace(',', ';'))
                          a.getUserInformation()
                          var invite_code = wx.getStorageSync('invite_code');
                          if (invite_code) {
                            a.bindAgent();
                          }

                          wx.hideLoading()
                          console.log(res.header['Set-Cookie'])
                        }
                      })
                    }).catch(function () {
                      o.disabled = !1, "9" === a ? e.showModal({
                        title: "登录失败",
                        content: "请点击确定允许授权后,重新登录",
                        success: function (n) {
                          n.confirm && e.openSetting({
                            success: function (e) {
                              e.authSetting["scope.userInfo"] && r.default.showError("授权成功,请重新登录");
                            }
                          });
                        }
                      }) : r.default.showError("登录失败,请重试");
                    });
                  }
                })
            },
            getUserInformation() {
              let _self = this
              var app = getApp();
              app.http.get(`${app.globalData.phpUrl}/app/app.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=member`).then(res => {
                if (res.data.status === 1) {
                  let data = res.data.result
                  let sum_total = '16.0'
                  if (sum_total.indexOf('.') === -1) {
                    data.sum_total = sum_total + '.00'
                  }
                  sum_total = sum_total.split('.')
                  if (sum_total[1]) {
                    if (sum_total[1].length === 1) {
                      data.sum_total = sum_total[0] + '.' + sum_total[1] + '0'
                    }
                  }
                  console.log(data.sum_total)
                  // _self.setData({
                  //   information: data,
                  //   personal: res.data.result.member_info
                  // })
                  // console.log(this.data.information)
                  wx.setStorage({
                    key: 'personal',
                    data: res.data.result,
                  })
                } else {
                  console.log('个人信息获取失败', res)
                }
              })
            },
            bindAgent: function () {
              var app = getApp();
              var invite_code = wx.getStorageSync('invite_code');
              app.http.post(`${app.globalData.phpUrl}/app/app.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=member.notice.bind_agent`, { agentid: invite_code }).then(res => {
                console.log(res)
              })

            },
            getUserInfo: function(t) {
              var n = this;
              o.default._post_form("&p=member&do=login", r({}, t), function(t) {
                console.log(t);
                var o = t.data.token;
                e.setStorageSync("weliam_user_token", o), n.disabled = !1, n.$store.commit("WXLOGIN", 1), n.navigateBack()
              }, !1, function() {
                e.hideLoading()
              })
            },
            navigateBack: function() {
              var t = getCurrentPages(),
                n = t[t.length - 2];
              e.getStorageSync("currentPage").options;
              o.default.removeCurrentPage(), "pages/mainPages/write/write" === n.route ? e.reLaunch({
                url: "/pages/mainPages/index/index"
              }) : e.navigateBack()
            }
          }
        };
        t.default = c
      }).call(this, n("543d")["default"])
    },
    "20df": function(e, t, n) {
      "use strict";
      var o = n("b96b"),
        a = n.n(o);
      a.a
    },
    "2df5": function(e, t, n) {
      "use strict";
      var o, a = function() {
          var e = this,
            t = e.$createElement;
          e._self._c;
          e._isMounted || (e.e0 = function(t) {
            e.disabled = !0
          })
        },
        r = [];
      n.d(t, "b", function() {
        return a
      }), n.d(t, "c", function() {
        return r
      }), n.d(t, "a", function() {
        return o
      })
    },
    "9e1f": function(e, t, n) {
      "use strict";
      (function(e) {
        n("f466");
        o(n("66fd"));
        var t = o(n("b6f4"));

        function o(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }
        e(t.default)
      }).call(this, n("543d")["createPage"])
    },
    b6f4: function(e, t, n) {
      "use strict";
      n.r(t);
      var o = n("2df5"),
        a = n("e8c7");
      for (var r in a) "default" !== r && function(e) {
        n.d(t, e, function() {
          return a[e]
        })
      }(r);
      n("20df");
      var i, c = n("f0c5"),
        u = Object(c["a"])(a["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], i);
      t["default"] = u.exports
    },
    b96b: function(e, t, n) {},
    e8c7: function(e, t, n) {
      "use strict";
      n.r(t);
      var o = n("1d84"),
        a = n.n(o);
      for (var r in o) "default" !== r && function(e) {
        n.d(t, e, function() {
          return o[e]
        })
      }(r);
      t["default"] = a.a
    }
  },
  [
    ["9e1f", "common/runtime", "common/vendor"]
  ]
]);