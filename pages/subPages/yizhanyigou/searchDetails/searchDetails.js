// pages/searchDetails/searchDetails.js
const app = getApp();
Page({

	/**
	 * 页面的初始数据
	 */
  data: {
    shopName: '', // 商品名称
    coupon: 0, // 1为只看有券商品
    page: 1, // 商品分页
    backTop: true, // 返回顶部图标
    shopList: [], // 商品列表
    shopType: "J", // 商品来源
    lastTimeContent: '', // 上一次搜索内容
    navbarList: [{ // 商品来源列表
      name: "京东",
      type: "J"
    },
    {
      name: "拼多多",
      type: "P"
    }
    ]
  },

	/**
	 * 生命周期函数--监听页面加载
	 */
  onLoad: function (options) {
    this.setData({
      shopName: options.shopName,
      lastTimeContent: options.shopName
    })
    console.log(options)
    this.getShop()
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
    this.getShop()
  },

	/**
	 * 用户点击右上角分享
	 */
  onShareAppMessage: function () { },
  // 页面滑动监听
  onPageScroll: function (e) {
    if (e.scrollTop > 600) {
      this.setData({
        backTop: false
      })
    } else {
      this.setData({
        backTop: true
      })
    }
  },
  // 返回顶部
  goTop() {
    app.goTop()
  },

  // 搜索商品
  searchContent() {
    if (this.data.shopName === '') {
      wx.showToast({
        title: '请输入搜索内容',
        icon: 'none',
        duration: 2000
      })
      return false
    }
    if (this.data.shopName === this.data.lastTimeContent) {
      return false
    }

    this.setData({
      shopList: [],
      page: 1,
      lastTimeContent: this.data.shopName
    })
    this.getShop()
    let data = wx.getStorageSync('historySearch') || []
    let same = false
    data.forEach(item => {
      if (item.keyword === this.data.shopName) {
        same = true
      }
    })
    if (!same) {
      if (data.length > 9) {
        data.shit()
      }
      data.push({
        keyword: this.data.shopName
      })
      wx.setStorageSync('historySearch', data)
    }
  },
  // 输入内容赋值
  getValue(e) {
    let value = e.detail.value
    this.setData({
      shopName: value
    })
  },
  // 切换商品来源
  changeType(e) {
    let type = e.currentTarget.dataset.type
    if (this.data.shopType === type) {
      return false
    }
    this.setData({
      shopType: type,
      page: 1,
      shopList: []
    })
    this.getShop()
  },

  // 只看有券商品
  onlyCoupon() {
    this.setData({
      page: 1,
      shopList: [],
    })
    if (this.data.coupon === 0) {
      this.setData({
        coupon: 1,
        shopList: [],
      })
    } else {
      this.setData({
        coupon: 0,
        shopList: [],
      })
    }
    this.getShop()
  },
  // 获取搜索商品
  getShop() {
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: `${getApp().globalData.javaUrl}/supersearch/apikey/quweihuimall/keyword/${encodeURIComponent(
        this.data.shopName
      )}/back/20/min_id/${
        this.data.page
        }/tb_p/1/sort/0/is_coupon/${this.data.coupon}/shoptype/${this.data.shopType}`,
      method: 'GET',
      data: {},
      success: (res) => {
        if (res.data.msg === 'SUCCESS') {
          let data = res.data.data
          data.forEach(item => {
            if (item.itemendprice % 1 === 0) {
              item.itemendprice = item.itemendprice + '.00'
            } else {
              item.itemendprice = Math.floor(item.itemendprice * 100) / 100
              item.itemendprice = item.itemendprice.toString().split('.')
              if (item.itemendprice[1].length === 1) {
                item.itemendprice = item.itemendprice[0] + '.' + item.itemendprice[1] + '0'
              } else {
                item.itemendprice = item.itemendprice[0] + '.' + item.itemendprice[1]
              }
            }
            if (item.itemprice % 1 === 0) {
              item.itemprice = item.itemprice + '.00'
            } else {
              item.itemprice = Math.floor(item.itemprice * 100) / 100
              item.itemprice = item.itemprice.toString().split('.')
              if (item.itemprice[1].length === 1) {
                item.itemprice = item.itemprice[0] + '.' + item.itemprice[1] + '0'
              } else {
                item.itemprice = item.itemprice[0] + '.' + item.itemprice[1]
              }
            }
            if (item.tkmoney === 0) {
              item.tkmoney = (
                ((item.itemendprice * item.tkrates) / 100) *
                0.4
              ).toFixed(2);
            } else {
              item.tkmoney = (item.tkmoney * 0.4).toFixed(2);
            }
          })
          this.setData({
            shopList: this.data.shopList.concat(data),
            page: res.data.min_id
          })
          console.log(this.data.shopList)
        } else {
          console.log(res)
        }
        wx.hideLoading()
      },
    })
  },
  changeTwoDecimal_f(x) {
    var f_x = parseFloat(x);
    if (isNaN(f_x)) {
      alert('function:changeTwoDecimal->parameter error');
      return false;
    }
    var f_x = Math.round(x * 100) / 100;
    var s_x = f_x.toString();
    var pos_decimal = s_x.indexOf('.');
    if (pos_decimal < 0) {
      pos_decimal = s_x.length;
      s_x += '.';
    }
    while (s_x.length <= pos_decimal + 2) {
      s_x += '0';
    }
    return s_x;
  },
  // 删除搜索内容
  removeContent() {
    this.setData({
      shopName: ''
    })
  },
  // 跳转商品详情
  jumpDetails(event) {
    app.shopDeatail(event)
  },
})
