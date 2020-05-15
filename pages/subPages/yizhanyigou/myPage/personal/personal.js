// pages/myPage/personal/personal.js
const app = getApp()
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		information: {}, // 用户信息
		head: '',
		name: ''
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
		this.setData({
			information: wx.getStorageSync('personal').member_info,
			head: wx.getStorageSync('personal').member_info.avatar,
			name: wx.getStorageSync('personal').member_info.nickname,
		})
		console.log(this.data.information)
		console.log(this.data.name)
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

	// 修改个人头像昵称
	modifyPersonal() {

		let _self = this
		if (this.data.information.nickname === this.data.name && this.data.information.avatar === this.data.head) {
			wx.showToast({
				title: '没有修改的内容',
				icon: 'none'
			})
			return false
		}
		if (this.data.information.nickname === '') {
			wx.showToast({
				title: '请输入昵称',
				icon: 'none'
			})
			return false
		}
		wx.showLoading({
			title: '保存中...'
		})
		let filePath = _self.data.information.avatar
		if (this.data.information.avatar === this.data.head) {
			_self.postmodify(filePath)
			return false
		}
		wx.uploadFile({
			url: `${app.globalData.phpUrl}/app/app.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=util.uploader`, //仅为示例，非真实的接口地址
			filePath: filePath,
			name: 'file',
			header: {
				'Cookie': wx.getStorageSync('cookieLogin'),
				'yzyg': 'wxxcx',
				"Content-Type": "multipart/form-data"
			},
			success(res) {
				let data = JSON.parse(res.data)
				console.log(data.result)
				if (data.result.status === "success") {
					_self.postmodify(data.result.url)
					return false
				}
				wx.showToast({
					title: '图片上传失败',
					icon: 'none'
				})
			}
		})
	},

	// 更换头像
	changeHead() {
		let _self = this
		wx.chooseImage({
			count: 1,
			sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
			sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
			success: function(res) {
				console.log(res)
				_self.setData({
					'information.avatar': res.tempFilePaths[0]
				})
			},
		})
	},
	// 提交修改信息
	postmodify(url) {
		let _self = this
		app.http.post(`${app.globalData.phpUrl}/app/app.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=member.info.face`, {
			nickname: _self.data.information.nickname,
			avatar: url
		}).then(res => {
			wx.hideLoading()
			_self.getUserInformation()
			wx.showToast({
				title: '修改成功',
				icon: 'none'
			})
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
	// 获取个人信息
	getUserInformation() {
		let _self = this
		app.http.get(`${app.globalData.phpUrl}/app/app.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=member`).then(res => {
			if (res.data.status === 1) {
				wx.setStorage({
					key: 'personal',
					data: res.data.result,
				})
				_self.setData({
					information: wx.getStorageSync('personal').member_info,
					head: wx.getStorageSync('personal').member_info.avatar,
					name: wx.getStorageSync('personal').member_info.nickname,
				})
			}
		})
	},
})
