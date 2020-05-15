
require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
var _wxpage$A, _util = require("./lib/utils/util.js"), _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    default: e
  };
}

function _defineProperty(e, t, i) {
  return t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i, e;
}

var config = require("./siteinfo.js"), wxpage = require("lib/wxpage");
const http = require('./utils/request.js')
const utils = require('./utils/utils.js')
wxpage.A((_defineProperty(_wxpage$A = {
  config: {
    route: ["pages/$page", "pages/$page"]
  },
  onLaunch: function (e) {
    var l = this, t = this;
    if (e.query.hasOwnProperty("scene")) switch (e.scene) {
      case 1047:
      case 1048:
      case 1049:
        t.globalData.code = e.query.scene;
        break;

      case 1001:
        t.globalData.spid = e.query.scene;
    }
    this.getCapsule()
    // 展示本地存储能力
    wx.request({
      url: `${this.globalData.javaUrl}/super_classify`, // 获取分类列表
      data: {
        apikey: "quweihuimall",
        cid: 0
      },
      success: function (res) {
        console.log(res)
        var data = res.data.general_classify
        wx.setStorage({
          key: 'classify',
          data: data
        })
      }
    })
    wx.getSystemInfo({
      success: function (e) {
        var t = e.screenHeight / e.screenWidth;
        l.globalData.navHeight = e.statusBarHeight * (750 / e.windowWidth) + 97, l.globalData.winHeight = e.windowHeight,
          l.globalData.screenTotalH = 750 * t;
        var i = e.model, a = e.screenHeight, n = e.statusBarHeight, o = /iphone x/i.test(i), r = /iPhone11/i.test(i) && 812 === a, s = o || r, u = n;
        l.globalData.deviceType = s ? "iPhone-X" : "", l.globalData.statusBarHeight = u;
      },
      fail: function (e) { }
    });
    var i = wx.getUpdateManager();
    i.onCheckForUpdate(function (e) { }), i.onUpdateReady(function () {
      wx.showModal({
        title: "更新提示",
        content: "已更新至最新版本，是否重启应用？",
        success: function (e) {
          e.confirm && i.applyUpdate();
        }
      });
    }), i.onUpdateFailed(function () {
      return t.Tips({
        title: "新版本下载失败"
      });
    });
  },
  Tips: function (e, t) {
    return _util2.default.Tips(e, t);
  },
  onShow: function (e) {
    var t = _util2.default.getUrlParams(decodeURIComponent(e.query.scene));
    t.spid && (this.globalData.spid = t.spid), e.spid && (app.globalData.spid = e.spid);
  },
  onHide: function () { },
  onError: function (e) {
    console.log(e);
  },
  globalData: {
    navHeight: 0,
    routineStyle: "#ffffff",
    openPages: "",
    deviceType: "",
    spid: 0,
    code: 0,
    urlImages: "",
    static_url: _util2.default.getDomain(config.siteroot) + "addons/shimmer_liveshop/static/wxapp/",
    url: _util2.default.getDomain(config.siteroot) + "addons/shimmer_liveshop/api/" + config.uniacid + "/2",
    statusBarHeight: 0,
    token: "",
    isLog: !1,
    expiresTime: 0,
    MyMenus: [],
    userInfo: {},
    loginType: "routine",
    userInfo: null,
    phpUrl: 'https://yzyg.cqyanyu.com.cn', // php 线上接口地址 
    javaUrl: 'https://haodanku.shuyu.cqyanyu.com.cn', // java 线上接口地址
    purchaseUrl: '', // 商品立即购买地址
    statusBarHeight: wx.getSystemInfoSync()['statusBarHeight'], //手机状态栏高度
    capsuleHeight: 0, // 计算胶囊位置
  },
  goTop: function () {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    })
  },
  // 跳转商品详情
  shopDeatail(event) {
    let ID = event.currentTarget.dataset.id; // navbar 下标
    let type = event.currentTarget.dataset.type;
    console.log(type, ID)
    wx.navigateTo({
      url: `/pages/subPages/yizhanyigou/shopDetails/details?id=${ID}&type=${type}`
    })
  },
  // 获取胶囊位置信息
  getCapsule() {
    let capsule = wx.getMenuButtonBoundingClientRect()
    console.log(capsule);
    this.globalData.capsuleHeight = capsule.height + (capsule.top - this.globalData.statusBarHeight) * 2
    console.log(this.globalData.capsuleHeight);
  },
  http: {
    get: http.req, // GET请求
    post: http.post, // POST请求
  },

  jump: utils.throttle, // 跳转节流
  debounce: utils.debounce,
  siteInfo: require("siteinfo.js")
}, "Tips", function (e, t) {
  return _util2.default.Tips(e, t);
}), _defineProperty(_wxpage$A, "help", function () {
  return _util2.default.$h;
}), _defineProperty(_wxpage$A, "SplitArray", function (e, t) {
  return _util2.default.SplitArray(e, t);
}), _defineProperty(_wxpage$A, "getDomain", function () {
  return _util2.default.getDomain(config.siteroot);
}), _wxpage$A));