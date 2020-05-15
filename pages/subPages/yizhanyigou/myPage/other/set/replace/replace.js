// pages/myPage/other/set/replace/replace.js
const app = getApp()
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		phoneNumber: '', // 手机号码
		code: '', // 验证码
		codeText: '获取验证码', // 倒计时文字
		reset: true,
		timer: '', // 定时器
		inputSwitch: false, // 是否可以点击下一步
	},
	
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
		this.setData({
			phoneNumber: wx.getStorageSync('personal').member_info.mobile
		})
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
		this.setData({
			code: '',
			// codeText:'获取验证码'
		})
		// clearInterval(this.data.timer)
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

	// 下一步

	next() {
		let _self = this
		if (this.data.code === '') {
			wx.showToast({
				title: '请输入验证码',
				icon: 'none'
			})
			return false
		}
		wx.showLoading({
			title: '验证验证码中..'
		})
		app.http.post(
			`${app.globalData.phpUrl}/app/app.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=member.bind.bind_before_verifycode`, {
				mobile: _self.data.phoneNumber,
				verifycode: _self.data.code
			}).then(res => {
			if (res.data.status === 1) {
				wx.navigateTo({
					url: `/subPackages/myPagemyPagemyPage/other/set/replace/next/next?phone=${_self.data.phoneNumber}`,
				})
			}
			wx.showToast({
				title: res.data.result.message,
				icon: 'none'
			})
		})
	},

	// 赋值验证码
	assignmentCode(e) {
		let value = e.detail.value
		this.setData({
			code: value
		})
		if (this.data.code.length == 4) {
			this.setData({
				inputSwitch: true
			})
		} else {
			this.setData({
				inputSwitch: false
			})
		}
	},
	// 获取验证码
	getCode() {
		if (!this.data.reset) {
			return false
		}
		let _self = this
		wx.showLoading({
			title: '获取验证码中..'
		})
		app.http.get(`${app.globalData.phpUrl}/app/app.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=account.verifycode`, {
			mobile: _self.data.phoneNumber,
			temp: 'sms_bind'
		}).then(res => {
			wx.hideLoading()
			if (res.data.status === 1) {
				_self.vcTime()
			}
			wx.showToast({
				title: res.data.result.message,
				icon: 'none'
			})
		})
	},

	// 重新获取验证码
	vcTime() {
		let num = 60
		let _self = this
		_self.setData({
			codeText: `60s后可重新获取`,
			reset: false
		})
		this.setData({
			timer: setInterval(function() {
				if (num < 2) {
					clearInterval(this.data.timer)
					_self.setData({
						codeText: '重新获取验证码',
						reset: true,
					})
					return false
				}
				num--
				_self.setData({
					codeText: `${num}s后可重新获取`,
					reset: false
				})
			}, 1000)
		})
	}
})
