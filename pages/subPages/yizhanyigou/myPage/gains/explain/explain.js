// pages/myPage/gains/explain/explain.js
const app = getApp()
var WxParse = require('../../../wxParse/wxParse.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    aid: '', // 说明aid 11 今日 12 本月 13 上月 14 累计
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      aid: options.aid
    })
    let title = ''
    switch (this.data.aid) {
      case '11':
        title = '今日收益说明'
        break;
      case '12':
        title = '本月收益说明'
        break;
      case '13':
        title = '上月收益说明'
        break;
      default:
        title = '累计收益说明'
    }
    console.log(typeof this.data.aid)
    wx.setNavigationBarTitle({
      title: title
    })
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
  getData() {
    let _self = this
    app.http.get(`${app.globalData.phpUrl}/app/app.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=article`, {
      aid: _self.data.aid
    }).then(res => {
		if(res.data.status===1){
				WxParse.wxParse('explainHTML', 'html', res.data.result.article.article_content, _self, 1)
				return false
		}
      console.log('说明',res)
    })
  }
})