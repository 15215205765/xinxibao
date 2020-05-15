// pages/myPage/message/message.js
const app = getApp()
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		meassagesList: null, // 消息列表
		page: 1, // 页码
		totalPages: 0, // 总页码数
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
		this.getMessages()
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
		if (this.data.page >= this.data.totalPages) {
			return false
		}
		this.setData({
			page: this.data.page + 1
		})
		this.getMessages()
	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function() {

	},

	// 跳转到官方公告详情
	jumpDetails(e) {
		let ID = e.currentTarget.dataset.id
		wx.navigateTo({
			url: `./details/details?announcementID=${ID}`
		})
	},

	// 获取官方公告列表
	getMessages() {
		let _self = this
		app.http.get(`${app.globalData.phpUrl}/app/app.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=shop.notice.get_list`, {
			page:_self.data.page
		}, true).then(res => {
			if (res.data.status === 1) {
				console.log(res);
				_self.setData({
					meassagesList: res.data.result,
					page: res.data.result.pindex,
					totalPages: res.data.result.total_pages
				})
				return false
			}
			console.log('官方公告', res)
		})
	}
})
