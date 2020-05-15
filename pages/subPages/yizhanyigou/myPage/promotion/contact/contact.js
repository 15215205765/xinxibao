// pages/myPage/promotion/contact/contact.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mobile: null, // 电话，
    weChat: null, // 微信号
    value: '', // 上级邀请码或手机号
    customerPhone: '', // 客服电话
    customerWeChat: '', // 客服微信

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getData()
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  // 获取上级联系方式数据

  getData() {
    app.http.get(`${app.globalData.phpUrl}/app/app.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=member.index.contact`).then(res => {
      if (res.data.status === 1) {
        this.setData({
          mobile: res.data.result.mobile,
          weChat: res.data.result.weixin,
          customerPhone: res.data.result._W.shopset.shop.phone,
          customerWeChat: res.data.result._W.shopset.shop.wxservice,
        })
      } else {
        console.log('获取联系失败', res)
      }
    })
  },

  // 绑定上级
  binding() {
    if (this.data.value === '') {
      wx.showToast({
        title: '请输入上级邀请码或手机号',
        icon: 'none'
      })
      return false
    }
    app.http.post(`${app.globalData.phpUrl}/app/app.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=member.notice.bind_agent`, {
      agentid: this.data.value
    }, true).then(res => {
      if (res.data.status === 1) {
        this.getData()
      }
      wx.showToast({
        title: res.data.result.message,
        icon: 'none'
      })
      console.log(res)
    })
  },
  // 手机号值
  changePhone(e) {
    console.log(e)
    this.setData({
      value: e.detail.value
    })
    console.log(this.data.value)
  },

  // 复制客服联系方式
  customerCopy(e) {
    console.log(e)
    let data = e.currentTarget.dataset.type
    switch (data) {
      case '1':
        data = this.data.customerWeChat
        break;
      case '2':
        data = this.data.customerPhone
        break;
      case '3':
        data = this.data.mobile
        break;
      default:
        data = this.data.weChat
    }
    console.log(data)
    wx.setClipboardData({
      data: data,
      success(res) {
        wx.getClipboardData({
          success(res) {
            console.log(res.data) // data
          },
          fail(res){
            console.log(res)
          }
        })
      }
    })
  }
})