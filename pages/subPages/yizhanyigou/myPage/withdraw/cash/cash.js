// pages/myPage/withdraw/cash/cach.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allpayAccount: '', // 支付宝账号
    code: '', // 验证码
    codeText: '获取验证码', // 验证码文本
    information: '', // 用户信息
    type: 1, // 提现来源 1 佣金 2 其他 3 总代
    phone: '', // 处理过的手机号
    phoneNumber: '', // 手机号
    realName: '', // 真实姓名
    reset: true,
	withdraw:{}, // 佣金信息
	
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let number = wx.getStorageSync('personal').member_info.mobile
    number = number.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
    this.setData({
      realName: wx.getStorageSync('personal').member_info.realname,
      type: options.type,
      phone: number,
      phoneNumber: wx.getStorageSync('personal').member_info.mobile,
      allpayAccount: wx.getStorageSync('personal').member_info.zhifubao
    })
    this.getData()
	this.getAmountData()
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
  // 绑定code 验证码 值
  change(e) {
    let value = e.detail.value
    this.setData({
      code: value
    })
  },

  // 确定提现
  submit() {
    let _self = this

    if (this.data.code === '') {
      wx.showToast({
        title: '请输入验证码',
        icon: 'none'
      })
      return false
    }
    if (this.data.code.length < 4) {
      wx.showToast({
        title: '请输入四位数验证码',
        icon: 'none'
      })
      return false
    }
    let text = ''
    switch (this.data.type) {
      case '1':
        text = 'commission.applytb'
        break;
      case '2':
        text = 'member.withdraw.submit'
        break;
      default:
        text = 'abonus.log.apply'
    }
    let data = {
      type: 2,
      alipay: this.data.allpayAccount, // 支付宝账号
      alipay1: this.data.allpayAccount, // 重复支付宝账号
      realname: this.data.realName, // 真实姓名
      mobile: this.data.phoneNumber, // 手机号
      verifycode: this.data.code, // 验证码
    }
    wx.showLoading({
      title: '提交申请中...'
    })
    app.http.post(`${app.globalData.phpUrl}/app/app.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=${text} `,
      data).then(res => {
      if (res.data.status === 1) {
        setTimeout(() => {
          wx.navigateBack({
            delta: 1
          })
        }, 1000)
      } else {

        console.log(res)
        wx.showToast({
          title: res.data.result.message,
          icon: 'none'
        })
        wx.hideLoading()

      }
    })
  },
  // 获取提现信息
  getData() {
    let _self = this
    let text = ''
    switch (this.data.type) {
      case '1':
        text = 'commission.applytb'
        break;
      case '2':
        text = 'member.withdraw'
        break;
      default:
        text = 'abonus.log.apply'
    }
    app.http.get(`${app.globalData.phpUrl}/app/app.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=${text}`).then(
      res => {
        if (res.data.status === 1) {
          console.log(res)
          _self.setData({
            information: res.data.result
          })
          return false
        }
        console.log('获取提现信息', res)
      })
  },
  // 获取验证码
  getCode() {
    if (!this.data.reset) {
      return false
    }
    let _self = this
    wx.showLoading({
      title: '获取验证码中..'
    })
    app.http.post(`${app.globalData.phpUrl}/app/app.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=account.verifycode`, {
      mobile: _self.data.phoneNumber,
      temp: 'sms_bind'
    }).then(res => {
      wx.hideLoading()
      if (res.data.status === 1) {
        _self.vcTime()
      }
      wx.showToast({
        title: res.data.result.message,
        icon: 'none'
      })
    })
  },
  
  // 重新获取验证码
  vcTime() {
    let num = 60
    let _self = this
    _self.setData({
      codeText: `60s`,
      reset: false
    })
    let time = setInterval(function() {
      if (num < 2) {
        clearInterval(time)
        _self.setData({
          codeText: '获取验证码',
          reset: true,
        })
        return false
      }
      num--
      _self.setData({
        codeText: `${num}s`,
        reset: false
      })
    }, 1000)
  },
  
  // 获取金额信息
  getAmountData() {
    let _self = this
    app.http.get(`${app.globalData.phpUrl}/app/app.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=member.withdraw.log`).then(
      res => {
        if (res.data.status === 1) {
			let data = res.data.result
			data.set_commission.money = data.set_commission.money.split('.')
			data.set_abonus.money = data.set_abonus.money.split('.')
			data.set_shop.money = data.set_shop.money.split('.')
          _self.setData({
            amount: data
          })
        }
          return false
        console.log('获取金额信息', res)
      })
  }
})