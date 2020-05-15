// pages/myPage/withdraw/withdraw.js
const app = getApp()
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		withdraw: [], // 可提佣金详情
		alipayAccount: '', // 支付宝账号
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function() {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function() {
		this.getData()
		this.setData({
			alipayAccount: wx.getStorageSync('personal').member_info.zhifubao
		})
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

	// 调转到绑定支付宝
	bingdAlipayAccount() {
		wx.showModal({
			title: '提示',
			confirmText: '前往绑定',
			confirmColor: '#07c160',
			cancelColor: '#07c160',
			content: '请绑定支付宝账号',
			success(res) {
				if (res.confirm) {
					wx.navigateTo({
            url: '/pages/subPages/yizhanyigou/myPage/other/set/binding/binding'
					})
				}
			},
		})
	},
	// 跳转到提现
	jumpCash(e) {
		// 判断用户有没有绑定支付宝 
		if (this.data.alipayAccount === '') {
			this.bingdAlipayAccount()
			return false
		}
		// 判断是否可以提现
		let have = e.currentTarget.dataset.have
		if (have) {
			let type = e.currentTarget.dataset.type
			wx.navigateTo({
				url: `./cash/cash?type=${type}`
			})
		}
		//     let type = e.currentTarget.dataset.type
		// wx.navigateTo({
		//   url: `./cash/cash?type=${type}`
		// })
	},
	// 获
	getData() {
		let _self = this
		app.http.get(`${app.globalData.phpUrl}/app/app.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=member.withdraw.log`).then(
			res => {
				if (res.data.status === 1) {
					_self.setData({
						withdraw: res.data.result
					})
					return false
				}
				console.log('可以佣金', res)
			})
	}
})
