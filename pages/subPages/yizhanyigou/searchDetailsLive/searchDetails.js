// pages/searchDetails/searchDetails.js
var _live = require("../../../../api/live.js")
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopName: '汽车', // 商品名称
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
  onLoad: function(options) {
    this.setData({
      shopName: options.shopName,
      lastTimeContent: options.shopName
    })
    console.log(options)
    this.getShop();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    // this.getInfo();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    this.getShop()
  },


  getInfo: function() {
    var e = this;

  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {},
  // 页面滑动监听
  onPageScroll: function(e) {
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
    if (this.data.shopName === '' && this.data.lastTimeContent == '') {
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
    var e = this;
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
          (0, _live.getLiveYzyg)(0).then(function(t) {

            e.setData({
              liveGoods: t.data.goods
            });
            res.data.data.forEach(item => {
              if (item.tkmoney === 0) {
                item.tkmoney = (
                  ((item.itemendprice * item.tkrates) / 100) *
                  0.4
                ).toFixed(2);
              } else {
                item.tkmoney = (item.tkmoney * 0.4).toFixed(2);
              }
            })
            var livegoods = t.data.goods;
            console.log(livegoods);
            var shopList = res.data.data;
            for (let i = 0; i < shopList.length; i++) {
              for (let k = 0; k < livegoods.length; k++) {
                if(livegoods[k]['type']=='J' || livegoods[k]['type']=='P'){
                  if (parseInt(shopList[i].itemid) == livegoods[k]['goods_id']) {
                    shopList[i].yixuanze = 1;
                  }
                }
                
              }
            }
            console.log(shopList);
            e.setData({
              shopList: e.data.shopList.concat(shopList),
              page: res.data.min_id
            })
          }).catch(function(t) {
            // return app.Tips({
            //   title: t
            // });
          });
        } else {
          console.log(res)
        }
        wx.hideLoading()
      },
    })
  },
  livechoose: function(e) {
    console.log(e)
    let a= this;
    let ID = e.currentTarget.dataset.array.itemid;
    let index = e.currentTarget.dataset.index;
    let pic = e.currentTarget.dataset.array.itempic;
    let title = e.currentTarget.dataset.array.itemtitle;
    let type = e.currentTarget.dataset.array.shoptype;
    let price = e.currentTarget.dataset.array.itemendprice;
    let invite_code = wx.getStorageSync('personal').member_info.invite_code;
    var data = {
      id: ID,
      pic: pic,
      title: title,
      type: type,
      invite_code: invite_code,
      price:price
    }
    _live.liveYzygGoods(data).then(function(t) {

      console.log(t);
     
      wx.showToast({
        title: t.data
      })
      if (t.data == '添加成功') {
        let list = a.data.shopList;
        console.log(index,list);
        list[index].yixuanze = 1;
        a.setData({
          shopList: list
        })
      }
    }).catch(function (t) {
      console.log(t);
      return app.Tips({
        title: t.data
      });
    });
  }
})