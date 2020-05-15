// pages/myPage/service/solution/solution.js
var WxParse = require('../../../wxParse/wxParse.js');

const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
      articleID:0, // 文章ID
	  solutionHTML:null, // 文章HTML
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
        articleID:options.articleID
      })
	  this.getSolution()
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
  
  // 获取解决方案
  getSolution() {
  	let _self = this
  	app.http.get(`${app.globalData.phpUrl}/app/app.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=article`, {
  		aid: _self.data.articleID
  	}).then(res => {
  		if (res.data.status === 1) {
  			console.log(res)
  				WxParse.wxParse('solutionHTML', 'html', res.data.result.article.article_content, _self, 1)
  			return false
  		}
  		console.log('解决方案', res)
  	})
  }
})