// pages/myPage/other/set/set.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		phoneNumber: '', // 手机号
		alipayAccount: '' // 支付宝账号
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {

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
		this.setData({
			phoneNumber: wx.getStorageSync('personal').member_info.mobile,
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
	// 跳转到更换或绑定手机号
	jumpReplace() {
		if (this.data.phoneNumber === '') {
			wx.navigateTo({
				url: './replace/next/next?type=1'
			})
		} else {
			wx.navigateTo({
				url: '/subPackages/myPagemyPagemyPage/other/set/replace/replace'
			})
		}
	},
	// 跳转到支付宝
	jumpAlipay() {
		if (this.data.phoneNumber === '') {
			wx.showModal({
				title: '提示',
				content: '需先绑定手机号',
				success(res) {
					if (res.confirm) {
						wx.navigateTo({
							url: './replace/next/next?type=1'
						})
					} else if (res.cancel) {}
				}
			})
			return false
		}
		wx.navigateTo({
			url: '/subPackages/myPagemyPagemyPage/other/set/binding/binding'
		})
	},
	// 退出登录
	logout() {
		wx.showModal({
			title: '提示',
			content: '确定要退出吗',
			success(res) {
				if (res.confirm) {
					wx.clearStorageSync()
					wx.reLaunch({
						url: '/pages/login/login'
					})
				}
			}
		})
	}
})
