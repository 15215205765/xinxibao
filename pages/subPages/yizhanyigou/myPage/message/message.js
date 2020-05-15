// pages/myPage/message/message.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    meassagesList: [], // 消息列表
	totalPages:0, // 总页面数
	page:1, // 页码
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getMessages(this.data.page)
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
		if(this.data.page>=this.data.totalPages){
			return false
		}
		this.setData({
			page:this.data.page+1
		})
		this.getMessages()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  // 获取消息列表
  getMessages(page) {
    let _self = this
    app.http.get(`${app.globalData.phpUrl}/app/app.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=member.message.get_list`, {
      page: _self.data.page,
    },true).then(res => {
      if (res.data.status === 1) {
		  let data = res.data.result
        _self.setData({
          meassagesList: _self.data.meassagesList.concat(data.list),
		  page:data.pindex,
		  totalPages:data.total_pages,
        })
        return false
      }
      console.log('消息列表', res)
    })
  }
})