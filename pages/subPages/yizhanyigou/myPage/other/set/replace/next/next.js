// pages/myPage/other/set/replace/next/next.js
const app = getApp()
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		phoneNumber: '', // 手机号
		inputSwitch: false,
		phoneText: '手机号'
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
		if (!options.type) {
			this.setData({
				phoneText: '新手机号'
			})
			wx.setNavigationBarTitle({
				title: '更换手机号'
			})
		} else {
			wx.setNavigationBarTitle({
				title: '绑定手机号'
			})
		}
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
	getCode() {
		let _self = this
		let number = wx.getStorageSync('personal').member_info.mobile
		if (this.data.phoneNumber === '') {
			wx.showToast({
				title: '手机号不能为空',
				icon: 'none'
			});
			return false
		}
		if (number === this.data.phoneNumber) {
			wx.showToast({
				title: '输入手机号码已绑定',
				icon: 'none'
			})
			return false
		}
		if (!(/^1([358][0-9]|4[579]|66|7[0135678]|9[89])\d{8}$/.test(this.data.phoneNumber))) {
			wx.showToast({
				title: '手机号码有误',
				icon: 'none'
			});
			return false
		}
		app.http.post(
			`${app.globalData.phpUrl}/app/app.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=account.verifycode`, {
				mobile: _self.data.phoneNumber,
				temp: 'sms_bind'
			}).then(res => {
			wx.showToast({
				title: res.data.result.message,
				icon: 'none'
			})
			if (res.data.status === 1) {
				wx.navigateTo({
					url: `/subPackages/myPagemyPagemyPage/other/set/replace/lastReplace/replace?phone=${_self.data.phoneNumber}`,
				})
			}

		})
	},
	// 赋值手机号
	assignmentCode(e) {
		let value = e.detail.value
		this.setData({
			phoneNumber: value
		})
		if (this.data.phoneNumber.length == 11) {
			this.setData({
				inputSwitch: true
			})
		} else {
			this.setData({
				inputSwitch: false
			})
		}
	},
})
