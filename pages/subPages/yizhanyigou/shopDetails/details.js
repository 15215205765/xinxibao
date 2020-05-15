// pages/shopDetails/details.js.js
var WxParse = require('../wxParse/wxParse.js');
const app = getApp()
Page({

	/**
	 * 页面的初始数据
	 */
  data: {
    shopID: "567687666128", // 商品ID
    shopType: "J", // 商品来源 J 京东 P 拼多多
    activityid: '',
    is_yxk: '',
    iscollection: 0, // 商品是否被收藏
    shopDetails: {}, // 商品详情
    shopList: [], // 猜你喜欢商品
    bannerList: [], // 商品轮播图
    routerNum: -1,
    backTop: true, // 返回顶部
    purchaseText: '立即购买',
    capsuleHeight: app.globalData.capsuleHeight, // 头部标题高度 与胶囊对齐
    statusBarHeight: app.globalData.statusBarHeight, // 手机状态栏高度
    mid: 0, // 获取购买链接参数mid
    purchaseUrl: "", // 购买地址
    videoURl: "", // 商品视频地址
    mid: "", // 获取淘口令或者立即购买地址所需得参数
    page: 1, // 分页ID
    // invite: "AAAAAA", // 邀请ID
    invite: "NJNYEK", // 开发环境邀请码
    imgHTML: "", // 商品图片详情
    ambush: "", // 淘口令
    detailImg: [], // 拼多多商品详情
    detailsImages: [], // 商品详情图片
    imgDetails: true, // 商品图片详情不同数据格式
    current: 0,
  },

	/**
	 * 生命周期函数--监听页面加载
	 */
  onLoad: function (options) {
    console.log(options)
    this.getCollection()
    this.setData({
      shopID: options.id,
      shopType: options.type,
      is_yxk: options.is_yxk,
      activityid: options.activityid
    })
    wx.setStorage({
      key: 'invite_code',
      data: options.invite_code,
    })
    if (options.mid) {
      this.setData({
        mid: options.mid
      })
    }
    if (this.data.shopType === 'J') {
      this.setData({
        purchaseText: '领券去京东购买'
      })
    } else {
      this.setData({
        purchaseText: '领券去拼多多购买'
      })
    }
    var cookie = wx.getStorageSync('cookieLogin');
    if (!cookie) {
      wx.showToast({
        title: '请先登录',
      })
      wx.navigateTo({
        url: '/pages/mainPages/login/minLogin',
      })
    }
    this.getDetails() // 获取商品详情

    this.getPurchaseUrl() // 获取购买地址

    if (this.data.shopType === 'P') {
      this.getDetailsImg() // 获取拼多多商品详情图片
    }
    this.getShop() // // 获取猜你喜欢
    
  },

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
  onReady: function () {

  },

	/**
	 * 生命周期函数--监听页面显示
	 */
  onShow: function () {

  },

	/**
	 * 生命周期函数--监听页面隐藏
	 */
  onHide: function () {

  },

	/**
	 * 生命周期函数--监听页面卸载
	 */
  onUnload: function () {

  },

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
  onPullDownRefresh: function () {

  },

	/**
	 * 页面上拉触底事件的处理函数
	 */
  onReachBottom: function () {

  },
  // 获取滚动条当前位置
  onPageScroll: function (e) {
    if (e.scrollTop > 500) {
      this.setData({
        backTop: false,
        shopNavTop: true
      });
    } else {
      this.setData({
        backTop: true,
        shopNavTop: false
      });
    }
  },
	/**
	 * 用户点击右上角分享
	 */
  onShareAppMessage: function () {

  },
  // 收藏商品
  collectionGoods() {
    let _self = this
    let num = _self.data.iscollection
    app.http.post(
      `${app.globalData.phpUrl}/app/app.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=member.favorite.togglecollection`, {
        id: _self.data.shopID,
        iscollection: num,
        json_datas: JSON.stringify(_self.data.shopDetails),
      }, '加载中...').then(res => {
        if (res.data.status === 1) {
          if (res.data.result.iscollection) {
            _self.setData({
              iscollection: 0
            })
          } else {
            _self.setData({
              iscollection: 1
            })
          }
          return false
        }
        console.log('收藏失败', res)
      })
  },
  // 获取收藏列表
  getCollection() {
    let _self = this
    app.http.post(
      `${app.globalData.phpUrl}/app/app.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=member.favorite.get_listcolletion`, {
        page: 1
      }, '收藏中...').then(
        res => {
          if (res.data.status === 1) {
            let data = res.data.result.list
            data.forEach(item => {
              if (_self.data.shopID === item.goodsid) {
                _self.setData({
                  iscollection: 1
                })
              }
            })
            return false
          }
          console.log('收藏列表', res)
        })
  },
  // 获取商品详情
  getDetails() {
    wx.showLoading({
      title: '加载中',
    })
    let _self = this
    wx.request({
      url: `${app.globalData.javaUrl}/item_detail/apikey/quweihuimall/itemid/${this.data.shopID}/shoptype/${this.data.shopType}`,
      method: 'GET',
      success: res => {
        if (res.data.msg === "SUCCESS") {
          _self.setData({
            shopDetails: res.data.data
          })
          if (_self.data.shopDetails.taobao_image) {
            _self.setData({
              bannerList: _self.data.shopDetails.taobao_image.split(",")
            })
          } else {
            _self.setData({
              bannerList: _self.data.bannerList.concat(_self.data.shopDetails.itempic)
            })
          }
        }
        // 京东详情图片
        if (_self.data.shopDetails.detail_urls) {
          _self.setData({
            detailsImages: _self.data.shopDetails.detail_urls.split(",")
          })
        }
        setTimeout(function () {
          wx.hideLoading()
        }, 800)
      }
    })
  },
  // 获取商品购买地址
  getPurchaseUrl() {
    let id = wx.getStorageSync('personal').member_info.id || this.data.mid
    let _that = this
    wx.request({
      url: `${app.globalData.phpUrl}/app/app.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=shop.sunburn.createturlhl`,
      method: 'GET',
      data: {
        mid: id,
        itemid: _that.data.shopID,
        activityid: _that.data.shopDetails.activityid,
        shottype: _that.data.shopType,
        coupon_type: _that.data.is_yxk == 1 ? 1 : 2
      },
      success: (res) => {
        if (res.data.result.coupon_click_url) {
          this.setData({
            purchaseUrl: res.data.result.coupon_click_url.split('?')
          })
          return false
        }
        console.log('获取拼多多购买链接', res)
      },
    })
  },
  //获取多多详情图片 直接请求的网页
  getDetailsImg() {
    let _self = this
    wx.request({
      url: `https://mobile.yangkeduo.com/goods2.html?goods_id=${_self.data.shopID}`,
      method: 'GET',
      success: result => {
        let res = result.data
        let s = res.substring(res.indexOf('"detailGallery":'), res.indexOf(',"videoGallery":')).replace(
          '"detailGallery":', '');
        s = JSON.parse(s)
        console.log(s)
        this.setData({
          detailsImages: s
        })
      }
    })
  },
  // 获取猜你喜欢
  getShop() {
    wx.request({
      url: `${app.globalData.javaUrl}/get_similar_info/apikey/quweihuimall/itemid/${this.data.shopID}/back/50/min_id/${this.data.page}/shoptype/${this.data.shopType}`,
      method: "GET",
      success: (res) => {
        this.setData({
          shopList: this.data.shopList.concat(res.data.data),
          page: res.data.min_id
        })
      }
    })
  },
  // 轮播图下标
  swiperChange: function (e) {
    var that = this;


    that.setData({
      current: e.detail.current
    })
  },
  // 回到顶部
  goTop() {
    if (wx.pageScrollTo) {
      wx.pageScrollTo({
        scrollTop: 0,
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
  },
  // 猜你喜欢跳转商品详情
  jumpDetails(event) {
    app.shopDeatail(event)
  },

  // 返回首页
  backHome() {
    wx.navigateBack({
      delta: 100
    })
  },
  // 跳转商品购买链接
  jumpPurchase() {
    if (!wx.getStorageSync('cookieLogin')) {
      wx.showToast({
        title: '请先登录',
        icon: 'none',
        success() {
          setTimeout(() => {
            wx.reLaunch({
              url: '/pages/login/login',
            })
          }, 1000)
        }
      })
      return false
    }
    if (this.data.purchaseUrl === '') {
      wx.showToast({
        title: '抱歉，该优惠券已过期'
      })
      return false
    }
    let appId = ''
    let path = ''
    if (this.data.shopType === 'J') {
      appId = 'wx13e41a437b8a1d2e'
      path = `pages/jingfen_twotoone/item?spreadUrl=${this.data.purchaseUrl[0]}`
    } else {
      appId = 'wx32540bd863b27570'
      path = `package_a/welfare_coupon/welfare_coupon?${this.data.purchaseUrl[1]}`
    }
    console.log(path)
    wx.navigateToMiniProgram({
      appId: appId,
      path: path,
      envVersion: "release",
      success(res) {
        console.log(res)
      },
      fail(res) {

      }
    })
  },

  // 返回上一页
  back() {
    wx.navigateBack()
  }
})
