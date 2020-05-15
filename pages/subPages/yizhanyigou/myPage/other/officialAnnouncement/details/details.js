// pages/myPage/other/officialAnnouncement/details/details.js
var WxParse = require('../../../../wxParse/wxParse.js');

const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    announcementHTMl:null, // 公告HTML内容
	  announcementID:'', // 公告ID
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

	this.setData({
    announcementID: options.announcementID
	})
    this.getMessages()
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  // 获取官方公告列表
  getMessages(page) {
    let _self = this
    app.http.get(`${app.globalData.phpUrl}/app/app.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=member.notice_info`, { id: _self.data.announcementID}).then(res => {
      if (res.data.status === 1) {
        WxParse.wxParse('announcementHTML', 'html', res.data.result.info.detail, _self, 1)
      
        return false
      }
      console.log('官方公告', res)
    })
  }
})