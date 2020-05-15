// pages/myPage/promotion/invite/invite.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
      this.getUserInformation()
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
    console.log('kafj')
      return {
        title: '一站易购，汇集京东、拼多多大平台的所有优惠券商品，让你实现一站式购物，省钱又省事。',
         path: '/pages/index/index',
        imageUrl:'http://oss.yigou.cqyanyu.com.cn/images/2/2019/02/U407cPVYED347VP3nIiYJP0vVvdV0g.jpg',
        success: function (res) {
          // 转发成功
          wx.showToast({
            title: "转发成功",
            icon: 'success',
            duration: 2000
          })
          console.log(res)
        },
        fail: function (res) {
          // 转发失败
        }
      }
  },

  // 海报邀请
  jumpPoster() {
      wx.navigateTo({
        url: '/subPackages/myPagemyPagemyPage/promotion/poster/poster',
      })
  },
  // 获取个人信息
  getUserInformation() {
    let _self = this
    app.http.get(`${app.globalData.phpUrl}/app/app.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=member`).then(res => {
      console.log(res)
    })
  },
})