// pages/myPage/promotion/team/member/member.js
const app = getApp()
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		ID: '', // 下级ID
		teamList:[], // 下级团队列表
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
		wx.setNavigationBarTitle({
			title: options.name + '的团队',
		})
		this.setData({
			ID: options.id
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
	// 获取下级团队信息
	getData() {
		let _self = this
		app.http.get(`${app.globalData.phpUrl}/app/app.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=commission.down.get_level`, {
			level: _self.data.ID,
			page: 1
		},true).then(res => {
			if(res.data.status===1){
				_self.setData({
					teamList:res.data.result
				})
				return false
			}
			console.log('获取下级团队',res)
		})
	},
})
