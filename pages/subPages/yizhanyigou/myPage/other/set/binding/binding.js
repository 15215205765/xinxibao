// pages/myPage/personal/personal.js
const app = getApp()
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		information: {}, // 用户信息
		phone: '', // 加*号的手机号
		alipayAccount: '', // 支付宝账号
		name: '', // 真实姓名
		code: '', // 验证码
		codeText: '获取验证码', // 验证码文本
		reset: true, // 验证码时间
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
		let number = wx.getStorageSync('personal').member_info.mobile
		let data = wx.getStorageSync('personal').member_info
		if (data.zhifubao === '') {
			wx.setNavigationBarTitle({
				title: '绑定支付宝'
			})
		} else {
			wx.setNavigationBarTitle({
				title: '修改支付宝'
			})
		}
		number = number.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
		this.setData({
			information: data,
			phone: number,
			name: data.realname,
			alipayAccount: data.zhifubao
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
	// 绑定输入值
	change(e) {
		let type = e.currentTarget.dataset.type
		let value = e.detail.value
		switch (type) {
			case 'account':
				this.setData({
					alipayAccount: value
				})
				break;
			case 'name':
				this.setData({
					name: value
				})
				break;
			default:
				this.setData({
					code: value
				})
		}

	},

	// 提交修改信息
	postmodify(url) {
		if (this.data.account === '') {
			wx.showToast({
				title: '请输入支付宝账户',
				icon: 'none'
			})
			return false
		}
		if (this.data.name === '') {
			wx.showToast({
				title: '请输入姓名',
				icon: 'none'
			})
			return false
		}
		if (this.data.code === '') {
			wx.showToast({
				title: '请输入验证码',
				icon: 'none'
			})
			return false
		}
		this.postData()
	},
	postData() {
		wx.showLoading({
			title: '保存中...'
		})
		let _self = this
		let memberdata = []
		app.http.post(`${app.globalData.phpUrl}/app/app.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=member.info.submit`, {
			'memberdata[realname]': _self.data.name,
			'memberdata[zhifubao]': _self.data.alipayAccount,
			'memberdata[cash_mobile]': _self.data.information.mobile,
			verifycode: _self.data.code
		}).then(res => {
			wx.hideLoading()
			if (res.data.status === 1) {
				if(_self.data.alipayAccount!==''){
						wx.showToast({
						title: '修改成功'
					})
				}else{
						wx.showToast({
						title: '绑定成功'
					})
				}
			
				_self.getUserInformation()
			} else {
				wx.showToast({
					title: res.data.result.message,
					icon: 'none'
				})
			}


		})
	},
	// 昵称输入
	changeName(e) {
		let value = e.detail.value
		this.setData({
			'information.nickname': value
		})
		console.log(this.data.information['nickname'])
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
		app.http.post(`${app.globalData.phpUrl}/app/app.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=account.verifycode`, {
			mobile: _self.data.information.mobile,
			temp: 'sms_cash'
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
			codeText: `60s`,
			reset: false
		})
		let time = setInterval(function() {
			if (num < 2) {
				clearInterval(time)
				_self.setData({
					codeText: '重新获取验证码',
					reset: true,
				})
				return false
			}
			num--
			_self.setData({
				codeText: `${num}s`,
				reset: false
			})
		}, 1000)
	},
	// 获取个人信息
	getUserInformation() {
		let _self = this
		app.http.get(`${app.globalData.phpUrl}/app/app.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=member`).then(res => {
			if (res.data.status === 1) {
				wx.setStorage({
					key: 'personal',
					data: res.data.result,
				})
				wx.navigateBack({
					delta: 1
				})
			} else {
				console.log('个人信息获取失败', res)
			}
		})
	},
})
